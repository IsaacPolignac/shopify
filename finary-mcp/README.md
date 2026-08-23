# finary-mcp

**Serveur MCP en lecture seule pour [Finary](https://finary.com).** Branchez votre
patrimoine sur Claude (ou tout autre client MCP) et posez-lui des questions en
langage naturel.

> *Read-only MCP server for Finary, the French wealth-tracking app. Ask any MCP
> client about your net worth, holdings and transactions. Your password is never
> stored; the session lives in your OS keychain. Documentation below is in French,
> as Finary's user base is.*

```
« Quelle est la répartition de mon portefeuille par secteur ? »
« Combien ai-je dépensé en restaurants depuis janvier ? »
« Mon patrimoine net a évolué comment sur un an ? »
« Quelles connexions bancaires sont en erreur ? »
```

---

## Ce que ce serveur garantit

**Lecture seule, structurellement.** Le client HTTP refuse tout verbe autre que
`GET` avant même d'ouvrir une socket ([`client.py`](src/finary_mcp/client.py)).
Ce n'est pas une convention de nommage des outils : un outil d'écriture ajouté
par erreur ou suggéré par un modèle ne pourrait pas atteindre le réseau. Vos
données Finary ne peuvent pas être modifiées ni supprimées par ce serveur.

**Votre mot de passe n'est jamais conservé.** Il est saisi une fois dans votre
terminal (masqué), utilisé pour l'échange d'authentification, puis abandonné.
Ni disque, ni trousseau, ni variable d'environnement obligatoire.

**Seule la session est stockée, chiffrée par l'OS.** Trousseau macOS,
libsecret/KWallet sous Linux, Credential Manager sous Windows. Une session est
révocable depuis Finary ; un mot de passe ne l'est pas.

**Rien de sensible ne peut finir sur GitHub.** Aucun secret dans le dépôt,
aucun secret dans la configuration de votre client MCP. Le fichier de config
que vous éditez ne contient qu'une commande.

---

## Prérequis

- Python 3.10 ou plus
- Un compte Finary
- Recommandé : la double authentification (TOTP) activée sur votre compte

## Installation

Avec [`uv`](https://docs.astral.sh/uv/) (recommandé) :

```bash
uv tool install "git+https://github.com/broly134/shopify.git#subdirectory=finary-mcp"
```

Ou avec `pipx` :

```bash
pipx install "git+https://github.com/broly134/shopify.git#subdirectory=finary-mcp"
```

<details>
<summary>Depuis une copie locale du dépôt</summary>

```bash
cd finary-mcp
python3 -m venv .venv && source .venv/bin/activate
pip install -e .
```
</details>

## Connexion

Deux cas, selon la façon dont votre compte Finary a été créé.

### Compte avec e-mail et mot de passe

```bash
finary-mcp login
```

Le programme demande votre e-mail, votre mot de passe (saisie masquée) et, si la
2FA est active, votre code à 6 chiffres. Il enregistre ensuite **uniquement la
session**.

### Compte créé avec Google (ou un autre SSO)

Ces comptes n'ont **aucun mot de passe** : `login` ne peut pas aboutir. On
reprend à la place la session que votre navigateur détient déjà.

Connectez-vous sur `app.finary.com` dans Chrome, puis :

```bash
finary-mcp import-chrome
```

C'est tout. La commande lit les cookies `finary.com` dans le magasin local de
Chrome (ou Brave, Edge, Chromium), les déchiffre avec la clé du trousseau, et
enregistre la session. macOS demandera une autorisation d'accès au trousseau la
première fois.

Aucun onglet Réseau, aucun copier-coller. **Seuls les hôtes en `finary.com` sont
lus**, la base est copiée avant lecture (rien n'est écrit dans votre profil), et
les valeurs ne quittent jamais la mémoire du processus avant d'aller dans le
trousseau.

<details>
<summary>Repli : coller la session à la main</summary>

Si `import-chrome` ne trouve rien — navigateur non supporté, profil exotique —
il reste la méthode manuelle :

1. `Cmd+Option+I` → onglet **Network**, filtrez sur `clerk`, rechargez.
2. Clic droit sur une requête → **Copy** → **Copy as cURL**.
3. Puis :

```bash
pbpaste | finary-mcp import-session                          # macOS
xclip -o -selection clipboard | finary-mcp import-session    # Linux
```

Le tube n'est pas cosmétique : un « Copy as cURL » fait souvent plusieurs
lignes, qu'un prompt masqué tronquerait silencieusement.

Aucun nom de cookie n'est exigé : la commande envoie ce que vous avez copié et
laisse Clerk trancher, puis récupère au besoin l'identifiant de session dans
l'URL collée.
</details>

Ce chemin est en réalité le plus sobre des deux : aucun mot de passe n'existe,
donc aucun ne peut être saisi, stocké ni divulgué.

> **La commande copiée contient une session active.** Le cookie `__client`
> qu'elle transporte donne accès à votre compte Finary sans mot de passe ni
> 2FA. Traitez-la comme un mot de passe : ne la collez que dans le tube
> ci-dessus, jamais dans une issue, un ticket, une conversation ou un
> presse-papier partagé. Si cela vous arrive, déconnectez-vous de Finary dans
> ce navigateur : la session est alors révoquée côté Clerk et le jeton devient
> inutilisable.

Le User-Agent du navigateur est repris depuis la commande collée et rejoué
ensuite : Cloudflare, qui protège `clerk.finary.com`, lie son jeton
`cf_clearance` au User-Agent qui l'a obtenu, et un écart le ferait rejeter.

Si Clerk refuse malgré tout la session, forcez une autre empreinte TLS :

```bash
FINARY_MCP_IMPERSONATE=chrome150 finary-mcp status
```

Vérifiez à tout moment :

```bash
finary-mcp status     # état de la session et backend de stockage
finary-mcp doctor     # diagnostic complet, sans aucun secret
finary-mcp logout     # supprime la session de la machine
```

`doctor` vérifie versions, profil TLS, trousseau, joignabilité de Clerk et de
l'API, puis validité de la session. Les identifiants n'y apparaissent que sous
forme de présence, de longueur ou de nom — jamais de valeur — donc sa sortie
peut être collée dans une issue telle quelle.

La session Finary reste valide plusieurs semaines. Quand elle expire, un
`finary-mcp login` suffit.

## Brancher le serveur sur un client MCP

### Claude Code

```bash
claude mcp add finary -- finary-mcp serve
```

### Claude Desktop

Dans `claude_desktop_config.json` :

- macOS : `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows : `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "finary": {
      "command": "finary-mcp",
      "args": ["serve"]
    }
  }
}
```

Remarquez qu'**il n'y a aucun identifiant dans ce fichier**. C'est voulu : ce
fichier n'est pas chiffré et se retrouve régulièrement dans des sauvegardes ou
des captures d'écran.

Si `finary-mcp` n'est pas dans le `PATH` de votre client, mettez le chemin
absolu renvoyé par `which finary-mcp`.

---

## Outils disponibles

### Session et compte

| Outil | Description |
|---|---|
| `finary_status` | Valide la session et indique où elle est stockée |
| `finary_me` | Profil, devise d'affichage, préférences |
| `finary_organizations` | Organisations, dont le foyer/famille |
| `finary_subscription` | Formule Finary et échéance |

### Vue d'ensemble

| Outil | Description |
|---|---|
| `finary_net_worth` | Évolution du patrimoine (`all`, `1w`, `1m`, `ytd`, `1y`) en net, brut ou financier |
| `finary_portfolio` | Vue consolidée : investissements, cryptos ou crowdlending |
| `finary_distribution` | Répartition par titre, secteur, compte ou crypto |

### Classes d'actifs

| Outil | Description |
|---|---|
| `finary_investments` | Comptes-titres, PEA, AV et leurs lignes (ISIN, quantité, +/-value) |
| `finary_securities` | Titres saisis manuellement |
| `finary_cryptos` | Cryptomonnaies |
| `finary_real_estates` | Immobilier, emprunts adossés, données locatives |
| `finary_scpis` | SCPI |
| `finary_fonds_euro` | Fonds euros et rendements |
| `finary_precious_metals` | Or, argent et autres métaux |
| `finary_startups` | Participations / private equity |
| `finary_crowdlendings` | Financement participatif |
| `finary_other_assets` | Montres, voitures, art, objets de valeur |

### Comptes et flux

| Outil | Description |
|---|---|
| `finary_accounts` | Comptes rattachés et soldes |
| `finary_institution_connections` | Connexions bancaires et leur statut |
| `finary_transactions` | Transactions paginées, filtrables par date, compte et libellé |
| `finary_dividends` | Dividendes perçus et à venir |

### Échappatoire

| Outil | Description |
|---|---|
| `finary_raw_get` | `GET` brut sur n'importe quelle route de l'API, pour ce qui n'a pas d'outil dédié |

Tous les outils acceptent `raw: true` pour désactiver l'allègement des réponses.

---

## Économie de contexte

Les réponses de Finary sont taillées pour une interface web : URLs de logos,
couleurs de thème, champs vides en pagaille. Par défaut, le serveur élague ces
clés purement décoratives et les valeurs nulles. **Aucun nombre, nom,
identifiant ni date n'est touché** — voir
[`compact.py`](src/finary_mcp/compact.py). Passez `raw: true` sur un outil pour
récupérer la réponse intégrale.

## Détails de sécurité

<details>
<summary>Comment fonctionne l'authentification</summary>

Finary ne publie pas d'API et ne délivre pas de clés. Son application web passe
par [Clerk](https://clerk.com) puis appelle `api.finary.com` avec un JWT de
courte durée. Le serveur reproduit cet échange :

1. `finary-mcp login` : e-mail + mot de passe (+ TOTP) → Clerk renvoie un
   identifiant de session et des cookies. **Le mot de passe s'arrête ici.**
2. À chaque démarrage et à chaque `401`, la session est échangée contre un JWT
   frais valable environ une minute.

Le module d'authentification est le seul autorisé à faire un `POST`, et
uniquement vers Clerk. Le client de l'API Finary, lui, n'émet que des `GET`.

Clerk est protégé contre les robots par empreinte TLS : le serveur utilise
`curl_cffi` pour présenter l'empreinte d'un vrai navigateur. Sans cela, la
connexion est rejetée.
</details>

<details>
<summary>Si votre machine n'a pas de trousseau</summary>

C'est courant sur un serveur Linux sans session graphique. Deux options :

- **Installer un backend** : `sudo apt install gnome-keyring` ou
  `libsecret-tools`. C'est la voie recommandée.
- **Accepter le repli fichier** : exportez `FINARY_MCP_ALLOW_FILE_STORE=1`. La
  session est alors écrite dans `~/.config/finary-mcp/session.json` en `0600`.
  Le mot de passe n'y figure toujours pas, mais `root` peut lire la session.

Le repli est volontairement opt-in : personne ne doit se retrouver avec un
stockage dégradé sans l'avoir choisi.
</details>

<details>
<summary>Usage headless / CI</summary>

`FINARY_EMAIL` et `FINARY_PASSWORD` sont lus par `finary-mcp login` s'ils sont
définis. C'est moins sûr — le mot de passe transite par l'environnement du
processus — et cela ne dispense pas de saisir le code TOTP. À réserver aux
environnements où vous maîtrisez la gestion des secrets.
</details>

### Signaler une faille

Ouvrez une issue **sans y mettre de données personnelles** : ni jetons, ni
captures de votre patrimoine.

---

## Limites connues

- **API non officielle.** Finary peut changer ses routes sans préavis et casser
  ce serveur. C'est le compromis inhérent à l'absence d'API publique.
- **Pas d'API key.** Il n'existe pas de mécanisme d'accès délégué chez Finary,
  d'où l'authentification par mot de passe.
- **Certaines routes exigent Finary+.** Elles renvoient alors une erreur
  explicite plutôt qu'un plantage.
- **Un seul compte à la fois.** Le serveur gère une session.

## Contribuer

```bash
pip install -e ".[dev]"
pytest
```

Les contributions sont bienvenues, à une exception près : **aucune capacité
d'écriture ne sera acceptée dans ce dépôt.** La lecture seule est la
proposition de valeur, pas une limitation temporaire.

## Remerciements

La cartographie de l'API doit tout au travail de rétro-ingénierie de
[`lasconic/finary_uapi`](https://github.com/lasconic/finary_uapi), et
[`svevia/finary_mcp`](https://github.com/svevia/finary_mcp) a montré la voie
d'un MCP Finary.

## Licence

MIT — voir [LICENSE](LICENSE).

**Projet non officiel, sans aucun lien avec Finary.** Utilisation à vos propres
risques. Vérifiez que l'automatisation de l'accès à votre compte est compatible
avec les conditions d'utilisation de Finary.
