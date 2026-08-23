"""MCP server exposing Finary as read-only tools.

Every tool here funnels through :class:`finary_mcp.client.FinaryClient`, which
only ever issues GET requests. Adding a mutating tool would require changing
that class, which is the point: the boundary is enforced in one place.

Tool descriptions are in French — Finary is a French product and its users are
the audience — while implementation comments stay in English.
"""

from __future__ import annotations

import functools
from typing import Any, Callable

from mcp.server.mcpserver import MCPServer
from mcp.types import ToolAnnotations

from . import storage
from .auth import AuthError
from .client import FinaryClient, FinaryError
from .compact import prepare

mcp = MCPServer(
    "finary",
    instructions=(
        "Accès en lecture seule au patrimoine Finary de l'utilisateur : "
        "portefeuille, comptes, immobilier, cryptos, transactions. "
        "Aucun outil ne peut modifier les données : le client HTTP sous-jacent "
        "n'émet que des requêtes GET. Si un appel échoue, commencez par "
        "`finary_status` pour distinguer une session expirée d'une erreur d'API."
    ),
)

#: Advertised on every tool, so a client can see the guarantee in the protocol
#: rather than having to take the README's word for it.
READ_ONLY = ToolAnnotations(
    readOnlyHint=True,
    destructiveHint=False,
    idempotentHint=True,
    openWorldHint=True,
)

_client: FinaryClient | None = None


def _get_client() -> FinaryClient:
    global _client
    if _client is None:
        _client = FinaryClient()
    return _client


def handles_errors(func: Callable[..., Any]) -> Callable[..., Any]:
    """Turn API failures into readable text instead of a stack trace.

    An MCP client shows the model whatever comes back; a tidy sentence lets it
    recover (re-login, adjust a parameter) where a traceback just derails it.
    """

    @functools.wraps(func)
    def wrapper(*args: Any, **kwargs: Any) -> Any:
        try:
            return func(*args, **kwargs)
        except AuthError as exc:
            # By far the most common failure: the Clerk session aged out.
            # Say so plainly, with the fix, instead of leaking a class name.
            return {
                "error": str(exc),
                "action": "Lancez `finary-mcp login` dans un terminal pour "
                "rétablir la session, puis réessayez.",
            }
        except FinaryError as exc:
            return {"error": str(exc)}
        except Exception as exc:  # pragma: no cover - defensive
            return {"error": f"Erreur inattendue : {type(exc).__name__}: {exc}"}

    return wrapper


def readonly_tool(func: Callable[..., Any]) -> Callable[..., Any]:
    """Register a tool: read-only annotation plus friendly error handling."""
    return mcp.tool(annotations=READ_ONLY)(handles_errors(func))


# ---------------------------------------------------------------------------
# Session and account
# ---------------------------------------------------------------------------


@readonly_tool
def finary_status() -> dict[str, Any]:
    """Vérifie que la session Finary est valide et indique où elle est stockée.

    À utiliser en premier si un autre outil échoue : distingue une session
    expirée (il faut relancer `finary-mcp login`) d'une erreur d'API.
    """
    stored = storage.load_session()
    if stored is None:
        return {
            "connecte": False,
            "stockage": storage.describe_backend(),
            "action": "Lancez `finary-mcp login` dans un terminal.",
        }
    me = _get_client().get("/users/me")
    currency = (me.get("ui_configuration") or {}).get("display_currency", {})
    return {
        "connecte": True,
        "compte": stored.email or me.get("email"),
        "devise_affichage": currency.get("code"),
        "stockage": storage.describe_backend(),
        "mode": "lecture seule (aucune écriture possible)",
    }


@readonly_tool
def finary_me(raw: bool = False) -> Any:
    """Profil de l'utilisateur Finary : identité, devise d'affichage, préférences."""
    return prepare(_get_client().get("/users/me"), raw=raw)


@readonly_tool
def finary_organizations(raw: bool = False) -> Any:
    """Organisations du compte (notamment l'organisation « famille » si elle existe).

    L'identifiant renvoyé ici sert à consulter le patrimoine consolidé du foyer
    via `finary_raw_get` sur les routes `/organizations/{id}/...`.
    """
    return prepare(_get_client().get("/users/me/organizations"), raw=raw)


@readonly_tool
def finary_subscription(raw: bool = False) -> Any:
    """Détail de l'abonnement Finary (formule, statut, échéance)."""
    return prepare(_get_client().get("/users/me/subscription_details"), raw=raw)


# ---------------------------------------------------------------------------
# Whole-portfolio views
# ---------------------------------------------------------------------------


@readonly_tool
def finary_net_worth(period: str = "all", valuation: str = "net", raw: bool = False) -> Any:
    """Évolution du patrimoine dans le temps. Le dernier point = patrimoine actuel.

    C'est l'outil à privilégier pour « combien je pèse » ou « comment
    j'évolue ».

    `period` : "all", "1w", "1m", "ytd" ou "1y".
    `valuation` : "net" (net de dettes), "gross" (brut) ou "finary"
    (patrimoine financier seul, hors immobilier).
    """
    allowed_periods = {"all", "1w", "1m", "ytd", "1y"}
    allowed_types = {"net", "gross", "finary"}
    if period not in allowed_periods:
        return {"error": f"`period` doit valoir l'un de {sorted(allowed_periods)}."}
    if valuation not in allowed_types:
        return {"error": f"`valuation` doit valoir l'un de {sorted(allowed_types)}."}
    data = _get_client().get(
        "/users/me/portfolio/timeseries", {"period": period, "type": valuation}
    )
    return prepare(data, raw=raw)


@readonly_tool
def finary_portfolio(portfolio_type: str = "investments", raw: bool = False) -> Any:
    """Vue consolidée d'un pan du portefeuille, avec valorisation et plus-values.

    `portfolio_type` : "investments" (comptes-titres, PEA, AV…), "cryptos" ou
    "crowdlendings".
    """
    allowed = {"investments", "cryptos", "crowdlendings"}
    if portfolio_type not in allowed:
        return {"error": f"`portfolio_type` doit valoir l'un de {sorted(allowed)}."}
    return prepare(_get_client().get(f"/users/me/portfolio/{portfolio_type}"), raw=raw)


@readonly_tool
def finary_distribution(
    portfolio_type: str = "investments", by: str = "stock", raw: bool = False
) -> Any:
    """Répartition du portefeuille — pour les questions d'allocation et de diversification.

    `portfolio_type` : "investments", "cryptos" ou "crowdlendings".
    `by` : "stock", "sector", "account" ou "crypto" selon le type. Pour les
    cryptos utilisez "crypto" ; pour le crowdlending, "account".
    """
    allowed = {"investments", "cryptos", "crowdlendings"}
    if portfolio_type not in allowed:
        return {"error": f"`portfolio_type` doit valoir l'un de {sorted(allowed)}."}
    data = _get_client().get(
        f"/users/me/portfolio/{portfolio_type}/distribution", {"type": by}
    )
    return prepare(data, raw=raw)


# ---------------------------------------------------------------------------
# Asset classes
# ---------------------------------------------------------------------------


@readonly_tool
def finary_investments(raw: bool = False) -> Any:
    """Comptes d'investissement et titres détenus (nom, ISIN, quantité, valeur, +/-value).

    Équivalent de `finary_portfolio("investments")`, exposé séparément parce
    que c'est la question la plus fréquente.
    """
    return prepare(_get_client().get("/users/me/portfolio/investments"), raw=raw)


@readonly_tool
def finary_securities(raw: bool = False) -> Any:
    """Lignes de titres saisies manuellement (actions, ETF, obligations)."""
    return prepare(_get_client().get("/users/me/securities"), raw=raw)


@readonly_tool
def finary_cryptos(raw: bool = False) -> Any:
    """Avoirs en cryptomonnaies : quantité, cours, valorisation, plus-value."""
    return prepare(_get_client().get("/users/me/cryptos"), raw=raw)


@readonly_tool
def finary_real_estates(raw: bool = False) -> Any:
    """Biens immobiliers : valorisation, emprunts adossés, données locatives."""
    return prepare(_get_client().get("/users/me/real_estates"), raw=raw)


@readonly_tool
def finary_scpis(raw: bool = False) -> Any:
    """Parts de SCPI détenues (pierre-papier)."""
    return prepare(_get_client().get("/users/me/scpis"), raw=raw)


@readonly_tool
def finary_fonds_euro(raw: bool = False) -> Any:
    """Fonds en euros d'assurance-vie, avec le rendement annuel."""
    return prepare(_get_client().get("/users/me/fonds_euro"), raw=raw)


@readonly_tool
def finary_precious_metals(raw: bool = False) -> Any:
    """Métaux précieux détenus (or, argent…) : quantité et valorisation."""
    return prepare(_get_client().get("/users/me/precious_metals"), raw=raw)


@readonly_tool
def finary_startups(raw: bool = False) -> Any:
    """Participations dans des startups / private equity."""
    return prepare(_get_client().get("/users/me/startups"), raw=raw)


@readonly_tool
def finary_crowdlendings(raw: bool = False) -> Any:
    """Positions de crowdlending / financement participatif."""
    return prepare(_get_client().get("/users/me/crowdlendings"), raw=raw)


@readonly_tool
def finary_other_assets(raw: bool = False) -> Any:
    """Autres actifs déclarés à la main : montres, voitures, art, objets de valeur."""
    return prepare(_get_client().get("/users/me/generic_assets"), raw=raw)


# ---------------------------------------------------------------------------
# Accounts and institutions
# ---------------------------------------------------------------------------


@readonly_tool
def finary_accounts(account_type: str = "", raw: bool = False) -> Any:
    """Comptes rattachés (courants, épargne, titres, crypto) avec leur solde.

    `account_type` : vide pour tout, sinon "crypto", "stocks" ou "crowdlending".
    """
    params = {"manual_type": account_type} if account_type else None
    return prepare(_get_client().get("/users/me/holdings_accounts", params), raw=raw)


@readonly_tool
def finary_institution_connections(raw: bool = False) -> Any:
    """Connexions bancaires : établissements synchronisés, statut et dernière mise à jour.

    Utile pour diagnostiquer un patrimoine qui semble incomplet ou périmé —
    une connexion en erreur y apparaît explicitement.
    """
    return prepare(
        _get_client().get("/users/me/institution_connections/details"), raw=raw
    )


# ---------------------------------------------------------------------------
# Cash flow
# ---------------------------------------------------------------------------


@readonly_tool
def finary_transactions(
    portfolio_type: str = "checking_accounts",
    page: int = 1,
    per_page: int = 50,
    query: str = "",
    start_date: str = "",
    end_date: str = "",
    account_id: str = "",
    institution_id: str = "",
    raw: bool = False,
) -> Any:
    """Transactions, paginées. Base des analyses de dépenses et de flux.

    `portfolio_type` : "checking_accounts" (comptes courants),
    "credit_accounts" (cartes de crédit) ou "investments" (ordres de bourse).
    `start_date` / `end_date` au format AAAA-MM-JJ.
    `query` filtre sur le libellé.
    """
    allowed = {"checking_accounts", "credit_accounts", "investments"}
    if portfolio_type not in allowed:
        return {"error": f"`portfolio_type` doit valoir l'un de {sorted(allowed)}."}
    per_page = max(1, min(per_page, 200))
    data = _get_client().get(
        f"/users/me/portfolio/{portfolio_type}/transactions",
        {
            "page": page,
            "per_page": per_page,
            "query": query,
            "start_date": start_date,
            "end_date": end_date,
            "account_id": account_id,
            "institution_id": institution_id,
        },
    )
    return prepare(data, raw=raw)


@readonly_tool
def finary_dividends(raw: bool = False) -> Any:
    """Dividendes perçus et à venir sur le portefeuille d'investissement."""
    return prepare(
        _get_client().get("/users/me/portfolio/investments/dividends"), raw=raw
    )


# ---------------------------------------------------------------------------
# Escape hatch
# ---------------------------------------------------------------------------


@readonly_tool
def finary_raw_get(path: str, params_json: str = "", raw: bool = True) -> Any:
    """Appel GET brut sur l'API Finary, pour les routes sans outil dédié.

    Reste en lecture seule : le client refuse tout verbe autre que GET, donc
    cet outil ne peut rien modifier.

    `path` : chemin commençant par "/", par exemple "/users/me/sharing_links"
    ou "/organizations/{id}/holdings_accounts" (id obtenu via
    `finary_organizations`).
    `params_json` : paramètres de requête, en objet JSON. Exemple :
    '{"period": "1y"}'.
    """
    import json

    if not path.startswith("/"):
        return {"error": "`path` doit commencer par « / »."}

    params: dict[str, Any] = {}
    if params_json.strip():
        try:
            parsed = json.loads(params_json)
        except json.JSONDecodeError as exc:
            return {"error": f"`params_json` n'est pas un JSON valide : {exc}"}
        if not isinstance(parsed, dict):
            return {"error": "`params_json` doit être un objet JSON."}
        params = parsed

    return prepare(_get_client().get(path, params), raw=raw)


def run() -> None:
    """Entry point for ``finary-mcp serve``."""
    mcp.run()
