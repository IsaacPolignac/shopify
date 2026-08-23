"""Storage must round-trip a session, refuse an unsafe fallback, and never
grow a password field."""

from __future__ import annotations

import dataclasses
import json
import os
import stat

import pytest

from finary_mcp import storage
from finary_mcp.storage import StoredSession


@pytest.fixture
def isolated_config(tmp_path, monkeypatch):
    """Force the file backend into a temp dir, with no keychain available."""
    monkeypatch.setenv("XDG_CONFIG_HOME", str(tmp_path))
    monkeypatch.setenv(storage.ALLOW_FILE_STORE_ENV, "1")
    monkeypatch.setattr(storage, "keychain_available", lambda: False)
    return tmp_path


def test_stored_session_has_no_password_field() -> None:
    """The security claim in the README, asserted in code."""
    names = {f.name for f in dataclasses.fields(StoredSession)}
    for leaky in ("password", "passwd", "secret", "totp", "otp_secret"):
        assert leaky not in names


def test_round_trip(isolated_config) -> None:
    session = StoredSession(
        session_id="sess_123",
        cookies=[{"name": "__client", "value": "abc", "domain": ".finary.com", "path": "/"}],
        jwt="jwt_xyz",
        email="user@example.com",
    )
    storage.save_session(session)

    loaded = storage.load_session()
    assert loaded is not None
    assert loaded.session_id == "sess_123"
    assert loaded.jwt == "jwt_xyz"
    assert loaded.email == "user@example.com"
    assert loaded.cookies[0]["name"] == "__client"


def test_fallback_file_is_created_0600(isolated_config) -> None:
    storage.save_session(StoredSession(session_id="sess_123"))
    path = isolated_config / "finary-mcp" / "session.json"

    assert path.exists()
    mode = stat.S_IMODE(path.stat().st_mode)
    assert mode == 0o600, f"expected 0600, got {oct(mode)}"

    dir_mode = stat.S_IMODE((isolated_config / "finary-mcp").stat().st_mode)
    assert dir_mode == 0o700, f"expected 0700, got {oct(dir_mode)}"


def test_fallback_refused_unless_explicitly_allowed(tmp_path, monkeypatch) -> None:
    monkeypatch.setenv("XDG_CONFIG_HOME", str(tmp_path))
    monkeypatch.delenv(storage.ALLOW_FILE_STORE_ENV, raising=False)
    monkeypatch.setattr(storage, "keychain_available", lambda: False)

    with pytest.raises(storage.StorageError, match="trousseau"):
        storage.save_session(StoredSession(session_id="sess_123"))


def test_clear_removes_the_file(isolated_config) -> None:
    storage.save_session(StoredSession(session_id="sess_123"))
    assert storage.clear_session() is True
    assert storage.load_session() is None
    assert storage.clear_session() is False


def test_load_returns_none_on_corrupt_payload(isolated_config) -> None:
    path = isolated_config / "finary-mcp"
    path.mkdir(parents=True, exist_ok=True)
    (path / "session.json").write_text("this is not json")
    assert storage.load_session() is None


def test_saved_payload_contains_only_expected_keys(isolated_config) -> None:
    storage.save_session(StoredSession(session_id="s", email="a@b.c"))
    raw = json.loads((isolated_config / "finary-mcp" / "session.json").read_text())
    assert set(raw) == {
        "session_id",
        "cookies",
        "cookie_header",
        "jwt",
        "email",
        "user_agent",
    }
