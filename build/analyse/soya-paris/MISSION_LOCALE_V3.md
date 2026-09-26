# Mission locale v3 — SOYA PARIS : renseignement terrain, audit de l'analyse, marketing complet, transposition Somnila

*Consigne pour une session Claude Code lancée sur le Mac de l'utilisateur, avec son IP résidentielle française et son vrai Chrome via Claude in Chrome. Rédigée le 26/09/2026 par la session cloud qui a produit les dossiers v1 et v2, puis corrigée après deux relectures critiques. Tout ce qui suit s'adresse à toi, la session locale : exécute-le dans l'ordre. Ce fichier se suffit à lui-même.*

---

## Comment lancer (à faire par l'utilisateur, 15 minutes)

0. **Prérequis.**
   - Un abonnement Claude existant (Pro, Max, Team ou Enterprise). Claude Code connecté par `/login`, et non par une clé API.
   - Extension Claude in Chrome en version 1.0.36 ou plus.
   - Claude Code à jour : 2.1.211 ou plus, pour que les captures de l'extension s'enregistrent sur disque.
1. **Dépôt**, dans le Terminal :
   - si tu as déjà cloné le dépôt (par exemple dans `~/somnila-shopify`) : `cd ~/somnila-shopify` ;
   - sinon : `cd ~ && git clone https://github.com/IsaacPolignac/shopify.git somnila-shopify && cd somnila-shopify`. Si macOS affiche la licence Xcode, tape d'abord `sudo xcodebuild -license accept` puis ton mot de passe de session Mac (rien ne s'affiche pendant la saisie, c'est normal) ;
   - puis, dans le dossier du dépôt :
   ```bash
   git fetch origin
   git checkout claude/pilloway-shopify-shrine-bwge6y
   git pull --rebase origin claude/pilloway-shopify-shrine-bwge6y
   ls build/analyse/soya-paris/MISSION_LOCALE_V3.md || echo "absent : attendre le push cloud"
   ```
   Si le fichier est absent, arrête-toi : la session cloud ne l'a pas encore poussé.
2. **Profils Chrome.**
   - Crée un profil **« Veille »** : icône de profil > Ajouter > « Continuer sans compte ». Aucune synchronisation. Paramètres > Saisie automatique : adresses, moyens de paiement et gestionnaire de mots de passe **désactivés**. « Proposer de traduire » désactivé. Aucun bloqueur de publicité. Installe l'extension Claude in Chrome dans ce profil.
   - **Ne laisse pas l'extension active dans ton profil personnel** pendant la mission. Il contient probablement l'administration Shopify de Somnila, Gmail et un gestionnaire de mots de passe.
   - Seulement si tu réponds oui à la question b) de M0 : un profil **« Réseaux »** séparé, où tu te connectes uniquement à Facebook, Instagram et TikTok (jamais Google, banque, PayPal ni Shopify). Ce profil n'ouvre jamais soya-paris.com.
   - Pas de navigation privée : son support par l'extension n'est pas documenté.
   - Ne vérifie pas toi-même le profil en ouvrant facebook.com ou google.fr : cela y déposerait des cookies avant M1. Contrôle seulement `chrome://settings/people` (non connecté) et `chrome://settings/content/all` (aucune donnée de site).
3. **Captures macOS (facultatif).** La méthode 1 du § 2.2 n'en a pas besoin. Pour la méthode 2 seulement : Réglages Système > Confidentialité et sécurité > **Enregistrement de l'écran** : autorise Terminal (ou iTerm) ; plus tard, accepte « Terminal souhaite contrôler Google Chrome ». En fin de mission, retire ces deux autorisations (Enregistrement de l'écran et Automatisation).
4. **Lancement.** Dans le dossier du dépôt, lance une **session neuve** : `claude --chrome` (ou `claude`, puis `/chrome`). Ne la lance pas en mode de contournement des permissions.
   - Vérifie « Status: Enabled » et « Extension: Installed ».
   - `/chrome` > « Select browser… » : choisis le profil « Veille ».
   - **Si la session vient du téléport** : tape `/clear` tout de suite, avant l'ouverture du moindre onglet (l'historique hérité est lourd et plein de chemins `/tmp/claude-0/…` qui n'existent pas sur le Mac). Ensuite : `git status`, `git pull --rebase origin claude/pilloway-shopify-shrine-bwge6y`, puis `/chrome`. Après ce premier `/clear`, plus jamais de `/clear` (voir § 4, « Organisation »).
5. **Sois présent la première heure.** L'extension demande une autorisation par site (Facebook, Google, TikTok, Soya…). Refuse toute permission pour admin.shopify.com, *.myshopify.com, accounts.google.com, mail.google.com, paypal.com et les sites de banque. Si l'extension propose une connexion par 1Password ou un autre gestionnaire de mots de passe : refuse.
6. Écris : **« Lis et exécute build/analyse/soya-paris/MISSION_LOCALE_V3.md »**.

---

## 0. Ton rôle, ta posture, l'objectif

**Rôle.** Tu es analyste renseignement en source ouverte. Tu travailles pour la marque SOMNILA (oreillers à mémoire de forme, boutique Shopify 100 % en anglais, États-Unis d'abord, puis Canada, Royaume-Uni, UE, Australie ; unités métriques et impériales). La cible est SOYA PARIS (soya-paris.com, oreillers ergonomiques, France, euros).

**Posture.**
- **Sceptique.** Le dossier v2 a été écrit par une session du même type que toi. À sa propre relecture, 47 constats sur 85 ont dû être corrigés. Considère donc chaque affirmation comme une hypothèse à tester, pas comme un fait.
- **Les sources avant les conclusions.** Aucune conclusion sans pièce : URL, heure, capture, copie texte.
- **Hypothèses concurrentes.** Sur chaque question clé, écris au moins deux explications possibles, puis cherche la pièce qui les départage. Matrices obligatoires : Q1 (M6), Q2 (M12), Q5 (M2), Q8 (M8).
- **Confiance explicite.** Chaque conclusion porte une étiquette ([constaté], [déduit], [indice], [non vérifié]) et un niveau de confiance :
  - **élevée** = au moins une pièce primaire [constaté] et une seconde source indépendante ;
  - **moyenne** = une seule pièce primaire, ou deux sources secondaires concordantes ;
  - **faible** = indice, ou source unique non primaire.
- **Une absence de résultat est un résultat** s'il est documenté : requête exacte, heure, capture de la page vide.
- **Pas de roman.** Si une pièce manque, écris « non établi ».

**« Digne de la CIA », ici, veut dire** : rigueur, traçabilité et hiérarchie des preuves. Pas d'intrusion : tout vient de sources publiques ou de ce qu'une visiteuse anonyme voit.

**Les 10 questions clés** (chaque mission sert au moins l'une d'elles) :

| KIQ | Question |
|---|---|
| Q1 | Qui encaisse l'argent et qui paie la publicité de soya-paris.com ? |
| Q2 | Combien SOYA dépense-t-il et vend-il vraiment ? (compteurs, numéros de commande, portée publiée) |
| Q3 | Quelles créations publicitaires portent la diffusion, et pourquoi ? |
| Q4 | Qui est réellement la cliente ? (données d'audience, et non déduction) |
| Q5 | Que paie réellement la cliente ? (panier, paiement, TVA, housse, frais) |
| Q6 | Le consentement aux cookies est-il respecté pour une visiteuse française ? |
| Q7 | Qui occupe Google.fr sur la marque et sur les requêtes génériques ? |
| Q8 | D'où vient le produit, et où le trouve-t-on ailleurs ? |
| Q9 | Qu'est-ce qui est faux, fragile ou contradictoire dans le dossier v2 ? |
| Q10 | Que doit décider Somnila, pour les États-Unis d'abord, à partir de tout cela ? |
| Q11 | Comment chaque page de SOYA est-elle construite pour vendre, élément par élément (disposition, carrousels, galerie, offres, textes, mouvement, vitesse), et que doit en reprendre ou en éviter Somnila ? |

**Les 5 axes de la mission.**
1. **Terrain** : faire ce que la session cloud n'a pas pu faire. Son IP américaine de centre de données était bloquée par la bibliothèque Meta, Google Ads Transparency, la bibliothèque TikTok, Instagram, Facebook, Google.fr, le panier et le paiement de SOYA.
2. **Audit adversarial** du dossier existant : analyser l'analyse, corriger ce qui est faux, noter chaque chapitre.
3. **Marketing complet** : avatar client, publicités (Meta, TikTok, Google, Pinterest, Snap, Display), créateurs, organique, e-mail et SMS, tunnel, offres, SEO, preuves sociales.
4. **Transposition pour Somnila** : marché américain d'abord, en anglais, sans aucune promesse médicale, sans aucun visage.
5. **Démontage complet du site** (M13, demande explicite de l'utilisateur : « analyser vraiment tout : fiche produit, carrousels, disposition ») : chaque page de soya-paris.com et de us.soya-paris.com, à 4 largeurs, élément par élément, avec un verdict Somnila (copie / adapte / évite) pour chaque élément.

**Livrables finaux.**
- Le dossier `build/analyse/soya-paris/v3/` : journal, preuves, fichiers de mission, données.
- `v3/98_contre_verification_v3.md` (phase S0).
- `v3/SYNTHESE_V3.md`.
- `v3/30_plan_somnila.md`.
- `v3/site/` (M13) : un fichier par page démontée, `00_INDEX.md` (matrice de couverture du site), `98_contre-verification.md`, `99_synthese.md`.
- La **Partie III** intégrée dans `DOSSIER_SOYA_PARIS.md`, avec les corrections « corrigé v3 » reportées.
- Un rapport final court à l'utilisateur.

---

## 1. Règles non négociables

### 1.1 Règles de l'utilisateur
1. **Données réelles uniquement.** N'invente jamais de données produit, d'avis, de chiffres de test ni de délais. Chaque constat porte [constaté], [déduit], [indice] ou [non vérifié], avec son heure, son URL et sa capture.
2. **Zéro promesse médicale pour Somnila.** Parle de soutien, de confort, de posture, de répartition de la pression. Toute recommandation marketing pour Somnila respecte cette règle.
3. **Tout suit le brand book de Somnila** (`build/BRAND_BOOK.md`, qui prime sur tout autre texte). Rien de générique, rien qui fasse IA. **AUCUN VISAGE** dans les créations de Somnila : les recommandations publicitaires passent par les mains, le produit, la voix off et le texte à l'écran.
4. **Règle de sécurité (verbatim) :** « Sécurité et périmètre : ne jamais manipuler paiement, coordonnées bancaires, mots de passe, achat de domaine ou de thème, création de compte, pixels ou clés API — préparer la liste, l'utilisateur le fait. Ne rien supprimer, ne publier aucun thème, ne pas changer le nom de la boutique, n'envoyer aucun email, ne pas retirer le mot de passe de la boutique sans « ok » explicite. Travailler sur un thème non publié. »
5. **En français** : rapports, questions à l'utilisateur, fichiers de synthèse. (Les exemples de textes publicitaires pour Somnila sont en anglais, puisque la boutique l'est.)
6. **Budget serré.** Aucun outil payant, aucune application payante, aucun compte à créer. SimilarWeb, Semrush et les autres outils s'utilisent en vue publique gratuite, ou avec un compte **déjà existant** de l'utilisateur, s'il le décide.
   - Semrush exige une inscription, et les outils gratuits d'Ahrefs posent un captcha : sans compte existant, ne les utilise pas.
   - L'API PageSpeed sans clé a répondu 429 depuis le cloud : utilise l'interface pagespeed.web.dev.
   - Playwright, ffmpeg et Whisper sont gratuits, mais leur installation demande un accord (question i de M0). **N'installe aucun logiciel (Homebrew, ffmpeg, Whisper, Playwright, paquets pip) sans accord.**
7. **Règle d'origine : une phase à la fois, rapport court, attendre le « ok ».** Adaptation pour cette mission : fais un point d'étape court entre deux grands blocs **seulement** si une décision de l'utilisateur est requise ; sinon, avance. Toute action hors de cette mission, ou qui touche Somnila : attendre le « ok ».
8. **Le dépôt est PUBLIC.** Aucun mot de passe, aucune clé, aucun jeton dans les fichiers. Aucune donnée personnelle de l'utilisateur dans les captures versées : floute ou recadre.

### 1.2 Règles d'enquête
- **Pas de formulaire ni de saisie.** Aucun formulaire rempli, aucune donnée personnelle saisie (même fictive), aucun code promo saisi, aucune adresse.
- **Ce qui est autorisé** (sinon la session bloque ou dérive) :
  - les champs de recherche des registres et bibliothèques publiques, avec les seuls termes de la mission ;
  - les filtres de pays et de dates ;
  - coller une **URL publique** dans un outil tiers qui l'exige (PageSpeed, TinEye, recherche d'image Bing) : ce n'est pas une donnée personnelle ;
  - sur les bandeaux de cookies des **sites tiers** (Google.fr « Avant d'accéder à Google », YouTube, Facebook, Instagram, TikTok, Amazon, Trustpilot, SimilarWeb…) : clique « Tout refuser » ou « Cookies essentiels uniquement ». C'est un choix de cookies, pas une saisie ;
  - sur soya-paris.com : ne clique rien sur la bannière avant la fin de M1 ; M1 fixe ce qu'on y clique ; après M1, « Refuser » si elle réapparaît ;
  - « Your Privacy Choices » : lecture seule, aucun interrupteur.
- **Sites à risque** (Temu, AliExpress, Coupert, iGraal, Poulpeo…) : ferme les popups par la croix ; n'installe aucune extension proposée ; notifications sur « Bloquer » ; ne passe jamais outre un avertissement de navigation sécurisée ; ne télécharge rien.
- **Règles plus strictes sur soya-paris.com** (`v3/PROTOCOLE_DEMONTAGE.md` § 1.1 et § 1.2, qui s'ajoutent à celles-ci) :
  - aucune saisie de texte dans aucun champ du site ;
  - aucun script qui écrit : pas de `.value =`, pas de `.submit()`, pas d'écriture dans `localStorage` ou `document.cookie`, **pas de `fetch` en POST** ;
  - les clics se font avec l'outil de clic de l'extension, visibles et tracés, jamais par `el.click()` en JavaScript ;
  - le sélecteur de pays ou de devise s'ouvre pour lire la liste, mais on n'y choisit **jamais** de valeur : c'est un envoi POST vers `/localization`. Pour une autre devise, voir M2 (lecture par `curl` avec un cookie `localization`).
- **Pas de compte ni d'achat.** Aucun compte créé, nulle part : ni chez SOYA, ni chez Semrush, SimilarWeb, Milled, Meta for Developers ou Shopify Partners. Aucun achat.
- **Aucun contact** avec SOYA, ses clones, ses fournisseurs ou ses clientes : pas de message, de commentaire, de « J'aime », d'abonnement, de signalement, d'inscription à une newsletter ou aux SMS. Ni vote « utile », ni « Écrire un avis ».
- **Paiement.** Arrête-toi avant toute saisie. Ne clique jamais dans un champ de la page de paiement. Ne clique **jamais** un bouton de paiement express : Shop Pay, PayPal, Apple Pay, Google Pay, Amazon Pay, Klarna, Alma, Scalapay, Oney. Aucune exception : PAN-6 et PUB-8 ne sont faits que par l'utilisateur lui-même (M2, § 4 « Angles morts P3 »). Si Chrome propose un remplissage automatique : Échap, rien de sélectionné, puis arrêt et rapport.
- **Ne touche à rien de la boutique Shopify de Somnila** (lecture seule de fichiers du dépôt uniquement). Aucune permission de site pour admin.shopify.com, *.myshopify.com, accounts.google.com, mail.google.com, paypal.com ni les banques.
- **Aucun appel aux connecteurs MCP** (Shopify, Gmail, Notion…), même en lecture. Si l'extension propose une connexion par 1Password ou par un gestionnaire de mots de passe : refuse ; l'utilisateur se connecte lui-même.
- **Ne clique jamais sur une annonce Google** : le clic est facturé à l'annonceur. Utilise le menu « ⋮ » > « À propos de cet annonceur ». Même règle pour une annonce sponsorisée dans un fil social : jamais de clic.
- **Captcha.** Ne résous jamais un captcha. Arrête-toi, espace les requêtes (30 minutes), ou demande à l'utilisateur de le faire lui-même.
- **Personnes privées.** N'identifie pas les présentateurs de vidéos, les commentateurs, les auteurs d'avis ni les dirigeants personnes physiques. Pas de reconnaissance faciale : aucune recherche d'image (Lens, Bing) sur un visage ; seul TinEye, en correspondance exacte, est permis (M8). Les commentaires et avis sont cités anonymisés (« une cliente, 1★, 14/09/2026 »). Ne recopie jamais une donnée de santé attachée à un nom.
- **Personnes physiques dans les registres et les bibliothèques.** Si le payeur ou le bénéficiaire d'une annonce (Meta, TikTok) est un particulier : écris « personne physique (nom non reproduit) » et floute la capture. Même règle pour Companies House (`/officers`, PSC), l'annuaire des entreprises (dirigeants), l'USPTO et TMview.
- **Formulation.** Décris des faits et des **risques**, jamais des qualifications définitives (« risque au regard de L121-4 », et non « illégal » ou « arnaque »). Seul un juge qualifie une infraction.
- **Réseaux sociaux, connecté ou non.**
  - Jamais de double-clic sur une publication Instagram ou une vidéo TikTok : double-clic = J'aime.
  - Aucune touche lettre sur Facebook, Instagram ou TikTok (L = J'aime, C = commenter, S = partager). Seulement le défilement et Échap.
  - N'ouvre jamais une story active (anneau coloré) : le compte voit la liste de ceux qui l'ont vue. Stories à la une : seulement si l'utilisateur l'accepte (M0 b).
  - TikTok connecté : l'utilisateur désactive lui-même avant l'« Historique des vues de profil » **et** l'« Historique des vues des publications ».
  - LinkedIn : jamais connecté, pas de profils de personnes.

### 1.3 Points d'arrêt : demande à l'utilisateur AVANT de
- utiliser l'un de ses comptes existants : Facebook, Instagram, TikTok, Trustpilot, SimilarWeb, Semrush, Ahrefs, Google (Ads, « Mon Centre publicitaire ») ;
- continuer sur la page de paiement si Shop Pay, un code SMS, un e-mail pré-rempli ou un remplissage automatique Chrome apparaît ;
- toute action qui laisse chez SOYA une trace **identifiable** : visite de soya-paris.com depuis un profil connecté à Facebook, Instagram ou TikTok. (PAN-6 et PUB-8 ne sont pas des actions de la session : l'utilisateur les fait lui-même, s'il le veut.) ;
- installer une tâche planifiée macOS (agent launchd) ou un logiciel (ffmpeg, Whisper, Playwright, outils Xcode) ;
- modifier ou anonymiser un fichier existant hors de `v3/` (voir l'alerte B10 en M0) ;
- pousser (`git push`) tant que B10 n'est pas tranché (voir § 7) ;
- intégrer la Partie III dans `DOSSIER_SOYA_PARIS.md` si la question B10 n'est pas tranchée.

**Arrêts immédiats** (capture, journal, question) : captcha ; `git push` qui demande des identifiants ; conflit de rebase hors de `v3/` ; boîte de dialogue JavaScript qui bloque le navigateur (l'utilisateur la ferme).

Les visites anonymes dans le profil « Veille » (pages, panier, première page du paiement sans saisie) font partie de la mission : pas besoin de demander.

---

## 2. Méthode de preuve

### 2.1 Arborescence (tout écrire ici, nulle part ailleurs)
Dans chaque commande, utilise des chemins absolus : `R=$(git rev-parse --show-toplevel)` en tête. Le `cd` persiste d'un appel Bash à l'autre : pour changer de dossier, utilise un sous-shell `( cd … && … )`.
```
build/analyse/soya-paris/v3/          (dépôt public)
  JOURNAL.md                 journal chronologique + tableau d'avancement + matrice de couverture (§ 4)
  preuves/<mission>/         captures JPEG + copies texte / JSON EXPURGÉES (ex. preuves/m03_pub/)
  preuves/veille/inv/        relevés inv.py de la session
  donnees/                   CSV et TSV structurés (inventaire d'annonces, SERP, paniers…)
  outils/                    scripts écrits pendant la mission (cap.sh, offre.py, meta_cartes.js…)
  NN_<mission>.md            un fichier de constats par mission (01_consentement.md, etc.)
  98_contre_verification_v3.md
  SYNTHESE_V3.md             synthèse finale
  30_plan_somnila.md         plan pour Somnila
  (déjà présents, lecture seule : PROTOCOLE_DEMONTAGE.md, PROTOCOLE_EXTERIEUR.md,
   INVENTAIRE_SITE.md, preuves_cloud/ ; .gitignore : voir M0)

~/soya-veille/               (hors dépôt, jamais versé)
  brut/<mission>/            texte brut des pages où figurent des tiers ou le compte de l'utilisateur
  inv/, offres.tsv, *.log    tâche planifiée (M12)

$TMPDIR/soya_tar/            pages HTML extraites du tar (hors dépôt)
$TMPDIR/soya_run/            copies des scripts v2 à rejouer (hors dépôt)
```
Ne modifie pas `DOSSIER_SOYA_PARIS.md`, `v2/` ni `preuves/v2/` avant la phase S (synthèse). Ne crée ni `v3/ads/`, ni `v3/exterieur/`, ni `v3/local.md` (voir § 3.0). `v3/site/` est réservé à M13 : son arborescence est celle de `PROTOCOLE_DEMONTAGE.md` § 2 et § 12 (`cap/`, `data/`, `reseau/` pour les résumés seulement, `anim/`, `telephone/`, `textes/`, un fichier `Pxx.md` par page). Les HAR bruts et les vidéos restent hors dépôt (`v3/.gitignore`).

### 2.2 Nommage, captures, copies texte
- Nom de fichier : `AAAAMMJJ-HHMMZ_<objet-court>.jpg`, par exemple `20260926-1932Z_meta-page-transparence.jpg`.
- Captures en **JPEG compressé**, 1 600 px de large au plus, 400 Ko visés.
- **Méthode 1 (préférée) : capture de l'extension, enregistrée sur disque.** Elle ne prend que l'onglet (ni notifications ni autres fenêtres) et n'exige pas l'autorisation « Enregistrement de l'écran ». Note le chemin renvoyé, puis compresse :
  `sips -s format jpeg -s formatOptions 70 -Z 1600 "<fichier renvoyé>" --out "$R/build/analyse/soya-paris/v3/preuves/<mission>/<AAAAMMJJ-HHMMZ>_<objet>.jpg"`.
- **Méthode 2 (secours) : `cap.sh`.** Écris ce script dans `v3/outils/cap.sh` pendant M0 : les fonctions shell ne survivent pas d'un appel Bash à l'autre.
  ```bash
  #!/bin/sh
  # usage : sh build/analyse/soya-paris/v3/outils/cap.sh <dossier_mission> <objet>
  cd "$(git rev-parse --show-toplevel)" || exit 1
  d="build/analyse/soya-paris/v3/preuves/$1"; mkdir -p "$d"
  ts=$(date -u +%Y%m%d-%H%MZ)
  osascript -e 'tell application "Google Chrome" to activate' >/dev/null
  b=$(osascript -e 'tell application "Google Chrome" to get bounds of front window' | tr -d ' ')
  x1=$(echo "$b" | cut -d, -f1); y1=$(echo "$b" | cut -d, -f2)
  x2=$(echo "$b" | cut -d, -f3); y2=$(echo "$b" | cut -d, -f4)
  tmp="${TMPDIR:-/tmp}/cap_$$.png"
  screencapture -x -R "$x1,$y1,$((x2-x1)),$((y2-y1))" "$tmp"
  sips -s format jpeg -s formatOptions 70 -Z 1600 "$tmp" --out "$d/${ts}_$2.jpg" >/dev/null
  rm -f "$tmp"
  echo "$d/${ts}_$2.jpg"
  ```
  Avant d'utiliser `cap.sh` : demande à l'utilisateur d'activer « Ne pas déranger » et de fermer les fenêtres des autres profils Chrome (la « front window » peut appartenir au profil personnel). Travaille dans une fenêtre dédiée qui ne contient que les onglets de la mission, barre de favoris masquée (Cmd+Maj+B). Amène l'onglet voulu au premier plan, capture, puis **ouvre l'image (Read)** : bonne page, aucune donnée personnelle de l'utilisateur.
- **Méthode 3 (dernier recours).** L'enregistrement GIF de l'extension (exporté dans Téléchargements), copié ensuite dans `v3/preuves/<mission>/`.
- **Floutage.** Sur les pages connectées, avant la capture, injecte du CSS avec l'outil JavaScript de l'extension pour flouter l'avatar et le nom de l'utilisateur, la colonne Contacts, ainsi que les noms des commentateurs (`filter: blur(8px)` sur les éléments concernés). Sinon, recadre en coupant la barre du haut. Vérifie à l'œil chaque image de page connectée avant `git add`.
- **Images et contexte.** Chaque image relue coûte du contexte.
  - Pour les inventaires, extrais le texte (lecture du texte de la page, recherche d'éléments, JavaScript ciblé) plutôt que de relire des captures.
  - Relecture visuelle obligatoire : captures de pages connectées et captures `cap.sh`.
  - Captures d'onglet en profil « Veille » : contrôle par lots de 20, confié à un sous-agent qui ne renvoie que « OK » ou « problème : fichier ».
- **Copie texte.** Pour chaque capture, garde le texte de la page ou le JSON (par `fetch` en GET dans la page, puis écriture du fichier avec Write), sous le même nom en `.txt` ou `.json`. **Le texte recopié mot pour mot prime** : il remplace les lectures WebFetch du v2.
  - **Texte brut d'une page où figurent des tiers ou le compte de l'utilisateur** (Facebook, Instagram, TikTok, Trustpilot, commentaires, Reddit, avis) : **hors dépôt**, dans `~/soya-veille/brut/<mission>/`.
  - Dans `v3/`, seulement une version **expurgée** : noms remplacés par « auteur 1 », « auteur 2 »… ; pour toute citation qui touche à la santé, le mois sans le jour (une citation exacte plus sa date permet de retrouver l'auteur).
  - Pages connectées : jamais le texte intégral (la colonne Contacts et le nom de l'utilisateur y figurent) ; extraction ciblée du seul conteneur utile. Jamais de journal réseau d'une page connectée.
  - **Masquage avant tout JSON ou TXT versé** : valeurs de `_fbp`, `_ga`, `__kla_id`, `_shopify_y`, `_shopify_s`, jetons de panier (`"token"` de `/cart.js`), jetons de paiement (`/checkouts/cn/<jeton>`), chemins `/Users/<nom>`. Garde le nom du cookie, son domaine, son expiration et la longueur de la valeur.
- **Taille.** Tout fichier HTML de plus de 1 Mo : compresse-le en `.xz`.

### 2.3 Journal (`v3/JOURNAL.md`)
- **En tête** :
  - l'heure de début de la session ;
  - `chrome://version` (version de Chrome et de l'extension) ;
  - le réglage « cookies tiers » du profil « Veille » (`chrome://settings/cookies`) ;
  - le fuseau horaire : `readlink /etc/localtime` doit donner `Europe/Paris` (le minuteur de SOYA lit l'heure du navigateur) ;
  - `Shopify.theme.name` relevé sur soya-paris.com (après M1) ; s'il n'est plus « V16 – Version 3.0 French Days », l'habillage a changé ;
  - le tableau d'avancement (mission, statut, fichier, commit) ;
  - la **matrice de couverture** du § 4, recopiée et tenue à jour.
- Puis une ligne par geste :

  `| heure UTC | heure Paris | mission-item | URL exacte | geste (ouvert, filtré, capturé…) | fichier(s) | résultat en 10 mots |`

- Heure de Paris = UTC + 2 (heure d'été jusqu'au 25/10/2026).
- Note aussi les échecs : blocage, captcha, connexion exigée, page vide, site refusé par l'extension. Chacun avec sa capture.
- Si ta session s'interrompt ou que ton contexte sature, une nouvelle session repart du tableau d'avancement et du journal.

### 2.4 Étiquettes et chiffres
- **[constaté]** vu à l'écran ou dans une réponse brute, avec pièce.
- **[déduit]** raisonnement explicite à partir de constats cités.
- **[indice]** signal compatible, non probant.
- **[non vérifié]** affirmé par une source tierce, ou lu par un outil qui résume.
- **Confiance** : élevée, moyenne ou faible, selon les définitions du § 0.
- **Jamais de chiffre sans source.** Une hypothèse s'écrit en fourchette, avec la mention « hypothèse » et ses paramètres.
- Dans les fichiers de mission, chaque constat suit ce format :
  `**[ID] Constat.** Texte. — [étiquette], confiance X. Pièce : preuves/…/fichier.jpg + URL, heure UTC. Effet sur le dossier v2 : confirme / corrige § x.y / nouveau.`
- **Matrice d'hypothèses concurrentes** (même format partout) : une ligne par pièce, une colonne par hypothèse, chaque case notée **+** (rend l'hypothèse plus probable), **−** (moins probable) ou **neutre**. Conclusion en dessous, avec sa confiance.

---

## 3. Ce que tu lis, et ce que tu ne refais pas

### 3.0 Documents v3 déjà présents : hiérarchie
Le commit 575b279 a créé dans `v3/` : `PROTOCOLE_DEMONTAGE.md` (1 596 lignes), `PROTOCOLE_EXTERIEUR.md` (711 lignes), `INVENTAIRE_SITE.md`, `.gitignore` et `preuves_cloud/v3ads/` (réponses brutes Microsoft `msft_*.json` et `urlscan_domain.json`).
- **Ce fichier fait foi.** Les fichiers v3 existants sont des annexes en **lecture seule** ; la session cloud peut encore y pousser. Ne les modifie pas.
- **Usages :**
  - `INVENTAIRE_SITE.md` : liste des URL pour M2.
  - `PROTOCOLE_DEMONTAGE.md` § 1 : ses règles, plus strictes, s'ajoutent aux tiennes (reprises au § 1.2). Son § 3.2 sert à obtenir les largeurs de 390 px. Il s'exécute **en entier** dans la mission M13 (P1) : pages P00 à P37 et pages d'atterrissage P40+. Son § 10 (extérieur, E01 à E10) n'est pas exécuté dans M13 : il est couvert par M3, M4, M5 et M8. Ses modules se citent **D-M1 à D-M19**, pour ne pas les confondre avec tes missions M1 à M12.
  - `PROTOCOLE_EXTERIEUR.md` : § 1 = référence des champs de chaque bibliothèque ; § 3 à § 7 = détail des champs ; § 4 (étape B, pages d'atterrissage) s'exécute dans M3a (étape 2 bis).
- **Leurs chemins de sortie sont remplacés par ceux du § 2.1.** Ne crée ni `v3/ads/`, ni `v3/exterieur/`, ni `v3/local.md`, ni un second `JOURNAL.md` ou `inventaire.tsv`. Seule exception : `v3/site/`, pour M13.
- **Annexes de préparation (lecture seule, même règle de lecture ciblée)** :
  - `v3/ANGLES_MORTS.md` : le détail de chaque angle mort de la matrice (ID-1 à ID-8, PUB-1 à PUB-8, RS-1 à RS-5, PAN-1 à PAN-7, CON-1, SEO-1 à SEO-4, TRA-1 à TRA-3, VEN-1 à VEN-4, SRC-1 à SRC-6, VOC-1 à VOC-5, CRM-1 à CRM-3, AUT-1 à AUT-5), avec sections du dossier, URL et procédure ;
  - `v3/CIBLES_AUDIT_V2.md` : les affirmations à fort enjeu et les faiblesses de méthode, base de A1 ;
  - `v3/MARKETING_SOURCES.md` : ce que le dossier couvre déjà en marketing, ce qui manque, les sources et les cadres d'analyse, base de M3 à M5, A3 et A4 ;
  - `v3/CONTEXTE_SOMNILA.md` : avatar, marque, prix, marchés et questions ouvertes de Somnila, avec références de lignes, base de A3 et A5.
- **Profils** : « Enquête Soya » = « Analyse Soya » = profil « Veille ».
- **Lecture ciblée** : `grep -n '^## \|^### ' <fichier>`, puis seulement la section utile. Jamais en entier.
- Correction connue : `PROTOCOLE_EXTERIEUR.md` l. 160 porte encore l'URL du Creative Center en `/pc/fr`, qui renvoie 404 ; utilise celle de M3c.

### 3.1 Ordre de lecture (lecture sélective)
Le dossier fait 3 563 lignes : ne le lis pas en entier d'un coup.
1. `build/analyse/soya-paris/DOSSIER_SOYA_PARIS.md` : § 0 (l. 20-49), § 1 (l. 50-88), § 14 et § 14.1 (l. 1152-1197).
2. Puis, à la demande, la section liée à chaque mission. Repères de lignes (début de section) :

   | § | Ligne | § | Ligne | § | Ligne |
   |---|---|---|---|---|---|
   | 0 | 20 | 8 | 774 | 16 | 1553 |
   | 1 | 50 | 9 | 867 | 17 | 1930 |
   | 2 | 93 | 10 | 924 | 18 | 2261 |
   | 3 | 203 | 11 | 983 | 19 | 2689 |
   | 4 | 322 | 12 | 1012 | 20 | 3115 |
   | 5 | 431 | 13 | 1039 | Annexes (A) | 3201 |
   | 6 | 471 | 14 | 1152 | Annexe B (sources) | 3311 |
   | 7 | 659 | 15 | 1218 | Annexe D (contre-vérification) | 3486 |

   Fin de fichier : l. 3563. Vérifie ces repères par `grep -n '^## \|^# '` : le push cloud peut les décaler.
3. `build/analyse/soya-paris/BRIEF_CLAUDE_LOCAL.md` (ancien brief, remplacé par celui-ci) et `outils/inv.py`.
4. Chapitres `v2/*.md`. Attention : ce sont des copies des § 15 à 19, numérotées « 15.x » en interne. Cite toujours la numérotation du DOSSIER.
5. Preuves légères : `preuves/` et `preuves/v2/`. Les pages HTML sont dans `preuves/v2/pages_html.tar.xz` ; pour les ouvrir, extrais-les **hors du dépôt** : `mkdir -p "$TMPDIR/soya_tar" && tar -xJf "$R/build/analyse/soya-paris/preuves/v2/pages_html.tar.xz" -C "$TMPDIR/soya_tar"`.
   - Le tar contient 326 fichiers, dont **les 45 captures Wayback des fiches** (`ventes/wayback/` : 13 p30, 12 p20, 9 h20, 2 h30, 9 lomb, dont `p30_20260803.html`), les 102 pages Loox (`avis/loox/`), les archives Trustpilot (`avis/wb/`) et les archives du réseau (`reseau/wayback/`).
   - Sont absents du dépôt : les vidéos et les PNG pleine page. Ils sont restés dans le cloud.
   - **`preuves/v2/pub/vid/hr_avis_comments.jpg` est versé dans le dépôt** [constaté le 26/09 : `git ls-files`]. Il montre des noms associés à des pathologies : il relève de l'alerte B10. Ne le recopie nulle part, ne le cite pas en détail.
   - Les chemins `/tmp/claude-0/…` cités dans le dossier et dans certains scripts n'existent pas sur le Mac.
6. Somnila :
   - `build/BRAND_BOOK.md` ;
   - `build/design-v4/avatar-somnila.html` (l'avatar ; il n'est **pas** dans `SOMNILA_DOSSIER_COMPLET.md`) ;
   - `build/launch/ADS.md`, `SOCIAL.md`, `EMAILS.md`, `PLAN.md` ;
   - `build/PRIX.md`, `ANALYSE_PRIX.md`, `PRODUCTS.csv`, `CONVERSION.md`, `HANDOFF.md`, `SOMNILA_DE_A_A_Z.md` ;
   - `build/PROMPTS_CHATGPT_IMAGES.md`, `build/PROMPTS_FLUX_KONTEXT.md` (pour S3.7) ;
   - `docs/international/marches-et-langues.md` (l. 8-25 : taxes par marché).
   - `docs/marketing/` et `docs/compliance/` sont vides.

### 3.2 Déjà solide : ne pas refaire, mais contrôler par échantillon (audit A1 et contrôle de mise en page de M2)
- Archives Wayback, certificats crt.sh, RDAP, identifiants publicitaires dans le code, cartographie des 5 boutiques.
- JSON des widgets TrustBox et Loox, corpus d'avis de `preuves/v2/avis/`.
- Transcriptions des 4 stories, empreintes d'images, modèles de coût et de ventes (on les **audite**, on ne les réécrit pas).
- Design system, animations (§ 3, § 4, § 20), mesures de mise en page, catalogue et historique des prix.
- Popups Klaviyo (JSON), leviers de persuasion, § 8.5.

### 3.3 WebSearch et WebFetch
- **WebSearch passe par des serveurs américains, même en local.** Pour tout ce qui concerne Google.fr, utilise le vrai navigateur.
- WebFetch **résume** : pour toute citation, recopie depuis la page réelle.
- En revanche, pour les sujets américains de Somnila (règles de la FTC, concurrents US), WebSearch convient.

---

## 4. Missions

**Organisation.**
- Les missions navigateur (M1 à M11, puis M13) se font **en séquence**, dans la session principale : il n'y a qu'un seul Chrome. Les captures automatiques de M13 (Playwright, `capture.mjs`) ouvrent leur propre navigateur : elles peuvent tourner dans le Terminal pendant qu'un sous-agent rédige, mais jamais en même temps qu'une passe dans Chrome sur soya-paris.com.
- Les missions d'analyse (A1 à A5) ne demandent que le dépôt. Si l'outil de sous-agents (Agent ou Task) existe, **lance A1, A2 et A3 en arrière-plan dès M0.6**, avant le message de départ.
- **Chaque sous-agent** reçoit dans sa consigne :
  - les règles des §§ 1 et 2 de ce fichier ;
  - écrire uniquement dans son fichier de sortie ;
  - outils `mcp__claude-in-chrome__*` **interdits** (il n'a pas Chrome) ; connecteurs MCP interdits ;
  - aucune commande git d'écriture (pull, checkout, stash, rebase, add, commit) : la session principale commite ;
  - ce qu'il ne peut pas lire (site bloqué, WebFetch en échec) : une liste « à ouvrir par la session principale » en fin de fichier.
- **A1 se découpe en 4 sous-agents** : § 0 à 14 ; § 15-16 ; § 17-18 avec les recalculs ; § 19-20 et les annexes. Chacun écrit `v3/20_audit_v2_partN.md` ; la session principale fusionne dans `v3/20_audit_v2.md`.
- **Gestion du contexte.**
  - Jamais `/clear` en cours de mission : il ferme le groupe d'onglets. Utilise `/compact`.
  - À la fin de chaque mission : commit local et tableau d'avancement à jour. Vers 60 % du contexte : commit, journal, puis `/compact`.
  - Si les outils du navigateur cessent de répondre : `/chrome` > « Reconnect extension ».
  - Une boîte de dialogue JavaScript (alerte, confirmation) bloque le navigateur : arrête-toi, l'utilisateur la ferme.
- **Points d'étape** : en fin de mission, jamais au milieu d'une passe navigateur.

**Priorité.** P1 = indispensable ; P2 = important ; P3 = si le temps le permet. Les durées sont des plafonds indicatifs. Le découpage en 3 sessions et le parcours minimal sont au § 9.

### M0 — Mise en place, questions de départ, veille J0 (P1, 45 min)
1. **Synchronise le dépôt.**
   - `R=$(git rev-parse --show-toplevel)`.
   - `git status` : si des changements locaux existent, arrête-toi et demande.
   - `git pull --rebase origin claude/pilloway-shopify-shrine-bwge6y`.
   - `ls -a "$R/build/analyse/soya-paris/v3"` : il contient déjà `PROTOCOLE_DEMONTAGE.md`, `PROTOCOLE_EXTERIEUR.md`, `INVENTAIRE_SITE.md`, `.gitignore` et `preuves_cloud/`. Complète-le sans rien écraser (§ 3.0).
   - `python3 --version`. Si macOS propose d'installer les outils de développement Xcode, n'accepte pas : demande à l'utilisateur.
   - Identité git : ne change rien avant la réponse à g).
2. **Crée l'arborescence** : `v3/preuves/`, `v3/donnees/`, `v3/outils/`, `v3/JOURNAL.md` (en-tête du § 2.3), `v3/outils/cap.sh` (§ 2.2), `~/soya-veille/brut/`.
   - **`.gitignore`** : la racine du dépôt ignore `*.csv` [constaté le 26/09 : `git check-ignore -v`]. Ajoute la ligne `!donnees/*.csv` à `v3/.gitignore` (seule modification permise de ce fichier), puis vérifie avec `git check-ignore -v build/analyse/soya-paris/v3/donnees/test.csv` : la sortie doit citer `v3/.gitignore` et la règle `!donnees/*.csv`. `.DS_Store` est déjà ignoré à la racine.
   - Teste une capture (méthode 1, sinon 2) de la page d'accueil de wikipedia.org, puis ouvre l'image.
3. **Navigateur.** Charge le skill Claude in Chrome (par exemple `chrome-browser`) s'il est listé, puis fais le point sur les onglets.
   - **Ne détermine pas le profil en ouvrant un site.** N'ouvre aucun site Meta, Google ou TikTok dans « Veille » avant la fin de M1 : cela y déposerait des cookies (`datr`, `fr`…) et fausserait le test de consentement. Demande à l'utilisateur quel profil est au premier plan (question a).
   - Si l'extension ne pilote qu'un profil à la fois, travaille en **deux passes** : passe « Veille » (M1 à M4, M6 à M11) ; passe « Réseaux » (M5, et la fin de M3 si la connexion est exigée), seulement après accord (b). Demande à l'utilisateur de basculer au bon moment (`/chrome` > « Select browser… »).
4. **Relevé J0 des compteurs**, sans modifier le système :
   ```bash
   R=$(git rev-parse --show-toplevel)
   mkdir -p "$R/build/analyse/soya-paris/v3/preuves/veille"
   ( cd "$R/build/analyse/soya-paris/v3/preuves/veille" && python3 "$R/build/analyse/soya-paris/outils/inv.py" )
   ```
   Le script écrit `inv/snap-<date>.json` dans le dossier courant. Lis sa sortie : une fiche sans compteur signale une page réduite ; relance 10 minutes plus tard.
   **Quelle que soit la réponse à d)**, relance cette commande au début de chaque mission, environ toutes les 2 heures : tu obtiens une série sur la durée de la session.
5. **Offres.** Écris `v3/outils/offre.py` maintenant (spécification en M12), pour qu'il puisse rejoindre la tâche planifiée.
6. **Lance d'abord A1 (4 parties), A2 et A3 en arrière-plan.** Puis **envoie UN seul message** à l'utilisateur, avec les questions a) à i), et **attends sa réponse** (envoyer un message termine ton tour : rien ne tourne pendant l'attente, sauf les sous-agents). L'utilisateur est devant l'écran au lancement. S'il répond « défauts », applique les valeurs entre parenthèses.
   - a) Le profil « Veille » est-il prêt (sans compte Google, sans données de remplissage automatique, sans bloqueur) ? Quel profil Chrome est au premier plan en ce moment ? (Sinon, attendre.)
   - b) Puis-je utiliser en **lecture seule** tes comptes Facebook, Instagram et TikTok, dans le profil « Réseaux » ? Pour TikTok, désactive d'abord « Historique des vues de profil » et « Historique des vues des publications ». Stories Instagram à la une : oui ou non ? (Défaut : non, vue publique seulement ; stories à la une : non.)
   - c) Comptes existants utilisables : Trustpilot, SimilarWeb, Semrush, Ahrefs, Google Ads (Planificateur de mots-clés), compte Google pour lire « Mon Centre publicitaire » ? (Défaut : non. Le menu « ⋮ » des annonces Google.fr reste lu sans compte, en M4.)
   - d) J'installe un agent launchd qui relance `inv.py` et `offre.py` toutes les 6 heures jusqu'au 04/10/2026 (M12) ? (Défaut : non. Je te laisse la commande, et je relève à chaque mission.)
   - e) PAN-6 (PayPal : nom du marchand) et PUB-8 (reciblage) laissent une trace chez SOYA. Je ne les fais pas : je t'écris leur procédure, et tu les fais toi-même si tu le veux. (Défaut : non faits.)
   - f) **Alerte B10.** Le dépôt `IsaacPolignac/shopify` est **public**. Le dossier v2 accuse nommément une entreprise ; `preuves/v2/avis/*.tsv|json` contient des noms d'auteurs d'avis avec des détails de santé ; `preuves/v2/pub/vid/hr_avis_comments.jpg` montre des noms associés à des pathologies. Deux mesures possibles :
     - rendre le dépôt privé (c'est toi qui le fais) ;
     - m'autoriser à anonymiser les fichiers concernés sans rien supprimer d'autre.
     **Anonymiser dans un nouveau commit n'efface pas l'historique d'un dépôt public déjà poussé.** Seul le passage du dépôt en privé, fait par toi, limite l'exposition. `--force` reste interdit.
     (Défaut : je n'ajoute aucune donnée nominative dans `v3/`, je ne pousse rien d'autre que ce que permet le § 7, et je n'intègre la Partie III qu'après ta réponse.)
   - g) Identité git : les commits cloud sont signés `Claude <noreply@anthropic.com>`. Sur ton Mac, `git config user.email` publierait ton adresse dans un dépôt public. Veux-tu me donner ton adresse noreply GitHub, que je règle pour ce dépôt seulement (sans `--global`), ou acceptes-tu ton adresse actuelle ? (Défaut : aucun commit poussé avant ta réponse.)
   - h) Même dans « Veille », ton IP résidentielle part chez SOYA, Shopify et Meta (API de conversions côté serveur). Option gratuite : le partage de connexion 4G/5G de ton téléphone pendant M1 et M2. (Défaut : ta box.)
   - i) Puis-je installer des outils gratuits si besoin : ffmpeg et Whisper (vidéos, M3), Playwright ? (Défaut : non ; je me replie sur les méthodes sans installation.)
7. **Commit local** : `v3 : mise en place, relevé J0 des compteurs`. Push seulement selon le § 7.

### M1 — Consentement cookies et pixels, vue d'une visiteuse française (P1, 45 min)
**Doit passer en premier**, dans un profil « Veille » qui n'a encore jamais ouvert soya-paris.com, ni aucun site Meta, Google ou TikTok.

**Sert :** Q6, audit n° 39, CON-1. Sections : § 11 ligne 14, § 14.

**Conditions du test.** Fenêtre normale et **non privée** (la navigation privée bloque les cookies tiers par défaut et fausserait le test). Aucun bloqueur de publicité. Note au journal le réglage « cookies tiers » de Chrome et, si h) = oui, que la connexion passe par le téléphone.

**Constat de départ à contrôler.** `preuves/soya/home.html` ne contient aucune application de consentement : ni Axeptio, ni Didomi, ni Cookiebot, ni bannière Shopify. `webPixelsConfigList` déclare 2 pixels avec `privacyPurposes` vide.

0. Ouvre d'abord un onglet vierge et **active la lecture des requêtes réseau de l'extension sur cet onglet**, puis navigue vers soya-paris.com dans le même onglet. Sinon, les premières requêtes (2,1 à 3,0 s) sont perdues.
1. Ouvre `https://soya-paris.com/`. **Sans cliquer** pendant 15 secondes, note :
   - la présence d'une bannière, son texte exact, ses boutons, leur ordre, leur taille et leur contraste ;
   - si « Refuser » est aussi simple qu'« Accepter ».
   Capture à 3 s et à 15 s.
2. Avec l'outil JavaScript de l'extension, relève dans la page, avant tout clic (lecture seule) :
   - `JSON.stringify({r: Shopify.customerPrivacy?.getRegion?.(), b: Shopify.customerPrivacy?.shouldShowBanner?.(), c: Shopify.customerPrivacy?.currentVisitorConsent?.()})` ;
   - **si le résultat est `undefined`**, l'API n'est pas chargée (elle se charge à la demande) : ce n'est **pas** « pas de région ». Lance `Shopify.loadFeatures([{name:'consent-tracking-api',version:'0.1'}], e=>{window.__ctapi = e ? String(e) : 'ok'})`, attends 2 s, puis relis la même expression et `window.__ctapi`. Charger l'API ne donne aucun consentement ;
   - `document.cookie` : cherche `_fbp`, `_ttp`, `_scid`, `_pin_unauth`, `_gcl_au`, `_ga`, `__kla_id`, `_tw*` (garde les noms, masque les valeurs, § 2.2) ;
   - `performance.getEntriesByType('resource').map(e=>[Math.round(e.startTime), e.name]).filter(x=>/facebook|fbevents|tiktok|snapchat|sc-static|pinimg|pinterest|googletagmanager|google-analytics|doubleclick|googleadservices|klaviyo|triplewhale|parcelpanel/.test(x[1]))` ;
   - les requêtes réseau vues par l'extension. Elles incluent celles des iframes « web-pixels », que `performance` ne voit pas.
   Sauvegarde tout en JSON (valeurs de cookies et identifiants masqués).
3. Relève si la popup Klaviyo (12 s) apparaît avant tout consentement. Relève aussi le lien « Your Privacy Choices » (lecture seule) et la politique de confidentialité en français.
4. S'il y a une bannière, clique « Refuser ». Recharge. Relève à nouveau les cookies et les requêtes.
5. Deuxième état vierge : l'utilisateur efface les données du site (cadenas > « Cookies et données de site »), ou crée un second profil neuf. Clique « Accepter » et compare.
6. S'il n'y a pas de bannière, écris-le [constaté], avec la liste horodatée des requêtes publicitaires et des cookies posés sans interaction.
7. Relève `Shopify.theme.name` pour l'en-tête du journal.
8. **Contrôle du profil, après M1 seulement** : dans « Veille », ouvre facebook.com, google.fr et shop.app. Chacun doit afficher une page de connexion. Sinon : arrêt, le profil n'est pas anonyme.

**Livrable :** `v3/01_consentement.md` et `preuves/m01_consentement/`.
**Fin :** les 3 états (sans clic, refus, acceptation) sont documentés, ou l'absence de bannière est prouvée.
**Reste impossible :** l'API de conversions côté serveur (`facebookCapiEnabled: true`).

### M2 — Tunnel : prix en euros, panier, popup, paiement sans saisie (P1, 2 h ; plus PAN-US 30 min et contrôle de mise en page 30 min)
**Sert :** Q5, audit n° 9 à 12, 32 et 33, PAN-1 à PAN-7, AUT-2, AUT-4. Sections : § 6.3, § 6.5, § 7.3, § 7.5, § 7.7, § 9.2, § 11, § 18.6, § 18.7, § 20.2. Liste des URL : `v3/INVENTAIRE_SITE.md`.

Tout se passe dans le profil « Veille ». **Après chaque étape**, lis le panier en JSON : dans l'onglet de la boutique, avec l'outil JavaScript, `fetch('/cart.js').then(r=>r.text())` (GET, lecture seule). Sauvegarde le JSON (`items[].variant_title`, `final_price`, `original_price`, `final_line_price`, `discounts`, `properties`, `total_price`, `cart_level_discount_applications`), avec la valeur de `"token"` masquée. C'est la preuve la plus précise, et elle n'exige aucun formulaire.

**Vider le panier entre deux essais** : bouton de suppression de chaque ligne (tiroir ou `/cart`), en clic visible. Puis `fetch('/cart.js')` : `item_count` doit valoir 0. Aucun `fetch` en POST, aucun `el.click()` en JavaScript.

**Repli si le panier reste vide.** Si `/cart.js` reste vide 10 s après la fermeture de la popup, relève le `POST /cart/add` dans les requêtes réseau (URL, code, corps de réponse) et note [constaté]. Ne force **jamais** l'ajout par un `fetch('/cart/add.js')` manuel : il contournerait la logique de prix de Kaching, et c'est un POST.

- **PAN-7, prix vus depuis la France.**
  - Accueil, `/products/oreiller-soya-3-0`, `/products/oreiller-soya-2-0`, `/collections/all`, `/search?q=oreiller` : prix en euros, bandeau, minuteur, héros. Le v2 signalait « -50 % » et « -60 % » affichés en même temps.
  - `https://soya-paris.com/products/oreiller-soya-3-0.js` : `price`, `compare_at_price`, par variante.
  - Cherche toute mention du « prix le plus bas des 30 derniers jours ».
- **Capture au chargement.** Avant tout clic, capture le bloc d'offres Kaching et la case housse (cochée ou non).
- **Source de la fiche**, depuis le Terminal (IP française). Commande testée le 26/09 depuis le cloud : les 6 motifs étaient présents.
  ```bash
  R=$(git rev-parse --show-toplevel); d="$R/build/analyse/soya-paris/v3/preuves/m02_tunnel"; mkdir -p "$d"
  UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36"
  f="$d/$(date -u +%Y%m%d-%H%MZ)_pdp3.html"
  curl -s -A "$UA" -H 'Cookie: localization=FR; cart_currency=EUR' https://soya-paris.com/products/oreiller-soya-3-0 > "$f"
  grep -oE '15.{0,3}637|icons8|"recurring"|"endType":"never"|width: ?89%|quelques exemplaires' "$f" | sort | uniq -c
  ```
  Le motif `15.{0,3}637` tolère une espace insécable comme séparateur de milliers. Refais 3 fois à 10 minutes d'écart ; compresse chaque HTML en `.xz` s'il dépasse 1 Mo.
- **PAN-1, offre 1x.**
  1. Choisis le coloris **Blanc**, garde l'offre 1x et la case housse telle qu'elle est, puis clique « Ajouter au panier ».
  2. Capture la popup Kaching « lombaire » et son délai d'apparition, puis clique « Non merci… ».
  3. Capture le tiroir panier et `/cart.js`.
  4. Vide le panier. Refais avec **Gris**, puis **Beige**.
  - **À relever** : le coloris de la housse ajoutée. Il suit l'oreiller, ou il est Bleu par défaut (indice du § 18.7) ?
  - **À relever aussi** : prix unitaire, total, barre de progression, ventes croisées, cadeaux, mention des taxes et de la livraison, affichage des économies.
- **PAN-1 bis, housse décochée.** 1x Blanc, **décoche** la case housse (clic visible), puis « Ajouter au panier ». Le prix passe-t-il à 69,90 € ? Kaching recoche-t-il la case (avant l'ajout, ou dans le panier) ? `/cart.js`, puis vide.
- **PAN-2, packs.** « Pack Duo », puis « Pack Famille ». Choisis des coloris différents dans les sélecteurs.
  - Relève : nombre de lignes, coloris des housses, total, cadeaux réels ou absents (le bloc dit « cadeaux offerts » alors que `freeGifts: []`).
  - Test clé : Famille à 169,70 € (14,90 € par ligne de 2 housses) ou à 199,50 € (14,90 € par housse) ?
- **PAN-3, deux prix pour un même oreiller.**
  1. Accueil, carte Soya 2.0 à 119,90 € : « + Ajouter », puis `/cart.js`. Vide.
  2. `/collections/all`, 3.0 à 139,90 € : ajout rapide s'il existe. Vide.
  3. Fiche 3.0, fenêtre de 1 440 px de large : fais défiler jusqu'à la barre collante et clique son bouton. Vide.
  4. Même chose sur la fiche de l'oreiller enfant.
  - Lecture : 119,90 ou 139,90 € au panier = le prix haut est facturé. 59,90 ou 69,90 € = l'affichage est trompeur, mais le prix facturé est le bas.
- **PAN-4, popup acceptée.** 3.0 en 1x, puis « Profiter de l'offre (-60 %) ».
  - Relève : la ligne ajoutée (article, prix, nom de la remise) et le mécanisme de remise (prix modifié ou remise automatique).
  - Vérifie que l'oreiller est bien arrivé dans le panier : cela confirme ou non la file d'attente du § 9.2.
- **PAN-5, première page du paiement.**
  1. Panier Blanc 1x rempli. **N'utilise pas le bouton « Paiement »** (un bouton express est souvent voisin) : ouvre `https://soya-paris.com/checkout` par lien direct.
  2. Sur la page de paiement : **ZÉRO clic.** Défilement, puis lecture du texte de la page et de sa structure (l'état des cases s'y lit).
  3. Si Shop Pay, un code SMS, un e-mail pré-rempli ou un remplissage automatique apparaît : arrêt, capture, question à l'utilisateur.
  - **À capturer** (en faisant défiler, sans clic) :
    - domaine et URL (`soya-paris.com/checkouts/cn/…` ou domaine externe ; masque le jeton dans les fichiers), langue, devise ;
    - récapitulatif et sous-total ;
    - ligne « Taxes » ou « TVA incluse de X € », ou son absence : c'est le test direct de l'hypothèse « TVA non collectée » (§ 7.7) ;
    - ligne de livraison ;
    - boutons express, moyens de paiement, paiement en 3 ou 4 fois ;
    - **case « M'envoyer des nouvelles et des offres par e-mail » cochée ou non par défaut**, et case SMS ;
    - option ajoutée d'office (protection de colis, pourboire) ;
    - nom de l'entreprise affiché, liens de pied de page (les politiques se lisent par leurs URL directes, ci-dessous).
  4. **Ferme l'onglet, puis efface les données du site** (cadenas > « Cookies et données de site »).
- **Matrice Q5, TVA** (dans `02_tunnel.md`, format du § 2.4) : H1 TVA collectée et incluse ; H2 TVA non collectée ; H3 TVA collectée hors de France (autre pays de l'UE ou guichet unique). Pièces : ligne « Taxes » du paiement, mentions des politiques, pied de page, factures citées dans les avis, identité de M6.
- **PAN-6 (PayPal) : procédure écrite pour l'utilisateur**, qu'il fait lui-même s'il le veut (M0 e), dans le profil « Veille », sans se connecter à PayPal : panier 1x, page de paiement, clic PayPal, lire le nom du marchand affiché dans la fenêtre PayPal, capture, fermer la fenêtre sans se connecter. La session ne clique jamais.
- **Politiques.** Ouvre `/policies/legal-notice`, `/policies/refund-policy`, `/policies/shipping-policy`, `/policies/contact-information`, `/policies/terms-of-service`, `/policies/privacy-policy` et `/pages/data-sharing-opt-out`.
  - `/policies/terms-of-sale` a renvoyé **404** le 26/09 depuis le cloud : capture la 404 comme preuve (absence de CGV à ce chemin).
  - Cherche : « rétractation », « 14 jours », « garantie légale », « médiateur », « sans frais », « emballage d'origine ».
  - Garde une copie texte datée de chaque page.
- **PAN-US, us.soya-paris.com** (P1, 30 min ; AUT-2 ; P36 de `PROTOCOLE_DEMONTAGE` § 9.7). C'est la vue la plus utile pour les États-Unis.
  - Ouvre `https://us.soya-paris.com/` dans « Veille ». Relève la devise affichée par défaut.
  - **Ne choisis aucune valeur dans le sélecteur de pays** (POST vers `/localization`, § 1.2). Pour la vue en dollars, lis par `curl` depuis le Terminal, avec `-H 'Cookie: localization=US; cart_currency=USD'`, l'accueil, la fiche 3.0, la 2.0 et `/collections/all`. Étiquette [indice] : c'est une simulation d'affichage, pas la vue d'une cliente américaine.
  - Relève : prix, packs, textes anglais **verbatim**, allégations de santé en anglais, promesses de livraison aux États-Unis, « Over 200,000 users », hreflang, langue réelle des pages.
  - Panier 1x, puis `https://us.soya-paris.com/checkout` par lien direct, zéro clic : devise et domaine de la première page de paiement. Ferme l'onglet, efface les données du site.
- **Contrôle de mise en page** (P2, 30 min ; reprend D-M18, tableau T18, pour P01 et P02 seulement) : accueil et fiche 3.0, en 1 440 × 900 et en 390 × 844 (méthode de `PROTOCOLE_DEMONTAGE` § 3.2 pour obtenir 390 px), 3 positions de défilement chacune, en euros ; 2 animations filmées en GIF, comparées au § 20. Chaque valeur : confirmé (± 2 px), corrigé ou nouveau. Sert la notation des § 3, 4, 5, 10 et 20 par A1.
- **Minuteur** (AUT-4, P3) : si la session tourne entre 23:55 et 00:02, heure de Paris, capture la fiche 3.0 avant et après minuit.
- **Popup Klaviyo** : capture l'écran 1 seulement. Ne clique pas « Ventre / Côté / Dos » : c'est un champ de formulaire. Ferme par la croix.
- **Livrables :**
  - `v3/02_tunnel.md` (avec la matrice Q5) ;
  - `donnees/paniers.csv` (chemin, coloris, offre, lignes, prix affiché fiche, prix panier, total, housse et coloris, cadeaux, fichier JSON) ;
  - `preuves/m02_tunnel/`.
- **Fin :** 1x (3 coloris), 1x housse décochée, Duo, Famille, 4 chemins PAN-3, popup acceptée, paiement, politiques et PAN-US documentés.
- **Reste impossible :** le montant débité, les frais selon l'adresse, AfterSell après paiement, les e-mails transactionnels.

### M3 — Bibliothèques publicitaires : inventaire complet (P1, 3 h)
**Sert :** Q1 à Q4, audit n° 13, 20 à 22, 25, PUB-1 à PUB-7, ID-1. Sections : § 16.1 à § 16.13. Champs de référence : `PROTOCOLE_EXTERIEUR.md` § 1 et § 3.

**Cadre légal.** L'article 39 du DSA oblige les grandes plateformes à publier, pour les annonces diffusées dans l'UE :
- le contenu ;
- la personne pour le compte de qui l'annonce est diffusée, et celle qui paie ;
- la période de diffusion ;
- les paramètres de ciblage ;
- la portée, et sa répartition par pays.
Les dépenses ne sont publiées que pour les annonces politiques.

**Personnes physiques.** Payeur ou bénéficiaire particulier : « personne physique (nom non reproduit) », capture floutée (§ 1.2).

**3a. Meta (Facebook, Instagram, Messenger, Audience Network, Threads).** Essaie d'abord sans connexion, dans « Veille ». Si une connexion est exigée, passe au profil « Réseaux » après accord (M0 b).

1. **Page.** Ouvre `https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=FR&media_type=all&search_type=page&view_all_page_id=61565502837799`, puis la même URL avec `active_status=all`.
   - Relève les compteurs de résultats (actives et total).
   - Ouvre le panneau « À propos de l'annonceur » / « Transparence de la Page » : date de création, changements de nom et leurs dates (FREYJA ? MERCURE ?), pays des gestionnaires, compte Instagram lié.
2. **Inventaire par extraction, pas carte par carte.**
   - Charge toute la liste par défilement, jusqu'à la fin.
   - Extrais toutes les cartes par JavaScript (lecture seule du DOM) dans `preuves/m03_pub/<AAAAMMJJ-HHMMZ>_meta_cartes.json` : identifiant de bibliothèque, « Début de diffusion », statut, « plusieurs versions », « N publicités utilisent cette création et ce texte », plateformes, texte principal, titre, bouton, lien. Écris ce script dans `v3/outils/meta_cartes.js`. Trie ce fichier hors ligne.
   - N'ouvre « Voir les détails de la publicité » et la section de transparence de l'UE que pour : les 10 plus anciennes, les 10 plus récentes, les 17 vidéos (étape 4), les 4 stories (étape 4) et les 10 de plus grande portée si le tri existe. Relève :
     - date de fin s'il y en a une, format, ratio, durée ;
     - texte principal **verbatim**, titre, bouton ;
     - **payeur et bénéficiaire** ;
     - portée UE, portée par pays, âge et sexe ;
     - ciblage déclaré : âges, sexe, lieux inclus et exclus, audiences personnalisées oui ou non.
2 bis. **Pages d'atterrissage** (étape B de `PROTOCOLE_EXTERIEUR.md` § 4).
   - Lis le `href` de chaque carte ; pour un lien `l.facebook.com/l.php`, décode le paramètre `u`. Ne clique jamais l'annonce.
   - Retire `fbclid`, `gclid`, `gbraid`, `ttclid` et `srsltid`. Garde à part, verbatim, les UTM et autres paramètres (`utm_*`, `tw_*`, `campaign_id`…). Compte les annonces par URL.
   - Ouvre chaque destination distincte dans « Veille ». Capture en 1 440 px et en 390 px. Relève le type de page (fiche, collection, accueil, `/pages/…`, advertorial, listicle, quiz), la chaîne de redirections (requêtes réseau de l'extension), le H1, l'offre et les prix.
   - Note la cohérence de 0 à 2 sur quatre critères : accroche et premier écran ; offre annoncée et offre affichée ; prix ou remise ; produit. Rupture connue à vérifier : « -30 % sur le 2ème » (2.0) contre « JUSQU'À -60% ».
   - Efface les données du site après chaque destination.
3. **Visuels.** Capture les 10 plus anciennes encore actives (gagnantes probables) et les 10 plus récentes. Pour chaque vidéo, note l'accroche des 3 premières secondes : image, texte à l'écran, première phrase. Note aussi la présence d'un visage ou d'un praticien.
   - **Son** : l'extension n'entend pas le son. « Première phrase » seulement si des sous-titres sont incrustés. Sinon : télécharge la vidéo publique dans `$TMPDIR` (jamais dans le dépôt) et transcris-la avec Whisper, seulement si i) = oui ; à défaut, écris « non établi ».
4. **Rattache les 17 vidéos** du § 16.4 à leurs annonces : 672030032315793, 3015555038626220, 630204226522716, 725548557183570, 854361433679167, 1382551946054289, 1127430468844751, 1170164804611160, 1424788815815978, 2186223432183471, 942531044896326, 1223428729960782, 4678649919030921, 1091775433016928, 4195067947410046, 1766409657383022, 1529456688443832. Vérifie en particulier si l'annonce F (« OFFRE DE LANCEMENT… quelques jours ») a tourné des mois.
   - Rattache aussi les **4 stories du kit vidéo de novembre 2025** (« Concept », « Lequel choisir », « Avis », « FAQ ») : recherche par mots-clés tirés de leurs transcriptions (`preuves/v2/pub/vid/*.transcript.txt`).
4 bis. **Réutilisation des avis Loox.** Compare les témoignages et les photos des annonces avec `preuves/v2/avis/loox_reviews.json` (texte exact et photo). Note chaque correspondance, sans nom d'auteur.
5. **Autres pages.** Même relevé, plus court (compteurs, transparence, 5 annonces), pour `view_all_page_id=61582665196548` et pour la page 357304574142341, propriétaire du post `story_fbid=122111526512516761`.
6. **Mots-clés.** `…&search_type=keyword_exact_phrase&q=%22soya%20paris%22`, puis `soya-paris.com`, `SOYA 3.0`, `oreiller soya`, `Élu Meilleur Oreiller Orthopédique`.
   - Relève les annonceurs tiers : affiliés (oreillerpillow.com, bestoffersfinder `aff_id=71241`), clones (`soyaparisfrance.com`, `soyaparisfr.store`, `soyaparisoreillerergonomique.com`, `soyapariscoussinergonomique.com`, `soyaparisconfortclothing.com` : qui paie ?), créateurs.
7. **Pays.** Refais le compteur de la page avec `country=BE`, `CH`, `ALL`, puis `US`, `GB`, `CA`, `AU`. Hors UE, seules les annonces actives apparaissent, sans portée : c'est la vue utile à Somnila (AUT-2).
8. **Contenu de marque.** Cherche « Soya Paris » comme partenaire dans la recherche de contenu de marque de la bibliothèque, si elle est accessible.
9. **API `ads_archive`.** Elle exige une vérification d'identité et une application développeur. Elle est **hors mission**, sauf si l'utilisateur la met en place lui-même ; dans ce cas, aucun jeton dans le dépôt.

**3b. Google Ads Transparency** (ID-1, PUB-2, PUB-7) — **le relevé qui tranche l'annonceur vérifié.** Depuis le cloud : 429 et captcha. En local, captcha = arrêt (§ 1.2).
1. `https://adstransparency.google.com/?region=FR&domain=soya-paris.com`, puis `region=anywhere`. Refais avec `us.soya-paris.com` et `soya-paris.us`.
2. Sur la page de l'annonceur (`/advertiser/AR…`), relève :
   - nom légal, « Basé dans », identifiant AR, statut vérifié ;
   - nombre d'annonces, formats (texte, image, vidéo), dates de dernière diffusion, régions.
3. Recherche par nom : « LUXERY SERVICE LTD », « SOYA PARIS », « SOYA ». Relève les domaines associés à chaque annonceur.
4. Pour 10 annonces ou plus : texte, format, première et dernière diffusion, diffusions par pays, et pour l'UE, la sélection d'audience.
   - Cherche les annonces Search de la campagne 22489769215 (annonce 748884517347, mot-clé kwd-390453911726, vers la fiche 2.0, du 17/02 au 20/04/2026 au moins).
   - Cherche des annonces Shopping, Performance Max, YouTube et **Display**.
5. Chaîne `https://www.youtube.com/channel/UC86268FR0iH5YN-Fwr_oLMw` : onglet « À propos » (date, pays, liens). Le Short « Oreiller Soya 2 0 3 » a-t-il servi de publicité ?
6. Si c) = oui : « Mon Centre publicitaire » avec le compte Google existant de l'utilisateur, en lecture seule (voie de plus vers l'annonceur vérifié, `PROTOCOLE_EXTERIEUR.md` Q2).

**3c. TikTok Commercial Content Library** (PUB-3).
1. `https://library.tiktok.com/ads?region=FR&adv_name=soya`. Période visée : du 01/07/2024 au 26/09/2026.
   - Vérifie la date la plus ancienne que le sélecteur accepte ; si besoin, découpe en fenêtres de 6 mois.
   - Note l'URL complète de chaque recherche, avec `start_time` et `end_time` en millisecondes.
   - Sur une erreur 421 (« system busy »), réessaie 3 fois à 10 minutes d'écart, puis écris « bloqué » avec la capture. « Total des annonces : 0 » peut être un artefact : fais une requête témoin (« wopilo » ou « emma ») avant de conclure.
   - Refais avec « SOYA PARIS », « Soya Paris », « soya.paris », « LUXERY », puis les régions BE et « tous les pays de l'UE ».
2. Pour chaque annonce : annonceur, payeur, première et dernière diffusion, personnes touchées par pays, âge et sexe, ciblage (âge, sexe, lieu, centres d'intérêt, audiences personnalisées).
3. Ouvre l'onglet « Autre contenu commercial ».
4. Date des premières annonces : à rapprocher du changement de pixel CSH048JC77U2MN99KTU0 → D9PMU6BC77U7K82NLN50, entre le 03/08 et le 07/09/2026, et du compte @soya.paris créé le 05/08/2026.
5. **Creative Center** (Top Ads, France, secteur Maison ; mots-clés `oreiller`, `pillow`) : `https://ads.tiktok.com/business/creativecenter/inspiration/topads/pc/en?period=30&region=FR` (200 depuis le cloud ; `/pc/fr` renvoie 404). La liste se consulte sans compte ; les détails demandent un compte existant, sur accord (c).

**3d. Autres bibliothèques** (PUB-6, P3).
- Snap : `https://adsgallery.snap.com/`, recherches « LUXERY SERVICE » (échec 429 depuis le cloud) et « SOYA ».
- Pinterest : `https://ads.pinterest.com/ads-repository/`, recherche « soya », UE, 12 mois. La balise 2613625264959 est installée sur le site.
- Amazon : `https://www.amazon.de/adlibrary` (essaie aussi `amazon.fr/adlibrary`), recherches « soya », « SWZEC ».
- Microsoft : 0 annonce le 26/09 depuis le cloud. Ne pas refaire. Pièces : réponses brutes déjà dans `v3/preuves_cloud/v3ads/` (`msft_*.json`, et `urlscan_domain.json`) : cite-les.

**Livrables :**
- `v3/03_publicite.md` ;
- `donnees/annonces_inventaire.csv`, colonnes : `plateforme, page_ou_identite, id_bibliotheque, statut, debut, fin, jours_diffusion, plateformes, versions, n_pubs_meme_creation, format, ratio, duree_s, accroche_0_3s, texte_ecran, premiere_phrase, angle, promesse, offre, cta, titre, texte_principal, url_destination, utm, type_page_destination, coherence_0_2, produit, visage_oui_non, praticien_oui_non, avis_loox_reutilise, allegation_sante_verbatim, portee_ue, portee_fr, portee_be, portee_ch, ciblage_ages, ciblage_sexe, ciblage_lieux, audiences_perso, payeur, beneficiaire, capture` ;
- `donnees/annonces_portee_demographie.csv` : `id, pays, tranche_age, sexe, portee` ;
- `preuves/m03_pub/`.

**Fin :** compteurs Meta relevés, toutes les cartes de la page extraites, sous-ensembles ouverts, destinations visitées, annonceur Google nommé ou absence prouvée, TikTok interrogé.

### M4 — Google.fr : annonces, référencement, Shopping, demande (P1, 1 h 30)
**Sert :** Q7, audit n° 22, 23 et 38, PUB-5, SEO-1 à SEO-4, TRA-2. Sections : § 16.3, § 17.8 à § 17.10.

Profil « Veille » (M1 terminé). Bandeau « Avant d'accéder à Google » : « Tout refuser ». URL de base : `https://www.google.fr/search?q=<requête>&hl=fr&gl=fr&pws=0`. Espace les recherches de 20 à 30 secondes.

- **Marque** (PUB-5, SEO-1) : « soya paris », « soya paris avis », « soya paris oreiller », « soya paris arnaque », « oreiller soya 3.0 avis », « oreiller soya ».
- **Génériques** (SEO-2) : les 19 requêtes de `preuves/v2/ventes/seo/websearch_2026-09-26.tsv` (colonne `requete`). Les 5 premières sont P1.
- **Pour chaque page de résultats** : 2 ou 3 captures en défilant (une capture ne montre que la partie visible), plus le texte de la page ; pour les 6 requêtes de marque, aussi le HTML (`document.documentElement.outerHTML`, écrit avec Write, compressé en `.xz`). Relève :
  - annonces Search (texte, domaine affiché, extensions) ;
  - pour chaque annonce, **« ⋮ » > « À propos de cet annonceur »** (« Mon Centre publicitaire ») : nom vérifié et pays, **sans cliquer l'annonce** ;
  - carrousel « Produits sponsorisés » (marchand, prix, note) ;
  - top 10 naturel, extraits enrichis (étoiles 4,3, prix 139,90 € ou 69,90 €), « Autres questions posées », recherches associées ;
  - présence de signal-arnaques, Trustpilot, clones, affiliés, et soya-paris.com face à us.soya-paris.com.
- **Shopping** (SEO-3) : `https://www.google.fr/search?q=oreiller+soya&udm=28` (ou `tbm=shop`). Relève le prix affiché pour les fiches Soya et le vendeur (Soya, un clone, Cdiscount).
- **Pages indexées** (SEO-4, P3) : `site:soya-paris.com`, `site:us.soya-paris.com`.
- **Demande** (TRA-2) : `https://trends.google.fr/trends/explore?date=today%205-y&geo=FR&q=soya%20paris,wopilo,tediber,derila,oreiller%20ergonomique`, puis sur 12 mois. Relève les requêtes associées.
  - Pour Somnila : `https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=cervical%20pillow,memory%20foam%20pillow,side%20sleeper%20pillow`. Compare les pics (Black Friday, Cyber Monday, Prime Day, janvier) avec la saisonnalité française des § 13.7 et § 17.5. « cervical pillow » sert ici à la recherche de mots-clés, **jamais** dans un texte publicitaire de Somnila (§ 6, S3).
- **Autocomplétion**, par `curl` depuis le Terminal (JSON, sans navigateur) : `https://suggestqueries.google.com/complete/search?client=firefox&hl=fr&gl=fr&q=soya%20paris`, puis `oreiller soya`.
- **Vue américaine pour Somnila** (P2, étiquetée [indice], car l'IP est française) : `https://www.google.com/search?q=<q>&hl=en&gl=us&pws=0` pour « cervical pillow », « memory foam pillow for side sleepers », « contour pillow », « best pillow for neck » : annonceurs, prix Shopping, marques.
- **Calibration ParcelPanel pour A1 n° 36** (P2, 5 min) : `"apps/parcelpanel"` sur Google.fr. Note 2 ou 3 domaines de boutiques et passe-les au sous-agent A1 (il lit leur `/apps/parcelpanel` par `curl`).
- **Bing.fr** (P3, audit n° 23) : `https://www.bing.com/search?q=soya+paris&setlang=fr&cc=FR`, puis « soya paris avis » et « oreiller soya » : annonces, annonceur, top 10.

**Livrables :**
- `v3/04_google_fr.md` ;
- `donnees/google_fr_serp.csv` : `requete, heure_utc, soya_naturel_position, annonces_search (annonceur verifie|pays|texte), shopping (marchand|prix|note), autres_questions, capture` ;
- `preuves/m04_google/`.

**Fin :** 6 requêtes de marque et au moins 5 génériques faites, Shopping et Trends relevés.

### M5 — Réseaux sociaux, organique, créateurs, commentaires (P1/P2, 2 h ; profil « Réseaux » seulement sur accord)
**Sert :** Q3 et Q4, audit n° 8, 13, 14 et 25, RS-1 à RS-4, ID-3. Sections : § 8.2, § 16.3, § 16.5, § 16.10, § 16.11, § 19.10.

Rappel des règles réseaux du § 1.2 : pas de double-clic, aucune touche lettre, aucune story active, aucun clic sur une annonce sponsorisée.

- **Instagram** (ID-3, RS-1) : `https://www.instagram.com/soya.paris/`.
  - Abonnés, publications, abonnements, bio, lien de bio.
  - Menu « … » > **« À propos de ce compte »** : date d'inscription, pays du compte, anciens noms d'utilisateur, publicités actives.
  - 12 dernières publications : date, format, accroche, « J'aime », commentaires, vues, mention « Partenariat rémunéré ».
  - Onglets `/reels/` et `/tagged/`.
  - Publications DEVO2kbthzt, DEVOyCFt8eG et DML-U_atCXp.
  - Pages `https://www.instagram.com/popular/coussin-soya-paris-avis/` et `https://www.instagram.com/popular/oreiller-soya-30-avis/`.
  - Hashtags `#soyaparis`, `#oreillersoya`.
  - **Aucune story active.** Stories à la une : seulement si b) = oui.
- **Facebook** (RS-2) : `https://www.facebook.com/61565502837799`.
  - Mentions « J'aime » (8 352 selon le v2, [non vérifié]), abonnés, onglets Vidéos et Reels, onglet « Avis » ou « Recommandations » s'il existe.
  - Ouvre les vidéos du § 16.4 (`https://www.facebook.com/61565502837799/videos/<id>/`) et recopie le texte **verbatim**. Il remplace la lecture WebFetch du v2.
  - Retrouve le post à 10 K réactions.
- **Commentaires d'annonces** (nouveau). Sur les 5 annonces ou vidéos les plus commentées, filtre « Tous les commentaires », puis compare le nombre affiché et le nombre lisible avec « Plus pertinents ».
  - **Extrais le texte des commentaires par la lecture de la page, hors dépôt** (`~/soya-veille/brut/m05/`, § 2.2). **Classe hors ligne**, sans relire les captures.
  - Classe **au moins 150 commentaires** dans une taxonomie fermée : objection prix ; question produit (hauteur, taille, matière) ; origine / Chine ; « arnaque » ; plainte après-vente ; témoignage produit positif ; témoignage de santé ; tag d'un proche ; autre.
  - Relève aussi : taux et délai de réponse de la page, réponses types, signes de modération.
  - **Seul le CSV anonymisé entre dans `v3/`** (pas de nom, pas de photo). Aucune donnée de santé attachée à une personne.
- **TikTok** (RS-3) : `https://www.tiktok.com/@soya.paris` (id 7670608818355012630, créé le 05/08/2026, 0 vidéo publique selon le v2).
  - Recherches `https://www.tiktok.com/search?q=soya%20paris` et `?q=oreiller%20soya`, triées par récentes et par populaires.
  - `https://www.tiktok.com/discover/avis-oreiller-soya-paris` (l'ancienne URL `/content/…` y redirige).
  - Relève créateurs (pseudonyme public de créateur seulement), vues, date, mention #publicité ou #ad, codes promo cités.
- **YouTube** : recherche « soya paris oreiller » (vidéos, vues, dates, mentions de partenariat).
- **Pinterest** : `https://fr.pinterest.com/search/pins/?q=soya%20paris` et `https://fr.pinterest.com/source/soya-paris.com/`.
- **Codes promo** (RS-4), en lecture seule (règles « sites à risque » du § 1.2) :
  - `https://fr.coupert.com/codes-promo/soya-paris.com` ;
  - `https://www.dealabs.com/search?q=soya+paris` ;
  - igraal, poulpeo, promocodie.
  Codes à confirmer : MAMAN20, AS74, SOYA15, SOYA10. Seul BACK20 est confirmé. N'en teste aucun.
- **Présentateurs récurrents des vidéos.** Ne cherche **pas** à les identifier. Note seulement si le même décor ou le même format apparaît chez FREYJA ou MERCURE PARIS (bibliothèque Meta de ces marques, si elles sont trouvées).

**Livrables :**
- `v3/05_reseaux.md` ;
- `donnees/commentaires_annonces.csv` : `annonce_ou_video, mois_commentaire, categorie, extrait_anonymise, reponse_page_oui_non, delai_reponse` ;
- `preuves/m05_reseaux/` (captures floutées, textes expurgés).

### M6 — Identité de l'opérateur (P1/P2, 1 h 30)
**Sert :** Q1, audit n° 15 à 17 et 40, ID-4 à ID-8, AUT-3. Sections : § 0, § 2.2, § 15.

Commence par la synthèse des résultats de M3 : payeur et bénéficiaire Meta, annonceur vérifié Google, payeur TikTok, transparence de la page Facebook, « À propos » Instagram.

Puis les registres (règle « personnes physiques » du § 1.2) :
- **ID-4, Wyoming** : `https://wyobiz.wyo.gov/Business/FilingSearch.aspx`. Cherche « SOYA PARIS » (« commence par », puis « contient »), puis « MERCURE PARIS », « FREYJA », « LUXERY ». Relève : n° de dépôt, date, statut, agent enregistré, adresse principale, dernier rapport annuel. Les membres ne sont pas publiés.
  - Depuis le cloud, cette page renvoie une page anti-robot (« What code is in the image? »). **Si le captcha apparaît : arrêt.** L'utilisateur le résout lui-même, s'il le veut ; sinon, s'en tenir au § 15 et noter l'échec avec sa capture.
- **ID-5, marques** :
  - `https://www.tmdn.org/tmview/` (EUIPO, INPI et UKIPO en une recherche) ;
  - `https://data.inpi.fr/` (403 depuis le cloud) ;
  - `https://branddb.wipo.int/` ;
  - `https://tmsearch.uspto.gov/`.
  Recherches : « SOYA PARIS », « SOYA », « FREYJA », « MERCURE PARIS ». Relève : titulaire (société seulement), date, classes 20 et 24, statut, mandataire.
  **Ajoute « SOMNILA » et « SOMNILYS »** : c'est utile à Somnila (antériorités, risque de confusion avec somnilys.com). Note l'absence si rien n'apparaît.
- **ID-6, Companies House** : `https://find-and-update.company-information.service.gov.uk/search?q=SOYA+PARIS`, puis « SOYA », « MERCURE PARIS », « FREYJA ».
  - Pour LUXERY SERVICE LTD (16489223), ouvre `/officers` et `/persons-with-significant-control`. Note **seulement** l'existence d'un lien avec une autre entité du dossier : nationalité déclarée, adresse de service partagée, société mère. Ne reproduis aucun nom de particulier ; floute les captures.
- **ID-7, entreprises françaises** : l'annuaire web renvoie une page quasi vide ; utilise l'API publique gratuite, sans la clé `dirigeants` :
  ```bash
  curl -s 'https://recherche-entreprises.api.gouv.fr/search?q=SOYA%20PARIS' | python3 -c "import json,sys; d=json.load(sys.stdin); [r.pop('dirigeants',None) for r in d.get('results',[])]; print(json.dumps(d,ensure_ascii=False,indent=1))" > "$R/build/analyse/soya-paris/v3/preuves/m06_identite/$(date -u +%Y%m%d-%H%MZ)_api_soya-paris.json"
  ```
  Puis « MERCURE PARIS », « FREYJA » (3 s entre deux appels ; 429 depuis le cloud, en principe accessible en local).
- **ID-8, DNS** (Terminal) : `dig +short TXT soya-paris.com`, `dig +short TXT _dmarc.soya-paris.com`, `dig +short MX soya-paris.com`. Relève :
  - le fournisseur de messagerie ;
  - les jetons de vérification Facebook et Google (identifiants publics de vérification de domaine, pas des secrets) ;
  - l'adresse de rapport DMARC `rua` ;
  - les `include:` SPF.
  - **soya-paris.us** : échec de connexion sécurisée depuis le cloud. Constate son statut en local : `dig +short soya-paris.us`, `curl -sI https://soya-paris.us`.
- **Trustpilot** : « Informations sur l'entreprise » de `https://fr.trustpilot.com/review/soya-paris.com`.
- **Clones (AUT-3)** : relevé par `curl` depuis le Terminal, sans exécuter de JavaScript. Vérifie qu'ils sont toujours en ligne (accueil seulement, **aucune requête vers le paiement**, rien sur `checkout.soyaparisfrance.com`) et cherche dans leur code les identifiants de Soya : pixel 1581609639439558, Klaviyo XuYmmR, AW-16655023754. Chrome seulement en profil « Veille », avec les règles « sites à risque » du § 1.2.

**Analyse (hypothèses concurrentes, format du § 2.4).**
- H1 : un opérateur unique, derrière une LLC du Wyoming.
- H2 : LUXERY SERVICE LTD (Royaume-Uni) comme payeur.
- H3 : un prestataire publicitaire tiers qui paie pour le compte de la marque.
- H4 : une autre entité.
Pour chaque pièce, indique +, − ou neutre pour chaque hypothèse.

**Livrable :** `v3/06_identite.md`, avec un schéma texte des entités (boutiques, domaines, pages, payeurs), chaque lien étiqueté et daté.

### M7 — Voix du client, avis, numéros de commande (P2, 1 h 30)
**Sert :** Q2 et Q4, audit n° 2, 4, 5 et 27 à 29, VOC-1 à VOC-4, VEN-3. Section : § 19.

- **VOC-2.** `https://fr.trustpilot.com/review/soya-paris.com/transparency` : capture le texte exact. Dans l'aide officielle (support.trustpilot.com), cherche « basic link » ou « lien simple », et les étiquettes Invited, Unprompted et Verified. Confirme ou infirme la lecture « BasicLink » du § 19.3.
- **Trustpilot direct.** Ouvre 10 avis 5★ récents et note l'étiquette affichée.
- **Disparitions (audit n° 5).**
  - Identifiants : `preuves/v2/avis/wb/wb_reviews.json` (133 avis archivés ; 42 publiés au plus tard en août 2025 [constaté le 26/09 dans le cloud]), et en contrôle croisé :
    `cat "$TMPDIR"/soya_tar/avis/wb/a2025-08-*.dec.html | grep -o '/reviews/[0-9a-f]\{24\}' | sort -u` (40 identifiants, tous dans les 42). Les fichiers `.html` sans `.dec` ne donnent rien au grep.
  - Statut HTTP de chaque identifiant, par `curl` depuis le Terminal, **5 s entre deux appels** :
    `curl -s -o /dev/null -w '%{http_code}\n' -A "$UA" "https://fr.trustpilot.com/reviews/<id>"`.
  - Si une vérification anti-robot apparaît : passe au navigateur, 30 s entre deux pages. Captcha : arrêt.
  - Ouvre dans le navigateur un échantillon de 15 seulement, pour vérifier une date ou une note modifiée. Classe : 404, en ligne, en ligne avec une date ou une note modifiée.
  - Le « ≥ 85 disparus » du v2 vient d'un calcul par différence, pas d'identifiants : seuls ces 42 identifiants se testent un par un. Dis-le.
- **VOC-1** (seulement avec le compte Trustpilot existant, sur accord) : `…?stars=1&sort=recency&page=11` et les pages suivantes, puis `stars=2`. Texte brut hors dépôt (§ 2.2).
- **VOC-3.** `https://www.signal-arnaques.com/scam/view/805026` (nombre de signalements, dates, thèmes). Puis Reddit (`https://www.reddit.com/search/?q=%22soya%20paris%22`), Dealabs, forums Doctissimo, `https://warning-trading.com/consommation/soya-paris-com-avis-escroquerie/`.
- **VOC-4.** Widget Loox affiché sur la fiche 3.0 : ordre des avis, filtres, badges « Vérifié », part des avis avec photo, 1★ visibles, tri par date.
- **VEN-3, numéros de commande** (nouvelle piste). Les 7 numéros déjà trouvés dans `preuves/v2/avis/avis_classes.tsv` :

  | Plateforme | Date de l'avis | Numéro | Indication de date de commande |
  |---|---|---|---|
  | Loox | 23/03/2026 | #336869 | seconde commande, pas encore reçue |
  | Trustpilot | 20/09/2026 | n°360892 | retour demandé en juin 2026 |
  | Trustpilot | 15/09/2026 | #363631 | — |
  | Trustpilot | 14/09/2026 | #366871 | — |
  | Trustpilot | 11/08/2026 | n° 373325 | commande déjà reçue |
  | Trustpilot | 07/09/2026 | #386799 | passée en août |
  | Trustpilot | 21/09/2026 | #393634 | — |

  Cherche-en d'autres, avec leur date :
  - dans le texte intégral Loox (`preuves/v2/avis/loox_reviews.json`) ;
  - dans les pages Trustpilot ;
  - dans les commentaires Facebook de M5 (texte brut hors dépôt) ;
  - sur signal-arnaques.

  **Motif** (Python, insensible à la casse) : `(?i)(?:#|n\s?°|num[ée]ro|commande)\s*:?\s*\b([1-4]\d{5})\b`. Il exige un mot d'amorce et une limite de mot : il ne capte pas les morceaux d'horodatages ou d'identifiants, et il couvre les numéros à partir de #400000, attendus vers la mi-octobre. Contrôle chaque capture à l'œil.

  **Méthode.** Chaque numéro reçoit un intervalle de date de commande (`date_commande_min`, `date_commande_max`), tiré du texte de l'avis (« passée en août », « pas encore reçue ») et, à défaut, borné par la date de l'avis. Ajuste une droite numéro contre date sur les **milieux d'intervalle**, puis refais l'ajustement sur les bornes basses et sur les bornes hautes (sensibilité). L'ordre de grandeur brut, **fragile**, est de 270 à 380 numéros par jour, contre 145 à 260 commandes par jour estimées au § 17.5. Explique l'écart : annulations, commandes de test, commandes sans oreiller, autres canaux, numérotation non continue.
  **Moins de 12 points datés : écris « non établi » et liste la série**, sans aucun chiffre de rythme.

**Livrables :**
- `v3/07_voix_client.md` ;
- `donnees/numeros_commande.csv` (`source, date_avis, numero, date_commande_min, date_commande_max, indice_texte, fiabilite`, sans nom d'auteur ; `indice_texte` expurgé) ;
- `donnees/trustpilot_disparitions.csv` (`id, publie_le, code_http, verifie_navigateur_oui_non, constat`) ;
- `preuves/m07_voc/`.

### M8 — Sourcing, places de marché, presse, affiliation (P2, 1 h 30)
**Sert :** Q8, audit n° 35 à 37, SRC-1 à SRC-6, AUT-1. Sections : § 2.6, § 8.2, § 17.8, § 18.

- **SRC-1.** `https://www.amazon.fr/dp/B0FCXR3BDF` et `https://www.amazon.fr/dp/B0FWQHLZL2` (« SOYA-Paris », marque SWZEC). Clique « Vendu par… » > « Informations vendeur détaillées ». Relève :
  - raison sociale et adresse **de la société** ;
  - prix, nombre d'avis, classement des ventes, date de première disponibilité, photos.
  Compare avec Shenzhen Jintongyuan Technology / Tainengjikang (§ 18.4).
- **SRC-2.** Temu : `https://www.temu.com/fr-en/1pc-memory-foam-pillows-butterfly-shaped-relaxing-cervical-slow-rebound-neck-pillow-sleeping-orthopedic-pillow-bedding-g-601099547811249.html` (ou le même identifiant `g-601099547811249` sur temu.com/fr). AliExpress : `https://www.aliexpress.us/item/3256808598874210.html`, puis essaie `https://fr.aliexpress.com/item/1005008598874210.html`. Relève :
  - prix en euros livré, vendeur, licence commerciale, ventes, délais ;
  - photos d'avis qui ressemblent au 3.0 (cornes, point central froncé, bourrelet nervuré).
- **SRC-3, recherche d'image sur les produits** (jamais sur un visage).
  - Récupère les URL des images dans `https://soya-paris.com/products/oreiller-soya-3-0.json`, puis `oreiller-soya-enfant.json` et `coussin-lombaire-ergonomique-soya.json`.
  - Passe chaque image dans `https://lens.google.com/uploadbyurl?url=<URL encodée>`.
  - Bing : bouton « Rechercher par image » sur bing.com/images, en y collant l'URL publique de l'image. (L'URL `bing.com/images/search?…&q=imgurl:` renvoie vers l'accueil, testé depuis le cloud.)
  - **Pour Somnila (audit n° 37) :** Lens sur l'image CDN de `https://soya-paris.com/products/coussin-ergonomique-avec-tete-de-lit.json`. Google Lens ne lit pas une image locale (le téléversement passe par une boîte de dialogue que l'extension ne pilote pas). Compare ensuite à l'œil, en planche, avec les photos du Lounge 01 dans `build/images/source/01-oreiller-telephone/` : même annonce fournisseur ?
- **Matrice Q8, origine des envois** (dans `08_sourcing_presse.md`, format du § 2.4) : H1 stock en Europe (≈ 19 000 unités réassorties sous `deny`, B2) ; H2 envoi direct depuis la Chine (ParcelPanel `sensitive_world`, délais) ; H3 mixte. Pièces : compteurs, délais des avis, ParcelPanel, politiques de livraison, places de marché.
- **SRC-4.** `https://www.cdiscount.com/search/10/oreiller+soya.html` : fiche du vendeur (société, pays, prix, avis).
- **SRC-6** (utile à Somnila) : `https://www.amazon.com/dp/B0GQ6QJ8JH` (ZGMCX, 11/13 cm, le format du Neck 01). Relève prix en dollars, avis, allégations, photos (visages ou non).
- **Revente.** ManoMano, Leboncoin (`https://www.leboncoin.fr/recherche?text=oreiller%20soya`), Vinted : **seulement le nombre d'annonces et la fourchette de prix**, aucune donnée de particulier.
- **AUT-1, presse et autorité.**
  - Sur Google.fr, `site:elle.fr "soya paris"`, puis la même chose pour santemagazine.fr, lefigaro.fr, forbes.fr, marieclaire.fr, vogue.fr. Cherche aussi « Soya Paris » avec « publireportage » ou « brandvoice », et dans Google News (`https://news.google.com/search?q=%22soya%20paris%22&hl=fr&gl=FR`).
  - **Avatar « Dr. Marc R. » et `https://cdn.shopify.com/s/files/1/0680/4589/7928/files/90.png?v=1739804305`** : seulement **TinEye**, en correspondance exacte : `https://tineye.com/search?url=<URL encodée>` (200 depuis le cloud). TinEye cherche des copies exactes, donc les banques d'images. Note seulement « présente sur N sites, dont banque d'images X ». Si un résultat pointe vers une personne nommée, ne recopie rien et écris « image non trouvée en banque d'images ». Jamais d'identité. Ni Lens ni Bing sur un visage.
- **Affiliation.** Liens sortants de `meilleur-oreillercervical.fr/soya-paris-avis/`, `hadlemans.fr/soya-paris-avis/`, glowchicparis.com, glowupbyparis.com : paramètres `ref`, `sca_ref`, `aff`, `utm`.

**Livrable :** `v3/08_sourcing_presse.md` (tableau « logo presse → article trouvé ou non, URL » ; matrice Q8) et `preuves/m08_sourcing/`.
**Reste impossible :** le fournisseur exact, la densité, l'odeur, les cotes réelles (il faudrait commander).

### M9 — E-mail, SMS, rétention : sources publiques seulement (P2, 30 min)
**Sert :** CRM-1 à CRM-3, audit n° 36 et 41.
- **CRM-1.** `https://milled.com/search?q=soya%20paris`, puis `q=soya-paris.com` (403 depuis le cloud). Relève objets, fréquence, promotions, mécanique de demande d'avis (le « tirage au sort » du § 19.9). Si Milled exige un compte : note « fermé sans compte » et passe.
- **CRM-2.** Relis `https://fast.a.klaviyo.com/forms/api/v7/full-forms?company_id=XuYmmR` et compare avec `preuves/mkt/kl_v7.json` : formulaires nouveaux ou modifiés, tests A/B.
- **CRM-3.** `https://soya-paris.com/apps/parcelpanel` : capture sans saisir de numéro. Lis la documentation publique ParcelPanel sur le mode dropshipping (audit n° 36).
- **LTV (indices).** Compteurs des housses vendues seules (clé `propres` d'`inv.py`) ; mentions de rachat dans les avis authentiques ; auteurs Loox horodatés à la seconde présents sur plusieurs produits (en agrégat, sans nom).
- **Interdit** : toute inscription (newsletter, SMS, quiz). Si l'utilisateur veut un jour s'inscrire avec une adresse dédiée, c'est lui qui le fait, hors de cette mission.

**Livrable :** `v3/09_email_sms.md`.

### M10 — Trafic et performance (P2, 30 min)
**Sert :** TRA-1, TRA-3, VEN-4, audit n° 24 et 42.
- **TRA-1.** `https://www.similarweb.com/website/soya-paris.com/` dans le navigateur. Relève :
  - le libellé exact (« Total Visits » d'un mois ou de 3 mois : c'est l'audit n° 24) ;
  - la courbe mensuelle, les pays, les canaux, et la démographie par âge et par sexe si elle est affichée (utile à l'avatar) ;
  - **la part Display** (3e canal sur ordinateur selon le § 17.7), à mettre en face du « Direct 82 % » des estimations HypeStat (§ 17.7) ;
  - les comparables Wopilo, Tediber, Derila (Display 42 % selon le § 17.7, [non vérifié]).
  Compte existant seulement sur accord.
- **Nomenclature des campagnes (Display, natif, réseaux).** Cherche dans les archives CDX, par `curl` :
  `https://web.archive.org/cdx/search/cdx?url=soya-paris.com/&matchType=prefix&fl=original&collapse=urlkey`
  les paramètres `utm_`, `tw_`, `tblci` (Taboola), `obOrigUrl` (Outbrain), `ttclid`, `fbclid`, `gclid`. Compte-les par source et par campagne : c'est la reconstitution de la nomenclature de SOYA. Enregistre la liste dans `donnees/cdx_parametres.tsv`.
- **TRA-3.** `https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fsoya-paris.com%2Fproducts%2Foreiller-soya-3-0` (interface ; l'API sans clé répond 429) : LCP, INP et CLS des vrais utilisateurs, et poids transféré (audit n° 42).
- **VEN-4.** Deux lectures de la fiche à 5 secondes d'écart, avec `?_=<horodatage>` : compare les en-têtes `etag`, `server-timing` et les compteurs (`curl -sI` puis `curl -s`, depuis le Terminal).

**Livrable :** `v3/10_trafic.md`.

### M11 — Concurrents français et équivalents américains utiles à Somnila (P2 ; 30 min par marque, Derila 1 h ; 7 marques au plus)
**Marques** : Wopilo, Tediber, **Derila** (fr.derilashop.com et la version US), Pilloway, Cloudii, un acteur américain du format double hauteur (ZGMCX ou Comfy Sleepers), et **Somnilys**.

**Redirections.** Les sites américains redirigent souvent une IP française vers leur version UE. Si c'est le cas, utilise leur sélecteur de pays (réglage d'affichage sur un site concurrent, sans saisie de donnée) et étiquette [indice]. Sur soya-paris.com, la règle du § 1.2 reste : jamais de sélecteur.

**Pour chaque marque :**
- bibliothèque Meta : `country=FR` pour les marques françaises, `country=US` pour les américaines (actives seulement, sans portée) ;
- nombre d'annonces actives et les 3 plus anciennes (accroche, format, visage oui ou non, allégation) ;
- offre, essai, garantie, délai, prix par unité en dollars pour les marques US ;
- registre : « médical et urgence » ou « confort, design, transparence ».

**Derila (1 h, référence du devis de Somnila, B7).** Tunnel américain complet, sans saisie : paliers, prix par oreiller en dollars, allégations verbatim, nombre d'avis, garantie, minuteurs, cases pré-cochées, première page de paiement par lien direct (zéro clic). La v6 de Somnila copie ce tunnel : relève chaque écart.

**Somnilys.** Annonces Meta (`country=FR` et `ALL`) et domaine somnilys.com (accueil, produits, pays, WHOIS public par RDAP). Aujourd'hui il n'est vu que sous l'angle de la marque (M6).

**Voix de clientes américaines pour A3 bis** (P2, 45 min). Collecte, texte brut **hors dépôt** (`~/soya-veille/brut/m11_us/`) :
- avis Amazon.com du ZGMCX `B0GQ6QJ8JH`, de Derila US et de 2 ou 3 oreillers contour à double hauteur ;
- fils Reddit (« side sleeper pillow », « contour pillow ») ;
- avis sur les sites US de Derila et de Cloudii.
Vise 150 verbatims. Le classement est fait par A3 bis.

**Livrable :** `v3/11_concurrents.md`, avec :
- une carte texte à deux axes : prix effectif, registre ;
- une matrice des messages : marques × santé, preuve, prix, essai, origine, design, délai ;
- le tunnel Derila US détaillé.

### M12 — Veille des compteurs et des offres (P1 à lancer en M0 ; analyse à J+7)
**Sert :** Q2, audit n° 1, 18 et 19, VEN-1 (probable), VEN-2. Sections : § 17.2, § 17.12, annexe D.3.

- **Base existante.** `preuves/v2/inv/snap-2026-09-26T094803Z.json`, `T104854Z` (incomplet pour le 3.0), `T114902Z`, `T124913Z`, plus la série horaire du cloud jusqu'à 21:48 UTC, qui arrivera dans le push cloud de 21:58 UTC.
- **Série de la session**, quelle que soit la réponse à d) : relevé `inv.py` au début de chaque mission (M0.4).
- **`offre.py` (VEN-2)**, écrit en M0 dans `v3/outils/offre.py`, en lecture seule, avec `curl` (en-tête `Cookie: localization=FR; cart_currency=EUR`) et 3 secondes entre requêtes. À chaque passage, il **ajoute une ligne** à `offres.tsv` (dans le dossier courant), avec les colonnes :
  `utc, theme, blockTitle, prix_1x, prix_duo, prix_famille, composition, minuteur, bandeau`
  - `theme` = `Shopify.theme.name` ;
  - `blockTitle` = titre du bloc d'offres Kaching ;
  - `composition` = contenu des packs ;
  - `minuteur` = réglage `essentialCountdownTimerConfigs` ;
  - `bandeau` = texte du bandeau d'annonce.
  But : dater le prochain habillage (« Black November » attendu début novembre).
- **Tâche planifiée** (seulement après le « ok » de M0 d). Elle vit hors du dépôt, pour éviter les protections de macOS sur Documents et Bureau :
  1. `mkdir -p ~/soya-veille && cp "$R/build/analyse/soya-paris/outils/inv.py" "$R/build/analyse/soya-paris/v3/outils/offre.py" ~/soya-veille/`.
  2. Écris le plist avec le chemin réel de python3 (le heredoc le remplace tout seul). Retire l'indentation du Markdown : `<?xml` et le `EOF` final doivent être en début de ligne. La commande s'arrête d'elle-même après le 04/10/2026 à 00:00 UTC (horodatage 1791072000) ; elle tolère l'absence d'`offre.py` (erreur notée dans `offre.log`).
     ```bash
     PY=$(command -v python3)
     cat > ~/Library/LaunchAgents/fr.somnila.veille-soya.plist <<EOF
     <?xml version="1.0" encoding="UTF-8"?>
     <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
     <plist version="1.0"><dict>
       <key>Label</key><string>fr.somnila.veille-soya</string>
       <key>ProgramArguments</key><array><string>/bin/sh</string><string>-c</string>
         <string>[ "\$(date +%s)" -lt 1791072000 ] &amp;&amp; cd "\$HOME/soya-veille" &amp;&amp; { $PY inv.py &gt;&gt; inv.log 2&gt;&amp;1; $PY offre.py &gt;&gt; offre.log 2&gt;&amp;1; }</string></array>
       <key>StartCalendarInterval</key><array>
         <dict><key>Hour</key><integer>1</integer><key>Minute</key><integer>7</integer></dict>
         <dict><key>Hour</key><integer>7</integer><key>Minute</key><integer>7</integer></dict>
         <dict><key>Hour</key><integer>13</integer><key>Minute</key><integer>7</integer></dict>
         <dict><key>Hour</key><integer>19</integer><key>Minute</key><integer>7</integer></dict>
       </array>
     </dict></plist>
     EOF
     plutil -lint ~/Library/LaunchAgents/fr.somnila.veille-soya.plist
     ```
     Vérifie que le chemin de python3 et `$(date +%s)` apparaissent en clair dans le fichier (`grep -e inv.py -e 'date +%s' ~/Library/LaunchAgents/fr.somnila.veille-soya.plist`).
  3. `launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/fr.somnila.veille-soya.plist`. Test : `launchctl kickstart gui/$(id -u)/fr.somnila.veille-soya`, puis `ls ~/soya-veille/inv/` et `cat ~/soya-veille/offres.tsv`.
  4. Si le Mac dort, launchd rattrape le relevé au réveil. Après le 04/10, la commande ne fait plus rien. Pour décharger l'agent : `launchctl bootout gui/$(id -u)/fr.somnila.veille-soya`. **Le fichier plist reste en place** : sa suppression est une action de l'utilisateur.
- **Analyse à J+7** (une courte session ultérieure la fera ; écris la procédure dans `v3/12_veille.md`) :
  1. Copie `~/soya-veille/inv/` dans `v3/preuves/veille/inv/`, et `offres.tsv` dans `v3/donnees/`.
  2. Compare **variante par variante** (clé `variants`), jamais le champ `sum` : la fiche 3.0 porte aussi les 4 housses 3.0.
  3. Calcule les unités par jour et par produit, sur 24 h glissantes et sur 7 jours. Signale les remontées (réassorts : bornes basses) et les valeurs qui oscillent.
  4. Confronte le résultat au § 17.5 (scénarios A et B) et à VEN-3.
- **Matrice Q2, compteurs** (dans `12_veille.md`, format du § 2.4) : H1 décrément Shopify même sans suivi de stock ; H2 compteur écrit par une application ; H3 cache ou traitement par lots ; H4 commandes créées par API depuis un paiement externe. Pièces : documentation Shopify, pas des relevés, housse 2.0 en `deny` à -38 000 / -41 000 (B2), oscillations, `etag` (VEN-4).
- **Vérification de mécanisme (audit n° 1).**
  - Documentation Shopify (help.shopify.com « inventory tracking » ; shopify.dev, `ProductVariant.inventoryManagement` déprécié ou non, `inventoryItem.tracked`) : une variante non suivie voit-elle sa quantité baisser à la vente ?
  - Une calibration sur une boutique de développement n'est possible que si l'utilisateur la crée lui-même. **Jamais sur la boutique Somnila.**

**Livrable :** `v3/12_veille.md` (J0 et série de session faits, tâche active ou non, procédure J+7, matrice Q2).

### M13 — Démontage complet du site, élément par élément (P1 ; environ 25 h en 3 sessions)
**Pourquoi.** Demande explicite de l'utilisateur : « il faut qu'il analyse vraiment tout : fiche produit, carrousels, disposition, bref que tout soit analysé ». **Sert :** Q11, Q5, Q6, AUT-5, audit A1 (contrôle des mesures du dossier). **Référence complète :** `v3/PROTOCOLE_DEMONTAGE.md` (1 596 lignes) ; lis-le section par section (`grep -n '^## \|^### '`), jamais en entier. Liste des URL : son § 4 et `v3/INVENTAIRE_SITE.md`.

**Ce qui est démonté.** Toutes les pages P00 à P37 du protocole (§ 4), plus P40+ (pages d'atterrissage trouvées par M3) :
- P00 gabarit commun (bandeau, en-tête, menu, tiroirs, pied de page, popups) ; P01 accueil ;
- P02 à P20 : les 19 fiches produit (P02 Soya 3.0, P03 Soya 2.0, P04 enfant, P05 lombaire, P06 housse 3.0 en N1 ; les autres en N2) ;
- P21 à P25 : collections et recherche ; P26 et P27 : panier et première page du paiement ; P28 à P35 : pages, blog, politiques, suivi, compte, 404 ; P36 : us.soya-paris.com ; P37 : fichiers techniques.

**Pour chaque page, aux 4 largeurs (390, 768, 1024, 1440)**, les modules D-M1 à D-M19 du protocole (§ 7) :
- structure et ordre des sections, hauteurs en px, cm et écrans, premier écran, grille, marges, alignements ;
- **chaque carrousel** (une fiche T4 par carrousel) : type, nombre de slides, contenu de chaque slide à l'identique et nature de l'image, défilement automatique et durée, flèches, pastilles, glisser au doigt, boucle, comportement mobile ;
- micro-textes à l'identique, typographie, couleurs (hex), images et icônes (nature : packshot, lifestyle, infographie, IA), espacements ;
- mouvement et états (survol, focus, chargement, erreur, vide) ;
- performance (PageSpeed Insights mobile et desktop, poids réels), accessibilité (clavier, contrastes), SEO (title, meta, H1 à H3, données structurées, canonical, hreflang) ;
- persuasion : chaque levier (urgence, rareté, preuve sociale, autorité, ancrage de prix, cadeau, garantie), où il est, et s'il est **vrai, faux, trompeur ou invérifiable** ;
- traceurs et consentement (renvoi à M1 si identique) ; écarts avec le dossier v2 (tableau T18, valeurs de référence en annexe F du protocole) ;
- **un verdict Somnila par élément** (T19, grille de l'annexe G) : copie, adapte ou évite, avec la raison et la transposition en anglais pour les États-Unis, sans visage ni allégation médicale.

**Fiche produit (P02, puis P03 à P20 par différence)** : démontage composant par composant, C01 à C31 (protocole § 8) :
- la galerie : chaque image dans l'ordre, sa nature, son texte incrusté à l'identique, pour chaque coloris ; zoom, miniatures, changement d'image par variante ; les 33 SVG et les 4 tuiles « positions » **rendus** (la session cloud ne les a vus qu'en rectangles gris) ;
- titre, note affichée, prix et prix barré, badges, compte à rebours ;
- le bloc d'offres Kaching carte par carte (libellé, prix, barré, économie, cadeau, pré-cochage), options, nuanciers, quantité, bouton d'ajout, barre collante ;
- réassurance, logos de paiement, livraison et retours, les 4 « stories » (filmées), les accordéons (texte intégral à l'identique), tableaux comparatifs, FAQ ;
- le widget Loox **rendu** (nombre, tri, photos, filtres ; resté blanc pour la session cloud), ventes croisées, récemment vus.

**Coordination avec les autres missions.**
- P00 cookies = **M1** ; P26 et P27 (panier et paiement) = **M2** fait foi pour les prix et les paniers. Dans M13, exécute seulement les scénarios S0 à S10 du protocole (§ 9.4) que M2 n'a pas couverts, puis la mise en page du tiroir, de `/cart` et du paiement aux 4 largeurs. Mêmes interdits : aucune saisie, jamais de paiement express.
- PageSpeed : M13 le fait sur toutes les pages ; M10 garde SimilarWeb, CrUX et les en-têtes.
- Le protocole utilise « Enquête Soya » ou « Analyse Soya » pour le profil Chrome : c'est ton profil « Veille ».
- Les règles du protocole (§ 1) s'ajoutent aux tiennes. En particulier : **pixels publicitaires bloqués** dans les captures Playwright (sauf D-M13 performance et D-M17 traceurs), aucune saisie, sélecteur de pays ouvert mais jamais validé.

**Mise en route (1 h, en début de première session M13).**
1. Protocole § 2 : dossiers `v3/site/…` et `v3/outils/`, Playwright (`npm i playwright`, gratuit), Pillow.
2. Les scripts des annexes A à E du protocole (`demontage.js`, `capture.mjs`, `glisser.mjs`, `assemble.py`, `har_resume.py`, `psi.sh`, `resume_json.py`) sont **proposés mais non testés**. Écris-les dans `v3/outils/`, teste-les d'abord sur P01 en 1440 (protocole § 2, étape 10 : EUR attendu, page d'environ 4 730 px), puis corrige **tes copies** dans `v3/outils/`, jamais le protocole. Note chaque correction dans le journal.
3. HAR : `content: 'omit'` comme dans le protocole ; seuls les résumés `.md` vont dans le dépôt (les `.har` sont exclus par `v3/.gitignore`).

**Ordre** (protocole § 13, adapté) :
- **M13-1** (≈ 8 h) : P02 complet aux 4 largeurs (C01 à C31, tous les carrousels, galerie rendue, Loox rendu, stories) ; P01 ; P03 à P06.
- **M13-2** (≈ 8 h) : P26 et P27 (compléments de M2) ; P07 à P20 en N2 ; P21 à P25.
- **M13-3** (≈ 8 h) : P28 à P37 ; P36 en N1 ; PSI et Lighthouse sur toutes les pages ; pages d'atterrissage P40+ ; module téléphone avec l'utilisateur (environ 40 min, s'il est d'accord) ; puis `98_contre-verification.md` (30 lignes tirées au hasard, 30 de plus si plus de 3 corrigées) et `99_synthese.md`.

**Livrables** : `v3/site/Pxx.md` (gabarit du protocole § 12.2), `v3/site/00_INDEX.md` (matrice page × largeur × module, tenue à jour après chaque page), `v3/site/98_contre-verification.md`, `v3/site/99_synthese.md` : design system reconstitué, inventaire de tous les carrousels, inventaire des leviers de persuasion avec leur statut, parcours du prix de la fiche au paiement, mobile face au desktop, performance, **les 30 verdicts Somnila les plus utiles**, écarts avec le dossier v2.

**Fin de mission** : toutes les pages N1 rédigées aux 4 largeurs ; N2 et N3 au niveau du protocole ; `00_INDEX.md` sans case vide non justifiée ; contre-vérification faite ; commit par page ou par groupe de pages.

### Angles morts P3 ou abandonnés (décision écrite)
Chacun reçoit un statut dans la matrice de couverture : fait, P3 non fait (temps), ou abandonné (raison).
- **PUB-8, reciblage** : **abandonné pour la session** (il lie volontairement l'identité de l'utilisateur aux audiences de SOYA). Hors session, fait par l'utilisateur lui-même s'il le veut : procédure E09 de `PROTOCOLE_DEMONTAGE.md` (visite de la fiche 3.0 et ajout au panier dans un profil connecté, puis 24 à 72 h de captures des annonces Soya dans ses fils). C'est la seule exception à « Réseaux n'ouvre jamais soya-paris.com », et elle relève de lui seul. Sans décision : `[non testé : décision]`.
- **SRC-5, autres places fournisseurs** (P3, M8) : Alibaba `1601682543310` (page vide depuis le cloud), DHgate, eBay (403 depuis le cloud), 1688. Prix, vendeur, photos.
- **AUT-1 bis, labels** (P3, M8) : OEKO-TEX (cherche « OEKO » dans la source des fiches ; numéro de certificat ; vérification sur le label-check officiel d'OEKO-TEX) et CertiPUR-EU (base publique des titulaires).
- **AUT-5, mouvement et mobile** : **passé en P1 dans M13** (les 4 stories filmées en GIF, popup Klaviyo et héros en 390 × 844, module téléphone).
- **Prix affichés en Belgique et en Suisse** (P3, M2) : par `curl` avec `-H 'Cookie: localization=BE; cart_currency=EUR'`, puis `localization=CH; cart_currency=CHF`. Devise, prix, packs. Étiquette [indice].
- **TikTok Shop FR** (P3, M5) : présence de Soya ou de clones dans la boutique TikTok, en lecture seule.
- **Profil de liens entrants** (P3, M10) : les 348 liens venant de 150 domaines, dont 65 à Singapour (§ 17.7) : vue publique gratuite seulement (sans compte).
- **Recherche générique** (P3, M8 ; audit n° 35) : « oreiller papillon mémoire de forme deux hauteurs » sur Amazon.fr, AliExpress et Temu : prix, vendeurs, photos.
- **Bing.fr sur les requêtes de marque** (P3, M4 ; audit n° 23).

### Matrice de couverture (à recopier dans `JOURNAL.md`, à tenir à jour, à reprendre dans S1)
Statut initial : « à faire ». Le détail de chaque ligne (sections du dossier, URL, procédure) est dans `v3/ANGLES_MORTS.md`, sous le même identifiant.

| Angle mort | Objet | Mission | Priorité | Statut |
|---|---|---|---|---|
| ID-1 | annonceur vérifié Google | M3b | P1 | à faire |
| ID-2 | bénéficiaire et payeur des annonces Meta (DSA), transparence de la page 61565502837799 | M3a | P1 | à faire |
| ID-3 | « À propos de ce compte » Instagram | M5 | P1 | à faire |
| ID-4 | registre du Wyoming | M6 | P1 | à faire |
| ID-5 | marques (TMview, INPI, WIPO, USPTO) | M6 | P2 | à faire |
| ID-6 | Companies House | M6 | P2 | à faire |
| ID-7 | entreprises françaises (API) | M6 | P2 | à faire |
| ID-8 | DNS | M6 | P1 | à faire |
| PUB-1 | bibliothèque publicitaire Meta, inventaire complet | M3a | P1 | à faire |
| PUB-2 | Google Ads Transparency | M3b | P1 | à faire |
| PUB-3 | bibliothèque TikTok | M3c | P1 | à faire |
| PUB-4 | budget par la portée | A4 | P1 | à faire |
| PUB-5 | annonces Google.fr sur la marque | M4 | P1 | à faire |
| PUB-6 | Snap, Pinterest, Amazon, Microsoft | M3d | P3 | à faire |
| PUB-7 | Google : formats, régions, campagne Search | M3b | P1 | à faire |
| PUB-8 | reciblage | hors session (E09) | — | abandonné pour la session |
| RS-1 | Instagram | M5 | P1 | à faire |
| RS-2 | Facebook | M5 | P1 | à faire |
| RS-3 | TikTok | M5 | P2 | à faire |
| RS-4 | codes promo | M5 | P2 | à faire |
| RS-5 | revente entre particuliers (§ 16.11) | — | — | abandonné (particuliers : aucune collecte) |
| PAN-1 | 1x, 3 coloris, housse (et 1 bis) | M2 | P1 | à faire |
| PAN-2 | packs Duo et Famille | M2 | P1 | à faire |
| PAN-3 | deux prix pour un oreiller | M2 | P1 | à faire |
| PAN-4 | popup acceptée | M2 | P2 | à faire |
| PAN-5 | première page du paiement | M2 | P1 | à faire |
| PAN-6 | PayPal, nom du marchand | utilisateur (procédure M2) | — | hors session |
| PAN-7 | prix vus depuis la France | M2 | P1 | à faire |
| CON-1 | bannière de consentement pour une visiteuse française | M1 | P1 | à faire |
| SEO-1 | marque sur Google.fr | M4 | P1 | à faire |
| SEO-2 | requêtes génériques | M4 | P1 (5) / P2 | à faire |
| SEO-3 | Shopping | M4 | P1 | à faire |
| SEO-4 | pages indexées | M4 | P3 | à faire |
| TRA-1 | SimilarWeb, Display | M10 | P2 | à faire |
| TRA-2 | Trends FR et US | M4 | P1 | à faire |
| TRA-3 | PageSpeed | M10 | P2 | à faire |
| VEN-1 | relevés des compteurs pendant 7 jours ou plus | M12 | P1 | à faire |
| VEN-2 | offres (`offre.py`) | M12 | P1 | à faire |
| VEN-3 | numéros de commande | M7 | P2 | à faire |
| VEN-4 | `etag`, `server-timing` | M10 | P2 | à faire |
| SRC-1 | Amazon.fr, SWZEC | M8 | P2 | à faire |
| SRC-2 | Temu, AliExpress | M8 | P2 | à faire |
| SRC-3 | recherche d'image produits, Lounge 01 | M8 | P2 | à faire |
| SRC-4 | Cdiscount | M8 | P2 | à faire |
| SRC-5 | Alibaba, DHgate, eBay, 1688 | M8 | P3 | à faire |
| SRC-6 | Amazon.com, ZGMCX | M8 | P2 | à faire |
| VOC-1 | Trustpilot 1-2★ au-delà de la page 10 | M7 | P2 (compte sur accord) | à faire |
| VOC-2 | transparence Trustpilot | M7 | P2 | à faire |
| VOC-3 | signal-arnaques, Reddit, forums | M7 | P2 | à faire |
| VOC-4 | widget Loox affiché | M7 | P2 | à faire |
| VOC-5 | « tirage au sort » et lien d'avis envoyé avant la livraison (§ 19.9, § 19.13) | M7 | P3 | citations publiques seulement (il faudrait recevoir les e-mails de SOYA) |
| CRM-1 | Milled | M9 | P2 | à faire |
| CRM-2 | formulaires Klaviyo | M9 | P2 | à faire |
| CRM-3 | ParcelPanel | M9 | P2 | à faire |
| AUT-1 | presse, autorité, labels | M8 | P2 (labels P3) | à faire |
| AUT-2 | vue hors UE et US | M3a.7, M2 PAN-US | P1 | à faire |
| AUT-3 | clones | M6 | P2 | à faire |
| AUT-4 | minuteur à minuit | M2 | P3 | à faire |
| AUT-5 | stories en GIF, mobile 390 × 844 | M13 | P1 | à faire |
| SITE-1 | démontage P00 à P37 aux 4 largeurs (matrice détaillée : `v3/site/00_INDEX.md`) | M13 | P1 | à faire |
| SITE-2 | fiche 3.0, composants C01 à C31, galerie et SVG rendus, Loox rendu | M13 | P1 | à faire |
| SITE-3 | tous les carrousels, slide par slide | M13 | P1 | à faire |
| SITE-4 | performance, accessibilité et SEO de chaque page | M13 | P1 | à faire |
| SITE-5 | us.soya-paris.com (P36) | M13, M2 PAN-US | P1 | à faire |
| SITE-6 | pages d'atterrissage des publicités (P40+) | M13 après M3 | P1 | à faire |

---

## 5. Missions d'analyse (sous-agents possibles, en parallèle des missions navigateur)

### A1 — Audit adversarial du dossier v2 : analyser l'analyse (P1)
**But :** dire, chapitre par chapitre, ce qui tient, ce qui est faux, et ce qu'il faut corriger. Écrire dans `v3/20_audit_v2.md` (fusion des 4 parties `v3/20_audit_v2_partN.md`, § 4) et `donnees/affirmations_audit.csv` (`n, affirmation, §, type, etiquette_v2, test, preuve_v3, verdict, etiquette_corrigee, correction_proposee`).

**Verdicts :** confirmé, corrigé, réfuté, non vérifiable.

**Indépendance (B1).** Recompte à l'aveugle : pour les n° 2, 4, 18, 19, 27 et 28, le sous-agent recalcule à partir des données brutes et de l'énoncé du test, **sans lire le chiffre du v2**, puis compare. Écris le résultat aveugle avant la comparaison.

**1. Les 42 affirmations à plus fort enjeu.** Type A = accusation contre SOYA ; D = décision pour Somnila. Les tests « en direct » viennent des missions M1 à M12 ; le sous-agent fait les tests « dépôt » et reporte ensuite les résultats du navigateur.

| n° | Affirmation v2 (§) | Type | Test décisif |
|---|---|---|---|
| 1 | Les compteurs `inventoryQuantity` sont des ventes nettes, alors que les variantes 3.0 sont en `inventoryManagement: null` (§ 17.2) | A+D | Documentation Shopify + relevés de M12 + matrice Q2 |
| 2 | Loox : 1 137 avis sur 1 776 (64 %) à 00:00:00 UTC, aucun à 1-2★, 494 antérieurs au 05/09/2024 (§ 19.4) | A | Recompte Python à l'aveugle sur `loox_reviews.json` ; documentation d'import Loox ; 5 phrases répétées sur Google.fr (M4) |
| 3 | « 4,8/5 – 15 637 avis » écrit en dur, identique sur 19 fiches depuis 04/2025 (§ 1, § 16.5) | A | Source de 3 fiches en direct (M2) + 3 captures Wayback du tar |
| 4 | Trustpilot 4,3 : un flux invité (≈ 22/j, 4,67) + un flux spontané (≈ 2/j, 1,56) (§ 19.3) | A | Documentation officielle « BasicLink » (M7) + recompte à l'aveugle sur les TrustBox |
| 5 | ≥ 85 avis positifs disparus entre le 22/08/2025 et le 15/03/2026 (§ 19.5) | A | Statut des 42 identifiants d'août 2025 (M7) |
| 6 | Somnila UE : 27,43 € avant publicité, point mort CAC 27,43 € (§ 13.6, § 18.9) | D | Recalcul corrigé (voir B3 ci-dessous) |
| 7 | Somnila ne doit pas baisser son prix ; pack 76,90 € < panier Soya 84,80 € (§ 1, § 12, § 13.6) | D | Refaire en USD face à Derila, Cloudii, Pilloway US (M11) |
| 8 | Soya et Somnila visent « la même cliente » (§ 1, § 2.5) | D | Portée DSA par âge et sexe (M3) + avatar A3 |
| 9 | Prix de référence gonflé : 3.0 toujours à 69,90 €, référence 119,90 → 139,90 € (§ 1, § 7.3, § 17.4) | A | `.js` en direct, CDX 20/05-15/08/2025, archive.ph |
| 10 | Urgence perpétuelle : minuteur `recurring`, « FRENCH DAYS » 11 jours après la fin officielle (§ 1, § 16.8 bis) | A | Code source + minuit (M2) + dates officielles des French Days 2026 |
| 11 | Housse payante cochée d'avance, panier 84,80 €, housse Bleu par défaut (§ 1, § 18.7) | A | M2 PAN-1, PAN-1 bis, PAN-2 |
| 12 | Paiement Shopify standard, montant = bloc d'offres (§ 14, § 18.6) | A | M2 PAN-5 |
| 13 | Allégations santé sur le site et dans les annonces (§ 1, § 16.4) | A | Verbatim de la bibliothèque Meta + vidéos Facebook (M3, M5) + textes anglais de PAN-US |
| 14 | Commentaires nommés avec des maladies dans la vidéo « Avis clients » (§ 16.5) | A | Voir la procédure du n° 14 ci-dessous |
| 15 | 5 boutiques Shopify, identifiants communs (§ 15.4, § 15.5) | A | Tar + `infra.py` rejoué (procédure du point 3) |
| 16 | FREYJA et MERCURE, même opérateur (listes h1 à h5) (§ 15.6, § 15.7) | A | Décodage base64 des `h1…h5` + calibration (procédure du n° 16 ci-dessous) |
| 17 | Aucune personne ni société reliée à soya-paris.com (§ 0, § 15.8) | A | M3 + M6 |
| 18 | CA ≥ 4,0 M€ TTC sur 342 jours (§ 17.5) | D | Recalcul à l'aveugle ; `scenarios.py`, `recalc.py`, `preuves/v2/ventes/ca_modele.py`, analyse de sensibilité, M12, VEN-3 |
| 19 | 3.0 ≥ 240/j, 461/j en septembre ; 2.0 162/j ; lombaire dans 20 à 40 % des commandes (§ 17.4, § 17.5) | D | Les 45 captures sont dans le tar : rejoue `extract.py` dessus. Recollecte en `id_` seulement 3 captures tirées au hasard, pour contrôler le tar contre la Wayback en direct. Bornes datées par `reqid`. Recalcul à l'aveugle |
| 20 | Budget publicitaire de 3 800 à 10 400 €/j hors pic (§ 16.9) | D | A4 (estimation par la portée) |
| 21 | Meta est le canal principal ; les 17 vidéos sont des annonces (§ 16.4) | D | M3 |
| 22 | Google : Search de 02 à 04/2026, Shopping gratuit, LUXERY = indice faible (§ 16.3) | D | M3b + M4 |
| 23 | Organique quasi nul, 0 sur 19 requêtes génériques (§ 17.8) | D | M4 (Google.fr réel, Bing.fr en P3) |
| 24 | 345,6 k visites en « août seul » (§ 17.7) | D | M10 |
| 25 | TikTok = identité publicitaire seulement, aucun créateur (§ 16.10) | D | M3c + M5 |
| 26 | Témoignages et chiffres recyclés (4 « Acheteur vérifié », sondage 96/91/87 % redaté) (§ 15.1, § 15.3) | A | grep dans le tar + pages en direct |
| 27 | 3,73/5 sur 133 avis Loox récents, 26 % à 1-2★ (§ 19.4) | D | Recalcul à l'aveugle, avec et sans doublons |
| 28 | Délai médian de 13 jours (§ 18.8, § 19.8) | D | Médiane à l'aveugle, séparée 4-5★ et 1-2★ (`delais_extraits.json`) |
| 29 | Remboursement en 60 j médians, retours payants malgré « sans frais » (§ 19.9) | D | Relecture des 44 cas + politiques en direct (M2) |
| 30 | Pas de CGV, de rétractation, de garantie légale, de médiateur (§ 11) | A | Pages en direct (M2 ; `/policies/terms-of-sale` en 404 le 26/09) |
| 31 | « Soldes » hors période légale, faux « déstockage » (§ 11, § 16.8 bis) | A | Dates légales 2025 et 2026 (A2) |
| 32 | Rareté écrite en dur (« 89 % écoulé ») (§ 1) | A | Source + 3 rechargements (M2) |
| 33 | La popup « 60 % » change d'objet (coussin « lombaire ») (§ 8.4) | A | JSON Klaviyo en direct + écran 1 (M2, M9) |
| 34 | Le volume se fait en packs (§ 17.4, § 17.5) | D | Nombre d'avis qui citent « 2 oreillers », « pack », « 4 oreillers » |
| 35 | Modèle catalogue chinois, coût rendu de 13 à 25 € (§ 18.2 à § 18.6) | A+D | M8 (Lens, AliExpress, Temu, recherche générique P3) + `marge.py` rejoué |
| 36 | Envoi depuis la Chine (ParcelPanel `sensitive_world`) (§ 18.8) | A | Documentation ParcelPanel + calibration (procédure du n° 36 ci-dessous) |
| 37 | Lounge 01 = coussin tête de lit de Soya ; packshot Mask 01 = oreiller (§ 13.6, § 18.5) | D | Lens sur l'image CDN (M8) + planche avec `build/images/source/01-oreiller-telephone/` |
| 38 | Saisonnalité : janvier-février et septembre (§ 13.7, § 17.5) | D | Trends FR et US (M4) |
| 39 | Pixels chargés sans consentement (§ 11) | A | M1 |
| 40 | Clones sans lien avec Soya (§ 15.9) | A | M6 + mots-clés Meta (M3) |
| 41 | Aucune rétention (§ 8.6) | D | M9 |
| 42 | Fiche 3.0 : 27,48 Mo sur mobile (§ 10.2) | A | M10 (PageSpeed) |

**Procédures particulières.**
- **n° 14.** N'installe aucun logiciel (Homebrew, ffmpeg) sans accord (i). Avec ffmpeg : `ffmpeg -ss 18.5 -i avis.mp4 -frames:v 1 "$TMPDIR/avis_18s.jpg"` sur la vidéo du CDN (bloc `liquid_GDmj3c` de la fiche 3.0). Sans ffmpeg (repli, par la session principale) : ouvre la vidéo du CDN dans Chrome, place `document.querySelector('video').currentTime=18.5` par JavaScript, puis capture. **Cette image reste hors dépôt** (`$TMPDIR`). Dans `v3/`, seulement le décompte : N commentaires nommés, M mentions de pathologie. Rappel : `preuves/v2/pub/vid/hr_avis_comments.jpg` est déjà dans le dépôt (B10).
- **n° 16.** Calibration sur 2 boutiques Shopify publiques dont les domaines sont connus (vérifiés par crt.sh) : lecture par `curl` de `/cdn/fonts/` dans leur HTML, décodage base64 de h1 à h5. Pas la boutique Somnila, que le § 1.2 exclut.
- **n° 36.** Les 2 ou 3 boutiques trouvées en M4 par `"apps/parcelpanel"` : lis leur `/apps/parcelpanel` par `curl` et cherche `sensitive_world`.
- **Annexe B.** Vérifie que ses URL s'ouvrent toujours : `curl -s -o /dev/null -w '%{http_code}'`, 3 s entre deux appels. Les échecs vont dans la liste « à ouvrir par la session principale ».

**2. Faiblesses de méthode à trancher** (une réponse écrite pour chacune) :
- **B1. Biais d'ensemble.**
  - La contre-vérification n'était pas indépendante (même session, même jour). D'où le recompte à l'aveugle ci-dessus et la phase S0.
  - Les sources lues par WebFetch sont potentiellement reformulées.
  - WebSearch passe par les États-Unis ; la collecte s'est faite depuis une IP américaine ; une seule journée de relevés.
  - Les échantillons d'avis sont biaisés vers le négatif, mais les délais sont présentés en tête comme des faits généraux (§ 1, § 13.5).
  - Le § 14.1 conclut « inutile de refaire l'analyse ». **Écarte cette auto-évaluation** : 55 % de corrections justifient une relecture complète.
- **B2. Compteurs et CA.**
  - Mécanisme non établi (voir n° 1 et la matrice Q2). La housse 2.0 était en `deny` avec un compteur de -38 000 à -41 000 : contradiction.
  - Piste manquante : des commandes créées par API depuis un paiement externe.
  - Surestimations non chiffrées : annulations, réexpéditions.
  - Le « hors pic » du § 16.9 contient la période à 461/j : seul le scénario A (15,2 à 20,1 k€/j) est hors pic.
  - Pack de 4 du 2.0 récent (≈ 25/09/2026) : avant, c'était un pack de 3 à 127,90 €. La borne basse du 2.0 est donc trop basse.
  - Housse 3.0 à 14,32 € incompatible avec le scénario « 90 % Famille ».
  - TVA retirée de 100 % du CA.
  - 4,04-4,96 M€ contre 3,0-3,8 M€ selon le script `preuves/v2/ventes/ca_modele.py` (rejoué le 26/09 dans le cloud : cumul de 3 018 133 à 3 795 064).
  - Trois ratios housses / oreillers : 41 %, 34 %, 70-72 %.
  - « 160 à 460/j » mélange un total et un rythme.
  - Recoupement circulaire avec SimilarWeb.
  - Trois lectures du lombaire : 20-40 %, 12 %, 14 %.
  - Environ 19 000 unités de réassort sous `deny` : Soya tient donc un vrai stock, ce qui nuance « l'envoi direct depuis la Chine » (matrice Q8).
- **B3. Marges.** Refais le point mort de Somnila en UE avec :
  - les frais de carte internationale et de conversion (la boutique facture depuis les États-Unis) ;
  - la provision retours sur le HT (2,91 €, pas 3,50 €) ;
  - le droit européen de 3 € par catégorie ;
  - le coût d'un intermédiaire IOSS ;
  - le coût réel de l'essai « sans renvoi ».
  Exemple à vérifier : 58,25 − 25 − 4,07 − 2,91 − 3 ≈ 23,27 €.
  **Chiffre le marché US**, qui n'est pas fait : 79,99 $ hors taxe de vente, droits HTS 9404.90 et surtaxes en vigueur, fin du *de minimis*, DDP ou DDU (la politique de Somnila promet de rembourser les frais demandés à la livraison). Vérifie sur hts.usitc.gov et cbp.gov. Ajoute le Royaume-Uni, le Canada et l'Australie (TVA britannique sous 135 £, TPS/TVH, GST australienne sur les importations de faible valeur).
  Pour Soya : pire cas réel de la housse en ajout (≈ 3,24 €) ; hypothèse « TVA reversée ou non » (+11,65 € par commande 1x) à trancher avec M2 (matrice Q5).
- **B4. Avis.**
  - Contradiction au § 19.4 : « 814 avis antérieurs au 02/04/2025 » alors que le domaine est servi depuis le 05/09/2024. Seuls les 494 avis d'avant cette date sont « impossibles ».
  - Précision limitée des thèmes (plafonds), n = 133.
  - Autre origine possible des imports : AliExpress ou Amazon.
- **B5. Réseau.**
  - Hypothèses non documentées par Shopify : ordre des identifiants de boutique, rang de thème, listes h1 à h5.
  - « 13 mois » : c'est plutôt 13,8.
  - « 16 versions » : environ 11 observées.
  - « Presque toujours “fin aujourd'hui” » : 6 captures sur 13.
  - « Page Facebook créée en 2024 » déduit du mot « 2024 » (M3 tranche).
- **B6. Publicité.** Statut des vidéos déduit, « 1 réaction pour 100 affichages » supposé, avatar sans données d'audience.
- **B7. Marché.** Le § 13 est écrit pour la France (H1 en français, CGV françaises, INPI sans USPTO, sleeps.fr, French Days). Somnila, c'est l'anglais et les États-Unis d'abord. Le concurrent de référence du devis (Derila) n'est pas analysé (M11 le fait).
- **B8. Dates à vérifier.**
  - French Days 2026 ; fin des soldes d'été 2025 (22/07/2025, [non vérifié] au § 11) et 2026, et leurs dates en Corse ;
  - droit UE de 3 € (01/07/2026) ; fin du *de minimis* US (29/08/2025) ;
  - taxe française de 2 € (mars 2026, suspendue au 01/07/2026) et frais de gestion de 2 € par colis (novembre 2026) (§ 18) ;
  - règles Trustpilot « feb-2026 » (§ 19) ;
  - date de création de la boutique déduite de la collection « frontpage » (02/04/2025, § 0) ;
  - dates Instagram déduites des codes courts (§ 16) ;
  - « Executive Order 14388 du 20/02/2026 » ; règles CBP 2026-12669 et 12670 ;
  - règlement 2024/3228 ;
  - délai médian de 12 contre 13 jours ;
  - avance des témoignages de « cinq » contre « six mois et demi ».
- **B9. Articles de loi** : voir A2.
- **B10. Risque pour Somnila** : dépôt public, accusations nominatives, données de santé de personnes nommées (dont `hr_avis_comments.jpg`, déjà versé). Voir M0 f.

**3. Recalculs** (dans le dépôt, hors navigateur). **Ne lance jamais un script v2 depuis `preuves/v2/…`** : plusieurs écrivent leur sortie dans le dossier courant et écraseraient des preuves déjà commitées. Procédure (testée le 26/09 dans le cloud : `extract.py`, `parse_loox.py` et `compteurs_famille.py` redonnent à l'identique `extract_out.json`, `loox_reviews.json` et `compteurs_famille_out.txt`) :
```bash
R=$(git rev-parse --show-toplevel); P="$R/build/analyse/soya-paris/preuves"
mkdir -p "$TMPDIR/soya_tar" "$TMPDIR/soya_run"
[ -d "$TMPDIR/soya_tar/ventes" ] || tar -xJf "$P/v2/pages_html.tar.xz" -C "$TMPDIR/soya_tar"
cp "$P/v2/contre_trafic/extract.py" "$P/v2/contre_trafic/recalc.py" "$P/v2/avis/parse_loox.py" \
   "$P/v2/reseau/infra.py" "$P/v2/ventes/scenarios.py" "$P/v2/ventes/ca_modele.py" \
   "$P/v2/sourcing/marge.py" "$TMPDIR/soya_run/"
sed -e "s#^S=.*#S='$P/'#" -e "s#soya2/inv/#v2/inv/#" "$P/v2/contre_sourcing/compteurs_famille.py" > "$TMPDIR/soya_run/compteurs_famille.py"
( cd "$TMPDIR/soya_run" && python3 extract.py "$TMPDIR"/soya_tar/ventes/wayback/*.html && python3 recalc.py )
( cd "$TMPDIR/soya_tar/avis" && python3 "$TMPDIR/soya_run/parse_loox.py" )
( cd "$TMPDIR/soya_run" && python3 infra.py "$TMPDIR"/soya_tar/reseau/wayback/*.html )
( cd "$TMPDIR/soya_run" && python3 scenarios.py && python3 ca_modele.py && python3 marge.py && python3 compteurs_famille.py )
git -C "$R" status --short build/analyse/soya-paris/preuves/v2/   # doit être vide
```
- `compteurs_famille.py` : la copie pointe `S` vers `preuves/` (fiches de `preuves/soya/web/`, relevés de `preuves/v2/inv/`). Si ce n'est pas possible, marque-le « non rejouable ».
- **Non relançables** (entrées restées dans le cloud, chemins `/tmp/claude-0/…`) : `ventes/analyse.py`, `ventes/fenetres.py`, `ventes/parse_ref.py`, `sourcing/phash.py`, `contre_sourcing/flipcrop.py`, `avis/loox_fetch.py`, `pub/vid/transcribe.py`. Recalcule ce qui peut l'être dans `v3/outils/`, à partir des sorties versées (`loox_reviews.json`, `extract_out.json`, `snap-*.json`), et note « non relançable : entrée restée dans le cloud ».
- Compare chaque sortie aux chiffres du texte et note chaque écart. Écris tes propres scripts dans `v3/outils/`.

**4. Grille de notation par chapitre.**
- **Barème de 1 à 5 :**
  - **F (fiabilité)** : 5 si 90 % ou plus de l'échantillon est confirmé ; 4 de 75 à 89 % ; 3 de 60 à 74 %, ou une erreur à fort enjeu ; 2 de 40 à 59 % ; 1 sous 40 %, ou une affirmation centrale réfutée.
  - **C (complétude)** : 5 si toutes les sources accessibles sont exploitées ; 3 si les angles morts sont repérés mais pas comblés ; 1 si la question principale reste sans réponse.
  - **U (utilité pour Somnila)** : 5 si les décisions s'appliquent directement aux États-Unis, au Canada, au Royaume-Uni, à l'UE et à l'Australie, en boutique anglaise ; 3 si c'est l'UE seulement, ou après adaptation ; 1 si c'est sans conséquence.
- **Note globale** = 0,4 F + 0,2 C + 0,4 U.
- **Échantillonnage.**
  - **Affirmation** = ligne du chapitre qui contient un chiffre ou une étiquette entre crochets.
  - Liste-les avec les repères du § 3.1, par exemple : `awk -v a=<début> -v b=<fin> 'NR>=a && NR<b && (/[0-9]/ || /\[(constaté|déduit|indice|non vérifié)/) {print NR": "$0}' DOSSIER_SOYA_PARIS.md`. Numérote-les.
  - Tire au hasard avec `random.seed(26092026)` puis `random.sample(...)`, pour que le tirage soit reproductible.
  - Au moins 5 affirmations par chapitre, dont toutes celles du tableau ci-dessus qui le concernent. La moitié est tirée au hasard.
  - Garde la liste tirée dans `donnees/tirage_audit.csv` (`chapitre, ligne, texte_court, tiree_au_hasard_oui_non`).
- **Règles :**
  - F ≤ 2 → « ne pas utiliser pour décider ».
  - Verdict : Garder, Corriger, Refaire ou Retirer.
  - § 3, 4, 5, 10 et 20 : note F à partir du contrôle de mise en page de M2 (3 positions en 1 440 et 390 px, en euros ; 2 animations refilmées).

| Chapitre | F | C | U | Note | Verdict | Affirmations testées | Point de vigilance |
|---|---|---|---|---|---|---|---|
| § 0 Fiche d'identité | | | | | | | Chiffres identiques à ceux des § 15-19 et de l'annexe A.5 ? |
| § 1 Synthèse | | | | | | | Étiquettes perdues ; « hors pic », « 41 % », « même cliente », « 13 j / 60 j » |
| § 2 Marque (2.5 avatar) | | | | | | | Avatar fondé sur des visuels |
| § 3 Direction artistique | | | | | | | Utilité faible pour Somnila ; contrôle M2 |
| § 4 Animations | | | | | | | Valeurs `linear` qui viennent de la mesure ; contrôle M2 |
| § 5 Accueil | | | | | | | Captures en dollars ; contrôle M2 en euros |
| § 6 Fiche produit | | | | | | | Panier réel (M2) ; widget vide dans les hauteurs |
| § 7 Catalogue et prix | | | | | | | Historique des prix (n° 9) |
| § 8 Marketing et CRM | | | | | | | Stratégie déduite sans les bibliothèques |
| § 9 Parcours d'achat | | | | | | | Jamais fait avant M2 |
| § 10 Technique, SEO | | | | | | | Mesures depuis un centre de données ; contrôle M2 et M10 |
| § 11 Légal | | | | | | | Cadre français seulement |
| § 12 Forces et menaces | | | | | | | Menace 2 à refaire par marché |
| § 13 Plan d'action | | | | | | | Actions françaises (B7) |
| § 14 Limites | | | | | | | Auto-évaluation « inutile de refaire » |
| § 15 Réseau | | | | | | | Registres nominatifs non cherchés |
| § 16 Publicité | | | | | | | WebFetch ; budget hypothétique |
| § 17 Trafic et CA | | | | | | | Mécanisme des compteurs ; prix moyens |
| § 18 Sourcing et marges | | | | | | | 27,43 € ; TVA de Soya ; marchés US, UK, CA, AU |
| § 19 Voix du client | | | | | | | Échantillons négatifs ; noms et santé dans un dépôt public |
| § 20 Laboratoire d'animation | | | | | | | Jamais contre-vérifié ; 2 animations refilmées (M2) |
| Annexes A à D | | | | | | | D = auto-contrôle ; les URL de B s'ouvrent-elles ? |

**5. Liste des corrections** : `§ x.y — texte actuel (court) — correction — preuve — statut « à reporter corrigé v3 »`.

### A2 — Vérifications juridiques : France et marchés de Somnila (P2)
Écris dans `v3/21_juridique.md`. Pour chaque article, donne la version en vigueur au 26/09/2026, l'URL Légifrance (ou EUR-Lex, ou la source officielle) et ce qu'il change au dossier. **Le sous-agent n'a pas Chrome** : les URL qu'il n'a pas pu lire vont dans une section « Échecs » en fin de fichier ; la session principale les ouvre après M11.

- **Code de la consommation :**
  - L121-4 : numérotation actuelle des 7°, 16°, 27° et 28°. « Soulager » relève-t-il du 16° ou seulement de L121-2 ?
  - L112-1-1 : règle des 30 jours et sanction.
  - L111-7-2, D111-16 et D111-17 : avis en ligne.
  - L121-17, L132-22 ; L221-5, L221-18, L221-20, L221-23, L221-24 ; arrêt CJUE C-681/17.
  - L217-3 et suivants, L241-5, L216-1, L616-1 et R616-1.
- **Code de commerce :** L310-3 et L310-5 (soldes), et leur application à un vendeur établi hors de France.
- **Autres textes :**
  - LCEN, article 19 (identification du vendeur) ; vérifier la référence « article 1-1 (loi SREN) ».
  - RGPD articles 9.2.e, 5.1.b, 14 et 27 : nuancer le « risque élevé ».
  - CPCE L34-5 ; loi Informatique et Libertés, article 82 ; règlement 2017/745 article 2 ; Rome I article 6.
  - Dates : soldes d'été 2025 et 2026 (economie.gouv.fr, arrêtés, Corse), French Days 2026 officiels.
- **Pour Somnila** (c'est la partie la plus utile). Chaque point ci-dessous est **à vérifier** à la source officielle :
  - **États-Unis, publicité et consommation** : FTC 16 CFR Part 465 (avis et témoignages, en vigueur depuis le 21/10/2024) ; 16 CFR Part 255 (Endorsement Guides) ; FTC Act section 5 (prix de référence, urgence) ; 16 CFR Part 233 ; Health Products Compliance Guidance (2022) ; 21 USC 321(h) (dispositif médical) ; Californie Bus. & Prof. Code 17501 et SB 478 ; règles CAN-SPAM et TCPA pour l'e-mail et le SMS.
  - **États-Unis, produit** (à vérifier) : étiquettes obligatoires et licences des articles rembourrés selon l'État (Californie, Pennsylvanie, Ohio, Massachusetts…) ; Proposition 65 pour la mousse ; conditions de l'allégation CertiPUR-US ; marquage de l'origine (19 USC 1304 et règle FTC « Made in USA »).
  - **UE** (à vérifier) : règlement 2023/988 sur la sécurité générale des produits, qui impose un opérateur économique responsable établi dans l'UE. Cela concerne Somnila, qui expédie depuis l'extérieur de l'UE ; c'est aussi un risque pour Soya, qui n'affiche pas d'adresse dans l'UE.
  - **Royaume-Uni** : DMCC Act 2024 (faux avis, depuis le 06/04/2025).
  - **Canada** : Loi sur la concurrence (prix habituel, prix partiel).
  - **Australie** : Australian Consumer Law.
- **Politiques publicitaires** : Meta et TikTok (santé, « attributs personnels », avant/après).
- **Sortie clé :** un tableau « tactique de SOYA → risque en France → règle américaine → version autorisée pour Somnila ».

### A3 — Avatar client de SOYA, mesuré, et comparaison avec Somnila (P1)
Écris dans `v3/22_avatar.md` et `donnees/verbatims.csv` (`source, marche, mois, note, flux, citation, categorie, transposable_us_oui_non, statut_traduction`).

**1. Corpus.** `preuves/v2/avis/avis_classes.tsv`, `tp_corpus.json` et `loox_reviews.json`.
- **Exclus les avis Loox importés** (`data-time % 86400000 == 0`), sinon tu mesures les textes de l'opérateur.
- Exclus aussi les doublons de texte.
- Travaille en agrégat, **sans jamais recopier un nom d'auteur**.

**2. Démographie mesurée.**
- Portée DSA par âge, sexe et pays (M3), pondérée par la portée de chaque annonce. C'est l'audience servie par l'algorithme : un indice de l'acheteuse, pas une preuve.
- Part femmes / hommes des prénoms d'auteurs, en agrégat. Référence : le fichier national des prénoms de l'INSEE (insee.fr, « Fichier des prénoms », téléchargé **hors du dépôt**, dans `$TMPDIR`). Calcul en agrégat, en mémoire, sans jamais écrire un nom dans un fichier.
- Démographie SimilarWeb, si elle est visible (M10).

**3. Psychographie, situations et déclencheurs**, tirés des verbatims : réveil douloureux, oreiller aplati, cadeau, promotion, vidéo vue plusieurs fois, « j'ai tout essayé », méfiance, rapport au prix (« 12 € sur Temu »).

**4. Qui achète pour qui.** Effectifs hors imports : conjoint, parent, enfant, cadeau, et mentions de packs.

**5. Objections par étape** : avant le clic (commentaires M5), sur la fiche, après l'achat (avis ; suggestions Google « téléphone », « suivi commande », « trustpilot »).

**6. Cadres.**
- Jobs-to-be-done : une phrase « Quand… je veux… pour… », les 4 forces (poussée, attraction, anxiété, habitude) et la chronologie de bascule.
- Niveaux de conscience de Schwartz pour les annonces de M3, et stade de sophistication du marché français.

**7. Comparaison avec `build/design-v4/avatar-somnila.html`.** Pour chaque trait (40-60 ans, femme, dormeuse de côté, 3e oreiller, mobile le soir, méfiance des notes parfaites) : confirmé, infirmé ou non testable par les données de SOYA. Rappel : les données françaises ne valident rien pour les États-Unis ; elles donnent des **hypothèses à tester**.

**8. Deux listes pour Somnila.**
- **Verbatims transposables** sans santé : faits de forme, de hauteur, de fermeté, d'odeur, de housse, de délai, de couple. Toute traduction d'un verbatim français porte la mention « traduction de travail, non-verbatim » (colonne `statut_traduction`) : elle ne s'utilise jamais comme citation de cliente.
- **Verbatims interdits** : douleur, soulagement, médical, praticien.

### A3 bis — Voix de clientes américaines (P2, après M11)
Le contexte Somnila ne contient aucun verbatim réel en anglais américain. Classe les verbatims collectés en M11 (texte brut hors dépôt) :
- 150 verbatims anglais **anonymisés** : avis Amazon.com (ZGMCX `B0GQ6QJ8JH`, Derila US, 2 ou 3 oreillers contour à double hauteur), fils Reddit (« side sleeper pillow », « contour pillow »), avis des sites US de Derila et de Cloudii ;
- mêmes catégories que A3, colonne `marche=US` dans `donnees/verbatims.csv` ;
- aucun nom, aucun pseudonyme ; mois sans jour pour toute citation qui touche à la santé.
Ce sont les seuls verbatims qui peuvent nourrir le vocabulaire américain de Somnila (toujours sans promesse médicale).

### A4 — Matrice créative, cadence, budget et CAC estimés (P1, après M3)
Écris dans `v3/23_creatif_budget.md`.

1. **Matrice accroche × angle × offre × format**, en nombre d'annonces et en portée UE cumulée.
   - Types d'accroche fermés : question, affirmation choc, démonstration, preuve sociale, problème nommé, rupture visuelle.
   - Colonnes « visage », « allégation santé » et « avis Loox réutilisé ».
2. **Gagnantes probables** :
   - actives depuis 30 jours ou plus ;
   - créations dupliquées (« N publicités utilisent… ») ;
   - créations relancées ;
   - parts de portée.
   **Demi-vie créative** = durée médiane de diffusion.
3. **Cadence** : histogramme des dates de début par semaine, arrêts à 7 et 14 jours, familles d'itération (même script avec une autre accroche, même vidéo avec un autre texte).
4. **Correspondance annonce → page** : à partir de l'étape 2 bis de M3 (types de page, redirections, notes de cohérence de 0 à 2). Par exemple : « -30 % sur le 2e » face aux packs de la fiche.
5. **Sincérité des preuves** : note de A (vérifiable) à D (fabriquée ou invérifiable) pour chaque preuve vue en annonce.
6. **Budget (PUB-4).**
   - Impressions ≈ Σ portée UE × fréquence, sur la période de diffusion de chaque annonce.
   - Fréquence de 1,3 à 2,5 en prospection. CPM Meta France : fourchette **sourcée**, avec l'URL de la source.
   - Budget ≈ impressions / 1 000 × CPM, en tableau de sensibilité (fréquence × CPM), étiqueté hypothèse.
   - Compare avec les 3 800 à 10 400 €/j du § 16.9.
   - **CAC implicite** = budget / commandes (§ 17.5 et VEN-3), face au point mort du § 18.6.
   - **Reste impossible :** la dépense exacte, qui n'est pas publiée pour les annonces commerciales.
7. **Nomenclature des campagnes** : reprends `donnees/cdx_parametres.tsv` (M10) pour les canaux hors Meta (Display, natif, TikTok).

### A5 — Transposition marketing pour Somnila (P1, en fin de parcours)
Écris dans `v3/30_plan_somnila.md` (voir la phase S). Le sous-agent peut préparer le brouillon à partir de A1, A3, A3 bis et A4.

---

## 6. Phase S — Contre-vérification, synthèse, intégration au dossier, plan Somnila

### S0. Contre-vérification de la v3 (`v3/98_contre_verification_v3.md`)
Le v2 avait 55 % de constats corrigés à sa relecture. Avant S1, **un sous-agent qui n'a rien rédigé** rouvre 10 % des constats v3, et au moins 15 :
- liste tous les constats `**[ID] Constat.**` des fichiers `v3/NN_*.md`, numérote-les, tire avec `random.seed(26092026)` ;
- pour chacun : la pièce montre-t-elle le constat ? l'étiquette et la confiance sont-elles justes ?
- résultat par constat (tient, à corriger, à retirer), et taux d'erreur.
La session principale corrige, puis reporte le taux d'erreur dans SYNTHESE.

### S1. `v3/SYNTHESE_V3.md` (200 lignes au plus)
1. Les réponses aux 10 questions clés : réponse, étiquette, confiance, pièces.
2. Ce qui est **confirmé**, **corrigé**, **découvert**.
3. Tableau de notation des chapitres (A1).
4. La **matrice de couverture** finale (§ 4), avec le statut de chaque angle mort.
5. Le taux d'erreur de la contre-vérification S0.
6. Ce qui reste impossible, et pourquoi (achat exclu, données non publiées, éthique).
7. Liste de veille mensuelle :
   - annonces actives Meta et TikTok, nouvelles créations ;
   - annonceur Google vérifié, Snap, Pinterest, Microsoft ;
   - prix et habillage (`offre.py`), compteurs (`inv.py`).

### S2. Intégration dans `DOSSIER_SOYA_PARIS.md`
1. **Moment.** Pas avant que le push cloud de 21:58 UTC le 26/09/2026 soit arrivé. Contrôle :
   `git fetch origin && git log origin/claude/pilloway-shopify-shrine-bwge6y -3 --format='%ci %s'`, puis `git pull --rebase origin claude/pilloway-shopify-shrine-bwge6y`.
   Et pas avant la réponse à B10 (M0 f).
   **Repli** : si le push cloud n'est pas arrivé à 23:00 UTC, écris la Partie III dans `v3/PARTIE_III.md` et demande à l'utilisateur.
2. **Partie III.** Ajoute une « **Partie III — Renseignement terrain (v3)** » après le § 20 et avant « # Annexes ». Sections § 21 et suivantes : une par mission, chacune résumée en 30 à 60 lignes, avec renvois vers `v3/`.
3. **Corrections.** Reporte chaque correction dans le texte existant sous la forme `**(corrigé v3 : … — v3/NN_fichier.md)**`, à la manière des « corrigé v2 ». **Ne supprime jamais le texte d'origine.**
4. **Mises à jour de :**
   - § 0 : identité, budget, canaux ;
   - § 1 : ajoute « Ajouts v3 » ;
   - § 12 : menaces refaites par marché ;
   - § 13 : actions réécrites pour les États-Unis, ou marquées « UE seulement » ;
   - § 14 : ajoute « § 14.2 Ce que la session locale a levé, et ce qui reste fermé » ;
   - titre : « v3 » ;
   - Annexe D : ajoute « D.4 Audit v3 » (avec le résultat de S0).
5. **Conflits.** En cas de conflit au rebase sur l'annexe D.3 ou sur `preuves/v2/inv/`, garde la version cloud et ré-applique tes ajouts à côté. Conflit ailleurs hors de `v3/` : § 7.

### S3. `v3/30_plan_somnila.md` — le plan pour Somnila (États-Unis d'abord)
**Règles de forme :**
- Brand book strict ; textes publicitaires en **anglais américain**.
- Aucun visage (mains, produit, voix off, texte à l'écran) ; aucune allégation médicale.
- **Mots bannis : la liste complète de `BRAND_BOOK.md` l. 74-78. Lis-la ; celle-ci en est la copie au 26/09 :** revolutionary, game-changing, orthopedic, cervical, pain, pain relief, relieves, treats, cures, heals, therapeutic, clinical, clinically proven, doctor recommended, medical, sciatica, hernia, apnea, snoring cure. Également interdits : points d'exclamation, emojis, « −50 % », « limited time ».
- Côté client, on écrit « neck », jamais « cervical ». « cervical pillow » ne sert qu'à la recherche de mots-clés (M4).
- Vocabulaire autorisé : support, hold, comfort, posture, pressure distribution, shape, height, density, contour.
- Aucun prix dans les créations (`PHASE6.md`) ; unités impériales et métriques.
- Rien qui fasse IA : pas de visuel généré présenté comme une photo.

**Contenu :**
1. **10 décisions concrètes.** Chacune avec : la preuve SOYA qui la fonde, son étiquette, sa confiance, son coût, la personne qui agit (Claude prépare, l'utilisateur fait), et ce qu'elle change dans `ADS.md`, `SOCIAL.md`, `EMAILS.md`, `PRIX.md` ou le thème non publié (sans y toucher : liste de modifications proposées).
2. **Accroches et angles transposables.** Pour chaque gagnante de SOYA : version Somnila avec les 3 premières secondes, le texte à l'écran, la voix off et le texte principal. Chacune montre un **fait mesuré** :
   - le retournement 5.1 in / 4.3 in (13 / 11 cm) ;
   - le mètre posé sur 24.4 × 16.5 in (62 × 42 cm) ;
   - la balance à 3.1 lb (1,4 kg) ;
   - la housse retirée ;
   - la main qui presse la mousse.
   Et en face, la liste de ce qu'on ne transpose jamais : « Élu meilleur… », « recommandé par les ostéopathes », « soulagement immédiat », faux compteurs, urgence perpétuelle, avis réutilisés en annonce sans source.
3. **Structure d'offre.** Paliers 1 · 2 · 3, For Two et Family Set, pack Neck 01 + Cover, prix par oreiller en dollars face au Duo de SOYA (49,45 € par oreiller) et au tunnel Derila US (M11). Aucune case pré-cochée. Recommandation argumentée : prix US fixes en ,99 ou prix convertis, et seuil de livraison offerte (54,90 € = 62,44 $, égal au prix de Side 01 et Lounge 01).
4. **Premiers tests publicitaires** : 3 accroches × 2 offres × 2 formats (9:16 et 1:1), Meta aux États-Unis.
   - **Budget indicatif prudent**, étiqueté hypothèse, dérivé des règles déjà écrites dans `build/launch/ADS.md` et `PLAN.md` : coupure d'une création à 300 € sans commande, ensembles gardés sous 39 € par commande.
   - Montre le calcul, et le point mort recalculé en A1 (B3) pour les États-Unis.
5. **Calendrier américain** (et non janvier-février et septembre) : Presidents' Day, Memorial Day, Prime Day, Labor Day, Black Friday et Cyber Monday, fêtes des mères et des pères. À croiser avec Trends US (M4).
6. **Lancer sans avis sans faire faux**, face au « 4,8 / 15 637 » : transparence, demande d'avis à J+21 sans contrepartie (`EMAILS.md`), seuil d'affichage, règles FTC 16 CFR 465.
7. **Défauts de Somnila repérés à signaler** (liste, sans rien modifier) :
   - le visuel `somnila_ad_two-heights_*` écrit « 13 cm / 11 cm » sur une image de Contour 01 (hauteur unique de 10 cm, `gen-visuals.py` l. 57 et l. 72) ;
   - le packshot « Mask 01 Cloud » montre un oreiller ;
   - Lounge 01 à 54,90 € face au probable 42,90 € de Soya ;
   - langue par défaut du panier encore en français ;
   - conditions d'essai contradictoires (« send it back » dans le brand book, remboursement sans renvoi dans la politique) ;
   - marque SOMNILA non déposée (antériorités de M6 : USPTO en premier) ;
   - handles et domaines à réserver face aux clones (l'utilisateur le fait) ;
   - **visuels générés** : `build/PROMPTS_CHATGPT_IMAGES.md` (86 images prévues, l. 5) et `build/PROMPTS_FLUX_KONTEXT.md` entrent en tension avec la règle « rien qui fasse IA », d'autant que le dossier SOYA met sur liste noire les visuels générés présentés comme des photos (§ 13.2) ;
   - **`PRODUCTS.csv`** : la colonne `statut_shopify` indique DRAFT pour les 20 lignes, alors que `HANDOFF.md` (l. 13) décrit les 20 produits comme actifs et publiés.
8. **Réponses aux questions ouvertes de Somnila.** Réponse courte, ou « non établi », pour chacune :
   - Q1-Q3 : l'avatar est-il confirmé ? verbatims transposables et interdits ; part d'achats pour deux ou en cadeau.
   - Q4-Q6 : accroches qui durent le plus ; part de créations avec visage ; formats à reprendre dans les concepts A à D de `ADS.md` et les scripts A à D de `SOCIAL.md`.
   - Q7-Q9 : offre réelle au panier ; duo permanent ou « -30 % sur le 2e » ; prix en ,99 ; seuil de livraison.
   - Q10-Q12 : formulation de l'essai ; délai réel et pays d'origine ; lancer sans avis.
   - Q13-Q14 : ce qui manque au tunnel v7 ; transformer l'ancre `#which` en vrai questionnaire ?
   - Q15-Q17 : budget et CAC réalistes ; créateurs avant le mois 2 ; mots-clés Google et Pinterest US.
   - Q18-Q19 : tournures à ne jamais transposer ; protection de la marque.
   - Q20 : ce qui, dans le § 13, suppose la France.
9. **Questions pour l'utilisateur** (5 au plus), qui appellent une décision : commander un échantillon (achat, c'est lui qui le fait), entité légale, dépôt de marque, application d'avis, budget de lancement.
10. **Plan de validation de l'avatar sur les 100 premières commandes** (`avatar-somnila.html` l. 165 le demande). Sans application payante :
    - questions après achat : pour qui (soi, conjoint, cadeau), position de sommeil, où l'avez-vous découvert, appareil ;
    - canal proposé (e-mail de confirmation ou page de remerciement, préparé par Claude, activé par l'utilisateur) ;
    - pour chaque hypothèse de l'avatar (40-60 ans, femme, dormeuse de côté, 3e oreiller, mobile le soir), le seuil qui la confirme ou l'infirme, fixé avant de lire les réponses.

---

## 7. Git

- **Branche** : `claude/pilloway-shopify-shrine-bwge6y`.
- **Ordre, toujours** : commit, puis `git pull --rebase origin claude/pilloway-shopify-shrine-bwge6y`, puis `git push origin claude/pilloway-shopify-shrine-bwge6y`. Si le push est refusé, refais le pull puis le push. **Jamais de `--force`.**
- **Tant que B10 n'est pas tranché : commits locaux seulement, aucun push.** Exception : un commit qui ne touche que `v3/outils/` et `v3/preuves/veille/` peut être poussé s'il est le seul commit non poussé (`git log origin/claude/pilloway-shopify-shrine-bwge6y..HEAD --oneline` n'en montre qu'un). Pousse le reste après la réponse. Et aucun push avant la réponse à g) (identité).
- **Si `git push` demande des identifiants : arrêt.** L'utilisateur s'en charge.
- **Conflit de rebase hors de `v3/`** : `git rebase --abort`, arrêt, question à l'utilisateur. (Exception : annexe D.3 et `preuves/v2/inv/` en S2, § 6.)
- **Ne modifie jamais** : l'annexe D.3, `preuves/v2/inv/`, `v3/PROTOCOLE_*`, `v3/INVENTAIRE_SITE.md`, `v3/ANGLES_MORTS.md`, `v3/CIBLES_AUDIT_V2.md`, `v3/MARKETING_SOURCES.md`, `v3/CONTEXTE_SOMNILA.md`, `v3/preuves_cloud/`. Dans `v3/.gitignore`, seulement l'ajout de M0.
- **Ajout** : relis `git status --short`, puis `git add build/analyse/soya-paris/v3/<fichier ou dossier de mission>/`. Jamais `git add -A` ni `git add .`.
- **CSV** : la racine ignore `*.csv` ; sans la ligne `!donnees/*.csv` de M0, tes CSV ne partent pas. Contrôle avec `git status --short build/analyse/soya-paris/v3/donnees/`.
- **Avant chaque commit**, contrôle :
  ```bash
  git diff --cached --stat
  git diff --cached | grep -nEi 'password|mot de passe|token|api[_-]?key|secret|bearer|@gmail|@icloud|@hotmail|sessionid|c_user=|fb_dtsg|__user=|jazoest|lsd=|csrftoken|ds_user_id|msToken|ttwid|sid_tt|SAPISID|_fbp=|_ga=|/Users/' || echo "rien de sensible"
  ```
  Chaque résultat se lit : un nom de cookie sans valeur est permis, une valeur ne l'est pas. Relis chaque image de page connectée et de `cap.sh` avant de l'ajouter (§ 2.2).
- **Pas de secrets.** Aucun cookie, aucun en-tête de session, aucun jeton ni mot de passe, dans aucun fichier. Masquage du § 2.2 appliqué à tout JSON et TXT.
- **Pas de données personnelles** : texte brut des tiers hors dépôt (§ 2.2).
- **Pas d'identifiant de modèle** dans le texte des fichiers ni dans le corps des messages de commit. Les lignes d'attribution que ton environnement ajoute automatiquement ne sont pas concernées.
- **Taille.** Pas de vidéo dans le dépôt. Aucun fichier de plus de 50 Mo. Garde `v3/preuves/` sous 150 Mo ; au-delà, compresse ou archive en `.tar.xz`.
- **Commits** petits et fréquents, au moins un par mission, messages en **français** (par exemple `v3 M3 : inventaire bibliothèque Meta, 47 annonces actives`).

---

## 8. Points d'étape et rapport final

**Points d'étape** (courts, seulement s'il faut une décision ; en fin de mission, jamais au milieu d'une passe navigateur) :
1. le message de départ de M0 ;
2. un imprévu au paiement (M2) ;
3. une connexion exigée (M3, M5, M7, M10) sans accord préalable ;
4. un captcha (Wyoming, Google, Trustpilot…) ;
5. un conflit git hors de `v3/`, ou un `git push` qui demande des identifiants ;
6. la bascule de profil Chrome (« Veille » vers « Réseaux ») ;
7. l'intégration au dossier (S2) si B10 n'est pas tranché, ou si le push cloud manque à 23:00 UTC.

Pour tout le reste, avance.

**Rapport final à l'utilisateur**, en français, 25 lignes au plus :
- **Confirmé** : 5 points au plus, avec leur preuve.
- **Corrigé** dans le dossier : liste des « corrigé v3 », avec le § concerné.
- **Découvert** : identité, volume publicitaire, avatar, panier réel, consentement, Google.fr.
- **Taux d'erreur** de la contre-vérification S0.
- **Reste impossible**, et pourquoi.
- **Décisions attendues de l'utilisateur** (5 au plus), dont : retirer les autorisations macOS (Enregistrement de l'écran, Automatisation) si elles ont servi, et supprimer le plist de M12 quand il le souhaite.
- **Temps passé** : heure de début et de fin, tirées du journal.
- **Site (M13)** : pages démontées par niveau (N1, N2, N3), nombre de carrousels et de leviers de persuasion relevés, les 5 verdicts Somnila les plus utiles.
- Liens vers `v3/SYNTHESE_V3.md`, `v3/site/99_synthese.md`, `v3/30_plan_somnila.md` et le commit final.

---

## 9. Ordre d'exécution, sessions et coupes

**Ordre (résumé).**
1. **M0** : synchronisation, arborescence, `.gitignore`, `cap.sh`, `offre.py`, relevé J0 ; lancement des sous-agents A1 (4 parties), A2 et A3 ; message de départ, attente.
2. **M1** : consentement (profil vierge).
3. **M2** : tunnel, panier, paiement sans saisie, politiques, PAN-US, contrôle de mise en page.
4. **M3** : bibliothèques Meta, Google, TikTok, Snap, Pinterest, Amazon ; pages d'atterrissage. Puis **A4**.
5. **M4** : Google.fr, Shopping, Trends, vue US.
6. **M5** : réseaux, commentaires (profil « Réseaux », sur accord).
7. **M6** : identité et registres.
8. **M7** à **M11**, dans cet ordre, en respectant les plafonds de temps. Puis A3 bis.
9. **M12** : tâche planifiée (si « ok »), procédure J+7 écrite.
10. **M13** : démontage complet du site (M13-1, M13-2, M13-3), après M3 pour disposer des pages d'atterrissage.
11. Angles morts P3, selon le temps.
11. **A1** terminé avec les résultats du navigateur ; **A3** complété avec la démographie DSA.
12. **S0**, **S1**, **S2**, **S3**.
13. Rapport final.

**Durée.** Les plafonds cumulés font environ 23 h (navigateur et phase S) plus environ 25 h pour M13, sans les P3 : impossible dans un seul contexte. Découpe en **6 sessions** ; chacune repart du tableau d'avancement, de `v3/site/00_INDEX.md` et du journal :
- **S-A** : M0 à M3 (environ 7 h) ;
- **S-B** : M13-1, fiche 3.0 complète et pages principales (environ 8 h) ;
- **S-C** : M4 à M8 (environ 8 h) ;
- **S-D** : M13-2 (environ 8 h) ;
- **S-E** : M9 à M12, A3 bis, M13-3 (environ 9 h) ;
- **S-F** : angles morts P3 si le temps le permet, puis la phase S (environ 6 h).
À la fin de chaque mission : commit local et tableau d'avancement. Vers 60 % du contexte : commit, journal, `/compact`. Pour changer de session : `claude --chrome` neuf, avec la consigne d'une ligne de « Comment lancer ».

**Parcours minimal d'environ 5 h** (si le temps manque) :
- M0 ;
- M1 ;
- M2 : PAN-1 Blanc et PAN-5 ;
- M3a : compteurs, transparence de la page, extraction des cartes, 20 annonces ouvertes (10 plus anciennes, 10 plus récentes) ;
- M3b ;
- M4 : les 6 requêtes de marque ;
- M6 : Wyoming, Companies House, DNS ;
- M13 : P02 (fiche 3.0) en 390 et 1440 seulement : galerie rendue, carrousels, bloc d'offres, Loox rendu, verdicts Somnila.

**Ordre de coupe** (ce qu'on retire en premier) : les angles morts P3, puis les pages N3 de M13, M11, M9, M10, M8, puis les pages N2 de M13. Les pages N1 de M13 ne se coupent pas : c'est la demande explicite de l'utilisateur.
