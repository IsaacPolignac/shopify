# Compositions « nuageuses »

Reproduction du registre visuel de Pilloway : fond bleu poudré, produit en lévitation,
titre incrusté, annotation manuscrite, pastille. Voir
`docs/theme/architecture.md` § « Direction visuelle » pour le raisonnement.

## Utilisation

Les scripts attendent les sources de produits (`appui.png`, `aplomb.png`,
`bsommeil.png`, `bnasal.png`, `lifestyle-src.png`) dans le même dossier, et écrivent
leurs sorties à côté. Ils ne dépendent que de Pillow.

```bash
python3 compose3.py   # 5 cartes produit 4:5, sans texte -> *-hero.png
python3 compose2.py   # ancienne serie, titre francais incruste (obsolete)
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
| `apercu-cartes.jpg` | les 5 cartes produit en service (compose3.py) |
| `apercu-produits.jpg` | l'ancienne serie a texte incruste (compose2.py) |
| `apercu-bannieres.jpg` | hero desktop, hero mobile, bandeau |
| `apercu-etalonnage.jpg` | photo d'ambiance, avant / après refroidissement |

## Ce qu'il ne faut pas refaire

- Les **sources produits** viennent d'une génération payante et ne sont pas au dépôt.
  Les visuels finaux sur le CDN Shopify font foi ; les URL sont dans
  `docs/theme/architecture.md`.
- Ne pas incruster de promotion dans une image : la pastille dit « 30 nuits d'essai »
  parce qu'un prix barré non validé serait impossible à retirer après coup.

## Pourquoi compose3 remplace compose2

`compose2.py` incrustait le titre, l'annotation manuscrite et la pastille dans
l'image. Tant que la boutique etait francaise, cela marchait. Des l'ouverture
des six langues, un visiteur allemand ou espagnol lisait « Mieux dormir, des ce
soir. » sur la carte produit, et les deux oreillers portaient la meme phrase.
Le texte est donc sorti de l'image ; il vit maintenant dans le theme, ou
`translationsRegister` sait le traduire.

`compose3.py` se contente de recadrer en 4:5 autour du produit et d'egaliser
l'exposition des cinq prises. Une version qui basculait le fond creme vers le
bleu poudre de la marque a ete ecrite puis abandonnee : un oreiller blanc sur
un fond creme n'est pas separable par la couleur, et le gain applique au fond
deteignait sur le sauge et sur le chair des bandelettes. Le fond de studio est
propre et, surtout, muet dans toutes les langues.

## Ce qu'il ne faut pas refaire (bis)

- Ne pas remettre de texte dans une image produit, dans aucune langue.
