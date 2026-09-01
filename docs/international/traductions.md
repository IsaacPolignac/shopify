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

`base` = la langue dans laquelle le contenu est stocké. ✅ = traduction enregistrée.
La base est le **français** partout, comme la locale primaire de la boutique :
c'est la seule configuration possible, puisque Shopify refuse d'enregistrer une
traduction dans la locale primaire. Un gabarit écrit en anglais ne pouvait donc
pas être servi en français — c'est pour cela que l'accueil, l'en-tête, le pied
et le panier sont repassés en base française le 1er septembre.

| Ressource | Base | en | de | es | fr | it | nl |
|---|---|---|---|---|---|---|---|
| Produits (7) | fr | ✅ | ✅ | ✅ | base | ✅ | ✅ |
| Options produit et valeurs | fr | ✅ | ✅ | ✅ | base | ✅ | ✅ |
| Alt des visuels sommeil (26) | fr | ✅ | ✅ | ✅ | base | ✅ | ✅ |
| Menus (22 liens) | fr | ✅ | ✅ | ✅ | base | ✅ | ✅ |
| Collections sommeil (4) | fr | ✅ | — | — | base | — | — |
| Pages (9) | fr | ✅ | — | — | base | — | — |
| SEO boutique | fr (héritée LIYAN) | ✅ | ✅ | ✅ | ✗ | ✅ | ✅ |
| `settings_data` (panier, pop-up, marque, badge) | fr | ✅ | ✅ | ✅ | base | ✅ | ✅ |
| `templates/index.json` (accueil) | fr | ✅ | ✅ | ✅ | base | ✅ | ✅ |
| `sections/header-group.json` | fr | ✅ | ✅ | ✅ | base | ✅ | ✅ |
| `sections/footer-group.json` | fr | ✅ | ✅ | ✅ | base | ✅ | ✅ |
| `templates/cart.json` | fr | ✅ | ✅ | ✅ | base | ✅ | ✅ |
| `templates/collection.json` | fr | ✅ | ✅ | ✅ | base | ✅ | ✅ |
| `templates/page.json`, `page.contact.json` | fr | ✅ | ✅ | ✅ | base | ✅ | ✅ |
| `templates/product*.json` (4) | fr | ✅ | ✅ | ✅ | base | ✅ | ✅ |

Les cases vides retombent sur l'anglais, langue par défaut des six marchés.
Il en reste deux : les **pages** (livraison, retours, CGV, garantie, contact,
histoire, FAQ, sécurité, confidentialité) et les **collections**, traduites en
anglais mais pas encore en allemand, espagnol, italien ni néerlandais. Un
visiteur allemand lit donc tout le parcours d'achat en allemand — accueil,
collection, fiche produit, panier — et bascule en anglais s'il ouvre les CGV.

Vérifié le 1er septembre en rendu réel sur le thème de prévisualisation :
les six langues affichent l'accueil et les fiches produit sans une seule
chaîne étrangère.

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
