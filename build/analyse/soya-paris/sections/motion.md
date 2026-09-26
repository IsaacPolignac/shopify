## Animations et micro-interactions : SOYA PARIS (soya-paris.com)

*Section vérifiée par contre-analyse le 25/09/2026. Chaque affirmation renvoie à sa preuve. « Constaté » = lu dans le code, la configuration ou une capture. « Déduit » = conclusion tirée de ces éléments sans observation directe.*

### 1. Méthode, sources et limites

Cette section s'appuie sur quatre sources.

- **Mesures navigateur du 25/09/2026** (`cap/*.json`) :
  - `anims` : animations en cours juste après la série de captures du premier écran, soit environ 6,5 s après l'événement `load` ;
  - `scrollAnims` : animations relevées pendant un défilement lent ;
  - `info.kf` : `@keyframes` présents ;
  - `info.reveal` : éléments marqués pour une apparition au défilement.
- **Captures du premier écran** à t = 0, 1,2 s, 3,5 s et 6,5 s après `load` (`cap/slices/*-view-*.jpg`), datées par l'heure d'écriture des fichiers PNG (`cap/*-view-*.png`).
- **Code** :
  - thème Impact 6.4.1 (`assets/theme.js`, `assets/theme.css`, `assets/vendor.min.js` = Motion One) ;
  - HTML brut (`home.html`, `pdp3.html`) et les 19 fiches produit récupérées le 25/09/2026 (`web/p_*.html`) ;
  - fichiers des applications récupérés le 25/09/2026 (`scratchpad/soya-anim/`) : `kaching-bundles-block.js`, `kaching-bundles.css`, `countdown.js` (script Essential Countdown Timer), `klaviyo-full-forms.json` (configuration publique des formulaires Klaviyo), pages `oreiller-soya-1-0` (`v1.html`), `oreiller-soya-enfant` (`enfant.html`) et `collections/nos-best-sellers` (`col.html`).
- **Sources web** listées en fin de section (Légifrance, W3C).

Limites :

- Les vidéos et les 39 SVG de la galerie Soya 3.0 ont été bloqués pendant les captures (rectangle gris).
- L'ajout au panier ne s'est pas enregistré (`cap/funnel2.json` : panier vide). Le contenu du tiroir panier n'a donc pas été observé.
- Le navigateur de capture était réglé sur le fuseau **UTC** (aucun `timezoneId` dans `capture.cjs` ni `funnel.cjs` ; langue `fr-FR`). Cela compte pour le compte à rebours (voir §6).
- Certaines captures (accueil, fiche enfant) affichent des prix en **USD** (IP américaine). Les prix cités ici sont en **EUR** (`cap/funnel.json`, configuration Kaching, `products.json`).
- Le navigateur rapporte « linear » pour les animations CSS et les timelines Motion One, parce que la courbe est portée par les images-clés. Motion One applique par défaut `easing: "ease"` (constaté dans `vendor.min.js` : `{duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"}`). Une animation CSS déclarée sans courbe utilise aussi « ease ».

Conversion utilisée : 1 cm ≈ 37,8 px (96 dpi).

### 2. Ce qui bouge dans le premier écran

| Page | t = 0 | t = 6,5 s | Ce qui bouge |
|---|---|---|---|
| Accueil ordinateur | 00:40:33 | 00:40:25 | Seul le compte à rebours. Le héros « FRENCH DAYS » est une image fixe. |
| Accueil mobile | 00:40:06 | 00:39:59 | Compte à rebours. Logos presse fixes, défilables au doigt. |
| Fiche Soya 3.0 ordinateur | 00:01:32 | 00:01:25 | Compte à rebours. **À 6,5 s, la popup Klaviyo entre par la droite** (bord visible vers x ≈ 1 365 px ; `klaviyo-slideinright` relevé dans `cap/pdp3-d.json`). |
| Fiche Soya 3.0 mobile | 00:01:02 | 00:00:55 | Compte à rebours. |
| Fiche enfant ordinateur | 00:29:57 | 00:29:50 | Compte à rebours. La pastille « En stock » pulse déjà, sous la ligne de flottaison. |
| Couette mobile | 00:29:18 | 00:29:11 | Compte à rebours. Pastille qui pulse. |
| Collection ordinateur et mobile | 00:30:32 (ordinateur) | 00:30:07 (mobile) | Compte à rebours. Bannière en parallaxe dès le premier défilement. |

**Constaté** : le premier écran est presque immobile.

- Le héros d'accueil est un `slideshow-carousel` réglé avec `autoplay="6"` et une transition `fade_with_text`, mais il ne contient **qu'une seule diapositive** (`home.html`, 1 seul `.slideshow__slide`).
- Or le carrousel du thème ne démarre son lecteur que si `items.length>1` (`EffectCarousel`, `theme.js`) : le réglage de 6 s est inerte.
- Le texte du héros est incrusté dans l'image, pas dans le HTML. Sur ordinateur (`Web_banner_2.jpg`) : « OFFRE SPÉCIALE / FRENCH DAYS / 30 NUITS D'ESSAI », sans pourcentage (`home-d-full-00.jpg`). Sur mobile (`mobile_french_days_better.png`) : un grand « −50 % » et un bouton « −50 % SUR TOUT LE SITE » (`home-m-view-0.jpg`), alors que le bandeau annonce « Jusqu'à −60 % sur tout le site ! ».

L'œil n'est donc attiré que par le **compte à rebours**, qui change chaque seconde, puis par la **popup Klaviyo**, réglée à 12 s.

### 3. Le moteur d'animation du thème (Impact 6.4.1)

Réglages lus dans `window.themeVariables.settings` (`home.html`) :

- `headingApparition: "split_fade"`
- `staggerProductsApparition: true`
- `reduceDrawerAnimation: false`
- `reduceMenuAnimation: false`
- `showPageTransition: null` : aucune transition entre pages.

| Élément | Déclencheur | Effet | Durée | Courbe | Décalage |
|---|---|---|---|---|---|
| Titres h2 `reveal-on-scroll` (split_fade) | entrée dans l'écran, marge -100 px | chaque ligne passe de translateY(0,5 em) à 0, opacité 0 → 1 | 300 ms | ease (Motion One) | 100 ms par ligne |
| Cartes produit (`reveal-items`) | entrée dans l'écran, marge -50 px | opacité 0 → 1, translateY 15 px (≈ 0,4 cm) → 0 | 350 ms | ease | 50 ms, répartition ease-out |
| Image et texte : image | entrée dans l'écran, après chargement de l'image | fondu, scale 1,05 → 1 | 300 ms | ease | — |
| Image et texte : texte (`.prose`) | idem | fondu | 200 ms | ease | départ à +300 ms |
| Bannière de collection | entrée dans l'écran | fondu du bloc | 250 ms | ease | puis les titres |
| Parallaxe de la bannière (`parallax="0.3"`) | défilement | scale(1,3), translateY -23,1 % → 0 | liée au défilement (mesurée « 1000 ms linear ») | linéaire | — |

**Constaté** :

- La mesure confirme ces valeurs (`js|350|ease|PRODUCT-CARD`, `js|300|linear|DIV.media-with-text__media`, `js|200|ease|DIV.prose`, `Animation|1000|linear|PICTURE` sur la collection).
- Les titres, les cartes, les blocs image et texte et la parallaxe sont conditionnés à `prefers-reduced-motion: no-preference` (`SectionHeader`, `RevealItems`, `MediaWithText`, `ImageBanner._setupParallax`). Le CSS remet l'opacité à 1 quand JavaScript est désactivé (`@media (scripting:none)`).
- **Exception** : le fondu de 250 ms de la bannière de collection n'est pas conditionné (`ImageBanner.connectedCallback` lance `timeline10` sans test). C'est un fondu, sans déplacement.

**Jugement** : utile et discret. C'est la meilleure partie du site en matière de mouvement.

### 4. Survols et retours d'action

- **Cartes produit** (souris uniquement, `pointer:fine`) :
  - l'image secondaire remplace la principale par un fondu enchaîné de 200 ms ease-in-out (14 cartes `product-card--show-secondary-media` sur l'accueil) ;
  - le bouton d'achat rapide apparaît en 200 ms (translateY 5 px → 0) ;
  - au survol d'une pastille de couleur, l'image de la variante s'échange en 150 ms ease-in (fondu sortant puis entrant).
- **Logos presse** (Santé magazine, ELLE, Le Figaro Santé, Forbes, Marie Claire, VOGUE) : zoom 1,06 en **1 500 ms**, cubic-bezier(.22,1,.36,1), activé par `body.zoom-image--enabled` et `.group:hover`. Les 6 logos sont des `<a>` **sans href** et avec `alt=""` (`home.html`, `<image-link-blocks>`).
  - **Déduit** : le zoom au survol suggère un élément interactif, alors qu'aucun lien ne mène à un article. Sans `href`, le lien n'est ni focalisable au clavier ni signalé par un curseur de main.
  - **Jugement** : gadget qui laisse croire à une référence consultable. Les dossiers ne permettent pas de dire si des articles existent : on constate seulement qu'aucun n'est cité.
- **Liens du menu** : opacité 0,7 en 200 ms (`.link-faded-reverse`).
- **Boutons principaux** : **aucune règle `.button:hover`** dans `theme.css`. Seules les couleurs sont transitionnées (150 ms).
- **Clic sur « Ajouter au panier »** (`CustomButton`) : le texte monte de 10 px et s'efface en 150 ms, puis 3 points de chargement clignotent (opacité 1 → 0,1, 350 ms aller-retour, décalés d'≈ 117 ms). **Jugement** : utile, il confirme que l'action est prise en compte.

### 5. Navigation : en-tête, tiroirs, accordéons, galerie

- **En-tête non collant** : `--sticky-header-enabled:0`, ni `sticky` ni `hide-on-scroll` sur `<store-header>`. Le bandeau du compte à rebours n'est pas collant non plus (`stickyBar: false`). Au défilement, l'accès au panier disparaît (déduit). Sur la fiche produit, seule la barre d'achat rapide prend le relais.
- **Tiroirs** (panier, recherche, menu) :
  - voile en fondu de 150 ms ;
  - panneau révélé par `clip-path` en **400 ms, cubic-bezier(.86,0,.07,1)** ;
  - contenu et bouton de fermeture en fondu de 150 ms.
  - Sens d'arrivée : le panier vient de la droite sur ordinateur et du bas sur mobile (< 700 px), le menu mobile de la gauche, la recherche du haut sur mobile.
  - Avec mouvement réduit, tout devient un simple fondu de 200 ms.
  - Pendant le chargement, la recherche affiche des squelettes (`pulse` 2,5 s en boucle).
- **Accordéons** : 18 sur la fiche Soya 3.0 (`is="accordion-disclosure"`). Hauteur animée en 250 ms ease, contenu en fondu de 150 ms avec un léger décalage de 4 px.
- **Barre d'achat collante** (`product-quick-add`) :
  - elle apparaît quand le formulaire sort de l'écran et disparaît au pied de page ;
  - 150 ms ease-in sur l'opacité et la visibilité ; sur mobile, montée de 10 px en plus ;
  - à partir de 700 px de large, c'est une carte de 35 rem (≈ 14,8 cm) en bas à droite, avec image, nom et prix ; **sous 700 px, elle ne montre qu'un bouton « Ajouter au panier »**, sans prix (`buy-buttons class="sm:hidden"` et bloc prix `hidden sm:grid`) ;
  - **constaté sur ordinateur et tablette : elle affiche « €139,90 »**, le prix natif, alors que le bloc d'offres affiche **69,90 €** pour 1 oreiller. La cause est lisible dans la configuration Kaching : `updateNativePrice: false`.
- **Galerie** :
  - carrousel en défilement natif avec accroche (`scroll-snap`), vignettes à gauche ;
  - sur ordinateur, un clic sur la moitié droite ou gauche de l'image fait avancer ou reculer ;
  - **le zoom PhotoSwipe est désactivé** : `allow-zoom` est absent de `pdp3.html` (0 occurrence), alors que `ProductGallery` ne s'abonne à `lightbox:open` que si cet attribut existe ;
  - **déduit du code, non testé sur appareil** : sur Safari iOS, `MediaCarousel` annule le geste de pincement (`gesturestart` → `preventDefault()`) et ne l'utilise que pour ouvrir ce zoom absent. Le pincement sur la galerie ne produit donc rien. La balise viewport contient en plus `maximum-scale=1.0`.
  - Les 39 visuels sont des SVG lourds (35,7 Mo au total, voir le README).
- **Avant/après** (« Un bon sommeil commence par une bonne posture ») : curseur glissable (`split-cursor`) qui met à jour `--clip-path-offset`.
  - Le visuel « avant » montre un halo rouge sur la nuque, le visuel « après » une ligne verte le long de la colonne (`pdp3-d-full-02.jpg`).
  - Le mécanisme est efficace, mais il sert ici une promesse médicale.
- **Avis à onglets** (Douleur cervicale / Migraines / Posture / Ronflements) :
  - transitions écrites à la main : « 0.15s all » sur les onglets, `transform 0.4s ease-in-out`, et sur mobile un glissement au doigt en `translateX` de 0,3 s ease ;
  - **constaté** : ce bloc est du **HTML déjà rendu, collé dans une section « Custom Liquid »** (`custom_liquid_rMBeUk`). Il porte l'identifiant d'un autre gabarit (`shopify-section-template--24247348527436__ev_review_8Lp6Dy`, alors que la page est `template--32068952621388`). Le même identifiant figure sur la fiche Soya 2.0 (`web/p_oreiller-soya-2-0.html`). Les avis affichés sont donc du texte figé, non relié à une application d'avis.

### 6. La couche « urgence » : compte à rebours, stock, pastille

**Compte à rebours FRENCH DAYS** (application Essential Countdown Timer).

La configuration lue dans `home.html` et `pdp3.html` est la suivante :

- `timerType: "recurring"` ;
- `recurringDays: [1,2,3,4,5,6,0]` : tous les jours ;
- `endType: "never"`, `startType: "today"` ;
- dates d'origine : `startDate` `2025-10-16T22:00:00Z`, `endDate` `2025-10-21T21:59:00Z`, soit une fenêtre du 17 au 21 octobre 2025 (heure de Paris) ;
- `onceItEnds: "do-nothing"`, `closeButton: false`, `stickyBar: false` ;
- créée le 19/10/2025, modifiée le 18/09/2026.

**Constaté** : la configuration porte des dates d'octobre 2025, mais le réglage « récurrent, sans fin » fait tourner le compteur chaque jour, onze mois plus tard.

Le script de l'application (`countdown.js`, fonction `L()`) prend l'heure et la minute de `startDate` et de `endDate` **dans le fuseau du navigateur du visiteur** (`getHours`, `setHours`) et les applique à la date du jour :

- navigateur en UTC (celui des captures) : fin à 21:59 ; entre 21:59 et 22:00, `r = 0` ; ensuite, `r = fin + 24 h − maintenant` ;
- navigateur à l'heure de Paris (déduit de la lecture du code) : fin chaque jour à **23:59 heure de Paris**, et nouveau décompte à minuit.

Les observations collent exactement à ce calcul. Onze lectures, faites sur des pages et à des moments différents, donnent toutes une fin à **21:59:00–21:59:02 UTC**, soit 23:59 à Paris en heure d'été :

| Relevé | Heure (UTC) | Compteur | Fin calculée (UTC) |
|---|---|---|---|
| `home-d-view-0` | 21:18:28,9 | 00:40:33 | 21:59:01,9 |
| `home-m-view-0` | 21:18:54,9 | 00:40:06 | 21:59:00,9 |
| `col-d-view-0` | 21:28:30,0 | 00:30:32 | 21:59:02,0 |
| `enfant-d-view-0` | 21:29:03,4 | 00:29:57 | 21:59:00,4 |
| `soie-d-view-0` | 21:29:23,6 | 00:29:37 | 21:59:00,6 |
| `couette-m-view-0` | 21:29:43,0 | 00:29:18 | 21:59:01,0 |
| `v1-d-view-0` | 21:30:02,6 | 00:28:59 | 21:59:01,6 |
| `pdp3-d-view-0` | 21:57:28,8 | 00:01:32 | 21:59:00,8 |
| `pdp3-m-view-0` | 21:57:58,7 | 00:01:02 | 21:59:00,7 |
| `funnel.json` timerA1 | 21:58:21,5 | 00:00:39 | 21:59:00,5 |
| `funnel2.json` | 22:00:05,4 | 23:58:56 | 21:59:01,4 (lendemain) |

L'heure est celle de l'écriture du PNG, un peu postérieure à la capture, d'où l'écart de 0 à 2 s. Entre les deux, le compteur affiche 00:00:00 à 21:59:21 UTC (`cap/funnel.json`, timerB).

Cela corrige le README : le compteur ne vise pas minuit, mais **23:59, et il repart chaque nuit**.

- Rôle : presser.
- Animation : aucune ; les chiffres changent chaque seconde.
- Jugement : pression artificielle.
- Risque juridique : l'article L121-4 du Code de la consommation répute trompeuses les pratiques qui ont pour objet, 7°, « de déclarer faussement qu'un produit ou un service ne sera disponible que pendant une période très limitée […] afin d'obtenir une décision immédiate ». Une échéance qui se renouvelle chaque jour, sur une configuration « sans fin », en est un **indice fort**. La qualification relève d'un juge.

**Barre de stock figée.** Sur la fiche Soya 3.0 (bloc `liquid_JrVWqc`) :

- le texte « 89 % du stock déjà écoulé » accompagne un `div` en `width:89%` inscrit en dur (dégradé #E67C7C → #D94343 → #B43131), sans aucun script dans le bloc ;
- « Dernière mise à jour : il y a quelques secondes » est du texte fixe ;
- « Plus que quelques exemplaires en stock » est un `span` (bloc `liquid_JwXkcr`) dont la couleur #E53935 porte le commentaire CSS « Rouge d'urgence ».

**Constaté sur la fiche Soya 2.0** (`web/p_oreiller-soya-2-0.html`) : le même bloc `liquid_JrVWqc` affiche « **78 %** du stock déjà écoulé », une barre en `width:78%`, la même phrase « il y a quelques secondes » et le même message rouge. Le pourcentage est donc saisi à la main, fiche par fiche.

En face, les données Kaching de la fiche Soya 3.0 indiquent pour toutes les variantes `inventoryManagement: null` et `inventoryPolicy: "continue"`, avec des quantités négatives (`-3888` pour le blanc ; `cap/funnel.json`, `pdp3.html`). Shopify ne suit pas le stock de ce produit. C'est un **indice de fausse rareté**, pas une preuve : le stock réel de l'entrepôt n'est pas connu. Rien de ce bloc n'est animé.

**Pastille « En stock – Prêt à l'expédition ».** **Constaté sur 17 des 19 fiches produit** (toutes sauf Soya 2.0 et Soya 3.0 ; `web/p_*.html`, bloc `liquid_3Gcd4r`) :

- point vert #228B22 de 10 px (≈ 0,26 cm), 8 px sous 600 px de large ;
- `custom-stock-bounce` : scale 1 → 1,2, 1 s, boucle infinie aller-retour (`1s infinite alternate`, courbe par défaut « ease ») ;
- aucun garde-fou pour le mouvement réduit ;
- le texte est fixe en Liquid, sans lien avec l'inventaire.

Dans le bloc Liquid **voisin** (`liquid_WFwcx8`, placé juste en dessous), l'image des moyens de paiement est chargée depuis **getheyshape.com** (`heyshape-payments.svg`), un domaine étranger à Soya. C'est le cas sur les mêmes 17 fiches. Les fiches Soya 2.0 et 3.0 utilisent à la place `soya-payments.svg`, hébergé sur le CDN Shopify. C'est un **indice** de reprise de blocs d'une autre boutique.

- Rôle de la pastille : rassurer.
- Jugement : gadget, non relié au stock.

### 7. Les popups : la chaîne du « 60 % »

**Klaviyo, formulaire « Pop-up Mobile | Le Tsunami »** (`RPwwTE`, actif, modifié le 24/09/2026). Réglages (`klaviyo-full-forms.json`) :

- type FLYOUT en bas à droite (`BOTTOM_RIGHT`), collé en bas sur mobile (`DOCK_TO_BOTTOM`) ;
- délai de **12 s** (`DELAY 12`), réaffichage après 1 jour (`COOKIE_TIMEOUT 1`) ;
- 950 px de large (≈ 25,1 cm) pour au moins 540 px de haut (≈ 14,3 cm), ombre floutée de 30 px en rgba(0,0,0,.82). À l'écran, environ 951 × 581 px, soit **≈ 42 % de la surface** d'un écran 1440 × 900 (`pdp3-d-full-00.jpg`, 660 × 403 px à l'échelle 0,694) ;
- sur mobile, ≈ 476 px sur 844 (≈ 56 %), avec un voile rgba(20,20,20,.75) sur le reste (`couette-m-full-00.jpg`, `mobile_overlay`).

Animations mesurées :

- ordinateur : `klaviyo-slideinright` 1 000 ms (`cap/pdp3-d.json`, aussi sur les fiches enfant, soie et Soya 1.0) ;
- mobile : `klaviyo-fadein` 350 ms puis `klaviyo-slideindown` 1 000 ms (`cap/pdp3-m.json`, `cap/couette-m.json`).

Le déroulé compte 4 étapes :

1. « VOUS AVEZ OBTENU 60 % DE RÉDUCTION À l'occasion de la sortie de notre nouveau produit ! », puis un quiz « Quelle est votre position préférée ? » (Ventre / Côté / Dos) et les boutons « Pour moi » / « Pour un proche ».
2. Prénom et e-mail, bouton « Activer ma réduction ».
3. SMS : « Aujourd'hui seulement : REJOIGNEZ LE CLUB VIP », « Fermeture des portes ce soir à 00h ! », case « Oui, c'est mon vrai numéro ».
4. « VOTRE RÉDUCTION DE 60 % EST ACTIVÉE ! **Sur notre nouvel Oreiller Lombaire** ! », puis le mode d'emploi : ajouter un Soya au panier, puis attendre qu'« une pop-up apparaisse ». S'y ajoute une allégation de santé : « Vous pouvez (enfin) dire ADIEU à toutes vos douleurs lombaires. »

**Constaté** : l'échéance est répétée sur les quatre écrans (« PS : L'offre se termine aujourd'hui à minuit 00h. » deux fois, « Le club ferme ses portes à 00h », « se termine ce soir, à 00h ! »), alors que le formulaire se réaffiche chaque jour.

Les boutons de refus culpabilisent : « Non merci, je n'aime pas les remises. » (écrans 1 et 2, fermeture) et « Non merci, je ne veux pas être VIP. ». Ce dernier n'est pas une fermeture : c'est un **envoi vers une autre liste** (`SUBMIT_TO_LIST_AND_TRANSITION_VIEW`, liste `WZcPhv`). L'e-mail a déjà été envoyé à l'étape 2.

Enfin, deux alertes Klaviyo nommées `reviewDisclosureLanguage` et `addDisclosureBlock` ont été **écartées le 18/06/2026** (`dismissed_alerts`). Leur nom désigne un texte de mention (« disclosure ») ; leur contenu exact n'est pas dans le fichier (déduit).

**Kaching, popups après l'ajout au panier.** La configuration Kaching des fiches (vérifiée sur Soya 1.0, 2.0, 3.0 et enfant) contient **deux** popups identiques :

- une pour la fiche Soya 3.0 (créée le 18/06/2026 à 20:41 UTC) ;
- une pour la fiche Soya 2.0 (créée le 10/06/2026), dont le texte dit « Parfait avec l'oreiller Soya 2.0 ».

Les deux se déclenchent à l'ajout au panier (`triggers.addToCart: true`), une fois par jour (`displayFrequency: 1 jour`). Réglages :

- fenêtre de 400 px (≈ 10,6 cm), coins de 30 px, voile #000000b3 ;
- animation d'entrée et de sortie **« none »** : elle apparaît d'un coup.

Contenu (capture du 25/09/2026 à 22:00:12 UTC, en EUR) :

- « FÉLICITATIONS, VOUS AVEZ DÉBLOQUÉ -60 % SUR NOTRE NOUVEL OREILLER LOMBAIRE ! » ;
- 19,90 € barré 49,90 € (remise de 60 % arrondie à ,90) ;
- pastille « -60 % jusqu'à ce soir, minuit ! » ;
- allégations : « Soulagez toutes vos douleurs », « Réduit fortement les douleurs lombaires & hanches », « Traite les douleurs chroniques & mauvaises postures » ;
- refus « Non merci, je n'aime pas les cadeaux ».

**Constaté** dans `funnel-drawer-00.jpg` : la fenêtre Kaching s'est ouverte **par-dessus** la popup Klaviyo déjà affichée, donc deux fenêtres modales empilées. Elle s'est ouverte alors que le panier est resté vide (`cap/funnel2.json`) : le déclencheur réagit au clic sur le bouton, pas à un ajout confirmé (déduit).

**Déduit** : les alertes Klaviyo ont été écartées le 18/06/2026 à 20:04 UTC et la popup Kaching de la fiche 3.0 a été créée le même soir à 20:41 UTC. La chaîne Klaviyo → Kaching semble avoir été montée en une seule séance.

**Jugement** : le « 60 % » annoncé en gros ne porte que sur un produit complémentaire, ce que seul le dernier écran révèle, et la séquence enchaîne des échéances « ce soir » qui reviennent chaque jour. Il y a un risque sur l'information du prix, sur l'urgence (article L121-4, 7°) et sur les allégations de santé.

Un second formulaire Klaviyo, **« HIGH PROSPECT (Cloned) »** (`VkiJ5R`, POPUP, modifié le 28/04/2026), est actif pour une liste ou un segment ciblé (`GROUPS_TARGETING`) :

- délai de 5 s ; réaffichage après 50 jours ;
- « Juste pour vous ! », code BACK20 (-20 %), « Dépêchez-vous, ce code expire dans : » ;
- composant `COUNTDOWN_TIMER` en date « variable » de **13 minutes**, animation « pulse » ;
- clic sur le voile sans effet (`ignore_overlay_dismissal` : mobile et ordinateur) ; seul le bouton « Non merci, je ne veux pas de réduction. » ferme ;
- refus culpabilisant ici aussi.

Le minuteur est relatif à chaque affichage (déduit du type « variable »). Rien dans les dossiers ne montre que le code BACK20 expire vraiment au bout de 13 minutes. Ce formulaire n'a pas été vu à l'écran.

### 8. Vidéo et « stories »

Sur la fiche Soya 3.0, quatre bulles façon Instagram (bloc `liquid_GDmj3c`). La fiche Soya 2.0 a le même dispositif, avec le même aperçu de 10 s, mais quatre autres vidéos dont le poids n'a pas été mesuré :

- 78 px de diamètre (≈ 2,06 cm), bordure de 3 px, vidéo affichée sur 72 px ;
- au chargement (`DOMContentLoaded`), le script lance les 4 vidéos muettes (« teaser 10s »), les arrête au bout de **10 s** puis revient au début ;
- aucune image d'aperçu (`poster` absent), aucun attribut `preload` ;
- les fichiers sont les **originaux** (`/videos/c/o/v/`). Tailles (`content-length`, relevées le 25/09/2026) : **Concept 46,5 Mo**, **Lequel choisir ? 50,2 Mo**, **Avis clients 37,6 Mo**, **FAQ 109,2 Mo**, soit **243,5 Mo** pour des vignettes de 2 cm. Le navigateur n'en télécharge qu'une partie en 10 s, mais le débit servi reste disproportionné (déduit).

Le clic ouvre une fenêtre vidéo par `display:flex`, sans transition, sans fermeture par Échap et sans gestion du focus. Elle se ferme par la croix (`aria-label="Fermer"`) ou par un clic sur le voile.

Plus bas, une section vidéo **du thème** (`video_Ke4ji6`, `<video-media autoplay>`) lit une vidéo HD 1080p à 7,2 Mbit/s (58,1 Mo) en boucle et sans son :

- elle a une image d'aperçu et `preload="metadata"` ;
- la lecture démarre quand la section entre dans l'écran (`BaseMedia` : `inView`).

Rôle et jugement :

- Rôle : attirer et rassurer.
- Jugement : l'idée des stories est utile, l'exécution coûteuse.

### 9. Le bloc d'offres Kaching

- Options de la fiche Soya 3.0 : 1x à 69,90 €, 2x à 98,90 €, 3x+1 à 139,90 €, avec les badges « Pack Duo » et « Pack Famille ». Titre du bloc : « FRENCH DAYS | JUSQU'À -60% ».
- Changer d'option est **instantané** : Kaching ne définit aucune transition sur les options. Ses seules transitions concernent la carte à gratter, le voile d'enregistrement et la barre collante Kaching, toutes inactives ici (`kaching-bundles-block.js`, `kaching-bundles.css`).
- **Ajouts payants pré-cochés.** Les 5 ajouts de la fiche Soya 3.0 sont réglés sur **`preselected: true`** :
  - 1x : « +1 Housse de Rechange » ;
  - Pack Duo : deux lignes « +1 Housse de Rechange » ;
  - Pack Famille : deux lignes « +2 Housses de Rechange ».
  
  Toutes affichent 14,90 € (barré 39,90 € ou 79,80 €). Idem pour les 3 ajouts de la fiche enfant. La fiche Soya 2.0 n'a pas d'ajout. La case est visiblement cochée (`pdp3-d-full-00.jpg` en EUR ; `enfant-d-view-0.jpg`, capture en USD).
- Risque : l'article L121-17 du Code de la consommation impose au professionnel de s'assurer « du consentement exprès du consommateur pour tout paiement supplémentaire ». Il ouvre droit au remboursement quand ce paiement « résulte d'un consentement […] donné par défaut ». Un ajout pré-coché entre dans ce **risque**.
- `updateNativePrice: false` : Kaching ne met pas à jour le prix natif du thème, d'où le « €139,90 » de la barre collante (§5).
- Les animations ludiques de Kaching sont chargées mais **désactivées** : `timerEnabled`, `scratchOffEnabled` et `progressiveGiftsEnabled` sont à false, et `lowStockAlertEnabled` aussi. Il s'agit de `kaching-progressive-gift-unlock` (600 ms ease-out, montée de 32 px), `kaching-scratch-off-badge-pop` (300 ms, courbe avec rebond (.34,1.56,.64,1)) et `kaching-scratch-off-hint-draw` (2,8 s en boucle). C'est du code chargé pour rien.

### 10. Mouvement réduit (`prefers-reduced-motion`) et contenus qui bougent seuls

Le thème le respecte presque partout : 14 tests `no-preference` et 3 tests `reduce` dans `theme.js`, 4 blocs `no-preference` et 2 blocs `reduce` dans `theme.css`. Il y a deux exceptions dans le thème lui-même :

- la lecture automatique des vidéos (`video-media autoplay`, dont la vidéo HD de la fiche) ;
- le fondu de 250 ms des bannières.

Les ajouts ne le respectent pas :

- pastille de stock en boucle infinie (17 fiches) ;
- stories en lecture automatique (fiches 2.0 et 3.0).

Le compte à rebours ne bouge pas au sens de `prefers-reduced-motion`, mais il se met à jour tout seul sans pouvoir être fermé (`closeButton: false`).

Le critère WCAG 2.2.2 (« Pause, Stop, Hide ») demande un moyen de mettre en pause, d'arrêter ou de masquer :

- tout contenu en mouvement qui démarre seul, dure plus de 5 s et s'affiche à côté d'autre contenu : c'est le cas de la pastille ;
- toute information qui se met à jour automatiquement : c'est le cas du compte à rebours.

Aucun des deux n'offre ce moyen. Klaviyo n'a pas été vérifié sur ce point.

### 11. Synthèse : rôle et jugement de chaque animation

| Animation | Déclencheur | Durée | Courbe | Rôle | Jugement |
|---|---|---|---|---|---|
| Titres split_fade | défilement | 300 ms + 100 ms par ligne | ease | guider la lecture | utile |
| Cartes produit | défilement | 350 ms + 50 ms entre cartes | ease | rythmer la page | utile |
| Image et texte | défilement | 300 / 200 ms | ease | guider la lecture | utile |
| Parallaxe de la bannière | défilement | liée au défilement | linéaire | décor | neutre |
| Image secondaire au survol | survol | 200 ms | ease-in-out | informer | utile |
| Zoom des logos presse | survol | 1 500 ms | (.22,1,.36,1) | crédibilité | gadget, liens absents |
| Chargement du bouton | clic | 150 + 350 ms | ease | confirmer l'action | utile |
| Tiroirs | clic | 150 + 400 + 150 ms | (.86,0,.07,1) | naviguer | utile |
| Accordéons | clic | 250 / 150 ms | ease | informer | utile |
| Barre d'achat collante | défilement | 150 ms | ease-in | faciliter l'achat | utile, mais prix incohérent sur ordinateur |
| Compte à rebours | chaque seconde | 1 s | — | presser | pression artificielle, échéance renouvelée chaque jour |
| Barres « 89 % » (3.0) et « 78 % » (2.0) | aucun (figées) | — | — | presser | indice de fausse rareté |
| Pastille de stock | chargement | 1 s en boucle | ease | rassurer | gadget, non relié au stock |
| Popup Klaviyo | 12 s | 350 à 1 000 ms | — | capter, presser | pression et refus culpabilisants |
| Popups Kaching (2.0 et 3.0) | clic « Ajouter au panier » | 0 ms | — | vendre plus, presser | échéance quotidienne, allégations de santé |
| Stories vidéo | chargement | 10 s | — | attirer | utile mais trop lourd |
| Vidéo HD de la fiche | entrée dans l'écran | en boucle | — | montrer le produit | correcte (aperçu, lecture à l'écran), mais lourde |

### 12. Ce que Somnila doit reprendre ou éviter

**À reprendre :**

- **La grammaire discrète d'Impact** : 200 à 350 ms, courbe ease, déplacements de 15 px au plus, décalages de 50 à 100 ms, et respect systématique de `prefers-reduced-motion`, y compris pour les vidéos en lecture automatique.
- **Les retours d'action** : points de chargement sur le bouton, tiroir panier qui s'ouvre après l'ajout, accordéons.
- **L'image secondaire au survol** des cartes, pour montrer le Neck 01 de profil avec ses deux hauteurs (13 / 11 cm).
- **Une barre d'achat collante**, avec exactement le prix et l'option du bloc principal (69,90 € pour le Neck 01) sur toutes les largeurs d'écran.
- **Le format « stories »**, pour montrer le produit et non pour presser : par exemple la bascule 13 cm / 11 cm, ou la housse qu'on retire. Il faut alors une image d'aperçu fixe, une lecture au clic, des fichiers compressés (moins de 2 Mo) et une fenêtre accessible (Échap, focus).
- **Le zoom de la galerie**, activé sur de vraies photos (JPEG ou WebP) : sur un oreiller, la matière et la housse se jugent de près.

**À éviter :**

- Tout compte à rebours récurrent ou relancé à chaque visite, et toute barre de stock, « mise à jour il y a quelques secondes » ou pastille qui ne vient pas de l'inventaire réel.
- Les popups automatiques, et à plus forte raison deux fenêtres empilées ; les refus culpabilisants ; les titres qui promettent une remise ne portant que sur un autre produit ; les allégations de santé dans une popup.
- Les ajouts payants pré-cochés.
- Les animations sur des éléments non cliquables, les réglages sans effet (défilement automatique d'une seule diapositive) et le code chargé pour des fonctions désactivées.
- Les fichiers ou blocs repris d'une autre boutique, et les avis collés en HTML figé.

En une phrase : chez Soya, le mouvement du thème **explique**, tandis que les ajouts **pressent**. Somnila doit garder le premier et se passer entièrement du second, ce qui colle à sa ligne « données réelles, aucune fausse urgence ».

### Sources web consultées

- Légifrance, article L121-4 du Code de la consommation (7°, texte vérifié le 25/09/2026) : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563107
- Légifrance, article L121-17 du Code de la consommation (texte vérifié le 25/09/2026) : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032227250/2026-04-25
- W3C, WCAG 2.2, critère 2.2.2 « Pause, Stop, Hide » : https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
- Configuration publique des formulaires Klaviyo de la boutique : https://static-forms.klaviyo.com/forms/api/v7/XuYmmR/full-forms
- Script Kaching Bundles : https://cdn.shopify.com/extensions/01a0d910-705e-793a-92d8-1ac2989952ea/kaching-bundles-2003/assets/kaching-bundles-block.js
- Script Essential Countdown Timer : https://cdn.shopify.com/extensions/01a0a516-d34f-795a-ab91-339831e1344c/countdown-timer-30-97/assets/countdown_timer_essential_apps.min.js
- Vidéos (en-têtes `content-length` relevés le 25/09/2026) : les 5 URL de `cap/videos.txt`
- Pages de la boutique récupérées le 25/09/2026 : https://soya-paris.com/products/oreiller-soya-1-0, https://soya-paris.com/products/oreiller-soya-2-0, https://soya-paris.com/products/oreiller-soya-3-0, https://soya-paris.com/products/oreiller-soya-enfant, https://soya-paris.com/collections/nos-best-sellers et les 19 fiches de `web/p_*.html`
