"""Command line entry point.

``login`` is deliberately a terminal command rather than an MCP tool: the
password must be typed into a TTY, where it is never echoed, never written to
disk, and never crosses the MCP transport into a model's context.
"""

from __future__ import annotations

import argparse
import getpass
import os
import sys

from . import auth, storage
from .client import FinaryClient, FinaryError


def _prompt_otp() -> str:
    return input("Code TOTP à 6 chiffres (application d'authentification) : ")


def cmd_login(_: argparse.Namespace) -> int:
    """Authenticate once and store only the resulting session."""
    print("Connexion à Finary")
    print("-" * 50)
    print(
        "Votre mot de passe n'est utilisé que pour cette connexion.\n"
        "Il n'est jamais enregistré, ni sur disque, ni dans le trousseau.\n"
    )

    email = os.environ.get("FINARY_EMAIL") or input("E-mail Finary : ").strip()
    if not email:
        print("Erreur : e-mail requis.", file=sys.stderr)
        return 1

    password = os.environ.get("FINARY_PASSWORD")
    if password:
        print("Mot de passe repris depuis FINARY_PASSWORD.")
    else:
        password = getpass.getpass("Mot de passe (masqué) : ")
    if not password:
        print("Erreur : mot de passe requis.", file=sys.stderr)
        return 1

    try:
        session = auth.sign_in(email, password, otp_provider=_prompt_otp)
    except auth.AuthError as exc:
        print(f"\nÉchec : {exc}", file=sys.stderr)
        print(
            "\nCompte créé avec Google ou un autre SSO ? Il n'a alors aucun "
            "mot de passe et cette commande ne peut pas aboutir.\n"
            "Utilisez `finary-mcp import-session` à la place.",
            file=sys.stderr,
        )
        return 1
    finally:
        # Drop the only reference we hold. Python may keep the string alive
        # until GC, but nothing in this process reads it again.
        del password

    try:
        storage.save_session(session)
    except storage.StorageError as exc:
        print(f"\nConnexion réussie mais impossible d'enregistrer :\n{exc}", file=sys.stderr)
        return 1

    print(f"\nConnecté en tant que {email}.")
    print(f"Session enregistrée dans : {storage.describe_backend()}")
    print("Le mot de passe n'a pas été conservé.")
    return 0


IMPORT_INSTRUCTIONS = """\
Import de session depuis le navigateur
--------------------------------------
Pour les comptes créés avec Google (ou tout autre SSO) : ces comptes n'ont
pas de mot de passe, donc `finary-mcp login` ne peut pas fonctionner. On
reprend ici la session que votre navigateur détient déjà.

Aucun nom de cookie à chercher :

  1. Connectez-vous sur https://app.finary.com dans Chrome.
  2. Cmd+Option+I pour ouvrir les outils de développement.
  3. Onglet « Network » (Réseau).
  4. Tapez  clerk  dans le champ de filtre.
  5. Rechargez la page avec Cmd+R. Des lignes apparaissent.
  6. Clic droit sur n'importe laquelle  >  Copy  >  Copy as cURL.

Puis, plutôt que de coller ici (la commande fait souvent plusieurs lignes,
ce que ce prompt gère mal), lancez sur macOS :

    pbpaste | finary-mcp import-session

Sous Linux :  xclip -o -selection clipboard | finary-mcp import-session

Sur Safari, activez d'abord le menu Développement :
Réglages > Avancé > « Afficher les fonctionnalités pour développeurs web ».

Ce que vous copiez contient vos cookies de session : cela vaut accès à
votre compte. Ne le partagez avec personne, ne le mettez pas dans une issue.
"""


def _read_blob() -> str:
    """Read the pasted credential, from a pipe when there is one.

    A "Copy as cURL" is frequently multi-line, and a hidden single-line prompt
    would silently truncate it — hence the pipe being the documented route.
    """
    if not sys.stdin.isatty():
        return sys.stdin.read()

    try:
        return getpass.getpass("Ou collez ici, sur UNE ligne (invisible) : ")
    except (EOFError, OSError):
        # No usable terminal for a hidden prompt.
        return ""


def cmd_import_session(_: argparse.Namespace) -> int:
    """Adopt a browser session — the path for Google/SSO accounts."""
    if sys.stdin.isatty():
        print(IMPORT_INSTRUCTIONS)

    blob = _read_blob()
    if not blob.strip():
        print(
            "Erreur : rien à lire. Copiez la requête en « Copy as cURL » puis "
            "lancez :  pbpaste | finary-mcp import-session",
            file=sys.stderr,
        )
        return 1

    # Report what was understood before going to the network, so a failure
    # points at the paste or at Clerk rather than being ambiguous. Names only,
    # never values.
    found = auth.parse_cookie_blob(blob)
    print(f"\nCookies lus      : {len(found)}")
    if found:
        print(f"Noms             : {', '.join(sorted(found))}")
    print(
        f"Cookie de session: "
        f"{'trouvé' if auth.CLIENT_COOKIE in found else 'ABSENT (' + auth.CLIENT_COOKIE + ')'}"
    )
    print(f"User-Agent       : {'capturé' if auth.parse_user_agent(blob) else 'absent'}")
    print("Contact de Clerk en cours…")

    try:
        session = auth.import_browser_session(blob)
    except auth.AuthError as exc:
        print(f"\nÉchec : {exc}", file=sys.stderr)
        return 1
    finally:
        del blob

    try:
        storage.save_session(session)
    except storage.StorageError as exc:
        print(f"\nSession valide mais impossible de l'enregistrer :\n{exc}", file=sys.stderr)
        return 1

    who = session.email or "(compte identifié)"
    print(f"\nSession importée : {who}")
    print(f"Enregistrée dans : {storage.describe_backend()}")
    print("Vérifiez avec `finary-mcp status`.")
    return 0


def cmd_import_chrome(_: argparse.Namespace) -> int:
    """Read the session straight from the local browser. No copy-paste."""
    from . import chrome

    print("Import depuis le navigateur local")
    print("-" * 50)
    print(
        "Lecture des cookies finary.com stockés par Chrome/Brave/Edge.\n"
        "macOS demandera l'autorisation d'accéder au trousseau : cliquez\n"
        "« Autoriser ». Aucun autre site n'est lu, rien n'est modifié.\n"
    )

    try:
        cookie_header, source = chrome.read_finary_cookies()
    except chrome.ChromeError as exc:
        print(f"Échec : {exc}", file=sys.stderr)
        return 1

    names = sorted(auth.parse_cookie_blob(cookie_header))
    print(f"Source           : {source}")
    print(f"Cookies lus      : {len(names)}")
    print(f"Noms             : {', '.join(names)}")
    print(
        f"Cookie de session: "
        f"{'trouvé' if auth.CLIENT_COOKIE in names else 'ABSENT (' + auth.CLIENT_COOKIE + ')'}"
    )
    print("Contact de Clerk en cours…")

    try:
        session = auth.import_browser_session(cookie_header)
    except auth.AuthError as exc:
        print(f"\nÉchec : {exc}", file=sys.stderr)
        return 1

    try:
        storage.save_session(session)
    except storage.StorageError as exc:
        print(f"\nSession valide mais non enregistrée :\n{exc}", file=sys.stderr)
        return 1

    print(f"\nSession importée : {session.email or '(compte identifié)'}")
    print(f"Enregistrée dans : {storage.describe_backend()}")
    print("Vérifiez avec `finary-mcp status`.")
    return 0


def cmd_logout(_: argparse.Namespace) -> int:
    if storage.clear_session():
        print("Session supprimée.")
        print(
            "Pensez aussi à révoquer l'appareil depuis Finary "
            "(Paramètres > Sécurité) si la machine n'est plus de confiance."
        )
    else:
        print("Aucune session enregistrée.")
    return 0


def cmd_status(_: argparse.Namespace) -> int:
    stored = storage.load_session()
    print(f"Stockage : {storage.describe_backend()}")
    if stored is None:
        print("État     : non connecté")
        print("Action   : lancez `finary-mcp login`")
        return 1

    print(f"Compte   : {stored.email or '(inconnu)'}")
    try:
        me = FinaryClient(stored).get("/users/me")
    except (FinaryError, auth.AuthError) as exc:
        print(f"État     : session invalide — {exc}")
        return 1

    currency = (me.get("ui_configuration") or {}).get("display_currency", {})
    print("État     : session valide")
    print(f"Devise   : {currency.get('code', '?')}")
    print("Mode     : lecture seule")
    return 0


def cmd_doctor(_: argparse.Namespace) -> int:
    """Print a diagnostic report that is safe to share.

    Every credential is reduced to a presence flag, a length, or a name.
    No cookie value, JWT or session token is ever printed, so the output can
    be pasted into a chat or an issue without leaking an account.
    """
    import platform

    from . import __version__

    def line(label: str, value: object) -> None:
        print(f"  {label:.<34} {value}")

    print("finary-mcp doctor")
    print("=" * 52)

    print("\n[Environnement]")
    line("finary-mcp", __version__)
    line("Python", platform.python_version())
    line("Plateforme", f"{platform.system()} {platform.machine()}")
    try:
        import curl_cffi

        line("curl_cffi", getattr(curl_cffi, "__version__", "?"))
    except Exception as exc:  # pragma: no cover - import guard
        line("curl_cffi", f"INDISPONIBLE ({exc})")
    line("Profil TLS", auth._impersonation())

    print("\n[Stockage]")
    line("Backend", storage.describe_backend())
    stored = storage.load_session()
    if stored is None:
        line("Session enregistrée", "NON")
    else:
        line("Session enregistrée", "oui")
        line("session_id", f"{stored.session_id[:12]}… ({len(stored.session_id)} car.)")
        line("Cookies (noms)", ", ".join(c["name"] for c in stored.cookies) or "aucun")
        line("JWT en cache", f"oui ({len(stored.jwt)} car.)" if stored.jwt else "non")
        line("User-Agent capturé", stored.user_agent[:60] or "aucun")

    print("\n[Réseau]")
    # Unauthenticated reachability: proves whether Cloudflare lets us through
    # at all, independently of whether the session is any good.
    for label, url in (
        ("clerk.finary.com", f"{auth.CLERK_ROOT}/v1/client"),
        ("api.finary.com", "https://api.finary.com/users/me"),
    ):
        try:
            probe = auth.new_session()
            response = probe.get(
                url, params=auth.parse_clerk_versions(""), headers=auth._BASE_HEADERS
            )
            verdict = f"HTTP {response.status_code}"
            if response.status_code == 403:
                verdict += "  <- bloqué (Cloudflare ?)"
            elif response.status_code in (200, 401):
                verdict += "  <- joignable"
            line(label, verdict)
        except Exception as exc:
            line(label, f"ÉCHEC : {type(exc).__name__}: {str(exc)[:90]}")

    print("\n[Session]")
    if stored is None:
        line("Vérification", "ignorée (aucune session)")
        print("\nProchaine étape : `finary-mcp import-session` (compte Google/SSO)")
        print("ou `finary-mcp login` (compte avec mot de passe).")
        return 1

    try:
        me = FinaryClient(stored).get("/users/me")
    except (FinaryError, auth.AuthError) as exc:
        line("Vérification", "ÉCHEC")
        print(f"\n  Raison : {exc}")
        return 1

    line("Vérification", "OK — la session fonctionne")
    line("Devise", (me.get("ui_configuration") or {}).get("display_currency", {}).get("code", "?"))
    return 0


def cmd_serve(_: argparse.Namespace) -> int:
    from .server import run

    run()
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(
        prog="finary-mcp",
        description="Serveur MCP en lecture seule pour Finary.",
    )
    sub = parser.add_subparsers(dest="command")

    sub.add_parser(
        "import-chrome",
        help="lire la session directement dans Chrome/Brave/Edge (recommandé)",
    )
    sub.add_parser("login", help="se connecter avec e-mail + mot de passe")
    sub.add_parser(
        "import-session",
        help="importer une session collée à la main (repli)",
    )
    sub.add_parser("logout", help="supprimer la session enregistrée")
    sub.add_parser("status", help="vérifier la session")
    sub.add_parser(
        "doctor", help="rapport de diagnostic complet, sans aucun secret"
    )
    sub.add_parser("serve", help="démarrer le serveur MCP sur stdio")

    args = parser.parse_args()
    handlers = {
        "login": cmd_login,
        "import-chrome": cmd_import_chrome,
        "import-session": cmd_import_session,
        "logout": cmd_logout,
        "status": cmd_status,
        "doctor": cmd_doctor,
        "serve": cmd_serve,
    }
    # No subcommand means an MCP client launched us directly; serving is the
    # only sensible default there.
    handler = handlers.get(args.command or "serve")
    assert handler is not None
    return handler(args)


if __name__ == "__main__":
    raise SystemExit(main())
