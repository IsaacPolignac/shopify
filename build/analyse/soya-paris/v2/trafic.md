## Combien vend SOYA PARIS, et d'où vient son trafic (enquête du 26/09/2026, contre-vérifiée)

*Conventions du dossier : [constaté], [déduit], [indice], [risque], [non vérifié]. Heures en UTC sauf mention (Paris = UTC+2). Chemins de preuve :*
- *`v2/` = `/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/soya2/ventes/` (enquête ; index : `v2/INDEX.txt`) ;*
- *`inv/` = `…/scratchpad/soya2/inv/` (relevés horaires) ; `soya/` = `…/scratchpad/soya/` (première enquête) ;*
- *`ct/` = `…/scratchpad/soya2/contre_trafic/` (contre-enquête) : `extract.py` et `extract_out.json` (compteurs relus dans les 45 captures avec un parseur indépendant), `recalc.py` → `recalc_out.txt` (calculs refaits), `loox_minuit.txt`, `relectures_webfetch_2026-09-26.md`.*

*Contre-vérification du 26/09/2026, de 12:00 à 12:40 UTC. Les compteurs ont été réextraits des captures, les calculs refaits, SimilarWeb et Trustpilot rouverts. Chaque correction est signalée par « (corrigé) ».*

### 1. Réponse courte

| Question | Réponse | Nature |
|---|---|---|
| Oreillers 3.0 vendus par jour | Au moins 240 par jour en moyenne du 03/08 au 26/09/2026 (13 027 unités nettes en 54,3 jours). 164 par jour du 03 au 24/08 ; 461 par jour du 07 au 26/09 | constaté (compteurs) ; déduit (lecture en ventes) |
| Oreillers 2.0 vendus par jour | 162 par jour du 20/04 au 26/09/2026 ; pic à 254 par jour du 27/12/2025 au 17/02/2026 | idem |
| Unités ou clients ? (corrigé) | Le pack Famille du 3.0 (4 oreillers à 139,90 €) apparaît entre le 30/06 et le 03/08/2026. Celui du 2.0 passe de 3 à 4 oreillers. Une partie de la hausse d'août-septembre vient donc de paniers plus gros, pas de clients plus nombreux | constaté (configuration Kaching) |
| Commandes par jour (corrigé) | 145 à 260 (moyenne sur 8 semaines) ; 220 à 400 du 07 au 26/09 | déduit |
| CA TTC récent | 19,5 à 26 k€ par jour, soit 0,59 à 0,79 M€ par mois (8 semaines) ; 0,42 à 0,63 M€ HT par mois nets de remboursements ; rythme de septembre : 0,9 à 1,25 M€ par mois | déduit, fourchette |
| CA sur un an (corrigé) | Au moins 4,0 M€ TTC sur les 342 jours de la boutique actuelle (4,0 à 5,0 M€), soit au moins 4,3 M€ ramené à 365 jours. Les 7 à 9,5 M€ correspondent au rythme d'août-septembre annualisé, pas à un chiffre d'affaires annuel | déduit, borne basse |
| « -51 226 sur le 2.0 : depuis quand ? » (corrigé) | Depuis la création de la variante dans la boutique actuelle, le 19/10/2025 (-415 le 28/10) : 150 unités par jour en moyenne sur 342 jours. Avant, le domaine était servi par une autre boutique Shopify, dont le compteur a une provenance inconnue | constaté |
| Trafic (corrigé) | SimilarWeb : environ 345,6 k visites en août 2026 seul (+110 % sur juillet, environ 164,6 k). « Paid Social » est le 1er canal des visites sur ordinateur (36,12 %). Conversion implicite de 1,1 à 1,8 % : les chiffres sont cohérents avec les compteurs | non vérifié + déduit |
| Référencement naturel | Absent des 19 requêtes génériques testées. Semrush : 7 mots-clés, 15 visites organiques par mois | constaté (WebSearch) + non vérifié |
| Payant contre organique (corrigé) | La publicité et les relances dominent. L'organique hors marque est quasi nul. Aucune source ne permet d'en donner un pourcentage | déduit |

### 2. Les compteurs : ce qu'ils mesurent

**Mécanisme [constaté].**
- Chaque fiche embarque un champ `inventoryQuantity` par variante, dans la configuration Kaching et dans le JSON du thème.
- Les offres Kaching sont des « quantity-break » : 1x = 1 unité, Duo = 2, « 3x Oreillers +1 Offert » = 4 (`v2/kaching_pdp3.json`). Un Duo fait donc baisser le compteur de 2, une Famille de 4.
- Sur le 2.0, les housses offertes sont de vraies lignes de commande : `freeGifts`, 2 pour le Duo, 4 pour la Famille (`soya/web/p_oreiller-soya-2-0.html`). Le 20/04/2026, c'étaient encore 3 housses pour un pack de 3 oreillers (`v2/wayback/p20_20260420.html`).
- Sur le 3.0, chaque offre pré-coche une housse par oreiller : 1 pour le 1x, 2 pour le Duo, 4 pour la Famille (`v2/kaching_pdp3.json`, `upsells[].preselected: true`).

**Attribution des variantes (chaque unité comptée une seule fois) [constaté, identifiants vérifiés sur les fiches propres des housses : `v2/wayback/h30_20260824.html`].**

| Page lue | Variantes | Produit |
|---|---|---|
| `/products/oreiller-soya-3-0` | 53641646866764 Blanc, 53642060005708 Bleu, 56869335826764 Gris, 53641646932300 Beige | Oreiller 3.0 |
| même page, 4 variantes suivantes | 53641574416716 Bleu, 53641574449484 Blanc, 56869321277772 Gris, 53641574482252 Beige | Housse 3.0 |
| `/products/oreiller-soya-2-0` | 53641794158924 ; 53641388360012 | Oreiller 2.0 ; housse 2.0 |
| `/products/oreiller-soya-enfant` | 3 + 3 variantes | Oreiller enfant ; housse enfant |
| autres fiches | toutes les variantes | produit de la fiche |

**Deux boutiques successives (corrigé, ajout) [constaté].**
- Jusqu'au 12/10/2025 au moins, soya-paris.com est servi par la boutique 68045897928 (`vxg4tp-y8.myshopify.com`, pays déclaré US).
- Le 28/10/2025 à 06:36 UTC au plus tard, il est servi par la boutique actuelle 93550543180 (`5xfyfp-ti`, pays GB).
- Preuves : `initData.shop` dans `v2/wayback/h30_20251012.html` et `p30_20251028.html`.
- Le catalogue ayant été recréé le 19/10/2025, les compteurs sont **repartis de zéro**. Les captures d'avril à août 2025 (variante 44394185326792) viennent de l'ancienne boutique.
- Précision pour le chapitre réseau (§ 15.4) : la bascule a eu lieu au plus tard le 28/10/2025, et non le 31/10.

**Précautions.**
- **Horodatage.** Le suffixe du `reqid` Shopify donne l'heure du rendu, donc celle du compteur [constaté : 21:31:55 pour `soya/pdp3.html`, 22:12:19 pour `soya/web/p_oreiller-soya-3-0.html`]. Dans la Wayback Machine, ce rendu peut précéder l'archivage de plusieurs heures : la capture du 03/08 est rendue à 05:03:27 et archivée à 09:45:46 (`v2/wayback/cdx_oreiller-soya-3-0.txt`). Seul le `reqid` date correctement le compteur, et c'est lui qui a été retenu.
- **Mises à jour par à-coups (corrigé).** Le 26/09, le 3.0 prend +71 unités entre 09:48 et 10:31. Il reste ensuite à 0 pendant 44 minutes (12:31-13:15 à Paris, un samedi), puis prend +14 jusqu'à 11:49 [constaté : `v2/samples.jsonl`, `inv/snap-*.json`]. Les pages étaient bien recalculées à chaque lecture : `server-timing` indique un traitement de 481 puis 234 ms, et les `etag` diffèrent (`v2/h_p3_1.txt`, `v2/h_p3_2.txt`).
  - À 6 à 17 commandes par heure en moyenne, 44 minutes sans aucune commande est très improbable (probabilité de l'ordre de 1 % au plus).
  - Deux rendus simultanés ne lisent pas les mêmes données. À 10:48, la housse 2.0 vaut -41 569 sur la fiche 2.0, mais -41 565 sur sa propre fiche (`inv/snap-2026-09-26T104854Z.json`). Elle oscille aussi d'une lecture à l'autre (-41 569, -41 565, -41 569, -41 565).
  - Causes possibles : traitement différé chez Soya, application tierce, ou cache de données côté Shopify [non vérifié].
  - **Conséquence** : aucune courbe horaire fiable. Seules des fenêtres de 24 heures ou plus sont utilisables.
- **Incohérence d'octobre-décembre 2025 (ajout) [constaté].** Du 28/10 au 26/12/2025, la housse 2.0 baisse de 2 161 unités, contre 1 367 pour l'oreiller 2.0 (`ct/recalc_out.txt`). Or cette housse n'est offerte que dans les packs du 2.0. Deux explications possibles : une remontée du compteur 2.0 invisible entre deux captures, ou des housses sorties par un autre canal (ventes seules, offre de lancement du 3.0). Les fenêtres Wayback donnent donc des ordres de grandeur, pas des comptes exacts.
- **Réassorts.** Le 3.0 était en stock suivi, sans vente à découvert (politique `deny`), jusqu'au 30/06/2026. Des réassorts de plusieurs milliers d'unités ont eu lieu. Toute fenêtre où un compteur remonte donne une **borne basse**.
- **Suivi de stock désactivé, compteurs actifs [constaté].** `inventoryManagement` vaut `"shopify"` sur le 3.0 le 07/09, puis `null` les 25 et 26/09 (`v2/p3_1.html`, `soya/pdp3.html`). Les compteurs continuent pourtant de baisser. La housse 2.0 a toujours été `null` et `deny`, et elle est à -41 576.
- **Périmètre.** Les compteurs couvrent toutes les commandes de la boutique actuelle : 26 marchés, us.soya-paris.com compris, plus d'éventuels canaux connectés. Ils sont nets des seules annulations remises en stock. Les réexpéditions gratuites les font aussi baisser, ce qui surestime un peu les ventes payées.

### 3. La journée mesurée (25/09 21:31 → 26/09 11:49 UTC)

| Fenêtre (UTC) | Heure de Paris | Oreiller 3.0 | Housses 3.0 | Oreiller 2.0 | Housse 2.0 | Lombaire |
|---|---|---|---|---|---|---|
| 21:31 → 22:12 | 23:31 → 00:12 | 0 | 0 | — | — | — |
| 22:12 → 09:48 | 00:12 → 11:48 | 75 (Blanc 40, Bleu 7, Gris 11, Beige 17) | 59 | 35 | 24 | 15 |
| 09:48 → 10:31 | 11:48 → 12:31 | 71 | 51 | 35 | 32 | 14 (jusqu'à 11:49) |
| 10:31 → 11:15 | 12:31 → 13:15 | 0 | 0 | 0 | ±4 | — |
| 11:15 → 11:49 | 13:15 → 13:49 | 14 | 5 | 9 | 11 | — |
| **Total** | 23:31 → 13:49 | **160** | **115** | **79** | **63** | **29** |

- Chiffres vérifiés sur `inv/snap-2026-09-26T094803Z.json` et `T114902Z.json` : 3.0 de -9 719 à -9 879 ; 2.0 de -51 191 à -51 270 [constaté].
- Autres produits sur la même fenêtre : housse d'oreiller en soie 7, oreiller 1.0 2, coussin de siège 1, oreiller de voyage 1. Rien pour les autres fiches [constaté : `v2/deltas_26-09.txt`].
- Valeur de la fenêtre : 11,7 à 15,6 k€ TTC [déduit : `v2/ca_modele.py`].
- **Nuit contre jour (corrigé).** Le premier dossier retenait 75 oreillers pour la nuit. Mais le saut de 71 unités en 43 minutes, après 11,6 heures à 75, laisse penser que la valeur lue à 09:48 était en retard. La plage 00:12-11:48 à Paris porte donc entre 75 et 146 oreillers 3.0 [déduit]. La part de la nuit dans les ventes reste inconnue.

### 4. L'historique retrouvé (Wayback Machine, 45 captures)

Les captures brutes des fiches (avril 2025 → 7 septembre 2026) contiennent les mêmes compteurs. La contre-enquête les a relus avec un parseur indépendant et retrouve les mêmes valeurs [constaté : `v2/wayback/*.html`, `ct/extract_out.json`]. Huit captures sont en USD : leurs prix sont ignorés, leurs compteurs gardés.

| Produit | Fenêtre | Jours | Unités parties | Par jour | Remarque |
|---|---|---|---|---|---|
| 2.0 | 28/10/2025 → 26/12/2025 | 59,5 | 1 367 | 23 | Lancement du 3.0 ; la housse 2.0 baisse davantage (2 161) : incohérence (§ 2) |
| 2.0 | 27/12/2025 → 17/02/2026 | 51,7 | 13 111 | **254** | soldes d'hiver |
| 2.0 | 17/02 → 23/03/2026 | 33,5 | 6 620 | 197 | |
| 2.0 | 23/03 → 20/04/2026 | 28,4 | 3 747 | 132 | |
| 2.0 | 20/04 → 26/09/2026 | 158,8 | 25 778 | **162** | Famille : de 3 à 4 oreillers en cours de période |
| Housse 2.0 | 07/09 → 26/09/2026 | 18,6 | 2 575 | 138 | offerte dans les packs |
| 3.0 (3 coloris) | 27/01 → 19/02/2026 | 22,9 | ≥ 5 392 | ≥ 235 | Bleu en rupture dès le 14/02 |
| 3.0 | 20/04 → 30/06/2026 | 70,6 | ≥ 5 184 | ≥ 73 | réassort Gris ; pas de pack Famille |
| 3.0 | 30/06 → 03/08/2026 | 33,9 | ≥ 4 093 | ≥ 121 | réassort Bleu ; pack Famille apparu dans l'intervalle |
| 3.0 | 03/08 → 24/08/2026 | 21,2 | 3 477 | **164** | aucune hausse de compteur : fenêtre propre |
| 3.0 | 07/09 → 26/09/2026 | 18,6 | 8 595 | **461** | French Days officiels (7-14/09) inclus |
| 3.0 | 03/08 → 26/09/2026 | 54,3 | ≥ 13 027 net | **≥ 240** | 249 par jour en ajoutant les réassorts visibles (Blanc +445, Bleu +40) |
| Housses 3.0 | 07/09 → 26/09/2026 | 18,6 | 6 037 | 324 | 70 % des oreillers ; avant, fenêtres faussées par des réassorts (Bleu +1 569 entre le 24/08 et le 07/09) |
| Lombaire | 29/12/2025 → 15/02/2026 | 48,5 | 2 902 | 60 | |
| Lombaire | 06/06 → 07/09/2026 | 92,9 | 5 027 | 54 | |
| Lombaire | 07/09 → 26/09/2026 | 18,6 | 1 252 | 67 | |

**Depuis quand le -51 226 du 2.0 ? (corrigé)**
- La variante 53641794158924 est créée le 19/10/2025 à 10:10 (heure de Paris) dans la boutique actuelle (`soya/products.json`). Elle affiche -415 le 28/10/2025 [constaté]. Le compteur n'a pas été reporté : il cumule 342 jours de ventes, soit 150 par jour en moyenne.
- L'ancienne variante 44394185326792 appartient à l'**autre boutique** (68045897928). Sa fiche y a été créée le 24/01/2025 à 21:05 (`created_at` dans `v2/wayback/p20_20250419.html`), et non « fin 2024 » comme l'écrivait l'enquête.
- Ce compteur passe de -15 293 le 19/04/2025 à -16 676 le 20/05/2025, soit 44 par jour. Il est ensuite remis en stock positif : +151 le 15/08, 0 le 26/08, +269 le 31/08.
- Pour atteindre -15 293 depuis zéro en 84 jours, il aurait fallu vendre au moins 181 oreillers par jour, quatre fois le rythme mesuré juste après. Ce compteur a pu être importé d'une boutique antérieure (le domaine en a connu plusieurs, voir chapitre réseau).
- Le total « près de 68 000 oreillers 2.0 depuis le lancement » **n'est donc pas établi** [non vérifié]. Seuls les 51 270 de la boutique actuelle sont une mesure.

**Trois constats sur les prix [constaté].**
- **Prix de référence gonflé (corrigé).**
  - Le 19/04 et le 20/05/2025 (ancienne boutique), le 2.0 est vendu **49,90 €**, déjà présenté contre un prix barré de 104,90 € (`"price":4990`, `"compare_at_price":10490`). L'offre 1x Kaching est au prix normal (`default` 49,9). Le Duo est à -15 % et le « 3 + 1 offert » à -35 % (`v2/wayback/p20_20250419.html`, `p20_20250520.html`).
  - Dès le 15/08/2025, le prix catalogue passe à 109,90 € sans prix barré, puis à 119,90 € (26/12/2025). L'offre 1x est à 59,90 € (`specific`) et se présente comme une remise.
  - Le prix payé au printemps 2025 (49,90 €) était donc **inférieur** au prix « remisé » affiché depuis août (59,90 €). Le prix de référence affiché est passé de 104,90 à 109,90 puis 119,90 €.
  - Aucune capture n'existe entre le 20/05 et le 15/08/2025 : on ne sait pas quel prix a été pratiqué dans les 30 jours précédant le 15/08.
  - Pour le 3.0, 69,90 € est le seul prix observé pour l'offre 1x depuis le lancement : 13 captures du 28/10/2025 au 07/09/2026, plus les relevés du 25/09. Le prix de référence est passé de 119,90 € (28/10/2025) à 139,90 € (08/01/2026). La remise affichée est ainsi passée de -42 % à -50 % sans que le prix payé change.
  - **[Risque]** au regard de l'article L112-1-1 ; la qualification relève de la DGCCRF ou d'un juge.
- **Urgence permanente.** Les mêmes prix du 2.0 (59,90 / 89,90 / 127,90 €) apparaissent successivement sous les titres suivants :
  - « SOLDES D'ÉTÉ | FIN AUJOURD'HUI À 00H » (15/08/2025) ;
  - « DESTOCKAGE TOTAL | FIN AUJOURD'HUI À 00H » (28/10/2025) ;
  - « OFFRE SPÉCIALE DE NOËL » (26/12/2025) ;
  - « OFFRE SAINT-VALENTIN | FIN À MINUIT » (17/02/2026) ;
  - « FRENCH DAYS | JUSQU'À -60% » (20/04/2026).

  Pour le 3.0, toujours à 69,90 € : « OFFRE DE LANCEMENT I FIN AUJOURD'HUI à 00H » (28/10/2025), « OFFRE EXCLUSIVE | FIN À MINUIT » (24/02/2026), puis « SOLDES D'ÉTÉ | JUSQU'À -60% » (30/06, 03/08 et 24/08/2026). Le 07/09/2026, premier jour des French Days officiels, le bloc affiche « OFFRE DE RENTRÉE ». Le titre « FRENCH DAYS » n'apparaît qu'ensuite et reste en place le 25/09, onze jours après la fin officielle. L'urgence est donc permanente depuis plus de 13 mois (`kaching-bundles-deal-block-settings` → `blockTitle`).
- **Pré-cochage ajouté après le lancement (corrigé : date).** Au lancement (28/10/2025), la housse du 3.0 est proposée par « Cochez pour ajouter 1 Housse de Rechange », non cochée (`preselected: false`). Elle est pré-cochée **dès le 08/01/2026** (`p30_20260108.html` : « +1 Housse de Rechange », `preselected: true`), et non à partir du 24/02.

**Évolution des packs (ajout) [constaté].**
- 3.0 : seules les offres 1x (69,90 €) et Duo (98,90 €) existent jusqu'au 30/06/2026 (`p30_20260630.html`). Le pack « 3x Oreillers +1 Offert » (4 oreillers pour 139,90 €, soit 34,98 € l'unité) apparaît le 03/08 (`p30_20260803.html`).
- 2.0 : le pack « 3x Oreillers » (3 oreillers et 3 housses pour 127,90 €) est en place du 15/08/2025 au 20/04/2026. Le 25/09/2026, il est remplacé par « 3x Oreillers +1 Offert » (4 oreillers et 4 housses pour 129,90 €).
- Avant août 2026, un oreiller 3.0 ne se vendait donc jamais moins de 49,45 €.

### 5. Des unités au chiffre d'affaires

**Pack ou unité.**
- Sur le 2.0, les housses offertes représentent 80,0 % des oreillers vendus du 20/04 au 26/09 (20 631 pour 25 778) [constaté].
- Environ 20 % des oreillers 2.0 partent donc seuls, et 80 % au plus en packs [déduit]. « Au plus », parce que la housse 2.0 peut aussi sortir par d'autres canaux (§ 2).
- Sur le 3.0, chaque offre pré-coche une housse par oreiller. Les 70 % mesurés en septembre signifient qu'environ 30 % des oreillers sont achetés sans housse ; la part des packs, elle, n'est pas mesurable. Faute de mieux, on transpose la fourchette du 2.0.

| Hypothèse de prix moyen | 3.0 (€ par oreiller) | 2.0 (€ par oreiller) | Housse 3.0 | Lombaire |
|---|---|---|---|---|
| basse | 38,47 (10 % à 69,90 € ; 90 % en Famille à 34,98 €), possible seulement depuis août 2026 | 37,96 (20 % à 59,90 € ; 80 % en Famille à 32,48 €) | 14,32 | 19,90 |
| centrale | 47,75 (20 % seuls ; packs moitié Duo à 49,45 €, moitié Famille) | 42,95 | 14,90 | 19,90 |
| haute | 55,59 (30 % seuls ; 70 % en Duo) | 47,94 (80 % en Duo à 44,95 €) | 15,80 | 25,90 (20 % à 49,90 €) |

| Scénario de volume (unités par jour) | CA TTC par jour (bas / central / haut) | CA TTC par mois | HT net par mois (remboursements 15 / 10 / 5 %) | Commandes par jour (corrigé) |
|---|---|---|---|---|
| A. Août hors pic : 3.0 164, 2.0 162, lombaire 54 | 15,2 / 17,6 / 20,1 k€ | 463 / 535 / 611 k€ | 328 / 402 / 484 k€ | 120-205 |
| B. Moyenne sur 8 semaines : 3.0 249, 2.0 162, lombaire 58 | 19,5 / 22,8 / 26,0 k€ | 594 / 692 / 790 k€ | 421 / 519 / 626 k€ | 145-260 |
| C. 07-26/09 : 3.0 461, housses 324, 2.0 172, lombaire 67 | 30,8 / 36,1 / 41,3 k€ | 935 / 1 097 / 1 254 k€ | 662 / 823 / 993 k€ | 220-400 |

Hypothèses [déduit : `v2/scenarios.py`, chiffres reproduits] :
- housses 3.0 à 50-60 % des oreillers en A et B, 70 % mesurés en septembre ;
- 2.0 à 172 par jour en C, déduit de la housse 2.0 (138 par jour ÷ 0,80) et non mesuré directement ;
- 15 autres articles par jour à 35 € ; mois de 30,4 jours ; livraison offerte, donc aucune recette de port ;
- TVA de 20 % retirée pour le HT. Toutes les variantes sont `taxable: false`, **[indice]** que Shopify ne calcule pas la TVA.

**Commandes (corrigé).**
- Le nombre de commandes est recalculé avec la même fourchette que les prix : 10 à 30 % d'oreillers vendus seuls, packs allant de la Famille au Duo (`ct/recalc.py`).
- L'enquête appliquait 20 % fixes et comptait ensemble les commandes 2.0 et 3.0 sous le libellé « 3.0 ».
- Panier moyen implicite : environ 90 à 140 € au prix central, 75 à 180 € aux extrêmes. C'est cohérent avec le panier par défaut (84,80 €) et les packs pré-remplis (128,70 € et 169,70 €).

**Autres éléments.**
- **Remboursements.** Les compteurs ne remontent que sur les annulations remises en stock. Les avis Trustpilot à 1★ (16 %) parlent de remboursements en 2 à 3 mois, d'où l'hypothèse de 5 à 15 %.
- **Coussin lombaire (corrigé).** On compte 54 à 67 coussins par jour pour 120 à 400 commandes, soit **20 à 40 % des commandes** (A : 26-46 % ; B : 22-40 % ; C : 17-31 %). Hypothèse : chaque coussin passe par la popup à -60 % (19,90 €).
- **Rythme horaire moyen.** 3.0 : environ 10 unités par heure (8 semaines) et 19 (septembre). 2.0 : environ 6,8 par heure. CA de 0,8 à 1,1 k€ par heure (scénario B). Ce sont des moyennes, pas un profil horaire.
- **Saisonnalité (corrigé).**
  - D'octobre à décembre 2025, le 2.0 est faible (23 par jour). Mais le 3.0 venait d'être lancé, avec un stock positif et des réassorts : ses ventes ne sont pas mesurables sur cette période. On ne peut donc pas conclure à un creux global.
  - Pic en janvier-février : 2.0 à 254 par jour et 3.0 à au moins 235 par jour sur 3 coloris.
  - Printemps-été plus bas : 2.0 à 132-162 par jour ; 3.0 à au moins 73-121 par jour (bornes basses).
  - Hausse en août-septembre, en partie due aux nouveaux packs de 4.

**Cumul, borne basse, dans la boutique actuelle (19/10/2025 → 26/09/2026, 342 jours) (corrigé) [déduit : `ct/recalc_out.txt`].**

| Poste | Unités | Prix retenu | Total |
|---|---|---|---|
| 3.0 | 28 943 unités observées en baisse, dont 15 431 avant le 03/08 | Avant le 03/08 : 51,5 à 55,6 € (pas de pack Famille). Ensuite : 38,5 à 55,6 € | 1,31 à 1,61 M€ |
| 2.0 | 51 270 : 9 694 vendus seuls à 59,90 € et 41 576 en packs | Packs à 32,48-44,95 € | 1,93 à 2,45 M€ |
| Coussin lombaire | 14 229 | 19,90 à 25,90 € | 0,28 à 0,37 M€ |
| Housses 3.0 | 9 889 | 14,32 à 15,80 € | 0,14 à 0,16 M€ |
| Autres produits | compteurs de chaque fiche | prix catalogue | 0,37 M€ |
| **Total TTC** | | | **4,0 à 5,0 M€**, soit 4,3 à 5,3 M€ ramenés à 365 jours |

- Ce total est une borne basse : les ventes du 3.0 masquées par les réassorts d'octobre 2025 à janvier 2026 ne sont pas comptées, et les remboursements ne sont pas déduits.
- Le script cité par l'enquête, `v2/ca_modele.py`, donne 3,0 à 3,8 M€. Il ne prend que le compteur actuel du 3.0 (9 865) au lieu des baisses observées (28 943). Le « au moins 4 M€ » de l'enquête était juste, mais ne sortait pas de ce script.
- Les ventes de l'ancienne boutique ne sont pas ajoutées : la provenance de son compteur est inconnue.

### 6. Recoupements

| Méthode | Données | Résultat | Verdict |
|---|---|---|---|
| Trustpilot (corrigé) | 6 280 avis le 26/09 vers 12:25 (6 278 le matin, 6 273 la veille) ; 5 316 sur 12 mois (14,6 par jour). La première page, triée par date, porte 20 avis publiés en 24 heures, **tous étiquetés « Avis spontané »** [non vérifié, WebFetch : `ct/relectures_webfetch_2026-09-26.md`] | Environ 20 à 25 avis par jour pour 220 à 400 commandes par jour en septembre, soit 5 à 11 % | Le volume d'avis ne mesure pas les ventes. Un taux aussi élevé d'avis non sollicités via Trustpilot est inhabituel : **[indice]** à surveiller, sans conclusion. L'enquête parlait de « sollicitations très actives », ce que l'étiquette « spontané » ne confirme pas |
| Loox | 2.0 : 1 255 avis ; 3.0 : 339 ; 1,2 et 2,4 avis par jour en septembre | Moins de 1 % des unités vendues | Inutilisable pour le volume. Au moins 476 avis 2.0 sont datés de janvier 2023 à août 2024, avant le domaine (05/09/2024), et des lots d'au moins 20 avis tombent le même jour (13/03/2025, 05/06/2025 avec au moins 80, 18/09/2025). **Ajout** : tous les avis 2.0 échantillonnés jusqu'au 18/09/2025 sont horodatés à 00:00:00.000 UTC exactement, signature d'un import ou d'un ajout sans heure. Ce schéma continue après la migration : 5 sur 20 sur la page la plus récente du 2.0 (septembre 2026), 11 sur 20 en juillet 2026, 3 sur 20 pour le 3.0 (`ct/loox_minuit.txt`). **[Indice]** d'avis importés ou ajoutés à la main, pas seulement lors de la migration |
| Chrome UX Report | Absent de mars à juin 2025 ; top 1 M de juillet à novembre 2025 ; top 500 k de décembre 2025 à août 2026, sauf juin 2026 | Même palier que Wopilo, Tediber et Dodo ; Derila au top 50 k en août 2026 | Cohérent avec le décollage des compteurs en décembre 2025 [constaté : `v2/trafic/crux/*.csv.gz`] |
| Tranco | 1 305 593 (17/08) → 835 309 (25/09/2026), stable depuis le 08/09 | Liste moyennée sur 30 jours | Cohérent avec la hausse d'août |
| SimilarWeb (corrigé) | Environ 345,6 k visites en août ; environ 164,6 k en juillet | Conversion d'août de 1,1 à 1,8 % (118 à 204 commandes par jour sur 31 jours) | **Cohérent** avec les compteurs, pour du trafic social payant. L'enquête lisait 345,6 k comme un total sur 3 mois et concluait à une sous-estimation : cette conclusion tombe |
| Compteurs cumulés | 2.0 : 150 unités par jour sur 342 jours | Recoupe les fenêtres Wayback | Cohérent |

### 7. Trafic : sources consultées

| Source | Accès | Chiffres |
|---|---|---|
| SimilarWeb, données d'août 2026 (corrigé) | WebFetch seulement : curl renvoie un 202 vide, l'API un 403 | Voir la note sous le tableau |
| Comparables SimilarWeb | WebFetch | wopilo.com environ 118 k (Organic Search 37 %) ; tediber.com 382,6 k (Organic 43 %) ; derila-ergo.com environ 1,4 M (Display 42 %, 76 % de trafic de recherche payant). Ce sont probablement aussi des chiffres d'août seul [déduit, non vérifié] |
| HypeStat (mis à jour le 25/08/2026) | curl | Estimations HypeStat : 136 k (mai), 123,4 k (juin), 169,5 k visites (juillet). « Monthly Visits (SimilarWeb) : 164 560 ». Direct 82,04 %, Social 6,94 %, Paid 5,43 %, Search 4,43 % ; mobile 78,53 %. Semrush : 106 158 visites par mois, 7 mots-clés, 15 visites organiques. 348 backlinks venant de 150 domaines, dont 65 à Singapour (`v2/trafic/hypestat_text.txt`) |
| Semrush, Ahrefs, Ubersuggest, websiteseochecker | fermés (compte ou captcha) | — |
| statshow, siteworthtraffic, similarsites | ouverts, sans données utiles | — |
| CrUX (listes mensuelles publiques), Tranco | ouverts | voir § 6 |

**SimilarWeb, lecture corrigée.** La page affiche 345,6 k visites. WebFetch rend le libellé « Total Visits Last 3 Months » ; l'arithmétique montre qu'il s'agit du seul mois d'août :
- HypeStat, mis à jour le 25/08, donne pour SimilarWeb 164 560 visites en juillet ;
- or 164 560 × 2,10 = 345 576 : c'est exactement juillet + 110 % ;
- sur 3 mois (juin-août), août vaudrait au plus 181 k, soit +10 %, ce qui contredit les +110 % affichés.

Autres données de la page : +110 % sur un mois, rebond 71,2 %, 1,60 page par visite, 1:06 par visite. Répartition par pays : France 89,89 %, Belgique 5,56 %. Canaux : **« Paid Social » 36,12 % des visites sur ordinateur** (phrase de SimilarWeb : « driving 36.12% of desktop visits »), puis Direct, puis Display. Recherche : 131 mots-clés, tous de marque ; 27 % de ce trafic vient de mots-clés payants. Audience proche de Wopilo, La Maison de l'Oreiller, NuageConfort et Eveeo.

### 8. Référencement : 23 requêtes (outil WebSearch, limité aux États-Unis : ce n'est pas Google.fr)

| Requête | soya-paris.com | Qui occupe |
|---|---|---|
| oreiller ergonomique | non | Conforama, Wopilo, IKEA, Tempur, Amazon (Ehomfory), Dodo, YouTube, Ergosia |
| oreiller cervical | non | Conforama, Bultex, Tediber, Wopilo, La Maison de l'Oreiller, Dodo, ZenPur |
| oreiller mémoire de forme | non | Tediber, IKEA, André Renault, La Maison de l'Oreiller, Mon oreiller et moi, Drouault |
| meilleur oreiller douleur cervicale | non | Bultex, Emma, Tediber, arthrose-cervicale.fr, meilleurs.fr |
| oreiller ergonomique avis | non | Charles.co, presse-citron, IKEA, lemondedusommeil, Que Choisir, La Maison de l'Oreiller |
| oreiller orthopédique | non | Tediber, Bonsoirs, Wopilo ×2, Maison Orthopédique, Villeneuve |
| oreiller deux hauteurs mémoire de forme | non | Leroy Merlin, Castorama, sleeps.fr, Ergosia ×2, La Maison de l'Oreiller, ZenPur ×2 |
| oreiller cervical avis | non | Tediber, meilleur-oreillercervical.fr, matelas-experience, meilleurs.fr, Inphysio |
| meilleur oreiller ergonomique 2026 | non | lessentieldeleco, sleeps.fr, eifs.fr, matelas-expert, roussette, oreillers-ergonomiques.com |
| oreiller papillon cervical | non | sleepdoctor.fr, Dodo, Ortoprime, Inphysio, Cellsius |
| oreiller anti douleur cou nuque | non | Wopilo, Sleeplife, Emma, Mon oreiller et moi, Cellsius |
| oreiller côté douleur épaule | non | husbandpillow, Mon oreiller et moi, Inphysio, Cellsius |
| oreiller recommandé par les ostéopathes | non | Tediber, Wopilo, Oostéo, Mon oreiller et moi, ostéopathes |
| oreiller nuage ergonomique cervical | non | Emma, Cdiscount, NuageConfort, Nuage Bleu ×3, La Maison de l'Oreiller |
| oreiller ergonomique pas cher | non | Conforama, Auchan, Cdiscount ×2, Wopilo, Dodo |
| quel oreiller pour torticolis | non | Wopilo, Litex, Merinos, Pro Physio, Mon oreiller et moi |
| meilleur oreiller | non | Bultex, presse-citron, Tediber, sleeps.fr, IKEA, La Maison de l'Oreiller |
| oreiller pour cervicales | non | Bultex, Tediber, Conforama, Cdiscount, VYV |
| oreiller ergonomique mémoire de forme cervical | non | Conforama, Wopilo, La Maison de l'Oreiller ×2, Drouault, ZenPur ×2 |
| soya paris avis | **non** | Trustpilot ×2, warning-trading, hadlemans, les-avis-clients, signal-arnaques, franceverif, glowupbyparis, glowchicparis |
| soya paris oreiller | us.soya-paris.com ×3 | copies : soyaparisoreillerergonomique.com, soya-paris-oreiller-ergonomique.com ; accio |
| soya paris arnaque | non | signal-arnaques ×4, Trustpilot ×2, warning-trading, scamsandbox, franceverif |
| oreiller soya 3.0 avis | us.soya-paris.com | Cdiscount (vendeur tiers), ionomat (4/10), soyaconfort.com (boutique Shopify ktkdz6-ya, shopId 66732228669), josephineco.co, boutique miroir |

Bilan [constaté : `v2/seo/websearch_2026-09-26.tsv`, décompte refait] :
- **Requêtes génériques** : Soya 0 sur 19. Wopilo, Tediber et La Maison de l'Oreiller 8 sur 19 chacun ; Conforama, Bultex et Mon oreiller et moi 5 ; IKEA et Dodo 4 ; Emma, ZenPur, Inphysio, Cellsius, Cdiscount et sleeps.fr 3. Amazon 1 sur 19 ; Derila et Pilloway 0.
- **Requêtes de marque** : elles profitent surtout aux sites d'avis, aux sites d'alerte et aux copies. Le domaine n'apparaît que par son sous-domaine us.soya-paris.com. Sur Google.fr, le résultat peut être différent.

### 9. Payant contre organique [déduit] (corrigé)

- **Preuves de publicité** :
  - « Paid Social » est le 1er canal des visites **sur ordinateur** (36,12 %), Display le 3e. Or 78,5 % du trafic vient du mobile (HypeStat) : la répartition mobile n'est pas publiée ;
  - 27 % du trafic de recherche vient de mots-clés payants ;
  - des URL archivées de la fiche 2.0 portent `tw_source=google&tw_adid=748884517347&tw_campaign=22489769215&tw_kwdid=kwd-390453911726`, avec `gclid` et `gbraid`, le 17/02 et le 20/04/2026. Ce sont des annonces Google Search ciblées par mot-clé, suivies par Triple Whale, avec la même campagne sur deux mois [constaté : `v2/wayback/cdx_oreiller-soya-2-0.txt`] ;
  - `utm_content=sag_organic` et `srsltid` (15/08/2025, 26/12/2025) signalent des fiches gratuites Google Shopping. L'URL de décembre porte encore l'identifiant de variante de l'ancienne boutique et le même `srsltid` qu'en août : c'est probablement un réarchivage, pas un nouveau clic ;
  - `utm_source=ig&utm_medium=social&utm_content=link_in_bio` (22/12/2025) est le lien de la bio Instagram : de l'organique, pas une publicité ;
  - le site porte les pixels Meta (avec conversions serveur), TikTok, Snapchat, Pinterest et Google Ads (dossier § 8.1).
- **Le « Direct »** (82 % dans les estimations HypeStat) s'explique probablement par les navigateurs intégrés aux applications et les liens e-mail et SMS de Klaviyo [hypothèse, non vérifiée].
- **Organique hors marque** : quasi nul. Semrush compte 15 visites organiques par mois, et les 131 mots-clés de SimilarWeb sont tous de marque.
- **Ce qu'on ne peut pas dire** : l'enquête avançait « 85 à 95 % des visites achetées ou provoquées par la publicité ». Aucune source ne donne ce pourcentage, qui reste une appréciation. Le constat qualitatif tient : sans publicité, Soya n'a presque plus de trafic.

### 10. Ce que cela implique pour Somnila

1. **La demande est prouvée, mais le volume se fait en packs (corrigé).** Soya vend 160 à 460 oreillers 3.0 par jour. 69,90 € est le prix d'un oreiller seul (84,80 € avec la housse pré-cochée). L'essentiel des unités part en Duo (49,45 € l'unité) ou en Famille (34,98 € l'unité). Somnila n'a pas à baisser le Neck 01, mais son offre Duo est décisive.
2. **La place est dans l'organique.** Aucune marque vendue par publicité sociale n'occupe les 19 requêtes génériques. Les requêtes sur le papillon et le nuage, et une partie de celles sur les deux hauteurs, sont tenues par de petites boutiques (Ergosia, ZenPur, NuageConfort, Cellsius, Inphysio). Des guides factuels peuvent y entrer : hauteurs 13 / 11 cm, poids 1,4 kg, choix selon la position de sommeil.
3. **Entrer dans les comparatifs** (sleeps.fr, presse-citron, meilleurs.fr, roussette) en envoyant des échantillons, avec une mention transparente.
4. **Google Shopping gratuit dès le premier jour** : Soya l'utilise, et il ne coûte rien.
5. **Ne pas combattre sur l'enchère Meta** : avec 0,6 à 0,8 M€ TTC par mois, Soya peut payer chaque client plus cher.
6. **Copier honnêtement le panier** :
   - une offre Duo lisible ;
   - un accessoire proposé après l'ajout au panier (20 à 40 % des commandes de Soya en contiennent un), à prix réel ;
   - la housse décochée.
7. **Calendrier** : concentrer le budget sur janvier-février et septembre.
8. **Liste noire confirmée** :
   - pas de prix de référence gonflé (49,90 € « au lieu de 104,90 € », puis 59,90 € « au lieu de 119,90 € ») ;
   - pas de « fin aujourd'hui » permanente ;
   - pas d'avis importés ;
   - pas de faux horodatages.

### 11. Un Claude Code local ferait-il mieux ?

Pas par l'intelligence : c'est le même modèle, avec la même méthode. Il serait en revanche **mieux placé** sur cinq points :
- **Adresse IP française** : vrais résultats Google.fr et prix vus comme par une cliente.
- **Pas de filtre réseau** : la Wayback Machine est instable ici, archive.ph et Common Crawl sont fermés.
- **Limite de débit Shopify** : ici elle est partagée avec les autres agents (pages bloquées à 10:48).
- **Durée** : il peut faire tourner les relevés 7 jours ou plus, ce qui lisse les à-coups.
- **Comptes** : il peut utiliser les comptes SimilarWeb ou Semrush du fondateur, s'il en a. On obtiendrait ainsi la série mensuelle et le libellé exact des visites.

Mais les trois erreurs corrigées ici n'étaient pas des problèmes d'accès. Il s'agissait d'une lecture du chiffre SimilarWeb, d'un changement de boutique passé inaperçu et d'une date de pré-cochage. Une session locale les aurait commises aussi sans contre-vérification. Ce qui améliore le résultat, c'est la relecture des preuves brutes, pas l'endroit où tourne l'agent. Les règles restent les mêmes : aucun contact, aucun compte créé chez Soya, aucun achat.

### 12. Limites

- Une seule journée de relevés directs, avec des mises à jour par à-coups : le profil horaire reste inconnu.
- Les fenêtres Wayback qui traversent un réassort sont des bornes basses.
- Les compteurs contiennent au moins une incohérence (housse 2.0 contre oreiller 2.0, octobre-décembre 2025) : ce sont des ordres de grandeur.
- La lecture des compteurs en ventes suppose qu'aucun ajustement manuel à la baisse n'a eu lieu (aucun n'a été observé). Les compteurs ne sont pas affichés aux clientes : Soya n'a pas d'intérêt à les manipuler.
- Les packs ont changé en 2026 : les comparaisons d'unités entre périodes surestiment la hausse du nombre de clients.
- La part des packs sur le 3.0 est transposée du 2.0.
- SimilarWeb, HypeStat et Trustpilot ont été lus en partie par un modèle (WebFetch). La lecture « août seul » de SimilarWeb est déduite de l'arithmétique.
- WebSearch n'est pas Google.fr.
- La série horaire de l'orchestrateur continue jusqu'à environ 21:49 UTC. Pour la compléter, relancer `python3 fenetres.py` et `python3 analyse.py` dans `v2/`.

### 13. Contre-vérification : ce qui a changé

| Constat | Verdict | Correction principale |
|---|---|---|
| V01 rythme du 3.0 | confirmé | Chiffres identiques au parseur indépendant (13 027 ; 164 ; 461 ; 160). Leçon nuancée : le volume se fait en packs |
| V02 « -51 226 » | corrigé | Deux boutiques ; ancienne fiche créée le 24/01/2025 ; les 68 000 « depuis le lancement » ne sont pas établis |
| V03 CA | corrigé | Montants par jour et par mois reproduits ; 7 à 9,5 M€ = rythme annualisé, contre au moins 4,3 M€ observés sur 12 mois |
| V04 commandes | corrigé | 145-260 et 220-400 ; les 80 % sont un maximum |
| V05 à-coups | corrigé | Cache Shopify ajouté aux causes possibles ; valeurs simultanées discordantes ; valeur de 09:48 peut-être en retard |
| V06 prix de référence | corrigé | Prix barré à 104,90 € dès avril 2025 ; pas de capture de mai à août 2025 ; remise du 3.0 passée de -42 % à -50 % à prix payé constant |
| V07 urgence | confirmé | Ajout de « DESTOCKAGE TOTAL » et de « OFFRE DE RENTRÉE » pendant les vrais French Days |
| V08 pré-cochage | corrigé | Dès le 08/01/2026, pas le 24/02 |
| V09 lombaire | corrigé | 20 à 40 % des commandes |
| V10 Trustpilot | corrigé | Avis « spontanés » ; 5 à 11 % des commandes de septembre |
| V11 Loox | confirmé | Ajout des horodatages à minuit, y compris après la migration |
| V12 trafic | corrigé | 345,6 k = août seul ; Paid Social = ordinateur |
| V13 sous-estimation SimilarWeb | non étayé | Conversion de 1,1 à 1,8 % : cohérent |
| V14 CrUX, Tranco | confirmé | — |
| V15, V16 référencement | confirmé | Décompte refait |
| V17 Google Ads, Shopping | confirmé | Le lien Instagram est la bio (organique) ; l'URL de décembre est un réarchivage |
| V18 payant contre organique | corrigé | Pas de pourcentage mesurable |
| V19 saisonnalité, nuit | corrigé | Creux d'octobre à décembre non démontré ; part de la nuit inconnue |
| V20 gestion de stock | confirmé | — |
| V21 cumul | corrigé | 4,0 à 5,0 M€ ; le script cité ne produisait pas ce chiffre |
