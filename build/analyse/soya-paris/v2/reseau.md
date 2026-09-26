## 15. Qui opère SOYA PARIS : cartographie du réseau (enquête du 26/09/2026, contre-vérifiée)

*Racines des preuves (dossier de travail `/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/`) :*
- *`reseau/` = `soya2/reseau/` : preuves de l'enquête ;*
- *`contre/` = `soya2/contre_reseau/` : preuves ajoutées par la contre-enquête ;*
- *`soya/…` = preuves de la première enquête.*

*Ni l'enquête ni la contre-enquête n'ont envoyé de requête à soya-paris.com. Sources utilisées : Wayback Machine (archive.org), crt.sh, RDAP, dns.google, OpenCorporates (lu par WebFetch), les boutiques tierces et une requête témoin sur un sous-domaine myshopify.com inexistant. Toutes les preuves ont été rouvertes le 26/09/2026. Les passages modifiés par la contre-enquête portent la mention « (contre-enquête) ».*

### 15.1 Verdict

1. **Les avatars des témoignages sont hébergés sur l'ancienne boutique de Soya, pas sur la boutique d'un tiers** [constaté].
   - Le chemin `/s/files/1/0680/4589/7928/` correspond au shop 68045897928 (`vxg4tp-y8.myshopify.com`). Les captures Wayback le montrent servant soya-paris.com du 01/03/2025 au 12/10/2025.
   - La section `ev_review_8Lp6Dy` et ses 4 témoignages y étaient déjà affichés le 19/04/2025.
   - Nuance (contre-enquête) : dès avril 2025, la section était déjà un morceau de HTML collé dans un bloc `custom_liquid`. Elle porte l'identifiant d'un autre gabarit (`template--24247348527436`) que celui de la page (`template--17760640762056`). L'origine du code reste donc inconnue. Seuls les avatars sont prouvés appartenir à Soya.
2. **Soya recycle ses « preuves » d'une année à l'autre** (contre-enquête) [constaté].
   - Les 4 témoignages « Acheteur vérifié » affichés sous le Soya 3.0 étaient en ligne sur la fiche 2.0 six mois et demi avant le premier avis sur le 3.0.
   - En 2025, le « questionnaire envoyé à l'ensemble des clients de nos oreillers » était daté de **juillet 2024**. Il est daté de **juillet 2025** depuis octobre 2025, avec les mêmes pourcentages (96 / 91 / 87 %).
   - En juillet 2024, le domaine soya-paris.com n'était pas encore enregistré et la boutique du futur Soya vendait un parfum.
   - Le nombre affiché de clients est passé de « plus de 20 000 » (19/04/2025) à « 100 000 » (12/10/2025), et n'a plus bougé depuis.
3. **Un seul opérateur a servi le même domaine depuis 5 boutiques Shopify en 13 mois** [constaté]. Les mêmes comptes publicitaires relient les 4 dernières.
   - Correction (contre-enquête) : il ne s'agit pas de 5 créations successives. Au moins deux de ces boutiques existaient avant le domaine. Elles avaient très peu servi et ont coexisté. On a donc affaire à un **parc de boutiques** [déduit].
4. **L'opérateur a porté au moins deux autres marques** :
   - **FREYJA**, un parfum aux phéromones vendu sur la même boutique Shopify que Soya [constaté ; lien fort] ;
   - **MERCURE PARIS**, dont le domaine a été rattaché à la boutique actuelle de Soya (ajout de la contre-enquête) [constaté ; lien fort].
   - heylashes.fr (cils) n'est relié que par le nom d'un thème exporté [lien faible].
5. **Deux grappes de clones parasitent la marque**, sans aucun identifiant publicitaire commun avec Soya [constaté]. Ce sont des tiers [déduit].
   - La première est domiciliée au Wyoming, vend en USD et a été codée par une personne lusophone.
   - La seconde est domiciliée en France et fait payer hors de Shopify.
6. **Milaris et Juvilor ont copié le contenu des témoignages de Soya** (textes et images, pas le code) [constaté]. Ce sont des copies, pas le même opérateur [déduit].
7. **Aucune personne ni société immatriculée n'est reliée publiquement à soya-paris.com** [constaté par absence]. La « SOYA PARIS LLC » citée dans les mentions légales de 2025 n'apparaît pas dans les données du Wyoming consultées sur OpenCorporates (ajout de la contre-enquête).

### 15.2 Méthode et précautions

| Technique | Ce qu'elle révèle | Limite relevée par la contre-enquête |
|---|---|---|
| En-têtes des captures Wayback (`x-archive-orig-x-shopid`) | Le shop Shopify qui servait une URL à une date donnée | Absent de certaines captures de 2026 ; on lit alors `Shopify.shop` dans le HTML |
| Paramètres `h1…h5` des URL de polices `/cdn/fonts/…` (base64) | Les domaines rattachés à un shop | **Jamais plus de 5 entrées observées.** us.soya-paris.com, pourtant servi par la boutique actuelle (`soya_prix/us.soya-paris.com_meta.json`), n'y figure jamais. La liste n'est donc pas exhaustive. |
| `webPixelsConfigList` et étiquettes gtag (script `reseau/infra.py`) | Identifiants Meta, TikTok, Snap, Google, Klaviyo, Pinterest | Une capture est une photo à une date : une absence ne prouve rien entre deux captures |
| Numéro de thème dans `/cdn/shop/t/N/` | Rang du thème dans l'historique de la boutique (t/2 = deuxième thème installé) | Indicateur d'activité, pas une date |
| Ordre des identifiants de boutique | Ordre de création des boutiques | Hypothèse : identifiants croissants dans le temps. Elle est cohérente avec toutes les dates connues, mais n'est pas documentée par Shopify. On n'en tire que des comparaisons (« avant » ou « après »), jamais une date. |
| `/meta.json`, `/products.json` | Shop id, ville, pays, date de création des fiches | Un 404 sur `/meta.json` ne distingue pas une boutique fermée d'une boutique supprimée : un sous-domaine témoin inexistant renvoie le même `{"errors":"Not Found"}` |
| crt.sh, RDAP, dns.google | Historique TLS, registrar, serveurs DNS | Les domaines achetés dans Shopify ont tous le même registrar (Tucows) et les mêmes DNS Google : ce n'est pas un lien |

### 15.3 Témoignages et statistiques : chronologie corrigée

| Date | Fait | Preuve |
|---|---|---|
| 24/07/2024 | La boutique 74445094946 vend FREYJA, un parfum aux phéromones. Aucun oreiller. | `reseau/wayback/freyja2_20240724.*` [constaté] |
| 05/09/2024 | Enregistrement de soya-paris.com | `reseau/rdap/soya-paris.com.json` [constaté] |
| 17/02/2025 14:58 UTC | Avatars 88 à 91.png téléversés sur le shop 68045897928 (`v=1739804305`) | `soya/pdp3.html` ; `contre/recalculs.txt` [constaté] |
| 01/03/2025 et 08/04/2025 | Accueil de soya-paris.com (shop 68045897928) : « questionnaire envoyé à l'ensemble des clients de nos oreillers en **juillet 2024** » ; 96 %, 91 %, 87 % | `reseau/wayback/w_20250301121207.html`, `w_20250408171150.html` [constaté] |
| 19/04/2025 | Fiche **Soya 2.0** : « Plus de **20 000** clients se réveillent désormais – sans douleurs ! » ; section `template--24247348527436__ev_review_8Lp6Dy` collée dans `template--17760640762056__custom_liquid_Mh9QRY` ; Richard. S, Sarah. M, Barbara. P, Anthony. M, « Acheteur vérifié », textes identiques à ceux d'aujourd'hui (« Merci SOYA. », « L'Oreiller SOYA été une révélation », « voix respiratoires ») ; blocs nommés en anglais (`data-block="Neck pain"`, alt « Stabbing neck pain ») ; même questionnaire « juillet 2024 » | `reseau/wayback/pdp2_20250419.html` [constaté] |
| 28/08/2025 | « Notre histoire » : « plus de **50 000** clients satisfaits » | `reseau/wayback/page_histoire_20250828.html` [constaté] |
| 15/09/2025 | Juvilor téléverse 88/89/90.webp : les mêmes images que Soya, réduites de 827 à 150 px | `reseau/avatars/` [constaté] |
| 29/09 au 11/10/2025 | Sur l'ancienne boutique, la housse « Soya 3.0 » est créée le 29/09/2025 et publiée le 11/10/2025 : premières traces du 3.0 | `reseau/wayback/pdp_20251012.html` (`created_at`, `published_at`) [constaté] |
| 12/10/2025 | Ancienne boutique : « **100 000** dormeurs conquis » | `reseau/wayback/pdp_20251012.html` [constaté] |
| 19/10/2025 | Nouvelle boutique : la section est de nouveau collée telle quelle, dans `template--32068952621388__custom_liquid_rMBeUk` | `soya/pdp3.html` [constaté] |
| 31/10/2025, 23/01/2026, 25/09/2026 | Questionnaire daté de « **juillet 2025** », **mêmes** 96 / 91 / 87 % ; « 100 000 dormeurs conquis » ; fiche 3.0 : « Plus de 100 000 clients » | `reseau/wayback/w_20251031190852.html`, `w_20260123224419.html` ; `soya/home.html` ; `soya/pdp3.html` [constaté] |
| 04/11/2025 | Plus ancien avis Loox du Soya 3.0 | dossier § 2.2 |
| 15/11/2025 (16:44 à 17:06 UTC) | Milaris publie les 4 textes corrigés (« a été une révélation », « voies respiratoires », « Merci Milaris ! ») | `milaris.html` (`data-test-force-publish` 1763225046 à 1763226369) [indice sur la date] |

**Ce que ça change** [déduit] :
- **Témoignages.** Ceux qu'on lit sous le Soya 3.0 existaient cinq mois avant les premières traces du 3.0, sur un autre produit. Le libellé « Acheteur vérifié » est écrit en dur.
- **Questionnaire.** Les pourcentages sont restés identiques d'une année à l'autre ; seule la date a changé, de « juillet 2024 » à « juillet 2025 ». Or aucune boutique d'oreillers Soya n'est observable en juillet 2024 : le domaine n'existait pas encore et la boutique vendait FREYJA. On ne peut pas exclure une boutique Soya antérieure non archivée, mais rien ne la montre. **Indice fort** de statistique non sincère.
- **Nombre de clients.** Passer de 20 000 à 100 000 en moins de six mois, puis rester à 100 000 pendant un an, ressemble à un chiffre rond d'affichage plutôt qu'à un compteur [indice].
- **Risque juridique.** Le risque au regard de l'article L121-4 (27° et 28°) et de l'article L121-2, signalé au § 11, en sort renforcé.

### 15.4 Cinq boutiques pour un même domaine : un parc, pas une suite de créations

| Shop id (myshopify) | Sur soya-paris.com | Thème (rang) | Pays déclaré | Âge relatif [déduit de l'ordre des identifiants] | Statut actuel | Preuve |
|---|---|---|---|---|---|---|
| 84122730826 (f3a2ff-d8) | 05/09/2024, jour de l'enregistrement du domaine | « Soya », Prestige 10.0.1 (t/4) | FR | au plus tard le 05/09/2024 ; plus récente que 74445… et 68045… | `meta.json` 404 | `reseau/wayback/w_20240905110535.*` |
| 74445094946 (9a3bc8-01) | 21/09/2024 | « SOYA PARIS V2 » (t/6) | US | **avant le 24/07/2024** (FREYJA y tournait déjà, sur son thème t/2) | 404 | `w_20240921201431.*`, `freyja2_20240724.*` |
| 88419959133 (989ff1-c5) | 01/01/2025 | « SOYA BLACK FRIDAY 2K24 », Prestige 10.0.1 (t/6) | FR | au plus tard le 01/01/2025 ; plus récente que 84122… | 404 | `h_20250101123745.txt`, `w_20250101123745.html` |
| 68045897928 (vxg4tp-y8) | du 01/03/2025 au 12/10/2025 (dates des captures) | « SOYA BACK TO BACK », Impact 6.4.1 (**t/3** le 01/03/2025, t/9 le 12/10/2025) | US | **plus ancienne que 74445094946**, donc antérieure au domaine | 404 | `w_20250301121207.*`, `pdp_20251012.hdr` |
| 93550543180 (5xfyfp-ti) | depuis le 31/10/2025 ; catalogue recréé le 19/10/2025 | V4 (t/4) puis V10, V11, V14, V15, V16 (t/29), Impact 6.4.1 | GB (London) | **créée le 02/04/2025** (collection automatique `frontpage`) | active | `h_20251031190852.txt` ; `soya/collections.json` ; `contre/w_2026*.html` |

- [constaté] Le 21/09/2024, la liste des domaines de 74445094946 contenait à la fois **freyjaparis.fr et soya-paris.com** (`w_20240921201431.html`, polices h1 à h3). Le 22/01/2025, freyjaparis.fr y figurait encore seul (`cdx2_9a3bc8-01.myshopify.com.txt`), alors que soya-paris.com était servi ailleurs depuis au moins le 01/01/2025.
- [déduit] La boutique actuelle a été créée le 02/04/2025. Elle a attendu six mois et demi avant de recevoir Soya, pendant que 68045897928 servait le domaine. La boutique 68045897928, créée avant le domaine, n'en était qu'à son troisième thème le 01/03/2025 : elle avait très peu servi. Les boutiques ont donc **coexisté** : l'opérateur dispose d'un parc et déplace le domaine d'une boutique à l'autre.
- [indice, non prouvé] L'usage de boutiques anciennes et peu utilisées correspond à une pratique répandue dans le dropshipping : achat ou mise en réserve de boutiques « vieillies », notamment pour faciliter l'acceptation des paiements. Les clones de la grappe A suivent le même schéma (identifiants 71078019242 et 75777507463, thème t/2 en 2026). Ce schéma n'est donc pas une signature propre à Soya.
- [indice] Les quatre anciennes boutiques ne répondent plus, le pays déclaré change d'une boutique à l'autre (FR, US, FR, US, GB) et la dernière migration a exigé de recréer tout le catalogue et de réimporter les avis Loox. Ce n'est pas le parcours d'une marque qui consolide. Les causes (fermeture par Shopify, retenues de paiement, changement de structure) ne sont pas visibles de l'extérieur.

### 15.5 Identifiants persistants : la preuve du même opérateur

| Identifiant | 74445… 21/09/2024 | 88419… 01/01/2025 | 68045… 01/03/2025 | 68045… 08/04/2025 | 93550… 31/10/2025 → 03/08/2026 | 93550… 07/09/2026 et 25/09/2026 |
|---|---|---|---|---|---|---|
| Meta 1581609639439558 | oui | oui | oui | oui | oui | oui |
| Klaviyo XuYmmR | oui | oui | oui | oui | oui (plus le pixel d'application Klaviyo) | oui |
| Snap fd7f04c9-aabf-42d7-ad18-c53b61724f19 | oui | oui | oui | oui | oui | oui |
| Balise Google | GT-552WXRWX | GT-K5MKJXW8 | GT-K5MKJXW8 + GT-PZZPKB3M | GT-K5MKJXW8 + GT-NB9WN77Q | GT-K5MKJXW8 + GT-TWR6PKQQ | idem |
| Google Ads AW-16655023754 | — | oui | **absent de cette capture** | oui | oui | oui |
| Actions de conversion Google Ads (étiquettes `…EIr93YU-`) | — | dont `CeXiCMmD2MkZ…` et `PVBSCLqD2MkZ…` | — | les mêmes, plus `3hh5CJzRgqca…` et `exn2CL2D2MkZ…` | identiques | identiques |
| TikTok | — | CSH048JC77U2MN99KTU0 | idem | idem | idem (encore là le **03/08/2026**) | **D9PMU6BC77U7K82NLN50** |
| Balise Merchant Center (`MC-`) | MC-JKTSNSZN80 | — | MC-QDJHH4X0LV | MC-LX5EXMWCB4 | MC-KXKT0M50ZM | idem |
| Pinterest 2613625264959 | — | — | — | — | oui | oui |

Preuves [constaté] :
- `reseau/wayback/w_*.html` et `pdp2_20250419.html` ;
- `contre/w_20260420150725.html`, `w_20260803094546.html`, `w_20260907200626.html` ;
- `soya/home.html` ;
- extraction par `reseau/infra.py`.

Première capture sans pixel : shop 84122730826 le 05/09/2024, jour même du domaine.

Lecture :
- **Lien fort** [déduit]. Un même pixel Meta, un même compte Klaviyo, un même pixel Snap et **les mêmes actions de conversion Google Ads** depuis le 01/01/2025 ne peuvent venir que du même annonceur, ou d'un prestataire qui gère ses comptes. Ces identifiants appartiennent aux comptes publicitaires, pas aux boutiques.
- **Pixel TikTok** (contre-enquête). Il a changé entre le 03/08/2026 à 09:45 UTC et le 07/09/2026 à 20:06 UTC. Le profil @soya.paris, créé le 05/08/2026 (dossier § 2.2), tombe dans cette fenêtre : le lien est **compatible**, mais pas démontré.
- **Merchant Center** [déduit]. Une balise `MC-` correspond à un compte Merchant Center : quatre balises, c'est très probablement quatre comptes. Deux se sont succédé sur la même boutique en cinq semaines (du 01/03 au 08/04/2025). Avec le changement de pixel TikTok, c'est un **indice** d'instabilité des comptes publicitaires (suspensions possibles, non prouvées).

### 15.6 Avant Soya : FREYJA (et peut-être heylashes)

| Date | Shop 74445094946 | Preuve |
|---|---|---|
| 24/07/2024 | **FREYJA** (freyjaparis.fr, titre « FREYJA ») : un seul produit, « Éclat de femme - élixir aux phéromones », 19,90 €, « 1 ACHETÉ = 1 OFFERT ». Thème **« theme-export-heylashes-fr-theme-export-heylash »**, soit **Prestige 10.0.1** (`BOOMR.themeName`), le même thème et la même version que les boutiques Soya de 2024 (84122730826, 88419959133). Bandeau de réassurance « Livraison gratuite · Garantie 30 jours · Service client 7j/7 · Paiements 100% sécurisés », repris sur les accueils Soya de 2024 et 2025. Aucun pixel. | `reseau/wayback/freyja2_20240724.hdr` et `.html` ; `w_20240905110535.html`, `w_20250101123745.html` [constaté] |
| 21/09/2024 | SOYA PARIS, avec le pixel Meta et le compte Klaviyo de Soya ; **freyjaparis.fr toujours rattaché** au même shop | `w_20240921201431.*` [constaté] |
| 19/11/2024 | Boutique protégée par mot de passe (`/password` 200) | `cdx2_9a3bc8-01.myshopify.com.txt` [constaté] |
| 22/01/2025 | freyjaparis.fr est toujours rattaché, désormais seul ; thème t/11 dont les fichiers datent des 26 et 27/09/2024 | `cdx2_9a3bc8-01.myshopify.com.txt` [constaté] |

- **Certificats et registre** [constaté]. freyjaparis.fr a reçu des certificats du 24/07/2024 au 14/07/2025 ; heylashes.fr, du 20/06/2024 au 10/06/2025. Sa boutique ne répondait plus le 15/12/2024 (404, shop id vide). Aucun des deux domaines n'est plus enregistré (`reseau/crt/`, `reseau/rdap/`, AFNIC 404).
- **FREYJA ↔ Soya : lien fort.** C'est la même boutique Shopify, et les deux domaines y ont été rattachés **en même temps** (correction : l'enquête disait « de nouveau rattaché », alors que freyjaparis.fr n'a jamais été détaché dans les captures). Une boutique Shopify peut être cédée, mais le vendeur aurait dû garder son propre domaine pointé vers une boutique vendue, ce qui est peu vraisemblable.
- **heylashes ↔ opérateur : lien faible.** Un export de thème peut circuler entre vendeurs.
- **Nom du produit FREYJA** (contre-enquête). C'est aussi le nom d'une marque existante : ECDF, « Éclat de Femme » (eclatdefemme.fr et ecdf-france.com, une même boutique : 0aa128-2, 78043447619, NL). ECDF ne partage **aucun** identifiant avec Soya : Klaviyo TdPmfr, Snap 2bcd268c…, Google GT-MB8GM67V (`contre/home_eclatdefemme.fr.html`). **Indice** d'une copie de produit à succès, sans antériorité établie.
- [déduit] Soya est **au moins le deuxième projet** de cet opérateur (parfum, puis oreillers), et le troisième si heylashes est lié. S'y ajoute le projet MERCURE PARIS (§ 15.7). Le récit de « Notre histoire » (« nous avons testé tous les oreillers du marché ») n'est étayé par rien.

### 15.7 MERCURE PARIS : une autre marque du même opérateur (ajout de la contre-enquête)

| Date | Fait | Preuve |
|---|---|---|
| 18/03/2025 | Premier certificat de mercure-paris.com | `contre/crt_mercure-paris.com.json` [constaté] |
| 18 et 20/03/2025 | mercure-paris.com affiche « **MERCURE PARIS** », boutique fermée par mot de passe (« Opening soon »), sur le shop **63999410291** (`rjprqd-0e`) : pays US, EUR, thème Dawn 15.2.0 d'origine (t/1, **premier thème** d'une boutique ancienne), aucun pixel ; account.mercure-paris.com actif | `contre/mercure_pw_20250318.hdr` et `.dec.html` ; `contre/cdx_mercure.txt` [constaté] |
| 19/10/2025 | Certificat Let's Encrypt pour mercure-paris.com le **jour même** de la recréation du catalogue Soya ; soya-paris.us en reçoit deux le même jour | `contre/crt_mercure-paris.com.json` ; `reseau/crt/soya-paris.us.json` [constaté ; lien avec la migration : indice] |
| 28/10/2025 au 11/04/2026 | La liste de domaines du shop **93550543180 (boutique actuelle de Soya)** contient `mercure-paris.com` à côté de soya-paris.com, soya-paris.us et account.soya-paris.com (h2 = `bWVyY3VyZS1wYXJpcy5jb20`) | `reseau/wayback/w_20251031190852.html` ; `reseau/wayback/cdx_soya-paris.com.txt` (URL de polices du 28/10/2025, du 02/11/2025 et du 11/04/2026) ; `contre/recalculs.txt` [constaté] |
| 22/03/2026 et 19/04/2026 | Certificat GoDaddy, puis page de parking (`window.location.href="/lander"`) | `contre/crt_mercure-paris.com.json` ; `contre/mercure_feed_20260419.html` [constaté] |
| 26/09/2026 | Domaine non enregistré (RDAP Verisign 404) | `contre/rdap_mercure-paris.com.json` [constaté] |

- [déduit] Pour rattacher un domaine à une boutique Shopify, il faut contrôler ce domaine. Celui qui administre la boutique actuelle de Soya contrôlait donc mercure-paris.com. **Lien fort.**
- Aucune boutique MERCURE PARIS ouverte au public n'a été observée ; le projet semble abandonné.
- Hypothèse non vérifiée : la boutique actuelle (créée le 02/04/2025) aurait d'abord servi à ce projet.
- **Risque** pour l'opérateur : « Mercure » est la marque hôtelière du groupe Accor.
- [déduit] Le schéma se répète : un nom « X PARIS » (FREYJA, SOYA, MERCURE), une domiciliation américaine, et des boutiques anciennes réutilisées.

### 15.8 Domaines de Soya

| Domaine | Rattachement | Période | Preuve |
|---|---|---|---|
| soya-paris.com | les 5 shops, successivement | depuis le 05/09/2024 (un certificat DigiCert de 2021 montre un titulaire antérieur ; le domaine a été réenregistré en 2024) | `reseau/crt/soya-paris.com.json`, `reseau/rdap/soya-paris.com.json` |
| account.soya-paris.com | 68045… puis 93550… | 2025-2026 | listes h1 à h5 |
| us.soya-paris.com | 93550… uniquement (correction : pas 68045…) | certificats depuis le 19/12/2025 | `soya_prix/us.soya-paris.com_meta.json` ; `reseau/crt/us.soya-paris.com.json` |
| soya-paris.us | 68045… puis 93550… ; aujourd'hui erreur Cloudflare 1001 | certificats du 08/04/2025 au **04/03/2026** (correction) | `reseau/crt/soya-paris.us.json` ; `reseau/domaines/meta_soya-paris.us.json` |
| soyaparis.store | 68045… : redirection 301 vers soya-paris.com le 04/03/2025 (`x-sorting-hat-shopid` 68045897928) ; absent des listes depuis la migration | enregistré le 04/03/2025 (Tucows via Shopify) | `contre/soyastore_20250304.hdr` ; `reseau/rdap/soyaparis.store.json` |
| **mercure-paris.com** (ajout de la contre-enquête) | 63999410291 en 03/2025, puis **93550…** | du 28/10/2025 au 11/04/2026 au moins ; expiré depuis | § 15.7 |
| freyjaparis.fr | 74445… | 07/2024 à 01/2025 au moins | § 15.6 |

**Identité juridique** [constaté] :
- Les mentions légales du 15/08/2025 (shop 68045897928) indiquent : « Dénomination sociale : **SOYA PARIS** », siège à Casper (Wyoming), et « les tribunaux compétents seront ceux dont dépend le siège social de **SOYA PARIS LLC** » (`reseau/wayback/pol_contact_20250815.html`).
- Aujourd'hui, la dénomination est « soya-paris.com » et le mot « LLC » a disparu (0 occurrence dans `soya/pol/*.txt`).

**Recherche sur OpenCorporates** (contre-enquête) :
- « soya paris » dans les données du Wyoming : **0 résultat**.
- « soya » : 2 résultats. SOYA GROUP LLC (n° 2022-001180246, inactive, 30 N. Gould St, Sheridan) et SoyA&R LLC (active, Sheridan). Rien ne les relie à soya-paris.com (`contre/opencorporates_webfetch.txt`, lecture résumée).
- Le registre officiel du Wyoming (recherche interactive) n'a pas été interrogé : la LLC reste **non vérifiée**.

### 15.9 Les clones : deux grappes, aucune n'est Soya

**Grappe A : « Soya Paris », Sheridan (Wyoming), USD, Shrine PRO 1.6.1**

| Boutique | Domaine (enregistrement) | Catalogue copié | Signes particuliers | Preuve |
|---|---|---|---|---|
| a2bu6h-c5 (71078019242, thème t/2) | soyaparisoreillerergonomique.com (22/06/2026, Tucows via Shopify) | 19 produits le 27/05/2026 en 12 s, handles à suffixe aléatoire ; Soya 3.0 à 166,00 $ | lien de menu vers soyaparisergonomique.com/apps/17TRACK ; contact soyaparisergonomique@gmail.com ; **11 commentaires en portugais** dans 3 blocs `custom_liquid` (« A imagem volta para o topo no celular ») ; **10 fichiers chargés depuis soya-paris.com** ; aucun pixel publicitaire | `reseau/home_soyaparisoreillerergonomique.com.html` ; `soya_prix/old_*` |
| dagbdz-xc (75777507463, t/2) | soyapariscoussinergonomique.com (03/08/2026, Tucows via Shopify) | 19 produits le 05/08/2026 en 23 s ; 3.0 à 160,88 $ | **les mêmes 10 fichiers** ; 10 commentaires en portugais dans 5 blocs `custom_liquid` (« Deixa a quebra fluida no celular », « Cor exata do botão ») ; pixel d'application, aucun pixel publicitaire ; soyapariscoussinergonomique@gmail.com | `reseau/domaines/b_…`, `products_…`, `pol_…_contact-information.html` |
| 1a5h62-ai (84395491547, t/2) | soyaparisconfortclothing.com (11/08/2026, GoDaddy) | **19 produits le 24/08/2026 en 34 s, plus un 20e le 01/09/2026** (correction) ; 3.0 à 163,90 $ | meta description copiée mot pour mot de soya-paris.com ; contact **contact@soyaparisconfortclothing.com** (correction : pas un gmail) ; aucun fichier chargé depuis Soya ; aucun commentaire en portugais | `reseau/domaines/meta_…`, `products_…`, `pol_…` |
| (hors ligne) | soyaparisergonomique.com (26/05/2026, code 423), soya-paris-oreiller-ergonomique.com (27/05/2026, Namecheap, 423), soyaparisergonomicpillow.com (06/04/2026, 402, indexé « Soya Paris 2 ») | — | rotation de domaines | `reseau/domaines/h_*`, `reseau/rdap/` |

- **Origine des 10 fichiers** [constaté]. Huit ont été téléversés par Soya le 19/10/2025. Les deux autres (`Web_Banner_Summer_sale1.png`, `final.png`) l'ont été le 29/06/2026 : ils figuraient sur l'accueil de Soya le 03/08/2026 et avaient disparu le 07/09/2026 (`contre/w_20260803094546.html`, `w_20260907200626.html`). Les clones ont donc copié la page d'été de Soya, entre la fin juin et le début septembre 2026.
- **Correction du § 7.7 du dossier.** Le dossier disait « rien ne dit laquelle copie l'autre ». C'est désormais tranché : a2bu6h-c5 copie Soya. Son identifiant plus bas reflète une boutique ancienne réutilisée, pas l'antériorité de la marque.
- **Portugais** [constaté pour la langue ; déduit pour la variante]. Les commentaires se trouvent dans des blocs de code ajoutés à la main, pas dans le code du thème Shrine. « Celular » est la forme brésilienne. Les commentaires diffèrent d'une boutique à l'autre : le code a été réécrit, pas copié.

**Grappe B : France, EUR, Horizon 4.1.4, paiement hors de Shopify**

| Boutique | Domaine | Détails | Preuve |
|---|---|---|---|
| p1wru0-tg (96363217276), « Soya », Lieuvillers (Oise) | soyaparisfrance.com (01/09/2026, NameSilo, DNS Cloudflare ingrid/sterling) | 19 produits les 11 et 12/08/2026 ; **Soya 3.0 à 49,90 €** (barré 139,90 €) ; script `monstre:checkout` qui poste le panier vers `https://checkout.soyaparisfrance.com/` avec les identifiants de clic Google, Meta et TikTok ; widget question.soyaparisfrance.com (`data-s="soya-paris"`) ; CGV et politique de remboursement : contact@soya-parisfr.com | `reseau/domaines/b_soyaparisfrance.com.html`, `monstre_checkout_soyaparisfrance.js`, `products_soyaparisfrance.com.json`, `pol_…` |
| sx6cbu-0q (109255983429), « Ma boutique », Anzin (Nord) | soyaparisfr.store (01/09/2026, NameSilo, **mêmes DNS**) | 19 produits le 01/09/2026 en 72 s ; mêmes prix ; même script « FUNNELZ » vers checkout.soyaparisfr.store ; même `data-s="soya-paris"` ; contact@soyaparisfr.store | `reseau/domaines/b_soyaparisfr.store.html`, `products_…`, `pol_…` |
| — | soya-parisfr.com (enregistré le **11/08/2026, jour de l'import du catalogue** dans p1wru0-tg) et soyaparisfr.com (02/05/2026, boutique 402), NameSilo, DNS Cloudflare damien/karsyn | reliés par l'adresse e-mail des CGV | `reseau/rdap/` |

- **Vérification DNS** [constaté]. Les sous-domaines checkout.* et question.* pointent vers des adresses Cloudflare (104.21.x, 172.67.x) : le serveur réel est masqué (dns.google, 26/09/2026).
- **Précision** (contre-enquête). Une même paire de serveurs DNS Cloudflare est partagée par de nombreux comptes sans lien : c'est un indice moyen. Le lien fort entre ces deux boutiques repose sur le script identique, le même `data-s`, le même registrar et la même date d'enregistrement.
- **Risque** pour l'acheteur, qui paie hors de Shopify à un destinataire inconnu. **Indices convergents** d'une boutique d'usurpation : nom et vendeur « SOYA PARIS », domaines de quelques jours, nom par défaut « Ma boutique », paiement externe. La qualification relève d'une autorité.

**Pourquoi ces grappes ne sont probablement pas Soya** [déduit, confiance moyenne à élevée] :
- Aucun identifiant publicitaire commun, aucun shop commun, aucun e-mail commun.
- Registrar (correction) : soya-paris.com et quatre domaines de la grappe A sont tous chez Tucows via Shopify, avec des DNS Google. C'est le cas de tout domaine acheté dans Shopify : ce n'est pas un lien.
- Le code maison de Soya est commenté en français (« Barre de stock », « STORIES SOYA », `soya/pdp3.html`), celui de la grappe A en portugais.
- La grappe B vend moins cher que Soya : elle lui prendrait ses ventes.
- Les deux grappes n'ont aucun identifiant en commun entre elles.
- Le Wyoming est un **lien faible** : Sheridan et Casper sont deux villes différentes, et deux adresses courantes d'agents enregistrés.

### 15.10 Milaris, Juvilor et autres

| Site | Infrastructure | Rapport à Soya | Force du lien |
|---|---|---|---|
| juvilor.com (zfdzaj-px, 77492191483, Montréal, CAD, BlockyV4 ; domaine du 17/09/2025) | aucun pixel publicitaire, contact@juvilor.com | avatars 88/89/90 : **mêmes images que Soya, réduites** (827 px chez Soya, 150 px chez Juvilor ; après mise à la même taille, écart moyen inférieur à 1 sur 255, contre environ 62 entre deux avatars différents ; correction de « identiques au pixel près ») ; téléversés le 15/09/2025 ; textes adaptés (« l'oreiller OrthoDream », « Richard. S, Montréal, QC ») ; **leur propre code**, pas la section `ev-reviewv2` | copie (lien faible avec l'opérateur) |
| milaris.co (220fa5-3, 84130595157, Saint Denis ; domaine du 14/10/2024) | Meta 27085956897718444, TikTok CPOK66BC77U6HU3IROQG, Klaviyo T5AnJk, Omnisend, Pinterest 2613648511158, Judge.me | 4 textes repris et corrigés (« Merci Milaris ! ») ; code différent de `ev-reviewv2` | copie (faible) |
| soyaparis.com et soyaparis.fr | Atelier Soya, bijoux faits main (Chevreuse) ; IONOS, 22/04/2024 | homonyme | aucun |
| soyaparis.shop (en 02/2025) | shop 90497417599 « Ma boutique », protégé par mot de passe, avec heatsbox.store ; domaine réenregistré le 09/07/2026 (Enom) | inconnu | non attribué |
| oreillerpillow.com | publireportage « Oreiller » renvoyant vers `bestoffersfinder.com/checkout?aff_id=71241` (URL hexadécimale décodée dans `reseau/getpromo.html`) | mêmes chiffres (« 100 000 dormeurs », « 200 professionnels de santé ») | aucun (même écosystème) |
| eclatdefemme.fr et ecdf-france.com (0aa128-2, 78043447619, NL, Shrine PRO 1.4.3) | Klaviyo TdPmfr, Snap 2bcd268c…, GT-MB8GM67V | nom de produit repris par FREYJA en 2024 | aucun identifiant commun |

Domaines « soyaparis* » non attribués [indice, importance basse] :
- achetés via Shopify puis détachés : soyaparisshop.com (20/10/2025, soit J+1 après la migration du 19/10/2025), soyaparis.net (30/10/2025, J+11) et soyaparisoreiller.com (04/12/2025, **J+46** : correction, pas « dans les 15 jours ») ;
- soya-paris.fr, enregistré chez IONOS le 28/10/2025 (J+9), titulaire anonyme.

Rien ne permet de les attribuer à Soya ou aux clones (`reseau/rdap/`, `reseau/crt/soyaparis_25.json`).

### 15.11 Personnes et entités

- **Personnes physiques.** Aucune n'est reliée publiquement à soya-paris.com : ni LinkedIn, ni interview, ni offre d'emploi, ni formation trouvés [constaté par absence].
- **SOYA GROUP FRANCE** (SIREN 939636767). SAS créée le 22/01/2025 ; code NAF 47.91B ; convention collective IDCC 0675 ; siège au 18 bd Montmartre (Paris 9e) depuis le 18/09/2025 ; 3 établissements dont 1 ouvert ; pas de salarié déclaré ; président personne physique (`reseau/registre/soya_group.json`) [constaté].
  - Rien ne la relie à Soya : ni domaine, ni e-mail, ni adresse, ni identifiant. **Non retenue.** Le nom de son président n'est pas reproduit.
- **SOYA GROUP LLC** (Wyoming, 2022, inactive) : homonyme repéré sur OpenCorporates, sans lien établi [non vérifié].
- **Page Facebook « Soya Paris »** (identifiant 61565502837799) : vue seulement dans un résultat de recherche, pas ouverte [non vérifié].

### 15.12 Schéma du réseau

```
heylashes.fr ─(export de thème Prestige, faible)─> FREYJA / freyjaparis.fr
                                                     │ même shop 74445094946, domaines rattachés ensemble (fort)
                                                     ▼
 OPÉRATEUR SOYA ══ Meta 1581609639439558 · Klaviyo XuYmmR · Snap fd7f… · actions Google Ads AW-16655023754 (fort)
   parc de shops : 84122730826 · 74445094946 · 88419959133 · 68045897928 · 93550543180
   domaines : soya-paris.com · us./account. · soya-paris.us · soyaparis.store · mercure-paris.com
                                                     │ domaine rattaché à la boutique actuelle (fort)
                                                     ▼
                                   MERCURE PARIS (shop 63999410291, 03/2025, jamais ouvert)

   ▲ copie de contenu (faible)               ▲ copie / parasitage (faible)
 Juvilor (CA)   Milaris (FR)        Grappe A (WY, USD, pt-BR)       Grappe B (FR, checkout externe)
                                    a2bu6h-c5 ═ dagbdz-xc (fort)     p1wru0-tg ═ sx6cbu-0q (fort)
                                    1a5h62-ai ─ (moyen)
```

| Lien | Nature | Force | Preuve principale |
|---|---|---|---|
| Les 5 shops Soya entre eux | mêmes pixels, même Klaviyo, mêmes actions de conversion Google Ads, domaine servi successivement | **fort** | `wayback/*.hdr`, `w_*.html`, `contre/w_2026*.html` |
| Shop 68045897928 ↔ avatars | c'est la même boutique | **fort** | `wayback/pdp2_20250419.*` |
| Section `ev_review` ↔ un gabarit d'origine | déjà collée en 04/2025, gabarit 24247348527436 non identifié | inconnu | `wayback/pdp2_20250419.html` |
| FREYJA ↔ Soya | même boutique, domaines rattachés ensemble | **fort** | `wayback/freyja2_20240724.*`, `w_20240921201431.html`, `cdx2_9a3bc8-01…` |
| MERCURE PARIS ↔ Soya | domaine rattaché à la boutique actuelle de Soya | **fort** | `wayback/w_20251031190852.html`, `contre/mercure_pw_20250318.*` |
| heylashes ↔ FREYJA | nom du thème exporté | faible | `wayback/freyja2_20240724.html` |
| a2bu6h-c5 ↔ dagbdz-xc | mêmes 10 fichiers, portugais, thème, adresse, nom | **fort** | `domaines/`, `home_soyaparisoreillerergonomique.com.html` |
| 1a5h62-ai ↔ grappe A | thème, adresse, nom | moyen | `domaines/meta_…` |
| soyaparisfrance.com ↔ soyaparisfr.store | script, `data-s`, registrar, date, DNS | **fort** | `domaines/`, `rdap/` |
| soyaparisfrance.com ↔ soya-parisfr.com ↔ soyaparisfr.com | e-mail des CGV, date d'enregistrement, DNS | moyen à fort | `domaines/pol_…`, `rdap/` |
| Grappes A et B ↔ Soya | copie de catalogue et d'images | faible (pas le même opérateur) | `liens.json` |
| Juvilor, Milaris ↔ Soya | copie de témoignages | faible | `avatars/`, `milaris.html` |
| SOYA GROUP FRANCE, SOYA GROUP LLC ↔ Soya | homonymie partielle | aucun | `registre/soya_group.json`, `contre/opencorporates_webfetch.txt` |

### 15.13 Niveau de confiance global

- Continuité de l'opérateur Soya sur les 5 boutiques : **élevée**. Quatre identifiants de comptes distincts se recoupent sur 13 mois.
- FREYJA et MERCURE PARIS rattachés au même opérateur : **élevée**. heylashes : **faible**.
- Parc de boutiques anciennes : **moyenne**. Elle repose sur l'ordre des identifiants et le rang des thèmes.
- Clones des grappes A et B : ce sont des tiers, confiance **moyenne à élevée**. Les deux grappes relèvent d'opérateurs différents : **moyenne**.
- Milaris et Juvilor copient Soya : **élevée**.
- Questionnaire redaté et chiffres de clients gonflés : **élevée** pour le constat (textes archivés), **indice fort** pour la non-sincérité.
- Identité des personnes derrière Soya : **inconnue**.

### 15.14 Corrections à reporter dans le dossier

- **§ 2.2** (chronologie) :
  - 17/02/2025 : les avatars sont sur **l'ancienne boutique de Soya**, pas sur « une autre boutique » ;
  - « Juil. 2025, questionnaire » : le même questionnaire était daté de juillet 2024 jusqu'en avril 2025 au moins ;
  - « Boutique ouverte au plus tard le 02/04/2025 » : c'est la date de création de la boutique actuelle, qui n'a servi soya-paris.com qu'à partir d'octobre 2025.
- **§ 2.6, § 6.6, § 10.2 et § 11** : remplacer « avatars hébergés sur une autre boutique » par « avatars hébergés sur l'ancienne boutique de Soya (shop 68045897928) ; section collée depuis un gabarit non identifié ; textes en ligne sur la fiche 2.0 dès le 19/04/2025 ».
- **§ 7.7** : la boutique miroir a2bu6h-c5 copie Soya (fichiers chargés depuis le CDN de Soya, datés du 19/10/2025 et du 29/06/2026). Elle n'est pas antérieure à Soya.
- **§ 11, ligne 8** : ajouter le questionnaire redaté et l'évolution de 20 000 à 100 000 clients.
- **§ 12** : ajouter MERCURE PARIS et FREYJA à l'historique de l'opérateur.

### 15.15 Ce que ça change pour Somnila

1. **Récit de fondation.**
   - Soya ne peut pas raconter une origine vérifiable : sa boutique vendait un parfum aux phéromones deux mois avant ses oreillers, et le même opérateur a préparé au moins une autre marque « PARIS ».
   - Somnila gagne à dater et à montrer la sienne : personnes, société, SIREN.
2. **Avis et chiffres.**
   - Les « Acheteurs vérifiés » de Soya sont antérieurs au produit et circulent sur deux autres boutiques (Milaris, Juvilor). Son questionnaire a changé de date sans changer de résultats.
   - Somnila ne publie que des avis liés à une commande, datés et rattachés au bon produit.
   - Toute statistique Somnila indique sa méthode, sa date et son effectif, et reste archivée.
3. **Protection de la marque.** Une marque qui réussit sur ce segment est clonée en quelques semaines, avec des prix plus bas et des paiements détournés. Il faut :
   - déposer la marque à l'INPI ou à l'EUIPO ;
   - réserver les variantes de domaine (somnila.fr, .com, .shop, .store, variantes à tiret) ;
   - publier une page « nos sites officiels » ;
   - chercher chaque semaine le préfixe « somnila% » sur crt.sh.
4. **Stabilité.** Une seule boutique, un seul Merchant Center, des pixels propres. L'ancienneté accumulée vaut de la confiance, auprès des clientes comme des plateformes publicitaires.
5. **Veille.** La méthode de ce chapitre ne sollicite que des tiers et peut être rejouée chaque mois : en-têtes Wayback, listes de domaines des polices, étiquettes Google Ads, crt.sh. À surveiller en priorité : tout nouveau domaine dans la liste de la boutique 93550543180, et tout nouveau pixel.

### 15.16 Limites

- **Sources fermées dans cet environnement** : Meta Ad Library, Facebook, Instagram, signal-arnaques (403), PublicWWW (contrôle anti-robot), annuaire-entreprises (Incapsula), registre interactif du Wyoming, INPI, EUIPO. OpenCorporates n'a été lu qu'en résumé (curl renvoie 403).
- **Wayback reste partiel.** Aucune capture pour une dizaine de domaines « soyaparis* », ni pour le shop 5xfyfp-ti avant le 31/10/2025.
- **crt.sh** : les recherches sur les variantes à tiret sont incomplètes.
- **Listes de domaines** : les listes h1 à h5 semblent plafonnées à cinq domaines. D'autres domaines peuvent être rattachés sans y apparaître.
- **Horodatages techniques** : l'ordre des identifiants Shopify, les dates GemPages et les paramètres `v=` sont des indices, pas des actes datés.
- **Ce qu'une session locale pourrait ajouter.** Avec une IP française résidentielle et un vrai navigateur, elle pourrait ouvrir les sources fermées : bibliothèque publicitaire Meta, transparence de la page Facebook, registre du Wyoming, INPI. Elle ne ferait pas mieux sur les archives, les certificats ou les identifiants, déjà épuisés ici avec la même méthode.

### 15.17 Contre-vérification : verdicts

| Id | Constat de l'enquête | Verdict | Motif |
|---|---|---|---|
| R1 | Avatars et section `ev_review` sur l'ancienne boutique de Soya | **corrigé** | Avatars et textes confirmés. Mais la section était déjà collée depuis un autre gabarit en 04/2025 : l'origine du code reste inconnue. L'en-tête disait « 20 000 clients ». |
| R2 | Témoignages antérieurs au produit | **confirmé** | Premières traces du 3.0 : housse créée le 29/09/2025. Les textes sont antérieurs de cinq mois. |
| R3 | Cinq boutiques en treize mois | **corrigé** | Deux boutiques antérieures au domaine, qui ont coexisté ; 404 non spécifique à une fermeture. |
| R4 | Continuité par les identifiants | **corrigé** | AW absent le 01/03/2025 ; ancien pixel TikTok encore présent le 03/08/2026 ; balises MC = comptes [déduit] ; ajout des actions de conversion Google Ads identiques. |
| R5 | FREYJA et heylashes | **corrigé** | freyjaparis.fr jamais détaché, rattaché en même temps que soya-paris.com ; « troisième produit » surévalué ; Prestige 10.0.1 commun ; nom de produit repris d'ECDF. |
| R6 | Domaines de Soya | **corrigé** | Il manquait mercure-paris.com ; us.soya-paris.com n'est pas sur 68045… ; certificats soya-paris.us jusqu'au 04/03/2026 ; listes plafonnées à 5. |
| R7 | Identité juridique déclarée | **confirmé** | Textes du 15/08/2025 confirmés ; OpenCorporates Wyoming : 0 « SOYA PARIS ». |
| R8 | Grappe A | **corrigé** | 1a5h62-ai : 19 produits en 34 s plus 1 le 01/09, contact sur son domaine et non un gmail ; page d'été de Soya datée par Wayback. |
| R9 | Grappe B | **confirmé** | Script, CGV, DNS et catalogues vérifiés ; la paire DNS partagée n'est qu'un indice moyen. |
| R10 | Les clones ne sont pas Soya | **corrigé** | Registrar commun (Tucows via Shopify), mais sans valeur ; conclusion maintenue. |
| R11 | Juvilor et Milaris | **corrigé** | Mêmes images réduites, pas « au pixel près » ; code propre à chacun. |
| R12 | SOYA GROUP FRANCE | **confirmé** | Données du registre vérifiées. |
| R13 | Kit `ev_` | **confirmé** (non vérifié) | Précision : déjà collé dès 04/2025. |
| R14 | Domaines non attribués | **corrigé** | soyaparisoreiller.com enregistré à J+46, pas dans les 15 jours. |
| R15 | Homonymes et affiliation | **confirmé** | Lien d'affiliation `aff_id=71241` décodé. |
| Ajout 1 | MERCURE PARIS | nouveau | § 15.7 |
| Ajout 2 | Questionnaire redaté et chiffres de clients | nouveau | § 15.3 |
| Ajout 3 | Parc de boutiques anciennes | nouveau | § 15.4 |
| Ajout 4 | Actions de conversion Google Ads identiques et fenêtre du changement TikTok | nouveau | § 15.5 |
