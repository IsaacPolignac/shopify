"""Trim Finary payloads before they reach the model's context.

Finary's responses are built for a rich web UI: every holding drags along logo
URLs, theme colours, and a pile of nulls. Left alone, a single portfolio call
can dominate a context window. Pruning is deliberately conservative — it drops
presentation-only keys and empty values, and never touches numbers, names,
identifiers or dates, so nothing an analysis might need is lost.
"""

from __future__ import annotations

from typing import Any

#: Presentation-only keys. Safe to drop: nothing here informs financial analysis.
COSMETIC_KEYS = frozenset(
    {
        "logo",
        "logo_url",
        "logo_uri",
        "icon",
        "icon_url",
        "image",
        "image_url",
        "picture",
        "picture_url",
        "thumbnail",
        "favicon",
        "color",
        "colors",
        "background_color",
        "text_color",
        "cover",
        "cover_url",
        "banner",
        "illustration",
        "__typename",
    }
)


def _is_empty(value: Any) -> bool:
    return value is None or value == "" or value == [] or value == {}


def compact(value: Any, *, drop_empty: bool = True) -> Any:
    """Recursively strip cosmetic keys and empty values."""
    if isinstance(value, dict):
        out: dict[str, Any] = {}
        for key, item in value.items():
            if key in COSMETIC_KEYS:
                continue
            pruned = compact(item, drop_empty=drop_empty)
            if drop_empty and _is_empty(pruned):
                continue
            out[key] = pruned
        return out
    if isinstance(value, list):
        items = [compact(item, drop_empty=drop_empty) for item in value]
        if drop_empty:
            items = [item for item in items if not _is_empty(item)]
        return items
    return value


def limit_list(value: Any, max_items: int) -> Any:
    """Cap a top-level list, appending a marker so truncation is never silent."""
    if not isinstance(value, list) or max_items <= 0 or len(value) <= max_items:
        return value
    head = value[:max_items]
    head.append(
        {
            "_truncated": True,
            "_note": (
                f"{len(value) - max_items} éléments supplémentaires masqués sur "
                f"{len(value)} au total. Augmentez `limit` pour les voir."
            ),
        }
    )
    return head


def prepare(value: Any, *, raw: bool = False, max_items: int = 0) -> Any:
    """Apply the standard output treatment for a tool result."""
    if raw:
        return value
    result = compact(value)
    if max_items:
        result = limit_list(result, max_items)
    return result
