"""The cookie parser has to survive whatever a user pastes.

Every shape here is one a browser actually produces, so each is a real case
rather than a hypothetical.
"""

from __future__ import annotations

import pytest

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


def test_import_rejects_unparseable_input() -> None:
    with pytest.raises(AuthError, match="Aucun cookie"):
        import_browser_session("")


def test_import_names_the_missing_cookie() -> None:
    """The error has to say which cookie is missing, or it is useless."""
    with pytest.raises(AuthError, match="__client"):
        import_browser_session("cookie: some_other=1; unrelated=2")
