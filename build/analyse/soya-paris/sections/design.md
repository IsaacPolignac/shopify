## Direction artistique et design system : relevé au pixel de soya-paris.com (25 septembre 2026)

*Section contre-vérifiée : chaque constat d'importance haute ou moyenne a été repris à la source (fichiers du dossier de preuves, captures rééchantillonnées, une URL rouverte). Les corrections et les ajouts sont récapitulés au § 13.*

### 0. Méthode, unités et limites

- **Sources** : le code du thème (`home.html`, `pdp3.html`, `assets/theme.css`), les styles calculés dans le navigateur (`cap/<page>.json` → `info.h1s`, `h2s`, `p`, `body`, `fonts`, `secs`), les captures en pleine résolution (`cap/*.png`, 1440 px en desktop, 390 px en mobile) échantillonnées pixel par pixel, les tranches `cap/slices/*.jpg`, les planches `gallery/sheet-1/2/3.jpg`, `products.json`, `cap/funnel.json`, et le fichier https://soya-paris.com/cdn/shop/files/19.svg?v=1771635093, rouvert pendant la contre-vérification.
- **Attention à la lecture des JSON** : le script de capture (`capture.cjs` l.73) n'enregistre que le **premier** élément de chaque type (`h1s` = premier `h1`, `h2s` = premier `h2`, `p` = premier `main p`). Sur la fiche, `h2s` décrit donc l'encart French Days en Helvetica, pas les titres de section.
- **Conversion** : 1 cm ≈ 37,8 px (96 dpi). Hauteurs d'écran : 900 px en desktop (1440×900), 844 px en mobile (390×844).
- **Limites** :
  - Les captures home-d, home-m, col-d, col-m et enfant-d affichent des prix en USD, à cause de l'adresse IP américaine : ce n'est pas un défaut du site. Les prix de référence en euros viennent de `cap/funnel.json` et de `catalogue.json`. Les captures en marché France (fiche, funnel, histoire, contact) n'affichent qu'un seul sélecteur, « EUR € ».
  - Les SVG de la fiche ont été remplacés par un rectangle gris #D9DEE6 « SVG lourd (placeholder) » ; leur vrai contenu est dans `gallery/`.
  - Le widget Loox est blanc dans les captures, alors que 20 images ont été chargées depuis images.loox.io (`cap/pdp3-d.json` → `third`) : le rendu du widget n'a pas été capturé.
  - La popup Klaviyo recouvre une partie des captures (fiches, collection).
  - L'ajout au panier ne s'est pas enregistré et /checkout répond « Request Forbidden » : rien n'est affirmé sur le panier ni sur le paiement.
- **Codes** : chaque constat est marqué (C) pour constaté ou (D) pour déduit. Les mots « indice » et « risque » signalent ce qui n'est pas prouvé.

---

### 1. Verdict en une minute

SOYA PARIS a l'**ossature d'une marque** : le thème Impact, un bleu nuit unique (#042146) pour les actions et les blocs forts, une police d'interface (Roboto), des cartes grises arrondies et des visuels produit carrés sur fond bleu nuit. De loin, c'est propre et reconnaissable.

De près, le système **se délite couche par couche**. Les applications (Kaching, Countdown Timer, Klaviyo, Loox) et les blocs Liquid collés à la main réintroduisent leurs propres polices, bleus, rouges, gris, rayons et tailles de texte. L'un de ces blocs, celui des témoignages, a été collé depuis un autre thème et affiche des avatars hébergés dans **une autre boutique Shopify** (C). Le texte clé est prisonnier des images (héros, infographies). Les signaux de confiance et d'urgence sont **écrits en dur** : note « 4,8/5 – 15 637 avis », jauge « 89 % du stock écoulé », « Plus que quelques exemplaires ». Or les données Loox présentes dans la même page disent 4,3/5 sur 339 avis pour ce produit (C). Enfin, une option payante (« +1 Housse de Rechange », 14,90 €) apparaît **déjà cochée** dans l'offre 1x (C).

Les pages s'étirent sur 5 à 23 écrans. La photographie de vie est le meilleur actif : un vrai shooting, en haute définition. Les infographies, elles, empilent des promesses médicales dans une palette étrangère à la marque.

---

### 2. Le socle : jetons du thème Impact 6.4.1 (C)

| Jeton | Mobile (<700) | ≥700 | ≥1000 | ≥1150 | ≥1400 | Source |
|---|---|---|---|---|---|---|
| Marge latérale (`--container-gutter`) | 20 px (0,53 cm) | 32 px | 48 px (1,27 cm) | 48 px | 48 px | home.html l.103-176 et l.296-375 |
| Espacement vertical des sections | 48 px | 64 px | 72 px | 80 px | **96 px (2,54 cm)** | idem ; mesure 1224→1320 px |
| Gouttière de grille | 20 px | 24 px | 24 px | 24 px | 24 px | idem |
| Espacement vertical des listes produit | 32 px | 48 px | 48 | 48 | 48 | idem |
| Hauteur des champs | 42 px | 50 px | – | – | – | idem |
| Largeur maximale du conteneur | 1 600 px (42,3 cm) | | | | | home.html (`--container-max-width`) |

| Rayons | Valeur | Usage observé |
|---|---|---|
| `--rounded-button` | 0,625 rem = **10 px** | boutons, badges, pagination |
| `--rounded` | 0,75 rem = **12 px** | blocs image+texte, cartes grises, tuiles |
| `--rounded-sm` | 6 px | carte produit |
| `--rounded-input` | 8 px | champs |
| `--rounded-lg` / `full` | 24 px / 9999 px | boutons ronds de 48 px (flèches de carrousel) |

Ombres (toutes en #042146 à 10 %) : `sm` 0 2px 8px, `base` 0 5px 15px, `md` 0 5px 30px, `block` 0 18px 50px (visible sous le comparateur avant/après). Source : home.html l.268-272.

Mouvement (C) : `staggerProductsApparition: true` et `headingApparition: "split_fade"` (home.html l.398 et l.401). Animations relevées au défilement : texte 200 ms (ease), images 300 ms (linéaire), cartes produit 350 ms (ease) (`cap/home-d.json` → `scrollAnims`).

---

### 3. Typographie

#### 3.1 Familles rendues (C sauf mention)

| Famille | Où | Graisses | Preuve |
|---|---|---|---|
| **Roboto** (police Shopify) | toute l'interface | le thème déclare 400, 500 et 700, en romain et en italique ; la fiche charge en plus une **600** que le thème ne déclare pas (utilisée par la mention de stock) | home.html l.49-100 ; cap/pdp3-d.json `fonts` ; pdp3.html l.2517 (`font-weight: 600`) |
| **Helvetica Neue / Helvetica / Arial** | encart « FRENCH DAYS JUSQU'À -60% » de la fiche | h2 de 28 px en **800**, sous-titre de 16 px en 700, mention de 12 px en italique | pdp3.html l.2554-2580 (style en ligne) ; cap/pdp3-d.json `h2s` et `p` |
| **Arial** | premier paragraphe de « Notre histoire » | 16 px / 25,6 px, #1A1A1A | cap/histoire-d.json `p` |
| Sans-serif **géométrique** (pas Roboto) (D) | incrustée dans le héros et les infographies de la galerie | fine (héros), grasse en capitales (galerie) | cap/slices/home-d-view-0.jpg ; gallery/sheet-1.jpg |
| Serif à fort contraste, capitales (D : type didone) | **logo en PNG**, et légende « Maintien optimal » de l'image avant/après | – | home.html l.1301-1302 (PNG de 2646×702) ; cap/slices/pdp3-d-full-02.jpg |

Il y a donc **quatre familles visibles**, dont deux (la géométrique et la serif) n'existent qu'en pixels, jamais comme police web.

S'y ajoutent des polices chargées par les applications : une feuille Google Fonts est demandée sur chaque page capturée (fonts.googleapis.com et fonts.gstatic.com dans `cap/*.json` → `third`), et fonts.loox.io sur la fiche (C). La famille servie n'est pas identifiée dans les preuves. La graisse 600 vient probablement de cette feuille (D).

#### 3.2 Échelle déclarée (C, home.html l.185-210 et l.296-375)

| Niveau | Mobile | ≥700 px | ≥1400 px | Interlignage |
|---|---|---|---|---|
| h0 | 44 px | 56 px | 72 px | 1,0 |
| h1 | 32 px | 40 px | 56 px | 1,1 |
| h2 | 28 px | 32 px | **44 px** | 1,1 |
| h3 | 22 px | 26 px | 32 px | 1,2 |
| h4 | 18 px | 22 px | 28 px | – |
| h5 | 18 px | 18 px | 22 px | – |
| h6 | 16 px | 16 px | 20 px | – |
| Texte courant | 14 px | 16 px | 16 px | 1,6 |
| Petit / très petit | 12 / 11 px | 14 / 12 px | 14 / 12 px | – |

Approche des titres : 0,025 em (1,1 px à 44 px, 0,8 px à 32 px, 0,55 px à 22 px). Titres en casse normale, graisse 500.

#### 3.3 Styles calculés, page par page (C, `cap/*.json`, premier élément de chaque type)

| Page | H1 (texte, taille/graisse, couleur) | Premier H2 | Premier paragraphe | Commentaire |
|---|---|---|---|---|
| Accueil desktop | « SOYA PARIS » (logo, texte masqué), 16 px | 44/500, #042146, lh 48,4 | 16/700 #1A1A1A (surtitre) | les titres des blocs image+texte sont des `<p class="h2">` (home.html l.1721, l.1764) |
| Accueil mobile | logo, 14 px | 28/500, ls 0,7 | 14/700 | – |
| Fiche 3.0 desktop | « Oreiller Soya 3.0 », **32/500**, #042146 | 28/**800** Helvetica (encart) | 16/700 Helvetica | titres de section en `<h2 class="h2">` (pdp3.html l.2847), donc 44 px : **H1 plus petit que les H2** |
| Fiche 3.0 mobile | 22/500 | 28/800 Helvetica | 16/700 Helvetica | titres de section à 28 px : même inversion |
| Fiches enfant, soie, 1.0 (desktop) | 32/500 | **44/500** mesurés | – | inversion confirmée par la mesure |
| Collection | H1 blanc de 32 px (22 px en mobile) sur la bannière | – | 16/700 #1A1A1A | titre en surimpression sur la photo |
| Notre histoire | 56/500 #042146 | 44/500 **#1A1A1A** | **Arial** 16 px | deux couleurs de titre, texte en Arial |
| Contact | **aucun élément H1** | 44/500 « Avez-vous une question ? » | 16/700 | titre de page en h2 |
| Blog | « Ce blog est vide », 28/500 | – | 20/500 | blog vide |

Autres niveaux relevés : menu gras (classe `.bold`) de 16 px (C, `cap/home-d.json` → `header`) ; chiffres des statistiques « 96 % » en 56 px (D, hauteur de capitale mesurée de 40 px) ; libellés de réassurance d'environ 20 px (D) ; badges promo en **12 px** gras en desktop et **9 px** en mobile (C, theme.css : `.badge{font-size:9px}`, puis `.badge:not(.badge--lg){font-size:var(--text-xs)}` à partir de 700 px) ; titre de la description dans un h6 de 18 px (C, pdp3.html l.2601).

#### 3.4 Logo face au texte courant (C/D)

Le logo est un PNG de 2646×702 affiché dans une boîte de 120×32 px (3,17×0,85 cm) en desktop et de 100×27 px en mobile. Les lettres occupent **118×14 px, soit 3,1×0,37 cm** (boîte englobante mesurée dans `home-d-full.png`, x 49-166, y 108-121) ; 98×12 px en mobile. C'est une serif à capitales à fort contraste (D : type didone), en bleu nuit. Elle évoque « Paris » et un certain luxe classique, mais l'interface ne la reprend nulle part : tous les titres sont en Roboto 500, une police d'interface neutre. Une serif du même esprit ne réapparaît que dans une image (la légende « Maintien optimal » de l'avant/après).

Le logo est minuscule (14 px de haut) à côté d'un menu en gras de 16 px : il pèse moins que les liens de navigation. Il est repris en tête de la popup Klaviyo mobile (`cap/pdp3-m-full.png`, y ≈ 400).

---

### 4. Couleurs

#### 4.1 Palette relevée (hexadécimal, rôle, source, présence)

| Hex | RVB | Rôle | Où (preuve) | Présence estimée |
|---|---|---|---|---|
| **#042146** | 4 33 70 | accent, texte, boutons, en-tête, bandeau, pied de page, pastilles Kaching, boutons de popup | variables home.html l.219-247 ; pixels | 12,3 % de l'accueil desktop, 20,5 % en mobile |
| #FFFFFF | 255 255 255 | fond de page | l.221 | 35 à 40 % (desktop), 33 à 36 % (mobile) selon la tolérance |
| #F8F8F8 | 248 248 248 | cartes des blocs image+texte, encart FD, encadré de description | home.html l.1720-1722 (`--background: 248 248 248`) ; pdp3.html l.2553 | 10 à 13 % (desktop), 16 à 18 % (mobile) selon la tolérance |
| #0F2756 | 15 39 86 | bandeau presse (second bleu nuit) | home.html l.1678 | 5,0 % (desktop) |
| #1A1A1A | 26 26 26 | titres et texte des blocs image+texte et des statistiques, encart FD | home.html l.1720, l.1763, l.2252 ; pdp3.html l.2554 | texte |
| #4974CA | 73 116 202 | prix soldés, badges « Economisez », bordure et titres Kaching | l.243-245 ; pixels de cap/funnel-pdp-top.png | ponctuel |
| ≈ #4F637D | (calcul) | prix normal et prix barré des cartes (#042146 à 70 %) | theme.css `.text-subdued` ; pixel relevé | ponctuel |
| #C8D5EF | – | filet « FRENCH DAYS \| JUSQU'À -60% » du bloc Kaching | pixels de cap/funnel-pdp-top.png (y 715) | ponctuel |
| #C3D0EA | 195 208 234 | lignes d'options Kaching (« +1 Housse ») | pixels de cap/funnel-pdp-atc.png | ponctuel |
| #FF4D4D | – | prix barrés Kaching | pixels de cap/funnel-pdp-top.png (€139,90) | ponctuel |
| #E53935 | – | « Plus que quelques exemplaires en stock » | pdp3.html l.2515 ; pixels | ponctuel |
| #D94343 → dégradé #E67C7C / #B43131 | – | « 89 % du stock déjà écoulé » et jauge | pdp3.html l.2583-2588 | ponctuel |
| #0D67E7 | – | « 30 nuits d'essai — Satisfait ou remboursé » | pdp3.html l.2507 ; pixels | ponctuel |
| #0074E6 | – | coches de la description | pdp3.html (9 occurrences) | ponctuel |
| #FFD700 | – | étoiles de la ligne de note et du témoignage « Dr. Marc R. » : **icônes PNG chargées depuis img.icons8.com** avec `color=FFD700` ; même teinte déclarée pour les étoiles Loox | pdp3.html l.2161-2165 et l.2691-2695 ; home.html l.2476-2477 | ponctuel |
| #0F283C | – | widget de témoignages : étoiles ★, onglet actif, badge « vérifié » | pdp3.html (21 occurrences) ; pixels de cap/pdp3-d-full.png y 7016-7111 | ponctuel |
| #0F2844 / #E9EDF2 | – | anneaux et fond des 4 cercles vidéo | pixels de cap/funnel-pdp-top.png ; pdp3.html (6 occurrences de #0F2844) | ponctuel |
| #F7F7F7 / #E9F1F3 | – | cartes de témoignages / onglets inactifs | pixels | ponctuel |
| #F2F4F6 / #D9DEE4 | – | boîte FAQ / puces chevron | pixels | 4,5 % de la fiche desktop |
| #F0F0F2 | – | fond de la popup Klaviyo | pixels | 1,4 à 5,2 % selon la capture |
| #228B22 | – | point « En stock – Prêt à l'expédition » (fiche enfant) | pixels de cap/enfant-d-full.png (y 1046-1059) | ponctuel |
| #636366, #444, #555, #D0D0D0, #E1E1E1, #EAEAEA | – | gris des blocs Liquid | pdp3.html l.2553-2605 | ponctuel |
| #2257A7 | 34 87 167 | bleu du héros (lettrage et bouton dessinés) | pixels de l'image | dans l'image |
| #C04A52 / #B02028 | – | « 30 NUITS D'ESSAI » / rubans tricolores du héros | pixels | dans l'image |
| ≈ #243346 → #112033 | – | dégradé bleu nuit des fonds de galerie | gallery/01.jpg | dans les images |
| #F4F4F6 → #F2F2F4 | – | fond « studio blanc » de la galerie | gallery/06.jpg, 07.jpg | dans les images |
| ≈ #E6CB84, #D67E8C, #56578F, #7CC5D4 | – | zones colorées de l'infographie « Santé & votre confort » | gallery/06.jpg | dans les images |
| Déclarées mais jamais vues | #FFB74A (étoiles), #803CEE (badge principal), #00A341 / #F83A3A (succès, erreur) | – | home.html l.230-252 | 0 |

**Lecture (C)** : le thème ne définit que trois couleurs actives (bleu nuit, blanc, bleu promo). Le rendu en compte **plus de trente** : cinq bleus nuit, cinq bleus, cinq rouges et une dizaine de gris à 1 ou 2 % d'écart (#F8F8F8, #F7F7F7, #F2F4F6, #F0F0F2…). Chaque application ou bloc collé apporte sa teinte : c'est la signature d'un assemblage, pas d'une direction artistique.

#### 4.2 Proportions par page (calcul de l'analyste, tolérance de 6, C)

Les pourcentages de blanc et de #F8F8F8 varient de 2 à 6 points selon la méthode (tolérance, attribution exclusive), parce que le fond du héros (#FAFAFA) est à mi-chemin des deux. Le bleu nuit #042146 est stable : 12,3 % (desktop) et 20,5 % (mobile) quelle que soit la méthode (recalcul de la contre-vérification).

| Page | #FFFFFF | #F8F8F8 | #042146 | #0F2756 | Autres gris d'interface | Photos et texte anticrénelé |
|---|---|---|---|---|---|---|
| Accueil desktop | 40,4 % | 12,0 % | 12,3 % | 5,0 % | 0,9 % | 28,8 % |
| Accueil mobile | 35,6 % | 17,5 % | 20,5 % | 2,7 % | 0,7 % | 22,4 % |
| Collection desktop | 33,1 % | 8,6 % | 10,8 % | – | 3,6 % (dont popup) | 43,4 % |
| Fiche desktop (0-10 752 px) | 52,4 % | 11,0 % | 1,6 % | 2,2 % | 6,5 % | 20,7 % (+5,3 % de gris de remplacement) |
| Fiche mobile (0-10 820 px) | 35,1 % | 19,7 % | 2,6 % | 1,2 % | 14,5 % | 20,9 % |

#### 4.3 Couleurs demandées, une par une (C)

- **Prix barrés** : sur les cartes, bleu nuit à 70 % (≈ #4F637D) barré, à côté du prix soldé en #4974CA. Dans Kaching, **rouge #FF4D4D** barré : deux codes différents pour la même information.
- **Badges** : « Economisez $21.00 » (capture en USD) en pilule #4974CA, texte blanc gras de **12 px en desktop** (9 px sous 700 px), pilule de 131×23 px (3,47×0,61 cm) mesurée dans `home-d-full.png` (x 520-650, y 2815-2837). « Pack Duo » et « Pack Famille » en pastille bleu nuit de 71×24 px. Médaillons ronds CertiPUR, OEKO-TEX et « 30 nuits d'essai » **incrustés dans les visuels** (environ 56 px de diamètre sur les cartes, environ 86 px sur l'image principale de la fiche).
- **Étoiles** : trois systèmes. Des PNG icons8 teintés #FFD700 sur la ligne de note et le témoignage « Dr. Marc R. », des ★ texte bleu nuit #0F283C dans les cartes de témoignages, et le widget Loox (#FFD700 déclaré). Le thème déclare en plus #FFB74A, jamais utilisé.
- **Bandeau** : #042146 plein, texte blanc, emoji drapeau.
- **Boutons** : thème en #042146 et texte blanc, rayon de 10 px ; bouton de héros dessiné en #2257A7 ; boutons de popup en #042146 (≈ 423×68 px en desktop).

---

### 5. Grille, espacements, formes (mesures sur les captures, C)

| Élément | Mesure en px | Mesure en cm | Preuve |
|---|---|---|---|
| Colonnes des blocs image+texte (accueil desktop) | image de 660 (x 48-707), espace de 25, carte de 660 (x 732-1391) × 582 (y 1320-1901) | 17,5 + 0,66 + 17,5 | cap/home-d-full.png (recalculé) |
| Marge intérieure des sections | 96 en haut et en bas (1224→1320, 1902→1998) | 2,54 | idem |
| Bouton « Découvrir » (button--xl) | ≈ 156 × 56 à 60 | 4,1 × 1,5 | idem (x 812-967, y 1762-1821) |
| Carte produit, carrousel de l'accueil | 432 × 432 (image 1:1), 24 d'espace, 4e carte visible sur 24 px | 11,4 | idem, y 2799-3231 |
| Carte produit, collection | 318 × 318, 4 colonnes, pas vertical de 472 | 8,4 / 12,5 | cap/col-d-full.png |
| Carte produit, carrousel mobile | 289 (74vw) + 61 visibles de la suivante | 7,6 | cap/home-m-full.png |
| Carte produit, grille mobile | 171 × 171, 2 colonnes, **8 d'espace** | 4,5 | cap/col-m-full.png |
| Photo des blocs image+texte en mobile | 350 × 233 (3:2) ; carte grise de 492 de haut | 9,3 × 6,2 | cap/home-m-full.png |
| Galerie de la fiche desktop | vignettes de 64 (pas de 80) ; image de 666 × 665 (y 222-887) ; bloc d'achat à x 874-1392 (≈ 518) | 1,69 / 17,6 / 13,7 | cap/funnel-pdp-top.png |
| Galerie de la fiche mobile | image pleine largeur de 390 × 390 ; vignettes de 56 | 10,3 / 1,48 | cap/slices/pdp3-m-view-0.jpg ; theme.css |
| Cercles vidéo (fiche) | 4 × 78 de diamètre | 2,06 | cap/funnel-pdp-top.png |
| Boîte FAQ | environ 805 de large, centrée, #F2F4F6 | 21,3 | cap/slices/pdp3-d-full-04.jpg |
| Cartes de témoignages | 3 × environ 380, #F7F7F7 | 10,1 | cap/pdp3-d-full.png y 6894-7487 |
| Popup Klaviyo desktop | environ 950 × 580 (photo à gauche, formulaire à droite) | 25,1 × 15,3 | cap/pdp3-d-full.png |

**Ratios d'images (C)** :

- héros desktop en 16:9 (5934×3338), héros mobile en portrait 0,71 (2720×3834) ;
- bannière de collection en 3:2 (1440×960) ;
- photos lifestyle en 3:2 (4610×3074, 6000×4000) ;
- packshots en 1:1 (1200×1200 WebP) ;
- galerie en 1:1 (JPEG de 1024 px dans des SVG déclarés en 529×529) ;
- logos presse en 4:1 (400×100).

---

### 6. Photographie et visuels

**a) Shooting lifestyle réel (C/D).** Les fichiers 0C5A6783.jpg (4610×3074 ; nommage de type appareil Canon, D) et SOYA-26.jpg (6000×4000) indiquent une vraie séance photo.

- Premier couple : homme brun à barbe et femme brune, oreillers blancs matelassés. On le retrouve dans le bloc Soya 2.0, la popup et la page « Notre histoire » (couple assis au lit avec téléphone et tasse).
- Second couple : homme brun et femme blonde, oreiller « nuage » bleu. On le retrouve dans le bloc 3.0 et la galerie.
- Lumière blanche naturelle, draps blancs, vues en plongée.
- Casting homogène (D : adultes de 25 à 40 ans, peau claire, silhouettes minces).

Qualité : bonne et cohérente. **Le coloris « Bleu » de l'oreiller a pour pastille exactement le #042146 de l'interface** (`cap/funnel.json` → `kaching`, swatch Bleu).

**b) Packshots en série (C/D).** 14 produits ont une première image en 1:1 de 1200 px, nommée en série de 1 à 14 (« 1-oreiller-soya-2_0HD.webp », « 10-HoussedeCouette…couvertureHD.webp »…), plus des images « img2 » pour le survol (`products.json`). Décor identique : mur bleu nuit dégradé et drap blanc ou gris froissé.

L'uniformité est forte. En revanche, le rendu très lisse (tissus, peau, masque de sommeil, femme à l'oreiller de voyage) est un **indice** possible d'images générées ou fortement retouchées, sans preuve (`cap/slices/col-d-full-01.jpg` et `-02.jpg`).

**c) Visuels en SVG de la fiche (C).** La fiche charge **39 SVG, 35,7 Mo** (`svg_sizes.txt`), répartis ainsi (croisement de `svg_urls.txt` et de `products.json`) :

| Emplacement | Fichiers | Poids |
|---|---|---|
| Galerie produit (33 des 48 médias du produit) | 33 SVG | 15,7 Mo |
| 4 tuiles « Dormeurs sur le côté / dos / ventre / multi-positions » | 58.svg à 61.svg | **18,0 Mo** (4,3 à 4,7 Mo chacune) |
| Bloc « SOYA 3.0 : La nouvelle ère du sommeil » | 57.svg | 1,6 Mo |
| Carte de vente additionnelle (housse 3.0) | 7.svg | 0,47 Mo |

Les fichiers les plus lourds ne sont donc pas dans la galerie, mais dans quatre tuiles affichées à environ 300 px. Chaque SVG est un export de type Canva (`viewBox 0 0 396.75 396.749985`, `zoomAndPan="magnify"`), déclaré en 529×529 ; 19.svg, rouvert, contient un JPEG de 1024×1024.

- **Deux fonds** : bleu nuit dégradé et studio blanc. Titre en capitales sur deux niveaux (petit surtitre, titre gras), « N°1 » en bleu. Pictos au trait bleu nuit.
- **Répétition** : 3 coloris (blanc, beige, bleu) déclinés à l'identique, et **8 doublons exacts** (différence moyenne nulle) : 01=12=24, 03=14=27, 06=18=22=28, 36=37. L'infographie des zones apparaît 4 fois.
- **Contenu** : promesses médicales (« réduit l'apnée du sommeil », « réduit le reflux gastrique », « recommandé par les ostéopathes »), comparatif « OREILLER CLASSIQUE ✕ / OREILLER SOYA 2.0 ✓ » sur la fiche 3.0, et une palette moutarde, rose, violet, turquoise sans rapport avec la marque. Le visuel « 2 hauteurs, 1 seul oreiller » montre des flèches, mais aucune mesure en cm.
- **Noms de fichiers** : deux images de la fiche portent comme nom une consigne de génération (« Firefly_Gemini_Flash_Generate_the_same_image_exactly_as_the_reference._Keep_all_text_icons_layout_compo_480153_3.png » et « …_5.png », `products.json`) : **indice** d'une régénération par IA.
- **Variante grise** : elle a ses propres fichiers PNG et JPG (« Soya_3.0_Grey… », 1024 et 1175 px), hors des SVG.
- **Textes alternatifs** : les 182 images du catalogue ont un champ alt vide (`products.json`). Sur la fiche, le thème le remplace par le nom du produit : « Oreiller Soya 3.0 » est répété 98 fois (48 images et 48 vignettes, pdp3.html). Les descriptions sont donc absentes, pas les attributs.

**d) Décors et accessoires (C).**

- Chambre claire avec rideaux beiges (avant/après), nuque rougeoyante et colonne vertébrale verte fluo dessinées sur la photo.
- Chambre d'hôtel générique (vidéo, image d'aperçu de 800 px étirée à 1440).
- Bannière de collection : chevet en marbre, lampe, et **magazines en caractères chinois** (« TARGET », « Noblesse » et idéogrammes, `cap/col-d-full.png` x 840-1300, y 960-1140) : **indice** d'une photo de fournisseur ou de banque d'images, pas une preuve.
- Témoignage « Dr. Marc R., Chiropracteur » : vignette en noir et blanc d'un homme en blouse ; en dessous, « Recommandé par plus de 200 professionnels de santé » (pdp3.html l.2707 et l.2716).

**e) Habillage French Days (C).** Trois oreillers (beige, bleu nuit, blanc) noués de rubans tricolores (#B02028 et bleu), lettrage géométrique bleu #2257A7, « 30 NUITS D'ESSAI » en rouge #C04A52 et bouton dessiné. Le thème est cohérent sur le bandeau, le héros, la popup (« VOUS AVEZ OBTENU 60 % DE RÉDUCTION ») et l'encart de la fiche.

Mais : -50 % sur le héros mobile contre -60 % ailleurs, « ORTHOPEDIQUE » sans accent, et un raccord de fond à peine visible (#FFFFFF → #FDFDFD à y = 282 px en desktop et 327 px en mobile) entre l'en-tête typographique et la photo.

**f) Coquille sur un médaillon (C)** : « 30 NUTIS D'ESSAI » sur l'image principale de l'Oreiller Soya enfant (`cap/enfant-d-full.png`, x 470-770, y 235-330).

---

### 7. Accueil, section par section

#### 7.1 Desktop 1440×900 (`cap/home-d.json`, `cap/slices/home-d-*.jpg`, version USD)

| # | Section | y (px) | h (px) | y (cm) | h (cm) | Fond | Contenu et alignement |
|---|---|---|---|---|---|---|---|
| 0 | Bandeau de compte à rebours (application, hors `secs`) | 0 | 58 | 0 | 1,53 | #042146 | « FRENCH DAYS » + drapeau, « Jusqu'à -60 % sur tout le site ! », 00:MM:SS, centré |
| 1 | En-tête | 58 | 115 | 1,53 | 3,04 | #FFF | logo à gauche (x 49), **menu de 6 liens sur 2 lignes** (y 88-102 et 130-141), puis USD $ / Français / recherche / compte / panier ; en version USD, la 1re ligne du menu (jusqu'à x 1082) passe à 5 px au-dessus du drapeau (x 1075, y 107) |
| 2 | Héros (1 visuel) | 174 | 810 | 4,60 | 21,43 | image | texte incrusté centré : « OFFRE SPÉCIALE », « FRENCH DAYS » (capitales de 95 px), sous-titre, 3 oreillers à rubans, « 30 NUITS D'ESSAI », bouton dessiné de 243×63 (x 626-868, y 875-937) **coupé au pli** |
| 3 | Bandeau presse | 984 | 240 | 26,03 | 6,35 | #0F2756 | 6 logos blancs, **décalés à gauche** (89 contre 279 px de marge) |
| 4 | Image+texte « Nouveauté : SOYA 3.0 est arrivé » | 1224 | 774 | 32,38 | 20,48 | blanc + carte #F8F8F8 | photo du couple et de l'oreiller bleu à gauche (660) ; carte à droite : surtitre 16/700, titre 44 #1A1A1A, 2 paragraphes, bouton « Découvrir » |
| 5 | Image+texte « Best-Seller Soya 2.0 » | 1998 | 704 | 52,86 | 18,62 | idem | disposition inversée ; photo du couple barbu et de la femme brune |
| 6 | « Nos best sellers » (carrousel) | 2702 | 818 | 71,48 | 21,64 | #FFF | titre 44 bleu nuit à gauche, lien « Découvrir » et flèche ronde à droite ; 3 cartes de 432 + 24 px de la 4e ; barre de progression de 2 px ; flèches de 48 px |
| 7 | Statistiques (96 / 91 / 87 %) | 3520 | 501 | 93,12 | 13,25 | #FFF | titre centré sur 3 lignes #1A1A1A, mention « questionnaire… juillet 2025 », 3 colonnes de chiffres en 56 px |
| 8 | Réassurance | 4021 | 168 | 106,38 | 4,44 | #FFF | 4 pictos au trait et libellés d'environ 20 px bleu nuit, centrés |
| 9 | Pied de page | 4189 | 541 | 110,82 | 14,31 | #042146 | 3 colonnes (newsletter / Qui sommes-nous / Nos politiques), sélecteurs, 10 icônes de paiement, « © 2026, SOYA PARIS. © 2026 » |

Longueur totale : 4 730 px (125,1 cm, 5,3 écrans).

#### 7.2 Mobile 390×844 (`cap/home-m.json`)

| # | Section | y | h | y (cm) | h (cm) | Contenu |
|---|---|---|---|---|---|---|
| 0 | Bandeau | 0 | 50 | 0 | 1,32 | compte à rebours, légendes de 10 px |
| 1 | En-tête | 50 | 51 | 1,32 | 1,35 | menu et recherche à gauche, logo centré de 100×27, panier à droite |
| 2 | Héros | 101 | 550 | 2,67 | 14,55 | visuel portrait : **« -50 % »**, bouton dessiné « -50 % SUR TOUT LE SITE », petites lignes de 7 à 8 px de haut accents compris (environ 6 à 7 px de capitale) |
| 3 | Presse | 651 | 136 | 17,22 | 3,60 | 3 logos visibles, le 3e (« LE FIGARO santé ») coupé |
| 4 | Bloc 3.0 | 787 | 842 | 20,82 | 22,28 | photo de 350×233 puis carte grise de 492 px |
| 5 | Bloc 2.0 | 1628 | 796 | 43,07 | 21,06 | idem |
| 6 | Best sellers | 2424 | 553 | 64,13 | 14,63 | 1 carte de 289 px + 61 px de la suivante, bouton « + Ajouter » |
| 7 | Statistiques | 2977 | 666 | 78,76 | 17,62 | empilées |
| 8 | Réassurance | 3643 | 152 | 96,38 | 4,02 | carrousel à 1 élément et 4 points |
| 9 | Pied de page | 3795 | **995** | 100,40 | 26,32 | 20,8 % de la page |

Premier écran mobile : bandeau, en-tête, héros, **tout le bandeau presse** et 57 px du bloc 3.0. **Aucun texte HTML hors bandeau et logos** : le message commercial est entièrement dans l'image.

---

### 8. Fiche Oreiller Soya 3.0

#### 8.1 Desktop (`cap/pdp3-d.json`, `cap/funnel-pdp-top.png`, `cap/funnel-pdp-atc.png`)

| # | Section | y | h | y (cm) | h (cm) | Contenu |
|---|---|---|---|---|---|---|
| 0-1 | Bandeau et en-tête | 0 / 58 | 58 / 115 | 0 / 1,53 | 1,53 / 3,04 | identiques à l'accueil (EUR €, un seul sélecteur) |
| 2 | Principal (galerie et bloc d'achat) | 174 | 3 199 | 4,60 | 84,63 | voir 8.2 ; **colonne gauche vide d'environ 905 à 3 373 px (≈ 2 470 px, 65 cm)** |
| 3 | « Quel que soit votre style de sommeil… » | 3 373 | 686 | 89,23 | 18,15 | titre 44 bleu nuit sur 3 lignes, 4 tuiles d'environ 300 px arrondies à 12 px (58 à 61.svg, 18 Mo au total), légendes bleu nuit |
| 4 | Avant/après « Un bon sommeil commence par une bonne posture » | 4 059 | 1 147 | 107,38 | 30,34 | titre 44, 4 paragraphes centrés, comparateur de 896×569 avec poignée ronde et ombre |
| 5 | Bandeau presse | 5 206 | 240 | 137,72 | 6,35 | copie de l'accueil |
| 6 | « SOYA 3.0 : La nouvelle ère du sommeil » | 5 446 | 852 | 144,07 | 22,54 | carte #F8F8F8 à texte centré et visuel (57.svg) |
| 7 | Vidéo | 6 298 | 500 | 166,61 | 13,23 | pleine largeur, image d'aperçu de 800 px floue |
| 8 | Témoignages « Plus de 100 000 clients… » (HTML collé dans un bloc Liquid) | 6 798 | 785 | 179,84 | 20,77 | titre 44, 4 onglets en pilule, 3 cartes #F7F7F7 avec étoiles #0F283C, avatars hébergés dans une autre boutique (voir § 10) |
| 9 | Statistiques | 7 583 | 501 | 200,61 | 13,25 | copie de l'accueil |
| 10 | FAQ | 8 085 | 1 145 | 213,89 | 30,29 | boîte #F2F4F6 de 805 px, 12 questions en gras bleu nuit, puces chevron #D9DEE4 |
| 11 | Bloc 2.0 | 9 230 | 704 | 244,18 | 18,62 | copie |
| 12 | « Découvrez Nos Best Sellers » | 9 934 | 818 | 262,80 | 21,64 | carrousel de cartes de 432 px |
| 13 | Widget Loox | 10 752 | **6 335** | 284,44 | 167,59 | blanc dans la capture (20 images d'avis chargées mais non rendues) |
| 14-15 | Réassurance et pied de page | 17 087 / 17 255 | 168 / 541 | 452,04 / 456,48 | 4,44 / 14,31 | – |

#### 8.2 Bloc d'achat desktop, élément par élément (x 874-1392, C)

Les positions viennent de deux captures de la même page à l'état initial : `cap/funnel-pdp-top.png` (haut du bloc) et `cap/pdp3-d-full.png` (bouton et suite). Dans la seconde, les éléments Kaching sont décalés d'environ 160 px vers le bas ; les valeurs sont donc à ± 160 px près.

| Élément | y (px) | y (cm) | Style |
|---|---|---|---|
| 5 étoiles et « Noté 4,8/5 – 15 637 avis clients » | 226-242 | 6,0 | 5 PNG icons8 #FFD700 de 14 px et texte #042146, **écrits en dur** dans un bloc Liquid (pdp3.html l.2159-2170) |
| Surtitre en capitales « L'ÉVOLUTION DU CONFORT — … » | 255-292 | 6,7 | #636366, 2 lignes |
| H1 « Oreiller Soya 3.0 » | 317-348 | 8,4 | Roboto 32/500 #042146 |
| 4 puces | 380-500 | 10,1 | puces bleues, texte #1A1A1A de 16 px |
| 4 cercles vidéo (Concept, Lequel choisir ?, Avis clients, FAQ) | 540-616 | 14,3 | 78 px, anneau #0F2844, « ? » seul sur sa ligne |
| Filet « FRENCH DAYS \| JUSQU'À -60% » | 715 | 18,9 | trait #C8D5EF |
| Carte 1x (choisie par défaut) | 741-~900 | 19,6 | bordure de 2 px #4974CA, 69,90 € en #4974CA, 139,90 € barré en #FF4D4D |
| **Ligne « +1 Housse de Rechange » cochée par défaut** dans la carte 1x | ~870-945 (pdp3-d-full) | 23 | case cochée, #C3D0EA, 14,90 € (39,90 € barré) |
| Cartes Duo et Famille, lignes de housses | ~950-1336 | – | lignes #C3D0EA, pastilles bleu nuit de 71×24 |
| **Ajouter au panier** | **1 347-1 406** | **35,6** | ≈ 518×60, #042146 |
| Mentions de stock et d'essai | ~1 440-1 470 | 38,1 | #E53935 (graisse 600) / #0D67E7 |
| Image des moyens de paiement | ~1 500 | 39,7 | 9 logos dans un SVG statique |
| Encart FD (Helvetica) | 1 564-1 765 | 41,4 | #F8F8F8, bordure #E1E1E1, jauge rouge **à largeur fixe de 89 %** |
| Encadré de description | 1 817-2 488 | 48,1 | #F8F8F8, titre h6 18 px, coches bleues |
| Témoignage « Dr. Marc R. » | 2 515-2 672 | 66,5 | #F8F8F8, étoiles icons8 jaunes, italique |
| 5 accordéons, puis ventes additionnelles | ~2 700-3 330 | 71,4 | titres en capitales bleu nuit |

#### 8.3 Mobile (`cap/pdp3-m.json`)

| # | Section | y | h | y (cm) | h (cm) | Remarques |
|---|---|---|---|---|---|---|
| 0-1 | Bandeau et en-tête | 0 / 50 | 50 / 51 | 0 / 1,32 | 1,32 / 1,35 | – |
| 2 | Principal | 101 | 3 998 | 2,67 | 105,77 | image de 390×390 (y 101-491) puis vignettes, note, H1 de 22 px et puces (sous la popup Klaviyo dans la capture) ; **carte d'offre 1x à 1 163 px, premier prix vers 1 185 px** ; ligne « +1 Housse » cochée (y ≈ 1 307-1 390) ; **bouton à 1 805-1 858 (47,8 cm)** ; encart FD 1 998-2 248, description 2 304-3 189, témoignage 3 220-3 406 |
| 3 | Styles de sommeil | 4 099 | 504 | 108,44 | 13,33 | tuiles en carrousel |
| 4 | Avant/après | 4 604 | 753 | 121,80 | 19,92 | légende « Maintien optimal » illisible |
| 5 | Presse | 5 357 | 136 | 141,72 | 3,60 | – |
| 6 | Nouvelle ère | 5 493 | 906 | 145,32 | 23,97 | – |
| 7 | Vidéo | 6 399 | 480 | 169,29 | 12,70 | floue |
| 8 | Témoignages | 6 879 | 752 | 181,98 | 19,89 | onglets sur 2 lignes (« Ronflements » seul) |
| 9 | Statistiques | 7 631 | 666 | 201,88 | 17,62 | – |
| 10 | FAQ | 8 297 | 1 183 | 219,50 | 31,30 | – |
| 11 | Bloc 2.0 | 9 481 | 796 | 250,82 | 21,06 | – |
| 12 | Produits associés | 10 277 | 544 | 271,88 | 14,39 | – |
| 13 | Loox | 10 820 | **7 211** | 286,24 | 190,77 | blanc dans la capture |
| 14-15 | Réassurance et pied de page | 18 031 / 18 184 | 152 / 995 | 477,01 / 481,06 | 4,02 / 26,32 | – |

Longueur : 17 796 px en desktop (470,8 cm, 19,8 écrans) et 19 179 px en mobile (507,4 cm, 22,7 écrans). Le bloc Loox représente 35,6 % et 37,6 % de ces hauteurs.

---

### 9. Collection « Nos best sellers »

| # | Section (desktop) | y | h | y (cm) | h (cm) | Contenu |
|---|---|---|---|---|---|---|
| 0-1 | Bandeau et en-tête | 0 / 58 | 58 / 115 | 0 / 1,53 | 1,53 / 3,04 | – |
| 2 | Bannière | 174 | 960 | 4,60 | 25,40 | photo 3:2 : femme blonde sur l'oreiller bleu, chevet en marbre, **magazines en caractères chinois** ; H1 blanc de 32 px (masqué par la popup dans la capture) |
| 3 | Bloc 3.0 | 1 133 | 774 | 29,97 | 20,48 | copie de l'accueil |
| 4 | Bloc 2.0 | 1 908 | 704 | 50,48 | 18,62 | copie |
| 5 | Grille (17 produits) | 2 612 | 2 485 | 69,10 | 65,74 | **premier visuel à 2 660 px (2,96 écrans)** ; 4 colonnes de 318, badges bleus, pastilles de couleur, « +4 » |
| 6-7 | Réassurance et pied de page | 5 097 / 5 265 | 168 / 541 | 134,84 / 139,29 | 4,44 / 14,31 | – |

En mobile : bannière 101-361 (260 px, H1 blanc de 22 px « Nos Best Sellers » centré sur la photo), blocs 3.0 et 2.0 de 361 à 1 998, « 17 produits » vers 2 040, **premier visuel à 2 077 px (2,46 écrans)**, grille de 2 × 171 px avec 8 px d'espace. Longueur totale : 5 806 px en desktop (6,5 écrans) et 6 026 px en mobile (7,1 écrans).

Le bloc « Découvrez notre Best-Seller : L'Oreiller Soya 2.0 » figure sur les 7 pages commerciales capturées (accueil, collection, fiches 3.0, enfant, soie, 1.0, couette) et le bloc « Nouveauté : SOYA 3.0 » sur 6 d'entre elles (toutes sauf la fiche 3.0) (C, `info.secs`).

---

### 10. Défauts relevés (synthèse)

1. **Menu desktop sur deux lignes** à 1440 px, sur toutes les pages (C). En version USD (deux sélecteurs), la première ligne s'arrête à 5 px au-dessus du drapeau, avec 7 px de recouvrement horizontal ; en version France (EUR), il reste environ 86 px de marge (C, cap/home-d-full.png contre cap/funnel-pdp-top.png).
2. **Héros en image** : alt vide, bouton coupé au pli de 900 px, -50 % en mobile contre -60 % ailleurs, faute d'accent (C).
3. **Quatre familles de caractères**, dont deux qui n'existent qu'en pixels ; styles en ligne en Helvetica ou Arial ; graisse 600 et polices tierces chargées par des applications (C).
4. **Hiérarchie inversée** (H1 de 32 px sous des H2 de 44 px), h6 utilisé comme titre, `<p class="h2">`, pas de H1 sur Contact (C).
5. **Deux couleurs de titre** sur la même page (C).
6. **Plus de 30 couleurs rendues** pour 3 couleurs actives déclarées (C).
7. **Deux codes pour le prix barré** (bleu nuit à 70 % ou #FF4D4D) et **trois systèmes d'étoiles** (PNG icons8, ★ #0F283C, Loox) (C).
8. **Prix en « €69,90 »** au lieu de « 69,90 € » (C, `moneyFormat` home.html l.403) ; les prix en USD des captures sont un artefact de l'IP (C).
9. **Longueur et densité** : fiche de 19,8 à 22,7 écrans, offre mobile à 1 163 px, bouton à 1 805 px, colonne desktop vide sur environ 65 cm (C).
10. **Blocs dupliqués** (2.0 sur 7 pages sur 7, statistiques et presse deux fois sur la fiche) ; produits de la collection repoussés sous 2,5 à 3 écrans (C).
11. **SVG** : 35,7 Mo sur la fiche, dont 18 Mo pour quatre tuiles ; 8 doublons dans la galerie ; noms de fichiers de génération IA (indice) ; alt vides dans le catalogue, remplacés par « Oreiller Soya 3.0 » répété 98 fois (C).
12. **Infographies médicales** et palette étrangère ; comparatif « 2.0 » sur la fiche 3.0 (C).
13. **Coquilles** : « NUTIS », « ORTHOPEDIQUE », « Economisez », « A partir de », double ©, « Your Privacy Choices » en anglais, housse 3.0 annoncée « blanc, bleu et beige » alors que le gris existe (C).
14. **Lisibilité mobile** : badges de 9 px, légendes du compte à rebours de 10 px, héros à 6-7 px de hauteur de capitale, onglets sur deux lignes, logos presse coupés (C).
15. **Visuels douteux** : magazines en caractères chinois (indice de photo de fournisseur), vidéo floue, « Dr. Marc R. » en blouse et « 200 professionnels de santé » sans source (C pour l'affichage ; aucune preuve de l'existence de ces personnes n'est présentée).
16. **Moyens de paiement** : image statique du bloc d'achat (PayPal, Amazon Pay, icône verte de type Afterpay) différente de la liste Shopify du pied de page (10 moyens, sans PayPal ni Amazon Pay) (C) ; le paiement réel n'a pas pu être vérifié.
17. **Option payante cochée par défaut** (ajout) : dans l'offre 1x, la ligne « +1 Housse de Rechange » (14,90 €, 39,90 € barré) s'affiche déjà cochée au chargement, en desktop comme en mobile, sans action du script de capture (C, cap/pdp3-d-full.png x 874-1392 y 860-960 ; cap/pdp3-m-full.png y ≈ 1 307-1 390 ; capture.cjs ne clique rien). L'effet sur le panier n'a pas pu être vérifié. **Risque** au regard de l'article 22 de la directive 2011/83/UE, qui interdit d'obtenir un paiement supplémentaire par une case pré-cochée.
18. **Note et nombre d'avis écrits en dur, contredits par Loox** (ajout) : « Noté 4,8/5 – 15 637 avis clients » est un texte fixe dans un bloc Liquid (pdp3.html l.2170), repris à l'identique sur les fiches 3.0, 1.0, soie, couette et enfant (« avis parents »). Dans la même page, le JSON-LD de Loox donne pour l'Oreiller Soya 3.0 **4,3/5 sur 339 avis** (pdp3.html l.7166-7170), et le flux Loox **4,6/5 sur 1 775 avis** (l.4315). C'est constaté. Que les 15 637 avis soient faux n'est pas prouvé (d'autres plateformes pourraient exister) : c'est un **indice fort** de compteur gonflé.
19. **Témoignages collés depuis une autre boutique** (ajout) : le bloc « Plus de 100 000 clients se réveillent… » est du HTML collé dans un bloc Liquid (pdp3.html l.2977 → l.2992). Il porte l'identifiant d'un autre thème (`template--24247348527436`, contre `template--32068952621388` pour le reste de la page), et ses 4 avatars (Richard. S, Sarah. M, Barbara. P, Anthony. M, tous « Acheteur vérifié ») sont hébergés dans **une autre boutique Shopify** : `cdn.shopify.com/s/files/1/0680/4589/7928/files/88.png` à `91.png`. Soya stocke ses fichiers sous `1/0935/5054/3180`. Ces avatars ont été déposés le 17 février 2025 (`v=1739804305`), huit mois avant le premier produit Soya (créé le 19 octobre 2025, `products.json`). C'est constaté. Que ces témoignages soient inventés n'est pas prouvé : c'est un **indice fort** qu'ils ne proviennent pas de clients Soya identifiés.
20. **Urgence figée dans le code** (ajout) : la jauge « 89 % du stock déjà écoulé » est un `div` à `width:89%` codé en dur (pdp3.html l.2588), suivi du texte fixe « Dernière mise à jour : il y a quelques secondes ». La mention « Plus que quelques exemplaires en stock » est aussi un texte fixe (l.2530-2532). Les données produit lues par Kaching indiquent un stock non suivi (`inventoryManagement: null`, `inventoryPolicy: "continue"`, `inventoryQuantity: -3888` pour le blanc, `cap/funnel.json` → `kaching`). Les valeurs affichées ne peuvent donc pas refléter un stock réel (C). **Risque** de pratique commerciale trompeuse (fausse rareté).

### 11. Points forts

- **Socle cohérent** : jetons, grille de 48/24, rayons de 10 et 12 px, couleur d'action unique. Le bleu nuit occupe 12 à 20 % de la surface et signe la marque (C).
- **Couleur du produit égale à celle de la marque** : coloris « Bleu » = #042146 (C).
- **Vrai shooting lifestyle** en haute définition, casting et lumière homogènes (C/D).
- **Packshots en série** pour 14 produits, en 1:1 sur un décor constant : lisibilité de catalogue exemplaire (C).
- **Bloc d'achat en cartes** clair, avec une couleur promo unique et un bouton pleine largeur (C). Cette qualité de présentation sert toutefois des prix barrés, une option pré-cochée et une urgence figée (points 17 et 20).
- **Habillage saisonnier** décliné partout (C).

### 12. Ce que Somnila doit en retenir (direction artistique)

1. **Deux polices au maximum**, appelées par variables. Le logo et les titres partagent une même famille display ; aucune typographie n'existe seulement dans des images ; aucun `font-family` en style en ligne.
2. **Six à huit jetons de couleur, pas un de plus**, appliqués aussi aux applications (offres groupées, avis, popup). Un seul code pour le prix barré, une seule couleur d'étoiles, une seule couleur de titre.
3. **Texte en HTML** : héros, bouton, bénéfices. Les visuels restent des photos : les dimensions 13 / 11 cm sont montrées sur le produit, pas écrites en capitales sur fond dégradé.
4. **Fiche courte** : prix, choix de hauteur (13 / 11 cm) et bouton dans le premier écran mobile, sous 844 px ; page de 6 à 8 écrans au plus ; galerie collante en desktop.
5. **Galerie de 6 à 8 visuels uniques** en WebP de 1600 px (moins de 250 Ko chacun), chacun avec un texte alternatif descriptif propre (pas le nom du produit répété), et aucun doublon. Aucun SVG enveloppant un JPEG.
6. **Zéro promesse médicale et zéro fausse urgence**, y compris dans l'image : pas de pictos « apnée » ou « reflux », pas de jauge « 89 % écoulé » codée en dur, pas de compteur qui repart chaque nuit, pas de « Dr » anonyme.
7. **Aucune option payante pré-cochée** : toute housse ou tout ajout reste décoché par défaut.
8. **Une seule note, lue dans l'outil d'avis réel**, identique à celle du balisage structuré ; aucun témoignage, avatar ou texte collé depuis un modèle ou une autre boutique.
9. **Typographie française soignée** : « 69,90 € », É, À, espaces insécables avant « ? ! : ».
10. **Photographie réelle** du Neck 01 comme actif principal, avec un contrôle de chaque accessoire dans le cadre.

### 13. Contre-vérification : ce qui a été corrigé

- **Menu et sélecteur** : il n'y a pas de collision au pixel. En version USD, 5 px d'écart vertical et 7 px de recouvrement horizontal ; en version France, aucun contact.
- **Badges** : 12 px en desktop, 9 px seulement sous 700 px (theme.css).
- **Étoiles jaunes de la fiche** : ce sont des PNG img.icons8.com écrits en dur, pas le widget Loox.
- **SVG** : sur les 39 SVG (35,7 Mo), 33 sont dans la galerie (15,7 Mo). Les plus lourds (18 Mo) sont les quatre tuiles « Dormeurs… ».
- **Textes alternatifs** : ils sont vides dans le catalogue, mais remplacés sur la page par le nom du produit.
- **Serif** : elle n'est pas limitée au logo ; on la retrouve dans la légende « Maintien optimal ».
- **Roboto 600** : elle n'est pas déclarée par le thème. Roboto 400 italique est déclarée sur toutes les pages, mais chargée seulement sur la fiche.
- **Packshots** : 14 produits, pas 15.
- **Premier écran mobile de l'accueil** : tout le bandeau presse est visible, plus 57 px du bloc suivant.
- **Colonne vide de la fiche** : environ 905 à 3 373 px (≈ 65 cm).
- **Premier prix mobile** : la carte d'offre commence à 1 163 px, le prix est vers 1 185 px.
- **Mesures au pixel** : bouton du héros de 243×63, logo de 118×14, bouton « Découvrir » d'environ 156×56 à 60.
- **Sources des titres de la fiche** : le H2 de 44 px est établi par pdp3.html l.2847 et par les mesures des fiches enfant, soie et 1.0. `pdp3-d.json` → `h2s` ne décrit que l'encart en Helvetica.
- **Ajouts** : option payante pré-cochée, note écrite en dur et contredite par Loox, témoignages hébergés dans une autre boutique, jauge d'urgence codée en dur.
