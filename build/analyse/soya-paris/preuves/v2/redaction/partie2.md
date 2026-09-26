# Partie II — Renseignement approfondi (26/09/2026)

*Cinq enquêtes complémentaires ont été menées le 26/09/2026 pour aller plus loin que la Partie I : qui opère la boutique (§ 15), ce qu'elle diffuse en publicité (§ 16), combien elle vend et d'où vient son trafic (§ 17), d'où vient son produit et ce qu'il lui rapporte (§ 18), ce qu'en disent les acheteurs (§ 19). Chacune a été **contre-vérifiée le même jour** par un second passage qui a rouvert les preuves brutes, refait les calculs et signalé chaque correction dans le texte (« contre-vérification », « contre-enquête », « (corrigé) »). Le chapitre 20 reprend le laboratoire d'animation filmé image par image le même jour.*

| Chapitre | Mission | Constats relus | Confirmés | Corrigés | Non étayés |
|---|---|---|---|---|---|
| 15 | Réseau, opérateurs et infrastructure | 15 | 6 | 9 | 0 |
| 16 | Publicité, créations, influence et réseaux sociaux | 18 | 9 | 9 | 0 |
| 17 | Trafic, référencement et chiffre d'affaires estimé | 21 | 8 | 12 | 1 |
| 18 | Produit, fournisseur, coûts et marges | 16 | 8 | 7 | 1 |
| 19 | Voix du client | 15 | 4 | 10 | 1 |
| **Total** | | **85** | **35** | **47** | **3** |

**Comment lire la Partie II.**
- Les chapitres sont repris **en entier**, tels que contre-vérifiés (`build/analyse/soya-paris/v2/`). Seuls ont été modifiés : la numérotation (chapitres 16 à 19 et leurs sous-parties, renvois internes compris), les renvois entre chapitres (« chapitre « réseau » » devient « chapitre 15 », etc.) et deux renvois du chapitre 20. Les renvois « § 0 » à « § 14 » pointent vers la Partie I.
- Chaque chapitre rappelle en tête les alias de ses chemins de preuve (`reseau/`, `contre/`, `v2/`, `soya2/…`), tous relatifs à l'espace de travail de la session `/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/`. **Attention** : dans le chapitre 17, l'alias `v2/` désigne `soya2/ventes/`, pas le dossier `build/analyse/soya-paris/v2/` du dépôt.
- Quand deux chapitres de la Partie II divergent, une **« Note de la rédaction (v2) »** tranche en faveur de la preuve la plus directe (quatre notes : § 15.4, § 17.6, § 18.7, § 18.8).
- Sollicitation de la cible : les chapitres 15, 18 et 19 déclarent n'avoir envoyé aucune requête à soya-paris.com ; les chapitres 17 et 20 l'ont sollicité par des relevés espacés. Aucun contact, aucun compte, aucun formulaire, aucun achat.
- Les corrections que la Partie II impose à la Partie I sont listées en Annexe D.2.

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

> **Note de la rédaction (v2).** Le chapitre 17 (§ 17.2) date la bascule vers la boutique 93550543180 **au plus tard au 28/10/2025** (capture de la fiche 3.0 rendue à 06:36 UTC ce jour-là), et non au 31/10/2025 comme dans ce tableau ; la liste de domaines de cette boutique figure d'ailleurs déjà dans une URL de police archivée le 28/10/2025 (§ 15.7). Le dossier retient le 28/10/2025.

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

> **Note de la rédaction (v2).** Ces corrections ont été reportées dans la Partie I (§ 0, § 1, § 2.2, § 2.6, § 6.6, § 7.7, § 10.2, § 11 ligne 8, § 12), avec la mention « corrigé v2 ».

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

---

## 16. Publicité et réseaux sociaux : ce que SOYA diffuse, et comment (enquête complémentaire du 26/09/2026, contre-vérifiée)

*Collecte du 26/09/2026 entre 09:50 et 10:30 UTC ; contre-vérification le même jour entre 11:20 et 11:50 UTC. Preuves brutes : `soya2/pub/` (chemin complet `/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/soya2/pub/`, index dans `INDEX.txt`) et, pour la contre-vérification, `soya2/pub/contre/` (`reouvertures.txt`, `avis_15637.txt`, `wayback_extraits.txt`, `compteurs_valorisation.txt`). Les chemins `soya/` et `mkt/` renvoient aux preuves de la première enquête ; `soya2/ventes/` et `soya2/reseau/` aux missions « ventes » et « réseau » (chapitres 17 et 15). Ce chapitre prolonge le § 8 sans le répéter. Conventions inchangées : [constaté], [déduit], [indice] ou [risque], [non vérifié]. Aucune personne privée n'est nommée : les auteurs des commentaires visibles dans les vidéos restent anonymes.*

> **Ce que la contre-vérification a changé.**
> 1. Le compteur « 15 637 avis » est figé depuis **au moins le 19/04/2025** : il figure à l'identique dans les 46 captures Wayback des fiches, du 19/04/2025 au 07/09/2026. La vidéo de novembre 2025 prouve seulement qu'il sert aussi en publicité.
> 2. **Google ne se limite pas à une chaîne YouTube** : des URL de clic archivées montrent une campagne Google Ads **Search à mots-clés**, active au moins du 17/02 au 20/04/2026, qui mène vers la fiche 2.0. La piste YouTube « LUXERY SERVICE LTD » n'est plus qu'un **indice faible**.
> 3. **Estimation des ventes** : la fenêtre de nuit sous-estime le rythme réel. Les compteurs avancent par salves : +71 Soya 3.0 en 43 minutes, puis 0 pendant 43 minutes. Les moyennes sur plusieurs semaines (Wayback) placent le chiffre d'affaires entre 15 000 et 26 000 € TTC par jour hors pic, contre 11 000 à 19 000 € dans la première version.
> 4. **Faits ajoutés :** le calendrier promotionnel reconstitué (16 versions du thème), l'usage du mot « soldes » hors des périodes légales, et un « déstockage total » du 2.0 alors que ce modèle se vend toujours dix mois plus tard.
> 5. **Corrections mineures :**
>    - 17 vidéos Facebook et une publication, avec au moins 7 textes (et non 15 vidéos et 6 textes) ;
>    - visuels de galerie au format SVG, donc inutilisables tels quels dans les flux catalogue ;
>    - métadonnées Apple pour 3 vidéos sur 4 seulement ;
>    - prises murales de type E, qui ne suffisent pas à situer le tournage en France ou en Belgique.

### 16.1 Verdict

**[déduit]** SOYA achète son audience **sur Meta** (Facebook et Instagram) depuis au moins l'automne 2024, **et sur Google** : fiches Shopping gratuites dès août 2025, puis une campagne Search à mots-clés en 2026. Elle diffuse **peu de messages, déclinés en beaucoup de copies vidéo** : au moins 7 textes pour 17 vidéos retrouvées. En novembre 2025, elle a produit un **kit de quatre vidéos verticales tournées face caméra** (lancement du 3.0, comparatif 2.0 / 3.0, avis, FAQ). Ce kit sert sur la fiche produit et, selon toute probabilité, en publicité.

Le reste du dispositif :

- **TikTok** : une identité ouverte en août 2026, sans vidéo publique. Des internautes cherchaient déjà « avis oreiller soya paris » sur TikTok quatre mois avant la création du compte.
- **YouTube** : aucune chaîne au nom de Soya. Une chaîne « LUXERY SERVICE LTD » héberge un Short « Oreiller Soya 2 0 3 ». Rien ne la relie à l'exploitant, et elle peut aussi bien appartenir à l'un des sites copieurs.
- **Snapchat** : aucune annonce payée par un annonceur dont le nom contient « soya » dans l'UE depuis un an. Ce n'est pas une preuve d'absence (§ 16.2).
- **Aucun influenceur identifié** : la preuve sociale est produite en interne (deux présentateurs récurrents, captures de commentaires).

Le discours publicitaire est **plus médical que le site** : « Élu Meilleur Oreiller Orthopédique 2025 », « Soulagement immédiat des douleurs », « Conçu avec +200 praticiens de santé ».

Toute la communication vit d'une **urgence permanente** : 16 versions du thème en 17 mois, chacune avec son événement (« soldes », « Black November », « Saint-Valentin », « French Days », « Rentrée ») et presque toujours un « fin aujourd'hui à 00H » (§ 16.8 bis).

**Faits nouveaux par rapport au dossier :**

1. **Le compteur d'avis sert aussi en publicité.** Une vidéo exportée le 08/11/2025 filme la fiche 2.0 avec « Noté 4,8/5 – 15 637 avis clients ». Ce chiffre est identique dans toutes les captures Wayback depuis le 19/04/2025 [constaté : `contre/avis_15637.txt`] : **au moins 17 mois** sans changer.
2. **Un post à forte audience.** La vidéo « Avis clients » montre un post Facebook à **10 K réactions, 1,2 K commentaires et 1,5 K partages**.
3. **Une campagne Google Ads Search** : campagne 22489769215, annonce 748884517347, mot-clé kwd-390453911726, suivie par Triple Whale [constaté : CDX Wayback].
4. **Le mot « soldes » hors des périodes légales.** Les fiches affichent « SOLDES D'ÉTÉ » les 15, 26, 27 et 31/08/2025, puis les 03/08 et 24/08/2026, après la fin légale des soldes (22/07/2025 ; 28/07/2026 après prolongation) : **[risque]**.
5. **Le « 0 annonce » de la bibliothèque TikTok est un artefact** : l'appel à l'API a échoué, il ne prouve rien.

### 16.2 Bibliothèques et réseaux : ce qui s'ouvre, ce qui est bloqué

| Source | URL ou méthode | Résultat | Preuve |
|---|---|---|---|
| Meta Ad Library (mot-clé « soya paris », FR) | https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=FR&q=soya%20paris&search_type=keyword_unordered | **Bloqué.** Défi JS (`raw_2c80ea8d.html`), puis le POST `__rd_verify` renvoie 302 vers `/login` (26/09 09:52:19 UTC). Même résultat dans Playwright via le relais et avec WebFetch, y compris en filtrant sur `view_all_page_id=61565502837799`. | `raw_2c80ea8d.html`, `verify_hdr.txt`, `metalib.net.json` |
| Google Ads Transparency | https://adstransparency.google.com/?region=FR&domain=soya-paris.com | **Bloqué.** Captcha google.com/sorry, pour la page comme pour le RPC `SearchSuggestions` (302). | `raw_d86fc6e8.html`, `gat_sugg.json` |
| TikTok Commercial Content Library | https://library.tiktok.com/ads?region=FR&adv_name=soya | **Bloqué.** `POST /api/v1/search` (requête « soya », du 01/07/2024 au 26/09/2026) répond **421 « system busy »** ; les requêtes « soya paris » et « soya-paris.com » répondent « params error ». Le « Total des annonces : 0 » affiché vient de cet échec. | `ttlib3.net.json`, `tt_hdr.txt`, `tt_search_*.json` |
| Snap Ads Gallery (UE, 12 mois) | API publique `adsapi.snapchat.com/v1/ads_library/ads/search`, champ `paying_advertiser_name` | **Ouvert.** « SOYA PARIS » : 0 annonce. « soya » : 2 annonceurs sans rapport (« Afrikan Afrikan moussoya », « Soya.bijoux »). « LUXERY » : 10 annonceurs sans rapport (salon, lavage auto, pâtisserie…). « LUXERY SERVICE » : 429 « Too many requests ». **Limite :** l'API cherche le nom de l'annonceur qui paie, pas le nom du profil affiché. Un payeur au nom d'une société passerait inaperçu. | `snap_SOYA_PARIS.json`, `snap_all_soya.json`, `snap_all_LUXERY.json`, `snap_all_LUXERY_SERVICE.json`, `snapq.sh` |
| Pinterest (domaine, répertoire publicitaire) | `fr.pinterest.com/source/soya-paris.com/` ; `ads.pinterest.com/ads-repository/` | **Bloqué pour le domaine** : redirection vers la page d'accueil publique ; l'API ressource renvoie « Invalid Resource Request ». Le compte « soyaparis » appartient à Atelier Soya Paris, sans rapport. Le répertoire s'affiche mais n'a pas été interrogé. | `pin_src_r.txt`, `pin_domain.json`, `so_www.pinterest.fr_soyaparis_.html` |
| Facebook, page de la marque | https://www.facebook.com/61565502837799 | **Bloqué** : 302 vers `/login`. Les textes des vidéos se lisent par WebFetch (§ 16.4). | `fb_page.hdr`, `fb_videos_webfetch.md`, `contre/reouvertures.txt` |
| Instagram @soya.paris | API `web_profile_info`, profil, embeds | **Bloqué** : « Please wait a few minutes before you try again », `require_login: true` ; « soya.paris.officiel » : page introuvable. | `ig_soya.paris.json`, `ig_soya.paris.officiel.json`, `ig_embed_*.html` |
| TikTok @soya.paris | https://www.tiktok.com/@soya.paris | **Ouvert** (données JSON de la page). | `tt_profile_0926.json` |
| YouTube | recherche, oEmbed, flux RSS | **Ouvert** : la page de lecture renvoie un captcha, contourné par oEmbed et le flux RSS. | `yt_*.html`, `yt_rss_luxery.xml` |
| Wayback Machine (index CDX et captures brutes) | index CDX de soya-paris.com et des fiches ; captures `id_` | **Ouvert** : URL de clics publicitaires archivées, bandeaux et compteurs par date. | `soya2/reseau/wayback/cdx_soya-paris.com.txt`, `soya2/ventes/wayback/`, `contre/wayback_extraits.txt` |

### 16.3 Présence sur les réseaux et sur Google

| Canal | Identifiant | Création | Audience | Publications | Rôle déduit | Preuve |
|---|---|---|---|---|---|---|
| Facebook | page « Soya Paris », id 61565502837799 | au plus tard 2024 : textes « Élu … 2024 » [déduit] | 8 352 mentions J'aime, « 6 132 en parlent » [non vérifié, résumé de moteur] | **17 vidéos** retrouvées (13 ouvertes ou titrées avec un texte publicitaire, 1 « Reels » sans texte) et 1 publication | **canal publicitaire principal** | `fb_videos_webfetch.md`, `contre/reouvertures.txt` |
| Facebook (2e entité) | « Soya Paris », id 61582665196548 | inconnue ; identifiant plus élevé que celui de la page principale, donc créée après elle [déduit] | inconnue | inconnues | page de secours, copie ou site copieur [non vérifié] | titre de résultat WebSearch |
| Instagram | @soya.paris | publications du 02/01/2025 à 17:33:29 et 17:34:06 UTC, et du 16/07/2025 à 23:27:42 UTC [déduit du code court, calcul refait] | ≈ 25 000 abonnés, 27 publications [non vérifié] | « Transformez vos nuits avec l'oreiller orthopédique SOYA » [titres de résultats] | vitrine ; lien de bio `utm_source=ig&utm_medium=social&utm_content=link_in_bio` archivé le 22/12/2025 | `soya2/reseau/wayback/cdx_soya-paris.com.txt` (20251222000659) |
| TikTok | @soya.paris, id 7670608818355012630 | **05/08/2026** (createTime 18:04:21 UTC ; horodatage de l'ID 17:59:48 UTC ; pseudo modifié 253 s après la création) | 5 070 abonnés, 0 abonnement | **0 vidéo publique** ; j'aime : 2 691 (25/09 22:08) → 2 694 (22:53) → 2 699 (26/09 09:59) | **identité publicitaire probable** : les j'aime montent sans vidéo visible, ce qui est compatible avec des publications réservées aux annonces (ou des vidéos privées) [déduit]. `commerceUser: false`, `isADVirtual: false`. | `tt_profile_0926.json`, `soya/web/tt.html`, `mkt/tt2.html` |
| Google Ads Search | campagne 22489769215, annonce 748884517347, mot-clé kwd-390453911726 | active au plus tard le 17/02/2026 à 15:48 UTC, encore le 20/04/2026 à 15:07 UTC | inconnue | page d'atterrissage : fiche Oreiller Soya 2.0 ; balises de suivi Triple Whale (`tw_source=google`, `tw_adid`, `tw_campaign`, `tw_kwdid`) ; `gbraid` indique un clic depuis un iPhone ou un iPad [déduit] | **campagne sur mots-clés** : le préfixe `kwd-` désigne un mot-clé, pas une campagne Shopping ou Performance Max [déduit] | `contre/wayback_extraits.txt` (CDX 20260217154832, 20260420150703, 20260420150725) |
| Google Shopping gratuit | flux Merchant Center via l'application Google & YouTube de Shopify | 15/08/2025 et 26/12/2025 (`utm_source=google&utm_medium=product_sync&utm_content=sag_organic`, `srsltid`) | — | fiche 2.0 | fiches produit gratuites | idem (CDX 20250815154645, 20250826075048, 20251226185358) |
| YouTube | aucune chaîne Soya (@soyaparis, @soya.paris, @SoyaParis en 404) ; chaîne « LUXERY SERVICE LTD » (UC86268FR0iH5YN-Fwr_oLMw) | chaîne créée le 06/09/2025 à 02:14:28 UTC | 1 425 vues et 4 évaluations sur sa seule vidéo | 1 Short de 17 s, « Oreiller Soya 2 0 3 », publié à 02:17:06 UTC, sans description | **[indice faible]** de support publicitaire ; exploitant inconnu | `yt_rss_luxery.xml`, oEmbed |
| Snapchat | aucun profil (@soya.paris, @soyaparis en 404) | — | — | — | pixel installé, aucune annonce trouvée sous un annonceur nommé « soya » | `so_www.snapchat.com_*.html`, `snap_*.json` |
| Pinterest | aucun compte identifié | — | — | — | balise installée (2613625264959), usage inconnu | § 0 du dossier |

**Sur la chaîne YouTube [indice faible].**

Ce qui est constaté :

- La chaîne n'a qu'un Short, sans description, publié 2 min 38 s après sa création.
- Son titre ressemble à un nom de fichier (« Oreiller Soya 2.0 (3).mp4 » sans la ponctuation).
- La société britannique LUXERY SERVICE LTD (n° 16489223) existe [constaté : `ch_16489223.html`] :
  - constituée le 02/06/2025, siège à Londres W10 ;
  - activités SIC 96040 (« Physical well-being activities ») et 96090 (« Other service activities n.e.c. ») ;
  - statut « Active proposal to strike off », déclaration de confirmation en retard.

Deux lectures possibles :

1. **Une chaîne créée pour la publicité** [déduit]. Google Ads peut créer une chaîne au moment où un annonceur téléverse une vidéo. La chaîne porte alors le nom du compte annonceur.
2. **Un site copieur** [déduit]. La mission « réseau » (chapitre 15) a identifié au moins cinq boutiques copies qui utilisent le nom « Soya Paris » sans aucun identifiant commun avec l'exploitant (`soya2/reseau/liens.json`, liens CLONE_A et CLONE_B). L'une d'elles a pu téléverser une vidéo récupérée.

Trois faits affaiblissent le lien avec SOYA :

- la société a été constituée **9 mois après le domaine** soya-paris.com (05/09/2024) et après les premières boutiques Shopify de l'exploitant : elle ne peut pas être l'exploitant d'origine ;
- ses codes d'activité ne relèvent pas du commerce en ligne ;
- 1 425 vues en un an, c'est peu pour une vidéo de campagne.

**Rien ne prouve que cette société exploite soya-paris.com ni qu'elle diffuse pour SOYA.** Un seul relevé tranchera : l'annonceur vérifié affiché par Google Ads Transparency pour le domaine soya-paris.com (§ 16.13).

### 16.4 Les annonces Meta retrouvées : 17 vidéos, au moins 7 textes, 3 titres [constaté par WebFetch ; statut publicitaire déduit]

L'URL de chaque vidéo contient son titre. Ce titre est « Livraison gratuite », « Livraison gratuite – Déjà 100 000 clients satisfaits » ou « +100 000 dormeurs satisfaits » : il a la forme d'un **titre d'annonce**. Le même texte revient à l'identique sous plusieurs identifiants. Le texte de lancement du 3.0 à lui seul apparaît sur **8 ID** (4 ouverts, 4 vus en titre de résultat). C'est la signature de copies publicitaires (une par ensemble de publicités ou par variante), pas de publications organiques [déduit]. Trois URL ont été rouvertes le 26/09 vers 11:35 UTC, textes conformes (`contre/reouvertures.txt`).

| Variante | Produit | Accroche (texte principal) | Promesse | Offre / appel | ID vidéo | Statut |
|---|---|---|---|---|---|---|
| A | 2.0 | « Élu Meilleur Oreiller Orthopédique 2024, l'Oreiller SOYA 2.0 soulage efficacement vos douleurs cervicales et améliore votre posture dès la première nuit. ✨ » | 4 coches : « Alignement cervical parfait », « Réveil sans douleurs », « Sommeil profond et réparateur », « Mousse à mémoire de forme hypoallergénique » | « Profitez de -30 % sur le 2ème » ; titre « Livraison gratuite » ou « +100 000 dormeurs satisfaits » | 672030032315793 (rouvert), 3015555038626220 (rouvert), 630204226522716 (titre seul) | constaté |
| B | 2.0 | même texte, « Élu … **2025** » | idem | « -30 % sur le 2ème » | 725548557183570 | constaté |
| C | 2.0 | même texte, « Élu … 2025 » | idem | « Profitez de **-50%** » | 854361433679167, 1382551946054289 | constaté |
| D | 2.0 | « Découvrez l'oreiller orthopédique n°1 de 2024 ! » | « offrez à votre sommeil le confort qu'il mérite » | « 30% de réduction sur le deuxième oreiller » | 1127430468844751, 1170164804611160 (titre seul) | constaté |
| E | 3.0 | « 🏆 Élu Meilleur Oreiller Orthopédique 2025 🚀 Le SOYA 3.0 est enfin là ! Après des mois de développement, des dizaines de prototypes… » | 5 coches : « Soulagement immédiat des douleurs cervicales, dorsales et épaules », « Double hauteur intégrée », « Mousse intelligente 3.0 », « Housse en fibre de bambou », « Conçu avec +200 praticiens de santé » ; « un réveil sans douleurs » | titre « Livraison gratuite – Déjà 100 000 clients satisfaits » | 1424788815815978, 2186223432183471, 942531044896326 (titre seul) | constaté |
| F | 3.0 | « 🚀 Le SOYA 3.0 est enfin là ! … » | mêmes 5 coches | « ⚡ OFFRE DE LANCEMENT EXCEPTIONNELLE ⚡ Uniquement pendant quelques jours ou jusqu'à épuisement des stocks. Commandez dès maintenant… » | 1223428729960782 (rouvert), 4678649919030921 ; titres seuls : 1091775433016928, 4195067947410046, 1766409657383022 | constaté |
| G | 2.0 | titre de la publication 122111526512516761 : « Élu meilleur oreiller orthopédique de 2024 – obtenez le 2ème à -30 % pour un sommeil… » | — | « le 2ème à -30 % » | publication, pas une vidéo | titre seul [non vérifié] |

La vidéo 1529456688443832 ne restitue que « Soya Paris on Reels ».

**Lecture.**

- Les ressorts sont connus : le prix inventé (« Élu … », sans organisateur ; signalé en § 2.6, désormais constaté dans les textes), le soulagement, la nouveauté, la popularité et une offre sur le deuxième oreiller.
- Le passage de « 2024 » à « 2025 » dans un texte par ailleurs identique montre un **prix réécrit d'une année sur l'autre** [déduit].
- **Urgence de l'offre de lancement : correction de la contre-vérification.** La fiche 3.0 affichait « OFFRE DE LANCEMENT I FIN AUJOURD'HUI à 00H » le 28/10/2025 (`contre/wayback_extraits.txt`). Le lancement date donc de fin octobre 2025. Sans les dates de diffusion de l'annonce F (bibliothèque Meta fermée), on ne peut pas dire qu'elle a promis « quelques jours » pendant des mois. Ce qui est établi, c'est l'urgence perpétuelle **sur le site** (§ 1, point 3, et § 16.8 bis).
- Le vocabulaire « soulage vos douleurs », « réveil sans douleurs » et « +200 praticiens de santé » expose à un **[risque]** d'allégation de guérison (L121-4 16°). Il expose aussi aux règles de Meta sur la santé et sur les attributs personnels (« vos douleurs cervicales »).

### 16.5 Le kit vidéo de novembre 2025 : les quatre « stories » de la fiche 3.0 [constaté]

Les quatre bulles « Concept », « Lequel choisir ? », « Avis clients » et « FAQ » du bloc d'achat (`soya/pdp3.html`, bloc `liquid_GDmj3c`, commentaire « STORIES SOYA (teaser 10s, 2e produit) ») pointent vers des originaux hébergés dans les fichiers Shopify. Ces fichiers ont été téléchargés depuis cdn.shopify.com (et non depuis soya-paris.com), découpés en images et transcrits automatiquement.

| Vidéo | Durée | Création (métadonnées) | Décor et casting | Script (extraits de la transcription) | Promesse | Preuve |
|---|---|---|---|---|---|---|
| Concept | 45,2 s | 08/11/2025 22:01:43 UTC | un homme seul, assis sur un lit, avec le 3.0 bleu marine et le 2.0 blanc ; insert d'un téléphone sur soya-paris.com (URL lisible) ; mousse montrée sans housse | « Le Soya 3.0, c'est l'évolution naturelle de notre oreiller emblématique. Après plus de 100 000 dormeurs conquis par le Soya 2.0… on a analysé vos retours, échangé avec des praticiens du sommeil » | durabilité, deux hauteurs, « plus saine » | `vid/sheet_concept.jpg`, `vid/concept.transcript.txt` |
| Lequel choisir ? | 49,1 s | 08/11/2025 22:02:22 UTC | le même homme, debout sous une pente de toit, les oreillers et les housses en main | « C'est la valeur sûre parfaite si vous cherchez à soulager vos douleurs cervicales… Trois nouvelles housses premium, blanc, beige, bleu marine » | comparatif pour monter en gamme | `vid/sheet_lequel.jpg`, `vid/lequel.transcript.txt` |
| Avis clients | 36,5 s | 08/11/2025 22:05:51 UTC | un homme et une femme sur un canapé, l'oreiller sur les genoux ; captures de commentaires Facebook incrustées | « Il y a ceux qui souffraient de douleurs cervicales depuis des mois… des nuits sans douleurs… une différence que vous ressentez dès la première nuit » | soulagement et habitude | `vid/sheet_avis.jpg`, `vid/hr_avis_comments.jpg` |
| FAQ | 110,7 s | 08/11/2025 22:05:16 UTC | les deux présentateurs en alternance, assis sur une chaise ; sticker « Posez-nous des questions 💙 » en style Instagram | 10 questions : fermeté, positions, « comment choisir la bonne hauteur », « Est-ce qu'il aide vraiment pour les douleurs cervicales ? », adaptation (« 3 à 7 jours »), nouveautés, housse lavable « à 30 degrés », « Est-ce qu'il aide contre les ronflements ? » (« peut réduire les ronflements liés à une mauvaise posture »), contenu du colis, livraison (« traitement un jour… entre 3 et 6 jours ouvrés ») | lever les objections | `vid/sheet_faq.jpg`, `vid/faq.transcript.txt` |

**Caractéristiques communes :**

- Vidéo verticale 1080 × 1920 en HEVC, à 30 images par seconde [constaté].
- Trois fichiers portent la signature du moteur Apple (`handler_name: Core Media Video`). La FAQ a été réécrite par FFmpeg (`encoder: Lavf61.1.100`, `VideoHandler`) [constaté : lecture des en-têtes MP4 avec PyAV]. Export à 23:01-23:05, heure de Paris, un samedi.
- Sous-titres incrustés mot à mot, le mot prononcé surligné dans un cartouche marine (style « karaoké » des outils de montage mobiles) [constaté ; outil exact non identifié].
- Micros-cravates visibles sur les présentateurs : tournage soigné, pas une vidéo d'amateur [constaté : `vid/sheet_faq.jpg`].
- Produit manipulé en permanence : mousse pressée, housse retirée, oreiller retourné [constaté].
- Prises murales de type E visibles [constaté : `vid/hr_avis_comments.jpg`]. Ce type de prise existe en France et en Belgique, mais aussi au Maroc, en Tunisie, en Pologne et en Tchéquie. Avec un français courant : **tournage en France, en Belgique ou au Maghreb [indice]**.

Le format se prête tel quel aux Reels, aux Stories et à TikTok. L'étiquette du code (« teaser 10s ») et la durée font penser à des créations publicitaires recyclées sur la fiche **[déduit]**.

**Trois preuves tirées des images :**

1. **Le compteur « 15 637 » sert aussi en publicité, et il est figé depuis au moins avril 2025.**
   - Entre 5,5 et 7,5 s, la vidéo Concept montre un téléphone sur soya-paris.com qui fait défiler la fiche 2.0 [constaté : `vid/hc_tile.jpg`]. On y lit :
     - « Noté 4,8/5 – 15 637 avis clients » ;
     - « Soutien cervical ergonomique validé par ostéopathes » ;
     - « Réduction des douleurs au cou, au dos et aux épaules » ;
     - « Amélioration prouvée de la posture et du sommeil » ;
     - « 🖤 BLACK NOVEMBER | FIN DU DÉSTOCKAGE À 00H 🖤 ».
   - Le même « 15 637 » figure sur les **46 captures Wayback** des fiches 2.0, 3.0, housses et lombaire, du **19/04/2025** au 07/09/2026, puis sur le site le 25/09/2026 [constaté : `contre/avis_15637.txt`].
   - Il a donc traversé au moins 17 mois, plusieurs boutiques successives (voir le chapitre 15) et la recréation du catalogue du 19/10/2025 sans bouger d'une unité : **indice fort** d'un texte écrit à la main et jamais mis à jour.
2. **Les commentaires d'annonces servent de témoignages.**
   - Les captures montrent des commentaires Facebook avec le nom de leur auteur [constaté : `vid/hr_avis_comments.jpg`]. Ils citent :
     - une arthrose cervicale avec névralgie d'Arnold ;
     - une discopathie C4-C5 et L4-L5-S1 ;
     - des « cervicales affaiblies par des métastases » ;
     - une ablation de la thyroïde.
   - La page y répond : « Soya Paris a répondu · 15 réponses » signifie que la page est le dernier auteur d'un fil de 15 réponses, pas qu'elle a écrit 15 réponses.
   - Les commentaires ont 4 à 14 semaines au moment de la capture, et la capture est antérieure au 08/11/2025 : le post était en ligne **au plus tard début août 2025** [déduit].
   - **[Risque]** double : allégation de santé par procuration, et diffusion commerciale de données de santé de tiers, nommés, sans consentement vérifiable (RGPD, art. 9).
3. **Un post à très forte audience.**
   - Une capture montre « 10 K » réactions, « 1,2 K » commentaires et « 1,5 K » partages sur un même post [constaté : `vid/hr_avis_comments.jpg`, image à 18,5 s].
   - Pour une page d'environ 8 000 mentions J'aime [non vérifié], un tel volume s'explique très probablement par de la diffusion payante [déduit].

Les engagements pris dans la FAQ (« livraison toujours gratuite », « traitement un jour », « entre 3 et 6 jours ouvrés ») reprennent mot pour mot la politique de livraison du site (`soya/pol/shipping-policy.txt`). Des avis Trustpilot évoquent des livraisons en 13 jours (§ 8.7) : **[risque]** de promesse non tenue.

### 16.6 Les visuels carrés : l'argumentaire statique [constaté pour le contenu ; usage publicitaire non vérifié]

La galerie compte 39 fichiers, avec des doublons (`soya/gallery/sheet-1.jpg` à `sheet-3.jpg`). Le style est homogène : fond bleu nuit dégradé ou studio blanc, titre en capitales sur deux niveaux, mannequins en couple, pictos. Chaque visuel porte un angle :

- « UNE INNOVATION : 2 HAUTEURS 1 SEUL OREILLER » : personnalisation ;
- « L'OREILLER ERGONOMIQUE N°1 : RECOMMANDÉ PAR LES OSTÉOPATHES » : autorité ;
- « SOULAGEZ VOS DOULEURS ET RETROUVEZ UN SOMMEIL RÉPARATEUR », avec les pictos « soulage le cou et le dos », « réduit l'apnée du sommeil », « réduit le reflux gastrique » et « soulage les épaules » : santé ;
- « UN ALIGNEMENT NATUREL POUR VOTRE COLONNE VERTÉBRALE », avec le comparatif « OREILLER CLASSIQUE ✕ / OREILLER SOYA 2.0 ✓ » (sur la fiche du 3.0) : démonstration par schéma ;
- « SENSATION DE FRAÎCHEUR ET BIEN-ÊTRE CHAQUE NUIT » et « CONÇU POUR DURER, NETTOYAGE & ENTRETIEN SIMPLIFIÉS » : entretien ;
- « LE CONFORT RÉINVENTÉ POUR VOUS » : émotion (femme serrant l'oreiller).

**Correction de la contre-vérification.** Ces visuels sont des **SVG de 529 × 529 px** qui enveloppent des PNG : 33 des 48 images du 3.0 [constaté : `soya/products.json`]. Merchant Center et les catalogues Meta ne prennent pas de SVG. Seules les images principales peuvent alimenter les annonces catalogue et Shopping : un PNG de 1 654 × 1 654 px pour le 3.0, des WebP de 1 200 × 1 200 px pour le 2.0 [déduit]. Des versions PNG de ces visuels peuvent exister dans le gestionnaire de publicités [non vérifié]. Sur les 182 images du catalogue, seules 11 font 1 654 px, et la taille la plus fréquente est 1 200 px.

### 16.7 Onze créations, constatées ou déduites

| N° | Format | Accroche | Promesse | Appel / offre | Statut |
|---|---|---|---|---|---|
| 1 | Vidéo, fil Facebook ou Instagram | « Élu Meilleur Oreiller Orthopédique 2024/2025, l'Oreiller SOYA 2.0 soulage efficacement vos douleurs cervicales » | alignement, réveil sans douleurs | « -30 % sur le 2ème » ou « -50% » ; titre « Livraison gratuite » | **constaté** (texte ; image non vue) |
| 2 | Vidéo de lancement 3.0 | « 🏆 Élu Meilleur Oreiller Orthopédique 2025 🚀 Le SOYA 3.0 est enfin là ! » | soulagement immédiat, deux hauteurs, +200 praticiens | titre « Livraison gratuite – Déjà 100 000 clients satisfaits » | **constaté** (texte) |
| 3 | Vidéo d'urgence 3.0 | « Le SOYA 3.0 est enfin là ! » | idem | « OFFRE DE LANCEMENT EXCEPTIONNELLE… quelques jours ou jusqu'à épuisement des stocks » | **constaté** (texte) |
| 4 | Vidéo promo 2.0 | « Découvrez l'oreiller orthopédique n°1 de 2024 ! » | confort | « 30% de réduction sur le deuxième oreiller » | **constaté** (texte) |
| 5 | Vidéo 9:16 face caméra, 45 s (« Concept ») | « Le Soya 3.0, c'est l'évolution naturelle de notre oreiller emblématique » | durabilité, deux hauteurs | capture du site avec la note et le bandeau Black November | **constaté** (vidéo) ; usage publicitaire **déduit** |
| 6 | Vidéo 9:16 comparatif, 49 s | « Lequel choisir ? SOYA 2.0 ou SOYA 3.0 ? » | montée en gamme | (reciblage probable) | **constaté** ; usage **déduit** |
| 7 | Vidéo 9:16 « avis », 36 s | « Ce qu'on aime le plus chez Soya, c'est de lire vos retours » | nuits sans douleurs, dès la première nuit | commentaires Facebook incrustés | **constaté** ; usage **déduit** |
| 8 | Vidéo 9:16 FAQ, 111 s | sticker « Posez-nous des questions 💙 » | lever les objections (hauteur, housse, livraison) | aucun appel explicite | **constaté** ; usage **déduit** |
| 9 | Annonce Google Search (texte) | inconnue | inconnue | clic vers la fiche 2.0 | **constaté** (existence, via URL de clic archivées) ; texte non vu |
| 10 | Images catalogue et Shopping | image principale du produit | prix du flux | prix du catalogue | **déduit** (fiches gratuites constatées ; annonces payantes non vues) |
| 11 | Short de 17 s sur YouTube | « Oreiller Soya 2 0 3 » (titre de fichier) | inconnue | inconnue | **indice faible** (chaîne LUXERY SERVICE LTD, exploitant inconnu) |

### 16.8 Mécanique reconstituée [déduit]

| Étape | Ce que Soya fait | Preuve |
|---|---|---|
| Message | au moins 7 textes, réécrits d'une année sur l'autre (2024 → 2025) et d'un produit à l'autre (2.0 → 3.0) | § 16.4 |
| Déclinaison | chaque texte copié sur plusieurs vidéos (jusqu'à 8 ID), donc plusieurs ensembles de publicités | § 16.4 |
| Offre | deuxième oreiller à -30 % (achat en couple), puis -50 %, puis « lancement » | § 16.4 |
| Titre | la livraison gratuite et la popularité (« 100 000 ») plutôt que le produit | titres de vidéos |
| Création | vidéos 9:16 tournées face caméra, sous-titrées, avec manipulation du produit | § 16.5 |
| Recherche | campagne Google Search à mots-clés vers le 2.0, suivie par Triple Whale ; fiches Shopping gratuites | § 16.3 |
| Preuve sociale | commentaires d'annonces réinjectés dans de nouvelles vidéos ; note fixe sur le site, filmée dans les vidéos | § 16.5 |
| Animation des commentaires | réponses de la page sous les commentaires (« Soya Paris a répondu ») | `vid/hr_avis_comments.jpg` |
| Calendrier | un événement promotionnel par version du thème, presque toujours avec « fin aujourd'hui à 00H » | § 16.8 bis |
| Nouveaux canaux | identité TikTok en août 2026 ; chaîne YouTube liée seulement par le titre d'une vidéo | § 16.3 |

### 16.8 bis Le calendrier promotionnel reconstitué (Wayback) [constaté, sauf mention]

Source : 25 captures brutes des fiches 2.0 et 3.0 et une de la housse 2.0 (`soya2/ventes/wayback/`), qui donnent le nom du thème publié et le titre du bloc d'offres Kaching. Extraction : `contre/wayback_extraits.txt`.

| Date de capture | Monnaie | Thème publié | Titre du bloc d'offres (ou bandeau visible) |
|---|---|---|---|
| 19/04/2025 | EUR | « SOYA BACK TO BACK » | « OFFRE EXCLUSIVE » |
| 20/05/2025 | EUR | « SOYA V2 – Version Transformation & Preuve Sociale » | « OFFRE EXCLUSIVE » |
| 15, 26, 27 et 31/08/2025 | EUR | « SOYA V3 – Version Transformation & Preu[ve Sociale] » | « **SOLDES D'ÉTÉ \| FIN AUJOURD'HUI À 00H** » (même texte sur 16 jours) |
| 28/10/2025 | EUR | « SOYA V4 – Version 3.0 Transformation & Preu[ve Sociale] » | 2.0 : « **DESTOCKAGE TOTAL \| FIN AUJOURD'HUI À 00H** » ; 3.0 : « OFFRE DE LANCEMENT I FIN AUJOURD'HUI à 00H » |
| 04/11/2025 | EUR | « SOYA V5 – Version 3.0 Black November » | minuteur « BLACK NOVEMBER 🖤 » |
| 26 et 28/12/2025 | EUR | « SOYA V8 – Version 3.0 Noël » | « 🎁 OFFRE SPÉCIALE DE NOËL 🎁 » |
| 08/01/2026 (EUR) ; 27/01 et 08/02/2026 (USD) | EUR, USD | « SOYA V10 – Version 3.0 Soldes d'hiver » | « ❄️ SOLDES D'HIVER – FIN À MINUIT ❄️ » ; visible : « SOLDES D'HIVER -50% » |
| 14 au 19/02/2026 | EUR, USD | « SOYA V11 – Version 3.0 Saint-Valentin » | « OFFRE SAINT-VALENTIN \| FIN À MINUIT » |
| 24/02 et **23/03/2026** | USD, EUR | « SOYA V11 – Version 3.0 Offre exclusive 20 février » | « OFFRE EXCLUSIVE \| FIN À MINUIT » (une offre datée du 20 février, encore affichée un mois plus tard) |
| 20/04/2026 | EUR | « SOYA V11 – Version 3.0 french days » | « FRENCH DAYS \| JUSQU'À -60% » |
| 30/06, **03/08** et **24/08/2026** | EUR | « V14 – Version 3.0 Soldes d'été » | « SOLDES D'ÉTÉ \| JUSQU'À -60% » ; visible : « SOLDES D'ÉTÉ JUSQU'À -60% » |
| 07/09/2026 | EUR | « V15 – Version 3.0 Promo Rentrée » | « OFFRE DE RENTRÉE \| JUSQU'À -60% » ; un bloc « SOLDES D'ÉTÉ JUSQU'À -60% » encore visible |
| 25/09/2026 | EUR | « V16 – Version 3.0 French Days » | « FRENCH DAYS \| JUSQU'À -60% » (§ 6.5) |

**Lecture.**

- **Une version du thème par événement.** Seize versions en dix-sept mois ; le thème « Black November » porte déjà la mention « Version 3.0 » le 04/11/2025. La remise ne change pas, seul l'habillage change [déduit].
- **« Soldes » hors des périodes légales.** Le mot figure sur des pages en euros après la fin légale des soldes d'été : les 15, 26, 27 et 31/08/2025 (fin le 22/07/2025, Corse le 05/08) et les 03/08 et 24/08/2026 (fin le 28/07/2026 après prolongation ; Corse le 04/08). Dates des soldes 2026 : https://www.inc-conso.fr/content/soldes-dete-ca-commencera-le-mercredi-24-juin-2026-8-heures-y-compris-sur-internet ; dates 2025 d'après les résultats de recherche [non vérifié]. **[Risque]** au regard de l'article L310-3 du Code de commerce, qui réserve le mot « soldes » aux périodes légales. La qualification relève de la DGCCRF.
- **« Déstockage total » d'un produit qui continue de se vendre.** Le 2.0 est annoncé en « DESTOCKAGE TOTAL | FIN AUJOURD'HUI À 00H » (28/10/2025), puis en « FIN DU DÉSTOCKAGE À 00H » (vidéo exportée le 08/11/2025). Or il se vend encore au rythme de 130 à 250 unités par jour entre décembre 2025 et septembre 2026 selon les compteurs (`soya2/ventes/rythmes_wayback.tsv`). **[Risque]** de pratique commerciale trompeuse sur l'existence d'une fin de série (L121-2).

### 16.9 Volume publicitaire : ce qu'on peut estimer, avec méthode

**Nombre d'annonces actives : non mesuré.** La bibliothèque Meta est restée fermée. Planchers constatés :

- 17 vidéos Facebook distinctes et au moins 7 textes ;
- 4 vidéos verticales ;
- 1 campagne Google Search ;
- 39 fichiers de galerie, dont au moins 12 visuels distincts sur la première planche (les autres n'ont pas été dédoublonnés).

**Ancienneté [déduit] :**

- textes « Élu … 2024 » : des annonces en diffusion au plus tard fin 2024 (domaine créé le 05/09/2024) ;
- publications Instagram dès le 02/01/2025 ;
- « OFFRE EXCLUSIVE » sur la fiche dès le 19/04/2025 ;
- post à forte audience en ligne au plus tard début août 2025 ;
- fiches Shopping gratuites dès le 15/08/2025 ;
- lancement du 3.0 fin octobre 2025 ;
- campagne Search active du 17/02 au 20/04/2026 au moins ;
- identité TikTok créée le 05/08/2026.

**Pays [déduit] :** tous les textes sont en français, le Merchant Center cible la France et Snap ne montre rien dans l'UE. La France est la cible principale. La Belgique et la Suisse restent possibles (euro, franc suisse, avis Trustpilot sur fr-be) [non vérifié]. La version anglaise partielle (us.soya-paris.com, « Over 200,000 users ») laisse penser à des essais dans des pays anglophones [indice faible].

**Ventes et budget publicitaire [déduit, fourchettes larges ; le chapitre 17 fait référence].**

| Étape | Donnée ou hypothèse | Résultat |
|---|---|---|
| Unités parties du 25/09 22:12 au 26/09 09:48 UTC (11,6 h, nuit française) | compteurs `inventoryQuantity`. Attribution vérifiée : la fiche 3.0 contient aussi les 4 variantes de housse 3.0, et la fiche 2.0 la housse 2.0 (produit `housse-d-oreiller-de-rechange-soya-1`). Écarts : 3.0 −9 719 → −9 794 (**+75** : Blanc +40, Bleu +7, Gris +11, Beige +17) ; 2.0 −51 191 → −51 226 (**+35**) ; housses 3.0 **+59** ; housse 2.0 **+24** ; lombaire **+15** ; divers +6 (housses soie +4, coussin de siège +1, oreiller de voyage +1) | 110 oreillers, 83 housses, 15 coussins lombaires, 6 divers |
| Valeur de la fenêtre, prix par produit | 3.0 de 34,98 € (pack Famille) à 69,90 € (1x) ; 2.0 de 32,48 € à 59,90 € (et non 70 €) ; housse 3.0 de 14,32 à 17,90 € ; housse 2.0 de 0 € (offerte dans les packs 2.0) à 11,90 € (et non 14,90 €) ; lombaire de 19,90 à 49,90 € ; divers au prix catalogue (§ 6.5, § 7.1, § 7.5) | **≈ 5 100 à 9 600 € TTC** (`contre/compteurs_valorisation.txt`) |
| Extrapolation naïve à 24 h | ×24/11,6 | 10 500 à 19 900 € par jour : **non représentatif** (voir les deux lignes suivantes) |
| Les compteurs avancent par salves | de 09:48 à 10:31 UTC (43 min) : 3.0 **+71**, housses 3.0 +51, 2.0 +35, housse 2.0 +32, soit autant que toute la nuit ; puis **0** sur les deux fiches de 10:31 à 11:14 (`soya2/ventes/samples.jsonl`, `fenetres_26-09.txt`) | des commandes traitées par lots, ou une page mise en cache : aucune fenêtre de quelques heures n'est fiable [déduit] |
| Moyennes sur plusieurs semaines (captures Wayback) | 3.0 : 73 par jour (20/04-30/06/2026), 121 (30/06-03/08), 164 (03-24/08), 100 (24/08-07/09), 461 (07-26/09, French Days inclus). 2.0 : 162 par jour du 20/04 au 26/09/2026 (`soya2/ventes/rythmes_wayback.tsv`) | la nuit du 25 au 26/09 (155 oreillers 3.0 par jour une fois extrapolée) est sous le rythme de septembre |
| Chiffre d'affaires TTC par jour (modèle de la mission « ventes », chapitre 17, `soya2/ventes/scenarios.py`, exécuté le 26/09 vers 11:30 UTC) | A, août hors pic : 15 200 à 20 100 € ; B, moyenne de 8 semaines : 19 500 à 26 000 € ; C, du 7 au 26/09 avec les French Days : 30 800 à 41 300 € | **≈ 15 000 à 26 000 € TTC par jour hors pic** |
| Budget publicitaire | **hypothèse** sectorielle non mesurée : 25 à 40 % du chiffre d'affaires pour une marque sans audience organique | **≈ 3 800 à 10 400 € par jour hors pic** (≈ 115 000 à 315 000 € sur 30 jours) ; jusqu'à ≈ 16 500 € par jour en pic |
| Contrôle croisé par le post à 10 K réactions | **hypothèse** : au plus 1 réaction pour 100 affichages | au moins un million d'affichages pour ce seul post |

*Limites.*

- Un compteur peut bouger pour d'autres raisons qu'une vente : annulation, ajustement manuel, remise à zéro.
- La série Wayback montre des variantes qui remontent et des changements de politique de stock (`deny` / `continue`).
- Le ratio housses / oreillers vaut 69 % (2.0) à 79 % (3.0) cette nuit-là, et 81 % en cumul sur le 2.0. C'est cohérent avec l'option pré-cochée (§ 1, point 5), mais un ratio d'unités ne mesure ni le nombre de commandes concernées ni le consentement du client.
- La relève horaire en cours (`soya2/inv/`) et le chapitre 17 remplacent ces ordres de grandeur dès qu'ils sont consolidés.

### 16.10 Créateurs, UGC, influence et codes promo

- **Aucun créateur externe identifié.** Recherches faites : « soya paris code promo », « soya paris tiktok », « soya paris oreiller avis youtube », « @soya.paris collaboration ». L'« UGC » visible est produit par la marque, avec deux présentateurs récurrents [constaté]. Leur statut est inconnu : fondateurs, salariés ou acteurs rémunérés.
- **YouTube** : aucune revue de créateur ; seulement des « top 3 meilleur oreiller cervical » génériques et le Short de la chaîne LUXERY SERVICE LTD [constaté : `yt_soya+paris+oreiller.html`].
- **Codes** : MAMAN20 (-20 %, probablement fête des mères), AS74 (-55 %), SOYA15, SOYA10 et BACK20 [non vérifié : agrégateurs de coupons en 403, lus dans les résumés de moteur]. Seul BACK20 est confirmé, par le formulaire Klaviyo « HIGH PROSPECT » (§ 8.4). Aucun code n'a été testé.

### 16.11 L'écosystème autour de la marque

- **Recherches de marque sur TikTok** : TikTok a créé une page mot-clé « avis oreiller soya paris » le 13/04/2026 à 15:37:47 UTC (`tt_content_avis.json`, bloc `webapp.kap-detail`, `createTime` 1776094667, `site: app_search`). La page a été générée à partir des recherches dans l'application, **près de quatre mois avant la création du compte @soya.paris** (05/08/2026). Soya était donc déjà visible sur TikTok ou ailleurs avant d'y avoir un compte, peut-être par des annonces sous une identité personnalisée [indice].
- **Recherches de marque sur Instagram** : Instagram publie des pages « coussin-soya-paris-avis » et « oreiller-soya-30-avis » [non vérifié : titres de résultats].
- **Captation par des tiers** :
  - d'autres boutiques Shopify publient des articles « Soya Paris avis » qui renvoient vers leurs propres oreillers : glowchicparis.com (boutique `cj40gf-iy`, Fleurance, 29 produits, `soya2/reseau/domaines/meta_glowchicparis.com.json`) et glowupbyparis.com ;
  - des sites d'affiliation (meilleur-oreillercervical.fr) écrivent que Soya « est partout dans les publicités depuis des mois » ;
  - des oreillers 3.0 sont revendus sur un groupe Facebook de petites annonces (« 2 Oreillers soya Paris 3.0 | New | €120.00 | Lisieux ») [titres de résultats].
- **Copies** : au moins cinq boutiques copies utilisent le nom « Soya Paris », sans identifiant commun avec l'exploitant (chapitre 15). Une seconde entité Facebook « Soya Paris » existe [non vérifié]. L'URL de publication citée en annexe B.2 (`story.php?story_fbid=122111526512516761&id=357304574142341`) porte un identifiant de propriétaire différent de 61565502837799. Ce peut être l'identifiant historique de la même page ou un autre compte ; sans connexion, rien n'est lisible [non vérifié].

### 16.12 Ce que Somnila doit en tirer (sans allégation de santé)

1. **Reprendre le format, pas le discours.** Le format vertical 9:16 de 30 à 60 s, sous-titré, avec le produit manipulé, est ce que la catégorie attend. Le BRAND_BOOK impose un fondateur sans visage (« l'artisan silencieux », `build/BRAND_BOOK.md` l. 27) : les mains et une voix off remplacent les visages. Chaque image montre un fait vérifiable, là où Soya montre un « prix » et des « praticiens » :
   - retourner l'oreiller pour montrer 13 cm puis 11 cm ;
   - poser un mètre sur les 62 × 42 cm ;
   - peser 1,4 kg ;
   - retirer la housse.
2. **Faire sa propre FAQ, honnête.** La vidéo FAQ de Soya répond aux vraies objections : fermeté, hauteur, adaptation, housse, livraison. Somnila peut répondre aux mêmes, en mesures et en conditions réelles :
   - hauteur de 13 ou 11 cm « selon la largeur d'épaule et la position » (confort, pas santé) ;
   - essai de 30 nuits ;
   - délai réel de 6 à 10 jours (`build/HANDOFF.md` l. 18), et pas « 3 à 6 jours » si c'est faux.
3. **Le vrai ressort commercial, c'est le couple.** L'offre la plus déclinée par Soya est « -30 % sur le 2ème ». Somnila peut proposer un **prix duo permanent** plutôt qu'une remise « limitée ». Le BRAND_BOOK interdit « −50 % » et « limited time ».
4. **Choisir un titre qui annonce un fait.** « Livraison gratuite » sert de titre à la majorité des annonces de Soya. Pour Somnila, par exemple « Same price every day. 30 nights to decide. », à condition que ce soit vrai. Ne pas nommer Soya : une comparaison doit rester objective et vérifiable.
5. **Se démarquer visuellement.** Le bleu nuit, les capitales, les pictos médicaux et le schéma de colonne vertébrale sont les codes de l'oreiller « orthopédique » bleu que le BRAND_BOOK désigne comme l'ennemi (l. 29 et l. 109). Une image claire, calme et mesurée se distinguera dans le fil.
   - À éviter absolument : « Élu … », « N°1 », « recommandé par », « +200 praticiens », « soulage », « dès la première nuit », « réduit l'apnée ou les ronflements ».
   - À éviter aussi : toute phrase qui prête une douleur au lecteur (« vos douleurs cervicales »), contraire en plus aux règles de Meta.
6. **Ne jamais recycler des commentaires médicaux.** Modérer les commentaires des annonces qui promettent un effet sur la santé. Ne réutiliser que des avis sur le produit (toucher, tenue, housse), avec consentement écrit.
7. **Un calendrier honnête.**
   - Pas le mot « soldes » hors des périodes légales.
   - Pas de « fin aujourd'hui » qui se renouvelle.
   - Pas de « déstockage » d'un produit toujours au catalogue.
   - Chaque temps fort a une date de début, une date de fin et un prix de référence réel (L112-1-1).
8. **Protéger sa marque sur Google.** Soya achète des mots-clés sur Google et laisse des tiers capter « soya paris avis ». Somnila doit :
   - ouvrir tôt une petite campagne Search sur son propre nom, avec une annonce factuelle ;
   - tenir une page d'avis réels ;
   - relier Merchant Center pour les fiches gratuites, dès le lancement.
9. **Occuper les terrains vides.** Soya n'a aucun contenu organique sur TikTok, aucune chaîne YouTube à son nom et aucun créateur. Il faut :
   - réserver dès maintenant @somnila sur TikTok, Instagram, Facebook, YouTube, Pinterest et Snapchat ;
   - publier du contenu réel ;
   - ouvrir 3 à 5 partenariats de créateurs déclarés (#publicité).
10. **Ne pas suivre l'enchère.** Soya dépenserait de l'ordre de 4 000 à 10 000 € par jour hors pic [hypothèse, § 16.9]. Somnila ne peut pas gagner au volume. Elle doit gagner au taux de conversion (preuve, clarté) et à la rétention (housse de rechange, e-mail), comme le recommande le § 8.8.

### 16.13 Un Claude Code sur ton poste ferait-il mieux ?

**Réponse courte : il ne ferait pas une meilleure analyse, il verrait plus de choses.** Le modèle et la méthode sont les mêmes. La différence est l'accès [déduit]. Tous les blocages de cette mission viennent d'une IP américaine de centre de données, sans session, derrière un proxy qui coupe les tunnels du navigateur :

- Meta : défi JS puis page de connexion ;
- Google : captcha (429) ;
- TikTok : 421 ;
- Instagram : limitation et demande de connexion ;
- Facebook : 302 vers la connexion.

Depuis un poste en France (IP résidentielle, navigateur habituel), un Claude Code local obtiendrait :

- **Meta Ad Library**, consultable sans compte dans un navigateur normal : le nombre d'annonces actives de la page 61565502837799, leurs dates de début, leurs formats, leurs pays et les visuels eux-mêmes ;
- **Google Ads Transparency** : les annonces Search, Shopping et YouTube, et surtout **le nom de l'annonceur vérifié**, qui tranche la piste LUXERY SERVICE LTD ;
- **la bibliothèque TikTok** en région FR : les annonces de @soya.paris, ou d'une identité personnalisée ;
- les vrais compteurs Instagram et Facebook, avec un navigateur connecté.

Il aurait aussi un avantage de durée : un relevé quotidien des compteurs pendant 7 jours ou plus (`build/analyse/soya-paris/outils/inv.py`, prévu dans `BRIEF_CLAUDE_LOCAL.md`). C'est ce qui manque le plus à l'estimation des ventes, vu les salves observées.

Le reste serait identique : vidéos, transcriptions, registres, Wayback, calculs.

**Précautions pour ce poste :**

- relevé en lecture seule ; aucun message, aucun commentaire, aucun achat, aucun formulaire ;
- ouvrir soya-paris.com en navigation privée, dans un profil de navigateur séparé des comptes Facebook et Instagram de l'utilisateur. Sinon, les pixels de Soya l'ajoutent à ses audiences de reciblage. C'est instructif pour voir les annonces de reciblage, mais cela laisse une trace ;
- WebSearch passe par les serveurs d'Anthropic, depuis les États-Unis, même en local : ses résultats ne changent pas.

**Conclusion :** faire tourner le brief local pour les quatre relevés d'accès (Meta, Google, TikTok, Instagram) et la veille sur 7 jours, puis rapatrier les captures ici. Une session locale n'a pas besoin de refaire l'analyse.

### 16.14 Sources de ce chapitre

- **Fichiers :**
  - enquête : `soya2/pub/INDEX.txt` (liste complète), `soya2/pub/fb_videos_webfetch.md`, `soya2/pub/vid/` (vidéos, métadonnées, transcriptions, planches), `soya2/pub/tt_profile_0926.json`, `soya2/pub/tt_content_avis.json`, `soya2/pub/snap_*.json`, `soya2/pub/yt_rss_luxery.xml`, `soya2/pub/ch_16489223.html`, `soya2/pub/ch_luxery.html` ;
  - contre-vérification : `soya2/pub/contre/reouvertures.txt`, `avis_15637.txt`, `wayback_extraits.txt`, `compteurs_valorisation.txt` ;
  - autres missions : `soya2/inv/snap-2026-09-26T094803Z.json` et `snap-2026-09-26T104854Z.json` ; `soya2/ventes/samples.jsonl`, `fenetres_26-09.txt`, `rythmes_wayback.tsv`, `scenarios.py` ; `soya2/ventes/wayback/*.html` ; `soya2/reseau/wayback/cdx_soya-paris.com.txt` ; `soya2/reseau/liens.json` ;
  - première enquête : `soya/web/p_*.html`, `soya/pdp3.html`, `soya/products.json`, `soya/gallery/`, `soya/pol/shipping-policy.txt`.
- **URL ouvertes :**
  - https://www.facebook.com/61565502837799/videos/livraison-gratuite-d%C3%A9j%C3%A0-100-000-clients-satisfaits/1424788815815978/ (et les autres ID de la § 16.4 ; rouvertes le 26/09 : 1223428729960782, 672030032315793, 3015555038626220) ;
  - https://www.tiktok.com/@soya.paris ;
  - https://www.tiktok.com/content/avis-oreiller-soya-paris ;
  - https://www.youtube.com/feeds/videos.xml?channel_id=UC86268FR0iH5YN-Fwr_oLMw ;
  - https://find-and-update.company-information.service.gov.uk/company/16489223 ;
  - https://adsgallery.snap.com/ ;
  - https://www.inc-conso.fr/content/soldes-dete-ca-commencera-le-mercredi-24-juin-2026-8-heures-y-compris-sur-internet ;
  - https://meilleur-oreillercervical.fr/soya-paris-avis/ ;
  - https://www.hadlemans.fr/soya-paris-avis/.
- **Titres de résultats seulement :**
  - vidéos Facebook 1091775433016928, 4195067947410046, 630204226522716, 1170164804611160, 942531044896326 et 1766409657383022 ; publication 122111526512516761 ;
  - entité facebook.com/61582665196548 ;
  - publications Instagram DEVO2kbthzt, DEVOyCFt8eG, DML-U_atCXp et pages « popular » ;
  - agrégateurs de coupons ;
  - dates des soldes d'été 2025.

---

## 17. Trafic et chiffre d'affaires : combien vend SOYA PARIS, et d'où vient son trafic (enquête du 26/09/2026, contre-vérifiée)

*Conventions du dossier : [constaté], [déduit], [indice], [risque], [non vérifié]. Heures en UTC sauf mention (Paris = UTC+2). Chemins de preuve :*
- *`v2/` = `/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/soya2/ventes/` (enquête ; index : `v2/INDEX.txt`) ;*
- *`inv/` = `…/scratchpad/soya2/inv/` (relevés horaires) ; `soya/` = `…/scratchpad/soya/` (première enquête) ;*
- *`ct/` = `…/scratchpad/soya2/contre_trafic/` (contre-enquête) : `extract.py` et `extract_out.json` (compteurs relus dans les 45 captures avec un parseur indépendant), `recalc.py` → `recalc_out.txt` (calculs refaits), `loox_minuit.txt`, `relectures_webfetch_2026-09-26.md`.*

*Contre-vérification du 26/09/2026, de 12:00 à 12:40 UTC. Les compteurs ont été réextraits des captures, les calculs refaits, SimilarWeb et Trustpilot rouverts. Chaque correction est signalée par « (corrigé) ».*

### 17.1 Réponse courte

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

### 17.2 Les compteurs : ce qu'ils mesurent

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
- Précision pour le chapitre 15 (§ 15.4) : la bascule a eu lieu au plus tard le 28/10/2025, et non le 31/10.

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

### 17.3 La journée mesurée (25/09 21:31 → 26/09 11:49 UTC)

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

### 17.4 L'historique retrouvé (Wayback Machine, 45 captures)

Les captures brutes des fiches (avril 2025 → 7 septembre 2026) contiennent les mêmes compteurs. La contre-enquête les a relus avec un parseur indépendant et retrouve les mêmes valeurs [constaté : `v2/wayback/*.html`, `ct/extract_out.json`]. Huit captures sont en USD : leurs prix sont ignorés, leurs compteurs gardés.

| Produit | Fenêtre | Jours | Unités parties | Par jour | Remarque |
|---|---|---|---|---|---|
| 2.0 | 28/10/2025 → 26/12/2025 | 59,5 | 1 367 | 23 | Lancement du 3.0 ; la housse 2.0 baisse davantage (2 161) : incohérence (§ 17.2) |
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
- Pour atteindre -15 293 depuis zéro en 84 jours, il aurait fallu vendre au moins 181 oreillers par jour, quatre fois le rythme mesuré juste après. Ce compteur a pu être importé d'une boutique antérieure (le domaine en a connu plusieurs, voir chapitre 15).
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

### 17.5 Des unités au chiffre d'affaires

**Pack ou unité.**
- Sur le 2.0, les housses offertes représentent 80,0 % des oreillers vendus du 20/04 au 26/09 (20 631 pour 25 778) [constaté].
- Environ 20 % des oreillers 2.0 partent donc seuls, et 80 % au plus en packs [déduit]. « Au plus », parce que la housse 2.0 peut aussi sortir par d'autres canaux (§ 17.2).
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

### 17.6 Recoupements

| Méthode | Données | Résultat | Verdict |
|---|---|---|---|
| Trustpilot (corrigé) | 6 280 avis le 26/09 vers 12:25 (6 278 le matin, 6 273 la veille) ; 5 316 sur 12 mois (14,6 par jour). La première page, triée par date, porte 20 avis publiés en 24 heures, **tous étiquetés « Avis spontané »** [non vérifié, WebFetch : `ct/relectures_webfetch_2026-09-26.md`] | Environ 20 à 25 avis par jour pour 220 à 400 commandes par jour en septembre, soit 5 à 11 % | Le volume d'avis ne mesure pas les ventes. Un taux aussi élevé d'avis non sollicités via Trustpilot est inhabituel : **[indice]** à surveiller, sans conclusion. L'enquête parlait de « sollicitations très actives », ce que l'étiquette « spontané » ne confirme pas |
| Loox | 2.0 : 1 255 avis ; 3.0 : 339 ; 1,2 et 2,4 avis par jour en septembre | Moins de 1 % des unités vendues | Inutilisable pour le volume. Au moins 476 avis 2.0 sont datés de janvier 2023 à août 2024, avant le domaine (05/09/2024), et des lots d'au moins 20 avis tombent le même jour (13/03/2025, 05/06/2025 avec au moins 80, 18/09/2025). **Ajout** : tous les avis 2.0 échantillonnés jusqu'au 18/09/2025 sont horodatés à 00:00:00.000 UTC exactement, signature d'un import ou d'un ajout sans heure. Ce schéma continue après la migration : 5 sur 20 sur la page la plus récente du 2.0 (septembre 2026), 11 sur 20 en juillet 2026, 3 sur 20 pour le 3.0 (`ct/loox_minuit.txt`). **[Indice]** d'avis importés ou ajoutés à la main, pas seulement lors de la migration |
| Chrome UX Report | Absent de mars à juin 2025 ; top 1 M de juillet à novembre 2025 ; top 500 k de décembre 2025 à août 2026, sauf juin 2026 | Même palier que Wopilo, Tediber et Dodo ; Derila au top 50 k en août 2026 | Cohérent avec le décollage des compteurs en décembre 2025 [constaté : `v2/trafic/crux/*.csv.gz`] |
| Tranco | 1 305 593 (17/08) → 835 309 (25/09/2026), stable depuis le 08/09 | Liste moyennée sur 30 jours | Cohérent avec la hausse d'août |
| SimilarWeb (corrigé) | Environ 345,6 k visites en août ; environ 164,6 k en juillet | Conversion d'août de 1,1 à 1,8 % (118 à 204 commandes par jour sur 31 jours) | **Cohérent** avec les compteurs, pour du trafic social payant. L'enquête lisait 345,6 k comme un total sur 3 mois et concluait à une sous-estimation : cette conclusion tombe |
| Compteurs cumulés | 2.0 : 150 unités par jour sur 342 jours | Recoupe les fenêtres Wayback | Cohérent |

> **Note de la rédaction (v2).** Deux lignes de ce tableau sont tranchées par le chapitre 19, fondé sur les métadonnées de chaque avis plutôt que sur la page lue par WebFetch.
> - *Trustpilot* : l'étiquette « Avis spontané » ne signifie pas que ces avis sont non sollicités. Le JSON du widget TrustBox montre que 99 % des 5★ et 98 % des 4★ récents arrivent par le lien d'évaluation diffusé par la marque (source « BasicLink », niveau « invited ») ; selon une source tierce, ce lien simple ne produit que des avis étiquetés « non sollicités », et la page transparence de Trustpilot les compte comme « organiques » (§ 19.3, § 19.13). Les sollicitations de la marque sont donc bien actives, environ 22 avis par jour : c'est le chapitre 19 qui l'emporte. La conclusion « le volume d'avis ne mesure pas les ventes » reste valable.
> - *Loox* : le décompte complet des avis 2.0 datés d'avant la création du domaine est de **494** (§ 19.4), contre « au moins 476 » dans l'échantillon de ce chapitre.

### 17.7 Trafic : sources consultées

| Source | Accès | Chiffres |
|---|---|---|
| SimilarWeb, données d'août 2026 (corrigé) | WebFetch seulement : curl renvoie un 202 vide, l'API un 403 | Voir la note sous le tableau |
| Comparables SimilarWeb | WebFetch | wopilo.com environ 118 k (Organic Search 37 %) ; tediber.com 382,6 k (Organic 43 %) ; derila-ergo.com environ 1,4 M (Display 42 %, 76 % de trafic de recherche payant). Ce sont probablement aussi des chiffres d'août seul [déduit, non vérifié] |
| HypeStat (mis à jour le 25/08/2026) | curl | Estimations HypeStat : 136 k (mai), 123,4 k (juin), 169,5 k visites (juillet). « Monthly Visits (SimilarWeb) : 164 560 ». Direct 82,04 %, Social 6,94 %, Paid 5,43 %, Search 4,43 % ; mobile 78,53 %. Semrush : 106 158 visites par mois, 7 mots-clés, 15 visites organiques. 348 backlinks venant de 150 domaines, dont 65 à Singapour (`v2/trafic/hypestat_text.txt`) |
| Semrush, Ahrefs, Ubersuggest, websiteseochecker | fermés (compte ou captcha) | — |
| statshow, siteworthtraffic, similarsites | ouverts, sans données utiles | — |
| CrUX (listes mensuelles publiques), Tranco | ouverts | voir § 17.6 |

**SimilarWeb, lecture corrigée.** La page affiche 345,6 k visites. WebFetch rend le libellé « Total Visits Last 3 Months » ; l'arithmétique montre qu'il s'agit du seul mois d'août :
- HypeStat, mis à jour le 25/08, donne pour SimilarWeb 164 560 visites en juillet ;
- or 164 560 × 2,10 = 345 576 : c'est exactement juillet + 110 % ;
- sur 3 mois (juin-août), août vaudrait au plus 181 k, soit +10 %, ce qui contredit les +110 % affichés.

Autres données de la page : +110 % sur un mois, rebond 71,2 %, 1,60 page par visite, 1:06 par visite. Répartition par pays : France 89,89 %, Belgique 5,56 %. Canaux : **« Paid Social » 36,12 % des visites sur ordinateur** (phrase de SimilarWeb : « driving 36.12% of desktop visits »), puis Direct, puis Display. Recherche : 131 mots-clés, tous de marque ; 27 % de ce trafic vient de mots-clés payants. Audience proche de Wopilo, La Maison de l'Oreiller, NuageConfort et Eveeo.

### 17.8 Référencement : 23 requêtes (outil WebSearch, limité aux États-Unis : ce n'est pas Google.fr)

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

### 17.9 Payant contre organique [déduit] (corrigé)

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

### 17.10 Ce que cela implique pour Somnila

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

### 17.11 Un Claude Code local ferait-il mieux ?

Pas par l'intelligence : c'est le même modèle, avec la même méthode. Il serait en revanche **mieux placé** sur cinq points :
- **Adresse IP française** : vrais résultats Google.fr et prix vus comme par une cliente.
- **Pas de filtre réseau** : la Wayback Machine est instable ici, archive.ph et Common Crawl sont fermés.
- **Limite de débit Shopify** : ici elle est partagée avec les autres agents (pages bloquées à 10:48).
- **Durée** : il peut faire tourner les relevés 7 jours ou plus, ce qui lisse les à-coups.
- **Comptes** : il peut utiliser les comptes SimilarWeb ou Semrush du fondateur, s'il en a. On obtiendrait ainsi la série mensuelle et le libellé exact des visites.

Mais les trois erreurs corrigées ici n'étaient pas des problèmes d'accès. Il s'agissait d'une lecture du chiffre SimilarWeb, d'un changement de boutique passé inaperçu et d'une date de pré-cochage. Une session locale les aurait commises aussi sans contre-vérification. Ce qui améliore le résultat, c'est la relecture des preuves brutes, pas l'endroit où tourne l'agent. Les règles restent les mêmes : aucun contact, aucun compte créé chez Soya, aucun achat.

### 17.12 Limites

- Une seule journée de relevés directs, avec des mises à jour par à-coups : le profil horaire reste inconnu.
- Les fenêtres Wayback qui traversent un réassort sont des bornes basses.
- Les compteurs contiennent au moins une incohérence (housse 2.0 contre oreiller 2.0, octobre-décembre 2025) : ce sont des ordres de grandeur.
- La lecture des compteurs en ventes suppose qu'aucun ajustement manuel à la baisse n'a eu lieu (aucun n'a été observé). Les compteurs ne sont pas affichés aux clientes : Soya n'a pas d'intérêt à les manipuler.
- Les packs ont changé en 2026 : les comparaisons d'unités entre périodes surestiment la hausse du nombre de clients.
- La part des packs sur le 3.0 est transposée du 2.0.
- SimilarWeb, HypeStat et Trustpilot ont été lus en partie par un modèle (WebFetch). La lecture « août seul » de SimilarWeb est déduite de l'arithmétique.
- WebSearch n'est pas Google.fr.
- La série horaire de l'orchestrateur continue jusqu'à environ 21:49 UTC. Pour la compléter, relancer `python3 fenetres.py` et `python3 analyse.py` dans `v2/`.

### 17.13 Contre-vérification : ce qui a changé

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

---

## 18. Sourcing et marges : origine, coût et marge de l'Oreiller Soya 3.0 (et du 2.0, de l'oreiller enfant et du « lombaire ») — version contre-vérifiée

*Mission complémentaire du 26/09/2026, contre-vérifiée le même jour vers 12:00 UTC. Le dossier principal (§ 7.4, § 7.8, § 8.6, § 8.7) avait posé les premiers indices. Ce chapitre cherche le fournisseur probable, les prix de gros, le coût rendu client et la marge par offre. Toutes les sources citées ont été rouvertes par le contre-enquêteur. Les constats réfutés ou corrigés sont signalés par « contre-vérification ».*

*Chemins de preuve :*
- *`soya2/sourcing/` = `/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/soya2/sourcing/` (première enquête, index dans `INDEX.txt`) ;*
- *`soya2/contre_sourcing/` = même racine, dossier de la contre-vérification : `flipcrop.py`, `extra_hash.py`, `compteurs_famille.py` et `compteurs_famille_out.txt`, planches `board_lecture.jpg`, `board_masque.jpg`, `board_nuage_neck.jpg`, `board_nuage_enfant.jpg`, `board_mic.jpg`, `firefly.jpg`, `check_extra.jpg`, images `img_extra/` et `mic_verif/` ;*
- *les autres chemins suivent les conventions du dossier (`soya/`, `mkt/`, `build/`).*

*Taux de change utilisé partout : 1 € = 1,159 $ (build/ANALYSE_PRIX.md, 10/09/2026).*

*Aucune requête vers soya-paris.com, ni pendant l'enquête ni pendant la contre-vérification. Les images ont été lues sur le CDN Shopify : 82 fichiers pendant l'enquête, 18 pendant la contre-vérification, à `?width=600` ou `500`, avec 0,4 à 0,5 s entre deux requêtes. S'y ajoutent 4 images de made-in-china.com et des lectures WebFetch de Trustpilot, Accio, touteleurope.eu, whitehouse.gov, shopify.com et docs.parcelpanel.com.*

### 18.0 Ce que la contre-vérification a changé

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
   - Les indices d'envoi direct depuis la Chine (§ 18.8) contredisent le scénario « bas », qui suppose un stock en France.
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

### 18.1 Réponse courte

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

### 18.2 Photos et moules

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
| Nature des visuels | 4 rendus 3D d'une même scène sur fond bleu dégradé ; « 灰 » (gris) et « 蓝 » (bleu) incrustés sur deux d'entre eux [constaté, `soya2/contre_sourcing/neck01_cn.jpg`] | photos de studio retouchées ; 2 visuels Gris reproduits par IA (§ 18.2 bis) | photo brute d'atelier (mousse blanche) et visuels marketing (modèle gris à flancs en maille) |
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
  - La hauteur annoncée diffère : 11 / 9 cm à l'usine, 14,4 / 9 cm chez Soya. Le chiffre de 14,4 cm figure sur un visuel reproduit par IA (§ 18.2 bis).
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
- **Nuance de la contre-vérification** : un résultat nul ne prouve pas que les visuels sont originaux (§ 18.2 bis).

### 18.2 bis Deux visuels du coloris Gris reproduits par IA [constaté pour les noms, indice pour l'interprétation]

La galerie du 3.0 contient deux fichiers nommés `Firefly_Gemini_Flash_Generate_the_same_image_exactly_as_the_reference._Keep_all_text_icons_layout_compo_480153_3.png` et `…_5.png` (positions 28 et 32).
- Ils ont été créés le 28/02/2026 à 23:30 (+01:00), le jour de la création de la variante Gris (soya/products.json).
- Ce sont des versions grises de visuels existants (`soya2/contre_sourcing/firefly.jpg`) :
  - « Un équilibre parfait entre maintien et confort » ;
  - « 2 hauteurs 1 seul oreiller », avec les cotes 14,4 cm et 9 cm.
- Lecture [indice] : le coloris Gris a été illustré en demandant à une IA (Adobe Firefly, modèle Gemini Flash) de reproduire des visuels de référence, plutôt qu'en photographiant un oreiller gris.
- Une telle reproduction échappe aussi à la recherche d'image inversée.

### 18.3 D'où viennent les quatre produits

| Produit Soya | Ce que montrent ses images et ses textes | Type générique | Prix de gros relevés | Preuve |
|---|---|---|---|---|
| **Oreiller Soya 3.0** | papillon à cornes, point central, bourrelet nervuré, housse lisse unie, « fibre de bambou » ou « ions d'argent » | « Butterfly memory foam pillow » à cavité centrale | 6,90-10,20 $ et 7,90-9,90 $ (deux fiches du même compte Jintongyuan) ; 8,80-9,60 $ (Accio) | § 18.4 |
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

### 18.4 Places de marché : ce qui a été ouvert, ce qui est resté fermé

| Source | Accès | Résultat (recontrôlé) | URL |
|---|---|---|---|
| Made-in-China, fiche « Unique Memory Foam Pillow Butterfly Shape » (sous-domaine tainengjikang) | ouverte | 9,90 $ (200-499), 8,90 $ (500-9 999), 7,90 $ (10 000+) ; échantillon 15 $ ; colis 18 × 18 × 36 cm, 1,45 kg ; HS 9404909000 ; délai d'un mois ; port de Yantian. **Vendeur affiché : Shenzhen Jintongyuan Technology Co., Ltd.** Le texte « À propos » parle de « Shenzhen Tainengjikang technology Co., Ltd., founded in 2019 ». FAQ : « Pillows: MOQ is 200pcs » et, plus haut, « Pillows: MOQ is 500 pieces » | https://tainengjikang.en.made-in-china.com/product/dOaGcWKTERMq/China-Unique-Memory-Foam-Pillow-Butterfly-Shape-for-Cervical.html |
| Made-in-China, fiche « Butterfly Memory Foam Pillow… Custom Logo » (sous-domaine memoryfoampillow) | ouverte | 10,20 $ (200-2 999), 9,60 $ (3 000-9 999), 6,90 $ (10 000+) ; colis 19 × 19 × 37 cm, 1,45 kg ; champ MOQ « 200PCS » mais FAQ « MOQ is 1000 pcs » ; capacité « 3000000/Month » dans le formulaire, « over 200000 pieces each month » dans le texte de présentation (120 salariés). Même vendeur, même adresse (Longgang, Shenzhen), audit TÜV Rheinland annoncé | https://memoryfoampillow.en.made-in-china.com/product/QtGrzXcCJeRW/China-Butterfly-Memory-Foam-Pillow-Soft-Antibacterial-Cervical-Pillow-with-Custom-Logo.html |
| Made-in-China, recherche « Butterfly Pillow » | ouverte | 27 fiches pertinentes sur 30 ; bas de fourchette de 3,50 à 17,14 $, médiane 7,30 $ (bas) et 9,90 $ (haut). **14 cartes sur 30 chez Jintongyuan**, dont 8 prix bas identiques à 7,30 $ : la médiane reflète surtout ce fournisseur | https://www.made-in-china.com/products-search/hot-china-products/Butterfly_Pillow.html |
| Made-in-China, prix des coussins de genoux | ouverte | 28 prix, 1,90-12,49 $ | https://www.made-in-china.com/price/memory-foam-knee-pillow-price.html |
| Made-in-China, housses et oreillers enfant | ouvertes | housses de 2,00 à 3,50 $ ; enfant : voir § 18.3 | …/hot-china-products/Memory_Foam_Pillow_Cover.html ; …/Kids_Memory_Foam_Pillow.html |
| Accio (Alibaba), deux pages « avis Soya » | WebFetch (rouvert) | Guangzhou Kingkady « Butterfly-Shaped Orthopedic Memory Foam Cervical Pillow » 8,80-9,50 $ (MOQ 300) ; « Butterfly Shape Pillows » 8,80-9,60 $ (MOQ 500) ; « JTY Back and Stomach Sleep Pillows » 7,90-9,80 $ (MOQ 500). **Les pages ne désignent aucun de ces produits comme celui de Soya** | https://www.accio.com/business/fr/soya-paris-oreiller-avis-top-ventes ; https://fr.accio.com/business/avis-oreiller-soya-top-ventes |
| Alibaba, fiche produit | fermée (page vide) | — | alibaba.com/product-detail/…1601682543310 |
| AliExpress | fermé (captcha « punish », boucle de redirections) | titre seulement [non vérifié] | https://www.aliexpress.us/item/3256808598874210.html |
| Temu | fermé (JavaScript) | titres seulement [non vérifié] ; avis client « Oreiller à 12€ sur Temu » [non vérifié] | https://www.temu.com/fr-en/1pc-memory-foam-pillows-butterfly-shaped-relaxing-cervical-slow-rebound-neck-pillow-sleeping-orthopedic-pillow-bedding-g-601099547811249.html |
| Amazon | fermé (202 vide ; squelette via WebFetch) | titres seulement, dont « ZGMCX Butterfly Cervical Memory Foam Pillow, Dual-Height Design (11cm/13cm) » [non vérifié] | https://www.amazon.com/ZGMCX-Butterfly-Dual-Height-Skin-Friendly-Breathable/dp/B0GQ6QJ8JH |
| DHgate, eBay.de | 403 | — | — |

- **Incoterm.** Les fiches Made-in-China donnent un prix « / Piece » sans incoterm. Le fournisseur accepte « FOB, EXW, CFR, CIF, DAT, FAS, DDP, DAP, CIP, CPT, FCA ». Parler de prix « FOB » est une hypothèse d'usage [constaté sur la fiche tainengjikang].
- **Délais.** Un mois de production (Made-in-China) ; 6 à 10 jours de livraison pour le fournisseur de Somnila (build/devis_fournisseur.txt).

### 18.5 Fiche technique comparée Soya / Somnila

| Caractéristique | Soya 3.0 | Neck 01 | Preuve |
|---|---|---|---|
| Forme | papillon à cornes, encoche centrale, point central, découpes latérales, bourrelet nervuré | nuage à lobes arrondis, bouton central, picots au bord avant (rendu) | § 18.2 |
| Dimensions | 62 × 37 cm (fiche) ; 60 × 40 cm (housse 3.0) | 62 × 42 cm ; housse de rechange 07 : 63 × 39 × 13 cm, poids noté « 1,3 (?) » kg | soya/web/pdp3_fulltext.txt l. 161 ; p_housse-d-oreiller-de-rechange-soya-3-0.html ; build/PRODUCTS.csv (id_devis 07 et 09) |
| Hauteurs | 14,4 / 9 cm (écart de 5,4 cm) ; usine candidate 11 / 9 cm | 13 / 11 cm (écart de 2 cm) | idem ; soya2/sourcing/img_mkt/mic_jty_2.webp |
| Poids | non publié ; `grams: 0` ; colis de l'usine candidate 1,45 kg brut | 1,4 kg | soya/products.json ; fiches Made-in-China ; PRODUCTS.csv |
| Mousse | « mousse intelligente », densité non publiée ; avis : « odeur forte de produits chimiques » | mousse à mémoire de forme, densité inconnue | pdp3_fulltext l. 158 ; tp/trustpilot_extraits |
| Housse | « fibre de bambou » ou « ions d'argent » ; housse 2.0 en rayonne et polyester | « technologie rafraîchissante » ; rechange : « gel rafraîchissant » | pdp3_fulltext l. 139 ; p_housse-d-oreiller-de-rechange-soya-1.html ; PRODUCTS.csv |
| Compression | « compressé pour l'expédition » | inconnue (le fournisseur expédie) | pdp3_fulltext l. 202, 291 |
| Délai annoncé | 1 à 2 j + 3 à 5 ou 3 à 6 j (trois versions) | 6 à 10 j | § 18.8 ; build/PRIX.md |
| Coût | 13 à 25 € (hypothèses) | 25,00 € (devis) | § 18.6 |
| Visuels | photos retouchées ; 2 visuels Gris reproduits par IA | 4 rendus 3D, aucune photo réelle identifiée avec certitude | § 18.2, § 18.2 bis |

**Recouvrement des deux catalogues [constaté pour les prix ; indice pour l'identité des produits]** :

| Somnila (build/PRODUCTS.csv) | Soya (soya/products.json, Kaching) | Écart de prix | Même objet ? |
|---|---|---|---|
| Neck 01, 69,90 € (coût 25 €) | Soya 3.0, 69,90 € sur la fiche | 0 | non, moules différents [déduit] |
| Contour 01, 59,90 € (coût 19 €) | Soya 2.0, 59,90 € sur la fiche, housse offerte dans les packs | 0 | non établi |
| Lounge 01, 54,90 € (coût 19,50 €) | Coussin ergonomique avec tête de lit, 42,90 € | Somnila 12 € plus cher | **probablement** (même silhouette) [indice fort] |
| Mask 01, 19,90 € (coût 6 €) | Masque de sommeil en soie, 29,90 € (barré 59,90) | Somnila 10 € moins cher | non établi (le masque Soya n'a pas été comparé en détail) |

### 18.6 Coût complet et marge par offre

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
   - Les indices d'envoi direct depuis la Chine (§ 18.8) placent Soya plutôt dans les scénarios central ou haut que dans le scénario bas, qui suppose un stock en France.
   - **Conclusion : coût inconnu dans la fourchette de 13 à 25 €.**
2. **L'argent se fait sur le Duo et les ajouts**, pas sur l'oreiller seul.
   - La housse cochée d'office apporte 4,71 à 9,25 € de marge pour 14,90 € de prix ; le popup lombaire, 5,68 à 11,69 € pour 19,90 €.
   - Ensemble, ils relèvent le point mort de l'offre 1x de 11,9 à 20,9 €.
3. **Illustration pondérée.** Mix d'offres hypothétique : 60 % 1x, 30 % Duo, 10 % Famille ; housse gardée dans 41 % ou 79 % des cas ; lombaire dans 14 % des cas. Résultats :
   - panier moyen TTC : 96,94 à 104,87 € ;
   - marge avant publicité : central 34,94 à 37,64 € ;
   - après un CAC de 25 € : 9,94 à 12,64 € en central.

   Ce mix n'est pas observé. Le taux « lombaire » est mesuré par oreiller et appliqué par commande, ce qui le sous-estime pour les commandes de plusieurs oreillers.

### 18.7 Ce que disent les compteurs sur les cases cochées

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

> **Note de la rédaction (v2).** Le ratio « lombaire / papillons » de 12 % est calculé **par oreiller** ; le § 17.5 estime que 20 à 40 % des **commandes** contiennent un coussin lombaire, en rapportant les coussins à un nombre de commandes estimé. Les deux chiffres n'ont pas la même base et ne se contredisent pas.

### 18.8 Indices d'expédition depuis l'Asie

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

> **Note de la rédaction (v2).** La « médiane d'environ 12 jours » de la ligne 8 porte sur une dizaine de délais tirés d'un échantillon surtout négatif. Le chapitre 19 (§ 19.8), avec une extraction validée phrase par phrase sur 33 à 34 avis, retient **13 à 13,5 jours** de la commande à la réception. Le dossier retient 13 jours.

**Conclusion [indice].**
- Une partie au moins des commandes semble partir de Chine, par une ligne qui confie le dernier kilomètre à La Poste (Colissimo) ; un avis cite aussi Chronopost.
- La plateforme de retours pourrait être en France.
- Rien ne permet de chiffrer la part d'envois directs.
- Ce constat pèse contre le scénario de coût « bas » du § 6.

### 18.9 Leçons pour Somnila

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

### 18.10 Limites, et ce qu'une session locale ajouterait

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

### 18.11 Annexe du chapitre : verdicts de la contre-vérification

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

---

## 19. La voix du client : ce que les acheteurs de SOYA disent vraiment (enquête complémentaire du 26/09/2026, contre-vérifiée)

*Collecte du 26/09/2026 de 10:56 à 11:25 UTC ; contre-vérification le même jour de 12:00 à 12:25 UTC. Aucune requête à soya-paris.com pour ce chapitre : les avis ont été lus chez Trustpilot, chez Loox et dans les archives Wayback. Chemins des preuves : `avis/` = `/tmp/claude-0/-home-user-shopify/fe1269af-1c62-5b5c-b989-47b117aca262/scratchpad/soya2/avis/` (index dans `README.txt`) ; `contre_voc/` = `…/scratchpad/soya2/contre_voc/` (recalculs `recalc.py` → `recalc_out.txt`, URL rouvertes dans `reouvertures_web_2026-09-26.md`) ; `inv/` = `…/scratchpad/soya2/inv/` (relevés horaires des compteurs de stock). Le fichier `avis/avis_classes.tsv` contient les 2 390 avis au texte intégral (614 Trustpilot et 1 776 Loox), avec leurs thèmes, prêts à être filtrés dans un tableur. Les noms cités sont les pseudonymes publics affichés par les plateformes. Conventions inchangées : [constaté], [déduit], [indice] ou [risque], [non vérifié].*

> **Ce que la contre-vérification a changé.**
> 1. **Fait nouveau : des avis positifs de l'été 2025 ont disparu.** Au moins 85 avis présents sur Trustpilot le 22/08/2025 n'y étaient plus le 15/03/2026. Ce sont presque tous des 4-5 étoiles (environ 62 à 5★ et 25 à 4★), alors que le nombre d'avis 1★ de la même période n'a pas bougé (§ 19.5).
> 2. **Fait nouveau : dans les avis Loox importés, 56 textes reviennent mot pour mot sous 144 noms différents.** Exemple : « Je n'utilise plus que cet oreiller maintenant. », 9 fois. Dans les avis collectés par Loox, les seuls doublons viennent d'une même personne qui publie sur plusieurs produits. La documentation Loox confirme qu'un import porte une date sans heure et que le badge « Vérifié » se coche dans le fichier importé (§ 19.4).
> 3. **Fait nouveau : le lien d'avis Trustpilot arrive avant le colis.** 8 avis déposés par ce lien sont écrits par des clients qui n'ont pas encore reçu leur commande, dont deux à 4★ (§ 19.13). Les règles de Trustpilot, relues, interdisent explicitement les « prize draw entries » et les « refunds » en contrepartie d'un avis (§ 19.9).
> 4. **Corrections de droit.** Les avis relèvent de l'article **L121-4 27° et 28°** du Code de la consommation, pas des 20° et 21° (Légifrance rouvert).
> 5. **Corrections de chiffres.**
>    - Remboursement : l'écart interquartile va d'environ 35 à 90 jours, et non de 45 à 90. 37 des 44 durées sont des attentes encore en cours au moment de l'avis.
>    - Soya 3.0 sur Loox : 133 avis et non 134 (un doublon exact), soit 26 % à 1-2★.
>    - « Même oreiller moins cher ailleurs » : 6 avis explicites, et non 13.
>    - Origine chinoise : 24 à 30 avis selon le motif de recherche (12 à 15 %).
>    - « Service seul contre produit seul » : le résultat dépend du classement des douleurs (49 à 58 % contre 6 à 9 %).
> 6. **Corrections d'interprétation.**
>    - La définition « lien direct vers notre formulaire » s'applique aux avis *sur Trustpilot lui-même*.
>    - Le classement « organique » de la page transparence est cohérent avec l'étiquetage du lien simple, et non contradictoire avec lui.
>    - Des cinq avis « vérifiés » d'août 2025, seuls deux ont été retirés avec certitude avant le 15/03/2026.
>    - L'« évolution des thèmes » n'est pas démontrée : les périodes comparées mélangent des avis à 2★ et des avis à 1★.
>    - Le rythme de 147 oreillers par jour, mesuré la nuit, sous-estimait les ventes : on compte au moins 239 oreillers en 14 heures.
> 7. **Conseil retiré.** Renvoyer les dormeuses sur le ventre vers le Contour 01 (10 cm) n'est pas fondé : ses 10 cm dépassent les 9 cm que les dormeuses sur le ventre de Soya jugent déjà trop hauts.

### 19.1 Ce qu'il faut retenir

1. **La note Trustpilot de 4,3 mélange deux publics qui ne se croisent pas.** Environ 22 avis par jour arrivent par un lien d'évaluation diffusé par la marque : source « BasicLink », niveau « invited », moyenne 4,67, environ 1 % à 1-2★. Environ 2 avis par jour sont spontanés : source « Organic », moyenne 1,56, environ 84 % à 1-2★. Aucun des 485 avis récents ne porte le niveau « verified ». [constaté : `avis/tp/tb_s*_*.json`]
2. **Avant les invitations, la note était mauvaise, et une partie des bons avis de l'été 2025 a disparu.** Au 19/08/2025 : 716 avis, TrustScore 3,1, 56,8 % à 1 étoile. Avant avril 2025, 94 % des avis étaient à 1 étoile. Entre le 22/08/2025 et le 15/03/2026, au moins 85 avis antérieurs au 22/08/2025 ont disparu, presque tous à 4-5★. [constaté ; déduit pour les disparitions]
3. **64 % des avis Loox sont importés** : ils sont horodatés à 00:00:00 UTC et tous notés de 3 à 5 étoiles. 494 d'entre eux sont datés d'avant l'existence du domaine, et 56 textes y sont réutilisés sous 144 noms. [constaté] Ensemble, c'est un **indice fort** d'avis non collectés auprès de clients de la boutique.
4. **La satisfaction réelle récente du Soya 3.0 tourne autour de 3,7/5, avec 26 % d'avis à 1-2 étoiles** (avis Loox horodatés, juillet à septembre 2026). Environ 7 de ces avis négatifs sur 10 portent sur le produit lui-même. La fiche affiche « 4,8/5 – 15 637 avis ». [constaté]
5. **Les plaintes portent d'abord sur l'après-vente.** Délai de livraison médian déclaré : **13 jours**. Attente médiane de remboursement au moment de l'avis : **60 jours**. Retour payé par le client (15 à 17,39 €) alors que la politique annonce « sans frais ». [déduit des avis ; politiques constatées]
6. **Pour Somnila**, le terrain à gagner est l'exécution et l'honnêteté des promesses, pas la note :
   - un délai affiché de la commande à la porte ;
   - le pays d'origine écrit ;
   - l'essai sans renvoi ;
   - un remboursement en 2 jours ouvrés ;
   - un guide de position ;
   - la composition exacte de la housse ;
   - des avis vérifiés demandés à toutes les clientes après la livraison, sans contrepartie (tableau du § 19.14).

### 19.2 Corpus et méthode

| Source | Accès | Période couverte | Avis lus | dont 1-2★ | Texte |
|---|---|---|---|---|---|
| Trustpilot, TrustBox (les 100 derniers avis par note ; les 81 avis 2★ existants) | JSON public du widget : `widget.trustpilot.com/trustbox-data/53aa8912dec7e10d38f59f36?businessUnitId=6708ed15508a2a56ff7d7636&reviewStars=N&reviewsPerPage=100` | 02/11/2024 → 26/09/2026 | 485 | 185 | intégral, avec source de collecte |
| Trustpilot, archives Wayback | pages des 19/08/2025, 22/08/2025, 15/03/2026 (pages 1 à 4, transparence, www) | 15/08/2025 → 15/03/2026 | 129 + statistiques mensuelles | 11 | intégral |
| Trustpilot, WebFetch | `?replies=true` (2 pages), `?stars=1&sort=recency&page=6`, `/transparency` ; contre-vérification : 8 pages d'avis d'août 2025 | 04/12/2025 → 03/05/2026 ; 20/07 → 02/08/2026 | 44 | 44 | 20 cités, 24 résumés par l'outil |
| Loox, widget public | `loox.io/widget/CRe3ATH2rU/reviews/<id produit>`, 102 pages, 1 requête toutes les 1,5 s | 01/01/2023 → 25/09/2026 | 1 776 (tous les avis publiés) | 99 | intégral, date à la seconde |
| **Total** | | | **2 434** | **339** | |

**Méthode.**
- **Thèmes.** Codage par expressions régulières (motifs dans `avis/themes.py`), contrôlé à la main sur des échantillons. Un avis peut relever de plusieurs thèmes. La contre-vérification a mesuré que certains motifs sont trop larges :
  - « livraison » attrape « attentes » et « arrive » : 115 avis au lieu de 130 parmi les 1-2★, avec un motif strict ;
  - « service client » attrape « réponse » : 85 au lieu de 95 ;
  - « hauteur » attrape « pas à la hauteur » : 11 au lieu de 15.
  - Les parts du tableau § 19.6 sont donc des **plafonds**, à lire à –5 à –7 points près. [constaté : `contre_voc/recalc_out.txt`]
- **Délais de livraison et de remboursement.** Extraits automatiquement, puis validés phrase par phrase (`avis/delais_extraits.json`, `avis/rembours_cure.json`). La contre-vérification a refait la validation des délais de livraison de façon indépendante (§ 19.8).
- **Biais d'échantillon.** Les avis Trustpilot à 1 étoile couvrent la période du 03/08 au 25/09/2026. Les 2 étoiles couvrent toute la vie du profil, les 4-5 étoiles seulement les 6 à 16 derniers jours. Les fréquences se comparent donc à l'intérieur d'une même note, pas d'une note à l'autre, ni d'une période à l'autre (§ 19.12).
- **Heures.** Les heures Trustpilot sont reprises telles que publiées (suffixe « Z »). Les identifiants internes des avis, qui encodent un horodatage, donnent systématiquement 2 heures de moins, été comme hiver. L'heure exacte d'un avis n'est donc sûre qu'à 2 heures près ; les écarts entre avis, eux, sont exacts. [constaté : `contre_voc/`]

### 19.3 Trustpilot : une note faite de deux flux

**Quatre relevés dans le temps** [constaté : `avis/wb/a2025-08-19.dec.html`, `a2025-08-22.dec.html`, `a2026-03-15_p1.html` → `businessUnit.activity.replyBehavior`, `filters.reviewStatistics.ratings` ; `avis/tp/tb_s1_fr.json` → `numberOfReviews`]

| Relevé | Total | TrustScore | 1★ | 2★ | 3★ | 4★ | 5★ | Part 1★ | Réponses aux avis négatifs |
|---|---|---|---|---|---|---|---|---|---|
| 19/08/2025 | 716 | 3,1 | 407 | 14 | 24 | 51 | 220 | 56,8 % | 0 % (421 avis négatifs) |
| 22/08/2025 | 742 | 3,2 | 405 | 15 | 24 | 57 | 241 | 54,6 % | 0 % (418) |
| 15/03/2026 | 3 256 | 4,3 | 674 | 43 | 74 | 463 | 2 002 | 20,7 % | 0 % (364 sur 12 mois) |
| 26/09/2026 | 6 280 | 4,3 | 990 | 81 | 121 | 985 | 4 103 | 15,8 % | 4 % |

Entre le 19 et le 22/08/2025, le nombre d'avis 1★ **baisse** de 407 à 405, alors que de nouveaux avis 1★ sont publiés ces jours-là : au moins deux avis 1★ ont donc été retirés en trois jours. La page transparence du 15/03/2026 compte justement 2 avis « taken offline » après un signalement de la marque resté sans réponse du client. Rien ne prouve que ce soient les mêmes. [constaté ; lien non vérifié]

**Avant avril 2025.** La fiche Trustpilot a été créée le 11/10/2024 : c'est l'horodatage contenu dans son identifiant `6708ed15…` [déduit]. Elle a été revendiquée le 24/10/2024 [constaté : `claimedDate`]. Les avis antérieurs au 01/04/2025 s'obtiennent par différence entre les totaux du 15/03/2026 et la fenêtre de 12 mois de la page transparence (données à partir du 01/04/2025). On trouve **366 avis, dont 343 à 1 étoile (93,7 %)**, 10 à 2★, 7 à 3★, 2 à 4★ et 4 à 5★. [déduit de `avis/wb/a2026-03-15_transparency.html` → `starsDistribution` et de `a2026-03-15_p1.html`]

**Mois par mois, d'avril 2025 à mars 2026** (page transparence archivée le 15/03/2026, toutes méthodes) [constaté : `avis/wb/a2026-03-15_transparency.html` → `monthlyDistribution`]

| Mois | Avis | 1★ | 2★ | 3★ | 4★ | 5★ | Part 1-2★ |
|---|---|---|---|---|---|---|---|
| 04/2025 | 11 | 10 | 1 | 0 | 0 | 0 | 100 % |
| 05/2025 | 13 | 13 | 0 | 0 | 0 | 0 | 100 % |
| 06/2025 | 19 | 14 | 0 | 2 | 0 | 3 | 74 % |
| 07/2025 | 81 | 9 | 1 | 10 | 7 | 54 | 12 % |
| 08/2025 | 167 | 21 | 1 | 4 | 23 | 118 | 13 % |
| 09/2025 | 316 | 26 | 4 | 6 | 68 | 212 | 9 % |
| 10/2025 | 422 | 54 | 6 | 11 | 76 | 275 | 14 % |
| 11/2025 | 289 | 51 | 5 | 6 | 40 | 187 | 19 % |
| 12/2025 | 428 | 42 | 3 | 8 | 62 | 313 | 11 % |
| 01/2026 | 432 | 35 | 2 | 5 | 73 | 317 | 9 % |
| 02/2026 | 481 | 43 | 7 | 9 | 78 | 344 | 10 % |
| 01-14/03/2026 | 231 | 13 | 3 | 6 | 34 | 175 | 7 % |

Du 15/03 au 26/09/2026 (195 jours), le solde est de +3 024 avis : 316 à 1★ (10,4 %), 38 à 2★, 47 à 3★, 522 à 4★ et 2 101 à 5★. Cela fait 15,5 avis nets par jour, dont 1,6 à 1 étoile. [calcul sur les relevés ci-dessus ; il s'agit de soldes, les suppressions sont déduites]

**Les deux flux aujourd'hui** (fenêtre des derniers avis de chaque note, au 26/09/2026 10:59 UTC) [constaté : `avis/tp/tb_s{1..5}_{fr,all}.json`, champs `verification.reviewSource` et `verificationLevel` ; recalculé]

| Note | Avis lus | Depuis le | Avis par jour | Par lien de la marque (BasicLink, « invited ») | Spontanés (Organic) |
|---|---|---|---|---|---|
| 5★ | 100 | 20/09/2026 | 15,9 | 99 (15,7/j) | 1 |
| 4★ | 100 | 10/09/2026 | 6,2 | 98 (6,1/j) | 2 |
| 3★ | 100 | 04/10/2025 | 0,28 | 77 | 23 |
| 2★ | 81 (tous) | 02/11/2024 | 0,12 | 23 | 58 |
| 1★ | 104 | 03/08/2026 | 1,9 | 10 (0,18/j) | 94 (1,74/j) |

Ce que cela veut dire :
- **Flux « lien de la marque ».** Environ 22 avis par jour, moyenne 4,67, dont environ 1 % à 1-2 étoiles.
- **Flux spontané.** Environ 2,2 avis par jour, moyenne 1,56, dont environ 84 % à 1-2 étoiles.
- **Ce qu'est le lien.** Le lien public de Soya est `https://fr.trustpilot.com/evaluate/soya-paris.com` (`links.evaluateUrl`). Un tiers décrit le « basic link » comme un lien que l'entreprise diffuse sans limite, qui ne permet de collecter que des avis non vérifiés, étiquetés « Unprompted » et non « Verified » (https://www.stacktome.com/blog/how-will-trustpilots-upcoming-basic-link-invitation-updates-impact-ecommerce-brands, rouvert le 26/09/2026). [source tierce] La phrase du JSON TrustBox (« écrits via un lien direct vers notre formulaire d'évaluation ») est le texte d'aide prévu pour les avis **sur Trustpilot lui-même** (clé `infoTrustpilot`) : elle n'a pas été rédigée pour Soya. [constaté, correction]
- **Ce que montre la page transparence.** Elle classe ces avis comme « organiques » : 5 315 organiques, 1 vérifié et 0 sur invitation sur 12 mois (WebFetch du 26/09/2026, `avis/tp/webfetch_2026-09-26.md`). Ce n'est pas une contradiction : Trustpilot ne compte comme « sur invitation » que ses méthodes vérifiées, et le lien simple tombe dans les avis non sollicités. La page synthèse ne laisse donc pas voir le rôle du lien ; l'étiquette au niveau de chaque avis, oui. [déduit]
- **Invitations automatiques.** Les invitations automatiques de Trustpilot (source AFSv2, avis « vérifiés ») n'ont servi que brièvement : 7 avis comptés de juillet à novembre 2025 [constaté : transparence du 15/03/2026], et 5 avis du 16 au 18/08/2025 aujourd'hui supprimés (§ 19.5).
- **Ordre de grandeur des invitations** [déduit].
  - Les compteurs de stock exposés montrent **au moins 239 oreillers vendus en 14 heures environ** :
    - Soya 3.0, 4 coloris : -9 719 le 25/09 à 21:31 UTC, puis -9 879 le 26/09 à 11:49, soit 160 ;
    - Soya 2.0 : -51 191 le 25/09 à 22:12, puis -51 270, soit 79.
    - [constaté : `soya/pdp3.html`, `soya/web/p_oreiller-soya-2-0.html`, `inv/snap-2026-09-26T114902Z.json`]
  - Même si chaque commande contenait deux oreillers, cela ferait au moins 120 commandes en 14 heures. Face à environ 22 avis par lien en 24 heures, cela donne **au plus un avis par lien pour cinq commandes, et probablement bien moins**.
  - La première version du chapitre calculait 147 oreillers par jour à partir de la seule fenêtre de nuit (75 unités en 12 h 17). La nuit sous-estime le rythme : en 2 heures de fin de matinée, le 3.0 a perdu 85 unités.
  - Réserves : une unité n'est pas une commande ; les compteurs avancent par salves (chapitre 16) ; un compteur peut bouger sans vente.

### 19.4 Loox : ce que le widget montre, et ce qu'il importe

[constaté : `avis/loox_reviews.json`, produit par `parse_loox.py` depuis `avis/loox/*.html` ; dates = attribut `data-time` en ms UTC ; recalculé dans `contre_voc/recalc_out.txt`]

| Sous-ensemble | Avis | 1★ | 2★ | 3★ | 4★ | 5★ | Moyenne | Part 1-2★ | Badge « Vérifié » |
|---|---|---|---|---|---|---|---|---|---|
| Tous les avis publiés | 1 776 | 66 | 33 | 73 | 132 | 1 472 | 4,64 | 5,6 % | 1 473 |
| Horodatés à la seconde (collecte Loox) | 639 | 66 | 33 | 54 | 79 | 407 | 4,14 | 15,5 % | 528 |
| Horodatés à 00:00:00 UTC (import) | 1 137 | 0 | 0 | 19 | 53 | 1 065 | 4,92 | 0 % | 945 |
| dont Soya 2.0 daté avant le 05/09/2024 (création du domaine) | 494 | 0 | 0 | 11 | 42 | 441 | 4,87 | 0 % | 462 |
| Soya 3.0 horodatés, 01/07 → 25/09/2026, sans le doublon exact | 133 | 20 | 15 | 14 | 16 | 68 | 3,73 | 26 % | – |

**Pourquoi « minuit UTC » signifie « importé ».** Le modèle d'import CSV de Loox demande la date « in YYYY-MM-DD format », sans heure. Il contient une colonne `verified_purchase` : « Enter TRUE to display the 'Verified Purchase' label ». [constaté : https://help.loox.io/support/solutions/articles/501000162508-importing-reviews-using-a-custom-file, rouvert le 26/09/2026] Sur un avis importé, le badge « Vérifié » est donc une case cochée par la personne qui importe. Il ne prouve pas un achat. [déduit]

Ce que montrent les imports :
- **Dates impossibles.** Les avis importés du Soya 2.0 commencent le 01/01/2023, vingt mois avant la création du domaine soya-paris.com le 05/09/2024 (`soya/web/rdap.json`) et vingt-deux mois avant la fiche Trustpilot (11/10/2024).
  - 814 avis du 2.0 sont antérieurs au 02/04/2025, date d'ouverture la plus ancienne connue de la boutique.
  - Le premier avis collecté par Loox date du 10/04/2025.
  - 60 des 494 avis d'avant le domaine citent « SOYA » par son nom.
  - Deux avis parlent déjà de versions : « SOYA 2.0 juste parfait, j'avais le 1.0 avant », signé « Laura C. » et daté du 23/07/2023, puis repris le 01/08/2024 sous le nom « David R. » avec une fin ajoutée.
  - [constaté] Si une boutique SOYA antérieure a existé sous un autre domaine, aucune trace n'en a été trouvée. [non vérifié]
- **Textes en série.** 56 textes reviennent mot pour mot dans les imports, sous 144 noms tous différents : [constaté : `contre_voc/recalc_out.txt`]
  - « Je n'utilise plus que cet oreiller maintenant. » : 9 fois, du 01/08/2024 au 05/06/2025, dont 4 fois avec le badge « Vérifié » ;
  - « Mon kiné m'a dit de le garder, ça veut tout dire ! » : 6 fois ;
  - « Livraison rapide et produit bien emballé. » : 6 fois.
  - Dans les avis collectés par Loox, les trois seuls doublons viennent d'une même personne qui publie la même phrase sur plusieurs produits à la même minute (Florent P., Etienne N., Mohamed).
- **Signature propre aux imports.** Le format de nom « Prénom.x » (« Fabien.m », « Julien.r ») apparaît dans 495 avis, tous importés, et jamais dans un avis horodaté. [constaté]
- **Prénoms et accords.** Des avis signés d'un prénom masculin sont écrits au féminin. [constaté] On en compte **14 à 16 dans les imports** selon le motif retenu, et **1 dans les avis horodatés** : « Julien D. », dans la rafale du 25/09/2026 déjà relevée au § 6.6. Exemples :
  - « Quentin T. », 05/01/2023 : « je suis contente » ;
  - « Alexandre T. », 15/02/2024 : « je suis ravie » ;
  - « Hugo.v », 26/06/2026 : « je suis satisfaite ».
- **Les imports continuent.** On compte 19 avis « Prénom.x » en septembre 2026 (le dernier daté du 20/09) et 29 en août. [constaté]
- **Aucune réponse de la marque** n'apparaît dans la grille Loox : le style `item-reply` existe, mais aucun élément ne l'utilise. [constaté]
- **Risque** pour Soya au regard des articles L121-4 **27°** (affirmer que des avis viennent de consommateurs ayant acheté le produit sans avoir vérifié) et **28°** (diffuser de faux avis) du Code de la consommation, et de l'article L111-7-2 (information sur la vérification des avis). [texte constaté : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563107] La qualification relève de la DGCCRF ou d'un juge.

### 19.5 Trustpilot : les mêmes phrases sous d'autres noms, et des avis positifs qui disparaissent

**Les mêmes phrases sur deux plateformes, sous deux identités.** Sept avis Loox du 2.0, importés et antidatés, se composent d'une seule phrase. Cette phrase est mot pour mot la première de sept avis Trustpilot d'août 2025, qui en ajoutent deux autres. Les versions Trustpilot sont signées de noms anglo-saxons, pour la plupart au format « Prénom Initiale. Nom ». Ce sont des comptes à un seul avis, pays « FR ». [constaté : `avis/loox_reviews.json`, `avis/wb/wb_reviews.json` → `consumer.numberOfReviews`, `countryCode` ; statut en ligne : `avis/tp/verif_urls_2026-09-26.tsv`, 404 rouvert pour « Edward J. McKissack » le 26/09/2026]

| Avis Loox (2.0, importé, « Vérifié ») | Avis Trustpilot (source, date publiée, note) | Statut le 26/09/2026 |
|---|---|---|
| « Florian R. », 02/03/2025 : « Excellente qualité et soulagement des douleurs garanti. » | « David M. Simpson », AFSv2, 16/08/2025 20:19, 4★ | 404 |
| « Léa F. », 18/10/2024 : « Confortable et agréable, bien mieux que ce que j'ai pu tester avant. » | « Edward J. McKissack », AFSv2, 16/08/2025 20:44, 5★ | 404 |
| « Léa L. », 25/03/2023 : « Au début sceptique, mais aujourd'hui je ne peux plus m'en passer. » | « Earl D. Phillips », AFSv2, 16/08/2025 20:57, 5★ | 404 |
| « Claire A. », 08/06/2024 : « Idéal pour les personnes souffrant de douleurs cervicales. » | « William L. Lawson », AFSv2, 16/08/2025 20:10, 5★ | 404 |
| « Arthur D. », 19/11/2023 : « Super confortable et pratique, les douleurs ont disparu rapidement. » | « Helene Møller », AFSv2, 18/08/2025 18:05, 4★ | 404 |
| « Baptiste G. », 11/06/2023 : « Parfait dès la première nuit, je ne m'en passe plus. » | « Tonia Stevens », Organic, 18/08/2025 21:08, 5★ | 404 |
| « Sophie L. », 18/06/2024 : « Enfin des nuits tranquilles et réparatrices, merci Soya. » | « Lawrence M. Herron », Organic, 22/08/2025 02:31, 5★ | 404 |

- **Invitation automatique.** Quatre avis « vérifiés » arrivent en 47 minutes, chacun d'un compte à un seul avis, avec des textes repris ailleurs sous d'autres noms : **indice fort** de textes fabriqués et réutilisés.
  - Une invitation automatique AFSv2 suppose que le nom et l'adresse e-mail aient été transmis à Trustpilot depuis le compte de l'entreprise ou une application qui y est connectée. [déduit du fonctionnement général de Trustpilot ; non vérifié dans sa documentation]
  - Dans quel sens la copie s'est faite (de Loox vers Trustpilot ou l'inverse) n'est pas établi.
- **Date du retrait : correction.** La page transparence du 15/03/2026 compte 0 avis automatique en août 2025 et 5 en juillet (1 à 4★, 2 à 5★, 2 à 3★).
  - Si cette page classe les avis par **date d'expérience**, trois des cinq avis tombent en juillet : William L. Lawson (5★, expérience du 28/07), David M. Simpson (4★, 30/07) et Earl D. Phillips (5★, 30/07). Ils correspondent exactement au 4★ et aux deux 5★ automatiques de juillet.
  - Il est donc **seulement certain** qu'Edward J. McKissack et Helene Møller (expérience en août) avaient disparu le 15/03/2026. Les trois autres ont pu disparaître plus tard.
  - Qui les a retirés, et pourquoi, n'est pas établi : Trustpilot, les auteurs ou la marque. [déduit]

**Des avis positifs de l'été 2025 disparus en masse** [déduit : `contre_voc/recalc_out.txt`, à partir de `avis/wb/a2025-08-22.dec.html`, `a2026-03-15_p1.html` et `a2026-03-15_transparency.html`]. Au 15/03/2026, les avis publiés au plus tard fin août 2025 et toujours en ligne se comptent ainsi : le total du jour moins les avis de septembre 2025 à mars 2026 de la page transparence. Ce calcul ne dépend pas du type de date utilisé par la page, puisqu'une date d'expérience précède toujours la publication.

| Note | En ligne le 22/08/2025 | Publiés au plus tard le 31/08/2025 et encore en ligne le 15/03/2026 | Écart |
|---|---|---|---|
| 1★ | 405 | 410 | +5 (avis du 23 au 31/08) |
| 2★ | 15 | 13 | -2 |
| 3★ | 24 | 23 | -1 |
| 4★ | 57 | 32 | **-25** |
| 5★ | 241 | 179 | **-62** |
| Total | 742 | 657 | **-85** |

- Au moins 85 avis qui existaient le 22/08/2025 ont disparu avant le 15/03/2026, soit environ 30 % des avis à 4-5★ de l'époque. Les avis à 1★, eux, sont tous restés.
- Échantillon de 21 avis d'août 2025 rouverts un par un [constaté : `avis/tp/verif_urls_2026-09-26.tsv`, `contre_voc/reouvertures_web_2026-09-26.md`] :
  - lien de la marque (BasicLink) : 8 sur 8 toujours en ligne ;
  - invitations automatiques (AFSv2) : 0 sur 5 ;
  - avis spontanés à 4-5★ : 2 sur 5 ;
  - avis spontané à 1★ : 0 sur 1.
  - Les avis retirés sont donc surtout les « vérifiés » et spontanés du type de ceux du tableau ci-dessus.
- **Indice** d'une purge d'avis positifs jugés douteux. La cause n'est pas établie. Il n'est pas non plus établi que la hausse du TrustScore de 3,1 à 3,2 en trois jours (+21 avis 5★ du 19 au 22/08/2025) reposait sur ces avis.

### 19.6 Les thèmes, classés

Chaque case donne le nombre d'avis qui mentionnent le thème et sa part dans la colonne. Base : Trustpilot 1-2★ = 196, 3★ = 100, 4-5★ = 318 ; Loox horodatés 1-2★ = 99, 4-5★ = 486. [constaté : `avis/themes_out.txt`] Rappel : ces parts sont des plafonds (§ 19.2). Avec des motifs stricts, livraison 1-2★ = 115 (59 %), service client 1-2★ = 85 (43 %), hauteur 1-2★ = 11 (6 %).

| Thème | TP 1-2★ | TP 3★ | TP 4-5★ | Loox 1-2★ | Loox 4-5★ |
|---|---|---|---|---|---|
| Livraison, délais | 130 (66 %) | 51 (51 %) | 116 (36 %) | 27 (27 %) | 72 (15 %) |
| Retour, remboursement | 112 (57 %) | 19 (19 %) | 5 (2 %) | 14 (14 %) | 7 (1 %) |
| Service client | 95 (48 %) | 14 (14 %) | 23 (7 %) | 5 (5 %) | 10 (2 %) |
| « Arnaque », fraude | 65 (33 %) | 7 (7 %) | 1 (0 %) | 5 (5 %) | 3 (1 %) |
| Prix, valeur | 40 (20 %) | 8 (8 %) | 17 (5 %) | 10 (10 %) | 7 (1 %) |
| Écart avec l'annonce (photo, soie, retour gratuit, 48 h) | 39 (20 %) | 9 (9 %) | 18 (6 %) | 10 (10 %) | 14 (3 %) |
| Colis non reçu ou incomplet | 36 (18 %) | 9 (9 %) | 6 (2 %) | 7 (7 %) | 1 (0 %) |
| Douleurs (cou, dos, épaules) | 31 (16 %) | 26 (26 %) | 109 (34 %) | 14 (14 %) | 100 (21 %) |
| Origine, Chine, dropshipping | 30 (15 %) | 7 (7 %) | 1 (0 %) | 6 (6 %) | 2 (0 %) |
| Qualité perçue | 28 (14 %) | 10 (10 %) | 50 (16 %) | 12 (12 %) | 34 (7 %) |
| Confort (mention positive) | 21 (11 %) | 20 (20 %) | 102 (32 %) | 11 (11 %) | 133 (27 %) |
| Housse | 17 (9 %) | 5 (5 %) | 17 (5 %) | 8 (8 %) | 39 (8 %) |
| Hauteur, épaisseur | 15 (8 %) | 12 (12 %) | 4 (1 %) | 10 (10 %) | 10 (2 %) |
| Taille, dimensions, taie | 14 (7 %) | 7 (7 %) | 10 (3 %) | 7 (7 %) | 14 (3 %) |
| Fermeté (dur ou mou) | 13 (7 %) | 16 (16 %) | 14 (4 %) | 5 (5 %) | 14 (3 %) |
| Temps d'adaptation | 12 (6 %) | 19 (19 %) | 39 (12 %) | 8 (8 %) | 37 (8 %) |
| Odeur | 11 (6 %) | 6 (6 %) | 9 (3 %) | 5 (5 %) | 1 (0 %) |
| Inconfort, mal dormi | 8 (4 %) | 2 (2 %) | 0 | 6 (6 %) | 1 (0 %) |
| Chaleur | 6 (3 %) | 4 (4 %) | 6 (2 %) | 1 (1 %) | 4 (1 %) |
| Emballage compressé | 6 (3 %) | 3 (3 %) | 3 (1 %) | 0 | 2 (0 %) |
| Faux avis, avis supprimés (selon les clients) | 6 (3 %) | 0 | 0 | 0 | 0 |

**Service contre produit.** Sur les 196 avis Trustpilot à 1-2 étoiles, le résultat dépend de l'endroit où l'on classe les douleurs, le confort et l'adaptation. [constaté : `contre_voc/recalc_out.txt`]

| Classement | Service seul | Produit seul | Les deux | Aucun des deux (« arnaque » seul) |
|---|---|---|---|---|
| Douleurs, confort et adaptation hors produit (première version) | 113 (58 %) | 12 (6 %) | 55 (28 %) | 16 (8 %) |
| Douleurs, confort et adaptation dans le produit | 97 (49 %) | 17 (9 %) | 71 (36 %) | 11 (6 %) |

Dans les deux cas, **environ 85 % des avis Trustpilot à 1-2★ parlent de logistique, de retour ou de service client**. Sur Loox, où les avis sont demandés après l'achat, le produit pèse davantage : pour le Soya 3.0, environ 7 avis à 1-2★ sur 10, de juillet à septembre 2026, parlent du produit. Trustpilot recueille surtout la colère liée à l'après-vente, Loox la déception liée au produit. [déduit]

### 19.7 Le produit, vu par ceux qui dorment dessus

Comptes recalculés sur Trustpilot et les avis Loox horodatés, à 1-3 étoiles sauf mention. [constaté : `avis/tp_corpus.json`, `avis/loox_reviews.json`]

- **Hauteur : trop haut pour la plupart, trop bas pour quelques-uns.** 15 avis disent « trop haut » ou « trop épais » ; 6 disent explicitement « trop bas », « trop plat » ou « trop fin ».
  - Anne Marie, 3★, 03/08/2026 : « celui ci est trop haut, même dans sa partie basse. Le même oreiller avec une partie beaucoup plus basse serait un plus à envisager. »
  - Franck C., Loox 1★, 03/09/2026 : « La partie en creux pour le cou est trop haute, même dans côté le plus bas. »
  - Natacha Biehler, 2★, 22/09/2026 : « Beaucoup trop bas. ( les 2 côtés ) ».
  - Lena Salame, 2★, 28/05/2026 : « Pour moi, trop bas si je dors de côté. Trop haut si je dors sur le centre. Ok sur le dos. »
- **Position de sommeil.** Les dormeuses sur le ventre sont les plus déçues, puis celles qui dorment sur le côté.
  - Cindy, Loox 1★, 17/09/2026 : « il est beaucoup trop haut pour une position sur le ventre ».
  - Carine Dijkhoff, 2★, 26/08/2026 : « bien adapté pour la position dorsale mais pas du tout confortable en ventrale ». [constaté]
- **Fermeté.** Environ 25 avis à 1-3★ le trouvent « dur », « ferme » ou « rigide ». Environ 8 à 11 le trouvent « trop mou » ou disent qu'il « se tasse » ; les phrases du type « ni trop dur ni trop mou » sont exclues.
  - William, 2★, 16/09/2026 : « J'ai super mal à la nuque maintenant. Pas du tout confortable. Le coussin est trop haut et trop dure. »
  - Amelie, 2★, 21/06/2026 : « L'oreiller était super les 2 premiers mois. Progressivement, il devient plus souple et ne soutient plus la nuque par la suite ». [constaté]
- **Odeur.** 22 à 23 avis à 1-3★.
  - regis B, 1★, 25/09/2026 : « Très mauvaise odeur de plastique au déballage de l'oreiller qui ne se lave pas ».
  - Stephanie, 2★, 21/04/2026 : « Je n'arrive pas à me débarrasser de la très mauvais odeur suite au déballage il y a déjà un mois, même en laissant l'oreiller dehors ». [constaté]
- **Chaleur.**
  - Isabelle Lievin, 3★, 13/05/2026 : « la matière me fait l impression d être dans une étuve tellement je transpire ». [constaté]
- **Housse et matières.** Une vingtaine d'avis parlent de synthétique ou de polyester, mais sur deux sujets distincts.
  - **Housse ou taie de l'oreiller : environ 9 avis.** La fiche 3.0 annonce une « housse amovible, en fibre de bambou, douce et hypoallergénique » [constaté : `soya/web/pdp3_fulltext.txt`].
    - Michael, Loox 2★, 16/09/2026 : « il ne s'agit clairement pas d'une housse en fibre de bambou, l'étiquette indique 85% polyester et 15% elastane ».
    - Karen A., Loox 1★, 25/06/2026 : « housse en synthétique pas en bambou… ».
  - **Draps, housses de couette et taies vendus comme soie : environ 10 avis.**
    - Helene Milan, 1★, 21/09/2026 : « soit-disant en "soie naturelle de mûrier" [...] En fait, c'est du POLYESTER ».
    - Professeur Haddioui, 1★, 11/08/2026, parle d'« étiquettes indiquant explicitement 100 % polyester ».
  - **Coupe et fermeture.**
    - Lena Salame demande que « la fermeture éclair soit du côté court ».
    - Caroline HUILLE, 1★, 19/09/2026, trouve la housse « trop petite et/ou mal coupée » ; on lui a proposé « une réduction de 20% » pour en racheter une.
  - [constaté pour les textes ; la composition réelle n'a pas été vérifiée]
  - **Risque** au regard de l'article L121-2 (caractéristiques essentielles), si l'étiquette décrite par les clients est exacte.
- **Douleur aggravée.** Environ 14 avis à 1-3★.
  - Nadine Duvivier, 2★, 05/07/2026 : « mes douleurs cervicales ce sont aggravées avec cet oreiller ».
  - Sandrine Camboulives, 3★, 18/02/2026 : « j'ai du aller voir mon kiné le lendemain ».
  - Cath, 1★, 24/09/2026 : « mon mari a des fourmis dans les bras et moi mal aux cervicales ». [constaté]
  - La fiche promet de soulager « dès la première nuit » (§ 1, point 8) : c'est cette promesse qui transforme la déception en colère. [déduit]
- **Ce que louent les clientes satisfaites.** Le soulagement : 34 % des avis 4-5★ Trustpilot mentionnent les douleurs, presque toujours pour dire qu'elles diminuent. Viennent ensuite le maintien, la fraîcheur du tissu et l'usage alterné des deux côtés.
  - GUILLET Jérôme, 5★, 25/09/2026 : « Je n'ai pas forcément été rassuré les premiers soirs [...] mes doutes se sont évaporés au bout de 3 jours » ; « J'utilise le côté le plus haut lorsque je ressens une gêne. »
  - Nathalia Durand, 5★, 25/09/2026 : « Nous avons mis un moment à nous adapter , mais sur les conseils de soya nous avons continué ».
  - [constaté] Réserve : 95 % de ces avis 4-5★ viennent du lien de la marque, et environ un sur cinq est écrit après quelques nuits seulement (§ 19.13).

### 19.8 Livraison : ce qui est promis, ce qui est reçu

| | Valeur | Preuve |
|---|---|---|
| Promesse écrite (politique d'expédition) | « Temps de traitement : 1 jour ouvré / Livraison Standard : 3 à 6 jours ouvrés » | [constaté : `soya/pol/shipping-policy.txt`] |
| Promesse sur la fiche | « Nous traitons votre commande sous 1 à 2 jours ouvrés. La livraison s'effectue ensuite en 3 à 6 jours, selon votre localisation. » | [constaté : `soya/web/pdp3_fulltext.txt`] |
| Promesses citées par les clients | « 3 à 5 jours », « 5j ouvrés », « 3 jours ouvrés », « livraison sous 48h » (Cindy, Loox 1★, 17/09/2026) ; express payé « 1 a 2 jours ouvrés » | [constaté : avis] |
| Délai réel déclaré, de la commande à la réception | médiane **13 jours** (33 avis, première validation) ; 13,5 jours (34 avis, validation indépendante de la contre-vérification) ; quartiles d'environ 8-9 et 21 jours ; extrêmes 4 et 42 jours ; 5 à 6 livraisons en 7 jours ou moins ; **16 à 18 en 14 jours ou plus** | [déduit : `avis/delais_extraits.json`, validation manuelle phrase par phrase] |
| Encore en attente au moment de l'avis (environ 15 avis) | médiane 14 jours, jusqu'à 90 jours | [déduit] |
| Express payé et non tenu | au moins 6 cas : Antoine Maloisel (« sous 2jours », livré au bout d'une semaine), Lena (plus de 14 jours), Cédric Leterrier et Corentin Pipault (deux semaines), Natacha Biehler (8 jours), Rosye (résumé WebFetch) | [constaté] |

- Cath, 1★, 24/09/2026 : « la livraison que vous indiquez rapide : 13 jours, rapide ? »
- virginie, 1★, 12/09/2026 : « Colis reçu 12j après la commande au lieu des 5j ouvrés. »
- Marie-océane Perro, 3★, 11/09/2026 : « Commender le 18 aout resu le 10 septembre presque 1 mois d'attente arriver de chine ».
- Jeremie Cros, 1★, 25/09/2026 : « le suivi indique une nouvelle ville d'Europe toute les semaines ».
- Audrey, 2★, 19/09/2026 : « Soi disant envoyée le 8 septembre avec un numéro colissimo non pris en charge. »
- **Le retard pénalise même les clientes satisfaites.** Parmi les 117 avis Trustpilot à 4 étoiles, 18 évoquent un délai trop long et 7 une livraison rapide. Ennerick Maréchal, 4★, 26/09/2026 : « Le produit me convient mais le délai de livraison n'a pas du tout était respecté ». [constaté]
- **Encaissement immédiat.** Au moins quatre clients reprochent un paiement débité à la commande alors que le colis n'est pas parti : Sonja, Murielle Amon, Arnaud L. (Loox) et Magali Rolland (résumé WebFetch). Sonja, 1★, 25/09/2026 : « encaisse immediatement, mais le statut n'a pas change ». [constaté]

*Réserve* : les clientes citent un délai surtout quand il les a marquées. La médiane de 13 jours décrit les avis, pas l'ensemble des commandes.

### 19.9 Retours et remboursements

| Ce que dit Soya | Ce que disent les clients | Preuve |
|---|---|---|
| « Essayez votre oreiller Soya pendant 30 jours . Si vous n'êtes pas entièrement satisfait, vous pouvez le retourner **sans frais** » | Environ 22 avis Trustpilot à 1-2★ disent avoir payé ou dû payer le retour ; montants cités de 15 € à 17,39 € (Agnès, 2★, 23/03/2026 ; Boyer l, Seb M.) ; Client Monsieur DF, 1★, 03/09/2026 : « "retour gratuit sous 30 jours". Déjà. On a dû payer le retour » | [constaté : `soya/pol/shipping-policy.txt` ; avis] |
| « votre article doit être dans l'état où vous l'avez reçu et dans son emballage d'origine » | Sidonie Bignaux, 3★, 21/01/2026 : « l'emballage d'origine c'est : sous vide et dans un sac en plastique (que l'on a forcément déchiré lors de l'ouverture) » | [constaté : `soya/pol/refund-policy.txt`] |
| « le remboursement sera automatiquement appliqué [...] dans un délai de quelques jours » | Sur 44 avis donnant une durée : **médiane 60 jours**, quartiles d'environ 35 et 90 jours ; 30 cas à 60 jours ou plus, **15 à 90 jours ou plus**, maximum 180 jours. Ce sont surtout des **attentes encore en cours** : 37 sur 44 n'étaient pas remboursés au moment de l'avis, donc le délai final est plus long. Le point de départ varie (retour, demande, accord). Les 7 remboursements finalement obtenus et datés ont pris de 30 à 180 jours. | [déduit : `avis/rembours_cure.json` ; recalcul `contre_voc/recalc_out.txt`] |
| « 30 nuits d'essai — Satisfait ou remboursé » | Nico, 1★, 03/08/2026 : « Le site met bien en avant les 30 nuits d'essai, mais si jamais vous souhaitez le retourner [...] le parcours du combattant commence ! » | [constaté] |

**Le remboursement débloqué par la pression publique.** Au moins sept clients disent n'avoir été remboursés qu'après un avis négatif, une mise en demeure ou un signalement : EBREL (02/2025), Sven C. (10/2025), Dylan Almeida (03/2026), Agnès (03/2026), Nadine Callau (04/2026), Fabrice Sanieres (04/2026) et Mickael.L (05/2026).
- Dylan Almeida, 2★, 09/03/2026 : « Si vous voulez vous faire rembourser, n'hésitez pas à multiplier les mauvais avis, ya que comme ça que vous ferez pression sur eux. »
- D'autres signalent des demandes répétées de pièces : « J'ai du envoyer les documents demandés 4 ou 5 fois » (olivia, 1★, 06/05/2026, relevé WebFetch).
- Au total, 13 avis à 1-2 étoiles citent une banque, la DGCCRF, SignalConso ou une plainte. [constaté]

**« Tirage au sort ».** Trois clients distincts en parlent : [non vérifié : aucun accès aux e-mails]
- David, 3★, 10/12/2025, **avis déposé par le lien de la marque alors que sa commande du 29/11 n'était pas arrivée** : « On m'envoie un message pour me dire que je vais avoir un remboursement totale sur tirage au sort, un gag. »
- Lyns91, 29/07/2026, évoque une « loterie » (résumé WebFetch).
- Mathild M., 1★, 24/04/2026 : « les avis 5* que vous voyez, c'est parce que ils envoient des newsletters pour demander des bons avis en échange d'un remboursement de quelques commandes tirées au sort chaque mois. »

Les règles de Trustpilot pour les entreprises interdisent d'« Offer incentives in connection with writing or editing reviews », et citent expressément « prize draw entries, refunds » [constaté : https://corporate.trustpilot.com/legal/for-businesses/guidelines-for-businesses/feb-2026]. Si le fait était établi, ce serait un **risque** au regard de ces règles et des obligations d'information sur les avis (article L111-7-2 du Code de la consommation).

### 19.10 Service client et réponses de la marque

- **Trustpilot.** Aucune réponse au 19/08/2025 (0 sur 421 avis négatifs) ni au 15/03/2026 (0 sur 364 sur 12 mois). [constaté : `avis/wb/`, `replyBehavior`] Au 26/09/2026, on compte **24 réponses au total**, toutes à des avis 1 étoile, publiées le 20/04, le 25/04 et le 05/05/2026. Elles portent sur des avis datés du 04/12/2025 au 03/05/2026, dont plusieurs avis anciens « actualisés » en avril. [constaté : `avis/tp/webfetch_2026-09-26.md`, page `?replies=true` rouverte le 26/09/2026]
  - Elles reprennent **un seul modèle** : « À ce stade, nous ne disposons malheureusement pas de suffisamment d'informations pour identifier votre dossier [...] écrire directement à info@soya-paris.com [...] L'équipe SOYA ».
  - Aucune réponse n'a suivi. C'est ce qui produit les « 4 % » affichés.
  - HD, 1★ (avis du 02/02/2026, actualisé le 25/04), l'avait prévu : « ils formuleront une réponse qui prétend ne pas pouvoir nous identifier ALORS QUE TOUTES LES INFORMATIONS NECESSAIRES SONT DÉJA FOUNIS. »
- **Signalements.** La marque a signalé 23 avis : 22 à 1★ et 1 à 2★. Ces signalements existaient déjà au 15/03/2026 : 21 avis remis en ligne, 2 retirés faute de réponse du client. Aujourd'hui, 86 % des signalements sont jugés non valides et 3 avis sont retirés. [constaté : `avis/wb/a2026-03-15_transparency.html` → `reportingStatistics` ; transparence actuelle]
- **Loox.** Aucune réponse visible. [constaté]
- **Canal.** E-mail uniquement, pas de téléphone. Cath, 1★ : « pas de téléphone pour les joindre il faut faire les demandes par mail ».
- **Réponses par IA.** Au moins 6 avis parlent d'IA ou de réponses automatiques. [constaté]
  - Sven C., 2★, 16/10/2025 : « J'ai reçu des réponses générées par IA en boucle à tous mes emails. »
  - Audrey, 2★ : « Une IA répond toujours gentiment mais rien ne se passe. »
- **Gestion des avis.** [constaté : affirmations de clients]
  - Sven C. : « Le même service client m'a ensuite relancé plusieurs fois pour que je change cet avis ». Les règles de Trustpilot interdisent de « Pressure [...] reviewers to write, edit, or delete a review ».
  - Audrey : « je ne peux plus mettre un avis sur leur site Facebook. Ils m'ont bloquée. »

### 19.11 « Made in China », Temu, dropshipping : la découverte de l'origine

24 à 30 avis Trustpilot à 1-2★ sur 196 (12 à 15 %) parlent de la Chine, de Temu, d'AliExpress ou de dropshipping : 24 avec un motif strict, 30 si l'on inclut « Amazon », « USA ». [constaté : `contre_voc/recalc_out.txt`] Une douzaine d'avis jugent qu'on trouve l'équivalent moins cher ailleurs. **Six** disent avoir vu le **même** oreiller moins cher, dont trois avec un prix. [constaté]
- Alexandre M, 1★, 15/09/2026 : « Dropshipping. Oreiller à 12€ sur Temu ».
- MHS, 2★, 07/02/2026 : « je vois exactement le même modèle à 15€ sur Ali express ».
- Lucas, 1★, 10/09/2026 : « 20€ au lieu de 69€ » sur AliExpress.
- Les trois autres : Jeremy H (TikTok Shop, « 2 fois moins cher »), Goetz Christophe (AliExpress, « deux fois moins chère ») et Laetitia P. (Loox, « le même » sur Amazon).
- Didier GIMEL, 3★, 10/09/2026, invité par le lien de la marque : « il n'y a aucune étiquette de "made in" et la livraison de plus de 10 jours fait penser à une chinoiserie. »
- Ludovic Baron, 1★, 25/09/2026 : « le packaging indique la provenance de Chine ».
- Florent P., Loox 1★, 23/09/2026, sur trois produits : « Produit chinois qui essaie de masquer sa provenance ».
- Seb M., 1★, 22/09/2026 : « l'entreprise est située au US ».
- Trois avis citent des frais bancaires pour achat à l'étranger. devaux, 3★, 30/10/2025 : « je pensais que le produit arriverait vite, venant de Paris, mais j'ai eu LA GROSSE SURPRISE de devoir payer des frais supplémentaires,non indiqués ».

Ce qui déclenche la colère, c'est l'écart entre « Paris » et ce que la cliente découvre, pas l'origine en elle-même. [déduit]

### 19.12 Évolution dans le temps

| Période | Ce qui se passe | Chiffres | Preuve |
|---|---|---|---|
| 09/2024 – 03/2025 | Domaine créé le 05/09/2024 ; fiche Trustpilot créée le 11/10/2024 et revendiquée le 24/10/2024 | 366 avis, dont 94 % à 1★ | [déduit : `avis/wb/`] |
| 04 – 06/2025 | Peu d'avis, presque tous négatifs ; premier avis collecté par Loox le 10/04/2025 | 36 sur 43 à 1-2★ | [constaté : transparence ; Loox] |
| 07 – 08/2025 | Arrivée des avis 4-5★ par le lien ; 5 invitations automatiques ; les 7 avis « copiés » (§ 19.5) | 1-2★ : 12-13 % ; TrustScore de 3,1 à 3,2 en 3 jours (+21 avis 5★) | [constaté] |
| 08/2025 – 03/2026 | Disparition d'au moins 85 avis antérieurs au 22/08/2025, presque tous à 4-5★ | 5★ : -62 ; 4★ : -25 | [déduit, § 19.5] |
| 09/2025 – 02/2026 | 300 à 480 avis par mois | 1-2★ : de 9 à 19 % (pic en 11/2025) | [constaté] |
| 03 – 05/2026 | Vague de plaintes sur les remboursements ; 24 réponses types du 20/04 au 05/05 | parmi les 24 avis ayant reçu une réponse, 19 portent sur un remboursement ou des frais non remboursés, 3 sur une commande non reçue ou sans suivi | [constaté] |
| 06 – 09/2026 | Environ 24 avis Trustpilot par jour, dont environ 1,9 à 1★ ; hausse des 1-2★ sur Loox ; les imports « Prénom.x » reprennent (39 en juin) | Loox 1-2★ (avis horodatés) : 2 % (T4 2025, T1 2026) → 14 % (T2 2026) → **28 % (T3 2026)** | [constaté : `avis/loox_reviews.json`, `avis/tp/`] |

En volume, les avis 1 étoile passent d'environ 1,3 par jour (décembre 2025 à février 2026 : 120 avis en 90 jours) à 1,9 par jour (août-septembre 2026). Leur part baisse seulement parce que les invitations augmentent plus vite. [constaté pour les volumes ; déduit pour l'explication]

**Correction.** La première version comparait la part des thèmes (remboursement : 33 % → 44 % → 64 % ; service client : 28 % → 55 %) entre trois périodes. Ces périodes ne sont pas comparables. Juillet-décembre 2025 compte 24 avis, dont 20 à 2★ ; janvier-juin 2026, 39 avis, dont 33 à 2★ ; juillet-septembre 2026, 121 avis, dont 104 à 1★. Le widget ne donne en effet que les 100 derniers avis 1★. L'écart mesure donc surtout la différence entre avis 2★ et avis 1★, pas une évolution. [constaté : `contre_voc/recalc_out.txt`]

### 19.13 Avis sollicités ou spontanés : ce qu'on peut dire sans accuser

- **Ce que dit Trustpilot lui-même.** 99 % des 5★ et 98 % des 4★ récents viennent du lien de la marque ; 90 % des 1★ récents sont spontanés. Ce n'est pas une déduction : c'est la métadonnée de chaque avis. [constaté]
- **Le lien arrive avant le colis.** 8 avis déposés par le lien de la marque sont écrits par des clients qui n'ont pas encore reçu leur commande. [constaté : `contre_voc/recalc_out.txt`]
  - Deux sont à 4★ : Nigel CARTHERY, 23/09/2026 : « Toujours pas reçu de commande [...] Pour le moment service client au top » ; Jean David BIGONI, 19/09/2026 : « j'attends depuis 10 jours la livraison qui n'arrive pas ».
  - Les autres : David (3★, 10/12/2025), Guillaume Daraspe, Cristobal Corro, Indy Merea, Ludivine Murzeau et redouane fellouh.
  - Le lien part donc, au moins pour une partie des clients, avant la livraison, et pas après l'essai de 30 nuits. [déduit]
- **Des avis écrits trop tôt.** 19 à 24 % des avis à 4-5 étoiles collectés par le lien disent « pour l'instant », « premières nuits » ou « pas encore essayé ». [constaté : `avis/tp_corpus.json`] Les avis par lien sont plus courts (138 caractères en médiane, contre 338 pour les avis spontanés). Mais cet écart vient surtout de la note : un avis négatif est long quelle que soit sa source (302 caractères pour les 1-2★ par lien). Ce n'est donc pas un indice en soi.
- **Deux canaux, deux résultats.** Sur Loox, où les demandes d'avis suivent l'achat, 28 % des avis horodatés du 3e trimestre 2026 sont à 1-2 étoiles. Dans le flux Trustpilot par lien, environ 1 %. [constaté] Deux explications sont compatibles avec cet écart :
  - le lien part avant que la déception n'apparaisse, ce qui est désormais constaté pour une partie des clients ;
  - le lien ne part pas vers toutes les clientes, ce qui n'est pas prouvé.
  - Les règles de Trustpilot interdisent de « Be selective with invitations ». [indice pour la seconde explication]
- **Des acheteurs qui doutent.** [constaté]
  - Emilie, Loox 1★, 24/06/2026 : « je voyais de bon avis mais desfois à se demander si ils sont tous réels ».
  - Sandra Martin, 2★, 16/01/2026 : « méfiez vous des commentaires sur leur site ».

### 19.14 Attente client → ce que Somnila doit promettre et tenir

**Références Somnila.**
- Neck 01 : 69,90 €, 62 × 42 cm, deux hauteurs 13 / 11 cm, housse incluse. Contour 01 : 60 × 35 × 10 cm, une seule hauteur. Données du devis fournisseur [build/PRODUCTS.csv, lignes 09 et 12].
- Pages actuelles :
  - livraison en 6-10 jours, « Delivery times are counted from the day the parcel leaves » ;
  - essai de 30 nuits sans renvoi (« you don't need to send the pillow back ») ;
  - remboursement « as soon as we confirm the request by email » ;
  - odeur : « a light smell for the first hours ».
  - [constaté : build/pages/shipping-delivery.html, returns-warranty.html, faq.html]

| # | Attente client (ce que montrent les avis) | Ce que Soya fait (preuve) | Ce que Somnila promet, et où | Comment le tenir (indicateur) |
|---|---|---|---|---|
| 1 | Recevoir dans le délai affiché, compté depuis la commande | Promet 1 à 2 jours de traitement puis 3 à 6 jours ; médiane déclarée 13 jours (§ 19.8) | **Fiche, FAQ, e-mail de confirmation** : un délai de la commande à la porte (« livré en X à Y jours après votre commande »), calé sur les 20 premières commandes réelles. Retirer « counted from the day the parcel leaves » | 90 % des commandes livrées dans le délai affiché ; publier le délai réel médian chaque trimestre |
| 2 | Un express qui soit vraiment express | Supplément payé, 7 à 15 jours de délai (§ 19.8) | **Paiement** : pas d'option express tant qu'elle n'est pas tenue ; sinon remboursement automatique du supplément en cas de retard | 0 réclamation « express » |
| 3 | Un suivi réel, avec le transporteur nommé | Transporteur masqué (ParcelPanel, § 8.6) ; « une nouvelle ville d'Europe toute les semaines » | **E-mail d'expédition** : transporteur, lien direct, étapes attendues. **Service client** : message proactif si aucun scan en 72 h | Part des colis sans scan à 72 h ; délai de réponse |
| 4 | Savoir d'où vient le produit | « Paris » affiché, aucune étiquette d'origine ; 12 à 15 % des 1-2★ découvrent la Chine | **Fiche, FAQ, page livraison** : écrire le pays de fabrication, par exemple « Fabriqué en Chine par notre partenaire, expédié directement depuis son entrepôt ». La page livraison actuelle dit « made and packed by our manufacturing partner » sans nommer le pays | 0 avis « découverte de l'origine » |
| 5 | Comprendre pourquoi payer 69,90 € et non 12 € sur Temu | 6 avis disent avoir vu le même oreiller de 12 à 20 € | **Fiche** : ce que le prix paie, de façon vérifiable (housse incluse, essai sans renvoi, remboursement en 2 jours ouvrés, service client humain) ; aucune fausse origine ni fausse remise | Taux de remboursement à 30 nuits ; mentions « prix » dans les avis |
| 6 | Pouvoir vraiment essayer 30 nuits | « Emballage d'origine » exigé pour un oreiller livré sous vide ; retour payé par le client | **Fiche, près du bouton d'achat** : « 30 nuits à partir de la livraison. Il ne vous convient pas ? Un e-mail suffit, vous gardez l'oreiller. » (déjà écrit dans returns-warranty, à remonter sur la fiche) | Délai médian entre la demande et le remboursement |
| 7 | Être remboursée vite, sans avoir à relancer | 37 attentes sur 44 encore en cours au moment de l'avis, médiane 60 jours ; remboursement obtenu après un avis négatif (§ 19.9) | **Politique et FAQ** : « remboursement émis sous 2 jours ouvrés après votre e-mail », au lieu de « as soon as we confirm » | 100 % en 5 jours ouvrés ou moins ; 0 relance nécessaire |
| 8 | Savoir qui paie le retour, avant l'achat | « Sans frais » écrit, 15 à 17,39 € payés ensuite | **Page retours** : oreiller, aucun renvoi ; accessoires, qui paie et combien, écrit avant l'achat | 0 frais surprise |
| 9 | Parler à un humain qui connaît son dossier | E-mail seul, réponses par IA, réponse type unique, 4 % de réponse | **Service client** : réponse signée d'un prénom, délai affiché (24 h ouvrées), aucune réponse type. **Avis** : réponse publique à 100 % des avis négatifs avec les faits du dossier ; ne jamais demander de modifier un avis | Taux de réponse aux avis ; délai de première réponse |
| 10 | Savoir si l'oreiller convient à SA position | Trop haut surtout (15 avis contre 6 « trop bas ») ; dormeuses sur le ventre déçues même par le côté de 9 cm | **Fiche et guide** : « Neck 01 : dos et côté. » Écrire noir sur blanc qu'**aucun oreiller Somnila actuel n'est conçu pour le ventre** : le Contour 01 (10 cm d'après le devis) est plus haut que les 9 cm jugés trop hauts chez Soya. Hauteurs 13 et 11 cm mesurées sur échantillon et dites ; un test en 2 questions | Part des remboursements pour « hauteur » |
| 11 | Connaître la fermeté avant d'acheter | Jugé trop dur (environ 25 avis) et trop mou ou tassé (8 à 11) | **Fiche** : fermeté sur une échelle et densité de la mousse, **à obtenir du fournisseur** (non vérifié à ce jour) ; ne promettre la tenue dans le temps que si elle a été testée | Mentions « dur » ou « mou » dans les retours |
| 12 | Pas d'odeur, ou savoir combien de temps elle dure | Odeur de plastique qui dure jusqu'à un mois | **FAQ** : remplacer « a light smell for the first hours » par une durée vérifiée sur échantillon, avec cette consigne : « aérez 24 à 72 h ; si l'odeur persiste après 7 nuits, on rembourse ». Certification seulement si elle existe | Réclamations « odeur » |
| 13 | Une housse conforme à ce qui est dit | « Fibre de bambou » annoncée, étiquette « 85% polyester et 15% elastane » selon un client ; « soie » annoncée, polyester selon d'autres | **Fiche** : composition exacte en %, **recopiée de l'étiquette cousue** (la donnée du devis, « tissu rafraîchissant », ne suffit pas) ; photo de l'étiquette et de la fermeture ; housse dans le même colis, ou deux numéros de suivi si l'envoi se fait en deux colis | 0 « matière non conforme », 0 « commande incomplète » |
| 14 | Savoir qu'il faut quelques nuits d'adaptation | 12 % des 4-5★ et 19 % des 3★ en parlent | **Fiche et e-mail à J+3** : « comptez 3 à 7 nuits ; si la tête bascule, passez sur 11 cm » | Taux de conservation après l'essai |
| 15 | Ne pas se voir promettre de guérison | « Soulage dès la première nuit » ; environ 14 avis de douleur aggravée | **Partout** : aucune promesse médicale (règle Somnila) ; « en cas de douleur persistante, parlez-en à un professionnel » ; l'essai couvre le cas où ça ne convient pas | 0 allégation de santé |
| 16 | Des avis vrais | 64 % d'avis Loox importés, textes en série ; lien Trustpilot envoyé avant la livraison ; indices de textes copiés ; « tirage au sort » allégué | **Avis** : invitation automatique vérifiée envoyée à **toutes** les commandes à J+35 après la livraison, sans filtre ; **aucune contrepartie, ni tirage au sort, ni remboursement, ni code promo** (règles Trustpilot) ; affichage de la note réelle et de la répartition ; aucun import | Part des commandes invitées = 100 % ; répartition affichée |

À ajouter aux lignes 1 et 7 : dire au moment de l'achat que le paiement est débité à la commande, ou envisager la capture du paiement à l'expédition. Au moins quatre clients de Soya reprochent un encaissement immédiat pour un colis parti bien plus tard. [déduit]

### 19.15 Limites

- **Trustpilot.** Au-delà de la page 10, les pages exigent un compte (`?stars=1&sort=recency&page=20` et `page=40` affichent la page de connexion). Les avis 1 étoile d'octobre 2024 à juillet 2026 ne sont donc connus que par les chiffres agrégés et deux archives. Les pages résumées par WebFetch (juillet 2026, 4 réponses) ne sont jamais citées entre guillemets.
- **Codage.** Les thèmes sont repérés automatiquement et certains motifs sont trop larges (§ 19.2) : les parts sont des plafonds.
- **Avis retirés.** La cause des disparitions (§ 19.5) n'est pas établie : Trustpilot, les auteurs ou la marque. On ignore aussi quel type de date la page transparence utilise pour ses mois. Le « tirage au sort » n'est rapporté que par des clients.
- **Heures Trustpilot.** Elles sont sûres à 2 heures près (§ 19.2).
- **Compteurs de stock.** Ils donnent un plancher de ventes, pas un nombre de commandes (§ 19.3).
- **Session locale (« Claude Code local ferait-il mieux ? »).** C'est le même modèle, avec la même méthode : sur ce volet, l'analyse ne serait pas meilleure. Les JSON publics (TrustBox, widget Loox, Wayback), qui donnent la source de chaque avis, sont lisibles d'ici comme d'une machine locale. Une session locale n'apporterait que l'accès :
  - une IP française, donc les pages Trustpilot sans le défi anti-robot et sans le résumé imposé par WebFetch ;
  - le compte Trustpilot **déjà existant** de l'utilisateur, s'il décide de s'en servir, pour la pagination profonde des avis 1★ ;
  - les commentaires Facebook et Instagram ;
  - un suivi des compteurs de stock sur plusieurs jours.

---

## 20. Laboratoire d'animation : les mouvements filmés image par image (26/09/2026)

*Chapitre versé au dépôt le 26/09/2026 (`build/analyse/soya-paris/v2/motion_lab.md`, preuves dans `build/analyse/soya-paris/preuves/motion/`) ; il n'a pas fait l'objet d'une contre-vérification séparée. Il complète les § 4.1 à § 4.6 de la Partie I.*

**Méthode.** Chaque interaction a été enregistrée avec le screencast de Chrome (protocole DevTools `Page.startScreencast`). Chrome n'émet une image que lorsque l'écran change, et chaque image est horodatée : on obtient donc le vrai rythme d'affichage, pas une vidéo à cadence fixe. En parallèle, un échantillonneur tournait à chaque image rendue (`requestAnimationFrame`) et relevait `opacity`, `transform`, `clip-path`, `visibility` et la position de l'élément animé. Pour chaque transition détectée, la durée est mesurée de la première à la dernière image qui change. La courbe réelle est ensuite comparée par moindres carrés à `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `(.86,0,.07,1)` et `(.22,1,.36,1)`.

**Conditions.** Ordinateur 1440 × 900 et mobile 390 × 844, marché France (EUR), vidéos bloquées, SVG de la galerie remplacés par des rectangles gris (ils font planter le navigateur de capture, voir § 10 et § 14 ; renvoi précisé en v2). Enregistrements du 26/09/2026 entre 09:50 et 10:00 UTC (11:50 à 12:00 à Paris ; le compte à rebours affichait alors 12:04:52 avant minuit).

**Preuves.** `preuves/motion/` contient pour chaque scénario :
- une planche horodatée (`<scénario>-planche.jpg`, 24 images réparties sur l'enregistrement) ;
- un GIF allégé (`<scénario>.gif`, durées d'affichage réelles) ;
- toutes les courbes mesurées (`mesures.json`).

Les images brutes (1 400 JPEG) sont restées dans l'espace de travail de la session.

### 20.1 Tableau des mesures (courbes relevées sur les images)

| Scénario | Élément | Propriété | De → à | Début | Durée mesurée | Courbe la plus proche (erreur) | Code du thème |
|---|---|---|---|---|---|---|---|
| Clic « Ajouter au panier » | libellé du bouton | opacité, translateY | 1 → 0 ; 0 → -10 px | 405 ms après le clic | **149 ms** | ease (0,012) | 150 ms ease ✔ |
| Clic « Ajouter au panier » | 3 points de chargement | opacité, translateY | 0 → 1 ; 10 → 0 px | 554 ms (enchaîné) | **150 ms** | ease (0,019) | 150 ms ease ✔ |
| Survol d'une carte produit | image principale / image secondaire | opacité (fondu croisé) | 1 → 0 / 0 → 1 | 40 ms | **195 ms** | ease-in-out (0,034) | 200 ms ease-in-out ✔ |
| Survol d'un logo presse | image du logo | scale | 1 → 1,059 | 28 ms | **≈ 900 ms visibles** | ease (0,083, ajustement médiocre) | 1 500 ms `(.22,1,.36,1)` : la courbe « out-quint » atteint 99 % vers 900 ms, la fin est imperceptible |
| Défilement, bloc image + texte | image | opacité | 0 → 1 | à l'entrée dans l'écran | **301 ms** | ease (0,028) | 300 ms ✔ |
| Défilement, bloc image + texte | texte (`.prose`) | opacité | 0 → 1 | +292 ms après l'image | **207 ms** | ease (0,035) | 200 ms, décalage 300 ms ✔ |
| Défilement, carrousel best-sellers | carte produit | opacité et translateY | 0 → 1 ; 15 → 0 px | à l'entrée | **359 ms** | ease (0,012) | 350 ms, décalage 50 ms entre cartes ✔ |
| Ouverture tiroir panier (desktop et mobile) | voile + tiroir | opacité | 0 → 1 | 71 ms après le clic | **≈ 140 ms** | ease | voile 150 ms ; panneau en `clip-path` 400 ms (dans le Shadow DOM, non échantillonné) |
| Ouverture tiroir recherche | tiroir | opacité | 0 → 1 | 63 ms | **≈ 140 ms** | ease | idem |
| Achat rapide mobile (« + Ajouter » d'une carte) | tiroir d'achat rapide | opacité | 0 → 1 | 579 ms (chargement du contenu) | **148 ms** | ease (0,012) | 150 ms ✔ |

**Lecture.** Les durées mesurées collent au code du thème Impact à ± 10 ms près. Il n'y a aucune animation « maison » lourde : tout le mouvement du site est celui du thème standard, plus les applications (Klaviyo, Kaching, compte à rebours). Les écarts apparents du premier dossier (« linear » dans `cap/*.json`) venaient de la méthode de mesure (§ 4.3) ; la courbe perçue est bien `ease`.

### 20.2 Séquences observées sur les planches (ce que voit la cliente)

1. **Chargement de l'accueil, ordinateur** (`load-d-planche.jpg`, 16 images en 8,5 s). L'écran se stabilise en ≈ 1,3 s. Ensuite, la seule chose qui bouge est le **compte à rebours, qui change chaque seconde**. Pas d'animation d'entrée du héros : premier écran immobile, conforme au dossier (§ 4.2).
2. **Chargement de l'accueil, mobile** (`load-m-planche.jpg`, 34 images). Le héros mobile est un autre visuel que celui de l'ordinateur : « OFFRE SPÉCIALE FRENCH DAYS **-50 %** », « -50 % SUR TOUT LE SITE », « 30 NUITS D'ESSAI », « L'OREILLER ORTHOPÉDIQUE CONÇU AVEC DES PRATICIENS ». Le bandeau du haut dit « Jusqu'à **-60 %** sur tout le site ! » : **deux remises différentes affichées en même temps sur le même écran mobile** [constaté : `motion/menu-m-planche.jpg`, images t = 13 ms à 312 ms].
3. **Menu mobile** (`menu-m-planche.jpg`, 44 images en 1,25 s).
   - Voile gris de 0 à ≈ 40 % en ≈ 300 ms.
   - Le panneau blanc entre par la gauche entre t ≈ 364 ms et t ≈ 680 ms (≈ 316 ms, `clip-path`).
   - Les 6 liens apparaissent en fondu vers t ≈ 716–751 ms.
   - Total ≈ 0,75 s, fluide.
   - En bas du panneau : sélecteur « EUR € » avec drapeau, et « Compte ».
4. **Défilement de l'accueil** (`scroll-d`, 177 images). Les révélations se déclenchent section par section, dans cet ordre :
   - titres en fondu montant ligne par ligne (`split_fade`) ;
   - image puis texte des blocs image + texte ;
   - cartes du carrousel en cascade, 50 ms entre deux cartes.

   Les logos presse ne défilent pas : c'est un carrousel à flèches.
5. **Fiche Soya 3.0, ordinateur** (`pdp-d-planche.jpg`, 113 images) :
   - Les offres Kaching se déplient au clic. « Pack Famille » affiche **4 sélecteurs de couleur « Blanc »**, un par oreiller, et 2 lignes « +2 Housses de Rechange ».
   - Le titre de section « Quel que soit votre sommeil… SOYA 3.0 s'adapte » s'écrit en fondu progressif à l'entrée dans l'écran.
   - La **barre d'achat collante** apparaît en bas quand le bouton principal sort de l'écran. Elle affiche **« Oreiller Soya 3.0 — €139,90 — Ajouter au panier »**, alors que l'offre sélectionnée dans le bloc est à 69,90 € [constaté : `motion/pdp-d-planche.jpg`, images t ≥ 4 945 ms]. C'est la confirmation filmée du double prix (§ 1, point 2).
6. **Clic « Ajouter au panier »** (`atc-d-planche.jpg`, 285 images en 5 s).
   - Le bouton passe en chargement (libellé qui monte, 3 points, 150 ms).
   - **Dès t ≈ 475 ms**, un voile sombre couvre la page et une carte blanche centrée s'affiche : la **popup Kaching de vente additionnelle**. Son image se charge à t ≈ 689 ms.
   - Texte de la popup [constaté] : « **FÉLICITATIONS, VOUS AVEZ DÉBLOQUÉ -60 % SUR NOTRE NOUVEL OREILLER LOMBAIRE !** », prix **19,90 €** barré 49,90 €, pastille « -60 % jusqu'à ce soir minuit », 5 puces de bénéfices (dont « réduit fortement les douleurs lombaires et hanches », « relaxation maximale du bas du dos »), bouton « Profiter de l'offre (-60 %) », refus « Non merci, je n'aime pas les cadeaux ».
   - Le visuel montre une femme couchée sur le côté avec un **coussin entre les genoux**, et non un coussin lombaire.
   - Aucune animation d'entrée : la carte apparaît d'un coup (`type: none`), ce qui accentue l'effet d'interruption.
7. **Popup Klaviyo, fiche produit, ordinateur** (`popup-d-planche.jpg`, 55 images).
   - Elle commence **≈ 13,5 s après le chargement du DOM** (délai configuré 12 s, plus le chargement du script).
   - Un panneau blanc glisse depuis le bord droit en ≈ 300 ms (t = 4 641 → 4 945 ms de l'enregistrement).
   - La photo du couple et le texte arrivent ensuite. Tout est en place vers t ≈ 5 430 ms : **≈ 0,8 s en tout**, cohérent avec `klaviyo-slideinright` 1 000 ms.
   - Le panneau couvre le bloc d'achat : prix et bouton sont masqués tant qu'on n'a pas répondu au quiz ou fermé la croix (22 px en haut à droite).
8. **Tiroirs** (`drawers2-d`, `drawers2-m`). Panier et recherche s'ouvrent en ≈ 140 ms de fondu du voile. Le panneau glisse sur ≈ 400 ms (`clip-path`, courbe `(.86,0,.07,1)` dans le code). L'achat rapide mobile met ≈ 580 ms avant de commencer, le temps de charger le contenu de la fiche.

### 20.3 Ce qui n'a pas pu être filmé

- **Les 4 « stories » vidéo** du bloc d'achat : leurs fichiers originaux pèsent 37,6 à 109,2 Mo (§ 6.4 et Annexe A.2 ; renvoi précisé en v2), ils ont été bloqués.
- **Le panneau intérieur des tiroirs** (dans le Shadow DOM) : sa durée vient du code, pas de la mesure.
- **Les animations Kaching de cadeaux progressifs et de badge à gratter** : elles sont présentes dans la feuille de style mais désactivées dans la configuration (§ 4.3 bis).

### 20.4 Ce que Somnila retient

- **Grammaire à copier** : 150 ms pour un retour de clic, 200 ms pour un survol, 300–350 ms pour une révélation au défilement, 50 ms de décalage entre cartes, courbe `ease`. C'est sobre, rapide et invisible. C'est exactement ce que le thème v7 de Somnila applique déjà : 200–350 ms, `ease`, mouvement réduit respecté.
- **À ne jamais faire** :
  - interrompre l'ajout au panier par une popup plein écran (≈ 0,5 s après le clic, sans animation, avec refus culpabilisant) ;
  - couvrir le prix avec une popup à 12 s ;
  - afficher deux pourcentages de remise différents sur le même écran ;
  - donner à la barre collante un autre prix que le bloc d'achat.
- **À faire mieux** :
  - une confirmation d'ajout discrète : le tiroir panier qui s'ouvre, comme dans Shrine ;
  - si une offre complémentaire est proposée, dans le tiroir, décochée, à son vrai prix ;
  - un quiz de hauteur accessible depuis la fiche, au lieu d'une popup qui s'impose.
