# Angles morts du dossier SOYA PARIS : ce que la session cloud n'a pas pu couvrir, et comment une session locale peut le combler

État au 26/09/2026. Sources lues : § 0, 2.2, 2.5, 2.6, 6.3 à 6.6, 7.3 à 7.7, 8, 9, 10.3, 11, 14, 14.1 et 15 à 20 de `build/analyse/soya-paris/DOSSIER_SOYA_PARIS.md`, les annexes B et D, `BRIEF_CLAUDE_LOCAL.md`, `outils/inv.py`, les chapitres `v2/*.md` et les preuves légères de `preuves/v2/`. Les recherches par mots-clés ont été faites sur ces fichiers.

---

## 0. Règles communes à tous les items (session locale)

1. **Synchronisation.**
   - Lancer `git pull --rebase` sur la branche `claude/pilloway-shopify-shrine-bwge6y` avant tout travail, puis avant chaque push.
   - La session cloud relève les compteurs toutes les heures jusqu'à 21:48 UTC le 26/09/2026. Elle pousse vers 21:58 UTC (annexe D.3), ce qui mettra à jour `preuves/v2/inv/` et l'annexe D.3.
   - Ne pas modifier `DOSSIER_SOYA_PARIS.md` en parallèle. Tout écrire dans `build/analyse/soya-paris/v3/` : `local.md`, `captures/`, `inv/`.
2. **Navigateur.**
   - Charger le skill `chrome-browser` avant la première action Claude in Chrome.
   - L'extension ne tourne en navigation privée que si « Autoriser en navigation privée » est activé. Sinon, créer un profil Chrome dédié, par exemple « Veille », sans connexion Facebook ni Instagram, avec l'extension installée.
   - Profil « Veille » : tout ce qui touche soya-paris.com (panier, cookies, pixels). Sinon, les pixels Meta 1581609639439558, TikTok D9PMU6BC77U7K82NLN50, Snap et Pinterest ajoutent l'utilisateur aux audiences de reciblage de Soya.
   - Profil habituel, connecté : uniquement les bibliothèques publicitaires, Instagram, Facebook et TikTok.
   - Après chaque passage sur soya-paris.com, effacer les données du site dans le profil « Veille ».
3. **Interdits.**
   - Aucun achat, aucun compte créé (ni chez Soya, ni chez Semrush ou SimilarWeb), aucun formulaire, aucun code promo saisi, aucune adresse saisie, même fictive.
   - Aucun contact avec Soya, les clones ou les fournisseurs. Aucun « j'aime », commentaire ou abonnement.
   - Arrêt avant toute saisie.
   - Ne pas chercher à identifier des personnes privées : présentateurs des vidéos, commentateurs, auteurs d'avis. Pas de reconnaissance faciale.
4. **Preuves.** Pour chaque constat, noter :
   - l'heure UTC et l'heure de Paris, l'URL exacte, la mention [constaté] ou [déduit] ;
   - une capture d'écran. Sous macOS : `screencapture -x build/analyse/soya-paris/v3/captures/<nom>.png`, qui demande l'autorisation « Enregistrement de l'écran » pour le Terminal ;
   - une copie texte de la page, des requêtes réseau ou du JSON dans `v3/captures/`.
5. **WebSearch passe par les États-Unis**, même en local. Pour tout ce qui concerne Google.fr, utiliser le vrai navigateur.

---

## 1. Identité et opérateur

### ID-1 : Annonceur vérifié Google, qui tranche la piste « LUXERY SERVICE LTD » (P1)
- **Sections** : § 0 (Canaux), § 16.1, § 16.3 (tableau et encadré sur la chaîne YouTube), § 16.7 n° 11, § 16.13.
- **Ce qui manque** :
  - le nom légal et le pays de l'annonceur vérifié qui paie les annonces vers soya-paris.com ;
  - si c'est LUXERY SERVICE LTD (Companies House n° 16489223, Londres W10, « Active proposal to strike off »), SOYA PARIS LLC ou une autre entité.
  - Aujourd'hui, le lien entre la chaîne YouTube « LUXERY SERVICE LTD » (UC86268FR0iH5YN-Fwr_oLMw, Short « Oreiller Soya 2 0 3 ») et Soya n'est qu'un « indice faible ».
- **Pourquoi le cloud n'a pas pu** : captcha google.com/sorry sur la page et sur le RPC `SearchSuggestions` (302) (`preuves/v2/pub/gat_sugg.json`, `preuves/mkt/gat.json`).
- **Procédure locale** :
  1. Ouvrir https://adstransparency.google.com/?region=FR&domain=soya-paris.com, puis la même URL avec `region=anywhere`.
  2. Refaire avec les domaines `us.soya-paris.com` et `soya-paris.us`.
  3. Cliquer sur l'annonceur, puis relever sur sa page (`/advertiser/AR…`) : nom légal, « Basé dans », identifiant AR, nombre d'annonces, formats (texte, image, vidéo), dates de dernière diffusion, régions.
  4. Dans la barre de recherche, taper « LUXERY SERVICE LTD » et « SOYA PARIS » : relever les domaines associés à chacun.
  5. Chercher les textes d'annonces Search de la campagne 22489769215 (annonce 748884517347, mot-clé kwd-390453911726, vers la fiche 2.0, du 17/02 au 20/04/2026 au moins).
  6. Regarder s'il existe des annonces Shopping ou Performance Max. Le § 16.3 les donne « non observées ».
- **À capturer** : la page de l'annonceur et 10 annonces au minimum (texte, format, dates, régions).
- **Reste impossible** : les dépenses, qui ne sont pas publiées pour les annonces commerciales, et la personne physique derrière l'entité.

### ID-2 : Bénéficiaire et payeur des annonces Meta, et transparence de la page 61565502837799 (P1)
- **Sections** : § 15.11 (page « vue seulement dans un résultat de recherche » [non vérifié]), § 15.16, § 16.2, § 16.3, § 16.13.
- **Ce qui manque** :
  - pour les annonces diffusées dans l'UE, les champs « Bénéficiaire » et « Payeur » (règlement européen sur les services numériques) ;
  - pour la page : date de création, anciens noms (FREYJA ? MERCURE ?), pays des personnes qui la gèrent.
- **Pourquoi le cloud n'a pas pu** : défi JavaScript, puis `POST __rd_verify` qui renvoie un 302 vers `/login` (`preuves/v2/pub/verify_hdr.txt`, `metalib.txt`). La page Facebook elle-même répond par un 302 vers `/login`.
- **Procédure locale** :
  1. Ouvrir https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=FR&media_type=all&search_type=page&view_all_page_id=61565502837799.
  2. Ouvrir le panneau « À propos de l'annonceur » ou « Transparence de la Page » et relever : date de création, changements de nom avec leurs dates, pays des gestionnaires, compte Instagram lié.
  3. Pour 5 annonces (les 2 plus anciennes, les 2 plus récentes, 1 vidéo du kit de novembre 2025), ouvrir « Voir les détails de la publicité », puis la section « Transparence de l'UE ». Relever le bénéficiaire, le payeur, la couverture UE, la répartition par âge, sexe et pays, et les dates de diffusion.
  4. Refaire la même chose pour l'entité 61582665196548 (`view_all_page_id=61582665196548`). Ouvrir aussi https://www.facebook.com/357304574142341, le propriétaire de `story_fbid=122111526512516761` (§ 16.11, annexe B.3).
- **À capturer** : le panneau de transparence de la page et, pour chaque annonce ouverte, le bloc bénéficiaire, payeur et couverture.
- **Reste impossible** : l'identité des personnes si seuls une société ou un pseudonyme apparaissent.

### ID-3 : Instagram @soya.paris, « À propos de ce compte » (P1)
- **Sections** : § 8.2 (≈ 25 000 abonnés [non vérifié]), § 16.3.
- **Ce qui manque** : date d'inscription, pays du compte, anciens noms d'utilisateur, publicités actives.
- **Pourquoi le cloud n'a pas pu** : `web_profile_info` a répondu « Please wait a few minutes », `require_login: true` (`preuves/v2/pub/ig_soya.paris.json`).
- **Procédure locale** : profil connecté, ouvrir https://www.instagram.com/soya.paris/, puis le menu « … » et « À propos de ce compte ».
- **À capturer** : le panneau complet, et le nombre d'anciens noms avec la liste si elle s'affiche.
- **Reste impossible** : le propriétaire réel.

### ID-4 : Registre du Wyoming, pour la « SOYA PARIS LLC » (P2)
- **Sections** : § 0 (LLC **non vérifiée**), § 2.2, § 14 (Identité), § 15.8 (« registre officiel non interrogé »).
- **Ce qui manque** : l'existence de la LLC, sa date, son statut et son agent enregistré. On veut savoir si c'est PRA-Wyoming LLC ou Republic Registered Agent, au 5830 E 2nd St, Ste 7000, Casper.
- **Pourquoi le cloud n'a pas pu** : la recherche interactive est fermée. OpenCorporates n'a été lu qu'en résumé WebFetch (curl renvoie un 403).
- **Procédure locale** :
  1. Ouvrir https://wyobiz.wyo.gov/Business/FilingSearch.aspx.
  2. Chercher « SOYA PARIS » (en « commence par », puis « contient »), puis « MERCURE PARIS », « FREYJA », « LUXERY ».
  3. Ouvrir chaque fiche.
- **À capturer** : n° de dépôt, date, statut, agent enregistré, adresse principale, dernier rapport annuel.
- **Reste impossible** : les membres de la LLC, que le Wyoming ne publie pas.

### ID-5 : Marques déposées : INPI, EUIPO, UKIPO, WIPO, USPTO (P2)
- **Sections** : § 14 (INPI et EUIPO fermés), § 15.16.
- **Ce qui manque** : un éventuel dépôt « SOYA PARIS », « SOYA », « FREYJA » ou « MERCURE PARIS ». Un dépôt donnerait le titulaire, son adresse et son mandataire.
- **Procédure locale** :
  1. Commencer par https://www.tmdn.org/tmview/, qui couvre l'EUIPO, l'INPI et l'UKIPO en une recherche.
  2. Puis https://data.inpi.fr/, https://branddb.wipo.int/ et https://tmsearch.uspto.gov/ (utile parce que us.soya-paris.com existe).
- **À capturer** : titulaire, date, classes (20 = oreillers, 24 = linge), statut, mandataire.
- **Reste impossible** : rien de plus si aucun dépôt n'existe. Une absence est elle-même un constat.

### ID-6 : Companies House (Royaume-Uni), jamais cherché pour « SOYA PARIS » (P2, non tenté)
- **Sections** : § 0 (pays de la boutique : GB, `meta.json` London), § 16.3 (seule LUXERY SERVICE LTD a été ouverte).
- **Procédure** :
  1. Ouvrir https://find-and-update.company-information.service.gov.uk/search?q=SOYA+PARIS, puis refaire avec « SOYA », « MERCURE PARIS », « FREYJA ».
  2. Pour LUXERY SERVICE LTD : ouvrir `/company/16489223/officers` et `/persons-with-significant-control`. Noter seulement s'il existe un lien avec une autre entité du dossier, sans reproduire de nom de particulier.
- **Reste impossible** : rien de bloquant. Ce site est ouvert partout ; ce n'est pas un blocage d'IP.

### ID-7 : Annuaire des entreprises (P3)
- **Sections** : § 14 (bloqué par Incapsula).
- **Intérêt marginal** : l'API recherche-entreprises a déjà été interrogée.
- **Procédure** : https://annuaire-entreprises.data.gouv.fr/rechercher?terme=SOYA%20PARIS. Refaire avec « MERCURE PARIS » et « FREYJA ».

### ID-8 : Configuration DNS et messagerie de soya-paris.com (P3, non tenté, faisable de n'importe où)
- **Procédure** : lancer `dig +short TXT soya-paris.com`, `dig +short TXT _dmarc.soya-paris.com` et `dig +short MX soya-paris.com`.
- **À relever** :
  - le fournisseur de messagerie ;
  - les jetons `facebook-domain-verification` et `google-site-verification` ;
  - l'adresse de rapport DMARC `rua`, qui peut pointer vers un domaine tiers de l'opérateur ;
  - les `include:` SPF (Klaviyo, Shopify, outil de service client).

---

## 2. Publicité

### PUB-1 : Bibliothèque publicitaire Meta, inventaire complet (P1)
- **Sections** : § 0 (budget « hypothèse… non mesurée »), § 8.2, § 16.2, § 16.4 (17 vidéos, au moins 7 textes, lus par WebFetch), § 16.7, § 16.9 (« Nombre d'annonces actives : non mesuré »), § 16.13.
- **Ce qui manque** :
  - le nombre d'annonces actives et inactives, leurs dates de début et leurs formats ;
  - les visuels eux-mêmes : seul le texte des annonces du § 16.4 est connu (« image non vue ») ;
  - les accroches, les boutons d'action et les URL de destination (fiche 3.0, fiche 2.0, publireportage ?) ;
  - les plateformes, le nombre de versions par annonce et la couverture UE par âge et par sexe.
  - On ne sait pas non plus si l'annonce F (« OFFRE DE LANCEMENT… quelques jours ») a tourné pendant des mois (§ 16.4, « Urgence de l'offre de lancement »).
- **Pourquoi le cloud n'a pas pu** : défi JavaScript puis redirection vers la connexion, y compris avec `view_all_page_id`.
- **Procédure locale** :
  1. Ouvrir l'URL par page donnée en ID-2, avec `active_status=active`, puis `all`.
  2. Relever le compteur de résultats (actives et total). Trier et capturer les 10 plus anciennes encore actives, comme le demande le brief.
  3. Ouvrir chaque annonce et noter : ID de la bibliothèque, date de début, plateformes, format, texte principal, titre, bouton, URL de destination avec ses UTM, nombre de versions, couverture UE, répartition par âge, sexe et pays.
  4. Recherche par mot-clé : https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=FR&q=soya%20paris&search_type=keyword_unordered&media_type=all, puis `q=soya-paris.com`. Repérer les annonceurs tiers : affiliés comme oreillerpillow.com ou bestoffersfinder `aff_id=71241`, et clones.
  5. Refaire avec `country=BE`, `country=CH` (§ 16.9 : Belgique et Suisse [non vérifié]), puis `US`, `GB`, `CA`, `AU` (voir AUT-5).
  6. Rattacher les 17 ID vidéo du § 16.4 aux annonces. Les ID à chercher sont 672030032315793, 3015555038626220, 630204226522716, 725548557183570, 854361433679167, 1382551946054289, 1127430468844751, 1170164804611160, 1424788815815978, 2186223432183471, 942531044896326, 1223428729960782, 4678649919030921, 1091775433016928, 4195067947410046, 1766409657383022 et 1529456688443832.
- **À capturer** : le tableau des annonces (ID, début, format, accroche, destination, couverture UE, âge et sexe) et les visuels des 10 plus anciennes et des 10 plus récentes.
- **Reste impossible** : la dépense réelle, qui n'est pas publiée pour les annonces commerciales. Voir PUB-4 pour une estimation.

### PUB-2 : Google Ads Transparency, contenu des annonces (P1)
- **Procédure** : identique à ID-1.
- **Sections** : § 16.3, § 16.7 n° 9 (« texte non vu ») et n° 10 (Shopping payant « non vu »), § 17.9.
- **À relever en plus** : les textes des annonces Search, l'existence d'annonces Shopping ou vidéo, la période « dernière diffusion ».

### PUB-3 : Bibliothèque TikTok (Commercial Content Library) (P1)
- **Sections** : § 16.1 (« le 0 annonce est un artefact »), § 16.2, § 16.3 (@soya.paris, id 7670608818355012630, créé le 05/08/2026, 0 vidéo publique, j'aime qui montent), § 16.11 (page mot-clé TikTok du 13/04/2026, avant la création du compte).
- **Ce qui manque** :
  - les annonces TikTok de Soya ou d'une identité personnalisée, avec leurs dates, leur couverture et leur ciblage ;
  - le lien avec le changement de pixel de CSH048JC77U2MN99KTU0 vers D9PMU6BC77U7K82NLN50, survenu entre le 03/08 et le 07/09/2026 (§ 15.5).
- **Pourquoi le cloud n'a pas pu** :
  - `POST /api/v1/search` a répondu 421 « system busy » ;
  - les requêtes « soya paris » et « soya-paris.com » ont répondu « params error » (`preuves/v2/pub/tt_search_*.json`, `ttlib3.net.json`).
- **Procédure locale** :
  1. Ouvrir https://library.tiktok.com/ads?region=FR&adv_name=soya, puis chercher par nom d'annonceur « SOYA PARIS », « Soya Paris », « soya.paris » et « LUXERY ».
  2. Période : du 01/07/2024 au 26/09/2026. Refaire avec la région BE.
  3. Ouvrir chaque annonce et noter : annonceur, payeur s'il est affiché, première et dernière diffusion, nombre de personnes touchées par pays, ciblage (âge, sexe, lieu, audiences personnalisées oui ou non).
  4. En option (P3) : le Creative Center, https://ads.tiktok.com/business/creativecenter/inspiration/topads, filtré sur la France et la catégorie Maison. Uniquement avec le compte existant de l'utilisateur, s'il en a un.
- **Reste impossible** : la dépense.

### PUB-4 : Remplacer l'hypothèse de budget de 25 à 40 % du CA (P1, calcul après PUB-1 et PUB-3)
- **Sections** : § 0 (Budget), § 13.7, § 16.9 (3 800 à 10 400 € par jour hors pic, hypothèse sectorielle), § 16.12 point 10.
- **Méthode** :
  1. Additionner la couverture UE des annonces actives sur une période.
  2. Impressions ≈ couverture × fréquence (hypothèse de 1,5 à 3).
  3. Appliquer une fourchette de CPM France documentée, avec sa source citée.
  4. Comparer avec la fourchette du § 16.9.
- **Reste impossible** : la dépense exacte. Le résultat reste une estimation, mais il sera fondé sur des données mesurées et non plus sur une norme sectorielle.

### PUB-5 : Annonces sur Google.fr et « À propos de cet annonceur » (P1)
- **Sections** : § 16.3, § 16.12 point 8, § 17.8, § 17.9.
- **Ce qui manque** :
  - qui achète « soya paris », « soya paris avis », « oreiller soya » : Soya, des clones de la grappe B, des affiliés, des concurrents ?
  - si Soya apparaît en annonces Search ou Shopping payantes sur les requêtes génériques.
- **Pourquoi le cloud n'a pas pu** : WebSearch, depuis les États-Unis, n'affiche pas les annonces.
- **Procédure** :
  1. Profil « Veille », ouvrir `https://www.google.fr/search?q=soya+paris&hl=fr&gl=fr&pws=0`.
  2. Pour chaque résultat « Sponsorisé », ouvrir le menu à trois points, puis « À propos de cet annonceur » : relever le nom légal et le pays.
  3. Refaire sur les 5 requêtes de marque du § 17.8 et sur 5 requêtes génériques : « oreiller ergonomique », « oreiller cervical », « oreiller mémoire de forme », « meilleur oreiller douleur cervicale », « oreiller orthopédique ».
  4. Espacer les recherches de 20 à 30 secondes pour éviter le captcha.
- **À capturer** : la page de résultats entière et chaque panneau annonceur.

### PUB-6 : Snap et Pinterest (P3)
- **Sections** : § 16.2. La requête Snap « LUXERY SERVICE » a reçu un 429 ; le répertoire Pinterest n'a pas été interrogé.
- **Procédure** :
  - https://adsgallery.snap.com/ : chercher « LUXERY SERVICE » et « SOYA ».
  - https://ads.pinterest.com/ads-repository/ : chercher « Soya » dans l'UE. La balise Pinterest 2613625264959 est installée, mais son usage est inconnu.

### PUB-7 : Chaîne YouTube LUXERY SERVICE LTD (P3, tranchée par ID-1)
- **Procédure** : ouvrir https://www.youtube.com/channel/UC86268FR0iH5YN-Fwr_oLMw puis l'onglet « À propos » : date, pays, liens. Vérifier si le Short de 17 s a servi de publicité en le recherchant dans Google Ads Transparency.

### PUB-8 : Observer le reciblage de Soya (P3, optionnel, décision explicite de l'utilisateur)
- **Principe** : visiter une fiche et ajouter au panier dans un profil connecté à Facebook, Instagram et TikTok, puis relever pendant 3 à 7 jours les annonces de reciblage reçues.
- **Précaution** : cela laisse une trace volontaire chez Soya. À ne faire que si l'utilisateur l'accepte.

---

## 3. Réseaux sociaux

### RS-1 : Instagram @soya.paris, chiffres réels et contenus (P1)
- **Sections** : § 8.2, § 16.3 (≈ 25 000 abonnés et 27 publications [non vérifié] ; publications datées par leur code court du 02/01/2025 et du 16/07/2025).
- **Procédure** :
  1. Profil connecté, ouvrir https://www.instagram.com/soya.paris/.
  2. Relever les abonnés, les publications et les abonnements.
  3. Pour les 12 dernières publications : date, format, accroche, j'aime, commentaires, vues, mention « Partenariat rémunéré ».
  4. Parcourir l'onglet « Identifié », qui contient le contenu des clientes et des créateurs, les stories à la une et le lien de la bio (UTM `link_in_bio` archivé le 22/12/2025).
  5. Ouvrir les publications https://www.instagram.com/p/DEVO2kbthzt/, https://www.instagram.com/p/DEVOyCFt8eG/ et https://www.instagram.com/p/DML-U_atCXp/.
  6. Ouvrir les pages mots-clés https://www.instagram.com/popular/coussin-soya-paris-avis/ et https://www.instagram.com/popular/oreiller-soya-30-avis/ (§ 16.11).
- **Reste impossible** : les statistiques privées (portée organique, clics).

### RS-2 : Page Facebook 61565502837799, chiffres, commentaires et avis (P2 ; transparence en ID-2)
- **Sections** : § 16.3 (8 352 mentions J'aime [non vérifié]), § 16.5 (post à 10 K réactions, 1,2 K commentaires et 1,5 K partages, en ligne au plus tard début août 2025), § 19.10 (« Ils m'ont bloquée »).
- **Procédure** :
  1. Profil connecté, ouvrir https://www.facebook.com/61565502837799 : relever les mentions J'aime, les abonnés, les publications, les Reels et l'onglet « Avis » ou « Recommandations », s'il existe (taux de recommandation, jamais relevé).
  2. Ouvrir les vidéos du § 16.4, par exemple https://www.facebook.com/61565502837799/videos/1424788815815978/.
  3. Relever par vidéo : texte intégral (pour contrôler la lecture WebFetch), réactions, nombre de commentaires, réponses de la page, commentaires santé.
  4. Retrouver le post à 10 K réactions.
- **Précaution** : quantités et citations anonymisées, aucune interaction.
- **Reste impossible** : les commentaires masqués ou supprimés par la page.

### RS-3 : TikTok en connecté, créateurs et recherches (P2)
- **Sections** : § 16.10 (aucun créateur identifié, recherches faites par WebSearch depuis les États-Unis), § 16.11.
- **Procédure** :
  1. Ouvrir https://www.tiktok.com/@soya.paris : vidéos visibles une fois connecté ? Onglets ?
  2. Faire les recherches https://www.tiktok.com/search?q=soya%20paris et https://www.tiktok.com/search?q=oreiller%20soya, triées par récentes et par populaires.
  3. Rouvrir https://www.tiktok.com/content/avis-oreiller-soya-paris.
  4. Relever : créateurs, vues, date, mention #publicité ou #ad, codes promo cités.
  5. Faire de même sur YouTube (recherche en France) et Instagram (#soyaparis).
- **Reste impossible** : les accords commerciaux entre Soya et des créateurs.

### RS-4 : Codes promo (P2)
- **Sections** : § 16.10. MAMAN20, AS74, SOYA15 et SOYA10 sont [non vérifiés] (agrégateurs en 403) ; seul BACK20 est confirmé (§ 8.4).
- **Procédure** : ouvrir et relever les codes, leurs dates et les commentaires sur :
  - https://fr.coupert.com/codes-promo/soya-paris.com ;
  - promocodie (`preuves/mkt/promocodie.html` était bloqué) ;
  - https://www.dealabs.com/search?q=soya+paris ;
  - igraal et poulpeo.
- **Reste impossible** : tester un code, ce qui demanderait une saisie au panier.

### RS-5 : Revente entre particuliers (§ 16.11, groupe Facebook, « 2 Oreillers soya Paris 3.0, 120 € ») (à ne pas faire)
- Ce sont des particuliers. Pas de collecte.

---

## 4. Panier, checkout et prix facturés

Tout se fait dans le profil « Veille », sans saisie. Après chaque étape, ouvrir https://soya-paris.com/cart.js dans un onglet et sauvegarder le JSON : `items[].final_price`, `original_price`, `discounts`, `properties`, `variant_title`, `total_price`, `cart_level_discount_applications`. C'est la preuve la plus précise, et elle n'exige aucun formulaire.

### PAN-1 : Offre 1x, total par défaut et coloris de la housse cochée d'office (P1)
- **Sections** :
  - § 1 point 7 (« Panier par défaut : 84,80 € ») ;
  - § 6.5 (« Total par défaut ») ;
  - § 7.5 (« coloris Bleu par défaut ») ;
  - § 13.3 (« 84,80 €, non vérifié au panier ») ;
  - § 14 (« Aucun parcours d'achat ») ;
  - § 18.7 : `variantGIDs: null` et `defaultVariantGID: null` ; la première variante de housse est Bleu ; en cumul, Blanc représente 40 % des oreillers mais 19 % des housses. C'est un **indice** qu'une cliente d'un oreiller blanc reçoit une housse bleue « à vérifier par un parcours d'achat réel ».
- **Pourquoi le cloud n'a pas pu** :
  - `/cart.js` était toujours à 0 article 4,5 et 6 s après le clic (`soya/cap/funnel.json`, `funnel2.json`) ;
  - cause probable : `kaching-popup-block.js` met en file tout `POST /cart/add` jusqu'à la fermeture de la popup (§ 9.2) ;
  - `/checkout` répond « Request Forbidden ».
- **Procédure** :
  1. Ouvrir https://soya-paris.com/products/oreiller-soya-3-0 et relever le prix affiché en euros, le bandeau et le minuteur.
  2. Choisir le coloris **Blanc**, garder l'offre 1x et la case housse cochée, puis cliquer « Ajouter au panier ».
  3. La popup Kaching « lombaire » apparaît : la capturer, puis choisir « Non merci, je n'aime pas les cadeaux ».
  4. Capturer le tiroir panier et `/cart.js`.
  5. Vider le panier et refaire avec **Gris** et **Beige**.
- **À capturer** :
  - lignes, **coloris de la housse** ;
  - prix unitaire, total ;
  - barre de progression, ventes croisées, cadeaux ;
  - mention des taxes et de la livraison ;
  - affichage des économies (`discountMode: saving`).
- **Reste impossible** : le montant réellement débité.

### PAN-2 : Pack Duo et pack Famille (P1)
- **Sections** : § 6.5. Pack Duo 128,70 € ; pack Famille 169,70 € [non vérifié] ; « Livraison rapide et cadeaux offerts » alors que `freeGifts: []`. § 17.2 et § 17.4 (compteurs ; le pack Famille contient 4 oreillers et 2 lignes « +2 Housses »).
- **Procédure** : même déroulé que PAN-1 avec « Pack Duo », puis « Pack Famille ». Choisir des coloris différents dans les sélecteurs (4 sélecteurs « Blanc » par défaut, § 20.2).
- **À capturer** : nombre de lignes, coloris des housses, total, cadeaux réels ou absents, correspondance avec le prix du bloc.

### PAN-3 : Deux prix pour le même oreiller (P1, risque L112-1-1)
- **Sections** :
  - § 6.3 : la barre d'achat collante affiche 139,90 € sur ordinateur face à une offre à 69,90 €, et 99,90 € face à 49,90 € sur l'oreiller enfant ; « Le prix facturé depuis cette barre est inconnu ») ;
  - § 7.3 : carrousel d'accueil avec le 2.0 à 119,90 € et « + Ajouter » ; `/collections/all` avec le 3.0 à 139,90 € ; montant facturé [non vérifié] ;
  - § 20.2 point 5.
- **Procédure** :
  1. Sur l'accueil, cliquer « + Ajouter » sur la carte Soya 2.0 à 119,90 €, puis capturer `/cart.js`.
  2. Vider le panier. Sur https://soya-paris.com/collections/all, ajouter le 3.0 affiché à 139,90 € s'il y a un ajout rapide.
  3. Vider le panier. Sur la fiche 3.0 (ordinateur 1440 px), faire défiler jusqu'à la barre collante et cliquer son bouton.
  4. Refaire l'étape 3 sur la fiche de l'oreiller enfant.
- **À capturer** : le prix dans le panier pour chaque chemin. S'il vaut 119,90 ou 139,90 €, le double prix est facturé. S'il vaut 59,90 ou 69,90 €, l'affichage est trompeur mais le prix facturé est le bas.

### PAN-4 : Popup Kaching « lombaire » acceptée (P1)
- **Sections** :
  - § 7.5 et § 8.4 : 19,90 € au lieu de 49,90 €, « jusqu'à ce soir minuit », `conditions: []` ;
  - § 17.5 : 20 à 40 % des commandes contiendraient ce coussin ;
  - § 20.2 point 6 : la popup s'ouvre ≈ 475 ms après le clic.
- **Procédure** : ajouter le 3.0 en 1x, cliquer « Profiter de l'offre (-60 %) », puis capturer le tiroir et `/cart.js`.
- **À relever** :
  - la ligne ajoutée (article, prix, nom de la remise) ;
  - la façon dont la remise est appliquée (prix modifié ou remise automatique) ;
  - si l'oreiller est bien arrivé dans le panier. Cela confirme ou non l'explication de la file d'attente du § 9.2.

### PAN-5 : Première page du paiement, sans rien saisir (P1)
- **Sections** :
  - § 7.7 : 205 variantes `taxable: false`, **indice** de TVA non collectée ;
  - § 9.2 : paiement non observé ; 10 moyens de paiement en pied de page ; AfterSell chargé ;
  - § 11 lignes 1 à 5 (mentions, CGV, rétractation, médiation), 10 (option cochée) et 14 (données) ;
  - § 18.6 : marge « TVA reversée ou non » ;
  - § 19.11 : trois avis citent des frais bancaires pour achat à l'étranger.
- **Procédure** : depuis le panier de PAN-1, cliquer « Paiement ». Capturer toute la page sans cliquer dans aucun champ.
- **À capturer** :
  - URL (`/checkouts/cn/…`), langue et devise ;
  - récapitulatif, sous-total ;
  - ligne « Taxes » ou « TVA incluse de X € », ou son absence. C'est le test direct de l'hypothèse TVA ;
  - ligne de livraison (« saisir l'adresse » ou « gratuite ») ;
  - boutons de paiement express (Shop Pay, PayPal, Google Pay) ;
  - moyens de paiement listés, dont paiement en 3 ou 4 fois ;
  - **case « M'envoyer des nouvelles et des offres par e-mail » : cochée ou non par défaut**, et case SMS ;
  - option ajoutée d'office, par exemple une protection de colis ou un pourboire ;
  - liens de pied de page vers les politiques (les ouvrir et capturer) ;
  - nom de l'entreprise affiché.
- **Ensuite** : fermer l'onglet et effacer les données du site.
- **Reste impossible** :
  - frais et options de livraison selon l'adresse, TVA calculée selon l'adresse ;
  - descripteur bancaire, pays de l'acquéreur ;
  - montant débité ;
  - e-mails de confirmation, offres AfterSell après paiement.

### PAN-6 : Nom du marchand chez PayPal (P3, optionnel, décision de l'utilisateur)
- **Procédure** : cliquer le bouton PayPal du paiement et capturer le nom du marchand sur l'écran de connexion PayPal. Fermer sans rien saisir.
- **Réserve** : le clic crée une commande PayPal non payée côté Soya. À ne faire que si l'utilisateur l'accepte.

### PAN-7 : Prix vus depuis une IP française (P1, rapide)
- **Sections** : § 14 (captures en USD, IP américaine, edge IAD) ; mission 1 du brief.
- **Procédure** : relever les prix en euros de l'accueil, de la fiche 3.0, de la fiche 2.0 et de `/collections/all`. Relever aussi le bandeau et le héros mobile, qui affichaient deux remises (« -50 % » et « -60 % ») en même temps, § 20.2 point 2.

---

## 5. Consentement cookies et pixels

### CON-1 : Bannière de consentement pour une visiteuse française (P1)
- **Sections** :
  - § 14, premier point : « la bannière de consentement vue par un visiteur français n'a pas été observée » ;
  - § 11 ligne 14 : pixels TikTok, Google Ads, Pinterest, Snapchat et Meta appelés 2,1 à 3,0 s après l'arrivée, sans interaction, depuis les États-Unis ; « comportement pour un visiteur français non vérifié », « à vérifier ».
- **Constat nouveau (fichier relu)** :
  - `preuves/soya/home.html` ne contient aucune application de consentement (ni Axeptio, ni Didomi, ni Cookiebot, ni bannière Shopify) ;
  - `webPixelsConfigList` déclare des `privacyPurposes` : 4 pixels avec ANALYTICS, MARKETING et SALE_OF_DATA ; 4 avec ANALYTICS et MARKETING ; 1 avec ANALYTICS ; **2 avec une liste vide**, qui se chargent donc sans consentement. Ces 2 pixels sont probablement les « 2 pixels non identifiés » du § 0.
- **Procédure** :
  1. Profil « Veille », données effacées. Ouvrir les outils de développement : onglet Réseau, « Conserver le journal », sans vider le cache.
  2. Ouvrir https://soya-paris.com/.
  3. Sans cliquer, pendant 15 secondes, noter la présence de la bannière, son texte, ses boutons, leur ordre et leur contraste. Vérifier que « Refuser » est aussi simple qu'« Accepter », ce que demande la CNIL.
  4. Dans la console, relever :
     - `Shopify.customerPrivacy.getRegion()` ;
     - `Shopify.customerPrivacy.shouldShowBanner()` ;
     - `Shopify.customerPrivacy.currentVisitorConsent()`.
  5. Relever les requêtes et les cookies posés avant le moindre clic (voir la liste ci-dessous).
  6. Cliquer « Refuser » : les requêtes publicitaires continuent-elles ?
  7. Nouvelle session vierge : cliquer « Accepter », puis comparer.
  8. S'il n'y a pas de bannière, le noter [constaté], avec la liste horodatée des requêtes publicitaires.
- **Requêtes à filtrer** (dont celles des iframes « web-pixels » en contexte STRICT) : `facebook|fbevents|tiktok|analytics.tiktok|snapchat|sc-static|pinimg|pinterest|googletagmanager|google-analytics|doubleclick|googleadservices|klaviyo|triplewhale|parcelpanel`.
- **Cookies à relever** : `_fbp`, `_ttp`, `_scid`, `_pin_unauth`, `_gcl_au`, `_ga`, `__kla_id`, `_tw*`.
- **À relever aussi** : si la popup Klaviyo, qui s'ouvre à 12 s et démarre en fait vers 13,5 s, apparaît avant tout consentement ; le lien « Your Privacy Choices » du pied de page vu depuis la France (§ 9.4) ; la politique de confidentialité en français (P2).
- **Reste impossible** : le traitement côté serveur (API de conversions Meta, `facebookCapiEnabled: true`), invisible depuis le navigateur.

---

## 6. Référencement sur Google.fr

### SEO-1 : Résultats sur la marque (P1)
- **Sections** : § 17.8 (23 requêtes par WebSearch, « limité aux États-Unis : ce n'est pas Google.fr » ; soya-paris.com n'apparaît que par us.soya-paris.com), § 17.12.
- **Procédure** : lancer `https://www.google.fr/search?q=<requête>&hl=fr&gl=fr&pws=0` pour « soya paris », « soya paris avis », « soya paris oreiller », « soya paris arnaque » et « oreiller soya 3.0 avis ».
- **À capturer** :
  - les 10 premiers résultats et les annonces (voir PUB-5) ;
  - l'extrait enrichi : étoiles 4,3/339, prix 139,90 € ou 69,90 € (le § 6.6 dit que « Google lit 139,90 € et 4,3 ») ;
  - les liens annexes, « Autres questions posées » ;
  - la présence de signal-arnaques, de Trustpilot, des clones et des affiliés ;
  - soya-paris.com contre us.soya-paris.com.

### SEO-2 : Les 19 requêtes génériques (P2 ; P1 pour les 5 principales)
- **Sections** : § 17.8 (Soya 0 sur 19), § 17.10 point 2.
- **Procédure** : même URL, en espaçant les recherches.
- **À capturer** : présence de Soya en naturel, en annonce Search ou en annonce Shopping ; les 5 premiers acteurs.
- **Reste impossible** : un classement personnalisé. On mesure une vue neutre.

### SEO-3 : Onglet Shopping (P2)
- **Sections** : § 6.6, § 16.3 (fiches gratuites via `sag_organic`).
- **Procédure** : `https://www.google.fr/search?q=oreiller+soya&udm=28`, ou avec `tbm=shop`.
- **À relever** : le prix affiché pour les fiches Soya (139,90 € ou 69,90 €) et le vendeur (Soya, un clone ou Cdiscount).

### SEO-4 : Pages indexées (P3)
- **Procédure** : `site:soya-paris.com` et `site:us.soya-paris.com` sur google.fr.

---

## 7. Trafic

### TRA-1 : SimilarWeb dans un vrai navigateur (P2)
- **Sections** :
  - § 17.7 : l'écran lu par WebFetch disait « Total Visits Last 3 Months » ; la lecture « août seul » (345,6 k visites) est **déduite de l'arithmétique** ; « Paid Social » 36,12 % sur ordinateur seulement ; répartition mobile non publiée ;
  - § 17.12.
- **Procédure** : ouvrir https://www.similarweb.com/website/soya-paris.com/.
- **À capturer** : le libellé exact, la courbe mensuelle, les pays, les canaux, les données démographiques (âge et sexe, utiles pour l'avatar), les comparables Wopilo et Tediber.
- **Comptes** : uniquement les comptes SimilarWeb, Semrush ou Ahrefs **déjà existants** de l'utilisateur, s'il en a. Aucune création.

### TRA-2 : Google Trends (P2, non tenté par le cloud)
- **Sections** : § 17.5 (saisonnalité : pic en janvier-février, hausse en août-septembre).
- **Procédure** : ouvrir https://trends.google.fr/trends/explore?date=today%205-y&geo=FR&q=soya%20paris,wopilo,tediber, puis sur 12 mois, et avec « oreiller ergonomique ».
- **Intérêt** : comparer la courbe de demande de marque avec les rythmes des compteurs.

### TRA-3 : Données de terrain Chrome UX Report dans PageSpeed Insights (P3, non tenté)
- **Sections** : § 10.2 et § 14 (le LCP a été mesuré depuis un centre de données, « ne décrit pas un visiteur en 4G »).
- **Procédure** : ouvrir https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fsoya-paris.com%2Fproducts%2Foreiller-soya-3-0 et relever LCP, INP et CLS des vrais utilisateurs (données d'origine).

---

## 8. Ventes et compteurs

### VEN-1 : Relevés des compteurs pendant 7 jours ou plus (P1)
- **Sections** :
  - § 14 (« Une seule journée de relevés directs… prolonger d'au moins 7 jours ») ;
  - § 17.2 (mises à jour par salves, aucune courbe horaire fiable) ;
  - § 17.12 ; § 18.10 ; annexe D.3 (lecture variante par variante) ;
  - brief, mission 6.
- **Base existante** : `preuves/v2/inv/snap-2026-09-26T094803Z.json`, `T104854Z` (incomplet pour le 3.0), `T114902Z` et `T124913Z`, plus la série du cloud jusqu'à 21:48 UTC après le pull.
- **Procédure** :
  1. `mkdir -p build/analyse/soya-paris/v3 && cd build/analyse/soya-paris/v3 && python3 ../outils/inv.py`. Le script écrit dans `./inv/`.
  2. Programmer une exécution toutes les 6 heures, par exemple `crontab -e`, puis `0 */6 * * * cd <dépôt>/build/analyse/soya-paris/v3 && /usr/bin/python3 ../outils/inv.py >> inv.log 2>&1`.
  3. Un Mac en veille ne lance pas cron : utiliser `caffeinate`, ou un agent launchd avec `StartCalendarInterval`, qui s'exécute au réveil.
  4. Comparer **variante par variante** (clé `variants`), jamais le champ `sum` : la fiche 3.0 contient aussi les 4 housses 3.0, la fiche 2.0 la housse 2.0.
  5. Garder 3 secondes entre deux requêtes. Au-delà, Shopify renvoie des pages réduites sans compteur.
- **À produire** : unités par jour pour chaque produit, sur 24 h glissantes et sur 7 jours. Signaler les remontées (réassorts, qui donnent des bornes basses) et les valeurs qui oscillent.
- **Reste impossible** : le nombre de commandes, le panachage réel des offres, les remboursements, le coût d'acquisition.

### VEN-2 : Calendrier promotionnel en direct (P2)
- **Sections** : § 16.8 bis (16 versions du thème en 17 mois), § 17.4 (urgence permanente).
- **Procédure** : à chaque relevé, noter aussi :
  - `Shopify.theme.name` ;
  - `blockTitle` Kaching ;
  - les prix 1x, Duo et Famille ;
  - la composition des packs ;
  - les réglages du minuteur (`essentialCountdownTimerConfigs`) ;
  - le bandeau.
- **Mise en œuvre** : un petit script compagnon, ou un relevé manuel quotidien.
- **Intérêt** : constater le prochain habillage (« Black November » attendu début novembre).

### VEN-3 : Numéros de commande cités dans les avis publics (P1, non tenté ; nouvelle piste)
- **Sections** : § 17.5 (145 à 260 commandes par jour sur 8 semaines, 220 à 400 en septembre, déduits des unités et d'hypothèses de packs), § 17.6.
- **Constat nouveau (fichier relu)** : `preuves/v2/avis/avis_classes.tsv` contient 7 numéros de commande de la boutique actuelle.

| Plateforme | Date de l'avis | Numéro | Indication de date de commande |
|---|---|---|---|
| Loox, 5★ | 23/03/2026 | #336869 | « une deuxième » commande, pas encore reçue |
| Trustpilot, 1★ | 20/09/2026 | n°360892 | retour demandé en juin 2026 |
| Trustpilot, 1★ | 15/09/2026 | #363631 | — |
| Trustpilot, 1★ | 14/09/2026 | #366871 | — |
| Trustpilot, 1★ | 11/08/2026 | n° 373325 | commande déjà reçue |
| Trustpilot, 1★ | 07/09/2026 | #386799 | « passée en août » |
| Trustpilot, 1★ | 21/09/2026 | #393634 | — |

- **Ordre de grandeur brut** [déduit, fragile] : de #336869 (commande passée entre le 01/03 et le 23/03/2026) à #386799 (août 2026), 49 930 numéros en 131 à 183 jours, soit **270 à 380 numéros par jour**.
- **Écart** : c'est au-dessus des 120 à 205 commandes par jour du scénario A (août hors pic, § 17.5) et des 145 à 260 du scénario B. Explications possibles :
  - annulations et commandes de test, qui consomment un numéro ;
  - commandes sans oreiller ;
  - autres canaux ;
  - numérotation non continue.
- **Procédure** :
  1. Chercher d'autres numéros, avec leur date, dans le texte intégral Loox (`preuves/v2/avis/loox_reviews.json`), dans les pages Trustpilot profondes (VOC-1) et dans les commentaires Facebook (RS-2).
  2. Ajuster une droite numéro contre date, puis rapprocher du § 17.5.
- **Précaution** : ne rien publier comme chiffre avant d'avoir consolidé cette série.

### VEN-4 : Les salves des compteurs viennent-elles d'un cache ? (P3)
- **Sections** : § 17.2 (+71 unités en 43 min puis 0 pendant 44 min ; valeurs simultanées discordantes pour la housse 2.0 : -41 569 et -41 565).
- **Procédure** : deux lectures de la fiche à 5 secondes d'intervalle, avec un paramètre `?_=<horodatage>`. Comparer `etag`, `server-timing` et les compteurs.

---

## 9. Sourcing et produit

### SRC-1 : Annonces Amazon.fr « SOYA-Paris » de la marque SWZEC (P1, rapide)
- **Sections** : § 8.2 (B0FCXR3BDF, B0FWQHLZL2 [non vérifié]), annexe B.3, § 18.4 (Amazon fermé : réponse 202 vide).
- **Procédure** : ouvrir https://www.amazon.fr/dp/B0FCXR3BDF et https://www.amazon.fr/dp/B0FWQHLZL2. Cliquer « Vendu par … », puis « Informations vendeur détaillées ».
- **À capturer** :
  - raison sociale et adresse du vendeur (affichées en application du règlement européen sur les services numériques) ;
  - prix, nombre d'avis, classement des ventes, date de première disponibilité, photos.
- **Intérêt** : si le vendeur est une usine de Shenzhen, la comparer avec Shenzhen Jintongyuan Technology / Tainengjikang (§ 18.4). C'est la piste la plus directe vers le fournisseur.

### SRC-2 : Temu et AliExpress (P2)
- **Sections** : § 18.4 (fermés : JavaScript ; captcha « punish ») ; § 18.8 lignes 4 et 6 (« Oreiller à 12€ sur Temu », non retrouvé à la relecture) ; § 19.14 ligne 5.
- **Procédure** :
  1. Ouvrir https://www.temu.com/fr-en/1pc-memory-foam-pillows-butterfly-shaped-relaxing-cervical-slow-rebound-neck-pillow-sleeping-orthopedic-pillow-bedding-g-601099547811249.html (ou le même `g-601099547811249` sur temu.com/fr).
  2. Ouvrir https://www.aliexpress.us/item/3256808598874210.html, puis essayer https://fr.aliexpress.com/item/1005008598874210.html : même fin d'identifiant, préfixe global 1005 au lieu de 3256 (correspondance fréquente, à vérifier).
  3. Faire une recherche par image dans chacune des deux applications, dans le navigateur.
- **À capturer** : prix en euros, vendeur, informations de la boutique (licence commerciale sur AliExpress), ventes, délais, photos d'avis ressemblant au 3.0 (cornes, point central froncé, bourrelet nervuré, § 18.2).

### SRC-3 : Google Lens sur les visuels de Soya (P2)
- **Sections** : § 8.1 (clic droit désactivé sur le site), § 14 (« Google Lens sur les packshots »), § 18.2 bis (2 visuels Gris « Firefly_Gemini_Flash… »), § 18.10.
- **Procédure** :
  1. Récupérer les URL des images dans https://soya-paris.com/products/oreiller-soya-3-0.json (et `oreiller-soya-enfant`, `coussin-lombaire-ergonomique-soya`, et le coussin tête de lit, via `/products.json?limit=250`).
  2. Ouvrir `https://lens.google.com/uploadbyurl?url=<URL encodée>` pour chaque image.
  3. Faire de même avec Bing Visual Search.
- **Images à passer** : les packshots du 3.0, de l'enfant, du lombaire et du coussin tête de lit.
- **Reste impossible** : prouver le fournisseur sans commander.

### SRC-4 : Vendeur tiers sur Cdiscount (P2)
- **Sections** : § 17.8 (requête « oreiller soya 3.0 avis » : Cdiscount, vendeur tiers).
- **Procédure** : ouvrir https://www.cdiscount.com/search/10/oreiller+soya.html, puis la fiche du vendeur. Relever la société, son pays, le prix, les avis.

### SRC-5 : Alibaba 1601682543310, DHgate, eBay, 1688 (P3)
- **Sections** : § 18.4 (page vide ou 403).

### SRC-6 : ZGMCX sur Amazon.com, 11/13 cm (P2, pour Somnila aux États-Unis)
- **Procédure** : ouvrir https://www.amazon.com/dp/B0GQ6QJ8JH (§ 18.4). Son format double hauteur 11/13 cm est celui du Neck 01 : c'est un concurrent direct sur le marché principal de Somnila.

**Reste impossible dans tout ce thème** : le fournisseur exact, la densité de la mousse, les cotes réelles et l'odeur. Il faudrait commander, ce que les règles excluent (§ 18.10). Contacter Made-in-China est interdit aussi.

---

## 10. Avis et voix du client

### VOC-1 : Trustpilot au-delà de la page 10 (P2, uniquement avec le compte existant de l'utilisateur, s'il le décide)
- **Sections** : § 14, § 19.15 (les pages 20 et 40 demandent une connexion ; les avis 1★ d'octobre 2024 à juillet 2026 ne sont connus que par agrégats).
- **Procédure** : ouvrir https://fr.trustpilot.com/review/soya-paris.com?stars=1&sort=recency&page=11 et les pages suivantes, puis `stars=2`.
- **À capturer** : texte, date, note, source (« lien » ou « spontané »), numéros de commande (VEN-3). Ne rien publier, ne rien signaler.
- **Reste impossible** : la cause des 85 avis positifs disparus (§ 19.5) et les échanges privés.

### VOC-2 : Page transparence Trustpilot dans le navigateur (P2)
- **Sections** : § 19.3 et § 19.13. La lecture « BasicLink = avis non vérifiés étiquetés Unprompted » repose sur une **source tierce** (stacktome) ; la page transparence n'a été lue que par WebFetch.
- **Procédure** :
  1. Ouvrir https://fr.trustpilot.com/review/soya-paris.com/transparency et capturer le texte exact.
  2. Chercher dans l'aide Trustpilot (support.trustpilot.com) « basic link » ou « lien simple » pour confirmer la lecture à la source.

### VOC-3 : Sites d'alerte et forums (P2 et P3)
- **Sections** : § 8.7 (signal-arnaques : « 61 signalements, 244 commentaires », titre seulement, 403), annexe B.3.
- **Procédure** :
  - P2 : https://www.signal-arnaques.com/scam/view/805026 ;
  - P3 : scamdoc (rechercher soya-paris.com), https://warning-trading.com/consommation/soya-paris-com-avis-escroquerie/, les-avis-clients, Dealabs, Reddit (https://www.reddit.com/search/?q=%22soya%20paris%22), forums Doctissimo.
- **À capturer** : nombre de signalements, dates, thèmes, tout numéro de commande (VEN-3).

### VOC-4 : Widget Loox affiché (P3)
- **Sections** : § 14 (« widget Loox ne s'est pas rendu, blanc de 6 335 px »).
- **Procédure** : faire défiler la fiche 3.0 dans le navigateur et capturer l'ordre des avis, les filtres, les badges « Vérifié », la part des avis avec photo, les 1★ visibles.

### VOC-5 : « Tirage au sort » et lien d'avis envoyé avant la livraison (§ 19.9, § 19.13)
- **Reste impossible** : il faudrait recevoir les e-mails de Soya. Seules les citations publiques restent exploitables.

---

## 11. E-mail, SMS et relation client

### CRM-1 : Archive d'infolettres Milled (P2, non tenté)
- **Sections** : § 8.4, § 8.6, § 19.9 (« ils envoient des newsletters pour demander des bons avis… tirées au sort »).
- **Procédure** : ouvrir https://milled.com/search?q=soya%20paris, puis `q=soya-paris.com`.
- **À capturer** : objets, fréquence, promotions, mécanique d'avis.

### CRM-2 : Popup Klaviyo dans un vrai navigateur (P3)
- **Sections** : § 8.4 (formulaire « Le Tsunami », délai 12 s ; formulaire « HIGH PROSPECT (Cloned) » avec BACK20, minuteur de 13 min, 5 s, audience ciblée), § 9.3.
- **Procédure** :
  1. Capturer l'écran 1 seulement. Ne pas cliquer « Ventre / Côté / Dos » : c'est un champ de formulaire.
  2. Relire https://fast.a.klaviyo.com/forms/api/v7/full-forms?company_id=XuYmmR pour repérer les formulaires nouveaux ou modifiés depuis le 24/09/2026.

### CRM-3 : Page de suivi ParcelPanel en français (P3)
- **Procédure** : ouvrir https://soya-paris.com/apps/parcelpanel et capturer sans saisir de numéro.

**Reste impossible (règles)** :
- séquence de bienvenue, relances de panier abandonné, e-mails après achat, SMS (expéditeur, fréquence, mention STOP) ;
- demande d'avis Loox ou Trustpilot et son moment d'envoi ;
- délai et qualité de réponse du service client ;
- adresse de retour « fournie sur demande » (§ 11 ligne 3).

---

## 12. Autres

### AUT-1 : Preuves d'autorité (P2)
- **Sections** : § 2.6 (6 logos de presse sans lien ; « sites des médias non interrogés » ; « Dr. Marc R., Chiropracteur » ; avatars des témoignages 88 à 91.png), § 11 lignes 11 et 13.
- **Procédure** :
  1. Sur google.fr, chercher `site:elle.fr "soya paris"`, puis la même chose sur sante-magazine.fr, lefigaro.fr, forbes.fr, marieclaire.fr et vogue.fr. Chercher aussi « Soya Paris » avec « publireportage » ou « brandvoice ».
  2. Passer Google Lens sur l'avatar « Dr. Marc » et sur https://cdn.shopify.com/s/files/1/0680/4589/7928/files/90.png?v=1739804305.
- **Précaution** : le seul but est de voir si ces images viennent d'une banque d'images. Ne pas chercher à identifier une personne.
- **Reste impossible** : vérifier OEKO-TEX sans numéro de certificat (https://www.oeko-tex.com/en/label-check/ l'exige). En P3, chercher le nom du fournisseur candidat dans l'annuaire CertiPUR-EU.

### AUT-2 : Marchés hors de France (P2, prioritaire pour Somnila)
- **Sections** :
  - § 14 (« Marché de Somnila » : les États-Unis d'abord, alors que le dossier compare en euros sur la France) ;
  - § 10.3 (25 hreflang en-XX vers us.soya-paris.com) ;
  - § 2.6 (« Over 200,000 users ») ;
  - § 16.9 (essais anglophones [indice faible]) ;
  - § 17.4 (8 captures Wayback en USD) ;
  - § 18.9.
- **Procédure** :
  1. Refaire PUB-1, PUB-2 et PUB-3 avec les pays US, GB, CA et AU. Une IP américaine n'est pas nécessaire.
  2. Ouvrir https://us.soya-paris.com/ et passer en USD avec le sélecteur de pays (c'est un simple réglage d'affichage). Relever les prix, les packs et les textes anglais.
- **Hors Soya, pour la stratégie Somnila** : appliquer la même méthode aux concurrents américains cités dans le dépôt (Derila, Pilloway, Comfy Sleepers, Zamat, ZGMCX, Cloudii). Le dossier ne les couvre pas.

### AUT-3 : Clones (P2)
- **Sections** : § 15.9 (grappe A ; grappe B, soyaparisfrance.com et soyaparisfr.store, Soya 3.0 à 49,90 €, paiement hors de Shopify), § 15.15 point 5.
- **Procédure** :
  1. Chercher dans la bibliothèque Meta avec `q=soyaparisfrance.com`, `soyaparisfr.store`, `soyaparisoreillerergonomique.com`, `soyapariscoussinergonomique.com` et `soyaparisconfortclothing.com`. Font-ils de la publicité, et qui paie ?
  2. Vérifier s'ils sont toujours en ligne.
- **Interdit** : ne rien soumettre sur checkout.soyaparisfrance.com.

### AUT-4 : Minuteur en heure de Paris (P3)
- **Sections** : § 11 ligne 6 ; annexe A.4 (la fin est lue dans le fuseau du navigateur, 23:59 à Paris).
- **Procédure** : ouvrir la fiche 3.0 entre 23:57 et 00:02 à Paris et capturer la remise à zéro.

### AUT-5 : Stories vidéo et affichage mobile (P3)
- **Sections** : § 20.3 (les 4 stories de 37,6 à 109,2 Mo n'ont pas été filmées ; fenêtre sans Échap), § 10.4.
- **Procédure** : filmer en GIF dans Chrome. Émulation mobile 390 × 844 pour la popup Klaviyo et le héros.

---

## 13. Pistes que le cloud n'a jamais tentées (ce ne sont pas des blocages d'IP)

Elles sont faisables en local comme dans le cloud :

- **VEN-3** : numéros de commande dans les avis. 7 sont déjà trouvés dans `preuves/v2/avis/avis_classes.tsv`.
- **ID-6** : Companies House pour « SOYA PARIS », alors que la boutique déclare GB, London.
- **ID-8** : DNS TXT, MX et DMARC.
- **ID-5** : TMview, qui cherche en une fois à l'EUIPO, à l'INPI et à l'UKIPO.
- **CRM-1** : Milled.
- **TRA-2** : Google Trends.
- **TRA-3** : données de terrain dans PageSpeed Insights.
- **VOC-3** : Dealabs, Reddit, Doctissimo.
- **RS-2** : onglet « Avis » de la page Facebook.
- **Avatar** : répartition des prénoms des auteurs d'avis (`avis_classes.tsv`), en agrégat seulement, à croiser avec les données UE âge et sexe de PUB-1 et PUB-3 et avec les données démographiques SimilarWeb. Le § 2.5 ne fait que **déduire** « une femme de 35 à 50 ans » des mannequins, de « Christine R., 41 ans » et du quiz.

---

## 14. Faiblesses de méthode du dossier à contre-vérifier (analyse de l'analyse)

1. **Budget publicitaire** (§ 0, § 16.9) : c'est une norme sectorielle de 25 à 40 %, non mesurée. À remplacer par PUB-4.
2. **Chiffre d'affaires** (§ 17.5) :
   - le panachage des offres suit trois hypothèses ;
   - la part des packs du 3.0 est transposée du 2.0 ;
   - les remboursements sont supposés entre 5 et 15 % ;
   - à confronter à VEN-3 et à PAN-1 et PAN-2 (paniers réels).
3. **Compteurs** (§ 17.2) : salves et cache possible, incohérence housse 2.0 contre oreiller 2.0 d'octobre à décembre 2025 non expliquée, provenance inconnue de l'ancien compteur (-15 293 au 19/04/2025). VEN-1 et VEN-4 y répondent.
4. **SimilarWeb** (§ 17.7) : la lecture « août seul » est déduite de l'arithmétique. TRA-1 y répond.
5. **« BasicLink »** (§ 19.3) : l'interprétation repose sur un blog tiers. VOC-2 y répond.
6. **TVA** (§ 7.7, § 18.6) : `taxable: false` n'est qu'un indice. PAN-5 (ligne des taxes) y répond.
7. **Housse bleue par défaut** (§ 18.7) : indice tiré des compteurs par coloris. PAN-1 y répond.
8. **LUXERY SERVICE LTD** (§ 16.3) : indice faible. ID-1 y répond.
9. **Textes d'annonces Facebook** (§ 16.4) : lus par WebFetch, qui résume. RS-2 et PUB-1 y répondent en verbatim.
10. **Avatar** (§ 2.5) : déduit, jamais mesuré. PUB-1, PUB-3 et TRA-1 y répondent.
11. **Cadre France et euros** (§ 14, § 18.9) : alors que Somnila vise d'abord les États-Unis. AUT-2 y répond.
12. **Expédition depuis la Chine** (§ 18.8) : indices tirés d'avis et de ParcelPanel. SRC-1 et SRC-2 peuvent les renforcer, sans preuve définitive.
13. **Écart numéros de commande contre compteurs** : 270 à 380 numéros par jour contre 120 à 260 commandes par jour estimées. À expliquer avant toute publication.

---

## 15. Ce qui reste impossible même en local

- **Achat** :
  - montant débité, descripteur bancaire, pays de l'acquéreur ;
  - frais et délais de livraison réels, transporteur, emballage, origine du colis ;
  - produit réel (densité, odeur, cotes) ;
  - offres AfterSell après paiement ;
  - e-mails transactionnels ;
  - fournisseur exact.
- **Compte ou formulaire** :
  - séquences Klaviyo (e-mail et SMS), écrans 2 à 4 du quiz vécus, codes promo testés ;
  - suivi ParcelPanel ;
  - options de livraison et taxes selon l'adresse au paiement ;
  - service client ;
  - comptes SimilarWeb ou Semrush neufs.
- **Données non publiées** :
  - dépense publicitaire exacte, coût d'acquisition, taux de retour, panachage des offres ;
  - membres de la LLC du Wyoming ;
  - cause des avis Trustpilot retirés ;
  - statistiques privées Meta et TikTok.
- **Éthique** : aucune identification des présentateurs, des commentateurs ou des auteurs d'avis.

---

## 16. Ordre d'exécution conseillé

1. `git pull --rebase`, création de `v3/`, lancement de VEN-1 : l'horloge des 7 jours démarre.
2. PUB-1 et ID-2, puis PUB-2 et ID-1, puis PUB-3 : identité, volume publicitaire et avatar. Ensuite PUB-4 (calcul).
3. PUB-5 et SEO-1 sur Google.fr.
4. CON-1 : profil « Veille » vierge.
5. PAN-7, puis PAN-1 à PAN-4, puis PAN-5.
6. ID-3 et RS-1 : Instagram.
7. SRC-1 et VEN-3.
8. Les P2 : RS-2, RS-3, RS-4, ID-4 à ID-6, TRA-1, TRA-2, SRC-2 à SRC-4, SRC-6, VOC-1 à VOC-3, CRM-1, AUT-1 à AUT-3.
9. Les P3.
10. Écrire `v3/local.md` avec une ligne par identifiant d'item, puis `git pull --rebase`, commit et push.

Fichiers utiles :
- `build/analyse/soya-paris/DOSSIER_SOYA_PARIS.md`
- `build/analyse/soya-paris/BRIEF_CLAUDE_LOCAL.md`
- `build/analyse/soya-paris/outils/inv.py`
- `build/analyse/soya-paris/preuves/v2/inv/`
- `build/analyse/soya-paris/preuves/v2/avis/avis_classes.tsv`
- `build/analyse/soya-paris/preuves/v2/avis/loox_reviews.json`
- `build/analyse/soya-paris/preuves/soya/home.html`
