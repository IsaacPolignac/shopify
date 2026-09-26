## Fiche produit — Oreiller Soya 3.0, puis enfant, draps en soie, couette SoyaFresh et Oreiller 1.0

*Section contre-vérifiée le 25/09/2026. Chaque chiffre ci-dessous a été recontrôlé dans les fichiers cités. « Constaté » signifie lu dans le code, une mesure ou une capture. « Déduit » signifie une interprétation. Pour les accusations, on parle d'« indice » ou de « risque », jamais de preuve.*

### 0. Sources, méthode, limites

- **Dossier de preuves** (`soya/` = `build/analyse/soya-paris/preuves/soya`) : `pdp3.html`, `catalogue.json`, `cap/pdp3-*.json`, `cap/*-buybox.txt`, `cap/funnel*.json`, `cap/slices/*.jpg`, `gallery/sheet-*.jpg`, `svg_sizes.txt`, `cap/videos.txt`, `web/*` (HTML des 19 fiches, `pdp3_fulltext.txt`, `loox_vs_affiche.tsv`).
- **Mesures complémentaires** faites le 25/09/2026 vers 22 h 31 UTC (`pdpwork/` = `build/analyse/soya-paris/preuves/pdpwork`). Playwright passe par le même relais que la collecte initiale, avec le cookie marché France et l'euro. Les SVG sont remplacés par un rectangle, et les vidéos et Klaviyo sont bloqués. Résultats : positions des éléments (`pdp3-measure.json`), apparition de la barre collante (`pdp3-sticky.json`, relevés tous les 300 px de défilement), fiches secondaires en EUR (`others.json`), captures `*-top.png` et `*-sticky.png`.
- **Contre-vérification** : relecture de `pdp3.html` (configuration Kaching `kaching-bundles-deal-block-settings`, configuration du minuteur `window.essentialCountdownTimerConfigs`, flux Loox, JSON-LD), des 19 `web/p_*.html` et des captures. Nouvelles requêtes HEAD : vidéo de fond (200, `content-length` 58 110 989) ; avatar `https://cdn.shopify.com/s/files/1/0680/4589/7928/files/90.png?v=1739804305` (200, image/png, 961 894 octets). Articles de loi ouverts sur Légifrance : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044549592 (L112-1-1, prix antérieur = prix le plus bas des 30 derniers jours) et https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032227250/2026-04-25 (L121-17, consentement exprès à tout paiement supplémentaire, remboursement si consentement par défaut).
- **Limites** : l'ajout au panier ne s'enregistre pas en environnement automatisé et le checkout répond « Request Forbidden » (`cap/funnel.json` : cart count 0, checkout « Request Forbidden »). Rien n'est affirmé sur le panier. Le widget Loox ne s'est pas rendu (6 335 px de blanc sur la capture). Web.archive.org n'est pas joignable. On n'a pas d'historique de prix.
- **Précision sur les avis intégrés** : les photos des 40 avis intégrés sont toutes (40/40) sur `images.loox.io`, pas sur la boutique.
- **Contexte daté (déduit)** : la boutique actuelle (identifiant de fichiers `0935/5054/3180`, domaine `5xfyfp-ti.myshopify.com`) semble avoir été remplie le **19/10/2025**. Ce jour-là, on trouve la création de 17 des 19 produits (`catalogue.json`, champ `created` ; les 2 autres, enfant et housse enfant, datent du 2026-05-09), le téléversement des photos des 20 avis antérieurs (chemin `images.loox.io/uploads/2025/10/19/`), la création du minuteur (`createdAt 2025-10-19T13:35`) et le versionnage (`?v=`, horodatage Unix) de la photo du « Dr. Marc » (`87.webp?v=1760867140`), de l'image des moyens de paiement (`v=1760867196`), de 57.svg à 61.svg (`v=1760868437` à `1760868787`) et de l'affiche de la vidéo de fond (`v=1760869025`). Tout cela évoque une migration ou une recréation de boutique à cette date. Les constats sur l'import d'avis et sur les avatars hébergés ailleurs (§ 6) sont à lire avec cette hypothèse en tête.

### 1. Premier écran desktop (1440 × 900), de haut en bas

| # | Élément | Position / taille (px) | Style constaté | Preuve |
|---|---|---|---|---|
| 1 | Bandeau « FRENCH DAYS 🇫🇷 — Jusqu'à -60% sur tout le site ! » + compte à rebours HH:MM:SS (application Essential Countdown Timer) | y 0–58, pleine largeur | fond marine #042146 | pdp3-measure.json `ann` ; config du minuteur (§ 7) |
| 2 | En-tête : logo SOYA PARIS à gauche, menu de 6 liens sur 2 lignes, EUR, recherche, compte, panier | y 58–173 (115) | Roboto 16 px | `header`, pdp3-d-top.png |
| 3 | Colonne de vignettes | x 48, **64 × 70**, pas de 80 px, 12 visibles | soulignée sur l'active | `thumb0` (y 222), `thumb1` (y 302) |
| 4 | Image principale : packshot blanc sur fond bleu nuit, badges CertiPUR / OEKO-TEX / « 30 nuits d'essai » | x 160–826, y 222–888, 666 × 666 (≈ 17,6 cm) | coins arrondis | `firstMedia`, pdp3-d-top.png |
| 5 | Étoiles + « **Noté 4,8/5** – 15 637 avis clients » | y 225 (h 19) | 16 px gras #042146, 5 étoiles en images icons8 de 14 px | `rating`, pdp3.html car. ~241 413 |
| 6 | Surtitre « L'ÉVOLUTION DU CONFORT — L'OREILLER ORTHOPÉDIQUE CONÇU AVEC DES PRATICIENS » | y 252–297 (2 lignes) | 14 px, capitales, #636366 | `eyebrow` |
| 7 | H1 « Oreiller Soya 3.0 » | y 313–351 | Roboto 500, 32 px, #042146 | `h1` |
| 8 | 4 puces | y 375–507, pas de 36 px | 15 px #1A1A1A | `bullet1/4` |
| 9 | 4 bulles vidéo : Concept / Lequel choisir ? / Avis clients / FAQ | y 539–657, cercles de 78 px | anneau #0f2844 de 3 px | `stories` |
| 10 | Séparateur « FRENCH DAYS \| JUSQU'À -60% » | y 706–726 | 14 px gras | `divider` |
| 11 | Carte « 1x Oreiller — Livraison rapide offerte », €69,90 / ~~€139,90~~, « Couleur » + menu Blanc | y 735 → ~934 ; prix à y 758 | prix 16 px gras #4974CA, barré 12 px #FF4D4D, bordure #4974CA, rayon 13 | `bars`, `price1`, `cmp1` |
| — | **Pli à 900 px** | | | |
| 12 | « +1 Housse de Rechange » (case **cochée**, menu Bleu) €14,90 / ~~€39,90~~ | ~y 884–934 | fond #4974CA à 30 % | cap/slices/pdp3-d-full-00.jpg |
| 13 | Pack Duo (2 lignes « +1 Housse de Rechange ») | y 944–1133 | badge marine « Pack Duo » | `bars` |
| 14 | Pack Famille « 3x Oreillers +1 Offert » (2 lignes « +2 Housses de Rechange ») | y 1143–1332 | badge « Pack Famille » | `bars` |
| 15 | **Ajouter au panier** | y 1347–1407, 518 × 60 (≈ 13,7 × 1,6 cm) | fond #042146, rayon 10, 16 px gras blanc | `atc` |
| 16 | « Plus que quelques exemplaires en stock » | y 1439 | 14 px 600, #E53935 | `stock` |
| 17 | « 30 nuits d'essai — Satisfait ou remboursé » | y 1465 | 14 px #0D67E7 (« Bleu SOYA » en commentaire CSS) | `trial` |
| 18 | Logos de paiement (Visa, Amex, Discover, Mastercard, Apple Pay, PayPal, Shop Pay, Amazon Pay, Afterpay) : une **image fixe** `soya-payments.svg`, pas les icônes dynamiques de Shopify | y 1501–1539 | | `pay`, pdp3-d-sticky.png |
| 19 | Encadré « FRENCH DAYS JUSQU'À -60% / La meilleure offre de l'année », barre « 89% du stock déjà écoulé » | titre y 1585, barre 89 % à y 1688 | Helvetica Neue 28 px 800, rouge #D94343 | `fdTitle`, `stock89` |
| 20 | Encadré « SOYA 3.0 — L'évolution de vos nuits, validée par les experts » + 4 arguments cochés | y 1816–2461 | fond #F8F8F8 | `descBox` |
| 21 | Témoignage « Dr. Marc R., Chiropracteur » + « Recommandé par plus de 200 professionnels de santé » | nom à y 2576 | photo ronde | `doctor` |
| 22 | 5 accordéons : Matériaux & dimensions, Durabilité, Instructions de lavage, Livraison & retours, Garantie 30 nuits | y 2671–3003 (66 px chacun) | capitales | `acc` |
| 23 | « Complétez pour un confort ultime ! » : housse 3.0 à 17,90 € (~~39,90~~), coussin lombaire à 49,90 € | à partir de y 3028 | boutons « + Ajouter » | `compl`, funnel.json `pdpBuy` |

Constat : au premier écran desktop, on voit l'offre 1x et son prix, mais le bouton est 447 px (≈ 11,8 cm) sous le pli. La popup Klaviyo commence à glisser depuis la droite vers 6,5 s (animation `klaviyo-slideinright` de 1 000 ms, `cap/pdp3-d.json` → anims ; `cap/slices/pdp3-d-view-6500.jpg`). Une fois en place (`pdp3-d-full-00.jpg`), elle mesure environ 950 × 580 px, de x ≈ 470 à 1 420 (capture réduite à 1 000 px de large, facteur 1,44). Elle masque donc les deux tiers droits de l'écran, bloc de prix compris.

### 2. Premier écran mobile (390 × 844)

| # | Élément | Position (px) | Preuve |
|---|---|---|---|
| 1 | Bandeau compte à rebours | y 0–50 | pdp3-measure.json mobile `ann` |
| 2 | En-tête : menu burger, recherche, logo centré, panier | y 50–101 | `header` |
| 3 | Image produit 390 × 390 | y 101–491 | `firstMedia` |
| 4 | Rangée de vignettes 56 × 62, pas de 64 px (5 entières + 1 coupée visibles, 12 au total) | y 511–573 | `thumb0/1`, pdp3-m-top.png |
| 5 | Note « 4,8/5 – 15 637 avis » (14 px gras) | y 596 | `rating` |
| 6 | Surtitre sur 2 lignes | y 620–665 | `eyebrow` |
| 7 | H1 22 px | y 673–699 | `h1` |
| 8 | Puces 1 et 2 entières, puce 3 coupée par le pli (45 px chacune, 14 px) | y 723 → **pli à 844** | `bullet1`, pdp3-m-top.png |
| 9 | Puce 4 | y 871–916 | `bullet4` |
| 10 | Stories | y 948–1066 | `stories` |
| 11 | Séparateur French Days | y 1106 | `divider` |
| 12 | Offres (1x ≈ 1136–1369, Duo 1379–1568, Famille 1578–1767) ; **prix 69,90 € à y 1159** | y 1136–1772 | `bars`, `price1` |
| 13 | **Bouton 350 × 54** (≈ 9,3 × 1,4 cm), texte 14 px | y 1782–1836 | `atc` |
| 14 | Stock (1861), essai (1887), paiement (1923–1948), encadré 89 % (titre 2028, barre 2151), description (2279–3171), Dr (3321), accordéons (3412–3736), compléments (3761) | | pdp3-measure.json |

Constat : le premier écran mobile ne montre ni prix ni bouton. Le prix arrive à 1,37 écran et le bouton à 2,1 écrans. En mobile, la popup Klaviyo prend la forme d'un panneau du bas d'environ 476 px (y ≈ 368–844), soit 56 % de l'écran (`cap/slices/pdp3-m-full-00.jpg`).

### 3. Barre d'achat collante

Logique du thème (`assets/theme.js`, classe ProductQuickAdd) : la barre s'affiche quand le formulaire d'achat sort de l'écran et se cache à l'arrivée sur le pied de page. L'option de barre collante de Kaching est désactivée (`stickyAtcEnabled false`) : c'est donc celle du thème Impact.

- **Desktop** : carte flottante de 560 × 114 px (x 864, 16 px au-dessus du bas de l'écran). Elle est masquée à scrollY 1 200 et visible à 1 500 (`pdp3-sticky.json`, relevés tous les 300 px, formulaire à y 1347–1407). Elle contient la miniature, « Oreiller Soya 3.0 », **€139,90** et « Ajouter au panier » (`pdpwork/pdp3-d-sticky.png`). Elle affiche donc le prix catalogue et non les 69,90 € de l'offre. Même chose sur la fiche enfant : 99,90 € dans la barre contre 49,90 € dans l'offre (`others.json` → enfant-d sticky).
- **Mobile** : bande de 390 × 88 px en bas de l'écran, masquée à scrollY 1 800 et visible à 2 100, avec un seul bouton « Ajouter au panier » sans prix (`pdp3-m-sticky.png`).
- On ne sait pas quel prix est facturé si l'on ajoute au panier depuis cette barre, puisque le panier n'a pas pu être observé.

### 4. Galerie

**Composition** (constaté, `pdp3.html` → `product-gallery`) : 48 médias (catalogue : 48 images), soit 33 SVG et 15 PNG/JPG, filtrés par coloris. 12 sont visibles pour la couleur choisie (`pdp3-measure.json` : mediaVisible 12, thumbVisible 12). Répartition des SVG : Blanc 11, Bleu 11, Beige 10, Gris 1. La séquence est la même pour les 4 coloris :

| Rang | Visuel (Blanc → fichier / n° de planche) | Type | Texte incrusté |
|---|---|---|---|
| 1 | 18.png | packshot sur bleu nuit + 3 badges | badges seulement |
| 2 | 21.svg (#07) | bénéfices + 4 pictos : soulage le cou et le dos, **réduit l'apnée du sommeil**, **réduit le reflux gastrique**, soulage les épaules | « SOULAGEZ VOS DOULEURS ET RETROUVEZ UN SOMMEIL RÉPARATEUR » |
| 3 | 20.svg (#06) | infographie des zones (cervical haut/bas, tête, épaules, bras) | « PENSÉ POUR VOTRE SANTÉ & VOTRE CONFORT » |
| 4 | 22.svg (#08) | main qui presse la mousse | « UN ÉQUILIBRE PARFAIT ENTRE MAINTIEN ET CONFORT » |
| 5 | 23.svg (#09) | housse pincée | « FRAÎCHEUR ET BIEN-ÊTRE CHAQUE NUIT » |
| 6 | 24.svg (#10) | entretien en 4 étapes (dont machine à laver) | « CONÇU POUR DURER, NETTOYAGE & ENTRETIEN SIMPLIFIÉS » |
| 7 | 25.1.svg (#11, 1,11 Mo) | comparatif « OREILLER CLASSIQUE ✕ / **OREILLER SOYA 2.0** ✓ » | « UN ALIGNEMENT NATUREL POUR VOTRE COLONNE VERTÉBRALE » |
| 8 | 26.svg (#12) | couple, oreillers bleu et blanc, flèches de hauteur (sans chiffre) | « 2 HAUTEURS 1 SEUL OREILLER » |
| 9 | 27.svg (#13) | femme + 3 vignettes ventre / dos / côté | « UN MAINTIEN PARFAIT DANS TOUTES LES POSITIONS » |
| 10 | 28.svg (#14) | couple endormi | « L'OREILLER ERGONOMIQUE N°1 : RECOMMANDÉ PAR LES OSTÉOPATHES » |
| 11 | 29.svg (#15) | femme blonde qui enlace l'oreiller | « LE CONFORT RÉINVENTÉ POUR VOUS » |
| 12 | 19.svg (#05) | packshot seul | aucun |

Répartition par coloris : 2 packshots, 5 visuels de bénéfices, 1 comparatif, 4 mises en scène avec mannequins. 10 images sur 12 portent un titre incrusté. Le comparatif « SOYA 2.0 » est présent dans les 4 coloris : 25.1.svg (Blanc), 9.1.svg (Bleu, planche #39), IMG_9178.png (Gris) et 41.1.png (Beige) (`gallery/sheet-1.jpg`, `sheet-3.jpg`, `pdpwork/raster_sheet.jpg` 08 et 15). L'infographie des zones pèse exactement 404 799 octets dans les 4 coloris (20.svg, 4.svg, 36.svg, 4_284a…svg) : c'est vraisemblablement le même fichier, qui montre un oreiller blanc et turquoise quelle que soit la couleur choisie.

Le coloris Gris compte 11 raster et 1 SVG. **Deux** de ses 12 fichiers s'appellent « Firefly_Gemini_Flash_Generate_the_same_image_exactly_as_the_reference._Keep_all_text_icons_layout_compo_480153_3.png » et « …_5.png ». Le nom indique une déclinaison générée par IA (Adobe Firefly / Gemini) à partir d'un visuel existant (déduit du nom seulement). Les seules cotes chiffrées de la galerie se trouvent sur deux visuels gris : 62 × 37 cm (`raster_sheet.jpg` 04, Soya_3.0_grey_2_2e59…png), et 14,4 cm / 9 cm (`raster_sheet.jpg` 09, le fichier Firefly_3). Sur ce dernier, les deux hauteurs sont illustrées par deux oreillers différents côte à côte, un bleu et un gris. Tous les attributs alt valent « Oreiller Soya 3.0 » (48/48), et les alt du catalogue sont vides.

**Poids** (`svg_sizes.txt`, recalculé) :

| Ensemble | Fichiers | Poids |
|---|---|---|
| Galerie Blanc | 11 SVG | 5,24 Mo |
| Galerie Bleu | 11 SVG | 5,73 Mo (dont 9.1.svg à 1,13 Mo) |
| Galerie Beige | 10 SVG | 4,30 Mo |
| Galerie Gris | 1 SVG | 0,40 Mo |
| **Total galerie** | 33 SVG | **15,68 Mo** |
| Cartes « Dormeurs » (section sous le pli) | 4 SVG (58 à 61.svg) | **18,03 Mo** (4,30 à 4,71 Mo chacune) |
| « SOYA 3.0 : la nouvelle ère » | 57.svg | 1,56 Mo |
| Carte housse | 7.svg | 0,47 Mo |
| **Total des 39 SVG** | | **35,73 Mo** |

Chaque SVG est un export de type Canva (`viewBox 0 0 396.75 396.749985`, `zoomAndPan`) qui enveloppe des PNG en base64. Par exemple, 58.svg contient un PNG de 3 098 × 2 066 px pesant 3,45 Mo, plus un masque de 42 Ko (décodé depuis `pdpwork/s58.svg`). Les vignettes appellent les mêmes SVG avec d'autres paramètres width (`srcset …width=56 … width=192`, `loading="lazy"`), alors que l'image principale utilise `width=529`. Il est vraisemblable que chaque SVG vu soit téléchargé deux fois (déduit : l'URL diffère, et Shopify ne redimensionne pas un SVG).

**Vidéos** (tailles lues dans les en-têtes et les fichiers téléchargés, durées lues avec OpenCV) : 4 stories MP4 originales (chemin `/videos/c/o/`, donc non transcodées) en 1080 × 1920 à 30 i/s. Concept : 46,5 Mo, 45,2 s. Lequel choisir ? : 50,2 Mo, 49,1 s. Avis clients : 37,6 Mo, 36,5 s. FAQ : 109,2 Mo, 110,6 s. Le débit moyen est d'environ 1 Mo par seconde de vidéo. S'y ajoute une vidéo de fond transcodée par Shopify en 1080p à 7,2 Mbit/s (58,1 Mo, `preload="metadata"`, affiche, lecture auto muette en boucle) sur une section de 1440 × 500. Total : 301,6 Mo de fichiers.

**Point manqué dans la première version** (constaté dans le code) : les bulles ne sont pas de simples images. Au chargement de la page (`DOMContentLoaded`), un script lance chaque `<video>` de vignette en muet (`v.play()`), puis la met en pause et la remet à zéro au bout de 10 s (commentaire « teaser 10s sur les miniatures »). Les 4 fichiers originaux de 1080 × 1920 commencent donc à se télécharger dès l'ouverture, pour une bulle de 78 px. Au débit moyen des fichiers, 10 s représentent environ 10 Mo par bulle, donc de l'ordre de 40 Mo pour les 4 (estimation, déduit ; non mesuré, car les vidéos étaient bloquées pendant la capture). Au clic, la modale recharge le fichier original complet.

### 5. Offres Kaching (EUR)

Configuration lue dans `pdp3.html` car. ~68 318 (script `kaching-bundles-deal-block-settings`) : discountName « FRENCH DAYS | JUSQU'À -60% », prix fixes (`discountType specific`), `useProductCompareAtPrice true`, arrondi « .90 ». Le produit n'a pas de prix barré catalogue (`compare_at null`), et le prix barré affiché vaut 139,90 € × la quantité. **Aucun pourcentage n'est affiché** sur les cartes (`funnel.json` → pdpBuy). Les remises ci-dessous sont calculées.

| Offre | Prix | Barré | Remise implicite (calcul) | Prix par oreiller | Par rapport à l'offre 1x | Options pré-cochées (affichées) | Total par défaut (prix affichés) |
|---|---|---|---|---|---|---|---|
| 1x Oreiller | 69,90 € | 139,90 € | -50,0 % | 69,90 € | — | 1 ligne « +1 Housse » 14,90 € (~~39,90~~) | 84,80 € |
| Pack Duo (2) | 98,90 € | 279,80 € | -64,7 % | 49,45 € | -29,3 % | 2 lignes « +1 Housse » à 14,90 € (~~39,90~~) | 128,70 € |
| Pack Famille « 3x +1 Offert » (4) | 139,90 € | 559,60 € | -75,0 % | 34,98 € | -50,0 % | 2 lignes « +2 Housses » à 14,90 € (~~79,80~~) | 169,70 € |

- **Prix catalogue et prix réel** : le produit vaut 139,90 € dans `catalogue.json`, dans le JSON-LD et dans la barre collante. Le prix de l'offre 1x est de 69,90 €, exactement la moitié. C'est aussi, au centime près, le prix du Neck 01 de Somnila.
- **« Jusqu'à -60 % »** : le prix barré du pack Famille implique -75 %, ce qui dépasse le « jusqu'à » du titre.
- **Housse** : vendue seule 17,90 € (barré catalogue 39,90 €). Sur les lignes « +1 Housse » à 14,90 €, l'économie réelle est de 3,00 € (-16,8 %), et non de 25 € comme le suggère le barré. Sur les lignes « +2 Housses » à 14,90 € (barré 79,80 € = 2 × 39,90 €), si le prix couvre bien les deux housses, l'économie réelle serait de 20,90 € par rapport à 2 × 17,90 €. C'est invérifiable sans panier. Détail de configuration : la première housse du Duo est réglée à « -20 % » (17,90 € → 14,32 €), mais l'arrondi « .90 » l'affiche à 14,90 €.
- **Pré-cochage** (constaté) : les 5 options sont en `preselected: true`, et la case est cochée sur les captures (`pdp3-d-full-00.jpg`, `pdp3-m-full-00.jpg`). Le bouton n'affiche pas le total (`showTotalPriceInAddToCartButton false`). L'article L121-17 exige le consentement exprès du consommateur pour tout paiement supplémentaire et ouvre droit au remboursement quand ce consentement est donné par défaut (**risque**, panier non vérifié).
- **Prix de référence** : l'article L112-1-1 impose que le prix antérieur annoncé soit le prix le plus bas pratiqué dans les 30 jours précédant la réduction. On ignore depuis quand l'offre à 69,90 € est en place (**risque**, invérifiable ici). Le minuteur « FRENCH DAYS » a été créé le 19/10/2025 et modifié le 18/09/2026 (§ 7).
- **« Cadeaux offerts »** : `freeGifts` vaut [] sur les trois offres du 3.0 et `progressiveGiftsEnabled` vaut false, alors que les cartes Duo et Famille promettent « Livraison rapide et cadeaux offerts ». Sur la fiche 2.0 (`web/p_oreiller-soya-2-0.html`), la même application configure de vrais cadeaux (« +2 Housses de Rechange offertes », « +4 Housses de Rechange offertes ») avec des prix Kaching de 59,90 € / 89,90 € / 129,90 € pour un prix catalogue de 119,90 €. La livraison « offerte » est en réalité gratuite pour toutes les commandes (`pol/shipping-policy.txt`).
- Options désactivées dans Kaching : minuteur, alerte de stock bas, résumé des économies, total dans le bouton, barre collante.

### 6. Preuve sociale

| Indicateur | Valeur | Preuve |
|---|---|---|
| Affiché en tête du bloc d'achat | « Noté 4,8/5 – 15 637 avis clients » : texte fixe dans un bloc liquid, 5 étoiles en images hotlinkées depuis img.icons8.com | pdp3.html car. ~241 413 |
| Schéma produit ajouté par Loox | 4,3/5, **339 avis** | car. ~589 396 (`productLdJsonSchema`) |
| Résumé Loox de la boutique (SSR) | 4,6/5, **1 775 avis** | car. ~454 279 |
| Somme Loox des 19 fiches | 1 776 | web/loox_vs_affiche.tsv (recalculé) |
| Rapport affiché / réel | 15 637 = 46 fois les avis Loox du produit et 8,8 fois ceux de toute la boutique | calcul |
| Même bloc sur les 19 fiches | « 4,8/5 – 15 637 avis » partout (vérifié dans les 19 `web/p_*.html`), « avis parents » sur l'enfant | web/p_*.html |
| Fiche enfant (créée le 2026-05-09) | « 15 637 avis **parents** » contre 4 avis Loox à 4,0/5 | p_oreiller-soya-enfant.html |
| Autres fiches (Loox) | 1.0 : 2,8/5 sur 4 avis ; draps soie : 1,0/5 sur 1 avis ; couette : 5,0/5 sur 1 avis | loox_vs_affiche.tsv, JSON-LD de chaque fiche |
| 40 avis intégrés (flux Loox) | 26 Soya 2.0, 7 Soya 3.0, 7 autres produits ; 35 à 5/5, 2 à 4/5, 1 à 3/5, 2 à 1/5 ; **3 seulement marqués « Verified »** | loox-reviews-feed |
| Témoignages « Acheteur vérifié » | 4 cartes en HTML fixe (voir plus bas) | section ev_review_8Lp6Dy |
| Expert | « Dr. Marc R., Chiropracteur », photo noir et blanc en blouse avec stéthoscope et badge « Testé et approuvé » (`87.webp`, boutique actuelle) | car. ~265 129, avatars.jpg |
| Volumes annoncés | « plus de 100 000 dormeurs » / « dizaines de milliers » (JSON-LD) | pdp3-d-buybox.txt, catalogue.json |

- **Déduit** : la note affichée de 4,8 est identique à la note Loox du seul Soya 2.0 (4,8/5 sur 1 257 avis). Le chiffre a pu être repris de cette fiche. Aucun des compteurs Loox n'approche 15 637.
- **Mode du widget** : la balise `#looxReviews` porte l'attribut `data-loox-aggregate`, et le résumé annonce les 1 775 avis de la boutique. Le widget affiche donc les avis de **toute la boutique**, chacun avec le nom de son produit (déduit de l'attribut et du compteur). La présence de 26 avis 2.0 sur la fiche 3.0 relève de ce choix d'affichage, pas d'un maquillage. Elle n'en reste pas moins trompeuse pour qui lit vite.
- **Témoignages « Acheteur vérifié »** (constaté) : la section « Plus de 100 000 clients se réveillent désormais – sans douleurs ! » (onglets Douleur cervicale / Migraines / Posture / Ronflements, cartes Richard. S, Sarah. M, Barbara. P, Anthony. M) est le HTML **rendu** d'une section d'un autre gabarit (`template--24247348527436__ev_review_8Lp6Dy`), collé dans le bloc `custom_liquid_rMBeUk` du gabarit courant (`template--32068952621388`). Les blocs portent des noms anglais (`data-block="Neck pain"`). Aucun lien n'existe avec Loox. Les 4 avatars (88 à 91.png, 961 894 octets pour 90.png) sont hébergés sous `cdn.shopify.com/s/files/1/0680/4589/7928`, un autre identifiant de boutique que celui des fichiers actuels (`0935/5054/3180`), avec la version `v=1739804305` (17/02/2025). À qui appartient cette boutique ? Inconnu : une autre marque, la démo d'un kit de sections, ou une ancienne boutique de Soya (la boutique actuelle a été remplie le 19/10/2025). Deux témoignages promettent la fin des migraines et des ronflements « après trois nuits » ou « 2-3 nuits ».
- **Indices sur les avis Loox (pas des preuves)** :
  - Trois rafales de 4 avis 5/5 avec photo : le 2025-10-02 de 18:03:52 à 18:10:24 UTC (6 min 32 s ; tagués 2.0 ; photos de 375 × 500 et 240 × 320 px) ; le 2025-11-05 de 14:52:49 à 14:59:16 UTC (6 min 27 s ; tagués 3.0 ; 4 photos toutes en 1 200 × 1 600 px) ; le 2026-09-25 de 12:57:54 à 13:10:05 UTC (12 min 11 s, le jour même de la collecte ; tagués 2.0). **Aucun de ces 12 avis n'est « Verified ».**
  - Dans la dernière rafale, « Julien D. » écrit « Très satisfaite de nos SOYA 3.0 … je me réveille beaucoup plus détendue » : prénom masculin, accords au féminin, et produit 3.0 sous une étiquette 2.0. Sa photo montre bien deux oreillers bleus de type 3.0 (`reviews_sheet.jpg`).
  - « Yanis L. » apparaît deux fois (2025-04-24 et 2025-09-18). Cela peut être un client qui revient.
  - Les photos des 20 avis antérieurs au 19/10/2025 sont toutes téléversées le 2025/10/19. C'est cohérent avec un import d'avis lors de la migration supposée (§ 0), ce qui est une pratique normale en soi.
  - À l'inverse, les 12 photos ouvertes ont l'air de vraies photos d'amateur (`reviews_sheet.jpg`), et 3 avis négatifs restent visibles : « Fake! It's not a silk… polyester… The price for this sheet is 10€ maximum » (draps) ; « 3cm d'un côté et 5cm de l'autre alors qu'il devais faire 6cm … et 8cm », « attendre 3 mois avant d'avoir un remboursement et devoir les harceler » (enfant) ; « il me manque les deux housses supplémentaire qui devaient être offerte » (2.0, 3/5, 2026-09-19). Cela plaide pour un flux Loox au moins en partie réel.
- **Google et visiteur** : le JSON-LD ProductGroup du thème annonce 139,90 € en stock pour les 4 variantes (car. ~3 742). Loox ajoute au chargement un **second** bloc JSON-LD `Product`, qui ne contient que le nom et `aggregateRating 4.3 / 339`. Google lit donc 139,90 € et 4,3 sur 339 avis, là où le visiteur lit 69,90 € et 4,8 sur 15 637.

### 7. Rareté et urgence

| Élément | Emplacement | Fonctionnement réel | Preuve |
|---|---|---|---|
| Compte à rebours | bandeau, toutes pages | **Configuré comme perpétuel** : application Essential Countdown Timer, `name` « FRENCH DAYS 🇫🇷 », `timerType "recurring"`, `recurringDays [1,2,3,4,5,6,0]` (tous les jours), `startType "today"`, `endType "never"`, fin quotidienne à 21:59:00 UTC (23:59 à Paris). Fenêtre d'origine du 17 au 21/10/2025 (`startDate 2025-10-16T22:00Z`, `endDate 2025-10-21T21:59Z`). Créé le 2025-10-19, modifié le 2026-09-18. Observé : 00:00:39 à 21:58:21 UTC et 00:00:00 à 21:59:21 UTC (même session), puis 23:58:56 à 22:00:05 UTC (nouvelle session), puis 23:28:01 vers 22:31 UTC | pdp3.html car. ~591 046 (`essentialCountdownTimerConfigs`) ; funnel.json (timerA1, timerB) ; funnel2.json ; pdp3-d-top.png |
| « Plus que quelques exemplaires en stock » | sous le bouton, rouge #E53935 | span statique (`custom-alert-stock`, bloc `liquid_JwXkcr`) ; stock non suivi : `inventoryManagement null`, `inventoryPolicy continue`, quantités de -1 401 à -3 888 ; alerte native de Kaching désactivée | car. ~255 222 ; funnel.json → kaching |
| « 89% du stock déjà écoulé » + barre | encadré French Days (bloc `liquid_JrVWqc`) | `width:89%` en dur ; « Dernière mise à jour : il y a quelques secondes » en dur | car. ~257 653 |
| « La meilleure offre de l'année » / « dans la limite des stocks disponibles » | idem | texte fixe | idem |
| Popup « VOUS AVEZ OBTENU 60% DE RÉDUCTION — À l'occasion de la sortie de notre nouveau produit ! … PS : L'offre se termine aujourd'hui à minuit 00h. » | Klaviyo, à partir de 6,5 s | L'échéance est quotidienne. La justification (« sortie de notre nouveau produit ») contredit celle du bandeau (« French Days »), et le 3.0 est en vente depuis au moins novembre 2025 (plus ancien avis 3.0 intégré : 2025-11-04). Les « 60 % » ne correspondent à aucune carte Kaching (-50 % pour l'offre 1x) : on ignore si un code est réellement appliqué | pdp3-d-text.txt l. 351–366 ; pdp3-d-full-00.jpg |

Conclusion : l'ensemble de l'urgence est fixe ou recommence chaque jour. Le minuteur n'est pas une simple impression : sa configuration dit « récurrent, tous les jours, sans fin » (**constaté**). Il y a **risque** de pratique commerciale trompeuse, à faire qualifier par un juriste.

### 8. Texte

- **Titre** : « Oreiller Soya 3.0 ». **Surtitre** : « L'ÉVOLUTION DU CONFORT — L'OREILLER ORTHOPÉDIQUE CONÇU AVEC DES PRATICIENS ».
- **Puces** : 1) « Soulage les douleurs cervicales et dorsales dès la première nuit » (promesse médicale et temporelle) ; 2) « Deux hauteurs intégrées pour un confort ajusté à votre morphologie » (factuel) ; 3) « Amélioration **prouvée** de la posture et du sommeil » (aucune preuve citée) ; 4) « Soutien intelligent pour un sommeil profond et réparateur ».
- **Stories** (images extraites des MP4, `pdpwork/story_*.jpg`) : un homme face caméra présente le 3.0 en montrant les couches de mousse (Concept) ; il compare le 2.0 et le 3.0 (Lequel choisir ?) ; un duo lit des captures de commentaires Facebook avec « Soya Paris a répondu » (Avis clients) ; des questions arrivent en autocollants « Posez-nous des questions » : ferme ou moelleux, positions, hauteur, douleurs cervicales, adaptation, nouveautés par rapport au 2.0, ronflements, contenu du colis (FAQ). Les sous-titres sont animés, avec des mots surlignés en marine.
- **Description** : « Mousse intelligente 3.0 », « Position de sommeil optimale », « Housse respirante en **fibre de bambou** ». La description du catalogue et le JSON-LD parlent, eux, de « fibres respirantes et **ions d'argent 3.0** ».
- **Accordéons** : 62 cm × 37 cm, hauteurs 14,4 ou 9 cm ; « Certification OEKO-TEX® STANDARD 100 » sans numéro de certificat (aucun numéro nulle part dans la page) ; « Développé en collaboration avec des kinésithérapeutes et ostéopathes… exigences médicales » ; lavage à 30 °C en programme délicat, sans essorage, puis repassage ; délais « 1 à 2 jours + 3 à 5 jours » ; garantie de 30 nuits (« Si, après 30 jours, vous n'êtes pas satisfait… »).
- **FAQ** (13 questions) : les réponses 1 à 5 nomment « L'oreiller SOYA 2.0 », y compris dans le JSON-LD FAQPage (car. ~348 223). On y lit « apnée du sommeil légère à modérée », « Totalement testé et approuvré », « Les premiers effets se ressentent souvent dès la première nuit », et un délai de « 3 à 6 jours ».
- **Allégations santé et autorité** : le « Dr » est accolé à « Chiropracteur », ce qui peut laisser croire à un médecin, et le nom est tronqué. « Recommandé par plus de 200 professionnels de santé » et « N°1 : recommandé par les ostéopathes » ne citent aucune source (**risque** d'allégation trompeuse).
- **Contradictions** :
  - La politique de retour exige un article « dans l'état où vous l'avez reçu et dans son emballage d'origine », ce qui ne colle pas avec l'essai de 30 nuits d'un oreiller livré compressé.
  - Elle compte aussi les 30 jours « depuis votre achat », et non depuis la réception.
  - Seule la politique de livraison promet un retour « sans frais » (`pol/refund-policy.txt`, `pol/shipping-policy.txt`).
  - Le bandeau de réassurance dit « Garantie 30 jours ».
  - Les délais changent d'une page à l'autre : 1–2 j + 3–5 j (accordéon), 1–2 j ouvrés + 3–6 j (FAQ), 1 j ouvré + 3–6 j ouvrés (politique).

### 9. Sous le bloc d'achat, jusqu'au pied de page (desktop, `cap/pdp3-d.json` → info.secs)

| # | Section | y | h | Contenu |
|---|---|---|---|---|
| 1 | multi_column_fPbXVa | 3373 | 686 | « Quel que soit votre style de sommeil… SOYA 3.0 s'adapte à vous » : 4 cartes Dormeurs côté / dos / ventre / multi (SVG de 4,3 à 4,7 Mo) |
| 2 | before_after_image_t6fR8X | 4059 | 1147 | « Un bon sommeil commence par une bonne posture » + 4 paragraphes (« …dès la première nuit ») + curseur avant/après « Tirer » |
| 3 | image_link_blocks_NM3i3j | 5206 | 240 | 6 logos presse (santé magazine, ELLE, Le Figaro santé, Forbes, marie claire, VOGUE) sur marine : balises `<a>` sans href, alt vides, aucun article cité |
| 4 | media_with_text_UWwdeG | 5446 | 852 | « SOYA 3.0 : La nouvelle ère du sommeil » + 57.svg |
| 5 | video_Ke4ji6 | 6298 | 500 | vidéo pleine largeur muette en boucle (58,1 Mo) |
| 6 | custom_liquid_rMBeUk (contient ev_review_8Lp6Dy à y 6894) | 6798 | 785 | « Plus de 100 000 clients se réveillent désormais – sans douleurs ! » ; onglets Douleur cervicale / Migraines / Posture / Ronflements |
| 7 | multi_column_PrUGex | 7583 | 501 | 96 % / 91 % / 87 % (« questionnaire envoyé à l'ensemble des clients de nos oreillers en juillet 2025 ») |
| 8 | faq_UWXMQx | 8085 | 1145 | 13 questions |
| 9 | media_with_text_zg6tqU | 9230 | 704 | « Découvrez notre Best-Seller : L'Oreiller Soya 2.0 » |
| 10 | related_products_ncp9TM | 9934 | 818 | carrousel de produits avec badges « Economisez €X » |
| 11 | Loox (1744316970a52016e4) | 10752 | 6335 | widget d'avis en mode boutique (≈ 1,68 m, non rendu à la capture ; 7 211 px en mobile) |
| 12 | text-with-icons | 17087 | 168 | Livraison gratuite / Garantie 30 jours / Service client 7j/7 / Paiements 100% sécurisés |
| 13 | footer | 17255 | 541 | newsletter, « Qui sommes-nous ? », politiques |

Hauteur totale : 17 796 px en desktop (≈ 4,70 m, 19,8 écrans) et 19 179 px en mobile (≈ 5,07 m, 22,7 écrans).

Les statistiques de juillet 2025 portent vraisemblablement sur le 2.0, et non sur le 3.0 (**déduit**). Voici les éléments :
- le plus ancien des 7 avis 3.0 intégrés date du 2025-11-04 (les 339 avis Loox du 3.0 ne sont pas tous visibles) ;
- un avis 2.0 du 2025-06-16 dit : « hâte de voir ce que la prochaine version va donner » ;
- la page elle-même écrit : « Après plus de 100 000 dormeurs conquis par le SOYA 2.0… pour créer le SOYA 3.0 » ;
- les premiers fichiers propres au 3.0 datent du 19/10/2025 (57.svg).

Ni l'effectif, ni la question posée, ni le taux de réponse ne sont publiés.

### 10. Différences avec les fiches secondaires (mesures EUR, `pdpwork/others.json`)

| Fiche | Bloc d'achat | Prix | Bouton | Stock affiché | Particularités |
|---|---|---|---|---|---|
| Oreiller enfant (desktop et mobile) | Kaching 1x / Duo, housse pré-cochée (`preselected true`, case cochée sur `enfant-d-top.png`) | 49,90 € (~~99,90~~, -50 %) ; Duo 89,90 € (~~199,80~~, -55 %) ; housse 14,90 € (~~29,90~~, soit son vrai prix seule, 29,90 €) | desktop y 959 ; mobile y 1398 | « En stock – Prêt à l'expédition » | « 15 637 avis parents » ; pas de stories ni d'encadré 89 % ; 21 images **PNG/JPG** (7 par coloris, dont 58 × 32 cm et 6/8 cm) ; badge « 30 NUTIS D'ESSAI » ; barre collante à 99,90 € en desktop |
| Draps en soie (desktop) | bloc thème standard | 49,90 € (~~59,90~~, « Economisez €10,00 »), même prix pour les 20 variantes (8 coloris et 6 tailles proposés, de 90 × 190 à 200 × 200 cm) | y 703 | « En stock – Prêt à l'expédition » | pastilles de couleur, menu des tailles, quantité ; « soie naturelle de mûrier » ; avis 1/5 « polyester » ; 10 images WebP |
| Couette SoyaFresh (mobile) | bloc thème | à partir de 79,90 € (~~99,90~~) en Twin ; 89,90 € (~~119,90~~) en Queen ; 99,90 € (~~129,90~~) en King | y 1031 | « En stock – Prêt à l'expédition » | tailles « Twin / Queen / King » (dénomination américaine) ; 10 images WebP |
| Oreiller 1.0 (desktop et mobile) | bloc thème | 34,90 € (~~49,90~~) | desktop y 496 ; mobile y 812 | « En stock – Prêt à l'expédition » | 5 images WebP ; Loox 2,8/5 sur 4 avis |

Ces 4 fiches suivent un gabarit court : fiche, « Nouveauté : SOYA 3.0 est arrivé », « Best-Seller 2.0 », carrousel, Loox. Elles sont 6 350 à 7 200 px plus courtes que le 3.0 (enfant-d 11 142, soie-d 10 786, v1-d 10 604, couette-m 12 399, enfant-m 12 811, v1-m 12 154) et n'ont ni FAQ ni stories. Leurs images sont en raster (WebP, ou PNG/JPG pour l'enfant), que le CDN Shopify sait redimensionner : les SVG lourds sont propres à la fiche 3.0. Le prix unique des « draps en soie naturelle de mûrier » en 200 × 200 cm à 49,90 €, rapproché de l'avis « polyester », constitue un **indice** d'allégation matière à vérifier. Ce n'est pas une preuve.

### 11. Évaluation de la conversion

**Ce qui est efficace (mécanique honnête en soi)**
1. Les stories vidéo placées dans le bloc d'achat, avant le prix : visage humain, format natif des réseaux sociaux, réponses aux objections (choix de hauteur, fermeté, adaptation). Leur exécution technique, elle, est coûteuse (originaux de 37 à 109 Mo lus en aperçu dès le chargement).
2. Les cartes de quantité avec badge (Duo / Famille), qui font monter le panier moyen.
3. Le bouton pleine largeur de 60 px à fort contraste, et une barre collante sur les deux formats.
4. Une galerie à un message par image, dans une séquence claire (produit, zones, matière, fraîcheur, entretien, hauteurs, positions).
5. Des accordéons pratiques (dimensions, lavage, livraison, garantie) et une FAQ qui traite les vraies objections (odeur, oreiller plat à la réception, adaptation de 3 à 7 jours).
6. Le curseur avant/après sur la posture et les cartes par position de sommeil, qui aident le visiteur à s'identifier.

**Ce qui est manipulatoire ou à risque**
1. Un nombre d'avis fixe (15 637) sans rapport avec Loox (339 pour le produit, 1 775 pour la boutique), recopié sur les 19 fiches.
2. Un compte à rebours configuré « récurrent, tous les jours, sans fin », un stock « presque épuisé » et une barre à 89 % écrits en dur, et une popup qui annonce 60 % « pour la sortie de notre nouveau produit ».
3. Des prix barrés calculés sur un prix catalogue qui n'est pas celui du parcours d'achat, et un « jusqu'à -60 % » dépassé par le -75 % implicite du pack Famille.
4. Une option payante pré-cochée, présentée à côté de « cadeaux offerts » qui n'existent pas dans la configuration du 3.0.
5. Des allégations santé (première nuit, « prouvée », apnée, reflux, ostéopathes N°1, « Dr » chiropracteur au nom tronqué) et des statistiques qui ne portent vraisemblablement pas sur ce produit.
6. Des témoignages « vérifiés » écrits en dur, sans lien avec l'outil d'avis, et des logos presse sans source.

**Ce que Somnila peut reprendre honnêtement pour la fiche Neck 01** (ordre proposé pour le bloc d'achat)
1. La note réelle issue de l'application d'avis, avec son nombre exact, cliquable, et identique à celle du JSON-LD. Tant qu'il y a peu d'avis, écrire « Nouveau – premiers avis en cours ».
2. H1 : « Neck 01 — oreiller à mémoire de forme, deux hauteurs ».
3. Trois ou quatre puces factuelles : « Deux hauteurs : 13 cm ou 11 cm, il suffit de le retourner » ; matière et densité si elles sont connues ; « Housse amovible, lavable à [température réelle] » ; conditions d'essai et de retour identiques à la politique, et comptées à partir de la réception.
4. En mobile, le prix de 69,90 € juste sous le H1, vers y 700, sans prix barré. C'est le même prix que l'offre 1x de Soya, et Somnila peut le présenter tel quel, sans fausse remise.
5. Des stories vidéo (3 ou 4 bulles de 78 px) filmées par le fondateur : « Pourquoi 13 / 11 cm », « Quelle hauteur pour moi (dos, côté) », « Déballage et décompression », « Vos questions ». Utiliser des fichiers transcodés par Shopify, 5 Mo maximum par clip, avec une image d'affiche statique et aucune lecture automatique dans les bulles.
6. Des cartes « 1 oreiller / 2 oreillers » à prix permanents, avec le prix par oreiller. La housse de rechange en option **décochée**, à son vrai prix, et le total affiché dans le bouton.
7. Un bouton de 56 à 60 px, puis une ligne de réassurance vérifiable (délai réel, retours), puis les moyens de paiement réellement actifs.
8. Une galerie de 8 à 10 images en JPEG ou WebP de 300 Ko maximum : photo mesurée avec une règle (les 13 et 11 cm sur **le même** oreiller), coupe de la mousse, housse, lavage, positions, sans pictos médicaux. Des alt descriptifs, et une seule source pour les chiffres (fiche = FAQ = politiques).
9. Une barre collante qui affiche le prix de l'offre choisie.
10. Si Somnila publie une enquête un jour : l'effectif, la date, la question exacte et la version du produit concernée.
