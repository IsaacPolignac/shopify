# Architecture du thème

> Marque : **PORTANCE** — « Ce qui vous porte. »

Thème : `shrine-pro-v1-2-3-186-sections` — Shrine PRO 1.2.3, 186 sections disponibles.
ID : `gid://shopify/OnlineStoreTheme/157230071965`. **Non publié.**

Les fichiers écrits sont versionnés dans [`files/`](files/), aux mêmes chemins que dans le
thème. Ils font foi : en cas de doute, c'est la copie du dépôt qui est la source.

---

## Jetons de marque — `config/settings_data.json`

| Rôle | Valeur |
|---|---|
| Accent 1 — boutons, liens, icônes | `#1C2B3A` ardoise profonde |
| Accent 2 — badges de remise | `#B5652E` ambre brique |
| Texte, pied de page | `#15191E` encre |
| Fond 1 | `#FFFFFF` |
| Fond 2 — bandes | `#EDEFF1` gris froid |
| Titres | Jost SemiBold (`jost_n6`), échelle 115 |
| Corps | Inter Regular (`inter_n4`) |
| Rayon des boutons, cartes, champs, médias | 0 px |
| Logo / favicon | `portance-logotype.png` / `portance-favicon.png` |
| Largeur de page | 1400 px |
| Badge de remise | `-[percentage]` |
| Panier | tiroir, franco à 60 €, minuteur 5 min |

Deux clés portent le **jeton de licence du thème** : `animations_type` et `fav_collection`.
Elles contiennent le même blob base64 de 408 caractères. **Ne jamais les régénérer** — le
thème se désactiverait.

Les réglages de type `range` sont validés par pas : une valeur hors pas fait rejeter tout
le fichier (erreur `FILE_VALIDATION_ERROR`). Les marges de blocs sont au pas de 3.

---

## Page d'accueil — `templates/index.json`

| # | Section | Type Shrine | Rôle |
|---|---|---|---|
| 1 | `hero` | `slideshow-hero` | Plein écran, image chambre, voile 30 %, deux boutons. **Pilloway n'en a pas.** |
| 2 | `trust` | `icon-bar` | 4 arguments vérifiables, bande crème |
| 3 | `gamme` | `featured-collection` | Collection `best-sellers`, 4 produits, ajout rapide |
| 4 | `manifeste` | `rich-text` | « On part de la position, pas du rayon. » |
| 5 | `lifestyle` | `image-with-text` | Mécanisme des trois points, 3 puces à icône |
| 6 | `comparatif` | `comparison-table` | LIYAN vs oreiller classique, 6 lignes. **Pilloway n'en a pas.** |
| 7 | `avis` | `testimonials` | **Désactivée volontairement** — voir ACTIONS.md §6 |
| 8 | `faq` | `collapsible-content` | 5 questions |
| 9 | `newsletter` | `newsletter` | |

---

## Fiches produits — trois gabarits

Pilloway utilise un seul gabarit pour tous ses produits, ce qui explique que la FAQ de
leurs bandelettes parle d'épaules et de genoux. Ici, quatre gabarits.

| Gabarit | Produits | Particularité |
|---|---|---|
| `templates/product.oreiller.json` | Appui, Aplomb | Pastilles de couleur, accordéon dimensions/entretien/garantie |
| `templates/product.respiration.json` | Bandelettes de sommeil | **Paliers de quantité** (3) + encart d'avertissement + accordéon contre-indications **ouvert par défaut** |
| `templates/product.nasal.json` | Bandelettes nasales | Paliers de quantité (2), avertissement et FAQ propres au produit |
| `templates/product.json` | Les 3 taies | Pastilles de couleur, accordéon matière/compatibilité |

### Ordre des blocs du bloc d'achat

```
title → text (3 puces) → [warn] → price → variant_picker
  → buy_buttons → payment_badges → estimated_shipping
  → icon_with_text (3 réassurances) → divider → description
  → collapsible_tab ×4-5 → sticky_atc
```

Contrainte du thème : tout bloc contenant un sélecteur de variante (paliers de quantité,
cadeaux, options pré-cochées) **doit être au-dessus de `buy_buttons`**.

### Paliers de quantité

Faits nativement, sans application. Sur `variant_picker` :

```json
"picker_types": "quantity breaks",
"breaks_badges": "[empty], Le plus choisi, Meilleur prix",
"breaks_captions": "[empty], Vous économisez [amount_saved], Vous économisez [amount_saved]",
"breaks_compare_price_texts": "[empty], [compare_price], [compare_price]"
```

Ces listes sont **positionnelles** : une entrée par variante, séparées par des virgules,
`[empty]` pour une case vide. Les valeurs dynamiques disponibles sont `[quantity]`,
`[price]`, `[compare_price]`, `[amount_saved]`, `[percentage_saved]`.

> **Piège rencontré, et il coûte cher en français.** Le séparateur de ces listes est la
> virgule — la même que la virgule décimale française. Écrire `1,16 € l'unité, 0,78 € …`
> produit sept entrées au lieu de trois, et chaque palier affiche un fragment de la
> précédente. **Aucune virgule décimale dans ces champs.** Ici les prix unitaires sont
> écrits à la française sans virgule : `1 € 16 l'unité`, `0 € 78 l'unité · 33 % de remise`.
>
> Deux autres constats sur ce composant : `[amount_saved]` renvoie l'opposé du prix quand
> le prix barré n'est pas rendu, et `breaks_compare_price_texts` n'affiche rien du tout
> dans cette version du thème. L'argument prix passe donc entièrement par la légende,
> qui est fiable.

### Pastilles de couleur

```json
"swatches_custom_colors": "custom",
"swatches_custom_colors_list": "#A8BCA9, #EFE7D9, #C4C2BD, #33445C, #E0BFBB, #B97D65"
```

**Positionnel également.** C'est la raison pour laquelle les cinq produits à coloris
partagent la même palette dans le même ordre : Sauge, Crème, Gris perle, Bleu nuit,
Rose poudré, Terracotta. Si tu ajoutes un coloris à un produit, ajoute la couleur au bon
rang dans la liste, ou les pastilles se décalent.

---

## Panier — `templates/cart.json`

`main-cart-items` → `main-cart-footer` → bande de réassurance (`icon-bar`) → suggestions
(`featured-collection` sur les taies). Le tiroir latéral, lui, est configuré dans
`config/settings_data.json` sous `current.sections["cart-drawer"]` : minuteur 5 min, barre de
progression vers 60 €, code promo, économies, icônes de paiement.

## En-tête et pied de page

- `sections/header-group.json` — barre d'annonce à 3 messages (3 colonnes sur ordinateur,
  rotation sur mobile) + en-tête collant, logo centré, menu `main-menu`.
- `sections/footer-group.json` — 4 colonnes, fond sauge profond `#3F5143`, menus `footer`
  et `aide`, icônes de paiement, mention « Powered by Shrine » retirée.

## Menus Shopify

| Handle | Titre | Contenu |
|---|---|---|
| `main-menu` | Menu principal | Boutique (+4 sous-entrées), Oreiller Appui, Notre histoire, Garantie 30 nuits, Nous contacter |
| `footer` | La boutique | Les 4 collections |
| `aide` | Aide & informations | FAQ, Livraison, Retours, Garantie, Contact, CGV |

---

## Écrire dans le thème

L'API interdit d'écrire sur un thème **publié**. Sur un thème non publié :

```graphql
mutation U($themeId: ID!, $files: [OnlineStoreThemeFilesUpsertFileInput!]!) {
  themeFilesUpsert(themeId: $themeId, files: $files) {
    upsertedThemeFiles { filename }
    userErrors { field code message }
  }
}
```

Trois pièges rencontrés :

1. **Validation par pas** sur tous les réglages `range`, y compris à l'intérieur des blocs
   de section. Le schéma des blocs est dans le `{% schema %}` du fichier `.liquid`
   concerné, pas dans `settings_schema.json`.
2. **L'écriture est atomique** : une seule valeur invalide fait rejeter tout le fichier.
3. **Identifiants mal orthographiés à reproduire tels quels** : `Full_mobile_width` (F
   majuscule), `mobile_image_quanlity`, `enable_mobile_outher_spacing`.
4. **Shopify supprime silencieusement les clés inconnues.** Le titre de section de
   `collapsible-content` a pour identifiant `title`, pas `heading` — `heading` appartient
   au bloc `collapsible_row`. Une clé inventée ne provoque aucune erreur : elle disparaît.

## Aperçu

```
https://liyan.shop/?preview_theme_id=157230071965
```

Le paramètre pose un cookie de session ; pour parcourir d'autres pages en aperçu, garde le
cookie (`curl -c/-b`) ou navigue depuis la page d'accueil.
