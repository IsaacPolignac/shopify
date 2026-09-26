# Protocole de démontage exhaustif de soya-paris.com (session locale, v3)

**À qui ça s'adresse.** À la session Claude Code locale : Mac de l'utilisateur, IP résidentielle française, Claude in Chrome dans son vrai navigateur.
**Où l'enregistrer.** `build/analyse/soya-paris/v3/PROTOCOLE_DEMONTAGE.md`. Les chemins de ce document partent de la racine du dépôt.
**Sur quoi il s'appuie.** La lecture du dossier `build/analyse/soya-paris/DOSSIER_SOYA_PARIS.md` : § 3 (design system), § 4 et § 20 (mouvement), § 5 (accueil), § 6 (fiche 3.0), § 7 à § 10, § 14 et § 16 (publicité), annexes A et C.
**Ce qu'il remplace.** Il étend `BRIEF_CLAUDE_LOCAL.md`. Les six missions de ce brief sont reprises ici :
- mission 1 : P00 et module M17 ;
- missions 2 et 3 : P26 et P27 ;
- missions 4 et 5 : E01 à E08 ;
- mission 6 (veille des compteurs par `outils/inv.py`) : inchangée, à lancer chaque jour.

Rédaction entièrement en français. Les textes du site sont recopiés **à l'identique** (verbatim), sans traduction.

---

## 0. Objet et principes

**Objet.** Démonter chaque page de soya-paris.com élément par élément, à quatre largeurs (390, 768, 1024 et 1440 px), puis ce qui se passe hors du site : publicités, réseaux, résultats Google. Chaque élément reçoit un verdict pour Somnila : **Copie**, **Adapte** ou **Évite**.

**Principe 1 : vérifier, pas refaire.** Le dossier v2 a déjà mesuré beaucoup de choses en 1440 × 900 et 390 × 844 :
- l'accueil (§ 5) et la fiche 3.0 au pixel près (§ 6) ;
- la collection, les fiches enfant, soie, 1.0 et couette, « Notre histoire », le blog et le contact (annexe C) ;
- le design system (§ 3), les animations (§ 4 et § 20), les poids (§ 10) ;
- les prix (§ 7) et les publicités retrouvées (§ 16).

Chaque valeur déjà mesurée est **re-mesurée pour contrôle** et reçoit un statut dans le tableau T18 : confirmé (±2 px), corrigé ou nouveau. Les valeurs de référence sont en **annexe F**. On ne refait **pas** :
- les analyses du JSON Loox et de Trustpilot (§ 19) ;
- la Wayback Machine (§ 16.8 bis et § 17.4) ;
- le réseau d'opérateurs (§ 15) et le sourcing (§ 18) ;
- les métadonnées et transcriptions des 4 vidéos « stories » (§ 16.5) ;
- les durées d'animation déjà filmées (§ 20.1), sauf 3 contrôles.

**Principe 2 : les angles morts de la session cloud passent en premier.** Cette session sortait par une IP américaine de centre de données. Elle n'a pas vu :
1. le rendu réel des 33 SVG de la galerie et des 4 tuiles « positions » (ils étaient remplacés par des rectangles gris). Il faut recopier le texte incrusté de chaque visuel, pour chaque coloris ;
2. le widget Loox rendu : 6 335 px en desktop et 7 211 px en mobile, restés blancs ;
3. les vidéos : les 4 stories, la vidéo de section, la modale de lecture, et ce qui est réellement téléchargé ;
4. le panier (tiroir et page `/cart`) et la première page du paiement : le **prix réellement facturé** ;
5. le vrai tactile mobile : glisser, pincer, barre collante, popups ;
6. les largeurs **768 et 1024**, jamais mesurées ;
7. la bannière de cookies française, et les pixels chargés avant consentement ;
8. Klaviyo vu de France : délai, géométrie, texte ;
9. les 12 fiches produit jamais capturées, et le rendu de la fiche 2.0 ;
10. la recherche, la page 404, le compte, le suivi ParcelPanel, les politiques rendues, la page d'opposition ;
11. us.soya-paris.com dans son ensemble (Somnila vise d'abord les États-Unis) ;
12. la performance réelle : PageSpeed Insights (PSI), données terrain de Chrome (CrUX), Lighthouse lancé depuis la France ;
13. l'extérieur : bibliothèques publicitaires Meta, Google et TikTok, réseaux, Google.fr.

**Principe 3 : une preuve par ligne.** Chaque ligne de tableau cite un fichier : une capture, un JSON de mesure, un HAR ou un texte. Conventions du dossier : `[constaté]`, `[déduit]`, `[indice]`, `[risque]`, `[non vérifié]`, plus `[non testé : règle]` quand les règles d'enquête interdisent le test.

**Principe 4 : un verdict Somnila pour chaque élément** (tableau T19, grille en annexe G).

**Principe 5 : tout est relevé partout ; seule la rédaction varie.** Les scripts relèvent les 4 largeurs sur toutes les pages. La rédaction est complète pour les pages de niveau N1. Pour les niveaux N2 et N3, on rédige les différences avec le gabarit, mais on garde tous les textes à l'identique, la persuasion et les verdicts.

---

## 1. Règles d'enquête

### 1.1 Interdits absolus (arrêt immédiat si un doute survient)

- **Saisie.** Aucune saisie de texte, dans aucun champ de soya-paris.com : newsletter, contact, recherche, suivi de commande, code promo, e-mail, téléphone, adresse. L'action `type` de l'outil `computer` est **interdite** sur ce domaine.
- **Formulaires.** Aucun formulaire envoyé, quel qu'il soit :
  - Klaviyo : on n'avance pas dans le quiz « Pour moi / Pour un proche ». On ferme par la croix, point.
  - Sélecteur de pays ou de devise : on peut l'ouvrir pour lire la liste, jamais choisir une valeur (c'est un envoi POST vers `/localization`).
- **Comptes.** Aucune création de compte, aucune connexion chez Soya ni chez Shop Pay. Aucune connexion à un réseau social dans le profil qui sert à visiter soya-paris.com.
- **Achat et paiement.** Aucun achat. Au paiement, **on s'arrête avant toute saisie**. On ne clique **jamais** un bouton de paiement express (Shop Pay, PayPal, Apple Pay, Google Pay), ni sur la fiche, ni dans le panier, ni au paiement.
- **Contact et interactions.** Aucun contact : ni message, ni commentaire, ni avis Loox (« Écrire un avis » est interdit), ni vote « utile », ni j'aime, ni abonnement sur les réseaux.
- **Publicités.** Aucun clic sur une annonce **payante** dans Google ou dans un fil de réseau social : ce serait un clic facturé à l'annonceur. On lit l'URL de destination sans cliquer, puis on ouvre l'URL « propre » dans un nouvel onglet.
- **Scripts dans la page.** Aucun script qui écrit : pas d'affectation `.value =`, pas de `.submit()`, pas de `dispatchEvent` d'événement de saisie, pas d'écriture dans `localStorage` ou `document.cookie`, pas de `fetch` en POST. Les clics se font avec l'outil `computer`, visibles et tracés, jamais par `el.click()` en JavaScript.

### 1.2 Actions autorisées (liste fermée)

- Naviguer, faire défiler, survoler, appuyer sur Tab, Entrée, Espace ou Échap **sur des commandes qui ne sont pas des champs** : onglets, accordéons, flèches, pastilles, bulles.
- Cliquer sur les nuanciers, les cartes d'offre Kaching, « Ajouter au panier », « + Ajouter », les flèches de carrousel, les miniatures, les accordéons, les onglets de témoignages, les bulles stories et le « Voir plus » de Loox.
- Dans le panier : +/−, supprimer une ligne, ouvrir le récapitulatif mobile au paiement.
- Popup Kaching : « Non merci », la croix, et « Profiter de l'offre » **dans le seul scénario S2** (§ 9.4).
- Bannière de cookies : « Accepter » ou « Refuser », chacun dans un profil neuf distinct (module M17).
- Requêtes GET en lecture depuis le Terminal ou la page :
  - `/products/<handle>.js`, `/products.json`, `/cart.js` ;
  - `/search?q=…`, `/search/suggest.json?q=…` ;
  - `robots.txt` et les sitemaps ;
  - l'API publique de PageSpeed Insights.
- Téléchargement des images, SVG et vidéos publiques (CDN et bibliothèques publicitaires), **pour l'analyse interne seulement** : jamais réutilisés tels quels par Somnila.
- Saisir une **URL publique** dans un outil tiers qui l'exige (PageSpeed, test des résultats enrichis) : ce n'est pas une donnée personnelle. On préfère l'URL paramétrée quand elle existe.

### 1.3 Hygiène (à faire avant la première page)

- **Profil Chrome dédié « Enquête Soya ».**
  - Aucune session Google, Facebook, Instagram, TikTok ou Shop.
  - Remplissage automatique et gestionnaire de mots de passe désactivés (Paramètres > Saisie automatique : tout désactiver).
  - Bloqueurs de publicité désactivés : il faut voir ce que voit une cliente.
  - Extension Claude in Chrome installée et connectée **dans ce profil**.
  - Raisons : la page de paiement préremplirait l'identité de l'utilisateur si Shop Pay le reconnaît, et les pixels de Soya l'ajouteraient à leurs audiences de reciblage.
- **Profil « Réseaux » séparé**, seulement si l'utilisateur l'accepte (module E05 et E06). Il n'ouvre **jamais** soya-paris.com.
- **Fuseau horaire du Mac : Europe/Paris.** Le compte à rebours lit l'heure du navigateur : fin à 23:59 heure de Paris, annexe A.4.
- **Journal.** En tête de chaque session, relever `Shopify.theme.name`. Si le nom n'est plus « V16 – Version 3.0 French Days », l'habillage a changé : le noter dans `v3/local.md` (journal de session) et le préciser dans chaque fichier de page.
- **Moins de faux visiteurs.** Pour les captures automatiques (Playwright, § 3), les pixels publicitaires sont **bloqués** par défaut (annexe B). Ils ne jouent pas sur la mise en page, et ne pas les charger évite de gonfler les audiences et l'attribution de Soya. On ne les laisse passer que pour les modules M13 (performance réelle) et M17 (traceurs).

---

## 2. Préparation du poste (une fois, environ 45 min)

1. **Dossiers.**
   `mkdir -p build/analyse/soya-paris/v3/{outils,site/{cap,data,reseau,anim,telephone,textes},exterieur/{cap,data,videos,planches}}`
2. **Scripts.** Écrire les fichiers des annexes dans `v3/outils/` :
   - `demontage.js` (A), `capture.mjs` et `glisser.mjs` (B) ;
   - `assemble.py`, `couleurs_pixels.py` (C), `har_resume.py` (D) ;
   - `psi.sh`, `psi_resume.py` (E), `resume_json.py` (A2).
   Créer `v3/outils/.gitignore` avec `node_modules/`.
3. **Playwright.**
   `cd build/analyse/soya-paris/v3/outils && npm init -y && npm i playwright && npx playwright install chromium`.
   Le script utilise `channel: 'chrome'`, donc le Chrome installé ; Chromium sert de secours.
4. **Python.** `python3 -c "import PIL"`, sinon `python3 -m pip install --user pillow`.
5. **Outils facultatifs** (demander à l'utilisateur avant d'installer) : `brew install ffmpeg exiftool`. Ils servent aux vidéos publicitaires, aux planches d'images et à la lecture des métadonnées d'origine (C2PA) des visuels soupçonnés d'être générés par IA.
6. **Charger Claude in Chrome en un seul appel ToolSearch :**
   `select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__find,mcp__claude-in-chrome__get_page_text,mcp__claude-in-chrome__javascript_tool,mcp__claude-in-chrome__read_network_requests,mcp__claude-in-chrome__read_console_messages,mcp__claude-in-chrome__resize_window,mcp__claude-in-chrome__gif_creator`
   Garder ceux qui existent. Commencer par `tabs_context_mcp`, puis travailler dans un **nouvel onglet**.
7. **Autorisations de sites** à faire accorder par l'utilisateur quand l'extension les demande :
   - soya-paris.com, us.soya-paris.com ;
   - pagespeed.web.dev, search.google.com, validator.schema.org ;
   - facebook.com, adstransparency.google.com, library.tiktok.com, adsgallery.snap.com ;
   - google.fr, youtube.com, pinterest.fr, tiktok.com, instagram.com ;
   - web.archive.org, milled.com, amazon.fr.
8. **Autorisation « Enregistrement de l'écran »** pour le Terminal (Réglages Système > Confidentialité), nécessaire à `screencapture` (§ 6.2).
9. **Heure de référence.** `date -u` au début de chaque session, noté dans le journal.
10. **Test de bout en bout** sur l'accueil en 1440 :
    - `node build/analyse/soya-paris/v3/outils/capture.mjs P01 https://soya-paris.com/ 1440`
    - puis `python3 build/analyse/soya-paris/v3/outils/assemble.py build/analyse/soya-paris/v3/site/cap/P01 1440`
    - puis `python3 build/analyse/soya-paris/v3/outils/resume_json.py P01`.
    Vérifier la devise (EUR attendu), le thème, et une page d'environ 4 730 px (annexe F).

---

## 3. Les quatre largeurs

### 3.1 Définition

| Code | Fenêtre utile (CSS) | Palier du thème Impact (jetons attendus, § 3.2) | Appareil type | Pointeur | Moteur recommandé |
|---|---|---|---|---|---|
| 0390 | 390 × 844 | < 700 : marge 20, sections 48, gouttière 20, champs 42 | iPhone 12 à 15 | tactile, pas de survol | B (Playwright, `iPhone 13`) + C (téléphone réel) ; A seulement si le mode appareil des outils de développement est ouvert |
| 0768 | 768 × 1024 | ≥ 700 : marge 32, sections 64, gouttière 24, champs 50 | iPad mini portrait | tactile | B (`iPad Mini`) |
| 1024 | 1024 × 768 | ≥ 1000 : marge 48, sections 72, gouttière 24 | petit portable ; iPad paysage | souris ; contrôle tactile facultatif | A ou B |
| 1440 | 1440 × 900 | ≥ 1400 : marge 48, sections **96**, gouttière 24, conteneur max. 1 600 | portable 15 pouces (référence du dossier) | souris | A (référence), B |

- **Conversions.** 1 cm = 37,8 px CSS (96 dpi) : `cm = px / 37,8`, arrondi au centième. « Écran » = y ÷ hauteur de la fenêtre utile de la largeur : 844, 1 024, 768 ou 900.
- **Palier non couvert.** Le palier ≥ 1150 px (sections à 80 px) ne tombe sur aucune des quatre largeurs. Ajouter un contrôle à **1280 × 800**, seulement pour P00 (menu sur deux lignes) et le premier écran de P02.
- **Balayage des points de rupture** (P00 et premier écran de P02 uniquement, moteur B, une capture par largeur) : 360, 375, 414, 699, 700, 999, 1000, 1149, 1150, 1280, 1399, 1400, 1920.
  Relever à quelle largeur le menu desktop apparaît, passe sur une ligne, et à quelle largeur la galerie passe de miniatures dessous à miniatures à gauche.

### 3.2 Obtenir les largeurs, et le prouver

- **Moteur A : Claude in Chrome, vrai Chrome.** `resize_window` agit sur la **fenêtre**, pas sur la zone de page.
  - Calculer le bord : `outerHeight - innerHeight` (environ 80 à 90 px sur Mac).
  - Viser une fenêtre de 1440 × (900 + bord).
  - Si l'écran du Mac est trop petit, Chrome plafonne : passer au moteur B, ou à l'affichage « Responsive » 1440 × 900 du mode appareil (ouvert par l'utilisateur).
  - Chrome refuse souvent de descendre sous environ 500 px de large : pour 390 et 768, le moteur A n'est valable que si l'utilisateur ouvre le mode appareil (Cmd + Option + I, puis Cmd + Shift + M, « iPhone 12 Pro » 390 × 844).
- **Moteur B : Playwright local** (annexe B), même IP française.
  - Fenêtres exactes et reproductibles. Émulation mobile (agent utilisateur iOS, tactile, dpr 3). Captures et mesures écrites directement sur disque.
  - Ce n'est pas Safari. Pour les comportements propres à Safari, voir le moteur C.
- **Moteur C : le téléphone de l'utilisateur** (facultatif mais précieux, une dizaine de minutes par fiche prioritaire, fait par l'utilisateur en suivant la liste du § 8, C06, C07, C14, C26, C30).
  - Enregistrement d'écran iOS.
  - Capture « Pleine page » de Safari : capture d'écran, toucher la vignette, onglet « Pleine page », enregistrer en PDF dans Fichiers.
  - Fichiers déposés dans `v3/site/telephone/`.
- **Preuve de largeur, obligatoire à chaque relevé** (collée dans la section « Conditions » du fichier de page) :
  `javascript_tool` → `[innerWidth, innerHeight, devicePixelRatio, matchMedia('(pointer: coarse)').matches, matchMedia('(hover: hover)').matches, Shopify.currency.active, Shopify.theme.name]`

---

## 4. Liste des pages

« Déjà relevé » renvoie au dossier : ces valeurs sont à contrôler, pas à refaire.

| ID | URL (soya-paris.com) | Niveau | Déjà relevé | Angles morts à combler |
|---|---|---|---|---|
| P00 | gabarit commun : bandeau, en-tête, menu, tiroirs vides, pied de page, cookies, popups globales, sélecteur de pays | N1 | § 3, § 4, § 9.1, annexe C | 768, 1024, bannière cookies FR, Klaviyo FR, menu mobile tactile |
| P01 | `/` | N1 | § 5 (1440 et 390) | 768, 1024, contenu des carrousels, héros réel, logos presse identifiés |
| P02 | `/products/oreiller-soya-3-0` | N1 | § 6 en entier | SVG rendus, stories, Loox, barre collante mobile, panier, 768 et 1024 |
| P03 | `/products/oreiller-soya-2-0` | N1 | § 6.9, Kaching | page entière jamais capturée |
| P04 | `/products/oreiller-soya-enfant` | N1 | annexe C.3 (1440), mobile partiel | 390, 768, 1024, galerie, Loox |
| P05 | `/products/coussin-lombaire-ergonomique-soya` | N1 | § 7.4, § 7.5 | jamais capturée |
| P06 | `/products/housse-d-oreiller-de-rechange-soya-3-0` | N1 | prix § 6.5 | jamais capturée |
| P07 | `/products/housse-d-oreiller-de-rechange-soya-1` (housse 2.0) | N2 | prix § 7.1 | jamais capturée |
| P08 | `/products/housse-doreiller-de-rechange-enfant` | N2 | prix § 7.1 | jamais capturée |
| P09 | `/products/oreiller-soya-1-0` | N2 | annexe C.5 | 390 complet, 768, 1024 |
| P10 | `/products/couette-rafraichissante-soyafresh` | N2 | annexe C.6 (390) | 768, 1024, 1440 |
| P11 | `/products/draps-rafraichissants-soyafresh` | N2 | — | tout |
| P12 | `/products/draps-en-soie-naturelle-soya` | N2 | annexe C.4 (1440) | 390, 768, 1024 |
| P13 | `/products/housse-de-couette-en-soie-naturelle-soya` | N2 | — | tout |
| P14 | `/products/housse-d-oreiller-en-soie-naturelle-soya` | N2 | — | tout |
| P15 | `/products/masque-de-sommeil-en-soie` | N2 | — | tout |
| P16 | `/products/oreiller-de-voyage-ergonomique-soya` | N2 | — | tout |
| P17 | `/products/couverture-lestee-therapeutique` | N2 | — | tout |
| P18 | `/products/ensemble-doreillers-reglables` | N2 | — | tout |
| P19 | `/products/coussin-ergonomique-avec-tete-de-lit` | N2 | — | tout |
| P20 | `/products/ensemble-de-coussins-orthopediques` | N2 | — | tout |
| P21 | `/collections/nos-best-sellers` | N2 | annexe C.1 et C.2 | 768, 1024, survol, achat rapide |
| P22 | `/collections/all` (avec `?sort_by=…` et `?page=2`) | N2 | prix § 7.3 | tout le rendu |
| P23 | `/collections/frontpage` (vide, indexée) | N3 | § 10.3 | rendu de l'état vide |
| P24 | `/collections` (liste des collections) | N3 | — | tout |
| P25 | recherche : `/search?q=oreiller`, `?q=soya`, `?q=housse`, `?q=zzqq` (aucun résultat), `?q=` (vide), tri ; tiroir ; `/search/suggest.json?q=ore` | N2 | prix § 7.3 | tout le rendu |
| P26 | panier : tiroir et `/cart`, scénarios S0 à S10 (§ 9.4) | N1 | jamais vu | tout |
| P27 | paiement, première page, sans saisie | N1 | « Request Forbidden » en cloud | tout |
| P28 | `/pages/notre-histoire` | N2 | annexe C.7 | 390, 768, 1024 |
| P29 | `/pages/contact` (sans saisie) | N3 | annexe C.9 | 390, 768, 1024 |
| P30 | `/pages/data-sharing-opt-out` (sans envoi) | N3 | — | tout |
| P31 | `/blogs/news` | N3 | annexe C.8 | 390, 768, 1024 |
| P32 | `/policies/` : terms-of-service, refund-policy, privacy-policy, contact-information, shipping-policy, legal-notice, terms-of-sale | N2 | textes dans `preuves/soya/pol/` | rendu, différences depuis le 25/09 |
| P33 | `/apps/parcelpanel` (sans saisie) | N3 | titre anglais relevé | tout |
| P34 | `/account` (connexion, vue seule) | N3 | — | tout |
| P35 | 404 : `/pages/faq`, `/pages/cgv`, `/pages/mentions-legales`, `/products/zzqq`, `/collections/zzqq`, `/blogs/news/zzqq` | N3 | statut 404 constaté | rendu, liens proposés |
| P36 | `us.soya-paris.com` : accueil, 3.0, 2.0, `/collections/all`, panier, politiques | N1 | § 10.3 (hreflang, reste en français) | tout, vu de France |
| P37 | fichiers techniques : `robots.txt`, `sitemap.xml` et sous-sitemaps, `/agents.md`, `/.well-known/ucp`, `/products.json` | N3 | `preuves/soya-tech/` | différences seulement |
| P40+ | pages d'atterrissage découvertes par les publicités (E01 à E04) ou par l'index Wayback `http://web.archive.org/cdx/search/cdx?url=soya-paris.com/pages/*&output=txt&collapse=urlkey` | N1 si reçoivent du trafic publicitaire | — | tout |

**Niveaux.**
- **N1** : les 19 modules rédigés aux 4 largeurs.
- **N2** : 4 largeurs relevées automatiquement ; rédaction des différences avec le gabarit (P02 pour les fiches, P21 pour les collections) ; textes intégralement à l'identique ; persuasion, SEO et verdicts complets.
- **N3** : structure, textes à l'identique, SEO, états, verdict court.

Pour les variantes de coloris (`?variant=<id>`) de P02 à P06, vérifier : canonique, variante présélectionnée, première image.

---

## 5. La boucle « page × largeur » (séquence opératoire)

Pour chaque page P, dans l'ordre du § 13. Les étapes 1 à 7 sont automatiques (moteur B) et prennent 3 à 6 minutes par page pour les 4 largeurs. Les autres se font à la main dans Claude in Chrome : 1440 d'abord, puis 390, puis les différences en 768 et 1024.

1. **Conditions.** Heure UTC et heure de Paris, moteur, profil, état du consentement, devise, thème, preuve de largeur (§ 3.2). Dans `__D.conditions()`.
2. **Chargement propre.** URL sans paramètre de suivi (UTM), profil ou contexte neuf pour la première largeur, afin de voir les popups de premier passage.
3. **Premier écran à t = 0, 6,5 s et 15 s.** Mêmes instants que le dossier (§ 4.5) ; Klaviyo arrive vers 13,5 s (§ 20.2). À 15 s, `__D.calques()` : géométrie de chaque popup et part de l'écran couverte.
4. **Fermer les popups par la croix uniquement.** Noter l'heure et ce qui a été fermé.
5. **Préchauffe.** `__D.prechauffe()` : défilement lent jusqu'en bas pour déclencher le chargement différé et les apparitions au défilement, puis retour en haut.
6. **Mesures.** `__D.tout()` → `v3/site/data/<P>-<L>.json`.
7. **Tranches, puis assemblage** (§ 6).
8. **Structure et premier écran** (M1 à M3) : `python3 v3/outils/resume_json.py <P>` sort T1, les carrousels, la typographie et les échecs de contraste. Relire contre les captures, corriger à la main, compléter les colonnes « rôle » et « contenu ».
9. **Carrousels** (M4) : une fiche par carrousel, diapositive par diapositive, avec suivi d'autoplay (`__D.suivre`) et test de glisser (souris en moteur A, doigt avec `glisser.mjs` ou le téléphone).
10. **Composants** (M5, et C01 à C31 pour une fiche produit).
11. **Micro-textes** (M6) : `get_page_text` enregistré dans `v3/site/textes/<P>-<L>.txt`, plus `__D.microtextes()` (boutons, étiquettes, attributs aria, `themeVariables.strings`).
12. **Typographie, couleurs, images et icônes, espacements** (M7 à M10).
13. **Mouvement et états** (M11, M12) : GIF avec `gif_creator` pour chaque interaction absente du § 20 ; survol et focus en 1440 et 1024 ; tactile en 390 et 768.
14. **Performance** (M13) : PSI mobile et desktop une fois par page ; Lighthouse local depuis la France, 3 passes, pour P01, P02, P03, P21 et P26 ; HAR en 390 et 1440 avec les traceurs actifs.
15. **Accessibilité** (M14) : parcours clavier en 1440 et 390, contrastes, alternatives textuelles, zoom à 200 %, mouvement réduit.
16. **SEO** (M15) : DOM rendu (`__D.seo()`) comparé au HTML brut (`curl`).
17. **Persuasion** (M16) : chaque levier, avec un test de vérité.
18. **Traceurs** (M17) : une fois par gabarit, en 390 et 1440.
19. **Écarts avec le dossier** (M18) : annexe F.
20. **Verdicts Somnila** (M19).
21. **Index.** Mettre à jour `v3/site/00_INDEX.md`. Commiter à la fin de chaque page (message « v3 : P02 fiche 3.0, 4 largeurs », avec les lignes d'attribution demandées par la configuration du dépôt).

**Règle de contexte.** Ne jamais coller dans la conversation un JSON de plus d'environ 15 000 caractères. Écrire sur disque, puis résumer par script (`resume_json.py`, `har_resume.py`, `psi_resume.py`) ou lire par tranches avec `__D.lire(clé, début, longueur)`.

---

## 6. Capture pleine page par tranches

### 6.1 Automatique (moteur B, référence pour les 4 largeurs)

`capture.mjs` (annexe B) fait, pour chaque largeur :
- les 3 captures du premier écran ;
- la fermeture des popups et la préchauffe ;
- des tranches d'**une fenêtre de haut, avec 80 px de recouvrement**, et 900 ms d'attente après chaque défilement. Ces 900 ms couvrent une apparition de 350 ms, le décalage de 50 ms par carte, le chargement différé et une marge ;
- un manifeste TSV : fichier, page, largeur, type, scrollY, horodatage UTC, description ;
- le JSON des mesures ;
- un HAR ;
- en complément, une capture `fullPage` de Playwright. Elle diffère souvent des tranches (éléments fixes, hauteurs en `100vh`, chargement différé) : les **tranches font foi**.

Assemblage : `python3 v3/outils/assemble.py v3/site/cap/P02 0390` produit `P02-0390-assemblee.jpg`, en collant chaque tranche à `scrollY × dpr`.
- Les éléments collants (barre d'achat, bandeau s'il le devient) réapparaissent dans chaque tranche : le signaler sous l'image.
- Au-delà de 65 000 px de haut, limite du JPEG, l'image est écrite en PNG.

### 6.2 Dans le vrai Chrome (moteur A, pour 1440 et 1024, et pour 390 si le mode appareil est ouvert)

1. `javascript_tool` : coller le contenu de `demontage.js`, puis `__D.prechauffe()`, puis `JSON.stringify(__D.tranches(80))`.
2. Pour chaque y :
   - `javascript_tool` → `scrollTo(0, y)` ;
   - `computer` → attendre 1 s, puis capture d'écran (l'image sert à **lire et décrire**) ;
   - pour le **fichier**, Bash :
     `screencapture -x -R<X>,<Y>,<W>,<H> v3/site/cap/P02/1440/P02-1440-tr-07.png`
     Le rectangle vient de `javascript_tool` → `[screenX, screenY + (outerHeight - innerHeight), innerWidth, innerHeight]`, en points : l'image fait deux fois plus sur un écran Retina, noter `dpr = 2`.
3. Ajouter une ligne au manifeste.
4. **Variante fournie par l'utilisateur**, quand il est présent : outils de développement ouverts (mode appareil éventuel), Cmd + Shift + P, « Capture full size screenshot ». Le PNG pleine page arrive dans Téléchargements ; le déplacer vers `v3/site/cap/<P>/<L>/<P>-<L>-pleinepage-chrome.png`.

### 6.3 Nommage des fichiers

Largeur toujours sur 4 chiffres (0390, 0768, 1024, 1440) pour que le tri reste correct.

| Type | Nom | Exemple |
|---|---|---|
| premier écran | `<P>-<L>-ecran0-t00 / t065 / t15.jpg` | `P02-0390-ecran0-t15.jpg` |
| tranche | `<P>-<L>-tr-NN.jpg` | `P02-1440-tr-07.jpg` |
| page assemblée | `<P>-<L>-assemblee.jpg` | `P02-0768-assemblee.jpg` |
| pleine page (autres moteurs) | `<P>-<L>-pleinepage-pw.jpg` / `-chrome.png` / `-iphone.pdf` | |
| carrousel, diapositive | `<P>-<L>-car<NN>-s<NN>.png` | `P01-1440-car03-s12.png` |
| composant | `<P>-<L>-cmp-<Cnn>-<détail>.png` | `P02-0390-cmp-C16-duo.png` |
| état | `<P>-<L>-etat-<élément>-<état>.png` | `P02-1440-etat-atc-survol.png` |
| animation | `<P>-<L>-anim-<nom>.gif` | `P02-0390-anim-barre-collante.gif` |
| popup | `<P>-<L>-popup-<nom>-t<s>.png` | `P02-1440-popup-klaviyo-t15.png` |
| scénario de panier | `P26-<L>-S<n>-<étape>.png` | `P26-0390-S4-tiroir.png` |
| image source téléchargée | `v3/site/cap/<P>/medias/<fichier d'origine>` | |
| téléphone | `v3/site/telephone/<P>-iphone-<objet>.mov / .png / .pdf` | |

---

## 7. Les modules M1 à M19 : quoi relever, comment, tableaux types

### M1. Structure (T1)
**Comment.** `__D.sections()` à chaque largeur, puis `resume_json.py`. Compléter le rôle et le contenu en lisant la page assemblée.

**T1.** Une ligne par section, dans l'ordre du DOM. Si l'ordre visuel diffère de l'ordre du DOM en mobile, le signaler.

| # | id Shopify | Rôle | Contenu résumé | 0390 y / h px (cm) écran | 0768 | 1024 | 1440 | Hauteur en écrans (1440) | Fond | Présente partout ? |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 | before_after_image_t6fR8X | démonstration | « Un bon sommeil commence par une bonne posture », curseur avant/après | 4 604 / 753 (121,80 / 19,92) é 5,45 | … | … | 4 059 / 1 147 (107,38 / 30,34) é 4,51 | 1,27 | #FFFFFF | oui |

Sous le tableau : longueur totale de la page à chaque largeur (px, cm, écrans), et part des grands blocs (Loox, pied de page, blocs dupliqués 3.0 et 2.0).

### M2. Premier écran et repères de conversion (T2, T2b)
**T2.** Pour chaque largeur, un élément par ligne : y début–fin, **au-dessus**, **coupé par le pli** ou **dessous**, part de la surface du premier écran. Sources : `calques`, `sections`, `images`, et la capture `ecran0-t00`.

**T2b. Repères de conversion** (un tableau, 4 colonnes de largeur) : y en px, en cm et en écrans pour :
- le premier prix ; le premier bouton d'achat (et s'il est entier au premier écran) ;
- la première note ou le premier avis ; la première image produit ; la première réassurance ;
- l'apparition de la popup (t en s) et la part de l'écran qu'elle couvre ;
- le premier élément coupé par le pli ;
- la hauteur cumulée bandeau + en-tête (px et %).

### M3. Disposition : grille, marges, alignements (T3)
**Comment.** Dans `__D.sections()` : `grille.colonnes` (valeur calculée de `grid-template-columns`, en px), `grille.ecart`, `conteneur` (x et largeur). Compléter à la main :
- alignement du texte (gauche ou centré) ;
- ordre image / texte selon la largeur ;
- ratio des images ;
- largeur des colonnes de texte (px, et caractères par ligne estimés = largeur ÷ (0,5 × taille de police)).

| Section | Largeur | Conteneur (x, largeur, marges G/D) | Colonnes (valeurs calculées) | Gouttière | Alignement | Ordre visuel | Ratio des images | Ligne de texte (px ; car.) | Jeton attendu (§ 3.2) | Écart |
|---|---|---|---|---|---|---|---|---|---|---|

### M4. Carrousels et diaporamas (T4, une fiche par carrousel)
**Repérage.**
- `__D.composants()` donne l'inventaire des balises personnalisées du thème (`slideshow-carousel`, `product-gallery`, `scroll-carousel`, etc.) ;
- `__D.carrousels()` y ajoute tout conteneur qui défile en horizontal ;
- puis contrôle à l'œil.

**Carrousels attendus** (au moins 12) :

| Page | Carrousel |
|---|---|
| P01 | héros (1 diapositive, `autoplay="6"` inerte, § 4.2) |
| P01, P02 | logos presse (6 logos, flèches ; 3 visibles en mobile, le 3e coupé) |
| P01 | « Nos best sellers » (14 produits, cartes de 432 px) |
| P01 | réassurance mobile (1 visible sur 4) |
| P02 | galerie (médias et miniatures) |
| P02 | rangée de bulles stories (si elle défile) |
| P02 | tuiles « positions » (carrousel en mobile) |
| P02 | témoignages à onglets (glissement mobile en translateX) |
| P02 | produits associés |
| P02 | galerie photos Loox (si présente) |
| P26 | vente croisée du panier (si présente) |
| P03 à P20 | leurs galeries |

**Fiche type :**

```
### CAR-<P>-<NN> — <nom lisible> (<id de section>)
| Champ | 0390 | 0768 | 1024 | 1440 |
|---|---|---|---|---|
| Type (diaporama à fondu ou zoom / défilement natif aimanté / translation JS / défilement continu CSS / onglets / visionneuse plein écran) | | | | |
| Élément DOM (chemin) | | | | |
| Diapositives au total | | | | |
| Visibles entières / partielles (px visibles de la suivante) | | | | |
| Diapositive l × h (px ; cm) ; écart | | | | |
| Autoplay (attribut ; constaté par __D.suivre sur 20 s ; délai ; pause au survol ou au toucher) | | | | |
| Boucle (après la dernière : revient à la première ? bute ?) | | | | |
| Flèches (position, taille, forme, visibles au survol seulement ?) | | | | |
| Points / compteur « 1/14 » / barre de progression | | | | |
| Glisser à la souris (moteur A) | | | | |
| Glisser au doigt (glisser.mjs ou téléphone) : seuil, inertie, aimantation, défilement vertical bloqué ? | | | | |
| Clavier (Tab sur les flèches ; flèches du clavier) | | | | |
| Transition (type, durée, courbe, source : GIF) | | | | |
| Accessibilité (aria-roledescription, aria-label des flèches, aria-live, focus des diapositives masquées) | | | | |
| Change de nature selon la largeur (carrousel → grille ?) | | | | |

Contenu, diapositive par diapositive (1440, et 390 si le contenu diffère) :
| # | Texte exact (titre, prix, barré, badge, bouton) | Image : fichier, nature, texte incrusté exact, visage oui/non | Lien | Capture |
|---|---|---|---|---|
```

Les natures possibles : packshot, lifestyle, infographie, avant/après, comparatif, schéma, vidéo, avis client, logo, indice d'IA.

**Suivi d'autoplay.**
`__D.suivre('<sélecteur>', 20000, 500).then(r => window.__S = r)`, puis `JSON.stringify(window.__S)`. Si `scrollLeft`, `transform` ou la diapositive active ne changent pas en 20 s, l'autoplay est absent ou inerte.

### M5. Composants (T5)
Pour chaque composant qui n'est pas un carrousel. Une fiche produit suit la liste C01 à C31 du § 8.

| Réf. | Composant | Section | Largeurs | Dimensions (px ; cm) | Contenu exact | Style (police, couleurs, rayon, bordure, ombre) | Interaction | Source (thème, application, Liquid collé, image) | Captures |
|---|---|---|---|---|---|---|---|---|---|

### M6. Micro-textes (T6)
**Sources.**
- `get_page_text` ;
- `__D.microtextes()` : boutons, liens, étiquettes, badges, champs (nom et texte indicatif **lus**, jamais remplis), infobulles, attributs `aria-label` ;
- **`window.themeVariables.strings`** : toutes les chaînes du thème, y compris les messages d'erreur et d'état impossibles à déclencher sans formulaire ;
- les popups ; la configuration Kaching ; `preuves/mkt/kl_v7.json` pour Klaviyo.

| Texte exact | Type (bouton, lien, étiquette, badge, message, infobulle, aria, texte indicatif, chaîne du thème) | Où (page, section, largeur) | Déclencheur ou état | Langue | Coquille ou incohérence | Formulation Somnila EN (facultatif) |
|---|---|---|---|---|---|---|

### M7. Typographie (T7)
**Comment.** `__D.typo().echelle` (signature police/taille/interligne/graisse/approche/casse/couleur × occurrences) et `polices_chargees`.

Rappels du dossier (§ 3.3) à contrôler :
- Roboto 400/500/700, et 600 non déclarée ;
- Helvetica dans l'encart French Days ; Arial dans « Notre histoire » et chez Klaviyo ;
- H1 de la fiche 32 px contre H2 de 44 px (hiérarchie inversée) ;
- échelle déclarée h0 44/56/72, h1 32/40/56, h2 28/32/44, h3 22/26/32, h4 18/22/28, texte courant 14/16/16 avec interligne 1,6.

| Rôle (H1, titre de section, surtitre, texte courant, prix, prix barré, badge, bouton, légende, micro-mention) | Famille | Taille 0390 / 0768 / 1024 / 1440 | Graisse | Interligne | Approche | Casse | Couleur | Source (thème, application, image) | Exemple exact |
|---|---|---|---|---|---|---|---|---|---|

Ajouter les familles **dans les images** (héros, galerie, logo), repérées sur les captures (§ 3.3 : sans-serif géométrique, didone du logo).

### M8. Couleurs (T8)
- **Couleurs rendues** : `__D.couleurs()` (fond, texte, bordure, remplissage SVG, pondérés par surface).
- **Parts de surface au pixel** : `python3 v3/outils/couleurs_pixels.py <page assemblée>` (tolérance d'environ 6, comme au § 3.4).
- Couleurs de référence : #042146, #F8F8F8, #0F2756, #1A1A1A, #4974CA, #FF4D4D, #E53935, #D94343, #0D67E7, #228B22 (§ 3.4).

| Hex | Rôle | Où | Part de surface 0390 / 1440 | Source (jeton du thème, application, bloc Liquid, image) | Contraste avec son fond | Déjà au § 3.4 ? |
|---|---|---|---|---|---|---|

### M9. Images, icônes, photographie (T9, T9b)
**Comment.**
- `__D.images()` : fichier, dimensions naturelles et rendues, surdimension, octets transférés et décodés, `alt`, `loading`, `fetchpriority`, section, y.
- Téléchargement des originaux des visuels clés dans `cap/<P>/medias/` (`curl -sL "<src>" -o …`).
- Pour les SVG : `grep -o 'data:image/[a-z]*;base64' fichier.svg | sort | uniq -c`, qui donne le format enveloppé.

| Rang | Fichier | Section | Nature | Texte incrusté (exact, capitales conservées) | Personnes (visage oui/non) | Allégation | Naturel → rendu (surdim.) | Transféré (ko) | alt | loading | Style photo (fond, lumière, étalonnage, cadrage) | Indices d'IA (nom de fichier, C2PA via `exiftool -a -G1`, artefacts, doublons) | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

**T9b, icônes.** Pour chaque jeu : type (SVG en ligne, PNG icons8, émoji, police), taille, épaisseur de trait, couleur, nombre d'occurrences, cohérence entre jeux. Source : `__D.icones()`.

### M10. Espacements (T10)
**Comment.**
- `__D.ecart('<sélecteur A>', '<sélecteur B>')` : distance verticale et horizontale entre deux éléments ;
- marges internes des sections (`marges_internes` dans `sections()`).

| Paire (de → à) | 0390 | 0768 | 1024 | 1440 | Jeton attendu | Écart | Rythme (multiple de 4 ou de 8 ?) |
|---|---|---|---|---|---|---|---|

À relever au minimum : bandeau → en-tête, espacement entre sections, titre → paragraphe, H1 → puces, puces → stories, carte d'offre → carte d'offre, bouton → mention de stock, accordéon → accordéon, carte → carte dans les grilles.

### M11. Mouvement (T11)
**Comment.**
- juste après le déclencheur, `__D.animations()` (animations actives : nom, durée, courbe, itérations, cible ; transitions déclarées ; `@keyframes` chargées ; nombre de règles de mouvement réduit) ;
- `gif_creator`, avec quelques images avant et après l'action ;
- mesure à ± 10 ms : méthode du § 20 (screencast CDP et échantillonnage par `requestAnimationFrame`), seulement pour les animations **nouvelles**.

**Contrôles du § 20.1 à refaire une fois** : ajout au panier (149 à 150 ms), survol d'une carte (195 ms), apparition des cartes (359 ms).

**Mouvement réduit.** Au choix :
- Réglages Système > Accessibilité > Affichage > Réduire les animations ;
- Playwright `reducedMotion: 'reduce'` ;
- ou, par l'utilisateur, outils de développement > Cmd + Shift + P > « Show Rendering » > « Emulate CSS prefers-reduced-motion ».

| Déclencheur | Élément | Propriétés | De → à (px ; cm) | Durée | Courbe | Délai ou décalage | Mouvement réduit respecté ? | Source | Déjà au § 4 / § 20 ? | Preuve | Jugement | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|---|

### M12. États (T12)

| Élément | Repos | Survol | Focus clavier (contour : style, épaisseur, couleur) | Pressé | Chargement | Succès | Erreur | Désactivé / épuisé | Vide | Captures |
|---|---|---|---|---|---|---|---|---|---|---|

- **Survol** : moteur A (déplacement de la souris), en 1440 et 1024 seulement.
- **Focus** : Tab, puis `__D.focus()`.
- **Erreurs** : impossibles à déclencher sans formulaire. Les recopier depuis `themeVariables.strings`, avec la mention `[non testé : règle]`.
- **États vides observables** : panier vide, blog vide, recherche sans résultat, collection frontpage à 0 produit, 404.

### M13. Performance (T13, T13b)
**PageSpeed Insights (outil gratuit de Google).**
- Automatique : `bash v3/outils/psi.sh P02 <url>`. Les JSON vont dans `data/`, avec la capture finale du test : **vérifier la devise affichée** (EUR ou USD) pour savoir quelle version a été mesurée.
- Si l'API répond 429, passer par l'interface : `navigate` vers `https://pagespeed.web.dev/report?url=<URL encodée>&form_factor=mobile`, puis `form_factor=desktop`, et lire le rapport avec `get_page_text` et une capture.

**Données terrain (CrUX).** Dans PSI, bloc « Découvrez ce que vos utilisateurs réels vivent ». Relever, au niveau de l'URL et de l'origine, en mobile et en desktop : p75 de LCP, INP, CLS, FCP et TTFB, et « Core Web Vitals : réussite / échec ». Avec environ 345 000 visites par mois (§ 17), l'origine a probablement des données.

**Lighthouse depuis la France**, 3 passes, médiane retenue :
- mobile : `npx lighthouse <url> --only-categories=performance,accessibility,seo,best-practices --output=json --output=html --output-path=v3/site/data/P02-lh-fr-m-1 --chrome-flags="--headless=new"` ;
- desktop : même commande avec `--preset=desktop` et `-d-`.

**Poids réel.**
- HAR de Playwright (`TRACEURS=1 node capture.mjs P02 <url> 0390,1440`), puis `python3 v3/outils/har_resume.py v3/site/reseau/P02-0390.har`.
- Ou par l'utilisateur : outils de développement > Réseau > « Disable cache » coché > recharger > défiler jusqu'en bas > lire la barre du bas (N requêtes, Mo transférés, Mo de ressources, Finish, DOMContentLoaded, Load) > clic droit > « Save all as HAR » (export nettoyé par défaut dans Chrome récent).
- Sans HAR : `__D.perf()` (Resource Timing). Les ressources d'un autre domaine sans en-tête `Timing-Allow-Origin` y comptent 0 octet : le champ `zero` les signale.

**T13.**

| Page | Facteur | Source (PSI labo / PSI terrain URL / PSI terrain origine / Lighthouse FR médiane / HAR) | Score perf. | FCP | LCP (élément) | TBT | CLS | SI | INP terrain | TTFB | Requêtes | Transféré | Décodé | DOM | Devise mesurée |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

**T13b.** Poids par domaine et par type, les 20 ressources les plus lourdes, et octets **réellement** téléchargés pour les stories et les SVG. Le dossier ne les a qu'estimés : environ 10 Mo par bulle (§ 6.4).

### M14. Accessibilité (T14, T14b)

| Critère (WCAG 2.2) | Test | 0390 | 1440 | Preuve | Gravité |
|---|---|---|---|---|---|
| 1.1.1 alternatives | `__D.a11y()` : sans alt, alt vide, alt répétés (« Oreiller Soya 3.0 » × 98, § 3.6) | | | | |
| 1.4.3 contraste | `__D.typo().echecs_AA` (seuil 4,5, ou 3 pour le grand texte) ; fonds en image vérifiés à l'œil | | | | |
| 1.4.4 et 1.4.10 zoom et redistribution | zoom du navigateur à 200 %, puis fenêtre de 320 px (moteur B) ; `maximum-scale=1.0` ; sur iPhone, Safari ignore ce blocage (pincer est possible), pas Chrome Android | | | | |
| 2.1.1 clavier | parcours T14b | | | | |
| 2.2.2 pause, arrêt, masquage | compte à rebours, pastille qui pulse, vidéo en boucle, stories | | | | |
| 2.4.1 lien d'évitement | premier Tab | | | | |
| 2.4.3 et 2.4.7 ordre et visibilité du focus | parcours T14b | | | | |
| 2.5.8 taille des cibles | `__D.a11y().cibles_petites` : les zones agrandies par `::before` ne sont **pas** vues par le script (§ 9.1 : 42 × 42), contrôler dans le CSS | | | | |
| 1.2.2 sous-titres | pistes `<track>` des vidéos | | | | |
| 4.1.2 nom, rôle, valeur | boutons sans nom, `aria-expanded` des accordéons, étiquettes des nuanciers | | | | |
| Modales | stories, Kaching, Klaviyo : piège du focus, Échap, retour du focus | | | | |

**T14b, parcours clavier.** 40 premiers arrêts : `computer` → touche Tab, puis `__D.focus()`, et une capture tous les 5 arrêts.

| # | Élément | Nom accessible | Focus visible (contour) | Remarque |
|---|---|---|---|---|

### M15. SEO de la page (T15)
- **DOM rendu** : `__D.seo()` (title et longueur, meta description et longueur, canonique, robots, hreflang, Open Graph et Twitter, plan des titres, faux titres `<p class="h2">`, JSON-LD, liens internes et externes, `lang`).
- **HTML brut** : `curl -sL -A "Mozilla/5.0 (Macintosh)" -H "Accept-Language: fr-FR" <url> > v3/site/data/P02-brut.html`, puis les mêmes champs. Différence attendue : `aggregateRating` injecté côté navigateur par Loox (§ 6.6).
- **Outils Google** : `https://search.google.com/test/rich-results?url=<URL encodée>` et `https://validator.schema.org/#url=<URL encodée>`.
- **Index** : `https://www.google.fr/search?q=site:soya-paris.com&hl=fr&gl=fr` (nombre de résultats, titres affichés).

| Champ | DOM rendu | HTML brut | Longueur | Remarque |
|---|---|---|---|---|

Puis :
- le plan H1 à H6 aux 4 largeurs (un titre peut disparaître en mobile) ;
- le JSON-LD : type, prix, disponibilité, note, FAQ, gtin, sku, livraison, retours ;
- la réciprocité des hreflang avec us.soya-paris.com.

### M16. Persuasion (T16)
**Types de leviers** : urgence, rareté, preuve sociale, autorité, ancrage de prix, cadeau ou réciprocité, garantie, gratuité, nouveauté, option par défaut (pré-cochage), refus culpabilisant, engagement (quiz), exclusivité (VIP), origine (Paris, drapeau), choix guidé, réduction du risque.

| ID | Type | Texte exact | Où (page, section, largeur, y) | Support (HTML, image, vidéo, popup) | Mécanisme | Test de vérité (méthode) | Résultat : VRAI / FAUX / TROMPEUR / INVÉRIFIABLE / NON TESTÉ | Preuve | Cadre (FR / US) | Verdict Somnila |
|---|---|---|---|---|---|---|---|---|---|---|

**Catalogue des tests de vérité**, tous en lecture :

| Code | Allégation | Test |
|---|---|---|
| T-URG | compte à rebours | valeur à H, puis dans un profil neuf, puis après minuit heure de Paris : se relance-t-il ? Configuration : `essentialCountdownTimerConfigs` |
| T-RAR | « 89 % » / « 78 % » / « quelques exemplaires » | relevé à J, J+1, J+7, face à `inventoryQuantity` (`outils/inv.py`) |
| T-PS | « 4,8/5 – 15 637 » | comparer au nombre Loox du widget rendu, au JSON-LD (4,3 / 339) et au total de la boutique (4,6 / 1 775) |
| T-ANC | prix barré | déjà pratiqué ? (Wayback, § 17.4 : jamais) ; prix vu par Google (JSON-LD, Shopping, E03) ; prix dans le panier |
| T-CAD | « cadeaux offerts » | ligne à 0 € dans `/cart.js` ? (`freeGifts: []` sur la 3.0, § 6.5) |
| T-GAR | « 30 nuits » | comparer à `refund-policy` : délai, état exigé, frais de retour, adresse |
| T-LIV | « livraison rapide offerte » | ligne de livraison au paiement ; délais de la politique, de l'accordéon et de la FAQ (§ 6.7) |
| T-AUT | logos presse, « 200 praticiens », « Dr. Marc R. » | chercher l'article sur le site de chaque titre (`https://www.google.fr/search?q=%22soya+paris%22+site:<domaine du titre>`) ; source citée ? |
| T-DEF | pré-cochage | la ligne housse arrive-t-elle au panier sans action ? |
| T-PRIX | barre collante à 139,90 € | ajout depuis la barre (S6) : prix au panier |

### M17. Traceurs et consentement (T17)
Une fois par gabarit (accueil, fiche, collection, panier, paiement), en 390 et 1440, dans **trois profils neufs** : aucun choix fait, refus, acceptation.

**Comment.**
- `read_network_requests`, filtré sur `facebook|tiktok|snap|pinterest|google|doubleclick|klaviyo|triple|loox|kaching|parcelpanel|aftersell|monorail`. L'appeler une première fois pour lancer l'écoute, **puis recharger**.
- `__D.tiers()` : domaines contactés, variables globales (`fbq`, `ttq`…), **noms** des cookies et des clés `localStorage` (jamais leurs valeurs).
- Bannière : texte exact, boutons, panneau « Préférences » (on l'ouvre pour le lire), apparence et position.

| État | Domaine | Requête (chemin) | Événement (PageView, ViewContent, AddToCart…) | Avant consentement ? | Noms de cookies posés |
|---|---|---|---|---|---|

### M18. Écarts avec le dossier v2 (T18)

| Mesure | § du dossier | Valeur v2 | Valeur v3 | Écart | Statut : confirmé (±2 px) / corrigé / nouveau / non revu | Cause probable (police, popup, habillage, devise) |
|---|---|---|---|---|---|---|

### M19. Verdict Somnila (T19)

| Élément | Réf. (C16, CAR-P01-03, LEV-P02-04…) | Verdict : Copie / Adapte / Évite | Raison (filtres F1 à F4 de l'annexe G, et efficacité) | Transposition Somnila (EN, marché US) | Priorité (P1 à P3) | Effort (S / M / L) |
|---|---|---|---|---|---|---|

---

## 8. Fiche produit : démontage composant par composant (P02 en entier ; P03 à P20 par différence)

Pour chaque composant : ce qu'il faut **relever**, **tester**, et les valeurs **connues à vérifier**. Chaque composant produit au moins une ligne en T5, une en T6 si c'est du texte, et une en T19. Données brutes : `__D.pdp()` (JSON produit `/products/<handle>.js`, scripts des applications, accordéons en texte intégral même fermés, barre collante, vidéos).

- **C01. Bandeau compte à rebours.** Texte exact, chiffres, légendes (8 px en mobile), couleurs, hauteur (58 / 50 px). Valeur relevée et heure exacte ; relance à minuit (T-URG). Configuration : `essentialCountdownTimerConfigs` (style, `startDate`, `endDate`, récurrence).
- **C02. En-tête.** Renvoi à P00. Noter seulement ce qui change sur une fiche.
- **C03. Fil d'Ariane.** Présent ou absent, à chaque largeur.
- **C04. Média principal de la galerie.** Dimensions (666 × 666 en 1440, 390 × 390 en 390), coins, fond, pastilles (CertiPUR, OEKO-TEX, « 30 nuits d'essai »), comportement au clic.
- **C05. Miniatures.**
  - Position : à gauche en desktop, dessous en mobile, et à 768 et 1024 ?
  - Taille et pas : 64 × 70 et 80 ; 56 × 62 et 64.
  - Nombre visible (12 ; 5 entières plus 1 coupée), défilement, marqueur de la miniature active (soulignée).
- **C06. Navigation dans la galerie.** Flèches, points, glisser à la souris, **glisser au doigt** (`glisser.mjs`, ou le téléphone), clavier, boucle, type de transition (GIF).
- **C07. Zoom et plein écran.** Clic sur l'image en desktop. **Pincer sur iPhone** (moteur C) : le § 4.4 déduit du code que le pincement est annulé alors que le zoom est absent. Le vérifier est prioritaire.
- **C08. Changement d'images par coloris (StarApps Variant Image).** Cliquer chaque pastille (Blanc, Bleu, Beige, Gris). Pour chacune : nombre de médias, ordre, première image, transition.
  - Déjà relevé : 12 médias visibles par coloris ; SVG par coloris : Blanc 11, Bleu 11, Beige 10, Gris 1.
  - Écart non élucidé : 48 médias dans le HTML contre 60 dans le DOM. Le trancher avec `__D.pdp().produit.medias` et le compte du DOM.
- **C09. Inventaire image par image, pour les 4 coloris.**
  - Tableau T9 complet, avec le texte incrusté **exact** de chaque visuel **rendu** : c'était impossible en cloud.
  - Vérifier les doublons (01 = 12 = 24, 03 = 14 = 27, 06 = 18 = 22 = 28, 36 = 37).
  - Vérifier l'infographie « zones » identique dans les 4 coloris (404 799 octets).
  - Vérifier le comparatif « OREILLER SOYA 2.0 » présent sur la fiche 3.0 dans les 4 coloris.
  - Visuel « 2 HAUTEURS 1 SEUL OREILLER » : deux oreillers différents, sans chiffre.
  - Coloris Gris : fichiers « Firefly_Gemini_Flash… », avec `exiftool` pour chercher un manifeste C2PA.
  - Ordre de lecture du message (santé, autorité, confort) : une phrase par image.
- **C10. Ligne de note.** « Noté 4,8/5 – 15 637 avis clients » : style des étoiles (PNG icons8 #FFD700, 14 px), taille, poids, lien au clic (défile vers Loox ?), test T-PS.
- **C11. Surtitre.** Texte exact, casse, couleur (#636366), nombre de lignes à chaque largeur.
- **C12. H1.** Taille aux 4 largeurs (22 à 32 px attendus), couleur, y.
- **C13. Puces.** Les 4 puces exactes, pictogramme, pas vertical (36 px en desktop, 45 px en mobile), allégations (« soulage », « prouvée »).
- **C14. Bulles stories.**
  - Libellés (Concept, Lequel choisir ?, Avis clients, FAQ), diamètre (78 px), anneau.
  - Lecture muette pendant 10 s au chargement ? Contrôle : `__D.pdp().videos` à t = 12 s (`joue`, `lu_jusqu_a`), et octets réellement téléchargés (HAR).
  - Lecture de l'HEVC selon le moteur : `hevc` = `canPlayType`, dans Chrome et dans Safari (moteur C).
  - Au clic, la modale : taille, commandes, son, barre de progression, passage d'une story à l'autre (glisser ou toucher), fermeture, **Échap** et focus (§ 4.3 bis : ni l'un ni l'autre).
  - Ne pas retranscrire : transcriptions déjà faites au § 16.5. Vérifier seulement que ce sont les mêmes fichiers.
- **C15. Filet promo.** « FRENCH DAYS | JUSQU'À -60% », ou le libellé du jour s'il a changé.
- **C16. Bloc d'offres Kaching**, une ligne T5 par carte :
  - libellé, sous-libellé, badge (texte, couleur, 71 × 24 px) ;
  - prix, barré, économie affichée (aucun pourcentage n'est affiché d'après le § 6.5), prix unitaire ;
  - lignes de cadeaux ; état présélectionné ;
  - dimensions, bordure (2 px #4974CA), rayon (13) ;
  - ce que fait un clic : dépliage, sélecteurs de couleur par unité (« Pack Famille » en affiche 4, § 20.2), transition (0 ms d'après le § 4.3 bis).
  - Prix connus : 69,90 / 98,90 / 139,90 €, barrés 139,90 / 279,80 / 559,60 €.
  - Configuration : scripts contenant `kaching` dans `__D.pdp().scripts_apps` (`discountName`, `useProductCompareAtPrice`, `freeGifts`, `preselected`, `updateNativePrice`).
- **C17. Lignes d'ajout pré-cochées.** « +1 Housse de Rechange » : cochée ou non, coloris par défaut (Bleu), prix 14,90 € (barré 39,90 €), face à la housse vendue seule 17,90 €. Test T-DEF (scénarios S1 et S3).
- **C18. Nuanciers et options.** Forme, taille, libellé visible ou non, état sélectionné ou épuisé, effet sur la galerie et sur le prix.
- **C19. Quantité.** Présente ou absente, minimum, maximum.
- **C20. Bouton d'ajout et paiement express.**
  - Texte, 518 × 60 et 350 × 54 attendus, couleur, rayon (10), états (M12), position par rapport au pli (447 px sous le pli en 1440, 2,1 écrans en 390), et en 768 et 1024.
  - Boutons de paiement express présents ? On **ne les clique jamais** : relever seulement leur présence et leur libellé.
- **C21. Messages de stock et d'urgence.** « Plus que quelques exemplaires en stock » (#E53935), encadré « 89 % » avec sa jauge (492 × 22), point « En stock » qui pulse (fiches secondaires). Tests T-RAR.
- **C22. Réassurance sous le bouton.** « 30 nuits d'essai — Satisfait ou remboursé ». Image `soya-payments.svg`, ou `heyshape-payments.svg` sur 17 fiches (domaine getheyshape.com, § 3.7), comparée aux 10 moyens du pied de page **et** à ceux affichés au paiement (P27).
- **C23. Encadrés marketing.**
  - « FRENCH DAYS JUSQU'À -60% / La meilleure offre de l'année » (Helvetica 28 px, graisse 800) ;
  - « SOYA 3.0 — L'évolution de vos nuits, validée par les experts » et ses 4 arguments, en texte intégral ;
  - témoignage « Dr. Marc R., Chiropracteur » (avatar de 570 934 octets en 60 × 60) et « Recommandé par plus de 200 professionnels de santé ».
- **C24. Accordéons.** Les 5 titres (Matériaux & dimensions, Durabilité, Lavage, Livraison & retours, Garantie 30 nuits), **texte intégral exact** (via `__D.pdp().accordeons`, puis ouverture de chacun pour la capture), état par défaut, icône, animation (250 / 150 ms). Relever les incohérences : « 30 nuits » face à « 30 jours » ; délais contradictoires (§ 6.7).
- **C25. « Complétez pour un confort ultime ! »** Produits, prix (housse 17,90 € barré 39,90 €, coussin lombaire 49,90 €), bouton « + Ajouter » : que se passe-t-il au clic ?
- **C26. Barre collante.**
  - Seuil d'apparition (scrollY, par dichotomie entre 1 200 et 1 500 en 1440 ; dès 2 100 en 390), et en 768 et 1024.
  - Dimensions (560 × 114 et 390 × 88), contenu, **prix affiché** (139,90 € en desktop, aucun en mobile).
  - **Ce qu'elle ajoute au panier** (scénario S6).
  - Sur iPhone, comportement avec la barre d'adresse de Safari (moteur C).
- **C27. Sections sous la fiche**, une fiche T5 chacune, texte intégral :
  - tuiles « Quel que soit votre style de sommeil… » : 4 SVG de 4,3 à 4,7 Mo, texte incrusté exact, carrousel en mobile ;
  - avant/après : 896 × 569, position initiale du curseur, libellés, glisser à la souris et au doigt, ce que montrent les images (halo rouge, colonne verte) ;
  - logos presse : **identifier chaque titre**, lien éventuel ;
  - « SOYA 3.0 : La nouvelle ère du sommeil » (57.svg) ;
  - vidéo de section : contenu, 64,5 s, lecture automatique ou non, commandes, sous-titres ;
  - témoignages à onglets (Douleur cervicale / Migraines / Posture / Ronflements) : chaque onglet, chaque carte en texte exact ;
  - statistiques 96 / 91 / 87 % et leur mention de source exacte (« juillet 2025 ») ;
  - FAQ : 13 questions et **réponses complètes exactes** ;
  - bloc « Best-Seller 2.0 » ;
  - produits associés (CAR).
- **C28. Widget Loox** (6 335 px et 7 211 px, jamais vus).
  - S'il est dans une `iframe` d'un autre domaine, lire son `src` et l'ouvrir dans un nouvel onglet pour l'analyser.
  - Relever : en-tête (moyenne, total affiché) ; histogramme des étoiles ; tris proposés (libellés exacts) ; filtres (photos, notes, produit ?) ; avis par page ; « Voir plus » (le cliquer jusqu'à 5 fois).
  - Anatomie d'une carte : nom, date, badge « Verified », étoiles, texte, photos, produit mentionné, votes, réponse de la marque.
  - Galerie de photos en tête ; mélange des langues.
  - **Mode agrégé** : comparer les identifiants des 10 premiers avis sur P02, P04 et P09. Le même flux sur toutes les fiches est attendu (annexe C).
  - Ne jamais cliquer « Écrire un avis » ni « utile ».
- **C29. Récemment consultés.** Après avoir visité 3 fiches, la section apparaît-elle ?
- **C30. Popups sur la fiche.**
  - Klaviyo : délai mesuré depuis la navigation, géométrie aux 4 largeurs, part de l'écran couverte, ce qu'elle masque (prix, bouton), croix (22 px).
  - Kaching après l'ajout : délai (environ 475 ms), texte exact, visuel (coussin de genoux), boutons.
  - Empilement des deux.
  - Réapparition sur une autre page du même profil.
- **C31. Données.** `/products/<handle>.js` (prix, barrés, variantes, `sku`, médias), JSON-LD (139,90 €, `aggregateRating`), prix vu par Google Shopping (E03), différences entre le DOM et le HTML brut.

**Différences à noter en priorité sur les autres fiches :**
- **P03 (2.0)** : vrais cadeaux dans les packs (2 ou 4 housses offertes) ; « 78 % » ; 4 autres stories ; comparatifs ; prix 59,90 / 89,90 / 129,90 €. La page entière reste à relever.
- **P04 (enfant)** : « 15 637 avis **parents** » face à 4 avis Loox ; housse pré-cochée 14,90 € (29,90 €) ; coquille « 30 NUTIS D'ESSAI » ; barre collante à 99,90 € face à l'offre à 49,90 € ; cotes 58 × 32 cm et 6 / 8 cm.
- **P05 (lombaire)** : visuels de coussin de genoux, puis « 4 en 1 » ; 25 × 23 cm ; description « dans votre voiture » ; 49,90 € en direct, contre 19,90 € par la popup ; 24 avis Loox.
- **P06 à P08 (housses)** : compatibilité et dimensions annoncées (60 × 40, face aux 62 × 37 de l'oreiller) ; coloris ; barré 39,90 / 29,90 € ; texte « blanc, bleu et beige » alors que le gris existe.
- **P09 à P20 (gabarit court)** : bloc du thème sans Kaching ; badge « Economisez € » ; point « En stock » qui pulse (#228B22, 4,39:1) ; image de paiement heyshape ; allégations propres à chaque produit (« Anti-Stress & Thérapeutique », « Conception orthopédique brevetée » sans numéro, soie « de mûrier » à 49,90 € toutes tailles) ; tailles « Twin / Queen / King » de la couette.

---

## 9. Les autres gabarits

### 9.1 P00, gabarit commun (relevé sur l'accueil, contrôlé sur P02, P21 et P28)
- **Bandeau.** Voir C01.
- **En-tête.** Logo (120 × 32 ; 100 × 27), menu de 6 libellés **sur 2 lignes en 1440** : que se passe-t-il en 1024, 1280 et 1920 ? Icônes (recherche, compte, panier et pastille de quantité), sélecteur « EUR € » (ouvrir, lire les 26 pays, **ne rien choisir**), en-tête non collant (§ 4.4).
- **Menu mobile** (390 et 768). Ouverture par la gauche (environ 316 ms), liens, sélecteur, « Compte », zones de toucher (42 × 42).
- **Tiroir de recherche vide** et **tiroir de panier vide** : textes, suggestions.
- **Pied de page.** Libellés exacts des colonnes, champ newsletter (lu, jamais rempli), icônes de paiement, « © 2026, SOYA PARIS. © 2026 », « Your Privacy Choices ».
- **Bannière de cookies** (module M17) et **popups globales** : Klaviyo, et le « HIGH PROSPECT » à code BACK20 s'il s'affiche.
- **Clic droit désactivé** (`oncontextmenu`) : le constater.

### 9.2 P01, accueil
- Héros desktop et héros mobile : **deux visuels différents** (-60 % et -50 %, § 20.2). Texte incrusté exact, bouton dessiné (243 × 63) coupé par le pli, lien vers la fiche 3.0, et en 768 et 1024 ?
- Logos presse (CAR).
- Blocs image + texte 3.0 et 2.0 : texte intégral, « Découvrir ».
- Carrousel « Nos best sellers » : 14 fiches, 3.0 absent, prix de chaque carte (2.0 à 119,90 € sans barré), « + Ajouter » (scénario S7), survol (image secondaire).
- Statistiques et leur mention de source ; réassurance ; pied de page.

### 9.3 P21 à P25 : collections et recherche
- **Collection.**
  - Bannière (960 / 260 px, parallaxe 0,3, contraste du titre blanc environ 2,8:1).
  - Blocs dupliqués ; grille (4 colonnes de 318 px, pas de 472 ; 2 colonnes de 171 px, écart de 8) ; nombre de colonnes en 768 et 1024.
  - Anatomie d'une carte : image, image au survol, badge, titre, prix, barré, étoiles (absentes), nuanciers, achat rapide.
  - Tri et filtres (absents sur Nos Best Sellers, présents en recherche), pagination (`?page=2`), état vide (P23).
- **Recherche** : par URL uniquement.
  - Nombre de résultats, onglets produits / pages / articles, tri, filtres (prix, disponibilité), cartes, état sans résultat, état vide.
  - Suggestions : `/search/suggest.json?q=ore&resources[type]=product`, lu, sans saisie.
  - Prix affichés (3.0 à 139,90 €, § 7.3).

### 9.4 P26, panier : scénarios (les uns après les autres, panier vidé entre deux)
Pour chaque scénario :
1. capture du tiroir ;
2. capture de `/cart` ;
3. `__D.panier()` enregistré dans `data/P26-S<n>.json` : lignes, prix unitaire, prix d'origine, prix final, remises, propriétés `_kaching…`, total ;
4. contrôle : le total affiché correspond-il au prix annoncé sur la fiche ?

| Scénario | Action | Question |
|---|---|---|
| S0 | panier vide | textes de l'état vide, suggestions |
| S1 | P02, offre 1x présélectionnée, « Ajouter » → popup Kaching → « Non merci » | 84,80 € attendus ? coloris de la housse ? libellé de la remise ? |
| S2 | comme S1, mais « Profiter de l'offre » | le lombaire à 19,90 € ; total de 104,70 € attendu |
| S3 | 1x, case housse **décochée** | 69,90 € ? |
| S4 | Pack Duo par défaut | 128,70 € attendus ? |
| S5 | Pack Famille par défaut | 169,70 € attendus (**non vérifié** au § 6.5) ; 4 oreillers ? cadeaux ? |
| S6 | ajout depuis la **barre collante** (1440 et 390) | prix facturé : 139,90 ou 69,90 € ? |
| S7 | « + Ajouter » du 2.0 depuis l'accueil (119,90 €) | prix au panier ? |
| S8 | achat rapide du 3.0 depuis `/collections/all` ou la recherche (139,90 €) | prix au panier ? |
| S9 | P04 enfant, 1x par défaut | 49,90 + 14,90 € ? barre collante à 99,90 € ? |
| S10 | P03 2.0, 1x puis Duo | housses offertes à 0 € ? |

Relever aussi, dans le tiroir :
- barre de livraison gratuite, ventes croisées, note de commande, cases à cocher ;
- mention des taxes et de la livraison ; boutons de paiement express (présence seulement) ;
- ce que fait « − » sur une ligne de pack ; animation d'ouverture ;
- blocage éventuel par la file d'attente Kaching (§ 9.2 du dossier) : l'ajout n'est rejoué qu'à la fermeture de la popup.

### 9.5 P27, paiement, première page (scénarios S1, S4, S5, S6 et S7 ; en 390 et 1440)
- **Clic « Paiement ». Aucune saisie, aucun clic dans un champ, aucun paiement express.**
- Capture intégrale en tranches. `get_page_text` enregistré dans `textes/P27-S<n>-<L>.txt`.
- Relever :
  - logo, couleurs, police ;
  - zone de paiement express (présence et liste seulement) ;
  - récapitulatif : lignes, prix barrés, **libellé et montant des remises** (remise automatique Kaching ?), sous-total, ligne de livraison (« Gratuit » ou « Calculé à l'étape suivante »), taxes (« TVA incluse » ?), total et devise ;
  - moyens de paiement listés sans saisie ;
  - liens du bas de page (remboursement, livraison, confidentialité, conditions, contact) ;
  - éléments de confiance ;
  - en mobile, le repli du récapitulatif (le clic est autorisé).
- Si Shop Pay reconnaît un appareil ou propose une connexion : **fermer l'onglet** et le noter. Le profil dédié du § 1.3 doit l'éviter.
- En fin de scénario : fermer l'onglet, vider le panier.
- Offres après paiement (AfterSell) : `[non testé : règle]`.

### 9.6 P28 à P35 : pages et cas limites
- **Notre histoire** : texte intégral, affirmations (« plus de 50 000 clients satisfaits », « Christine R., 41 ans »), absence de visage, de date, de lieu ; H1 56 px et H2 44 px, Arial.
- **Contact** : libellés des champs (lus), « ligne téléphonique… bientôt disponible », jours de service (« du lundi au samedi » face au « 7j/7 » du bandeau), aucun H1.
- **Opposition au partage des données** : texte, champs (lus), aucun envoi.
- **Blog** : état vide, H1 28 px.
- **Politiques** : les 7 textes enregistrés dans `textes/P32-<nom>.txt`, puis `diff` avec `preuves/soya/pol/<nom>.txt`. Tableau des faits : délai de traitement, délai de livraison, zones, frais, suivi, délai de retour, état exigé, frais de retour, **adresse de retour**, délai de remboursement, rétractation de 14 jours, éditeur (nom, adresse, immatriculation), hébergeur, médiateur, contact.
- **Suivi ParcelPanel** : mise en page, textes, langue ; aucune saisie.
- **Compte** : page de connexion (Shopify ou « Shop »), textes ; aucune saisie.
- **404** : statut HTTP (`curl -s -o /dev/null -w "%{http_code}" <url>`), texte, recherche proposée, liens.

### 9.7 P36, us.soya-paris.com (priorité Somnila : les États-Unis d'abord)
- Redirection ou sélecteur de pays à l'arrivée depuis la France : le noter.
- Pages : accueil, 3.0, 2.0, collection, panier (S1 en USD), politiques.
- Relever :
  - langue réelle, **part de textes restés en français** : proportion des textes de `__D.typo().textes` contenant des mots-outils français (« le, la, les, des, votre, pour, avec ») ;
  - prix en USD ; « Over 200,000 users » face au « 100 000 » du français ;
  - langue et prix de Kaching et Klaviyo ;
  - politiques en anglais ou non ; « Your Privacy Choices » ;
  - langue du paiement ;
  - hreflang réciproques, canonique.
- **Limite** : l'IP reste française. Ce qu'un visiteur américain voit réellement (géolocalisation, taxes) reste `[non vérifié]`.

### 9.8 P37, fichiers techniques
`curl` de chaque fichier, puis `diff` avec `preuves/soya-tech/`. Pour `/products.json` : nouveaux produits, prix modifiés, `updated_at`.

---

## 10. L'extérieur : publicités et réseaux

Toujours depuis le profil « Enquête Soya », sans connexion, **sauf** E05 et E06 (profil « Réseaux », seulement si l'utilisateur l'accepte). Aucune interaction sociale, aucun clic sur une annonce payante. Captures dans `v3/exterieur/cap/`, vidéos dans `v3/exterieur/videos/`, tableaux dans `v3/exterieur/Exx_*.md`.

### E01. Bibliothèque publicitaire de Meta (Facebook et Instagram)

**Requêtes :**
1. Par page (la page connue) :
   `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=FR&media_type=all&search_type=page&view_all_page_id=61565502837799`
2. Par mots-clés, en France puis dans tous les pays (`country=ALL`) :
   `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=FR&q=%22soya%20paris%22&search_type=keyword_exact_phrase`,
   puis `q=soya-paris.com` et `q=oreiller%20soya`.
3. États-Unis : `country=US`. Seules les annonces actives y sont conservées : l'historique n'existe que pour l'Union européenne.
4. Page 61582665196548 (seconde entité « Soya Paris ») et pages liées du § 15 (MERCURE PARIS, FREYJA), si le temps le permet.

**Relevé global :**
- nombre de résultats, actives et inactives ;
- répartition par plateforme, par format, **par mois de début** (histogramme) ;
- **Transparence de la page** : date de création, anciens noms, pays des gestionnaires. Ces données renforcent ou infirment le § 15.

**Relevé par annonce (AD-META-NNN) :**

| Champ | Contenu |
|---|---|
| Identification | identifiant de bibliothèque, statut, début de diffusion, jours d'activité |
| Diffusion | plateformes, « N annonces utilisent ce contenu » |
| Format | image, vidéo, carrousel, dynamique ; ratio ; durée |
| Textes exacts | texte principal, titre, description, bouton |
| **URL de destination** | lue dans le `href` (paramètre `u` de `l.facebook.com/l.php`, décodé), UTM compris, **sans cliquer** |
| Message | produit, offre, promesse, angle (santé, prix, nouveauté, couple, preuve sociale, autorité) |
| **Accroche des 3 premières secondes** | texte incrusté et paroles |
| Mise en scène | visage oui/non ; présentateurs récurrents du § 16.5 ; style des sous-titres ; musique ou voix |
| Allégations de santé | liste exacte |
| **Transparence UE** (« Voir les détails de l'annonce ») | couverture, âge, sexe, lieux, ciblage, **bénéficiaire et payeur** : ces deux champs peuvent nommer l'opérateur, à croiser avec le § 15 |

**Vidéos.**
- `javascript_tool` → `[...document.querySelectorAll('video')].map(v => v.src)`, puis `curl -L -o v3/exterieur/videos/AD-META-NNN.mp4 "<src>"` (analyse interne seulement).
- Planche : `ffmpeg -i AD.mp4 -vf "fps=1,scale=270:-1,tile=6x5" v3/exterieur/planches/AD-META-NNN.jpg`.
- Images de l'accroche : `-ss 0`, `1`, `2`, `3`, avec `-frames:v 1`.

**Classement des gagnantes probables** : active depuis 30 jours ou plus, 3 versions ou plus, couverture UE la plus forte.

**Pages d'atterrissage** : chaque URL distincte absente du § 4 devient une page P40+, analysée avec le protocole complet.

### E02. Centre de transparence des publicités Google
- `https://adstransparency.google.com/?region=FR&domain=soya-paris.com`, puis `region=anywhere`, puis la page de l'annonceur.
- **Nom de l'annonceur, mention « vérifié », pays du siège** : c'est ce relevé qui tranche la piste « LUXERY SERVICE LTD » (§ 16.3).
- Nombre d'annonces, formats (texte, image, vidéo, Shopping), dates de dernière diffusion, régions, textes exacts.

### E03. Google.fr, recherche et Shopping, sans cliquer une seule annonce
- **Forme des URL** : `https://www.google.fr/search?q=<requête>&hl=fr&gl=fr&pws=0`, et l'onglet Shopping avec `&udm=28`.
- **Requêtes (20)** : soya paris ; soya paris avis ; soya paris arnaque ; oreiller soya ; oreiller soya 3.0 ; oreiller soya 2.0 ; oreiller ergonomique ; oreiller cervical ; oreiller orthopédique ; oreiller papillon ; meilleur oreiller cervical ; oreiller mémoire de forme ; oreiller douleur cervicale ; oreiller dormir sur le côté ; oreiller ergonomique cervical ; coussin lombaire ; oreiller enfant ergonomique ; housse oreiller soie ; draps soie ; « cervical pillow » (témoin anglais).
- **Pour chacune** :
  - annonces textuelles : annonceur, titre, description exacte, liens annexes, URL affichée ;
  - annonces Shopping : **prix affiché pour Soya** (139,90 ou 69,90 € ? voir § 7.3), note du marchand ;
  - position organique de soya-paris.com ;
  - « Autres questions posées » ; pages tierces « avis ».
- **Page marchand Google**, si elle s'affiche : `https://www.google.com/storepages?q=soya-paris.com&c=FR&v=19` (note, livraison, retours).
- **Google Lens sur les packshots** : `https://lens.google.com/uploadbyurl?url=<URL de l'image sur le CDN>` (recherche de l'origine de la photo).

### E04. TikTok
- **Bibliothèque de contenus commerciaux** : `https://library.tiktok.com/ads?region=FR&adv_name=soya`, et une recherche par mot-clé « soya paris ». Par annonce : annonceur, payeur, première et dernière diffusion, **nombre d'utilisateurs uniques atteints**, ciblage (âge, sexe, pays), texte exact, vidéo.
- **Profil** `https://www.tiktok.com/@soya.paris` : abonnés, j'aime, vidéos publiques (0 le 26/09).
- **Page de mots-clés** `https://www.tiktok.com/content/avis-oreiller-soya-paris` : vidéos de tiers citées.

### E05 et E06. Instagram et Facebook (profil « Réseaux », accord de l'utilisateur requis)
- **Instagram @soya.paris** : abonnés, publications ; les 12 dernières publications ou Reels (date, format, accroche, légende exacte, vues, j'aime, commentaires) ; stories à la une ; lien de bio ; publications identifiées.
- **Facebook, page 61565502837799** : À propos, **Transparence de la page**, publications et vidéos récentes (ce qui s'affiche).
- **Commentaires** : les lire seulement, et classer leurs thèmes (livraison, remboursement, douleur, prix). **Ne copier aucun nom de personne** dans les livrables : l'auteur est désigné « internaute ».

### E07. YouTube, Pinterest, Snapchat
- **YouTube** : recherche « soya paris », « oreiller soya » ; la chaîne LUXERY SERVICE LTD et son Short.
- **Pinterest** : `https://fr.pinterest.com/search/pins/?q=soya%20paris`, et le répertoire des publicités `https://ads.pinterest.com/ads-repository/`.
- **Snapchat** : `https://adsgallery.snap.com/`, recherche « soya » (contrôle du « 0 annonce » du § 16.2).

### E08. Tiers
- **Archives d'e-mails publiques** : `https://milled.com/search?q=soya%20paris`, pour lire les newsletters Klaviyo sans s'inscrire.
- **Sites d'avis et d'affiliation** (meilleur-oreillercervical.fr, hadlemans.fr, franceverif, signal-arnaques) : note, date, lien vers Soya.
- **Places de marché** : Amazon.fr « SOYA-Paris » (marque SWZEC, B0FCXR3BDF, B0FWQHLZL2) ; revente sur Leboncoin.
- **Trustpilot** : seulement le total et la note du jour (le § 19 fait référence).

### E09. Reciblage (facultatif, décision de l'utilisateur, laisse une trace)
Dans le profil « Réseaux », connecté :
1. visiter la fiche 3.0 et ajouter au panier (sans aller plus loin) ;
2. pendant 24 à 72 h, capturer toute annonce Soya dans les fils Facebook et Instagram : annonces catalogue avec prix, textes de relance.

Sans accord de l'utilisateur : noter `[non testé : décision]`.

### E10. Synthèse publicitaire (`v3/exterieur/E99_synthese.md`)
- Comptes par plateforme, format, angle, offre, produit.
- Matrice angle × produit.
- Les 10 annonces les plus durables.
- Liste des accroches exactes.
- Inventaire des allégations de santé.
- Correspondance annonce → page d'atterrissage → prix au panier.
- Écarts avec le § 16 (T18).
- Verdicts Somnila (T19).

---

## 11. Les outils de développement de Chrome, via Claude in Chrome, sans rien saisir

Claude in Chrome ne manipule **pas** les panneaux des outils de développement. Chaque panneau a un équivalent sans saisie, ou un geste que fait l'utilisateur.

| Besoin (panneau) | Équivalent Claude in Chrome | Complément |
|---|---|---|
| Éléments : lecture du DOM | `read_page` (arbre d'accessibilité et références), `find` (« le bouton Ajouter au panier »), `javascript_tool` (`document.querySelector(…).outerHTML.slice(0, 3000)`) | HTML brut : `curl` depuis Bash |
| Styles calculés, boîte, mesures | `javascript_tool` : `getComputedStyle`, `getBoundingClientRect` (fonctions `typo`, `couleurs`, `sections`, `ecart`, `box` de `demontage.js`) | — |
| Shadow DOM (panneaux des tiroirs du thème) | `javascript_tool` : `__D.ombre('cart-drawer')` | la durée d'animation interne vient du code (§ 20.3) |
| Réseau | `read_network_requests` : l'appeler une fois, **puis recharger** ; filtrer par motif. Selon la version, il ne donne pas les tailles | tailles : `__D.perf()` (Resource Timing), HAR de Playwright, ou HAR exporté par l'utilisateur (Réseau > « Disable cache » > recharger > clic droit > « Save all as HAR ») |
| Console | `read_console_messages` avec le motif `error\|Error\|warn` : erreurs des applications (Kaching, Loox, Klaviyo) | — |
| Performance, Lighthouse | PSI (URL paramétrée), `PerformanceObserver` (LCP, CLS) dans `__D.perf()` | Lighthouse en ligne de commande depuis le Mac (§ 7, M13) |
| Application (cookies, stockage) | `__D.tiers()` : **noms** seulement | — |
| Rendering (mouvement réduit) | — | réglage macOS, Playwright `reducedMotion`, ou l'utilisateur (Cmd + Shift + P, « Show Rendering ») |
| Mode appareil | — | l'utilisateur (Cmd + Option + I, puis Cmd + Shift + M), ou Playwright |
| Coverage (JS et CSS inutilisés) | — | l'utilisateur (Cmd + Shift + P, « Show Coverage », recharger, lire les totaux), ou l'audit Lighthouse `unused-javascript` |
| Animations | `document.getAnimations()` (`__D.animations()`), `gif_creator` | mesure à la milliseconde : screencast CDP (méthode du § 20) |
| Capture pleine page | `computer` (capture pour lire) + `screencapture` (fichier, § 6.2) | l'utilisateur : Cmd + Shift + P, « Capture full size screenshot » |

**Garde-fous de `javascript_tool`.**
- Seuls sont permis : `querySelector*`, `getComputedStyle`, `getBoundingClientRect`, `performance.*`, `document.fonts`, `getAnimations`, `scrollTo` et `scrollBy`, et les `fetch` **GET** vers `/products/*.js`, `/cart.js`, `/search/suggest.json`.
- Tout le reste est interdit (§ 1.1). Les clics passent par `computer`, jamais par `el.click()`.

**Mode d'emploi concret.**
1. `Read` de `v3/outils/demontage.js`, puis `javascript_tool` avec tout son contenu : la réponse doit être « demontage.js chargé : … ».
2. `javascript_tool` → `__D.tout().then(r => (window.__R = r, Object.keys(r).join(',')))`.
   Si l'outil n'attend pas les promesses : lancer `__D.tout(); 'lancé'`, attendre 2 s, puis `Object.keys(window.__R || {})`.
3. Lecture par tranches : `__D.lire('sections')`, `__D.lire('typo', 0, 15000)`, `__D.lire('typo', 15000, 15000)`, et ainsi de suite. Recoller et écrire `v3/site/data/<P>-<L>-chrome.json` avec `Write`.
4. Refaire l'injection après chaque navigation : une nouvelle page efface `__D`.
5. Si Klaviyo ouvre sa popup pendant une action, la fermer d'abord par la croix.
6. Aucune boîte de dialogue JavaScript n'est attendue. Si l'une bloque l'extension, demander à l'utilisateur de la fermer.
7. Après 2 ou 3 échecs du même outil, s'arrêter et expliquer.

---

## 12. Livrables

### 12.1 Arborescence

```
build/analyse/soya-paris/v3/
  PROTOCOLE_DEMONTAGE.md        ce document
  local.md                      journal des sessions (heures, incidents, thème publié, décisions de l'utilisateur)
  outils/                       demontage.js, capture.mjs, glisser.mjs, assemble.py, couleurs_pixels.py,
                                har_resume.py, psi.sh, psi_resume.py, resume_json.py, package.json, .gitignore
  site/
    00_INDEX.md                 matrice de couverture et état
    P00_gabarit-commun.md … P37_fichiers-techniques.md, P40_… (un fichier par page)
    98_contre-verification.md
    99_synthese.md
    cap/<P>/<L>/…               captures (§ 6.3) ; cap/<P>/manifest.tsv ; cap/<P>/medias/
    data/<P>-<L>.json           mesures ; <P>-psi-mobile.json ; <P>-lh-fr-m-1.json ; P26-S<n>.json ; <P>-brut.html
    reseau/<P>-<L>.har (+ résumé .md)
    anim/<P>-<L>-anim-*.gif
    textes/<P>-<L>.txt, P32-<politique>.txt, P27-S<n>-<L>.txt
    telephone/
  exterieur/
    E01_meta.md … E09_reciblage.md, E99_synthese.md
    cap/ videos/ planches/ data/ (meta_liste.tsv, google_ads.tsv, serp.tsv, tiktok.tsv)
```

### 12.2 Squelette d'un fichier de page (à copier tel quel)

```
# P02 — Fiche produit « Oreiller Soya 3.0 »

| Champ | Valeur |
|---|---|
| URL | https://soya-paris.com/products/oreiller-soya-3-0 |
| Gabarit | product (id de gabarit relevé dans les id de section) |
| Niveau | N1 |
| Relevés | 0390 : <date heure UTC> moteur B ; 0768 : … ; 1024 : … ; 1440 : … moteur A |
| Conditions | IP FR ; profil « Enquête Soya » ; consentement : <refusé / accepté / aucun choix> ; devise ; thème publié ; fuseau Europe/Paris |
| Preuve de largeur | [390, 844, 3, true, false, "EUR", "V16 – …"] (une ligne par largeur) |
| Fichiers | cap/P02/ ; data/P02-*.json ; reseau/P02-*.har ; anim/P02-* ; textes/P02-*.txt |
| État | complet / partiel (liste de ce qui manque et pourquoi) |

## 1. En dix lignes
## 2. Structure — T1 (4 largeurs)
## 3. Premier écran — T2 ; repères de conversion — T2b
## 4. Disposition : grille, marges, alignements — T3
## 5. Carrousels — une fiche T4 par carrousel (CAR-P02-01 …)
## 6. Composants — C01 à C31 (T5)
## 7. Micro-textes — T6
## 8. Typographie — T7
## 9. Couleurs — T8
## 10. Images, icônes, photographie — T9, T9b
## 11. Espacements — T10
## 12. Mouvement — T11
## 13. États — T12
```
## 14. Performance — T13, T13b
## 15. Accessibilité — T14, T14b
## 16. SEO — T15
## 17. Persuasion — T16 (LEV-P02-01 …)
## 18. Traceurs et consentement — T17 (ou renvoi à P00 si identique)
## 19. Écarts avec le dossier v2 — T18
## 20. Verdicts Somnila — T19
## 21. Non vu, non testé, limites (avec la règle ou la cause)
## 22. Index des captures de la page (extrait du manifest.tsv)
```

### 12.3 `00_INDEX.md`, la matrice de couverture

Mise à jour à la fin de chaque page. Valeurs possibles : OK, partiel, non vu (raison), —.

| Page | 0390 | 0768 | 1024 | 1440 | PSI mobile / desktop | Lighthouse FR | HAR | Clavier | Carrousels | Persuasion | Nombre de verdicts | État | Commit |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P02 | OK | OK | OK | OK | OK / OK | OK ×3 | OK | OK | 6 | 14 leviers | 48 | complet | abc1234 |

Suivent un journal horodaté des sessions et la liste des décisions de l'utilisateur : profil « Réseaux », reciblage, téléphone.

### 12.4 `99_synthese.md`

1. **Design system reconstitué** : jetons mesurés aux 4 largeurs, face aux jetons déclarés (§ 3.2) ; échelle typographique ; palette avec les surfaces ; rayons ; ombres ; grammaire du mouvement.
2. **Inventaire des carrousels** : tous, sur une ligne chacun.
3. **Inventaire des leviers de persuasion** : tous, avec les résultats VRAI / FAUX / TROMPEUR / INVÉRIFIABLE.
4. **Parcours prix** : fiche → barre collante → panier → paiement → Google (JSON-LD, Shopping), scénario par scénario.
5. **Mobile face au desktop** : ce qui change, disparaît ou se déplace, largeur par largeur.
6. **Performance** : terrain et labo, poids réels.
7. **Les 30 verdicts Somnila les plus utiles**, classés par priorité, avec la transposition EN.
8. **Écarts avec le dossier v2** : corrections à reporter, avec les numéros de §.

### 12.5 `98_contre-verification.md`

C'est la méthode qui a fait la qualité du v2 (§ 14.1). Une seconde passe tire au hasard **30 lignes** dans les fichiers de page : au moins 10 dans P02 et 5 dans P26 et P27. Pour chacune, rouvrir la preuve brute (capture, JSON, HAR, texte) et remplir :

| # | Affirmation | Fichier rouvert | Résultat (confirmé / corrigé / non étayé) | Correction reportée où |
|---|---|---|---|---|

Si plus de 3 lignes sur 30 sont corrigées, tirer 30 lignes de plus.

---

## 13. Ordre de passage, durée, critères de fin

| Jour | Travail | Durée estimée |
|---|---|---|
| J1 | préparation (§ 2) ; P00 complet ; P02 complet aux 4 largeurs (C01 à C31) ; lancement quotidien de `outils/inv.py` | 7 à 8 h |
| J2 | P26 et P27 (scénarios S0 à S10) ; P03 ; P04 ; P05 ; P06 ; P01 | 7 à 8 h |
| J3 | P07 et P08 ; P09 à P20 en N2 (environ 30 min chacune après la capture automatique) ; P21 à P25 | 8 h |
| J4 | P28 à P37 ; P36 en N1 ; PSI et Lighthouse sur toutes les pages ; module téléphone (avec l'utilisateur, environ 40 min) | 6 à 7 h |
| J5 | extérieur, E01 à E08 ; E10 | 6 à 8 h |
| J6 | `99_synthese.md` ; contre-vérification ; relevé final de `inv.py` (7 jours) | 4 h |

Les captures automatiques de J3 et J4 peuvent tourner en tâche de fond pendant la rédaction de J2 (`capture.mjs` en série sur la liste P07 à P37).

**Une page est finie** quand ces six conditions sont réunies :
- ses 4 largeurs sont capturées (tranches, assemblage, JSON) ;
- toutes les sections du squelette sont remplies ou marquées « sans objet » ou « non vu (raison) » ;
- chaque texte visible est recopié à l'identique ;
- chaque levier de persuasion a un résultat de test ;
- chaque élément a un verdict ;
- l'index est à jour et la page est commitée.

**L'enquête est finie** quand l'index est entièrement « OK » ou justifié, E01 à E10 sont rédigés, et la contre-vérification est passée.

---

## Annexe A. `v3/outils/demontage.js` (relevé en lecture seule)

```js
/* build/analyse/soya-paris/v3/outils/demontage.js
   Relevé en LECTURE SEULE : aucune écriture dans la page, aucun envoi, aucune saisie.
   Seules requêtes émises : GET /products/<handle>.js et GET /cart.js.
   Claude in Chrome : javascript_tool avec tout le contenu du fichier. Playwright : page.evaluate(contenu).
   Usage : __D.tout().then(r => Object.keys(r)) ; puis __D.lire('sections', 0, 15000). */
(() => {
  const CM = 37.8, r1 = Math.round, cm = px => Math.round(px / CM * 100) / 100;
  const attendre = ms => new Promise(r => setTimeout(r, ms));
  const vis = el => { if (!el || !el.getBoundingClientRect) return false; const s = getComputedStyle(el), r = el.getBoundingClientRect();
    return s.display !== 'none' && s.visibility !== 'hidden' && parseFloat(s.opacity) > 0.01 && r.width > 0 && r.height > 0; };
  const box = el => { const r = el.getBoundingClientRect(), y = r.top + scrollY, x = r.left + scrollX;
    return { x: r1(x), y: r1(y), w: r1(r.width), h: r1(r.height), x_cm: cm(x), y_cm: cm(y), w_cm: cm(r.width), h_cm: cm(r.height),
      ecran: Math.round(y / innerHeight * 100) / 100, pli: y < innerHeight ? (y + r.height > innerHeight ? 'coupé' : 'au-dessus') : 'dessous' }; };
  const sel = el => { if (!el || !el.tagName) return ''; const t = el.tagName.toLowerCase(); if (el.id) return t + '#' + el.id;
    const c = typeof el.className === 'string' ? el.className.trim().split(/\s+/).filter(Boolean).slice(0, 2).join('.') : ''; return t + (c ? '.' + c : ''); };
  const chemin = el => { const p = []; while (el && el.tagName && el !== document.body && p.length < 4) { p.unshift(sel(el)); el = el.parentElement; } return p.join(' > '); };
  const txt = el => ((el && (el.innerText || el.textContent)) || '').replace(/\s+/g, ' ').trim();
  const section = el => ((el && el.closest && el.closest('.shopify-section')?.id) || '').replace('shopify-section-', '');
  const rgb = c => { const m = /rgba?\(([^)]+)\)/.exec(c || ''); if (!m) return null; const v = m[1].split(/[\s,\/]+/).filter(Boolean).map(parseFloat);
    return { r: v[0], g: v[1], b: v[2], a: v.length > 3 ? v[3] : 1 }; };
  const hex = c => { const p = rgb(c); if (!p) return c; return '#' + [p.r, p.g, p.b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase() + (p.a < 1 ? ` (${Math.round(p.a * 100)} %)` : ''); };
  const lum = p => { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(p.r) + 0.7152 * f(p.g) + 0.0722 * f(p.b); };
  const contraste = (a, b) => { const x = lum(a), y = lum(b); return Math.round((Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05) * 100) / 100; };
  const fondDe = el => { for (; el && el.nodeType === 1; el = el.parentElement) { const s = getComputedStyle(el), c = rgb(s.backgroundColor);
      if (s.backgroundImage && s.backgroundImage !== 'none') return null; if (c && c.a >= 0.5) return c; } return { r: 255, g: 255, b: 255, a: 1 }; };

  const conditions = () => ({ horodatage_utc: new Date().toISOString(), fuseau: Intl.DateTimeFormat().resolvedOptions().timeZone, url: location.href, titre: document.title,
    viewport: [innerWidth, innerHeight], fenetre: [outerWidth, outerHeight], dpr: devicePixelRatio, ua: navigator.userAgent,
    tactile: matchMedia('(pointer: coarse)').matches, survol: matchMedia('(hover: hover)').matches, mouvement_reduit: matchMedia('(prefers-reduced-motion: reduce)').matches,
    langue: document.documentElement.lang, devise: window.Shopify?.currency?.active ?? null, pays: window.Shopify?.country ?? null, locale: window.Shopify?.locale ?? null,
    theme: window.Shopify?.theme?.name ?? null, theme_id: window.Shopify?.theme?.id ?? null,
    hauteur_page: document.documentElement.scrollHeight, hauteur_page_cm: cm(document.documentElement.scrollHeight),
    ecrans: Math.round(document.documentElement.scrollHeight / innerHeight * 10) / 10, noeuds_dom: document.getElementsByTagName('*').length });

  const composants = () => { const m = {}; document.querySelectorAll('*').forEach(e => { const t = e.tagName.toLowerCase(); if (t.includes('-')) m[t] = (m[t] || 0) + 1; });
    return Object.entries(m).sort((a, b) => b[1] - a[1]); };

  const sections = () => [...document.querySelectorAll('.shopify-section')].filter(el => !el.parentElement.closest('.shopify-section')).map((el, i) => {
    const s = getComputedStyle(el), enf = el.firstElementChild, se = enf ? getComputedStyle(enf) : s;
    const g = [...el.querySelectorAll('*')].find(e => /grid/.test(getComputedStyle(e).display) && e.children.length > 1 && vis(e));
    const cont = el.querySelector('.container, [class*="container"], .page-width');
    return { n: i, id: el.id.replace('shopify-section-', ''), ...box(el), hauteur_ecrans: Math.round(el.getBoundingClientRect().height / innerHeight * 100) / 100,
      fond: hex(rgb(s.backgroundColor)?.a ? s.backgroundColor : se.backgroundColor), marges_internes: [s.paddingTop, s.paddingBottom, se.paddingTop, se.paddingBottom].join(' / '),
      conteneur: cont && vis(cont) ? { x: r1(cont.getBoundingClientRect().left), largeur: r1(cont.getBoundingClientRect().width) } : null,
      grille: g ? { el: sel(g), colonnes: getComputedStyle(g).gridTemplateColumns, ecart: getComputedStyle(g).columnGap + ' / ' + getComputedStyle(g).rowGap } : null,
      titre: txt(el.querySelector('h1, h2, h3, .h0, .h1, .h2, .h3')).slice(0, 100), visible: vis(el) }; });

  const calques = () => [...document.querySelectorAll('body *')].filter(e => { const p = getComputedStyle(e).position; return (p === 'fixed' || p === 'sticky') && vis(e); })
    .map(e => { const r = e.getBoundingClientRect(), lw = Math.max(0, Math.min(r.right, innerWidth) - Math.max(r.left, 0)), lh = Math.max(0, Math.min(r.bottom, innerHeight) - Math.max(r.top, 0));
      return { el: chemin(e), position: getComputedStyle(e).position, z: getComputedStyle(e).zIndex, x: r1(r.left), y_ecran: r1(r.top), w: r1(r.width), h: r1(r.height),
        part_ecran: Math.round(lw * lh / (innerWidth * innerHeight) * 1000) / 10 + ' %', texte: txt(e).slice(0, 200) }; });

  const carrousels = () => { const c = new Set(document.querySelectorAll('slideshow-carousel, media-carousel, product-gallery, scroll-carousel, effect-carousel, [class*="swiper"], [class*="slick"], [class*="splide"], [class*="flickity"], [class*="carousel"], [class*="slider"]'));
    document.querySelectorAll('body *').forEach(el => { const s = getComputedStyle(el); if (/(auto|scroll)/.test(s.overflowX) && el.scrollWidth > el.clientWidth + 5) c.add(el); });
    return [...c].filter(el => vis(el) && el.children.length > 1).map(el => { const s = getComputedStyle(el), r = el.getBoundingClientRect(), sec = el.closest('.shopify-section') || el.parentElement;
      const d = [...el.children].filter(k => k.getBoundingClientRect().width > 30);
      const dedans = k => { const q = k.getBoundingClientRect(); return q.left >= r.left - 1 && q.right <= r.right + 1; };
      const partiel = k => { const q = k.getBoundingClientRect(); return q.right > r.left + 1 && q.left < r.right - 1 && !dedans(k); };
      return { el: chemin(el), section: section(el), ...box(el), diapos: d.length, entieres_visibles: d.filter(dedans).length,
        partielles: d.filter(partiel).map(k => r1(Math.min(k.getBoundingClientRect().right, r.right) - Math.max(k.getBoundingClientRect().left, r.left)) + ' px'),
        largeur_diapo: d[0] ? r1(d[0].getBoundingClientRect().width) : null, ecart: d[1] ? r1(d[1].getBoundingClientRect().left - d[0].getBoundingClientRect().right) : null,
        defilement: s.overflowX, aimantation: s.scrollSnapType, autoplay: el.getAttribute('autoplay'), boucle: el.getAttribute('loop'), transition: el.getAttribute('transition'),
        fleches: [...sec.querySelectorAll('button, a')].filter(b => /(suiv|pr[ée]c|next|prev|arrow|fl[èe]che)/i.test((b.getAttribute('aria-label') || '') + ' ' + b.className + ' ' + (b.getAttribute('is') || ''))).length,
        points: sec.querySelectorAll('page-dots button, [class*="dots"] > *, [class*="pagination"] > *, [class*="bullet"]').length,
        diapos_contenu: d.map((k, i) => ({ n: i + 1, texte: txt(k).slice(0, 200), image: (k.querySelector('img')?.currentSrc || '').split('/').pop().split('?')[0] || null,
          alt: k.querySelector('img')?.getAttribute('alt') ?? null, video: !!k.querySelector('video'), lien: k.querySelector('a')?.getAttribute('href') || null, visible: dedans(k) })) }; }); };

  const suivre = (selecteur, duree = 20000, pas = 500) => new Promise(res => { const el = document.querySelector(selecteur), t0 = performance.now(), log = [];
    if (!el) return res('sélecteur introuvable');
    const id = setInterval(() => { const actif = [...el.children].findIndex(k => k.matches('[aria-current="true"], .is-selected, .is-active, [aria-hidden="false"]'));
      log.push({ t: r1(performance.now() - t0), scrollLeft: r1(el.scrollLeft), transform: getComputedStyle(el).transform, actif });
      if (performance.now() - t0 > duree) { clearInterval(id); res(log.filter((x, i, a) => i === 0 || x.scrollLeft !== a[i - 1].scrollLeft || x.transform !== a[i - 1].transform || x.actif !== a[i - 1].actif)); } }, pas); });

  const typo = () => { const vus = new Set(), textes = [], sig = {}, w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) { const n = w.currentNode, el = n.parentElement;
      if (!el || vus.has(el) || !n.textContent.trim() || el.closest('script, style, noscript, template') || !vis(el)) continue; vus.add(el);
      const s = getComputedStyle(el), fg = rgb(s.color), bg = fondDe(el), taille = parseFloat(s.fontSize), gras = parseInt(s.fontWeight) >= 700;
      const ratio = fg && bg ? contraste(fg, bg) : null, grand = taille >= 24 || (taille >= 18.66 && gras), police = s.fontFamily.split(',')[0].replace(/["']/g, '').trim();
      const k = `${police} ${s.fontSize}/${s.lineHeight} ${s.fontWeight} ${s.letterSpacing} ${s.textTransform} ${hex(s.color)}`; sig[k] = (sig[k] || 0) + 1;
      textes.push({ tag: el.tagName.toLowerCase(), cls: sel(el), section: section(el), texte: n.textContent.replace(/\s+/g, ' ').trim().slice(0, 140), police, taille: s.fontSize,
        graisse: s.fontWeight, interligne: s.lineHeight, approche: s.letterSpacing, casse: s.textTransform, style: s.fontStyle, couleur: hex(s.color),
        fond: bg ? hex(`rgb(${bg.r}, ${bg.g}, ${bg.b})`) : 'image', contraste: ratio, seuil_AA: grand ? 3 : 4.5, AA: ratio == null ? 'à vérifier (fond image)' : ratio >= (grand ? 3 : 4.5), ...box(el) }); }
    return { echelle: Object.entries(sig).sort((a, b) => b[1] - a[1]).map(([style, n]) => ({ style, n })), textes,
      polices_chargees: [...document.fonts].filter(f => f.status === 'loaded').map(f => `${f.family} ${f.weight} ${f.style}`),
      echecs_AA: textes.filter(t => t.AA === false).map(t => `${t.contraste}:1 | ${t.taille} ${t.graisse} | ${t.couleur} sur ${t.fond} | ${t.texte.slice(0, 60)}`) }; };

  const couleurs = () => { const m = {}; const aj = (c, role, p) => { if (!c || /rgba\(0, 0, 0, 0\)|transparent|none/.test(c)) return; const k = hex(c) + ' | ' + role; m[k] = (m[k] || 0) + p; };
    document.querySelectorAll('body *').forEach(el => { if (!vis(el)) return; const s = getComputedStyle(el), r = el.getBoundingClientRect();
      aj(s.backgroundColor, 'fond (px²)', r1(r.width * r.height));
      if ([...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) aj(s.color, 'texte', 1);
      if (parseFloat(s.borderTopWidth) > 0) aj(s.borderTopColor, 'bordure', 1);
      if (el instanceof SVGElement) aj(s.fill, 'svg', 1); });
    return Object.entries(m).sort((a, b) => b[1] - a[1]).map(([k, v]) => ({ couleur: k, poids: v })); };

  const images = () => { const rt = new Map(performance.getEntriesByType('resource').map(e => [e.name, e]));
    const abs = u => { try { return new URL(u, location.href).href; } catch { return u || ''; } };
    return [...document.querySelectorAll('img, video, svg image')].map(el => {
      const src = abs(el.currentSrc || el.src || el.getAttribute('href') || el.getAttribute('xlink:href') || el.poster || ''), e = rt.get(src), r = el.getBoundingClientRect();
      return { tag: el.tagName.toLowerCase(), fichier: src.split('/').pop().split('?')[0].slice(0, 120), src: src.slice(0, 300), alt: el.getAttribute('alt'),
        loading: el.getAttribute('loading'), priorite: el.getAttribute('fetchpriority'),
        naturel: el.naturalWidth ? `${el.naturalWidth}×${el.naturalHeight}` : el.videoWidth ? `${el.videoWidth}×${el.videoHeight}` : null, rendu: `${r1(r.width)}×${r1(r.height)}`,
        surdimension: el.naturalWidth && r.width ? Math.round(el.naturalWidth / (r.width * devicePixelRatio) * 10) / 10 : null,
        transfere_ko: e ? Math.round(e.transferSize / 1024) : null, decode_ko: e ? Math.round(e.decodedBodySize / 1024) : null, visible: vis(el), section: section(el), ...box(el) }; })
      .concat([...document.querySelectorAll('body *')].filter(el => getComputedStyle(el).backgroundImage.startsWith('url(') && vis(el))
        .map(el => ({ tag: 'fond-css', fichier: getComputedStyle(el).backgroundImage.slice(4, 200), section: section(el), ...box(el) }))); };

  const icones = () => { const m = {};
    document.querySelectorAll('svg').forEach(s => { if (!vis(s)) return; const r = s.getBoundingClientRect(); if (r.width > 64) return;
      const k = `svg ${r1(r.width)}×${r1(r.height)} trait ${getComputedStyle(s).strokeWidth} ${hex(getComputedStyle(s).color)}`; m[k] = (m[k] || 0) + 1; });
    document.querySelectorAll('img').forEach(i => { if (!vis(i)) return; const r = i.getBoundingClientRect(); if (r.width > 64) return;
      const k = `img ${r1(r.width)}×${r1(r.height)} ${(i.currentSrc || i.src).split('/').pop().split('?')[0]}`; m[k] = (m[k] || 0) + 1; });
    return { inventaire: Object.entries(m).sort((a, b) => b[1] - a[1]), emoji: [...new Set(document.body.innerText.match(/\p{Extended_Pictographic}|\p{Regional_Indicator}{2}/gu) || [])] }; };

  const animations = () => ({
    actives: document.getAnimations().map(a => { const t = a.effect?.getTiming?.() || {}; return { nom: a.animationName || a.transitionProperty || a.id || 'waapi', cible: chemin(a.effect?.target),
      duree: t.duration, delai: t.delay, courbe: t.easing, iterations: t.iterations, etat: a.playState }; }),
    keyframes: [...document.styleSheets].flatMap(ss => { try { return [...ss.cssRules].filter(r => r.type === 7).map(r => r.name); } catch { return ['(feuille tierce illisible) ' + (ss.href || '')]; } }),
    transitions: [...document.querySelectorAll('a, button, [role=button], summary, label, [class*="card"]')].filter(vis).map(el => { const s = getComputedStyle(el);
      return s.transitionDuration !== '0s' ? { el: chemin(el), prop: s.transitionProperty, duree: s.transitionDuration, courbe: s.transitionTimingFunction } : null; }).filter(Boolean).slice(0, 80),
    regles_mouvement_reduit: [...document.styleSheets].reduce((n, ss) => { try { return n + [...ss.cssRules].filter(r => r.media && /reduced-motion/.test(r.media.mediaText)).length; } catch { return n; } }, 0) });

  const microtextes = () => ({
    boutons: [...document.querySelectorAll('button, [role="button"], input[type="submit"], input[type="button"], a.button, .button')].filter(vis)
      .map(b => ({ texte: txt(b) || b.value || '', aria: b.getAttribute('aria-label'), title: b.title || null, section: section(b), ...box(b) })),
    liens: [...document.links].filter(vis).map(a => ({ texte: txt(a).slice(0, 80), href: a.getAttribute('href'), aria: a.getAttribute('aria-label'), section: section(a) })),
    etiquettes: [...document.querySelectorAll('label, legend, [class*="badge"], [class*="label"], [class*="tag"], [class*="pill"]')].filter(vis).map(e => ({ texte: txt(e).slice(0, 120), cls: sel(e), section: section(e) })),
    champs_lus: [...document.querySelectorAll('input:not([type="hidden"]), select, textarea')].map(i => ({ type: i.type, nom: i.name, indicatif: i.placeholder || null,
      label: i.labels?.[0] ? txt(i.labels[0]) : i.getAttribute('aria-label'), section: section(i) })),
    infobulles: [...document.querySelectorAll('[title], [data-tooltip]')].map(e => ({ el: sel(e), texte: e.title || e.dataset.tooltip })).slice(0, 100),
    chaines_du_theme: window.themeVariables?.strings || null });

  const seo = () => { const m = n => document.querySelector(`meta[name="${n}"], meta[property="${n}"]`)?.content ?? null;
    return { title: document.title, title_long: document.title.length, description: m('description'), description_long: (m('description') || '').length,
      canonical: document.querySelector('link[rel=canonical]')?.href ?? null, robots: m('robots'),
      hreflang: [...document.querySelectorAll('link[rel=alternate][hreflang]')].map(l => [l.hreflang, l.href]),
      og: Object.fromEntries([...document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]')].map(x => [x.getAttribute('property') || x.name, x.content])),
      plan: [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')].map(h => ({ niveau: h.tagName, texte: txt(h).slice(0, 120), visible: vis(h), taille: getComputedStyle(h).fontSize })),
      faux_titres: [...document.querySelectorAll('p.h0, p.h1, p.h2, p.h3, div.h1, div.h2, span.h1, span.h2')].map(h => ({ cls: h.className, texte: txt(h).slice(0, 100) })),
      jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => { try { return JSON.parse(s.textContent); } catch { return { illisible: s.textContent.slice(0, 200) }; } }),
      liens_internes: [...document.links].filter(a => a.host === location.host).length,
      domaines_lies: [...new Set([...document.links].filter(a => a.host && a.host !== location.host).map(a => a.host))], lang: document.documentElement.lang }; };

  const a11y = () => ({ viewport: document.querySelector('meta[name=viewport]')?.content,
    lien_evitement: !!document.querySelector('a[href="#main"], a[href="#MainContent"], [class*="skip"]'),
    img_sans_alt: [...document.images].filter(i => !i.hasAttribute('alt')).length, img_alt_vide: [...document.images].filter(i => i.getAttribute('alt') === '').length,
    alt_repetes: Object.entries([...document.images].reduce((m, i) => { if (i.alt) m[i.alt] = (m[i.alt] || 0) + 1; return m; }, {})).filter(([, n]) => n > 2),
    sans_nom: [...document.querySelectorAll('button, [role=button], a')].filter(b => vis(b) && !(b.getAttribute('aria-label') || txt(b) || b.title || b.querySelector('img[alt]:not([alt=""])'))).map(chemin).slice(0, 40),
    champs_sans_label: [...document.querySelectorAll('input:not([type=hidden]), select, textarea')].filter(i => vis(i) && !(i.labels?.length || i.getAttribute('aria-label') || i.getAttribute('aria-labelledby'))).map(chemin),
    cibles_petites: [...document.querySelectorAll('a, button, input, select, summary, [role=button]')].filter(vis)
      .map(el => ({ el: chemin(el), w: r1(el.getBoundingClientRect().width), h: r1(el.getBoundingClientRect().height) })).filter(t => t.w < 24 || t.h < 24).slice(0, 60),
    videos_sans_piste: [...document.querySelectorAll('video')].filter(v => !v.querySelector('track')).length, aria_live: document.querySelectorAll('[aria-live]').length,
    titres_sautes: (() => { let p = 0; const s = []; document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => { const n = +h.tagName[1]; if (p && n > p + 1) s.push(`h${p} → ${h.tagName} : ${txt(h).slice(0, 50)}`); p = n; }); return s; })() });

  const tiers = () => ({ domaines: [...new Set(performance.getEntriesByType('resource').map(e => new URL(e.name).host))].sort(),
    globales: ['fbq', 'ttq', 'snaptr', 'pintrk', 'gtag', 'dataLayer', 'klaviyo', '_learnq', 'TriplePixel', 'loox', 'Kaching', 'AfterSell', 'Shopify'].filter(k => k in window),
    cookies_noms: document.cookie.split(';').map(c => c.split('=')[0].trim()).filter(Boolean),
    stockage_cles: (() => { try { return Object.keys(localStorage); } catch { return 'illisible'; } })() });

  const perf = async () => { const nav = performance.getEntriesByType('navigation')[0], res = performance.getEntriesByType('resource'), par = {};
    res.forEach(e => { const k = new URL(e.name).host + ' | ' + e.initiatorType; par[k] = par[k] || { n: 0, transfere_ko: 0, decode_ko: 0, zero: 0 };
      par[k].n++; par[k].transfere_ko += e.transferSize / 1024; par[k].decode_ko += e.decodedBodySize / 1024; if (!e.transferSize) par[k].zero++; });
    Object.values(par).forEach(v => { v.transfere_ko = r1(v.transfere_ko); v.decode_ko = r1(v.decode_ko); });
    let lcp = null, cls = 0;
    new PerformanceObserver(l => { const e = l.getEntries().pop(); if (e) lcp = { t: r1(e.startTime), el: chemin(e.element), url: e.url, taille: e.size }; }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver(l => l.getEntries().forEach(e => { if (!e.hadRecentInput) cls += e.value; })).observe({ type: 'layout-shift', buffered: true });
    await attendre(500);
    return { navigation: nav && { ttfb: r1(nav.responseStart), dcl: r1(nav.domContentLoadedEventEnd), load: r1(nav.loadEventEnd), html_transfere: nav.transferSize, html_decode: nav.decodedBodySize },
      requetes: res.length, transfere_Mo: +(res.reduce((s, e) => s + e.transferSize, 0) / 1e6).toFixed(2), decode_Mo: +(res.reduce((s, e) => s + e.decodedBodySize, 0) / 1e6).toFixed(2),
      par_domaine_type: par, lcp, cls: +cls.toFixed(3), scripts: document.scripts.length, scripts_externes: [...document.scripts].filter(s => s.src).length, feuilles: document.styleSheets.length }; };

  const pdp = async () => { const h = (location.pathname.split('/products/')[1] || '').split(/[/?#]/)[0]; if (!h) return null;
    let p; try { p = await (await fetch(`/products/${h}.js`, { credentials: 'omit' })).json(); } catch (e) { p = { erreur: String(e) }; }
    const accordeons = [...document.querySelectorAll('details, [aria-expanded][aria-controls]')].filter(d => !d.closest('header, footer')).map(d => {
      const pan = d.tagName === 'DETAILS' ? d : document.getElementById(d.getAttribute('aria-controls'));
      return { titre: txt(d.tagName === 'DETAILS' ? d.querySelector('summary') : d).slice(0, 120), ouvert: d.open ?? d.getAttribute('aria-expanded'), section: section(d),
        texte_integral: (pan?.textContent || '').replace(/\s+/g, ' ').trim() }; });
    const col = document.querySelector('product-quick-add, .product-quick-add, [class*="sticky-add"], [class*="sticky-atc"]');
    return { handle: h,
      produit: p && !p.erreur ? { titre: p.title, prix: p.price / 100, barre: p.compare_at_price ? p.compare_at_price / 100 : null, vendeur: p.vendor, type: p.type, etiquettes: p.tags,
        variantes: p.variants.map(v => ({ id: v.id, titre: v.title, prix: v.price / 100, barre: v.compare_at_price ? v.compare_at_price / 100 : null, dispo: v.available, sku: v.sku, media: v.featured_media?.position ?? null })),
        medias: p.media.map(m => ({ pos: m.position, type: m.media_type, alt: m.alt, fichier: (m.src || m.preview_image?.src || '').split('/').pop().split('?')[0], l: m.width, h: m.height })) } : p,
      medias_dans_le_dom: document.querySelectorAll('[data-media-id]').length,
      scripts_apps: [...document.scripts].filter(s => /kaching|countdown|essential|loox|starapps|klaviyo/i.test(`${s.id} ${s.className} ${s.src} ${s.src ? '' : s.textContent.slice(0, 300)}`))
        .map(s => ({ id: s.id || null, cls: s.className || null, src: s.src || null, debut: s.src ? null : s.textContent.slice(0, 800) })),
      compteur: window.essentialCountdownTimerConfigs ?? null, accordeons,
      barre_collante: col ? { ...box(col), visible: vis(col), texte: txt(col) } : null,
      videos: [...document.querySelectorAll('video')].map(v => ({ src: (v.currentSrc || v.src || v.querySelector('source')?.src || '').split('?')[0], poster: !!v.poster, preload: v.preload,
        autoplay: v.autoplay, muet: v.muted, boucle: v.loop, joue: !v.paused, duree: v.duration || null, lu_jusqu_a: v.currentTime,
        hevc: v.canPlayType('video/mp4; codecs="hvc1"'), section: section(v), ...box(v) })) }; };

  const panier = async () => { const c = await (await fetch('/cart.js', { headers: { Accept: 'application/json' } })).json();
    return { devise: c.currency, articles: c.item_count, total: c.total_price / 100, avant_remises: c.original_total_price / 100, remise_totale: c.total_discount / 100,
      remises_panier: c.cart_level_discount_applications, lignes: c.items.map(i => ({ titre: i.product_title, variante: i.variant_title, qte: i.quantity,
        prix_unitaire: i.price / 100, prix_origine: i.original_price / 100, prix_final: i.final_price / 100, total_ligne: i.final_line_price / 100, remises: i.discounts, proprietes: i.properties, sku: i.sku })) }; };

  const ecart = (a, b) => { const A = document.querySelector(a)?.getBoundingClientRect(), B = document.querySelector(b)?.getBoundingClientRect();
    return A && B ? { vertical: r1(B.top - A.bottom), horizontal: r1(B.left - A.right) } : 'sélecteur introuvable'; };
  const focus = () => { const e = document.activeElement, s = getComputedStyle(e);
    return { el: chemin(e), nom: (e.getAttribute('aria-label') || txt(e)).slice(0, 80), ...box(e), contour: `${s.outlineStyle} ${s.outlineWidth} ${hex(s.outlineColor)}`, ombre: s.boxShadow }; };
  const ombre = s => document.querySelector(s)?.shadowRoot?.innerHTML.slice(0, 5000) ?? 'pas de shadowRoot';
  const tranches = (recouvrement = 80) => { const H = document.documentElement.scrollHeight, h = innerHeight, t = [];
    for (let y = 0; y < H - h; y += h - recouvrement) t.push(y); t.push(Math.max(0, H - h)); return [...new Set(t)]; };
  const prechauffe = async (pas = 400, delai = 300) => { for (let y = 0; y < document.documentElement.scrollHeight; y += pas) { scrollTo(0, y); await attendre(delai); }
    await attendre(1000); scrollTo(0, 0); return document.documentElement.scrollHeight; };

  const tout = async () => { const r = {};
    for (const [k, f] of Object.entries({ conditions, composants, sections, calques, carrousels, typo, couleurs, images, icones, animations, microtextes, seo, a11y, tiers })) {
      try { r[k] = f(); } catch (e) { r[k] = { erreur: String(e) }; } }
    for (const [k, f] of Object.entries({ perf, pdp })) { try { r[k] = await f(); } catch (e) { r[k] = { erreur: String(e) }; } }
    window.__R = r; return r; };
  const lire = (cle, debut = 0, n = 15000) => JSON.stringify(cle ? window.__R?.[cle] : window.__R).slice(debut, debut + n);

  window.__D = { conditions, composants, sections, calques, carrousels, suivre, typo, couleurs, images, icones, animations, microtextes, seo, a11y, tiers,
    perf, pdp, panier, ecart, focus, ombre, tranches, prechauffe, tout, lire };
  return 'demontage.js chargé : ' + Object.keys(window.__D).join(', ');
})();
```

## Annexe A2. `v3/outils/resume_json.py` (tableaux T1, T4, T7 et contrastes à partir des JSON)

```python
# usage (depuis la racine du dépôt) : python3 build/analyse/soya-paris/v3/outils/resume_json.py P02
import sys, json, pathlib
ID = sys.argv[1]; D = pathlib.Path('build/analyse/soya-paris/v3/site/data')
L = [l for l in ('0390', '0768', '1024', '1440') if (D / f'{ID}-{l}.json').exists()]
R = {l: json.load(open(D / f'{ID}-{l}.json'))['mesures'] for l in L}
for l in L:
    c = R[l]['conditions']
    print(f"{l} : fenêtre {c['viewport']} dpr {c['dpr']} | page {c['hauteur_page']} px ({c['hauteur_page_cm']} cm, {c['ecrans']} écrans) | {c['devise']} | {c['theme']}")
print('\n## T1 Structure\n\n| # | Section | ' + ' | '.join(f'{l} y / h (cm) écran' for l in L) + ' | Fond |\n|' + '---|' * (len(L) + 3))
ids = []
for l in L:
    for s in R[l]['sections']:
        if s['id'] not in ids: ids.append(s['id'])
for i, sid in enumerate(ids):
    cel = []
    for l in L:
        s = next((s for s in R[l]['sections'] if s['id'] == sid), None)
        cel.append(f"{s['y']} / {s['h']} ({s['y_cm']} / {s['h_cm']}) é{s['ecran']}" if s and s['h'] else '—')
    fond = next((s['fond'] for s in R[L[-1]]['sections'] if s['id'] == sid), '')
    print(f'| {i} | {sid[-45:]} | ' + ' | '.join(cel) + f' | {fond} |')
print('\n## T4 Carrousels détectés')
for l in L:
    for c in R[l]['carrousels']:
        print(f"- {l} | {c['section'][-30:]} | {c['el'][-60:]} | {c['diapos']} diapos, {c['entieres_visibles']} entières, partielles {c['partielles']} | "
              f"{c['largeur_diapo']} px, écart {c['ecart']} | {c['defilement']} {c['aimantation']} | autoplay {c['autoplay']} | flèches {c['fleches']}, points {c['points']}")
for l in (L[-1], L[0]):
    print(f'\n## T7 Échelle typographique {l}\n\n| Style | n |\n|---|---|')
    for e in R[l]['typo']['echelle'][:30]: print(f"| {e['style']} | {e['n']} |")
for l in L:
    print(f'\n## Échecs de contraste AA {l}'); [print('-', x) for x in R[l]['typo']['echecs_AA'][:60]]
```

## Annexe B. `v3/outils/capture.mjs` (4 largeurs, tranches, mesures, HAR)

```js
// usage : node build/analyse/soya-paris/v3/outils/capture.mjs P02 https://soya-paris.com/products/oreiller-soya-3-0 [0390,0768,1024,1440]
// TRACEURS=1 : ne bloque pas les pixels publicitaires (modules M13 et M17). VIDEO=1 : enregistre une vidéo de la session.
import { chromium, devices } from 'playwright';
import fs from 'node:fs/promises';
const [, , ID, URL_, SEULES] = process.argv;
const RACINE = 'build/analyse/soya-paris/v3';
const LARGEURS = {
  '0390': { ...devices['iPhone 13'] },   // 390 × 844, dpr 3, tactile, agent utilisateur iOS
  '0768': { ...devices['iPad Mini'] },   // 768 × 1024, tactile
  '1024': { viewport: { width: 1024, height: 768 } },
  '1440': { viewport: { width: 1440, height: 900 } },
};
const PIXELS = /facebook\.com\/tr|connect\.facebook\.net|analytics\.tiktok\.com|sc-static\.net|tr\.snapchat\.com|ct\.pinterest\.com|s\.pinimg\.com\/ct|googleadservices\.com|doubleclick\.net|google-analytics\.com|triplewhale|triplepixel/;
const demontage = await fs.readFile(`${RACINE}/outils/demontage.js`, 'utf8');
const nav = await chromium.launch({ channel: 'chrome', headless: false });
for (const [L, opts] of Object.entries(LARGEURS)) {
  if (SEULES && !SEULES.split(',').includes(L)) continue;
  const dir = `${RACINE}/site/cap/${ID}/${L}`;
  for (const d of [dir, `${RACINE}/site/data`, `${RACINE}/site/reseau`, `${RACINE}/site/anim`]) await fs.mkdir(d, { recursive: true });
  const ctx = await nav.newContext({ ...opts, locale: 'fr-FR', timezoneId: 'Europe/Paris',
    recordHar: { path: `${RACINE}/site/reseau/${ID}-${L}.har`, content: 'omit' },
    ...(process.env.VIDEO ? { recordVideo: { dir: `${RACINE}/site/anim`, size: opts.viewport } } : {}) });
  if (!process.env.TRACEURS) await ctx.route(PIXELS, r => r.abort());
  const page = await ctx.newPage(), manifeste = [];
  const cliche = async (nom, desc) => { const f = `${ID}-${L}-${nom}.jpg`;
    await page.screenshot({ path: `${dir}/${f}`, type: 'jpeg', quality: 85 });
    manifeste.push([f, ID, L, nom, await page.evaluate(() => Math.round(scrollY)), new Date().toISOString(), desc].join('\t')); };
  await page.goto(URL_, { waitUntil: 'load', timeout: 120000 });
  await cliche('ecran0-t00', 'premier écran, événement load');
  await page.waitForTimeout(6500); await cliche('ecran0-t065', 'premier écran à 6,5 s');
  await page.waitForTimeout(8500); await cliche('ecran0-t15', 'premier écran à 15 s (popups)');
  await page.evaluate(demontage);
  const calques_t15 = await page.evaluate(() => __D.calques());
  for (const s of ['button.klaviyo-close-form', '[aria-label="Close dialog"]', '[aria-label="Fermer"]', '[aria-label="Fermer la fenêtre"]']) {
    const b = page.locator(s).first(); if (await b.isVisible().catch(() => false)) await b.click().catch(() => {}); }
  await page.evaluate(() => __D.prechauffe());
  const positions = await page.evaluate(() => __D.tranches(80));
  for (const [i, y] of positions.entries()) {
    await page.evaluate(y => scrollTo(0, y), y); await page.waitForTimeout(900);
    await cliche(`tr-${String(i).padStart(2, '0')}`, `tranche y=${y}`); }
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(500);
  const mesures = await page.evaluate(() => __D.tout());
  await fs.writeFile(`${RACINE}/site/data/${ID}-${L}.json`, JSON.stringify({ calques_t15, mesures }, null, 1));
  await page.screenshot({ path: `${dir}/${ID}-${L}-pleinepage-pw.jpg`, fullPage: true, type: 'jpeg', quality: 80 }).catch(e => console.log('pleine page impossible :', e.message));
  await fs.appendFile(`${RACINE}/site/cap/${ID}/manifest.tsv`, manifeste.join('\n') + '\n');
  await ctx.close();
  console.log(ID, L, positions.length, 'tranches');
}
await nav.close();
```

Avec les pixels bloqués, le HAR sous-estime le poids réel. Pour M13, relancer la mesure avec `TRACEURS=1`, en 390 et 1440.

### B2. `v3/outils/glisser.mjs` (glisser au doigt, 390 × 844)

```js
// usage : SORTIE=build/analyse/soya-paris/v3/site/cap/P02/0390 node glisser.mjs <url> "<sélecteur du carrousel>" 3
import { chromium, devices } from 'playwright';
const [, , URL_, SEL, N = 3] = process.argv, OUT = process.env.SORTIE || '.';
const b = await chromium.launch({ channel: 'chrome', headless: false });
const ctx = await b.newContext({ ...devices['iPhone 13'], locale: 'fr-FR', timezoneId: 'Europe/Paris' });
const page = await ctx.newPage(); await page.goto(URL_, { waitUntil: 'load' }); await page.waitForTimeout(3000);
const el = page.locator(SEL).first(); await el.scrollIntoViewIfNeeded(); const r = await el.boundingBox();
const cdp = await ctx.newCDPSession(page), y = r.y + r.height / 2, x1 = r.x + r.width * 0.85, x2 = r.x + r.width * 0.15;
const etat = () => el.evaluate(e => ({ scrollLeft: Math.round(e.scrollLeft), transform: getComputedStyle(e).transform, fenetreY: Math.round(scrollY) }));
for (let i = 0; i < +N; i++) {
  const avant = await etat();
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: x1, y }] });
  for (let k = 1; k <= 10; k++) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x1 + (x2 - x1) * k / 10, y }] }); await page.waitForTimeout(16); }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT}/glisser-${i + 1}.jpg`, type: 'jpeg' });
  console.log(i + 1, avant, '->', await etat());   // si fenetreY bouge, le glisser horizontal fait aussi défiler la page
}
await b.close();
```

## Annexe C. Assemblage et couleurs au pixel

`v3/outils/assemble.py`
```python
# usage : python3 build/analyse/soya-paris/v3/outils/assemble.py build/analyse/soya-paris/v3/site/cap/P02 0390
import sys, csv, pathlib
from PIL import Image
Image.MAX_IMAGE_PIXELS = None
d, L = pathlib.Path(sys.argv[1]), sys.argv[2]
rows = [r for r in csv.reader(open(d / 'manifest.tsv'), delimiter='\t') if len(r) > 4 and r[2] == L and r[3].startswith('tr-')]
rows = sorted({r[3]: r for r in rows}.values(), key=lambda r: int(r[3][3:]))   # garde la dernière passe
imgs = [(int(r[4]), Image.open(d / L / r[0])) for r in rows]
dpr = imgs[0][1].width / int(L)
H = int(imgs[-1][0] * dpr) + imgs[-1][1].height
out = Image.new('RGB', (imgs[0][1].width, H), 'white')
for y, im in imgs: out.paste(im, (0, int(y * dpr)))      # la tranche suivante recouvre les 80 px de la précédente
ext = 'jpg' if H < 65000 else 'png'
out.save(d / L / f'{d.name}-{L}-assemblee.{ext}', **({'quality': 85} if ext == 'jpg' else {}))
print(out.size, 'dpr', dpr)
```

`v3/outils/couleurs_pixels.py` (parts de surface ; valeurs arrondies à 6 près, le hex exact se lit dans les styles calculés)
```python
import sys; from PIL import Image; from collections import Counter
Image.MAX_IMAGE_PIXELS = None
im = Image.open(sys.argv[1]).convert('RGB'); im.thumbnail((600, 30000))
c = Counter((r // 6 * 6, g // 6 * 6, b // 6 * 6) for r, g, b in im.getdata()); tot = sum(c.values())
for (r, g, b), n in c.most_common(20): print(f'#{r:02X}{g:02X}{b:02X}  {n / tot * 100:.1f} %')
```

## Annexe D. `v3/outils/har_resume.py`

```python
# usage : python3 build/analyse/soya-paris/v3/outils/har_resume.py build/analyse/soya-paris/v3/site/reseau/P02-0390.har
import sys, json, collections, urllib.parse
E = json.load(open(sys.argv[1]))['log']['entries']
dom, typ, gros, tot = collections.Counter(), collections.Counter(), [], 0
for e in E:
    r = e['response']; t = r.get('_transferSize') or max(r.get('bodySize', 0), 0) + max(r.get('headersSize', 0), 0)
    d = urllib.parse.urlparse(e['request']['url']).netloc; m = (r.get('content', {}).get('mimeType') or '?').split(';')[0]
    dom[d] += t; typ[m] += t; tot += t; gros.append((t, e['request']['url'][:140]))
print(f'requêtes : {len(E)} | transféré : {tot / 1e6:.2f} Mo')
print('\n| Domaine | Ko |\n|---|---|'); [print(f'| {d} | {v / 1024:.0f} |') for d, v in dom.most_common(25)]
print('\n| Type | Ko |\n|---|---|'); [print(f'| {d} | {v / 1024:.0f} |') for d, v in typ.most_common(15)]
print('\n| 20 ressources les plus lourdes | Ko |\n|---|---|'); [print(f'| {u} | {t / 1024:.0f} |') for t, u in sorted(gros, reverse=True)[:20]]
```

## Annexe E. PageSpeed Insights

`v3/outils/psi.sh`
```bash
#!/bin/bash
# usage : bash build/analyse/soya-paris/v3/outils/psi.sh P02 https://soya-paris.com/products/oreiller-soya-3-0
# API publique sans clé. Si elle répond 429 : attendre, ou passer par https://pagespeed.web.dev/report?url=<URL encodée>&form_factor=mobile
ID=$1; URL=$2; OUT=build/analyse/soya-paris/v3/site/data; mkdir -p "$OUT"
ENC=$(python3 -c 'import sys, urllib.parse; print(urllib.parse.quote(sys.argv[1], safe=""))' "$URL")
for S in mobile desktop; do
  curl -s "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=$ENC&strategy=$S&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO&locale=fr" -o "$OUT/$ID-psi-$S.json"
  python3 build/analyse/soya-paris/v3/outils/psi_resume.py "$OUT/$ID-psi-$S.json"
  sleep 20
done
```

`v3/outils/psi_resume.py`
```python
import sys, json, base64, pathlib
p = pathlib.Path(sys.argv[1]); j = json.load(open(p))
if 'error' in j: sys.exit(f"erreur PSI : {j['error'].get('message')}")
L = j['lighthouseResult']; a = L['audits']; c = L['categories']
v = lambda k: a.get(k, {}).get('numericValue') or 0
s = lambda k: round((c.get(k, {}).get('score') or 0) * 100)
print(f"| {p.stem} | perf {s('performance')} | a11y {s('accessibility')} | BP {s('best-practices')} | SEO {s('seo')} | FCP {v('first-contentful-paint') / 1000:.1f} s | "
      f"LCP {v('largest-contentful-paint') / 1000:.1f} s | TBT {v('total-blocking-time'):.0f} ms | CLS {v('cumulative-layout-shift'):.3f} | SI {v('speed-index') / 1000:.1f} s | "
      f"poids {v('total-byte-weight') / 1e6:.2f} Mo | DOM {v('dom-size'):.0f} |")
for nom, b in (('terrain URL', j.get('loadingExperience', {})), ('terrain origine', j.get('originLoadingExperience', {}))):
    m = b.get('metrics', {})
    print(nom, ':', b.get('overall_category'), {k: x.get('percentile') for k, x in m.items()} if m else 'pas de données CrUX')
shot = a.get('final-screenshot', {}).get('details', {}).get('data', '')
if shot:
    (p.parent / f'{p.stem}-ecran.jpg').write_bytes(base64.b64decode(shot.split(',', 1)[1]))
    print('capture PSI :', f'{p.stem}-ecran.jpg', '(vérifier la devise : EUR ou USD)')
```

---

## Annexe F. Valeurs de référence du dossier, à vérifier (T18)

Unités : px CSS (cm entre parenthèses quand le dossier les donne). D = desktop 1440 × 900 ; M = mobile 390 × 844.

**Commun (annexe A.1, annexe C, § 3, § 9.1)**

| Mesure | D | M |
|---|---|---|
| bandeau | 58 (1,53) | 50 (1,32) |
| en-tête | 115 (3,04) | 51 (1,35) |
| bandeau + en-tête | 19,2 % du premier écran | 12 % |
| logo, boîte | 120 × 32 | 100 × 27 |
| réassurance | 168 (histoire : 264) | 152 |
| pied de page | 541 | 995 |

Autres points communs :
- menu de 6 libellés sur 2 lignes en D (lignes vers y 88-102 et 130-141) ;
- zones de toucher d'environ 42 × 42 en M ;
- en-tête non collant.

**Accueil P01 (§ 5)**

| Section | D : y / h | M : y / h |
|---|---|---|
| héros | 174 / 810 (bouton dessiné 243 × 63, y 875-937) | 101 / 550 |
| presse | 984 / 240 | 651 / 136 |
| bloc 3.0 | 1 224 / 774 | 787 / 842 |
| bloc 2.0 | 1 998 / 704 | 1 628 / 796 |
| best sellers | 2 702 / 818 (cartes 432 × 432, 14 produits, sans le 3.0 ; 2.0 à 119,90 €) | 2 424 / 553 (carte de 289, plus 61 px de la suivante) |
| statistiques | 3 520 / 501 | 2 977 / 666 |
| réassurance | 4 021 / 168 | 3 643 / 152 |
| pied de page | 4 189 / 541 | 3 795 / 995 |
| **longueur** | **4 730** | **4 790** |

**Fiche 3.0, P02 (§ 6.1 à § 6.8)**

| Élément | D | M |
|---|---|---|
| miniatures (taille, pas) | 64 × 70, pas 80, 12 visibles, x 48 | 56 × 62, pas 64 |
| image principale | 666 × 666, x 160-826, y 222-888 | 390 × 390, y 101-491 |
| note | y 225 | y 596 |
| surtitre | y 252-297 | 620-665 |
| H1 | y 313-351, 32/500 | 673-699, 22 px |
| puces | y 375-507 | le pli à 844 coupe la 3e |
| bulles stories | y 539-657, 78 px | 948-1 066 |
| filet promo | y 706-726 | 1 106 |
| offre 1x | 735 → 934, prix à y 758 | 1 136-1 369, prix 1 159-1 191 |
| housse cochée | 884-934 | 1 307-1 390 |
| Duo | 944-1 133 | 1 379-1 568 |
| Famille | 1 143-1 332 | 1 578-1 767 |
| bouton d'achat | 1 347-1 407, 518 × 60 (447 px sous le pli) | 1 782-1 836, 350 × 54 |
| stock | 1 439 | 1 861 |
| essai | 1 465 | 1 887 |
| paiement | 1 501-1 539 | 1 923-1 948 |
| encadré French Days | titre 1 585, barre 1 688 (492 × 22) | titre 2 028, barre 2 151 |
| description | 1 816-2 461 | 2 279-3 171 |
| Dr. Marc | 2 576 | 3 321 |
| accordéons | 2 671-3 003 (66 chacun) | 3 412-3 736 (64 chacun) |
| compléments | dès 3 028 | 3 761 |
| barre collante | 560 × 114, x 864, à 16 px du bas ; masquée à scrollY 1 200, visible à 1 500 ; €139,90 | 390 × 88 dès scrollY 2 100, sans prix |
| sections (§ 6.8) | tuiles 3 373 ; avant/après 4 059 (896 × 569) ; presse 5 206 ; 3.0 5 446 ; vidéo 6 298 ; témoignages 6 798 ; statistiques 7 583 ; FAQ 8 085 ; 2.0 9 230 ; associés 9 934 ; Loox 10 752 / 6 335 ; réassurance 17 087 ; pied 17 255 | tuiles 4 099 ; … ; Loox 10 820 / 7 211 ; réassurance 18 031 ; pied 18 184 |
| **longueur** | **17 796** | **19 179** |
| colonne de galerie vide | d'environ 905 à 3 373 | — |

**Autres pages (annexe C)**

| Page | D | M |
|---|---|---|
| collection | bannière 174 / 960 ; grille dès 2 612 (1er visuel 2 660) ; cartes 318, pas 472 ; longueur 5 806 | bannière 101 / 260 ; grille 1 998 (1er visuel 2 077) ; cartes 171, écart 8 ; longueur 6 026 |
| enfant | image 601 × 606 ; Kaching 547-949 ; bouton 959-1 019 ; longueur 11 168 | H1 654 ; bouton 1 398-1 452 |
| soie | bouton 703-763 ; longueur 10 786 | — |
| 1.0 | bouton 496-556 ; longueur 10 604 | bouton 812-866 |
| couette | — | bouton 1 031-1 085 ; longueur 12 424 |

Longueurs D des pages éditoriales : histoire 6 680 ; blog 1 347 ; contact 1 532.

**Popups (§ 4.3 bis, § 9.3, § 20)**
- Klaviyo : environ 950 × 580 en D (en bas à droite), 390 × 477 en M ; environ 13,5 s après le chargement.
- Kaching : 400 × environ 746, coins de 30, voile noir à 70 % ; environ 475 ms après le clic.

**Prix, en EUR (§ 6.5, § 7)**

| Produit | Prix |
|---|---|
| 3.0 | 69,90 / 98,90 / 139,90 € (barrés 139,90 / 279,80 / 559,60 €) ; housse en ajout 14,90 € (39,90 €), seule 17,90 € ; paniers par défaut 84,80 / 128,70 / 169,70 € |
| 2.0 | 59,90 / 89,90 / 129,90 € |
| enfant | 49,90 € (99,90 €) ; Duo 89,90 € ; housse 14,90 € (29,90 €) |
| lombaire | 19,90 € par la popup, 49,90 € en direct |
| 1.0 | 34,90 € (49,90 €) |
| soie | 49,90 € (59,90 €) |
| couette | 79,90 / 89,90 / 99,90 € |

Autres repères :
- compte à rebours : fin à 23:59 heure de Paris ;
- « 89 % » (3.0) et « 78 % » (2.0) ;
- « Noté 4,8/5 – 15 637 » face au Loox du produit (4,3 / 339) et au Loox de la boutique (4,6 / 1 775).

**Technique (§ 10.2, § 10.3)**
- Accueil M : 3,56 Mo transférés, 306 requêtes GET.
- Fiche 3.0 M : 27,48 Mo sans défilement, 386 requêtes GET ; 28,31 Mo et 407 après défilement.
- LCP non bridé : 984 ms (accueil) et 828 ms (fiche).
- Nœuds DOM en D : 1 772 (accueil), 2 918 (fiche).
- Titres : accueil « SOYA Paris - Confort & Bien-être pour un Sommeil Réparateur » ; fiche « Oreiller Soya 3.0 ».
- 27 hreflang.
- JSON-LD : ProductGroup à 139,90 €, `aggregateRating` 4,3 / 339.

---

## Annexe G. Grille de décision Somnila

**Les quatre filtres** (voir `build/BRAND_BOOK.md`, § 16.12 et § 20.4) :
- **F1, langue et marché** : l'élément se transpose-t-il en anglais, pour les États-Unis ? Prix « $69.90 », pouces et cm, conventions et droit américains : FTC Act section 5, règle de 2024 sur les faux avis et témoignages (16 CFR 465), guides sur les prix de référence (16 CFR 233), guide 2022 sur les produits de santé.
- **F2, pas de visage** : mains, objets, chambre, silhouettes de dos, voix off. Pas de visage identifiable, ni de fondateur ni de client.
- **F3, pas d'allégation médicale** : ni « soulage », ni « douleurs », ni « orthopédique », ni « apnée », ni « ronflements », ni « recommandé par des praticiens », ni « dès la première nuit ». On parle confort, tenue, mesures.
- **F4, données réelles uniquement** : chaque chiffre a une source vérifiable (stock réel, vraie note, vrais avis, vraie date de fin, prix de référence réellement pratiqué).

**Règle de verdict.**
- **Copie** : le mécanisme passe les 4 filtres sans changement.
- **Adapte** : le mécanisme est sain, mais son contenu échoue à au moins un filtre et peut être réécrit.
- **Évite** : le mécanisme dépend de données fausses ou d'une pression artificielle. Il échoue à F4 par nature, ou c'est un procédé trompeur : urgence fausse, rareté fausse, pré-cochage, refus culpabilisant, interruption forcée.

Toujours écrire la **raison** : quels filtres, et l'efficacité observée.

**Exemples d'étalonnage, tirés du dossier :**

| Élément Soya | Verdict | Raison | Transposition Somnila |
|---|---|---|---|
| Grammaire de mouvement du thème : 150 / 200 / 300-350 ms, `ease`, décalage de 50 ms, mouvement réduit respecté | Copie | sobre, rapide, passe les 4 filtres | déjà appliquée dans le thème v7 |
| Bouton d'achat pleine largeur de 60 px, retour visuel au clic | Copie | clair, sans pression | — |
| Cartes de quantité à badge (Kaching) | Adapte | lisible, mais barré inventé, économie trompeuse, pré-cochage (F4) | « Duo — $129.80 · save $10 vs two singles », rien de coché |
| Barre d'achat collante | Adapte | utile, mais un autre prix que le bloc d'achat (F4) | même prix, même offre que le bloc |
| Stories vidéo face caméra | Adapte | le format natif marche ; visages (F2) et santé (F3) | mains, mètre ruban, oreiller retourné pour montrer 13 puis 11 cm, voix off en anglais |
| FAQ des objections | Adapte | vraies objections ; « apnée », « ronflements » (F3) ; délais inexacts (F4) | FAQ de confort, délai réel de 6 à 10 jours |
| Tuiles par position de sommeil | Adapte | aident à choisir ; formulées en santé (F3) | « Side / back sleeper → 13 cm or 11 cm side », en confort |
| Curseur avant/après sur la posture | Évite (ou Adapte en comparaison mesurée) | promesse médicale (F3) | comparaison 13 cm / 11 cm photographiée, cotée |
| Compte à rebours quotidien sans fin | Évite | urgence fausse (F4) | minuteur seulement jusqu'à une vraie date de fin écrite |
| « 89 % du stock déjà écoulé », « quelques exemplaires » | Évite | rareté écrite en dur (F4) | rien, ou une alerte liée au stock réel |
| « 4,8/5 – 15 637 avis » écrit en dur | Évite | preuve sociale fausse (F4, règle FTC 16 CFR 465) | vraie note par produit, identique dans le JSON-LD |
| Housse pré-cochée | Évite | option par défaut payante | proposée dans le tiroir, décochée, à son vrai prix |
| Popup plein écran après l'ajout, avec « je n'aime pas les cadeaux » | Évite | interruption et refus culpabilisant | offre discrète dans le tiroir, « No thanks » |
| Logos presse sans lien, « Dr. Marc R. », « +200 praticiens » | Évite | autorité non sourcée (F3, F4) | presse seulement avec lien vers l'article |
| Popup Klaviyo à 12 s qui masque le prix | Évite | couvre le bloc d'achat | quiz de hauteur accessible depuis la fiche, au choix de la cliente |
| Photos d'avis clients (Loox) | Adapte | preuve utile si réelle (F4) ; visages sur les photos (F2) | avis réels avec consentement ; photos du produit seul |
