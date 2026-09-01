# Traductions — où vit quoi

Shopify est la source de vérité. Ce dossier n'en est qu'un miroir lisible :
`pages/fr/` et `pages/en/` sont exportés depuis l'API, pas édités à la main.

## Le principe

La boutique a le **français en langue de base** (locale primaire de la boutique).
Les six marchés ont tous **l'anglais en langue par défaut** de leur présence web.
Conséquence : une chaîne sans traduction anglaise s'affiche en français à un
visiteur américain. L'anglais est donc le chemin critique, pas une option.

Le thème marchand (`157230071965`) n'est **pas publié**. Contrairement à ce qu'on
lit souvent, ses gabarits JSON sont malgré tout traduisibles : `translatableResources`
ne liste que le thème publié, mais `translatableResourcesByIds` accepte
`…?theme_id=157230071965` et renvoie bien le contenu. C'est ce qui a permis de
traduire l'accueil, l'en-tête, le pied de page et les fiches sans republier.

## État par ressource

| Ressource | Base | en | de | es | it | nl |
|---|---|---|---|---|---|---|
| Produits (7) | fr | ✅ | ✅ | ✅ | ✅ | ✅ |
| Options produit (`Couleur`, `Format`) | fr | ✅ | ✅ | ✅ | ✅ | ✅ |
| Valeurs d'options (couleurs, formats) | fr | ✅ | ✅ | ✅ | ✅ | ✅ |
| Alt des visuels sommeil (26) | fr | ✅ | ✅ | ✅ | ✅ | ✅ |
| Menus (22 liens) | fr | ✅ | ✅ | ✅ | ✅ | ✅ |
| Pages (9) | fr | ✅ | — | — | — | — |
| SEO boutique (`meta_title`, `meta_description`) | fr (héritée LIYAN) | ✅ | ✅ | ✅ | ✅ | ✅ |
| `settings_data` — tiroir panier, pop-up | fr | ✅ | ✅ | ✅ | ✅ | ✅ |
| `settings_data` — marque, badge promo | fr | ✅ | ✅ | ✅ | ✅ | ✅ |
| `templates/index.json` | **en** | base | — | — | — | — |
| `sections/header-group.json` | **en** | base | — | — | — | — |
| `sections/footer-group.json` | **en** | base | — | — | — | — |
| `templates/cart.json` | **en** | base | — | — | — | — |
| `templates/product*.json` (4) | fr | ✅ | — | — | — | — |
| `templates/collection.json`, `page.json`, `page.contact.json` | fr | ✅ | — | — | — | — |

Les quatre gabarits en base anglaise (accueil, en-tête, pied, panier) ont été
réécrits en anglais lors de la fusion des deux sites de référence ; les autres
ont gardé leur base française et reçoivent une traduction anglaise. Les deux
approches donnent le même résultat à l'écran, mais il faut le savoir avant
d'éditer : sur l'accueil on modifie le fichier, sur une fiche produit on modifie
la traduction.

## Ce qui reste en français à l'écran, et pourquoi

Une seule chaîne : **« – boutique »**, ajoutée au titre de chaque page par
`theme.liquid` à partir de `shop.name`. Le nom de la boutique n'est pas
modifiable par l'API Admin — voir ACTIONS.md.

Le titre de la page d'accueil vient de `SHOP.meta_title`, dont la valeur de base
est encore celle de l'ancienne boutique LIYAN. Les cinq traductions sont posées,
donc seul un visiteur **francophone** voit l'ancien titre. La correction se fait
dans Admin → Boutique en ligne → Préférences.

## Réexporter ce dossier

```graphql
{ translatableResources(first:20, resourceType: PAGE){
    nodes{ resourceId translatableContent{ key value } translations(locale:"en"){ key value } } } }
```
puis découper par `handle` (le script d'export tient en dix lignes de Python,
voir l'historique du commit qui a créé ce dossier).

## Règles d'écriture des traductions anglaises

- **Aucun prix en euros.** Les six marchés convertissent ; un « 59,90 € » écrit
  en dur dans une FAQ devient faux dès qu'on quitte la zone euro. On renvoie à
  la fiche produit.
- **Aucun article du code de la consommation français** dans les textes anglais.
  On cite la directive européenne (2011/83/UE pour la rétractation,
  (UE) 2019/771 pour la conformité) et on nomme l'équivalent britannique,
  australien, américain et canadien. Le droit applicable reste le droit français
  (CGV art. 16), et les CGV le disent.
- **Aucune promesse de santé**, dans aucune langue. Les bandelettes ne sont pas
  des dispositifs médicaux et chaque page le répète.
- Les listes positionnelles du thème (`breaks_*`, `swatches_custom_colors_list`)
  se traduisent **sans jamais changer le nombre de virgules**.
