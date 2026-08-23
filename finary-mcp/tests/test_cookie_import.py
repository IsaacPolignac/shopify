"""The cookie parser has to survive whatever a user pastes.

Every shape here is one a browser actually produces, so each is a real case
rather than a hypothetical.
"""

from __future__ import annotations

import pytest

from finary_mcp import auth
from finary_mcp.auth import AuthError, import_browser_session, parse_cookie_blob


def test_plain_cookie_pairs() -> None:
    assert parse_cookie_blob("__client=abc; __client_uat=123") == {
        "__client": "abc",
        "__client_uat": "123",
    }


def test_cookie_header_line() -> None:
    assert parse_cookie_blob("cookie: __client=abc; other=1") == {
        "__client": "abc",
        "other": "1",
    }


def test_curl_copy_from_devtools() -> None:
    blob = (
        "curl 'https://clerk.finary.com/v1/client' "
        "-H 'accept: */*' "
        "-H 'cookie: __client=abc123; __client_uat=1700000000' "
        "-H 'user-agent: Mozilla/5.0'"
    )
    assert parse_cookie_blob(blob) == {
        "__client": "abc123",
        "__client_uat": "1700000000",
    }


def test_curl_other_headers_are_not_mistaken_for_cookies() -> None:
    """A naive parser would turn every -H into a cookie."""
    blob = "curl 'https://x' -H 'authorization: Bearer xyz' -H 'cookie: __client=abc'"
    parsed = parse_cookie_blob(blob)
    assert parsed == {"__client": "abc"}
    assert "authorization" not in parsed


def test_curl_short_cookie_flag() -> None:
    blob = "curl 'https://clerk.finary.com/v1/client' -b '__client=abc; x=1'"
    assert parse_cookie_blob(blob) == {"__client": "abc", "x": "1"}


def test_bare_token_is_assumed_to_be_the_client_cookie() -> None:
    assert parse_cookie_blob("eyJhbGciOi.sometoken") == {"__client": "eyJhbGciOi.sometoken"}


def test_value_containing_equals_is_kept_whole() -> None:
    """Base64 payloads end in '=' padding; splitting on every '=' would break them."""
    assert parse_cookie_blob("__client=abc==; x=1")["__client"] == "abc=="


def test_empty_input() -> None:
    assert parse_cookie_blob("") == {}
    assert parse_cookie_blob("   ") == {}


def test_session_id_is_recovered_from_a_pasted_url() -> None:
    """The token-refresh request is the one users copy; its URL carries the id."""
    blob = (
        "curl 'https://clerk.finary.com/v1/client/sessions/sess_2abcXYZ/tokens' "
        "-H 'cookie: __client=abc'"
    )
    assert auth.SESSION_ID_RE.search(blob).group(1) == "sess_2abcXYZ"


def test_import_rejects_unparseable_input() -> None:
    """Fails before any network call — nothing to send."""
    with pytest.raises(AuthError, match="Aucun cookie"):
        import_browser_session("")


# -- network-dependent paths, exercised against a stub ----------------------


class StubResponse:
    def __init__(self, status_code: int, payload: dict | None = None) -> None:
        self.status_code = status_code
        self._payload = payload or {}

    def json(self) -> dict:
        return self._payload


class StubCookie:
    """Mimics the attribute access http.cookiejar entries provide."""

    def __init__(self, name: str, value: str, domain: str, path: str) -> None:
        self.name = name
        self.value = value
        self.domain = domain
        self.path = path


class StubSession:
    """Records cookies set on it and replays canned Clerk responses."""

    def __init__(self, get_response=None, post_response=None) -> None:
        self.cookies = self
        self.jar: list[StubCookie] = []
        self._get = get_response or StubResponse(401)
        self._post = post_response or StubResponse(401)

    def set(self, name, value, domain="", path="/") -> None:
        self.jar.append(StubCookie(name, value, domain, path))

    def get(self, *a, **kw) -> StubResponse:
        return self._get

    def post(self, *a, **kw) -> StubResponse:
        return self._post


def test_any_cookie_name_is_accepted_when_clerk_confirms(monkeypatch) -> None:
    """The cookie name is instance-specific; Clerk is the authority, not us."""
    payload = {
        "response": {
            "sessions": [
                {
                    "id": "sess_1",
                    "status": "active",
                    "last_active_token": {"jwt": "jwt_1"},
                    "user": {"identifier": "a@b.c"},
                }
            ]
        }
    }
    monkeypatch.setattr(
        auth, "new_session", lambda: StubSession(get_response=StubResponse(200, payload))
    )
    stored = import_browser_session("cookie: some_unexpected_name=xyz")
    assert stored.session_id == "sess_1"
    assert stored.jwt == "jwt_1"
    assert stored.email == "a@b.c"


def test_falls_back_to_the_session_id_in_the_url(monkeypatch) -> None:
    monkeypatch.setattr(
        auth,
        "new_session",
        lambda: StubSession(
            get_response=StubResponse(404),
            post_response=StubResponse(200, {"jwt": "jwt_2"}),
        ),
    )
    blob = (
        "curl 'https://clerk.finary.com/v1/client/sessions/sess_9/tokens' "
        "-H 'cookie: __client=abc'"
    )
    stored = import_browser_session(blob)
    assert stored.session_id == "sess_9"
    assert stored.jwt == "jwt_2"


def test_failure_explains_the_missing_client_cookie(monkeypatch) -> None:
    """When everything fails, the message must point at the likely cause."""
    monkeypatch.setattr(auth, "new_session", lambda: StubSession())
    with pytest.raises(AuthError, match="__client"):
        import_browser_session("cookie: some_other=1; unrelated=2")
