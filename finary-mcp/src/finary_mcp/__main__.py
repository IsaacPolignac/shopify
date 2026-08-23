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

    sub.add_parser("login", help="se connecter à Finary (mot de passe non conservé)")
    sub.add_parser("logout", help="supprimer la session enregistrée")
    sub.add_parser("status", help="vérifier la session")
    sub.add_parser("serve", help="démarrer le serveur MCP sur stdio")

    args = parser.parse_args()
    handlers = {
        "login": cmd_login,
        "logout": cmd_logout,
        "status": cmd_status,
        "serve": cmd_serve,
    }
    # No subcommand means an MCP client launched us directly; serving is the
    # only sensible default there.
    handler = handlers.get(args.command or "serve")
    assert handler is not None
    return handler(args)


if __name__ == "__main__":
    raise SystemExit(main())
