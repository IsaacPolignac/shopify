## Marketing, acquisition, CRM et persuasion : SOYA PARIS (soya-paris.com)

*Relevé du 25 septembre 2026, contre-vérifié le 26 septembre 2026. Les chemins cités sont relatifs à `build/analyse/soya-paris/preuves/` : `soya/` pour le dossier de preuves, `mkt/` pour les fichiers collectés pour cette dimension, `mkt2/` pour la page téléchargée pendant la contre-vérification. Chaque point est marqué **constaté** (lu dans un fichier, une capture ou une URL ouverte) ou **déduit** (interprétation). Pour tout ce qui relève d'un possible manquement, on écrit « indice » ou « risque », jamais « preuve ». Tous les prix sont en euros (configuration Kaching, `products.json`, `cap/funnel.json`) ; les captures faites depuis une IP américaine qui affichent des dollars ne servent pas de référence de prix.*

### 1. En une phrase

SOYA PARIS fonctionne comme une boutique de performance marketing : publicité sociale (Meta, et depuis peu TikTok, déduit), capture insistante de l'e-mail puis du téléphone, bloc d'achat en packs pour gonfler le panier, ventes additionnelles après l'ajout au panier. Une grande partie des signaux d'urgence et de preuve sociale affichés **ne sont pas reliés aux données réelles de la boutique** (constaté) : compte à rebours qui repart chaque nuit, stock « écoulé » écrit en dur, note d'avis codée en dur et contredite par l'application d'avis de la boutique elle-même, prix barré égal à environ deux fois le prix pratiqué.

### 2. La pile technique marketing (constaté)

Le gestionnaire de pixels Shopify (`soya/home.html`, `webPixelsConfigList`) déclare **9 pixels d'application**, plus les pixels propres à Shopify :

| Brique | Identifiant ou détail | Rôle | Source |
|---|---|---|---|
| Meta (Facebook et Instagram) | pixel 1581609639439558 ; envoi serveur activé (`"S2S":{"facebookCapiEnabled":true}` dans la configuration Trekkie de Shopify) | Publicité sociale, conversions envoyées aussi côté serveur | `soya/home.html` |
| TikTok | pixel D9PMU6BC77U7K82NLN50 (identifiant de pixel web 5431230796, le plus récent de la liste ; les autres sont en 327xxxxxxx, sauf 1954349388) | Publicité TikTok | idem |
| Snapchat | fd7f04c9-aabf-42d7-ad18-c53b61724f19 | Publicité Snap | idem, et `tr.snapchat.com` dans `cap/*.json` |
| Pinterest | tag 2613625264959 | Publicité ou catalogue Pinterest | idem, et `ct.pinterest.com` |
| Google & YouTube | GT-K5MKJXW8, GT-TWR6PKQQ, AW-16655023754 (7 événements de conversion : begin_checkout, search, view_item, purchase, page_view, add_payment_info, add_to_cart), Merchant Center MC-KXKT0M50ZM, `target_country: FR` | Google Ads, Shopping, remarketing | idem |
| Klaviyo | compte XuYmmR, `webPixelConfig` en base64 = `{"enableAddedToCartEvents": true}` | Formulaires, e-mail, SMS, relances de panier | idem, et `mkt/kl_v7.json` |
| ParcelPanel | pixel `api.parcelpanel.com` (finalité ANALYTICS seulement) | Suivi de commande, pas publicitaire | idem, et `mkt/pp.html` |
| Deux pixels non identifiés | apiClientId 2935586817 (`shopifyDomain`) et 2753413 (`shopId`) | Inconnu | idem |
| Triple Whale | Triple Pixel via `api.config-security.com` / `conf.config-security.com` (bloc `shopify://apps/triplewhale/blocks/triple_pixel_snippet`) | Attribution publicitaire multicanale | `soya/home.html` |
| Kaching Bundles et Kaching Popup | packs, ajouts, popup après ajout au panier | Panier moyen | `soya/pdp3.html` |
| AfterSell | script `aftersell-utm-triggers.js` (extension aftersell-1090) | Ventes additionnelles après paiement ; seule l'installation est constatée | `soya/home.html` |
| Essential Countdown Timer | minuteur « FRENCH DAYS » | Urgence | `window.essentialCountdownTimerConfigs` |
| Loox | widget `CRe3ATH2rU` | Avis clients avec photos | `soya/pdp3.html` |
| EZ Product Image Translate (freshify) | `translate.freshify.click` | Traduction du texte incrusté dans les images | `soya/home.html` |
| StarApps Variant Image | `cdn.starapps.studio` | Images par variante | idem |

Autre constat technique : le clic droit est désactivé sur tout le site (`window.oncontextmenu = function () { return false; }` dans `soya/home.html` et `soya/pdp3.html`). Déduit : cela gêne l'enregistrement des visuels et la recherche d'image inversée depuis le menu contextuel.

Réseau (constaté, `soya/cap/home-d.json`, `pdp3-d.json`, `pdp3-m.json`) : sur ordinateur, l'accueil appelle **26 domaines externes** (357 requêtes, 13,8 Mo) et la fiche Soya 3.0 **31 domaines** (506 requêtes, 18,1 Mo ; 474 requêtes et 16,1 Mo sur mobile). Ces comptes incluent 4 domaines de Shopify (shop.app, otlp-http-production.shopifysvc.com, 5xfyfp-ti.myshopify.com, extensions.shopifycdn.com) et Google Fonts. Les poids sont des **minimums** : le script de capture (`soya/capture.cjs`) remplaçait les 39 SVG de la galerie (35,7 Mo au total selon `soya/svg_sizes.txt`) par un rectangle et bloquait les vidéos MP4.

### 3. Canaux d'acquisition : ce qui est installé et ce qui tourne probablement (déduit)

- **Meta, canal principal probable.** L'envoi serveur des conversions est actif, un outil d'attribution payant est installé (Triple Whale) et des résultats de recherche renvoient à des publications Facebook titrées « Soya Paris - Élu meilleur oreiller orthopédique de 2024 » (https://www.facebook.com/story.php?story_fbid=122111526512516761&id=357304574142341, page d'identifiant différent de la page officielle) et « Élu Meilleur Oreiller Orthopédique 2025 » pour le 2.0 comme pour le 3.0 (vidéos de la page 61565502837799, par exemple https://www.facebook.com/61565502837799/videos/livraison-gratuite-d%C3%A9j%C3%A0-100-000-clients-satisfaits/2186223432183471/). Ces publications n'ont pas été ouvertes : seuls leurs titres sont connus. Un site tiers écrit « Soya Paris est partout dans les publicités depuis des mois » (https://meilleur-oreillercervical.fr/soya-paris-avis/, « Mis à jour le 20 août 2026 ») ; ce site contient des liens affiliés Amazon et recommande un produit concurrent, c'est donc une source intéressée. La bibliothèque publicitaire Meta a renvoyé une page de vérification (`mkt/metaads.html`) et reste à consulter à la main.
- **TikTok, canal récent qui semble uniquement publicitaire.** Le profil @soya.paris, ouvert le 25/09/2026, affiche 5 070 abonnés, 2 694 j'aime et **0 vidéo publique**, avec `createTime` 1785953061, soit le 05/08/2026 à 18:04 UTC (`mkt/tt2.html`). Des abonnés et des j'aime sans vidéo publique correspondent au profil d'un compte qui sert surtout aux publicités (déduit). Le pixel TikTok porte l'identifiant de pixel web le plus récent de la liste, donc il a probablement été ajouté après les autres (déduit).
- **Google.** Merchant Center relié avec le ciblage FR et 7 événements de conversion Ads configurés : Shopping ou Performance Max probables (déduit). Le Google Ads Transparency Center a renvoyé vers une page captcha (`mkt/gat.json`).
- **Snapchat et Pinterest.** Pixels installés et appelés sur chaque page (`tr.snapchat.com`, `ct.pinterest.com`). Rien n'indique des campagnes actives.
- **Organique faible.** Le blog est vide (« Ce blog est vide », `soya/cap/blog-d-text.txt`), TikTok n'a aucune vidéo publique. Le nombre d'abonnés Instagram n'a pas pu être lu (réponse « Please wait a few minutes », `soya/web/ig.json`).
- **Marketplaces, copies et domaines voisins (constaté par résultats de recherche, pages non ouvertes sauf mention).** Plusieurs annonces Amazon.fr de marque « SWZEC » sont titrées « SOYA-Paris » ou « SOYA Paris » (B0FCXR3BDF, B0DQV4Y729, B0DTHL23M2, B0DQTS3NP4, et un « SOYA 3.0 » B0FWQHLZL2), ainsi qu'une annonce « Générique » (B0FNCXX2GX). La boutique **soyaparisoreillerergonomique.com** (ouverte, `soya/web/clone_soyaparisoreillerergonomique.com.html`) reprend mot pour mot les textes et le menu (y compris la faute « Noveau ») mais sur une **autre** boutique Shopify (a2bu6h-c5, pays US, devise USD), avec un autre thème (Shrine PRO) et un seul pixel personnalisé nommé « Weetracked », sans pixel publicitaire d'application. Un domaine soya-paris.us apparaît aussi dans les résultats de recherche. On ne sait pas à qui appartiennent ces copies et annonces.

### 4. Calendrier promotionnel et urgence

**Le thème en ligne** s'appelle « V16 – Version 3.0 French Days » ; ses fichiers sont servis depuis `/cdn/shop/t/29/` (`soya/home.html`, `Shopify.theme`). Déduit : le numéro 29 suggère une trentaine de thèmes créés ou importés, et « V16 » une seizième version. Chaque temps fort semble être un nouvel habillage du même mécanisme.

**Le compte à rebours est perpétuel (constaté dans la configuration) :**

```
name: FRENCH DAYS [drapeau] · timerType: recurring · recurringDays: [1,2,3,4,5,6,0]
startType: today · endType: never · showInCountries: [] (tous pays)
startDate: 2025-10-16T22:00Z · endDate: 2025-10-21T21:59Z (vestiges de la configuration d'origine)
createdAt: 2025-10-19 · updatedAt: 2026-09-18
```

Les relevés dans le temps le confirment (`soya/cap/funnel.json`, `funnel2.json`) : le bandeau affichait 00:00:39 à 21:58:21 UTC, puis 00:00:00 à 21:59:21 UTC ; dans une nouvelle session, il affichait **23:58:56** à 22:00:05 UTC. La cible est donc 21:59 UTC (23:59 à Paris) et le minuteur repart pour 24 h chaque nuit. Le même discours revient à quatre endroits : popup Klaviyo (« PS : L'offre se termine aujourd'hui à minuit 00h. »), écran VIP (« Fermeture des portes ce soir à 00h ! »), écran final Klaviyo (« Cette offre exceptionnelle se termine ce soir, à 00h ! ») et badge Kaching (« -{{saved_percentage}}% jusqu'à ce soir, minuit ! »). **Risque :** « déclarer faussement qu'un produit ou un service ne sera disponible que pendant une période très limitée » est une pratique commerciale réputée trompeuse (art. L121-4 7° du Code de la consommation, https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563107).

**Les French Days eux-mêmes.** Le site officiel des French Days annonce l'édition de rentrée « du 7 au 14 septembre 2026 » (https://www.rejoindrelesfrenchdays.com/), dates reprises par Clubic (article du 06/09/2026) et iCalendrier. Klaviyo avait publié des dates **prévisionnelles** du 22 au 28 septembre, et Croc'Affaires (article du 24/08/2026) présentait ces mêmes dates comme confirmées. Le 25 septembre, Soya affiche donc « French Days » 11 jours après la fin de l'édition officielle, mais dans la fenêtre annoncée par ces deux sources. Le point grave reste le minuteur sans fin. Deux justifications circulent en parallèle pour la même remise : « French Days » dans le bandeau et le bloc d'achat (nom de remise Kaching « FRENCH DAYS | JUSQU'À -60% »), « À l'occasion de la sortie de notre nouveau produit ! » dans la popup.

### 5. Le tunnel de capture Klaviyo « Pop-up Mobile | Le Tsunami » (constaté)

Source : `mkt/kl_v7.json`, téléchargé depuis `https://fast.a.klaviyo.com/forms/api/v7/full-forms?company_id=XuYmmR` (l'appel public que fait le script Klaviyo du site). Réglages : formulaire FLYOUT en bas à droite (ancré en bas sur mobile), **délai de 12 s**, réaffichage après 1 jour, dernière modification le 24/09/2026 à 06:55 UTC. Le formulaire est visible sur toutes les pages capturées (texte « Non merci, je n'aime pas les remises. » présent dans `home-d`, `pdp3-d`, `pdp3-m`, `col-d`, `col-m`, `couette-m`, `enfant-d`, `soie-d`, `v1-d`, `histoire-d` ; captures `soya/cap/slices/funnel-home-12s-00.jpg` et `pdp3-m-full-00.jpg`).

| Écran | Texte | Technique | Action |
|---|---|---|---|
| 1 | « VOUS AVEZ OBTENU 60% DE RÉDUCTION. À l'occasion de la sortie de notre nouveau produit ! Quelle est votre position préférée ? Ventre / Côté / Dos » ; « PS : L'offre se termine aujourd'hui à minuit 00h. » | Avantage présenté comme déjà acquis (effet de dotation), micro-engagement par le quiz | « Pour moi » (liste YaBEbm) ou « Pour un proche » (aucune liste) ; « Non merci, je n'aime pas les remises. » ferme |
| 2 | Prénom et e-mail, « Activer ma réduction » | Engagement progressif | inscription à YaBEbm |
| 3 | « Aujourd'hui seulement : REJOIGNEZ LE CLUB VIP. Fermeture des portes ce soir à 00h ! » ; « En finalisant votre inscription, recevez par SMS vos codes promo, le suivi de livraison et des offres VIP toute l'année sur nos nouveautés. » ; téléphone ; case « Oui, c'est mon vrai numéro » | Rareté non étayée, consentement SMS ambigu | « Je deviens VIP » (YaBEbm) ; « Non merci, je ne veux pas être VIP. » envoie **aussi** le formulaire, vers la liste WZcPhv |
| 4 | « VOTRE RÉDUCTION DE 60% EST ACTIVÉE ! Sur notre nouvel Oreiller Lombaire ! 1. Ajoutez au panier minimum x1 Oreiller Soya 2. Une pop-up apparait… » ; « Vous pouvez (enfin) dire ADIEU à toutes vos douleurs lombaires. » | L'objet de l'offre change ; aucun code n'est remis | « Retourner sur le site » |

**Ce que révèle la configuration Kaching** (`mkt/kaching_popup.json`, extrait de `soya/pdp3.html`) : deux popups, créées le 10/06/2026 (fiche 2.0) et le 18/06/2026 (fiche 3.0), titrées « FÉLICITATIONS, VOUS AVEZ DÉBLOQUÉ -60% SUR NOTRE NOUVEL OREILLER LOMBAIRE ! ». Elles se déclenchent à **l'ajout au panier** sur la fiche du Soya 3.0 ou du 2.0 (`triggers.addToCart.enabled: true`, `conditions: []`), sans autre filtre que la fiche (`visibility.target: specificProducts`), une fois par jour au plus. Elles ne dépendent donc pas de l'inscription au formulaire. (Précision : le champ `customerTags: []` n'est pas un filtre d'audience ; dans le script Kaching `soya/ux/kaching-popup-block.js`, ce sont les étiquettes ajoutées au client qui valide la popup.) Le produit proposé est le coussin lombaire 15152116302156, à 49,90 € au catalogue sans prix barré. La remise de 60 % est calculée sur ce prix (`soya/ux/kaching-popup-v2.js`), soit 19,96 € avant l'arrondi « .90 » configuré ; le prix réellement facturé n'a pas été observé. Le mot « nouvel » est discutable : ce produit existe dans la boutique depuis le 19/10/2025 (`products.json`, `created_at`) et compte 24 avis Loox (`soya/web/p_coussin-lombaire-ergonomique-soya.html`). Les puces disent « Réduit fortement les douleurs lombaires & hanches » et « Traite les douleurs chroniques & mauvaises postures », et le refus s'intitule « Non merci, je n'aime pas les cadeaux ». **Risque :** annoncer « 60 % de réduction » obtenus contre l'e-mail et le numéro, puis livrer une remise sur un accessoire proposée à tous les acheteurs, peut être qualifié de pratique trompeuse sur la nature de l'avantage.

Indicateur de volume (déduit, fragile) : la variante du coussin lombaire affiche `inventoryQuantity` **-13 908** (`soya/web/p_coussin-lombaire-ergonomique-soya.html`), soit plus que les quatre coloris du Soya 3.0 réunis (-9 719). Si ce stock a été suivi à partir de zéro, la popup lombaire serait l'un des leviers de vente additionnelle les plus efficaces de la boutique.

**Consentement SMS (constaté) :** consent_type `SINGLE_STEP_TRANSACTIONAL_PROMOTIONAL` (pays FR) et case de consentement promotionnel (`opt_in_promotional_sms`) libellée « Oui, c'est mon vrai numéro ». Le texte au-dessus annonce bien des « codes promo » et des « offres VIP » par SMS, mais la case elle-même n'exprime pas un accord, et aucune mention de désinscription (STOP) ni de fréquence n'apparaît. Les alertes Klaviyo `reviewDisclosureLanguage` et `addDisclosureBlock` ont été **fermées le 18/06/2026 à 20:04 UTC**. **Risque** au regard du consentement préalable exigé pour la prospection par SMS et du RGPD.

**Second formulaire, « HIGH PROSPECT (Cloned) » :** popup réservée à des listes ou segments en liste blanche (`GROUPS_TARGETING`, whitelist true), délai de 5 s, réaffichage après 50 jours, version modifiée le 28/04/2026. Texte : « Juste pour vous ! Commandez maintenant et bénéficiez de 20 % de réduction avec le code promo : BACK20. Dépêchez-vous, ce code expire dans : », suivi d'un minuteur de type **variable** de 13 minutes (fuseau US/Eastern), qui démarre à l'affichage (déduit du type « variable »). Le bouton « UTILISER MON CODE PROMO » redirige vers `https://soya-paris.com/discount/BACK20` ; le refus s'intitule « Non merci, je ne veux pas de réduction. » ; l'écran de fin est resté en anglais (« Thanks for subscribing! »). Le code BACK20 figure sur au moins un site de coupons (résultat de recherche https://fr.coupert.com/codes-promo/soya-paris.com ; la page fr.promocodie.com a renvoyé un contrôle Cloudflare, `mkt/promocodie.html`).

### 6. Le bloc d'achat : ancrage, pré-cochage, ventes additionnelles (constaté)

| Élément | Soya 3.0 | Soya 2.0 | Enfant |
|---|---|---|---|
| Prix catalogue (`products.json`) | 139,90 € | 119,90 € | 99,90 € |
| 1 oreiller (prix fixe Kaching) | **69,90 €** (barré 139,90) | 59,90 € | 49,90 € |
| Pack Duo | 98,90 € (barré 279,80) | 89,90 € + 2 housses offertes | 89,90 € |
| Pack Famille (3 + 1 offert) | 139,90 € (barré 559,60, soit 4 × 139,90) | 129,90 € + 4 housses offertes | n/a |
| Ajout housse | 14,90 € (barré 39,90) **pré-coché** | aucun | 14,90 € pré-coché |

Sources : `kaching-bundles-deal-block-settings` dans `soya/pdp3.html`, `soya/web/p_oreiller-soya-2-0.html`, `soya/web/p_oreiller-soya-enfant.html` ; affichage EUR dans `soya/cap/funnel.json` (pdpBuy) et `soya/cap/slices/pdp3-m-full-00.jpg`.

Observations :

- **Ancrage :** le prix barré est le prix catalogue et vaut quasiment le double du prix pratiqué (139,90 € contre 2 × 69,90 = 139,80 €). Pour le pack Famille, le prix barré compte aussi l'oreiller « offert » (4 × 139,90 €), et la remise affichée atteint 75 %, au-delà du « jusqu'à -60 % » du bandeau. Par ailleurs, 12 produits sur 19 portent un prix barré au catalogue (de 6,7 % à 60,2 %). Un site tiers affilié écrit que le 2.0 est « presque toujours proposé autour de 59 € » (https://meilleur-oreillercervical.fr/soya-paris-avis/). **Risque au regard de la directive Omnibus** (art. L112-1-1 du Code de la consommation : le prix de référence d'une réduction est le prix le plus bas pratiqué pendant les 30 jours précédents). Il faudrait savoir si 139,90 € a jamais été facturé ; aucun historique de prix n'a pu être consulté.
- **Case pré-cochée :** `preselected: true` sur la housse du choix « 1x Oreiller », présélectionné par défaut (`preselectedDealBarId` = barre 1x). La case apparaît cochée sur `soya/cap/slices/pdp3-m-full-00.jpg`. Le panier par défaut monte ainsi à **84,80 €** au lieu de 69,90 €. Les housses des packs Duo et Famille sont configurées de la même façon. **Risque :** paiement supplémentaire obtenu par consentement par défaut, que le client peut se faire rembourser (art. L121-17 du Code de la consommation, article 22 de la directive 2011/83/UE).
- **« Livraison rapide et cadeaux offerts »** sur les packs du 3.0 : aucun cadeau n'est configuré (`freeGifts: []`), les seuls ajouts sont des housses payantes. Sur le 2.0, les housses offertes sont bien configurées. La livraison est gratuite pour toutes les commandes (`soya/pol/shipping-policy.txt`), ce n'est donc pas un avantage propre au pack. Quant à « rapide », les délais annoncés diffèrent selon l'endroit : politique d'expédition « Temps de traitement : 1 jour ouvré, Livraison Standard : 3 à 6 jours ouvrés » ; FAQ de la fiche « sous 1 à 2 jours ouvrés […] ensuite en 3 à 6 jours » ; onglet « Livraison & retours » « 1 à 2 jours / 3 à 5 jours » (`soya/web/pdp3_fulltext.txt`).
- **Rareté écrite en dur :** « Plus que quelques exemplaires en stock » (bloc `liquid_JwXkcr`, commentaire CSS « Rouge d'urgence »), « 89% du stock déjà écoulé » avec une barre en `width:89%` fixe et « Dernière mise à jour : il y a quelques secondes » (bloc `liquid_JrVWqc`) sont du HTML statique sur la fiche 3.0 (`soya/pdp3.html`). La fiche 2.0 affiche un autre chiffre figé, « 78% du stock déjà écoulé » (`soya/web/p_oreiller-soya-2-0.html`). Or les variantes du 3.0 ont `inventoryManagement: null` et `inventoryPolicy: continue` (stock non suivi, vente possible sans stock), et l'alerte de stock bas intégrée à Kaching, qui s'appuie sur l'inventaire, est désactivée (`lowStockAlertEnabled: false`).

La chaîne de vente additionnelle observée compte trois étages : ajout au pack (housse pré-cochée), popup après ajout (coussin lombaire), bloc « Complétez pour un confort ultime ! » (housse à 17,90 €, barrée 39,90 €, et coussin à 49,90 €, `soya/cap/pdp3-d-text.txt`). AfterSell est installé pour un quatrième étage après paiement, mais ces offres n'ont pas été vues (checkout inaccessible en environnement automatisé).

### 7. Preuve sociale et autorité : ce qui est affiché face à ce qui est mesuré

| Affiché | Mesuré | Source |
|---|---|---|
| « Noté 4,8/5 – 15 637 avis clients » (« avis parents » sur l'enfant) sur **les 19 fiches** : texte en dur avec 5 étoiles d'images icons8, sous un commentaire « Texte multilingue » ; traduit tel quel en anglais (« Rated 4.8/5 – 15,637 reviews ») | Loox, 19 fiches : **1 776 avis, moyenne pondérée 4,64** ; le résumé Loox rendu dans la fiche 3.0 elle-même dit « Overall rating: 4.6 / 5 from 1775 reviews » | `soya/web/p_*.html` (MetafieldLooxRating, MetafieldLooxCount, bloc `loox-ssr-review-summary` de `soya/pdp3.html`) ; `mkt2/us_2-0.html` |
| Même mention sur la fiche Soya 3.0 | Loox **4,3 / 339** ; JSON-LD `ratingValue 4.3`, `reviewCount 339` | `soya/pdp3.html` |
| Même mention sur les draps en soie, l'oreiller de voyage, la housse de couette en soie | Loox **1,0 / 1**, **1,3 / 3**, **aucun avis** | `soya/web/loox_vs_affiche.tsv` et fiches correspondantes |
| 40 avis intégrés dans la fiche 3.0 | 26 portent sur le 2.0 et 7 sur le 3.0 ; **3 sur 40** portent la mention Loox « Verified » ; 20 sont datés d'avant la création des produits de la boutique actuelle (19/10/2025), ce qui est cohérent avec un import lors d'une migration | `soya/pdp3.html` (classes `loox-review-*`) |
| « plus de 100 000 dormeurs conquis par le SOYA 2.0 » (FR) | La version anglaise de la même fiche dit « **Over 200,000 users** have already improved their sleep with SOYA 2.0 » ; l'accueil dit aussi « Rejoignez les milliers de dormeurs satisfaits » | `soya/cap/pdp3-d-text.txt`, `soya/catalogue.json` ; `mkt2/us_2-0.html` (https://us.soya-paris.com/products/soya-align-pillow-2-0, téléchargée le 26/09/2026) |
| « 96 % / 91 % / 87 % » (« questionnaire envoyé à l'ensemble des clients de nos oreillers en juillet 2025 ») | Aucun effectif, taux de réponse ni formulation des questions ; le 96 % porte sur un « soulagement durable de la douleur cervicale » | `soya/cap/home-d-text.txt` |
| Logos Santé magazine, ELLE, Le Figaro Santé, Forbes, Marie Claire, VOGUE (fichiers 12 à 17.png, fond bleu nuit) | `alt` vides, aucun lien vers un article ; aucune recherche n'a trouvé d'article de ces titres sur Soya Paris | section `image_link_blocks_rQeTHq` de `soya/home.html` ; `soya/web/press_strip.jpg` |
| « L'oreiller ergonomique N°1, recommandé par les ostéopathes », « plus de 200 praticiens », « Recommandé par plus de 200 professionnels de santé », « Dr. Marc R., Chiropracteur » | Aucune identité ni numéro d'inscription vérifiable | `soya/cap/home-d-text.txt`, `soya/cap/pdp3-d-text.txt` (l. 105-109) ; `soya/gallery/sheet-1.jpg` (03.svg, 14.svg) |
| Pastilles « CertiPUR » et « OEKO-TEX » sur le premier visuel de la fiche 3.0 | Aucun numéro de certificat dans le texte de la fiche ; la seule mention textuelle d'OEKO-TEX concerne les draps et couettes SoyaFresh | `soya/web/badges_zoom.jpg`, `soya/cap/slices/pdp3-m-full-00.jpg` ; recherche dans `soya/pdp3.html` et `soya/catalogue.json` |
| « Élu meilleur oreiller orthopédique » 2024 puis 2025 (titres de publications Facebook) | Aucun organisateur cité | résultats de recherche cités au § 3 |

Ce qui en découle :

- Google lit **4,3** dans les données structurées de la fiche 3.0 pendant que le visiteur lit **4,8** dans le texte ; l'application d'avis de la boutique affiche elle-même 4,6 sur 1 775 avis sur la même page.
- Un article tiers non daté cite à la fois « 4.8/5 » et « 15,637 avis » pour les fiches et « 4.3/5 » et « 3,119 avis » pour Trustpilot (https://www.hadlemans.fr/soya-paris-avis/). Trustpilot compte aujourd'hui 6 273 avis : c'est un **indice** que le compteur « 15 637 » n'a pas bougé depuis des mois.
- Le nombre de clients revendiqué varie du simple au double selon la langue (100 000 en français, 200 000 en anglais) : au moins l'un des deux chiffres est faux.
- **Risque :** afficher une note et un nombre d'avis qui ne correspondent pas aux avis réellement collectés peut constituer une pratique commerciale trompeuse (art. L121-2 du Code de la consommation) ; les points 27° et 28° de l'art. L121-4 visent les avis présentés comme vérifiés sans contrôle et les avis faux ou modifiés, et l'art. L111-7-2 impose une information loyale sur le traitement des avis.

### 8. CRM, après-achat et fidélisation

- **E-mail et SMS :** Klaviyo (formulaires ci-dessus ; suivi des ajouts au panier activé, donc relances de panier possibles, déduit). Expéditeur `info@soya-paris.com`. La liste WZcPhv envoie un e-mail de confirmation dont l'objet est en anglais (« Confirm Your Subscription ») (`mkt/kl_v7.json`, `company_sender_settings`). Le pied de page propose aussi l'inscription native Shopify. Le contenu des relances n'a pas été observé (aucune inscription faite).
- **Après-achat :** AfterSell installé (offres non observées). ParcelPanel sert la page `/apps/parcelpanel`, liée par « Suivre votre commande » dans le **menu principal** (`soya/cap/slices/funnel-home-12s-00.jpg`) : **indice** d'un volume élevé de demandes « où est ma commande ». Le transporteur est masqué (`display_option.carrier: false`) et la configuration contient `"sensitive_world":"China,Aliexpress,Chinese cities"` (`mkt/pp.html`), un réglage de masquage de mots dans les événements de suivi. C'est un **indice** d'une expédition depuis la Chine que le client ne voit pas, cohérent avec l'avis Trustpilot du 25/09/2026 « Oreiller made in china (probablement du dropshipping, le packaging indique la provenance) ». On ignore si cette liste de mots est une valeur par défaut de l'application ou un choix du marchand.
- **Fidélisation :** aucune application de fidélité, de parrainage, d'abonnement ou d'affiliation détectée (recherche des chaînes loyalty, parrain, referral, smile, rebuy, rivo, growave, stamped, recharge, uppromote, goaffpro dans `soya/home.html` et `soya/pdp3.html` ; blocs d'applications présents : ez-product-translate, kaching-bundles, klaviyo, starapps-variant-image, triplewhale). La housse de rechange est le seul produit de réachat.
- **Service client :** le bandeau de réassurance dit « Service client 7j/7 », y compris en bas de la page contact, qui dit pourtant « Nous répondons généralement sous 24 heures, du lundi au samedi » ; pas de téléphone (« bientôt disponible ») (`soya/cap/contact-d-text.txt`).
- **Essai et retours :** la fiche promet « 30 nuits d'essai — Satisfait ou remboursé » et la politique d'expédition un retour « sans frais ». La politique de remboursement compte 30 jours « depuis votre achat » (et non depuis la réception : avec 4 à 8 jours ouvrés de traitement et de transport, l'essai réel est plus court, déduit), exige un article « dans l'état où vous l'avez reçu et dans son emballage d'origine », ne publie pas d'adresse de retour et contient la formule type « Merci de ne pas retourner votre produit directement au fabricant » (`soya/pol/refund-policy.txt`, `shipping-policy.txt`).

### 9. Réputation externe et présence Google

Trustpilot (https://fr.trustpilot.com/review/soya-paris.com, ouvert le 26/09/2026) : **4,3/5, 6 273 avis**, dont 5 294 reçus sur les 12 derniers mois (84 %) ; 65 % à 5 étoiles, 16 % à 4, 2 % à 3, 1 % à 2 et **16 % à 1 étoile** ; « Profil revendiqué • octobre 2024 » ; « Cette entreprise invite régulièrement ses clients à laisser des avis » ; abonnement payant à Trustpilot ; réponse à 4 % des avis négatifs, « généralement dans un délai d'une semaine ». Les avis à 1 étoile récents (filtre `?stars=1`) parlent de commande « reçu[e] qu'à moitié » (25/09/2026), de remboursement attendu depuis 2 mois (29/07 et 04/08/2026), de « très mauvaise odeur de plastique » (25/09/2026), de « made in china » (25/09/2026) et de draps « soie » reçus en « POLYESTER » (18/09/2026) ; aucun de ces avis n'a reçu de réponse.

Signal-Arnaques : le titre de la page principale indique « Soya-paris.com | 61 signalements | 244 commentaires » (https://www.signal-arnaques.com/scam/view/805026, lecture bloquée par Cloudflare, `soya/web/https___www.signal-arnaques.com_scam_view_805026.html`), et d'autres fils plus petits existent (1 à 2 signalements chacun). Sur les requêtes de marque, on trouve aussi warning-trading.com, franceverif.fr (« site à fiabilité douteuse »), scamsandbox.com, des sites de coupons et des articles « Soya Paris avis » hébergés sur d'autres boutiques Shopify (glowupbyparis.com, glowchicparis.com : chemins `/blogs/`, déduit).

Référencement : balises title et description génériques (« SOYA Paris - Confort & Bien-être pour un Sommeil Réparateur ») ; blog vide. Les hreflang déclarent 25 variantes `en-XX` vers us.soya-paris.com, plus `fr` et `x-default` (`soya/home.html`). La version anglaise est **mélangée** : balise `lang="en"` et interface en anglais, mais menus et sections d'accueil restés en français ; les fiches produit sont en partie traduites (`soya/web/clone_us.soya-paris.com.html`, `mkt2/us_2-0.html`).

### 10. Modèle d'acquisition probable (déduit)

1. **Publicité sociale (Meta, désormais TikTok)** avec des visuels carrés sur fond bleu nuit et des accroches de santé (« Soulagez vos douleurs », « Recommandé par les ostéopathes », visibles dans la galerie `soya/gallery/sheet-1.jpg`), qui envoie directement sur la fiche.
2. **Fiche conçue comme une page de vente :** stories vidéo, note mise en avant, packs, housse pré-cochée, minuteur, stock « écoulé ».
3. **Capture à 12 s** de l'e-mail puis du téléphone par un « 60 % obtenu », qui alimente Klaviyo (relances de panier possibles, reconquête BACK20 avec minuteur de 13 minutes pour les segments ciblés).
4. **Monétisation de chaque commande :** popup lombaire, ventes croisées, AfterSell.
5. **Attribution** par Triple Whale et l'envoi serveur Meta pour piloter le coût d'acquisition.
6. **Réputation gérée a minima :** invitations Trustpilot, peu de réponses, page de suivi sans transporteur.

Ordre de grandeur (déduit, fragile) : les variantes ont des quantités de stock négatives, alors que le suivi de stock est aujourd'hui désactivé (`inventoryManagement: null`) :

| Produit | `inventoryQuantity` | Source |
|---|---|---|
| Oreiller Soya 2.0 | **-51 191** | `soya/web/p_oreiller-soya-2-0.html` |
| Housse de rechange 2.0 (handle `housse-d-oreiller-de-rechange-soya-1`) | -41 513 | `soya/web/p_housse-d-oreiller-de-rechange-soya-1.html` |
| Coussin lombaire | -13 908 | `soya/web/p_coussin-lombaire-ergonomique-soya.html` |
| Oreiller Soya 3.0 (4 coloris) | -9 719 (-3 888, -1 999, -2 431, -1 401) | `soya/pdp3.html`, `soya/cap/funnel.json` |
| Housses 3.0 (4 coloris) | -3 948 | `soya/pdp3.html` |

Si le stock a été suivi à partir de zéro pendant une période, ces chiffres sont des planchers d'unités vendues sur cette période. Deux réserves : la boutique actuelle a été remplie le 19/10/2025 (création des produits), et des quantités ont pu être importées à cette date ; ces chiffres ne sont donc pas un chiffre de ventes. Ils suffisent à dire que les volumes se comptent en dizaines de milliers d'unités, ce qui rend l'ordre de grandeur « 100 000 dormeurs » plausible sans le démontrer.

### 11. Inventaire des leviers de persuasion

| Levier | Chez Soya | Statut | Version honnête pour Somnila |
|---|---|---|---|
| Urgence | Minuteur quotidien sans fin, « se termine à minuit », « Fermeture des portes ce soir à 00h » | Constaté, risque L121-4 7° | Minuteur seulement jusqu'à une vraie date de fin écrite |
| Rareté | « 89 % écoulé » (3.0), « 78 % écoulé » (2.0), « quelques exemplaires » écrits en dur | Constaté | Alerte de stock liée à l'inventaire réel, ou rien |
| Ancrage | Prix barré à environ 2 fois le prix pratiqué ; pack Famille barré à 4 × 139,90 € | Constaté, risque Omnibus (L112-1-1) | Prix unique, économie réelle des packs par oreiller |
| Preuve sociale | 4,8 / 15 637 en dur contre 4,6 / 1 775 chez Loox ; 100 000 clients en français, 200 000 en anglais | Constaté | Note et nombre réels par produit, aussi dans le JSON-LD ; un seul chiffre de clients, justifiable |
| Autorité | Logos presse sans lien, « Dr » anonyme, « 200 praticiens », pastilles CertiPUR et OEKO-TEX sans numéro, « Élu meilleur oreiller » sans organisateur | Constaté, invérifiable | Presse avec lien seulement, experts nommés, numéros de certificat affichés |
| Réciprocité | « Vous avez obtenu 60 % » | Constaté, objet de l'offre changé | Avantage de bienvenue réel, identique du début à la fin |
| Engagement | Quiz de position, puis e-mail, puis SMS | Constaté | Quiz qui recommande le côté 13 ou 11 cm du Neck 01 |
| Refus culpabilisant | 4 libellés différents : « je n'aime pas les remises » (2 écrans Klaviyo), « je ne veux pas être VIP », « je ne veux pas de réduction », « je n'aime pas les cadeaux » (2 popups Kaching) | Constaté | « Non merci » |
| Option par défaut | Housse à 14,90 € pré-cochée | Constaté, risque L121-17 | Case décochée |
| Fierté nationale | Rubans tricolores, « Paris », drapeau français dans le minuteur, alors que l'éditeur déclaré est au Wyoming (`soya/pol/legal-notice.txt`) et que le pays de la boutique Shopify est GB (`initData.shop.countryCode`) | Constaté | Identité réelle affichée (société, adresse, origine de fabrication) |

### 12. Ce que Somnila peut reprendre sans mentir, et ce qu'il ne faut pas copier

**À reprendre :**

- La pile d'acquisition : Meta avec l'envoi serveur des conversions, TikTok, Merchant Center, Klaviyo avec les ajouts au panier, un outil d'attribution. Une bannière de consentement conforme doit précéder les pixels.
- L'architecture en packs 1 / 2 / famille, avec de vraies économies calculées sur le prix réellement pratiqué.
- Le quiz de position de sommeil comme porte d'entrée de l'e-mail : il colle au Neck 01 (côté → 13 cm, dos → 11 cm).
- Les stories vidéo en tête de fiche (Concept, Lequel choisir, Avis, FAQ).
- Une offre complémentaire après l'ajout au panier, présentée pour ce qu'elle est.
- Une page de suivi en libre-service, avec le transporteur nommé.
- Une popup de reconquête pour les visiteurs connus, avec un code dont la date de fin est réglée côté Shopify (et en sachant qu'il finira sur les sites de coupons).
- Une relance de réachat de la housse, déclenchée par la date d'achat.

**À faire mieux que Soya :**

- Des avis dynamiques, identiques entre la page, le widget et le JSON-LD.
- 100 % de réponses sur Trustpilot, invitations à tous les acheteurs sans filtre.
- Des délais de livraison identiques partout (politique, FAQ, fiche), réalistes.
- Un essai de 30 nuits compté à partir de la réception, qui accepte un oreiller utilisé, écrit de la même façon partout.
- Un consentement SMS explicite : case séparée, non cochée, libellé du type « J'accepte de recevoir des SMS promotionnels de Somnila, désinscription par STOP ».
- Des temps forts aux dates officielles (French Days de printemps et de rentrée, Black Friday), avec une seule justification par opération.
- Un blog de guides de choix (position, hauteur, fermeté) : Soya n'en a aucun.
- Occuper la requête « Somnila avis » dès le lancement (page d'avis, Trustpilot, FAQ transparente).

**À ne jamais copier :**

- Le minuteur perpétuel.
- Le stock « écoulé » écrit en dur.
- La note et le nombre d'avis codés en dur.
- Le prix barré sans prix antérieur réellement pratiqué.
- La case payante pré-cochée.
- Le « 60 % obtenu » qui change d'objet.
- Les logos presse sans article, les pastilles de certification sans numéro.
- Le « Dr » anonyme et les « 200 praticiens » sans liste.
- Les allégations apnée, reflux ou « traite les douleurs ».
- Les refus culpabilisants.
- Un chiffre de clients différent selon la langue.

### 13. Limites

Plusieurs sources n'ont pas pu être lues : bibliothèque publicitaire Meta (page de vérification, `mkt/metaads.html`), bibliothèque publicitaire TikTok (« system busy », `mkt/ttlib.json`), Google Ads Transparency Center (captcha, `mkt/gat.json`), Instagram (`soya/web/ig.json`), archive.org, Signal-Arnaques et fr.promocodie.com (Cloudflare), publications Facebook (titres seulement). Le panier, le checkout, les offres AfterSell et les e-mails n'ont pas été observés. Les pixels ont été relevés depuis une IP américaine (en-tête `server-timing` : edge IAD, country US, `soya/home.headers`) : l'affichage d'une bannière de consentement européenne n'a donc pas pu être vérifié. Les poids de page mesurés excluent les SVG de galerie et les vidéos.

### Sources web ouvertes

- https://www.tiktok.com/@soya.paris (copie `mkt/tt2.html`)
- https://fast.a.klaviyo.com/forms/api/v7/full-forms?company_id=XuYmmR (copie `mkt/kl_v7.json`)
- https://soya-paris.com/apps/parcelpanel (copie `mkt/pp.html`)
- https://us.soya-paris.com/products/soya-align-pillow-2-0 (copie `mkt2/us_2-0.html`, 26/09/2026)
- https://fr.trustpilot.com/review/soya-paris.com (et `?stars=1`)
- https://www.rejoindrelesfrenchdays.com/
- https://www.clubic.com/bons-plans-628408-french-days-2026-tout-savoir-sur-l-edition-de-la-rentree-qui-commence-demain.html
- https://icalendrier.fr/evenements/french-days
- https://www.klaviyo.com/fr/blog/date-des-french-days
- https://crocaffaires.fr/bons-plans/french-days-septembre-2026-dates/
- https://meilleur-oreillercervical.fr/soya-paris-avis/
- https://www.hadlemans.fr/soya-paris-avis/
- https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563107 (art. L121-4)
- https://soyaparisoreillerergonomique.com/ (copie `soya/web/clone_soyaparisoreillerergonomique.com.html`)

Titres de résultats de recherche seulement (pages non ouvertes) : https://www.facebook.com/story.php?story_fbid=122111526512516761&id=357304574142341 ; https://www.facebook.com/61565502837799/videos/livraison-gratuite/854361433679167/ ; https://www.facebook.com/61565502837799/videos/livraison-gratuite-d%C3%A9j%C3%A0-100-000-clients-satisfaits/2186223432183471/ ; https://www.signal-arnaques.com/scam/view/805026 ; https://fr.coupert.com/codes-promo/soya-paris.com ; https://www.amazon.fr/SWZEC-SOYA-Paris-Oreiller-SOYA-2-0/dp/B0FCXR3BDF ; https://www.amazon.fr/SWZEC-SOYA-Paris-Oreiller-SOYA-3-0/dp/B0FWQHLZL2 ; https://glowupbyparis.com/blogs/infos/soya-paris-avis-mon-test-honnete-21-nuits-de-l-oreiller-soya-2-0-et-les-alternatives-a-considerer ; https://glowchicparis.com/blogs/blog/soya-paris-avis-l-oreiller-dont-tout-le-monde-parle-vaut-il-reellement-le-buzz ; https://franceverif.fr/fr/site/soya-paris.com ; https://warning-trading.com/consommation/soya-paris-com-avis-escroquerie/.
