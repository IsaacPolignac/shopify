"""Read Finary's session cookies straight out of a local Chromium browser.

Making someone hunt through the Network tab for the right request is asking
them to do the tool's job. The browser already stores these cookies on disk;
this module reads them.

Scope is deliberately narrow: only hosts ending in ``finary.com`` are ever
selected, and nothing is written back to the browser. Values are decrypted in
memory and go straight into the OS keychain like any other imported session.

On macOS the decryption key lives in the login keychain, so the first run
raises a system prompt asking to allow access — that consent is the point.
"""

from __future__ import annotations

import shutil
import sqlite3
import subprocess
import sys
import tempfile
from dataclasses import dataclass
from pathlib import Path

from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

#: Chromium's fixed KDF parameters for cookie encryption. Not secrets — they
#: are compile-time constants in the browser.
_SALT = b"saltysalt"
_IV = b" " * 16
_ITERATIONS_MACOS = 1003
_ITERATIONS_LINUX = 1
#: Chromium's hardcoded fallback password on Linux when no keyring is present.
_LINUX_FALLBACK_PASSWORD = b"peanuts"


class ChromeError(RuntimeError):
    """Cookies could not be read. Message is safe to show the user."""


@dataclass(frozen=True)
class Browser:
    name: str
    #: Profile root, relative to the user's home directory.
    macos_dir: str
    linux_dir: str
    #: Keychain service/account holding the encryption key on macOS.
    keychain_service: str


SUPPORTED = (
    Browser(
        "Chrome",
        "Library/Application Support/Google/Chrome",
        ".config/google-chrome",
        "Chrome Safe Storage",
    ),
    Browser(
        "Brave",
        "Library/Application Support/BraveSoftware/Brave-Browser",
        ".config/BraveSoftware/Brave-Browser",
        "Brave Safe Storage",
    ),
    Browser(
        "Edge",
        "Library/Application Support/Microsoft Edge",
        ".config/microsoft-edge",
        "Microsoft Edge Safe Storage",
    ),
    Browser(
        "Chromium",
        "Library/Application Support/Chromium",
        ".config/chromium",
        "Chromium Safe Storage",
    ),
)


def _profile_root(browser: Browser) -> Path | None:
    home = Path.home()
    relative = browser.macos_dir if sys.platform == "darwin" else browser.linux_dir
    root = home / relative
    return root if root.is_dir() else None


def find_cookie_databases() -> list[tuple[Browser, Path]]:
    """Locate every Chromium cookie database on this machine.

    Profiles are enumerated rather than assumed: someone signed into Finary
    under "Profile 2" is not an edge case.
    """
    found: list[tuple[Browser, Path]] = []
    for browser in SUPPORTED:
        root = _profile_root(browser)
        if root is None:
            continue
        # Cookies live under the profile dir; newer builds nest them in Network/.
        for pattern in ("*/Cookies", "*/Network/Cookies"):
            for path in sorted(root.glob(pattern)):
                if path.is_file():
                    found.append((browser, path))
    return found


def _encryption_key(browser: Browser) -> bytes:
    """Fetch and stretch the browser's cookie encryption key."""
    if sys.platform == "darwin":
        try:
            raw = subprocess.run(
                [
                    "security",
                    "find-generic-password",
                    "-w",
                    "-s",
                    browser.keychain_service,
                    "-a",
                    browser.name,
                ],
                capture_output=True,
                text=True,
                timeout=60,
            )
        except (OSError, subprocess.TimeoutExpired) as exc:
            raise ChromeError(f"Accès au trousseau impossible : {exc}") from exc
        if raw.returncode != 0:
            raise ChromeError(
                f"Clé de chiffrement de {browser.name} introuvable dans le "
                "trousseau. Si une fenêtre d'autorisation est apparue, il faut "
                "cliquer « Autoriser » (ou « Toujours autoriser »)."
            )
        password = raw.stdout.strip().encode()
        iterations = _ITERATIONS_MACOS
    else:
        # Linux: the keyring-backed key is best-effort; Chromium falls back to
        # a fixed password when no keyring is available, and so do we.
        password = _LINUX_FALLBACK_PASSWORD
        iterations = _ITERATIONS_LINUX

    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA1(), length=16, salt=_SALT, iterations=iterations
    )
    return kdf.derive(password)


def _decrypt(encrypted: bytes, key: bytes) -> str:
    """Decrypt one cookie value, tolerating Chromium's format revisions."""
    if not encrypted:
        return ""
    # Unencrypted values (rare, older profiles) carry no version prefix.
    if encrypted[:3] not in (b"v10", b"v11"):
        try:
            return encrypted.decode()
        except UnicodeDecodeError:
            return ""

    decryptor = Cipher(algorithms.AES(key), modes.CBC(_IV)).decryptor()
    padded = decryptor.update(encrypted[3:]) + decryptor.finalize()
    if not padded:
        return ""

    # Strip PKCS#7 padding.
    pad = padded[-1]
    if 0 < pad <= 16:
        padded = padded[:-pad]

    # Chrome 130+ prefixes the plaintext with a 32-byte SHA-256 of the domain.
    for candidate in (padded, padded[32:]):
        try:
            text = candidate.decode()
        except UnicodeDecodeError:
            continue
        if text.isprintable() or not text:
            return text
    return ""


def read_finary_cookies(
    database: Path | None = None,
) -> tuple[str, str]:
    """Return ``(cookie_header, source_label)`` for Finary's cookies.

    Only ``finary.com`` hosts are read. The database is copied first: the
    browser holds a lock on the live file, and a copy also guarantees we never
    write to the user's profile.
    """
    candidates = (
        [(b, p) for b, p in find_cookie_databases() if p == database]
        if database
        else find_cookie_databases()
    )
    if not candidates:
        raise ChromeError(
            "Aucun navigateur Chromium trouvé sur cette machine "
            f"(cherché : {', '.join(b.name for b in SUPPORTED)})."
        )

    problems: list[str] = []
    for browser, path in candidates:
        try:
            cookies = _read_one(browser, path)
        except ChromeError as exc:
            problems.append(f"{browser.name} ({path.parent.name}) : {exc}")
            continue
        if cookies:
            header = "; ".join(f"{name}={value}" for name, value in cookies.items())
            return header, f"{browser.name} / {path.parent.name}"
        problems.append(
            f"{browser.name} ({path.parent.name}) : aucun cookie finary.com"
        )

    raise ChromeError(
        "Aucune session Finary trouvée dans les navigateurs installés.\n  "
        + "\n  ".join(problems)
        + "\n\nConnectez-vous sur https://app.finary.com dans Chrome, "
        "laissez l'onglet ouvert, puis relancez."
    )


def _read_one(browser: Browser, path: Path) -> dict[str, str]:
    key = _encryption_key(browser)

    with tempfile.TemporaryDirectory() as tmp:
        copy = Path(tmp) / "Cookies"
        try:
            shutil.copy2(path, copy)
        except OSError as exc:
            raise ChromeError(f"Copie de la base impossible : {exc}") from exc

        try:
            connection = sqlite3.connect(f"file:{copy}?mode=ro", uri=True)
        except sqlite3.Error as exc:
            raise ChromeError(f"Base de cookies illisible : {exc}") from exc

        try:
            rows = connection.execute(
                "SELECT name, encrypted_value FROM cookies "
                "WHERE host_key LIKE '%finary.com' ORDER BY LENGTH(host_key) DESC"
            ).fetchall()
        except sqlite3.Error as exc:
            raise ChromeError(f"Lecture de la base échouée : {exc}") from exc
        finally:
            connection.close()

    cookies: dict[str, str] = {}
    for name, encrypted in rows:
        if name in cookies:  # first match wins: most specific host
            continue
        if value := _decrypt(encrypted, key):
            cookies[name] = value
    return cookies
