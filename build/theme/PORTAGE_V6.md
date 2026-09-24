# Design v6 dans le thème Shrine « Somnila — build v1 »

Date : 24 septembre 2026. Thème 157447585949 (Shrine PRO), **non publié**. Rien n'a été
publié, supprimé ou envoyé. La maquette v6 (`build/design-v6/`) est reproduite avec des
sections Shopify natives, sans application.

## Ce qui a changé dans le thème

| Fichier | Rôle |
|---|---|
| `assets/somnila-v6.css` | Tous les styles v6, limités aux blocs `.sv6` (le reste de Shrine n'est pas touché) |
| `assets/somnila-v6.js` | Couleur → photo, paliers 1 · 2 · 3 oreillers, schéma des deux hauteurs, barre d'achat collante |
| `assets/sv6-cut-neck-01-*.webp`, `assets/sv6-tile-*.webp` | Détourages Neck 01 (4 couleurs) et vignettes des cartes, tirés des photos existantes |
| `snippets/sv6-icon.liquid`, `snippets/sv6-separately.liquid` | Icônes ; somme des prix réels des composants d'un pack |
| `sections/sv6-*.liquid` (12 sections) | Héro, confiance, cartes, problèmes et étapes, deux hauteurs, comparatif, packs, garantie, FAQ, fin de page, fiche produit, frise |
| `templates/index.json` | Accueil v6 en 10 blocs |
| `templates/product.json` | Fiche produit v6 (bloc d'achat, étapes, frise, comparatif, FAQ) |
| `sections/header-group.json` | Charge le CSS et le JS v6 |

Sauvegarde des trois gabarits d'avant : `templates/backup-v5/`.

## Données

Les prix viennent de Shopify (`product.price`, converti par Markets) : aucun prix n'est écrit
dans le code. Les économies des packs (« Save 14 % », « Separately $158.92 ») sont calculées
à partir des vrais prix des produits qui composent le pack. Dimensions et matières viennent
des métachamps `somnila.*`. Pas d'avis, pas d'étoiles, pas de prix barré, pas de compte à
rebours.

## Vérifié dans l'aperçu (captures dans `build/preview/v6-*.png`)

- Accueil et fiche Neck 01, ordinateur et téléphone ; fiche Contour 01 (les blocs réservés à
  Neck 01 sont masqués).
- Couleur choisie → bonne photo, bon nom, bon variant.
- Palier « 2 pillows » → variant du pack For Two dans la bonne couleur.
- Ajout au panier par le formulaire de Shrine : `/cart/add` répond 200 avec
  « For Two — 2 × Neck 01 - Stone ».

## À faire côté Shopify (par toi)

- Langue par défaut de la boutique : encore le français. Les textes du thème (tiroir panier,
  « Procéder au paiement », lien d'évitement) s'affichent donc en français. À passer en anglais.
- Titre de la page d'accueil (Préférences) : encore « LIYAN | Biberons & Accessoires Bébé
  Premium – SOMNILA ».
- Associer une photo à chaque variant couleur, pour que le panier montre la bonne couleur.
- Bannière cookies, politiques, délais par zone : voir la liste de passation.
