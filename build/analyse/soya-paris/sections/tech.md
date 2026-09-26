## 5. Technique, performance, SEO, accessibilité et conformité légale (France / UE)

### 5.0 Méthode, sources et limites

Cette section s'appuie sur trois sources.

- **Le dossier de preuves collecté le 25 septembre 2026**, noté `soya/`. Chemin : `build/analyse/soya-paris/preuves/soya/`.
- **Les mesures techniques du même jour**, notées `soya-tech/`. Chemin : `build/analyse/soya-paris/preuves/soya-tech/`. Contenu :
  - inventaire réseau requête par requête (`net-home-m.json`, `net-pdp3-m.json`, `net_summary.json`, script `netinv.cjs`) ;
  - poids compressés réels des SVG (`svg_compressed.txt`) et des ressources sans `content-length` (`need_cl_sizes.tsv`) ;
  - analyse des en-têtes MP4 (`mp4probe.py`) ;
  - audit automatique de contraste et d'accessibilité (`a11y-*.json`, script `a11y.cjs`) ;
  - sitemaps, `agents.md`, `/.well-known/ucp` et pages récupérées en direct (`sm_*.xml`, `live_*.html`).
- **Des sources web ouvertes**, citées par leur URL.

**Contre-vérification du 26 septembre 2026.** Chaque constat important a été rejoué sur les fichiers ci-dessus, et plusieurs points ont été revérifiés en direct : poids d'un SVG selon le paramètre `width`, fin de fichier de la vidéo `d5b60b…mp4`, registre des agents du Wyoming, pages milaris.co et juvilor.com, site officiel des French Days, article de Search Engine Journal, documentation Lighthouse et article L121-4 sur Légifrance. Les corrections apportées par rapport à la première version sont intégrées dans le texte. Les principales : les chiffres « premier écran » de la fiche incluaient en réalité le défilement ; les 4 SVG les plus lourds ne sont pas dans la galerie produit ; les H2 « vides » ne le sont pas dans le HTML.

**Deux correctifs sur les données initiales** :

1. **Les poids du dossier `soya/cap/*.json` (`bytes`, par exemple 13,79 Mo pour l'accueil) sont des tailles décompressées et en partie dupliquées.** Le relais de capture utilise `fetch` de Node, qui décompresse le contenu. De plus, le routage Playwright désactive le cache HTTP, si bien qu'un même script est compté plusieurs fois (la sandbox WPM, par exemple, 8 fois). Les poids transférés ont donc été recalculés en dédoublonnant par URL et en lisant le `content-length` compressé (brotli ou gzip), complété par `curl` quand il manquait.
2. **Les `image_alts` vides de `catalogue.json` ne prouvent rien.** L'endpoint `/products.json` n'expose pas le champ `alt` : les clés d'image sont `id, created_at, position, updated_at, product_id, variant_ids, src, width, height`. L'analyse des textes alternatifs porte donc sur le HTML rendu.

**Limites** :

- Les captures ont été faites depuis une IP américaine (edge IAD, `country;desc="US"` et `_cmp;desc="3.AMPS_US…"` dans `soya/home.headers`), avec un cookie de marché France (EUR) pour les mesures `soya-tech/`. Le comportement de la bannière de consentement pour un visiteur situé en France n'est pas observé.
- Pendant les mesures réseau et l'audit d'accessibilité, les SVG ont été remplacés par une image de 10 × 10 px et les vidéos bloquées (`netinv.cjs`, `a11y.cjs`). Les requêtes SVG sont donc bien celles que le navigateur a émises, mais les poids SVG et vidéo sont reconstitués à partir des tailles mesurées séparément, pas relevés pendant la navigation.
- La phase « sans défilement » de `netinv.cjs` couvre l'événement `load` plus 8 secondes d'attente ; la phase « défilement » parcourt ensuite toute la page par pas de 600 px.
- Le panier et le checkout ne sont pas observés : l'ajout au panier ne s'est pas enregistré et `/checkout` a répondu « Request Forbidden ».
- Les temps de chargement du dossier (`loadMs`) passent par un relais et ne sont pas exploités. Seuls les octets servent de base aux estimations.
- La Wayback Machine était inaccessible (connexion réinitialisée) : aucun historique de prix n'a pu être consulté.

### 5.1 Stack technique

| Élément | Constat | Preuve |
|---|---|---|
| Plateforme | Shopify derrière Cloudflare, HTTP/2 avec 103 Early Hints, h3 annoncé (`alt-svc`), HSTS de 7 889 238 s (environ 91 jours), `x-frame-options: DENY` | `soya/home.headers` |
| Thème | Impact 6.4.1, nommé « V16 – Version 3.0 French Days » (id 205977846092), `theme_store_id: null` | `soya/home.html` (objet `Shopify.theme`) |
| Boutique | `5xfyfp-ti.myshopify.com` ; fichiers CDN sous `/s/files/1/0935/5054/3180/` | `soya/pdp3.html` |
| Marchés | 26 pays dans le sélecteur (devises EUR, GBP, CHF, CAD, USD, AUD) ; FR sur `soya-paris.com`, anglais sur `us.soya-paris.com` | `soya/home.html` (sélecteur pays) |
| hreflang | 27 balises : `x-default` et `fr` vers soya-paris.com, 25 `en-XX` (GB, AT, BE, DE, FI, GR, IE, IT, LT, LU, MT, NL, PT, ES, SE, AU, CA, CH, NO, US, AD, GI, MC, UA, TR) vers us.soya-paris.com | `soya/home.html`, `soya/pdp3.html` |
| robots.txt / agents.md / UCP | Fichiers Shopify par défaut (version 2026) : `Allow: /`, liens vers `agents.md`, `/.well-known/ucp` et `/api/ucp/mcp`, invitation aux agents à installer `shop.app/SKILL.md`. Rien de spécifique à Soya | `soya/robots.txt` (lignes 2 à 14), `soya-tech/agents.md`, `soya-tech/ucp.json` |
| Sitemaps | Index de 5 sous-sitemaps : agentic_discovery (agents.md), produits (20 URL : l'accueil et 19 produits), 3 pages, 2 collections, 1 blog | `soya/sitemap.xml`, `soya-tech/sm_*.xml` |
| Domaine | `soya-paris.com` enregistré le 5 septembre 2024 | `soya/web/rdap.json` |

**Applications détectées** (blocs `BEGIN app block` et URL d'extensions dans `soya/home.html` et `soya/pdp3.html`) :

| Application | Rôle observé |
|---|---|
| Kaching Bundles (`kaching-bundles-2003`) | Bloc d'offres par paliers 1x / Duo / Famille, prix barrés, options housse. Il affiche 69,90 € pour un produit dont le prix catalogue est 139,90 € |
| Kaching Popup (`kaching-popup-469`) | Popup déclenchée à l'ajout au panier du Soya 3.0 (`"addToCart":{"enabled":true}`, produit 15152158212428), une fois par jour (`"displayFrequency":{"type":"custom","days":1}`). Textes : « FÉLICITATIONS, VOUS AVEZ DÉBLOQUÉ -60% SUR NOTRE NOUVEL OREILLER LOMBAIRE ! », « Non merci, je n'aime pas les cadeaux » |
| Klaviyo | Popup d'inscription (formulaire nommé « Pop-up Mobile \| Le Tsunami » dans `soya/ux/klaviyo_forms.json`) : « VOUS AVEZ OBTENU 60% DE RÉDUCTION », quiz sur la position de sommeil. E-mail, SMS et pixel |
| Loox | Widget d'avis et injection d'un `aggregateRating` dans le JSON-LD |
| Triple Whale | Attribution publicitaire (bloc `shopify://apps/triplewhale`, `api.config-security.com`, 161 ko décodés) |
| Countdown Timer d'Essential Apps (`countdown-timer-30-97`) | Bandeau « FRENCH DAYS » avec compte à rebours |
| EZ Product Image Translate | Traduction d'images (`translate.freshify.click`) |
| StarApps Variant Image (`variant-image-automator-40`) | Images par variante |
| AfterSell (`aftersell-1090`) | Upsell après achat |
| ParcelPanel | Page « Suivre votre commande » (`/apps/parcelpanel`) et pixel |

**Pixels web** (`webPixelsConfigList` dans `soya/home.html`) : TikTok (`D9PMU6BC77U7K82NLN50`), Google (GT-K5MKJXW8 et GT-TWR6PKQQ, Google Ads AW-16655023754), Klaviyo, Pinterest, Snapchat, Meta (1581609639439558), ParcelPanel, plus deux pixels d'applications non identifiés. Ils sont déclarés avec les finalités `ANALYTICS`, `MARKETING` et `SALE_OF_DATA`.

**Lecture (déduit)** : pour une boutique de 19 produits, c'est une stack de *performance marketing* : bundles, urgence, popups et 6 réseaux publicitaires. Cela ne dit rien, à soi seul, du mode d'approvisionnement. Pour le thème, `theme_store_id: null` indique qu'Impact a été téléversé en fichier et non installé depuis le Theme Store. C'est un **indice** à interpréter prudemment, pas la preuve d'une absence de licence.

### 5.2 Performance

#### 5.2.1 Poids réels, recalculés et dédoublonnés (mobile 390 × 844)

« Sans défilement » = chargement plus 8 s d'attente, sans toucher à la page. « Après défilement » = la même session, après un défilement complet de la page.

| Mesure | Accueil | Fiche Oreiller Soya 3.0 |
|---|---|---|
| Requêtes brutes / GET uniques, sans défilement | 342 / 297 | **464 / 386** |
| Requêtes brutes / GET uniques, après défilement | 359 / 306 | 490 / 407 |
| Poids transféré (compressé), sans défilement | 3,30 Mo | **27,48 Mo** |
| Poids transféré (compressé), après défilement | **3,56 Mo** | 28,31 Mo |
| Poids décodé, sans défilement / après défilement | 11,02 / 12,25 Mo | 45,49 / 47,77 Mo |
| Fichiers SVG, sans défilement | — | **22,34 Mo** (32 URL, 28 fichiers) |
| Fichiers SVG, après défilement | — | 22,87 Mo (33 URL, 29 fichiers) |
| Préchargement checkout Shopify (standard de la plateforme) | 1,05 Mo (158 requêtes) | 1,05 Mo (158 requêtes) |
| Domaines hors Shopify (compressé, après défilement) | 1,32 Mo | 1,98 Mo |
| Loox | 26 ko | 588 ko (28 requêtes, dont 20 images `images.loox.io`) |
| Kaching | 204 ko | 376 ko |
| Google (gtag, Ads, feuille Google Fonts) | 509 ko, dont 499 ko pour les 3 scripts gtag | 559 ko |
| Meta | 255 ko | 255 ko |
| Klaviyo | 338 ko | 338 ko |
| JavaScript (compressé / décodé) | 2,70 / 9,70 Mo, dont 1,05 / 4,18 Mo de préchargement checkout | — |
| HTML (décodé / brotli) | 321 598 / 52 048 octets | 624 388 / 86 229 octets |
| Nœuds DOM (capture desktop) | 1 772 | 2 918 |
| Longueur de page (mobile) | 4 791 px (environ 1,27 m) | 19 179 px (environ 5,07 m) |

Sources : `soya-tech/net-home-m.json`, `soya-tech/net-pdp3-m.json` (champ `phase` de chaque requête), `soya-tech/net_summary.json`, `soya/svg_sizes.txt`, `soya-tech/svg_compressed.txt`, `soya-tech/need_cl_sizes.tsv`, `soya/cap/*.json` (`info.nodes`, `info.H`).

Correctif : la première version présentait 28,31 Mo et 407 GET comme le « premier écran, sans défilement ». Ces valeurs incluent en fait la phase de défilement. De même, le poids décodé de la fiche avait été calculé avec la taille compressée des SVG : 37,84 Mo au lieu de 47,77 Mo.

Le préchargement du checkout (fichiers `checkout-web/assets/c1/*.js`, déclenchés par `checkouts/internal/preloads.js` appelé à 0,9 s) est un comportement standard de Shopify, pas propre à Soya. Ces fichiers arrivent entre 3 s et 9,8 s environ, donc après l'affichage initial.

Sur les 24 domaines contactés par l'accueil mobile, 20 n'appartiennent pas à Shopify. Les relevés desktop du dossier (`soya/cap/home-d.json` et `pdp3-d.json`, champ `third`) comptent 26 domaines (72 requêtes) sur l'accueil et 31 domaines (110 requêtes) sur la fiche. Ces totaux incluent 4 domaines de Shopify (`shop.app`, `otlp-http-production.shopifysvc.com`, `5xfyfp-ti.myshopify.com`, `extensions.shopifycdn.com`) : il reste 22 et 27 domaines réellement tiers.

#### 5.2.2 Fichiers SVG : le vrai problème

Les visuels de la fiche 3.0 sont des fichiers `.svg` qui enveloppent des photos PNG/JPEG en base64 (`viewBox 0 0 396.75 396.749985`, typique d'un export Canva).

- **Poids** : les 39 fichiers pèsent **35,73 Mo décodés** (`soya/svg_sizes.txt`) et **25,05 Mo en brotli** (`soya-tech/svg_compressed.txt`). Le plus lourd, `60.svg`, fait 4,71 Mo, soit 3,51 Mo transférés (`content-encoding: br`, `cf-cache-status: HIT`).
- **Répartition par section** : les 4 fichiers les plus lourds ne sont pas dans la galerie produit.

| Emplacement (section) | Fichiers | Poids brotli | Demandés sans défilement |
|---|---|---|---|
| Galerie produit (`…__main`) | 33 | 10,76 Mo | 23 fichiers en vignette (`width=56`), dont 4 aussi en `width=400` : 8,58 Mo avec les doublons |
| Multi-colonnes `multi_column_fPbXVa` (y = 4 099 px sur mobile, environ 4,9 écrans sous le haut de page) | 4 (`58.svg` à `61.svg`) | **13,41 Mo** (54 % du total) | les 4, dont 3 **sans attribut `loading`** (58, 59, 61), donc chargés d'office |
| Média et texte `media_with_text_UWwdeG` | 1 (`57.svg`) | 0,54 Mo | non, demandé au défilement |
| Produits associés `related_products_ncp9TM` | 1 (`7.svg`) | 0,34 Mo | oui |

Sources : `soya/pdp3.html` (section de chaque balise `<img>`, attribut `loading`) ; `soya-tech/net-pdp3-m.json` (URL et phase) ; `soya/cap/pdp3-m.json` (position y des sections).

- **Chargement** : sans aucun défilement, 32 URL SVG (28 fichiers) ont été demandées, soit 22,34 Mo. Dans le HTML, 69 des 73 balises `<img>` en `.svg` portent `loading="lazy"` ; les 4 autres sont le logo de paiement et les 3 fichiers de la section multi-colonnes. Pourquoi toutes les vignettes de la galerie partent malgré `lazy` : non établi (hypothèse : elles sont dans la zone de préchargement du navigateur).
- **Doubles téléchargements** : le thème demande `width=56` pour les vignettes et `width=400` pour les images, mais ce paramètre ne redimensionne pas un SVG. Vérifié en direct le 26/09/2026 : `20.svg` pèse 287 218 octets avec `width=56`, avec `width=400` et sans paramètre. Quatre fichiers (`20.svg`, `21.svg`, `22.svg`, `23_…svg`) sont donc téléchargés deux fois.
- **Impossibilité d'optimiser** : Shopify ne peut ni convertir ces fichiers en WebP ni les réduire.
- **Gain le plus rapide (déduit)** : remplacer les 4 fichiers de la section multi-colonnes par des JPEG/WebP retirerait à eux seuls environ 13 Mo du chargement initial.

#### 5.2.3 Vidéos

| Fichier | Poids | Format | Durée | Particularité |
|---|---|---|---|---|
| 47cc57…mp4 (story « FAQ ») | 109,2 Mo | 1080 × 1920 HEVC (hvc1), environ 7,9 Mbit/s | 110,7 s | moov en fin de fichier |
| 54be73…mp4 (« Lequel choisir ? ») | 50,2 Mo | 1080 × 1920 HEVC, environ 8,2 Mbit/s | 49,1 s | moov en fin |
| 5225b5…mp4 (« Concept ») | 46,5 Mo | 1080 × 1920 HEVC, environ 8,2 Mbit/s | 45,2 s | moov en fin |
| d5b60b…mp4 (« Avis clients ») | 37,6 Mo | 1080 × 1920 HEVC, environ 8,2 Mbit/s | 36,5 s | moov en fin (dans les 25 derniers ko du fichier) |
| 643a43…HD-1080p-7.2Mbps.mp4 (section vidéo) | 58,1 Mo | 1920 × 1080 H.264 | 64,5 s | faststart ; autoplay, loop, muted, `preload="metadata"`, poster présent |

Sources : `curl -I` (content-length), `soya-tech/mp4probe.py` rejoué le 26/09/2026 (la lecture automatique a échoué sur `d5b60b…`, dont la fin de fichier a été analysée à part), `soya/pdp3.html`. Total : 301,6 Mo pour 5 fichiers.

- **Stories** : les 4 bulles de 72 px (`soya/cap/pdp3-m.json`, `vids`, `w: 72`) sont des balises `<video src>` **sans poster ni attribut preload**, qui pointent vers les fichiers sources.
- **Lecture forcée au chargement** : le bloc Liquid `liquid_GDmj3c` contient un script commenté « teaser 10s sur les miniatures ». Au `DOMContentLoaded`, il appelle `play()` sur les 4 vidéos, puis les met en pause au bout de 10 000 ms (`soya/pdp3.html`). **Estimation, non mesurée** (vidéos bloquées pendant les captures) : 10 s à environ 8,2 Mbit/s représentent environ 10 Mo par vidéo, soit de l'ordre de 40 Mo pour les quatre si la lecture démarre, sans compter la mise en mémoire tampon.
- **Compatibilité (déduit)** : les boîtes `wide` et `alis` (présentes dans 3 des 4 fichiers) évoquent des exports Apple non transcodés. Le HEVC n'est pas lu partout de façon garantie : là où il ne l'est pas, la bulle risque de rester vide. Avec un moov en fin de fichier, le navigateur doit d'abord aller chercher la fin du fichier.
- La vidéo de section passe, elle, par le lecteur vidéo de Shopify, mais le thème ne sert que la version HD-1080p à 7,2 Mbit/s, y compris sur mobile.

#### 5.2.4 Autres gaspillages mesurés

- **Avatar** : l'avatar du « Dr. Marc R., Chiropracteur » pèse **570 934 octets pour un affichage de 60 × 60 px**, soit 1,59 cm (`87.webp`, URL `cdn.shopify.com/s/files/…` codée en dur sans paramètre de taille, `soya/pdp3.html` bloc `liquid_rn8BMg`).
- **Témoignages** : 4 PNG de 92 250 à 117 744 octets sont servis depuis le CDN d'une autre boutique (`/s/files/1/0680/4589/7928/files/88.png` à `91.png`, `soya-tech/net-pdp3-m.json`).
- **Étoiles** : 5 images chargées depuis `img.icons8.com` (hotlink tiers, bloc `liquid_n8MKt3`).
- **Google Fonts** : une feuille de style appelle 4 familles complètes (Instrument Sans, Montserrat, Poppins, Roboto de 100 à 900 avec italiques), injectée par un script d'origine non identifiée. Les polices web réellement rendues sont des graisses de Roboto (`soya/cap/pdp3-d.json`, `fonts`).
- **Code en ligne** : 102 balises `<script>` sur la fiche (170 ko de scripts en ligne, 161 ko de styles en ligne), dont 44 scripts externes (`soya-tech/net-pdp3-m.json`, champ `dom`).
- **Visuel d'accueil desktop** : `Web_banner_2.jpg` est un original de 5 934 × 3 338 px dont le `src` demande `width=5760` (`soya/home.html`). Le poids réellement servi sur desktop n'a pas été mesuré.

#### 5.2.5 Impact estimé sur mobile 4G (déduit)

Le calcul porte sur le transfert pur, sans latence ni temps CPU. Le profil de référence est « Slow 4G » de Lighthouse (150 ms de latence, 1,6 Mbit/s en réception), qui représente « roughly the bottom 25% of 4G connections » ([documentation Lighthouse](https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md), lignes 9 à 14). Les valeurs 10 et 30 Mbit/s sont des hypothèses de calcul, pas des mesures.

| Page | Poids | 1,6 Mbit/s | 10 Mbit/s | 30 Mbit/s |
|---|---|---|---|---|
| Accueil (après défilement) | 3,56 Mo | environ 18 s | environ 2,8 s | environ 0,9 s |
| Fiche 3.0, sans défilement | 27,48 Mo | environ 137 s (2 min 17 s) | environ 22,0 s | environ 7,3 s |
| dont SVG seuls | 22,34 Mo | environ 112 s | environ 17,9 s | environ 6,0 s |
| Fiche 3.0, après défilement | 28,31 Mo | environ 142 s | environ 22,6 s | environ 7,5 s |

La première image de la galerie (`18.png`) est légère. Mais les 22,3 Mo de SVG téléchargés en parallèle concurrencent le JavaScript de Kaching (le bloc d'achat), les avis Loox et les pixels (déduit). Sur un forfait limité, une visite de la fiche consomme environ 27 Mo sans même défiler, et davantage si les stories démarrent. Toucher une story lance la lecture d'un fichier source de 38 à 109 Mo à environ 8 Mbit/s, un débit cinq fois supérieur au profil Slow 4G.

### 5.3 SEO

#### 5.3.1 Balises et titres

| Page | title | meta description | H1 |
|---|---|---|---|
| Accueil | « SOYA Paris - Confort & Bien-être pour un Sommeil Réparateur » (59 caractères, sans « oreiller ») | 250 caractères, générique | Logo : image `alt=""` et texte masqué (`sr-only`) « SOYA PARIS » |
| Fiche 3.0 | « Oreiller Soya 3.0 » (17 caractères) | 320 caractères, qui reprennent le début de la description | « Oreiller Soya 3.0 » |
| Nos Best Sellers | « Nos Best Sellers » | aucune | « Nos Best Sellers » |
| /collections/all | « Produits » | aucune | « Produits » |
| /collections/frontpage | « Home page » (0 produit, dans le sitemap, sans noindex) | aucune | « Home page » |
| /blogs/news | « News » | aucune | « Ce blog est vide » |
| /pages/contact | « Contact » | aucune | aucun |

Sources : `soya/home.html`, `soya/pdp3.html`, `soya-tech/live_*.html`, `soya/cap/*.json`.

Structure de l'accueil (HTML serveur) :

- **Titres** : un H1 (le logo) et 2 H2 qui ont bien un texte, « Nos best sellers » et « Nous avons demandé à nos clients, voici ce qu'ils nous ont dit... ».
  - Correctif : l'audit automatique les avait lus comme vides. Leur texte est placé dans un élément `<split-lines>` animé à l'apparition (`reveal-on-scroll`), que le script de mesure n'a pas pu lire. Le HTML, lui, contient bien ce texte.
- **Messages clés hors titres** : « Nouveauté : SOYA 3.0 est arrivé » et « Découvrez notre Best-Seller : L'Oreiller Soya 2.0 » sont des `<p class="h2">`. Les statistiques 96 % / 91 % / 87 % sont des `<p class="h1">`.
- **Taille du H1** : les 16 px (desktop) et 14 px (mobile) relevés sont la taille calculée du texte masqué, pas celle d'un texte visible. À l'écran, le H1 est le logo en image, affiché sur 120 px de large.
- **Visuel principal** : « FRENCH DAYS -50 % » est une image à texte incrusté (`Web_banner_2.jpg`, `alt=""`), comme toute la galerie de la fiche. Aucun de ces textes n'est lisible par un moteur.
- **og:image** : sur l'accueil, c'est le logo. L'URL en `http://` est la sortie standard de Shopify, doublée d'un `og:image:secure_url` en `https://` : ce n'est pas un défaut propre à Soya.

#### 5.3.2 Données structurées

- **ProductGroup** (standard d'Impact) : 4 variantes, `price "139.90"` en EUR, `InStock`, sans `gtin`, `sku`, `mpn`, `shippingDetails` ni `hasMerchantReturnPolicy`. Le prix affiché dans le bloc d'achat est **69,90 €** : le prix balisé et le prix vu ne concordent pas (`soya/pdp3.html`, `soya/cap/funnel.json` champ `pdpBuy`).
- **Note** :
  - le script Loox injecte côté client, au `DOMContentLoaded`, `aggregateRating {ratingValue "4.3", reviewCount 339}` dans ce ProductGroup (`const productLdJsonSchema`, `json.aggregateRating = productLdJsonSchema.aggregateRating`, `MetafieldLooxRating = "4.3"`, `MetafieldLooxCount = 339`) ;
  - au même moment, le bandeau visible est un **HTML statique**, « Noté 4,8/5 – 15 637 avis clients » (bloc `liquid_n8MKt3`), présent sur les 19 fiches (`soya/web/p_*.html`, `soya/web/loox_vs_affiche.tsv`) ;
  - selon ce même fichier, Loox donne pour le Soya 2.0 une note de 4,8 sur 1 257 avis.
- **FAQPage** : 13 questions dont les réponses parlent de « L'oreiller SOYA 2.0 », de l'apnée du sommeil (« parfaitement adapté aux personnes […] concernées par l'apnée du sommeil légère à modérée ») et des ronflements (« Totalement testé et approuvré »). Search Engine Journal écrit : « FAQ rich results stopped appearing in search results on May 7 » (article du 10 mai 2026, [Search Engine Journal](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)). Ce balisage n'apporte donc plus de visibilité, mais il diffuse les allégations dans un format lu par les machines.
- **Autres blocs** : Organization minimale (nom et URL, sans logo ni sameAs) et WebSite avec SearchAction sur l'accueil. BreadcrumbList correct. Les canonicals s'auto-référencent.

#### 5.3.3 Architecture, contenu, maillage

- **Pages indexables** : 19 produits, 3 pages (`contact`, `data-sharing-opt-out`, `notre-histoire`), 2 collections dont `frontpage` vide, et un blog vide (`soya-tech/sm_*.xml`, `soya/collections.json`).
- **Collections** : une seule vraie collection (« Nos Best Sellers », 17 produits), aucune par catégorie (oreillers, linge de lit, soie).
- **Menu** : 6 liens (Accueil, Nouveau : Oreiller Soya 3.0, Best Seller : Oreiller Soya 2.0, Nos Best Sellers, Contact, Suivre votre commande).
- **Pages absentes** : `/pages/faq`, `/pages/mentions-legales` et `/pages/cgv` renvoient la page 404. Ces URL ne sont liées nulle part sur le site : ce ne sont pas des liens cassés, simplement des pages qui n'existent pas. Le pied de page renvoie vers `/policies/…`.
- **Contenu informatif** : aucun (guides, comparatifs, « quel oreiller pour les cervicales »). Pour Somnila, c'est un **terrain libre**.
- **Textes alternatifs** :
  - faute d'alt saisi, Impact reprend le titre du produit : 98 images ont l'alt « Oreiller Soya 3.0 » ;
  - 26 photos d'avis portent « Customer photo review of Oreiller Soya 2.0 », en anglais ;
  - une image porte « Stabbing neck pain » ;
  - l'accueil compte 10 alt vides sur 38 images (`soya/home.html`, `soya/pdp3.html`).
- **International** : `us.soya-paris.com` est déclaré `lang="en"`, mais son titre et sa meta description sont en français, et « Découvrir » y figure 3 fois (`soya/web/clone_us.soya-paris.com.html`). Les hreflang en-XX, y compris en-DE, en-IT et en-ES, pointent donc vers une page partiellement non traduite.

### 5.4 Accessibilité

Méthode : audit automatique sur le DOM rendu. Pour chaque texte visible, le script calcule le contraste WCAG entre la couleur du texte et le fond effectif, en superposant les fonds des ancêtres (`soya-tech/a11y.cjs`). 114 textes ont été mesurés sur l'accueil mobile, 307 sur la fiche mobile et 312 sur la fiche desktop. Les faux positifs évidents (points de pagination « Aller à l'élément », libellé caché « Tirer ») sont écartés.

**Échecs de contraste au niveau AA (seuil 4,5:1)**, tous dans des blocs ajoutés (`soya-tech/a11y-pdp3-m.json` et `a11y-pdp3-d.json`, `fail: true`) :

| Élément | Taille | Couleurs | Ratio |
|---|---|---|---|
| Prix barré 1x (€139,90) | 12 px | rgb(255,77,77) sur blanc | 3,27:1 |
| Prix barrés des packs (€279,80, €559,60) | 12 px | rgb(255,77,77) sur #f8f8f8 | 3,08:1 |
| Prix barré de l'option housse (€39,90) | 12 px | rgb(255,77,77) sur rgb(200,213,239) | 2,22:1 |
| Prix barré de l'option 2 housses (€79,80) | 12 px | idem sur rgb(196,208,234) | 2,12:1 |
| Prix de l'option housse (€14,90) | 13 px gras | rgb(73,116,202) sur rgb(200,213,239) | 3,08:1 |
| Titres et prix des packs (« 2x Oreillers », €98,90…) | 16 px gras | rgb(73,116,202) sur #f8f8f8 | 4,27:1 |
| « Plus que quelques exemplaires en stock » | 14 px / 600 | #E53935 sur blanc | 4,23:1 |
| « 89% du stock déjà écoulé » | 14 px gras | #D94343 sur #f8f8f8 | 4,09:1 |

La palette du thème est correcte : le texte #042146 sur blanc atteint 16,02:1 et la description #636366 sur #f8f8f8 atteint 5,64:1. Les étoiles #FFD700 sur blanc ne font que 1,4:1, mais la note est aussi donnée en texte.

**Autres points** :

- **Textes minuscules sur mobile** : légendes « Heures / Mins / Secs » à 8 px (0,21 cm), badges « Economisez €18,00 » à 9 px, sous-titre du bandeau à 11 px, citation du « Dr. Marc R. » à 11 px (`soya-tech/a11y-home-m.json`, `a11y-pdp3-m.json`, `fontSizes`).
- **Zoom bloqué** : `maximum-scale=1.0` dans la balise viewport sur toutes les pages, ce qui empêche le zoom par pincement sur les navigateurs qui respectent cette valeur (critère WCAG 1.4.4, redimensionnement du texte).
- **Hiérarchie de titres** :
  - accueil : H1 = logo ; messages clés en `<p class="h2">` et `<p class="h1">` (6 éléments stylés en titre sans en être) ;
  - fiche : un H2 promotionnel « FRENCH DAYS JUSQU'À -60% » écrit en styles en ligne, un H6 employé comme titre de bloc, et 7 faux titres.
- **Cibles tactiles** : les icônes menu, recherche et panier mesurent 22 × 22 px (0,58 cm), sous les 24 px du critère WCAG 2.2 « 2.5.8 », sauf exception d'espacement.
- **Médias** :
  - la vidéo de section démarre seule et tourne en boucle (64,5 s) sans commande de pause dans le DOM (`autoplay: true, controls: false` dans `a11y-pdp3-m.json`) : c'est un risque au regard du critère WCAG 2.2.2 (mettre en pause, arrêter, masquer) ;
  - aucune piste de sous-titres (`<track>`) sur la page, alors que les stories ont une piste audio ;
  - le lecteur des stories, en fenêtre modale, a bien des contrôles.
- **Popups** : la popup Klaviyo est visible 12 s après l'arrivée, avec des refus culpabilisants : « Non merci, je n'aime pas les remises. » et « Non merci, je ne veux pas être VIP. » (`soya/cap/slices/funnel-home-12s-00.jpg`, `soya/ux/klaviyo_forms.json`).
- **Points positifs du thème Impact** : lien « Passer au contenu », styles `:focus-visible` (9 occurrences dans `theme.css`), animations conditionnées à `prefers-reduced-motion` (17 occurrences dans `soya/assets/theme.js`), attribut `lang="fr"`.
- **Contexte réglementaire** : depuis le 28 juin 2025, la directive (UE) 2019/882 (Acte européen sur l'accessibilité) soumet les services de commerce électronique à des exigences d'accessibilité, sauf pour les microentreprises. La taille de l'éditeur n'étant pas connue, ce **risque** reste conditionnel (déduit).

### 5.5 Conformité légale France / UE : risques, pas conclusions

Rappel de méthode : chaque point décrit un **risque** au regard d'un texte. Aucun ne constitue un constat d'infraction, qui relèverait de la DGCCRF ou d'un juge.

#### 5.5.1 Identification de l'éditeur

- **Constaté** (`soya/pol/legal-notice.txt` et `contact-information.txt` ; le lien « Mentions légales » du pied de page pointe vers `/policies/contact-information`) :
  - site « édité par la société : Dénomination sociale : soya-paris.com », siège au « 5830 E 2nd St, Ste 7000, Casper, Wyoming 82609 Us », e-mail `info@soya-paris.com`, hébergeur Shopify ;
  - **ni forme sociale, ni numéro d'immatriculation, ni capital, ni téléphone, ni directeur de la publication** ;
  - litiges renvoyés « [aux] tribunaux compétents […] dont dépend le siège social ».
- **Indice** : cette adresse exacte (Ste 7000) apparaît dans le registre des agents enregistrés du Wyoming, pour PRA-Wyoming LLC et pour Republic Registered Agent LLC. D'autres agents sont inscrits dans le même immeuble, à d'autres numéros de bureau ([CRA Roster](https://sos.wyo.gov/Business/Docs/CRA-Roster.pdf), PDF téléchargé et lu le 26/09/2026). Il s'agirait donc d'une adresse de domiciliation plutôt que d'un lieu d'exploitation (déduit).
- **Textes** :
  - LCEN, article 1-1, dans sa rédaction issue de la loi SREN du 21 mai 2024 : mentions d'identification obligatoires ([synthèse LegalPlace](https://www.legalplace.fr/guides/mentions-legales/)) ;
  - Code de la consommation, articles L111-1, R111-1 et L221-5 : identité, adresse géographique et coordonnées téléphoniques et électroniques du professionnel, à fournir avant le contrat ;
  - une clause qui attribue la compétence au tribunal du siège (ici, le Wyoming) est en principe inopposable au consommateur, qui peut agir devant le juge de son domicile.

#### 5.5.2 Conditions générales

- **Constaté** :
  - le lien « Conditions Générales de Vente » du pied de page pointe vers `/policies/terms-of-service`, c'est-à-dire des « Conditions d'utilisation » tirées du modèle générique de Shopify ;
  - `/policies/terms-of-sale` renvoie une 404 (`soya/pol/terms-of-sale.html`, titre « 404 Page introuvable ») ;
  - l'article 18 déclare le contrat « régi[…] et interprété[…] en vertu des lois de 5830 E 2nd St, Ste 7000, Casper, Wyoming 82609 Us » (une adresse collée à la place d'un droit), alors que les mentions légales invoquent le droit français ;
  - l'article 13 (« EXCLUSION DE GARANTIES ET LIMITATION DE RESPONSABILITÉ ») écarte notamment les garanties « de qualité marchande, […] de durabilité » (`soya/pol/terms-of-service.txt`).
- **Textes** :
  - article L241-5 du Code de la consommation : les clauses qui écartent ou limitent la garantie légale de conformité sont réputées non écrites ;
  - article 1127-1 du Code civil : les stipulations contractuelles doivent être mises à disposition sous une forme conservable.

#### 5.5.3 Rétractation, retour et « 30 nuits d'essai »

- **Constaté** :
  - aucune occurrence de « rétractation » ni de « 14 jours » dans les politiques, les pages capturées, `pdp3.html` ou `home.html` (recherche plein texte) ;
  - la politique de retour exige que l'article soit « dans l'état où vous l'avez reçu et dans son emballage d'origine ». Elle limite le retour à 30 jours « depuis votre achat », demande un reçu ou une preuve d'achat, et ne donne l'adresse de retour que sur demande (`soya/pol/refund-policy.txt`) ;
  - en même temps, la fiche promet « 30 nuits d'essai — Satisfait ou remboursé » et « Si, après 30 jours, vous n'êtes pas satisfait de votre oreiller Soya, renvoyez-le-nous pour un remboursement complet » (`soya/web/pdp3_fulltext.txt`, lignes 200 à 205). La politique d'expédition ajoute qu'on peut le « retourner sans frais » (`soya/pol/shipping-policy.txt`) ;
  - les délais annoncés divergent :

| Source | Traitement | Livraison |
|---|---|---|
| Politique d'expédition | « 1 jour ouvré » | 3 à 6 jours ouvrés |
| Onglet « Livraison & retours » de la fiche | « 1 à 2 jours » | 3 à 5 jours |
| FAQ | « 1 à 2 jours ouvrés » | 3 à 6 jours |

- **Textes** :
  - Code de la consommation : L221-5 (information sur le droit de rétractation et formulaire type), L221-18 (14 jours à compter de la réception), L221-20 (délai prolongé de 12 mois si l'information manque), L221-23 (le consommateur ne répond que de la dépréciation due à des manipulations allant au-delà de ce qui est nécessaire pour établir la nature, les caractéristiques et le bon fonctionnement du bien) et L221-24 (remboursement sous 14 jours) ;
  - CJUE, 27 mars 2019, *slewo*, C-681/17 : un matelas dont le film protecteur a été retiré après la livraison reste soumis au droit de rétractation ([INC](https://www.inc-conso.fr/content/achat-dun-matelas-sur-internet-descelle-apres-livraison-retractation-possible)). Le raisonnement semble transposable à un oreiller (déduit).
- **Risque** : l'écart entre la promesse d'essai et une politique qui exige l'état d'origine pourrait être qualifié d'ambigu ou de trompeur (article L121-2).

#### 5.5.4 Garantie légale et médiation

- **Constaté** : aucune mention de la garantie légale de conformité, des vices cachés ou d'un médiateur de la consommation. Les seules occurrences de « médiat » sont des « immédiatement ».
- **Textes** :
  - articles L217-3 et suivants (garantie de conformité), L111-1 (information sur les garanties légales) et L616-1 / R616-1 (coordonnées du médiateur) ;
  - le lien vers la plateforme européenne de règlement en ligne des litiges n'est plus exigé : le règlement (UE) 2024/3228 du 19 décembre 2024 a abrogé le règlement 524/2013 avec effet au 20 juillet 2025 (référence EUR-Lex [CELEX 32024R3228](https://eur-lex.europa.eu/legal-content/FR/ALL/?uri=CELEX:32024R3228), confirmée par recherche web ; la page EUR-Lex elle-même a renvoyé une vérification anti-robot).

#### 5.5.5 Urgence : compte à rebours et French Days

- **Constaté** (`soya/home.html`, `window.essentialCountdownTimerConfigs`) :
  - la campagne « FRENCH DAYS » (suivie d'un drapeau français dans son nom) est configurée avec `"timerType":"recurring"`, `"recurringDays":[1,2,3,4,5,6,0]`, `"startType":"today"` et `"endType":"never"` ;
  - ses dates d'origine (`startDate` 2025-10-16T22:00Z, `endDate` 2025-10-21T21:59Z) sont dépassées, et elle a été mise à jour le 18/09/2026 (`updatedAt`) ;
  - la popup Klaviyo affirme « PS : L'offre se termine aujourd'hui à minuit 00h » ;
  - le bloc d'achat ajoute « La meilleure offre de l'année » et « Offre exceptionnelle French Days, dans la limite des stocks disponibles » (bloc `liquid_JrVWqc`) ;
  - les French Days officiels de la rentrée 2026 ont eu lieu « du lundi 7 au lundi 14 septembre 2026 inclus » ([site officiel](https://www.rejoindrelesfrenchdays.com/), consulté le 26/09/2026), soit 11 jours avant la capture.

**Relevés du compteur, 25/09/2026** (`soya/cap/funnel.json`, champs `timerA1`, `timerB` et `now` ; `soya/cap/funnel2.json`) :

| Heure du relevé (UTC) | Compteur affiché |
|---|---|
| 21:58:21 | 00:00:39 |
| 21:59:21 | 00:00:00 |
| 22:00:05, nouvelle session (minuit à Paris) | **23:58:56** |

Le compteur vise donc 23 h 59, heure de Paris, et repart pour un nouveau cycle dès minuit.

- **Texte** : l'article L121-4 7° répute trompeur le fait « de déclarer faussement qu'un produit ou un service ne sera disponible que pendant une période très limitée » ([Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563107), version en vigueur depuis le 28 mai 2022). Risque élevé.

#### 5.5.6 Rareté : « 89 % du stock écoulé »

- **Constaté** (`soya/pdp3.html`) :
  - « 89% du stock déjà écoulé », la barre `width:89%` et « Dernière mise à jour : il y a quelques secondes. » sont **du texte littéral** dans le bloc `liquid_JrVWqc` ;
  - « Plus que quelques exemplaires en stock » est aussi littéral (bloc `liquid_JwXkcr`) ;
  - les 4 variantes du Soya 3.0 ont `inventoryManagement: null` et `inventoryPolicy: "continue"`, avec des stocks négatifs : Blanc -3888, Bleu -1999, Gris -2431, Beige -1401. Ces valeurs négatives ne mesurent pas les ventes (déduit : le stock n'est pas suivi).
- **Risque** : affirmation de rareté sans lien avec un stock réel (articles L121-2 et L121-4 7°).

#### 5.5.7 Avis et témoignages

- **Constaté** :
  - le bloc statique « Noté 4,8/5 – 15 637 avis » s'affiche sur les 19 fiches. Or Loox donne 4,3/5 sur 339 avis pour le 3.0, et **la somme des avis Loox des 19 produits est de 1 776**, soit environ 9 fois moins que le nombre affiché (`soya/web/loox_vs_affiche.tsv`, valeurs `MetafieldLooxCount` revérifiées dans `soya/web/p_*.html`) ;
  - sept produits ont une note Loox de 3/5 ou moins (1,0 pour les draps en soie, 1,3 pour l'oreiller de voyage, 1,5 pour les draps SoyaFresh, 2,0, 2,7, 2,8 et 3,0), tous sur très peu d'avis (1 à 4), et affichent pourtant « 4,8/5 » ;
  - un bloc `custom_liquid` (section `custom_liquid_rMBeUk`) reprend le HTML d'une autre boutique. Ses images sont hébergées sous `/s/files/1/0680/4589/7928/` (contre `/1/0935/5054/3180/` pour Soya), et l'identifiant de section `template--24247348527436__ev_review_8Lp6Dy` diffère des gabarits de Soya (`template--32068952621388`). L'hébergement d'images par un autre compte Shopify est l'indice le plus solide : l'identifiant de gabarit, seul, pourrait venir d'un ancien thème ;
  - ce bloc contient 4 témoignages marqués « Acheteur vérifié », sous le titre « Plus de 100 000 clients se réveillent désormais – sans douleurs ! » ;
  - les mêmes textes figurent sur d'autres sites :
    - [milaris.co](https://milaris.co/products/orthosleep%C2%AE-oreiller-ergonomique), sous les noms Richard S., Sarah M., Barbara P. et Anthony M., avec 4 mentions « Acheteur vérifié » ;
    - [juvilor.com](https://juvilor.com/), signés « Richard. S, Montréal, QC », « Sarah Levresque, Trois-Rivières, QC » et « Barbara. P, Drummondville, QC », avec un texte qui cite « l'oreiller OrthoDream ».

    Les deux pages ont été ouvertes le 25/09/2026 et de nouveau le 26/09/2026 (boutiques `220fa5-3.myshopify.com` et `zfdzaj-px.myshopify.com`) ;
  - aucune information n'est publiée sur la collecte ou le contrôle des avis.
- **Textes** :
  - article L111-7-2 et article D111-17 : dire si une procédure de contrôle existe, dater l'avis et l'expérience, préciser les critères de classement ;
  - article L121-4 27° (affirmer que des avis proviennent de consommateurs ayant réellement utilisé le produit sans avoir pris de mesures pour le vérifier) et 28° (diffuser de faux avis ou modifier des avis).
- **Qualification** : il s'agit d'**indices forts**, pas d'une preuve formelle de faux avis.

#### 5.5.8 Prix barrés (directive Omnibus)

**Constaté** (`soya/cap/funnel.json`, champ `pdpBuy`, prix en EUR) :

| Offre | Prix affiché | Prix barré | Réduction calculée |
|---|---|---|---|
| 1x Oreiller | 69,90 € | 139,90 € | -50,0 % |
| Pack Duo | 98,90 € | 279,80 € | -64,7 % |
| Pack Famille (3 + 1 « offert », le 4e inclus dans le prix de référence : 4 × 139,90) | 139,90 € | 559,60 € | -75,0 % |
| +1 housse | 14,90 € | 39,90 € | -62,7 % |
| +2 housses | 14,90 € | 79,80 € | -81,3 % |

- la bannière annonce pourtant « jusqu'à -60 % » ;
- sur la même page, le bloc de recommandations affiche « Oreiller Soya 3.0 – Prix de vente €139,90 » (`soya/cap/pdp3-d-text.txt`, lignes 129 à 131) ;
- le prix catalogue du Soya 3.0 est 139,90 € sans prix barré, la remise étant appliquée par Kaching. La housse 3.0 vendue seule est à 17,90 € barré 39,90 € (`soya/catalogue.json`).

**Texte** : article L112-1-1 : le prix de référence est le prix le plus bas pratiqué au cours des 30 jours précédant la réduction.

**Risque (déduit, sans historique de prix pour le vérifier)** : si l'offre à 69,90 € est permanente, comme le suggère la configuration « recurring / never » du compte à rebours, le prix de 139,90 € serait un prix de référence qui n'a jamais été réellement pratiqué. Le même raisonnement vaut pour la housse : le prix barré de 39,90 € ne correspond pas à son prix de vente seule, qui est de 17,90 €.

#### 5.5.9 Allégations de santé

- **Constaté** :
  - visuels :
    - « L'OREILLER ERGONOMIQUE N°1 : RECOMMANDÉ PAR LES OSTÉOPATHES » (planche `soya/gallery/sheet-1.jpg`, vignettes 03 et 14) ;
    - « SOULAGEZ VOS DOULEURS ET RETROUVEZ UN SOMMEIL RÉPARATEUR », avec les pictos « réduit l'apnée du sommeil », « réduit le reflux gastrique », « soulage le cou et le dos » et « soulage les épaules » (vignette 07) ;
    - « PENSÉ POUR VOTRE SANTÉ & VOTRE CONFORT » (vignette 06) ;
    - comparatif « OREILLER CLASSIQUE ✕ / OREILLER SOYA 2.0 ✓ » réutilisé sur la fiche 3.0 (vignette 11) ;
  - fiche (`soya/cap/pdp3-d-text.txt`) :
    - « L'ÉVOLUTION DU CONFORT — L'OREILLER ORTHOPÉDIQUE CONÇU AVEC DES PRATICIENS » ;
    - « Soulage les douleurs cervicales et dorsales dès la première nuit » ;
    - « Amélioration prouvée de la posture et du sommeil » ;
    - « SOYA 3.0 — L'évolution de vos nuits, validée par les experts » ;
    - « Recommandé par plus de 200 professionnels de santé » ;
    - « Dr. Marc R., Chiropracteur » ;
  - autres emplacements :
    - témoignages titrés « Migraines » et « Ronflements » ;
    - popup Kaching : « Traite les douleurs chroniques & mauvaises postures » (`soya/home.html`, `soya/pdp3.html`) ;
    - « soulager des conditions comme le reflux acide » dans la description de l'« Ensemble d'oreillers réglables » (`soya/catalogue.json`, handle `ensemble-doreillers-reglables`) ;
  - aucune étude, aucun marquage CE et aucun statut de dispositif médical ne sont présentés.
- **Textes** :
  - article L121-4 16° : « affirmer faussement qu'un produit ou une prestation de services est de nature à guérir des maladies, des dysfonctionnements ou des malformations » ;
  - article L121-2 : allégations non justifiées, superlatif « N°1 » ;
  - règlement (UE) 2017/745, article 2 : un produit présenté pour traiter ou atténuer une maladie, comme l'apnée du sommeil, entre dans la définition du dispositif médical, avec les obligations qui en découlent. Risque de requalification.

#### 5.5.10 Labels et données personnelles

- **Labels** :
  - le premier visuel de la fiche (`18.png`) affiche les logos CertiPUR et OEKO-TEX, à côté d'un badge « 30 nuits d'essai » (`soya/cap/slices/funnel-pdp-top-00.jpg`) ;
  - les descriptions SoyaFresh disent « certifiés OEKO-TEX® » (`soya/catalogue.json`) ;
  - aucun numéro de certificat ni organisme n'est indiqué, alors qu'OEKO-TEX propose une vérification des numéros d'étiquette via [Label Check](https://www.oeko-tex.com/en/label-check/) ;
  - texte applicable : L121-4 2° (« afficher un certificat, un label de qualité ou un équivalent sans avoir obtenu l'autorisation nécessaire »). C'est une question à vérifier, pas un constat.
- **Données personnelles** :
  - la politique de confidentialité reprend le modèle Shopify. Pour la rubrique « Marketing et publicité » (e-mail, SMS, courrier), elle invoque « notre intérêt légitime à vendre nos produits » (art. 6(1)(f) RGPD). Elle renvoie à la configuration du navigateur pour les cookies et demande de « nous appeler » sans donner de numéro (`soya/pol/privacy-policy.txt`) ;
  - aucun représentant n'est désigné dans l'UE (RGPD, article 27), alors que les mentions légales situent l'éditeur au Wyoming (déduit) ;
  - le pied de page affiche un lien anglais « Your Privacy Choices » vers `/pages/data-sharing-opt-out`, la page d'opposition au partage de données prévue pour les États-Unis. Constaté depuis l'IP américaine ;
  - depuis cette IP, les pixels TikTok, Google Ads, Pinterest, Snapchat et Meta sont appelés entre 2,1 s et 3,0 s après l'arrivée, sans aucune interaction (`soya-tech/net-home-m.json`, phase `initial`). Le script `consent-tracking-api.js` de Shopify est chargé à 2,3 s. Le comportement pour un visiteur situé en France reste à vérifier ;
  - textes : article L34-5 du Code des postes et des communications électroniques (prospection par e-mail ou SMS soumise au consentement préalable, sauf clients existants pour des produits analogues) et article 82 de la loi Informatique et Libertés (consentement préalable aux traceurs non essentiels).
- **Sanctions encourues** : pour les pratiques commerciales trompeuses, l'article L132-2 prévoit jusqu'à 2 ans d'emprisonnement et 300 000 € d'amende, montant pouvant être porté à 10 % du chiffre d'affaires. Cela donne l'ordre de grandeur du risque, sans préjuger d'une qualification.

#### 5.5.11 Chiffres de notoriété sans méthode publiée

- **Constaté** :
  - « Plus de 100 000 clients se réveillent désormais – sans douleurs ! » (`soya/pdp3.html`) et « Après plus de 100 000 dormeurs conquis par le SOYA 2.0 » (`soya/cap/funnel.json`, `pdpBuy`) ;
  - « Recommandé par plus de 200 professionnels de santé » ;
  - sur l'accueil : « 96 % des utilisateurs ont constaté un soulagement durable de la douleur cervicale… », 91 % et 87 %, « issues d'un questionnaire envoyé à l'ensemble des clients de nos oreillers en juillet 2025 » (`soya/cap/home-d-text.txt` lignes 148 à 150, repris sur la fiche : `soya/cap/pdp3-d-text.txt` lignes 192 à 194).
  - Aucune taille d'échantillon, aucun taux de réponse ni aucune source n'est publié.
- **Mise en perspective (déduit)** : le domaine a été enregistré le 5 septembre 2024 (`soya/web/rdap.json`), et le Soya 2.0 compte 1 257 avis Loox. Ces éléments ne contredisent pas formellement le chiffre de 100 000, mais ils ne l'étayent pas.
- **Risque** : allégations chiffrées non justifiées (article L121-2), d'autant que le chiffre de 96 % porte sur un effet de santé.

### 5.6 Ce que Somnila doit en retenir

1. **Performance comme avantage concurrentiel.** La fiche Soya 3.0 transfère environ 27 Mo avant tout défilement, dont 13,4 Mo pour 4 SVG d'une section située 4 écrans plus bas. Une fiche Somnila sous 3 Mo, avec des visuels WebP passés par `image_url`, des vidéos transcodées avec poster et sans lecture forcée, serait environ 9 fois plus légère (déduit : 27,5 Mo contre un objectif de 3 Mo).
2. **SEO : le terrain est libre.** Soya n'a ni blog, ni collections par catégorie, ni titres optimisés, et son H1 d'accueil est un logo. Il faut des titres et des descriptions rédigés, un H1 textuel, des données structurées exactes (prix payé, vrais avis) et un contenu informatif sans promesse médicale.
3. **Confiance légale visible.** Il faut :
   - des mentions légales complètes (SIREN, forme, capital, téléphone, directeur de la publication) ;
   - des CGV françaises ;
   - le droit de rétractation de 14 jours avec son formulaire ;
   - la garantie légale de conformité et un médiateur de la consommation ;
   - une page « comment nous collectons les avis ».

   Chacun de ces points est une case que Soya ne coche pas, et peut devenir un argument dans le pied de page et le bloc d'achat.
4. **Aucune mécanique artificielle.** Pas de compte à rebours récurrent, de stock factice, de prix de référence non pratiqué, de note globale figée ni de témoignage emprunté. C'est déjà la ligne de Somnila, et le dossier montre qu'elle est aussi une protection juridique.
5. **Accessibilité.** Il faut :
   - des contrastes AA sur tous les blocs, y compris ceux des applications ;
   - 12 px minimum ;
   - le zoom autorisé ;
   - des cibles tactiles d'au moins 24 px ;
   - un bouton pause sur toute vidéo en lecture automatique, et des sous-titres pour les vidéos parlées.
