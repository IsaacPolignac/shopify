## Catalogue, prix, promotions et stratégie produit : SOYA PARIS

*Dossier établi le 25 septembre 2026, contre-vérifié le lendemain. Racine du dossier de preuves (DOSSIER) : `build/analyse/soya-paris/preuves/soya`. Les copies des pages ouvertes par script sont dans `scratchpad/soya_prix/`. Tous les prix sont en EUR et viennent de `products.json`, `catalogue.json`, de la configuration Kaching de chaque fiche et des pages HTML brutes (cookie de marché France). Les captures affichées en USD (IP américaine) servent seulement à vérifier la mécanique, jamais les montants. Les horaires de création des produits sont en heure de Paris (UTC+2, format `+02:00` de `products.json`). Ceux des applications (compte à rebours, popups) sont en UTC. Chaque affirmation porte une étiquette : **[constaté]** (vu dans une source), **[déduit]** (raisonnement à partir des sources), **[indice]** ou **[risque]** (accusation possible, non prouvée formellement), **[non vérifié]**.*

---

### 1. Le catalogue complet (19 produits, 205 variantes, 182 images)

| # | Produit | Prix EUR | Prix barré | Remise | Variantes | Créé le (Paris) | Images | Prix effectif sur la fiche (Kaching) |
|---|---|---|---|---|---|---|---|---|
| 1 | Oreiller Soya 3.0 | 139,90 | — | — | 4 (Blanc, Bleu, Gris, Beige) | 2025-10-19 09:30 (Gris : 2026-02-28) | 48, dont 33 SVG | 1x 69,90 · 2x 98,90 · 4x 139,90 |
| 2 | Oreiller Soya 2.0 | 119,90 | — | — | 1 | 2025-10-19 10:09 | 9 | 1x 59,90 · 2x 89,90 · 4x 129,90 (+ housses offertes) |
| 3 | Oreiller Soya enfant | 99,90 | — | — | 3 (Bleu, Rose, Jaune) | 2026-05-09 18:40 | 21 | 1x 49,90 · 2x 89,90 |
| 4 | Couette rafraîchissante SoyaFresh | 79,90 / 89,90 / 99,90 | 99,90 / 119,90 / 129,90 | 20,0 / 25,0 / 23,1 % | 15 (5 coloris × 3 tailles) | 2025-10-19 09:47 | 10 | — |
| 5 | Draps rafraîchissants SoyaFresh | 54,90 / 69,90 / 79,90 | 79,90 / 89,90 / 100,90 | 31,3 / 22,2 / 20,8 % | 15 | 2025-10-19 09:42 | 9 | — |
| 6 | Couverture lestée « Anti-Stress & Thérapeutique » | 79,90 | 158,90 | 49,7 % | 1 | 2025-10-19 07:45:59 | 3 | — |
| 7 | Ensemble d'oreillers réglables | 69,90 | 74,90 | 6,7 % | 1 | 2025-10-19 07:46:02 | 3 | — |
| 8 | Draps en soie naturelle | 49,90 (toutes tailles) | 59,90 | 16,7 % | 48 (8 × 6) | 2025-10-19 10:41 | 10 | — |
| 9 | Coussin lombaire ergonomique (visuels : coussin de genoux, puis « 4 en 1 ») | 49,90 | — | — | 1 | 2025-10-19 07:45:58 | 5 | popup -60 % après ajout au panier (fiches 3.0 et 2.0) |
| 10 | Housse de couette en soie naturelle | 44,90 (12 tailles) | 59,90 | 25,0 % | 96 (8 × 12) | 2025-10-19 10:21 | 10 | — |
| 11 | Coussin ergonomique avec tête de lit | 42,90 | — | — | 1 | 2025-10-19 07:45:56 | 3 | — |
| 12 | Ensemble de coussins de siège orthopédiques | 39,90 | 49,90 | 20,0 % | 1 | 2025-10-19 07:46:04 | 4 | — |
| 13 | Oreiller Soya 1.0 | 34,90 | 49,90 | 30,1 % | 1 | 2025-10-19 07:46:14 | 5 | — |
| 14 | Housse d'oreiller de rechange enfant | 29,90 | — | — | 3 | 2026-05-09 18:46 | 6 | ajout à 14,90 sur la fiche enfant |
| 15 | Housse d'oreiller en soie naturelle | 29,90 | 69,90 | 57,2 % | 4 | 2025-10-19 10:15 | 6 | — |
| 16 | Masque de sommeil en soie naturelle | 29,90 | 59,90 | 50,1 % | 1 | 2025-10-19 07:46:10 | 3 | — |
| 17 | Oreiller de voyage ergonomique | 24,90 | (0,00 sur la variante Vert, résidu de données) | — | 4 | 2025-10-19 10:46 | 7 | — |
| 18 | Housse de rechange Soya 3.0 | 17,90 | 39,90 | 55,1 % | 4 | 2025-10-19 09:20 | 16 | ajout à 14,90 sur la fiche 3.0 |
| 19 | Housse de rechange Soya 2.0 (handle `housse-d-oreiller-de-rechange-soya-1`) | 11,90 | 29,90 | 60,2 % | 1 | 2025-10-19 07:46:07 | 4 | offerte (×2 ou ×4) dans les packs 2.0 |

Source : `products.json` (price, compare_at_price, created_at, images). Colonne Kaching : script `kaching-bundles-deal-block-settings` de `pdp3.html`, `web/p_oreiller-soya-2-0.html` et `web/p_oreiller-soya-enfant.html`. **[constaté]**

Autres faits bruts **[constaté]** :
- Les 205 variantes ont `grams: 0` et `taxable: false`.
- 10 produits ont un SKU : les 8 créés entre 07:45:56 et 07:46:14 (SOY_CET, SOY_CLE, SOY_BLK_GRI_150x200, SOY_EOR, SOY_ECO, SOY_HOR, SOY_MSK_SOI, SOY_PIL_1.0), plus le 2.0 (SOY_PIL_2.0) et la housse en soie (SOY_HOS_*). Le 3.0, sa housse, les SoyaFresh, les draps et la housse de couette en soie, le voyage, l'enfant et sa housse n'en ont pas.
- Aucun `product_type` n'est renseigné.
- La fiche 3.0 compte 48 images produit, dont 33 fichiers SVG. En comptant les sections de la page, elle charge 39 SVG au total, soit 35,7 Mo (`svg_urls.txt`, `svg_sizes.txt`).

### 2. Architecture de gamme et échelle de prix

**2.1 Échelle.** Au catalogue, les prix vont de 11,90 € (housse 2.0) à 139,90 € (Soya 3.0). Tous se terminent par « ,90 », et Kaching est réglé sur `priceRoundingPrecision: ".90"`. Sur leur fiche, les trois oreillers phares ne sont jamais proposés au prix catalogue : le bloc Kaching, présélectionné, les affiche à 69,90 € (3.0), 59,90 € (2.0) et 49,90 € (enfant). **[constaté]** Sur d'autres pages du site en revanche, le prix catalogue s'affiche comme prix de vente, sans prix barré (voir § 3.3). Sur les fiches, les prix effectifs vont donc de 11,90 € à 99,90 € (couette King), et les trois oreillers sont espacés de 10 € (49,90 / 59,90 / 69,90). **[déduit]**

**2.2 Produit phare et produit d'appel.** Le menu met deux produits en avant : « Nouveau : Oreiller Soya 3.0 » et « Best Seller : Oreiller Soya 2.0 » (`cap/home-d-text.txt`, l. 15-16). Le bloc de packs Kaching n'existe que sur trois fiches : 3.0, 2.0 et enfant (les 16 autres ont un script vide). La popup « lombaire » ne s'affiche qu'après un ajout au panier sur le 3.0 ou le 2.0 : ce sont deux popups distinctes, créées le 10 juin 2026 (2.0) et le 18 juin 2026 (3.0), `kaching-popup-v2-config`. **[constaté]**
- Le **3.0 est le produit vedette** : galerie la plus fournie, prix de référence le plus haut, prix effectif de 69,90 €. **[constaté]**
- Le **2.0 sert de produit d'appel** : c'est le papillon le moins cher (59,90 €), vendu avec des housses offertes en pack, et le plus gros volume d'après les inventaires exposés (§ 6). **[déduit]**
- Le **1.0 à 34,90 €** sert d'ancre basse. C'est un modèle différent : oreiller rectangulaire texturé avec une bande centrale sombre (image `8-Oreiller_Soya_1.0_couverture_HD.webp`, vue). **[constaté]**

**2.3 Versions 1.0, 2.0 et 3.0.** Les trois « versions » ont trois formes différentes **[constaté, visuels de products.json]** :
- 1.0 : oreiller rectangulaire texturé, zone centrale sombre ;
- 2.0 : papillon à contour, housse blanche matelassée, flancs en maille. L'image principale porte les pastilles « CertiPUR », « OEKO-TEX » et « 30 nuits d'essai » ;
- 3.0 : oreiller « nuage » à ailettes, avec un point central. D'après la fiche, il mesure **62 cm × 37 cm** et offre **deux hauteurs, 14,4 cm ou 9 cm** (`web/pdp3_fulltext.txt`, l. 157-163 ; même cote sur le visuel produit n° 32).

Le récit d'évolution (« Après plus de 100 000 dormeurs conquis par le SOYA 2.0… nous avons créé le SOYA 3.0 », `cap/pdp3-d-buybox.txt`) suggère une filiation technique. Pourtant, la fiche 3.0 réutilise le comparatif « OREILLER CLASSIQUE ✕ / OREILLER SOYA 2.0 ✓ » (`gallery/sheet-1.jpg`, 11.svg, ainsi que le visuel gris n° 28), et les cinq questions de sa FAQ en JSON-LD parlent du « SOYA 2.0 » (`pdp3.html`, FAQPage). **[constaté]** Les prix catalogue montent par palier (49,90 € barré, puis 119,90 €, puis 139,90 €) pour installer le 3.0 comme haut de gamme. **[déduit]**

Comparaison avec Somnila : le Soya 3.0 a le même principe que le Neck 01 (deux hauteurs), mais pas les mêmes cotes. Soya annonce 14,4 / 9 cm, contre 13 / 11 cm pour Neck 01. **[constaté]** Son emprise de 62 × 37 cm est identique à celle d'un papillon générique vendu par Comfy Sleepers (62 × 37 cm, hauteurs 8 / 12 cm, visuel « PRODUCT SIZE », `soya_prix/imgs/comfysle_3.img`). C'est un **indice** de moule courant, pas une preuve de provenance.

**2.4 Gamme linge.** Elle comprend la soie (draps, housse de couette, taie, masque) et la ligne SoyaFresh (draps, couette). Les produits en soie ont un prix unique quelle que soit la taille : 49,90 € pour les 6 tailles de draps (90×190 à 200×200 cm) et 44,90 € pour les 12 tailles de housse de couette (140×200 à 240×260 cm). **[constaté]** Chez Label Naturel, une housse de couette en soie de mûrier coûte de 199,20 € (140×200 cm) à 471,20 € (280×240 cm) en prix soldé, avec des prix barrés de 249 € à 589 € (`soya_prix/www.label-naturel.com_products_housse-de-couette-en-soie-de-murier.js`, 24 variantes). Soya est donc très en dessous de ce seul prix de référence relevé. C'est un **indice** que la composition « soie naturelle de mûrier » est inexacte, pas une preuve : le grammage et la composition ne sont publiés nulle part. **[déduit]** La fiche SoyaFresh se dit « certifiés OEKO-TEX® » et la fiche 3.0 affiche « Certification OEKO-TEX® STANDARD 100 », sans numéro de certificat (`cap/couette-m-buybox.txt`, `pdp3.html`). **[constaté]** Ces labels ne sont donc pas vérifiables. **[risque]**

**2.5 Produits génériques et le « coussin lombaire ».** Les visuels montrent des formats très répandus sur les places de marché : coussin de siège et coussin lombaire, oreiller de voyage enveloppant, couverture lestée, ensemble de coussins-cales, coussin-lit avec appui-tête présenté comme une « Conception orthopédique brevetée », sans numéro de brevet. **[constaté, images de products.json]**

Le cas du **« Coussin Lombaire Ergonomique Soya »** (SKU SOY_CLE) **[constaté]** :
- les trois premiers visuels (19/10/2025) montrent un **coussin de genoux** en cœur, avec une sangle, de 25 × 25 cm, puis une femme couchée sur le côté, le coussin entre les genoux ;
- les deux visuels ajoutés le 06/12/2025 le présentent comme un « Oreiller de soutien tout-en-un » (genoux, dos, lombaires, hanches, sciatique, cervicales) et un « coussin de soutien 4 en 1 » (genoux, région dorsale, chevilles, cervicales) ;
- la description décrit un coussin lombaire d'assise (« assis sur votre fauteuil de bureau, dans votre voiture »), avec un « soutien pelvien » (`catalogue.json`).

L'intitulé « lombaire » et la description ne correspondent pas au produit montré. **[déduit]** Le prix est de 49,90 €. Sur la place de marché E.Leclerc, un coussin de genoux à mémoire de forme avec sangle est vendu 27,97 € par un vendeur tiers (« Boutique16 »), et les 3 offres vont de 27,97 € à 45,35 € (https://www.e.leclerc/fp/oreiller-ergonomique-pour-jambes-et-genoux-en-mousse-memoire-forme-avec-sangle-reglable-8435527826185, page rouverte, JSON-LD `price: 27.97`).

### 3. Prix barrés, « French Days » et directive Omnibus

**3.1 Statistiques des prix barrés du catalogue** **[constaté, calcul sur products.json]**

| Indicateur | Valeur |
|---|---|
| Produits avec compare-at | 12 sur 19 |
| Remise moyenne (moyenne des produits) | 34,9 % |
| Remise médiane | 27,6 % |
| Remise pondérée par variante (188 variantes) | 24,4 % |
| Ratio moyen barré / prix | 1,67 |
| Minimum | 6,7 % (Réglables, 69,90 € au lieu de 74,90 €, ratio 1,07) |
| Maximum | 60,2 % (Housse 2.0, 11,90 € au lieu de 29,90 €, ratio 2,51) |
| Produits à -60 % ou plus au catalogue | 1 (Housse 2.0) |
| Produits sans compare-at | 7 : les 3 oreillers à bloc Kaching (3.0, 2.0, enfant) et 4 produits sans remise d'aucune sorte hors ajouts (voyage, « lombaire » hors popup, tête de lit, housse enfant hors ajout sur la fiche enfant) |

**3.2 Le Soya 3.0 à 139,90 € et le bloc Kaching.**
- Au catalogue, le Soya 3.0 est à 139,90 € sans compare-at (`products.json`). Le JSON-LD publie une offre à 139,90 EUR pour chacune des 4 variantes, et la balise `product:price:amount` vaut « 139,90 » (`pdp3.html`). **[constaté]**
- Sur la fiche, le bloc Kaching « FRENCH DAYS | JUSQU'À -60% » présélectionne la barre « 1x Oreiller » (`preselectedDealBarId` = `d196a7d1…`). Cette barre a un prix fixe (`discountType: specific`, `discountValue: 69.9`) avec `useProductCompareAtPrice: true`. Comme le produit n'a pas de compare-at, le prix barré affiché est le prix catalogue multiplié par la quantité : 139,90 €, 279,80 € et 559,60 € (`cap/funnel.json`, `pdpBuy`, EUR). **[constaté]**
- Le 2.0 (119,90 € ramené à 59,90 €) et l'enfant (99,90 € ramené à 49,90 €) suivent la même logique. L'affichage en USD de la fiche enfant (117,00 $ barré pour 57,90 $, `cap/enfant-d-buybox.txt`) confirme la mécanique. **[constaté]**
- Conséquence : sur la fiche produit, le visiteur ne se voit jamais proposer 139,90 €. Il existe pourtant des chemins où ce prix s'affiche comme prix de vente (§ 3.3). **[déduit]**

**3.3 Deux prix pour le même oreiller selon la page** **[constaté, HTML en EUR]**

| Page | Soya 3.0 | Soya 2.0 | Soya enfant | Bouton d'achat | Preuve |
|---|---|---|---|---|---|
| Accueil, section « featured collection » | — | **119,90 €**, sans prix barré | — | « + Ajouter », formulaire d'ajout direct au panier (variante 53641794158924) | `home.html`, section `featured_collection_kEBKkP` ; capture américaine « $140.00 » (`cap/home-d-text.txt`, l. 44-46) |
| `/collections/all` | **139,90 €** | **119,90 €** | **99,90 €** | « + Ajouter », tiroir d'achat rapide | `ux/collections_all.html` |
| Recherche « oreiller » | 139,90 € | 119,90 € | 99,90 € | cartes produit | `ux/search_q_oreiller.html` |
| Collection « Nos Best Sellers » (17 produits, sans le 3.0 ni le 2.0) | — | — | **99,90 €** | « + Ajouter » | `ux/collections_nos-best-sellers.html` |
| Fiche produit (bloc Kaching présélectionné) | 69,90 € (barré 139,90) | 59,90 € (barré 119,90) | 49,90 € (barré 99,90) | « Ajouter au panier » | `pdp3.html`, `web/p_*.html` |

Un même oreiller s'affiche donc au double de son prix de fiche sur l'accueil (2.0), sur la page de tous les produits et dans la recherche. **[constaté]** Nous n'avons pas pu observer le montant réellement facturé après un ajout depuis ces cartes : le panier ne s'est pas enregistré et le checkout répond « Request Forbidden ». On ignore donc si la remise Kaching s'applique hors du bloc. **[non vérifié]** Deux lectures sont possibles : soit le client paie 119,90 € ou 139,90 € par ce chemin, soit le prix affiché ne correspond pas au prix payé. Dans les deux cas, c'est un **risque** au regard de l'information sur les prix.

**3.4 « Jusqu'à -60 % sur tout le site ».** Le bandeau affiche « Jusqu'à -60% sur tout le site ! » (`cap/col-d-text.txt`, l. 3 ; `cap/funnel.json`, `timerA1`). Or 4 produits n'ont aucune remise et un seul atteint -60 % au catalogue. À l'inverse, par rapport à un prix de référence que la fiche ne propose jamais, les packs Kaching affichent plus de 60 % : Duo 3.0 -64,7 %, Famille 3.0 -75,0 %, Duo 2.0 -62,5 %, Famille 2.0 -72,9 %. La barre Famille compte l'oreiller « offert » à 139,90 € dans le prix barré (559,60 € = 4 × 139,90 €). **[constaté]** Le slogan ne décrit donc ni la remise la plus courante (médiane : -27,6 %), ni la plus forte affichée. **[déduit]**

**3.5 Compte à rebours et vraies French Days.**
- La configuration Countdown Timer est explicite (`pdp3.html`, `essentialCountdownTimerConfigs`) : nom « FRENCH DAYS 🇫🇷 », `timerType: recurring`, `recurringDays` [1,2,3,4,5,6,0], `endType: never`, création le 2025-10-19T13:35Z, dernière modification le 2026-09-18T06:24Z. Les champs `startDate` (2025-10-16T22:00Z) et `endDate` (2025-10-21T21:59Z) sont toujours présents, mais ne limitent plus rien. **[constaté]**
- Relevé en conditions réelles : le compteur affiche 00:00:39 à 21:58:21 UTC, puis 00:00:00 à 21:59:21 UTC. Il vise donc 21:59 UTC, soit 23:59 à Paris. Dans une nouvelle session, il affiche 23:58:56 à 22:00:05 UTC : il est reparti pour environ 24 heures à minuit, heure de Paris (`cap/funnel.json` `timerA1` et `timerB`, `cap/funnel2.json`). **[constaté]**
- Le site officiel annonce que l'opération French Days se déroule « du lundi 7 au lundi 14 septembre 2026 inclus » (https://www.rejoindrelesfrenchdays.com/, page rouverte). Le 25 septembre, 11 jours après la fin, Soya affichait encore « FRENCH DAYS ». Son thème publié s'appelle « V16 – Version 3.0 French Days » (`Shopify.theme`). **[constaté]** Le compteur quotidien sans fin présente une échéance qui n'existe pas : c'est un **risque** de fausse urgence.
- Le bloc d'achat reprend le même message : « La meilleure offre de l'année – Offre exceptionnelle French Days, dans la limite des stocks disponibles » (`pdp3.html`, bloc `liquid_JrVWqc`). **[constaté]**

**3.6 Omnibus : analyse de risque.** L'article L112-1-1 du Code de la consommation (https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044549592, rouvert) impose que toute annonce de réduction indique le prix antérieur pratiqué, défini comme « le prix le plus bas pratiqué par le professionnel à l'égard de tous les consommateurs au cours des trente derniers jours ». Plusieurs indices montrent que les prix « réduits » sont en fait les prix courants **[déduit]** :
- le bloc Kaching est présélectionné en permanence ;
- le compteur est quotidien et n'a pas de fin ;
- les compare-at des accessoires sont identiques dans la boutique a2bu6h-c5, qui a reçu le catalogue le 2026-05-27 (`soya_prix/old_products.json` : housse 3.0 barrée 39,90, masque 59,90, couverture 158,90) ;
- un article tiers daté de 2026, sans date précise, cite le 2.0 « affiché à 59,90 € en promotion récurrente (119,90 € au prix normal) » (https://www.hadlemans.fr/soya-paris-avis/, rouvert). C'est une source secondaire.

Si 69,90 € (ou 59,90 €) est le prix pratiqué depuis plus de 30 jours, les prix barrés de 139,90 € et 119,90 € ne sont pas des « prix antérieurs » au sens de la loi. C'est un **risque** de non-conformité. Nuance à apporter : le § 3.3 montre que 139,90 € et 119,90 € sont aussi affichés comme prix de vente sur d'autres pages du site. Soya pourrait donc soutenir que ces prix sont « pratiqués ». Seul l'historique des commandes permettrait de trancher. Nous n'avons pas pu consulter l'historique des prix : web.archive.org était injoignable depuis l'environnement.

### 4. Mécaniques de panier moyen

**4.1 Packs et prix unitaires** **[constaté, configuration Kaching et `cap/funnel.json` pour le 3.0 ; calculs]**

| Fiche | Offre | Total | Barré affiché | Remise affichée | Prix par oreiller | Ajouts (tous `preselected: true`) |
|---|---|---|---|---|---|---|
| Soya 3.0 | 1x (présélectionnée) | 69,90 | 139,90 | -50,0 % | 69,90 | +1 housse 3.0, 14,90 (barré 39,90), coloris Bleu par défaut, **case cochée** |
| Soya 3.0 | Pack Duo 2x | 98,90 | 279,80 | -64,7 % | 49,45 | 2 × « +1 housse ». Les deux s'affichent à 14,90 (barré 39,90), mais l'une est configurée à -20 % (17,90 × 0,8 = 14,32, arrondi .90) et l'autre à prix fixe 14,90 |
| Soya 3.0 | Pack Famille « 3x Oreillers +1 Offert » (4) | 139,90 | 559,60 | -75,0 % | 34,98 | 2 × « +2 housses », 14,90 par ligne (barré 79,80 = 2 × 39,90) |
| Soya 2.0 | 1x (présélectionnée) | 59,90 | 119,90 | -50,0 % | 59,90 | aucun |
| Soya 2.0 | Duo | 89,90 | 239,80 | -62,5 % | 44,95 | 2 housses 2.0 offertes (`freeGifts`, quantité 2) |
| Soya 2.0 | Famille (4) | 129,90 | 479,60 | -72,9 % | 32,48 | 4 housses 2.0 offertes (`freeGifts`, quantité 4) |
| Enfant | 1x (présélectionnée) | 49,90 | 99,90 | -50 % | 49,90 | +1 housse enfant, 14,90 (barré au prix catalogue de 29,90, soit une vraie économie de 15 €) |
| Enfant | Duo | 89,90 | 199,80 | -55,0 % | 44,95 | 2 × « +1 housse » 14,90 |

**Montant affiché si le client ne décoche rien** (d'après l'affichage et la configuration, non vérifié au panier) **[déduit]** :
- 1x Soya 3.0 : 69,90 + 14,90 = **84,80 €** ;
- Duo Soya 3.0 : 98,90 + 2 × 14,90 = **128,70 €** ;
- Famille Soya 3.0 : 139,90 + 2 × 14,90 = **169,70 €**, si 14,90 € est le prix de la ligne de 2 housses, ce que suggère le barré de 79,80 €. **[non vérifié]**

**4.2 Housse cochée d'avance.**
- Sur la capture pleine page de la fiche 3.0 (`cap/pdp3-d-full.png`, zone recadrée x 860-1400 / y 700-1450, en EUR), la case « +1 Housse de Rechange – Bleu – €14,90 (barré €39,90) » de l'offre 1x est **cochée au chargement**. Le script `capture.cjs` ne fait aucun clic ni aucune saisie : seulement le chargement de la page avec les cookies de marché France. **[constaté]**
- La configuration marque les 5 ventes additionnelles des trois barres en `preselected: true`. Le total affiché par défaut est donc de 84,80 €, et non de 69,90 €. **[constaté]**
- Le prix barré de 39,90 € est le compare-at de la housse. Plus bas sur la même fiche, le bloc « Complétez pour un confort ultime ! » la vend seule à 17,90 € (`cap/pdp3-d-buybox.txt`). L'économie réelle est donc de 3,00 € (-16,8 %), alors que l'affichage suggère 25,00 € (-62,7 %). **[constaté]**
- Cadre juridique (textes rouverts) : l'article L121-17 du Code de la consommation exige « le consentement exprès du consommateur pour tout paiement supplémentaire ». Lorsque ce paiement résulte d'un consentement « donné par défaut, c'est-à-dire en l'absence d'opposition expresse de sa part à des options payantes qu'il n'a pas sollicitées », le consommateur peut demander le remboursement (https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032227250). L'article L132-22 punit ce manquement d'une amende administrative de 3 000 € au plus pour une personne physique et de 15 000 € au plus pour une personne morale (https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032221077/). Une case payante cochée d'avance correspond à ce cas type. → **risque**, que seule une autorité peut qualifier.

**4.3 « Cadeaux offerts » sans cadeau.** Les barres Duo et Famille du 3.0 portent le sous-titre « Livraison rapide et cadeaux offerts », tout comme la barre Duo de la fiche enfant. Pourtant, aucun cadeau n'est configuré sur ces barres (`freeGifts: []`, `progressiveGiftsEnabled: false`, `progressiveGifts: null`) : les seuls ajouts sont des housses payantes à 14,90 €. **[constaté]** Les traductions anglaises résiduelles (« + 2 Housses de Rechange offertes », « + 3 Housses de Rechange offertes », « Free Express Shipping + Free Gifts ») sont rattachées à un autre identifiant de bloc (`94bfad25…`, alors que le bloc actuel est `560e1bc0…`). Elles suggèrent qu'une version antérieure offrait les housses. **[déduit]** Sur le 2.0, les cadeaux existent bien : 2 ou 4 housses 2.0 (`freeGifts`, produit 15152116433228). **[constaté]**

**4.4 Popup après ajout au panier.** Deux popups Kaching (`kaching-popup-v2-config`, présentes dans `home.html` et sur les fiches) se déclenchent uniquement à l'ajout au panier (`addToCart.enabled: true`, sans condition). La première cible le 3.0 (créée le 2026-06-18), la seconde le 2.0 (créée le 2026-06-10). Chacune s'affiche au plus une fois par jour (`displayFrequency` 1 jour). **[constaté]**
- Titre : « FÉLICITATIONS, VOUS AVEZ DÉBLOQUÉ -60% SUR NOTRE NOUVEL OREILLER LOMBAIRE ! »
- Produit : le coussin de genoux du § 2.5 (produit 15152116302156). Sa fiche date du 2025-10-19 et ses visuels portent le numéro 4 du lot d'images initial : il n'a rien de « nouveau ». **[déduit]**
- Remise : 60 % (`discountType: percentage`, `discountValue: 60`), soit environ 19,96 € au lieu de 49,90 €. **[déduit, non vérifié au panier]**
- Promesses : « Réduit fortement les douleurs lombaires & hanches », « Traite les douleurs chroniques & mauvaises postures ».
- Bouton de refus : « Non merci, je n'aime pas les cadeaux ».

**4.5 Popups e-mail et SMS (Klaviyo).** Deux formulaires sont configurés (`ux/klaviyo_forms.json`) **[constaté]** :
- « Pop-up Mobile | Le Tsunami » : « VOUS AVEZ OBTENU 60% DE RÉDUCTION – À l'occasion de la sortie de notre nouveau produit ! », suivi d'un quiz sur la position de sommeil, puis de la saisie du prénom et de l'e-mail (« Activer ma réduction »). Viennent ensuite « Aujourd'hui seulement : REJOIGNEZ LE CLUB VIP – Fermeture des portes ce soir à 00h ! » avec la saisie du téléphone (« Oui, c'est mon vrai numéro »). L'écran final annonce : « VOTRE RÉDUCTION DE 60% EST ACTIVÉE ! Sur notre nouvel Oreiller Lombaire ! 1. Ajoutez au panier minimum x1 Oreiller Soya. 2. Une pop-up apparaît et vous propose d'ajouter votre nouvel Oreiller Lombaire à -60 %. » Boutons de refus : « Non merci, je n'aime pas les remises. » et « Non merci, je ne veux pas être VIP. »
- « HIGH PROSPECT (Cloned) » : « Commandez maintenant et bénéficiez de 20 % de réduction avec le code promo : BACK20 », « Dépêchez-vous, ce code expire dans : », puis redirection vers `/discount/BACK20`.

La « réduction de 60 % obtenue » contre l'e-mail et le téléphone est la même que celle de la popup Kaching, que tout acheteur voit sans s'inscrire (déclencheur sans condition, § 4.4). Elle ne porte que sur un accessoire. **[déduit]** C'est un **indice** d'appât : la contrepartie annoncée à la collecte de données n'a rien d'exclusif. Le texte « L'offre se termine aujourd'hui à minuit 00h » reprend la même échéance quotidienne que le compteur.

**4.6 AfterSell.** Le script `aftersell-utm-triggers.js` (extension `aftersell-1090`) est chargé sur l'accueil et sur la fiche. **[constaté]** Les offres après achat ne sont pas observables, car le checkout est bloqué (« Request Forbidden »).

**4.7 Rareté.**
- Sur la fiche 3.0, « Plus que quelques exemplaires en stock » (`pdp3.html`, l. 2531, `span.custom-alert-stock`) et « 89% du stock déjà écoulé » avec une barre en `width:89%` (l. 2583-2588), puis « Dernière mise à jour : il y a quelques secondes. » (l. 2593), sont rendus côté serveur dans des blocs de thème de type « liquid » personnalisé. **[constaté]**
- La fiche 2.0 affiche 78 % (`web/p_oreiller-soya-2-0.html`, l. 2363-2368). La valeur de 89 % est identique dans les deux relevés de la fiche 3.0 (`pdp3.html` et `web/p_oreiller-soya-3-0.html`). **[constaté]**
- Aucune donnée de stock ne peut alimenter ces messages : `inventoryManagement` vaut `null` sur toutes les variantes des 19 fiches (stock non suivi), et la propre alerte de stock bas de Kaching est désactivée (`lowStockAlertEnabled: false`). **[constaté]** Le code Liquid source n'est pas visible, mais sans suivi du stock, le pourcentage ne peut pas refléter un stock réel. **[déduit]**
- La fiche enfant affiche au contraire « En stock – Prêt à l'expédition » (`cap/enfant-d-buybox.txt`).
- → Allégation de rareté sans fondement dans les données : **risque** de pratique commerciale trompeuse.

**4.8 « 30 nuits d'essai – Satisfait ou remboursé » face à la politique de retour.** Le bloc d'achat promet « 30 nuits d'essai — Satisfait ou remboursé » (`cap/pdp3-d-buybox.txt`). La politique de livraison ajoute que l'on peut « le retourner sans frais dans ce délai pour un remboursement complet » (`pol/shipping-policy.txt`). Mais la politique de remboursement exige que l'article soit « dans l'état où vous l'avez reçu et dans son emballage d'origine », précise « Nous remplaçons uniquement les articles présentant des défauts ou des dommages » et ne dit rien de la gratuité du retour (`pol/refund-policy.txt`). **[constaté]** Un oreiller utilisé 30 nuits n'est plus « dans l'état où vous l'avez reçu ». La garantie mise en avant est donc vidée de sa substance par le texte contractuel. **[déduit]** L'article tiers de hadlemans.fr indique « Frais à la charge du client » pour les retours (source secondaire). → **risque** d'information trompeuse sur la garantie commerciale.

### 5. Chronologie

| Date | Événement | Preuve | Nature |
|---|---|---|---|
| 2024-09-05 | Enregistrement du domaine soya-paris.com | web/rdap.json (08:50:10Z) | constaté |
| 2025-04-02 | Collection « frontpage » publiée : la boutique existe déjà | collections.json | constaté |
| 2025-04-19 | Plus ancien des 40 avis Loox intégrés à la fiche 3.0 (produit Soya 2.0). 20 avis sont antérieurs au 19/10/2025 | pdp3.html (`loox-review-date`) | constaté |
| juillet 2025 | « questionnaire envoyé à l'ensemble des clients de nos oreillers » cité pour les chiffres 96 / 91 / 87 % | cap/home-d-text.txt, l. 148 | constaté (citation) |
| 2025-10-19, 07:45:56 → 07:46:14 (Paris) | 8 produits créés en 18 s (tête de lit, lombaire, couverture, réglables, siège, housse 2.0, masque, 1.0), tous avec SKU : import en masse | products.json | constaté / déduit |
| 2025-10-19, 09:20 → 10:46 (Paris) | 9 produits créés un par un (housse 3.0, 3.0, draps et couette SoyaFresh, 2.0, housse soie, housse de couette soie, draps soie, voyage) | products.json | constaté |
| 2025-10-19 | Les images des 15 produits hors 3.0 et housse 3.0 sont numérotées de « 1- » (2.0) à « 15- » (masque) : lot préparé d'avance. Le 3.0 et sa housse n'en font pas partie. « Nos Best Sellers » est publiée à 09:21 | products.json, collections.json | constaté (numéros) / déduit (lot antérieur) |
| 2025-10-19, 13:35 UTC | Création du compte à rebours « FRENCH DAYS » | pdp3.html | constaté |
| 2025-12-02 / 12-06 | Nouveaux visuels pour la housse 3.0 (3) et le « lombaire » (2, « 4 en 1 ») | products.json | constaté |
| 2026-02-28, 23:30 (Paris) | Variante Gris (3.0 et housse). Deux images nommées « Firefly_Gemini_Flash_Generate_the_same_image_exactly_as_the_reference._Keep_all_text_icons_layout_compo_480153_5 » (et _3) | products.json (images 28 et 32) | constaté (nom) / déduit (IA) |
| 2026-05-09 | Oreiller enfant et sa housse | products.json | constaté |
| 2026-05-27 | Import des 19 produits dans la boutique a2bu6h-c5 (soyaparisoreillerergonomique.com, Sheridan, Wyoming, USD) | soya_prix/old_products.json | constaté |
| 2026-06-10 / 06-18 | Création des popups Kaching « lombaire -60 % » (2.0, puis 3.0) | kaching-popup-v2-config | constaté |
| 2026-09-07 → 14 | French Days officiels | rejoindrelesfrenchdays.com | constaté |
| 2026-09-18 | Dernière modification du compte à rebours | pdp3.html | constaté |
| 2026-09-25 | « FRENCH DAYS » toujours affiché. Les 19 produits ont un `updated_at` identique, 23:16:19 (+02:00), l'heure même de la collecte | products.json, funnel.json | constaté |

Lecture **[déduit]** : les 17 produits créés le 2025-10-19 ne signalent pas une boutique neuve. Le catalogue a été recréé ce jour-là dans une boutique ouverte depuis au moins avril 2025, à partir d'un lot d'images préparé d'avance. Les avis clients, dont certains remontent à avril 2025, ont été conservés. La même journée voit le lancement du 3.0 et la pose du compte à rebours. Aucune preuve ne permet de chiffrer l'ancienneté ni le volume de la publicité de Soya. Seul un article tiers parle d'une marque « active depuis environ 2024-2025 avec une forte présence publicitaire en ligne » (hadlemans.fr, non vérifié).

### 6. Indices de volume (inventaire exposé)

Kaching expose la quantité disponible (`includeAvailableQuantity: true`, `kaching-bundles-config`). Les valeurs sont toutes négatives **[constaté, `inventoryQuantity` dans web/p_*.html]** :

| Produit | Quantité | Produit | Quantité |
|---|---|---|---|
| Soya 2.0 | -51 191 | Housses soie (4 coloris) | -3 935 |
| Housse 2.0 | -41 513 | Coussins de siège | -1 064 |
| « Lombaire » | -13 908 | Voyage (4 coloris) | -871 |
| Soya 3.0 (Blanc -3 888, Gris -2 431, Bleu -1 999, Beige -1 401) | -9 719 | Masque | -806 |
| Housses 3.0 (Bleu -1 312, Gris -1 135, Beige -760, Blanc -741) | -3 948 | 1.0 / enfant (3 coloris) | -565 / -403 |

Ces chiffres ne prouvent pas des ventes : le stock n'est pas suivi aujourd'hui (`inventoryManagement: null`), et les valeurs peuvent venir d'une importation ou d'une période où le suivi était actif. **[déduit]** Trois observations renforcent pourtant leur valeur d'indice **[indice]** :
- la variante **Gris** n'existe que depuis le 2026-02-28. Ses -2 431 unités se sont donc accumulées en 7 mois, sauf saisie manuelle, et ne peuvent pas venir d'une migration antérieure à octobre 2025 ;
- parmi les housses 3.0, c'est le coloris **Bleu**, celui de la case cochée par défaut (§ 4.2), qui est le plus négatif (-1 312), alors que l'oreiller Bleu ne vient qu'en troisième position (-1 999, contre -3 888 pour le Blanc). C'est cohérent avec des housses ajoutées via la case précochée, sans choix du client ;
- les housses 2.0 atteignent 81 % du volume de l'oreiller 2.0 (-41 513 contre -51 191), ce qui est cohérent avec les housses offertes dans les packs 2.0. Pour le 3.0, dont les housses sont payantes, le ratio est de 41 % (-3 948 contre -9 719).

La hiérarchie reste cohérente avec la stratégie observée : le 2.0 et ses housses dominent, et le « lombaire », poussé à -60 % en popup, dépasse le 3.0. L'accessoire proposé après l'ajout au panier semble donc un levier de volume important. **[indice]**

### 7. Produits similaires et prix du marché (recherches web)

| Offre | Prix relevé | Forme | Source (ouverte) |
|---|---|---|---|
| Confort&alignement, « Oreiller Ergonomique Premium Papillon » | 59,90 € (barré 69,90) | papillon à point central, proche du Soya 3.0 et du Neck 01 | https://confortetalignement.com/products/oreiller-ergonomique-papillon |
| Somnilys, « Oreiller ergonomique cervical Gen. 2 » | 128,00 € (compare-at 125,00, inférieur au prix) | papillon bicolore | https://somnilys.com/products/oreiller-ergonomique-gen-2 |
| Zamat (Hong Kong), « Butterfly Shaped Cervical Memory Foam Pillow » | 65,99 $ (1), 121,98 $ (2) | papillon à contour, visuellement proche du Soya 2.0, fiche créée en 2021, 25 × 14,5 × 5 pouces (environ 63,5 × 36,8 × 12,7 cm) | https://zamatsleep.com/products/butterfly-shaped-cervical-pillow-pro |
| Comfy Sleepers (Dallas) | 59,99 $ | papillon à contour 62 × 37 cm, hauteurs 8 / 12 cm (visuel « PRODUCT SIZE ») | https://comfysleepers.com/products/butterfly-memory-foam-cervical-pillow-neck-shoulder-support-1 |
| Inphysio, « Oreiller Papillon Ergonomique » | 69,90 € (barré 74,20) | papillon en X, 53 × 43 × 12 cm | https://inphysio.fr/products/oreiller-papillon-ergonomique-multi-positions |
| HT Confort, « Oreiller Papillon » | 80,00 € | papillon en X | https://www.htconfort.com/products/oreiller-papillon |
| Derila Ergo (fiche FR) | 133,30 €, sans compare-at dans le JSON produit | cervical | https://fr.derilashop.com/products/oreiller-cervical |
| Emma Original Adapt | 48,99 € (barré 69,99) | 3 couches ajustables | https://www.emma.fr/oreiller-original/ (rouverte) |
| Emma oreiller cervical (Lidl) | 29,99 € (« prix conseillé » 149,99) | cervical rectangulaire | https://www.lidl.fr/p/emma-oreiller-cervical/p100406211 (rouverte) |
| Wopilo Plus | 99 € (1), 189 € (2) | cervical ajustable | https://wopilo.com/products/wopilo-plus |
| Tediber « Oreiller incroyable » | 85 € (1), 170 € (2) | pas en mousse à mémoire de forme | https://www.tediber.com/products.json |
| Pilloway (Australie) Cloudii | 65 AUD (barré 94 AUD) | oreiller à mémoire de forme | https://www.pilloway.com.au/products.json |
| **Somnila Neck 01** | **69,90 €** | nuage à deux hauteurs, 13 / 11 cm | build/PHASE3.md |

Non vérifié :
- Des fiches AliExpress (aliexpress.us/item/3256808598874210 : redirection vers la connexion), Alibaba (product-detail 1601524354164 : page vide ; showroom : erreur 410), Amazon (B0G8H7RZ4Q : erreur 500), Temu (fiche « non disponible »), ManoMano et eBay (erreur 403) ont été trouvées par recherche mais n'ont pas pu être lues. Aucun prix fournisseur n'est donc retenu.
- Dodo (erreur 403) et Morphée Pillow (domaine introuvable) : non vérifiés.
- Oreiller enfant : aucun produit identique (58 × 32 cm, hauteurs 6 / 8 cm) trouvé.

Conclusion prudente : les formes vendues par Soya (papillon à contour, nuage à deux hauteurs, coussin de genoux, coussins de siège, cales, couverture lestée) ressemblent visuellement à des produits génériques vendus par de nombreuses boutiques depuis des années. L'emprise de 62 × 37 cm est commune au Soya 3.0 et au papillon Comfy Sleepers, et le Zamat en est très proche. Ce sont des **indices** de moules courants : rien ici ne prouve la provenance exacte.

### 8. Ce qu'il faut retenir de la stratégie prix et produit de Soya

1. **Un double prix systématique.** Un prix catalogue élevé (139,90 / 119,90 / 99,90 €) sert d'ancre dans Shopify, dans le JSON-LD et les balises de prix, sur l'accueil (2.0), dans la recherche et sur `/collections/all`. Sur la fiche, Kaching impose un prix deux fois plus bas, présenté chaque jour comme une remise « French Days ». **[constaté]** Le client voit deux prix différents pour le même oreiller selon la page par laquelle il arrive. **[constaté]**
2. **Le volume se fait sur les packs.** Dans les packs de 4, le prix unitaire tombe à 34,98 € (3.0) et 32,48 € (2.0). L'écart de 10 € entre les versions oriente vers le 3.0 sans cannibaliser le 2.0. **[déduit]**
3. **La marge se récupère sur les ajouts.** Les leviers sont nombreux : housse cochée d'avance (coloris Bleu par défaut), popup « lombaire » à -60 % après chaque ajout d'oreiller, formulaire Klaviyo qui vend cette même remise comme une récompense contre l'e-mail et le téléphone, AfterSell, et une gamme d'accessoires génériques à forte remise affichée (housses de -55 à -60 %). **[constaté / déduit]**
4. **L'urgence et la rareté font partie du système.** Compteur de 24 h renouvelé chaque nuit, « club VIP » qui « ferme ce soir », stock écrit dans la page, note de 4,8/5 sur « 15 637 avis » affichée sur les 19 fiches alors que Loox donne 4,3/5 sur 339 avis pour le 3.0 et 1 776 avis au total sur les 19 produits (`pdp3.html` l. 7163-7170, `web/loox_vs_affiche.tsv`). **[constaté]**
5. **Un catalogue large et opportuniste** : soie à des prix très inférieurs au marché, visuels de coloris très probablement retouchés par IA, intitulés inexacts (« lombaire »), labels (OEKO-TEX, CertiPUR) sans numéro de certificat. L'ensemble repose sur un seul vrai produit vedette, l'oreiller papillon. **[déduit]**
6. **Des risques qui peuvent aussi être des avantages de coût.**
   - Les 205 variantes de soya-paris.com sont en `taxable: false` (`products.json`). Les mêmes produits sont en `taxable: true` dans la boutique a2bu6h-c5 (`soya_prix/old_products.json`). Les mentions légales donnent pour « siège » une adresse de Casper, Wyoming, sans SIREN ni numéro de TVA (`pol/legal-notice.txt`). Le fichier `meta.json` de la boutique indique London, England, GB (`soya_prix/new_meta.json`). **[constaté]**
   - `taxable: false` signifie seulement que Shopify ne calcule pas de taxe : la TVA peut être déclarée en dehors de Shopify. C'est donc un **indice**, pas une preuve, de TVA non collectée. **[déduit]** Si la TVA n'était pas reversée, Soya garderait 69,90 € là où un vendeur en règle garde 58,25 € HT. **[déduit]**
   - La boutique a2bu6h-c5 (soyaparisoreillerergonomique.com, identifiant 71078019242, Sheridan, Wyoming, USD, thème Shrine PRO 1.6.1) contient les 19 mêmes produits (vendor « SOYA PARIS »), créés le 2026-05-27. Ses prix barrés n'ont pas été convertis : draps en soie à 60,00 $ pour un barré de 59,90, réglables à 83,00 $ pour 74,90. **[constaté]** Son identifiant de boutique est inférieur à celui de soya-paris.com (93550543180). Les identifiants Shopify étant attribués dans l'ordre croissant, elle a probablement été ouverte **avant**, et seuls ses produits datent de mai 2026. Rien ne permet donc de dire laquelle copie l'autre. **[déduit]** us.soya-paris.com est la même boutique que soya-paris.com (identifiant 93550543180, `soya_prix/us.soya-paris.com_meta.json`). **[constaté]**

### 9. Positionnement de Somnila face à Soya

| Point de comparaison | Soya | Somnila | Lecture |
|---|---|---|---|
| Oreiller à deux hauteurs, 1 unité | 69,90 € « au lieu de 139,90 € » sur la fiche ; 139,90 € dans la recherche et sur `/collections/all` ; hauteurs 14,4 / 9 cm | 69,90 €, prix unique ; hauteurs 13 / 11 cm | Même prix. Soya paraît « -50 % », Somnila paraîtra « plein tarif » si elle ne l'explique pas |
| Papillon à contour, 1 unité | 59,90 € (2.0) sur la fiche, 119,90 € sur l'accueil | 59,90 € (Contour 01) | Même prix que sur la fiche |
| Oreiller + housse | 84,80 € (total par défaut, case cochée) | 76,90 € (pack Neck 01 + Cover) | Somnila est **7,90 € moins chère** que le panier par défaut |
| 2 oreillers | 98,90 € (49,45 €/u), ou **128,70 €** si les 2 housses précochées restent cochées | 119,90 € (59,95 €/u) | Soya coûte 21,00 € de moins en décochant, et 8,80 € de plus sans rien décocher (affichage, non vérifié au panier) |
| Famille | 139,90 € pour 4 (34,98 €/u), 169,70 € avec les housses précochées (non vérifié) | 169,90 € pour 3 (56,63 €/u) | Hors d'atteinte pour Somnila (coût 25 € et CAC 25 € par commande, build/PRIX.md) |
| Livraison / essai | livraison offerte sur toute commande ; « 30 nuits » mais retour limité aux articles dans leur état d'origine (§ 4.8) | offerte dès 54,90 € ; 30 nuits | Équivalent pour un oreiller. L'essai de Soya est contredit par sa politique de retour |
| Preuves | 4,8/5 « 15 637 avis », faux stock, compteur sans fin | données réelles uniquement | Différenciation par la preuve |

Recommandations **[déduit des constats]** :
- **Ne pas baisser le Neck 01.** À 69,90 €, Somnila est déjà au prix effectif de Soya.
- **Rendre visible la comparaison honnête** : « 69,90 €, le prix de tous les jours, sans compte à rebours ». Mettre en avant le pack oreiller + housse à 76,90 €, moins cher que le panier par défaut de Soya (84,80 €).
- **Ne pas chercher à battre les packs de 4.** Viser l'acheteur seul ou en couple, qui compare fiche contre fiche.
- **Faire de chaque risque de Soya un engagement public de Somnila** : pas de case cochée, pas de prix barré de référence, un seul prix partout sur le site, pas de stock inventé, pas de coloris non photographié, des intitulés exacts, une garantie 30 nuits écrite de la même façon dans la fiche et dans la politique de retour.
- **Si Somnila utilise une popup après l'ajout au panier**, afficher le prix réel, ne faire aucune allégation thérapeutique et proposer un refus neutre (« Non merci »).
- **Surveiller** chez Soya l'arrivée de coloris et de déclinaisons comme l'enfant (extensions de gamme sans nouveau moule), ainsi que les packs pendant les fêtes.

### 10. Limites

- Le panier et le checkout n'ont pas été observés : l'ajout au panier ne s'est pas enregistré et le checkout répond « Request Forbidden ». Tous les totaux de panier et le montant facturé hors du bloc Kaching sont donc **non vérifiés**.
- L'historique des prix est inaccessible (Wayback injoignable), et les places de marché des fournisseurs étaient illisibles.
- Les inventaires négatifs, le statut TVA et la composition « soie » sont des indices, pas des preuves.
- Les jugements juridiques sont formulés comme des **risques** : seule une autorité (DGCCRF) ou un juge peut qualifier une infraction.
