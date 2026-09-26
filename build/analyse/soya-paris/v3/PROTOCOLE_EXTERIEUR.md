# Protocole « Extérieur et publicité » pour la session Claude Code locale (livrables `v3/ads/`)

*Rédigé le 26/09/2026 vers 13:45 UTC à partir de `DOSSIER_SOYA_PARIS.md` (§ 8, § 14.1, § 15.8 à 15.10, § 16, § 17.7 à 17.9, § 18.4, § 19) et de `v2/pub.md`, qui reprend le § 16. Les bibliothèques publicitaires ont été vérifiées le même jour par WebSearch, WebFetch et des appels directs. Les conventions du dossier s'appliquent : [constaté], [déduit], [indice], [risque], [non vérifié], [hypothèse].*

---

## 0. Point de départ

### 0.1 Ce qui est acquis (à confirmer ou à dater, pas à refaire)

| Objet | Valeur connue | Réf. |
|---|---|---|
| Page Facebook principale | « Soya Paris », id **61565502837799** | § 16.3 |
| Autres entités à contrôler | **61582665196548** (2e « Soya Paris ») ; **357304574142341** (propriétaire de la publication 122111526512516761) | § 16.3, § 16.11 |
| Vidéos Facebook | 17 ID : 1424788815815978, 2186223432183471, 942531044896326, 1223428729960782, 4678649919030921, 1091775433016928, 4195067947410046, 1766409657383022, 672030032315793, 3015555038626220, 630204226522716, 725548557183570, 854361433679167, 1382551946054289, 1127430468844751, 1170164804611160, 1529456688443832 | § 16.4 ; `preuves/v2/pub/fb_videos_webfetch.md` |
| Textes d'annonces | 7 variantes A à G : « Élu … 2024/2025 », « Le SOYA 3.0 est enfin là ! », « -30 % sur le 2ème », « -50% », « OFFRE DE LANCEMENT… quelques jours » | § 16.4 |
| Google Ads Search | campagne **22489769215**, annonce **748884517347**, mot-clé **kwd-390453911726** ; destination `/products/oreiller-soya-2-0` ; vue du 17/02 au 20/04/2026 ; suivi Triple Whale (`tw_*`) | § 16.3 ; `preuves/v2/pub/contre/wayback_extraits.txt` |
| Google Shopping gratuit | `utm_content=sag_organic` (15/08/2025, 26/12/2025) | § 16.3 |
| Pixels | Meta avec CAPI ; TikTok **D9PMU6BC77U7K82NLN50** (remplace CSH048JC77U2MN99KTU0 entre le 03/08 et le 07/09/2026) ; Snapchat ; Pinterest **2613625264959** ; Google Ads (7 conversions) ; Triple Whale ; Klaviyo XuYmmR | § 8.1 |
| TikTok | @soya.paris, id 7670608818355012630, créé le 05/08/2026, 0 vidéo publique, 5 070 abonnés | § 16.3 |
| YouTube | aucune chaîne Soya ; « LUXERY SERVICE LTD » UC86268FR0iH5YN-Fwr_oLMw, Short lYesKPGUuCI (indice faible) | § 16.3 |
| Snap (UE, 12 mois) | aucun payeur « SOYA PARIS » ; « soya » et « LUXERY » donnent des annonceurs sans rapport | § 16.2 |
| Kit vidéo | 4 vidéos 9:16 du 08/11/2025 (Concept, Lequel choisir, Avis, FAQ), présentateurs P1 (homme) et P2 (femme) | `preuves/v2/pub/vid/` |
| Codes | BACK20 constaté (Klaviyo) ; MAMAN20, AS74, SOYA15, SOYA10 non vérifiés | § 16.10 |
| Créateurs | aucun identifié | § 16.10 |
| Calendrier promotionnel | 16 versions du thème en 17 mois | § 16.8 bis |

### 0.2 Nouveau, constaté le 26/09/2026 depuis la session cloud

- **Microsoft Ad Library**, API publique, 13:37 UTC :
  - « soya paris », « soya-paris.com » et « oreiller soya » : **0 annonce**.
  - Annonceurs dont le nom contient « soya » : Soya Group A/S (Danemark) et une société d'ambulances de Soyaux, sans rapport avec la marque.
  - « luxery service » : 0.
  - Requête témoin « oreiller ergonomique » : 10 annonces (Auchan, Amazon, Kipli). La recherche fonctionne donc, et les zéros sont de vrais zéros. [constaté]
  - Réponses brutes : `build/analyse/soya-paris/v3/preuves_cloud/v3ads/msft_*.json` (copiées dans le dépôt).
- **TikTok Commercial Content Library** : `POST /api/v1/search` répond toujours **421 « system busy »** depuis le cloud (13:38 UTC).
- **urlscan.io** : 14 analyses de soya-paris.com et soya-paris.us entre le 21/09/2024 et le 21/09/2026, aucune avec des paramètres publicitaires. [constaté] Fichier : `…/scratchpad/v3ads/urlscan_domain.json`.

### 0.3 Questions que la session locale doit trancher (par ordre de valeur)

| N° | Question | Où se trouve la réponse |
|---|---|---|
| Q1 | Qui paie et qui bénéficie des annonces Meta (LLC du Wyoming, société britannique, française, autre) ? | Meta, détails UE |
| Q2 | Quel est le nom de l'annonceur validé par Google, et son pays ? Cela tranche la piste LUXERY SERVICE LTD. | Google Ads Transparency, « Mon Centre publicitaire » |
| Q3 | Combien d'annonces Meta actives et inactives, avec quelles dates de début ? Quelles sont les plus anciennes encore actives ? | Meta |
| Q4 | TikTok diffuse-t-il vraiment des annonces ? Sous quelle identité, avec quel payeur ? | bibliothèque TikTok |
| Q5 | Quel est le profil réel de l'audience touchée (âge × sexe × pays) ? | données UE : Meta, TikTok, Google |
| Q6 | Les annonces mènent-elles aux fiches, ou à des pages spéciales (advertorial, listicle, quiz) ? | étape B |
| Q7 | Les allégations de santé et le « Élu … » sont-ils encore diffusés aujourd'hui ? | étape A |
| Q8 | Combien de temps l'annonce F (« OFFRE DE LANCEMENT… quelques jours ») a-t-elle réellement tourné ? | Meta, dates |
| Q9 | Les entités liées (61582665196548, MERCURE PARIS, FREYJA) ont-elles le même payeur ? Des clones font-ils de la publicité ? | Meta, mots-clés |
| Q10 | Quelle cadence de lancement, et quelle intensité publicitaire ? | relevés J0 et J+7 |

---

## 1. Ce que chaque bibliothèque affiche (vérifié le 26/09/2026)

Les libellés français cités sont indicatifs : la session locale relève ceux qui s'affichent réellement, en français ou en anglais.

### 1.1 Meta Ad Library (Facebook, Instagram, Messenger, Audience Network, Threads)

**URL exactes**

- Page principale, toutes les annonces, France :
  `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=FR&is_targeted_country=false&media_type=all&search_type=page&view_all_page_id=61565502837799`
- Tous pays : remplacer `country=FR` par `country=ALL`. Pays à balayer : `FR`, `BE`, `LU`, `CH`, puis `ALL` ; `US`, `GB` et `CA` pour us.soya-paris.com (hors UE, seules les annonces actives s'affichent, sans données DSA).
- Actives seules : `active_status=active` ; inactives seules : `active_status=inactive`.
- Tri par impressions : ajouter `&sort_data[mode]=total_impressions&sort_data[direction]=desc`. Ce paramètre est documenté par des tiers ; s'il est ignoré, trier dans l'interface.
- Mots-clés, sans ordre : `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=FR&media_type=all&q=soya%20paris&search_type=keyword_unordered`, puis `q=soya-paris.com`, `q=oreiller%20soya`.
- Phrases exactes (`search_type=keyword_exact_phrase`) :
  - `q=%22Le%20SOYA%203.0%20est%20enfin%20l%C3%A0%22`
  - `q=%22Meilleur%20Oreiller%20Orthop%C3%A9dique%22`
  - `q=%22200%20praticiens%22`
  - `q=%22100%20000%20dormeurs%22`
  - `q=%22100%20000%20clients%20satisfaits%22`
- Autres pages : `view_all_page_id=61582665196548` et `view_all_page_id=357304574142341`.
- Autres marques de l'opérateur (§ 15.6, § 15.7) : `q=mercure%20paris` et `q=freyja%20paris`.
- Annonce seule : `https://www.facebook.com/ads/library/?id=<Identifiant dans la bibliothèque>`

**Filtres de l'interface**

- Pays ; catégorie (« Toutes les publicités ») ; annonceurs.
- Plateformes : Facebook, Instagram, Audience Network, Messenger, Threads.
- Type de média : tous, images, vidéos, mèmes, images et mèmes, sans image ni vidéo.
- Statut actif ou inactif ; langue ; plage de dates d'impression.
- Équivalents dans l'API : `ad_reached_countries`, `ad_active_status`, `search_page_ids`, `search_terms`, `search_type`, `media_type`, `publisher_platforms`, `ad_delivery_date_min/max`.

**Champs d'une carte**

- Statut « Active » ou « Inactive ».
- Identifiant dans la bibliothèque (Library ID).
- « Diffusion commencée le … », ou une plage début-fin pour une annonce inactive.
- Icônes des plateformes.
- « Cette publicité comporte plusieurs versions », avec un sélecteur de versions.
- « N publicités utilisent ce contenu et ce texte », avec « Voir le résumé ».
- Page et photo ; texte principal ; image ou vidéo lisible.
- Bloc lien : domaine en capitales, titre, description, bouton d'appel à l'action.
- Bouton « Voir les détails de la publicité ».

**Détails d'une annonce diffusée dans l'UE** (section « Transparence de l'Union européenne », EN « European Union transparency »)

- **Bénéficiaire** et **payeur**.
- **Couverture estimée dans l'UE** (comptes uniques).
- Répartition de la couverture par **pays**, par **âge** (18-24, 25-34, 35-44, 45-54, 55-64, 65+) et par **sexe** (femmes, hommes, inconnu).
- **Ciblage choisi** par l'annonceur : lieux inclus et exclus, âge, sexe.
- Noms dans l'API : `eu_total_reach`, `age_country_gender_reach_breakdown`, `beneficiary_payers`, `target_ages`, `target_gender`, `target_locations`.

**Page de l'annonceur** (« À propos de l'annonceur » ou « Transparence de la Page ») : date de création de la Page, changements de nom, pays des personnes qui gèrent la Page. **À relever pour les trois ID de Page** : c'est la piste opérateur du § 15.

**Ce que Meta n'affiche pas**

- Ni dépense, ni impressions, ni clics, ni commentaires pour une annonce commerciale.
- Les noms des audiences personnalisées.
- Rétention : les annonces actives, plus un an d'archive après la dernière impression dans l'UE.

**Lien de destination**

- Le bouton pointe vers `https://l.facebook.com/l.php?u=<URL encodée>&h=…`.
- Copier l'adresse par clic droit, décoder `u=`, consigner l'URL complète avec ses UTM. **Ne pas cliquer.**

**Vérifié par** : Meta Transparency Center (données UE, archive d'un an) ; documentation de l'API `ads_archive` (paramètres) ; sources tierces pour les champs UE (à confirmer à l'écran). En cloud, la bibliothèque renvoyait un défi JavaScript puis `/login`.

### 1.2 TikTok Commercial Content Library

**Accès et recherche**

- URL : `https://library.tiktok.com/ads?region=FR&adv_name=soya`.
- Régler dans l'interface, puis noter l'URL finale :
  - « Pays cible de l'annonce » : France, puis Belgique, Suisse, Luxembourg, puis tous ;
  - « Dernière date d'affichage » : la plage maximale proposée ;
  - « Nom de l'annonceur ou mot-clés ».
- Filtres vus dans la requête cloud : âges, portée (`ad_reach`), sexe.
- Tri : « Dernière date d'affichage : de la plus récente à la plus ancienne » ; il existe aussi un tri par date de publication et par taille d'audience.
- Requêtes à passer : `soya`, `soya paris`, `SOYA PARIS`, `soya-paris.com`, `soya.paris`, `oreiller soya`, `SOYA 3.0`, `oreiller orthopédique`, `LUXERY`, puis le nom du payeur trouvé en Q1.

**Détail d'une annonce** : `https://library.tiktok.com/ads/detail/?ad_id=<ID>`

**Champs** (documentation officielle de l'API « Get Ad Details » ; l'interface montre les mêmes sous d'autres libellés)

- Identifiant ; `first_shown_date` et `last_shown_date` ; statut ; vidéos et images.
- Texte (`title`) ; appel à l'action ; **URL externe** (`external_url`) ; objectif publicitaire.
- Annonceur : `business_name`, `business_id`, pays (`country_code`) ; **payeur** (`paid_by`).
- Compte TikTok affiché (`tiktok_account` : profil, avatar, abonnés).
- **Utilisateurs uniques ayant vu l'annonce** (`unique_users_seen`), avec une répartition par pays, âge et sexe.
- Ciblage :
  - nombre d'utilisateurs ciblés, pays, âge (13-17, 18-24, 25-34, 35-44, 45-54, 55+), sexe ;
  - audiences personnalisées incluses ou exclues ;
  - intérêts, interactions avec les vidéos et avec les créateurs ;
  - provinces, villes, langues, appareils, systèmes d'exploitation, « high spending power ».
- Refus éventuels (`rejection_info`).

**Onglets** : « Bibliothèque d'annonces », « Rapport sur toutes les annonces », « **Autre contenu commercial** ». Ce dernier regroupe les contenus de marque et les partenariats de créateurs : chercher « soya » ici aussi.

**Couverture** : EEE, Suisse et Royaume-Uni ; archive d'un an après la dernière diffusion ; résultats décalés jusqu'à 48 h ; aucun compte nécessaire.

**Piège connu** : « Total des annonces : 0 » s'affiche aussi quand l'appel échoue (le 421 du cloud). Avant de conclure à zéro, lancer une requête témoin (« wopilo » ou « emma ») et vérifier dans l'onglet Réseau que `POST /api/v1/search` répond 200.

### 1.3 TikTok Creative Center (Top Ads)

- URL : `https://ads.tiktok.com/business/creativecenter/inspiration/topads/pc/fr?period=30&region=FR`. Si les paramètres sont ignorés, les régler dans l'interface.
- Filtres : Région, Secteur, Objectif de campagne, J'aime, Période (7, 30 ou 180 jours) ; recherche par mot-clé : `oreiller`, `pillow`, `cervical`, `soya`.
- Tri : portée, CTR, taux de vues à 2 s et à 6 s ; sur ordinateur, aussi CVR et J'aime.
- Fiche d'une annonce : marque, secteur, objectif, niveau de budget, durée, courbe d'interaction seconde par seconde.
- **Ce n'est pas une bibliothèque exhaustive**, mais une sélection d'annonces performantes. Elle sert de référence pour la catégorie « oreiller » même si Soya n'y figure pas. Si le détail exige un compte : point d'arrêt P3.
- Compléments : Top Ads Spotlight (`https://ads.tiktok.com/business/creativecenter/tiktok-topads-spotlight/pc/en`) et Keyword Insights (menu Inspiration) pour « oreiller ».

### 1.4 Google Ads Transparency Center (Search, Shopping, YouTube, Display, Maps, Play)

**Recherche**

- Par domaine : `https://adstransparency.google.com/?region=FR&domain=soya-paris.com`, puis `region=anywhere` (ou « N'importe où » dans le sélecteur), puis `domain=us.soya-paris.com` et `domain=soya-paris.us`.
- Par annonceur : saisir `SOYA PARIS`, `Soya`, `LUXERY SERVICE LTD`, puis choisir la suggestion « Annonceur ».
  - Page annonceur : `https://adstransparency.google.com/advertiser/AR…?region=FR`
  - Annonce : `https://adstransparency.google.com/advertiser/AR…/creative/CR…?region=FR`
- Filtres : Région ; Date (« À tout moment » ou une plage) ; Plate-forme (Recherche Google, YouTube, Google Shopping, Google Maps, Google Play) ; Format (Texte, Image, Vidéo).

**Champs**

- Page annonceur : nom et badge « Validé » ou « Non validé », zone géographique de l'annonceur, liste des annonces.
- Annonce diffusée dans l'UE (page d'aide officielle de Google, en français) :
  - « Informations sur le ciblage » (démographie, lieux, contextuel) ;
  - « Nombre total de personnes qui ont vu chaque annonce » ;
  - « Libellé de l'objet de l'annonce » ;
  - nom de l'entité qui paie.
- Par région : première et dernière diffusion ; nombre de diffusions en fourchette (selon des tiers, à confirmer à l'écran).

**Limites**

- Apparition décalée de 24 à 72 h [source tierce].
- Une annonce Search responsive ne montre qu'une combinaison titre + description par aperçu : relever chaque aperçu.
- Aucune dépense affichée.

**Pour trancher Q2** : noter le nom validé et le pays de l'annonceur. Chercher si la vidéo lYesKPGUuCI apparaît en format Vidéo/YouTube sous cet annonceur ou sous LUXERY SERVICE LTD (Companies House 16489223).

**Contrôle croisé sur Google.fr** (étape E1) : le menu ⋮ d'un résultat « Sponsorisé » ouvre « Mon Centre publicitaire » (annonceur, lieu, lien vers ses autres annonces) **sans cliquer l'annonce**.

En cloud, Google renvoyait un captcha `google.com/sorry` : en local, point d'arrêt P2.

### 1.5 Pinterest Ads Repository

- URL : `https://ads.pinterest.com/ads-repository/`
- Filtres (d'après des sources tierces, à confirmer) : pays de l'UE obligatoire, plage de dates, nom de l'annonceur, âge, sexe, catégorie. **Pas de recherche par mot-clé ni par domaine.**
- Champs : Pin (identifiant, titre, image), annonceur, dates, pays, ciblage (âge, sexe, lieu), couverture UE ; archive d'un an.
- Requêtes : `Soya`, `SOYA PARIS`, `soya-paris`, puis le nom du payeur trouvé en Q1 ; France puis Belgique. La balise 2613625264959 est installée sur le site, son usage est inconnu.

### 1.6 Snap Ads Gallery (UE, 12 mois)

- Interface : `https://adsgallery.snap.com/`, avec les onglets « Ads » et « Commercial Content » et les filtres « Shown in », « Ad Status » et période [constaté : `preuves/v2/pub/snapgal.txt`].
- API sans compte (requête identique à celle du cloud) :
  `POST https://adsapi.snapchat.com/v1/ads_library/ads/search?limit=50`
  avec le corps `{"countries":[],"start_date":"2025-09-27T00:00:00.000Z","end_date":"2026-09-27T00:00:00.000Z","paying_advertiser_name":"<nom>"}` et les en-têtes `Origin: https://adsgallery.snap.com` et `Referer: https://adsgallery.snap.com/`.
  Détail d'une annonce : `GET https://adsapi.snapchat.com/v1/ads_library/ads/{ad_id}`.
- Champs constatés dans la réponse du 26/09 :
  - `id`, `name`, `ad_account_name`, `status`, `creative_type`, `ad_type`, `languages`, `call_to_action`, `review_status`, `rejection_reasons` ;
  - `top_snap_media_type`, `top_snap_media_download_link` ;
  - `start_date`, `impressions_total`, `impressions_map` (par pays de l'UE, plus la Turquie) ;
  - `targeting_v2` (démographie : `min_age`, `age_groups`, `languages`, `advanced_demographics` ; appareils) ;
  - `paying_advertiser_name`, `profile_name` ; propriétés de lien.
- Limite : l'API ne cherche que le nom du **payeur**. À relancer seulement avec les noms trouvés en Q1 et Q2 (« LUXERY SERVICE » avait répondu 429).

### 1.7 Microsoft Ad Library (Bing)

- Interface : `https://adlibrary.ads.microsoft.com/`
- API sans compte :
  - `https://adlibrary.api.bingads.microsoft.com/api/v1/Advertisers?searchText=<nom>&top=20`
  - `https://adlibrary.api.bingads.microsoft.com/api/v1/Ads?searchText=<texte>&top=20`, avec les options `countryCodes`, `startDate` et `endDate` (au format `yyyy-MM-dd`) et `advertiserId`
  - détail : `…/Ads/{AdId}?$expand=AdDetails`
- Champs :
  - `AdvertiserName`, `AdvertiserCountry`, `IsVerified`, `Title`, `Description`, `DisplayUrl`, `DestinationUrl`, `AssetJson` ;
  - dans `AdDetails` : `PaidForByName`, `StartDate`, `EndDate`, `TotalImpressionsRange`, `ImpressionsByCountry`, `Targets`, `RestrictionReason`.
- Couverture : EEE, depuis juin 2023.
- Déjà fait (§ 0.2) : **0 annonce**. À relancer seulement avec les noms trouvés en Q1 et Q2.

### 1.8 Sources non prioritaires

LinkedIn Ad Library (`https://www.linkedin.com/ad-library/`) et le répertoire publicitaire de X sont hors cible pour un oreiller vendu aux particuliers. Une requête « soya » dans chacun, pour mémoire.

---

## 2. Préparation du poste (15 minutes, avant toute collecte)

1. **Profil Chrome dédié « Analyse Soya »**, sans session Facebook, Instagram, Google, TikTok ni synchronisation Chrome, avec Claude in Chrome activé dans ce profil.
   - Contrôle : `https://www.facebook.com/` affiche la page de connexion, et `https://www.google.fr` affiche « Se connecter ». Sinon, point d'arrêt P4.
   - Raison : les pixels de Soya (Meta avec CAPI, TikTok, Snap, Pinterest, Google) ajouteraient le compte de l'utilisateur à leurs audiences de reciblage, et Google personnaliserait ses résultats.
2. Langue fr-FR, fuseau Europe/Paris. Chaque heure se note **en heure de Paris et en UTC**.
3. Outils : `ffmpeg`/`ffprobe`, Python 3 avec faster-whisper (script existant `build/analyse/soya-paris/preuves/v2/pub/vid/transcribe.py`), `curl`, `jq` en option.
4. Arborescence `build/analyse/soya-paris/v3/ads/` :
   - `captures/{meta,ttlib,ttcc,gatc,pin,snap,msft,serp,shop,yt,ig,tt,fb,lp,mkp,forum,avis,codes,presse,mail}/`
   - `medias/`
   - `brut/` (JSON, HAR, fichiers non floutés, **jamais commités**)
5. Tenir `JOURNAL.md` : une ligne par action (heure de Paris, heure UTC, URL, action, résultat, capture).
6. Rythme : une page toutes les 5 à 10 secondes, sans rafale.

---

## 3. Étape A : inventaire de toutes les annonces (actives et inactives visibles)

### 3.1 Procédure Meta (la plus riche)

1. Ouvrir l'URL « page principale » avec `country=FR` et `active_status=all`. Capturer l'en-tête des résultats (« ~N résultats »). Refaire avec `active` puis `inactive` et noter les deux nombres.
2. Faire défiler jusqu'à la fin, toutes cartes chargées. Une capture pleine page par tranche d'environ 12 cartes.
3. Pour **chaque carte**, dans l'ordre d'affichage :
   1. capturer la carte ;
   2. remplir sa ligne du tableau (§ 8.2) ;
   3. si la carte indique « plusieurs versions » : parcourir chaque version, capturer chacune, les compter ;
   4. si elle indique « N publicités utilisent ce contenu et ce texte » : noter N, ouvrir « Voir le résumé », capturer ;
   5. ouvrir « Voir les détails de la publicité », déplier « Transparence de l'Union européenne » et « À propos de l'annonceur », capturer. Relever payeur, bénéficiaire, couverture UE, répartition par pays, tableau âge × sexe complet, ciblage (lieux inclus et exclus, âge, sexe) ;
   6. pour une vidéo : la lire en entière. L'enregistrer si le navigateur le permet (clic droit « Enregistrer la vidéo sous », ou `src` de la balise `<video>`) dans `medias/meta_<LibraryID>.mp4`. Sinon, une capture par seconde sur les 5 premières secondes ;
   7. copier **sans cliquer** l'adresse du bouton d'appel à l'action, décoder `u=`, consigner l'URL complète.
4. Refaire les étapes 1 à 3 avec `country=ALL`, puis avec les requêtes par mots-clés et phrases exactes du § 1.1. On y repère d'autres Pages ou identités qui diffusent les mêmes textes : clones, 61582665196548, annonces de partenariat avec la mention « Payé par ».
5. Rapprocher chaque annonce des 17 vidéos connues : un texte identique signale la même création. Tenir la correspondance « ID vidéo Facebook ↔ Library ID ».

### 3.2 Traitement des vidéos (toutes plateformes)

- **Accroche de 0 à 3 s** : `ffmpeg -ss 0 -i medias/<id>.mp4 -t 3 -vf fps=2 medias/<id>_t%02d.jpg` (une image toutes les 0,5 s).
- **Planche** : `ffmpeg -i medias/<id>.mp4 -vf "fps=1/2,scale=270:-1,tile=6x4" -frames:v 1 medias/<id>_planche.jpg`
- **Format** : `ffprobe -v error -show_entries format=duration:stream=width,height -of csv=p=0 medias/<id>.mp4`
- **Transcription** : `transcribe.py` (faster-whisper small, français), horodatée, dans `medias/<id>.transcript.txt`. Réécouter les 3 premières secondes et corriger à la main.
- **Accroche des 3 premières secondes, en trois champs distincts** :
  - voix, verbatim ;
  - texte à l'écran, verbatim (casse et emojis compris) ;
  - image, en description factuelle : qui, quoi, cadrage, mouvement.
- **Personnes** : aucune, mains seules, P1, P2, nouveau présentateur (P3…), blouse ou tenue médicale. **Jamais de nom.**
- **Son** : musique (oui/non, genre, titre si la plateforme l'affiche) ; voix (face caméra, voix off humaine, voix de synthèse [indice]).
- **Sous-titres** : karaoké mot à mot, blocs statiques ou aucun ; couleur du cartouche.

### 3.3 Autres bibliothèques

Mêmes colonnes que pour Meta, avec « non affiché » là où la plateforme ne donne pas l'information.

- **Google** : une ligne par identifiant CR.
  - Search : chaque titre et chaque description vus, verbatim ; URL affichée ; extensions.
  - Shopping : titre du produit, prix, marchand.
  - YouTube : ID de la vidéo, puis traitement du § 3.2.
- **TikTok** : une ligne par `ad_id`, plus l'identité affichée et le payeur.
- **Pinterest, Snap, Microsoft** : une ligne par annonce trouvée, ou une ligne « 0 résultat » accompagnée de la requête témoin.

### 3.4 Colonnes calculées [déduit]

- Ancienneté = date du relevé − date de début (annonces actives). Durée = fin − début (annonces inactives).
- Gagnante probable : active depuis 30 jours ou plus. Gagnante forte : 60 jours ou plus, ou couverture UE dans le premier quartile.
- Signal de mise à l'échelle, dès qu'un de ces cas est vrai :
  - plusieurs versions ;
  - N ≥ 3 pour « publicités utilisant ce contenu » ;
  - même texte sur plusieurs Library ID ;
  - même vidéo sous plusieurs textes.
- Couverture par jour = couverture UE / jours de diffusion : un ordre de grandeur, pas une mesure.

---

## 4. Étape B : continuité entre l'annonce et la page d'atterrissage

1. **Dresser la liste des URL de destination distinctes.**
   - Normaliser en retirant `fbclid`, `gclid`, `gbraid`, `ttclid` et `srsltid`.
   - Conserver à part les UTM et les autres paramètres, verbatim (`utm_*`, `tw_*`, `campaign_id`…).
   - Compter les annonces par URL.
2. **Ouvrir chaque URL dans le profil dédié**, après avoir vidé les données du site (DevTools > Application > « Clear site data »).
   - Onglet Réseau avec « Preserve log » : relever la chaîne de redirections (codes, domaines intermédiaires, pré-landers, traqueurs).
   - Captures pleine page sur ordinateur (1440 px) et sur mobile (émulation 390 × 844), plus le premier écran seul pour chacun.
   - Type de page :
     - fiche `/products/…` ;
     - collection `/collections/…` ;
     - accueil ;
     - page Shopify `/pages/…` ;
     - autre domaine (advertorial, listicle « top 5 », pré-lander, quiz).
   - Relever :
     - H1 et premier argument visible ;
     - offre et titre du bloc Kaching ;
     - prix 1x, Duo et Famille ;
     - compteur ; présence du « Élu … » ; produit (2.0 ou 3.0) ;
     - bannière cookies (refuser, sauf si la mission est d'observer les pixels avant consentement).
   - Popups : les fermer **uniquement** par ✕ ou Échap (point d'arrêt P6).
3. **Noter la cohérence de 0 à 2** sur quatre critères :
   - l'accroche et le H1 ou le premier écran ;
   - l'offre annoncée et l'offre affichée ;
   - le prix ou la remise annoncés et les prix affichés ;
   - le produit annoncé et le produit de la page.
   Rupture connue à vérifier : « -30 % sur le 2ème » (2.0) contre le bloc « JUSQU'À -60% ».
4. **Pages cachées** : comparer les `/pages/…` trouvées dans les URL d'annonces avec `https://soya-paris.com/sitemap_pages_1.xml` (déjà dans `preuves/soya-tech/`). Une URL présente seulement dans les annonces est une page de campagne [déduit].
5. **Historique** : `https://web.archive.org/web/*/<url>*` pour chaque destination, en lecture seule.

---

## 5. Étape C : analyse

**5.1 Matrice accroche × angle × offre × format.**
- Lignes : accroches regroupées par formule (« Élu… », « enfin là », question-douleur, chiffre de popularité…).
- Colonnes : angle × offre × format.
- Chaque cellule contient le nombre d'annonces, la somme des couvertures UE et l'ancienneté maximale. Codes au § 8.3.

**5.2 Niveaux de conscience (Schwartz)** : une classe par annonce.

| Niveau | Critère | Exemple |
|---|---|---|
| 1. Inconscient | ni problème ni produit nommés | scène de vie, sans douleur ni produit |
| 2. Conscient du problème | douleur ou mauvais sommeil au premier plan | « vous vous réveillez avec la nuque raide » |
| 3. Conscient de la solution | la catégorie « oreiller ergonomique » est expliquée | « un oreiller classique ✕ / ergonomique ✓ » |
| 4. Conscient du produit | Soya est nommé, avec ses preuves | « Élu… », « 100 000 dormeurs » |
| 5. Pleinement conscient | l'offre seule suffit | « -50 % », « fin ce soir » |

Sortie attendue : la répartition en % des annonces et des couvertures par niveau.

**5.3 Objections traitées** : prix, efficacité, délai d'adaptation, hauteur et morphologie, fermeté, chaleur, odeur, lavage, délai de livraison, essai de 30 nuits et retours, origine et qualité, confiance (« arnaque ? »), choix entre 2.0 et 3.0. Grille : objection × annonce × réponse verbatim.

**5.4 Promesses et allégations de santé.** Extraire chaque promesse verbatim et signaler **[risque]** dès qu'apparaissent :
- « soulage », « soulagement immédiat », « douleurs cervicales/dorsales », « sans douleurs » ;
- « dès la première nuit », « orthopédique », « recommandé par les ostéopathes », « +200 praticiens de santé » ;
- « apnée », « reflux », « ronflements », « posture » ;
- « Élu meilleur … », « N°1 » ;
- toute phrase qui prête une douleur au lecteur (« vos douleurs »).

Cadres de référence : article L121-4 16° du Code de la consommation ; règles de Meta et de TikTok sur la santé et sur les attributs personnels. Ce sont des risques à signaler, pas des qualifications juridiques.

**5.5 Cadence de lancement.**
- Histogramme des dates de début par semaine ISO, annonces actives et inactives (jusqu'à 12 mois dans l'UE).
- Différence entre les relevés **J0 et J+7** : Library ID nouveaux (lancés), passés inactifs (arrêtés).
- Sorties : créations nouvelles par semaine, âge moyen des annonces actives, part des annonces de plus de 30 jours.

**5.6 Saisonnalité.**
- Superposer les dates de début au calendrier du § 16.8 bis (versions V3 à V16 du thème).
- Y ajouter les temps forts : soldes légaux, Saint-Valentin, fête des mères, French Days, rentrée, Black Friday, Noël. Dates légales à vérifier sur economie.gouv.fr et inc-conso.fr, ne pas les reprendre de mémoire.
- Répondre à la question : une création par événement, ou les mêmes vidéos réhabillées ?

**5.7 Intensité publicitaire, toujours étiquetée [hypothèse].**
- **Méthode A (préférée)** :
  - Δ couverture UE entre J0 et J+7, sommée sur les annonces actives. C'est une borne haute de la couverture hebdomadaire, car les audiences se chevauchent.
  - Impressions = couverture × fréquence supposée.
  - Dépense = impressions / 1 000 × CPM.
  - Ne mettre un chiffre de fréquence ou de CPM que s'il vient d'une source publiée et datée, citée. Sinon, laisser la formule sans chiffre.
- **Méthode B (plus faible)** : nombre d'annonces actives × budget type par ensemble de publicités.
- Comparer à l'hypothèse du § 16.9 : 3 800 à 10 400 € par jour hors pic.

---

## 6. Étape D : commentaires sous les annonces et publications (lecture seule)

**Où lire**
- Les 17 vidéos : `https://www.facebook.com/61565502837799/videos/<ID>/`.
- Instagram : `https://www.instagram.com/p/DEVO2kbthzt/`, `…/p/DEVOyCFt8eG/`, `…/p/DML-U_atCXp/`, et les publications récentes de @soya.paris.
- YouTube : `https://www.youtube.com/shorts/lYesKPGUuCI`.
- TikTok : aucune vidéo publique à ce jour.
- La bibliothèque Meta n'affiche pas les commentaires.

**Sans connexion** : lire et capturer ce qui est visible. **Si une connexion est exigée : point d'arrêt P1.**

**Grille de relevé** (dans `08_commentaires.md`)
- Nombre de commentaires affiché, nombre réellement chargé, tri utilisé.
- Catégorie : objection, question, plainte (livraison, remboursement, qualité, Chine/dropshipping, arnaque), éloge.
- Extrait verbatim **sans nom d'auteur**.
- Réponse de la marque, verbatim, avec son délai.
- Nombre de réponses identiques de la marque.

**Signaux de modération** [indice]
- Écart entre le nombre affiché et le nombre visible.
- Différence entre les tris « Les plus pertinents » et « Tous les commentaires ».
- Commentaires fermés.
- Absence totale de plaintes sous une annonce très diffusée.
- Commentaires réutilisés dans des vidéos (comme en novembre 2025).

**Données de santé de tiers** : paraphraser, jamais d'identité. Flouter les noms avant tout commit.

---

## 7. Étape E : au-delà des publicités

**Pour Google.fr, passer par le navigateur local, pas par WebSearch**, qui interroge depuis les États-Unis.

### E1. Google.fr, 20 requêtes

- URL : `https://www.google.fr/search?q=<requête>&hl=fr&gl=fr&pws=0`, dans le profil dédié.
- Captures : premier écran et pleine page, sur ordinateur **et** en mobile émulé.
- Relever :
  - chaque résultat « Sponsorisé » : position, URL affichée, titre et description verbatim, extensions, annonceur lu dans ⋮ puis « Mon Centre publicitaire » ;
  - le carrousel Shopping (marchand, prix, mention « Sponsorisé ») ;
  - les 10 premiers résultats naturels ;
  - « Autres questions posées » ;
  - la synthèse IA si elle apparaît.
- **Ne jamais cliquer une annonce.**
- Repasser les requêtes de marque une seconde fois (matin et soir) pour détecter une diffusion par tranche horaire.

| Marque | Génériques |
|---|---|
| 1. soya paris | 11. oreiller ergonomique |
| 2. soya paris avis | 12. oreiller cervical |
| 3. soya paris arnaque | 13. oreiller orthopédique |
| 4. oreiller soya | 14. meilleur oreiller orthopédique 2025 |
| 5. oreiller soya 3.0 | 15. oreiller mémoire de forme |
| 6. soya 3.0 avis | 16. oreiller douleur cervicale |
| 7. soya paris code promo | 17. oreiller deux hauteurs |
| 8. soya paris remboursement | 18. oreiller papillon cervical |
| 9. soya-paris.com | 19. meilleur oreiller 2026 |
| 10. soya paris coussin lombaire | 20. oreiller recommandé par les ostéopathes |

### E2. Google Shopping

- URL : `https://www.google.fr/search?q=<requête>&udm=28&hl=fr&gl=fr`, ou l'onglet Shopping.
- Requêtes : « oreiller ergonomique », « oreiller cervical », « soya paris », « oreiller soya 3.0 ».
- Relever : présence de Soya, prix du flux (139,90 € ou prix remisé ?), mention « Sponsorisé », note, livraison.

### E3. YouTube

- `https://www.youtube.com/results?search_query=soya+paris`, puis « oreiller soya », « soya paris avis ».
- Chaîne `https://www.youtube.com/channel/UC86268FR0iH5YN-Fwr_oLMw` : vues, date, commentaires.
- Recouper avec le filtre YouTube de Google Ads Transparency.

### E4. Créateurs et codes promo

- **Instagram** :
  - `https://www.instagram.com/soya.paris/` : abonnés, nombre de publications, les 12 dernières (accroche, format, vues), mentions « Partenariat rémunéré » ;
  - « À propos de ce compte » (date d'inscription, pays, anciens noms), si visible ;
  - `https://www.instagram.com/explore/tags/soyaparis/` (connexion probable, point d'arrêt P1).
- **TikTok** :
  - `https://www.tiktok.com/search?q=soya%20paris` et `https://www.tiktok.com/search?q=oreiller%20soya` ;
  - `https://www.tiktok.com/content/avis-oreiller-soya-paris` et `https://www.tiktok.com/@soya.paris`.
  - Pour chaque vidéo de créateur : pseudo public, date, vues, mention #publicité ou #sponsorisé, code, lien. Un créateur se cite par son pseudo public ; les particuliers ne sont pas nommés.
- **Sites de codes**, relevés sans jamais tester un code :
  - `https://fr.coupert.com/codes-promo/soya-paris.com`
  - `https://fr.promocodie.com/store/soya-paris.com`
  - `https://fr.hotdeals.com/code-promo/soya-paris`
  - `https://www.dealabs.com/search?q=soya%20paris`
  - puis la recherche interne de ma-reduc, igraal et poulpeo.
  - Pour chaque code : remise annoncée, date de première apparition, source.

### E5. Presse, articles sponsorisés, affiliés

- Google Actualités : `https://news.google.com/search?q=%22soya%20paris%22&hl=fr&gl=FR&ceid=FR:fr`
- Sur Google.fr :
  - `"Élu meilleur oreiller orthopédique"`, pour trouver l'organisateur supposé du prix ;
  - `"soya paris" -site:soya-paris.com` ;
  - le nom de chaque média dont le logo figure sur soya-paris.com, suivi de « soya », pour confirmer ou infirmer l'article.
- Sites tiers connus, à classer (affilié, concurrent déguisé, site d'alerte) avec leurs liens sortants (`rel="sponsored"`, paramètres d'affiliation) :
  - `https://meilleur-oreillercervical.fr/soya-paris-avis/`
  - `https://www.hadlemans.fr/soya-paris-avis/`
  - l'article « Soya Paris avis » de glowupbyparis.com, et glowchicparis.com
  - `https://warning-trading.com/consommation/soya-paris-com-avis-escroquerie/`
  - oreillerpillow.com (publireportage vers `bestoffersfinder.com`, `aff_id=71241`)

### E6. Places de marché et copies

- **Amazon.fr** : `https://www.amazon.fr/s?k=soya+paris+oreiller`, `https://www.amazon.fr/dp/B0FCXR3BDF`, `https://www.amazon.fr/dp/B0FWQHLZL2`.
- **Cdiscount** : `https://www.cdiscount.com/search/10/soya+paris.html`, puis « oreiller papillon cervical ».
- **ManoMano** : recherche interne « oreiller cervical deux hauteurs ».
- **AliExpress** : `https://fr.aliexpress.com/w/wholesale-oreiller-papillon-cervical.html`.
- **Temu** : `https://www.temu.com/fr/search_result.html?search_key=oreiller%20cervical%20papillon`.
- **Leboncoin et Vinted** : « soya paris », pour la revente.
- **Google Lens** sur les photos principales :
  - 3.0 : `https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0935%2F5054%2F3180%2Ffiles%2F18.png`
  - 2.0 : `https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0935%2F5054%2F3180%2Ffiles%2F1-oreiller-soya-2_0HD.webp`
- À relever pour chaque résultat : prix, vendeur, note, visuel identique (oui/non), hauteurs 11/13 cm, mention « Soya ».

### E7. Forums

- Reddit : `https://www.reddit.com/search/?q=%22soya%20paris%22`
- Sur Google.fr :
  - `site:forum.doctissimo.fr soya oreiller`
  - `site:quechoisir.org "soya paris"`
  - `site:facebook.com/groups "soya paris"` (titres seulement)

### E8. Avis hors Trustpilot

- signal-arnaques :
  - `https://www.signal-arnaques.com/scam/view/805026` (61 signalements, 244 commentaires)
  - `…/scam/view/895436`, `…/820336`, `…/821207`, `…/822832`
  - `https://www.signal-arnaques.com/forum/view/6843`
- `https://www.avis-verifies.com/avis-clients/soya-paris.com`
- `https://franceverif.fr/fr/site/soya-paris.com`
- `https://scamsandbox.com/fr/report/soya-paris.com/`
- scamdoc (recherche « soya-paris.com »)
- Google Maps « Soya Paris » : existe-t-il une fiche d'établissement ?
- À relever : note, nombre d'avis, dates, thèmes.

### E9. E-mails publics

- `https://milled.com/search?q=soya-paris.com`, puis `q=soya%20paris`.
- Si rien n'est archivé, écrire « non archivé ». **Jamais d'inscription à la newsletter.**

---

## 8. Étape F : livrables, tableaux types, nommage

### 8.1 Fichiers dans `build/analyse/soya-paris/v3/ads/`

| Fichier | Contenu |
|---|---|
| `00_README.md` | méthode, profil utilisé, horaires, règles, écarts |
| `JOURNAL.md` | une ligne par action horodatée |
| `01_bibliotheques.md` | état de chaque source : URL exacte, requête, filtres, heure, résultat (y compris 0 avec témoin), blocage |
| `inventaire.tsv` | une ligne par annonce, toutes plateformes (colonnes au § 8.2) |
| `02_meta.md` | synthèse Meta, payeur et bénéficiaire, transparence des 3 Pages, top 10 des plus anciennes actives avec captures |
| `03_tiktok.md` | bibliothèque TikTok, « Autre contenu commercial », Creative Center |
| `04_google.md` | annonceur validé, annonces par format, réponse à Q2 |
| `05_autres_bibliotheques.md` | Pinterest, Snap, Microsoft, LinkedIn, X |
| `06_atterrissages.md` + `atterrissages.tsv` | étape B |
| `07_analyse.md` | matrice, Schwartz, objections, promesses et risques, cadence, calendrier, intensité |
| `08_commentaires.md` | étape D |
| `09_serp_google.md` + `serp.tsv` | étapes E1 et E2 |
| `10_createurs_codes_presse.md` | étapes E3, E4 et E5 |
| `11_marketplaces_copies.md` | étape E6 |
| `12_avis_forums_emails.md` | étapes E7, E8 et E9 |
| `13_synthese_somnila.md` | réponses Q1 à Q10 et leçons pour Somnila, sans allégation de santé (dans l'esprit du § 16.12) |

### 8.2 `inventaire.tsv` : colonnes, dans cet ordre

**Identification**
`id_interne` (M01…, T01…, G01…), `plateforme`, `bibliotheque_id` (Library ID, ad_id ou CR…), `id_video_fb_connu`, `page_ou_identite`, `payeur`, `beneficiaire`, `annonceur_valide_pays`

**Diffusion**
`statut`, `date_debut`, `date_fin`, `date_releve_utc`, `anciennete_j`, `plateformes_diffusion`, `pays_diffusion`

**Format**
`format` (vidéo 9:16, 4:5, 1:1, image, carrousel, catalogue, texte Search, Shopping), `duree_s`, `resolution`

**Accroche des 3 premières secondes**
`accroche_voix_0_3s`, `accroche_texte_ecran_0_3s`, `accroche_image_0_3s`

**Message**
`texte_principal` (verbatim intégral), `titre`, `description_lien`, `cta`, `offre_verbatim`, `offre_code`, `angle_code`, `schwartz`

**Création**
`personne` (aucune, mains, P1, P2, P3…), `produit` (2.0, 3.0, autre), `texte_incruste`, `musique`, `voix`, `sous_titres`

**Signaux de mise à l'échelle**
`nb_versions`, `nb_pubs_meme_contenu`

**Données DSA**
`dsa_couverture_ue`, `dsa_pays` (pays : part), `dsa_age_sexe` (tableau complet dans `brut/`, les 3 premières cellules ici), `ciblage_lieux`, `ciblage_age`, `ciblage_sexe`, `ciblage_autres`

**Destination**
`url_brute` (verbatim, l.facebook décodé), `url_normalisee`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `autres_params`, `type_atterrissage`

**Preuves**
`captures` (liste de fichiers), `media`, `transcription`, `statut_preuve`, `remarques`

**Exemple de ligne partielle**, à compléter sur place à partir d'une annonce déjà connue :

`M??` | meta | *à relever* | 1424788815815978 | Soya Paris (61565502837799) | *à relever* | *à relever* | — | *à relever* | … | « Élu Meilleur Oreiller Orthopédique 2025 … Le SOYA 3.0 est enfin là ! Après des mois de développement… » (emojis d'origine conservés) | « Livraison gratuite – Déjà 100 000 clients satisfaits » | … | angle AUT_PRIX+NOUVEAUTE+SANTE | schwartz 4 | … | statut_preuve : [constaté] pour le texte (§ 16.4), le reste à relever.

Une case vide est interdite : écrire « non affiché » ou « non relevé (raison) ».

### 8.3 Codes

- **Angles** : `SANTE_DOULEUR`, `AUT_PRIX` (« Élu… »), `AUT_PRO` (praticiens, ostéopathes), `NOUVEAUTE`, `PREUVE_SOC` (100 000, avis), `DEMO` (mousse, hauteurs, housse), `COMPARATIF` (2.0/3.0, classique/Soya), `FAQ_OBJ`, `COUPLE`, `CADEAU`, `SAISON`, `URGENCE`, `PRIX`.
- **Offres** : `2E_M30`, `M50`, `JUSQUA_M60`, `LANCEMENT`, `LIVR_GRATUITE`, `PACK_DUO`, `PACK_FAMILLE`, `CODE_<code>`, `AUCUNE`.
- **Schwartz** : 1 à 5, selon le tableau du § 5.2.

### 8.4 Autres tableaux types

| Tableau | Colonnes |
|---|---|
| `01_bibliotheques.md` | bibliothèque, URL exacte utilisée, requête, filtres, heure de Paris, heure UTC, résultat (actives, inactives), témoin (requête et résultat), blocage, capture |
| `atterrissages.tsv` | url_normalisee, nb_annonces, redirections, type, H1, offre visible, prix 1x/Duo/Famille, compteur, « Élu » (oui/non), note de cohérence sur 4 critères (0-2), captures ordinateur et mobile |
| `serp.tsv` | n° de requête, requête, heure, appareil, position, type (Search sponsorisé, Shopping, naturel, question, IA), domaine, titre verbatim, description verbatim, annonceur (Mon Centre publicitaire), prix, capture |
| commentaires | plateforme, id de la publication ou de l'annonce, heure, nb affiché, nb chargé, tri, catégorie, extrait sans nom, réponse de la marque verbatim, délai, signal de modération |
| places de marché | plateforme, URL, titre, vendeur, prix, note et nb d'avis, visuel identique, hauteurs, mention « Soya », capture |
| codes | code, source, date vue, remise annoncée, « non testé » |

### 8.5 Nommage des captures et des médias

Modèle : `<AAAAMMJJ>T<HHMM>Z_<source>_<objet>_<identifiant>_<vue>.<ext>`, en heure **UTC**.

- **source** : meta, ttlib, ttcc, gatc, pin, snap, msft, serp, shop, yt, ig, tt, fb, lp, mkp, forum, avis, codes, presse, mail.
- **objet** : resultats, carte, version02, resume, details-ue, apropos-page, planche, lp, serp-q02, commentaires…
- **vue** : `d` (ordinateur, 1440 px), `m` (mobile, 390 px), suivi de `-fold` (premier écran) ou `-full` (pleine page).

Exemples (identifiants fictifs) :
- `captures/meta/20260927T0812Z_meta_carte_1234567890123456_d.png`
- `captures/meta/20260927T0815Z_meta_details-ue_1234567890123456_d.png`
- `medias/meta_1234567890123456.mp4`, `medias/meta_1234567890123456_t03.jpg`, `medias/meta_1234567890123456.transcript.txt`
- `captures/serp/20260927T1010Z_serp_serp-q02-soya-paris-avis_m-fold.png`
- `captures/lp/20260927T1102Z_lp_lp-products-oreiller-soya-3-0_m-full.png`

---

## 9. Points d'arrêt et interdits

| Code | Situation | Conduite |
|---|---|---|
| P1 | Une connexion est demandée (Meta, Instagram, TikTok, Creative Center, commentaires) | S'arrêter et demander à l'utilisateur. Ne jamais créer de compte. S'il accepte d'utiliser **son compte existant** : lecture seule, dans une fenêtre séparée de son profil habituel, et jamais soya-paris.com depuis ce profil. |
| P2 | Captcha, page `google.com/sorry`, vérification humaine | Ne pas contourner. Demander à l'utilisateur de le résoudre lui-même, ou abandonner la source et le noter. |
| P3 | Détail réservé aux comptes (Creative Center, par exemple) | Noter « fermé sans compte » et passer. |
| P4 | Le profil dédié est connecté à Facebook ou Google | Arrêt immédiat, prévenir l'utilisateur. |
| P5 | Lien d'annonce ou bouton « En savoir plus » / « Acheter » | Ne jamais cliquer depuis une session connectée. Dans la bibliothèque Meta, copier l'adresse et décoder `u=`. **Ne jamais cliquer une annonce Google « Sponsorisé »** : le clic coûte à l'annonceur et laisse une trace. |
| P6 | Popups Klaviyo et Kaching | Fermer par ✕ ou Échap uniquement. **Ne jamais cliquer « Non merci, je ne veux pas être VIP. »** : ce bouton envoie le formulaire (§ 8.4). Ni « Pour moi / Pour un proche », ni les positions, ni aucun champ. |
| P7 | Formulaires : newsletter, quiz, contact, chat, « prévenez-moi », champ de code promo | Jamais. |
| P8 | Une page d'atterrissage mène au panier ou au paiement | Hors mission (brief séparé). S'arrêter avant tout champ. Jamais Shop Pay, PayPal, Apple Pay, Google Pay ni Amazon Pay. |
| P9 | Interactions sociales | Aucun J'aime, aucune réaction, aucun commentaire, partage, enregistrement, abonnement ou message. Ni « Masquer la publicité », ni « Signaler » : c'est à l'utilisateur d'en décider. |
| P10 | Données personnelles | Si le payeur ou le bénéficiaire est une personne physique : écrire « personne physique » avec les initiales et prévenir l'utilisateur. Ne jamais nommer les auteurs de commentaires. Ne jamais recopier une donnée de santé avec une identité. Flouter avant tout commit ; les originaux restent dans `brut/`, non commités. |
| P11 | Médias téléchargés | Pour l'analyse interne seulement, jamais republiés. |
| P12 | Boutiques clones (soyaparisfrance.com, soyaparisfr.store : paiement hors Shopify, § 15.9) | Consulter la page seulement, sans interaction. Si des annonces de clones sont trouvées, prévenir l'utilisateur (risque pour les acheteurs) et ne rien signaler soi-même. |

---

## 10. Ordre d'exécution et définition de « terminé »

**J0 (6 à 8 heures)**
1. Préparation (§ 2).
2. Étape A, Meta : 2 à 3 h, en priorité pour Q1, Q3 et Q8.
3. Étape A, Google Ads Transparency (Q2), bibliothèque TikTok et Creative Center (Q4), puis Pinterest, Snap et Microsoft avec les noms trouvés : environ 1 h 30.
4. Étape B : environ 1 h.
5. Étapes E1 et E2 : environ 1 h.
6. Étape D, si l'utilisateur est d'accord : environ 1 h.
7. Étapes E3 à E9 : environ 2 h.

**J+7 (environ 1 heure)**
- Nouveau passage sur la bibliothèque Meta (page principale, FR et ALL), sur la bibliothèque TikTok et sur Google Ads Transparency : Library ID nouveaux ou arrêtés, variation de couverture par annonce.
- Puis l'étape C, environ 2 h.

**Terminé quand :**
- chaque annonce a sa ligne complète dans `inventaire.tsv`, avec une capture par affirmation ;
- chaque source a sa ligne dans `01_bibliotheques.md`, y compris les résultats nuls accompagnés de leur requête témoin ;
- Q1 à Q10 sont soit tranchées, soit déclarées « non tranchée » avec la raison ;
- toutes les estimations d'intensité sont étiquetées [hypothèse], avec leur formule.

---

## Sources vérifiées le 26/09/2026

- **Meta** :
  - [Meta Transparency Center, Ad Library tools](https://transparency.meta.com/researchtools/ad-library-tools) (données UE, archive d'un an)
  - [Graph API ads_archive](https://developers.facebook.com/docs/graph-api/reference/ads_archive/) (paramètres de recherche)
  - [adlibrary.com, DSA repositories](https://adlibrary.com/posts/eu-dsa-ad-repositories-developers) et [comparatif des 7 bibliothèques](https://adlibrary.com/posts/ad-transparency-data-landscape) (champs, source tierce)
  - [Apify, exemple de couverture UE par annonce](https://apify.com/hyperbach/meta-ads-library-scraper/examples/eu-reach-per-ad) (tiers)
- **TikTok** :
  - [Get Ad Details](https://developers.tiktok.com/doc/commercial-content-api-get-ad-details) et [Commercial Content API](https://developers.tiktok.com/products/commercial-content-api) (documentation officielle)
  - [Aide TikTok sur la bibliothèque](https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/commercial-content-library)
  - [Creative Center Top Ads](https://ads.tiktok.com/business/creativecenter/inspiration/topads/pc/en) et [How to use the Top Ads Dashboard](https://ads.tiktok.com/help/article/how-to-use-the-top-ads-dashboard)
  - capture locale `preuves/v2/pub/ttlib*.txt`, `ttlib3.net.json`
- **Google** :
  - [Transparence des annonces, France (aide officielle)](https://support.google.com/adspolicy/answer/13733850?hl=fr&co=GENIE.CountryCode%3DFR)
  - [adlibrary.com, Google Ads Transparency Center API](https://adlibrary.com/posts/google-ads-transparency-center-api) (tiers)
  - [SerpApi, Google Ads Transparency Center API](https://serpapi.com/google-ads-transparency-center-api) (valeurs de plate-forme et de format, tiers)
- **Snap** :
  - [Ads Gallery API, using the API](https://developers.snap.com/marketing-api/Ads-Gallery-Api/using-the-api)
  - réponse réelle `preuves/v2/pub/snap_all_soya.json`, interface `preuves/v2/pub/snapgal.txt`
- **Microsoft** :
  - [Ad Library API guide](https://github.com/MicrosoftDocs/Advertising/blob/main/advertising/bingads-13/guides/ad-library-api.md) et [Microsoft Ad Library](https://adlibrary.ads.microsoft.com/)
  - test du 26/09/2026 13:37 UTC (§ 0.2)
- **Pinterest** :
  - [Ads Repository](https://ads.pinterest.com/ads-repository/) (la page ne s'est pas rendue par WebFetch)
  - champs et filtres d'après [adlibrary.com](https://adlibrary.com/posts/ad-transparency-data-landscape) et [Apify](https://apify.com/codebyte/pinterest-ads-repository) : **à confirmer sur place**
- **Écosystème** :
  - [signal-arnaques 805026](https://www.signal-arnaques.com/scam/view/805026), [forum 6843](https://www.signal-arnaques.com/forum/view/6843)
  - [coupert](https://fr.coupert.com/codes-promo/soya-paris.com), [promocodie](https://fr.promocodie.com/store/soya-paris.com), [hotdeals](https://fr.hotdeals.com/code-promo/soya-paris)
  - [franceverif](https://franceverif.fr/fr/site/soya-paris.com), [scamsandbox](https://scamsandbox.com/fr/report/soya-paris.com/), [warning-trading](https://warning-trading.com/consommation/soya-paris-com-avis-escroquerie/)

**Fichiers liés**
- Dossier : `build/analyse/soya-paris/DOSSIER_SOYA_PARIS.md`
- Chapitre publicité seul : `build/analyse/soya-paris/v2/pub.md`
- Brief local existant : `build/analyse/soya-paris/BRIEF_CLAUDE_LOCAL.md`
- Preuves publicitaires : `build/analyse/soya-paris/preuves/v2/pub/`
- Réponses brutes de ce jour (Microsoft, urlscan), copiées dans le dépôt : `build/analyse/soya-paris/v3/preuves_cloud/v3ads/`
