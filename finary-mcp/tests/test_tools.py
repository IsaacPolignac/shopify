"""Tool-level behaviour: parameter validation and error surfacing.

These run without network by swapping in a fake client that records the calls
it was asked to make.
"""

from __future__ import annotations

from typing import Any

import pytest

from finary_mcp import server
from finary_mcp.auth import AuthError
from finary_mcp.client import FinaryError


class RecordingClient:
    """Stands in for FinaryClient and remembers what was requested."""

    def __init__(self, payload: Any = None, error: Exception | None = None) -> None:
        self.payload = payload if payload is not None else {"ok": True}
        self.error = error
        self.calls: list[tuple[str, dict[str, Any] | None]] = []

    def get(self, path: str, params: dict[str, Any] | None = None) -> Any:
        self.calls.append((path, params))
        if self.error:
            raise self.error
        return self.payload


@pytest.fixture
def fake_client(monkeypatch):
    client = RecordingClient()
    monkeypatch.setattr(server, "_get_client", lambda: client)
    return client


# -- parameter validation ---------------------------------------------------


def test_net_worth_rejects_unknown_period(fake_client) -> None:
    result = server.finary_net_worth(period="last-tuesday")
    assert "error" in result
    assert not fake_client.calls, "invalid input must not reach the API"


def test_net_worth_rejects_unknown_valuation(fake_client) -> None:
    result = server.finary_net_worth(valuation="vibes")
    assert "error" in result
    assert not fake_client.calls


def test_net_worth_passes_valid_params_through(fake_client) -> None:
    server.finary_net_worth(period="1y", valuation="gross")
    path, params = fake_client.calls[0]
    assert path == "/users/me/portfolio/timeseries"
    assert params == {"period": "1y", "type": "gross"}


def test_portfolio_rejects_unknown_type(fake_client) -> None:
    assert "error" in server.finary_portfolio(portfolio_type="nfts")
    assert not fake_client.calls


def test_transactions_rejects_unknown_type(fake_client) -> None:
    assert "error" in server.finary_transactions(portfolio_type="savings")
    assert not fake_client.calls


def test_transactions_clamps_page_size(fake_client) -> None:
    server.finary_transactions(per_page=99999)
    _, params = fake_client.calls[0]
    assert params["per_page"] == 200

    fake_client.calls.clear()
    server.finary_transactions(per_page=0)
    _, params = fake_client.calls[0]
    assert params["per_page"] == 1


# -- raw escape hatch -------------------------------------------------------


def test_raw_get_requires_leading_slash(fake_client) -> None:
    assert "error" in server.finary_raw_get("users/me")
    assert not fake_client.calls


def test_raw_get_rejects_malformed_params(fake_client) -> None:
    assert "error" in server.finary_raw_get("/users/me", params_json="{nope}")
    assert not fake_client.calls


def test_raw_get_rejects_non_object_params(fake_client) -> None:
    assert "error" in server.finary_raw_get("/users/me", params_json="[1, 2]")
    assert not fake_client.calls


def test_raw_get_forwards_parsed_params(fake_client) -> None:
    server.finary_raw_get("/users/me/portfolio/timeseries", params_json='{"period": "1y"}')
    path, params = fake_client.calls[0]
    assert path == "/users/me/portfolio/timeseries"
    assert params == {"period": "1y"}


# -- error handling ---------------------------------------------------------


def test_api_errors_become_readable_messages(monkeypatch) -> None:
    monkeypatch.setattr(
        server,
        "_get_client",
        lambda: RecordingClient(error=FinaryError("session expirée")),
    )
    result = server.finary_cryptos()
    assert result == {"error": "session expirée"}


def test_expired_session_gets_an_actionable_message(monkeypatch) -> None:
    """The most common failure must not surface as 'unexpected error'."""
    monkeypatch.setattr(
        server,
        "_get_client",
        lambda: RecordingClient(error=AuthError("La session Finary a expiré")),
    )
    result = server.finary_cryptos()
    assert "expiré" in result["error"]
    assert "login" in result["action"]


def test_unexpected_errors_are_contained(monkeypatch) -> None:
    monkeypatch.setattr(
        server, "_get_client", lambda: RecordingClient(error=ValueError("boom"))
    )
    result = server.finary_cryptos()
    assert "ValueError" in result["error"]


def test_status_reports_disconnected_without_calling_the_api(monkeypatch) -> None:
    monkeypatch.setattr(server.storage, "load_session", lambda: None)
    result = server.finary_status()
    assert result["connecte"] is False
    assert "login" in result["action"]
