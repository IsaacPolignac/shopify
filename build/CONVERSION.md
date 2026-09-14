# Passe conversion — accueil et fiche produit (11 septembre)

Demande : « améliore le design avec ma DA et mon personal branding, le site ne va pas convertir, inspire-toi de Derila et Pilloway, sans agents ».
Thème modifié : **Somnila — build v1** (157447585949), toujours non publié. Rien n'a été publié, supprimé ni envoyé.

## 1. Ce qui a changé

### Accueil (15 sections, dans l'ordre)

1. **Hero** — « Sleep well. », une phrase de promesse, puis une ligne de preuves en capitales (Free shipping · Ships in 6–10 days · 30-night trial). Deux boutons : *Shop Neck 01* (plein) et *Which pillow is mine?* (contour, renvoie à l'ancre `#which`).
2. **Barre de confiance** — quatre tuiles (livraison offerte, 6–10 jours suivis, essai 30 nuits, housse incluse).
3. **Which pillow is yours?** — cinq cartes, une par façon de dormir, avec le packshot ciel de chaque oreiller et un lien *Shop …*. C'est le bloc « positions » de Derila, sans dessin de silhouette.
4. **Neck 01 en produit vedette** — image, titre, trois puces, prix, couleurs, *Add to cart*, Shop Pay, trois icônes de réassurance. On peut acheter sans quitter l'accueil.
5. **Why it holds.** — trois cartes (deux hauteurs, mousse qui tient, housse lavable).
6. **When did a flat pillow start feeling normal?** — le bloc « THE PROBLEM 01 / 02 / 03 » de Pilloway : il s'affaisse, il n'a qu'une hauteur, il ne se lave pas. Chaque problème se termine par la réponse Somnila.
7. **Somnila or a standard fibre pillow?** — tableau comparatif à six lignes, toutes vérifiables sur la fiche produit (pas de « 97 % satisfaits »). Logo Somnila en tête de colonne, bouton *Shop Neck 01*.
8. **Thirty nights to decide.** — image Neck 01 (4:5) à gauche, trois étapes à droite (Order · Sleep on it · Keep it, or one email), bouton *Start your thirty nights*.
9. **Bande fondateur** — fond Night, caption Dawn « From the workshop », titre « I kept waking up stiff. », le texte du brand book et « what we refused to make ». Bouton *Our story*. Aucun visage.
10. **Avis** — section toujours **désactivée** (aucun avis réel).
11. **Sets, priced honestly.** — quatre sets de la collection.
12. **FAQ** — cinq questions.
13. **Still deciding? Thirty nights.** — dernier appel, deux boutons (*Shop Neck 01*, *All pillows*).
14. **Newsletter** — « Notes from the workshop ».
15. Pied de page inchangé.

Sections retirées : « range » et « materials » (elles répétaient les cartes et la fiche produit).

### Fiche produit (gabarit `product`, les 5 oreillers)

Colonne d'achat, de haut en bas : titre → **tagline** (métachamp `somnila.tagline`, ex. « Two heights on one pillow. Turn it over until your head lies level. ») → trois puces de preuve → prix → couleurs → *Add to cart* + Shop Pay → badges de paiement → date de livraison estimée → trois icônes de réassurance → **upsell Mask 01 / Quiet 01** (déplacé **sous** le bouton d'achat : avant, sur mobile, il repoussait le bouton de 250 px) → description → dimensions, matières, contenu → trois onglets (essai, livraison, entretien). Barre d'achat collante à l'écran.

Sous la colonne : *What you are buying* (trois cartes) → tableau comparatif avec bouton *Add to cart* → *Thirty nights to decide* avec *Add to cart* → FAQ → *Goes with it*.

### Images

Six visuels d'accueil dans `build/images/site/home/`, tous composés à partir des photos fournisseur détourées sur le ciel Cloud → Mist : Neck (cloud), Contour (night), Side (blue), **Body 01 (night, nouveau détourage par saturation + GrabCut)**, Lounge (stone-and-sand), Neck 4:5 pour la section essai. Le packshot ciel de Body 01 est aussi devenu la **première image de sa galerie** (les sept photos sur lit restent derrière).

### CSS (section `somnila-styles`, blocs « passe conversion » et « passe conversion 2 »)

Tagline en serif Slate sous le titre ; ligne de preuves du hero en capitales espacées ; liens des cartes en 600 ; titres des sections comparatif, essai et rich-text à la même échelle que les autres ; caption Dawn sur fond Night ; texte de la bande fondateur limité à 80 rem ; ancre `#which` avec marge de défilement sous l'en-tête collant.

## 2. Décisions

- **Aucun levier trompeur** : pas de compte à rebours, pas de −50 % permanent, pas d'avis inventé, pas de « recommandé par des médecins », pas de compteur de visiteurs. Ce que Derila et Pilloway font avec ces leviers, on le fait avec quatre faits répétés partout : livraison offerte, 6–10 jours suivis, essai 30 nuits, housse lavable.
- **Numérotation 01 / 02 / 03** des problèmes : reprise de Pilloway. Ce n'est pas une séquence, c'est un repère de lecture. Facile à retirer si tu préfères.
- **Comparatif contre « Standard fibre pillow »** : un générique, jamais une marque nommée.
- **« Which pillow is mine? » renvoie à une ancre**, pas à un quiz. Un vrai quiz demande une app payante ou du développement ; à décider plus tard.
- **Noms de fichiers Shopify** : Shopify a ajouté un suffixe UUID aux six images (`somnila_home_pos-neck_1x1_91331e7f-….jpg`, etc.) et refuse de les renommer. Les gabarits pointent vers les noms réels ; rien à faire de ton côté.
- **Section essai** : Shrine n'a pas de colonne image dans « Icons with content » (l'image y est un bloc dans la colonne de texte). J'ai utilisé « Image with text » avec un bloc « texte avec icônes » ; même rendu que Derila, mais natif.

## 3. Ce qu'il te faut faire ou décider

1. **Bandeau cookies** — dans l'aperçu, Shopify affiche « Cookie consent » à tous les visiteurs et il masque le hero. Aux États-Unis il n'est pas obligatoire. Réglages → Confidentialité des clients → Bannière de cookies : limiter aux régions qui l'exigent (UE, Royaume-Uni, Canada). Manuel, je n'y ai pas accès.
2. **Avis** — la section est prête et désactivée. Dès dix avis réels (app d'avis gratuite type Judge.me), on l'active. Pas avant.
3. **Vidéo** — Derila et Pilloway ouvrent sur une vidéo. Si tu as (ou fais tourner) 10 à 20 secondes de la main qui presse la mousse et la voit remonter, le hero et la section essai peuvent l'accueillir. Envoie le fichier ; sans vidéo, l'image reste.
4. **Le reste de la liste HANDOFF.md** est inchangé (renommer la boutique « Somnila », coller les politiques, retirer PORTANCE, publier le thème, retirer le mot de passe).

## 4. Comment vérifier

Avec le mot de passe de la boutique, puis `?preview_theme_id=157447585949` sur : `/`, `/products/neck-01`, `/products/body-01`. Captures dans `build/preview/` (`accueil-desktop.jpg`, `accueil-mobile.jpg`, `neck-01-desktop.jpg`, `neck-01-mobile.jpg`, `contour-01-desktop.jpg`, `body-01-desktop.jpg`).

Fichiers du dépôt : `build/theme/templates/index.json`, `build/theme/templates/product.json`, `build/theme/sections/header-group.json` (et sa copie lisible `somnila-styles.liquid.txt`), `build/images/site/home/`, `build/images/site/packshots/somnila_body-01_packshot-night_v1_sky_*.jpg`.

## 5. Animations (ajout du 11 septembre, sur ta demande « mets plein d'animations »)

Tout est natif Shrine ou CSS/JS dans la section `somnila-styles` ; aucune app, aucun crédit. Lentes, calmes, sur les couleurs de la marque, et coupées d'un coup pour les visiteurs qui ont réglé « réduire les animations ».

**Réglages du thème** (`config/settings_data.json`) : animations de chargement activées (`enable_load_animations`), 700 ms, départ 5 % plus bas, décalage de 120 ms entre les enfants d'une section. Chaque section apparaît en fondu remonté quand elle entre dans l'écran ; les blocs enfants (tableau, cartes) suivent en cascade.

**Bandeau défilant** (« Horizontal Ticker », natif) sous le hero de l'accueil et sous la colonne d'achat de la fiche produit : fond Night, capitales espacées, un point Dawn entre les cinq preuves, 75 s par tour, pause au survol.

**Couche CSS de marque** (bloc « passe animations ») :
- hero : titre, texte puis boutons montent en trois temps (0,15 / 0,35 / 0,55 s) ; l'image dérive très lentement (zoom 5 % sur 24 s, aller-retour) ;
- oreillers sur ciel (produit vedette, section essai) : flottement de 7 px sur 8 s ;
- icônes de la barre de confiance : même flottement, décalé d'une tuile à l'autre ;
- cartes (positions, sets) : élévation de 6 px, ombre Night douce et zoom 5 % de l'image au survol ;
- boutons : légère élévation et ombre au survol ; liens du menu : soulignement qui se déploie ;
- tableau comparatif : les coches apparaissent en « pop » l'une après l'autre quand le tableau entre dans l'écran ;
- titres de section : une ligne d'horizon Dawn se déploie sous le titre à l'entrée dans l'écran ;
- bande fondateur : halo Dawn qui respire lentement derrière le titre ;
- FAQ : le contenu d'une question s'ouvre en fondu remonté ; champ e-mail : anneau Dawn au focus.

**Mécanique** : Shrine ajoute `animate--shown` à une section quand elle entre dans l'écran ; un observateur de 10 lignes ajoute en parallèle `somnila-in`, dont dépendent les coches et les lignes d'horizon, pour qu'elles fonctionnent même si tu désactives un jour les animations du thème. Sans JavaScript, tout est visible d'emblée.

**Ce que je n'ai pas fait** : compte à rebours, compteur de visiteurs, notifications « X vient d'acheter » (règle 1 : rien d'inventé), confettis ou curseurs personnalisés (ça sent l'app). Si tu veux plus de mouvement, la prochaine marche est une vidéo produit dans le hero.

### Passe 2 (« mets des animations sur tout : boutons, articles, etc. »)

- **Boutons** : reflet clair qui traverse le bouton plein au survol ; enfoncement de 3 % au clic ; **pulsation Dawn** toutes les 4 s sur les boutons d'achat (fiche produit, barre collante) et sur *Shop Neck 01* du hero.
- **Cartes produit** (sets, collection, « Goes with it ») : élévation et ombre, zoom de l'image, **seconde photo au survol** (réglage natif activé sur l'accueil et la fiche produit), soulignement du titre qui se déploie, arrivée en cascade des cartes d'un même rang.
- **Fiche produit** : image principale en fondu puis flottement lent ; puces de preuve qui « poppent » l'une après l'autre ; icônes de réassurance qui flottent ; pastilles de couleur qui se soulèvent au survol ; vignettes de la galerie qui se soulèvent avec zoom ; cartes upsell (Mask 01, Quiet 01) qui se soulèvent, image zoomée, case à cocher qui grossit ; lignes du comparatif surlignées Mist au survol ; onglets dont le titre passe en Slate au survol et dont l'icône tourne à l'ouverture.
- **Articles du blog** (dès qu'ils seront publiés) : mêmes élévation, zoom et soulignement que les cartes produit.
- **Partout** : icônes d'en-tête (recherche, compte, panier) qui se soulèvent ; logo qui grossit de 3 % ; liens du pied de page soulignés au survol ; flèche du bouton newsletter qui glisse.

Vérifié par sonde DOM : pulsation, reflet, élévations, zoom, seconde image, soulignement, flottements, fondu de l'image produit, zéro erreur JavaScript.

## 6. Passe design 4 — repères pris chez Derila, Pilloway et Soya Paris

Date : 11 septembre 2026. Le CSS et le JS de marque ne vivent plus dans le
réglage `custom_liquid` de l'en-tête : ils sont dans deux fichiers du thème,
`assets/somnila-brand.css` (22 ko) et `assets/somnila-brand.js` (2,8 ko), appelés
par la section `somnila-styles`. Les sources de référence sont dans
`build/theme/assets/`. Une retouche de style ne demande donc plus de réécrire
tout le groupe d'en-tête.

### Ce que j'ai repris chez eux

| Repère | Chez eux | Chez nous |
| --- | --- | --- |
| Carrousel de best-sellers avec flèches | Soya | Les 8 packs en carrousel, flèches sur les côtés, cartes de hauteur égale |
| Ajout rapide au survol de la carte | Soya | Bouton « Add » qui apparaît au survol, sur les packs, la collection et « Goes with it » |
| Pastilles de couleur sur les cartes | Soya | Sur les grilles de collection (pas sur les packs : la couleur se choisit sur la fiche) |
| Seconde image au survol | Soya, Pilloway | Déjà en place, gardé |
| Bandeau de chiffres | Soya (statistiques clients) | Quatre chiffres **vrais et vérifiables sur le site**, qui s'incrémentent à l'arrivée |
| En-tête qui se resserre | Pilloway | Moins de hauteur et une ombre douce dès 40 px de défilement |
| Blocs aux angles arrondis qui se chevauchent | Pilloway | Le bloc « pourquoi si plat », la dalle fondateur et l'appel final |
| Repère de défilement sous le hero | Derila | Une capsule fine avec un point Dawn qui descend |

### Ce que j'ai refusé de reprendre

Soya affiche « 92 % des clients… » et « recommandé par les ostéopathes ».
Nous n'avons ni étude ni avis : la bande de chiffres ne dit que ce qu'on peut
vérifier sur le site — **5** formes, **30** nuits d'essai, **10** jours de
livraison au plus, et **0** compte à rebours, fausse promo ou minuteur. Derila
et Pilloway utilisent des barrés permanents et des stocks qui s'épuisent :
toujours rien de tout ça.

### Animations ajoutées

- Barre de progression de lecture en Dawn, 2 px, en haut de l'écran.
- Compteur des quatre chiffres, une seconde, courbe d'arrivée douce.
- Révélation des images par balayage vertical (cartes de position, image essai),
  en cascade de 0,1 s par carte.
- Parallaxe douce sur l'image de la section essai.
- Flèches de carrousel qui grossissent au survol, lignes de FAQ qui se teignent.
- Bouton « retour en haut » en bas à droite après 65 % de la page.

### Fiabilité

Le mécanisme de révélation ne repose plus seulement sur `IntersectionObserver` :
le script calcule aussi la position au défilement, au chargement, au
redimensionnement et à 0,4 s puis 1,5 s après l'affichage. Un bloc ne peut donc
plus rester invisible si l'observateur ne se déclenche pas. `prefers-reduced-motion`
coupe toujours tout.

### Fichiers touchés

`assets/somnila-brand.css`, `assets/somnila-brand.js`, `sections/header-group.json`,
`sections/footer-group.json` (bouton retour en haut), `templates/index.json`
(bande de chiffres, carrousel de packs), `templates/collection.json` et
`templates/product.json` (ajout rapide). Thème 157447585949, toujours non publié.

## 7. Passe UX et accessibilité

Date : 11 septembre 2026. Audit mené au navigateur sur l'accueil, une fiche
produit, une collection et le panier, en bureau et en tactile (390 px, `pointer:
coarse`). Ce qui suit a été mesuré, corrigé, puis remesuré.

### Corrigé

1. **Contraste du gris de texte.** Slate #6B7D90 donnait 4,01:1 sur Cloud et
   3,40:1 sur Mist — sous le seuil AA de 4,5:1 pour du texte courant. Un second
   gris, `--somnila-slate-text` #556676, prend le relais partout où Slate servait
   à écrire (légendes des chiffres, spécifications, accroche produit, ligne de
   preuve du hero, fil d'Ariane) : 5,61:1 sur Cloud, 4,75:1 sur Mist. Slate reste
   pour les filets et les bordures, où le seuil ne s'applique pas.
2. **Focus clavier visible.** Un anneau Dawn de 2 px avec 3 px de dégagement sur
   tout élément focalisé. Avant, on ne voyait la position du clavier que dans les
   champs de formulaire.
3. **Cibles tactiles.** Au doigt, les liens de carte (« Shop Neck 01 »), les
   entrées de menu, le logo, les liens du tiroir mobile, le pied de page et le
   fil d'Ariane font au moins 44 px de haut. Les pastilles du carrousel produit
   passent de 2 × 1 px à 24 × 24 px, le minimum WCAG 2.2.
4. **Intitulés manquants.** Le champ code promo, les listes déroulantes de
   coloris des ventes additionnelles et celle de la barre d'achat collante
   n'avaient aucun nom pour un lecteur d'écran ; les cases à cocher des ventes
   additionnelles non plus. Ils sont nommés au chargement par
   `somnila-brand.js`. Il reste zéro champ sans intitulé sur les quatre pages.
5. **Un seul titre de niveau 1 par page.** L'accueil en avait trois (le mien,
   celui du logo, celui du produit mis en avant). Les surnuméraires reçoivent
   `aria-level="2"` : la structure devient lisible pour un lecteur d'écran sans
   toucher au balisage du thème.
6. **Fil d'Ariane** sur les fiches produit (Accueil / collection / produit) et
   les collections. Orientation, retour en arrière, et un signal de structure
   pour les moteurs.
7. **Titres de page en double.** Les balises `title` affichaient
   « Neck 01 memory-foam pillow | Somnila – SOMNILA » : notre suffixe plus celui
   du thème. Le « | Somnila » a été retiré des titres SEO de 20 produits et
   2 collections. On lit maintenant « Neck 01 memory-foam pillow – SOMNILA ».

### Mesures avant / après

| Point | Avant | Après |
| --- | --- | --- |
| Champs sans intitulé (fiche produit) | 4 | 0 |
| Cibles tactiles sous 40 px (fiche produit) | 16 | 9, dont 6 dans la bannière cookies de Shopify |
| Titres de niveau 1 sur l'accueil | 3 | 1 |
| Contraste du gris de texte sur Cloud | 4,01:1 | 5,61:1 |
| Fil d'Ariane | absent | produit et collection |

### Ce qui reste à toi

- **Le titre de l'accueil affiche encore « PORTANCE — The art of sleep ».** Il ne
  vient pas du thème mais des préférences de la boutique, que l'API ne me laisse
  pas écrire. Admin → Boutique en ligne → Préférences → Titre et méta-description
  de la page d'accueil. Propositions : titre « Somnila — memory-foam pillows
  shaped around how you sleep », description « Pillows shaped for the way you
  actually lie. Foam that holds, a washable cover, 30 nights to decide. Free
  shipping, 6–10 days. »
- La bannière de consentement aux cookies est celle de Shopify : ses trois
  boutons font 34 à 36 px de haut et son lien « Privacy Policy » 21 px. Ni son
  balisage ni ses styles ne me sont accessibles.

### Fichiers

Nouveau `assets/somnila-ux.css` (couche accessibilité, chargée après la couche
de marque), `assets/somnila-brand.js` (nommage et niveaux de titres),
`templates/product.json` et `templates/collection.json` (section `crumbs`),
`sections/header-group.json` (chargement de la couche UX).

## 8. Passe UX 2 — panier, achat, états rarement vus

Date : 11 septembre 2026. Deuxième tour, sur ce que je n'avais pas ouvert :
le panier avec des articles dedans, le tiroir panier, le tiroir menu, la
recherche vide, la 404, et les poids réels de la page.

### Corrigé

1. **Contrôles de quantité.** Sur le panier mobile, le bloc faisait 97 × 27 px
   avec des boutons de 25 × 25 : impossible à viser au pouce. Il fait maintenant
   133 × 53 px avec des boutons de 43 × 51. Même traitement dans le tiroir et
   sur la fiche produit.
2. **Sélecteur de quantité sur la fiche produit.** Il n'y en avait pas : pour
   acheter deux oreillers il fallait passer par le panier. Il est posé à gauche
   du bouton d'ajout, à la même hauteur.
3. **Livraison et taxes au panier.** Le panier affichait un sous-total et un
   bouton, sans dire ce qui restait à calculer. Une ligne sobre sous le bouton :
   « Free shipping on every pillow and every set. Accessories bought on their
   own are charged shipping at checkout. Taxes are calculated at checkout. »

### Vérifié et laissé tel quel

- **Recherche sans résultat** : « No results found for "…". Check the spelling
  or use a different word or phrase. » Correct.
- **404** : « Nothing here. The pillows are this way. » avec un bouton vers les
  oreillers. Correct.
- **Tiroir menu** : Shop, Neck 01, Our story, Help, Log in, lignes de 44 px.
- **Tiroir panier** : article, quantité, prix, sous-total, et les accessoires
  recommandés déjà branchés sur la collection Accessories.
- **Bouton de suppression du panier** : il porte bien un intitulé
  (« Remove Neck 01 — Memory-foam pillow - Night »). Ma première mesure disait
  le contraire : elle regardait l'élément conteneur, pas le bouton.

### Mesuré, donc pas touché

Le poids des images de l'accueil est de **215 ko** au total, la plus lourde
faisant 23 ko. J'ai un moment soupçonné le logo, servi en 1440 px pour un
affichage à 160 px : en octets il pèse moins de 11 ko, le jeu n'en valait pas la
chandelle. Les 4,6 Mo de la page sont à 90 % des scripts Shopify et du thème
(`hydrate.js` 803 ko, `checkout-policy` 452 ko, `portable-wallets` 377 ko,
`base.css` 336 ko du thème Shrine). Réduire cela voudrait dire retirer les
boutons de paiement express ou modifier le thème : ni l'un ni l'autre ne se
décide sans toi.

### Mesures avant / après

| Point | Avant | Après |
| --- | --- | --- |
| Bloc quantité au panier mobile | 97 × 27 px | 133 × 53 px |
| Boutons − et + | 25 × 25 px | 43 × 51 px |
| Quantité sur la fiche produit | absente | présente, à côté du bouton d'ajout |
| Mention livraison et taxes au panier | absente | sous le bouton de paiement |

## 9. Passe design 5 — composition

14 septembre 2026. Tu as confirmé que la DA et le branding te vont : je n'ai
donc touché ni la palette, ni les polices, ni la structure des sections. Ce
qui manquait était la qualité de composition. Tout se joue dans une nouvelle
feuille, `assets/somnila-layout.css`, chargée entre la couche de marque et la
couche d'accessibilité.

### Ce qui n'allait pas, mesuré sur la page

1. **Le rythme vertical était arbitraire.** Les sections s'enchaînaient en
   24, 40, 48, 56, 64 et 72 px de marge intérieure, au gré du réglage posé
   section par section. L'œil ne trouvait aucune règle.
2. **Les cartes de la gamme finissaient en dents de scie.** Les titres sur une
   ou deux lignes décalaient le texte et les liens : « Shop Neck 01 » et
   « Shop Side 01 » ne tombaient pas à la même hauteur, à 26 px près.
3. **Les titres de section n'avaient qu'une taille**, quel que soit leur poids
   dans la page, avec un interligne trop lâche pour du Fraunces.
4. **Le hero manquait de hiérarchie** : le filet Dawn collait à la descendante
   du « p » de « Sleep », et les quatre blocs s'enchaînaient sans respiration
   régulière.

### Ce que j'ai posé

- **Une échelle d'espacement unique**, en quatre valeurs fluides : serré pour
  la barre de confiance, moyen pour le produit mis en avant, standard pour les
  sections de contenu, large pour les deux dalles de parole. Chaque section
  s'y range, sur toutes les largeurs d'écran.
- **Des cartes alignées au pixel.** Le bloc de texte devient une colonne
  flexible, le lien se cale en bas, et le titre réserve deux lignes : les cinq
  titres, les cinq textes et les cinq liens démarrent désormais à la même
  hauteur.
- **Une échelle typographique** pour les titres de section, de 32 à 48 px selon
  la largeur, interligne 1,04, chasse resserrée. Les titres de carte passent à
  20 px avec `text-wrap: balance`, donc plus de coupure bancale du genre
  « You like it softer and / lower ».
- **Un hero rythmé** : filet plus large et plus bas, texte à 18,5 px sur une
  mesure de 48 rem, ligne de preuve détachée, boutons de 52 px.
- **Une mesure de lecture** plafonnée à 58 caractères sur les blocs de texte
  centrés, 52 sur la section essai.

### Mesures avant / après

| Point | Avant | Après |
| --- | --- | --- |
| Marges intérieures de section | 24 à 72 px, six valeurs | 4 valeurs fluides, une échelle |
| Liens des cinq cartes de la gamme | 2 hauteurs différentes | tous à la même hauteur |
| Départ des textes de carte | 4 hauteurs différentes | tous à la même hauteur |
| Taille des titres de section | 38 px fixes | 32 à 48 px selon l'écran |
| Hauteur de l'accueil | 7 697 px | 8 777 px, l'air en plus |

### Et la proposition « catalogue de nuit » ?

Elle reste dans `build/design-v2/`, non appliquée. Tu as tranché : on garde la
direction actuelle. Le fichier ne gêne rien et documente la piste écartée.
