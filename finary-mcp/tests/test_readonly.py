"""The read-only guarantee is the product. These tests defend it.

If someone later adds a write path, these should be the tests that fail.
"""

from __future__ import annotations

import asyncio

import pytest

from finary_mcp.client import SAFE_METHODS, FinaryClient, ReadOnlyViolation
from finary_mcp.server import mcp


class ExplodingSession:
    """Any network call at all is a test failure."""

    headers: dict[str, str] = {}

    def request(self, *args, **kwargs):  # pragma: no cover - must not run
        raise AssertionError("a mutating request reached the network layer")


@pytest.mark.parametrize("verb", ["POST", "PUT", "PATCH", "DELETE", "OPTIONS", "TRACE"])
def test_mutating_verbs_are_refused_before_any_network_call(verb: str) -> None:
    client = FinaryClient()
    client._session = ExplodingSession()  # type: ignore[assignment]

    with pytest.raises(ReadOnlyViolation):
        client.request(verb, "/users/me")


def test_verb_check_is_case_insensitive() -> None:
    client = FinaryClient()
    client._session = ExplodingSession()  # type: ignore[assignment]

    with pytest.raises(ReadOnlyViolation):
        client.request("post", "/users/me")


def test_only_get_and_head_are_allowed() -> None:
    assert SAFE_METHODS == frozenset({"GET", "HEAD"})


def test_every_registered_tool_is_annotated_read_only() -> None:
    tools = asyncio.run(mcp.list_tools())
    assert tools, "no tools registered"
    for tool in tools:
        assert tool.annotations is not None, f"{tool.name} has no annotations"
        assert tool.annotations.read_only_hint is True, f"{tool.name} is not read-only"
        assert tool.annotations.destructive_hint is False, f"{tool.name} may destroy"


def test_no_tool_name_suggests_mutation() -> None:
    """A tripwire against a write tool sneaking in later.

    Matches whole underscore-separated segments, so a mutating verb is caught
    (``finary_add_crypto``) while a noun that merely contains one is not
    (``finary_other_assets``).
    """
    forbidden = {
        "add", "create", "new", "update", "edit", "modify",
        "delete", "remove", "set", "put", "post", "patch",
    }
    tools = asyncio.run(mcp.list_tools())
    for tool in tools:
        segments = set(tool.name.lower().split("_"))
        offending = segments & forbidden
        assert not offending, f"{tool.name} looks like a write tool ({offending})"
