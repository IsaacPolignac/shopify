"""HTTP client for ``api.finary.com``, read-only unless explicitly unlocked.

The write boundary of this server lives here, and it is structural rather than
a convention: :meth:`FinaryClient.request` refuses any mutating verb before a
socket is opened unless the client was constructed with ``allow_writes=True``.
That flag is set once, at startup, from an explicit operator decision — never
from tool input. A write tool cannot talk itself past this.

Defaulting to read-only matters because this server is meant to be cloned:
someone who installs it without reading the docs gets an instance that cannot
damage their wealth records.

Clerk's token endpoint is a POST, but it is issued from :mod:`finary_mcp.auth`
against a different host and never passes through here.
"""

from __future__ import annotations

import json
import sys
from contextlib import contextmanager
from typing import Any, Iterator

from curl_cffi import requests
from curl_cffi.requests.exceptions import RequestException

from . import auth, storage

API_ROOT = "https://api.finary.com"

#: Verbs that can never change anything, always permitted.
SAFE_METHODS = frozenset({"GET", "HEAD"})

#: Verbs permitted only when writes are explicitly unlocked. Anything outside
#: both sets (TRACE, OPTIONS, CONNECT…) is refused unconditionally.
WRITE_METHODS = frozenset({"POST", "PUT", "PATCH", "DELETE"})


class FinaryError(RuntimeError):
    """An API call failed. Message is safe to show the user."""


class ReadOnlyViolation(FinaryError):
    """A mutating request was attempted while writes are locked."""


class FinaryClient:
    """Authenticated access to the Finary API, read-only by default.

    The bearer token is refreshed lazily: once on first use, and again on a
    401, which is the normal path since Clerk JWTs live about a minute.

    ``allow_writes`` comes from the process's startup configuration. It is
    deliberately a constructor argument rather than a per-call parameter, so
    no caller can raise its own privileges mid-session.
    """

    def __init__(
        self,
        stored: storage.StoredSession | None = None,
        *,
        allow_writes: bool = False,
    ) -> None:
        self._stored = stored
        self._session: requests.Session | None = None
        self._allow_writes = allow_writes

    @property
    def allow_writes(self) -> bool:
        return self._allow_writes

    # -- session plumbing -------------------------------------------------

    def _ensure_stored(self) -> storage.StoredSession:
        if self._stored is None:
            self._stored = storage.load_session()
        if self._stored is None:
            raise FinaryError(
                "Aucune session Finary enregistrée. Lancez `finary-mcp login` "
                "dans un terminal, puis relancez ce client MCP."
            )
        return self._stored

    def _authenticate(self) -> requests.Session:
        stored = self._ensure_stored()
        jwt = auth.refresh_jwt(stored)
        try:
            storage.save_session(stored)
        except storage.StorageError as exc:
            # Persisting is only a cache optimisation; the JWT in hand is
            # valid. Failing the user's query over it would be wrong.
            print(f"[finary-mcp] Session non mise en cache : {exc}", file=sys.stderr)

        session = auth.new_session()
        # Carry the browser's cookies and User-Agent here too: api.finary.com
        # sits behind the same Cloudflare, whose clearance token is bound to
        # both. The bearer token alone is not always enough to get through.
        headers = auth._browser_headers(stored.cookie_header, stored.user_agent)
        headers["authorization"] = f"Bearer {jwt}"
        session.headers.update(headers)
        self._session = session
        return session

    # -- requests ---------------------------------------------------------

    @staticmethod
    @contextmanager
    def _reaching() -> Iterator[None]:
        """Surface transport failures as FinaryError, not a curl traceback."""
        try:
            yield
        except RequestException as exc:
            raise FinaryError(
                "Impossible de joindre l'API Finary (api.finary.com). "
                f"Vérifiez votre connexion réseau. Détail : {exc}"
            ) from exc

    def request(
        self,
        method: str,
        path: str,
        params: dict[str, Any] | None = None,
        body: dict[str, Any] | None = None,
    ) -> Any:
        """Issue a request and return the decoded body.

        Raises :class:`ReadOnlyViolation` for a mutating verb while writes are
        locked, and for any verb outside the two known sets.
        """
        verb = method.upper()
        if verb not in SAFE_METHODS:
            if verb not in WRITE_METHODS:
                raise ReadOnlyViolation(
                    f"{verb} n'est pas un verbe supporté par ce client."
                )
            if not self._allow_writes:
                raise ReadOnlyViolation(
                    f"{verb} est refusé : ce serveur tourne en lecture seule. "
                    "Pour autoriser les modifications, démarrez-le avec "
                    "`finary-mcp serve --enable-writes` (ou "
                    "FINARY_MCP_ENABLE_WRITES=1)."
                )

        if not path.startswith("/"):
            path = "/" + path
        url = f"{API_ROOT}{path}"
        clean = {k: v for k, v in (params or {}).items() if v not in (None, "")}
        payload = json.dumps(body) if body is not None else None
        headers = {"Content-Type": "application/json"} if payload else None

        session = self._session or self._authenticate()
        with self._reaching():
            response = session.request(
                verb, url, params=clean, data=payload, headers=headers
            )

        if response.status_code == 401:
            # Expected: the cached JWT aged out. Refresh once, then retry.
            session = self._authenticate()
            with self._reaching():
                response = session.request(
                    verb, url, params=clean, data=payload, headers=headers
                )

        if response.status_code == 403:
            raise FinaryError(
                f"Accès refusé par Finary sur {path}. Cette ressource peut "
                "nécessiter un abonnement Finary+ ou ne pas exister pour ce compte."
            )
        if response.status_code == 404:
            raise FinaryError(f"Ressource introuvable : {path}")
        if response.status_code == 429:
            raise FinaryError(
                "Finary limite le débit (429). Patientez un instant avant de réessayer."
            )
        if response.status_code >= 400:
            raise FinaryError(
                f"Finary a répondu {response.status_code} sur {path}: "
                f"{response.text[:300]}"
            )

        # A successful DELETE commonly answers 204 with no body; that is a
        # success, not a parse failure.
        if response.status_code == 204 or not (response.text or "").strip():
            return {"ok": True, "status": response.status_code}

        try:
            return response.json()
        except json.JSONDecodeError as exc:
            raise FinaryError(f"Réponse non-JSON depuis {path}: {exc}") from exc

    def get(self, path: str, params: dict[str, Any] | None = None) -> Any:
        """Shorthand for a GET. Returns the payload's ``result`` when present."""
        return _unwrap(self.request("GET", path, params))

    def post(self, path: str, body: dict[str, Any]) -> Any:
        return _unwrap(self.request("POST", path, body=body))

    def put(self, path: str, body: dict[str, Any]) -> Any:
        return _unwrap(self.request("PUT", path, body=body))

    def delete(self, path: str) -> Any:
        return _unwrap(self.request("DELETE", path))


def _unwrap(body: Any) -> Any:
    """Finary wraps most payloads in a ``result`` envelope; drop it."""
    if isinstance(body, dict) and "result" in body:
        return body["result"]
    return body
