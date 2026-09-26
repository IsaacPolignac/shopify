## 4. Expérience utilisateur, navigation et tunnel d'achat

*Périmètre : en-tête, navigation desktop et mobile, parcours accueil → collection → fiche → panier → paiement, collection « Nos Best Sellers », popups, pages secondaires, mobile. Captures du 25 septembre 2026 (1440 × 900 desktop, 390 × 844 mobile). Les mesures en px viennent des fichiers `cap/*.json` ou de mesures sur les PNG ; la conversion en cm suppose 96 dpi (1 cm ≈ 37,8 px). Les fichiers `ux/…` et `web/…` ont été téléchargés pour cette analyse et rangés dans le dossier de preuves (`scratchpad/soya/`). Plusieurs captures (`home-d`, `home-m`, `col-d`, `col-m`, `enfant-d`) ont été faites depuis une IP américaine et affichent des prix en USD : **tous les prix cités ici sont en EUR** (`catalogue.json`, `ux/*.html`, `cap/funnel.json`). Chaque point est marqué **[constaté]** (vu dans un fichier ou une capture) ou **[déduit]** (raisonnement à partir de preuves). Les accusations sont formulées comme des **indices** ou des **risques**. Section relue en contre-analyse le 26 septembre 2026 : chaque constat important a été vérifié à nouveau dans les fichiers sources.*

### 4.1 Verdict en une phrase

Le tunnel de SOYA PARIS est un tunnel « à haute pression » bien huilé, du type courant en dropshipping (l'outil de suivi de commande est réglé pour masquer une origine chinoise : **indice**, voir 4.8). Le chemin vers la fiche du Soya 3.0 est très court et le bloc d'offres groupées est efficace. Autour, un mur de mécanismes dégrade l'expérience et crée des risques juridiques : compte à rebours configuré pour recommencer chaque jour sans fin, jauge de stock écrite en dur, options payantes pré-cochées, popup qui retient l'ajout au panier, quiz qui promet 60 % pour un autre produit, note « 4,8/5 – 15 637 avis » très éloignée des chiffres de l'outil d'avis. Somnila doit reprendre la **mécanique** (clarté des offres, barre collante, réassurance au bon endroit) et en retirer la **pression**.

### 4.2 En-tête, bandeau et navigation

**Mesures desktop [constaté]** (`cap/home-d.json`, mesures pixel sur `cap/home-d-view-0.png` et `cap/contact-d-view-0.png`) :

| Élément | Mesure |
|---|---|
| Bandeau « FRENCH DAYS 🇫🇷 Jusqu'à -60 % sur tout le site ! » avec compte à rebours | y 0–57 → **58 px** (≈ 1,5 cm) |
| En-tête | **115 px** (≈ 3,0 cm), y 58–173 |
| Total occupé en haut de l'écran | 173 px = **19,2 %** d'un écran de 900 px |
| Menu, ligne 1 (y 88–102) | Accueil (x 356–410) · Nouveau : Oreiller Soya 3.0 (453–655, 203 px) · Best Seller : Oreiller Soya 2.0 (697–916, 220 px) · Nos Best Sellers (958–1082) |
| Menu, ligne 2 (y 130–141) | Contact (580–637) · Suivre votre commande (680–860) |
| Logo texte « SOYA PARIS » | x 50–166 (≈ 117 px), qui est aussi le H1 de l'accueil (`cap/home-d.json` → h1 « SOYA PARIS ») |
| Côté droit (marché France) | sélecteur « EUR € » (x 1168–1252), loupe, compte, panier (icônes de 16 à 20 px) |
| Côté droit (marché US) | « USD $ » (x 1075–1161) + sélecteur de langue « Français » (1188–1263) |

- Le menu tient sur **deux lignes** parce que deux libellés font 203 et 220 px. En version US, « Nos Best Sellers » se termine à x 1082 alors que le sélecteur pays commence à x 1075 : les deux éléments **se touchent** (décalage vertical de 3 px seulement). En France, l'écart est de 86 px. **[constaté]**
- L'en-tête **n'est pas collant** (`--sticky-header-enabled:0` dans `home.html`). Une fois qu'on a défilé, il n'y a plus d'accès direct au panier ni à la recherche. Le bandeau compte à rebours (application Essential Countdown Timer) **n'est pas collant non plus** et **ne peut pas être fermé** : sa configuration indique `"stickyBar": false` et `"closeButton": false` (`home.html` → `essentialCountdownTimerConfigs`). **[constaté]**
- Architecture : deux des six entrées renvoient vers **deux oreillers concurrents** (3.0 « Nouveau » et 2.0 « Best Seller »), une vers un utilitaire (« Suivre votre commande » → `/apps/parcelpanel`). Il n'y a ni FAQ, ni Livraison, ni « Comment choisir ». « Notre histoire » n'est accessible que par le lien « En savoir plus » du pied de page. `/pages/faq` renvoie une page « 404 Page introuvable » (`ux/pages_faq.html`). **[constaté]**
- **Mobile** (`cap/home-m.json`, `cap/slices/home-m-view-0.jpg`) : bandeau de 50 px, en-tête de 51 px (12 % de l'écran). Burger (glyphe x 20–41) et loupe (x 61–77) à gauche, logo centré (x 146–243), panier à droite (x 349–368). Le compte n'est pas dans l'en-tête. Le tiroir de navigation contient les 6 mêmes liens, un sélecteur de **26 pays** (de l'Allemagne à l'Ukraine, dont Australie, Canada, États-Unis, Royaume-Uni, Suisse, Turquie) et « Compte », sans sélecteur de langue (`home.html` → `<navigation-drawer>` ; `cap/funnel.json` → popups). **[constaté]**
- Zones de tap : `.tap-area:before{inset:calc(-1 * var(--spacing-2-5))}` avec `--spacing-2-5: 0.625rem` agrandit chaque icône de 10 px par côté, soit **≈ 42 × 42 px**, sous les 44 × 44 px habituels. Les zones du burger et de la loupe se touchent. **[déduit du CSS]**

### 4.3 Parcours observé, étape par étape

| Étape | Ce qui est observable | Statut |
|---|---|---|
| 1. Accueil | Hero d'une seule image (diaporama `autoplay="6"` avec 1 slide), **entièrement cliquable** vers `/products/oreiller-soya-3-0`. Texte incrusté dans l'image, `alt=""`. Sur desktop, le faux bouton « EN PROFITER » commence à y ≈ 874 : seuls ≈ 26 px sont visibles au premier écran. Sur mobile, l'image annonce « -50 % SUR TOUT LE SITE » alors que le bandeau dit « -60 % ». Logos presse sans lien ni alt. Ordre : hero → presse → bloc 3.0 → bloc 2.0 « notre produit phare » → carrousel de **14 produits** avec « + Ajouter » (le Soya 2.0 y est à 119,90 €, le Soya 3.0 n'y figure pas) → statistiques 96/91/87 % → réassurance → pied de page. | constaté (`home.html`, `cap/home-d.json`, `cap/home-d-text.txt` : 14 « Prix de vente ») |
| 2. Collection | Voir 4.4. | constaté |
| 3. Fiche Soya 3.0 | Voir 4.5. | constaté |
| 4. Clic « Ajouter au panier » | Popup Kaching (voir 4.6) qui retient la requête d'ajout. `/cart.js` reste à 0 article 4,5 s puis 6 s après le clic (deux sessions). | constaté (`cap/funnel.json`, `cap/funnel2.json`) |
| 5. Tiroir panier | **Non observé.** Réglages du thème : `cartType: "drawer"`, `showDiscount: true`, `discountMode: "saving"`. État vide : « Votre panier est vide / Explorer nos produits ». | déduit des réglages (`home.html`, `ux/cart.html`) |
| 6. Paiement | **Non observé** : `/checkout` → « Request Forbidden » (`cap/slices/funnel-checkout-00.jpg`). Moyens déclarés en pied de page : 10 (American Express, Apple Pay, Diners, Discover, Google Pay, Maestro, Mastercard, Shop Pay, UnionPay, Visa). AfterSell chargé (`aftersell-utm-triggers.js`) → offre après achat probable, non vérifiée. | déduit |
| 7. Après l'achat | Suivi ParcelPanel (voir 4.8). | constaté |

**Pourquoi le panier est resté vide [code constaté, cause déduite]** : le script `kaching-popup-block.js` (téléchargé depuis le CDN Shopify, `ux/kaching-popup-block.js`) remplace `window.kachingPopupFetch` et intercepte aussi les requêtes XHR. Pour tout `POST /cart/add`, il range la requête dans une file (`ks.push({args, resolveFetch, rejectFetch})`), renvoie une promesse en attente et ouvre la popup. La requête n'est rejouée qu'à la fermeture ou à l'acceptation de la popup. Le panier vide pendant le test est **cohérent** avec ce mécanisme. On ne peut pas exclure une autre cause : le README du dossier signale que l'ajout au panier ne s'enregistre pas dans cet environnement automatisé (relais réseau, protection anti-robots).

### 4.4 Collection « Nos Best Sellers »

Sources : `cap/col-d.json`, `cap/col-m.json`, `ux/collections_nos-best-sellers.html` (https://soya-paris.com/collections/nos-best-sellers, version EUR), `collections.json`, `cap/slices/col-d-*`, `col-m-*` (captures en USD).

| Mesure | Desktop | Mobile |
|---|---|---|
| Bannière | 960 px (titre blanc « Nos Best Sellers » sur photo claire, contraste médian estimé ≈ 2,8:1) | 260 px |
| Blocs éditoriaux avant la grille | Soya 3.0 (774 px) + Soya 2.0 (704 px) | 842 + 796 px |
| **Début de la grille** | **y = 2 612 px** (≈ 2,9 écrans, ≈ 69 cm) | **y = 1 998 px** (≈ 2,4 écrans, ≈ 53 cm) |
| Colonnes | 4 | 2 (cartes de 171 px, ≈ 8–9 px d'écart) |
| Produits | 17 | « 17 produits » affiché |

- C'est la **seule collection** publiée de la boutique, à côté d'une collection « Home page » vide (`collections.json`). **[constaté]**
- **Ni filtre ni tri** sur la collection (aucun bloc « Filtres » ni « Trier par » dans le HTML, hors chaînes de traduction), alors que le thème sait les afficher : la page de recherche propose « Filtres », « Trier par » et « En stock uniquement » (`ux/search_q_oreiller.html`). **[constaté]**
- **Les deux oreillers vedettes ne sont pas dans la grille** : le Soya 3.0 et le Soya 2.0 n'apparaissent que dans les blocs éditoriaux (19 produits au catalogue, 17 dans la collection). La première carte est la housse de rechange Soya 3.0 à 17,90 € (barré 39,90 €). **[constaté]**
- Cartes : pastille bleue « Economisez 22,00 € » (montant, pas pourcentage ; « 26,00 $ » sur la capture américaine) ou « Promo » pour les produits à plusieurs prix (Couette et Draps SoyaFresh, « A partir de »), titre en gras, prix bleu et prix barré gris, pastilles de couleur (« +4 »). **Aucune note ni avis** sur les cartes. L'ajout rapide existe dans le code (17 `product-card__quick-buy`, bouton « + Ajouter ») mais n'apparaît pas sur la capture mobile. **[constaté]**
- Nom ambigu : le « Coussin Lombaire Ergonomique » a, sur sa photo de carte et dans la popup Kaching, la forme d'un coussin placé entre les genoux. **[constaté, visuel]**

### 4.5 Fiche Soya 3.0 : bloc d'achat et barre collante

**Accélérateurs [constaté]** (`cap/funnel.json` pdpBuy, `pdp3.html`) :
- Pastilles de logos (CertiPUR, OEKO-TEX, « 30 nuits d'essai ») sur l'image principale, 4 puces de bénéfices et 4 bulles vidéo rondes de 78 px, bordure de 3 px comprise (`.soya-story-thumb`) : « Concept », « Lequel choisir ? », « Avis clients », « FAQ ».
- Bloc Kaching vertical « FRENCH DAYS | JUSQU'À -60 % » : **1x Oreiller 69,90 €** (barré 139,90 €, présélectionné), **Pack Duo 98,90 €** (barré 279,80 €), **Pack Famille 3+1 139,90 €** (barré 559,60 € = 4 × 139,90 €, oreiller offert compris), avec badges « Pack Duo » / « Pack Famille ». La hiérarchie est lisible et l'économie visible.
- Sous le bouton : « 30 nuits d'essai — Satisfait ou remboursé », image des moyens de paiement, accordéons (Matériaux, Durabilité, Lavage, Livraison & retours, Garantie 30 nuits), vente croisée « Complétez pour un confort ultime ! » (housse 17,90 €, coussin lombaire 49,90 €) avec « + Ajouter ».
- **Barre d'achat collante** du thème (`<product-quick-add>`, `position:fixed; bottom:0`), transitions de 150 ms relevées au défilement (`cap/pdp3-m.json`, `assets/theme.css`). Sur mobile, elle ne contient que le bouton ; sur desktop, un encart de 35rem (560 px) avec image, titre et prix.

**Frictions [constaté sauf mention]** :
- **Options payantes pré-cochées** (`pdp3.html` → `script.kaching-bundles-deal-block-settings`) : sous l'offre 1x, la ligne « +1 Housse de Rechange » à 14,90 € (barré 39,90 €) est `preselected: true` et la case est visiblement cochée (`cap/slices/pdp3-m-full-00.jpg`, `pdp3-d-full-00.jpg`). Le Pack Duo porte **deux** lignes « +1 Housse de Rechange » pré-cochées (l'une à -20 %, l'autre à 14,90 €) et le Pack Famille **deux** lignes « +2 Housses de Rechange » à 14,90 €. Le bouton n'affiche pas le total (`showTotalPriceInAddToCartButton: false`). Un client qui garde l'offre 1x par défaut ajoute, selon toute vraisemblance, 69,90 + 14,90 = **84,80 €** ; pour le Duo, les deux lignes pourraient s'additionner [déduit, panier non observé]. La fiche **Oreiller Soya enfant** a le même réglage (1x à 49,90 € + housse pré-cochée à 14,90 €, `web/p_oreiller-soya-enfant.html`). L'article L121-17 du Code de la consommation impose le « consentement exprès du consommateur pour tout paiement supplémentaire » ; un paiement obtenu par un consentement « donné par défaut » est remboursable (https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032227250/2026-04-25). L'INC indique une amende administrative (article L. 132-22) pouvant aller jusqu'à 3 000 € pour une personne physique et 15 000 € pour une personne morale (https://www.inc-conso.fr/content/vous-refusez-de-payer-des-frais-supplementaires-que-vous-naviez-pas-prealablement-acceptes). C'est un **risque**, pas une infraction établie.
- **Rareté écrite en dur** : « Plus que quelques exemplaires en stock » (bloc liquid `liquid_JwXkcr`, texte fixe), « 89 % du stock déjà écoulé » (paragraphe HTML + barre `width:89%`), « Dernière mise à jour : il y a quelques secondes » (texte fixe). Le stock n'est pas suivi par Shopify (`inventoryManagement: null`, `inventoryPolicy: "continue"`, `cap/funnel.json`). Les autres fiches (Soya 1.0, draps en soie, couette, enfant) affichent « En stock – Prêt à l'expédition ». **Indice fort de fausse urgence**, pas une preuve formelle.
- **Compte à rebours recommencé chaque jour** : la configuration du bandeau porte `"timerType": "recurring"`, `"recurringDays": [1,2,3,4,5,6,0]`, `"endType": "never"` (`home.html`). Les dates d'origine du « FRENCH DAYS » (du 17 au 21 octobre 2025, `startDate`/`endDate`) sont restées dans la configuration, modifiée pour la dernière fois le 18 septembre 2026. Observé : 00:00:39 à 21:58:21 UTC, puis 23:58:56 à 22:00:05 UTC dans une nouvelle session (`cap/funnel.json`, `cap/funnel2.json`) ; le compteur vise environ 23 h 59 heure de Paris et repart pour 24 h. **Indice fort** d'échéance artificielle.
- **Prix différents dans le même tunnel** : la barre collante desktop affiche « Oreiller Soya 3.0 — Prix de vente €139,90 » (`pdp3.html` → `<product-quick-add>` ; `cap/pdp3-d-text.txt`) alors que le bloc d'achat dit 69,90 €. La recherche affiche aussi 139,90 € pour le 3.0 (`ux/search_q_oreiller.html`). L'accueil montre le Soya 2.0 à 119,90 € sans prix barré alors que sa fiche le vend 59,90 € (1x, `web/p_oreiller-soya-2-0.html`). Le prix barré 139,90 € est le prix catalogue Shopify du 3.0 (sans `compare_at`), et la remise est appliquée par Kaching (`updateNativePrice: false`). L'article L112-1-1 du Code de la consommation exige que le prix barré soit « le prix le plus bas pratiqué […] au cours des trente derniers jours » (https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044549592). Si l'oreiller s'est vendu à 69,90 € pendant ce mois, ce prix barré serait contestable : **risque**, l'historique des prix n'étant pas connu.
- **Emplacements** : sur desktop, prix à y ≈ 767 et bouton à y ≈ 1 350 (sous la ligne de flottaison). Sur mobile, prix à y ≈ 1 191 et bouton à **y ≈ 1 805** (2,1 écrans, ≈ 48 cm). La page mesure 17 796 px sur desktop (≈ 4,71 m) et **19 179 px sur mobile** (22,7 écrans, ≈ 5,07 m), dont 6 335 / 7 211 px pour le widget d'avis Loox (resté blanc sur la capture).
- **Poids** : 506 requêtes, 18,1 Mo et 7,8 s sur desktop ; 474 requêtes, 16,1 Mo et 7,5 s sur mobile (`cap/pdp3-d.json`, `cap/pdp3-m.json`), **avec** des SVG de remplacement et les vidéos bloquées. Les 39 SVG réels pèsent 35,7 Mo de plus (`svg_sizes.txt`, 35 734 942 octets). Si toutes étaient chargées, la fiche approcherait 52 à 54 Mo **[déduit, borne haute]**.
- **Note affichée sans rapport avec l'outil d'avis** : « Noté 4,8/5 – 15 637 avis clients » est un bloc HTML statique (étoiles en images icons8.com), identique sur toutes les fiches (« avis parents » pour l'enfant). Or la même page contient les chiffres de Loox, l'application d'avis installée : données structurées du Soya 3.0 à **4,3/5 sur 339 avis** (`productLdJsonSchema`, `pdp3.html`) et flux Loox de la boutique à **4,6/5 sur 1 775 avis** (« Overall rating: 4.6 / 5 from 1775 reviews », `#looxReviews`). Le chiffre affiché est ≈ 8,8 fois le total Loox de toute la boutique. Par fiche : Soya 2.0 4,8/5 (1 257), Soya 1.0 2,8/5 (4), draps en soie 1,0/5 (1), enfant 4,0/5 (4) (`web/loox_vs_affiche.tsv`, JSON-LD des `web/p_*.html`). **Indice fort** d'un compteur gonflé ; une autre source d'avis non visible ici ne peut pas être exclue.
- Image « Secure Pay » fixe (`soya-payments.svg`) montrant PayPal, Amazon Pay et un logo de type Afterpay/Clearpay, absents de la liste des 10 moyens générée par Shopify dans le pied de page. **Risque** de promesse non tenue au paiement (non vérifiable ici).

### 4.6 Popups : moment, taille, interférence, sortie

| | Klaviyo « Pop-up Mobile \| Le Tsunami » | Kaching Popup (ajout au panier) |
|---|---|---|
| Déclenchement | **12 s** après l'arrivée, sur toutes les pages, quel que soit le geste | Clic « Ajouter au panier » sur le Soya 3.0 (une seconde popup identique vise le Soya 2.0), aucune condition client (`customerTags: []`, `conditions: []`) |
| Fréquence | Réaffiché après **1 jour** (COOKIE_TIMEOUT 1) | **1 fois par 24 h** (`displayFrequency.days: 1`) |
| Format desktop | Volet (flyout) en bas à droite, **950 × 580 px** (≈ 25,1 × 15,3 cm, ≈ 42 % de l'écran), **sans voile** (pixels inchangés), photo de couple à gauche | Fenêtre centrée **400 × ≈ 746 px**, coins de 30 px, **voile noir à 70 %** (`#000000b3` ; blanc mesuré à 76/255 sur `funnel-drawer.png`) |
| Format mobile | **390 × 477 px** ancré en bas (56 % de la hauteur), **voile `rgba(20,20,20,0.75)`** sur tout l'écran sauf le bandeau et l'en-tête, qui restent au-dessus (mesure pixel), logo à la place de la photo | Largeur 400 px dans les réglages (plein écran sur 390 px, déduit), image de 360 px |
| Texte d'accroche | « VOUS AVEZ OBTENU 60 % DE RÉDUCTION — À l'occasion de la sortie de notre nouveau produit ! » | « FÉLICITATIONS, VOUS AVEZ DÉBLOQUÉ -60 % SUR NOTRE NOUVEL OREILLER LOMBAIRE ! » 19,90 € au lieu de 49,90 € |
| Urgence | « PS : L'offre se termine aujourd'hui à minuit 00h. » | « -60 % jusqu'à ce soir, minuit ! » (texte fixe du badge, sans date de fin dans la configuration) |
| Sortie | Croix (réglage 35 px) + « Non merci, je n'aime pas les remises. » | Croix de 16 px + « Non merci, je n'aime pas les cadeaux » |
| Animation | Glissement depuis la droite de 1 000 ms (desktop) ; fondu de 350 ms + glissement de 1 000 ms (mobile) | Aucune (`type: none`) |

Sources : `ux/klaviyo_forms.json` (téléchargé depuis https://fast.a.klaviyo.com/forms/api/v7/full-forms?company_id=XuYmmR : `DELAY 12`, `COOKIE_TIMEOUT 1`, `size 950`, `mobile_overlay`), `pdp3.html` → `kaching-popup-v2-config`, `cap/pdp3-d.json` (anims `klaviyo-slideinright` 1 000 ms), `cap/pdp3-m.json` (`klaviyo-fadein` 350 ms, `klaviyo-slideindown` 1 000 ms), mesures pixel sur `cap/funnel-home-12s.png`, `cap/pdp3-m-full.png`, `cap/couette-m-full.png`, `cap/funnel-drawer.png`. Chronologie cohérente : aucune popup à 8 s (`funnel-pdp-top`), volet qui entre à ≈ 12,5 s (`pdp3-d-view-6500`).

**Le quiz en 4 étapes [constaté]** : (1) position de sommeil Ventre / Côté / Dos, puis « Pour moi » / « Pour un proche » ; (2) prénom et e-mail, « Activer ma réduction » ; (3) téléphone, « Aujourd'hui seulement : REJOIGNEZ LE CLUB VIP — Fermeture des portes ce soir à 00h ! », case « Oui, c'est mon vrai numéro », bouton « Je deviens VIP », refus « Non merci, je ne veux pas être VIP. » ; (4) « VOTRE RÉDUCTION DE 60 % EST ACTIVÉE ! Sur notre nouvel Oreiller Lombaire ! … 1. Ajoutez au panier minimum x1 Oreiller Soya. 2. Une pop-up apparaît… ».

**Lecture [déduit]** : l'accroche de l'étape 1 ne dit pas sur quoi porte le « 60 % » ; on n'apprend qu'à l'étape 4, après avoir donné e-mail et téléphone, qu'il s'agit du coussin lombaire, à condition d'acheter un oreiller. Le pourcentage lui-même est réel par rapport au prix du site : 49,90 € (prix catalogue, sans prix barré) × 0,4 = 19,96 €, arrondi à 19,90 € (`rounding: ".90"`). En revanche, la popup Kaching qui l'accorde n'a **aucune condition client** : elle s'affiche à tout visiteur qui ajoute un Soya 3.0 ou 2.0 au panier (une fois par 24 h), inscrit ou non. Le quiz échange donc e-mail et téléphone contre une offre dont tout acheteur bénéficie, avec une échéance « ce soir minuit » qui revient chaque jour. C'est un **indice** de promesse trompeuse, pas une preuve.

**Interférence [constaté]** : sur la fiche desktop, le volet Klaviyo (x 470–1419, y 300–879) recouvre la colonne droite : titre, puces, vidéos et carte « 1x Oreiller 69,90 € ». La case pré-cochée de la housse reste visible juste en dessous (y ≈ 906, `cap/slices/pdp3-d-full-00.jpg`). Sur la fiche Couette mobile, le volet recouvre le titre et le prix (79,90 €, y ≈ 697 sans popup, `couette-m-view-0.jpg` contre `couette-m-full-00.jpg`) ; le bouton d'achat est de toute façon hors du premier écran. Sur la capture `funnel-drawer-00.jpg`, les deux popups **s'empilent** : la capture est prise ≈ 14 s après l'arrivée (7 s d'attente, clic, 6 s, `funnel2.cjs`), si bien que le volet Klaviyo, déclenché à 12 s, se retrouve sous la fenêtre Kaching. Un second formulaire, « HIGH PROSPECT (Cloned) » (code BACK20, -20 %, « Dépêchez-vous, ce code expire dans : » suivi d'un compte à rebours de **13 minutes**, délai 5 s, réaffichage après 50 jours), n'est montré qu'à une audience ciblée (`GROUPS_TARGETING`) : non observé en navigation.

### 4.7 Mobile

- Premier écran de l'accueil : bandeau et en-tête (101 px), hero de 550 px dont le texte est incrusté, puis bandeau presse. Aucun prix avant y = 2 424 (carrousel, où le Soya 2.0 s'affiche à 119,90 €). **[constaté, `cap/home-m.json`, `cap/home-m-text.txt`]**
- Premier écran de la fiche Soya 3.0 : image, vignettes, note, surtitre, titre (y ≈ 685), deux puces. Pas de prix ni de bouton. **[constaté, `pdp3-m-view-0.jpg`]**
- Barre collante : bouton « Ajouter au panier » pleine largeur (thème). La barre Kaching est désactivée (`stickyAtcEnabled: false`). **[constaté]**
- Réassurance : carrousel qui montre **1 élément sur 4** (« Livraison gratuite » puis points de pagination « Aller à l'élément 1…4 »). Pied de page en colonne, libellés coupés (« Conditions Générales de / Vente »). **[constaté, `cap/home-m.json`, `home-m-full-01.jpg`, `pdp3-m-full-09.jpg`]**
- Micro-textes : le sous-titre du bandeau et les libellés « Heures / Mins / Secs » tiennent sur une bande de ≈ 10 px (réglage `legendSize: "10"`). **[mesure pixel, config]**

### 4.8 Pages secondaires et après-vente

- **Contact** (`cap/contact-d-text.txt`) : texte à gauche, formulaire à 3 champs à droite (Nom, Email, Message). Seule adresse : info@soya-paris.com. « Nous répondons généralement sous 24 heures, **du lundi au samedi** », ce qui contredit la bande « **Service client 7j/7** » affichée juste en dessous. Pas de téléphone (« une ligne téléphonique dédiée […] sera bientôt disponible »), aucun outil de chat dans le code (0 occurrence de Gorgias, Tidio, WhatsApp, Crisp, Zendesk, Intercom dans `home.html` et `pdp3.html`). **[constaté]**
- **Suivi de commande** (https://soya-paris.com/apps/parcelpanel, `ux/apps_parcelpanel.html`) : page ParcelPanel rendue en JavaScript, titre en anglais « Track Order Status - SOYA PARIS », champs numéro de commande et e-mail/téléphone, ou numéro de suivi. Réglages (`script#pp-tracking-init-data`) : transporteur masqué (`display_option.carrier: false`), traduction automatique activée et `sensitive_world: "China,Aliexpress,Chinese cities"`. La documentation ParcelPanel présente le « Dropshipping mode » comme « One-click hide Chinese origins » (https://docs.parcelpanel.com/shopify/getting-started/dropshipping/). **Indice** d'expédition depuis la Chine masquée au client, sans preuve formelle. La politique de livraison annonce 1 jour ouvré de traitement et 3 à 6 jours ouvrés de livraison.
- **Essai et retours** (`pol/refund-policy.txt`, `pol/shipping-policy.txt`) : la fiche promet « 30 nuits d'essai — Satisfait ou remboursé » et la bande « Garantie 30 jours ». La politique de remboursement compte **30 jours « depuis votre achat »** et exige un article « dans l'état où vous l'avez reçu et dans son emballage d'origine ». Avec 4 à 7 jours ouvrés de préparation et de livraison, l'essai réel après réception fait donc moins de 30 nuits **[déduit]**. Le retour « sans frais » figure dans la politique de livraison, pas dans celle de remboursement. Pour retourner un produit, il faut écrire à info@soya-paris.com pour obtenir une adresse. Aucune des politiques ne contient le mot « rétractation » (délai légal de 14 jours) : **risque** juridique à confirmer par la dimension légale. **[constaté]**
- **Notre histoire** (`cap/histoire-d.json`, 5 702 px) : texte émotionnel, aucun fondateur ni lieu nommé, mannequins des publicités. On y lit « plus de 50 000 clients satisfaits » alors que l'accueil et la fiche parlent de « 100 000 dormeurs ». **[constaté]**
- **Blog** : « Ce blog est vide ». **[constaté]**
- **Pied de page** : « Nos politiques » (Conditions Générales de Vente → `/policies/terms-of-service`, Politique de confidentialité, Retours & Remboursements, « Your Privacy Choices » en anglais, Mentions légales) mais ni Contact, ni Livraison, ni FAQ. Mention en double : « © 2026, SOYA PARIS. © 2026 ». **[constaté]**

### 4.9 Notes par étape (appréciation de l'analyste, déduit)

Deux notes sur 10 : **efficacité commerciale** (capacité à faire acheter et à augmenter le panier) et **expérience / loyauté** (confort, clarté, honnêteté).

| Étape | Efficacité | Expérience / loyauté | Justification courte |
|---|---|---|---|
| Accueil | 6 | 5 | Hero cliquable vers la fiche, mais texte incrusté, faux bouton coupé, -50 % / -60 % contradictoires |
| En-tête et navigation | 5 | 5 | 173 px, menu sur deux lignes, pas collant, pas de FAQ |
| Collection | 3 | 4 | Ni filtre ni tri, grille à 2,9 écrans, oreillers vedettes absents |
| Fiche : bloc d'achat | 8 | 2 | Offres groupées très claires, mais options pré-cochées, rareté écrite en dur, note sans rapport avec l'outil d'avis |
| Ajout au panier | 6 | 2 | Popup de vente additionnelle qui retient la requête, refus culpabilisant, échéance « ce soir » qui revient chaque jour |
| Tiroir panier | n.n. | n.n. | Non observé |
| Paiement | n.n. | n.n. | Non observé (« Request Forbidden ») |
| Popups (transversal) | 7 | 2 | Capture en 4 étapes efficace, promesse de 60 % trompeuse, 42 à 56 % de l'écran couverts |
| Service et suivi | 4 | 3 | 7j/7 contre lun.–sam., pas de téléphone, origine masquée, essai compté depuis l'achat |
| Pages secondaires | 3 | 4 | Blog vide, histoire sans visage |
| Mobile (global) | 5 | 4 | Barre collante utile, bouton à 2,1 écrans, page de 5 m, zones de tap de 42 px |

### 4.10 Frictions et accélérateurs (synthèse)

**Accélérateurs à reprendre (sous une forme honnête)** : hero cliquable vers le produit phare ; accès direct au produit depuis le menu ; offres 1 / 2 / 3 avec économie lisible et offre 1x présélectionnée ; livraison offerte et 30 nuits annoncées juste sous le bouton ; barre d'achat collante sur mobile ; vente croisée d'une housse en fin de bloc ; tiroir panier plutôt qu'une page panier ; ajout rapide dans le carrousel de l'accueil ; recherche avec filtres.

**Frictions (à ne pas reproduire)** : popup qui retient l'ajout au panier ; options payantes pré-cochées ; total absent du bouton ; popups qui se superposent ; rareté et compte à rebours sans donnée réelle ; note d'avis sans rapport avec l'outil d'avis ; prix différents selon l'étape (139,90 / 69,90 € ; 119,90 / 59,90 €) ; collection sans filtre qui repousse la grille à 2 612 px (≈ 69 cm, 2,9 écrans) ; menu sur deux lignes ; fiche mobile de 5 m, 16 à 18 Mo mesurés et jusqu'à ≈ 52–54 Mo avec les SVG réels ; service « 7j/7 » démenti ; essai de « 30 nuits » compté depuis l'achat ; suivi qui masque l'origine ; blog vide.

### 4.11 Ce que Somnila doit retenir

1. **Un tunnel en trois écrans sur mobile** : premier écran = Neck 01 à 69,90 €, choix 13 / 11 cm expliqué en une ligne, bouton visible. Le bouton doit se trouver à moins d'un écran, contre 2,1 chez SOYA.
2. **Zéro blocage entre le clic et le panier** : l'accessoire (housse) se propose dans le tiroir, **non coché**, sans voile ni « minuit ». Le bouton affiche le total (« Ajouter — 69,90 € »).
3. **Un prix unique et cohérent** sur la carte, la fiche, la barre collante et au paiement, sans prix barré de référence inventé (un prix barré = le prix le plus bas des 30 derniers jours).
4. **Une seule sollicitation d'inscription**, jamais au-dessus du bloc d'achat, avec une contrepartie réelle, dite dès le premier écran, et un refus neutre (« Non merci »).
5. **Une note d'avis branchée sur l'outil d'avis**, par produit : zéro avis au lancement vaut mieux qu'un chiffre recopié.
6. **Un en-tête d'une ligne**, collant, avec « Aide / Livraison » visible, et des horaires de service exacts et identiques partout.
7. **Une page boutique courte** : produit phare en premier, pas de bannière de 960 px.
8. **Un essai compté depuis la réception**, écrit pareil sur la fiche et dans la politique, avec le droit de rétractation de 14 jours rappelé.
9. **La transparence comme argument** face à ce concurrent : délai réel, transporteur nommé, vraie équipe, avis réels uniquement. C'est exactement ce que SOYA ne peut pas afficher.
