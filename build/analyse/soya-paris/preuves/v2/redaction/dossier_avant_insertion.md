# Dossier SOYA PARIS — v2 — renseignement approfondi (26/09/2026)

*Note de renseignement concurrentiel établie pour SOMNILA. **Version 2 — renseignement approfondi (26/09/2026).** Cette version ajoute une **Partie II** (§ 15 à § 20) : l'opérateur et son réseau de boutiques (§ 15), la publicité et les réseaux sociaux (§ 16), le trafic et le chiffre d'affaires estimé à partir des compteurs de stock (§ 17), le fournisseur probable, les coûts et les marges (§ 18), la voix du client (§ 19) et le laboratoire d'animation filmé image par image (§ 20). Les chapitres 15 à 19 sont issus de cinq enquêtes menées le 26/09/2026, chacune contre-vérifiée le même jour sur les preuves brutes : 85 constats relus, 35 confirmés, 47 corrigés, 3 non étayés (détail en Annexe D.2). Le chapitre 20 reprend le laboratoire d'animation versé au dépôt le même jour (`v2/motion_lab.md`), qui n'a pas fait l'objet d'une contre-vérification séparée. La fiche d'identité (§ 0), la synthèse (§ 1), les forces et menaces (§ 12), le plan d'action (§ 13), les limites (§ 14) et les annexes intègrent la Partie II. **Règle d'arbitrage** : en cas de conflit, la Partie II, plus récente et contre-vérifiée, l'emporte ; la Partie I a été corrigée en conséquence et chaque correction est signalée par « (corrigé v2 : … ) » avec le renvoi au chapitre de la Partie II. Les conflits internes à la Partie II sont tranchés dans des « Notes de la rédaction ».*

*Version 1 — analyse au millimètre (25/09/2026). Collecte du 25/09/2026, contre-vérifications des 25 et 26/09/2026. Rédaction en chef : consolidation de huit analyses contre-vérifiées (marque, direction artistique, animations, fiche produit, catalogue et prix, marketing, technique et conformité, UX). En cas de contradiction entre ces analyses, les preuves ont été rouvertes et la version retenue est signalée par « arbitrage ». Relecture critique finale le 26/09/2026 : preuves rouvertes pour un échantillon d'affirmations, erreurs corrigées et manques comblés (mesures en cm de la fiche et des neuf autres pages, inventaire complet des animations, stratégie reconstituée, fiche technique du produit) ; chaque intervention est signalée par « critique final ».*

**Conventions**

- **[constaté]** : vu dans un fichier, une capture, une configuration ou une URL ouverte. **[déduit]** : raisonnement à partir de constats. **[indice]** / **[risque]** : accusation possible, non prouvée formellement ; la qualification d'une infraction relève de la DGCCRF ou d'un juge. **[non vérifié]** : source lue indirectement (titre de résultat de recherche, résumé).
- Prix en **euros** (marché France : `catalogue.json`, `products.json`, configuration Kaching, `cap/funnel.json`). Une partie des captures a été faite depuis une IP américaine (edge IAD, `soya/home.headers`) et affiche des dollars : elles servent à mesurer la mise en page, jamais les montants.
- Mesures en px ; conversion 1 cm ≈ 37,8 px (96 dpi). Écrans de référence : desktop 1440 × 900, mobile 390 × 844.
- Chemins de preuve, relatifs à `build/analyse/soya-paris/preuves/` (copie des preuves dans le dépôt ; les vidéos, les fichiers SVG et les captures PNG pleine page n'ont pas été copiés à cause de leur poids, leurs versions JPEG découpées sont dans `soya/cap/slices/`) :
  - `soya/` : dossier de preuves principal (HTML, JSON, captures `cap/`, politiques `pol/`, galerie `gallery/`, pages `web/` et `ux/`) ;
  - `tech/` = `soya-tech/` (inventaire réseau dédoublonné, accessibilité, sitemaps) ; `pdpw/` = `pdpwork/` (mesures DOM de la fiche en EUR) ; `prix/` = `soya_prix/` (boutiques tierces, boutique miroir) ; `anim/` = `soya-anim/` (scripts d'applications) ; `mkt/`, `mkt2/` (Klaviyo, TikTok, ParcelPanel, version anglaise) ;
  - `build/` = `/home/user/shopify/build/` (données Somnila).
- **Preuves de la Partie II** : elles sont restées dans l'espace de travail de la session, `/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/`, sous `soya2/` (`reseau/`, `pub/`, `ventes/`, `sourcing/`, `avis/`, `inv/` pour les relevés horaires des compteurs, et `contre_*/` pour les contre-vérifications) ; elles **n'ont pas été copiées dans le dépôt** (plusieurs centaines de Mo, vidéos comprises). Chaque chapitre de la Partie II rappelle ses propres alias de chemins en tête. Les chapitres eux-mêmes sont aussi conservés séparément dans `build/analyse/soya-paris/v2/` (`reseau.md`, `pub.md`, `trafic.md`, `sourcing.md`, `voc.md`, `motion_lab.md`).

---

## 0. Fiche d'identité

| Rubrique | Valeur | Preuve |
|---|---|---|
| Nom commercial | SOYA PARIS (« SOYA Paris » dans les balises title et og) | [soya/home.html] |
| Éditeur légal déclaré | « Dénomination sociale : soya-paris.com » (un nom de domaine, pas une raison sociale) ; le texte parle ensuite de « la société SOYA PARIS ». **v2** : le 15/08/2025, les mêmes mentions disaient « Dénomination sociale : SOYA PARIS » et renvoyaient aux tribunaux du siège de « SOYA PARIS LLC » ; le mot « LLC » a disparu depuis, et aucune « SOYA PARIS » n'apparaît dans les données du Wyoming consultées sur OpenCorporates (registre officiel non interrogé : LLC **non vérifiée**) | [soya/pol/legal-notice.txt] ; § 15.8 [`reseau/wayback/pol_contact_20250815.html`] |
| Opérateur (v2) | **Aucune personne ni société immatriculée reliée publiquement** à soya-paris.com. Un même opérateur, identifié par ses comptes publicitaires, a servi le domaine depuis **5 boutiques Shopify en 13 mois** (84122730826, 74445094946, 88419959133, 68045897928, puis l'actuelle 93550543180), qui ont en partie coexisté (parc de boutiques anciennes) ; il a aussi porté **FREYJA** (parfum aux phéromones, 2024, même boutique Shopify que Soya) et **MERCURE PARIS** (domaine rattaché à la boutique actuelle de Soya d'octobre 2025 à avril 2026) [constaté ; lien fort] | § 15.1, § 15.4 à § 15.7 |
| Réseau et clones (v2) | Identifiants communs aux 5 boutiques : pixel Meta 1581609639439558, Klaviyo XuYmmR, Snap fd7f04c9…, Google GT-K5MKJXW8 et AW-16655023754 (mêmes actions de conversion) ; 4 comptes Merchant Center successifs. Autour de la marque, **deux grappes de clones tiers** sans identifiant commun : grappe A (Sheridan, Wyoming, USD, code commenté en portugais du Brésil, 3 boutiques vivantes) ; grappe B (France, Soya 3.0 à 49,90 €, paiement hors de Shopify derrière Cloudflare). Juvilor (Canada) et Milaris (France) copient les témoignages | § 15.5, § 15.9, § 15.10 |
| Siège déclaré | 5830 E 2nd St, Ste 7000, Casper, Wyoming 82609 (USA) : adresse inscrite au registre des agents enregistrés du Wyoming pour PRA-Wyoming LLC et Republic Registered Agent LLC ; commercialisée comme bureau virtuel par Davinci Virtual | [soya/pol/legal-notice.txt] ; https://sos.wyo.gov/Business/Docs/CRA-Roster.pdf ; https://www.davincivirtual.com/loc/us/wyoming/casper-virtual-offices/facility-1100 |
| Absent des mentions | SIREN/RCS, forme sociale, capital, TVA, directeur de la publication, téléphone (« bientôt disponible ») | [soya/pol/*.txt] ; [soya/cap/contact-d-text.txt] |
| Pays de la boutique Shopify | GB (`initData.shop.countryCode`) ; `meta.json` : London, England | [soya/home.html] ; [prix/new_meta.json] |
| Domaine | soya-paris.com, créé le 05/09/2024 chez Tucows, titulaire masqué, modifié le 22/08/2026, expire le 05/09/2027. **v2** : un certificat de 2021 montre un titulaire antérieur (domaine réenregistré en 2024) ; autres domaines de l'opérateur : us. et account.soya-paris.com, soya-paris.us, soyaparis.store, mercure-paris.com (expiré), freyjaparis.fr (expiré) | [soya/web/rdap.json], https://rdap.org/domain/soya-paris.com ; § 15.8 |
| Plateforme | Shopify derrière Cloudflare, HTTP/2 + 103 Early Hints, HSTS ≈ 91 jours ; boutique `5xfyfp-ti.myshopify.com`, shopId 93550543180, fichiers sous `/s/files/1/0935/5054/3180/` | [soya/home.headers] ; [soya/pdp3.html] |
| Thème | Impact 6.4.1, nommé « V16 – Version 3.0 French Days » (id 205977846092), servi depuis `/cdn/shop/t/29/`, `theme_store_id: null` | [soya/home.html, objet `Shopify.theme`] |
| Applications (10 modules) | Kaching Bundles, Kaching Popup, Klaviyo, Loox, Triple Whale, Essential Countdown Timer, EZ Product Image Translate, StarApps Variant Image, AfterSell, ParcelPanel | [soya/home.html], [soya/pdp3.html] |
| Pixels publicitaires | Meta 1581609639439558 (API de conversions serveur active), TikTok D9PMU6BC77U7K82NLN50, Snapchat, Pinterest 2613625264959, Google (GT-K5MKJXW8, GT-TWR6PKQQ, Ads AW-16655023754, Merchant Center MC-KXKT0M50ZM, ciblage FR), Klaviyo ; plus ParcelPanel et 2 pixels non identifiés. **v2** : le pixel TikTok a remplacé CSH048JC77U2MN99KTU0 entre le 03/08 et le 07/09/2026 ; Meta, Klaviyo, Snap et Google Ads sont les mêmes depuis 2024-2025 sur toutes les boutiques de l'opérateur | [soya/home.html, `webPixelsConfigList`] ; § 15.5 |
| Catalogue | 19 produits, 205 variantes, 182 images ; 3 oreillers « versionnés » (1.0, 2.0, 3.0), 1 oreiller enfant, linge de lit (soie, SoyaFresh), accessoires génériques | [soya/products.json] |
| Prix | Catalogue de 11,90 € à 139,90 € ; produit vedette Oreiller Soya 3.0 : 139,90 € au catalogue, **69,90 €** dans le bloc d'offres de la fiche | [soya/products.json] ; [soya/cap/funnel.json → pdpBuy] |
| Marchés | 26 pays dans le sélecteur (EUR, GBP, CHF, CAD, USD, AUD) ; FR sur soya-paris.com, anglais partiel sur us.soya-paris.com (même boutique) | [soya/home.html] ; [prix/us.soya-paris.com_meta.json] |
| Canaux | Publicité payante (Meta, TikTok, Google Shopping probables) ; e-mail et SMS Klaviyo ; organique quasi nul (blog vide, TikTok sans vidéo publique) ; aucun lien vers un réseau social sur le site. **v2** : Meta **constaté** (17 vidéos de la page Facebook 61565502837799, au moins 7 textes d'annonces) ; Google Ads **Search à mots-clés** constaté (campagne 22489769215, active au moins du 17/02 au 20/04/2026) et fiches Shopping gratuites dès le 15/08/2025 ; TikTok : identité créée le 05/08/2026, 0 vidéo publique ; Snap : 0 annonce payée par « SOYA PARIS » dans l'UE sur 12 mois ; SimilarWeb ≈ 345,6 k visites en août 2026, « Paid Social » 1er canal sur ordinateur (36,12 %) ; absent des 19 requêtes génériques testées | [soya/home.html] ; [soya/cap/blog-d-text.txt] ; [mkt/tt2.html] ; § 16.3, § 16.4, § 17.7, § 17.8 |
| Date de la boutique actuelle | Boutique ouverte au plus tard le 02/04/2025 (collection « frontpage ») ; catalogue **recréé le 19/10/2025** : 17 des 19 fiches créées ce jour-là, dont 8 en 18 secondes. **(corrigé v2 : le 02/04/2025 est la date de création de la boutique 93550543180, qui n'a servi soya-paris.com qu'à partir de fin octobre 2025, au plus tard le 28/10/2025 ; auparavant le domaine était servi par la boutique 68045897928, § 15.4 et § 17.2)** | [soya/collections.json] ; [soya/products.json, `created_at`] |
| Réputation externe | Trustpilot 4,3/5 sur 6 273 avis, 16 % à une étoile, réponse à 4 % des avis négatifs. **v2** : 6 280 avis le 26/09 ; la note mélange **deux flux** : ≈ 22 avis par jour par le lien d'évaluation diffusé par la marque (« BasicLink », moyenne 4,67) et ≈ 2 par jour spontanés (moyenne 1,56) ; TrustScore 3,1 et 56,8 % d'avis 1★ au 19/08/2025. Loox : 64 % des 1 776 avis importés (horodatés à 00:00:00 UTC) ; satisfaction récente du 3.0 sur les avis horodatés : **3,73/5, 26 % à 1-2★** | https://fr.trustpilot.com/review/soya-paris.com ; § 19.1, § 19.3, § 19.4 |
| Volumes et chiffre d'affaires estimés (v2) | Compteurs `inventoryQuantity` (45 captures Wayback d'avril 2025 au 07/09/2026, relevés du 25-26/09/2026) : Soya 3.0 **≥ 240 oreillers par jour** du 03/08 au 26/09/2026 (461 par jour du 07 au 26/09, French Days inclus) ; Soya 2.0 **162 par jour** du 20/04 au 26/09/2026 ; 145 à 260 commandes par jour. **CA TTC : 19,5 à 26 k€ par jour, soit 0,59 à 0,79 M€ par mois** (moyenne sur 8 semaines ; 0,42 à 0,63 M€ HT par mois nets de remboursements) ; rythme de septembre : 0,9 à 1,25 M€ par mois ; **au moins 4,0 M€ TTC** (4,0 à 5,0) sur les 342 jours de la boutique actuelle. Méthode : unités parties × prix moyen par offre en trois hypothèses [déduit, fourchettes] | § 17.1, § 17.4, § 17.5 |
| Budget publicitaire estimé (v2) | ≈ 3 800 à 10 400 € par jour hors pic, **hypothèse** sectorielle de 25 à 40 % du CA, non mesurée (bibliothèques publicitaires Meta, Google et TikTok fermées depuis l'environnement d'enquête) | § 16.9 |
| Fournisseur probable (v2) | **Modèle catalogue chinois vendu en marque blanche (OEM)** : les traits distinctifs du Soya 3.0 (cornes, découpes latérales, point central froncé, bourrelet nervuré) se retrouvent chez un seul compte Made-in-China, Shenzhen Jintongyuan (6,90 à 10,20 $ pièce, hauteurs 11 / 9 cm contre 14,4 / 9 chez Soya) ; fournisseur exact inconnu [indice]. Coût rendu client estimé **13 à 25 €** ; marge avant publicité de l'offre 1x, TVA reversée : 22,75 à 41,85 € [déduit]. Indices d'envoi direct depuis la Chine (ParcelPanel, avis, délais) | § 18.1 à § 18.8 |
| Concurrence directe avec Somnila | Soya 3.0 « nuage » à deux hauteurs, 62 × 37 cm, 14,4 / 9 cm, vendu 69,90 € sur la fiche ; Neck 01 de Somnila, 62 × 42 cm, deux hauteurs 13 / 11 cm, 1,4 kg, 69,90 € housse incluse | [soya/web/pdp3_fulltext.txt, accordéon « Matériaux & dimensions »] ; [build/PHASE3.md l. 14 (prix)] ; [build/PRODUCTS.csv, ligne 09 (dimensions, poids, housse incluse)] ; [build/SOMNILA_DOSSIER_COMPLET.md l. 2568 (13 / 11 cm)] |
| Même produit que Somnila ? (v2) | **Non** pour le Neck 01 : aucune photo commune (21 624 paires comparées, minimum 14 bits sur 64) et moules différents (nuage à lobes arrondis contre papillon à cornes) [constaté ; déduit]. **Probablement oui** pour un accessoire : le Lounge 01 de Somnila (54,90 €) et le « Coussin ergonomique avec tête de lit » de Soya (42,90 €) ont la même silhouette [indice fort] | § 18.1, § 18.2, § 18.5 |

---

## 1. Synthèse exécutive : les 15 constats qui comptent

Classement par importance pour Somnila : poids sur la décision d'achat de la cliente et sur la stratégie de Somnila, solidité de la preuve, exploitabilité. **v2** : la liste passe de 12 à 15 constats ; les constats de la Partie II (§ 15 à § 20) y sont intégrés et le classement a été revu. Le rang d'origine de chaque point de la version 1 est indiqué entre crochets (« [v1 : n] ») ; aucun texte de la version 1 n'a été retiré, seules des corrections signalées y ont été ajoutées.

1. **La note est écrite à la main, pas mesurée, et figée depuis au moins 17 mois.** [v1 : 1] « Noté 4,8/5 – 15 637 avis clients » est du texte fixe dans un bloc Liquid (`liquid_n8MKt3`, étoiles hébergées sur img.icons8.com), identique sur les 19 fiches, « avis parents » sur l'oreiller enfant. Sur les mêmes pages, l'application d'avis Loox publie 4,3/5 sur 339 avis pour le Soya 3.0 (JSON-LD) et « Overall rating: 4.6 / 5 from 1775 reviews » pour la boutique ; la somme des 19 fiches donne 1 776 avis. Le chiffre affiché vaut 46 fois celui du produit et 8,8 fois celui de toute la boutique. Des fiches à 1,0/5 (1 avis) ou sans aucun avis affichent le même « 4,8 ». [constaté : soya/pdp3.html ; soya/web/p_*.html ; soya/web/loox_vs_affiche.tsv] **Indice fort** de note non sincère. **v2** : le même « 15 637 » figure à l'identique dans les 46 captures Wayback des fiches, du 19/04/2025 au 07/09/2026, sur plusieurs boutiques successives et à travers la recréation du catalogue ; une vidéo publicitaire exportée le 08/11/2025 le filme sur la fiche 2.0 [constaté : § 16.1, § 16.5]. La satisfaction récente mesurable du Soya 3.0 (avis Loox horodatés du 01/07 au 25/09/2026) est de **3,73/5, avec 26 % d'avis à 1-2★** [constaté : § 19.4].
2. **Des preuves sociales importées, recyclées ou triées (nouveau v2).**
   - *Loox* : 1 137 des 1 776 avis (64 %) sont horodatés à 00:00:00 UTC, signature d'un import ; aucun n'a 1 ou 2★. 494 sont datés d'avant la création du domaine (01/2023 à 09/2024), dont 462 avec le badge « Vérifié », une case que l'importateur coche lui-même selon la documentation Loox. 56 textes y reviennent mot pour mot sous 144 noms différents. Les imports continuent (19 avis « Prénom.x » en septembre 2026) [constaté : § 19.4].
   - *Trustpilot* : la note de 4,3 mélange deux flux, ≈ 22 avis par jour par le lien d'évaluation diffusé par la marque (moyenne 4,67) et ≈ 2 avis spontanés par jour (moyenne 1,56). Le lien part parfois avant la livraison (8 avis de clients pas encore livrés). Au moins 85 avis antérieurs au 22/08/2025, presque tous à 4-5★, ont disparu avant le 15/03/2026. Sept avis Loox antidatés reprennent mot pour mot la première phrase de sept avis Trustpilot d'août 2025 signés de noms anglo-saxons, aujourd'hui introuvables (404) [constaté ; déduit pour les disparitions : § 19.3, § 19.5, § 19.13].
   - *Témoignages et chiffres* : les 4 « Acheteur vérifié » affichés sous le Soya 3.0 étaient en ligne sur la fiche 2.0 dès le 19/04/2025, cinq mois avant les premières traces du 3.0 (housse 3.0 créée le 29/09/2025) ; le questionnaire « 96 / 91 / 87 % » était daté de **juillet 2024**, quand la boutique de l'opérateur vendait un parfum, avant d'être redaté juillet 2025 avec les mêmes résultats ; le nombre de clients passe de « plus de 20 000 » (04/2025) à « 100 000 » (10/2025) et ne bouge plus [constaté : § 15.3].
   - **Indice fort** d'avis et de statistiques non sincères ; **risque** au regard des articles L121-4 27° et 28° et L111-7-2 du Code de la consommation. La qualification relève de la DGCCRF ou d'un juge.
3. **Une machine qui vend vraiment : 0,6 à 0,8 M€ TTC par mois (nouveau v2 ; v1 : 12 pour les volumes).** Les compteurs `inventoryQuantity` des fiches baissent à chaque vente et sont repartis de zéro à la recréation du catalogue le 19/10/2025. Relus dans 45 captures Wayback et dans les relevés du 25-26/09/2026, ils donnent : Soya 3.0 **≥ 240 oreillers par jour** du 03/08 au 26/09/2026 (461 par jour du 07 au 26/09, French Days inclus) ; Soya 2.0 **162 par jour** du 20/04 au 26/09/2026 ; 145 à 260 commandes par jour. Chiffre d'affaires estimé : **19,5 à 26 k€ TTC par jour, 0,59 à 0,79 M€ par mois**, 0,9 à 1,25 M€ au rythme de septembre, **au moins 4,0 M€ TTC** sur les 342 jours de la boutique actuelle. Le volume se fait surtout en packs (Duo à 49,45 € l'oreiller, Famille à 34,98 € depuis le 03/08/2026) ; 20 à 40 % des commandes contiennent le coussin « lombaire ». Budget publicitaire, **hypothèse** de 25 à 40 % du CA : ≈ 3 800 à 10 400 € par jour hors pic. Le trafic est acheté ou relancé (« Paid Social » 1er canal sur ordinateur) ; l'organique hors marque est quasi nul (0 requête générique sur 19) [constaté pour les compteurs ; déduit, en fourchettes, pour les montants : § 16.9, § 17.1, § 17.4, § 17.5, § 17.8, § 17.9].
4. **Deux prix pour un même oreiller, et un prix de référence qui monte.** [v1 : 2] Le Soya 3.0 vaut 139,90 € au catalogue, dans le JSON-LD, dans la recherche, sur `/collections/all` et dans la barre d'achat collante desktop ; le bloc Kaching présélectionné de la fiche le vend 69,90 € « au lieu de 139,90 € ». Le 2.0 s'affiche 119,90 € sans prix barré sur l'accueil et 59,90 € sur sa fiche. Le prix de référence n'est jamais proposé sur la fiche. [constaté : soya/products.json ; soya/cap/funnel.json ; soya/ux/search_q_oreiller.html ; soya/ux/collections_all.html] **Risque** au regard de l'article L112-1-1 (Omnibus) et de l'information sur les prix. **v2** : au printemps 2025, le 2.0 se vendait 49,90 € (barré 104,90 €) ; depuis août 2025, il est « remisé » à 59,90 € sous un prix de référence de 109,90 puis 119,90 €. Le 3.0 n'a jamais été vu à un autre prix que 69,90 € pour l'offre 1x depuis son lancement (13 captures et les relevés du 25/09), mais sa référence est passée de 119,90 € (28/10/2025) à 139,90 € (08/01/2026) : la remise affichée passe de -42 % à -50 % sans que le prix payé change [constaté : § 17.4]. Le risque L112-1-1 en sort renforcé.
5. **Compte à rebours perpétuel et calendrier de « fins » permanentes.** [v1 : 3] Le bandeau « FRENCH DAYS 🇫🇷 » est configuré `timerType: recurring`, 7 jours sur 7, `endType: never`, créé le 19/10/2025, modifié le 18/09/2026. Onze relevés concordants donnent une fin à 21:59 UTC (23:59 à Paris) ; à 22:00:05 UTC, une nouvelle session affiche 23:58:56. Les French Days officiels ont eu lieu du 7 au 14/09/2026. [constaté : soya/pdp3.html, `essentialCountdownTimerConfigs` ; soya/cap/funnel.json, funnel2.json ; https://www.rejoindrelesfrenchdays.com/] **Risque** au regard de l'article L121-4 7°. **v2** : 16 versions du thème en 17 mois, chacune avec son événement (« Soldes d'été », « Black November », « Noël », « Soldes d'hiver », « Saint-Valentin », « French Days », « Rentrée ») et presque toujours « FIN AUJOURD'HUI À 00H » ; « SOLDES D'ÉTÉ » affiché après la fin légale des soldes (15 au 31/08/2025, 03 et 24/08/2026 ; fin légale 2026 vérifiée, 2025 d'après des résultats de recherche) ; « DESTOCKAGE TOTAL » du 2.0 le 28/10/2025, alors qu'il se vend encore à 130-250 unités par jour dix mois plus tard ; le 07/09/2026, premier jour des vrais French Days, le bloc affichait « OFFRE DE RENTRÉE », et « FRENCH DAYS » est resté onze jours après leur fin [constaté : § 16.8 bis, § 17.4]. **Risques** supplémentaires : article L310-3 du Code de commerce (usage du mot « soldes »), L121-2 (fin de série annoncée).
6. **Rareté écrite en dur, stock non suivi.** [v1 : 4] « 89 % du stock déjà écoulé » (barre `width:89%`), « Dernière mise à jour : il y a quelques secondes » et « Plus que quelques exemplaires en stock » sont du HTML fixe sur la fiche 3.0 ; la fiche 2.0 affiche « 78 % ». Toutes les variantes ont `inventoryManagement: null`, `inventoryPolicy: "continue"`. [constaté : soya/pdp3.html, blocs `liquid_JrVWqc`, `liquid_JwXkcr` ; soya/web/p_oreiller-soya-2-0.html ; soya/cap/funnel.json → kaching] **Indice fort** de fausse rareté. **v2** : le 3.0 était pourtant en stock suivi, sans vente à découvert (`deny`), jusqu'au 30/06/2026 ; `inventoryManagement` valait encore `"shopify"` le 07/09/2026, puis `null` les 25 et 26/09 ; les compteurs continuent de baisser à chaque vente [constaté : § 17.2].
7. **Option payante cochée d'avance.** [v1 : 5] Les 5 lignes « +1 / +2 Housse(s) de Rechange » à 14,90 € du bloc 3.0 sont `preselected: true` ; la case est visiblement cochée au chargement. Panier par défaut : 84,80 € au lieu de 69,90 €. Même réglage sur l'oreiller enfant. [constaté : soya/pdp3.html, `kaching-bundles-deal-block-settings` ; soya/cap/slices/pdp3-m-full-00.jpg] **Risque** au regard de l'article L121-17. **v2** : au lancement du 3.0 (28/10/2025), la housse était proposée **décochée** (« Cochez pour ajouter ») ; elle est pré-cochée depuis le 08/01/2026 au plus tard. Sur 13 h 37 de relevés, 115 housses 3.0 sont parties pour 160 oreillers 3.0 (72 %, un plafond, car les housses vendues seules comptent aussi), contre 41 % en cumul. La housse ajoutée semble **Bleu par défaut** quelle que soit la couleur de l'oreiller (80 oreillers Blanc pour 15 housses Blanc ; 22 Bleu pour 44 housses Bleu ; ligne Kaching sans variante choisie) [constaté pour les compteurs et la configuration ; indice pour l'interprétation : § 17.4, § 18.7].
8. **Un après-vente qui ne tient pas ses promesses.** [v1 : 11, « Une réputation fragile et un après-vente opaque »] Trustpilot 4,3/5 (6 273 avis) mais 16 % d'une étoile : remboursements attendus 2 à 3 mois, « made in china », polyester vendu comme soie ; 4 % de réponses aux avis négatifs. La page de suivi ParcelPanel masque le transporteur et contient `"sensitive_world":"China,Aliexpress,Chinese cities"`. Une boutique miroir (soyaparisoreillerergonomique.com) reprend tout le catalogue **(corrigé v2 : c'est une copie tierce de la « grappe A », qui charge des fichiers depuis le CDN de Soya, et non une boutique de Soya ni une boutique antérieure ; § 15.9 et point 9)**. [constaté : Trustpilot ; mkt/pp.html ; soya/web/clone_*.html] **Indices** d'un modèle de revente expédiée d'Asie, sans preuve formelle. **v2, voix du client (2 434 avis lus)** : délai médian déclaré de la commande à la réception **13 jours** pour une promesse de 1 jour de traitement plus 3 à 6 jours ouvrés, express payé non tenu dans au moins 6 cas ; attente médiane de remboursement au moment de l'avis **60 jours** (44 cas, dont 15 de 90 jours ou plus) ; retour payé par le client (15 à 17,39 €) alors que la politique annonce « sans frais », et « emballage d'origine » exigé pour un oreiller livré sous vide ; au moins 7 clients remboursés seulement après un avis négatif ou un signalement ; 24 réponses Trustpilot identiques du 20/04 au 05/05/2026, puis plus rien, et aucune sur Loox ; environ 85 % des avis Trustpilot à 1-2★ parlent de logistique, de retour ou de service ; 12 à 15 % des avis Trustpilot à 1-2★ parlent de la Chine, de Temu, d'AliExpress ou de dropshipping [déduit des avis ; politiques constatées : § 19.6, § 19.8 à § 19.11].
9. **Un opérateur en série, pas une marque parisienne.** [v1 : 7, « Une identité parisienne sans substance »] « Paris » n'apparaît que dans le nom ; l'éditeur est « soya-paris.com », domicilié chez des agents enregistrés au Wyoming ; pas de CGV (`/policies/terms-of-sale` en 404), pas de droit de rétractation, pas de garantie légale ni de médiateur. [constaté : soya/pol/*.txt ; soya/pol/terms-of-sale.html] **Risques** : LCEN art. 1-1, Code de la consommation L221-5, L217-3 et suivants. **v2** : le domaine a été servi par **5 boutiques Shopify en 13 mois** (pays déclarés FR, US, FR, US, GB), reliées par les mêmes comptes Meta, Klaviyo, Snap et Google Ads ; la boutique qui a accueilli Soya en septembre 2024 vendait en juillet 2024 un « élixir aux phéromones » (FREYJA), et la boutique actuelle a porté le domaine d'une autre marque en « PARIS », MERCURE PARIS ; la « SOYA PARIS LLC » des mentions de 2025 a disparu ; aucune personne identifiée. Autour, **deux grappes de clones tiers** (Wyoming et USD ; France avec paiement hors de Shopify à 49,90 €) et deux sites qui copient les témoignages : la marque est parasitée en quelques semaines [constaté ; lien fort pour l'opérateur, tiers probables pour les clones : § 15.1, § 15.4 à § 15.10].
10. **Allégations de santé lourdes.** [v1 : 8] « Soulage les douleurs cervicales et dorsales dès la première nuit », « Amélioration prouvée », pictos « réduit l'apnée du sommeil » et « réduit le reflux gastrique », « N°1 : recommandé par les ostéopathes », « Dr. Marc R., Chiropracteur » anonymisé, « plus de 200 professionnels de santé ». [constaté : soya/cap/pdp3-d-text.txt ; soya/gallery/sheet-1.jpg] **Risque** L121-4 16° et requalification en dispositif médical. **v2** : les textes d'annonces sont **plus médicaux que le site** : « Élu Meilleur Oreiller Orthopédique 2024 », réécrit « 2025 » dans un texte identique, sans organisateur ; « Soulagement immédiat des douleurs cervicales, dorsales et épaules » ; « Conçu avec +200 praticiens de santé ». La vidéo « Avis clients » affiche des commentaires Facebook nommés qui citent des pathologies (arthrose cervicale, discopathie, métastases) : **risque** double, allégation de santé par procuration et diffusion de données de santé de tiers (RGPD art. 9) [constaté : § 16.4, § 16.5]. Environ 14 avis décrivent une douleur aggravée [constaté : § 19.7].
11. **Un produit de catalogue chinois, pas une R&D (nouveau v2).** Les traits distinctifs du Soya 3.0 (cornes, découpes latérales, point central froncé, bourrelet nervuré) se retrouvent chez un seul compte Made-in-China, Shenzhen Jintongyuan, à 6,90-10,20 $ pièce, mais en 11 / 9 cm ; le « 14,4 cm » de Soya figure sur un visuel reproduit par IA, et l'emprise de 62 × 37 cm est exactement celle d'un papillon Comfy Sleepers [indice ; constaté pour les cotes]. Coût rendu client estimé **13 à 25 €** ; marge avant publicité de l'offre 1x, TVA reversée : 22,75 à 41,85 € (point mort à un CAC de 22,8 à 41,9 €) ; l'argent se fait sur le Duo et les ajouts (housse cochée : 4,71 à 9,25 € de marge) [déduit : § 18.3, § 18.4, § 18.6]. Indices d'envoi direct depuis la Chine : ParcelPanel qui masque la Chine, avis « packaging provenance Chine », « arriver de chine », délais de 10 à 23 jours [indice : § 18.8]. Une cliente affirme que la housse « fibre de bambou » porte l'étiquette « 85 % polyester et 15 % élasthanne » [constaté pour le texte de l'avis : § 19.7]. Le Neck 01 de Somnila ne sort **pas** du même moule (§ 18.2).
12. **Le « 60 % » qui change d'objet.** [v1 : 6] La popup Klaviyo (délai 12 s) annonce « VOUS AVEZ OBTENU 60 % DE RÉDUCTION », fait passer un quiz, prend e-mail puis téléphone, et révèle au dernier écran que la remise porte sur un « Oreiller Lombaire » (en image, un coussin de genoux), proposé de toute façon à tout acheteur par une popup Kaching sans condition. Case SMS : « Oui, c'est mon vrai numéro ». [constaté : mkt/kl_v7.json ; soya/pdp3.html, `kaching-popup-v2-config`] **Indice** de promesse trompeuse ; **risque** sur le consentement SMS. **v2** : filmée image par image, la popup Kaching couvre la page ≈ 475 ms après le clic « Ajouter au panier », sans animation, et son visuel montre un coussin entre les genoux [constaté : § 20.2].
13. **Une fiche de 27,5 Mo avant tout défilement.** [v1 : 9] Sur mobile, la fiche 3.0 transfère 27,48 Mo compressés sans défilement (28,31 Mo après), dont 22,34 Mo de SVG exportés de Canva qui enveloppent des PNG ; 4 SVG d'une section située 4,9 écrans plus bas pèsent 13,4 Mo. Les 4 « stories » de 78 px lisent des originaux HEVC de 37,6 à 109,2 Mo. Au profil Slow 4G de Lighthouse : environ 2 min 17 s de transfert pur. [constaté : tech/net-pdp3-m.json ; tech/svg_compressed.txt ; soya/cap/videos.txt] 
14. **Un versionnage 1.0 / 2.0 / 3.0 de façade [déduit des constats suivants].** [v1 : 10] Trois formes différentes, fiches créées le même jour (import en masse) ; la fiche 3.0 recycle le 2.0 : comparatif « OREILLER SOYA 2.0 ✓ » dans les 4 coloris, 5 réponses de FAQ sur le « SOYA 2.0 » ; le 3.0 reste « Nouveau » près de 11 mois après ses premiers avis. Les 26 avis sur le 2.0 parmi les 40 affichés sur la fiche 3.0 s'expliquent en partie autrement : le widget Loox est en mode agrégé (`data-loox-aggregate`) sur toutes les fiches et montre le flux de la boutique entière, où le 2.0 domine ; ce chiffre n'est donc pas, à lui seul, un indice de recyclage (nuance du critique final). [constaté : soya/gallery/ ; soya/pdp3.html ; soya/products.json] **v2** : la housse « Soya 3.0 » est créée le 29/09/2025 sur l'ancienne boutique, dix jours avant la recréation du catalogue ; les deux visuels du coloris Gris (ajouté le 28/02/2026) sont des reproductions demandées à une IA (« Generate the same image exactly as the reference »), dont celui qui porte les cotes 14,4 / 9 cm [constaté : § 15.3, § 18.2 bis].
*(Le point 11 de la version 1, « Une réputation fragile et un après-vente opaque », est repris intégralement au point 8 ci-dessus.)*
15. **Ce qui marche vraiment, et qu'on peut reprendre honnêtement.** [v1 : 12] Machine d'acquisition payante complète (Meta avec conversions serveur, TikTok, Google Shopping, Klaviyo, Triple Whale) ; 4 bulles vidéo « stories » dans le bloc d'achat avant le prix ; cartes 1x / Duo / Famille lisibles ; barre d'achat collante ; vrai shooting lifestyle en haute définition. Les inventaires négatifs exposés (-51 191 sur le 2.0) suggèrent des volumes en dizaines de milliers d'unités **(v2 : mesuré, voir le point 3)**. [constaté : soya/home.html ; soya/web/p_oreiller-soya-2-0.html ; déduit pour les volumes] **v2** : un kit de quatre vidéos verticales 9:16 tournées face caméra et sous-titrées mot à mot (lancement, « Lequel choisir ? », avis, FAQ sur les vraies objections), le produit manipulé en permanence ; une offre de couple déclinée partout (« -30 % sur le 2ème ») ; une campagne Google Search sur mots-clés et des fiches Shopping gratuites ; une grammaire d'animation sobre, celle du thème Impact, mesurée à ± 10 ms près du code [constaté : § 16.5, § 16.8, § 17.9, § 20.1].

**Conclusion pour Somnila [déduit].** Même produit (oreiller à deux hauteurs) **(corrigé v2 : même catégorie et même usage, mais pas le même objet ; le Neck 01 et le Soya 3.0 ne sortent pas du même moule, § 18.2)**, même prix effectif (69,90 €), même cliente (femme d'environ 40 ans qui dort mal et achète pour le couple). Soya gagne aujourd'hui par la pression ; tout ce qu'elle simule (origine, autorité, popularité, nouveauté, urgence, remise) peut être remplacé chez Somnila par une donnée vérifiable. Somnila ne doit pas baisser son prix : elle est déjà au prix effectif de Soya, et son pack oreiller + housse (76,90 €) coûte 7,90 € de moins que le panier par défaut de Soya (84,80 €). Elle ne peut pas suivre Soya sur les packs de 4 (34,98 € l'unité).

**Ajouts de la version 2 [déduit des chapitres 15 à 19].**
1. **La demande est prouvée, à grande échelle, mais elle se fait en packs.** Au moins 4,0 M€ TTC en 342 jours ; l'essentiel des unités part en Duo ou en Famille. L'offre Duo de Somnila compte plus qu'une baisse du prix unitaire (§ 17.10).
2. **L'exécution départagera plus que la note.** Soya ne tient ni ses délais (13 jours médians déclarés), ni ses remboursements (60 jours médians d'attente), ni ses retours « sans frais ». Somnila gagne en promettant peu et en tenant tout : délai de la commande à la porte, pays de fabrication écrit, essai sans renvoi, remboursement sous 2 jours ouvrés, invitations d'avis envoyées à toutes les clientes (§ 19.14 et § 13.5).
3. **La grille de prix de Somnila doit être refaite hors TVA pour l'Europe.** build/PRIX.md et ANALYSE_PRIX.md calculent la marge sur 69,90 € TTC : à 20 % de TVA, le Neck 01 ne laisse que 2,43 € après un CAC de 25 € (et non 14,08 €), et le point mort tombe de 39,08 à 27,43 € de CAC. S'y ajoute depuis le 01/07/2026 le droit de douane européen de 3 € par catégorie d'articles sur les colis venant de Chine. Le marché principal prévu restant les États-Unis (79,99 $), ces chiffres ne valent que pour les commandes européennes (§ 18.9).
4. **La place libre est l'organique.** Aucune marque vendue par publicité sociale n'occupe les 19 requêtes génériques testées ; Soya n'a ni contenu organique sur TikTok, ni créateur identifié, ni chaîne YouTube à son nom (§ 16.12, § 17.8, § 17.10).
5. **Une marque qui réussit ici est clonée en quelques semaines**, avec des prix plus bas et des paiements détournés : protéger la marque, les domaines et les comptes sociaux avant le lancement (§ 15.15).
6. **Ne jamais attaquer Soya sur l'origine** : Somnila fait aussi fabriquer et expédier par un fournisseur chinois ; l'angle est la transparence (§ 18.9, point 8).

**Où trouver quoi.** Mesures au centimètre : accueil § 5, fiche 3.0 § 6.1, § 6.2 et § 6.8, neuf autres pages Annexe C, récapitulatif Annexe A. Animations (durées, courbes, amplitudes) : § 4.3 à § 4.6. Direction artistique : § 3. Marque : § 2. Produit : § 7.8. Prix et offres : § 6.5 et § 7. Stratégie d'ensemble : § 8.8. Marketing : § 8. Conformité : § 11. Plan d'action : § 13. Contre-vérification : Annexe D. **Partie II** : opérateur, boutiques, domaines et clones § 15 ; publicité, créations et calendrier promotionnel § 16 ; ventes, chiffre d'affaires, trafic et référencement § 17 ; fournisseur, coûts et marges § 18 ; voix du client § 19 ; animations filmées image par image § 20 ; chiffres clés Annexe A.5 ; sources Annexe B.4 à B.6 ; contre-vérification de la Partie II Annexe D.2.

---

# Partie I — Analyse au millimètre (collecte du 25/09/2026)

*Chapitres 2 à 14 de la version 1, conservés en entier. Les passages contredits par la Partie II ont été corrigés sur place et portent la mention « (corrigé v2 : … ) » ; les compléments utiles portent « v2 ». La fiche d'identité (§ 0) et la synthèse (§ 1) couvrent les deux parties ; le plan d'action (§ 13) et les limites (§ 14) aussi.*

## 2. Marque et positionnement

### 2.1 Verdict

SOYA PARIS emprunte trois choses qu'elle ne démontre pas : une **origine** (« Paris »), une **autorité** (ostéopathes, presse, « N°1 ») et une **popularité** (« 100 000 dormeurs », « 15 637 avis »). Les documents du site et les sources externes contredisent ces trois piliers ou ne permettent pas de les vérifier. [déduit]

### 2.2 Qui est derrière

| Élément | Constat | Preuve |
|---|---|---|
| Éditeur | « soya-paris.com », puis « la société SOYA PARIS » dans le même texte | [soya/pol/legal-notice.txt] |
| Siège | Casper, Wyoming, Ste 7000 ; 11 agents enregistrés au même numéro de rue dans la liste officielle au 01/09/2026, dont deux à la Ste 7000 ; Davinci vend l'adresse 100 $/mois (promotion), agent enregistré 169 $/an | https://sos.wyo.gov/Business/Docs/CRA-Roster.pdf ; https://www.davincivirtual.com/loc/us/wyoming/casper-virtual-offices/facility-1100 ; [déduit : adresse de domiciliation, pas de locaux] |
| Registre français | « SOYA PARIS » : 17 entités, aucune reliée de façon vérifiable ; SOYA GROUP FRANCE (SIREN 939636767, vente à distance, créée le 22/01/2025, Paris 9e) : lien ni établi ni exclu. Une piste « AI ECOMMERCE, 49 avenue Bosquet » n'a pas été confirmée (0 résultat) et n'est pas retenue. **v2** : SOYA GROUP FRANCE (SAS, NAF 47.91B, convention collective IDCC 0675, siège au 18 bd Montmartre depuis le 18/09/2025, aucun salarié déclaré) n'est reliée à Soya par aucun domaine, e-mail, adresse ou identifiant : **non retenue** ; aux États-Unis, « soya paris » : 0 résultat dans les données du Wyoming sur OpenCorporates (§ 15.8, § 15.11) | https://recherche-entreprises.api.gouv.fr/search?q=SOYA%20PARIS ; `reseau/registre/soya_group.json` |
| Trustpilot | Profil revendiqué en octobre 2024, abonnement payant, **localisation affichée : France**. **v2** : fiche créée le 11/10/2024 (horodatage de son identifiant), revendiquée le 24/10/2024 ; 366 avis avant avril 2025, dont 94 % à 1★ (§ 19.3) | https://www.trustpilot.com/review/soya-paris.com |
| Boutique actuelle | 17 fiches créées le 19/10/2025 entre 07:45:56 et 10:46:11 **heure de Paris** (horodatages `+02:00` de `created_at`, soit 05:45:56 à 08:46:11 UTC ; correction du critique final : une version précédente écrivait « UTC »), dont 8 en 18 s (07:45:56 → 07:46:14) ; logo horodaté `v=1760865474` (19/10/2025, 09:17:54 UTC, soit 11:17 à Paris, après les fiches) ; enfant et sa housse le 09/05/2026 (18:40 et 18:46, heure de Paris). **v2** : cette boutique (shop 93550543180) a été créée le 02/04/2025 et ne sert soya-paris.com que depuis fin octobre 2025 (au plus tard le 28/10/2025) ; c'est la **cinquième** boutique Shopify à servir le domaine (§ 15.4, § 17.2) | [soya/products.json, champ `created_at`] ; [soya/home.html] |
| Antériorité | 20 des 40 avis Loox intégrés à la fiche 3.0 sont antérieurs au 19/10/2025 (le plus ancien : 19/04/2025, Soya 2.0) ; leurs photos ont toutes été téléversées le 2025/10/19 (`images.loox.io/uploads/2025/10/19/`) | [soya/pdp3.html] [déduit : import d'avis lors d'une migration, pratique normale en soi] **(corrigé v2 : l'import ne se limite pas à la migration. 1 137 des 1 776 avis Loox sont horodatés à 00:00:00 UTC, dont 494 datés d'avant la création du domaine (01/2023 à 09/2024), et les imports continuent en septembre 2026 ; indice fort d'avis non collectés auprès de clients de la boutique, § 19.4)** |

**Incohérences juridiques [constaté, soya/pol/*.txt] :** mentions « régies par le droit français » mais tribunaux « dont dépend le siège social » (Wyoming) ; article 18 des conditions d'utilisation : lois « de 5830 E 2nd St, Ste 7000, Casper, Wyoming 82609 Us » (une adresse à la place d'un droit) ; articles 13 et 14 : « info@soya-paris.com » à la place du nom de la société ; le lien « Conditions Générales de Vente » ouvre le modèle Shopify des conditions d'utilisation ; « Mentions légales » pointe vers `/policies/contact-information`.

**Chronologie reconstituée**

| Date | Événement | Preuve |
|---|---|---|
| 24/07/2024 | **v2** : la boutique Shopify 74445094946, qui servira soya-paris.com en septembre 2024, vend FREYJA, un « élixir aux phéromones » (§ 15.6) | `reseau/wayback/freyja2_20240724.*` |
| 05/09/2024 | Création du domaine **(v2 : le même jour, il est servi par la boutique 84122730826 ; puis par 74445094946 le 21/09/2024, 88419959133 le 01/01/2025, 68045897928 de mars à octobre 2025, et 93550543180 depuis fin octobre 2025, § 15.4)** | [soya/web/rdap.json] |
| Oct. 2024 | Revendication du profil Trustpilot | Trustpilot |
| 17/02/2025 | Date des avatars de témoignages hébergés sur **une autre boutique Shopify** (`/s/files/1/0680/4589/7928/`, `v=1739804305`) **(corrigé v2 : cette « autre boutique » est l'ancienne boutique de Soya elle-même, shop 68045897928, qui servait soya-paris.com du 01/03/2025 au 12/10/2025 au moins, § 15.1)** | [soya/pdp3.html] ; `reseau/wayback/` |
| 02/04/2025 | Collection « frontpage » publiée **(v2 : date de création de la boutique actuelle 93550543180, qui attend fin octobre 2025 pour servir soya-paris.com, § 15.4)** | [soya/collections.json] |
| 19/04/2025 | Plus ancien avis Loox affiché (2.0) | [soya/pdp3.html] |
| 19/04/2025 | **v2** : fiche 2.0 avec « Plus de 20 000 clients » et les 4 témoignages « Acheteur vérifié » affichés aujourd'hui sous le 3.0 ; 2.0 vendu 49,90 € (barré 104,90 €) (§ 15.3, § 17.4) | `reseau/wayback/pdp2_20250419.html` |
| Juil. 2025 | « Questionnaire clients » des 96 / 91 / 87 % **(corrigé v2 : le même questionnaire, avec les mêmes pourcentages, était daté de « juillet 2024 » sur les accueils du 01/03 et du 08/04/2025 et sur la fiche 2.0 du 19/04/2025 ; il n'est daté de juillet 2025 qu'à partir d'octobre 2025, § 15.3)** | [soya/cap/home-d-text.txt, l. 148] ; `reseau/wayback/w_20250301121207.html` |
| 29/09/2025 | **v2** : housse « Soya 3.0 » créée sur l'ancienne boutique, première trace du 3.0 (§ 15.3) | `reseau/wayback/pdp_20251012.html` |
| 19/10/2025 | Import en masse du catalogue, création du compte à rebours (13:35 UTC) | [soya/products.json] ; [soya/pdp3.html] |
| 28/10/2025 | **v2** : soya-paris.com servi par la boutique actuelle (au plus tard) ; lancement du 3.0 à 69,90 €, « OFFRE DE LANCEMENT I FIN AUJOURD'HUI à 00H », housse non cochée (§ 17.2, § 17.4) | `ventes/wayback/p30_20251028.html` |
| 04/11/2025 | Plus ancien avis Loox du 3.0 | [soya/pdp3.html] |
| 08/11/2025 | **v2** : export des quatre vidéos « stories » du 3.0 (§ 16.5) | `pub/vid/` |
| 08/01/2026 | **v2** : housse du 3.0 pré-cochée (au plus tard) ; prix de référence du 3.0 porté à 139,90 € (§ 17.4) | `ventes/wayback/p30_20260108.html` |
| 17/02 → 20/04/2026 | **v2** : campagne Google Ads Search 22489769215 vers la fiche 2.0 (§ 16.3) | `pub/contre/wayback_extraits.txt` |
| 28/02/2026 | Coloris Gris, deux images nommées « Firefly_Gemini_Flash_Generate_the_same_image… » | [soya/products.json] |
| 09/05/2026 | Oreiller enfant | [soya/products.json] |
| 27/05/2026 | 19 produits importés dans la boutique miroir **(corrigé v2 : boutique clone tierce de la grappe A, qui copie Soya, § 15.9)** | [prix/old_products.json] |
| 10 et 18/06/2026 | Popups Kaching « lombaire -60 % » (2.0 puis 3.0) ; alertes Klaviyo de mention écartées le 18/06 à 20:04 UTC, popup 3.0 créée à 20:41 UTC | [soya/pdp3.html] ; [mkt/kl_v7.json] |
| 03/08/2026 | **v2** : pack « 3x Oreillers +1 Offert » du 3.0 (4 oreillers à 139,90 €) observé pour la première fois (§ 17.4) | `ventes/wayback/p30_20260803.html` |
| 05/08/2026 | `createTime` du profil TikTok @soya.paris | [mkt/tt2.html] |
| 11/08 → 01/09/2026 | **v2** : boutiques clones de la grappe B (soyaparisfrance.com, soyaparisfr.store) : Soya 3.0 à 49,90 €, paiement hors de Shopify (§ 15.9) | `reseau/domaines/` |
| 07–14/09/2026 | French Days officiels | https://www.rejoindrelesfrenchdays.com/ |
| 18/09/2026 | Dernière modification du compte à rebours | [soya/pdp3.html] |
| 25/09/2026 | « FRENCH DAYS » toujours affiché | [soya/cap/funnel.json] |

### 2.3 Le nom et l'usage de « Paris »

- [constaté] Sur les 13 pages capturées, « Paris » n'apparaît que dans le logo, la mention « © 2026, SOYA PARIS » et l'adresse e-mail. Aucune adresse, aucun atelier, aucun « conçu à Paris », aucun pays de fabrication (recherche « fabriqu / origine / Chine / France / made in » dans `soya/cap/*-text.txt`, `soya/catalogue.json`, `soya/web/pdp3_fulltext.txt`).
- [constaté] L'image de partage (1654 × 1654 px) retire « PARIS » : disque marine, « SOYA » en blanc [soya/web/logo_og_view.jpg].
- [constaté] La campagne en cours surligne la francité : drapeau dans le bandeau, oreillers noués de rubans bleu-blanc-rouge [soya/cap/slices/home-d-full-00.jpg].
- [constaté] Le nom est peu distinctif : 140 entités « SOYA » au registre français ; « soya paris » fait remonter le restaurant Soya Cantine Bio (SIREN 498270750).
- **[risque]** Suggérer une origine française alors que l'éditeur est domicilié aux États-Unis peut être jugé trompeur sur l'identité et l'origine (L121-2).

### 2.4 Ton, récit, promesse, valeurs

- **Structure** douleur → agitation → solution : « Combien souffrent en silence d'une posture mal alignée, de nuits agitées, de journées gâchées ? » [soya/cap/histoire-d-text.txt].
- **Registre** : superlatifs (« L'évolution ultime de notre oreiller ergonomique », « SOYA 3.0 : La nouvelle ère du sommeil », « un confort inégalé » répété sur 10 des 13 pages) ; capitales sur les visuels (« SOULAGEZ VOS DOULEURS… ») ; « dès la première nuit » 3 fois sur la fiche 3.0 FAQ comprise [soya/web/pdp3_fulltext.txt].
- **Coquilles** : « Totalement testé et approuvré » (FAQ), « Plus de 10 0 000 dormeurs » (description 2.0), « 30 NUTIS D'ESSAI » (visuel enfant), « © 2026, SOYA PARIS. © 2026 » (pied de page).
- **« Notre histoire »** : aucun fondateur, aucune date, aucun lieu, aucune photo d'équipe ; « Soya a été fondée par des passionnés du bien-être » ; mêmes mannequins que les publicités ; un seul témoignage, « Christine R., 41 ans » ; « plus de 50 000 clients satisfaits » (deux fois) contre « 100 000 » ailleurs [soya/cap/histoire-d-text.txt].
- **Valeurs déclarées** : Santé & Posture, Innovation & Technologie utile, Bien-être global, « Accessibilité sans compromis », Éthique et Durabilité. Aucune n'est illustrée par un fait (matière, usine, bilan, recyclage) [constaté].
- **Archétype [déduit]** : déclaré « Soignant » doublé d'un « Sage » d'emprunt ; exécuté comme un vendeur d'urgence. La contradiction entre le soin promis et la pression exercée est le cœur de l'incohérence de marque.

### 2.5 Cible implicite

| Signal | Preuve | Lecture |
|---|---|---|
| Onglets Douleur cervicale / Migraines / Posture / Ronflements | [soya/cap/pdp3-d-text.txt] | douleurs chroniques du quotidien |
| Couples au lit, Pack Duo, quiz « Pour moi / Pour un proche » | [soya/gallery/sheet-1.jpg] ; [mkt/kl_v7.json] | achat de couple ou cadeau |
| Pack Famille « 3x Oreillers +1 Offert », oreiller enfant 4–12 ans « avis parents » | [soya/cap/pdp3-d-buybox.txt] ; [soya/cap/enfant-d-text.txt] | foyer |
| « Christine R., 41 ans », quiz de position, mannequins femmes | [soya/cap/histoire-d-text.txt] | avatar : femme de 35 à 50 ans |

**[déduit]** L'acheteuse type est une femme d'une quarantaine d'années qui dort mal, a mal à la nuque et achète pour elle et son conjoint : exactement la cible du Neck 01.

### 2.6 Preuves d'autorité : inventaire

| Allégation | Emplacement | Preuve fournie | Vérification | Statut |
|---|---|---|---|---|
| Logos Santé magazine, ELLE, Le Figaro Santé, Forbes, Marie Claire, VOGUE | Sous le hero (desktop y 984, h 240 ; mobile y 651, h 136) | 6 balises `<a>` **sans href**, PNG 12 à 17 (400 × 100) `alt=""`, pas de titre « Vu dans » | Aucun article trouvé (recherches refaites le 25/09/2026 ; sites des médias non interrogés) | non sourcé, **[risque]** |
| « L'oreiller ergonomique N°1 » | 6 pages, galerie 03, 14, 27 | aucune | — | non sourcé |
| « Recommandé par les ostéopathes », « plus de 200 praticiens / professionnels de santé », « Développé en collaboration avec des kinésithérapeutes et ostéopathes » | accueil, fiches | aucun nom, aucune étude | seul professionnel : « Dr. Marc R., Chiropracteur », ni ostéopathe ni kinésithérapeute | contradiction interne |
| « 100 000 dormeurs » | accueil, fiches | — | 50 000 sur « Notre histoire » ; « Over 200,000 users » sur la version anglaise [mkt2/us_2-0.html] ; « Déjà adopté par **des dizaines de milliers** de dormeurs » dans la description du Soya 3.0 [soya/catalogue.json, `description_text` ; relevé du critique final] ; Loox 1 776 avis ; Trustpilot 6 273. **v2** : « Plus de 20 000 clients » sur la fiche 2.0 le 19/04/2025, « 100 000 dormeurs conquis » dès le 12/10/2025, puis plus aucun changement ; la même phrase de 100 000 sert de titre aux annonces Facebook (§ 15.3, § 16.4) | contradiction (quatre chiffres différents selon la page ou la langue) ; **v2** : chiffre d'affichage, pas un compteur [indice] |
| 96 % / 91 % / 87 % | accueil, fiche | « questionnaire envoyé à l'ensemble des clients de nos oreillers en juillet 2025 » | effectif, taux de réponse, questions non publiés ; portent sur des effets de santé ; vraisemblablement sur le 2.0 (le 3.0 n'a pas d'avis avant novembre 2025). **(corrigé v2 : jusqu'en avril 2025 au moins, le même questionnaire aux mêmes pourcentages était daté de « juillet 2024 », mois où aucune boutique d'oreillers Soya n'est observable ; § 15.3)** | invérifiable ; **v2** : **indice fort** de statistique non sincère |
| CertiPUR, OEKO-TEX, « Certification OEKO-TEX® STANDARD 100 » | visuel principal, fiche, SoyaFresh | aucun numéro de certificat | — | invérifiable |
| Témoignages « Acheteur vérifié » (Richard S., Sarah M., Barbara P., Anthony M.) | fiche 3.0 | HTML fixe (`ev_review_8Lp6Dy`), avatars hébergés sur une autre boutique **(corrigé v2 : sur l'ancienne boutique de Soya, shop 68045897928 ; section collée depuis un gabarit non identifié ; textes en ligne sur la fiche 2.0 dès le 19/04/2025, avant le 3.0 ; § 15.1, § 15.3)** | mêmes textes sur milaris.co et juvilor.com (voir § 11, ligne 8 ; renvoi corrigé en v2) ; le widget Loox ne marque « Verified » que 3 avis sur 40. **v2** : Milaris et Juvilor sont des copieurs sans identifiant commun avec Soya (§ 15.10) | **[indice]** fort |
| « Élu meilleur oreiller orthopédique » 2024 puis 2025 | titres de publications Facebook | aucun organisateur | titres seulement | [non vérifié] **(v2 : constaté par WebFetch dans les textes de plusieurs vidéos Facebook de la page 61565502837799 (variantes A, B, C et E du § 16.4) : « Élu Meilleur Oreiller Orthopédique 2024 », puis « 2025 » dans un texte par ailleurs identique ; toujours sans organisateur, § 16.4)** |

### 2.7 Le versionnage 1.0 / 2.0 / 3.0

- [constaté] Trois formes différentes : 1.0 rectangulaire gris texturé à bande centrale noire (34,90 €, barré 49,90 €) ; 2.0 « papillon » blanc matelassé (119,90 € catalogue, 59,90 € sur la fiche) ; 3.0 « nuage » à deux hauteurs et point central (139,90 € catalogue, 69,90 € sur la fiche).
- [constaté] La housse du 2.0 est décrite pour des « oreillers Soya 60 x 40 x 11/13 cm » [soya/catalogue.json] : les mêmes hauteurs que le Neck 01. Le 3.0 annonce 62 × 37 cm, hauteurs 14,4 ou 9 cm [soya/web/pdp3_fulltext.txt], alors que la housse 3.0 dit « 60 x 40 cm ».
- [constaté] Le numéro de version s'étend aux composants : « mousse intelligente 3.0 », « Encoche Orthopédique 3.0 », « ions d'argent 3.0 ».
- [déduit] Le versionnage sert trois fins : raconter une R&D jamais montrée, construire une échelle de prix (1.0 d'appel, 2.0 d'ancrage, 3.0 premium « remisé »), entretenir une nouveauté permanente.

### 2.8 Image projetée et réalité

| Pilier projeté | Réalité documentée | Écart |
|---|---|---|
| Marque parisienne | Éditeur domicilié chez des agents enregistrés au Wyoming ; boutique Shopify en GB ; Trustpilot « France ». **v2** : 5 boutiques en 13 mois (FR, US, FR, US, GB), un opérateur qui a aussi porté FREYJA et MERCURE PARIS (§ 15) | fort |
| Validation médicale | aucun praticien nommé, « Dr » anonymisé, apnée et reflux | fort |
| Reconnaissance presse | 6 logos sans lien, aucun article trouvé | fort (absence non prouvée) |
| Popularité | 50 000 / 100 000 / 200 000 clients, ou « des dizaines de milliers », selon la page ou la langue ; 15 637 affichés contre 1 776 mesurés. **v2** : 64 % des avis Loox importés ; les volumes, eux, sont réels (≥ 4 M€ TTC en 342 jours, § 17) : la popularité existe, sa mise en scène est fabriquée | fort |
| Innovation continue | contenus du 2.0 sur la fiche 3.0, « Nouveau » depuis ≈ 11 mois | fort |
| Soin et bienveillance | compteur relancé chaque nuit, rareté inventée, refus culpabilisants | fort |
| Qualité premium | Roboto générique, gabarits Canva, coquilles, 16 % d'avis 1★ | moyen |

---
## 3. Direction artistique et design system

### 3.1 Verdict

L'ossature est celle d'une marque : thème Impact peu modifié, un bleu nuit unique #042146 pour les actions et les blocs forts, Roboto, cartes grises arrondies, packshots carrés sur fond bleu nuit. De près, le système se délite couche par couche : les applications (Kaching, Countdown Timer, Klaviyo, Loox) et les blocs Liquid collés à la main réintroduisent leurs propres polices, bleus, rouges, gris, rayons et tailles. Le texte clé est prisonnier des images. [constaté/déduit]

### 3.2 Jetons du thème Impact 6.4.1 [constaté, soya/home.html l. 103-375]

| Jeton | < 700 px | ≥ 700 | ≥ 1000 | ≥ 1150 | ≥ 1400 |
|---|---|---|---|---|---|
| Marge latérale | 20 px (0,53 cm) | 32 | 48 (1,27 cm) | 48 | 48 |
| Espacement vertical des sections | 48 | 64 | 72 | 80 | **96 px (2,54 cm)** |
| Gouttière de grille | 20 | 24 | 24 | 24 | 24 |
| Hauteur des champs | 42 | 50 | – | – | – |
| Largeur max. du conteneur | 1 600 px (42,3 cm) | | | | |

Rayons : boutons 10 px, blocs et cartes 12 px, carte produit 6 px, champs 8 px, boutons ronds 48 px (flèches). Ombres en #042146 à 10 % : `sm` 0 2px 8px, `base` 0 5px 15px, `md` 0 5px 30px, `block` 0 18px 50px [soya/home.html l. 268-272].

### 3.3 Typographie

| Famille | Où | Graisses | Preuve |
|---|---|---|---|
| **Roboto** (police Shopify) | toute l'interface | 400, 500, 700 déclarées ; **600** chargée sur la fiche sans être déclarée (mention de stock) | [soya/home.html l. 49-100] ; [soya/pdp3.html l. 2517] |
| Helvetica Neue / Helvetica / Arial | encart « FRENCH DAYS JUSQU'À -60% » de la fiche | h2 28 px **800**, 16 px 700, 12 px italique | [soya/pdp3.html l. 2554-2580, style en ligne] |
| Arial | premier paragraphe de « Notre histoire » | 16 / 25,6 px, #1A1A1A | [soya/cap/histoire-d.json] |
| Arial / Helvetica Neue (police déclarée par Klaviyo) | popups Klaviyo « Le Tsunami » et « HIGH PROSPECT » | textes de 16 à 24 px ; boutons 24 px **700** | [soya-anim/klaviyo-full-forms.json ; mkt/kl_v7.json, `font_family`, `font_size`] |
| Sans-serif géométrique (non Roboto) | incrustée dans le hero et les visuels de galerie | fine (hero), capitales grasses (galerie) | [soya/cap/slices/home-d-view-0.jpg] ; [soya/gallery/sheet-1.jpg] |
| Serif à fort contraste (type didone, déduit) | **logo PNG** 2646 × 702, légende « Maintien optimal » de l'avant/après | — | [soya/home.html l. 1301] ; [soya/cap/slices/pdp3-d-full-02.jpg] |

Quatre familles visibles, dont deux n'existent qu'en pixels. Une feuille Google Fonts injectée par un script d'origine non identifiée appelle en plus Instrument Sans, Montserrat, Poppins et Roboto 100 à 900 [tech/net-pdp3-m.json].

**Échelle déclarée** (mobile / ≥ 700 / ≥ 1400 px) : h0 44/56/72 ; h1 32/40/56 ; h2 28/32/**44** ; h3 22/26/32 ; h4 18/22/28 ; texte courant 14/16/16 (interligne 1,6) ; petit 12/14/14. Titres en graisse 500, approche 0,025 em.

**Styles calculés** [soya/cap/*.json, premier élément de chaque type ; attention : `h2s` de la fiche décrit l'encart Helvetica, pas les titres de section] :

| Page | H1 | Titres de section | Remarque |
|---|---|---|---|
| Accueil | le logo (`<h1 class="header__logo">`, texte `sr-only`) | 44/500 #042146 ; messages clés en `<p class="h2">` | titre principal hors HTML |
| Fiche 3.0 desktop | « Oreiller Soya 3.0 », **32/500** #042146 | `<h2 class="h2">` à **44 px** | **H1 plus petit que les H2** ; même inversion mesurée sur enfant, soie, 1.0 |
| Fiche 3.0 mobile | 22/500 | 28 px | même inversion |
| Notre histoire | 56/500 #042146 | 44/500 **#1A1A1A** | deux couleurs de titre, texte en Arial |
| Contact | **aucun H1** | 44/500 | titre de page en h2 |
| Blog | « Ce blog est vide », 28/500 | — | — |

**Logo [constaté]** : boîte 120 × 32 px desktop (3,17 × 0,85 cm), 100 × 27 px mobile ; lettres mesurées 118 × 14 px (3,1 × 0,37 cm) [soya/cap/home-d-full.png, x 49-166, y 108-121]. Le logo pèse moins que le menu en gras de 16 px. Sa serif « luxe parisien » n'est reprise nulle part dans l'interface.

### 3.4 Couleurs

| Hex | Rôle | Preuve | Présence |
|---|---|---|---|
| **#042146** | accent, texte, boutons, bandeau, pied de page, pastilles Kaching ; aussi la pastille du coloris « Bleu » de l'oreiller | [soya/home.html l. 219-247] ; [soya/cap/funnel.json → kaching] | 12,3 % de l'accueil desktop, 20,5 % mobile |
| #FFFFFF | fond | l. 221 | 35-40 % |
| #F8F8F8 | cartes image+texte, encart FD, description | [soya/home.html l. 1720] ; [soya/pdp3.html l. 2553] | 10-18 % |
| #0F2756 | bandeau presse (second bleu nuit) | l. 1678 | 5,0 % desktop |
| #1A1A1A | titres et textes des blocs image+texte, statistiques | l. 1720, 2252 | texte |
| #4974CA | prix soldés, badges « Economisez », bordure et titres Kaching | l. 243-245 | ponctuel |
| ≈ #4F637D | prix barré des cartes (#042146 à 70 %) | theme.css `.text-subdued` | ponctuel |
| #FF4D4D | prix barrés Kaching | pixels [soya/cap/funnel-pdp-top.png] | ponctuel |
| #E53935 | « Plus que quelques exemplaires en stock » (commentaire CSS « Rouge d'urgence ») | [soya/pdp3.html l. 2515] | ponctuel |
| #D94343 (dégradé #E67C7C → #B43131) | « 89 % du stock déjà écoulé » et jauge | l. 2583-2588 | ponctuel |
| #0D67E7 / #0074E6 | « 30 nuits d'essai » / coches de description | l. 2507 | ponctuel |
| #FFD700 | étoiles : PNG icons8 (`color=FFD700`) de la ligne de note et du « Dr. Marc R. » | l. 2161-2165 | ponctuel |
| #0F283C | étoiles ★ texte, onglet actif, badge « vérifié » des témoignages collés | pdp3.html (21 occurrences) | ponctuel |
| #0F2844 / #E9EDF2 | anneaux et fond des bulles vidéo | pixels | ponctuel |
| #C8D5EF / #C3D0EA | filet « FRENCH DAYS » et lignes d'options Kaching | pixels | ponctuel |
| #228B22 | point « En stock » (17 fiches) | pixels [soya/cap/enfant-d-full.png] | ponctuel |
| #F7F7F7, #F2F4F6, #F0F0F2, #D9DEE4, #E9F1F3, #636366, #444, #555, #D0D0D0, #E1E1E1, #EAEAEA | cartes, FAQ, popup Klaviyo, gris des blocs Liquid | pixels ; [soya/pdp3.html l. 2553-2605] | ponctuel |
| #2257A7, #C04A52, #B02028 | lettrage et bouton dessinés du hero, « 30 NUITS D'ESSAI », rubans | pixels de l'image | dans l'image |
| ≈ #243346 → #112033 ; #F4F4F6 | dégradé bleu nuit et fond studio de la galerie | [soya/gallery/01.jpg, 06.jpg] | dans les images |
| #E6CB84, #D67E8C, #56578F, #7CC5D4 | zones de l'infographie « Santé & votre confort » | [soya/gallery/06.jpg] | dans les images |
| Déclarées jamais vues | #FFB74A, #803CEE, #00A341, #F83A3A | l. 230-252 | 0 |

**Lecture [constaté]** : 3 couleurs actives déclarées par le thème, **plus de 30 rendues** (cinq bleus nuit, cinq bleus, cinq rouges, une dizaine de gris à 1-2 % d'écart). Deux codes pour le prix barré (#4F637D ou #FF4D4D), trois systèmes d'étoiles (PNG icons8, ★ #0F283C, Loox). Signature d'un assemblage, pas d'une direction artistique.

**Proportions par page** (tolérance 6) : accueil desktop blanc 40,4 %, #F8F8F8 12,0 %, #042146 12,3 %, #0F2756 5,0 %, photos 28,8 % ; accueil mobile 35,6 / 17,5 / 20,5 / 2,7 / 22,4 % ; fiche desktop (0-10 752 px) 52,4 / 11,0 / 1,6 / 2,2 %, photos 20,7 % [calcul de l'analyste sur soya/cap/*-full.png].

### 3.5 Grille et formes [mesures sur captures]

| Élément | px | cm | Preuve |
|---|---|---|---|
| Blocs image+texte (accueil desktop) | image 660 + espace 25 + carte 660 × 582 | 17,5 + 0,66 + 17,5 | [soya/cap/home-d-full.png] |
| Bouton « Découvrir » | ≈ 156 × 56-60 | 4,1 × 1,5 | idem |
| Carte produit, carrousel accueil | 432 × 432, 24 d'espace, 4e carte visible sur 24 px | 11,4 | idem, y 2799-3231 |
| Carte produit, collection desktop | 318 × 318, 4 colonnes, pas vertical 472 | 8,4 | [soya/cap/col-d-full.png] |
| Carte produit, grille mobile | 171 × 171, 2 colonnes, **8 px** d'espace | 4,5 | [soya/cap/col-m-full.png] |
| Badge « Economisez » | 131 × 23, texte 12 px gras (9 px sous 700 px) | 3,47 × 0,61 | [soya/cap/home-d-full.png] ; theme.css (mesuré sur la capture en USD, « Economisez $21.00 » ; la largeur varie avec le montant affiché, la hauteur non) |
| Galerie fiche desktop | vignettes 64 (pas 80) ; image 666 × 666 ; bloc d'achat ≈ 518 de large | 1,69 / 17,6 / 13,7 | [pdpw/pdp3-measure.json] |
| Bulles vidéo | 78 de diamètre (vidéo 72) | 2,06 | [soya/cap/funnel-pdp-top.png] |
| Popup Klaviyo desktop | ≈ 950 × 580 | 25,1 × 15,3 | [soya/cap/pdp3-d-full.png] |

Ratios d'images : hero desktop 16:9 (5934 × 3338, `src` à `width=5760`), hero mobile portrait 0,71 (2720 × 3834), bannière de collection 3:2, lifestyle 3:2 (4610 × 3074, 6000 × 4000), packshots 1:1 (1200 WebP), galerie 1:1 (JPEG 1024 dans des SVG déclarés 529 × 529), logos presse 4:1.

### 3.6 Photographie et visuels

- **Shooting lifestyle réel [constaté/déduit]** : `0C5A6783.jpg` (4610 × 3074, nommage de type appareil Canon) et `SOYA-26.jpg` (6000 × 4000). Deux couples récurrents (brun barbu et femme brune, oreillers blancs ; brun et femme blonde, oreiller « nuage » bleu), lumière blanche naturelle. C'est le meilleur actif visuel de la marque.
- **Packshots en série [constaté]** : 14 produits, première image 1:1 de 1200 px nommée de 1 à 14 (« 1-oreiller-soya-2_0HD.webp »…), mur bleu nuit et drap froissé. Rendu très lisse : **indice** possible d'images générées ou retouchées [soya/cap/slices/col-d-full-01.jpg].
- **Visuels SVG de la fiche 3.0 [constaté]** : exports de type Canva (`viewBox 0 0 396.75 396.749985`, `zoomAndPan="magnify"`) enveloppant des PNG/JPEG en base64 ; deux fonds (bleu nuit dégradé, studio blanc) ; titres en capitales sur deux niveaux ; pictos au trait. **8 doublons exacts** (01=12=24, 03=14=27, 06=18=22=28, 36=37) ; l'infographie des zones pèse exactement 404 799 octets dans les 4 coloris et montre un oreiller blanc et turquoise quel que soit le coloris choisi. Le visuel « 2 HAUTEURS 1 SEUL OREILLER » n'a aucune cote.
- **Noms de fichiers** : deux images du coloris Gris s'appellent « Firefly_Gemini_Flash_Generate_the_same_image_exactly_as_the_reference._Keep_all_text_icons_layout_compo_480153_3.png » et « …_5.png » [soya/products.json] : **indice** de déclinaison générée par IA. Sur l'une d'elles, les deux hauteurs 14,4 cm / 9 cm sont illustrées par deux oreillers différents côte à côte [pdpw/raster_sheet.jpg].
- **Décors** : bannière de collection avec des **magazines en caractères chinois** sur le chevet [soya/cap/col-d-full.png, x 840-1300, y 960-1140] : **indice** de photo fournisseur ou de banque d'images ; « Dr. Marc R. » en blouse et stéthoscope, avatar de 570 934 octets affiché en 60 × 60 px.
- **Habillage French Days** : rubans tricolores, lettrage #2257A7 ; mais « -50 % » sur le hero mobile contre « -60 % » ailleurs, « ORTHOPEDIQUE » sans accent.
- **Textes alternatifs (arbitrage)** : l'analyse design affirmait « 182 images à alt vide » d'après `products.json`. Vérification faite, l'endpoint `/products.json` **n'expose pas** de champ `alt` (clés : id, created_at, position, updated_at, product_id, variant_ids, src, width, height). Le constat retenu porte sur le HTML rendu : le thème remplace l'alt manquant par le titre, « Oreiller Soya 3.0 » répété 98 fois (48 images et 48 vignettes) ; 26 photos d'avis en anglais « Customer photo review of Oreiller Soya 2.0 » ; un alt « Stabbing neck pain » ; 10 alt vides sur 38 images de l'accueil [soya/pdp3.html ; soya/home.html].

### 3.7 Défauts de design relevés

1. **Menu desktop sur deux lignes** à 1440 px sur toutes les pages (libellés de 203 et 220 px). En version USD, la fin de la première ligne (x 1082, bas des glyphes y ≈ 99) passe à environ 6-7 px au-dessus du drapeau du sélecteur (x 1075, haut y 106), avec 7 px de recouvrement horizontal : **pas de contact au pixel** (arbitrage : mesure refaite sur soya/cap/home-d-full.png ; l'analyse UX disait « se touchent »). En version France, 86 px de marge.
2. **Hero en image** : alt vide, bouton dessiné de 243 × 63 px (y 875-937) coupé au pli de 900 px, -50 % / -60 %.
3. **Quatre familles de caractères**, styles en ligne en Helvetica ou Arial.
4. **Hiérarchie inversée** (H1 32 px sous des H2 44 px), h6 de 18 px comme titre de description, `<p class="h2">`, pas de H1 sur Contact.
5. **Plus de 30 couleurs rendues** ; deux codes de prix barré ; trois systèmes d'étoiles.
6. **Format de prix « €69,90 »** au lieu de « 69,90 € » (`moneyFormat`, soya/home.html l. 403).
7. **Blocs dupliqués** : bloc « Best-Seller 2.0 » sur les 7 pages commerciales capturées, bloc « Nouveauté 3.0 » sur 6 ; presse et statistiques deux fois sur la fiche.
8. **Lisibilité mobile** : badges de 9 px, légendes du compteur de 8-10 px, petites lignes du hero à 6-7 px de hauteur de capitale.
9. **Moyens de paiement** : image fixe `soya-payments.svg` (PayPal, Amazon Pay, logo de type Afterpay) qui ne correspond pas aux 10 moyens générés par Shopify dans le pied de page (sans PayPal ni Amazon Pay) ; sur 17 fiches, l'image vient même de **getheyshape.com** (`heyshape-payments.svg`), un domaine étranger à Soya [soya/web/p_*.html, bloc `liquid_WFwcx8`] : **indice** de blocs repris d'une autre boutique.
10. **Coquilles** : « NUTIS », « ORTHOPEDIQUE », « Economisez », « A partir de », double ©, « Your Privacy Choices » en anglais, housse 3.0 « blanc, bleu et beige » alors que le gris existe.

**Points forts** : socle cohérent (grille 48/24, rayons 10/12, couleur d'action unique) ; couleur du produit égale à celle de la marque ; vrai shooting ; packshots homogènes ; bloc d'achat en cartes lisible ; habillage saisonnier décliné partout.

---

## 4. Animations et micro-interactions

### 4.1 Principe

Le thème Impact anime avec sobriété et respecte `prefers-reduced-motion` (14 tests `no-preference` et 3 `reduce` dans `theme.js`). **Tout ce qui presse vient des applications et des blocs Liquid ajoutés.** Réglages : `headingApparition: "split_fade"`, `staggerProductsApparition: true`, `showPageTransition: null` [soya/home.html, `window.themeVariables.settings`]. Motion One applique par défaut `easing: "ease"` [soya/assets/vendor.min.js].

### 4.2 Premier écran : presque immobile

- Le hero est un `slideshow-carousel` réglé `autoplay="6"`, mais avec **une seule diapositive** ; or le thème ne démarre le lecteur que si `items.length>1` : réglage inerte [soya/home.html ; soya/assets/theme.js, `EffectCarousel`].
- Seul le **compte à rebours** bouge (chiffres changés chaque seconde, sans animation). La popup Klaviyo arrive ensuite. **Arbitrage sur son délai** : la configuration dit 12 s (`DELAY 12`) ; sur la fiche desktop, elle entre par la droite sur la capture prise 6,5 s après l'événement `load`, et aucune popup n'est visible à 8 s de navigation sur `funnel-pdp-top`. Les deux sont cohérents si le minuteur Klaviyo part de l'arrivée sur la page et non de `load` [déduit : mkt/kl_v7.json ; soya/cap/slices/pdp3-d-view-6500.jpg].

### 4.3 Tableau des animations

| Déclencheur | Élément | Durée | Courbe | Rôle | Jugement |
|---|---|---|---|---|---|
| Défilement (marge -100 px) | Titres h2 `split_fade` : translateY 0,5 em → 0, opacité | 300 ms + 100 ms par ligne | ease | guider la lecture | utile |
| Défilement (marge -50 px) | Cartes produit : opacité, translateY 15 px (0,4 cm) | 350 ms, décalage 50 ms | ease | rythmer | utile |
| Défilement | Image+texte : image scale 1,05 → 1 ; texte en fondu à +300 ms | 300 / 200 ms | ease | guider | utile |
| Défilement | Bannière de collection : fondu (non conditionné au mouvement réduit) puis parallaxe scale 1,3, translateY -23,1 % → 0 | 250 ms ; liée au défilement | ease ; linéaire | décor | neutre |
| Survol (souris) | Image secondaire des cartes | 200 ms | ease-in-out | informer | utile |
| Survol | Pastille de couleur → image de variante | 150 ms | ease-in | informer | utile |
| Survol | Logos presse zoom 1,06 (liens sans href) | 1 500 ms | (.22,1,.36,1) | crédibilité | gadget |
| Survol | Liens du menu, opacité 0,7 ; boutons : aucune règle `.button:hover` | 200 / 150 ms | — | — | neutre |
| Clic « Ajouter au panier » | Texte monte de 10 px, 3 points clignotent | 150 + 350 ms | ease | confirmer | utile |
| Clic | Tiroirs panier, menu, recherche : voile 150 ms, panneau en `clip-path` | 400 ms | (.86,0,.07,1) | naviguer | utile |
| Clic | Accordéons (18 sur la fiche : 5 + 13 questions de FAQ) | 250 / 150 ms | ease | informer | utile |
| Défilement | Barre d'achat collante (thème) | 150 ms | ease-in | acheter | utile, mais **prix 139,90 € sur desktop** |
| Glisser | Curseur avant/après (`split-cursor`) | continu | — | démontrer | efficace, sert une promesse médicale |
| Clic / glisser | Témoignages à onglets (HTML collé) | 0,15-0,4 s | ease-in-out | rassurer | contenu figé |
| Chaque seconde | Compte à rebours FRENCH DAYS | 1 s | — | presser | pression artificielle |
| Aucun | Barres « 89 % » (3.0) / « 78 % » (2.0) | figées | — | presser | indice de fausse rareté |
| Chargement | Point vert « En stock » de 10 px (0,26 cm ; 8 px sous 600 px) `custom-stock-bounce` scale 1 → 1,2 (10 → 12 px), `1s infinite alternate` : aller-retour, cycle complet de 2 s, sans garde-fou mouvement réduit (17 fiches, toutes sauf 2.0 et 3.0) | 1 s par sens | ease (valeur CSS par défaut, aucune courbe déclarée) | rassurer | gadget |
| 12 s | Popup Klaviyo : `klaviyo-slideinright` (desktop) ; `klaviyo-fadein` + `klaviyo-slideindown` (mobile) | 1 000 ms ; 350 + 1 000 ms | — | capter, presser | pression |
| Clic « Ajouter au panier » | Popups Kaching (2.0 et 3.0) | 0 ms (`type: none`) | — | vendre plus | échéance quotidienne |
| Chargement | 4 stories en lecture muette forcée 10 s puis retour au début | 10 s | — | attirer | utile mais très lourd |
| Entrée dans l'écran | Vidéo de section HD 1080p, boucle, muette, poster, `preload="metadata"` | boucle 64,5 s | — | montrer | correcte mais lourde, sans pause |

Sources : [soya/assets/theme.js, theme.css] ; [soya/cap/*.json → anims, scrollAnims] ; [soya/pdp3.html, blocs `liquid_GDmj3c`, `liquid_3Gcd4r`] ; [anim/kaching-bundles.css].

**Lecture des mesures `cap/*.json` (note du critique final, pour éviter une contradiction apparente).** Le navigateur de capture rapporte `linear` pour plusieurs animations que ce tableau donne en `ease` : `js|300|linear|DIV.media-with-text__media`, `js|300|linear|IMG.`, `custom-stock-bounce|1000|linear`, `klaviyo-slideinright|1000|linear`. Ce n'est pas une contradiction : (1) les animations enchaînées par `timeline()` de Motion One portent leur courbe **par image clé** et reçoivent `linear` au niveau de l'effet ; le code le montre (`M.push(W||V.easing)` avec `V={duration:.3,…,easing:"ease"}`, puis `easing:M,offset:z`) [constaté : soya/assets/vendor.min.js] ; (2) une animation CSS applique `animation-timing-function` à chaque image clé, et l'effet rapporte aussi `linear` ; `custom-stock-bounce` est déclarée `1s infinite alternate`, sans courbe, donc `ease` par défaut [constaté : soya/web/p_oreiller-soya-1-0.html l. 1915-1931]. Les animations lancées par `animate()` (texte `.prose`, cartes produit) sont rapportées avec leur vraie courbe `ease`. Pour Klaviyo, la courbe réelle n'est pas dans les preuves : elle reste « non déclarée » ci-dessus.

### 4.3 bis Mouvements complémentaires (relevé du critique final dans le code)

| Déclencheur | Élément | Durée | Courbe | Amplitude (px / cm) | Preuve |
|---|---|---|---|---|---|
| Survol (souris) | Bouton d'achat rapide des cartes produit | 200 ms | — | translateY 5 px (0,13 cm) → 0 | [sections/motion.md § 4, d'après theme.css] |
| Clic « Ajouter au panier » | 3 points de chargement | 350 ms par sens, en boucle aller-retour tant que la requête dure | ease (défaut Motion One) | opacité 1 → 0,1 ; décalage de 117 ms entre points (0,35 / 3) | [soya/assets/theme.js : `{opacity:[1,.1]},{duration:.35,delay:stagger(.35/3),direction:"alternate",repeat:1/0}`] |
| Clic « Ajouter au panier » | Libellé du bouton | 150 ms | ease | monte de 10 px (0,26 cm) et s'efface | [soya/assets/theme.js] |
| Recherche | Squelettes de chargement | 2,5 s en boucle | cubic-bezier(.4,0,.6,1) | opacité 1 → 0,5 → 1 | [soya/assets/theme.css, `.skeleton`, `@keyframes pulse{50%{opacity:.5}}`] |
| Clic | Sens d'arrivée des tiroirs : panier par la droite (desktop) ou par le bas (< 700 px), menu mobile par la gauche, recherche par le haut en mobile | 150 + 400 + 150 ms | (.86,0,.07,1) | révélation par `clip-path` | [soya/assets/theme.js ; sections/motion.md § 5] |
| Mouvement réduit | Tiroirs | 200 ms | — | fondu seul | idem |
| Changement de diapositive du héros (**jamais déclenché**, une seule diapositive) | `fade_with_text` : diapositive sortante 300 ms ease-in ; image entrante scale 1,05 → 1 en 300 ms ease-out ; sous-titre et bouton 300 ms | 300 ms | ease-in / ease-out | zoom de 5 % | [soya/assets/theme.js, `_fadeWithText` ; soya/home.html, `transition="fade_with_text"`, `autoplay="6"`] |
| Parallaxe de la bannière de collection | `parallax="0.3"` : scale 1,3, translateY -23,1 % → 0 | liée au défilement (mesurée « 1 000 ms linear », durée normalisée de Motion One pour une animation pilotée par le défilement) | linéaire | le déplacement de 23,1 % s'applique sous l'échelle 1,3 : course visible ≈ 30 % de la hauteur, soit ≈ 288 px (7,6 cm) pour la bannière desktop de 960 px et ≈ 78 px (2,1 cm) pour la bannière mobile de 260 px [déduit du code : `translate = parallax×100/(1+parallax)`] | [anim/col.html, `<image-banner … parallax="0.3">` ; soya/cap/col-d.json → anims] |
| Clic sur un onglet de témoignages | Onglets et cartes (HTML collé) | 0,15 s (`all`) ; cartes 0,4 s ; glissement mobile 0,3 s | ease-in-out ; ease en mobile | `translateX` au doigt en mobile | [soya/pdp3.html, `custom_liquid_rMBeUk` ; sections/motion.md § 5] |
| Clic sur une bulle « story » | Fenêtre vidéo | 0 ms (`display:flex`) | — | sans Échap ni gestion du focus | [soya/pdp3.html, `liquid_GDmj3c`] |
| Lecture de la vidéo de section | Passage du poster à la vidéo | 200 ms | ease-in-out | opacité | [soya/assets/theme.css, `video-media>:is(video,iframe,img,svg){transition:opacity .2s ease-in-out,…}` ; soya/cap/pdp3-d.json → `opacity|200|ease-in-out|VIDEO`] |
| Changement d'offre Kaching (1x / Duo / Famille) | Cartes d'offre | 0 ms | — | aucune transition | [anim/kaching-bundles.css ; sections/motion.md § 9] |
| Chargées mais **désactivées** (Kaching) | Cadeau progressif / badge de carte à gratter / indice de grattage | 600 ms / 300 ms / 2,8 s en boucle | ease-out / (.34,1.56,.64,1) à rebond / — | montée de 32 px (0,85 cm) pour le cadeau | [anim/kaching-bundles.css ; soya/cap/pdp3-d.json → `kf` : `kaching-progressive-gift-unlock`, `kaching-scratch-off-badge-pop`, `kaching-scratch-off-hint-draw`] |
| Formulaire Klaviyo « HIGH PROSPECT » (segment ciblé, non vu à l'écran) | Minuteur de 13 min | 13 min, relancé à chaque affichage | animation « pulse » | — | [mkt/kl_v7.json] |

**Géométrie des popups [constaté : soya-anim/klaviyo-full-forms.json ; mkt/kl_v7.json ; soya/pdp3.html, `kaching-popup-v2-config`]** :
- *Klaviyo « Le Tsunami »* (FLYOUT, `BOTTOM_RIGHT`) : largeur maximale 950 px (25,1 cm), hauteur minimale 540 px (14,3 cm), marges 20 px (0,53 cm), rayon 6 px, fond #F0F0F2, ombre floue de 30 px en rgba(0,0,0,.82), croix de 35 px (0,93 cm) en #042146 d'un trait de 1 px ; voile mobile rgba(20,20,20,.75). Boutons du quiz « Pour moi » / « Pour un proche » : Arial 24 px gras, fond #042146, rayon 6 px, **70 px de haut (1,85 cm)** ; tailles de texte de 16 à 24 px, liens #0066CC, champs #122234. Dernière modification : `update_timestamp` 1790232934, soit le **24/09/2026 à 06:55:34 UTC**.
- *Klaviyo « HIGH PROSPECT »* (POPUP) : largeur 450 px (11,9 cm), bouton « UTILISER MON CODE PROMO » de 54 px (1,43 cm), rayon 4 px, Arial 24 px gras ; modifié le 28/04/2026 (`update_timestamp` 1777379040).
- *Kaching (après ajout au panier)* : fenêtre de 400 px (10,6 cm) de large, coins de 30 px (0,79 cm), voile #000000b3 (noir à 70 %), entrée et sortie `none`.

### 4.4 Détails qui comptent

- **En-tête non collant** (`--sticky-header-enabled:0`), bandeau non collant et non fermable (`stickyBar: false`, `closeButton: false`) : au défilement, l'accès au panier disparaît [soya/home.html].
- **Zoom de galerie désactivé** : `allow-zoom` absent de `pdp3.html` ; sur Safari iOS, `MediaCarousel` annule le pincement pour ouvrir ce zoom absent [déduit du code, non testé sur appareil] ; viewport `maximum-scale=1.0`.
- **Animations Kaching chargées mais désactivées** : minuteur, carte à gratter, cadeaux progressifs, alerte de stock bas (`timerEnabled`, `scratchOffEnabled`, `progressiveGiftsEnabled`, `lowStockAlertEnabled` à false) : code chargé pour rien [anim/kaching-bundles-block.js].
- **WCAG 2.2.2** (« Pause, Stop, Hide ») : ni la pastille en boucle, ni le compteur, ni la vidéo de section n'offrent de pause.

### 4.5 Chronologie du premier écran, page par page (t = 0 puis t = 6,5 s) [constaté : soya/cap/slices/*-view-0.jpg et *-view-6500.jpg ; sections/motion.md § 2]

| Page | Compteur à t = 0 | Compteur à t = 6,5 s | Ce qui a bougé entre les deux |
|---|---|---|---|
| Accueil desktop | 00:40:33 | 00:40:25 | seuls les chiffres du compteur ; héros fixe (une diapositive) |
| Accueil mobile | 00:40:06 | 00:39:59 | compteur ; logos presse fixes (défilables au doigt) |
| Fiche 3.0 desktop | 00:01:32 | 00:01:25 | compteur ; **la popup Klaviyo entre par la droite**, bord visible vers x ≈ 1 365 px (36,1 cm) sur `pdp3-d-view-6500.jpg` (vérifié par le critique final) |
| Fiche 3.0 mobile | 00:01:02 | 00:00:55 | compteur |
| Fiche enfant desktop | 00:29:57 | 00:29:50 | compteur ; pastille « En stock » qui pulse, sous le pli |
| Couette mobile | 00:29:18 | 00:29:11 | compteur ; pastille qui pulse |

Lecture [déduit] : pendant les 6 premières secondes, le seul mouvement commun à toutes les pages est le compte à rebours. Le thème ne fait rien bouger au-dessus du pli ; la « vie » du premier écran est entièrement confiée à l'urgence.

### 4.6 Animations présentes par page [constaté : soya/cap/<page>.json → `info.kf`, `anims`, `scrollAnims`, `loadMs`, `reqCount`, `info.nodes`]

| Page | Chargement brut (ms) | Requêtes | Nœuds DOM | Familles de `@keyframes` chargées | Actives au chargement | Déclenchées au défilement |
|---|---|---|---|---|---|---|
| Accueil desktop | 2 838 | 357 | 1 772 | 6 de Shopify (`shopify-rotator`, `shopify-dash`, `acceleratedCheckoutLoadingSkeleton`, `pulse`, `translateFull`, `ping`) | aucune | `.prose` 200 ms, image+texte 300 ms, cartes 350 ms |
| Accueil mobile | 2 676 | 341 | 1 775 | idem | aucune | idem |
| Collection desktop / mobile | 3 293 / 2 745 | 424 / 361 | 1 906 / 1 852 | Shopify + 18 Klaviyo (`klaviyo-fadein`, `-slideinright`, `-slideindown`, `-heartbeat`, `-flash`…) + 8 noms hachés `go…` (bibliothèque CSS-in-JS d'une application, non identifiée) | parallaxe de la bannière (`PICTURE`, 1 000 ms normalisées) | idem accueil |
| Fiche 3.0 desktop | 7 757 | 506 | 2 918 | Shopify + 3 Kaching + Klaviyo + `go…` | `klaviyo-slideinright` 1 000 ms | + barre collante 150 ms ease-in (opacité, visibilité) ; vidéo 200 ms ease-in-out |
| Fiche 3.0 mobile | 7 538 | 474 | 2 919 | idem | — | `klaviyo-fadein` 350 ms, `klaviyo-slideindown` 1 000 ms ; barre collante 150 ms ease-in (opacité, **transform**, visibilité) ; vidéo 200 ms |
| Fiche enfant desktop | 3 369 | 436 | 2 331 | Shopify + 3 Kaching + Klaviyo + `custom-stock-bounce` | `custom-stock-bounce` en boucle | + `klaviyo-slideinright` |
| Draps en soie desktop | 3 296 | 440 | 2 132 | Shopify + Klaviyo + `custom-stock-bounce` | `custom-stock-bounce` | + `klaviyo-slideinright` |
| Oreiller 1.0 desktop | 3 132 | 414 | 2 051 | idem soie | `custom-stock-bounce` | + `klaviyo-slideinright` |
| Couette mobile | 2 979 | 422 | 2 116 | idem soie | `custom-stock-bounce` | `klaviyo-fadein` 350 ms + `klaviyo-slideindown` 1 000 ms |
| Notre histoire | 2 997 | 326 | 1 096 | 6 de Shopify | aucune | aucune |
| Blog | 2 492 | 311 | 1 026 | 6 de Shopify | aucune | aucune |
| Contact | 2 573 | 313 | 1 046 | 6 de Shopify | aucune | aucune |

Réserves : `loadMs` est la valeur brute de l'outil de capture (relais réseau, cache désactivé) et n'est pas comparable au vécu d'un visiteur ; elle n'est citée que pour l'ordre relatif des pages (la fiche 3.0 met environ 2,5 fois plus longtemps que les autres). L'absence des images clés Klaviyo sur l'accueil et sur les pages éditoriales signifie seulement que le formulaire n'était pas encore chargé au moment du relevé, pas qu'il n'y est pas affiché (le texte « Non merci, je n'aime pas les remises » figure dans `home-d-text.txt` et `histoire-d-text.txt`, comme dans 8 autres relevés de texte ; il est absent de `blog-d`, `contact-d` et `home-m` [constaté : grep sur soya/cap/*-text.txt]).

**Pour Somnila [déduit]** : reprendre la grammaire d'Impact (200-350 ms, ease, 15 px, décalages 50-100 ms, mouvement réduit respecté, vidéos comprises), les retours d'action (points de chargement, tiroir panier, accordéons), l'image secondaire au survol (Neck 01 de profil pour montrer 13 / 11 cm), le zoom de galerie sur de vraies photos ; écarter tout le reste.

---
## 5. Page d'accueil, section par section

### 5.1 Desktop 1440 × 900 [soya/cap/home-d.json, `info.secs` ; soya/cap/slices/home-d-*.jpg ; capture en USD]

| # | Section | y (px) | h (px) | y (cm) | h (cm) | Fond | Contenu |
|---|---|---|---|---|---|---|---|
| 0 | Bandeau compte à rebours (application) | 0 | 58 | 0 | 1,53 | #042146 | « FRENCH DAYS 🇫🇷 », « Jusqu'à -60% sur tout le site ! », HH:MM:SS ; tailles configurées : titre 18 px, sous-titre 14 px, chiffres 20 px, légendes 10 px, texte blanc, style `line-centered`, sans bouton ni croix [constaté : soya/pdp3.html, `essentialCountdownTimerConfigs` → `style`] |
| 1 | En-tête | 58 | 115 | 1,53 | 3,04 | #FFF | logo (x 49), menu de 6 liens sur 2 lignes (y 88-102 et 130-141), devise, recherche, compte, panier |
| 2 | Hero, 1 visuel | 174 | 810 | 4,60 | 21,43 | image | « OFFRE SPÉCIALE / FRENCH DAYS / 30 NUITS D'ESSAI » incrustés (capitales de 95 px), 3 oreillers à rubans, bouton dessiné 243 × 63 **coupé au pli** ; tout le visuel est un lien vers `/products/oreiller-soya-3-0` |
| 3 | Bandeau presse | 984 | 240 | 26,03 | 6,35 | #0F2756 | 6 logos blancs sans lien, décalés à gauche (89 contre 279 px de marge) |
| 4 | « Nouveauté : SOYA 3.0 est arrivé » | 1 224 | 774 | 32,38 | 20,48 | blanc + carte #F8F8F8 | photo couple + oreiller bleu (660 px), carte : surtitre 16/700, titre 44 #1A1A1A, 2 paragraphes, « Découvrir » |
| 5 | « Découvrez notre Best-Seller : L'Oreiller Soya 2.0 » | 1 998 | 704 | 52,86 | 18,62 | idem | disposition inversée |
| 6 | « Nos best sellers » (carrousel) | 2 702 | 818 | 71,48 | 21,64 | #FFF | 14 produits, cartes 432 px (11,4 cm), « + Ajouter » ; Soya 2.0 à 119,90 € sans prix barré (prix lu dans `soya/home.html`, servi en EUR : `Shopify.currency = {"active":"EUR"}` ; la capture américaine affiche « $140.00 », à ne pas lire comme un prix en euros) ; **Soya 3.0 absent** |
| 7 | Statistiques 96 / 91 / 87 % | 3 520 | 501 | 93,12 | 13,25 | #FFF | titre centré 3 lignes, mention « questionnaire… juillet 2025 », chiffres en 56 px |
| 8 | Réassurance | 4 021 | 168 | 106,38 | 4,44 | #FFF | Livraison gratuite / Garantie 30 jours / Service client 7j/7 / Paiements 100 % sécurisés |
| 9 | Pied de page | 4 189 | 541 | 110,82 | 14,31 | #042146 | newsletter, « Qui sommes-nous ? », « Nos politiques », 10 icônes de paiement, « © 2026, SOYA PARIS. © 2026 » |

Longueur : 4 730 px (125,1 cm, 5,3 écrans). Premier écran : bandeau + en-tête = 173 px, soit **19,2 %** de la hauteur ; le hero occupe le reste ; aucun texte HTML commercial hors bandeau.

### 5.2 Mobile 390 × 844 [soya/cap/home-m.json]

| # | Section | y | h | y (cm) | h (cm) | Contenu |
|---|---|---|---|---|---|---|
| 0 | Bandeau | 0 | 50 | 0 | 1,32 | compteur, légendes 10 px (« Heures / Mins / Secs » à 8 px) |
| 1 | En-tête | 50 | 51 | 1,32 | 1,35 | burger + loupe à gauche, logo 100 × 27 centré, panier à droite |
| 2 | Hero | 101 | 550 | 2,67 | 14,55 | visuel portrait **« -50 % »**, bouton dessiné « -50 % SUR TOUT LE SITE », petites lignes de 6-7 px de capitale |
| 3 | Presse | 651 | 136 | 17,22 | 3,60 | 3 logos visibles, le 3e coupé |
| 4 | Bloc 3.0 | 787 | 842 | 20,82 | 22,28 | photo 350 × 233, carte grise de 492 px |
| 5 | Bloc 2.0 | 1 628 | 796 | 43,07 | 21,06 | idem |
| 6 | Best sellers | 2 424 | 553 | 64,13 | 14,63 | 1 carte de 289 px + 61 px de la suivante ; **premier prix de la page ici** |
| 7 | Statistiques | 2 977 | 666 | 78,76 | 17,62 | empilées |
| 8 | Réassurance | 3 643 | 152 | 96,38 | 4,02 | carrousel à 1 élément sur 4 |
| 9 | Pied de page | 3 795 | 995 | 100,40 | 26,32 | 20,8 % de la page |

Longueur : 4 790 px (126,7 cm, 5,7 écrans de 844 px). Premier écran : bandeau, en-tête, hero, tout le bandeau presse et 57 px du bloc 3.0. **Le message commercial est entièrement dans l'image.** [constaté]

Les neuf autres pages capturées (collection desktop et mobile, fiches enfant, soie, 1.0, couette, « Notre histoire », blog, contact) sont relevées section par section, en px et en cm, en **Annexe C**. La fiche 3.0 l'est au § 6.8.

---

## 6. Fiche produit Oreiller Soya 3.0 au millimètre

URL : https://soya-paris.com/products/oreiller-soya-3-0. Mesures DOM en EUR du 25/09/2026 vers 22:31 UTC [pdpw/pdp3-measure.json] et captures [soya/cap/pdp3-d.json, pdp3-m.json]. Les deux sessions diffèrent (popup, polices, ordre de chargement) : hauteur totale 17 767 contre 17 796 px en desktop (29 px), 19 011 contre 19 179 px en mobile (168 px) ; dans le premier écran mobile, jusqu'à ≈ 30 px (prix à 1 159 px dans le DOM, 1 185-1 191 px sur la capture ; bouton à 1 782 contre 1 805 px). Les écarts sont donnés en fourchette. La session DOM compte aussi 60 médias et 60 vignettes dans la galerie (12 visibles), contre 48 `data-media-id` dans `soya/pdp3.html` : le décompte de 48 du § 6.4 porte sur le HTML brut, l'écart n'a pas été élucidé [constaté : pdpw/pdp3-measure.json → `mediaTotal`, `thumbTotal`].

### 6.1 Premier écran desktop (1440 × 900), de haut en bas

| # | Élément | Position (px) | Position (cm, 96 dpi) | Style | Preuve |
|---|---|---|---|---|---|
| 1 | Bandeau FRENCH DAYS + compteur | y 0-58 | 0-1,53 | #042146 | `ann` |
| 2 | En-tête, menu sur 2 lignes, « EUR € » | y 58-173 | 1,53-4,58 | Roboto 16 | `header` |
| 3 | Vignettes | x 48, 64 × 70, pas de 80 px, 12 visibles | x 1,27 ; 1,69 × 1,85, pas 2,12 | soulignée si active | `thumb0` |
| 4 | Image principale : packshot blanc sur bleu nuit, pastilles CertiPUR / OEKO-TEX / « 30 nuits d'essai » | x 160-826, y 222-888, 666 × 666 | x 4,23-21,85 ; y 5,87-23,49 ; 17,62 × 17,62 | coins arrondis | `firstMedia` |
| 5 | Étoiles + « **Noté 4,8/5** – 15 637 avis clients » | y 225 (bloc 75 × 19) | 5,95 | 16 px gras #042146 ; 5 PNG icons8 de 14 px | [soya/pdp3.html l. 2159-2170] |
| 6 | Surtitre « L'ÉVOLUTION DU CONFORT — L'OREILLER ORTHOPÉDIQUE CONÇU AVEC DES PRATICIENS » | y 252-297 | 6,67-7,86 | 14 px capitales #636366 | `eyebrow` |
| 7 | H1 « Oreiller Soya 3.0 » | y 313-351 | 8,28-9,29 | Roboto 500, 32 px, #042146 | `h1` |
| 8 | 4 puces | y 375-507, pas 36 px | 9,92-13,41, pas 0,95 | 15 px #1A1A1A | `bullet1/4` |
| 9 | 4 bulles vidéo : Concept / Lequel choisir ? / Avis clients / FAQ | y 539-657 ; x 943, 1 040, 1 147, 1 245 | 14,26-17,38 ; cercles de 2,06 | cercles 78 px, anneau #0F2844 de 3 px | `stories` |
| 10 | Filet « FRENCH DAYS \| JUSQU'À -60% » | y 706-726 | 18,68-19,21 | 14 px gras, trait #C8D5EF | `divider` |
| 11 | Carte « 1x Oreiller — Livraison rapide offerte » €69,90 / ~~€139,90~~, menu Couleur | y 735 → ≈ 934 ; prix y 758 (x 1 323) | 19,44-24,71 ; prix 20,05 | prix 16 px gras #4974CA ; barré 12 px #FF4D4D ; bordure 2 px #4974CA, rayon 13 | `bars`, `price1` |
| — | **Pli à 900 px** | | **23,81** | | |
| 12 | « +1 Housse de Rechange » **cochée**, menu Bleu, €14,90 / ~~€39,90~~ | ≈ y 884-934 | 23,39-24,71 | fond #4974CA à 30 % | [soya/cap/slices/pdp3-d-full-00.jpg] |
| 13 | Pack Duo (2 lignes « +1 Housse ») | y 944-1 133 | 24,97-29,97 | badge marine 71 × 24 (1,88 × 0,63) | `bars` |
| 14 | Pack Famille « 3x Oreillers +1 Offert » (2 lignes « +2 Housses ») | y 1 143-1 332 | 30,24-35,24 | badge « Pack Famille » | `bars` |
| 15 | **Ajouter au panier** | **y 1 347-1 407**, 518 × 60 | **35,63-37,22**, 13,70 × 1,59 | #042146, rayon 10, 16 px gras blanc | `atc` |
| 16 | « Plus que quelques exemplaires en stock » | y 1 439 | 38,07 | 14 px 600 #E53935 | `stock` |
| 17 | « 30 nuits d'essai — Satisfait ou remboursé » | y 1 465 | 38,76 | 14 px #0D67E7 | `trial` |
| 18 | Image fixe des moyens de paiement `soya-payments.svg` | y 1 501-1 539 | 39,71-40,71 | 9 logos | `pay` |
| 19 | Encadré « FRENCH DAYS JUSQU'À -60% / La meilleure offre de l'année », jauge 89 % | titre y 1 585, barre y 1 688 (492 × 22) | 41,93 ; 44,66 (13,0 × 0,58) | Helvetica Neue 28 px 800, #D94343 | `fdTitle`, `stock89` |
| 20 | Encadré « SOYA 3.0 — L'évolution de vos nuits, validée par les experts » + 4 arguments | y 1 816-2 461 | 48,04-65,11 | #F8F8F8, titre h6 18 px | `descBox` |
| 21 | Témoignage « Dr. Marc R., Chiropracteur » + « Recommandé par plus de 200 professionnels de santé » | nom y 2 576 | 68,15 | photo ronde 60 px (1,59) | `doctor` |
| 22 | 5 accordéons (Matériaux & dimensions, Durabilité, Lavage, Livraison & retours, Garantie 30 nuits) | y 2 671-3 003, 66 px chacun | 70,66-79,44, 1,75 chacun | capitales | `acc` |
| 23 | « Complétez pour un confort ultime ! » : housse 3.0 à 17,90 € (~~39,90~~), coussin lombaire 49,90 € | dès y 3 028 | 80,11 | « + Ajouter » | `compl` |

Colonne d'achat : x 874-1 392 (518 px, 13,7 cm), de y 222 à 3 297 (3 075 px, 81,3 cm) ; colonne galerie : x 48-826 [constaté : pdpw/pdp3-measure.json → `info`, `thumbList`, `firstMedia`].

**Constat** : au premier écran desktop, l'offre 1x et son prix sont visibles ; le bouton est **447 px (11,8 cm) sous le pli**. Une fois en place, la popup Klaviyo (≈ 950 × 580, x ≈ 470-1 420) masque les deux tiers droits de l'écran, bloc de prix compris [soya/cap/slices/pdp3-d-full-00.jpg]. Sur la capture pleine page, la colonne de la galerie reste vide d'environ 905 à 3 373 px (≈ 2 470 px, 65 cm) pendant que le bloc d'achat s'étire [soya/cap/pdp3-d-full.png].

### 6.2 Premier écran mobile (390 × 844)

| # | Élément | Position (px) | Position (cm) |
|---|---|---|---|
| 1-2 | Bandeau / en-tête | y 0-50 / 50-101 | 0-1,32 / 1,32-2,67 |
| 3 | Image 390 × 390 | y 101-491 | 2,67-12,99 (10,32 × 10,32) |
| 4 | Vignettes 56 × 62, pas 64 (5 entières + 1 coupée) | y 511-573 | 13,52-15,16 (1,48 × 1,64) |
| 5-7 | Note (14 px gras) / surtitre 2 lignes / H1 22 px | y 596 / 620-665 / 673-699 | 15,77 / 16,40-17,59 / 17,80-18,49 |
| 8 | Puces 1 et 2 (14 px, 45 px de haut chacune) ; puce 3 coupée par le **pli à 844** | y 723 → | 19,13 → ; pli **22,33** |
| 9-11 | Puce 4 / stories / filet French Days | y 871-916 / 948-1 066 / 1 106 | 23,04-24,23 / 25,08-28,20 / 29,26 |
| 12 | Offres : 1x ≈ 1 136-1 369, Duo 1 379-1 568, Famille 1 578-1 767 ; **prix 69,90 € à y 1 159** (DOM) à ≈ 1 185-1 191 (captures) ; case housse cochée ≈ 1 307-1 390 | voir colonne | 1x 30,05-36,22 ; Duo 36,48-41,48 ; Famille 41,75-46,75 ; **prix 30,66** ; housse 34,58-36,77 |
| 13 | **Bouton** 350 × 54, 14 px : y 1 782-1 836 (DOM) / 1 805-1 858 (capture) | voir colonne | **47,14-48,57** (DOM) / 47,75-49,15 ; 9,26 × 1,43 |
| 14 | Stock 1 861, essai 1 887, paiement 1 923-1 948, encadré 89 % (titre 2 028, barre 2 151), description 2 279-3 171, Dr 3 321, accordéons 3 412-3 736 (64 px chacun), compléments 3 761 | voir colonne | 49,23 ; 49,92 ; 50,87-51,53 ; 53,65 / 56,90 ; 60,29-83,89 ; 87,86 ; 90,26-98,84 ; 99,50 |

[pdpw/pdp3-measure.json, mobile ; soya/cap/pdp3-m.json]. **Constat** : ni prix ni bouton au premier écran ; prix à 1,37 écran, bouton à 2,1 écrans. La popup Klaviyo mobile occupe ≈ 476 px en bas (56 % de l'écran) avec un voile sur le reste [soya/cap/slices/pdp3-m-full-00.jpg].

### 6.3 Barre d'achat collante

Barre du thème (`product-quick-add`) ; celle de Kaching est désactivée (`stickyAtcEnabled: false`).
- **Desktop** : carte de 560 × 114 px, x 864, à 16 px du bas ; masquée à scrollY 1 200, visible à 1 500 ; miniature, titre, **€139,90**, bouton [pdpw/pdp3-sticky.json ; pdpw/pdp3-d-sticky.png]. Prix catalogue face aux 69,90 € de l'offre, parce que Kaching est réglé `updateNativePrice: false`. Même écart sur la fiche enfant : 99,90 € dans la barre, 49,90 € dans l'offre [pdpw/others.json].
- **Mobile** : bande 390 × 88 px, visible dès scrollY 2 100, bouton seul **sans prix**.
- Le prix facturé depuis cette barre est inconnu (panier non observé).

### 6.4 Galerie

**Composition [constaté, soya/pdp3.html → `product-gallery`]** : 48 médias (33 SVG, 15 PNG/JPG), filtrés par coloris, 12 visibles par coloris. SVG par coloris : Blanc 11, Bleu 11, Beige 10, Gris 1.

| Rang | Visuel (coloris Blanc) | Texte incrusté |
|---|---|---|
| 1 | 18.png, packshot sur bleu nuit + 3 pastilles | pastilles seulement |
| 2 | 21.svg : 4 pictos « soulage le cou et le dos », **« réduit l'apnée du sommeil »**, **« réduit le reflux gastrique »**, « soulage les épaules » | « SOULAGEZ VOS DOULEURS ET RETROUVEZ UN SOMMEIL RÉPARATEUR » |
| 3 | 20.svg : zones cervicale, tête, épaules, bras | « PENSÉ POUR VOTRE SANTÉ & VOTRE CONFORT » |
| 4 | 22.svg : main qui presse la mousse | « UN ÉQUILIBRE PARFAIT ENTRE MAINTIEN ET CONFORT » |
| 5 | 23.svg : housse pincée | « FRAÎCHEUR ET BIEN-ÊTRE CHAQUE NUIT » |
| 6 | 24.svg : entretien en 4 étapes | « CONÇU POUR DURER, NETTOYAGE & ENTRETIEN SIMPLIFIÉS » |
| 7 | 25.1.svg (1,11 Mo) : « OREILLER CLASSIQUE ✕ / **OREILLER SOYA 2.0** ✓ » | « UN ALIGNEMENT NATUREL POUR VOTRE COLONNE VERTÉBRALE » |
| 8 | 26.svg : couple, flèches de hauteur **sans chiffre** | « 2 HAUTEURS 1 SEUL OREILLER » |
| 9 | 27.svg : ventre / dos / côté | « UN MAINTIEN PARFAIT DANS TOUTES LES POSITIONS » |
| 10 | 28.svg : couple endormi | « L'OREILLER ERGONOMIQUE N°1 : RECOMMANDÉ PAR LES OSTÉOPATHES » |
| 11 | 29.svg : femme blonde enlaçant l'oreiller | « LE CONFORT RÉINVENTÉ POUR VOUS » |
| 12 | 19.svg : packshot seul | aucun |

Le comparatif « SOYA 2.0 » est présent dans les 4 coloris (25.1.svg, 9.1.svg, IMG_9178.png, 41.1.png) [soya/gallery/sheet-1.jpg, sheet-3.jpg ; pdpw/raster_sheet.jpg]. Seules cotes chiffrées : 62 × 37 cm et 14,4 / 9 cm, sur deux visuels du coloris Gris, dont un fichier « Firefly_Gemini_Flash… ». Vérification du critique final sur `soya/gallery/sheet-1.jpg` (visuels 01 et 12) : le message « UNE INNOVATION : 2 HAUTEURS 1 SEUL OREILLER, POUR UN CONFORT SUR MESURE » est illustré par **deux oreillers distincts**, un bleu sous un homme et un blanc sous une femme, avec une flèche verticale sans chiffre sur chacun [constaté]. L'image ne montre donc pas un même oreiller retourné ; elle laisse lire deux hauteurs comme deux produits [déduit].

**Poids des SVG** [soya/svg_sizes.txt ; tech/svg_compressed.txt] :

| Ensemble | Fichiers | Décodé | Brotli |
|---|---|---|---|
| Galerie (4 coloris) | 33 | 15,68 Mo | 10,76 Mo |
| Tuiles « Dormeurs sur le côté / dos / ventre / multi » (section `multi_column_fPbXVa`, y 4 099 px en mobile) | 4 (58 à 61.svg, 4,30 à 4,71 Mo chacun) | **18,03 Mo** | **13,41 Mo** |
| « SOYA 3.0 : La nouvelle ère du sommeil » | 57.svg | 1,56 Mo | 0,54 Mo |
| Carte housse (produits associés) | 7.svg | 0,47 Mo | 0,34 Mo |
| **Total** | **39** | **35,73 Mo** | **25,05 Mo** |

58.svg contient à lui seul un PNG de 3 098 × 2 066 px (3,45 Mo) [pdpw/s58.svg]. Le paramètre `width` ne redimensionne pas un SVG : vérifié le 26/09/2026, `20.svg` pèse 287 218 octets en `width=56`, `width=400` et sans paramètre ; 4 fichiers sont téléchargés deux fois (vignette et image) [tech/].

**Vidéos** [soya/cap/videos.txt ; tech/mp4probe.py] :

| Fichier | Poids | Format | Durée | Particularité |
|---|---|---|---|---|
| Story « Concept » | 46,5 Mo | 1080 × 1920 HEVC, ≈ 8,2 Mbit/s | 45,2 s | moov en fin de fichier |
| « Lequel choisir ? » | 50,2 Mo | idem | 49,1 s | idem |
| « Avis clients » | 37,6 Mo | idem | 36,5 s | idem |
| « FAQ » | 109,2 Mo | HEVC ≈ 7,9 Mbit/s | 110,7 s | idem |
| Vidéo de section | 58,1 Mo | 1920 × 1080 H.264, 7,2 Mbit/s | 64,5 s | faststart, poster, `preload="metadata"` |
| **Total** | **301,6 Mo** | | | |

Les 4 bulles de 72 px sont des `<video src>` pointant vers les **originaux** (`/videos/c/o/v/`), sans poster ni `preload` ; au `DOMContentLoaded`, un script commenté « teaser 10s sur les miniatures » les lance en muet puis les arrête après 10 000 ms [soya/pdp3.html, bloc `liquid_GDmj3c`]. Estimation non mesurée : ≈ 10 Mo par bulle, ≈ 40 Mo pour les 4 si la lecture démarre [déduit]. Contenu (images extraites, pdpw/story_*.jpg) : un homme face caméra montre les couches de mousse ; compare 2.0 et 3.0 ; un duo lit des commentaires Facebook « Soya Paris a répondu » ; FAQ en autocollants (fermeté, positions, hauteur, adaptation, ronflements, contenu du colis).

### 6.5 Bloc d'offres Kaching (EUR)

Configuration [soya/pdp3.html, `kaching-bundles-deal-block-settings`] : discountName « FRENCH DAYS | JUSQU'À -60% », `discountType: specific`, `useProductCompareAtPrice: true`, arrondi « .90 », `showTotalPriceInAddToCartButton: false`. Le produit n'a pas de prix barré catalogue ; le barré affiché vaut 139,90 € × quantité. Aucun pourcentage n'est affiché sur les cartes.

| Offre | Prix | Barré | Remise implicite | Prix / oreiller | Options pré-cochées | Total par défaut |
|---|---|---|---|---|---|---|
| 1x (présélectionnée) | 69,90 € | 139,90 € | -50,0 % | 69,90 € | 1 × « +1 Housse » 14,90 € (~~39,90~~) | **84,80 €** |
| Pack Duo (2) | 98,90 € | 279,80 € | -64,7 % | 49,45 € | 2 × « +1 Housse » 14,90 € (l'une configurée à -20 % : 17,90 × 0,8 = 14,32, arrondi 14,90) | 128,70 € |
| Pack Famille « 3x +1 Offert » (4) | 139,90 € | 559,60 € (4 × 139,90) | -75,0 % | 34,98 € | 2 × « +2 Housses » 14,90 € (~~79,80~~) | 169,70 € [non vérifié] |

- Le « jusqu'à -60 % » est dépassé par le -75 % implicite du pack Famille.
- La housse se vend seule 17,90 € (barré 39,90 €) plus bas sur la même fiche : l'économie réelle de la ligne « +1 Housse » est de 3,00 € (-16,8 %), pas de 25 € (-62,7 %) comme le suggère le barré.
- « Livraison rapide et cadeaux offerts » sur Duo et Famille : `freeGifts: []`, `progressiveGiftsEnabled: false` ; aucun cadeau configuré. Des traductions anglaises résiduelles (« + 2 Housses de Rechange offertes ») rattachées à un ancien bloc (`94bfad25…`) suggèrent qu'une version antérieure offrait les housses [déduit]. La livraison est gratuite pour toutes les commandes [soya/pol/shipping-policy.txt].

### 6.6 Preuve sociale sur la fiche

| Indicateur | Valeur | Preuve |
|---|---|---|
| Affiché en tête | « Noté 4,8/5 – 15 637 avis clients » (texte fixe) | [soya/pdp3.html l. 2170] |
| JSON-LD Loox du produit | 4,3/5, **339 avis** | [soya/pdp3.html l. 7166-7170, `productLdJsonSchema`] |
| Résumé Loox boutique | « Overall rating: 4.6 / 5 from 1775 reviews » | [soya/pdp3.html, `loox-ssr-review-summary`] |
| 40 avis intégrés (widget en mode agrégé, `data-loox-aggregate`) | 26 sur le 2.0, 7 sur le 3.0, 7 autres ; 35 à 5/5 ; **3 marqués « Verified »** ; photos toutes sur images.loox.io | [soya/pdp3.html] |
| Rafales d'avis 5/5 avec photo | 02/10/2025 18:03-18:10 UTC (4 avis 2.0) ; 05/11/2025 14:52-14:59 UTC (4 avis 3.0, photos toutes en 1 200 × 1 600) ; 25/09/2026 12:57-13:10 UTC (4 avis 2.0, le jour de la collecte) ; aucun « Verified » | [soya/pdp3.html] **[indice]** |
| Incohérence | « Julien D. » : « Très satisfaite de nos SOYA 3.0 … je me réveille beaucoup plus détendue », tagué 2.0 | [soya/pdp3.html] **[indice]** |
| Contre-indice | Photos d'amateur crédibles ; 3 avis négatifs visibles (« Fake! It's not a silk… polyester », « attendre 3 mois avant d'avoir un remboursement », « il me manque les deux housses supplémentaire qui devaient être offerte ») | [pdpw/reviews_sheet.jpg] [déduit : flux Loox au moins en partie réel] |
| Témoignages « Acheteur vérifié » | 4 cartes HTML fixes, section d'un autre gabarit (`template--24247348527436__ev_review_8Lp6Dy` collé dans `custom_liquid_rMBeUk` du gabarit `template--32068952621388`), blocs nommés en anglais (`data-block="Neck pain"`), avatars 88 à 91.png sur la boutique `0680/4589/7928` **(v2 : l'ancienne boutique de Soya, § 15.1)** | [soya/pdp3.html l. 2977-2992] |
| Données pour Google | ProductGroup à 139,90 € `InStock` + `aggregateRating` 4,3 / 339 injecté côté client | Google lit 139,90 € et 4,3 ; le visiteur lit 69,90 € et 4,8 |

### 6.7 Texte de la fiche

- **Puces** : « Soulage les douleurs cervicales et dorsales dès la première nuit » ; « Deux hauteurs intégrées pour un confort ajusté à votre morphologie » (factuel) ; « Amélioration **prouvée** de la posture et du sommeil » (aucune preuve citée) ; « Soutien intelligent pour un sommeil profond et réparateur ».
- **Matières** : « Housse respirante en fibre de bambou » sur la fiche, « ions d'argent 3.0 » dans le catalogue et le JSON-LD.
- **Accordéons** : 62 × 37 cm, hauteurs 14,4 ou 9 cm ; « Certification OEKO-TEX® STANDARD 100 » sans numéro ; lavage 30 °C délicat sans essorage puis repassage ; délais « 1 à 2 jours + 3 à 5 jours » ; garantie 30 nuits.
- **FAQ : 13 questions** (arbitrage : l'analyse design en comptait 12 ; le JSON-LD FAQPage en contient 13). Les réponses 1 à 5 nomment « L'oreiller SOYA 2.0 » ; « apnée du sommeil légère à modérée » ; « Les premiers effets se ressentent souvent dès la première nuit » ; délais « 3 à 6 jours » [soya/pdp3.html].
- **Délais contradictoires** : 1 j + 3-6 j ouvrés (politique), 1-2 j + 3-5 j (accordéon), 1-2 j ouvrés + 3-6 j (FAQ).

### 6.8 La fiche entière, section par section (desktop et mobile) [soya/cap/pdp3-d.json et pdp3-m.json → info.secs]

Position en px puis en cm (96 dpi) ; « écran » = rang de l'écran où commence la section (hauteur 900 px en desktop, 844 px en mobile).

| # | Section (id Shopify) | Desktop y / h (px) | Desktop y / h (cm) | Écran desktop | Mobile y / h (px) | Mobile y / h (cm) | Écran mobile | Contenu |
|---|---|---|---|---|---|---|---|---|
| 0 | Bandeau + en-tête | 0 / 173 | 0 / 4,58 | 0 | 0 / 101 | 0 / 2,67 | 0 | voir § 6.1 et § 6.2 |
| 1 | main (galerie + bloc d'achat) | 174 / 3 199 | 4,60 / 84,63 | 0,19 | 101 / 3 998 | 2,67 / 105,77 | 0,12 | voir § 6.1 et § 6.2 ; colonne galerie vide de ≈ 905 à 3 373 px en desktop |
| 2 | multi_column_fPbXVa | 3 373 / 686 | 89,23 / 18,15 | 3,75 | 4 099 / 504 | 108,44 / 13,33 | 4,86 | « Quel que soit votre style de sommeil… » : 4 tuiles SVG (18 Mo décodés), carrousel en mobile |
| 3 | before_after_image_t6fR8X | 4 059 / 1 147 | 107,38 / 30,34 | 4,51 | 4 604 / 753 | 121,80 / 19,92 | 5,45 | « Un bon sommeil commence par une bonne posture », curseur avant/après 896 × 569 (23,7 × 15,1 cm ; halo rouge sur la nuque, colonne verte fluo) |
| 4 | image_link_blocks_NM3i3j | 5 206 / 240 | 137,72 / 6,35 | 5,78 | 5 357 / 136 | 141,72 / 3,60 | 6,35 | logos presse (copie de l'accueil) |
| 5 | media_with_text_UWwdeG | 5 446 / 852 | 144,07 / 22,54 | 6,05 | 5 493 / 906 | 145,32 / 23,97 | 6,51 | « SOYA 3.0 : La nouvelle ère du sommeil » + 57.svg |
| 6 | video_Ke4ji6 | 6 298 / 500 | 166,61 / 13,23 | 7,00 | 6 399 / 480 | 169,29 / 12,70 | 7,58 | vidéo pleine largeur, 58,1 Mo |
| 7 | custom_liquid_rMBeUk | 6 798 / 785 | 179,84 / 20,77 | 7,55 | 6 879 / 752 | 181,98 / 19,89 | 8,15 | « Plus de 100 000 clients se réveillent désormais – sans douleurs ! », onglets Douleur cervicale / Migraines / Posture / Ronflements |
| 7a | └ section collée `template--24247348527436__ev_review_8Lp6Dy` (fond #FFFFFF) | 6 894 / 593 | 182,38 / 15,69 | 7,66 | 6 927 / 656 | 183,25 / 17,35 | 8,21 | 3 cartes #F7F7F7 d'environ 380 px (10,1 cm), étoiles #0F283C, avatars hébergés sur une autre boutique (v2 : l'ancienne boutique de Soya, § 15.1) |
| 8 | multi_column_PrUGex | 7 583 / 501 | 200,61 / 13,25 | 8,43 | 7 631 / 666 | 201,88 / 17,62 | 9,04 | 96 / 91 / 87 % |
| 9 | faq_UWXMQx | 8 085 / 1 145 | 213,89 / 30,29 | 8,98 | 8 297 / 1 183 | 219,50 / 31,30 | 9,83 | 13 questions, boîte #F2F4F6 d'environ 805 px (21,3 cm) en desktop |
| 10 | media_with_text_zg6tqU | 9 230 / 704 | 244,18 / 18,62 | 10,26 | 9 481 / 796 | 250,82 / 21,06 | 11,23 | Best-Seller 2.0 |
| 11 | related_products_ncp9TM | 9 934 / 818 | 262,80 / 21,64 | 11,04 | 10 277 / 544 | 271,88 / 14,39 | 12,18 | carrousel, badges « Economisez €X » |
| 12 | Loox (`1744316970a52016e4`) | 10 752 / **6 335** | 284,44 / **167,59** | 11,95 | 10 820 / **7 211** | 286,24 / **190,77** | 12,82 | widget d'avis, blanc sur les captures |
| 13 | Réassurance (text-with-icons) | 17 087 / 168 | 452,04 / 4,44 | 18,99 | 18 031 / 152 | 477,01 / 4,02 | 21,36 | 4 engagements |
| 14 | Pied de page | 17 255 / 541 | 456,48 / 14,31 | 19,17 | 18 184 / 995 | 481,06 / 26,32 | 21,55 | fond #042146 |

Lecture [déduit] : le dernier bloc commercial avant les avis (carrousel, ligne 11) commence au 11e écran desktop et au 12e écran mobile, la barre d'achat collante restant disponible tout du long ; plus d'un tiers de la page est un widget d'avis qui ne s'est pas rendu dans nos captures.

Hauteur : **17 796 px en desktop** (470,8 cm, soit 4,71 m, 19,8 écrans) et **19 179 px en mobile** (507,4 cm, soit 5,07 m, 22,7 écrans) ; Loox = 35,6 % et 37,6 % de la page. (Correction du critique final : « 4,70 m » arrondissait mal 470,8 cm.) **Réserve** : le widget Loox mesure exactement la même hauteur (6 335 / 7 211 px) sur les cinq fiches capturées, en mode agrégé, et il est resté blanc : la hauteur est mesurée, le contenu réel n'a pas été vu (voir Annexe C).

### 6.9 Comparaison avec les autres fiches [pdpw/others.json ; soya/web/p_*.html]

| Fiche | Bloc d'achat | Prix | Bouton (y) | Stock affiché | Particularités |
|---|---|---|---|---|---|
| Soya 2.0 | Kaching 1x / Duo / Famille, **vrais cadeaux** (2 ou 4 housses 2.0) | 59,90 € (~~119,90~~), 89,90 €, 129,90 € | — | « 78 % du stock déjà écoulé » | stories (4 autres vidéos), même bloc stock figé |
| Oreiller enfant | Kaching 1x / Duo, housse pré-cochée | 49,90 € (~~99,90~~) ; Duo 89,90 € (~~199,80~~) ; housse 14,90 € (~~29,90~~, son vrai prix) | desktop 959, mobile 1 398 | « En stock – Prêt à l'expédition » | « 15 637 avis **parents** » contre 4 avis Loox à 4,0 ; 21 images PNG/JPG (58 × 32 cm, 6/8 cm) ; « 30 NUTIS D'ESSAI » ; barre collante à 99,90 € |
| Draps en soie | bloc thème | 49,90 € (~~59,90~~) pour les 6 tailles et 8 coloris | 703 | « En stock » | « soie naturelle de mûrier » ; avis 1/5 « polyester » |
| Couette SoyaFresh (mobile) | bloc thème | 79,90 / 89,90 / 99,90 € (Twin / Queen / King, dénomination américaine) | 1 031 | « En stock » | 10 images WebP |
| Oreiller 1.0 | bloc thème | 34,90 € (~~49,90~~) | desktop 496, mobile 812 | « En stock » | Loox 2,8/5 sur 4 avis |

Les fiches secondaires suivent un gabarit court (10 604 à 12 811 px), sans FAQ ni stories, en images raster que le CDN sait redimensionner : les SVG lourds sont propres à la fiche 3.0. Le point vert « En stock » qui pulse et l'image de paiement getheyshape.com figurent sur ces 17 fiches.

### 6.10 Ce qui convertit, ce qui fait pression

**Efficace (mécanique honnête en soi)** : stories vidéo avant le prix (visage, format natif, objections traitées) ; cartes de quantité à badge ; bouton pleine largeur de 60 px ; barre collante ; galerie à un message par image ; accordéons pratiques ; FAQ sur les vraies objections (odeur, oreiller plat à la réception, adaptation de 3 à 7 jours) ; curseur avant/après et tuiles par position.

**Pression ou risque (indices et risques, aucune infraction établie)** : compteur d'avis écrit en dur ; compteur relancé chaque jour, stock écrit en dur, popup « 60 % » ; prix barrés sur un prix jamais proposé sur la fiche ; option payante pré-cochée et « cadeaux » annoncés sans cadeau configuré (`freeGifts: []`) ; allégations santé et statistiques vraisemblablement tirées du 2.0 ; témoignages « vérifiés » écrits en dur ; logos presse sans source.

---
## 7. Catalogue, prix et offres

### 7.1 Catalogue complet [soya/products.json ; Kaching : soya/pdp3.html, soya/web/p_*.html]

| # | Produit | Prix catalogue | Barré | Remise | Variantes | Créé le (Paris) | Images | Prix effectif sur la fiche |
|---|---|---|---|---|---|---|---|---|
| 1 | Oreiller Soya 3.0 | 139,90 | — | — | 4 | 19/10/2025 09:30 (Gris : 28/02/2026) | 48 (33 SVG) | 69,90 · 98,90 (2) · 139,90 (4) |
| 2 | Oreiller Soya 2.0 | 119,90 | — | — | 1 | 19/10/2025 10:09 | 9 | 59,90 · 89,90 · 129,90 + housses offertes |
| 3 | Oreiller Soya enfant | 99,90 | — | — | 3 | 09/05/2026 18:40 | 21 | 49,90 · 89,90 (2) |
| 4 | Couette SoyaFresh | 79,90 / 89,90 / 99,90 | 99,90 / 119,90 / 129,90 | 20,0 / 25,0 / 23,1 % | 15 | 19/10/2025 09:47 | 10 | — |
| 5 | Draps SoyaFresh | 54,90 / 69,90 / 79,90 | 79,90 / 89,90 / 100,90 | 31,3 / 22,2 / 20,8 % | 15 | 19/10/2025 09:42 | 9 | — |
| 6 | Couverture lestée « Anti-Stress & Thérapeutique » | 79,90 | 158,90 | 49,7 % | 1 | 19/10/2025 07:45:59 | 3 | — |
| 7 | Ensemble d'oreillers réglables | 69,90 | 74,90 | 6,7 % | 1 | 07:46:02 | 3 | — |
| 8 | Draps en soie naturelle | 49,90 (toutes tailles) | 59,90 | 16,7 % | 48 | 10:41 | 10 | — |
| 9 | Coussin lombaire ergonomique (visuels : coussin de genoux, puis « 4 en 1 ») | 49,90 | — | — | 1 | 07:45:58 | 5 | popup -60 % après ajout d'un 2.0 ou 3.0 |
| 10 | Housse de couette en soie | 44,90 (12 tailles) | 59,90 | 25,0 % | 96 | 10:21 | 10 | — |
| 11 | Coussin ergonomique avec tête de lit | 42,90 | — | — | 1 | 07:45:56 | 3 | — |
| 12 | Coussins de siège orthopédiques | 39,90 | 49,90 | 20,0 % | 1 | 07:46:04 | 4 | — |
| 13 | Oreiller Soya 1.0 | 34,90 | 49,90 | 30,1 % | 1 | 07:46:14 | 5 | — |
| 14 | Housse de rechange enfant | 29,90 | — | — | 3 | 09/05/2026 18:46 | 6 | 14,90 en ajout |
| 15 | Housse d'oreiller en soie | 29,90 | 69,90 | 57,2 % | 4 | 10:15 | 6 | — |
| 16 | Masque de sommeil en soie | 29,90 | 59,90 | 50,1 % | 1 | 07:46:10 | 3 | — |
| 17 | Oreiller de voyage | 24,90 | (0,00 sur une variante : résidu) | — | 4 | 10:46 | 7 | — |
| 18 | Housse de rechange Soya 3.0 | 17,90 | 39,90 | 55,1 % | 4 | 09:20 | 16 | 14,90 en ajout pré-coché |
| 19 | Housse de rechange Soya 2.0 | 11,90 | 29,90 | 60,2 % | 1 | 07:46:07 | 4 | offerte dans les packs 2.0 |

Autres faits [constaté] : 205 variantes toutes `grams: 0` et `taxable: false` ; aucun `product_type` ; SKU sur 10 produits seulement (les 8 importés en 18 s, le 2.0, la housse soie) ; `updated_at` identique pour les 19 produits, 25/09/2026 23:16:19 (+02:00), l'heure de la collecte.

### 7.2 Statistiques des prix barrés [calcul sur soya/products.json]

12 produits sur 19 ont un prix barré ; remise moyenne 34,9 %, **médiane 27,6 %**, pondérée par variante 24,4 % ; minimum 6,7 % (réglables), maximum 60,2 % (housse 2.0, seul produit à -60 % ou plus). Les packs Kaching affichent -64,7 % (Duo 3.0), -75,0 % (Famille 3.0), -62,5 % (Duo 2.0), -72,9 % (Famille 2.0). Le slogan « Jusqu'à -60 % sur tout le site ! » ne décrit ni la remise courante ni la plus forte. [déduit]

### 7.3 Deux prix pour le même oreiller [constaté, HTML en EUR]

| Page | Soya 3.0 | Soya 2.0 | Enfant | Preuve |
|---|---|---|---|---|
| Accueil, carrousel | absent | **119,90 €**, sans barré, « + Ajouter » direct | — | [soya/home.html, `featured_collection_kEBKkP`] |
| `/collections/all` | **139,90 €** | 119,90 € | 99,90 € | [soya/ux/collections_all.html] |
| Recherche « oreiller » | 139,90 € | 119,90 € | 99,90 € | [soya/ux/search_q_oreiller.html] |
| Nos Best Sellers | absent | absent | 99,90 € | [soya/ux/collections_nos-best-sellers.html] |
| Fiche (Kaching présélectionné) | 69,90 € (~~139,90~~) | 59,90 € (~~119,90~~) | 49,90 € (~~99,90~~) | [soya/pdp3.html] ; [soya/web/p_*.html] |

Le montant facturé après un ajout depuis ces cartes n'a pas pu être observé [non vérifié]. Deux lectures : le client paie 119,90 ou 139,90 € par ce chemin, ou le prix affiché diffère du prix payé. **Risque** dans les deux cas. Nuance : l'affichage de ces prix ailleurs sur le site permettrait à Soya de soutenir qu'ils sont « pratiqués » ; seul l'historique des commandes tranche.

### 7.4 Architecture de gamme [déduit]

- **3.0 = vedette** (galerie la plus fournie, référence la plus haute) ; **2.0 = produit de volume** (le moins cher des papillons, housses offertes, inventaire exposé le plus négatif) ; **1.0 = ancre basse** (34,90 €). Écart de 10 € entre les trois oreillers vendus par Kaching : **enfant 49,90 €**, 2.0 59,90 €, 3.0 69,90 € (précision du critique final : le 49,90 € est celui de l'oreiller enfant, pas du 1.0, qui est vendu 34,90 € par le bloc du thème, sans Kaching) [soya/pdp3.html ; soya/web/p_*.html ; pdpw/others.json].
- **Linge** : soie à prix unique quelle que soit la taille (draps 49,90 € de 90 × 190 à 200 × 200 cm ; housse de couette 44,90 € jusqu'à 240 × 260 cm). Chez Label Naturel, une housse de couette en soie de mûrier coûte 199,20 à 471,20 € soldée [prix/www.label-naturel.com_…js] : **indice** que la composition annoncée est inexacte, cohérent avec l'avis « polyester ».
- **Accessoires génériques** : coussin de siège, coussin de voyage enveloppant, couverture lestée, cales, coussin-lit « Conception orthopédique brevetée » sans numéro de brevet. Le « Coussin Lombaire » est un coussin de genoux en cœur de 25 × 25 cm **(corrigé v2 : 25 × 23 cm, cotes lues sur le visuel `lomb_01` et confirmées par la contre-vérification, § 18.3)** avec sangle sur ses 3 premiers visuels, décrit comme coussin d'assise « dans votre voiture » ; un modèle comparable est vendu 27,97 € sur la place de marché E.Leclerc (https://www.e.leclerc/fp/oreiller-ergonomique-pour-jambes-et-genoux-en-mousse-memoire-forme-avec-sangle-reglable-8435527826185).
- **Formes courantes** : l'emprise de 62 × 37 cm du Soya 3.0 est identique à celle d'un papillon Comfy Sleepers (hauteurs 8 / 12 cm) ; le Zamat (Hong Kong, 2021) est très proche du 2.0 : **indices** de moules courants, pas de preuve de provenance.

### 7.5 Mécaniques de panier moyen

| Levier | Détail | Preuve |
|---|---|---|
| Packs | Duo 49,45 €/u, Famille 34,98 €/u (3.0) ; 44,95 et 32,48 €/u (2.0) | Kaching |
| Housse pré-cochée | 5 lignes `preselected: true` (3.0), 3 (enfant) ; coloris Bleu par défaut | [soya/pdp3.html] |
| Popup après ajout | « FÉLICITATIONS, VOUS AVEZ DÉBLOQUÉ -60% SUR NOTRE NOUVEL OREILLER LOMBAIRE ! », 19,90 € au lieu de 49,90 €, badge « jusqu'à ce soir, minuit ! », refus « Non merci, je n'aime pas les cadeaux » ; produit présent depuis le 19/10/2025, 24 avis Loox | `kaching-popup-v2-config` ; [soya/web/p_coussin-lombaire-ergonomique-soya.html] |
| Vente croisée sur la fiche | housse 17,90 €, coussin 49,90 € | [soya/cap/pdp3-d-buybox.txt] |
| Après paiement | AfterSell installé (`aftersell-utm-triggers.js`), offres non observées | [soya/home.html] |

**Inventaires exposés** (`inventoryQuantity`, stock non suivi) : 2.0 **-51 191** ; housse 2.0 -41 513 ; « lombaire » -13 908 ; 3.0 -9 719 (Blanc -3 888, Gris -2 431, Bleu -1 999, Beige -1 401) ; housses 3.0 -3 948 (Bleu -1 312, la couleur pré-cochée, en tête) ; housses soie -3 935 ; siège -1 064 ; voyage -871 ; masque -806 ; 1.0 -565 ; enfant -403 [soya/web/p_*.html]. Ce ne sont pas des ventes prouvées (importation possible) ; mais la variante Gris, créée le 28/02/2026, a accumulé -2 431 en 7 mois, et le ratio housses/oreillers est de 81 % sur le 2.0 (housses offertes) contre 41 % sur le 3.0 : **[indice]** de volumes en dizaines de milliers d'unités et d'un effet réel de la case pré-cochée. **(corrigé v2 : ces compteurs sont repartis de zéro à la recréation du catalogue le 19/10/2025 (variante 2.0 à -415 le 28/10/2025) ; ils mesurent des ventes nettes dans la boutique actuelle, lues comme des bornes basses. Les -51 191 du 2.0 représentent 342 jours de ventes, soit 150 par jour en moyenne ; l'historique Wayback et les relevés horaires sont exploités au § 17. Le ratio housses / oreillers du 3.0 monte à 72 % sur 13 h 37 les 25-26/09 et à 70 % du 07 au 26/09 : des plafonds, pas une mesure de la case cochée, § 17.4 et § 18.7)**

### 7.6 Prix du marché relevés (pages ouvertes)

| Offre | Prix | Source |
|---|---|---|
| Confort&alignement, papillon à point central | 59,90 € (~~69,90~~) | https://confortetalignement.com/products/oreiller-ergonomique-papillon |
| Inphysio, papillon en X | 69,90 € (~~74,20~~) | https://inphysio.fr/products/oreiller-papillon-ergonomique-multi-positions |
| HT Confort, papillon | 80,00 € | https://www.htconfort.com/products/oreiller-papillon |
| Somnilys Gen. 2 | 128,00 € | https://somnilys.com/products/oreiller-ergonomique-gen-2 |
| Derila Ergo (FR) | 133,30 € | https://fr.derilashop.com/products/oreiller-cervical |
| Emma Original Adapt | 48,99 € (~~69,99~~) | https://www.emma.fr/oreiller-original/ |
| Emma cervical (Lidl) | 29,99 € | https://www.lidl.fr/p/emma-oreiller-cervical/p100406211 |
| Wopilo Plus | 99 € | https://wopilo.com/products/wopilo-plus |
| Tediber | 85 € | https://www.tediber.com/products.json |
| Comfy Sleepers (62 × 37 cm) | 59,99 $ | https://comfysleepers.com/products/butterfly-memory-foam-cervical-pillow-neck-shoulder-support-1 |
| **Somnila Neck 01** (62 × 42 cm, 13 / 11 cm, housse incluse) | **69,90 €** | [build/PHASE3.md l. 14 ; build/PRODUCTS.csv, ligne 09] |
| **Somnila Contour 01** (60 × 35 × 10 cm) | **59,90 €** (= prix du Soya 2.0 sur sa fiche) | [build/PHASE3.md l. 15 ; build/PRODUCTS.csv, ligne 12] |

Fiches AliExpress, Alibaba, Amazon, Temu, ManoMano et eBay : illisibles (connexion, 403, 410, 500). Aucun prix fournisseur retenu. **v2** : des prix de gros ont été relevés sur Made-in-China et Accio : oreiller papillon de 3,50 à 17,14 $ (médiane 7,30 à 9,90 $, 27 fiches, dont 14 cartes sur 30 chez un seul fournisseur), coussin de genoux de 1,90 à 12,49 $, housse de 2,00 à 3,50 $ ; AliExpress, Temu et Amazon restent fermés (§ 18.3, § 18.4).

### 7.7 TVA et boutique miroir

- 205 variantes `taxable: false` sur soya-paris.com, `taxable: true` dans la boutique miroir [prix/old_products.json]. `taxable: false` signifie seulement que Shopify ne calcule pas de taxe : **indice**, pas preuve, de TVA non collectée. Si elle ne l'était pas, Soya garderait 69,90 € là où un vendeur en règle garde 58,25 € HT [déduit].
- Boutique a2bu6h-c5 (soyaparisoreillerergonomique.com, shopId 71078019242, Sheridan, Wyoming, USD, thème Shrine PRO 1.6.1) : les 19 mêmes produits, vendor « SOYA PARIS », créés le 27/05/2026, handles à suffixe aléatoire (« oreiller-soya-30-pgplze »), prix barrés non convertis (draps à 60,00 $ pour un barré de 59,90), contact soyaparisergonomique@gmail.com [prix/old_products.json ; soya/web/clone_pol.html]. Son identifiant inférieur suggère une boutique ouverte **avant** soya-paris.com ; rien ne dit laquelle copie l'autre [déduit]. **(corrigé v2 : a2bu6h-c5 copie Soya. Elle charge 10 fichiers depuis le CDN de soya-paris.com, dont 8 téléversés par Soya le 19/10/2025 et 2 le 29/06/2026 (la page d'été de Soya), et son code maison est commenté en portugais du Brésil ; son identifiant plus bas reflète une boutique ancienne réutilisée, pas l'antériorité de la marque. Elle appartient à une grappe de clones tiers sans identifiant publicitaire commun avec Soya, § 15.9)** us.soya-paris.com est la même boutique que soya-paris.com.

### 7.8 Le produit lui-même : fiche technique reconstituée du Soya 3.0, face au Neck 01 (ajout du critique final)

Tout ce que Soya dit de l'objet, rassemblé en un tableau, face aux données internes de Somnila.

| Caractéristique | Soya 3.0 : ce que dit le site | Preuve | Neck 01 : données Somnila | Preuve |
|---|---|---|---|---|
| Forme | « nuage » à ailettes et point central, deux hauteurs ; « Encoche Orthopédique 3.0 » au centre, « ailettes latérales élargies » | [soya/gallery/sheet-1.jpg ; soya/catalogue.json] | oreiller à mémoire de forme à deux hauteurs | [build/PRODUCTS.csv, ligne 09] |
| Dimensions | **62 × 37 cm** (accordéon de la fiche) ; mais housse 3.0 « 60 x 40 cm » et housse 2.0 « 60 x 40 x 11/13 cm » | [soya/web/pdp3_fulltext.txt l. 161 ; soya/catalogue.json] | **62 × 42 cm** | [build/PRODUCTS.csv] |
| Hauteurs | **14,4 / 9 cm** (écart de 5,4 cm) | [soya/web/pdp3_fulltext.txt l. 162-163] | **13 / 11 cm** (écart de 2 cm) | [build/PRODUCTS.csv ; build/SOMNILA_DOSSIER_COMPLET.md l. 2568] |
| Mousse | « mousse intelligente à mémoire de forme de nouvelle génération, sans produits chimiques nocifs », « haute densité 3.0 » ; **aucune densité chiffrée, aucune composition** | [soya/web/pdp3_fulltext.txt l. 158 ; soya/catalogue.json] | mousse à mémoire de forme ; densité et composition absentes du devis | [build/PRODUCTS.csv ; build/SOMNILA_DOSSIER_COMPLET.md l. 765] |
| Housse | « fibre de bambou », amovible, hypoallergénique (fiche) ; « fibres respirantes et ions d'argent 3.0 » (description) : deux matières pour la même housse | [soya/web/pdp3_fulltext.txt l. 139, 178 ; soya/catalogue.json] | housse incluse, « technologie rafraîchissante » (devis) | [build/PRODUCTS.csv] |
| Entretien | housse à 30 °C, programme délicat ou main, sans essorage, séchage à l'air, repassage léger | [soya/web/pdp3_fulltext.txt l. 176-190] | — | — |
| Poids | non publié ; `grams: 0` sur les 4 variantes (et sur les 205 variantes du catalogue) | [soya/products.json] | 1,4 kg | [build/PRODUCTS.csv] |
| Coloris | Blanc, Bleu, Gris (ajouté le 28/02/2026), Beige | [soya/catalogue.json → options] | 4 coloris | [build/PHASE3.md l. 14] |
| Labels | CertiPUR, OEKO-TEX STANDARD 100 : pastilles et accordéon, **sans numéro de certificat** | [soya/cap/slices/pdp3-d-view-6500.jpg ; soya/web/pdp3_fulltext.txt l. 169] | aucun label revendiqué | règle de marque |
| Conditionnement | **expédié compressé** : « laissez votre oreiller à l'air libre quelques minutes afin qu'il retrouve sa forme d'origine » ; FAQ : « L'oreiller est compressé pour l'expédition » | [soya/web/pdp3_fulltext.txt l. 202, 291] | expédié par le fournisseur, 6 à 10 jours | [build/PRIX.md l. 9 ; build/HANDOFF.md l. 18] |
| Essai | « 30 nuits d'essai » (pastille, bloc d'achat, accordéon « Garantie 30 nuits ») mais « Essayez votre oreiller Soya pendant **30 jours** » et « Si, après 30 jours » dans les accordéons | [soya/web/pdp3_fulltext.txt l. 106, 200, 204-205] | 30 nuits | [build/PRIX.md] |
| Prix | 139,90 € au catalogue ; 69,90 € dans l'offre 1x ; housse seule 17,90 €, en ajout 14,90 € | § 6.5 | 69,90 € housse incluse ; housse de rechange 16,90 € ; oreiller + housse 76,90 € | [build/PHASE3.md l. 14, 22, 26] |

Lecture :
- **[constaté]** Soya ne publie aucune donnée mesurable sur le cœur du produit : ni densité, ni composition, ni poids, ni fermeté chiffrée, ni pays de fabrication. Tout est adjectif (« intelligente », « haute densité », « nouvelle génération », « 3.0 »).
- **[constaté]** Trois jeux de cotes coexistent pour la même famille : 62 × 37 (fiche 3.0), 60 × 40 (housse 3.0), 60 × 40 × 11/13 (housse 2.0).
- **[déduit]** Le Neck 01 et le Soya 3.0 partagent la largeur de 62 cm et le principe des deux hauteurs ; leurs cotes annoncées diffèrent (37 contre 42 cm de profondeur, 14,4 / 9 contre 13 / 11 cm). Rien ne permet d'affirmer qu'il s'agit du même moule ; seule la housse 2.0 de Soya annonce exactement 11 / 13 cm. **(corrigé v2 : la comparaison des silhouettes tranche, ce n'est **pas** le même moule : nuage à lobes arrondis, bord supérieur bombé et picots pour le Neck 01, papillon à cornes, encoche centrale et bourrelet nervuré pour le Soya 3.0 ; aucune photo commune sur 21 624 paires [déduit ; constaté pour les photos : § 18.1, § 18.2]. Soya décrit par ailleurs son 2.0 en 60 × 40 × 14 cm, et l'emprise de 62 × 37 cm du 3.0 est celle d'un papillon Comfy Sleepers, § 18.3)** Les deux produits sont, d'après leurs textes, des mousses à mémoire de forme expédiées compressées par un tiers : Somnila ne peut pas se différencier sur l'origine, seulement sur la **précision de l'information** (voir § 12, menace 5).
- **[déduit]** Opportunité : publier ce que Soya ne publie pas. Le poids (1,4 kg) et les cotes sont déjà connus ; la densité et la composition restent à obtenir du fournisseur [build/SOMNILA_DOSSIER_COMPLET.md l. 765].
- **Gamme secondaire [constaté]** : le Contour 01 de Somnila (60 × 35 × 10 cm) est à **59,90 €**, exactement le prix du Soya 2.0 sur sa fiche ; « Contour for Two » à 99,90 € face au Duo 2.0 à 89,90 € (2 oreillers + 2 housses offertes) [build/PHASE3.md l. 15 et 30 ; soya/web/p_oreiller-soya-2-0.html, `kaching-bundles-deal-block-settings` : `discountValue` 59.9, 89.9, 129.9].

---

## 8. Marketing, acquisition, CRM et persuasion

### 8.1 Pile technique marketing [soya/home.html, `webPixelsConfigList`]

Meta (API de conversions serveur : `"facebookCapiEnabled":true`), TikTok (identifiant de pixel web le plus récent, 5431230796 : ajout probablement tardif ; **v2** : le pixel TikTok D9PMU6BC77U7K82NLN50 a remplacé CSH048JC77U2MN99KTU0, présent depuis le 01/01/2025, entre le 03/08 et le 07/09/2026, § 15.5), Snapchat, Pinterest, Google (7 événements de conversion Ads, Merchant Center ciblé FR), Klaviyo (`enableAddedToCartEvents: true`), Triple Whale (attribution), ParcelPanel. Clic droit désactivé sur tout le site (`window.oncontextmenu = … return false`) : gêne l'enregistrement des visuels et la recherche d'image inversée [déduit]. Domaines contactés : 26 sur l'accueil desktop, 31 sur la fiche, dont 4 de Shopify [soya/cap/home-d.json, pdp3-d.json → third].

### 8.2 Canaux [déduit sauf mention]

- **Meta, canal principal probable** : CAPI + Triple Whale ; titres de publications Facebook « Soya Paris - Élu meilleur oreiller orthopédique de 2024 » et « … 2025 » [non vérifié : titres de résultats de recherche] **(v2 : textes constatés par WebFetch sur les pages de vidéos de la page Facebook 61565502837799 : 17 vidéos retrouvées, au moins 7 textes d'annonces ; bibliothèque Meta toujours fermée, § 16.2, § 16.4)**. Un site tiers (affilié, donc intéressé) écrit « Soya Paris est partout dans les publicités depuis des mois » (https://meilleur-oreillercervical.fr/soya-paris-avis/). Bibliothèque publicitaire Meta : page de vérification, à consulter à la main [mkt/metaads.html].
- **TikTok** : @soya.paris, 5 070 abonnés, 2 691 à 2 694 j'aime selon la capture, **0 vidéo publique**, compte créé le 05/08/2026 [constaté : soya/web/tt.html ; mkt/tt2.html] : profil d'identité publicitaire.
- **Google** : Merchant Center FR, Shopping ou Performance Max probables ; Transparency Center en captcha [mkt/gat.json]. **(corrigé v2 : des URL de clic archivées montrent une campagne Google Ads **Search à mots-clés** (campagne 22489769215, mot-clé `kwd-390453911726`, suivie par Triple Whale) active au moins du 17/02 au 20/04/2026 vers la fiche 2.0, et des fiches Shopping **gratuites** dès le 15/08/2025 ; Shopping payant et Performance Max non observés, § 16.3, § 17.9)**
- **Organique** : blog vide, aucun lien social sur le site ; Instagram @soya.paris ≈ 25 000 abonnés selon un résumé de moteur [non vérifié].
- **Marketplaces et copies** : annonces Amazon.fr de marque « SWZEC » titrées « SOYA-Paris » (B0FCXR3BDF, B0FWQHLZL2…) ; domaine soya-paris.us ; boutique miroir [non vérifié sauf la miroir].

### 8.3 Calendrier et justification des remises

Thème « V16 – Version 3.0 French Days » servi depuis `/t/29/` : chaque temps fort semble un nouvel habillage du même mécanisme [déduit]. French Days officiels du 7 au 14/09/2026 ; Klaviyo avait publié des dates prévisionnelles du 22 au 28/09 et Croc'Affaires les donnait pour confirmées (https://www.klaviyo.com/fr/blog/date-des-french-days ; https://crocaffaires.fr/bons-plans/french-days-septembre-2026-dates/) : l'affichage du 25/09 tombe donc dans une fenêtre annoncée par erreur ailleurs ; le point grave reste le compteur sans fin. Deux justifications coexistent pour la même remise : « French Days » (bandeau, Kaching) et « À l'occasion de la sortie de notre nouveau produit ! » (popup). **v2** : le calendrier complet, reconstitué sur 25 captures Wayback (16 versions du thème en 17 mois, « soldes » hors période légale, « déstockage total » d'un produit toujours vendu), est au § 16.8 bis ; les mêmes prix sous des titres successifs sont au § 17.4.

### 8.4 Tunnel Klaviyo « Pop-up Mobile | Le Tsunami » [mkt/kl_v7.json, depuis https://fast.a.klaviyo.com/forms/api/v7/full-forms?company_id=XuYmmR]

Flyout en bas à droite (ancré en bas sur mobile), **délai 12 s**, réaffichage après 1 jour, modifié le 24/09/2026 à 06:55 UTC, présent sur les 10 pages capturées concernées.

| Écran | Texte | Technique |
|---|---|---|
| 1 | « VOUS AVEZ OBTENU 60% DE RÉDUCTION. À l'occasion de la sortie de notre nouveau produit ! Quelle est votre position préférée ? Ventre / Côté / Dos » ; « PS : L'offre se termine aujourd'hui à minuit 00h. » | avantage présenté comme acquis, micro-engagement ; « Pour moi » / « Pour un proche » ; refus « Non merci, je n'aime pas les remises. » |
| 2 | Prénom, e-mail, « Activer ma réduction » | inscription liste YaBEbm |
| 3 | « Aujourd'hui seulement : REJOIGNEZ LE CLUB VIP. Fermeture des portes ce soir à 00h ! » ; téléphone ; case « Oui, c'est mon vrai numéro » | consentement SMS `SINGLE_STEP_TRANSACTIONAL_PROMOTIONAL` ; « Non merci, je ne veux pas être VIP. » **envoie aussi le formulaire** (liste WZcPhv) |
| 4 | « VOTRE RÉDUCTION DE 60% EST ACTIVÉE ! Sur notre nouvel Oreiller Lombaire ! 1. Ajoutez au panier minimum x1 Oreiller Soya 2. Une pop-up apparait… » ; « Vous pouvez (enfin) dire ADIEU à toutes vos douleurs lombaires. » | objet de l'offre changé, aucun code remis |

La popup Kaching qui accorde ces 60 % n'a **aucune condition client** (`conditions: []`, déclencheur `addToCart`) : l'e-mail et le numéro sont échangés contre une offre que tout acheteur reçoit [déduit : soya/ux/kaching-popup-block.js]. Alertes Klaviyo `reviewDisclosureLanguage` et `addDisclosureBlock` écartées le 18/06/2026 ; pas de mention STOP ni de fréquence.

Second formulaire « HIGH PROSPECT (Cloned) » : audience ciblée, délai 5 s, code **BACK20** (-20 %), « Dépêchez-vous, ce code expire dans : » + minuteur variable de **13 minutes** (US/Eastern), clic sur le voile sans effet, refus « Non merci, je ne veux pas de réduction. », écran de fin en anglais ; BACK20 circule sur des sites de coupons (https://fr.coupert.com/codes-promo/soya-paris.com).

### 8.5 Inventaire des leviers de persuasion

| Levier | Chez Soya | Version honnête pour Somnila |
|---|---|---|
| Urgence | compteur quotidien sans fin ; « minuit » répété sur 4 écrans | minuteur uniquement jusqu'à une vraie date de fin écrite |
| Rareté | 89 % / 78 % / « quelques exemplaires » en dur | alerte liée à l'inventaire réel, ou rien |
| Ancrage | barré à ≈ 2 × le prix pratiqué ; Famille barré à 4 × 139,90 € | prix unique ; économie des packs calculée sur le prix réel |
| Preuve sociale | 4,8 / 15 637 en dur ; 100 000 (FR) contre 200 000 (EN) | note réelle par produit, identique dans le JSON-LD |
| Autorité | presse sans lien, « Dr » anonyme, « 200 praticiens », labels sans numéro | presse avec lien, experts nommés, numéros de certificat |
| Réciprocité | « Vous avez obtenu 60 % » | avantage réel, identique du début à la fin |
| Engagement | quiz → e-mail → SMS | quiz qui recommande le côté 13 ou 11 cm |
| Refus culpabilisant | 4 libellés : remises, VIP, réduction, cadeaux | « Non merci » |
| Option par défaut | housse pré-cochée | case décochée |
| Fierté nationale | rubans tricolores, « Paris », drapeau, éditeur au Wyoming | identité réelle affichée |

### 8.6 CRM et après-vente

- Expéditeur info@soya-paris.com ; e-mail de confirmation en anglais (« Confirm Your Subscription ») ; aucune application de fidélité, parrainage ou abonnement (recherche loyalty, referral, smile, rebuy, recharge, uppromote… dans soya/home.html et soya/pdp3.html).
- Suivi ParcelPanel dans le menu principal (**indice** d'un volume élevé de « où est ma commande ») ; transporteur masqué (`display_option.carrier: false`) ; `"sensitive_world":"China,Aliexpress,Chinese cities"` ; la documentation ParcelPanel décrit ce mode « One-click hide Chinese origins » (https://docs.parcelpanel.com/shopify/getting-started/dropshipping/) [mkt/pp.html]. On ignore s'il s'agit d'une valeur par défaut.
- Service client : « 7j/7 » sur le bandeau, « du lundi au samedi » sur la page contact ; pas de téléphone, aucun chat.

### 8.7 Réputation externe

Trustpilot (https://fr.trustpilot.com/review/soya-paris.com, relu les 25 et 26/09/2026) : 4,3/5, 6 273 avis, 5 294 sur 12 mois ; 65 % 5★, 16 % 4★, 2 % 3★, 1 % 2★, **16 % 1★** ; invitations régulières ; réponse à 4 % des avis négatifs **(v2 : les métadonnées des avis montrent deux flux, ≈ 22 avis par jour par le lien d'évaluation de la marque, moyenne 4,67, et ≈ 2 spontanés, moyenne 1,56 ; les « 4 % » sont 24 réponses identiques publiées du 20/04 au 05/05/2026 ; au moins 85 avis positifs de l'été 2025 ont disparu, § 19.3, § 19.5, § 19.10)**. Avis 1★ récents : remboursement attendu 2 à 3 mois, commandes partielles, livraison en 13 jours, « odeur de plastique », « made in china », « POLYESTER » pour de la soie, « ils font du dropshipping » : **affirmations de clients**. Un article tiers cite « 15,637 avis » sur les fiches à une époque où Trustpilot en comptait 3 119 (https://www.hadlemans.fr/soya-paris-avis/) : **indice** que le compteur est figé depuis des mois **(v2 : constaté ; « 15 637 » est identique dans les 46 captures Wayback des fiches, du 19/04/2025 au 07/09/2026, § 16.5)**. Sites de vérification : franceverif « fiabilité douteuse », dropshipping 9/10 (score automatique peu fiable) ; verifsites 4/5 ; signal-arnaques « 61 signalements, 244 commentaires » (titre seulement, page en 403).

### 8.8 Stratégie d'ensemble reconstituée (ajout du critique final) [déduit des constats cités]

**Le modèle en une phrase** : acheter du trafic sur une promesse de soulagement, le convertir sur une fiche construite comme une page de vente sous pression, gonfler chaque panier par des options et des popups, capter e-mail et téléphone pour relancer gratuitement, et piloter l'ensemble au coût d'acquisition.

| Étape | Mécanisme observé | Preuve | Rôle stratégique |
|---|---|---|---|
| 1. Attirer | Meta avec conversions serveur, TikTok, Snapchat, Pinterest, Google Ads et Merchant Center ciblé FR ; visuels carrés bleu nuit à accroches de santé ; héros et menu qui mènent à la fiche 3.0 | § 8.1 ; soya/gallery/sheet-1.jpg ; soya/home.html | volume payant, quasiment aucun organique |
| 2. Convaincre vite | note « 4,8 / 15 637 » au-dessus du H1, puces de santé, 4 stories vidéo avant le prix, packs lisibles | § 6.1 | conversion sans comparaison |
| 3. Presser | compteur quotidien, « 89 % écoulé », « quelques exemplaires », « meilleure offre de l'année » | § 1, points 3 et 4 | décision dans la session |
| 4. Gonfler le panier | housse pré-cochée (+14,90 €), packs de 2 et 4, popup lombaire à 19,90 € après ajout, vente croisée housse et coussin, AfterSell | § 6.5 ; § 7.5 | panier moyen et marge |
| 5. Capter | Klaviyo à 12 s : quiz → e-mail → SMS contre un « 60 % » ; segment « HIGH PROSPECT » avec BACK20 et minuteur de 13 min | § 8.4 | relances à coût quasi nul |
| 6. Mesurer | Triple Whale, API de conversions Meta, 7 conversions Google Ads, événements d'ajout au panier Klaviyo | § 8.1 | pilotage au coût d'acquisition |
| 7. Contenir l'après-vente | suivi ParcelPanel sans transporteur, invitations Trustpilot, réponse à 4 % des avis négatifs | § 8.6 ; § 8.7 | réputation « suffisante » au moindre coût |

**Arithmétique du panier par défaut** [calcul sur les prix affichés en EUR, non vérifiés au panier] :
- 1x : 69,90 + 14,90 (housse pré-cochée) = **84,80 €** ; avec la popup lombaire acceptée (19,90 €) : **104,70 €**, soit 1,50 fois le prix d'appel de 69,90 €.
- Duo : 98,90 + 2 × 14,90 = 128,70 € ; avec la popup : 148,60 €.
- Famille : 139,90 + 2 × 14,90 = 169,70 € ; avec la popup : 189,60 €.
La part des clientes qui gardent la case cochée ou acceptent la popup est inconnue. Seul indice : le ratio housses / oreillers de 41 % sur le 3.0 dans les inventaires exposés (§ 7.5). **v2** : 72 % sur 13 h 37 (25-26/09) et 70 % du 07 au 26/09/2026, des plafonds ; 20 à 40 % des commandes contiennent un coussin « lombaire » (§ 17.5, § 18.7). Panier moyen implicite : environ 90 à 140 € au prix central (§ 17.5).

**Quatre logiques qui tiennent l'ensemble** :
- *Prix* : un prix catalogue haut sert d'ancre partout où Google et la recherche le lisent (139,90 €), un prix effectif moitié moins cher est présenté chaque jour comme une remise (§ 7.3).
- *Gamme* : un seul vrai produit héros décliné en versions (1.0, 2.0, 3.0, enfant), le reste en accessoires génériques à forte remise affichée (§ 7.1, § 7.4).
- *Marque* : l'emprunt remplace la preuve (Paris, ostéopathes, presse, popularité ; § 2).
- *Calendrier* : un habillage saisonnier posé sur un mécanisme permanent. Le compteur « FRENCH DAYS » a été créé le 19/10/2025 avec une fenêtre d'origine du 17 au 21/10/2025 (heure de Paris), puis réglé en « récurrent, sans fin » ; le thème s'appelle « V16 – Version 3.0 French Days » [constaté : soya/pdp3.html, `essentialCountdownTimerConfigs` → `startDate` 2025-10-16T22:00Z, `endDate` 2025-10-21T21:59Z, `createdAt` 2025-10-19T13:35Z ; soya/home.html, `Shopify.theme`].

**Points de rupture de la stratégie** [déduit] :
1. *Dépendance au trafic payant* : aucun actif organique (blog vide, compte TikTok sans vidéo publique, aucun lien social sur le site). Si le coût d'acquisition monte, rien n'amortit.
2. *Dépendance à des leviers à risque réglementaire* : compteur, stock, note, case pré-cochée, allégations de santé. Un contrôle, une décision de justice ou un durcissement de la modération publicitaire sur les allégations de santé retirerait plusieurs leviers en même temps (hypothèse, aucun signal d'un tel événement n'a été relevé).
3. *Réputation* : 16 % d'avis à une étoile sur Trustpilot ; chaque nouvelle vague de clientes déçues rend la preuve sociale plus coûteuse.
4. *Pas de rétention* : aucune application de fidélité, de parrainage ou d'abonnement (§ 8.6) ; la housse de rechange est le seul achat récurrent possible.

**Pour Somnila** [déduit] : ne pas combattre la machine sur son terrain (pression, packs de 4, enchères au même coût d'acquisition), mais sur ses points de rupture : preuve vérifiable, contenu organique (guides, SEO), rétention (relance de la housse), information produit précise (§ 7.8).

---
## 9. UX et tunnel de conversion

### 9.1 Navigation

- Desktop : bandeau 58 px + en-tête 115 px = **173 px, 19,2 % du premier écran** ; menu de 6 libellés sur 2 lignes (Accueil ; Nouveau : Oreiller Soya 3.0 ; Best Seller : Oreiller Soya 2.0 ; Nos Best Sellers / Contact ; Suivre votre commande). Ni FAQ, ni Livraison, ni « Comment choisir » ; « Notre histoire » seulement en pied de page ; `/pages/faq`, `/pages/mentions-legales`, `/pages/cgv` en 404 (pages inexistantes, liées nulle part) [soya/cap/home-d.json ; soya/ux/pages_faq.html ; tech/live_pages_*.html].
- Mobile : bandeau 50 + en-tête 51 px ; tiroir avec les 6 liens et un sélecteur de 26 pays, sans langue. Zones de tap ≈ 42 × 42 px (`.tap-area:before{inset:calc(-1 * var(--spacing-2-5))}`, soit l'icône de 22 × 22 px agrandie de 10 px par côté) [constaté : soya/assets/theme.css ; tech/a11y-home-m.json]. **Correction du critique final** : une version précédente disait ces cibles « sous le seuil de 24 px de WCAG 2.5.8 ». C'est faux : la cible cliquable est la zone agrandie de 42 px, qui **respecte** le minimum de 24 × 24 px de WCAG 2.5.8 (niveau AA) ; elle reste sous les 44 × 44 px de WCAG 2.5.5 (niveau AAA) et des recommandations Apple. Les zones du burger et de la loupe se touchent [déduit du CSS, sections/ux.md].

### 9.2 Parcours observé

| Étape | Observé | Statut |
|---|---|---|
| Accueil | hero cliquable vers la fiche 3.0 ; faux bouton visible sur ≈ 26 px au pli ; carrousel de 14 produits sans le 3.0 | constaté |
| Collection « Nos Best Sellers » | seule vraie collection (17 produits, **sans le 3.0 ni le 2.0**) ; bannière 960 px (titre blanc sur photo claire, contraste ≈ 2,8:1) ; grille à **2 612 px** desktop (premier visuel 2 660, 2,96 écrans) et ≈ 2 000 px mobile (premier visuel 2 077, 2,46 écrans) ; **ni filtre ni tri** alors que la recherche en propose ; aucune note sur les cartes | constaté [soya/cap/col-*.json ; soya/ux/collections_nos-best-sellers.html] |
| Fiche 3.0 | voir § 6 | constaté |
| Clic « Ajouter au panier » | popup Kaching 400 × ≈ 746 px, coins 30 px, voile noir 70 % ; `/cart.js` à 0 article 4,5 et 6 s après le clic, dans deux sessions | constaté [soya/cap/funnel.json, funnel2.json] |
| Tiroir panier | non observé ; réglages `cartType: "drawer"`, `discountMode: "saving"` | déduit |
| Paiement | non observé (« Request Forbidden ») ; 10 moyens Shopify en pied de page ; AfterSell chargé | déduit |

**Pourquoi le panier restait vide [code constaté, cause déduite]** : `kaching-popup-block.js` remplace `window.kachingPopupFetch`, intercepte aussi les XHR, met tout `POST /cart/add` en file (`ks.push({args, resolveFetch, rejectFetch})`) et ne le rejoue qu'à la fermeture ou à l'acceptation de la popup [soya/ux/kaching-popup-block.js]. Autre cause possible : l'environnement automatisé. **Empilement** : sur `funnel-drawer-00.jpg` (≈ 14 s après l'arrivée), la fenêtre Kaching s'ouvre par-dessus le volet Klaviyo.

### 9.3 Popups comparées

| | Klaviyo « Le Tsunami » | Kaching (ajout au panier) |
|---|---|---|
| Déclenchement | 12 s, toutes pages | clic sur 2.0 ou 3.0, sans condition client |
| Fréquence | toutes les 24 h | 1 fois par 24 h |
| Desktop | flyout 950 × 580 (42 % de l'écran), sans voile | fenêtre centrée 400 × ≈ 746, voile #000000b3 |
| Mobile | 390 × 477 ancré en bas (56 %), voile rgba(20,20,20,.75) | pleine largeur |
| Urgence | « se termine aujourd'hui à minuit » | « -60 % jusqu'à ce soir, minuit ! » |
| Sortie | croix + « je n'aime pas les remises » | croix de 16 px + « je n'aime pas les cadeaux » |

Interférence : sur desktop, le volet recouvre titre, puces, stories et carte « 1x » (x 470-1 419, y 300-879) ; sur la fiche Couette mobile, il recouvre titre et prix [soya/cap/slices/couette-m-full-00.jpg].

### 9.4 Pages secondaires

- **Contact** : formulaire Nom / Email / Message ; « une ligne téléphonique dédiée … sera bientôt disponible » ; aucun chat (0 occurrence de Gorgias, Tidio, WhatsApp, Crisp, Zendesk, Intercom) [soya/cap/contact-d-text.txt].
- **Suivi** : ParcelPanel, titre anglais « Track Order Status - SOYA PARIS » [soya/ux/apps_parcelpanel.html].
- **Notre histoire** : 5 702 px, sans visage ni lieu. **Blog** : vide.
- **Pied de page** : « Your Privacy Choices » en anglais (page d'opposition prévue pour les États-Unis) ; ni Contact, ni Livraison, ni FAQ.

### 9.5 Notes par étape (appréciation de l'analyste)

| Étape | Efficacité commerciale | Expérience / loyauté |
|---|---|---|
| Accueil | 6 | 5 |
| En-tête et navigation | 5 | 5 |
| Collection | 3 | 4 |
| Bloc d'achat de la fiche | 8 | 2 |
| Ajout au panier | 6 | 2 |
| Popups | 7 | 2 |
| Service et suivi | 4 | 3 |
| Pages secondaires | 3 | 4 |
| Mobile global | 5 | 4 |
| Panier, paiement | non notés | non notés |

---

## 10. Technique, performance, SEO, accessibilité

### 10.1 Correctifs de méthode

- Les poids de `soya/cap/*.json` (13,8 Mo accueil, 18,1 Mo fiche) sont **décodés et en partie dupliqués** (relais Node qui décompresse, cache désactivé : un même script compté jusqu'à 8 fois). Les poids transférés retenus ci-dessous sont dédoublonnés par URL, en `content-length` compressé [tech/net_summary.json]. L'estimation « 52 à 54 Mo » de l'analyse UX, fondée sur ces poids bruts, est abandonnée.
- Les chiffres « premier écran » publiés dans une première version (28,31 Mo) incluaient le défilement : arbitrage en faveur de 27,48 Mo sans défilement.

### 10.2 Poids réels (mobile 390 × 844) [tech/net-home-m.json, net-pdp3-m.json]

| Mesure | Accueil | Fiche 3.0 |
|---|---|---|
| GET uniques sans / après défilement | 297 / 306 | **386** / 407 |
| Transféré (compressé) sans / après défilement | 3,30 / **3,56 Mo** | **27,48** / 28,31 Mo |
| Décodé sans / après défilement | 11,02 / 12,25 Mo | 45,49 / 47,77 Mo |
| SVG sans défilement | — | **22,34 Mo** (32 URL, 28 fichiers) |
| Préchargement checkout Shopify (standard) | 1,05 Mo | 1,05 Mo |
| Loox / Kaching / Google / Meta / Klaviyo | 26 / 204 / 509 / 255 / 338 ko | 588 / 376 / 559 / 255 / 338 ko |
| HTML (décodé / brotli) | 321 598 / 52 048 o | 624 388 / 86 229 o |
| Nœuds DOM (desktop) | 1 772 | 2 918 |
| Balises `<script>` | — | 102 (dont 44 externes), 170 ko de scripts et 161 ko de styles en ligne |

**Premier affichage (LCP) sur la connexion de collecte, non bridée** : accueil mobile 984 ms, élément = image du héros `mobile_french_days_better.png?width=400` (214 ko) ; fiche 3.0 mobile 828 ms (élément de 152 ko, non nommé par l'outil) [constaté : tech/net-home-m.json et tech/net-pdp3-m.json → `lcp`]. Nuance [déduit] : sur une bonne connexion, le premier affichage de Soya est rapide ; le poids pénalise la bande passante, les forfaits mobiles et la fluidité après le premier écran, pas forcément le premier affichage. Ces valeurs ne représentent pas un visiteur réel en 4G.

**Temps de transfert pur** (profil Slow 4G de Lighthouse, 1,6 Mbit/s, « roughly the bottom 25% of 4G connections », https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md) : accueil ≈ 18 s ; fiche sans défilement ≈ **137 s (2 min 17 s)**, dont 112 s pour les seuls SVG ; après défilement ≈ 142 s. À 10 Mbit/s (hypothèse) : ≈ 22 s pour la fiche [déduit].

**Autres gaspillages** : 3 des 4 tuiles SVG de 4,3-4,7 Mo sans attribut `loading` (chargées d'office, 4,9 écrans sous le haut) ; avatar « Dr. Marc » 570 934 o pour 60 × 60 px ; avatars de témoignages de 92-118 ko servis depuis une autre boutique (v2 : l'ancienne boutique de Soya, § 15.1) ; étoiles en hotlink icons8 ; hero desktop demandé en `width=5760`. **Gain le plus rapide pour Soya [déduit]** : convertir les 4 tuiles en WebP retirerait ≈ 13 Mo.

### 10.3 SEO

| Page | title | meta description | H1 |
|---|---|---|---|
| Accueil | « SOYA Paris - Confort & Bien-être pour un Sommeil Réparateur » (sans « oreiller ») | 250 caractères génériques | le logo (image `alt=""` + texte masqué) |
| Fiche 3.0 | « Oreiller Soya 3.0 » (17 caractères) | 320 caractères | « Oreiller Soya 3.0 » |
| Nos Best Sellers / collections/all / frontpage | « Nos Best Sellers » / « Produits » / « Home page » (0 produit, indexée) | aucune | idem |
| Blog / Contact | « News » / « Contact » | aucune | « Ce blog est vide » / aucun |

- Accueil : un H1 (logo) et 2 H2 (« Nos best sellers », « Nous avons demandé à nos clients… ») ; **arbitrage** : l'audit automatique les disait vides, le HTML contient bien le texte (dans `<split-lines>` animé). Messages clés en `<p class="h2">` et statistiques en `<p class="h1">`. Texte promotionnel prisonnier des images.
- Données structurées : ProductGroup à **139,90 €** `InStock`, sans gtin/sku/mpn/shippingDetails/hasMerchantReturnPolicy ; `aggregateRating` Loox 4,3 / 339 injecté côté client ; FAQPage de 13 questions qui diffuse « apnée du sommeil » et « SOYA 2.0 » (les résultats enrichis FAQ ont disparu le 7 mai 2026 selon https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/) ; Organization minimale.
- Architecture : 19 produits, 3 pages, 2 collections dont une vide, blog vide ; aucune collection par catégorie ; aucun contenu informatif. **Terrain libre pour Somnila** [déduit].
- International : 27 hreflang (fr, x-default, 25 `en-XX` vers us.soya-paris.com), mais la version anglaise garde titre, meta et sections d'accueil en français [soya/web/clone_us.soya-paris.com.html].
- robots.txt, `agents.md`, `/.well-known/ucp` : fichiers Shopify par défaut [soya/robots.txt ; tech/agents.md].

### 10.4 Accessibilité [tech/a11y-*.json ; 114 à 312 textes mesurés par page]

| Élément (blocs ajoutés) | Taille | Couleurs | Contraste (AA = 4,5:1) |
|---|---|---|---|
| Prix barré 1x | 12 px | #FF4D4D sur blanc | 3,27:1 |
| Prix barrés des packs | 12 px | #FF4D4D sur #F8F8F8 | 3,08:1 |
| Barré option housse / 2 housses | 12 px | sur #C8D5EF / #C4D0EA | 2,22 / **2,12:1** |
| Prix de l'option housse | 13 px gras | #4974CA sur #C8D5EF | 3,08:1 |
| Titres et prix des packs | 16 px gras | #4974CA sur #F8F8F8 | 4,27:1 |
| « Plus que quelques exemplaires » | 14 px / 600 | #E53935 sur blanc | 4,23:1 |
| « 89 % du stock déjà écoulé » | 14 px gras | #D94343 sur #F8F8F8 | 4,09:1 |
| « En stock – Prêt à l'expédition » (17 fiches) | 14 px | #228B22 sur blanc | 4,39:1 (calcul du critique final, formule WCAG, couleurs lues dans soya/web/p_oreiller-soya-1-0.html l. 1918 et 1935) |

Palette du thème correcte (#042146 sur blanc 16,02:1). Autres points : textes de 8 à 11 px sur mobile ; `maximum-scale=1.0` (zoom bloqué, WCAG 1.4.4) ; vidéo en boucle sans pause (2.2.2) ; aucune piste `<track>` ; modale des stories sans Échap ni gestion du focus. Points positifs du thème : lien d'évitement, `:focus-visible`, mouvement réduit, `lang="fr"`. Depuis le 28/06/2025, l'Acte européen sur l'accessibilité (directive 2019/882) s'applique au commerce électronique hors microentreprises : **risque** conditionnel, la taille de l'éditeur étant inconnue.

---

## 11. Légal et conformité : risques, pas conclusions

Aucun point ci-dessous n'est un constat d'infraction ; chacun décrit un risque au regard d'un texte.

| # | Sujet | Constaté | Texte | Niveau |
|---|---|---|---|---|
| 1 | Identification de l'éditeur | ni forme, ni immatriculation, ni capital, ni téléphone, ni directeur de la publication ; adresse d'agent enregistré | LCEN art. 1-1 (rédaction loi SREN du 21/05/2024) ; C. conso. L111-1, R111-1, L221-5 | élevé |
| 2 | Conditions générales | lien « CGV » vers les conditions d'utilisation Shopify ; `/policies/terms-of-sale` en 404 ; droit applicable = une adresse ; art. 13 excluant les garanties « de qualité marchande, […] de durabilité » | C. conso. L241-5 (clauses écartant la garantie de conformité réputées non écrites) ; C. civ. 1127-1 | élevé |
| 3 | Rétractation | 0 occurrence de « rétractation » ou « 14 jours » ; retour exigé « dans l'état où vous l'avez reçu et dans son emballage d'origine », 30 jours « depuis votre achat », adresse sur demande | L221-5, L221-18, L221-20 (délai prolongé de 12 mois si l'information manque), L221-23, L221-24 ; CJUE *slewo* C-681/17 (matelas descellé : rétractation possible) | élevé |
| 4 | Promesse d'essai | « 30 nuits d'essai — Satisfait ou remboursé », « retourner sans frais » (politique de livraison) contre l'exigence d'état d'origine (politique de remboursement). **v2** : environ 22 avis à 1-2★ disent avoir payé le retour (15 à 17,39 €) ; « emballage d'origine » exigé pour un oreiller livré sous vide ; attente médiane de remboursement de 60 jours (§ 19.9) | L121-2 (ambiguïté) | moyen ; **v2 : élevé** |
| 5 | Garantie légale, médiation | aucune mention de la garantie de conformité, des vices cachés ni d'un médiateur (les seules occurrences de « médiat » sont des « immédiatement ») ; le lien vers la plateforme européenne RLL n'est plus exigé depuis le 20/07/2025 (règlement 2024/3228) | L217-3 s., L111-1, L616-1, R616-1 | élevé |
| 6 | Urgence | compteur `recurring` / `never`, fin chaque jour à 23:59 Paris ; « L'offre se termine aujourd'hui à minuit » | L121-4 7° (https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563107) | élevé |
| 7 | Rareté | 89 % / 78 % / « quelques exemplaires » en dur, stock non suivi | L121-2, L121-4 7° | élevé |
| 8 | Avis | 4,8 / 15 637 sur 19 fiches contre 1 776 avis Loox ; témoignages « Acheteur vérifié » hébergés sur une autre boutique (corrigé v2 : l'ancienne boutique de Soya, § 15.1) et **publiés à l'identique** sur milaris.co (Richard S., Sarah M., Barbara P., Anthony M., « Acheteur vérifié ») et juvilor.com (« Richard. S, Montréal, QC », « l'oreiller OrthoDream »), pages ouvertes les 25 et 26/09/2026 ; aucune information sur la collecte des avis. **v2** : 64 % des avis Loox importés, dont 494 antidatés d'avant le domaine et 462 « Vérifié » coché à l'import ; 56 textes répétés sous 144 noms ; lien Trustpilot envoyé avant la livraison ; « tirage au sort » de remboursements rapporté par trois clients [non vérifié] ; questionnaire redaté de juillet 2024 à juillet 2025 à pourcentages constants ; clients passés de 20 000 à 100 000 puis figés ; témoignages antérieurs au produit (§ 15.3, § 19.4, § 19.5, § 19.9, § 19.13) | L111-7-2, D111-17 ; L121-4 27° et 28° | élevé (indices forts) |
| 9 | Prix barrés | 139,90 € barré, jamais proposé sur la fiche ; housse barrée 39,90 € vendue 17,90 € seule ; -75 % sous un « jusqu'à -60 % » | L112-1-1 (https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044549592) | élevé, historique inconnu **(v2 : historique en partie reconstitué : 2.0 vendu 49,90 € au printemps 2025 puis « remisé » à 59,90 € sous 109,90 et 119,90 € ; référence du 3.0 relevée de 119,90 à 139,90 € à prix payé constant ; aucune capture du 20/05 au 15/08/2025, § 17.4)** |
| 10 | Option pré-cochée | housses `preselected: true` | L121-17 (https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032227250) ; directive 2011/83/UE art. 22 ; amende L132-22 jusqu'à 3 000 € (personne physique) et 15 000 € (personne morale) | élevé |
| 11 | Allégations de santé | apnée, reflux, « dès la première nuit », « prouvée », « Traite les douleurs chroniques » (popup), « soulager des conditions comme le reflux acide » (oreillers réglables) ; aucune étude, aucun marquage CE | L121-4 16° ; L121-2 ; règlement (UE) 2017/745 art. 2 (requalification en dispositif médical) | élevé |
| 12 | Labels | CertiPUR, OEKO-TEX sans numéro ; OEKO-TEX offre une vérification (https://www.oeko-tex.com/en/label-check/) | L121-4 2° | à vérifier |
| 13 | Chiffres de notoriété | 100 000 clients, 200 praticiens, 96 % « soulagement durable de la douleur cervicale » sans méthode | L121-2 | moyen |
| 14 | Données personnelles | politique modèle Shopify invoquant l'intérêt légitime pour le marketing ; aucun représentant UE (RGPD art. 27) ; depuis l'IP américaine, pixels TikTok, Google Ads, Pinterest, Snapchat et Meta appelés 2,1 à 3,0 s après l'arrivée sans interaction ; comportement pour un visiteur français non vérifié | CPCE L34-5 ; loi Informatique et Libertés art. 82 | à vérifier |
| 15 | Origine | « Paris », drapeau, rubans tricolores ; éditeur au Wyoming, boutique en GB | L121-2 | moyen ; **v2** : 12 à 15 % des avis 1-2★ Trustpilot parlent de Chine, Temu ou dropshipping, et ParcelPanel masque « China, Aliexpress » (§ 18.8, § 19.11) |
| 16 | Mot « soldes » (v2) | « SOLDES D'ÉTÉ » affiché les 15, 26, 27 et 31/08/2025 et les 03 et 24/08/2026, après la fin légale des soldes d'été (28/07/2026 après prolongation, vérifié ; 22/07/2025 d'après des résultats de recherche [non vérifié]) | C. com. L310-3 | moyen à élevé (§ 16.8 bis) |
| 17 | Fin de série annoncée (v2) | « DESTOCKAGE TOTAL \| FIN AUJOURD'HUI À 00H » sur le 2.0 le 28/10/2025, puis « FIN DU DÉSTOCKAGE À 00H » en vidéo ; le 2.0 se vend encore à 130-250 unités par jour de décembre 2025 à septembre 2026 | L121-2 | moyen (§ 16.8 bis, § 17.4) |
| 18 | Données de santé de tiers (v2) | vidéo « Avis clients » qui affiche des commentaires Facebook avec le nom de leurs auteurs et des pathologies (arthrose cervicale, discopathie, métastases) | RGPD art. 9 ; L121-4 16° (allégation de santé par procuration) | élevé (§ 16.5) |
| 19 | Livraison et remboursement (v2) | délai médian déclaré de 13 jours pour 4 à 8 jours annoncés ; express payé non tenu ; attente médiane de 60 jours pour un remboursement ; paiement débité à la commande ; affirmations de clients | C. conso. L216-1 (délai de livraison indiqué) ; L221-24 pour les retours exercés dans le délai de rétractation | moyen, à vérifier sur dossiers (§ 19.8, § 19.9) |

Ordre de grandeur des sanctions pour pratique commerciale trompeuse : jusqu'à 2 ans d'emprisonnement et 300 000 € d'amende, portés jusqu'à 10 % du chiffre d'affaires (L132-2), sans préjuger d'une qualification.

---
## 12. Forces, faiblesses, menaces pour Somnila

| Forces de Soya | Faiblesses de Soya |
|---|---|
| Machine d'acquisition payante complète et pilotée (CAPI, Triple Whale, 6 réseaux) | Identité invérifiable, éditeur au Wyoming, pas de CGV ni de rétractation |
| Volumes probables en dizaines de milliers d'unités (indice : inventaires) ; **v2** : mesurés, ≥ 240 oreillers 3.0 et 162 oreillers 2.0 par jour, 0,59 à 0,79 M€ TTC par mois, ≥ 4,0 M€ en 342 jours (§ 17) | Note, rareté, urgence et remise non adossées aux données : exposées à un contrôle DGCCRF ou à un article de presse |
| Packs agressifs (34,98 €/u en Famille) hors d'atteinte de Somnila | Réputation : 16 % d'avis 1★, remboursements lents, 4 % de réponses |
| Stories vidéo humaines dans le bloc d'achat | Fiche de 27,5 Mo, 2 min 17 s en Slow 4G, prix et bouton à 2,1 écrans en mobile |
| Vrai shooting lifestyle, packshots homogènes | Contenu recyclé du 2.0, versionnage de façade, coquilles |
| Présence probable sur Google Shopping (Merchant Center ciblé FR, 7 conversions Ads) | SEO faible : blog vide, titres sans mot-clé, une seule collection |
| Quiz de position, capture e-mail + SMS | Consentement SMS ambigu, promesse « 60 % » qui change d'objet |
| **v2** : kit de vidéos verticales face caméra, offre de couple déclinée, campagne Google Search et fiches Shopping gratuites (§ 16) | **v2** : après-vente défaillant (13 jours de délai médian déclaré, 60 jours d'attente de remboursement, retours payants malgré « sans frais »), colère concentrée sur Trustpilot (§ 19) |
| **v2** : panier gonflé qui finance l'acquisition (housse cochée, lombaire dans 20 à 40 % des commandes, packs de 4) (§ 17.5, § 18.6) | **v2** : preuves sociales importées ou recyclées, exposées à une vérification (64 % d'avis Loox importés, questionnaire redaté, témoignages antérieurs au produit) (§ 15.3, § 19.4) |
| **v2** : parc de boutiques et de comptes qui permet de rebasculer vite (5 boutiques en 13 mois) (§ 15.4) | **v2** : instabilité des comptes (4 Merchant Center, pixel TikTok remplacé, boutiques fermées) et marque parasitée par des clones moins chers (§ 15.5, § 15.9) |

**Menaces pour Somnila [déduit]**

1. **Comparaison de prix défavorable en apparence** : sur la fiche, Soya affiche « 69,90 € au lieu de 139,90 € » ; Somnila à 69,90 € sans barré peut paraître « plein tarif ». Il faut l'expliquer, pas l'imiter.
2. **Packs** : 2 oreillers à 98,90 € (Soya) contre 119,90 € (Somnila) ; 4 à 139,90 € contre 3 à 169,90 €. Somnila ne peut pas suivre : coût d'achat 25 € par oreiller, CAC hypothèse 25 €, point mort du Neck 01 seul à CAC 39 € [build/ANALYSE_PRIX.md ; build/PRIX.md]. **(corrigé v2 : ces deux fichiers calculent la marge sur le prix TTC, sans TVA. Pour une commande européenne à 20 % de TVA, le Neck 01 laisse 27,43 € avant publicité, 2,43 € après un CAC de 25 €, et le point mort tombe à 27,43 € de CAC ; à quoi s'ajoute le droit européen de 3 € par catégorie d'articles sur les colis venant de Chine depuis le 01/07/2026. Le marché principal prévu restant les États-Unis, la grille est à refaire par marché, § 18.9)**
3. **Enchères publicitaires** : Soya occupe Meta, TikTok et Google sur la même cible ; son panier moyen gonflé (housse pré-cochée, popup lombaire, AfterSell) lui permet de payer un CAC plus élevé.
4. **Délai** : Soya annonce 1 j + 3 à 6 j ouvrés ; Somnila 6 à 10 jours, livraison offerte dès 54,90 € [build/HANDOFF.md]. Les avis Trustpilot de Soya évoquent pourtant des livraisons de 13 jours : l'écart réel est moindre qu'affiché, mais Somnila doit annoncer son vrai délai.
5. **Modèle d'approvisionnement comparable** : Somnila aussi fait expédier par son fournisseur [build/PRIX.md, l. 9]. Attaquer Soya sur « made in China » ou le dropshipping serait incohérent et dangereux. L'angle est la **transparence** (origine, délai, transporteur affichés), pas l'origine elle-même.
6. **Copie** : Soya a au moins une boutique miroir et des annonces Amazon à son nom ; une marque qui réussit sur ce segment est copiée vite. **v2** : au moins cinq boutiques clones en deux grappes (dont deux qui vendent le 3.0 à 49,90 € avec un paiement hors de Shopify), des domaines « soyaparis* » enregistrés en rafale, deux sites qui copient les témoignages, des tiers qui captent la requête « soya paris avis » (§ 15.9, § 15.10, § 16.11, § 17.8).
7. **Retournement du marché** : si la DGCCRF ou la presse s'attaque aux comptes à rebours perpétuels et aux notes écrites en dur sur ce segment, la méfiance touchera toute la catégorie, Somnila comprise, sauf si elle a déjà rendu ses preuves visibles.

---

## 13. Plan d'action pour Somnila

Règles non négociables : zéro promesse médicale, données réelles uniquement, aucun faux avis, aucune fausse urgence. Le vocabulaire « orthopedic, cervical, relief, treats, doctor recommended » est déjà proscrit par le brand book [build/BRAND_BOOK.md l. 74 ; build/PHASE1_NOM.md l. 93-94].

### 13.1 Ce qu'on copie (honnêtement)

| Mécanique de Soya | Version Somnila |
|---|---|
| 4 bulles « stories » avant le prix (Concept, Lequel choisir ?, Avis clients, FAQ) | 3-4 bulles filmées par le fondateur : « Pourquoi 13 / 11 cm », « Quelle hauteur pour moi (dos, côté) », « Déballage et décompression », « Vos questions » ; fichiers transcodés par Shopify, **5 Mo maximum** par clip, poster fixe, lecture au clic, modale avec Échap et focus |
| Cartes 1x / Duo / Famille | 1 oreiller / Pour deux / Famille à prix permanents, prix par oreiller affiché, économie calculée sur le prix réellement pratiqué ; total dans le bouton (« Ajouter — 69,90 € ») |
| Vente de housse | pack Neck 01 + housse à 76,90 €, ou housse proposée **décochée** à son vrai prix, dans le tiroir panier |
| Barre d'achat collante | même prix et même option que le bloc principal, sur toutes les largeurs |
| Quiz de position | quiz qui recommande le côté 13 cm ou 11 cm du Neck 01 ; contrepartie annoncée dès le premier écran ; refus « Non merci » |
| Offre après ajout au panier | présentée pour ce qu'elle est, prix réel, aucune allégation, refus neutre |
| Pile d'acquisition | Meta avec CAPI, TikTok, Merchant Center, Klaviyo avec ajouts au panier, outil d'attribution ; bannière de consentement conforme avant les pixels |
| Page de suivi | libre-service, **transporteur nommé** |
| Relance housse | e-mail de réachat déclenché par la date d'achat |
| Grammaire d'animation d'Impact | 200-350 ms, ease, 15 px, mouvement réduit respecté |
| Photographie de vie | vraie séance photo du Neck 01, chaque accessoire du cadre contrôlé (pas de magazines étrangers, pas de badges non détenus) |

### 13.2 Ce qu'on évite (liste noire)

Compteur récurrent ou relancé à chaque visite ; stock « écoulé », « mise à jour il y a quelques secondes », pastille « En stock » non reliée à l'inventaire ; note et nombre d'avis écrits en dur ; témoignages collés d'un modèle ou d'une autre boutique ; prix barré sans prix antérieur réellement pratiqué pendant 30 jours ; case payante pré-cochée ; « 60 % obtenus » qui changent d'objet ; deux popups empilées ; popup au-dessus du bloc d'achat ; refus culpabilisants ; logos presse sans article ; pastilles de certification sans numéro ; « Dr » anonyme ; allégations apnée, reflux, « dès la première nuit », « prouvé » ; chiffre de clients différent selon la langue ; SVG enveloppant des photos ; vidéos originales en vignette ; texte promotionnel incrusté dans les images ; H1 en image ; menu sur deux lignes.

**Ajouts v2** : mot « soldes » hors des périodes légales ; « déstockage » d'un produit toujours au catalogue ; « fin aujourd'hui » qui se renouvelle d'un événement à l'autre ; prix de référence relevé alors que le prix payé ne change pas ; avis importés, antidatés ou marqués « Vérifié » à la main ; même texte d'avis sous plusieurs noms ; lien d'avis envoyé avant la livraison ou à une partie seulement des clientes ; toute contrepartie à un avis (tirage au sort, remboursement, code promo) ; réponse type unique aux avis ; demande de modifier un avis ; commentaires d'annonces qui citent des maladies réutilisés en publicité ; « Élu … » sans organisateur ; statistique redatée ; nombre de clients figé ; housse ajoutée d'une autre couleur que l'oreiller ; « sans frais » si le retour est payant ; « emballage d'origine » exigé pour un produit livré sous vide ; délai compté depuis l'expédition ; visuels d'un coloris générés par IA présentés comme des photos ; deux pourcentages de remise différents sur le même écran ; popup plein écran au clic « Ajouter au panier » (§ 15.3, § 16.8 bis, § 17.4, § 19.4 à § 19.13, § 18.2 bis, § 20.2).

### 13.3 Comment on les bat : le face-à-face Neck 01 / Soya 3.0

| Critère | Soya 3.0 | Neck 01 | Message Somnila (vérifiable) |
|---|---|---|---|
| Prix affiché | 69,90 € « au lieu de 139,90 € » sur la fiche ; 139,90 € dans la recherche, sur `/collections/all` et dans la barre collante | **69,90 €**, un seul prix partout | « 69,90 €. Le prix de tous les jours, sans compte à rebours. » |
| Panier par défaut | 84,80 € (housse pré-cochée, non vérifié au panier) | 69,90 € ; 76,90 € avec housse de rechange choisie | « Rien n'est coché à votre place. » |
| Hauteurs | 14,4 / 9 cm, illustrées par deux oreillers différents ; housse « 60 x 40 » contre fiche « 62 x 37 » | 13 / 11 cm sur **le même oreiller**, photographiées avec une règle | cotes identiques sur fiche, FAQ, emballage et politiques |
| Avis | « 4,8 / 15 637 » figé | compteur de l'application d'avis, même modeste ; « Nouveau – premiers avis en cours » au lancement | note identique sur la page et dans le JSON-LD |
| Urgence | minuit chaque nuit | aucune, sauf temps fort daté (French Days officiels, Black Friday) avec une seule justification | — |
| Essai | « 30 nuits » mais retour exigé « dans l'état reçu », 30 jours « depuis votre achat » | 30 nuits comptées **depuis la réception**, oreiller utilisé repris, écrit pareil partout | + droit de rétractation de 14 jours rappelé, délai de remboursement écrit |
| Livraison | 1 j + 3-6 j ouvrés annoncés, 13 j dans des avis | 6-10 jours, offerte dès 54,90 € | le délai réel, avec transporteur nommé |
| Identité | éditeur « soya-paris.com », Wyoming | raison sociale, identifiant d'entreprise, adresse, contact réel (si la structure juridique le permet) | pied de page et mentions légales complets |
| Santé | apnée, reflux, ostéopathes N°1 | géométrie, fermeté, confort | aucune allégation |
| Vitesse | 27,5 Mo, 2 min 17 s en Slow 4G | objectif < 3 Mo, WebP par `image_url`, pas de lecture forcée | prix et bouton dans le premier écran mobile |
| Délai réel (v2) | médiane déclarée de **13 jours** de la commande à la réception ; express payé non tenu (§ 19.8) | délai affiché **de la commande à la porte**, calé sur les 20 premières commandes réelles ; les 6 à 10 jours actuels sont plus courts que le réel de Soya et ambitieux pour un envoi direct de Chine (§ 18.9) | « Livré en X à Y jours après votre commande », transporteur nommé |
| Remboursement (v2) | attente médiane de 60 jours au moment de l'avis ; remboursements obtenus après un avis négatif (§ 19.9) | remboursement émis sous 2 jours ouvrés après l'e-mail ; l'oreiller n'est pas renvoyé | délai médian de remboursement publié |
| Retour (v2) | « sans frais » annoncé, 15 à 17,39 € payés par des clients ; « emballage d'origine » exigé pour un oreiller livré sous vide | oreiller : aucun renvoi ; accessoires : qui paie et combien, écrit avant l'achat | — |
| Origine (v2) | « Paris » ; 12 à 15 % des avis 1-2★ parlent de Chine, Temu ou dropshipping | pays de fabrication écrit sur la fiche et la page livraison | transparence ; jamais d'attaque sur l'origine de Soya |
| Avis (v2) | 64 % des avis Loox importés ; lien Trustpilot parfois envoyé avant la livraison ; 24 réponses types | invitation automatique vérifiée envoyée à **toutes** les commandes après l'essai, sans contrepartie ; réponse publique à 100 % des avis négatifs | répartition des notes affichée |
| Housse (v2) | « fibre de bambou » annoncée, « 85 % polyester et 15 % élasthanne » selon une cliente ; housse ajoutée Bleu par défaut [indice] | composition recopiée de l'étiquette cousue, photo de l'étiquette ; housse de la couleur de l'oreiller | — |
| Position (v2) | trop haut pour beaucoup, dormeuses sur le ventre déçues même par le côté de 9 cm (§ 19.7) | « Neck 01 : dos et côté » ; aucun oreiller Somnila actuel pour le ventre | test de position en 2 questions |

### 13.4 Actions classées

**Immédiat (avant la prochaine campagne)**
1. Fiche Neck 01 : H1 textuel « Neck 01 — oreiller à mémoire de forme, deux hauteurs » ; prix 69,90 € sous le H1, vers y 700 en mobile ; bouton dans le premier écran (Soya : 2,1 écrans) ; 3-4 puces factuelles (hauteurs, matière et densité si connues, housse lavable à la température réelle, conditions d'essai).
2. Galerie de 8 à 10 visuels uniques, JPEG ou WebP de 300 Ko maximum, alt descriptifs propres, zoom activé, aucune cote différente d'une page à l'autre.
3. Politiques : CGV françaises, droit de rétractation de 14 jours et formulaire, garantie légale de conformité, médiateur, essai compté depuis la réception, délai de remboursement écrit, adresse de retour publiée.
4. Mentions légales complètes selon la structure réelle de Somnila.
5. Avis branchés sur l'application, par produit, identiques dans le JSON-LD ; page « Comment nous collectons les avis » (L111-7-2).

**Court terme (30 jours)**
6. Collections par usage (dos, côté, couple), filtres et tri ; en-tête d'une ligne, collant, avec « Aide / Livraison ».
7. Blog de guides de choix (hauteur selon la position, fermeté, entretien), sans promesse médicale : Soya n'en a aucun.
8. Occuper « Somnila avis » (Trustpilot ouvert à tous les acheteurs, 100 % de réponses) ; contenu comparatif strictement factuel **sans nommer Soya**, dans le respect des règles de la publicité comparative (L122-1 : comparaison objective de caractéristiques vérifiables).
9. Consentement SMS explicite : case séparée, non cochée, « J'accepte de recevoir des SMS promotionnels de Somnila, désinscription par STOP ».

**Veille**
10. Relever chaque mois chez Soya : prix de la fiche 3.0 et de la recherche, configuration du compteur (`endType`), texte du bloc de note, nouvelles fiches (coloris, déclinaisons), boutiques miroirs, Trustpilot. **v2** : y ajouter les compteurs `inventoryQuantity` (outil `build/analyse/soya-paris/outils/inv.py`, un relevé par jour pendant au moins 7 jours, deux relevés espacés donnant les unités vendues), le titre du bloc d'offres Kaching, la liste de domaines et les pixels de la boutique 93550543180 (en-têtes Wayback, URL de polices), les nouveaux certificats « soya* » sur crt.sh et le flux Trustpilot par source de collecte (JSON du widget TrustBox). Méthode sans requête à Soya : § 15.2, § 15.15, § 17.2, § 19.2.
11. Protéger la marque Somnila (dépôt INPI/EUIPO, classes 20 et 24 ; domaines proches) : Soya est déjà copiée. **v2** : Soya est clonée par au moins deux grappes de boutiques tierces, dont une qui fait payer hors de Shopify. Réserver aussi somnila.fr, .com, .shop, .store et les variantes à tiret, les comptes @somnila sur TikTok, Instagram, Facebook, YouTube, Pinterest et Snapchat ; publier une page « nos sites officiels » ; chercher chaque semaine « somnila% » sur crt.sh (§ 15.15, § 16.12).

### 13.5 Ce que la voix du client impose à Somnila (ajout v2)

Tiré des 2 434 avis lus au § 19 ; le tableau complet « attente → promesse → indicateur » est au § 19.14. Priorités, dans l'ordre :

| # | Action | Où | Indicateur | Pourquoi (preuve chez Soya) |
|---|---|---|---|---|
| 1 | Afficher un délai **de la commande à la porte** (« livré en X à Y jours après votre commande »), calé sur les 20 premières commandes réelles ; retirer « counted from the day the parcel leaves » ; pas d'option express tant qu'elle n'est pas tenue | fiche, FAQ, e-mail de confirmation, paiement | 90 % des commandes livrées dans le délai affiché ; délai médian publié chaque trimestre | médiane déclarée de 13 jours pour 1 + 3 à 6 jours promis ; express payé non tenu (§ 19.8) |
| 2 | Écrire le **pays de fabrication** (« Fabriqué en Chine par notre partenaire, expédié directement depuis son entrepôt ») ; nommer le transporteur ; message proactif si aucun scan en 72 h | fiche, FAQ, page livraison, e-mail d'expédition | 0 avis « découverte de l'origine » ; part des colis sans scan à 72 h | 12 à 15 % des avis 1-2★ parlent de Chine ; transporteur masqué (§ 19.11, § 8.6) |
| 3 | Remonter l'**essai sans renvoi** près du bouton : « 30 nuits à partir de la livraison. Il ne vous convient pas ? Un e-mail suffit, vous gardez l'oreiller. » | fiche | délai médian entre la demande et le remboursement | « emballage d'origine » exigé pour un oreiller livré sous vide ; retour payé (§ 19.9) |
| 4 | **Remboursement sous 2 jours ouvrés** après l'e-mail, au lieu de « as soon as we confirm » ; écrire qui paie le retour des accessoires ; dire que le paiement est débité à la commande, ou le capturer à l'expédition | politique de retour, FAQ, paiement | 100 % en 5 jours ouvrés ou moins ; 0 relance | médiane de 60 jours d'attente ; remboursements obtenus après un avis négatif ; encaissement immédiat reproché (§ 19.8, § 19.9) |
| 5 | **Guide des positions** : « Neck 01 : dos et côté » ; écrire qu'aucun oreiller Somnila actuel n'est conçu pour le ventre (le Contour 01, 10 cm d'après le devis, dépasse les 9 cm jugés trop hauts chez Soya) ; hauteurs 13 et 11 cm mesurées sur échantillon ; test en 2 questions | fiche, guide | part des remboursements pour « hauteur » | 15 avis « trop haut » contre 6 « trop bas » ; dormeuses sur le ventre déçues (§ 19.7) |
| 6 | **Odeur** : une durée vérifiée sur échantillon à la place de « a light smell for the first hours » ; « aérez 24 à 72 h ; si l'odeur persiste après 7 nuits, on rembourse » | FAQ | réclamations « odeur » | odeur de plastique jusqu'à un mois (§ 19.7) |
| 7 | **Housse et fermeté décrites honnêtement** : composition en %, recopiée de l'étiquette cousue, avec photo ; fermeté sur une échelle et densité de la mousse, à obtenir du fournisseur ; tenue dans le temps promise seulement si elle a été testée | fiche | 0 « matière non conforme » ; mentions « dur » ou « mou » | « bambou » contre « 85 % polyester » ; jugé trop dur (≈ 25 avis) ou qui se tasse (8 à 11) (§ 19.7) |
| 8 | **Adaptation** : e-mail à J+3, « comptez 3 à 7 nuits ; si la tête bascule, passez sur 11 cm » | e-mail, fiche | taux de conservation après l'essai | 12 % des 4-5★ et 19 % des 3★ en parlent (§ 19.14) |
| 9 | **Service client humain** : réponse signée, délai affiché de 24 h ouvrées, aucune réponse type ; réponse publique à 100 % des avis négatifs avec les faits du dossier ; ne jamais demander de modifier un avis | service client, avis | taux de réponse ; délai de première réponse | e-mail seul, réponses par IA, 24 réponses identiques (§ 19.10) |
| 10 | **Avis** : invitation automatique vérifiée envoyée à **toutes** les commandes à J+35 après la livraison, sans filtre ni contrepartie (ni tirage au sort, ni remboursement, ni code) ; note réelle et répartition affichées ; aucun import | application d'avis, Trustpilot | part des commandes invitées = 100 % | imports Loox, lien envoyé avant la livraison, « tirage au sort » rapporté (§ 19.4, § 19.9, § 19.13) |
| 11 | **Aucune promesse de santé** ; « en cas de douleur persistante, parlez-en à un professionnel » ; l'essai couvre le cas où l'oreiller ne convient pas | partout | 0 allégation de santé | ≈ 14 avis de douleur aggravée face à « soulage dès la première nuit » (§ 19.7) |

### 13.6 Ce que le sourcing et les marges imposent à Somnila (ajout v2)

1. **Refaire la grille de prix par marché** [déduit, § 18.9 ; à faire confirmer par un expert-comptable].
   - *Europe* : build/PRIX.md et ANALYSE_PRIX.md ignorent la TVA. À 20 %, le Neck 01 à 69,90 € TTC laisse 27,43 € avant publicité et **2,43 € après un CAC de 25 €** (et non 14,08 €) ; le point mort tombe de 39,08 à **27,43 €** de CAC. S'y ajoute, depuis le 01/07/2026 et jusqu'au 01/07/2028, le droit européen de 3 € par catégorie d'articles sur les colis de 150 € ou moins venant de Chine (frais de gestion de 2 € par colis attendus en novembre 2026). Pour des colis expédiés de Chine à des particuliers européens, la TVA est due par l'IOSS ou à l'import.
   - *États-Unis* (marché principal prévu, Neck 01 à 79,99 $) : l'exemption *de minimis* est suspendue pour tous les pays ; un droit s'applique à chaque envoi, au taux non vérifié pour des oreillers chinois. La politique de livraison de Somnila promet de régler les frais demandés à la livraison : ce coût n'apparaît pas dans le devis à 25 € « tout compris ».
2. **Demander au fournisseur, par écrit** : les droits et la TVA sont-ils inclus dans les 25 € (UE et États-Unis) ? Quelle valeur est déclarée sur le colis ? Le pack oreiller + housse est-il déclaré en une ou deux catégories (3 ou 6 € de droit européen) ?
3. **Commander un échantillon avant toute publicité.** Le Neck 01 n'existe qu'en rendus 3D, dont deux portent des caractères chinois ; mesurer hauteurs, poids, odeur, fermeté et composition de la housse ; vérifier que la housse de rechange 07 (63 × 39 cm, poids noté « 1,3 (?) » kg) va sur l'oreiller (62 × 42 cm) ; demander ce que montre la photo `build/images/source/03-masque/masque_blanc_face_04.jpg` (un oreiller nuage).
4. **Corriger le packshot « Mask 01 Cloud »** (`build/images/shopify/somnila_mask-01_packshot-cloud-2_1x1_v1.jpg`), qui montre un oreiller et non un masque, avant toute mise en ligne (produits encore en brouillon) [constaté, § 18.2].
5. **Revoir ou justifier le prix du Lounge 01** (54,90 €) : Soya vend probablement le même coussin de lecture 42,90 € [indice fort, § 18.2]. Publier ses cotes et sa composition, ou baisser le prix.
6. **Récupérer honnêtement ce que la case cochée rapporte à Soya** (4,71 à 9,25 € de marge par housse) : mettre en avant le pack Neck 01 + housse à 76,90 € ; proposer la housse décochée dans le tiroir panier, de la couleur de l'oreiller.
7. **Ne combattre Soya ni sur le prix de revient ni sur l'origine** : Soya paie probablement 13 à 25 € son oreiller, comme Somnila ; ses visuels et ceux du fournisseur de Somnila portent du chinois (§ 18.6, § 18.9).
8. **Délais tenables** : les 6 à 10 jours annoncés sont plus courts que le réel observé chez Soya (≈ 12 à 13 jours médians) ; afficher ce que le fournisseur tient réellement (§ 18.9, § 19.8).

### 13.7 Ce que le réseau, la publicité et le trafic ajoutent (ajout v2)

- **Format publicitaire** : vidéos verticales 9:16 de 30 à 60 s, sous-titrées, produit manipulé ; mains et voix off, puisque le BRAND_BOOK impose un fondateur sans visage (`build/BRAND_BOOK.md` l. 27) ; chaque image montre un fait (retourner l'oreiller pour montrer 13 puis 11 cm, poser un mètre sur les 62 × 42 cm, peser 1,4 kg, retirer la housse) ; une FAQ vidéo honnête sur les vraies objections (§ 16.12).
- **Offre** : un prix Duo permanent plutôt qu'un « -30 % sur le 2ème » limité ; l'offre Duo est décisive, le volume de Soya se faisant en packs (§ 16.12, § 17.10).
- **Titres d'annonces** : un fait vrai (« Same price every day. 30 nights to decide. ») ; jamais « Élu … », « N°1 », « recommandé par », « +200 praticiens », « soulage », « dès la première nuit », ni une phrase qui prête une douleur au lecteur ; ne pas nommer Soya (§ 16.12).
- **Commentaires d'annonces** : modérer ceux qui promettent un effet de santé ; ne réutiliser que des avis sur le produit, avec consentement écrit (§ 16.12).
- **Calendrier** : pas de « soldes » hors des périodes légales, pas de « fin aujourd'hui » renouvelée, pas de « déstockage » d'un produit au catalogue ; chaque temps fort a une date de début, une date de fin et un prix de référence réel (L112-1-1) ; concentrer le budget sur janvier-février et septembre, les pics observés chez Soya (§ 16.12, § 17.10).
- **Google** : une petite campagne Search sur le nom Somnila dès le lancement, avec une annonce factuelle ; Merchant Center relié pour les fiches Shopping gratuites dès le premier jour ; une page d'avis réels, pour ne pas laisser des tiers capter « somnila avis » comme ils captent « soya paris avis » (§ 16.12, § 17.8, § 17.10).
- **Organique** : des guides factuels sur les requêtes papillon, nuage et deux hauteurs, tenues par de petites boutiques (hauteurs 13 / 11 cm, poids 1,4 kg, choix selon la position) ; entrer dans les comparatifs (sleeps.fr, presse-citron, meilleurs.fr, roussette) en envoyant des échantillons, avec une mention transparente (§ 17.10).
- **Ne pas suivre l'enchère Meta** : Soya dépenserait de l'ordre de 3 800 à 10 400 € par jour hors pic [hypothèse, § 16.9] ; Somnila gagne au taux de conversion (preuve, clarté) et à la rétention (housse de rechange, e-mail).
- **Stabilité et traçabilité** : une seule boutique, un seul Merchant Center, des pixels propres ; toute statistique publiée avec sa méthode, sa date et son effectif, et archivée ; récit de fondation daté (§ 15.15).
- **Animation** : 150 ms pour un retour de clic, 200 ms pour un survol, 300 à 350 ms pour une révélation, 50 ms de décalage entre cartes, courbe `ease` ; confirmation d'ajout par le tiroir panier, jamais par une popup plein écran ; barre collante au même prix que le bloc d'achat ; un seul pourcentage par écran (§ 20.4).

---

## 14. Limites de l'enquête

- **IP américaine** : une partie des captures affiche des USD et un sélecteur de langue ; les pixels ont été relevés depuis les États-Unis (edge IAD) : la bannière de consentement vue par un visiteur français n'a pas été observée.
- **Panier et checkout non observables** : l'ajout au panier ne s'est pas enregistré (file d'attente Kaching ou environnement automatisé) et `/checkout` répond « Request Forbidden ». Totaux de panier, prix facturé hors du bloc Kaching, offres AfterSell et e-mails : **non vérifiés**.
- **Captures modifiées** : SVG remplacés par un rectangle gris, vidéos bloquées ; le widget Loox ne s'est pas rendu (blanc de 6 335 px). Les poids SVG et vidéo sont reconstitués à partir de mesures séparées.
- **Une seule journée** : prix, compteur et popups relevés le 25/09/2026 ; un seul cycle de compteur observé (11 relevés). Historique des prix inaccessible (Wayback injoignable) : la permanence des remises est déduite de la configuration, pas démontrée. **(corrigé v2 : la Wayback Machine a répondu le 26/09/2026. 45 captures des fiches d'avril 2025 au 07/09/2026 donnent l'historique des prix, des titres d'offres et des compteurs ; la permanence des remises et de l'urgence est désormais constatée sur plus de 13 mois, § 16.8 bis et § 17.4. Il n'existe toutefois aucune capture entre le 20/05 et le 15/08/2025.)**
- **Sources fermées** : bibliothèques publicitaires Meta et TikTok, Google Ads Transparency Center, Instagram, Facebook, signal-arnaques, scamdoc, promocodie, pages des places de marché fournisseurs. **v2** : toujours fermées le 26/09 (Meta : défi puis page de connexion ; Google : captcha ; TikTok : API en 421 « system busy », le « 0 annonce » affiché est un artefact ; Instagram et Facebook : connexion exigée) ; s'y ajoutent PublicWWW, annuaire-entreprises, le registre interactif du Wyoming, l'INPI et l'EUIPO, AliExpress, Temu, Amazon, DHgate, Semrush, Ahrefs, et les pages Trustpilot au-delà de la page 10. Se sont ouverts : la bibliothèque Snap (UE), la Wayback Machine, crt.sh, RDAP, les JSON publics des widgets TrustBox et Loox, Made-in-China et Accio, Companies House (§ 15.16, § 16.2, § 18.4, § 19.15).
- **Lectures par un modèle** : Trustpilot, franceverif, verifsites, Davinci lus via WebFetch (résumés) ; le registre du Wyoming a été lu par extraction du texte du PDF officiel.
- **Dates de fiche ≠ dates de lancement** : `created_at` date la fiche dans la boutique actuelle ; les avis Loox montrent des produits plus anciens.
- **Inventaires négatifs, TVA, composition « soie », IA des visuels** : indices, pas preuves. **(corrigé v2 pour les inventaires : les compteurs `inventoryQuantity` sont désormais lus comme des ventes nettes, avec leurs limites : ils avancent par à-coups, sans profil horaire fiable ; les réassorts en font des bornes basses ; une incohérence housse 2.0 / oreiller 2.0 d'octobre à décembre 2025 n'est pas expliquée ; une unité n'est pas une commande ; ils couvrent tous les marchés de la boutique, § 17.2 et § 17.12. Les noms « Firefly_Gemini_Flash… » sont constatés ; leur lecture comme reproduction par IA reste un indice, § 18.2 bis.)**
- Les jugements juridiques sont des **risques** : seule une autorité ou un juge qualifie une infraction.
- **Hauteurs de page dépendantes du widget d'avis** (ajout du critique final) : le bloc Loox, resté blanc, mesure la même hauteur sur toutes les fiches ; les longueurs de fiche en px, en cm et en « écrans » incluent cette zone non vue.
- **Courbes d'animation** : les valeurs `linear` rapportées par le navigateur pour les enchaînements Motion One et les animations CSS sont un effet de la mesure, pas la courbe perçue (voir § 4.3) ; la courbe réelle des animations Klaviyo n'est pas dans les preuves.
- **Temps d'affichage** : `loadMs` et le LCP ont été mesurés sur la connexion de collecte, non bridée, depuis un centre de données ; ils ne décrivent pas un visiteur en 4G. Seuls les octets servent de base aux estimations de temps (§ 10.2).
- **Données produit de Somnila** : les cotes, le poids et les matières du Neck 01 viennent du devis fournisseur (build/PRODUCTS.csv) ; densité et composition de la mousse restent inconnues des deux côtés.
- **Estimations de la Partie II (v2)** : chiffre d'affaires, commandes, coût rendu, marges et budget publicitaire sont des **fourchettes** construites sur des hypothèses écrites : prix moyen par offre en trois scénarios, part des packs du 3.0 transposée du 2.0, remboursements de 5 à 15 %, coût de 13 à 25 € sans preuve permettant de choisir, budget publicitaire de 25 à 40 % du CA **non mesuré** (§ 16.9, § 17.5, § 18.6). Le mix réel des offres, le taux de retour et le CAC de Soya ne sont pas observables.
- **Relevés horaires (v2)** : prévus toutes les heures pendant 12 h à partir du 26/09 à 09:48 UTC (`soya2/inv/`) ; ce dossier exploite ceux de 09:48, 10:48 (incomplet pour la fiche 3.0) et 11:49 UTC. Une seule journée de relevés directs : la série doit être prolongée d'au moins 7 jours.
- **Aucun parcours d'achat (v2)** : le montant réellement facturé, la couleur de la housse pré-cochée et les offres après paiement restent **non vérifiés** ; les règles de l'enquête interdisent tout achat, tout compte et tout formulaire.
- **Identité (v2)** : aucune personne physique ni société immatriculée n'est reliée à soya-paris.com ; la « SOYA PARIS LLC » n'a pas été cherchée dans le registre officiel du Wyoming ; les liens entre boutiques reposent sur des identifiants publicitaires et des archives, pas sur des actes (§ 15.13, § 15.16).
- **Lectures par un modèle (v2)** : SimilarWeb, HypeStat, OpenCorporates, une partie de Trustpilot et les pages Facebook ont été lus par WebFetch (résumés) ; la lecture « août seul » des 345,6 k visites SimilarWeb est déduite de l'arithmétique ; WebSearch n'est pas Google.fr (§ 17.7, § 17.8, § 17.12).
- **Voix du client (v2)** : les thèmes sont repérés par des motifs automatiques, trop larges pour certains (parts à lire comme des plafonds) ; les heures Trustpilot sont sûres à 2 heures près ; la cause des disparitions d'avis n'est pas établie ; le « tirage au sort » n'est rapporté que par des clients (§ 19.15).
- **Fournisseur (v2)** : fournisseur exact de Soya inconnu, un seul candidat identifié ; seule une commande trancherait, et elle est exclue (§ 18.10).
- **Marché de Somnila (v2)** : ce dossier compare Soya et Somnila en euros, sur le marché français ; le marché principal prévu pour Somnila est les États-Unis (build/HANDOFF.md l. 51), où les leçons sur la TVA et le droit de 3 € ne s'appliquent pas (§ 18.0, § 18.9).
- **Preuves de la Partie II hors dépôt (v2)** : elles sont dans l'espace de travail de la session (`soya2/`), pas dans `preuves/` ; une session qui n'a pas cet espace ne peut pas les rouvrir.
- **Chapitre 20** : le laboratoire d'animation n'a pas eu de contre-vérification séparée ; ses durées recoupent le code du thème à ± 10 ms près (§ 20.1).

### 14.1 Une session Claude Code lancée sur ton poste ferait-elle mieux ? (réponse consolidée, v2)

**Non pour l'analyse, oui pour l'accès** [déduit des cinq chapitres de la Partie II : § 15.16, § 16.13, § 17.11, § 18.10, § 19.15].

- **Même modèle, même méthode.** Une session locale ne raisonnerait pas mieux. Les erreurs corrigées pendant cette enquête (lecture du chiffre SimilarWeb, changement de boutique passé inaperçu, date du pré-cochage, « au pixel près » des avatars, cinq boutiques « successives » qui ont en fait coexisté) n'étaient pas des problèmes d'accès : ce qui les a corrigées, c'est la **contre-vérification sur les preuves brutes** (85 constats relus, 47 corrigés), pas l'endroit où tourne l'agent. Une session locale les aurait commises aussi sans cette relecture (§ 17.11).
- **Ce qu'elle verrait en plus**, grâce à une IP résidentielle française et à un vrai navigateur :
  - la **bibliothèque publicitaire Meta** : nombre d'annonces actives de la page 61565502837799, dates de début, formats, visuels ;
  - **Google Ads Transparency** : les annonces Search, Shopping et YouTube, et surtout le **nom de l'annonceur vérifié**, qui tranche la piste « LUXERY SERVICE LTD » (§ 16.3) ;
  - la **bibliothèque TikTok** en région FR, et les vrais compteurs et commentaires Instagram et Facebook ;
  - les vrais résultats de **Google.fr**, les prix et la bannière de cookies vus comme une cliente, et le chargement des pixels avant consentement ;
  - le **panier** et la première page du paiement, **sans rien saisir** : montant facturé, couleur de la housse pré-cochée ;
  - AliExpress, Temu, Amazon et Google Lens sur les packshots ; signal-arnaques, PublicWWW, annuaire-entreprises, INPI, registre du Wyoming ;
  - les pages Trustpilot au-delà de la page 10, avec le compte **déjà existant** de l'utilisateur s'il le décide ; SimilarWeb ou Semrush avec les comptes du fondateur, s'il en a ;
  - la **durée** : des relevés de compteurs sur 7 jours ou plus (`build/analyse/soya-paris/outils/inv.py`), ce qui manque le plus à l'estimation des ventes, vu les à-coups.
- **Ce qu'elle ne ferait pas mieux** : archives Wayback, certificats crt.sh, RDAP, identifiants publicitaires, JSON des widgets TrustBox et Loox (plus riches que les pages affichées), vidéos et transcriptions, empreintes d'images, modèles de coût et de ventes : tout cela est épuisé ici avec la même méthode.
- **Précautions** : mêmes règles (aucun contact, aucun compte créé chez Soya, aucun formulaire, aucun achat, arrêt avant toute saisie) ; ouvrir soya-paris.com en navigation privée, dans un profil séparé des comptes Facebook et Instagram de l'utilisateur, sinon les pixels de Soya l'ajoutent à leurs audiences de reciblage ; WebSearch passe par les serveurs d'Anthropic aux États-Unis même en local, ses résultats ne changent pas.
- **Conclusion** : faire tourner le brief `build/analyse/soya-paris/BRIEF_CLAUDE_LOCAL.md` pour les seuls relevés d'accès (Meta, Google, TikTok, Instagram, panier sans saisie) et la veille sur 7 jours, puis verser les captures dans `build/analyse/soya-paris/v3/` ; il n'est pas utile de refaire l'analyse.

---
## Annexe A — Toutes les mesures clés

### A.1 Dimensions et positions (px, puis cm à 96 dpi)

| Mesure | Desktop | Mobile | Source |
|---|---|---|---|
| Bandeau compte à rebours | 58 px (1,53 cm) | 50 px (1,32 cm) | soya/cap/home-*.json |
| En-tête | 115 px (3,04 cm) | 51 px (1,35 cm) | idem |
| Part du premier écran prise par bandeau + en-tête | 19,2 % | 12 % | calcul |
| Logo (boîte / lettres) | 120 × 32 / 118 × 14 px | 100 × 27 / 98 × 12 px | soya/cap/home-d-full.png |
| Hero accueil | 810 px (21,43 cm) | 550 px (14,55 cm) | soya/cap/home-*.json |
| Bouton dessiné du hero | 243 × 63, y 875-937 (coupé au pli 900) | — | idem |
| Longueur de l'accueil | 4 730 px (125,1 cm, 5,3 écrans) | 4 790 px | idem |
| Longueur fiche 3.0 | 17 796 px (470,8 cm, 19,8 écrans) | 19 179 px (507,4 cm, 22,7 écrans) | soya/cap/pdp3-*.json |
| Widget Loox | 6 335 px (167,6 cm), identique sur les fiches 3.0, enfant, soie et 1.0 | 7 211 px (190,8 cm), identique sur 3.0 et couette | idem ; soya/cap/enfant-d, soie-d, v1-d, couette-m.json |
| Autres pages (longueur) | collection 5 806 px (153,6 cm) ; enfant 11 168 (295,4) ; soie 10 786 (285,3) ; 1.0 10 604 (280,5) ; histoire 6 680 (176,7) ; blog 1 347 (35,6) ; contact 1 532 (40,5) | collection 6 026 px (159,4 cm) ; couette 12 424 (328,7) | Annexe C |
| Bouton d'achat des fiches secondaires | enfant y 959 (25,4 cm, sous le pli) ; soie 703 (18,6 cm) ; 1.0 496 (13,1 cm) | enfant 1 398 (37,0 cm) ; couette 1 031 (27,3 cm) ; 1.0 812 (21,5 cm, à cheval sur le pli) | pdpw/others.json |
| Image principale fiche | 666 × 666 (17,6 cm) | 390 × 390 (10,3 cm) | pdpw/pdp3-measure.json |
| Vignettes | 64 × 70, pas 80 | 56 × 62, pas 64 | idem |
| H1 fiche | 32 px, y 313-351 | 22 px, y 673-699 | idem |
| Premier prix fiche | y 758 | y 1 159 (DOM) à 1 191 (capture) | pdpw ; soya/cap/pdp3-m-full.png |
| Bouton d'achat fiche | 518 × 60, y 1 347-1 407 (35,6 cm) | 350 × 54, y 1 782-1 858 (≈ 47-49 cm) | idem |
| Bouton sous le pli | 447 px (11,8 cm) | 2,1 écrans | calcul |
| Bulles vidéo | 78 px (2,06 cm), vidéo 72 px | idem | soya/cap/funnel-pdp-top.png |
| Barre collante | 560 × 114, visible dès scrollY 1 500, prix €139,90 | 390 × 88, dès scrollY 2 100, sans prix | pdpw/pdp3-sticky.json |
| Colonne vide sous la galerie | ≈ 905 → 3 373 px (65 cm) | — | soya/cap/pdp3-d-full.png |
| Popup Klaviyo | ≈ 950 × 580 (25,1 × 15,3 cm, 42 % de l'écran) | 390 × 477 (56 %) | mkt/kl_v7.json ; captures |
| Popup Kaching | 400 × ≈ 746, coins 30, voile 70 % | pleine largeur | soya/pdp3.html ; soya/cap/funnel-drawer.png |
| Grille collection : début | 2 612 px (69 cm), premier visuel 2 660 | ≈ 2 000, premier visuel 2 077 | soya/cap/col-*.json |
| Carte produit collection | 318 × 318, 4 colonnes | 171 × 171, 2 colonnes, 8 px d'écart | soya/cap/col-*-full.png |
| Carte carrousel accueil | 432 × 432 | 289 + 61 visibles | soya/cap/home-*-full.png |
| Badge « Economisez » | 131 × 23, 12 px | 9 px | theme.css |
| Zones de tap des icônes | — | ≈ 42 × 42 (icône 22 × 22) | theme.css ; tech/a11y-home-m.json |
| Plus petits textes | — | 8 px (« Heures / Mins / Secs »), 9 px (badges) | tech/a11y-*.json |

### A.2 Poids, requêtes, temps

| Mesure | Valeur | Source |
|---|---|---|
| Accueil mobile transféré (après défilement) | 3,56 Mo, 306 GET uniques | tech/net-home-m.json |
| Fiche 3.0 mobile transféré sans / après défilement | 27,48 / 28,31 Mo ; 386 / 407 GET uniques | tech/net-pdp3-m.json |
| Fiche 3.0 décodé après défilement | 47,77 Mo | idem |
| 39 SVG de la fiche | 35,73 Mo décodés, 25,05 Mo brotli ; 4 tuiles = 13,41 Mo brotli | soya/svg_sizes.txt ; tech/svg_compressed.txt |
| SVG demandés sans défilement | 22,34 Mo (32 URL, 28 fichiers) | tech/net-pdp3-m.json |
| 5 vidéos | 301,6 Mo (stories : 46,5 + 50,2 + 37,6 + 109,2 ; section : 58,1) | soya/cap/videos.txt |
| Avatar « Dr. Marc » | 570 934 octets pour 60 × 60 px | soya/pdp3.html |
| Temps de transfert pur, Slow 4G 1,6 Mbit/s | accueil ≈ 18 s ; fiche ≈ 137 s sans défilement, 142 s après | calcul |
| Domaines contactés (desktop) | accueil 26 (22 hors Shopify), fiche 31 (27 hors Shopify) | soya/cap/*-d.json → third |

### A.3 Prix et compteurs

| Mesure | Valeur | Source |
|---|---|---|
| Soya 3.0 : catalogue / fiche 1x / Duo / Famille | 139,90 / 69,90 / 98,90 / 139,90 € | soya/products.json ; soya/cap/funnel.json |
| Barrés affichés | 139,90 / 279,80 / 559,60 € | idem |
| Housse : ajout / seule / barré | 14,90 / 17,90 / 39,90 € | idem |
| Panier par défaut 1x / Duo / Famille | 84,80 / 128,70 / 169,70 € (non vérifié au panier) | calcul |
| Soya 2.0 : catalogue / fiche | 119,90 / 59,90 € | soya/web/p_oreiller-soya-2-0.html |
| Popup lombaire | 19,90 € au lieu de 49,90 € | soya/cap/slices/funnel-drawer-00.jpg |
| Prix barrés du catalogue | 12 / 19 produits, médiane 27,6 %, moyenne 34,9 % | soya/products.json |
| Note affichée / Loox produit / Loox boutique / somme des fiches | 4,8 sur 15 637 / 4,3 sur 339 / 4,6 sur 1 775 / 1 776 | soya/pdp3.html ; soya/web/loox_vs_affiche.tsv |
| Avis intégrés à la fiche 3.0 | 40, dont 26 sur le 2.0, 3 « Verified », 20 antérieurs au 19/10/2025 | soya/pdp3.html |
| Trustpilot | 4,3/5, 6 273 avis, 16 % 1★, 4 % de réponses aux négatifs | Trustpilot |
| Compteur | fin 21:59:00-21:59:02 UTC sur 11 relevés ; 00:00:00 à 21:59:21 ; 23:58:56 à 22:00:05 | soya/cap/funnel*.json ; soya/cap/*-view-0.png |

### A.4 Relevés du compte à rebours (heure d'écriture du PNG, UTC)

| Relevé | Heure | Compteur | Fin calculée |
|---|---|---|---|
| home-d-view-0 | 21:18:28,9 | 00:40:33 | 21:59:01,9 |
| home-m-view-0 | 21:18:54,9 | 00:40:06 | 21:59:00,9 |
| col-d-view-0 | 21:28:30,0 | 00:30:32 | 21:59:02,0 |
| enfant-d-view-0 | 21:29:03,4 | 00:29:57 | 21:59:00,4 |
| soie-d-view-0 | 21:29:23,6 | 00:29:37 | 21:59:00,6 |
| couette-m-view-0 | 21:29:43,0 | 00:29:18 | 21:59:01,0 |
| v1-d-view-0 | 21:30:02,6 | 00:28:59 | 21:59:01,6 |
| pdp3-d-view-0 | 21:57:28,8 | 00:01:32 | 21:59:00,8 |
| pdp3-m-view-0 | 21:57:58,7 | 00:01:02 | 21:59:00,7 |
| funnel.json timerA1 | 21:58:21,5 | 00:00:39 | 21:59:00,5 |
| funnel2.json | 22:00:05,4 | 23:58:56 | 21:59:01,4 (lendemain) |

Mécanisme [anim/countdown.js, fonction `L()`] : l'heure et la minute de `startDate` / `endDate` sont lues **dans le fuseau du navigateur** et appliquées au jour courant. Navigateur en UTC (captures) : fin 21:59 UTC ; navigateur à l'heure de Paris : fin 23:59 chaque jour, nouveau cycle à minuit [déduit du code]. Arbitrage : le README du dossier parlait de « minuit » ; la cible est **23:59**, avec une minute à 00:00:00 avant la relance.

---

## Annexe B — Sources

### B.1 Fichiers du dossier de preuves

- `soya/` : `README.md`, `catalogue.json`, `products.json`, `collections.json`, `sitemap.xml`, `robots.txt`, `home.html`, `pdp3.html`, `home.headers`, `svg_urls.txt`, `svg_sizes.txt`, `capture.cjs`, `funnel.cjs`, `funnel2.cjs` ; `assets/theme.css`, `theme.js`, `vendor.min.js` ; `pol/legal-notice.txt`, `contact-information.txt`, `terms-of-service.txt`, `terms-of-sale.html`, `refund-policy.txt`, `shipping-policy.txt`, `privacy-policy.txt` ; `cap/*.json`, `cap/*-text.txt`, `cap/*-buybox.txt`, `cap/funnel.json`, `cap/funnel2.json`, `cap/videos.txt`, `cap/*.png`, `cap/slices/*.jpg` ; `gallery/sheet-1.jpg` à `sheet-3.jpg`, `gallery/NN.jpg` ; `web/p_*.html` (19 fiches), `web/pdp3_fulltext.txt`, `web/loox_vs_affiche.tsv`, `web/rdap.json`, `web/rdap_tucows.json`, `web/tt.html`, `web/ig.json`, `web/clone_*.html`, `web/clone_pol.html`, `web/logo_*`, `web/press_*`, `web/badges_zoom.jpg` ; `ux/collections_all.html`, `ux/collections_nos-best-sellers.html`, `ux/search_q_oreiller.html`, `ux/pages_faq.html`, `ux/cart.html`, `ux/apps_parcelpanel.html`, `ux/klaviyo_forms.json`, `ux/kaching-popup-block.js`, `ux/kaching-popup-v2.js`.
- `tech/` (`soya-tech/`) : `net-home-m.json`, `net-pdp3-m.json`, `net_summary.json`, `netinv.cjs`, `svg_compressed.txt`, `need_cl_sizes.tsv`, `mp4probe.py`, `a11y-home-m.json`, `a11y-pdp3-m.json`, `a11y-pdp3-d.json`, `a11y.cjs`, `sm_*.xml`, `agents.md`, `ucp.json`, `live_*.html`.
- `pdpw/` (`pdpwork/`) : `pdp3-measure.json`, `pdp3-sticky.json`, `others.json`, `*-top.png`, `*-sticky.png`, `raster_sheet.jpg`, `reviews_sheet.jpg`, `avatars.jpg`, `story_*.jpg`, `s58.svg`.
- `prix/` (`soya_prix/`) : `old_products.json`, `old_meta.json`, `new_meta.json`, `us.soya-paris.com_meta.json`, fiches concurrentes `*.js`, `imgs/`.
- `anim/` (`soya-anim/`) : `countdown.js`, `kaching-bundles-block.js`, `kaching-bundles.css`, `klaviyo-full-forms.json`, `v1.html`, `enfant.html`, `col.html`.
- `mkt/` : `kl_v7.json`, `kaching_popup.json`, `pp.html`, `tt2.html`, `metaads.html`, `gat.json`, `ttlib.json`, `promocodie.html` ; `mkt2/us_2-0.html`.
- `build/` : `PHASE3.md`, `PRIX.md`, `ANALYSE_PRIX.md`, `HANDOFF.md`, `BRAND_BOOK.md`, `PHASE1_NOM.md`, `PRODUCTS.csv` (dimensions, poids et matières du Neck 01 et du Contour 01), `SOMNILA_DOSSIER_COMPLET.md` (hauteurs 13 / 11 cm, données fournisseur manquantes).
- `analyse/soya-paris/sections/` : les huit analyses contre-vérifiées (`marque.md`, `design.md`, `motion.md`, `pdp.md`, `offre.md`, `marketing.md`, `tech.md`, `ux.md`), sources de ce dossier.

### B.2 URL ouvertes

**Site étudié** : https://soya-paris.com/ ; https://soya-paris.com/products/oreiller-soya-3-0 ; https://soya-paris.com/products/oreiller-soya-2-0 ; https://soya-paris.com/products/oreiller-soya-1-0 ; https://soya-paris.com/products/oreiller-soya-enfant ; https://soya-paris.com/collections/nos-best-sellers ; https://soya-paris.com/collections/all ; https://soya-paris.com/apps/parcelpanel ; https://soya-paris.com/cdn/shop/files/19.svg?v=1771635093 ; https://us.soya-paris.com/products/soya-align-pillow-2-0 ; https://fast.a.klaviyo.com/forms/api/v7/full-forms?company_id=XuYmmR ; https://static-forms.klaviyo.com/forms/api/v7/XuYmmR/full-forms ; https://cdn.shopify.com/s/files/1/0680/4589/7928/files/90.png?v=1739804305.

**Scripts d'applications** : https://cdn.shopify.com/extensions/01a0d910-705e-793a-92d8-1ac2989952ea/kaching-bundles-2003/assets/kaching-bundles-block.js ; https://cdn.shopify.com/extensions/01a0a516-d34f-795a-ab91-339831e1344c/countdown-timer-30-97/assets/countdown_timer_essential_apps.min.js.

**Identité** : https://rdap.org/domain/soya-paris.com ; https://recherche-entreprises.api.gouv.fr/search?q=SOYA%20PARIS ; https://sos.wyo.gov/Business/Docs/CRA-Roster.pdf ; https://www.davincivirtual.com/loc/us/wyoming/casper-virtual-offices/facility-1100.

**Réputation et écosystème** : https://www.trustpilot.com/review/soya-paris.com ; https://fr.trustpilot.com/review/soya-paris.com?stars=1 ; https://franceverif.fr/fr/site/soya-paris.com ; https://verifsites.com/site-test/soya-paris-com-avis-clients-et-score-de-confiance/ ; https://www.tiktok.com/@soya.paris ; https://soyaparisoreillerergonomique.com/ ; https://meilleur-oreillercervical.fr/soya-paris-avis/ ; https://www.hadlemans.fr/soya-paris-avis/ ; https://milaris.co/products/orthosleep%C2%AE-oreiller-ergonomique ; https://juvilor.com/ ; https://docs.parcelpanel.com/shopify/getting-started/dropshipping/.

**Calendrier** : https://www.rejoindrelesfrenchdays.com/ ; https://www.clubic.com/bons-plans-628408-french-days-2026-tout-savoir-sur-l-edition-de-la-rentree-qui-commence-demain.html ; https://icalendrier.fr/evenements/french-days ; https://www.klaviyo.com/fr/blog/date-des-french-days ; https://crocaffaires.fr/bons-plans/french-days-septembre-2026-dates/.

**Marché** : https://confortetalignement.com/products/oreiller-ergonomique-papillon ; https://somnilys.com/products/oreiller-ergonomique-gen-2 ; https://zamatsleep.com/products/butterfly-shaped-cervical-pillow-pro ; https://comfysleepers.com/products/butterfly-memory-foam-cervical-pillow-neck-shoulder-support-1 ; https://inphysio.fr/products/oreiller-papillon-ergonomique-multi-positions ; https://www.htconfort.com/products/oreiller-papillon ; https://fr.derilashop.com/products/oreiller-cervical ; https://www.emma.fr/oreiller-original/ ; https://www.lidl.fr/p/emma-oreiller-cervical/p100406211 ; https://wopilo.com/products/wopilo-plus ; https://www.tediber.com/products.json ; https://www.pilloway.com.au/products.json ; https://www.label-naturel.com/products/housse-de-couette-en-soie-de-murier.js ; https://www.e.leclerc/fp/oreiller-ergonomique-pour-jambes-et-genoux-en-mousse-memoire-forme-avec-sangle-reglable-8435527826185.

**Droit et normes** : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563107 (L121-4) ; https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032227250/2026-04-25 (L121-17) ; https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044549592 (L112-1-1) ; https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032221077/ (L132-22) ; https://www.inc-conso.fr/content/achat-dun-matelas-sur-internet-descelle-apres-livraison-retractation-possible ; https://www.inc-conso.fr/content/vous-refusez-de-payer-des-frais-supplementaires-que-vous-naviez-pas-prealablement-acceptes ; https://www.legalplace.fr/guides/mentions-legales/ ; https://eur-lex.europa.eu/legal-content/FR/ALL/?uri=CELEX:32024R3228 ; https://www.oeko-tex.com/en/label-check/ ; https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html ; https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md ; https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/.

### B.3 Titres de résultats de recherche seulement (pages non ouvertes ou bloquées)

https://www.facebook.com/story.php?story_fbid=122111526512516761&id=357304574142341 ; https://www.facebook.com/61565502837799/videos/livraison-gratuite-d%C3%A9j%C3%A0-100-000-clients-satisfaits/2186223432183471/ ; https://www.signal-arnaques.com/scam/view/805026 (403) ; https://fr.coupert.com/codes-promo/soya-paris.com ; https://www.amazon.fr/SWZEC-SOYA-Paris-Oreiller-SOYA-2-0/dp/B0FCXR3BDF ; https://www.amazon.fr/SWZEC-SOYA-Paris-Oreiller-SOYA-3-0/dp/B0FWQHLZL2 ; https://warning-trading.com/consommation/soya-paris-com-avis-escroquerie/ ; Instagram @soya.paris (429/401).

---

## Annexe C — Toutes les autres pages capturées, section par section (px et cm)

Ajout du critique final. Source des positions : `soya/cap/<page>.json` → `info.secs` (id de section Shopify, y, hauteur) ; éléments du bloc d'achat : `pdpw/others.json` (mesures DOM en EUR) ; contenus : `soya/cap/<page>-text.txt` et captures `soya/cap/slices/<page>-*.jpg`. « Écran » = rang de l'écran où commence la section (900 px en desktop, 844 px en mobile). Les tiroirs panier et recherche (hauteur 0) sont omis. Les captures de la collection (desktop et mobile) et de la fiche enfant affichent des prix en USD (« $26.00 », « $163.00 ») ; celles des fiches soie, 1.0 et couette sont en EUR. Aucun montant n'est tiré des captures en USD : les prix cités viennent de `pdpw/others.json` (EUR) et de `soya/products.json`.

**Constat transversal.** Sur toutes les pages, bandeau (58 px desktop, 1,53 cm ; 50 px mobile, 1,32 cm) et en-tête (115 px, 3,04 cm ; 51 px, 1,35 cm) sont identiques ; la réassurance mesure 168 px (4,44 cm) en desktop et 152 px (4,02 cm) en mobile, sauf sur « Notre histoire » (264 px, 6,98 cm) ; le pied de page mesure 541 px (14,31 cm) en desktop et 995 px (26,32 cm) en mobile. Le widget Loox mesure **exactement 6 335 px en desktop et 7 211 px en mobile sur les cinq fiches capturées** (3.0, enfant, soie, 1.0, couette), alors que le 3.0 compte 339 avis Loox et le 1.0 quatre. Les cinq fiches chargent le widget en mode agrégé (`data-loox-aggregate`, `data-limit="20"`), qui affiche le même flux de la boutique sur chaque fiche [constaté : soya/pdp3.html ; soya/web/p_oreiller-soya-1-0.html, p_oreiller-soya-enfant.html, p_draps-en-soie-naturelle-soya.html, p_couette-rafraichissante-soyafresh.html]. La zone est restée blanche sur toutes les captures : ces hauteurs sont mesurées, le rendu réel n'a pas été vu. La part « Loox = 35,6 % de la page » du § 6.8 doit être lue avec cette réserve.

### C.1 Collection « Nos Best Sellers », desktop 1440 × 900 [soya/cap/col-d.json] : 5 806 px (153,6 cm, 6,5 écrans)

| # | Section | y / h (px) | y / h (cm) | Écran | Contenu |
|---|---|---|---|---|---|
| 0-1 | Bandeau / en-tête | 0 / 58 ; 58 / 115 | 0 / 1,53 ; 1,53 / 3,04 | 0 | compteur, menu sur 2 lignes |
| 2 | banner | 174 / 960 | 4,60 / 25,40 | 0,19 | photo 3:2 (femme blonde, oreiller bleu, chevet avec magazines en caractères chinois), H1 blanc de 32 px « Nos Best Sellers », parallaxe `0.3` |
| 3 | media_with_text_mhaMeX | 1 133 / 774 | 29,97 / 20,48 | 1,26 | « Nouveauté : SOYA 3.0 est arrivé » (copie de l'accueil) |
| 4 | media_with_text_UtLwm6 | 1 908 / 704 | 50,48 / 18,62 | 2,12 | « Découvrez notre Best-Seller : L'Oreiller Soya 2.0 » (copie) |
| 5 | main (grille) | 2 612 / 2 485 | 69,10 / 65,74 | 2,90 | 17 produits, 4 colonnes de 318 px (8,4 cm), pas vertical de 472 px (12,5 cm) ; **premier visuel à 2 660 px (70,4 cm, 2,96 écrans)** ; ni filtre ni tri |
| 6 | text-with-icons | 5 097 / 168 | 134,84 / 4,44 | 5,66 | 4 engagements |
| 7 | footer | 5 265 / 541 | 139,29 / 14,31 | 5,85 | — |

### C.2 Collection « Nos Best Sellers », mobile 390 × 844 [soya/cap/col-m.json] : 6 026 px (159,4 cm, 7,1 écrans)

| # | Section | y / h (px) | y / h (cm) | Écran | Contenu |
|---|---|---|---|---|---|
| 0-1 | Bandeau / en-tête | 0 / 50 ; 50 / 51 | 0 / 1,32 ; 1,32 / 1,35 | 0 | — |
| 2 | banner | 101 / 260 | 2,67 / 6,88 | 0,12 | H1 blanc de 22 px centré sur la photo |
| 3 | media_with_text_mhaMeX | 361 / 842 | 9,55 / 22,28 | 0,43 | bloc 3.0 |
| 4 | media_with_text_UtLwm6 | 1 202 / 796 | 31,80 / 21,06 | 1,42 | bloc 2.0 |
| 5 | main (grille) | 1 998 / 2 879 | 52,86 / 76,16 | 2,37 | « 17 produits » vers 2 040 px (54,0 cm) ; **premier visuel à 2 077 px (54,9 cm, 2,46 écrans)** ; 2 colonnes de 171 px (4,5 cm), 8 px d'écart |
| 6 | text-with-icons | 4 878 / 152 | 129,05 / 4,02 | 5,78 | carrousel à 1 élément visible sur 4 |
| 7 | footer | 5 030 / 995 | 133,07 / 26,32 | 5,96 | — |

### C.3 Fiche « Oreiller Soya enfant », desktop [soya/cap/enfant-d.json ; pdpw/others.json → enfant-d] : 11 168 px (295,4 cm, 12,4 écrans)

| # | Section | y / h (px) | y / h (cm) | Écran | Contenu |
|---|---|---|---|---|---|
| 0-1 | Bandeau / en-tête | 0 / 173 | 0 / 4,58 | 0 | — |
| 2 | main | 174 / 1 750 | 4,60 / 46,30 | 0,19 | image 601 × 606 (15,9 × 16,0 cm) ; « Noté 4,8/5 – 15 637 avis **parents** » y 225 ; H1 y 291 (7,70 cm) ; bloc Kaching y 547-949 (14,47-25,11 cm) : 1x 49,90 € (~~99,90~~), Duo 89,90 € (~~199,80~~), housse pré-cochée 14,90 € (~~29,90~~) ; **bouton y 959-1 019 (25,37-26,96 cm), 59 px (1,56 cm) sous le pli** ; « En stock – Prêt à l'expédition » y 1 041 |
| 3 | media_with_text_gU76JV | 1 924 / 678 | 50,90 / 17,94 | 2,14 | bloc 3.0 |
| 4 | media_with_text_bLhpa9 | 2 602 / 704 | 68,84 / 18,62 | 2,89 | bloc 2.0 |
| 5 | related_products_ncp9TM | 3 306 / 818 | 87,46 / 21,64 | 3,67 | carrousel |
| 6 | Loox | 4 124 / 6 335 | 109,10 / 167,59 | 4,58 | flux agrégé, zone blanche |
| 7-8 | Réassurance / pied de page | 10 459 / 168 ; 10 627 / 541 | 276,69 / 4,44 ; 281,14 / 14,31 | 11,62 | — |

En mobile [pdpw/others.json → enfant-m] : H1 y 654 (17,30 cm), Kaching 951-1 388, bouton 1 398-1 452 (36,98-38,41 cm, 1,66 écran), stock 1 467.

### C.4 Fiche « Draps en soie naturelle », desktop [soya/cap/soie-d.json ; pdpw/others.json → soie-d] : 10 786 px (285,3 cm, 12,0 écrans)

| # | Section | y / h (px) | y / h (cm) | Écran | Contenu |
|---|---|---|---|---|---|
| 0-1 | Bandeau / en-tête | 0 / 173 | 0 / 4,58 | 0 | — |
| 2 | main | 174 / 1 368 | 4,60 / 36,19 | 0,19 | bloc du thème : H1 y 263 (6,96 cm) ; prix y 318 (8,41 cm) : 49,90 € (~~59,90~~), « Economisez €10,00 » ; 8 coloris, tailles 90 × 190 à 200 × 200 cm ; **bouton y 703-763 (18,60-20,19 cm), dans le premier écran** ; stock y 785 |
| 3 | media_with_text_gU76JV | 1 541 / 678 | 40,77 / 17,94 | 1,71 | bloc 3.0 |
| 4 | media_with_text_bLhpa9 | 2 220 / 704 | 58,73 / 18,62 | 2,47 | bloc 2.0 |
| 5 | related_products_ncp9TM | 2 924 / 818 | 77,35 / 21,64 | 3,25 | carrousel (Soya 3.0 à 139,90 €) |
| 6 | Loox | 3 742 / 6 335 | 98,99 / 167,59 | 4,16 | flux agrégé, zone blanche |
| 7-8 | Réassurance / pied de page | 10 077 / 168 ; 10 245 / 541 | 266,59 / 4,44 ; 271,03 / 14,31 | 11,20 | — |

### C.5 Fiche « Oreiller Soya 1.0 », desktop [soya/cap/v1-d.json ; pdpw/others.json → v1-d, v1-m] : 10 604 px (280,5 cm, 11,8 écrans)

| # | Section | y / h (px) | y / h (cm) | Écran | Contenu |
|---|---|---|---|---|---|
| 0-1 | Bandeau / en-tête | 0 / 173 | 0 / 4,58 | 0 | — |
| 2 | main | 174 / 1 186 | 4,60 / 31,38 | 0,19 | bloc du thème : H1 y 263 ; prix y 318 : 34,90 € (~~49,90~~), « Economisez €15,00 » ; **bouton y 496-556 (13,12-14,71 cm)** ; stock y 578 |
| 3 | media_with_text_gU76JV | 1 360 / 678 | 35,98 / 17,94 | 1,51 | bloc 3.0 |
| 4 | media_with_text_bLhpa9 | 2 038 / 704 | 53,92 / 18,62 | 2,26 | bloc 2.0 |
| 5 | related_products_ncp9TM | 2 742 / 818 | 72,54 / 21,64 | 3,05 | carrousel |
| 6 | Loox | 3 560 / 6 335 | 94,18 / 167,59 | 3,96 | flux agrégé (le 1.0 n'a que 4 avis Loox, 2,8/5) |
| 7-8 | Réassurance / pied de page | 9 895 / 168 ; 10 063 / 541 | 261,77 / 4,44 ; 266,22 / 14,31 | 10,99 | — |

En mobile : prix y 657 (17,38 cm), bouton 812-866 (21,48-22,91 cm), à cheval sur le pli de 844 px (32 px visibles sur 54).

**Contraste instructif [déduit]** : sur la fiche la moins chère et la plus simple (1.0, bloc du thème, sans Kaching ni stories), prix et bouton tiennent dans le premier écran desktop ; sur la fiche vedette (3.0), le bouton arrive à 1 347 px desktop et 1 782 px mobile. La pile d'offres, de stories et de réassurance a un coût de position mesurable.

### C.6 Fiche « Couette SoyaFresh », mobile 390 × 844 [soya/cap/couette-m.json ; pdpw/others.json → couette-m] : 12 424 px (328,7 cm, 14,7 écrans)

| # | Section | y / h (px) | y / h (cm) | Écran | Contenu |
|---|---|---|---|---|---|
| 0-1 | Bandeau / en-tête | 0 / 101 | 0 / 2,67 | 0 | — |
| 2 | main | 101 / 1 831 | 2,67 / 48,44 | 0,12 | image 390 × 390 ; H1 sur 2 lignes y 623-676 (16,48-17,88 cm) ; prix y 684 (18,10 cm) : 79,90 € (~~99,90~~) ; tailles « Twin / Queen / King » (dénomination américaine) ; **bouton y 1 031-1 085 (27,28-28,70 cm), sous le pli** ; stock y 1 100 ; popup Klaviyo au-dessus du titre et du prix sur la capture |
| 3 | media_with_text_gU76JV | 1 932 / 794 | 51,11 / 21,01 | 2,29 | bloc 3.0 |
| 4 | media_with_text_bLhpa9 | 2 725 / 796 | 72,09 / 21,06 | 3,23 | bloc 2.0 |
| 5 | related_products_ncp9TM | 3 521 / 544 | 93,15 / 14,39 | 4,17 | carrousel |
| 6 | Loox | 4 065 / 7 211 | 107,54 / 190,77 | 4,82 | flux agrégé, zone blanche |
| 7-8 | Réassurance / pied de page | 11 276 / 152 ; 11 428 / 995 | 298,31 / 4,02 ; 302,33 / 26,32 | 13,36 | — |

### C.7 « Notre histoire », desktop [soya/cap/histoire-d.json] : 6 680 px (176,7 cm, 7,4 écrans)

| # | Section | y / h (px) | y / h (cm) | Écran | Contenu |
|---|---|---|---|---|---|
| 0-1 | Bandeau / en-tête | 0 / 173 | 0 / 4,58 | 0 | — |
| 2 | main | 174 / 5 702 | 4,60 / 150,85 | 0,19 | H1 « Notre histoire » 56 px #042146, H2 44 px #1A1A1A, premier paragraphe en Arial 16 / 25,6 px ; aucun visage d'équipe, aucune date, aucun lieu ; « Christine R., 41 ans » ; « plus de 50 000 clients satisfaits » |
| 3 | text-with-icons | 5 876 / 264 | 155,45 / 6,98 | 6,53 | réassurance, plus haute qu'ailleurs (264 px contre 168) |
| 4 | footer | 6 140 / 541 | 162,43 / 14,31 | 6,82 | — |

### C.8 Blog, desktop [soya/cap/blog-d.json] : 1 347 px (35,6 cm, 1,5 écran)

| # | Section | y / h (px) | y / h (cm) | Écran | Contenu |
|---|---|---|---|---|---|
| 0-1 | Bandeau / en-tête | 0 / 173 | 0 / 4,58 | 0 | — |
| 2 | main | 174 / 464 | 4,60 / 12,28 | 0,19 | « Ce blog est vide » (H1 28 px), « Retour à la boutique » |
| 3 | text-with-icons | 638 / 168 | 16,88 / 4,44 | 0,71 | — |
| 4 | footer | 806 / 541 | 21,32 / 14,31 | 0,90 | — |

### C.9 Contact, desktop [soya/cap/contact-d.json] : 1 532 px (40,5 cm, 1,7 écran)

| # | Section | y / h (px) | y / h (cm) | Écran | Contenu |
|---|---|---|---|---|---|
| 0-1 | Bandeau / en-tête | 0 / 173 | 0 / 4,58 | 0 | — |
| 2 | contact | 174 / 650 | 4,60 / 17,20 | 0,19 | « Avez-vous une question ? » en h2 de 44 px (aucun H1), formulaire Nom / Email / Message, « une ligne téléphonique dédiée … sera bientôt disponible » |
| 3 | text-with-icons | 824 / 168 | 21,80 / 4,44 | 0,92 | — |
| 4 | footer | 992 / 541 | 26,24 / 14,31 | 1,10 | — |

---

## Annexe D — Contre-vérification finale (26/09/2026)

Affirmations du dossier tirées au hasard et confrontées aux fichiers bruts par le critique final.

| # | Affirmation du dossier | Fichier ouvert | Résultat |
|---|---|---|---|
| 1 | Thème Impact 6.4.1 « V16 – Version 3.0 French Days », id 205977846092, `theme_store_id: null` | soya/home.html, objet `Shopify.theme` | confirmé mot pour mot |
| 2 | « Noté 4,8/5 – 15 637 avis clients » en dur ; JSON-LD Loox 4,3 / 339 ; « Overall rating: 4.6 / 5 from 1775 reviews » | soya/pdp3.html l. 2170, l. 7167-7170, bloc `loox-ssr-review-summary` | confirmé |
| 3 | Barre « 89 % » en `width:89%` sur la 3.0, « 78 % » sur la 2.0 | soya/pdp3.html l. 2583 et 2588 ; soya/web/p_oreiller-soya-2-0.html | confirmé |
| 4 | 5 options payantes `preselected: true` sur la 3.0, case cochée à l'écran | soya/pdp3.html (5 occurrences) ; soya/cap/slices/pdp3-d-full-00.jpg (EUR) | confirmé |
| 5 | Compteur `recurring`, `endType: never`, 7 jours sur 7, créé le 19/10/2025 à 13:35 UTC, modifié le 18/09/2026 ; 00:00:39 à 21:58:21,5 UTC ; 23:58:56 à 22:00:05 UTC | soya/pdp3.html, `essentialCountdownTimerConfigs` ; soya/cap/funnel.json (`timerA1.now` 1790373501479) ; soya/cap/funnel2.json | confirmé |
| 6 | 12 produits sur 19 à prix barré ; moyenne 34,9 %, médiane 27,6 %, pondérée 24,4 % | soya/products.json (recalcul) | confirmé (moyenne des remises moyennes par produit) |
| 7 | 39 SVG, 35,73 Mo décodés ; 4 tuiles = 13,41 Mo brotli ; 22,34 Mo de SVG sans défilement | soya/svg_sizes.txt (35 734 942 o) ; tech/svg_compressed.txt ; tech/net-pdp3-m.json (recalcul par URL) | confirmé |
| 8 | H1 fiche 32 px / 500 / #042146 à y 313-351 ; bouton 518 × 60 à y 1 347-1 407 ; mobile 350 × 54 à y 1 782 | pdpw/pdp3-measure.json | confirmé |
| 9 | Popup Klaviyo : délai 12 s, réaffichage 1 jour, modifiée le 24/09/2026 à 06:55 UTC | soya-anim/klaviyo-full-forms.json (`DELAY 12`, `COOKIE_TIMEOUT 1`, `update_timestamp` 1790232934) | confirmé |
| 10 | Soya 3.0 : 62 × 37 cm, 14,4 / 9 cm ; housse 2.0 « 60 x 40 x 11/13 cm » | soya/web/pdp3_fulltext.txt l. 161-163 ; soya/catalogue.json | confirmé |
| 11 | Carrousel d'accueil : Soya 2.0 à 119,90 € sans barré | soya/home.html (`Shopify.currency` EUR, « Prix de vente €119,90 ») | confirmé ; la capture en USD affiche « $140.00 » |
| 12 | Inventaires exposés : 2.0 -51 191 ; housse 2.0 -41 513 ; 3.0 -9 719 ; housses 3.0 -3 948 | soya/web/p_oreiller-soya-2-0.html ; soya/pdp3.html | confirmé (sommes recalculées) |
| 13 | Contrastes : #FF4D4D sur blanc 3,27:1 ; #4974CA sur #F8F8F8 4,27:1 ; #E53935 sur blanc 4,23:1 | recalcul, formule WCAG | confirmé (écarts de 0,01 dus aux arrondis sur les deux plus faibles) |
| 14 | Accueil desktop : positions et hauteurs des 10 sections, conversions en cm | soya/cap/home-d.json → `info.secs` | confirmé au pixel |
| 15 | `updateNativePrice: false`, `showTotalPriceInAddToCartButton: false`, `stickyAtcEnabled: false`, `freeGifts: []` ; panier vide et « Request Forbidden » | soya/pdp3.html ; soya/cap/funnel.json, funnel2.json | confirmé |
| 16 | Popup visible à 6,5 s sur la fiche desktop, compteur 00:01:25 | soya/cap/slices/pdp3-d-view-6500.jpg (image ouverte) | confirmé |
| 17 | Pictos « réduit l'apnée du sommeil », « réduit le reflux gastrique » ; comparatif « OREILLER SOYA 2.0 » | soya/gallery/sheet-1.jpg (image ouverte, visuels 07 et 11) | confirmé |

**Erreurs trouvées et corrigées dans le corps du dossier** : fuseau des dates de création des fiches (heure de Paris, pas UTC, § 2.2) ; WCAG 2.5.8 mal appliqué aux zones de tap (§ 9.1) ; source des hauteurs 13 / 11 cm du Neck 01 (§ 0, § 7.6) ; arrondi 4,70 m → 4,71 m (§ 6.8) ; « trois prix effectifs 49,90 / 59,90 / 69,90 » attribués à tort à la gamme 1.0 / 2.0 / 3.0 (§ 7.4) ; poids des 26 avis 2.0 comme indice de recyclage, alors que le widget est agrégé (§ 1, point 10) ; formulations accusatoires adoucies (§ 6.10, § 12).
