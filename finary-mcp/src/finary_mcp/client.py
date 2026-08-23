"""Read-only HTTP client for ``api.finary.com``.

The read-only guarantee of this server lives here, and it is structural rather
than a convention: :meth:`FinaryClient.request` refuses any verb outside
``GET``/``HEAD`` before a socket is opened. A tool that tried to mutate data —
whether added by mistake, by a future contributor, or at a model's suggestion —
cannot reach the network through this class.

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

#: The only verbs this client will ever send.
SAFE_METHODS = frozenset({"GET", "HEAD"})


class FinaryError(RuntimeError):
    """An API call failed. Message is safe to show the user."""


class ReadOnlyViolation(FinaryError):
    """A caller attempted a mutating request. Always a bug, never user input."""


class FinaryClient:
    """Authenticated, read-only access to the Finary API.

    The bearer token is refreshed lazily: once on first use, and again on a
    401, which is the normal path since Clerk JWTs live about a minute.
    """

    def __init__(self, stored: storage.StoredSession | None = None) -> None:
        self._stored = stored
        self._session: requests.Session | None = None

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
        headers = {
            "authorization": f"Bearer {jwt}",
            "Origin": auth.APP_ROOT,
            "Referer": f"{auth.APP_ROOT}/",
            "Accept": "application/json",
        }
        if stored.user_agent:
            # Match the browser the session was imported from; Cloudflare
            # checks the UA against the clearance cookie.
            headers["User-Agent"] = stored.user_agent
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
    ) -> Any:
        """Issue a safe request and return the decoded body.

        Raises :class:`ReadOnlyViolation` for anything that would write.
        """
        verb = method.upper()
        if verb not in SAFE_METHODS:
            raise ReadOnlyViolation(
                f"{verb} est refusé : ce serveur est en lecture seule et "
                "n'émet que des requêtes GET vers l'API Finary."
            )

        if not path.startswith("/"):
            path = "/" + path
        url = f"{API_ROOT}{path}"
        clean = {k: v for k, v in (params or {}).items() if v not in (None, "")}

        session = self._session or self._authenticate()
        with self._reaching():
            response = session.request(verb, url, params=clean)

        if response.status_code == 401:
            # Expected: the cached JWT aged out. Refresh once, then retry.
            session = self._authenticate()
            with self._reaching():
                response = session.request(verb, url, params=clean)

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

        try:
            return response.json()
        except json.JSONDecodeError as exc:
            raise FinaryError(f"Réponse non-JSON depuis {path}: {exc}") from exc

    def get(self, path: str, params: dict[str, Any] | None = None) -> Any:
        """Shorthand for a GET. Returns the payload's ``result`` when present."""
        body = self.request("GET", path, params)
        if isinstance(body, dict) and "result" in body:
            return body["result"]
        return body
