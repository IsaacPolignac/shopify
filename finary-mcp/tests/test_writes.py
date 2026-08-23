"""The write lock is the safety property now. These tests defend it.

Two invariants matter: writes are impossible unless deliberately unlocked, and
the unlock decision comes from startup configuration rather than from anything
a caller or a model can influence at request time.
"""

from __future__ import annotations

import asyncio
import importlib

import pytest

from finary_mcp.client import (
    SAFE_METHODS,
    WRITE_METHODS,
    FinaryClient,
    ReadOnlyViolation,
)


class RecordingSession:
    """Captures requests that make it past the guard."""

    headers: dict[str, str] = {}

    def __init__(self) -> None:
        self.calls: list[tuple[str, str]] = []

    def request(self, verb, url, **kwargs):
        self.calls.append((verb, url))
        raise AssertionError("REACHED_NETWORK")


# -- the lock ---------------------------------------------------------------


@pytest.mark.parametrize("verb", sorted(WRITE_METHODS))
def test_writes_are_refused_by_default(verb: str) -> None:
    """The default constructor must never permit a mutation."""
    client = FinaryClient()
    client._session = RecordingSession()
    assert client.allow_writes is False

    with pytest.raises(ReadOnlyViolation, match="lecture seule"):
        client.request(verb, "/users/me/cryptos", body={})


@pytest.mark.parametrize("verb", sorted(WRITE_METHODS))
def test_writes_pass_the_guard_when_unlocked(verb: str) -> None:
    """Unlocked, the same call must reach the transport instead of being cut."""
    session = RecordingSession()
    client = FinaryClient(allow_writes=True)
    client._session = session

    with pytest.raises(AssertionError, match="REACHED_NETWORK"):
        client.request(verb, "/users/me/cryptos", body={})
    assert session.calls == [(verb, "https://api.finary.com/users/me/cryptos")]


@pytest.mark.parametrize("verb", ["TRACE", "OPTIONS", "CONNECT", "PROPFIND"])
def test_unknown_verbs_are_refused_even_when_unlocked(verb: str) -> None:
    """Unlocking writes must not turn the client into an arbitrary proxy."""
    client = FinaryClient(allow_writes=True)
    client._session = RecordingSession()

    with pytest.raises(ReadOnlyViolation, match="pas un verbe supporté"):
        client.request(verb, "/users/me")


def test_reads_work_in_both_postures() -> None:
    for allow in (False, True):
        session = RecordingSession()
        client = FinaryClient(allow_writes=allow)
        client._session = session
        with pytest.raises(AssertionError, match="REACHED_NETWORK"):
            client.request("GET", "/users/me")
        assert session.calls[0][0] == "GET"


def test_method_sets_do_not_overlap() -> None:
    assert not (SAFE_METHODS & WRITE_METHODS)


def test_allow_writes_is_not_settable_per_request() -> None:
    """`request` must expose no parameter that could raise privileges."""
    import inspect

    params = set(inspect.signature(FinaryClient.request).parameters)
    assert params == {"self", "method", "path", "params", "body"}


# -- tool registration ------------------------------------------------------


def _tool_names(module) -> set[str]:
    return {tool.name for tool in asyncio.run(module.mcp.list_tools())}


def test_write_tools_are_absent_by_default(monkeypatch) -> None:
    from finary_mcp import server as module

    monkeypatch.delenv("FINARY_MCP_ENABLE_WRITES", raising=False)
    reloaded = importlib.reload(module)
    try:
        names = _tool_names(reloaded)
        assert names, "no tools registered"
        for name in ("finary_add_crypto", "finary_delete_crypto", "finary_raw_write"):
            assert name not in names, f"{name} exposed while writes are locked"
        assert "finary_net_worth" in names, "read tools must still be present"
    finally:
        importlib.reload(module)


def test_write_tools_appear_when_unlocked(monkeypatch) -> None:
    from finary_mcp import server as module

    monkeypatch.setenv("FINARY_MCP_ENABLE_WRITES", "1")
    reloaded = importlib.reload(module)
    try:
        names = _tool_names(reloaded)
        for name in (
            "finary_add_crypto",
            "finary_update_crypto",
            "finary_delete_crypto",
            "finary_add_security",
            "finary_delete_security",
            "finary_add_other_asset",
            "finary_add_account",
            "finary_raw_write",
        ):
            assert name in names, f"{name} missing while writes are unlocked"
    finally:
        monkeypatch.delenv("FINARY_MCP_ENABLE_WRITES", raising=False)
        importlib.reload(module)


def test_delete_tools_are_flagged_destructive(monkeypatch) -> None:
    """Clients surface a stronger confirmation for destructiveHint tools."""
    from finary_mcp import server as module

    monkeypatch.setenv("FINARY_MCP_ENABLE_WRITES", "1")
    reloaded = importlib.reload(module)
    try:
        tools = {t.name: t for t in asyncio.run(reloaded.mcp.list_tools())}
        for name, tool in tools.items():
            if "delete" in name:
                assert tool.annotations.destructive_hint is True, name
                assert tool.annotations.read_only_hint is False, name
    finally:
        monkeypatch.delenv("FINARY_MCP_ENABLE_WRITES", raising=False)
        importlib.reload(module)


def test_only_the_env_var_unlocks_writes(monkeypatch) -> None:
    from finary_mcp import server as module

    for value in ("", "0", "true", "yes", "TRUE"):
        monkeypatch.setenv("FINARY_MCP_ENABLE_WRITES", value)
        assert module.writes_enabled() is False, f"{value!r} must not unlock writes"
    monkeypatch.setenv("FINARY_MCP_ENABLE_WRITES", "1")
    assert module.writes_enabled() is True
