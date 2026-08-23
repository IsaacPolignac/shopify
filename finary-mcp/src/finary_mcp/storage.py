"""Secure persistence for the Finary session.

Design rule, enforced by this module: **the Finary password is never written
anywhere.** Only the Clerk session is persisted — a session id, its cookies and
the last short-lived JWT. If the store is ever compromised, the attacker gets a
session the user can revoke from Finary, not the credentials to mint new ones.

Two backends, in order of preference:

1. The OS keychain via ``keyring`` — Keychain (macOS), libsecret/KWallet
   (Linux), Credential Manager (Windows). Encrypted at rest by the OS.
2. A ``0600`` file under ``$XDG_CONFIG_HOME/finary-mcp`` — only used when no
   keychain backend exists (typical on headless Linux). This is a real
   downgrade, so it is opt-in via ``FINARY_MCP_ALLOW_FILE_STORE=1``.
"""

from __future__ import annotations

import json
import os
import stat
import sys
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Any

import keyring
from keyring.errors import KeyringError

SERVICE_NAME = "finary-mcp"
ACCOUNT_NAME = "clerk-session"

#: Set to "1" to permit the plaintext-file fallback when no keychain exists.
ALLOW_FILE_STORE_ENV = "FINARY_MCP_ALLOW_FILE_STORE"


class StorageError(RuntimeError):
    """Raised when the session can neither be read nor written."""


@dataclass
class StoredSession:
    """The persisted Clerk session. Deliberately contains no password."""

    session_id: str
    #: Cookie jar as a list of ``{name, value, domain, path}`` dicts.
    cookies: list[dict[str, str]] = field(default_factory=list)
    #: The raw ``a=1; b=2`` header exactly as the browser sent it. Replayed
    #: verbatim rather than rebuilt from the jar: domain-matching rules are a
    #: source of silent failure, and the browser's own string cannot be wrong.
    cookie_header: str = ""
    #: Last known JWT. Short-lived (~60s); refreshed on demand, cached only to
    #: avoid a round-trip when it is still valid.
    jwt: str = ""
    #: Email, kept purely so ``status`` can tell the user which account is
    #: connected. Not a secret, and not used for authentication.
    email: str = ""
    #: User-Agent of the browser the session came from. Cloudflare binds its
    #: ``cf_clearance`` token to the UA that earned it, so replaying the
    #: session with a different UA gets the clearance rejected.
    user_agent: str = ""

    def to_json(self) -> str:
        return json.dumps(asdict(self))

    @classmethod
    def from_json(cls, raw: str) -> "StoredSession":
        data: dict[str, Any] = json.loads(raw)
        return cls(
            session_id=data.get("session_id", ""),
            cookies=data.get("cookies", []),
            cookie_header=data.get("cookie_header", ""),
            jwt=data.get("jwt", ""),
            email=data.get("email", ""),
            user_agent=data.get("user_agent", ""),
        )


def _config_dir() -> Path:
    base = os.environ.get("XDG_CONFIG_HOME")
    root = Path(base) if base else Path.home() / ".config"
    return root / "finary-mcp"


def _fallback_path() -> Path:
    return _config_dir() / "session.json"


def _file_store_allowed() -> bool:
    return os.environ.get(ALLOW_FILE_STORE_ENV, "") == "1"


def keychain_available() -> bool:
    """True when a real (non-fail) keyring backend is installed."""
    try:
        backend = keyring.get_keyring()
    except KeyringError:
        return False
    name = f"{type(backend).__module__}.{type(backend).__name__}".lower()
    # keyring falls back to a backend that raises on every call; treat the
    # chainer with no viable child the same way.
    return "fail" not in name


def describe_backend() -> str:
    """Human-readable name of the active store, for ``status`` output."""
    if keychain_available():
        return f"trousseau OS ({type(keyring.get_keyring()).__name__})"
    if _file_store_allowed():
        return f"fichier 0600 ({_fallback_path()})"
    return "aucun (trousseau indisponible, fallback fichier non autorisé)"


def _write_fallback(payload: str) -> None:
    if not _file_store_allowed():
        raise StorageError(
            "Aucun trousseau système n'est disponible sur cette machine.\n"
            "Installez un backend keyring (sous Linux : `apt install "
            "gnome-keyring` ou `libsecret-tools`), ou acceptez explicitement le "
            f"repli sur fichier en exportant {ALLOW_FILE_STORE_ENV}=1.\n"
            "Le repli écrit la session dans un fichier en clair (permissions "
            "0600). Le mot de passe n'y figure jamais, mais la session y est "
            "lisible par root."
        )
    directory = _config_dir()
    directory.mkdir(parents=True, exist_ok=True)
    os.chmod(directory, stat.S_IRWXU)  # 0700

    path = _fallback_path()
    # Create with 0600 from the start: never widen then narrow, which would
    # leave a window where the session is world-readable.
    fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, stat.S_IRUSR | stat.S_IWUSR)
    with os.fdopen(fd, "w") as handle:
        handle.write(payload)


def _read_fallback() -> str | None:
    path = _fallback_path()
    if not path.exists():
        return None
    mode = path.stat().st_mode
    if mode & (stat.S_IRWXG | stat.S_IRWXO):
        print(
            f"[finary-mcp] AVERTISSEMENT : {path} est lisible par d'autres "
            "utilisateurs. Exécutez `chmod 600` dessus.",
            file=sys.stderr,
        )
    return path.read_text()


def save_session(session: StoredSession) -> None:
    """Persist the session, preferring the OS keychain."""
    payload = session.to_json()
    if keychain_available():
        try:
            keyring.set_password(SERVICE_NAME, ACCOUNT_NAME, payload)
            return
        except KeyringError as exc:  # pragma: no cover - backend specific
            print(f"[finary-mcp] Trousseau inaccessible ({exc}).", file=sys.stderr)
    _write_fallback(payload)


def load_session() -> StoredSession | None:
    """Read the session back, or None when the user has never logged in."""
    raw: str | None = None
    if keychain_available():
        try:
            raw = keyring.get_password(SERVICE_NAME, ACCOUNT_NAME)
        except KeyringError:  # pragma: no cover - backend specific
            raw = None
    if raw is None:
        raw = _read_fallback()
    if not raw:
        return None
    try:
        return StoredSession.from_json(raw)
    except (ValueError, TypeError):
        return None


def clear_session() -> bool:
    """Delete every trace of the session. Returns True if something was removed."""
    removed = False
    if keychain_available():
        try:
            if keyring.get_password(SERVICE_NAME, ACCOUNT_NAME) is not None:
                keyring.delete_password(SERVICE_NAME, ACCOUNT_NAME)
                removed = True
        except KeyringError:  # pragma: no cover - backend specific
            pass
    path = _fallback_path()
    if path.exists():
        path.unlink()
        removed = True
    return removed
