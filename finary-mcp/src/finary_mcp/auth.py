"""Clerk authentication against Finary.

Finary does not publish an API, and has no API keys. Its web app authenticates
through Clerk (``clerk.finary.com``) and then calls ``api.finary.com`` with a
short-lived bearer JWT. This module reproduces that exchange:

    sign-in (email + password [+ TOTP])  ->  session id + cookies
    session id + cookies                 ->  fresh JWT, on demand

Only the second step happens at runtime. The password is used once, in memory,
during :func:`sign_in` and is never returned, logged or stored.

Accounts created through Google (or any other SSO provider) have no password at
all, so the first step is impossible for them. :func:`import_browser_session`
covers that case by adopting the session the user's browser already holds —
no password exists, so none can be typed, stored or leaked.

This is the one module allowed to issue non-GET requests, and only ever to
Clerk — never to ``api.finary.com``. The read-only guarantee for the Finary API
itself is enforced in :mod:`finary_mcp.client`.
"""

from __future__ import annotations

import re
import time
from typing import Any, Callable

from curl_cffi import requests

from .storage import StoredSession

APP_ROOT = "https://app.finary.com"
CLERK_ROOT = "https://clerk.finary.com"

#: Browser TLS fingerprints to impersonate, newest first. Clerk sits behind bot
#: protection that rejects Python's default TLS handshake, so this is required,
#: not cosmetic. Older curl_cffi builds do not know the newer profiles, hence
#: the fallback chain.
IMPERSONATE_CHAIN = ("chrome124", "chrome120", "chrome110")

_BASE_HEADERS = {
    "Origin": APP_ROOT,
    "Referer": f"{APP_ROOT}/",
    "Accept": "application/json",
}


class AuthError(RuntimeError):
    """Sign-in or refresh failed. Message is safe to show the user."""


class MFARequired(AuthError):
    """The account has 2FA enabled and no code was supplied."""


def _impersonation() -> str:
    """Pick a TLS profile this curl_cffi build actually supports."""
    try:
        from curl_cffi.requests.impersonate import BrowserTypeLiteral  # noqa: F401

        import typing

        supported = set(typing.get_args(BrowserTypeLiteral))
    except Exception:  # pragma: no cover - depends on curl_cffi internals
        return IMPERSONATE_CHAIN[-1]
    for candidate in IMPERSONATE_CHAIN:
        if candidate in supported:
            return candidate
    return IMPERSONATE_CHAIN[-1]


def new_session() -> requests.Session:
    """A curl_cffi session with a browser-like TLS fingerprint."""
    session = requests.Session()
    session.impersonate = _impersonation()
    return session


def _dump_cookies(session: requests.Session) -> list[dict[str, str]]:
    """Serialise the cookie jar into something JSON-storable."""
    jar = getattr(session.cookies, "jar", session.cookies)
    out: list[dict[str, str]] = []
    for cookie in jar:
        out.append(
            {
                "name": cookie.name,
                "value": cookie.value or "",
                "domain": cookie.domain or "",
                "path": cookie.path or "/",
            }
        )
    return out


def _load_cookies(session: requests.Session, cookies: list[dict[str, str]]) -> None:
    for cookie in cookies:
        session.cookies.set(
            cookie["name"],
            cookie["value"],
            domain=cookie.get("domain") or "",
            path=cookie.get("path") or "/",
        )


def _clerk_errors(payload: dict[str, Any]) -> str | None:
    errors = payload.get("errors")
    if not errors:
        return None
    parts = [
        err.get("long_message") or err.get("message") or str(err) for err in errors
    ]
    return ", ".join(parts)


def sign_in(
    email: str,
    password: str,
    otp_provider: Callable[[], str] | None = None,
) -> StoredSession:
    """Authenticate against Clerk and return a persistable session.

    ``otp_provider`` is called only if the account has TOTP enabled. It should
    prompt the user and return the 6-digit code. Passing None turns a 2FA
    account into an :class:`MFARequired` error instead of a hang.
    """
    session = new_session()
    payload = {"identifier": email, "password": password}

    response = session.post(
        f"{CLERK_ROOT}/v1/client/sign_ins", data=payload, headers=_BASE_HEADERS
    )
    if response.status_code >= 500:
        raise AuthError(
            f"Clerk a répondu {response.status_code}. Service indisponible, réessayez."
        )

    try:
        body = response.json()
    except Exception as exc:  # pragma: no cover - network shape
        raise AuthError(f"Réponse illisible de Clerk : {exc}") from exc

    if message := _clerk_errors(body):
        raise AuthError(f"Échec de connexion : {message}")

    status = body.get("response", {}).get("status")

    if status == "needs_second_factor":
        if otp_provider is None:
            raise MFARequired(
                "Ce compte a la double authentification activée : un code TOTP "
                "est requis."
            )
        code = otp_provider().strip()
        if not code:
            raise MFARequired("Aucun code TOTP fourni.")
        sign_in_id = body["response"]["id"]
        time.sleep(0.3)  # Clerk rate-limits back-to-back attempts.
        response = session.post(
            f"{CLERK_ROOT}/v1/client/sign_ins/{sign_in_id}/attempt_second_factor",
            data={"strategy": "totp", "code": code},
            headers=_BASE_HEADERS,
        )
        body = response.json()
        if message := _clerk_errors(body):
            raise AuthError(f"Code TOTP refusé : {message}")
        status = body.get("response", {}).get("status")

    if status != "complete":
        raise AuthError(
            f"Connexion non aboutie (statut Clerk : {status!r}). "
            "Vérifiez l'e-mail et le mot de passe."
        )

    sessions = body.get("client", {}).get("sessions") or []
    if not sessions:
        raise AuthError("Clerk n'a renvoyé aucune session exploitable.")

    clerk_session = sessions[0]
    jwt = (clerk_session.get("last_active_token") or {}).get("jwt", "")

    return StoredSession(
        session_id=clerk_session["id"],
        cookies=_dump_cookies(session),
        jwt=jwt,
        email=email,
    )


#: Clerk's long-lived client cookie. The one value that actually matters.
CLIENT_COOKIE = "__client"


def parse_cookie_blob(blob: str) -> dict[str, str]:
    """Pull cookies out of whatever the user managed to copy.

    Browsers offer several shapes and users paste all of them, so accept the
    lot rather than demanding one exact format:

    - a full "Copy as cURL" command, with ``-H 'cookie: a=1; b=2'`` or ``-b``
    - a bare ``cookie: a=1; b=2`` header line
    - just ``a=1; b=2``
    - a lone ``__client`` value with no name at all
    """
    text = blob.strip()
    if not text:
        return {}

    # Narrow to the cookie header when the paste is a whole cURL command;
    # otherwise every other -H would be parsed as a cookie.
    match = re.search(r"(?is)\bcookie\s*:\s*([^'\"\n]+)", text)
    if not match:
        match = re.search(r"(?is)\B-b\s+['\"]([^'\"]+)['\"]", text)
    if match:
        text = match.group(1)

    cookies: dict[str, str] = {}
    for part in text.split(";"):
        part = part.strip()
        if not part or "=" not in part:
            continue
        name, _, value = part.partition("=")
        name, value = name.strip(), value.strip()
        # A cURL paste can drop trailing quotes into the last value.
        value = value.rstrip("'\"")
        if name:
            cookies[name] = value

    if not cookies and "=" not in text and " " not in text:
        # A lone opaque token: assume it is the cookie that matters.
        cookies[CLIENT_COOKIE] = text

    return cookies


def import_browser_session(blob: str) -> StoredSession:
    """Adopt the Clerk session a browser already holds.

    The route for Google/SSO accounts, which have no password to sign in with.
    Only the ``__client`` cookie is really needed: Clerk's ``/v1/client``
    endpoint resolves it into the session id and a current JWT.
    """
    cookies = parse_cookie_blob(blob)
    if not cookies:
        raise AuthError(
            "Aucun cookie n'a pu être lu dans ce que vous avez collé. "
            "Attendu : un en-tête « cookie: ... », une commande cURL copiée "
            "depuis l'onglet Réseau, ou la valeur du cookie __client."
        )
    if CLIENT_COOKIE not in cookies:
        found = ", ".join(sorted(cookies)) or "aucun"
        raise AuthError(
            f"Le cookie « {CLIENT_COOKIE} » est absent (trouvés : {found}). "
            "C'est celui qui porte la session Clerk. Il est HttpOnly, donc "
            "invisible depuis `document.cookie` : copiez-le depuis l'onglet "
            "Application/Stockage des outils de développement, ou copiez une "
            "requête vers clerk.finary.com en « Copier comme cURL »."
        )

    session = new_session()
    for name, value in cookies.items():
        session.cookies.set(name, value, domain=".finary.com", path="/")

    response = session.get(f"{CLERK_ROOT}/v1/client", headers=_BASE_HEADERS)
    if response.status_code != 200:
        raise AuthError(
            f"Clerk a refusé ce cookie (HTTP {response.status_code}). "
            "Il est probablement expiré : reconnectez-vous sur "
            "app.finary.com, puis recopiez-le."
        )

    body = response.json()
    if message := _clerk_errors(body):
        raise AuthError(f"Clerk a rejeté la session : {message}")

    sessions = (body.get("response") or {}).get("sessions") or []
    active = [s for s in sessions if s.get("status") == "active"] or sessions
    if not active:
        raise AuthError(
            "Ce cookie ne porte aucune session active. Vérifiez que vous êtes "
            "bien connecté sur app.finary.com dans ce navigateur."
        )

    clerk_session = active[0]
    return StoredSession(
        session_id=clerk_session["id"],
        cookies=_dump_cookies(session),
        jwt=(clerk_session.get("last_active_token") or {}).get("jwt", ""),
        email=_extract_email(clerk_session),
    )


def _extract_email(clerk_session: dict[str, Any]) -> str:
    """Best-effort label for `status` output. Never load-bearing."""
    user = clerk_session.get("user") or {}
    if identifier := user.get("identifier"):
        return str(identifier)
    for address in user.get("email_addresses") or []:
        if value := address.get("email_address"):
            return str(value)
    return ""


def refresh_jwt(stored: StoredSession) -> str:
    """Mint a fresh bearer token from the stored Clerk session.

    Mutates ``stored`` in place with the new JWT and any rotated cookies; the
    caller is responsible for persisting it.
    """
    if not stored.session_id:
        raise AuthError("Session absente. Lancez `finary-mcp login`.")

    session = new_session()
    _load_cookies(session, stored.cookies)

    response = session.post(
        f"{CLERK_ROOT}/v1/client/sessions/{stored.session_id}/tokens",
        headers=_BASE_HEADERS,
    )
    if response.status_code != 200:
        raise AuthError(
            "La session Finary a expiré ou a été révoquée "
            f"(Clerk {response.status_code}). Relancez `finary-mcp login`."
        )

    jwt = response.json().get("jwt", "")
    if not jwt:
        raise AuthError("Clerk n'a pas renvoyé de jeton. Relancez `finary-mcp login`.")

    stored.jwt = jwt
    refreshed = _dump_cookies(session)
    if refreshed:
        stored.cookies = refreshed
    return jwt
