# Audit de la couverture marketing du dossier SOYA PARIS, et plan de collecte pour la session locale

**Ce que j'ai lu :** les § 0, 1, 2, 8, 9, 13, 14, 16, 17 et 19 de `DOSSIER_SOYA_PARIS.md`, `BRIEF_CLAUDE_LOCAL.md`, `v2/pub.md` et `v2/voc.md`. Ces deux fichiers reprennent mot pour mot les § 16 et § 19, mais leurs sous-sections sont numérotées « 15.x » : leurs renvois internes (« § 15.2 ») ne pointent donc pas vers le bon endroit du dossier. Côté Somnila : l'avatar `build/design-v4/avatar-somnila.html`, le kit `build/launch/ADS.md`, `EMAILS.md`, `SOCIAL.md` et `BRAND_BOOK.md`.

**Vérifications faites depuis le cloud le 26/09/2026, entre 13:30 et 13:50 UTC :**
- API publique Microsoft Ad Library : aucun annonceur « soya paris », aucune annonce en France pour « soya-paris », « soya-paris.com » ou « oreiller soya ».
- urlscan.io : 14 scans du domaine, aucune URL avec des paramètres de campagne.
- Autocomplétion Google en français (`suggestqueries`, `hl=fr&gl=fr`, depuis une IP américaine) : « soya paris avis », « trustpilot », « téléphone », « suivi commande », « boutique », « 3.0 ».
- Réponses HTTP : Milled 403, Google Trends 429, Pinterest ads repository 200, amazon.de/adlibrary 200.
- `preuves/v2/avis/avis_classes.tsv` (2 390 avis, texte intégral) est bien dans le dépôt. Il n'a jamais servi à construire l'avatar.

---

## 1. Ce qui est déjà couvert (à ne pas refaire)

| Sujet | Où | Solidité |
|---|---|---|
| Identité, opérateur, 5 boutiques, FREYJA, MERCURE, clones | § 0, § 15 | solide |
| Positionnement déclaré, ton, récit douleur → solution, archétype | § 2.1, § 2.4, § 2.8 | solide |
| Cible implicite (femme de 35 à 50 ans, couple, foyer) | § 2.5 | **mince** (5 signaux tirés du site) |
| Inventaire des preuves d'autorité (presse, ostéopathes, N°1, 96/91/87 %) | § 2.6, § 15.3 | solide |
| Versionnage 1.0 / 2.0 / 3.0 et architecture de gamme | § 2.7, § 7.4 | solide |
| Pile technique marketing (pixels, CAPI, Triple Whale, Klaviyo, 10 applications) | § 0, § 8.1 | solide |
| Canaux : Meta, TikTok (identité seule), Google Search et Shopping gratuit, organique nul | § 8.2, § 16.3, § 17.9 | solide sur l'existence, pas sur le volume |
| Calendrier promotionnel (16 versions du thème, « soldes », « déstockage ») | § 8.3, § 16.8 bis, § 17.4 | solide |
| Popups Klaviyo « Le Tsunami » et « HIGH PROSPECT » (BACK20, minuteur de 13 min) | § 8.4 | solide |
| Leviers de persuasion (10) et versions honnêtes | § 8.5 | solide |
| CRM et après-vente (aucune fidélité, ParcelPanel qui masque la Chine) | § 8.6 | partiel (flux e-mail et SMS inconnus) |
| Réputation Trustpilot, sites de vérification | § 8.7, § 19.3 | solide |
| Stratégie reconstituée en 7 étapes, arithmétique du panier, points de rupture | § 8.8 | solide |
| UX jusqu'au clic « Ajouter au panier », popups comparées | § 9.1 à § 9.5 | panier et paiement **non observés** |
| 17 vidéos Meta, au moins 7 textes, variantes A à G | § 16.4 | partiel (statut publicitaire déduit, sans dates ni portée) |
| Kit vidéo de novembre 2025 (4 stories, transcriptions) | § 16.5 | solide sur le contenu ; usage publicitaire déduit |
| Visuels carrés et leurs angles | § 16.6 | contenu solide, usage non vérifié |
| 11 créations et mécanique | § 16.7, § 16.8 | partiel |
| Volume publicitaire et budget | § 16.9 | **hypothèse** 25-40 % du CA, non mesurée |
| Créateurs, UGC, codes promo | § 16.10 | **mince** (recherches WebSearch US, codes non vérifiés) |
| Écosystème (page mot-clé TikTok, captation « soya paris avis », copies) | § 16.11 | partiel |
| Leçons publicité pour Somnila | § 16.12, § 13.7 | solide mais pensé pour la France |
| Ventes, CA, commandes, packs, housses, lombaire | § 17.1 à § 17.5 | solide (fourchettes) |
| Trafic (SimilarWeb, HypeStat, CrUX, Tranco) | § 17.6, § 17.7 | partiel (lectures WebFetch, canaux mesurés sur ordinateur seulement) |
| Référencement : 23 requêtes | § 17.8 | **WebSearch US, pas Google.fr** ; aucune annonce SERP vue |
| Voix du client : 2 434 avis, deux flux Trustpilot, imports Loox, thèmes | § 19.1 à § 19.13 | solide |
| Produit vu par les clientes (hauteur, fermeté, odeur, housse) | § 19.7 | solide |
| Attente client → promesse Somnila (16 lignes) | § 19.14, § 13.5 | solide |
| Prix, packs, ancrage, prix de référence gonflé | § 6.5, § 7, § 17.4 | solide |
| Prix du marché (10 concurrents) | § 7.6 | prix seulement, pas les messages |
| Forces, faiblesses, menaces | § 12 | solide |
| Plan d'action Somnila (copier, éviter, face-à-face, actions) | § 13.1 à § 13.4 | solide mais en euros, pour la France |
| Limites, et ce qu'une session locale verrait en plus | § 14, § 14.1, § 16.13, § 17.11, § 19.15 | solide |

---

## 2. Ce qui manque ou est mince, sujet par sujet

### 2.0 Relire l'analyse existante : 22 points faibles à contre-vérifier

La session locale doit commencer par là et écrire un verdict pour chaque point : confirmé, corrigé ou non étayé.

1. **L'avatar du § 2.5 est déduit du site** (mannequins, « Christine R., 41 ans », quiz), jamais de données d'audience. Les répartitions de portée par âge et par sexe des bibliothèques UE peuvent le confirmer ou le démentir.
2. **Le statut publicitaire des 17 vidéos est déduit** (§ 16.4). Il faut le vérifier dans la bibliothèque Meta : date de début, active ou non, plateformes.
3. **Le budget de 3 800 à 10 400 € par jour est une hypothèse sectorielle** (§ 16.9). On peut la tester avec la portée UE publiée par annonce (méthode au § 4.1-F).
4. **« Paid Social 36,12 % » ne vaut que pour les visites sur ordinateur** (§ 17.7), alors que 78,5 % du trafic est mobile. « Display » (3e canal) n'a jamais été examiné.
5. **Les 23 requêtes SEO sont des résultats US** (§ 17.8). Aucune annonce Search ou Shopping n'a été vue sur une page de résultats.
6. **Instagram (≈ 25 000 abonnés, 27 publications) et Facebook (8 352 J'aime) ne sont pas vérifiés** (§ 16.3).
7. **La piste « LUXERY SERVICE LTD » est ouverte** (§ 16.3). Le nom de l'annonceur vérifié chez Google la tranche.
8. **« Aucun créateur » repose sur quatre recherches US** (§ 16.10). Ni le contenu de marque Meta, ni l'onglet « Autre contenu commercial » de TikTok, ni les identifications Instagram n'ont été regardés.
9. **Les codes MAMAN20, AS74, SOYA15 et SOYA10 ne sont pas vérifiés** (§ 16.10).
10. **L'usage publicitaire du kit vidéo de novembre 2025 est déduit** (§ 16.5).
11. **Les flux Klaviyo sont inconnus.** Seule l'e-mail de confirmation « Confirm Your Subscription », en anglais, est connu (§ 8.6).
12. **Le panier, le paiement et AfterSell n'ont pas été observés** (§ 9.2, § 14) : montant réellement facturé, couleur de la housse pré-cochée, offre après paiement.
13. **Le « Direct » à 82 % (HypeStat) est expliqué par une hypothèse non vérifiée** (§ 17.9).
14. **L'absence d'articles de presse n'est pas prouvée** : les sites des médias n'ont pas été interrogés (§ 2.6).
15. **Les annonces Amazon « SWZEC » ne sont pas vérifiées** (§ 8.2).
16. **Les concurrents français ne sont comparés que sur les prix et le trafic** (§ 7.6, § 17.7). Rien sur leurs messages, leurs annonces ou leurs offres.
17. **La leçon de calendrier est française** (§ 13.7, § 17.10 : « concentrer sur janvier-février et septembre »). Elle ne se transpose pas telle quelle au marché américain de Somnila.
18. **La portée du post à « 10 K réactions »** (≥ 1 million d'affichages) repose sur une hypothèse d'une réaction pour 100 affichages (§ 16.9).
19. **Les commentaires d'annonces ne sont connus que par les captures incrustées dans une vidéo** (§ 16.5). Aucun corpus n'a été lu.
20. **La réutilisation d'avis Loox dans les annonces n'a pas été cherchée.**
21. **La page Facebook de 2e niveau (61582665196548) et l'ID propriétaire 357304574142341 ne sont pas élucidés** (§ 16.11).
22. **Le corpus d'avis du dépôt contient 1 137 avis Loox importés** (horodatés 00:00:00). Tout travail d'avatar ou de vocabulaire doit les exclure, sinon il mesure les textes de l'opérateur et non ceux des clientes.

### 2.1 Avatar client

**Couvert.** Profil déduit (§ 2.5) ; attentes et déceptions (§ 19.7, § 19.14) ; quiz « Pour moi / Pour un proche » (§ 8.4).

**Manque, point par point :**

- **Démographie mesurée.** L'âge et le sexe réellement touchés par chaque annonce UE (champ Meta `age_country_gender_reach_breakdown`, découpage TikTok par âge, sexe et pays), ainsi que la répartition France / Belgique / Suisse. Rien de cela n'est mesuré aujourd'hui. Signal faible déjà disponible : SimilarWeb donne France 89,89 % et Belgique 5,56 %.
- **Psychographie.** Rapport au corps, fatalisme (« j'ai tout essayé »), méfiance envers la publicité, rapport au prix (« 12 € sur Temu »), confiance accordée au kiné.
- **Situations d'achat.** Moment (soir, week-end, lendemain de mauvaise nuit), appareil (78,5 % mobile), point d'entrée (Reels, fil, Google marque), achat pour soi ou en couple. Le corpus contient déjà environ 22 avis qui citent « pub », Facebook, Instagram ou TikTok (sondage rapide, motifs non validés).
- **Déclencheurs.** Réveil douloureux, oreiller aplati, cadeau, temps fort promotionnel, vidéo vue plusieurs fois.
- **Objections.** À classer par étape (avant le clic, sur la fiche, après l'achat) à partir des commentaires d'annonces (absents du dossier), des questions posées sous les vidéos et des suggestions Google (« téléphone », « suivi commande », « trustpilot » : anxiété d'après-achat, constaté par l'autocomplétion).
- **Vocabulaire.** Banque de verbatims clients, tirée seulement des avis authentiques (Trustpilot tous flux, Loox horodatés à la seconde) et des commentaires. Mots de la douleur, du résultat, du doute, de la matière.
- **Niveau de conscience (Schwartz).** Aucun classement des annonces ni des pages par niveau de conscience du prospect (unaware → most aware), ni du stade de sophistication du marché français. Hypothèse de départ à tester : annonces surtout au niveau « conscient du produit » (offre, « Élu… ») ; marché au stade 3-4 (mécanismes « 2 hauteurs », « mousse intelligente 3.0 »).
- **Jobs-to-be-done.** Aucune formulation du « job » ni des quatre forces (poussée, attraction, anxiété, habitude). Le dossier Somnila en a une pour la dormeuse de côté américaine ; il n'en existe aucune pour la cliente de Soya.
- **Qui achète pour qui.** Sondage du corpus (motifs non validés, imports inclus) : 76 avis citent un conjoint, 30 un parent ou un enfant, 19 un cadeau. Les packs Duo et Famille dominent les volumes (§ 17.5). Le chiffre « pour un proche » du quiz Klaviyo est invisible.

**Déjà dans le dépôt, jamais exploité :** `preuves/v2/avis/avis_classes.tsv`, `tp_corpus.json`, `loox_reviews.json`, les transcriptions des 4 stories, le JSON Klaviyo (`mkt/kl_v7.json`, choix du quiz).

### 2.2 Inventaire publicitaire complet

**Couvert.** Planchers : 17 vidéos, au moins 7 textes, 1 campagne Search, 4 vidéos verticales.

**Manque.**
- Nombre d'annonces actives et inactives sur 12 mois, par page et par identité.
- Ancienneté de chaque annonce (date de début, jours de diffusion) : les annonces longues sont les gagnantes probables.
- Nombre de versions par création et doublons sous plusieurs identifiants. La bibliothèque Meta affiche « plusieurs versions » et « N publicités utilisent cette création et ce texte » (libellés à constater) : c'est le signal de passage à l'échelle.
- Formats : vidéo ou image, carrousel, catalogue dynamique, ratio, durée, plateformes (Facebook, Instagram, Audience Network, Messenger, Threads).
- Accroche des 3 premières secondes : image, texte à l'écran, première phrase.
- Angles, promesses, offres et CTA.
- Pages d'atterrissage, et paramètres UTM ou `tw_` qui révèlent la nomenclature des campagnes.
- Portée UE, âge, sexe, pays, ciblage déclaré, payeur et bénéficiaire.
- Pinterest : balise 2613625264959 installée, répertoire jamais interrogé.
- Snap : relevé fait, mais la requête « LUXERY SERVICE » a échoué en 429.
- Google : annonces Search, Shopping et YouTube, annonceur vérifié.
- Amazon (bibliothèque UE) : jamais interrogé.
- Bing : fait depuis le cloud, 0 annonce (à refaire une fois par mois).

### 2.3 Matrice accroche × angle × offre × format

**Absente.** Le § 16.7 liste 11 créations, sans croisement ni pondération. Il faut un tableau croisé en nombre d'annonces et en portée UE cumulée, pour savoir quel couple accroche et offre porte la diffusion.

### 2.4 Cadence de test créatif

**Absente.** Il manque :
- l'histogramme des dates de début (nouvelles annonces par semaine) ;
- la durée de vie médiane ;
- le taux d'arrêt à 7 et 14 jours ;
- les familles d'itération (même script, accroche changée ; même vidéo, texte changé ; 2024 → 2025) ;
- les relances d'une même création sous un nouvel identifiant.

Méthode : un relevé quotidien des annonces actives pendant 7 jours, en parallèle de `inv.py`.

### 2.5 Créateurs, UGC, influence, codes promo

**Mince.** Il manque :
- la recherche de contenu de marque Meta (« partenariat rémunéré » Facebook et Instagram) ;
- l'onglet TikTok « Autre contenu commercial », dont l'existence est constatée dans `preuves/v2/pub/ttlib3.txt` ;
- les identifications Instagram (`/tagged/`) ;
- les vidéos d'utilisatrices sur TikTok (déballage, avis), les questions et les réponses sous ces vidéos ;
- l'identité et le statut des deux présentateurs récurrents : même visage dans d'autres marques du même opérateur (FREYJA, MERCURE) ? acteurs de plateformes UGC ?
- les codes promo testés **visuellement** (sans les saisir au paiement) : le texte des agrégateurs, Dealabs, la présence d'un programme d'affiliation (paramètres `ref`, `sca_ref`, `aff` dans les liens sortants des sites « Soya Paris avis »).

### 2.6 Contenu organique par réseau

**Mince.** Il manque :
- **Instagram** : abonnés réels, nombre et dates des publications, 12 dernières (format, accroche, vues), bio, lien de bio, identifications, et « À propos de ce compte » (date d'inscription, pays du compte, anciens noms d'utilisateur ; libellés à constater).
- **Facebook** : compteurs réels, onglets Vidéos et Reels, et « Transparence de la Page » (date de création, changements de nom, pays des gestionnaires ; à constater). C'est le seul indice public sur la nationalité de l'opérateur, qui reste inconnue (§ 15.13).
- **TikTok** : vidéos d'autres comptes qui parlent de Soya.
- **YouTube** : recherche, commentaires.
- **Pinterest** : épingles pointant vers le domaine, bloqué depuis le cloud.

### 2.7 Commentaires sous les publicités

**Absent**, à l'exception de 4 captures incrustées dans une vidéo. Il faut collecter :
- objections et questions (prix, origine, hauteur, livraison, « arnaque ») ;
- témoignages de santé, part des commentaires médicaux, réponses de la page (délai, modèle) ;
- modération : filtre « Plus pertinents » contre « Tous les commentaires », écart de compte, commentaires masqués, avertissements de clientes, liens vers Trustpilot.

L'alimentation de nouvelles vidéos par les commentaires (constatée une fois au § 16.5) doit être documentée systématiquement.

### 2.8 E-mail et SMS

**Mince.** Seuls les deux formulaires Klaviyo sont connus. Il manque :
- les flux (bienvenue, abandon de panier ou de paiement, après-achat, demande d'avis, relance housse) ;
- les campagnes (fréquence, objets, heures d'envoi, échelle des remises) et les SMS (nom d'expéditeur, fréquence, mention STOP).

Sources publiques : Milled (403 depuis le cloud, à tester en local). Sans archive publique, la seule voie est l'inscription avec une adresse dédiée, **uniquement sur décision écrite de l'utilisateur** (voir § 3.9).

### 2.9 Rétention et valeur vie client (LTV)

**Absent**, hormis le constat « aucune fidélité » (§ 8.6). Indices à exploiter :
- housses vendues seules : compteurs des fiches housses dans `inv.py` (clé `propres`) ;
- mentions de rachat dans les avis authentiques (motif à valider à la main ; le motif « recommand » est trop large) ;
- auteurs Loox horodatés présents sur plusieurs produits à des dates différentes ;
- relances après achat (si l'e-mail est observé) ;
- AfterSell (offre en un clic après paiement : impossible à observer sans achat, donc hors périmètre).

Livrable : une fourchette de LTV, étiquetée hypothèse, et un ratio LTV / CAC implicite confronté aux marges du § 18.6.

### 2.10 Psychologie des prix et des offres

**Couvert à 80 %** (§ 6.5, § 7, § 8.5, § 8.8, § 17.4). Il manque :
- la **cohérence entre l'offre de l'annonce et celle de la page** : « -30 % sur le 2ème » contre les prix des packs de la fiche ; « -50 % » contre le prix de référence ;
- l'analyse de l'**effet leurre** entre 1x, Duo et Famille (69,90 €, 49,45 € et 34,98 € par oreiller), les terminaisons en ,90, l'habillage « offert », la double remise à l'écran ;
- le **montant réellement facturé** (panier) ;
- les prix affichés en Belgique et en Suisse ;
- le prix vu dans les annonces Shopping, et l'écart entre prix Shopping, fiche et JSON-LD (139,90 €).

### 2.11 Preuves sociales

**Couvert** sur le site (§ 1, points 1-2 ; § 2.6 ; § 19). Il manque la preuve sociale **dans les annonces** :
- compteurs de réactions, commentaires et partages de chaque annonce ;
- captures d'avis ou de commentaires, « Élu », « 100 000 », Trustpilot montré ou non ;
- note Merchant Center affichée dans Shopping ;
- réutilisation des photos d'avis Loox dans les publicités.

### 2.12 SEO sur Google.fr et annonces visibles dans les résultats

**Mince** : tout a été fait avec WebSearch US. Il manque :
- les 23 requêtes refaites sur Google.fr depuis l'IP française, avec pour chacune : annonces Search (texte, domaine affiché, extensions), carrousel « Produits sponsorisés » (marchands, prix, notes), résultats naturels, « Autres questions posées », recherches associées ;
- sur chaque annonce, le menu « À propos de cet annonceur » (nom vérifié et pays), **sans cliquer sur l'annonce** ;
- Google Trends (FR, 5 ans) pour la demande de marque et la saisonnalité, comparée à Wopilo, Tediber, Derila, Emma et Dodo ;
- l'autocomplétion (un premier relevé est fait) ;
- le profil de liens : 348 liens retour depuis 150 domaines, dont 65 à Singapour (HypeStat, § 17.7), jamais qualifié (réseau de sites, relations presse achetées ?).

### 2.13 Places de marché

**Non vérifié** (§ 8.2, § 18.4). À ouvrir :
- Amazon.fr (ASIN B0FCXR3BDF et B0FWQHLZL2, marque SWZEC, annonces sponsorisées) ;
- Cdiscount (vendeur tiers repéré sur « oreiller soya 3.0 avis ») ;
- ManoMano, Leboncoin et Vinted (revente d'oreillers Soya : indicateur de volume et de déception) ;
- TikTok Shop FR, cité par un avis (« 2 fois moins cher ») ;
- AliExpress et Temu (le même oreiller à 12-20 € selon 6 avis) ;
- Google Lens sur les packshots.

### 2.14 Presse, relations presse et affiliation

**Mince.** Les 6 logos presse (Santé magazine, ELLE, Le Figaro Santé, Forbes, Marie Claire, VOGUE) ne sont pas vérifiés sur les sites des médias. Aucun contenu sponsorisé n'a été recherché. Les sites « Soya Paris avis » (meilleur-oreillercervical.fr, hadlemans.fr, glowchicparis, glowupbyparis) n'ont pas été examinés comme **affiliés** (liens sortants et leurs paramètres).

### 2.15 Positionnement face aux concurrents français

**Mince** : prix (§ 7.6), trafic (§ 17.7) et partage des résultats naturels (§ 17.8) seulement. Il manque, pour Wopilo, Tediber, Emma, Dodo, Derila, La Maison de l'Oreiller, NuageConfort, Eveeo (ces quatre-là ont une audience proche selon SimilarWeb), Inphysio, Ergosia, ZenPur et Pilloway :
- les annonces actives et leur ancienneté ;
- le registre (médical, confort, design) et les allégations ;
- l'offre, l'essai, la garantie, le délai.

Livrables : carte de positionnement et matrice des messages. **Somnilys** (somnilys.com, oreiller à 128 €, § 7.6) porte un nom très proche de Somnila : à regarder aussi sous l'angle de la marque (risque de confusion, dépôt).

### 2.16 Angles morts absents de la demande, à ajouter

- **Display et publicité native** : « Display » est le 3e canal sur ordinateur, et Derila est à 42 % de Display. Pages d'avant-vente (« advertorials ») Taboola ou Outbrain ? Signaux : paramètres `utm_source`, `tw_source`, `tblci`, `obOrigUrl` dans les archives, pages `/pages/` et `/blogs/`.
- **Pages d'atterrissage dédiées** : liste de `/pages/*` et `/blogs/*` via le sitemap et les archives CDX ; outils de page (PageFly, Replo, GemPages).
- **Reciblage** : ce que voit une personne qui a visité le site (séquence, offre, délai). Instructif, mais cela laisse une trace dans les audiences de Soya : option soumise à l'utilisateur (§ 3.9).
- **Demande de marque dans le temps** (Trends) mise en regard des compteurs de ventes du § 17.
- **Transparence de la page Facebook et « À propos » Instagram** : seul indice public sur le pays de l'opérateur.
- **Transposition américaine** : pour calibrer les leçons, appliquer la même grille à 2 ou 3 annonceurs américains d'oreillers ergonomiques. Attention : aux États-Unis, la bibliothèque Meta ne montre que les annonces actives, sans portée ni ciblage (§ 3.1).

---

## 3. Sources à ouvrir en local, et ce qu'elles donnent

### 3.1 Bibliothèques publicitaires (DSA, article 39) : champs vérifiés à la source

**Le cadre légal.** L'article 39 du DSA oblige les très grandes plateformes à tenir un registre des annonces avec :
- (a) le contenu, dont le produit ou la marque ;
- (b) la personne pour le compte de qui l'annonce est diffusée ;
- (c) la personne qui a payé, si elle est différente ;
- (d) la période de diffusion ;
- (e) le ciblage éventuel et ses principaux paramètres, y compris les exclusions ;
- (f) les communications commerciales déclarées (article 26(2), soit les partenariats de créateurs) ;
- (g) le nombre total de destinataires touchés et, le cas échéant, sa répartition par État membre.

Source consultée : texte de l'article 39.

**Meta Ad Library (Facebook, Instagram, Messenger, Audience Network, Threads)**
- **URL par page :**
  - `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=FR&media_type=all&search_type=page&view_all_page_id=61565502837799`
  - refaire avec `country=ALL`, `BE`, `CH`, `GB` et `US`, puis avec les ID `61582665196548` et `357304574142341`.
- **URL par mot-clé :** `…&search_type=keyword_exact_phrase&q=%22soya%20paris%22`, puis « soya-paris.com », « SOYA 3.0 », « oreiller soya », « Élu Meilleur Oreiller Orthopédique ». Ces recherches attrapent aussi les autres identités, les copies et d'éventuelles pages de créateurs.
- **Champs (référence ArchivedAd) :**
  - pour toutes les annonces : identifiant de bibliothèque, `ad_creation_time`, `ad_delivery_start_time` et `stop_time`, textes (`ad_creative_bodies`), titres (`ad_creative_link_titles`), descriptions et légendes du bloc d'appel, `ad_snapshot_url`, `page_id` et `page_name`, `publisher_platforms`, `languages` ;
  - pour les annonces diffusées dans l'UE : `eu_total_reach` (« estimated combined ad reach for all locations inside the European Union ») ; `age_country_gender_reach_breakdown` (répartition des comptes touchés au Royaume-Uni et dans l'UE) ; `beneficiary_payers` (« available only for ads delivered to the EU ») ; `target_ages`, `target_gender` (Women, Men, All) et `target_locations` (inclus et exclus, Royaume-Uni et UE) ; `total_reach_by_location` ;
  - dépense et impressions : **annonces politiques seulement**, donc pas pour Soya.
- **Couverture et conservation :** les annonces qui ont fait une impression dans l'UE, affichées tant qu'elles sont actives puis archivées un an. Hors UE (États-Unis), une annonce commerciale n'apparaît que tant qu'elle est active, sans portée ni ciblage (une annonce qui n'a touché aucun lieu de l'UE n'est renvoyée par l'API que si elle est politique).
- **Interface :** la section transparence UE d'une annonce (« Voir les détails ») montre payeur et bénéficiaire, portée totale, portée par pays, âge et sexe, et ciblage. Libellés français exacts à relever.
- **API `ads_archive` :** exige la confirmation d'identité (facebook.com/ID) et un compte développeur, d'après des sources secondaires ; la page officielle a répondu 403. Décision de l'utilisateur, sinon collecte par l'interface, annonce par annonce.
- **Contenu de marque :** base consultable des contenus « partenariat rémunéré » actifs sur Facebook et Instagram (Meta Transparency Center). Chercher « Soya Paris » comme marque partenaire.
- **À relever aussi :** l'en-tête de page de la bibliothèque (transparence de la page : création, changements de nom, pays des gestionnaires ; à constater).

**TikTok Commercial Content Library**
- **URL :** `https://library.tiktok.com/ads?region=FR&adv_name=soya`. Période la plus large (12 mois) ; refaire avec « soya paris », « SOYA PARIS » et le domaine ; région « tous les pays de l'UE », BE et CH. Le détail d'une annonce est sous `library.tiktok.com/ads/detail/?ad_id=…`. Onglet « Autre contenu commercial » (constaté dans `preuves/v2/pub/ttlib3.txt`).
- **Champs (API Get Ad Details) :**
  - annonceur et paiement : `business_name`, `paid_for_by` ;
  - dates : `first_shown_date`, `last_shown_date` ;
  - portée : `unique_users_seen`, `unique_users_seen_by_country`, découpage par âge et sexe par pays ;
  - ciblage : âge (13-17 à 55+), sexe, pays, `interest`, `video_interactions`, `creator_interactions`, `number_of_users_targeted`.
- **Couverture :** EEE, Suisse et Royaume-Uni (sources secondaires).
- **Depuis le cloud :** 421 « system busy ». Le « 0 annonce » était un artefact.
- **À ouvrir en plus :** TikTok Creative Center (Top Ads, Keyword Insights, région FR, secteur maison ; URL et accès à relever) pour les repères de la catégorie.

**Google Ads Transparency Center (Search, Shopping, YouTube, Display, Maps, Play)**
- **URL :** `https://adstransparency.google.com/?region=FR&domain=soya-paris.com`, puis `region=anywhere`. Recherche par nom : « SOYA », « LUXERY SERVICE LTD ». Page annonceur `…/advertiser/AR…?region=FR`.
- **Ce que Google publie pour l'UE (page d'aide « Ads transparency ») :** nom et lieu de l'annonceur, entité qui paie, statut vérifié ou non, informations de ciblage, nombre total de destinataires de chaque annonce, sujet de l'annonce. Plus : formats, dernière diffusion, régions.
- **À constater :** le détail d'une annonce UE (première et dernière diffusion, diffusions par pays en fourchettes, sélection d'audience : démographie, zones, signaux contextuels, listes de clients, centres d'intérêt, inclus ou exclus). Ces noms de champs viennent du jeu BigQuery public `bigquery-public-data.google_ads_transparency_center`, schéma non lu : je ne l'ai pas vérifié.
- **Enjeu :** c'est **le** relevé qui tranche l'annonceur vérifié (raison sociale et pays) de soya-paris.com.
- **Complément sans clic :** sur Google.fr, le menu « ⋮ » d'un résultat sponsorisé → « À propos de cet annonceur ».
- **Depuis le cloud :** captcha.

**Microsoft Ad Library (Bing)**
- **URL :** `https://adlibrary.ads.microsoft.com/`. API sans compte (limites réduites) : `https://adlibrary.api.bingads.microsoft.com/api/v1/Ads?searchText=…&countryCodes=66` (France = 66).
- **Champs :** `AdvertiserName` (raison sociale si vérifié), `AdvertiserCountry`, `IsVerified`, `Title`, `Description`, `DisplayUrl`, `DestinationUrl`. Par annonce : `PaidForByName`, `StartDate` et `EndDate` (impressions UE et EEE depuis juin 2023), `TotalImpressionsRange`, `ImpressionsByCountry` (en %), `Targets` (Gender, Age, Location, MicrosoftAudiences, AdvertiserAudiences, avec `UsedForExclusion`).
- **Constaté depuis le cloud le 26/09, vers 13:40 UTC :** 0 annonceur et 0 annonce pour Soya. À refaire une fois par mois, sans intérêt en local.

**Pinterest ads repository**
- **URL :** `https://ads.pinterest.com/ads-repository/` (répond 200 depuis le cloud, application JavaScript : à ouvrir dans Chrome). Chercher par nom d'annonceur (« SOYA PARIS », « soya »), pays FR, 12 mois.
- **Champs**, selon des sources secondaires (la page officielle n'a pas pu être lue, donc non vérifié à la source) : annonceur, dates de début et de fin, création, ciblage (pays, âge, sexe, centres d'intérêt, mots-clés et mots-clés exclus), fourchettes de portée UE.

**Snap Ads Gallery**
- **URL :** `https://adsgallery.snap.com/`. API `adsapi.snapchat.com/v1/ads_library/ads/search`.
- **Couverture :** annonces diffusées dans l'UE sur les 12 derniers mois, plus le contenu commercial organique en ligne.
- **Champs constatés** dans `preuves/v2/pub/snap_all_soya.json` : `name`, `ad_account_name`, `paying_advertiser_name`, `profile_name`, `status`, `creative_type`, `ad_type`, `ad_render_type`, `languages`, `call_to_action`, `top_snap_media_download_link`, `start_date`, `impressions_total`, `impressions_map` (par pays UE, plus TR), `targeting_v2` (`demographics` : `min_age`, `age_groups`, `languages`, `advanced_demographics` ; `devices` ; `regulated_content`), `review_status`, `rejection_reasons`.
- **À refaire :** « LUXERY SERVICE », qui avait échoué en 429.

**Amazon EU Ad Library**
- **URL :** `https://www.amazon.de/adlibrary` (répond 200 ; tester aussi la variante .fr). Couvre « all ads and affiliate marketing content shown on the Amazon EU Store within the past year ». Chercher « soya », « SWZEC » et les ASIN.

**X ads repository** (`ads.x.com/ads-repository`) : faible priorité.

### 3.2 Réseaux et organique

- **Facebook :** `https://www.facebook.com/61565502837799` (Vidéos, Reels, Photos, À propos → Transparence de la Page). Les 17 vidéos du § 16.4 : `facebook.com/61565502837799/videos/<id>/`, où l'on lit les commentaires avec le filtre « Tous les commentaires ».
- **Instagram :** `https://www.instagram.com/soya.paris/`, `/reels/`, `/tagged/`, « À propos de ce compte », hashtags `#soyaparis`, `#oreillersoya`, et les publications DEVO2kbthzt, DEVOyCFt8eG et DML-U_atCXp.
- **TikTok :** `https://www.tiktok.com/@soya.paris` (id 7670608818355012630), `https://www.tiktok.com/search?q=soya%20paris`, `https://www.tiktok.com/content/avis-oreiller-soya-paris`.
- **YouTube :** recherche « soya paris oreiller » ; chaîne UC86268FR0iH5YN-Fwr_oLMw.
- **Pinterest :** `https://fr.pinterest.com/search/pins/?q=soya%20paris`, `/source/soya-paris.com/`.
- **Communautés :**
  - Dealabs : `https://www.dealabs.com/search?q=soya%20paris` (répond 200 ; résultats pertinents non vérifiés) ;
  - signal-arnaques (403 depuis le cloud) ;
  - forums Doctissimo, Que Choisir ;
  - groupes Facebook de petites annonces (lecture seule).

### 3.3 Google.fr, SEO, demande

- **Résultats :** `https://www.google.fr/search?q=<requête>&hl=fr&gl=fr&pws=0`, en navigation privée, pour les 23 requêtes du § 17.8 et les recherches de marque. Onglet Shopping : `…&tbm=shop`.
- **Tendances :** `https://trends.google.fr/trends/explore?geo=FR&date=today%205-y&q=soya%20paris,wopilo,tediber,derila,oreiller%20ergonomique` (429 depuis le cloud). Relever les requêtes associées.
- **Autocomplétion :** `https://suggestqueries.google.com/complete/search?client=firefox&hl=fr&gl=fr&q=…` (fonctionne depuis le cloud).
- **Outils à compte :** SimilarWeb et Semrush, avec les comptes du fondateur s'il en a ; Planificateur de mots-clés Google Ads, si l'utilisateur a un compte.
- **Liens retour :** vérificateur gratuit d'Ahrefs (captcha probable).

### 3.4 E-mail et SMS

- Milled : `https://milled.com/search?q=soya%20paris` et la fiche marchand si elle existe (403 depuis le cloud).
- Nouveau relevé des formulaires : `https://fast.a.klaviyo.com/forms/api/v7/full-forms?company_id=XuYmmR` (également possible depuis le cloud), pour détecter les nouvelles variantes et les tests A/B.

### 3.5 Places de marché, revente, prix

- Amazon.fr : `https://www.amazon.fr/s?k=soya+paris+oreiller`, `/dp/B0FCXR3BDF`, `/dp/B0FWQHLZL2`.
- Cdiscount : `https://www.cdiscount.com/search/10/oreiller+soya.html`.
- ManoMano : `https://www.manomano.fr/recherche/oreiller+soya`.
- Leboncoin : `https://www.leboncoin.fr/recherche?text=oreiller%20soya`.
- Vinted, TikTok Shop, AliExpress, Temu : Google Lens sur le packshot du 3.0.

### 3.6 Presse, affiliation, sites d'avis

- Google News : `https://news.google.com/search?q=%22soya%20paris%22&hl=fr&gl=FR`.
- Pour chaque média des logos : `site:elle.fr soya oreiller`, `site:lefigaro.fr soya`, `site:santemagazine.fr soya`, `site:marieclaire.fr soya`, `site:vogue.fr soya`, `site:forbes.fr soya`, plus la recherche interne de chaque site.
- Liens sortants de `meilleur-oreillercervical.fr/soya-paris-avis/`, `hadlemans.fr/soya-paris-avis/`, glowchicparis.com et glowupbyparis.com : paramètres d'affiliation.

### 3.7 Concurrents

Les mêmes relevés (Meta en FR, Google Transparency, TikTok, Google.fr) pour wopilo.com, tediber.com, emma.fr, dodo.fr, fr.derilashop.com et derila-ergo.com, lamaisondeloreiller, NuageConfort, Eveeo, inphysio.fr, Ergosia, ZenPur, pilloway et somnilys.com. **Limite : 30 minutes par concurrent** (annonces actives, 3 plus anciennes, offre, registre).

### 3.8 Données déjà dans le dépôt, à réexploiter avant de naviguer

- `preuves/v2/avis/avis_classes.tsv`, `tp_corpus.json`, `loox_reviews.json` : pour l'avatar, en filtrant les imports (Loox à 00:00:00 UTC).
- `preuves/v2/reseau/wayback/cdx_*.txt` : paramètres d'URL. Premier sondage de `cdx_soya-paris.com.txt` : seulement `utm_source=ig`, `trustpilot`, `utm_campaign=domain_click` et un `fbclid`. Les `tw_` Google sont dans le CDX des fiches ; interroger la Wayback avec `matchType=prefix` sur `/products/` et `/pages/`.
- `preuves/v2/pub/fb_videos_webfetch.md` (textes des annonces), les transcriptions des stories, `mkt/kl_v7.json`.
- `outils/inv.py`, à lancer une fois par jour pendant 7 jours, variante par variante.
- **Absent en local :** l'espace `/tmp` du cloud (vidéos, PNG). Les 4 stories peuvent être retéléchargées depuis cdn.shopify.com (§ 16.5).

### 3.9 Règles de collecte

- Lecture seule : aucun formulaire, aucun compte chez Soya, aucun achat, aucun message, aucun commentaire ni « J'aime ».
- **Ne jamais cliquer sur une annonce Google** (le clic est facturé au concurrent) ; utiliser « À propos de cet annonceur ».
- Soya-paris.com en navigation privée, dans un profil Chrome séparé des comptes de l'utilisateur.
- Les auteurs des commentaires restent anonymes (RGPD) ; ne jamais recopier une donnée de santé nominative.
- **Options réservées à une décision écrite de l'utilisateur :**
  1. utiliser son compte Facebook pour l'API ;
  2. s'inscrire avec une adresse dédiée créée par lui, sans numéro de téléphone, pendant 30 jours ;
  3. un profil « reciblage » qui visite le site pour observer les annonces suivantes, ce qui l'ajoute aux audiences de Soya.
- Git : écrire seulement dans `build/analyse/soya-paris/v3/marketing/` ; `git pull --rebase` avant **chaque** push. Le cloud pousse sur la même branche vers 21:58 UTC après ses relevés jusqu'à 21:48.
- Chaque constat porte l'heure (UTC), l'URL, la capture, et [constaté] / [déduit] / [indice] / [non vérifié].

### Sources consultées pour cette vérification

- [DSA, article 39](https://www.eu-digital-services-act.com/Digital_Services_Act_Article_39.html)
- [Meta, référence ArchivedAd](https://developers.facebook.com/docs/marketing-api/reference/archived-ad/)
- [Meta, ads_archive](https://developers.facebook.com/docs/graph-api/reference/ads_archive/)
- [Meta, Ad Library tools](https://transparency.meta.com/researchtools/ad-library-tools)
- [TikTok, Get Ad Details](https://developers.tiktok.com/doc/commercial-content-api-get-ad-details)
- [Google, Ads transparency (UE)](https://support.google.com/adspolicy/answer/13733850?hl=en&co=GENIE.CountryCode%3DDE)
- [Microsoft, Ad Library API](https://learn.microsoft.com/en-us/advertising/guides/ad-library-api?view=bingads-13)
- [Snap, Ads Gallery API](https://developers.snap.com/marketing-api/Ads-Gallery-Api/Introduction)
- [Amazon, DSA et Ad Library](https://trustworthyshopping.aboutamazon.com/digital-services-act-dsa-amazon-eu-store-transparency-report)
- Sources secondaires, non vérifiées à la source :
  - Pinterest : [adlibrary.com, DSA repositories](https://adlibrary.com/posts/eu-dsa-ad-repositories-developers), [Tailwind](https://www.tailwindapp.com/blog/pinterest-ads-library-the-secret-tool-to-spy-strategize-and-scale) ;
  - accès à l'API Meta : [AdManage](https://admanage.ai/blog/facebook-ads-library-api) ;
  - contenu de marque Meta : [Social Media Today](https://www.socialmediatoday.com/news/meta-adds-branded-content-campaign-oversight-to-ads-library/691703/) ;
  - jeu BigQuery Google : [Marketplace](https://console.cloud.google.com/marketplace/product/bigquery-public-data/google-ads-transparency-center).

---

## 4. Cadres d'analyse et livrables, adaptés à Somnila

### 4.1 Cadres à appliquer

**A. Avatar par la donnée.** Quatre sources croisées :
1. la portée UE par âge, sexe et pays, pondérée par la portée de chaque annonce : l'audience servie par un algorithme optimisé pour l'achat, un indice de l'acheteuse, pas une preuve ;
2. les avis authentiques ;
3. les commentaires d'annonces ;
4. les requêtes (autocomplétion, « Autres questions posées », Trends).

Sortie : une fiche (démographie, psychographie, situations, déclencheurs, objections, vocabulaire), chaque trait marqué fait ou hypothèse, comme `avatar-somnila.html`.

**B. Jobs-to-be-done.** Une phrase de « job » (« Quand… je veux… pour… »), les quatre forces du progrès et la chronologie de bascule (premier déclic, recherche passive, recherche active, décision, usage, satisfaction ou retour), reconstituées sur les verbatims.

**C. Schwartz.** Chaque annonce et chaque page d'atterrissage classée sur les 5 niveaux de conscience ; stade de sophistication du marché français justifié par les mécanismes invoqués. Même exercice, en hypothèse, pour le marché américain de Somnila.

**D. Inventaire et gagnantes.** Les gagnantes probables sont :
- les annonces actives depuis 30 jours ou plus ;
- les créations dupliquées (« N publicités utilisent… », mêmes dates de début sur plusieurs identifiants) ;
- les créations relancées ;
- les parts de portée UE.

La **demi-vie créative** est la durée médiane de diffusion.

**E. Matrice accroche × angle × offre × format**, avec des types d'accroche fermés : question, affirmation choc, démonstration, preuve sociale, problème nommé, rupture visuelle. Les angles et les offres partent du § 16.7 et s'étendent.

**F. Estimation du budget.**
- Budget ≈ Σ (portée UE × fréquence) / 1 000 × CPM.
- Fréquence de 1,3 à 2,5 en prospection et plus en reciblage, CPM Meta France à sourcer : fourchettes étiquetées hypothèse.
- Comparer avec les 3 800 à 10 400 € par jour du § 16.9.
- En déduire un **CAC implicite** avec les commandes du § 17 (145 à 260 par jour), à confronter au point mort du § 18.6 (CAC de 22,8 à 41,9 € pour l'offre 1x).

**G. Cadence de test.** Nouvelles annonces par semaine, arrêts à 7 et 14 jours, familles d'itération, relevé quotidien sur 7 jours.

**H. Correspondance annonce → page.** Pour chaque annonce, la promesse et l'offre de l'annonce face à la page d'atterrissage réelle (UTM, prix, pack, compte à rebours).

**I. Commentaires.** Taxonomie fermée (objection, question, témoignage produit, témoignage de santé, plainte après-vente, « arnaque », tag d'un proche), part de chaque catégorie, taux et délai de réponse de la page, modération observée.

**J. Prix et offres.** Ancrage, leurre (Duo contre Famille), prix par unité, « offert », double remise, urgence ; les 7 principes de Cialdini ; le modèle de Fogg (motivation, capacité, déclencheur) appliqué au tunnel.

**K. Sincérité des preuves.** Note de A (vérifiable) à D (fabriquée ou invérifiable) pour chaque preuve vue en annonce et sur le site.

**L. SEO et visibilité payante sur Google.** Pour chaque requête, les éléments de la page de résultats et la part de visibilité (naturel, Search, Shopping).

**M. Positionnement concurrentiel.** Une carte à deux axes : prix effectif, et registre (« médical et urgence » d'un côté, « confort, design, transparence » de l'autre). Une matrice des messages : marques × santé, preuve, prix, essai, origine, design, délai.

**N. Rétention et LTV.** Indices, fourchette et ratio LTV / CAC, tous étiquetés.

**O. Conformité, en double lecture.**
- Chaque tactique de Soya → risque en France (déjà au § 11) → version autorisée pour Somnila **aux États-Unis**.
- Règles américaines : règle de la FTC sur les avis et témoignages (16 CFR Part 465, en vigueur depuis le 21/10/2024), Endorsement Guides (16 CFR Part 255), exigence de preuve des allégations, politique Meta sur les attributs personnels.
- Aucune allégation de santé, de toute façon.

### 4.2 Livrables attendus, dans `build/analyse/soya-paris/v3/marketing/`

1. **`00_journal.md`** : chaque relevé (UTC, URL, capture, statut), et ce qui était bloqué.
2. **`critique_dossier.md`** : les 22 points du § 2.0, avec un verdict (confirmé, corrigé, non étayé) et la preuve.
3. **`annonces_inventaire.csv`** et un résumé `.md`. Colonnes :
   - plateforme, page ou identité, identifiant de bibliothèque, statut, date de début, date de fin, jours de diffusion, plateformes ;
   - nombre de versions, « N publicités utilisent… », format, ratio, durée ;
   - accroche 0-3 s (image, texte à l'écran, première phrase), angle, promesse, offre, CTA, titre, texte principal ;
   - URL de destination, UTM, produit ;
   - portée UE, portée France, Belgique et Suisse, ciblage (âges, sexe, lieux), payeur, bénéficiaire ;
   - niveau Schwartz, famille créative, note de sincérité, capture.
4. **`annonces_portee_demographie.csv`** : annonce × pays × tranche d'âge × sexe × portée ; puis une synthèse pondérée par la portée.
5. **`matrice_accroche_angle_offre_format.md`** : tableaux croisés en nombre d'annonces et en portée.
6. **`cadence_creative.md`** : histogramme des débuts par semaine, demi-vie, familles, relevé sur 7 jours.
7. **`budget_cac_estimes.md`** : tableau de sensibilité (fréquence × CPM), CAC implicite, comparaison avec le § 16.9 et le § 18.6.
8. **`avatar_soya.md`** et **`verbatims.csv`** (source, note, date, flux, citation, catégorie). Fiche avatar, JTBD, Schwartz, et un tableau « qui achète pour qui » avec effectifs (hors avis importés).
9. **`commentaires_annonces.csv`** (anonymisé) et `commentaires_synthese.md`.
10. **`organique_reseaux.md`** : pour chaque réseau, compteurs réels, 12 dernières publications, créateurs, contenu de marque, transparence de page et « À propos ».
11. **`google_fr_serp.csv`** : requête, position naturelle, annonces Search (texte, annonceur vérifié, pays), Shopping (marchand, prix, note), « Autres questions posées ». Plus `demande_marque.md` (Trends, autocomplétion).
12. **`email_sms.md`** : flux et campagnes observés (Milled ; adresse dédiée seulement si l'utilisateur l'a autorisée).
13. **`prix_offres.md`** : correspondance annonce → page, leurres, prix par unité, prix Shopping face à la fiche.
14. **`places_de_marche.md`**, **`presse_affiliation.md`** (logo → article trouvé ou non, avec URL), **`concurrents_fr.md`** (carte, matrice des messages, 3 annonces les plus anciennes par marque).
15. **`transposition_somnila_us.md`** : pour chaque gagnante de Soya, la version Somnila.
    - Annonces en anglais, sans visage (mains, voix off, texte à l'écran), chacune montrant un fait mesuré :
      - « Flip it: 5.1 in, then 4.3 in » (13 et 11 cm) ;
      - le mètre posé sur 24.4 × 16.5 in (62 × 42 cm) ;
      - la balance à 3.1 lb (1,4 kg) ;
      - la housse retirée.
    - Offre Duo permanente, « Thirty nights to decide », aucune allégation (« pain », « relief », « orthopedic » et « doctor » bannis par le BRAND_BOOK).
    - Unités impériales et métriques ; calendrier commercial américain à reconstruire (Presidents' Day, Memorial Day, Prime Day, Labor Day, Black Friday et Cyber Monday, fêtes des mères et des pères), et non janvier-février et septembre.
    - Plan de test : 3 accroches × 2 offres × 2 formats.
    - Écarts avec `build/launch/ADS.md` et l'avatar de `design-v4`.
16. **`synthese_marketing.md`** : 10 constats classés, chacun avec sa preuve et sa décision pour Somnila, et la liste de veille mensuelle (annonces actives, nouvelles créations, prix, compteurs, annonceur vérifié Google, Bing et Snap).

### 4.3 Ordre de travail et critères de fin

**Ordre de travail :**
- **P0, ce soir :** bibliothèque Meta (page et mots-clés), Google Transparency (domaine, annonceur vérifié), TikTok, transparence de la page Facebook, « À propos » Instagram, annonces de marque sur Google.fr. Lancer aussi le relevé quotidien (`inv.py` et le nombre d'annonces actives Meta).
- **P1, jours 1 à 3 :** portée UE et démographie de chaque annonce, accroches, commentaires, organique, résultats Google.fr, places de marché, presse.
- **P2, jours 3 à 7 :** concurrents, e-mail, matrices, budget, avatar, transposition, puis contre-vérification des livrables sur les captures.

**Critères de fin :**
- chaque chiffre porte sa source, son heure et son étiquette ;
- les hypothèses sont présentées en fourchettes ;
- les avis importés sont exclus de l'avatar ;
- aucune personne privée n'est nommée ;
- le dossier v2 n'est modifié que par un addendum qui renvoie à `v3/`.
