## Dimension 4 : marque, identité, positionnement et cible de SOYA PARIS

*Relevé du 25 septembre 2026, contre-vérifié le même jour. Racine du dossier de preuves (DOSSIER) : `build/analyse/soya-paris/preuves/soya`. Les preuves collectées pour cette dimension sont dans `DOSSIER/web/`. Chaque affirmation porte l'une de ces étiquettes : **[constaté]** (vu dans une source), **[déduit]** (raisonnement à partir de sources) ou **[indice]/[risque]** (accusation possible, non prouvée formellement). Les prix sont en euros (marché France) sauf mention contraire : une partie des captures a été faite depuis une IP américaine et affiche des dollars.*

### Verdict en une phrase

SOYA PARIS emprunte trois choses qu'elle ne démontre pas : une origine (« Paris »), une autorité (ostéopathes, presse, « N°1 ») et une popularité (« 100 000 dormeurs », « 15 637 avis »). Les documents du site et les sources externes contredisent ces trois piliers, ou ne permettent pas de les vérifier. Pendant les French Days, Somnila vend le même format d'oreiller au même prix affiché (69,90 €). Elle peut donc se positionner comme la version vérifiable de cette promesse.

---

### 1. Qui est derrière SOYA PARIS ?

| Élément | Constat | Preuve | Nature |
|---|---|---|---|
| Éditeur | « Dénomination sociale : soya-paris.com » : un nom de domaine, pas une raison sociale. Le même texte parle ensuite de « la société SOYA PARIS » | `pol/legal-notice.txt` | constaté |
| Siège | 5830 E 2nd St, Ste 7000, Casper, Wyoming 82609 Us | `pol/legal-notice.txt`, `pol/contact-information.txt` (même texte) | constaté |
| Nature de l'adresse | Davinci Virtual vend le « 5830 E. 2nd Street, Casper » comme bureau virtuel : 100 $/mois en tarif promotionnel (199 $ au tarif normal), 6 mois minimum, réexpédition du courrier en option (100 $/mois), agent enregistré à 169 $/an. La liste officielle des agents enregistrés commerciaux du Wyoming (état au 1er septembre 2026) compte 11 agents à ce numéro de rue, dont deux à la « Ste 7000 » : PRA-Wyoming LLC et Republic Registered Agent LLC | https://www.davincivirtual.com/loc/us/wyoming/casper-virtual-offices/facility-1100 ; https://sos.wyo.gov/Business/Docs/CRA-Roster.pdf (ouvert, texte extrait) | constaté (offre et liste) ; déduit : le « siège » est l'adresse d'un agent enregistré, pas des locaux de la marque |
| SIREN, RCS, TVA, directeur de publication, téléphone | Absents. La page contact annonce qu'« une ligne téléphonique dédiée au service client sera bientôt disponible » | `pol/*.txt`, `cap/contact-d-text.txt` | constaté |
| Registre français | La recherche « SOYA PARIS » renvoie 17 entités. Aucune n'est reliée de façon vérifiable à la marque : restaurant SOYA (SIREN 498270750), SCI, SOYA GROUP FRANCE (SIREN 939636767, vente à distance, créée le 22/01/2025, 18 bd Montmartre, Paris 9e). Pour cette dernière, le lien n'est ni établi ni exclu | https://recherche-entreprises.api.gouv.fr/search?q=SOYA%20PARIS (réinterrogé le 25/09/2026) | constaté |
| Domaine | Créé le 05/09/2024 à 08:50:10 UTC chez Tucows (IANA 69). Titulaire masqué (« Contact Privacy Inc. Customer 0172331780 », Toronto). DNS NS-CLOUD-E1 à E4.GOOGLEDOMAINS.COM. Dernière modification le 22/08/2026, expiration le 05/09/2027 | https://rdap.org/domain/soya-paris.com ; `web/rdap.json`, `web/rdap_tucows.json` | constaté |
| Trustpilot | Profil revendiqué en octobre 2024, abonnement payant. Localisation affichée : **France** | https://www.trustpilot.com/review/soya-paris.com | constaté |
| Boutique actuelle | 17 des 19 fiches ont été créées le 19/10/2025 entre 07:45:56 et 10:46:11 UTC, dont 8 en 18 secondes (07:45:56 à 07:46:14). L'oreiller enfant et sa housse datent du 09/05/2026. Le logo et les logos presse portent un horodatage de fichier du même jour (logo `v=1760865474` = 19/10/2025, 09:17 UTC) | `products.json`, `home.html` | constaté ; déduit : import en masse, donc reconstruction ou migration de la boutique à cette date |
| Antériorité | 20 des 40 avis Loox intégrés à la fiche 3.0 sont datés d'avant le 19/10/2025 (le plus ancien : 19/04/2025, Soya 2.0). La section de témoignages de la fiche charge ses pictogrammes depuis l'espace de fichiers d'une **autre** boutique Shopify (`cdn.shopify.com/s/files/1/0680/4589/7928/`, fichiers du 17/02/2025, texte alternatif en anglais « Stabbing neck pain »). Les fichiers propres de soya-paris.com sont sous `/0935/5054/3180/` (shopId 93550543180) | `pdp3.html` (avis Loox, section `ev_review_8Lp6Dy`) ; `web/p_oreiller-soya-2-0.html` | constaté ; **[indice]** d'une boutique antérieure ou d'un modèle de section copié |

**Incohérences juridiques [constaté] :**
- Les mentions légales se disent « régies par le droit français », mais désignent comme compétents les tribunaux « dont dépend le siège social de soya-paris.com », donc ceux du Wyoming.
- L'article 18 des conditions d'utilisation (« LOI APPLICABLE ») se réfère aux « lois de 5830 E 2nd St, Ste 7000, Casper, Wyoming 82609 Us ». Le champ « juridiction » du modèle a été rempli avec une adresse.
- L'article 14 fait indemniser « info@soya-paris.com et notre société mère ». L'article 13 exonère « info@soya-paris.com nos directeurs, responsables… ». Là aussi, une adresse e-mail occupe la place du nom de la société.
- Le lien de pied de page « Conditions Générales de Vente » ouvre `/policies/terms-of-service`, le modèle Shopify de conditions d'utilisation. `/policies/terms-of-sale` renvoie une page « 404 Page introuvable » (`pol/terms-of-sale.html`). Le lien « Mentions légales » pointe vers `/policies/contact-information` (`home.html`).
- Aucune politique ni aucune page capturée ne contient le mot « rétractation » (recherche dans `pol/*.txt`, `cap/*.txt`, `ux/*.html`, `web/pdp3_fulltext.txt`). **[risque]** d'information précontractuelle incomplète envers des consommateurs français.
- **Promesse d'essai contre politique de retour.** Le site promet « 30 nuits d'essai — Satisfait ou remboursé » (`cap/funnel.json`, pdpBuy) et la politique de livraison dit : « vous pouvez le retourner sans frais dans ce délai pour un remboursement complet ». Mais la politique de remboursement exige que l'article soit « dans l'état où vous l'avez reçu et dans son emballage d'origine ». Elle ne donne l'adresse de retour que sur demande par e-mail, et ne fixe aucun délai de remboursement (« dans un délai de quelques jours ») (`pol/shipping-policy.txt`, `pol/refund-policy.txt`). **[déduit]** Un oreiller essayé 30 nuits ne peut pas être « dans l'état reçu ». Le texte laisse donc à l'exploitant une marge pour refuser ou retarder les remboursements, ce qui recoupe les plaintes publiques du § 9.

Une recherche avait fait remonter un éditeur « AI ECOMMERCE, 49 avenue Bosquet », qui aurait été liquidé. Cette information n'a **pas** pu être vérifiée : le registre donne 0 résultat pour « AI ECOMMERCE » avec le code postal 75007 (réinterrogé le 25/09/2026). Elle n'est pas retenue.

**Chronologie reconstituée**
- 05/09/2024 : création du domaine.
- Octobre 2024 : revendication du profil Trustpilot.
- 17/02/2025 : date des fichiers de pictogrammes, hébergés sur une autre boutique Shopify, qu'utilise la section de témoignages actuelle.
- 19/04/2025 : plus ancien avis Loox affiché (Soya 2.0).
- Juillet 2025 : « questionnaire clients » cité sur le site.
- 19/10/2025 : import en masse des fiches de la boutique actuelle, dont 1.0, 2.0 et 3.0.
- 04/11/2025 : plus ancien avis Loox affiché pour le Soya 3.0.
- 07/12/2025 : un reel Instagram de @soya.paris (titre d'un résultat de recherche, non ouvert).
- 17/02/2026 : dernière mise à jour de la politique de confidentialité.
- 09/05/2026 : oreiller enfant.
- 27/05/2026 : création des 19 produits de la boutique miroir soyaparisoreillerergonomique.com.
- 05/08/2026 : `createTime` du profil TikTok @soya.paris.
- 22/08/2026 : dernière modification du domaine.
- Septembre 2026 : campagne French Days.

---

### 2. Le nom « SOYA PARIS » et l'usage de « Paris »

- **[constaté]** Sur les 13 pages capturées, « Paris » n'apparaît que dans le nom de marque : logo, mention « © 2026, SOYA PARIS », et en plus l'adresse e-mail de la page contact. Les balises title et og portent aussi « SOYA Paris ». Aucune page capturée, ni `catalogue.json`, ni le texte intégral de la fiche 3.0 ne mentionne une adresse, un atelier, un « conçu à Paris » ou un pays de fabrication (recherche « fabriqu / origine / Chine / France / made in »).
- **[constaté]** L'image de partage (og:image, fichier `SOYA_PARIS_LOGO_2…png`, 1654×1654 px, `web/logo_og_view.jpg`) retire « PARIS » : un disque marine avec « SOYA » en blanc. La bio TikTok dit « ✨ Soya | Le confort réinventé pour vous » (`web/tt.html`).
- **[constaté]** La campagne en cours souligne la francité : bandeau « FRENCH DAYS 🇫🇷 », titre « FRENCH DAYS » dans le hero, trois oreillers noués de rubans bleu-blanc-rouge (`cap/slices/home-d-full-00.jpg`).
- **[constaté]** Trustpilot affiche la société comme située en **France**, alors que les mentions légales la domicilient au Wyoming.
- **[déduit]** « Paris » fonctionne comme un halo de qualité et de proximité, sans aucun contenu qui le justifie. **[risque]** Suggérer une origine française alors que l'éditeur déclaré est domicilié aux États-Unis peut être jugé trompeur (pratiques commerciales trompeuses sur l'identité et l'origine, Code de la consommation).
- **[constaté]** Le nom « SOYA » n'est expliqué nulle part : aucune mention de soja ni de matière végétale. **[déduit]** Il évoque peut-être « soie / soyeux », ce qui irait avec la gamme soie, mais c'est une hypothèse.
- **[constaté]** Le nom est peu distinctif. La recherche « SOYA » renvoie 140 entités au registre français, et « soya paris » fait aussi remonter le restaurant Soya Cantine Bio (Paris 11e, SIREN 498270750) sur Instagram, Facebook et les sites d'avis de restaurants.

---

### 3. Identité visuelle

| Élément | Mesure | Preuve |
|---|---|---|
| Logo en en-tête | Wordmark « SOYA PARIS » en capitales à empattements très contrastées (style didone), bleu marine. Image PNG de 2646×702 px, texte alternatif vide | `home.html` (`header__logo-image`, `sizes="120px"`), `web/logo_header_view.jpg` |
| Taille affichée | 120×32 px sur ordinateur (≈3,2×0,85 cm) ; 100×27 px sur mobile (≈2,6×0,7 cm) | `cap/home-d.json`, `cap/home-m.json` (`h1s`) |
| H1 de l'accueil | Le logo lui-même : `<h1 class="header__logo">` contient « SOYA PARIS » en `sr-only` et l'image | `home.html` |
| Couleur principale | rgb(4,33,70) = #042146, bleu marine, sur fond blanc. Texte courant et H2 dans ce marine. Pied de page marine | `cap/home-d.json` (`--accent: 4 33 70`, section footer `bg rgb(4, 33, 70)`) |
| Typographie du site | Roboto 400/500/700 uniquement ; H2 en 44 px / 500 sur ordinateur, 28 px sur mobile ; corps de texte en 16 px (ordinateur) et 14 px (mobile) | `cap/home-d.json`, `cap/home-m.json` (`fonts`, `h2s`, `body`) |
| Visuels produit | Carrés exportés en SVG (signature d'export de type Canva selon le README du dossier). Fond bleu nuit dégradé ou blanc studio, titres en capitales sans empattement dans une autre police que Roboto, pictogrammes santé | `gallery/sheet-1.jpg` à `sheet-3.jpg` |

**[déduit]** Le seul signe « luxe parisien » est l'image du logo. Le reste relève d'un site DTC générique : thème Impact, Roboto, gabarits de visuels. L'identité tient dans 120 px de large, et une boutique miroir la reproduit à l'identique (voir § 9).

---

### 4. Ton de voix et storytelling

- **Structure [constaté]** : douleur → agitation → solution. « Combien souffrent en silence d'une posture mal alignée, de nuits agitées, de journées gâchées ? » (`cap/histoire-d-text.txt`).
- **Registre [constaté]** :
  - superlatifs : « L'évolution ultime de notre oreiller ergonomique » (description du 3.0, `catalogue.json`), « SOYA 3.0 : La nouvelle ère du sommeil » (fiche 3.0), « un confort inégalé » (bloc Soya 2.0 répété sur 10 des 13 pages capturées) ;
  - capitales sur les visuels : « SOULAGEZ VOS DOULEURS ET RETROUVEZ UN SOMMEIL RÉPARATEUR » (galerie 07, 19 et 29) ;
  - promesse immédiate : « dès la première nuit », 2 fois dans le texte visible de la fiche 3.0 et 3 fois avec la FAQ (`cap/pdp3-d-text.txt`, `web/pdp3_fulltext.txt`).
- **Culpabilisation du refus [constaté]** : le bouton de refus de la pop-up dit « Non merci, je n'aime pas les remises. » (`cap/slices/v1-d-full-00.jpg`, `cap/histoire-d-text.txt`).
- **Relecture [constaté]** : « Totalement testé et approuvré » (FAQ 3.0), « Plus de 10 0 000 dormeurs » (description du 2.0), « © 2026, SOYA PARIS. © 2026 » (pied de page).
- **Récit « Notre histoire » [constaté]** :
  - aucun fondateur nommé, aucune date, aucun lieu, aucune photo d'équipe, aucun récit de fabrication ;
  - « Soya a été fondée par des passionnés du bien-être », « Comme vous, nous avons testé tous les oreillers du marché » ;
  - les photos sont des mises en scène de couple au lit, avec les mêmes mannequins que les visuels du Soya 2.0 et de la pop-up (`cap/slices/histoire-d-full-00.jpg`, `cap/slices/home-d-full-01.jpg`) ;
  - un seul témoignage : « Christine R., 41 ans, cliente SOYA » ;
  - le blog est vide (« Ce blog est vide », `cap/blog-d-text.txt`).
- **Service client contradictoire [constaté]** : le bandeau de réassurance promet un « Service client 7j/7 », la page contact répond « du lundi au samedi » (`cap/contact-d-text.txt`).

---

### 5. Promesse, valeurs, archétype

- **Promesse [constaté]** : « Moins de douleurs, un sommeil plus profond » (Notre histoire), « Soulage les douleurs cervicales et dorsales dès la première nuit », « Amélioration prouvée de la posture et du sommeil » (bloc d'achat du 3.0).
- **Valeurs déclarées [constaté]** : Santé & Posture ; Innovation & Technologie utile ; Bien-être global ; « Accessibilité sans compromis » (« démocratiser le confort orthopédique premium ») ; Éthique et Durabilité. Aucune n'est illustrée par un fait : matière, usine, bilan ou recyclage.
- **Archétype [déduit]** :
  - Déclaré : le Soignant (« prendre soin de votre corps »), doublé d'un Sage d'emprunt (ostéopathes, praticiens, presse).
  - Exécuté : un vendeur d'urgence. Le compte à rebours « FRENCH DAYS » est arrivé à zéro à 21:59:00 UTC (23:59 à Paris), puis s'est relancé pour environ 24 h (23:58:56 affiché à 22:00:05 UTC, dans une nouvelle session) : un seul cycle a été observé (`cap/funnel.json`, `cap/funnel2.json`). La pop-up promet « 60 % DE RÉDUCTION » et dit « L'offre se termine aujourd'hui à minuit ». Le bloc d'achat affiche « 89% du stock déjà écoulé » et « Plus que quelques exemplaires en stock ». Or les données de la variante chargées par Kaching indiquent un stock non suivi : `inventoryManagement: null`, `inventoryPolicy: "continue"`, `inventoryQuantity: -3888` (`cap/funnel.json`, champ `kaching`). **[indice]** : ce message de rareté ne repose pas sur un stock suivi par Shopify.
  - La contradiction entre le soin promis et la pression exercée est le cœur de l'incohérence de marque.
- **Allégations de santé [constaté] et [risque]** :
  - pictogrammes « SOULAGE LE COU ET LE DOS », « RÉDUIT L'APNÉE DU SOMMEIL », « RÉDUIT LE REFLUX GASTRIQUE », « SOULAGE LES ÉPAULES » (galerie 07, 19 et 29) ;
  - FAQ : l'oreiller est « parfaitement adapté aux personnes portant un masque nasal ou concernées par l'apnée du sommeil légère à modérée » ; ronflements : « Totalement testé et approuvré » ;
  - présenter un oreiller comme agissant sur l'apnée ou le reflux le rapproche du régime des dispositifs médicaux : c'est un **[risque]** réglementaire.

---

### 6. Cible et avatar implicites

| Signal | Source | Lecture |
|---|---|---|
| Onglets Douleur cervicale / Migraines / Posture / Ronflements | `cap/pdp3-d-text.txt` | Douleurs chroniques du quotidien |
| Visuels de couple au lit, Pack Duo, pop-up « Pour moi / Pour un proche » | `gallery/sheet-1.jpg`, `cap/funnel.json`, `cap/slices/v1-d-full-00.jpg` | Achat pour le couple ou en cadeau |
| Pack Famille « 3x Oreillers +1 Offert » | `cap/pdp3-d-buybox.txt` | Foyer, famille |
| Oreiller enfant « pour les enfants de 4 à 12 ans », « avis parents » (créé le 09/05/2026) | `cap/enfant-d-text.txt`, `web/p_oreiller-soya-enfant.html`, `products.json` | Parents |
| « Christine R., 41 ans » ; quiz de position (ventre, côté, dos) ; mannequins femmes (blonde sur la galerie 3.0, brune sur le 2.0 et la pop-up) | `cap/histoire-d-text.txt`, pop-up, galerie | Avatar : femme de 35 à 50 ans |

**[déduit]** L'acheteuse type est une femme d'une quarantaine d'années qui dort mal et a mal à la nuque, et qui achète pour elle et son conjoint. C'est exactement la cible du Neck 01.

---

### 7. Preuves d'autorité : inventaire et vérification

| Allégation | Où | Preuve fournie par SOYA | Vérification | Statut |
|---|---|---|---|---|
| Logos Santé magazine, ELLE, Le Figaro Santé, Forbes, Marie Claire, VOGUE | Bandeau juste sous le hero. Ordinateur : y=984, h=240 px (≈6,3 cm), sous la ligne de flottaison de 900 px. Mobile : y=651, h=136 px (≈3,6 cm), entièrement dans le premier écran de 844 px | Aucune : 6 balises `<a>` sans href, images 12.png à 17.png (400×100) avec `alt=""`, aucun titre « Vu dans » | Recherches « Soya Paris » + chaque média : aucun article trouvé (dont une recherche refaite le 25/09/2026). Les domaines des médias n'ont pas été interrogés directement | Non sourcé ; **[risque]** de pratique trompeuse |
| « L'oreiller ergonomique N°1 » | 6 pages distinctes (8 captures : accueil, collection, couette, enfant, soie, 1.0) ; galerie 03, 14 et 27 | Aucune : ni périmètre, ni classement, ni source | — | Non sourcé |
| « Recommandé par les ostéopathes » ; « plus de 200 praticiens » ; « plus de 200 professionnels de santé » ; « Développé en collaboration avec des kinésithérapeutes et ostéopathes » | Accueil, fiches | Aucun nom, aucune étude | Seul témoignage professionnel : « Dr. Marc R., Chiropracteur », anonymisé, et ni ostéopathe ni kinésithérapeute | Contradiction interne |
| « 100 000 dormeurs » / « 100 000 clients » | Accueil, fiches, description du 2.0 (« 10 0 000 ») | — | « Notre histoire » dit 50 000 (2 fois). Trustpilot : 6 273 avis. Loox : 1 775 avis | Contradiction interne |
| 96 % / 91 % / 87 % | Accueil (y=3520, h=501 px), fiche 3.0 | « Questionnaire envoyé à l'ensemble des clients de nos oreillers en juillet 2025 » | Nombre de répondants, taux de réponse et questions non indiqués. Les trois chiffres portent sur des effets de santé (douleur cervicale, posture, mobilité du cou) | Invérifiable |
| Pastilles CertiPUR, OEKO-TEX, « 30 nuits d'essai » ; « Certification OEKO-TEX® STANDARD 100 » ; SoyaFresh « certifiés OEKO-TEX® » | Vignette du 2.0 (`web/badges_zoom.jpg`), fiche 3.0, couette | Aucun numéro de certificat ni lien de vérification (recherche dans `pdp3.html`, `home.html`, `web/p_*.html`, `catalogue.json`) | — | Invérifiable en l'état |
| Témoignages marqués « Acheteur vérifié » (Richard S., Sarah M., Barbara P., Anthony M.) | Onglets de douleurs, fiche 3.0 | Texte fixe dans une section du thème (`ev_review_8Lp6Dy`), pas dans l'application d'avis | Le widget Loox de la même page n'affiche le badge « Verified » que sur 3 de ses 40 avis | **[indice]** : mention « vérifié » non adossée à l'outil d'avis |
| « Noté 4,8/5 – 15 637 avis » | 19/19 fiches | Texte fixe dans un bloc Liquid | Contredit par Loox (tableau ci-dessous) | **[indice]** fort de note non sincère |

**Découverte clé : la note affichée contre la note mesurée [constaté]**

Sur chaque fiche ouverte le 25/09/2026 (`https://soya-paris.com/products/<handle>`, copies dans `web/p_*.html`, synthèse dans `web/loox_vs_affiche.tsv`), le haut du bloc d'achat affiche « Noté 4,8/5 – 15 637 avis clients » (« avis parents » pour l'oreiller enfant). C'est du HTML statique : bloc `liquid_n8MKt3`, commentaire « Texte multilingue », cinq étoiles hébergées sur img.icons8.com. Or, sur la même page, Loox publie deux chiffres qui le contredisent :
- son résumé de boutique : « **Overall rating: 4.6 / 5 from 1775 reviews** » (`pdp3.html`, bloc `loox-ssr-review-summary` du widget `data-loox-aggregate`) ;
- sa note par produit (JSON-LD `aggregateRating`) :

| Produit | Note Loox | Nombre d'avis Loox | Affiché |
|---|---|---|---|
| Oreiller Soya 3.0 | 4,3 | 339 | 4,8 – 15 637 |
| Oreiller Soya 2.0 | 4,8 | 1 257 | 4,8 – 15 637 |
| Housse de rechange Soya 3.0 | 4,2 | 76 | 4,8 – 15 637 |
| Oreiller Soya enfant | 4,0 | 4 | 4,8 – 15 637 « avis parents » |
| Oreiller Soya 1.0 | 2,8 | 4 | 4,8 – 15 637 |
| Couverture lestée | 2,7 | 3 | 4,8 – 15 637 |
| Oreiller de voyage | 1,3 | 3 | 4,8 – 15 637 |
| Draps en soie | 1,0 | 1 | 4,8 – 15 637 |
| Housse de couette en soie | aucun avis | 0 | 4,8 – 15 637 |
| **Total des 19 fiches** | **4,64 (moyenne pondérée)** | **1 776** | 19 × « 15 637 » |

Le résumé Loox de la boutique (1 775 avis, 4,6/5) recoupe la somme des fiches (1 776). Le « 15 637 » ne correspond à aucune source observée, pas même à Trustpilot (6 273). Afficher la même note et le même volume sur 19 produits différents, dont un n'a aucun avis et un autre une seule évaluation à 1/5, crée un **[risque]** sérieux au regard des règles françaises sur les avis de consommateurs (pratiques commerciales trompeuses). C'est aussi, pour la marque, l'écart le plus net entre ce qui est affiché et ce qui est mesuré.

À noter, sans que ce soit une tromperie en soi : le widget Loox de la fiche 3.0 est en mode « agrégé ». Il montre les avis de toute la boutique, chacun avec le nom de son produit : sur les 40 avis intégrés, 26 portent sur le Soya 2.0 et 7 sur le 3.0. Parmi ces 40 avis, 35 sont notés 5/5, 3 portent le badge « Verified », et 20 sont antérieurs à la création de la fiche dans cette boutique. **[indice]** d'avis importés d'une boutique ou d'une source antérieure.

---

### 8. Le versionnage 1.0 / 2.0 / 3.0 comme outil de marque

- **[constaté]** Trois formes physiques différentes :
  - 1.0 : gris texturé en nid d'abeille, bande centrale noire, 34,90 € (barré 49,90 €), `cap/slices/v1-d-full-00.jpg` ;
  - 2.0 : « papillon » blanc matelassé, 119,90 €, `cap/slices/home-d-full-01.jpg`. Sa housse de rechange est donnée pour des « oreillers Soya 60 x 40 x 11/13 cm » (`catalogue.json`, `housse-d-oreiller-de-rechange-soya-1`), soit les deux mêmes hauteurs que le Neck 01 (13/11 cm) ;
  - 3.0 : « nuage » à deux hauteurs avec point central, 139,90 € au catalogue et vendu 69,90 € pendant les French Days, `gallery/`.
- **[constaté]** Les trois fiches ont été créées le même jour, le 19/10/2025, **mais dans le cadre d'un import en masse** (§ 1). Les avis Loox montrent que les produits ne sont pas nés le même jour : 2.0 dès le 19/04/2025, 3.0 à partir du 04/11/2025. La date commune prouve une migration de boutique, pas un lancement simultané.
- **[constaté]** Environ onze mois après ses premiers avis, le 3.0 est toujours « Nouveau : Oreiller Soya 3.0 » dans le menu, et la pop-up annonce « la sortie de notre nouveau produit ».
- **[constaté]** Le numéro de version s'étend aux composants : « mousse intelligente 3.0 », « Encoche Orthopédique 3.0 », « ions d'argent 3.0 » (`catalogue.json`).
- **[constaté]** La fiche 3.0 recycle le 2.0 :
  - les comparatifs « OREILLER CLASSIQUE ✕ / OREILLER SOYA 2.0 ✓ » (galerie 11 et 39) montrent le 3.0 sous l'étiquette « 2.0 » ;
  - dans la FAQ, les 5 réponses qui nomment un produit nomment le « SOYA 2.0 », aucune ne nomme le 3.0 ;
  - les dimensions se contredisent : 62 cm × 37 cm, hauteurs 14,4 ou 9 cm sur la fiche (`web/pdp3_fulltext.txt`), contre « 60 x 40 cm, deux hauteurs intégrées » sur la housse 3.0 (`catalogue.json`).
- **[déduit]** Le numéro de version emprunte au monde du logiciel pour faire trois choses :
  - raconter une R&D qui n'est jamais montrée (« avec plus de 200 praticiens ») ;
  - construire une échelle de prix : 1.0 en produit d'appel, 2.0 en ancrage à 119,90 €, 3.0 en premium affiché à 139,90 € puis « remisé » ;
  - entretenir une nouveauté permanente.

---

### 9. Réputation externe et écosystème

- **Trustpilot [constaté]** (https://www.trustpilot.com/review/soya-paris.com, relu le 25/09/2026) :
  - 6 273 avis, TrustScore 4,3/5 ; répartition 65 % 5★, 16 % 4★, 2 % 3★, 1 % 2★, 16 % 1★ ;
  - 5 294 avis sur les 12 derniers mois ; mention « Asks customers to review » ;
  - réponse à 4 % des avis négatifs, « généralement sous une semaine » ;
  - première page des avis 1★ (https://fr.trustpilot.com/review/soya-paris.com?stars=1, lecture WebFetch) : 20 avis publiés entre quelques heures et environ 5 jours avant la lecture. Griefs récurrents : remboursement attendu **2 à 3 mois**, parfois « plusieurs mois », après le retour ; commandes non reçues ou partielles ; livraison en 13 jours ; absence de réponse aux e-mails ; odeur de plastique ; « POLYESTER bas de gamme chinois » pour un produit vendu comme de la soie ; « made in china », « le packaging indique la provenance de Chine » ; « l'entreprise est située au US, ils font du dropshipping ». Ce sont les **affirmations de clients**, pas des faits établis.
- **Sites de vérification** :
  - franceverif « à fiabilité douteuse », critère « service de dropshipping » 9/10 (rouge), commentaire du 10/09/2026 : retour du 18 juillet non remboursé, signalement aux autorités selon l'auteur [constaté, https://franceverif.fr/fr/site/soya-paris.com]. C'est un score automatique sur 127 critères, qui affiche aussi un pays « Canada » et une date de création aberrante (« janvier 1725 ») : son poids est faible ;
  - verifsites : 4/5 le 05/08/2026, avec un domaine récent (05/09/2024), des témoignages sans nom ni photo et deux retours clients sur des remboursements tardifs [constaté, https://verifsites.com/site-test/soya-paris-com-avis-clients-et-score-de-confiance/] ;
  - signal-arnaques (« 61 signalements, 244 commentaires ») et scamdoc (« 1 % ») : titres de résultats de recherche seulement, pages en erreur 403 (`web/https___www.signal-arnaques.com_*.html`) ;
  - ce sont des **indices**, pas des preuves.
- **Boutiques miroirs [constaté]** :
  - soyaparisoreillerergonomique.com est une autre boutique Shopify (shopId 71078019242, contre 93550543180 pour soya-paris.com ; us.soya-paris.com partage ce dernier, c'est la même boutique). Elle reprend les textes de l'accueil. Son `/products.json`, rouvert le 25/09/2026, liste 19 produits créés le 27/05/2026, vendeur « SOYA PARIS », avec des handles à suffixe aléatoire (« oreiller-soya-30-pgplze »), signe d'un outil de copie de boutique. Ses conditions citent « Soya Paris », se disent régies par « les lois applicables du pays de résidence du consommateur » et donnent pour contact soyaparisergonomique@gmail.com (`web/clone_pol.html`) ;
  - soya-paris-oreiller-ergonomique.com répond « This store is unavailable » et soyaparisergonomicpillow.com « Boutique indisponible » (`web/clone_*.html`) ;
  - **[déduit]** Le dossier ne permet pas de trancher entre une copie par un tiers et une boutique de secours du même exploitant.
- **Réseaux sociaux** :
  - Le site ne renvoie vers aucun réseau social : aucun lien Instagram, Facebook, TikTok ou YouTube dans `home.html` ; les seules occurrences de « facebook » sont techniques (pixel, robots) [constaté].
  - TikTok @soya.paris : 5 070 abonnés, 2 691 j'aime, **0 vidéo publique**, 0 abonnement, compte non vérifié, `createTime` du profil au 05/08/2026 [constaté, `web/tt.html`]. **[déduit, hypothèse]** Un tel profil sert plutôt d'identité publicitaire que de communauté.
  - Instagram @soya.paris : environ 25 000 abonnés et 27 publications selon un résumé de moteur de recherche ; un reel daté du 07/12/2025 apparaît dans les résultats [non vérifié : la page renvoie 429/401, `web/ig.json`].
  - Facebook : page 61565502837799, derrière un mur de connexion.
  - **[déduit]** L'acquisition passe par la publicité payante (pixels Meta, TikTok, Snapchat, Pinterest et Google Ads chargés sur l'accueil, `cap/home-d.json` → `third`) plutôt que par une communauté organique.

---

### 10. Image projetée face à la réalité

| Pilier projeté | Réalité documentée | Écart |
|---|---|---|
| Marque parisienne | Éditeur « soya-paris.com » domicilié à l'adresse d'agents enregistrés du Wyoming ; aucune adresse française ; Trustpilot indique pourtant « France » | Fort |
| Validation médicale | Aucun praticien nommé ; un « Dr » chiropracteur anonymisé ; allégations sur l'apnée et le reflux | Fort |
| Reconnaissance presse | 6 logos sans lien ; aucun article trouvé | Fort (absence non prouvée) |
| Popularité massive | 100 000 contre 50 000 clients selon les pages ; « 15 637 avis à 4,8 » contre 1 775 avis à 4,6 selon Loox sur la même page, et 6 273 sur Trustpilot | Fort |
| Innovation continue | Aucune R&D montrée ; contenus du 2.0 recyclés sur la fiche 3.0 ; dimensions contradictoires ; « Nouveau » depuis environ 11 mois | Fort |
| Soin et bienveillance | Compte à rebours relancé à 23:59 ; stock « écoulé à 89 % » sans stock suivi ; pop-up culpabilisante ; remboursements en attente selon les avis | Fort |
| Qualité premium | Roboto générique, gabarits de visuels, coquilles ; 16 % d'avis 1★ sur Trustpilot | Moyen |

**Conclusion [déduit]** : l'identité de SOYA PARIS est un habillage (nom, logo à empattements, marine, tricolore) posé sur une mécanique commerciale à forte pression. Plusieurs **indices** convergent vers un modèle de revente de produits sourcés à l'étranger, sans que le dossier en apporte la preuve formelle : adresse d'agent enregistré aux États-Unis, clients évoquant la Chine, critère « dropshipping » de franceverif. Elle convertit à court terme : les avis 5★ sont nombreux. Mais elle est fragile face à une acheteuse qui vérifie. Elle s'expose à un **[risque]** réglementaire (avis, allégations de santé, origine, information précontractuelle) et de réputation (16 % d'avis 1★, sites de signalement, boutiques miroirs).

---

### 11. Ce que cela implique pour Somnila

1. **Même produit, même prix, même cliente.** Le Soya 3.0 vendu 69,90 € pendant les French Days (hauteurs 14,4/9 cm) affronte directement le Neck 01 à 69,90 € (13/11 cm). Le Soya 2.0 (119,90 €) déclare, via sa housse, les mêmes hauteurs 11/13 cm. Somnila doit faire comprendre que 69,90 € est son **vrai** prix : pas de prix barré fictif, pas de compte à rebours, pas de stock « écoulé » inventé.
2. **Prouver ce que SOYA simule**, point par point :
   - l'origine : raison sociale, SIREN, adresse physique et téléphone, en pied de page et dans les mentions légales ;
   - l'autorité : aucun logo sans lien, aucun « N°1 » ; si un professionnel intervient, son nom, son numéro RPPS quand il existe et son rôle exact ;
   - la popularité : le compteur dynamique de l'application d'avis, par produit, même modeste (« 12 avis vérifiés » inspire plus confiance qu'un 15 637 figé) ;
   - la certification : numéro de certificat OEKO-TEX, organisme et lien de vérification publique ;
   - la mesure : hauteurs, dimensions, tolérances et densité publiées, identiques sur toutes les pages.
3. **Attaquer l'après-vente**, le vrai point faible de SOYA : une politique de retour cohérente avec l'essai promis (un oreiller essayé est repris), une adresse de retour publiée, le droit de rétractation de 14 jours écrit noir sur blanc, un délai de remboursement court et écrit, une réponse à 100 % des avis négatifs.
4. **Tenir la ligne « zéro promesse médicale ».** Là où SOYA parle d'apnée et de reflux, Somnila parle de géométrie, de fermeté et de confort. C'est plus défendable et plus crédible.
5. **Protéger la marque tout de suite** : dépôt INPI/EUIPO (classes 20 et 24), réservation des domaines proches, veille des boutiques miroirs. SOYA en a au moins une, créée huit mois après la reconstruction de sa boutique.
6. **Occuper la recherche « Soya Paris avis »** avec un contenu comparatif strictement factuel (dimensions, matériaux, politique de retour), sans dénigrement, dans le respect des règles de la publicité comparative.
7. **Ne pas imiter l'habillage.** Le marine avec une sérif chic est déjà pris et déjà copié. Somnila gagne à avoir une identité complète (typographie, photographie réelle, preuves visibles) plutôt qu'un seul logo.

---

### 12. Limites de cette analyse

- **Sources inaccessibles** : web.archive.org (connexion refusée), signal-arnaques et scamdoc (403), Instagram (429/401), Facebook (connexion requise), TMview (pas de réponse). Les parutions presse n'ont pas été cherchées directement sur les sites des médias.
- **Lectures par un modèle** : les chiffres de Trustpilot, franceverif, verifsites et Davinci viennent de lectures WebFetch, c'est-à-dire de résumés faits par un modèle. Pour Trustpilot, deux lectures concordent, plus une relecture le 25/09/2026. La liste des agents du Wyoming a été lue par extraction brute du texte du PDF officiel.
- **Une seule journée d'observation** : prix, compte à rebours et pop-ups ont été relevés le 25/09/2026, et un seul cycle du compte à rebours a été observé. La permanence des remises n'est pas démontrée par ce dossier.
- **Dates de fiche ≠ date de lancement** : les dates de `products.json` datent la fiche dans la boutique actuelle, pas le lancement commercial. Les dates d'avis Loox le montrent (§ 8).
