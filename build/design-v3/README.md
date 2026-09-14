# Fiche produit « univers » — Neck 01

Maquette de la fiche produit, reprenant la **structure de conversion** d'une page DTC
efficace (référence fournie par le fondateur : la fiche café protéiné Blume) avec
**notre direction artistique** et **uniquement des données réelles**.

Fichier : `somnila-fiche-neck-01.html` — page autonome, images en data-URI,
polices Fraunces + Manrope depuis Google Fonts.
Aperçu publié : voir le lien d'artifact partagé dans la conversation.

## Ce qui est repris de la référence
Bandeau d'annonce · tuiles d'icônes à côté du packshot · badge sur l'image ·
titre + pastilles · prix · checklist de faits · nuancier · bouton pleine largeur ·
bloc « dans le carton » · packs · barre d'achat collante.

## Ce qui est remplacé, faute de donnée réelle

| Référence | Somnila | Pourquoi |
|---|---|---|
| ★★★★★ + nombre d'avis | « Thirty nights to decide · refunded by email » | aucun avis client réel à ce jour |
| Badge « Best Seller » | Badge « Two heights » | aucune donnée de vente |
| « SAVE 20 % » + prix barré | Prix net + « Cover included · free shipping » | pas de faux prix barré sur un produit seul |
| « 4 FREE GIFTS » | « In the box — 2 pieces, nothing else » | aucun cadeau n'existe |

Les seules remises affichées sont réelles :
For Two 139,08 $ au lieu de 162,16 $ · Sleep Set 115,88 $ au lieu de 121,44 $.

## Marque
Logo vectoriel du repo (`build/brand/logo/somnila-logo-light.svg`), inséré en
`<symbol>` réutilisé : lettres en `currentColor` (Night dans l'en-tête, Cloud dans
le pied), lune toujours en Dawn `#F0B79B`, conformément à la charte.
Le croissant seul ne sert qu'aux petits usages (l'exergue « The idea »).
Aucun autre croissant générique dans l'interface, pour ne pas diluer le symbole.

## Typographie
Fraunces (variable, `SOFT 100`) en graisse 600 pour l'affichage — titre, prix,
13 cm / 11 cm, titres de section. Manrope pour toute l'interface.

## Mise en page
- Mobile : colonne unique, l'ordre de la référence.
- ≥ 900 px : deux colonnes, visuel collant à gauche, bloc d'achat à droite,
  puis les sections en pleine largeur.

## Reste à faire
Portage dans le thème en sections `custom-liquid` écrites à la main
(données Shopify réelles, variantes, vrai panier), d'abord sur Neck 01.
