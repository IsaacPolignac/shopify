# Compositions « nuageuses »

Reproduction du registre visuel de Pilloway : fond bleu poudré, produit en lévitation,
titre incrusté, annotation manuscrite, pastille. Voir
`docs/theme/architecture.md` § « Direction visuelle » pour le raisonnement.

## Utilisation

Les scripts attendent les sources de produits (`appui.png`, `aplomb.png`,
`bsommeil.png`, `bnasal.png`, `lifestyle-src.png`) dans le même dossier, et écrivent
leurs sorties à côté. Ils ne dépendent que de Pillow.

```bash
python3 compose2.py   # 4 visuels produits 4:5   -> *-hero.png + check4.png
python3 hero.py       # hero desktop / mobile / bandeau -> check-hero4.png
python3 grade.py      # refroidit une photo d'ambiance  -> check-grade.png
```

Les polices sont récupérées une fois dans `fonts/` :

```bash
mkdir -p fonts
curl -L -o fonts/Caveat-var.ttf     https://raw.githubusercontent.com/google/fonts/main/ofl/caveat/Caveat%5Bwght%5D.ttf
curl -L -o fonts/Poppins-Bold.ttf     https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Bold.ttf
curl -L -o fonts/Poppins-SemiBold.ttf https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-SemiBold.ttf
```

## Aperçus

| Fichier | Contenu |
|---|---|
| `apercu-produits.jpg` | les 4 visuels produits |
| `apercu-bannieres.jpg` | hero desktop, hero mobile, bandeau |
| `apercu-etalonnage.jpg` | photo d'ambiance, avant / après refroidissement |

## Ce qu'il ne faut pas refaire

- Les **sources produits** viennent d'une génération payante et ne sont pas au dépôt.
  Les visuels finaux sur le CDN Shopify font foi ; les URL sont dans
  `docs/theme/architecture.md`.
- Ne pas incruster de promotion dans une image : la pastille dit « 30 nuits d'essai »
  parce qu'un prix barré non validé serait impossible à retirer après coup.
