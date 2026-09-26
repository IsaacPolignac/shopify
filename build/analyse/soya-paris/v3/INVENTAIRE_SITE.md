# Inventaire de soya-paris.com : ce que le dossier couvre et ce qui manque (état au 26/09/2026)

Les preuves ne sont pas dans les dossiers `tech/`, `pdpw/`, `prix/` et `anim/`. Ces noms sont les alias du dossier ; les vrais dossiers sous `preuves/` sont `soya-tech/`, `pdpwork/`, `soya_prix/` et `soya-anim/`. Le seul sitemap du site est `soya/sitemap.xml`, un index. Ses sous-sitemaps sont enregistrés dans `soya-tech/sm_agentic.xml`, `sm_prod.xml`, `sm_pages.xml`, `sm_coll.xml` et `sm_blogs.xml`.

**Priorités** : P1 = demandé explicitement ou change les conclusions ; P2 = important ; P3 = complément.

## 1. Toutes les URL du site (handles réels)

### 1.1 Sitemaps

| Sitemap | URL listées |
|---|---|
| `sitemap_agentic_discovery.xml` | /agents.md |
| `sitemap_products_1.xml?from=15152116269388&to=15749897421132` | / plus les 19 fiches du § 1.3 |
| `sitemap_pages_1.xml` | /pages/contact, /pages/data-sharing-opt-out, /pages/notre-histoire |
| `sitemap_collections_1.xml` | /collections/frontpage, /collections/nos-best-sellers |
| `sitemap_blogs_1.xml` | /blogs/news, qui ne contient aucun article |

### 1.2 Menus trouvés dans `soya/home.html`

- **En-tête** : / ; /products/oreiller-soya-3-0 (« Nouveau ») ; /products/oreiller-soya-2-0 (« Best Seller ») ; /collections/nos-best-sellers ; /pages/contact ; /apps/parcelpanel ; /search ; /cart ; /account ; /customer_authentication/redirect?locale=fr&region_country=FR ; /collections/all (« Explorer nos produits »).
- **Pied de page** : /pages/notre-histoire ; /policies/terms-of-service (libellé « CGV ») ; /policies/privacy-policy ; /policies/refund-policy ; /pages/data-sharing-opt-out ; /policies/contact-information (libellé « Mentions légales »).
- **Pages de politiques non liées dans le pied de page** : /policies/shipping-policy et /policies/legal-notice existent mais ne sont pas liées.

### 1.3 Les 19 fiches produit

Colonnes :
- **Gabarit** : 3.0 = `…621388` ; 2.0 = `…588620` ; enfant = `…555852` ; défaut = `…686924`.
- **Médias** : décompte de `products.json`.
- **Vu en image** : `soya/cap/` pour les captures ; `pdpwork/others.json` pour les mesures DOM sans image.
- **US** : handle sur us.soya-paris.com.

| Handle | Titre | Gabarit | Médias | Vu en image | Handle US |
|---|---|---|---|---|---|
| oreiller-soya-3-0 | Oreiller Soya 3.0 | 3.0 (13 sections) | 48 (33 SVG) + 5 vidéos | ordinateur et mobile, SVG en gris | identique |
| oreiller-soya-2-0 | Oreiller Soya 2.0 | 2.0 (14 sections) | 9 + **9 vidéos** | **HTML seul** | soya-align-pillow-2-0 |
| oreiller-soya-enfant | Oreiller Soya enfant | enfant | 21 | ordinateur ; mobile en DOM seul | identique |
| oreiller-soya-1-0 | Oreiller Soya 1.0 | défaut | 5 | ordinateur ; mobile en DOM seul | soya-ergonomic-pillow-1-0 |
| draps-en-soie-naturelle-soya | Draps en Soie Naturelle | défaut | 10 (48 variantes) | ordinateur | soya-natural-mulberry-silk-sheets |
| couette-rafraichissante-soyafresh | Couette SoyaFresh | défaut | 10 | mobile | identique |
| housse-d-oreiller-de-rechange-soya-3-0 | Housse 3.0 | défaut | 16 (11 SVG) | HTML seul | identique |
| housse-d-oreiller-de-rechange-soya-1 | Housse 2.0 | défaut | 4 | HTML seul | soya-pillowcase-2-0 |
| housse-doreiller-de-rechange-enfant | Housse enfant | défaut | 6 | HTML seul | identique |
| coussin-lombaire-ergonomique-soya | Coussin Lombaire | défaut | 5 | HTML seul | soya-ergonomic-lumbar-cushion |
| coussin-ergonomique-avec-tete-de-lit | Coussin tête de lit | défaut | 3 | HTML seul | ergonomic-wedge-pillow-with-headboard-support |
| ensemble-de-coussins-orthopediques | Coussins de siège | défaut | 4 | HTML seul | orthopedic-seat-cushion-set |
| ensemble-doreillers-reglables | Oreillers réglables | défaut | 3 | HTML seul | adjustable-pillow-set |
| couverture-lestee-therapeutique | Couverture lestée | défaut | 3 | HTML seul | therapeutic-weighted-blanket |
| masque-de-sommeil-en-soie | Masque en soie | défaut | 3 | HTML seul | natural-silk-sleep-mask |
| oreiller-de-voyage-ergonomique-soya | Oreiller de voyage | défaut | 7 | HTML seul | soya-ergonomic-travel-pillow |
| draps-rafraichissants-soyafresh | Draps SoyaFresh | défaut | 9 | HTML seul | identique |
| housse-d-oreiller-en-soie-naturelle-soya | Housse d'oreiller en soie | défaut | 6 | HTML seul | silk-pillowcase-natural |
| housse-de-couette-en-soie-naturelle-soya | Housse de couette en soie | défaut | 10 (96 variantes) | HTML seul | natural-silk-duvet-cover-soya |

Le HTML de chaque fiche est dans `soya/web/p_<handle>.html`.

### 1.4 Collections, pages, politiques et pages spéciales

**Collections**
- /collections/nos-best-sellers : 17 produits, **sans le 3.0 ni le 2.0**.
- /collections/all : non listée dans le sitemap.
- /collections/frontpage : 0 produit, pourtant indexée.

**Pages et blog**
- /pages/contact, /pages/notre-histoire, /pages/data-sharing-opt-out.
- /blogs/news : vide.

**Politiques**
- /policies/terms-of-service, privacy-policy, refund-policy, shipping-policy, contact-information, legal-notice.
- /policies/terms-of-sale répond **404**.

**Pages en 404** : /pages/faq, /pages/cgv, /pages/mentions-legales, et le gabarit /404.

**Pages spéciales**
- Recherche : /search?q=…, avec des filtres disponibilité et prix (`filter.v.availability`, `filter.v.price.gte/lte`).
- Panier : /cart, plus des liens permanents /cart/<variante>:1 présents dans le HTML.
- Compte : /account, qui renvoie vers /customer_authentication/redirect.
- Suivi : /apps/parcelpanel.
- Paiement : /checkout, qui répondait « Request Forbidden » à la session cloud.

**Adresses techniques** : /robots.txt, /sitemap.xml, /agents.md, /.well-known/ucp, /api/ucp/mcp, /products.json, /collections.json, /meta.json, /products/<handle>.json et .oembed, /collections/*.atom et .oembed.

**Domaines**
- us.soya-paris.com : même boutique, en anglais, en USD (le 3.0 à 163 $).
- account.soya-paris.com.
- 5xfyfp-ti.myshopify.com.
- soya-paris.us : erreur Cloudflare 1001.

**Sélecteur de pays** : 26 pays (AD, AT, AU, BE, CA, CH, DE, ES, FI, FR, GB, GI, GR, IE, IT, LT, LU, MC, MT, NL, NO, PT, SE, TR, UA, US). Les 25 balises hreflang `en-XX` pointent vers us.soya-paris.com.

### 1.5 À l'extérieur (identifiants connus)

| Canal | Identifiant | État |
|---|---|---|
| Page Facebook | 61565502837799, plus une 2e entité 61582665196548 | fermée |
| Instagram | @soya.paris | fermé |
| TikTok | @soya.paris, id 7670608818355012630 | ouvert, 0 vidéo publique |
| Google Ads Search | campagne 22489769215 | vue dans les archives |
| Chaîne YouTube « LUXERY SERVICE LTD » | UC86268FR0iH5YN-Fwr_oLMw | ouverte |
| Pixels | Meta 1581609639439558, TikTok D9PMU6BC77U7K82NLN50, Pinterest 2613625264959, AW-16655023754, Klaviyo XuYmmR | relevés dans le code |

## 2. Page par page, composant par composant

| Page / composant | Déjà couvert (section, preuve) | Ce qui manque | Priorité |
|---|---|---|---|
| **Bannière cookies** et pixels avant consentement | Rien d'observé (§ 14, § 14.1). `consent-tracking-api.js` de Shopify se charge (`soya-tech/net-home-m.json`). Aucune application de consentement détectée dans `soya/home.html`. Depuis l'IP américaine, Google Ads part avec `gcs=G111` (consentement accordé). | Texte et boutons de la bannière. Onglet Réseau avant tout clic : Meta, TikTok, Google, Klaviyo et Triple Whale partent-ils avant le consentement ? Même contrôle après un refus. | **P1** |
| Bandeau compte à rebours | Configuration, relevés et fin à 23:59 : § 1 point 5, § 4.2, § 4.5, § 5.1 ligne 0, Annexe A.4. Couvert au pixel. | Passage de minuit observé dans un navigateur réglé à l'heure de Paris (la fin à 23:59 est déduite du code). | P3 |
| En-tête ordinateur (menu sur 2 lignes, non collant) | § 3.5, § 3.7 point 1, § 4.4, § 6.1, Annexe A.1, mesuré à 1440 px | Largeurs 1280, 1366 et 1920 px. Tablette (voir la ligne dédiée). | P2 |
| Menu mobile (tiroir) | § 9.1. Filmé en 0,75 s (§ 20.2 point 3, `motion/menu-m-planche.jpg`). Texte des 26 pays dans `soya/cap/funnel.json → popups`. | Vrai toucher : fermeture au geste, défilement bloqué ou non, liste des pays ouverte en image. | P3 |
| Sélecteur pays / devise | § 0 (26 pays, 6 devises), § 9.1, liste tirée du HTML. Jamais ouvert. | Liste ouverte en image. Ce que fait un changement : redirection vers us.soya-paris.com, prix en CHF ou GBP. Ne pas soumettre ; comparer plutôt us.soya-paris.com ouvert directement. | P3 |
| Pied de page (newsletter, menus, moyens de paiement) | § 5.1 ligne 9, § 3.7 points 9 et 10, § 9.4. Hauteur 541 px (ordinateur) / 995 px (mobile), Annexe C. | Texte complet des menus. Comportement mobile (accordéons ?). Aucune saisie dans la newsletter. | P3 |
| Popup Klaviyo « Le Tsunami », 4 écrans | Texte des 4 écrans tiré du JSON (§ 8.4). Géométrie : § 4.3 bis. Comparaison des popups : § 9.3. **Seul l'écran 1 a été vu**, filmé sur ordinateur (§ 20.2 point 7) et en capture mobile (`soya/cap/slices/pdp3-m-full-00.jpg`). La capture « intention de sortie » (`funnel-home-exit-00.jpg`) montre l'écran 1 mais n'est pas commentée dans le dossier. | Délai réel depuis une IP française. Page par page (collection, pages éditoriales). Écran 2 en image : cliquer « Pour moi » n'envoie aucune donnée personnelle mais fait avancer le formulaire, à faire seulement si l'utilisateur l'accepte. Écrans 3 et 4 : saisie interdite, s'en tenir au JSON. Réaffichage après 24 h. Déclenchement à l'intention de sortie. | P2 |
| Popup Klaviyo « HIGH PROSPECT » (BACK20, minuteur de 13 min) | JSON seul (§ 8.4, § 4.3 bis). Jamais vue. | Probablement réservée à une audience ciblée, donc à noter seulement si elle apparaît. | P3 |
| Popup Kaching « lombaire » | Configuration : § 7.5, § 9.2. Filmée sur ordinateur, ≈ 475 ms après le clic (§ 20.2 point 6, `motion/atc-d-planche.jpg`, `funnel-drawer-00.jpg`). | Version mobile. Déclenchement depuis la 2.0. Ce qui arrive au panier après « Profiter » ou « Non merci ». | **P1** (avec le panier) |
| **Accueil** ordinateur et mobile | Section par section en px et cm : § 5.1 et § 5.2. Texte du héros relevé ; filmé au chargement et au défilement (§ 20.2 points 1, 2 et 4). Captures ordinateur en USD, prix lus dans le HTML. | Vue en EUR depuis une IP française. Ordre et prix des 14 produits du carrousel en image. Tablette. | P2 |
| Collection « Nos Best Sellers » | Annexe C.1 et C.2 (px et cm). § 9.2 : ni filtre ni tri, bannière en parallaxe (§ 4.3 bis). | Achat rapide depuis une carte sur ordinateur : l'essai a échoué (`qbErr` dans `motion/mesures.json → drawers2-d`). | P3 |
| /collections/all | HTML seul, avec les prix (§ 7.3, `soya/ux/collections_all.html`). | Aucune capture ni mesure. C'est la cible de « Explorer nos produits » dans le panier vide. | P2 |
| /collections/frontpage | § 10.3 : 0 produit, indexée | — | P3 |
| Recherche (tiroir et page de résultats) | Page « oreiller » en HTML, 14 résultats (§ 7.3). Ouverture du tiroir filmée, tiroir vide (§ 20.1). Squelettes de chargement relevés dans le code (§ 4.3 bis). | Suggestions pendant la frappe (taper un nom de produit n'est pas une donnée personnelle). Page de résultats en image. Filtres disponibilité et prix réellement utilisés. Aucun résultat. Mobile. | P2 |
| **Fiche 3.0** : structure et mesures | § 6.1, § 6.2, § 6.3, § 6.8, Annexe A.1 (au px et au cm). Texte : § 6.7 et `soya/web/pdp3_fulltext.txt`. | Hauteurs sans la zone Loox restée blanche. Rendu réel une fois les SVG chargés. | P1 |
| 3.0 : galerie | § 6.4 : 48 médias (33 SVG), **ordre des 12 visuels du coloris Blanc seulement**. Contenu extrait des SVG : `soya/gallery/`, `pdpwork/raster_sheet.jpg`. Poids des fichiers. Zoom désactivé (lu dans le code, § 4.4). **Écart non résolu** : 60 médias dans le DOM contre 48 dans le HTML (§ 6 en-tête). | Rendu réel (gris dans les captures). Ordre et nature de chaque image pour Bleu, Beige et Gris. Changement de coloris qui filtre la galerie. Glisser au doigt, vignettes, pincement sur iOS. Temps d'affichage réel de chaque SVG. | **P1** |
| 3.0 : 4 « stories » | Poids et format (§ 6.4). Contenu : images et transcriptions faites à partir des fichiers téléchargés (§ 16.5, `preuves/v2/pub/vid/`, `pdpwork/story_*.jpg`). Fenêtre vidéo lue dans le code (§ 4.3 bis). | Lecture sur le site jamais vue : aperçu muet de 10 s, fenêtre, son, fermeture, plein écran mobile, données consommées. | **P1** |
| 3.0 : bloc d'offres Kaching | Configuration : § 6.5. Positions : § 6.1 et § 6.2. Pack Famille déplié (4 sélecteurs « Blanc », § 20.2 point 5). | Chaque offre sélectionnée en image. Couleur de la housse cochée par défaut (Bleu, seulement un indice, § 1 point 7). Case décochée. Mobile. | **P1** |
| 3.0 : barre d'achat collante | § 6.3 et § 20.2 point 5 : 139,90 € sur ordinateur, sans prix sur mobile | Prix réellement ajouté au panier depuis cette barre (§ 6.3 : « inconnu »). | **P1** (avec le panier) |
| 3.0 : encadré 89 %, « Dr. Marc », 5 accordéons, compléments, FAQ de 13 questions | § 6.1 lignes 19 à 23, § 6.7. Texte intégral. | Accordéons sur mobile : le test a échoué (`accErr` dans `motion/mesures.json → pdp-m`). | P3 |
| 3.0 : tuiles « style de sommeil » (4 SVG, carrousel sur mobile) | § 6.4 (18 Mo) et § 6.8 ligne 2. Contenu dans `pdpwork/heavy_sheet.jpg`. | Rendu réel. Carrousel mobile manipulé. | P2 |
| 3.0 : curseur avant / après | § 6.8 ligne 3 (896 × 569). § 4.3 : « glisser », lu dans le code. | Jamais manipulé : position de départ, glisser à la souris et au doigt. | P2 |
| 3.0 : vidéo de section `video_Ke4ji6` | § 6.4 : 58,1 Mo, 64,5 s, en boucle, sans pause | **Contenu de la vidéo jamais décrit.** Démarrage réel. | P2 |
| 3.0 : témoignages à onglets (Douleur cervicale / Migraines / Posture / Ronflements) | § 6.6, § 6.8 lignes 7 et 7a. Animations lues dans le code (§ 4.3 bis). | Onglets cliqués et filmés. Glisser sur mobile. | P3 |
| 3.0 : produits associés, bloc 2.0, logos presse | § 6.8 lignes 4, 10 et 11. Survol des logos filmé (§ 20.1). | Carrousels manipulés (flèches, glisser). Ordre des produits. | P3 |
| **Widget Loox** (toutes les fiches) | Blanc sur 6 335 px (ordinateur) et 7 211 px (mobile) : § 6.8, Annexe C. Contenu lu dans le JSON-LD, les 40 avis intégrés au HTML (§ 6.6) et l'API Loox (1 776 avis, § 19.4). | Rendu réel : disposition, tri, ordre affiché (le 2.0 en tête ?), photos, badge « Vérifié », « voir plus », filtres. | **P1** |
| **Fiche 2.0** (meilleure vente, 162 par jour ; page d'arrivée de la campagne Google Search et des annonces A à D) | Une ligne au § 6.9. Prix : § 7.1 et § 7.3. « 78 % » : § 1 point 6. | **Tout le visuel** : gabarit propre de 14 sections (`image_link_blocks_NM3i3j`, `multi_column_QLgdXp`, `media_with_text_TQnkfk`, `multi_column_yib9Cm`, `media_with_text_WMwNW4`…). **9 vidéos jamais vues** (4 stories et 5 HD). Mesures en px et cm. Packs Kaching avec vraies housses offertes. Popup. Barre collante (119,90 € ?). | **P1** |
| Fiche enfant | Annexe C.3 (ordinateur), mobile en DOM seul (`pdpwork/others.json`), § 6.9 | Capture mobile. Galerie de 21 images (la planche `pdpwork/kids_sheet.jpg` existe mais n'est pas exploitée). Clics dans Kaching. | P2 |
| Fiches soie, 1.0 et couette | Annexe C.4 à C.6, un seul format par fiche | Autre format d'écran. Sélecteurs de variantes (48 et 96 variantes, tailles « Twin / Queen / King »). Galerie. | P3 |
| Housse 3.0 et coussin lombaire | HTML seul, catalogue (§ 7.1, § 7.4) | Captures et galerie (11 SVG sur la housse). Ces deux fiches sont au cœur du panier. | P2 |
| Les 11 autres fiches (gabarit par défaut) | HTML seul, catalogue (§ 7.1), point « En stock » (§ 4.3), image de paiement getheyshape (§ 3.7) | Aucune capture. Ordre des galeries (seuls les nombres d'images sont connus). | P3 |
| **Tiroir panier rempli**, et /cart | Réglages seulement (`cartType: drawer`, § 9.2). **Tiroir vide filmé** (« Votre panier est vide / Explorer nos produits », `motion/drawers2-d-planche.jpg` et `drawers2-m-planche.jpg`) mais absent du dossier. /cart vide en HTML (`soya/ux/cart.html`). | Lignes, couleur de la housse, total pour 1x (84,80 € attendus), Duo et Famille. Économies affichées, ventes croisées, message de livraison, boutons express (ne pas cliquer). Mêmes relevés après un ajout depuis la barre collante et depuis l'accueil (2.0 à 119,90 €). | **P1** |
| Achat rapide | Ouverture mobile filmée (Couette, § 20.1). Échec sur ordinateur (`qbErr`). | Contenu, prix, puis total au panier. | P2 |
| Checkout, première page | « Request Forbidden » (`soya/cap/slices/funnel-checkout-00.jpg`, § 14) | Récapitulatif, frais, moyens de paiement, mentions légales, en s'arrêtant avant toute saisie. | **P1** |
| AfterSell (après achat), e-mails et SMS Klaviyo | Scripts relevés (§ 7.5, § 8.6) | Impossible sans achat ni inscription (règles). Piste extérieure : l'archive publique d'e-mails Milled.com, jamais consultée. | P3 |
| Suivi ParcelPanel | HTML (`soya/ux/apps_parcelpanel.html`, `mkt/pp.html`), § 8.6, § 9.4 | Capture de la page vide, sans saisir de numéro. | P3 |
| Compte et connexion | Lien vers `customer_authentication/redirect` seulement | Capture de la page de connexion, sans rien saisir. | P3 |
| Contact | Annexe C.9, ordinateur seulement | Mobile. Ne rien envoyer. | P3 |
| Notre histoire | Annexe C.7, ordinateur seulement | Mobile. | P3 |
| Blog | Annexe C.8 : vide | Vérifier qu'il est toujours vide. | P3 |
| /pages/data-sharing-opt-out | Lien cité (§ 9.4) | Page jamais ouverte. | P3 |
| Politiques | Texte : `soya/pol/*.txt`. Analyse juridique : § 11. Délais : § 6.7. | Aucune capture (peu utile). | P3 |
| Page 404 | HTML (`soya-tech/live_pages_*.html`, `soya/ux/pages_faq.html`), § 9.1 | Gabarit jamais vu en image. | P3 |
| us.soya-paris.com | § 7.7, § 10.3. Accueil et fiche 2.0 en anglais en HTML (`soya/web/clone_us.soya-paris.com.html`, `mkt2/us_2-0.html`). Catalogue en USD. | Aucune capture. Kaching en USD. Allégation « 200 000 » (§ 8.5). | P3 |
| agents.md, UCP, robots | § 10.3 | — | — |
| **Tablette** (768 et 1024 px, portrait et paysage) | Rien | Tout : les seuils du thème sont à 700, 1000, 1150 et 1400 px (§ 3.2), donc la mise en page change. | P2 |
| Clavier et accessibilité | Contrastes (§ 10.4 ; `soya-tech/a11y-home-m.json`, `a11y-pdp3-m.json`, `a11y-pdp3-d.json`). Lien d'évitement, focus et mouvement réduit relevés dans le code (§ 4.1, § 10.4). | Parcours au Tab. Focus piégé ou non dans les tiroirs et popups. Touche Échap sur Klaviyo, Kaching et les stories. Zoom à 200 %. Lecteur d'écran. Test réel avec mouvement réduit. | P2 |
| Performance réelle en 4G | Octets mesurés et 137 s estimées en Slow 4G par calcul (§ 10.2). LCP mesuré depuis un centre de données (§ 10.2). | Mesure bridée dans DevTools, cache vide. Lighthouse. **Données terrain PageSpeed Insights / CrUX (LCP, INP, CLS)**, public et sans compte. | P2 |
| États de l'interface | Survol des cartes et logos, chargement du bouton, tiroirs : filmés (§ 20.1). Focus et squelettes : lus dans le code. | Survol du menu et des boutons en image. Focus visible. Erreurs. Recherche sans résultat. Changement de variante. Panier vide (vu mais non rédigé). | P2 |
| Veille des compteurs de stock | Relevés du 25 au 26/09 (§ 17, Annexe D.3, `preuves/v2/inv/`) | Lancer `outils/inv.py` chaque jour pendant 7 jours. | P2 |

### Extérieur : publicité et réseaux

| Source | Déjà couvert | Ce qui manque | Priorité |
|---|---|---|---|
| **Bibliothèque publicitaire Meta** | Fermée (§ 16.2). 17 vidéos et au moins 7 textes lus par WebFetch (§ 16.4). | Nombre d'annonces actives. Dates de début. Visuels. Pays. Pour les annonces UE : portée et répartition par âge et sexe. **Rubrique « Transparence de la Page »** : date de création, changements de nom, pays des administrateurs. Mêmes recherches pour les clones (§ 15.9). | **P1** |
| **Google Ads Transparency** | Captcha (§ 16.2). Campagne Search vue dans les archives (§ 16.3). | Nom de l'annonceur vérifié (tranche la piste LUXERY SERVICE LTD). Créations Search, Shopping et YouTube, avec leurs dates. | **P1** |
| Bibliothèque publicitaire TikTok (FR) et TikTok Creative Center (Top Ads) | Erreur 421 (§ 16.2) ; le « 0 annonce » affiché est un artefact | Annonces réelles. Top Ads sur le mot-clé « oreiller ». | **P1** / P2 |
| Instagram @soya.paris, page Facebook et sa 2e entité | Fermés. Abonnés et mentions J'aime non vérifiés (§ 16.3). | Abonnés, 12 dernières publications, Reels, stories à la une, lien en bio, créateurs, codes promo, commentaires. | P2 |
| Google.fr : recherche sur la marque, requêtes génériques, onglet Shopping, note marchand | § 17.8, avec WebSearch limité aux États-Unis | Vrais résultats français. Annonces Shopping payantes. | P2 |
| Annonces de reciblage après visite | Rien | À faire seulement dans un profil séparé et avec l'accord de l'utilisateur (§ 14.1). | P3 |
| Répertoire publicitaire Pinterest | S'affiche mais jamais interrogé (§ 16.2) | Recherche sur « soya ». | P3 |
| TikTok @soya.paris, YouTube, Snap | Couverts (§ 16.2, § 16.3) | Nouvelle vérification rapide. | P3 |
| Trustpilot au-delà de la page 10, signal-arnaques, forums, Amazon.fr « SWZEC », Google Lens | § 8.7 et § 19. Titres seulement pour signal-arnaques et Amazon. | Pages bloquées. | P3 |

### Carrousels : lesquels ont été manipulés

| Carrousel | État |
|---|---|
| Kaching (offres) | **Déplié au clic** (§ 20.2 point 5) |
| « Nos best sellers » de l'accueil | Apparition au défilement et survol **filmés**, achat rapide mobile filmé ; flèches et glisser **jamais manipulés** |
| Logos presse | **Survol filmé** ; flèches et glisser jamais manipulés |
| Héros de l'accueil | Une seule diapositive, donc lecture automatique sans effet (code, § 4.2) |
| Réassurance mobile | Jamais manipulé |
| Galeries de fiches (toutes) | Jamais manipulées |
| Tuiles « style de sommeil » | Jamais manipulées |
| Curseur avant / après | Code seulement |
| Témoignages à onglets | Code seulement |
| Produits associés | Jamais manipulés |
| Stories | Jamais ouvertes |
| Loox | Jamais rendu |

## 3. Ordre de passage conseillé pour la session locale

1. **P1 sur le site** : bannière cookies et pixels, dans l'onglet Réseau.
2. Fiche 3.0 dans un vrai navigateur, sur ordinateur et sur mobile : galerie des 4 coloris, stories, Loox, curseur, carrousels.
3. **Fiche 2.0 complète.**
4. Panier rempli : 1x, Duo, Famille, barre collante, achat rapide 2.0, popup lombaire.
5. Checkout : première page seulement, arrêt avant toute saisie.
6. **P1 à l'extérieur** : Meta (avec la transparence de la Page), Google Ads Transparency, bibliothèque TikTok.
7. **P2** : tablette, clavier, PageSpeed / CrUX, recherche et filtres, /collections/all, fiches enfant, housse 3.0 et lombaire, Instagram, Facebook, Google.fr, veille des compteurs sur 7 jours.
8. **P3** : le reste.

Le dossier cite les planches `motion/drawers2-*-planche.jpg` mais ne dit pas qu'elles montrent le panier vide, la recherche vide et l'achat rapide mobile. La capture « intention de sortie » n'est commentée nulle part.

Fichiers principaux (tous sous `build/analyse/soya-paris/`) :
- DOSSIER_SOYA_PARIS.md
- BRIEF_CLAUDE_LOCAL.md
- preuves/soya/sitemap.xml
- preuves/soya-tech/sm_agentic.xml, sm_prod.xml, sm_pages.xml, sm_coll.xml, sm_blogs.xml
- preuves/soya/products.json
- preuves/soya/collections.json
- preuves/soya/web/p_oreiller-soya-2-0.html
- preuves/soya/ux/
- preuves/motion/drawers2-d-planche.jpg
- preuves/motion/drawers2-m-planche.jpg
- preuves/motion/mesures.json
- preuves/soya/cap/slices/funnel-home-exit-00.jpg
- preuves/pdpwork/kids_sheet.jpg
- preuves/soya_prix/us.soya-paris.com_products.json_limit_250
