"""Chromium cookie decryption, exercised against a synthetic profile.

The encryption scheme is fixed and public, so a cookie store can be built here
exactly as Chrome builds one — no real browser needed to prove the reader works.
"""

from __future__ import annotations

import sqlite3
from pathlib import Path

import pytest
from cryptography.hazmat.primitives import hashes, padding
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

from finary_mcp import chrome
from finary_mcp.chrome import ChromeError


def make_key(password: bytes = b"testpassword", iterations: int = 1003) -> bytes:
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA1(), length=16, salt=chrome._SALT, iterations=iterations
    )
    return kdf.derive(password)


def encrypt(value: str, key: bytes, *, domain_prefix: bool = False) -> bytes:
    """Encrypt exactly as Chromium does, optionally with the newer prefix."""
    plaintext = value.encode()
    if domain_prefix:
        plaintext = b"\x00" * 32 + plaintext
    padder = padding.PKCS7(128).padder()
    padded = padder.update(plaintext) + padder.finalize()
    encryptor = Cipher(algorithms.AES(key), modes.CBC(chrome._IV)).encryptor()
    return b"v10" + encryptor.update(padded) + encryptor.finalize()


def test_decrypt_round_trip() -> None:
    key = make_key()
    assert chrome._decrypt(encrypt("session-value", key), key) == "session-value"


def test_decrypt_strips_the_chrome_130_domain_prefix() -> None:
    """Newer Chrome prepends 32 bytes of SHA-256; keeping them corrupts the value."""
    key = make_key()
    encrypted = encrypt("prefixed-value", key, domain_prefix=True)
    assert chrome._decrypt(encrypted, key) == "prefixed-value"


def test_decrypt_handles_a_long_jwt_like_value() -> None:
    key = make_key()
    value = "eyJhbGciOiJSUzI1NiJ9." + "x" * 300
    assert chrome._decrypt(encrypt(value, key), key) == value


def test_unencrypted_value_passes_through() -> None:
    assert chrome._decrypt(b"plain-value", make_key()) == "plain-value"


def test_empty_value() -> None:
    assert chrome._decrypt(b"", make_key()) == ""


def test_wrong_key_does_not_raise() -> None:
    """A stale keychain entry must degrade, not crash the import."""
    encrypted = encrypt("value", make_key(b"right"))
    assert chrome._decrypt(encrypted, make_key(b"wrong")) == ""


# -- end-to-end against a synthetic profile ---------------------------------


def build_profile(tmp_path: Path, key: bytes, rows: list[tuple[str, str, str]]) -> Path:
    """Create a Cookies DB shaped like Chrome's. rows = (host, name, value)."""
    db = tmp_path / "Cookies"
    connection = sqlite3.connect(db)
    connection.execute(
        "CREATE TABLE cookies (host_key TEXT, name TEXT, encrypted_value BLOB)"
    )
    connection.executemany(
        "INSERT INTO cookies VALUES (?, ?, ?)",
        [(host, name, encrypt(value, key)) for host, name, value in rows],
    )
    connection.commit()
    connection.close()
    return db


@pytest.fixture
def profile(tmp_path, monkeypatch):
    key = make_key()
    db = build_profile(
        tmp_path,
        key,
        [
            (".finary.com", "__client", "client-token"),
            (".finary.com", "cf_clearance", "clearance-token"),
            ("app.finary.com", "__client_uat", "1700000000"),
            (".example.com", "unrelated", "should-not-appear"),
        ],
    )
    browser = chrome.SUPPORTED[0]
    monkeypatch.setattr(chrome, "find_cookie_databases", lambda: [(browser, db)])
    monkeypatch.setattr(chrome, "_encryption_key", lambda b: key)
    return db


def test_reads_only_finary_cookies(profile) -> None:
    header, source = chrome.read_finary_cookies()
    assert "__client=client-token" in header
    assert "cf_clearance=clearance-token" in header
    assert "__client_uat=1700000000" in header
    assert "unrelated" not in header, "cookies from other sites must never be read"
    assert "Chrome" in source


def test_no_browser_installed_is_a_clear_error(monkeypatch) -> None:
    monkeypatch.setattr(chrome, "find_cookie_databases", lambda: [])
    with pytest.raises(ChromeError, match="Aucun navigateur"):
        chrome.read_finary_cookies()


def test_profile_without_finary_cookies_is_reported(tmp_path, monkeypatch) -> None:
    key = make_key()
    db = build_profile(tmp_path, key, [(".example.com", "x", "y")])
    monkeypatch.setattr(
        chrome, "find_cookie_databases", lambda: [(chrome.SUPPORTED[0], db)]
    )
    monkeypatch.setattr(chrome, "_encryption_key", lambda b: key)
    with pytest.raises(ChromeError, match="app.finary.com"):
        chrome.read_finary_cookies()


def test_database_is_never_opened_in_place(profile, monkeypatch) -> None:
    """Reading must not touch the live profile; a copy is taken first."""
    copies: list = []
    real_copy = chrome.shutil.copy2
    monkeypatch.setattr(
        chrome.shutil, "copy2", lambda src, dst: copies.append((src, dst)) or real_copy(src, dst)
    )
    chrome.read_finary_cookies()
    assert copies, "the cookie database was read without being copied"
