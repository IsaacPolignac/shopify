# Design v5 — la maquette du site, version « de malade »

Date : 24 septembre 2026. Même adresse de prévisualisation que la v4 :
https://claude.ai/artifact/BwsoBzQP1kx8dPvDJeR41b (version 2). Rien n'est publié dans
Shopify, le thème 157447585949 est inchangé.

## Les fichiers

| Fichier | Rôle |
|---|---|
| `somnila-storefront.html` | La maquette, un seul fichier, images incluses. |
| `somnila-storefront.src.html` | Sa source lisible. |
| `build.py` | Reconstruit la maquette : `python3 build/design-v5/build.py`. |
| `../images/site/cutouts/` | Nouveaux détourages : Neck 01 dans ses 4 couleurs, Body 01, un seul Lounge 01. Faits avec `sky-packshots.py` à partir des photos de la boutique, liseré nettoyé. |

## Ce qui change par rapport à la v4

**Accueil**
1. **Héro** : « Sleep well. » en Fraunces géant, avec « well. » en italique. Un vrai
   Neck 01 flotte entre les deux mots, devant le texte. Il suit la souris et descend
   doucement au défilement. Le ciel est dessiné en direct : nuages qui dérivent et halo
   Dawn qui monte. On change la couleur de l'oreiller (Night, Cloud, Stone, Sky) depuis le
   héro. La question « How do you usually fall asleep? » reste dans le premier écran.
2. **Bandeau défilant** en Fraunces italique, avec le croissant du logo comme séparateur.
3. **« Tonight, you'll turn about thirteen times. »** Le chiffre vient de l'étude
   Skarpsno : 1,6 changement par heure sur une nuit de 8 heures. On voit une frise de 11 PM
   à 7 AM avec 13 retournements qui s'allument au défilement, puis la répartition côté /
   dos / ventre.
4. **« One pillow, turned over. »** Un chapitre qui reste à l'écran pendant qu'on défile.
   Le schéma à l'échelle de Neck 01 se retourne : 13 cm côté cou sur le côté, 11 cm sur le
   dos. Un niveau à bulle se centre sur « Either way ». Des boutons Side / Back / Level
   permettent de le piloter sans défiler.
5. **« Five shapes, on one horizon. »** Les cinq oreillers posés sur la ligne d'horizon, à
   la même échelle (Body 01 mesuré le long de sa courbe).
6. **Module d'achat Neck 01** : l'oreiller flotte sur son ciel, avec couleur, 1 · 2 · 3
   oreillers et économies en dollars.
7. **Trente nuits** dessinées en calendrier de 30 pastilles qui se remplissent au
   défilement. La 30ᵉ est en Dawn.
8. **Manifeste** sur fond Night : les trois refus sont barrés en Dawn, le trait se trace
   à l'écran.
9. **Packs** en rail horizontal, qu'on peut faire glisser à la souris.
10. **Fondateur** : le texte du brand book passe de gris à noir, mot à mot, au fil de la
    lecture.
11. **Pied de page** : « Sleep well. » géant, avec un soleil Dawn qui se couche derrière la
    ligne d'horizon.

**Partout**
- L'ajout au panier fait voler l'oreiller jusqu'à l'icône du panier, qui rebondit.
- Transitions entre les pages. En venant d'une carte, l'image glisse jusqu'à la fiche
  produit.
- Les cartes produit s'inclinent légèrement sous la souris, avec un reflet qui suit le
  curseur.
- Loupe au survol des photos sur la fiche produit.
- Adresses courtes : `#shop`, `#sets`, `#neck-01`, `#finder`, `#story`.

## Règles tenues

Les prix, les dimensions, les photos et les textes sont réels, comme en v4. Le texte
affiché ne contient aucun mot interdit du brand book (40 000 caractères scannés, zéro trouvé).
Aucun avis, aucune note, aucun prix barré, aucun compte à rebours. Aucun visage. Pas
d'app ni de script tiers : du HTML, du CSS et du JavaScript écrits à la main, plus les
polices Google. `prefers-reduced-motion` coupe toutes les animations et remet le chapitre
« turned over » en page normale.

## Étape suivante

Porter ce design dans le thème non publié, en sections Liquid écrites à la main. En
attente de ton « ok ».
