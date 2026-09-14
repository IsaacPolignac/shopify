# Direction artistique v2 — « le catalogue de nuit »

14 septembre 2026. Proposition faite après ton retour « le design ne me plaît
pas ». Elle ne touche pas la boutique : c'est une page réelle, avec les vraies
photos et les vrais prix, à regarder avant de décider.

Fichier : `somnila-accueil-v2.html` (les images sont intégrées dans le fichier,
il s'ouvre hors ligne dans n'importe quel navigateur).

## Le parti pris

Le site actuel est un thème Shopify habillé aux couleurs Somnila. On reconnaît
le thème avant de reconnaître la marque : grille de cartes, titres centrés,
sections empilées. Cette proposition part de l'autre bout : **la gamme est un
catalogue d'objets**, numéroté et spécifié, comme un catalogue de mobilier.

- **Typographie qui porte la page.** Fraunces Soft en très grand (jusqu'à
  168 px), interlettrage resserré. Manrope pour tout le reste. Des micro-labels
  en capitales espacées pour la numérotation et les spécifications.
- **Des filets, pas des cartes.** Les blocs sont séparés par des traits d'un
  pixel. Rien ne flotte dans une boîte blanche à ombre portée.
- **La gamme en index.** Cinq lignes numérotées 01 à 05 ; survoler ou cliquer
  une ligne change la photo et les spécifications à droite. Un index de
  catalogue, pas une grille de cartes.
- **Les chiffres en chiffres.** 5 formes, 30 nuits, 10 jours, 0 compte à
  rebours, posés en très grand comme des repères de catalogue.
- **Une dalle Ink pleine largeur** pour le mot du fondateur, avec le halo Dawn.
- **La liste de prix** remplace les cartes produit : nom, description, prix, et
  le prix « acheté séparément » écrit en clair, sans barré, puisque la marque
  refuse les faux barrés.

## Ce qui ne change pas

Palette Cloud / Mist / Night / Dawn, Fraunces Soft et Manrope, aucun visage,
aucune donnée inventée, aucun levier trompeur. Tous les textes et tous les prix
viennent de la boutique.

## Si tu la valides

Je la porte dans le thème en sections `custom-liquid` : j'écris le HTML et le
CSS à la main, section par section, au lieu d'habiller les sections du thème.
C'est ce qui permet d'obtenir exactement cette page dans Shopify. Compter une
passe pour l'accueil, une pour la fiche produit.
