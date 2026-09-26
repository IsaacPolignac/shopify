## 20. Laboratoire d'animation : les mouvements filmés image par image (26/09/2026)

**Méthode.** Chaque interaction a été enregistrée avec le screencast de Chrome (protocole DevTools `Page.startScreencast`). Chrome n'émet une image que lorsque l'écran change, et chaque image est horodatée : on obtient donc le vrai rythme d'affichage, pas une vidéo à cadence fixe. En parallèle, un échantillonneur tournait à chaque image rendue (`requestAnimationFrame`) et relevait `opacity`, `transform`, `clip-path`, `visibility` et la position de l'élément animé. Pour chaque transition détectée, la durée est mesurée de la première à la dernière image qui change. La courbe réelle est ensuite comparée par moindres carrés à `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `(.86,0,.07,1)` et `(.22,1,.36,1)`.

**Conditions.** Ordinateur 1440 × 900 et mobile 390 × 844, marché France (EUR), vidéos bloquées, SVG de la galerie remplacés par des rectangles gris (ils font planter le navigateur de capture, voir § 10). Enregistrements du 26/09/2026 entre 11:45 et 12:15 UTC.

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

- **Les 4 « stories » vidéo** du bloc d'achat : leurs fichiers originaux pèsent 37,6 à 109,2 Mo (§ 10), ils ont été bloqués.
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
