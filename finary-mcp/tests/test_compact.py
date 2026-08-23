"""Pruning must be aggressive on chrome and lossless on data."""

from __future__ import annotations

from finary_mcp.compact import compact, limit_list, prepare


def test_drops_cosmetic_keys() -> None:
    payload = {"name": "PEA", "logo_url": "https://x/y.png", "color": "#fff"}
    assert compact(payload) == {"name": "PEA"}


def test_keeps_numbers_including_falsy_ones() -> None:
    """A zero balance or a 0% gain is information, not noise."""
    payload = {"balance": 0, "gain": 0.0, "shares": 0, "active": False}
    assert compact(payload) == payload


def test_drops_empty_values() -> None:
    payload = {"name": "PEA", "note": "", "tags": [], "meta": {}, "parent": None}
    assert compact(payload) == {"name": "PEA"}


def test_recurses_into_nested_structures() -> None:
    payload = {
        "accounts": [
            {"name": "PEA", "logo": "x.png", "securities": [{"isin": "FR001", "icon": "i"}]}
        ]
    }
    assert compact(payload) == {
        "accounts": [{"name": "PEA", "securities": [{"isin": "FR001"}]}]
    }


def test_preserves_identifiers_and_dates() -> None:
    payload = {"id": "abc-123", "created_at": "2024-01-01", "isin": "FR0000120271"}
    assert compact(payload) == payload


def test_limit_list_marks_truncation_instead_of_hiding_it() -> None:
    result = limit_list([{"n": i} for i in range(10)], 3)
    assert len(result) == 4
    assert result[-1]["_truncated"] is True
    assert "7" in result[-1]["_note"]


def test_limit_list_is_a_noop_below_the_cap() -> None:
    data = [{"n": 1}, {"n": 2}]
    assert limit_list(data, 5) == data


def test_raw_bypasses_everything() -> None:
    payload = {"name": "PEA", "logo": "x.png", "empty": None}
    assert prepare(payload, raw=True) == payload
