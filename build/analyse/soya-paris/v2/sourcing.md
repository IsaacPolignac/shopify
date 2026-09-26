## Origine, coût et marge de l'Oreiller Soya 3.0 (et du 2.0, de l'oreiller enfant et du « lombaire ») — version contre-vérifiée

*Mission complémentaire du 26/09/2026, contre-vérifiée le même jour vers 12:00 UTC. Le dossier principal (§ 7.4, § 7.8, § 8.6, § 8.7) avait posé les premiers indices. Ce chapitre cherche le fournisseur probable, les prix de gros, le coût rendu client et la marge par offre. Toutes les sources citées ont été rouvertes par le contre-enquêteur. Les constats réfutés ou corrigés sont signalés par « contre-vérification ».*

*Chemins de preuve :*
- *`soya2/sourcing/` = `/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/soya2/sourcing/` (première enquête, index dans `INDEX.txt`) ;*
- *`soya2/contre_sourcing/` = même racine, dossier de la contre-vérification : `flipcrop.py`, `extra_hash.py`, `compteurs_famille.py` et `compteurs_famille_out.txt`, planches `board_lecture.jpg`, `board_masque.jpg`, `board_nuage_neck.jpg`, `board_nuage_enfant.jpg`, `board_mic.jpg`, `firefly.jpg`, `check_extra.jpg`, images `img_extra/` et `mic_verif/` ;*
- *les autres chemins suivent les conventions du dossier (`soya/`, `mkt/`, `build/`).*

*Taux de change utilisé partout : 1 € = 1,159 $ (build/ANALYSE_PRIX.md, 10/09/2026).*

*Aucune requête vers soya-paris.com, ni pendant l'enquête ni pendant la contre-vérification. Les images ont été lues sur le CDN Shopify : 82 fichiers pendant l'enquête, 18 pendant la contre-vérification, à `?width=600` ou `500`, avec 0,4 à 0,5 s entre deux requêtes. S'y ajoutent 4 images de made-in-china.com et des lectures WebFetch de Trustpilot, Accio, touteleurope.eu, whitehouse.gov, shopify.com et docs.parcelpanel.com.*

### 0. Ce que la contre-vérification a changé

**Confirmé**
- Aucune photo commune entre Soya et Somnila, y compris en miroir et en recadrage.
- Le Neck 01 et le Soya 3.0 ne sortent pas du même moule.
- Les prix de gros Made-in-China et Accio.
- Le calcul des marges.
- Les indices d'expédition depuis la Chine.
- La grille Somnila est calculée sans TVA.
- Le droit européen de 3 € par catégorie d'articles.

**Corrigé**
1. **Le coût d'achat de Soya n'est pas « probablement bas ».**
   - Le raisonnement sur le pack Famille ne tient que si Soya reverse la TVA. Sans TVA reversée (indice `taxable: false`), un oreiller à 25 € livré reste compatible avec le pack.
   - Les indices d'envoi direct depuis la Chine (§ 8) contredisent le scénario « bas », qui suppose un stock en France.
   - Le scénario « central » à 19 € est inférieur à la somme de ses propres données (prix usine + express = 20,10 à 23,80 €).
2. **Fournisseur candidat.**
   - Les deux fiches Made-in-China appartiennent au même compte (Shenzhen Jintongyuan, même adresse) : il n'y a pas deux usines.
   - Le MOQ affiché varie de 200 à 1 000 pièces selon la section de la fiche.
   - Les hauteurs diffèrent : 11 / 9 cm à l'usine, 14,4 / 9 cm chez Soya.
   - 14 cartes sur 30 de la recherche « Butterfly Pillow » viennent de ce seul fournisseur (et non 13) : la « médiane du marché » est surtout la sienne.
3. **Les « 62 × 37 cm » ne sont pas les cotes du Soya 2.0.** Soya annonce 60 × 40 × 14 cm pour son 2.0. Ce sont les cotes du papillon Comfy Sleepers.
4. **Compteurs.** Avec le relevé de 11:49 UTC, le ratio housses / oreillers 3.0 tombe à 72 % sur 13 h 37. C'est un plafond, pas une mesure de la case cochée. Les housses ne suivent pas la couleur des oreillers.
5. **Le marché principal de Somnila est les États-Unis** (build/HANDOFF.md l. 51 ; build/PHASE0.md § 2). Les leçons « TVA » et « droit de 3 € » ne valent que pour les commandes européennes. Aux États-Unis, l'exemption *de minimis* est suspendue pour tous les pays.

**Ajouté**
- Somnila et Soya vendent le **même coussin de lecture** : le Lounge 01 de Somnila à 54,90 € contre le « Coussin ergonomique avec tête de lit » de Soya à 42,90 €.
- Une **photo d'oreiller nuage est publiée comme coloris « Cloud » du Mask 01** de Somnila.
- Deux visuels du coloris Gris du 3.0 sont des **reproductions faites par IA** (« Generate the same image exactly as the reference »).

### 1. Réponse courte

| Question | Réponse | Nature |
|---|---|---|
| Soya et Somnila partagent-ils des photos ? | **Non.** Voir le détail ci-dessous. | [constaté] |
| Même moule pour le Neck 01 et le Soya 3.0 ? | **Non** : nuage à lobes arrondis contre papillon à cornes et bourrelet nervuré. Le Neck 01 est plus proche, par sa silhouette, de l'**oreiller enfant** Soya, à une autre échelle. | [déduit] ; [indice] pour la parenté avec l'oreiller enfant |
| Produit commun aux deux catalogues ? | **Oui, probablement.** Le Lounge 01 de Somnila et le « Coussin ergonomique avec tête de lit » de Soya ont la même silhouette : dièdre ondulé, petit appui-tête, découpes pour les bras. | [indice fort, comparaison visuelle] |
| D'où vient le Soya 3.0 ? | D'un modèle catalogue chinois vendu en marque blanche (OEM). Un compte Made-in-China (Shenzhen Jintongyuan) en montre les traits distinctifs, à 6,90-10,20 $ pièce, mais avec des hauteurs de 11 / 9 cm (14,4 / 9 cm chez Soya). Fournisseur exact inconnu. | [indice] |
| Combien coûte-t-il à Soya ? | Hypothèses de **13 à 25 €** livré. Aucune preuve ne permet de choisir dans la fourchette. Les indices d'envoi direct depuis la Chine rendent le bas de fourchette (stock en France) moins plausible que le milieu ou le haut. | [déduit, estimation] |
| Quelle marge ? | TVA reversée, avant publicité : 22,75 à 41,85 € sur l'offre 1x (central 30,30 €) ; 30,17 à 70,21 € sur le Duo avec 2 housses. Point mort de l'offre 1x : un CAC de 22,8 à 41,9 €. | [déduit, estimation] |
| Expédié d'Asie ? | Plusieurs indices concordants : ParcelPanel masque la Chine ; avis « packaging provenance Chine », « arriver de chine », « aucune étiquette de made in » ; délais de 10 à 23 jours. Pas de preuve documentaire. | [indice] |
| La housse cochée d'office « tient-elle » ? | Sur 13 h 37 : 115 housses 3.0 pour 160 oreillers 3.0 (72 %), contre 41 % en cumul. C'est un plafond, car les housses vendues seules comptent aussi. La housse Bleu est surreprésentée. | [indice] |

**Détail de la comparaison des photos.**
- 21 624 paires comparées ; la plus proche est à 14 bits sur 64.
- En miroir et en recadrage : 259 488 comparaisons, minimum 12 bits, aucune paire sous 10 bits.
- 16 images Soya ajoutées (masque, coussin tête de lit, couverture, siège, oreillers réglables) : 2 paires à 10 bits, des faux positifs vérifiés à l'œil (coussin de siège contre oreiller latéral).

### 2. Photos et moules

**Méthode (enquête).** Trois empreintes codées à la main avec Pillow et numpy (`soya2/sourcing/phash.py`) :
- aHash : 8 × 8 ;
- dHash : 9 × 8 ;
- pHash : réduction à 32 × 32, transformée en cosinus (DCT), bloc 8 × 8, seuil à la médiane.

Distance de Hamming sur 64 bits.
- Corpus Soya, 159 images : galerie `soya/gallery/`, fiche `pdpwork/g_*`, `k_*`, 82 images de products.json (`soya2/sourcing/img_soya/`), vignettes `soya_prix/imgs/`.
- Corpus Somnila, 136 images : 46 dans `build/images/source/`, 90 dans `build/images/shopify/`.
- Calibrage : les doublons internes à Soya (même visuel sous deux URL) tombent à 0-6 bits.

| Comparaison | Paires | pHash minimal | 1er centile | Médiane | Paires sous 10 bits | Preuve |
|---|---|---|---|---|---|---|
| Soya × Somnila | 21 624 (159 × 136) | **14** | 20 | 30 | **0** | `soya2/sourcing/hash_cross.tsv` (recalculé à la contre-vérification) |
| Soya × Somnila, Somnila en miroir, recadré à 80 % et 60 % ; Soya plein, 80 % et 60 % | 259 488 | 12 | 22 | 32 | 0 | `soya2/contre_sourcing/flipcrop.py` |
| 16 images Soya absentes du premier corpus × Somnila (plein, miroir, recadré) | 13 056 | 10 | 20 | 32 | 2 à 10 bits, faux positifs | `soya2/contre_sourcing/extra_hash.py`, `check_extra.jpg` |
| Soya × images de marché (Made-in-China, Derila, Comfy Sleepers, Confort&alignement…) | 7 865 (121 × 65) | 12 | 20 | 32 | 0 | `soya2/sourcing/hash_mkt.tsv` |

- Les paires les plus proches sont des artefacts de composition (objet clair centré sur fond uni, fond bleu nuit contre masque noir) [constaté en ouvrant les images].
- **Aucune photo identique ou quasi identique** [constaté].
- Limite : une empreinte perceptuelle ne reconnaît pas le même objet photographié sous un autre angle. Elle ne dit donc rien des **produits** communs (voir plus bas).

**Regard sur les moules** (`soya2/sourcing/board_forme.jpg`, `board_details.jpg`, rouverts) :

| Trait | Neck 01 (devis 09, rendus 3D) | Soya 3.0 (photos) | Compte Made-in-China Shenzhen Jintongyuan |
|---|---|---|---|
| Nature des visuels | 4 rendus 3D d'une même scène sur fond bleu dégradé ; « 灰 » (gris) et « 蓝 » (bleu) incrustés sur deux d'entre eux [constaté, `soya2/contre_sourcing/neck01_cn.jpg`] | photos de studio retouchées ; 2 visuels Gris reproduits par IA (§ 2 bis) | photo brute d'atelier (mousse blanche) et visuels marketing (modèle gris à flancs en maille) |
| Contour vu de dessus | nuage à lobes **arrondis**, bord supérieur bombé au centre | papillon à **cornes** aux angles, **encoche** au centre du bord supérieur | cornes aux angles, bord supérieur creusé |
| Centre | bouton rond cerclé | point central froncé | « Air hole » froncé, « Center Cavity » |
| Flancs | lobes inférieurs arrondis sur une base | découpes concaves, ailettes sur socle | découpes concaves (« Shoulder Contour », « Arm Rest Area ») |
| Bord avant | 5 picots moulés | **nervures verticales** sur le bourrelet (05.svg, 16.svg) | **nervures verticales** sur le bourrelet (photo d'atelier) |
| Cotes | 62 × 42 × 13 / 11 cm, 1,4 kg | 62 × 37 cm, 14,4 / 9 cm (fiche) ; housse « 60 x 40 cm » | **11 / 9 cm** (visuel « One Pillow With Two Options ») ; colis de 18 × 18 × 36-38 cm, 1,45 kg brut |
| Preuve | build/images/source/09-oreiller-cervical/*.jpg ; build/PRODUCTS.csv (id_devis 09) | soya/gallery/05.jpg, 16.jpg ; soya/web/pdp3_fulltext.txt l. 161-163 | soya2/sourcing/img_mkt/mic_tnjk_10.webp, mic_jty_2.webp, mic_jty_12.webp (provenance recontrôlée : pHash 0 avec les images retéléchargées depuis les deux fiches, `soya2/contre_sourcing/mic_verif/`) |

**Conclusion [déduit].**
- Le Soya 3.0 et le Neck 01 sont de la même **famille** : mousse à mémoire de forme contournée, point central, deux hauteurs, housse amovible.
- Ils ne sortent **pas du même moule** : bord supérieur bombé contre creusé, lobes ronds contre cornes, picots contre nervures. Leurs cotes diffèrent aussi : 42 contre 37 cm de profondeur, 13 / 11 contre 14,4 / 9 cm.
- Le Soya 3.0 et la mousse photographiée par Jintongyuan partagent quatre traits distinctifs : cornes, découpes latérales, point central froncé, bourrelet nervuré. C'est un **indice** d'un modèle catalogue vendu en marque blanche.
  - Ce n'est pas une preuve du fournisseur exact.
  - La hauteur annoncée diffère : 11 / 9 cm à l'usine, 14,4 / 9 cm chez Soya. Le chiffre de 14,4 cm figure sur un visuel reproduit par IA (§ 2 bis).
  - Un seul fournisseur a été identifié. L'idée que « plusieurs usines » produisent ce moule reste une hypothèse.
- Le découpage de l'infographie Soya 06.svg reprend celui du visuel « Zoning design » de l'usine [indice] :
  - Soya : « zone de soutien cervical arc-haut / arc-bas », « zone d'extension des épaules », « zone de soutien des bras » ;
  - usine : Center Cavity, ARC Cervical Support, Shoulder Contour, Arm Rest Area.

**Parenté du Neck 01 avec l'oreiller enfant Soya [indice, ajout de la contre-vérification].**
- Le rendu du Neck 01 est un nuage à quatre lobes posé sur une base débordante.
- Cette silhouette ressemble davantage à l'**Oreiller Soya enfant** (58 × 32 × 6 / 8 cm, visuels `soya2/sourcing/img_soya/enf_*`) qu'au Soya 3.0 (`soya2/contre_sourcing/board_nuage_neck.jpg`, `board_nuage_enfant.jpg`).
- Les tailles annoncées n'ont rien à voir : 62 × 42 × 13 / 11 cm contre 58 × 32 × 6 / 8 cm. On ne peut donc parler que d'une famille de silhouettes, pas d'un produit commun.

**Produit commun : le coussin de lecture [indice fort, ajout de la contre-vérification].**
- Soya vend un « Coussin ergonomique avec tête de lit » :
  - 42,90 €, sans prix barré, créé le 19/10/2025 à 07:45:56 ;
  - visuel « Conception orthopédique BREVETÉE » sans numéro de brevet ;
  - preuves : soya/products.json ; images `soya2/contre_sourcing/img_extra/tete_*.webp`.
- Somnila prévoit le **Lounge 01** :
  - devis 01 « Oreiller ergonomique pour téléphone au lit », 60 × 37 × 23 cm, 1,1 kg ;
  - coût 19,50 €, prix 54,90 € ;
  - preuve : build/PRODUCTS.csv, id_devis 01.
- Les deux montrent la même silhouette (`soya2/contre_sourcing/board_lecture.jpg`) : dièdre à dessus ondulé, petit coussin d'appui-tête, découpes concaves à l'avant pour les bras.
- Les photos fournisseur de Somnila portent du chinois (« 多功能趴睡枕 », « 不带小枕头 ») et les cotes 60 × 37 × 23 cm.
- Soya n'affiche pas de cotes pour ce coussin sur sa fiche.
- **Somnila vend donc probablement le même objet que Soya, 12 € plus cher.**

**Erreur dans les visuels Somnila [constaté, ajout de la contre-vérification].**
- Le fichier fournisseur `build/images/source/03-masque/masque_blanc_face_04.jpg` n'est pas un masque. C'est la photo réelle, pas un rendu, d'un **oreiller nuage bleu pâle**.
- Il a été classé comme masque blanc « propre » (build/images/manifest.csv l. 6).
- Il a servi à produire `build/images/shopify/somnila_mask-01_packshot-cloud-2_1x1_v1.jpg`, décrit « Somnila Mask 01 in Cloud, front view » (build/images/shopify.csv l. 31 ; build/images/kontext-batch.csv l. 32).
- Si ce fichier est en ligne, la fiche du Mask 01 montre un oreiller comme coloris du masque. Les produits sont en brouillon (`DRAFT`, build/PRODUCTS.csv), il est encore temps de corriger.
- Cette photo est aussi la seule photo réelle d'un oreiller « nuage » du lot fournisseur. Elle ressemble au rendu du Neck 01 et à l'oreiller enfant Soya [indice]. C'est une question à poser au fournisseur : de quel produit s'agit-il ?

**Recherche inversée.**
- TinEye (`https://tineye.com/api/v1/result_json/`) : `num_matches: 0` pour les 8 visuels Soya testés [constaté, `soya2/sourcing/web/tin_*.json` rouverts].
- **Nuance de la contre-vérification** : un résultat nul ne prouve pas que les visuels sont originaux (§ 2 bis).

### 2 bis. Deux visuels du coloris Gris reproduits par IA [constaté pour les noms, indice pour l'interprétation]

La galerie du 3.0 contient deux fichiers nommés `Firefly_Gemini_Flash_Generate_the_same_image_exactly_as_the_reference._Keep_all_text_icons_layout_compo_480153_3.png` et `…_5.png` (positions 28 et 32).
- Ils ont été créés le 28/02/2026 à 23:30 (+01:00), le jour de la création de la variante Gris (soya/products.json).
- Ce sont des versions grises de visuels existants (`soya2/contre_sourcing/firefly.jpg`) :
  - « Un équilibre parfait entre maintien et confort » ;
  - « 2 hauteurs 1 seul oreiller », avec les cotes 14,4 cm et 9 cm.
- Lecture [indice] : le coloris Gris a été illustré en demandant à une IA (Adobe Firefly, modèle Gemini Flash) de reproduire des visuels de référence, plutôt qu'en photographiant un oreiller gris.
- Une telle reproduction échappe aussi à la recherche d'image inversée.

### 3. D'où viennent les quatre produits

| Produit Soya | Ce que montrent ses images et ses textes | Type générique | Prix de gros relevés | Preuve |
|---|---|---|---|---|
| **Oreiller Soya 3.0** | papillon à cornes, point central, bourrelet nervuré, housse lisse unie, « fibre de bambou » ou « ions d'argent » | « Butterfly memory foam pillow » à cavité centrale | 6,90-10,20 $ et 7,90-9,90 $ (deux fiches du même compte Jintongyuan) ; 8,80-9,60 $ (Accio) | § 4 |
| **Oreiller Soya 2.0** | papillon classique, housse matelassée, flancs en maille ; **60 × 40 × 14 cm** selon Soya ; housse « 60 x 40 x 11/13 cm », « rayon et polyester » | papillon cervical classique (type Comfy Sleepers 62 × 37 × 8 / 12 cm, Zamat) | 3,50-17,14 $ selon la fiche ; médiane 7,30 $ (bas) et 9,90 $ (haut) | soya2/sourcing/sh_v2.jpg ; soya/web/p_oreiller-soya-2-0.html ; p_housse-d-oreiller-de-rechange-soya-1.html (rouverts) |
| **Oreiller Soya enfant** | nuage de 58 × 32 × 6 / 8 cm (cotes lues sur le visuel enf_01), housse « effet soie glacée, inspiré des matières ice silk », 3 coloris pastel | oreiller nuage à mémoire de forme | modèle exact non trouvé ; oreillers enfant en mousse de 4,90-6,50 $ à 8,00-10,50 $ | soya2/sourcing/img_soya/enf_01_KIDSP1_4.png ; soya/web/p_oreiller-soya-enfant.html ; mic_cards_out.txt |
| **Coussin « lombaire »** | coussin de genoux en cœur, **25 × 23 cm** (cotes lues sur le visuel lomb_01), avec sangle, puis visuels « 4 en 1 » | knee pillow à sangle | 28 prix de 1,90 à 12,49 $ ; médiane de 4,53 $ (bas) à 5,80 $ (haut) | soya2/sourcing/sh_lomb_h.jpg ; mic_knee_out.txt (recalculé) |
| **Housses de rechange** | housse 3.0 « 60 x 40 cm » ; mousse nue visible sur les visuels | housse de coussin à mémoire de forme | 2,00-3,50 $ (Singao-Tex, 60 × 35 × 11 cm) ; 1,99-2,68 $ | mic_cards_out.txt |

Observations :
- **Trois jeux de cotes pour la famille papillon** [constaté] : 62 × 37 cm pour le 3.0 (fiche), 60 × 40 cm pour sa housse, 60 × 40 × 14 cm pour le 2.0.
  - L'emprise de 62 × 37 cm est exactement celle du papillon Comfy Sleepers (`soya2/sourcing/img_mkt/comfy_3.img`, visuel « Product size » 62 × 37 × 8 / 12 cm) [constaté].
  - **Correction** : ce n'est pas celle du Soya 2.0 tel que Soya le décrit.
  - Les cotes du 3.0 ont peut-être été reprises d'une autre fiche plutôt que mesurées [indice].
- **Avis Loox « 3cm d'un côté et 5cm de l'autre »** au lieu de 6 et 8, mousse « très très fragile ». Il s'affiche sur toutes les fiches, car le widget Loox est en mode agrégé [constaté, soya/web/p_*.html]. Son contenu (« pas terrible pour un enfant ») le rattache à l'oreiller enfant [déduit].

### 4. Places de marché : ce qui a été ouvert, ce qui est resté fermé

| Source | Accès | Résultat (recontrôlé) | URL |
|---|---|---|---|
| Made-in-China, fiche « Unique Memory Foam Pillow Butterfly Shape » (sous-domaine tainengjikang) | ouverte | 9,90 $ (200-499), 8,90 $ (500-9 999), 7,90 $ (10 000+) ; échantillon 15 $ ; colis 18 × 18 × 36 cm, 1,45 kg ; HS 9404909000 ; délai d'un mois ; port de Yantian. **Vendeur affiché : Shenzhen Jintongyuan Technology Co., Ltd.** Le texte « À propos » parle de « Shenzhen Tainengjikang technology Co., Ltd., founded in 2019 ». FAQ : « Pillows: MOQ is 200pcs » et, plus haut, « Pillows: MOQ is 500 pieces » | https://tainengjikang.en.made-in-china.com/product/dOaGcWKTERMq/China-Unique-Memory-Foam-Pillow-Butterfly-Shape-for-Cervical.html |
| Made-in-China, fiche « Butterfly Memory Foam Pillow… Custom Logo » (sous-domaine memoryfoampillow) | ouverte | 10,20 $ (200-2 999), 9,60 $ (3 000-9 999), 6,90 $ (10 000+) ; colis 19 × 19 × 37 cm, 1,45 kg ; champ MOQ « 200PCS » mais FAQ « MOQ is 1000 pcs » ; capacité « 3000000/Month » dans le formulaire, « over 200000 pieces each month » dans le texte de présentation (120 salariés). Même vendeur, même adresse (Longgang, Shenzhen), audit TÜV Rheinland annoncé | https://memoryfoampillow.en.made-in-china.com/product/QtGrzXcCJeRW/China-Butterfly-Memory-Foam-Pillow-Soft-Antibacterial-Cervical-Pillow-with-Custom-Logo.html |
| Made-in-China, recherche « Butterfly Pillow » | ouverte | 27 fiches pertinentes sur 30 ; bas de fourchette de 3,50 à 17,14 $, médiane 7,30 $ (bas) et 9,90 $ (haut). **14 cartes sur 30 chez Jintongyuan**, dont 8 prix bas identiques à 7,30 $ : la médiane reflète surtout ce fournisseur | https://www.made-in-china.com/products-search/hot-china-products/Butterfly_Pillow.html |
| Made-in-China, prix des coussins de genoux | ouverte | 28 prix, 1,90-12,49 $ | https://www.made-in-china.com/price/memory-foam-knee-pillow-price.html |
| Made-in-China, housses et oreillers enfant | ouvertes | housses de 2,00 à 3,50 $ ; enfant : voir § 3 | …/hot-china-products/Memory_Foam_Pillow_Cover.html ; …/Kids_Memory_Foam_Pillow.html |
| Accio (Alibaba), deux pages « avis Soya » | WebFetch (rouvert) | Guangzhou Kingkady « Butterfly-Shaped Orthopedic Memory Foam Cervical Pillow » 8,80-9,50 $ (MOQ 300) ; « Butterfly Shape Pillows » 8,80-9,60 $ (MOQ 500) ; « JTY Back and Stomach Sleep Pillows » 7,90-9,80 $ (MOQ 500). **Les pages ne désignent aucun de ces produits comme celui de Soya** | https://www.accio.com/business/fr/soya-paris-oreiller-avis-top-ventes ; https://fr.accio.com/business/avis-oreiller-soya-top-ventes |
| Alibaba, fiche produit | fermée (page vide) | — | alibaba.com/product-detail/…1601682543310 |
| AliExpress | fermé (captcha « punish », boucle de redirections) | titre seulement [non vérifié] | https://www.aliexpress.us/item/3256808598874210.html |
| Temu | fermé (JavaScript) | titres seulement [non vérifié] ; avis client « Oreiller à 12€ sur Temu » [non vérifié] | https://www.temu.com/fr-en/1pc-memory-foam-pillows-butterfly-shaped-relaxing-cervical-slow-rebound-neck-pillow-sleeping-orthopedic-pillow-bedding-g-601099547811249.html |
| Amazon | fermé (202 vide ; squelette via WebFetch) | titres seulement, dont « ZGMCX Butterfly Cervical Memory Foam Pillow, Dual-Height Design (11cm/13cm) » [non vérifié] | https://www.amazon.com/ZGMCX-Butterfly-Dual-Height-Skin-Friendly-Breathable/dp/B0GQ6QJ8JH |
| DHgate, eBay.de | 403 | — | — |

- **Incoterm.** Les fiches Made-in-China donnent un prix « / Piece » sans incoterm. Le fournisseur accepte « FOB, EXW, CFR, CIF, DAT, FAS, DDP, DAP, CIP, CPT, FCA ». Parler de prix « FOB » est une hypothèse d'usage [constaté sur la fiche tainengjikang].
- **Délais.** Un mois de production (Made-in-China) ; 6 à 10 jours de livraison pour le fournisseur de Somnila (build/devis_fournisseur.txt).

### 5. Fiche technique comparée Soya / Somnila

| Caractéristique | Soya 3.0 | Neck 01 | Preuve |
|---|---|---|---|
| Forme | papillon à cornes, encoche centrale, point central, découpes latérales, bourrelet nervuré | nuage à lobes arrondis, bouton central, picots au bord avant (rendu) | § 2 |
| Dimensions | 62 × 37 cm (fiche) ; 60 × 40 cm (housse 3.0) | 62 × 42 cm ; housse de rechange 07 : 63 × 39 × 13 cm, poids noté « 1,3 (?) » kg | soya/web/pdp3_fulltext.txt l. 161 ; p_housse-d-oreiller-de-rechange-soya-3-0.html ; build/PRODUCTS.csv (id_devis 07 et 09) |
| Hauteurs | 14,4 / 9 cm (écart de 5,4 cm) ; usine candidate 11 / 9 cm | 13 / 11 cm (écart de 2 cm) | idem ; soya2/sourcing/img_mkt/mic_jty_2.webp |
| Poids | non publié ; `grams: 0` ; colis de l'usine candidate 1,45 kg brut | 1,4 kg | soya/products.json ; fiches Made-in-China ; PRODUCTS.csv |
| Mousse | « mousse intelligente », densité non publiée ; avis : « odeur forte de produits chimiques » | mousse à mémoire de forme, densité inconnue | pdp3_fulltext l. 158 ; tp/trustpilot_extraits |
| Housse | « fibre de bambou » ou « ions d'argent » ; housse 2.0 en rayonne et polyester | « technologie rafraîchissante » ; rechange : « gel rafraîchissant » | pdp3_fulltext l. 139 ; p_housse-d-oreiller-de-rechange-soya-1.html ; PRODUCTS.csv |
| Compression | « compressé pour l'expédition » | inconnue (le fournisseur expédie) | pdp3_fulltext l. 202, 291 |
| Délai annoncé | 1 à 2 j + 3 à 5 ou 3 à 6 j (trois versions) | 6 à 10 j | § 8 ; build/PRIX.md |
| Coût | 13 à 25 € (hypothèses) | 25,00 € (devis) | § 6 |
| Visuels | photos retouchées ; 2 visuels Gris reproduits par IA | 4 rendus 3D, aucune photo réelle identifiée avec certitude | § 2, § 2 bis |

**Recouvrement des deux catalogues [constaté pour les prix ; indice pour l'identité des produits]** :

| Somnila (build/PRODUCTS.csv) | Soya (soya/products.json, Kaching) | Écart de prix | Même objet ? |
|---|---|---|---|
| Neck 01, 69,90 € (coût 25 €) | Soya 3.0, 69,90 € sur la fiche | 0 | non, moules différents [déduit] |
| Contour 01, 59,90 € (coût 19 €) | Soya 2.0, 59,90 € sur la fiche, housse offerte dans les packs | 0 | non établi |
| Lounge 01, 54,90 € (coût 19,50 €) | Coussin ergonomique avec tête de lit, 42,90 € | Somnila 12 € plus cher | **probablement** (même silhouette) [indice fort] |
| Mask 01, 19,90 € (coût 6 €) | Masque de sommeil en soie, 29,90 € (barré 59,90) | Somnila 10 € moins cher | non établi (le masque Soya n'a pas été comparé en détail) |

### 6. Coût complet et marge par offre

**Hypothèses** (`soya2/sourcing/marge.py`, sorties dans `marge_out.txt` ; arithmétique recalculée à la contre-vérification, `soya2/contre_sourcing/compteurs_famille.py`) :

**Oreiller rendu client, housse d'origine comprise.**
- **Bas, 13 €** : achat en volume (6,90-7,30 $ = 5,95-6,30 € pièce), import groupé avec droit de 3,7 %, stock en France, dernier kilomètre sous contrat.
  - Le fret maritime et la préparation logistique ne sont pas chiffrés : c'est un plancher, pas un calcul.
  - Le tarif public Colissimo 2 kg de 11,19 € est un résultat de recherche [non vérifié].
- **Central, 19 €** : 8,80-10,20 $ (7,60-8,80 €) et envoi direct de Chine, 1,45 kg. Droit forfaitaire UE de 3 € compté à part.
  - **Contre-vérification** : avec l'express à 10-12 $/kg (tonlexing.com, WebFetch de l'enquêteur), le colis coûte 12,50 à 15 € et le total 20,10 à 23,80 € avant droit.
  - 19 € suppose une ligne e-commerce moins chère, dont le tarif n'a pas été relevé.
- **Haut, 25 €** : agent de dropshipping tout compris, comme le devis Somnila 09.

**Accessoires et droits.**
- **Housse** : 2,50 / 3,50 / 4 €. **Lombaire** : 4 / 5,50 / 8 €.
- **Droit forfaitaire UE** : 3 € par catégorie tarifaire d'articles et par colis de 150 € ou moins, du 01/07/2026 au 01/07/2028 (provisoire).
  - Il vise les vendeurs hors UE inscrits à l'IOSS.
  - Frais de gestion de 2 € par colis attendus en novembre 2026, non inclus.
  - La taxe française de 2 € (mars 2026) est suspendue au 01/07/2026.
  - Source : https://www.touteleurope.eu/economie-et-social/petits-colis-importes-hors-ue-ce-que-change-le-droit-de-douane-europeen-de-3-euros-sur-les-achats-de-moins-de-150-euros/, article du 30/06/2026 rouvert.
  - Le droit n'est compté que dans le scénario central. La housse est supposée relever d'une seconde catégorie (6302), un classement non vérifié.

**Paiement.**
- Bas : 1,5 % + 0,25 € (boutique française, cartes de l'Espace économique européen) [non vérifié].
- Central : 3,1 % + 0,29 €. C'est le tarif « International cards » du forfait Basic au Royaume-Uni, 3,1 % + 25p (https://www.shopify.com/uk/pricing, rouvert).
- Haut : 4,6 % + 0,29 € (avec 1,5 % de conversion supposée).
- Soya affiche Shop Pay avec `merchantCountryCode` GB [déduit, soya/pdp3.html].

**Autres postes.**
- **Retours** : 3 / 5 / 10 % du TTC. Appliquer ce taux au TTC surestime légèrement la perte quand la TVA est récupérée.
- **TVA** : 20 % reversée (référence) ; variante sans TVA reversée (indice `taxable: false`, dossier § 7.7).
- **CAC** : inconnu chez Soya. Tests à 15, 25 et 40 €.
- **Hors calcul** : abonnements d'applications, SMS, service client.

**Marge par offre, TVA reversée** (€ par commande ; recalcul identique à celui de l'enquêteur) :

| Offre | TTC | HT | Coût produit + droits (bas–haut) | Paiement (central) | Retours (central) | Marge avant pub : bas / **central** / haut | Après CAC 15 / 25 / 40 (central) | Point mort CAC |
|---|---|---|---|---|---|---|---|---|
| 1x sans housse | 69,90 | 58,25 | 13,00–25,00 | 2,46 | 3,50 | 41,85 / **30,30** / 22,75 | 15,30 / 5,30 / -9,70 | 22,8–41,9 |
| 1x + housse pré-cochée | 84,80 | 70,67 | 15,50–29,00 | 2,92 | 4,24 | 51,10 / **35,01** / 29,00 | 20,01 / 10,01 / -4,99 | 29,0–51,1 |
| Duo (2) sans housse | 98,90 | 82,42 | 26,00–50,00 | 3,36 | 4,95 | 51,72 / **33,12** / 17,69 | 18,12 / 8,12 / -6,88 | 17,7–51,7 |
| Duo + 2 housses | 128,70 | 107,25 | 31,00–58,00 | 4,28 | 6,43 | 70,21 / **45,54** / 30,17 | 30,54 / 20,54 / 5,54 | 30,2–70,2 |
| Famille (4) sans housse | 139,90 | 116,58 | 52,00–100,00 | 4,63 | 7,00 | 58,04 / **25,96** / -4,13 | 10,96 / 0,96 / -14,04 | < 0–58,0 |
| Famille + 4 housses | 169,70 | 141,42 | 62,00–116,00 | 5,55 | 8,48 | 71,53 / **31,38** / 0,35 | 16,38 / 6,38 / -8,62 | 0,4–71,5 |
| Housse en ajout (marginal) | 14,90 | 12,42 | 2,50–4,00 (+3 € de droit en central) | 0,46 | 0,75 | **4,71 à 9,25** | — | — |
| Popup lombaire (marginal) | 19,90 | 16,58 | 4,00–8,00 | 0,62 | 0,99 | 11,69 / **9,47** / 5,68 | — | — |
| 1x + housse + lombaire | 104,70 | 87,25 | 19,50–37,00 | 3,54 | 5,24 | 62,79 / **44,48** / 34,67 | 29,48 / 19,48 / 4,48 | 34,7–62,8 |

Précisions :
- **Housses de la Famille [constaté].** La configuration Kaching (soya/pdp3.html, `kaching-bundles-deal-block-settings`) comporte deux lignes « +2 Housses de Rechange », `quantity: 2`, `discountValue: 14.9`, `preselected: true`. Le panier Famille par défaut contient donc 4 housses pour 29,80 €, soit 7,45 € la housse. Le montant de 169,70 € est cohérent avec cette configuration ; il n'a pas été observé dans un panier réel.
- **Ligne « Housse en ajout ».** Elle est donnée en fourchette de 4,71 à 9,25 €. Le scénario « haut » de l'enquêteur (6,24 €) n'était pas le pire cas, car le droit de 3 € n'y était pas compté.
- **Sans TVA reversée**, la marge augmente du montant de la TVA : +11,65 € sur l'offre 1x (central 41,95 €), +16,48 € sur le Duo, +23,32 € sur la Famille.

Autres produits, TVA reversée, marge avant publicité (bas / central / haut) :
- 2.0 1x à 59,90 € : 35,97 / 24,77 / 17,88 € (coût 11-23 €) ;
- 2.0 Famille à 129,90 € : 58,15 / 26,44 / -3,01 € ;
- enfant à 49,90 € : 30,09 / 20,25 / 14,01 € ;
- lombaire seul à 49,90 € : 33,09 / 25,25 / 20,01 €.

**Lecture [déduit].**

1. **Le pack Famille ne dit pas combien Soya paie son oreiller (correction).** Coût maximal par oreiller pour que le pack Famille reste positif après un CAC de 25 € (frais centraux) :

   | TVA | Avec droit de 3 € | Sans droit |
   |---|---|---|
   | reversée | 19,24 € | 19,99 € |
   | non reversée | 25,07 € | 25,82 € |

   Source : `soya2/contre_sourcing/compteurs_famille_out.txt`.
   - Or le dossier relève l'indice `taxable: false`. Rien n'exclut donc un coût de 25 €.
   - Soya peut aussi accepter une perte sur un pack minoritaire.
   - Les indices d'envoi direct depuis la Chine (§ 8) placent Soya plutôt dans les scénarios central ou haut que dans le scénario bas, qui suppose un stock en France.
   - **Conclusion : coût inconnu dans la fourchette de 13 à 25 €.**
2. **L'argent se fait sur le Duo et les ajouts**, pas sur l'oreiller seul.
   - La housse cochée d'office apporte 4,71 à 9,25 € de marge pour 14,90 € de prix ; le popup lombaire, 5,68 à 11,69 € pour 19,90 €.
   - Ensemble, ils relèvent le point mort de l'offre 1x de 11,9 à 20,9 €.
3. **Illustration pondérée.** Mix d'offres hypothétique : 60 % 1x, 30 % Duo, 10 % Famille ; housse gardée dans 41 % ou 79 % des cas ; lombaire dans 14 % des cas. Résultats :
   - panier moyen TTC : 96,94 à 104,87 € ;
   - marge avant publicité : central 34,94 à 37,64 € ;
   - après un CAC de 25 € : 9,94 à 12,64 € en central.

   Ce mix n'est pas observé. Le taux « lombaire » est mesuré par oreiller et appliqué par commande, ce qui le sous-estime pour les commandes de plusieurs oreillers.

### 7. Ce que disent les compteurs sur les cases cochées

Relevés :
- `soya/web/p_*.html`, heure de modification 25/09/2026 22:12 UTC. Les compteurs du 3.0 y sont identiques à ceux de `soya/pdp3.html` à 21:31 UTC.
- `soya2/inv/snap-2026-09-26T094803Z.json` (09:48 UTC).
- `soya2/inv/snap-2026-09-26T114902Z.json` (11:49 UTC).
- Le relevé de 10:48 UTC est incomplet : la page du 3.0 a répondu 8 852 octets, sans compteurs.
- Calculs dans `soya2/contre_sourcing/compteurs_famille_out.txt`.

| Compteur `inventoryQuantity` | 25/09 22:12 | 26/09 09:48 | 26/09 11:49 | Unités (nuit / journée / total) |
|---|---|---|---|---|
| Soya 3.0 (Blanc / Bleu / Gris / Beige) | -3 888 / -1 999 / -2 431 / -1 401 | -3 928 / -2 006 / -2 442 / -1 418 | -3 968 / -2 021 / -2 457 / -1 433 | +75 / +85 / **+160** (Blanc 80, Bleu 22, Gris 26, Beige 32) |
| Housses 3.0 (Bleu / Blanc / Gris / Beige, ordre de products.json) | -1 312 / -741 / -1 135 / -760 | -1 329 / -752 / -1 153 / -773 | -1 356 / -756 / -1 167 / -784 | +59 / +56 / **+115** (Bleu 44, Blanc 15, Gris 32, Beige 24) |
| Coussin « lombaire » | -13 908 | -13 923 | -13 937 | +15 / +14 / **+29** |
| Soya 2.0 / housse 2.0 | -51 191 / -41 513 | -51 226 / -41 537 | -51 270 / -41 576 | +35, +44 / +24, +39 / **+79 / +63** |
| Oreiller enfant | inchangé | inchangé | inchangé | 0 |

**Ratios [indice : un compteur n'est pas une commande ; 13 h 37 d'observation].**
- **Housses 3.0 / oreillers 3.0 : 72 %** sur 13 h 37 (79 % la nuit, 66 % en journée), contre 41 % en cumul (3 948 / 9 719).
  - Chaque offre pré-coche une housse par oreiller [constaté, Kaching : 1x, 1 ligne × 1 ; Duo, 2 lignes × 1 ; Famille, 2 lignes × 2].
  - Mais le compteur des housses baisse aussi avec les housses vendues seules (17,90 €, fiche et vente croisée).
  - 72 % est donc un **plafond** de la part d'oreillers vendus avec leur housse, pas une mesure.
  - L'écart avec le cumul ne s'interprète pas : les réglages Kaching antérieurs ne sont pas connus, et une version plus ancienne semble avoir offert les housses (dossier § 6.5).
- **Les housses ne suivent pas la couleur des oreillers.**
  - Sur 13 h 37 : 80 oreillers Blanc pour 15 housses Blanc ; 22 oreillers Bleu pour 44 housses Bleu.
  - En cumul : Blanc 40 % des oreillers mais 19 % des housses ; Bleu 21 % des oreillers mais 33 % des housses.
  - La ligne d'ajout Kaching a `variantGIDs: null` et `defaultVariantGID: null` ; la première variante de la housse est Bleu.
  - **Indice** que la housse pré-cochée est Bleu par défaut, quelle que soit la couleur de l'oreiller. Une partie des clientes d'un oreiller blanc recevrait alors une housse bleue sans l'avoir choisie. C'est un point à vérifier par un parcours d'achat réel, hors de portée ici.
- **Lombaire / papillons (3.0 + 2.0) : 12 %** (29 / 239). C'est aussi un plafond : ventes seules à 49,90 €, popup Klaviyo.
- **Housses 2.0 / 2.0 : 80 %** (63 / 79), mais elles y sont offertes.

### 8. Indices d'expédition depuis l'Asie

| # | Indice | Détail | Source | Nature |
|---|---|---|---|---|
| 1 | Mots masqués sur la page de suivi | `"sensitive_world":"China,Aliexpress,Chinese cities"`. La documentation ParcelPanel décrit un « Dropshipping mode » à activer par le marchand (« One-click hide Chinese origins ») ; elle ne dit pas si cette liste de mots est une valeur par défaut | mkt/pp.html (rouvert) ; https://docs.parcelpanel.com/shopify/getting-started/dropshipping/ (rouvert) | [constaté] ; activation volontaire : [indice] |
| 2 | Transporteur caché | `display_option.carrier: false` | mkt/pp.html | [constaté] ; indice faible |
| 3 | Emballage | « Oreiller made in china (probablement du dropshipping, le packaging indique la provenance de Chine) » (Ludovic Baron, 1★) | https://fr.trustpilot.com/review/soya-paris.com?stars=1 (WebFetch rouvert le 26/09, citation retrouvée) | [constaté via WebFetch] ; affirmation de client |
| 4 | Colis venu de Chine | « Commender le 18 aout resu le 10 septembre presque 1 mois d'attente arriver de chine » (3★, 11/09/2026). « colis est bloqué en Chine » (1★, 14/09/2026) : non retrouvé à la relecture de la page 1 | ?stars=3 (rouvert) ; tp/trustpilot_extraits_2026-09-26.txt | [constaté via WebFetch] / [non revérifié] |
| 5 | Étiquetage | « il n'y a aucune étiquette de "made in" » (3★, 10/09/2026) | ?stars=3 (rouvert) | [constaté via WebFetch] |
| 6 | Prix de revente | « Dropshipping. Oreiller à 12€ sur Temu » (1★, 15/09/2026) : non retrouvé à la relecture de la page 1 ; Temu fermé aux robots | tp/trustpilot_extraits | [non vérifié] |
| 7 | Suivi tardif | « numéro colissimo non pris en charge », « plus de 3 semaines après paiement » (2★) | tp/trustpilot_extraits | [indice] : schéma courant des lignes Chine-France |
| 8 | Délais réels | 5 j ouvrés ; 8 j ; 8 j ouvrés ; 10 j (deux avis) ; 12 j ; 13 j ; 15 j ; environ 23 j ; plus de 3 semaines ; 1 mois sans nouvelles. **Médiane d'environ 12 jours** (échantillon surtout négatif). Annoncé : « 1 à 2 jours + 3 à 5 jours » (accordéon), « 1 à 2 jours ouvrés + 3 à 6 jours » (FAQ), « 1 jour ouvré + 3 à 6 jours ouvrés » (politique) | tp/ ; soya/pol/shipping-policy.txt ; pdp3_fulltext l. 193-199, 293 (rouverts) | [constaté] |
| 9 | Rupture de production | « La livraison a tardée par manque de production suffisante » (3★, 15/09/2026) | ?stars=3 (rouvert) | [indice] |
| 10 | Conditionnement | « compressé pour l'expédition » ; « il était si compact que je pensais m'être fait avoir » (5★) ; colis de l'usine candidate : rouleau de 18 × 18 × 36-38 cm, 1,45 kg | pdp3_fulltext l. 202, 291 ; ?stars=3 ; fiches Made-in-China | [constaté] ; compatible avec l'envoi direct, sans le prouver |
| 11 | Retours | « nous vous fournirons l'adresse de retour » sur demande ; un avis parle d'« une adresse d'un entrepôt à Paris » | soya/pol/refund-policy.txt (rouvert) ; tp/ | [constaté] |
| 12 | « Merci de ne pas retourner votre produit directement au fabricant » | phrase du modèle de politique de Shopify | soya/pol/refund-policy.txt | [déduit] : **pas** un indice |

**Conclusion [indice].**
- Une partie au moins des commandes semble partir de Chine, par une ligne qui confie le dernier kilomètre à La Poste (Colissimo) ; un avis cite aussi Chronopost.
- La plateforme de retours pourrait être en France.
- Rien ne permet de chiffrer la part d'envois directs.
- Ce constat pèse contre le scénario de coût « bas » du § 6.

### 9. Leçons pour Somnila

1. **Distinguer les marchés avant de refaire la grille (correction).**
   - Le marché principal prévu pour Somnila est les États-Unis (build/HANDOFF.md l. 51 ; build/PHASE0.md § 2, adresse de facturation à Albuquerque). Les prix y sont fixés en dollars, hors taxe de vente (79,99 $ pour le Neck 01, build/PRODUCTS.csv).
   - **Pour l'Europe :** build/PRIX.md et ANALYSE_PRIX.md ne mentionnent jamais la TVA [constaté]. Les 14,08 € « après CAC » du Neck 01 sont calculés sur 69,90 € TTC.
     - À 20 % de TVA, il reste 27,43 € avant publicité et 2,43 € après un CAC de 25 €.
     - Le point mort tombe de 39,08 à 27,43 € de CAC [déduit, recalculé].
     - La « franchise en base » n'existe que pour une entreprise établie en France. Pour des colis expédiés de Chine à des particuliers européens, la TVA est due soit par l'IOSS, soit à l'import [déduit, à faire confirmer par un expert-comptable].
   - **Pour les États-Unis :**
     - L'exemption *de minimis* de 800 $ est suspendue pour tous les pays depuis le 29/08/2025.
     - Elle a été prolongée par l'Executive Order 14388 du 20/02/2026 (https://www.whitehouse.gov/presidential-actions/2026/02/continuing-the-suspension-of-duty-free-de-minimis-treatment-for-all-countries/, rouvert) : un droit *ad valorem* s'applique à chaque envoi postal.
     - Deux règles de la CBP, publiées au Federal Register le 24/06/2026 (2026-12669 et 2026-12670), l'étendent à tous les modes d'envoi [titres de résultats, non ouverts].
     - Le taux applicable aux oreillers chinois n'a pas été vérifié.
   - La politique de livraison de Somnila promet : « If your local carrier asks for a payment on delivery, write to us with the receipt and we will sort it out » (build/SOMNILA_DOSSIER_COMPLET.md l. 3202). **Somnila porte donc ce coût, que le devis à 25 € « tout compris » ne mentionne pas.**
2. **Demander au fournisseur, par écrit :**
   - les droits et la TVA à l'import sont-ils inclus dans les 25 €, pour les États-Unis et pour l'Union européenne ?
   - quelle valeur déclarée figure sur le colis ?
   - le pack oreiller + housse est-il déclaré en une ou deux catégories (3 ou 6 € de droit européen) ?
3. **Commander un échantillon avant la publicité.**
   - Le Neck 01 n'existe qu'en rendus 3D, dont deux portent des caractères chinois.
   - Le devis signale lui-même une incertitude : « Derila et Cloudii : modèles visuellement très proches, mais dimensions, poids et prix différents - à confirmer avec le fournisseur » (build/devis_fournisseur.txt l. 183).
   - La housse de rechange 07 (63 × 39 cm, « 1,3 (?) » kg) ne colle pas à l'oreiller (62 × 42 cm).
   - Demander aussi au fournisseur ce que montre la photo `03-masque/masque_blanc_face_04.jpg` (un oreiller nuage).
4. **Corriger le packshot « Mask 01 Cloud »** (`somnila_mask-01_packshot-cloud-2_1x1_v1.jpg`), qui montre un oreiller, avant toute mise en ligne [constaté].
5. **Revoir le prix du Lounge 01.** Soya vend ce qui semble être le même coussin 42,90 € ; Somnila le prévoit à 54,90 €.
   - Il n'est pas poussé en publicité (« catalogue, jamais en pub »).
   - Une cliente qui compare verra l'écart. Somnila doit le justifier par des cotes et une composition publiées, ou revoir le prix.
6. **Ne pas combattre Soya sur le prix de revient.** Soya paie probablement entre 13 et 25 € ; rien ne dit qu'il paie moins que Somnila. Somnila se différencie par :
   - des cotes exactes ;
   - un délai réel annoncé ;
   - un transporteur nommé ;
   - des remboursements rapides ;
   - aucune case cochée d'office, et une housse de la couleur de l'oreiller.
7. **Récupérer honnêtement ce que la case cochée rapporte à Soya :** mettre en avant le pack oreiller + housse à 76,90 € et proposer la housse décochée dans le tiroir panier.
8. **Ne jamais invoquer l'origine** (« made in China », dropshipping) contre Soya : Somnila est dans la même situation, et ses propres visuels fournisseur portent du chinois.
9. **Délais.**
   - Les 6 à 10 jours annoncés par Somnila sont **plus courts** que la médiane réelle observée chez Soya (environ 12 jours).
   - Pour un envoi direct de Chine vers les États-Unis, c'est une promesse ambitieuse.
   - Mieux vaut afficher un délai que le fournisseur peut tenir que reproduire l'écart reproché à Soya.

### 10. Limites, et ce qu'une session locale ajouterait

**Limites.**
- Fournisseur exact de Soya inconnu.
- Un seul fournisseur candidat identifié.
- Mix réel des offres, taux de retour et CAC de Soya non observables.
- Compteurs sur 13 h 37 seulement, un relevé intermédiaire incomplet.
- Citations Trustpilot extraites par un modèle (WebFetch). Deux d'entre elles (« bloqué en Chine », « 12€ sur Temu ») n'ont pas été retrouvées à la relecture de la page 1.
- Pas de parcours d'achat pour confirmer le coloris de housse par défaut (interdit par les règles de l'enquête).

**Session locale.** Même modèle, même méthode : l'écart ne tient pas à l'intelligence mais à l'accès. Depuis un navigateur sur une connexion française, une session locale pourrait :
- lire les prix de détail et les délais sur AliExpress, Temu et Amazon, fermés ici ;
- lancer une recherche Google Lens sur les packshots Soya : 3.0, enfant, lombaire, coussin tête de lit ;
- afficher la fiche Soya en navigateur réel pour voir le coloris de housse présélectionné, sans rien acheter.

Le reste de ce chapitre n'a pas besoin d'être refait : empreintes, silhouettes, prix de gros Made-in-China, modèle de coût, compteurs, indices d'expédition. Le seul moyen de trancher le fournisseur, commander le produit, reste exclu par les règles de l'enquête.

### Annexe — verdicts de la contre-vérification

| Constat | Verdict | Motif |
|---|---|---|
| S1 Photos communes | confirmé | recalculé : 21 624 paires, minimum 14 bits ; tient en miroir et en recadrage (minimum 12 bits) et avec 16 images Soya ajoutées (minimum 10 bits, faux positifs) |
| S2 Même moule | confirmé | planches rouvertes ; nuance : le Neck 01 est plus proche de l'oreiller enfant Soya |
| S3 Origine du 3.0 | corrigé | un seul compte fournisseur ; MOQ de 200 à 1 000 pièces ; capacité contradictoire ; hauteurs 11 / 9 contre 14,4 / 9 cm ; incoterm non précisé |
| S4 Prix de gros | corrigé | chiffres exacts, mais 14 cartes sur 30 (et non 13) chez Jintongyuan : la médiane reflète ce fournisseur ; devis Somnila de 25 € = 2,9 à 4 fois le prix usine, et il inclut le transport |
| S5 Coût rendu | corrigé | l'argument du pack Famille ne vaut qu'avec TVA reversée (19-20 €) ; sans TVA reversée, 25-26 € ; le scénario bas contredit les indices d'envoi direct ; le central est sous ses propres données |
| S6 Marges | corrigé (mineur) | arithmétique exacte ; ligne housse non monotone (4,71 à 9,25 €) ; housses de la Famille confirmées dans Kaching |
| S7 Compteurs | corrigé | 72 % sur 3 relevés, plafond et non mesure ; housse Bleu surreprésentée |
| S8 Expédition Chine | confirmé | ParcelPanel et 4 citations retrouvées ; 2 citations non retrouvées |
| S9 Délais | confirmé | textes rouverts ; leçon corrigée : Somnila annonce plus court que le réel de Soya |
| S10 Grille sans TVA | confirmé | calculs refaits ; leçon corrigée (marché américain, entité) |
| S11 Droit de 3 € | confirmé | article rouvert ; provisoire jusqu'au 01/07/2028 ; ne concerne que l'UE |
| S12 Rendus 3D | confirmé | caractères vus ; ajout : poids « 1,3 (?) » kg de la housse 07 et photo nuage mal classée |
| S13 Produits génériques | corrigé | les 62 × 37 cm ne sont pas les cotes du 2.0 selon Soya (60 × 40 × 14) ; lombaire de 25 × 23 cm confirmé |
| S14 TinEye | corrigé (mineur) | 0 correspondance confirmée, mais 2 fichiers Firefly reproduisent une référence : zéro ne prouve pas l'originalité |
| S15 Frais de paiement | confirmé pour Soya | leçon à nuancer : la boutique Somnila facture depuis Albuquerque |
| S16 Famille au-delà de 150 € | non étayé | 169,70 € cohérent avec Kaching, droit de 3,7 % non vérifié |
