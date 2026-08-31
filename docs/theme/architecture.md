# Architecture du thème

> Marque : **PORTANCE** — « L'art du sommeil. »

Thème : `shrine-pro-v1-2-3-186-sections` — Shrine PRO 1.2.3, 186 sections disponibles.
ID : `gid://shopify/OnlineStoreTheme/157230071965`. **Non publié.**

Les fichiers écrits sont versionnés dans [`files/`](files/), aux mêmes chemins que dans le
thème. Ils font foi : en cas de doute, c'est la copie du dépôt qui est la source.

---

## Jetons de marque — `config/settings_data.json`

| Rôle | Valeur | Source |
|---|---|---|
| Accent — boutons, liens, en-tête, badges | `#43789A` | Pilloway `#5A97B9`, assombri pour l'accessibilité |
| Texte | `#121212` | identique |
| Fond 1 | `#FFFFFF` | identique |
| Fond 2 | `#DCE8F0` | identique |
| Titres | Poppins 700, échelle 130, interlettrage 0,6 | identique |
| Textes | Poppins 400 | identique |
| Boutons | rayon 6 px, bordure 2 px | identique |
| Cartes, médias | rayon 12 px | identique |
| Badge | rayon 6 px, bas-gauche | identique |
| Largeur de page | 1400 px, sections collées (0) | identique |
| En-tête | `accent-1` — bandeau bleu, logo centré, collant au défilement | identique |
| Pied de page | blanc, texte noir | identique |
| Logo | `portance-lockup-clair.png` en en-tête (fond bleu), `portance-lockup.png` en secondaire et au pied de page |

### La seule correction de couleur

`#5A97B9` sur blanc donne **3,20:1**. La norme WCAG AA demande 4,5:1 pour du texte courant.
Leur en-tête et leurs boutons échouent donc au test — c'est un vrai défaut d'accessibilité,
pas une question de goût. `#43789A` est la même teinte à **4,78:1**. Pour revenir à leur
valeur exacte : `colors_accent_1` et `colors_accent_2` dans `config/settings_data.json`.

Deux clés portent le **jeton de licence du thème** : `animations_type` et `fav_collection`.
Elles contiennent le même blob base64 de 408 caractères. **Ne jamais les régénérer** — le
thème se désactiverait.

Les réglages de type `range` sont validés par pas : une valeur hors pas fait rejeter tout
le fichier (erreur `FILE_VALIDATION_ERROR`). Les marges de blocs sont au pas de 3.

---

## Page d'accueil — `templates/index.json`

| # | Section | Type Shrine | Rôle |
|---|---|---|---|
| 1 | `hero` | `slideshow-hero` | Composition nuageuse, **voile à 0 %**, texte encre. **Pilloway n'a pas de hero.** |
| 2 | `trust` | `icon-bar` | 4 arguments vérifiables, fond bleu poudre |
| 3 | `gamme` | `featured-collection` | Collection `best-sellers`, 4 produits, cartes 4:5, ajout rapide |
| 4 | `manifeste` | `rich-text` | « Un oreiller ne se juge pas à la main. » |
| 5 | `lifestyle` | `image-with-text` | Mécanisme des trois points, 3 puces à icône |
| 6 | `image-pleine` | `image-banner` | Bandeau nuageux pleine largeur, sans texte |
| 7 | `difference` | `collapsible-content` | « On part de la position, pas du rayon. » |
| 8 | `comparatif` | `comparison-table` | PORTANCE vs oreiller classique, 6 lignes. **Pilloway n'en a pas.** |
| 9 | `avis` | `testimonials` | **Désactivée volontairement** — voir ACTIONS.md §6 |
| 10 | `faq` | `collapsible-content` | 5 questions |
| 11 | `newsletter` | `newsletter` | |

L'alternance des fonds suit celle de Pilloway : `background-1` (blanc) et `background-2`
(`#DCE8F0`, bleu poudre) se succèdent, jamais deux sections pâles à la suite.

---

## Direction visuelle — le « style nuageux »

Le fond bleu poudré de Pilloway ne vient d'aucune CSS : leurs pages n'ont ni dégradé ni
forme de nuage. Les seuls `filter: blur` de leur code appartiennent à l'animation
d'apparition au défilement de Shrine. **Tout vient des images elles-mêmes**, qui ne sont
pas des photos catalogue mais des compositions :

1. fond en dégradé bleu poudré, sans décor ;
2. produit en lévitation, ombre portée douce et lointaine ;
3. titre noir gras incrusté, deux lignes ;
4. annotation manuscrite reliée au produit par une flèche courbe ;
5. pastille à contour arrondi.

Les compositions d'ici sont produites par `outils/images/` :

| Script | Sortie |
|---|---|
| `compose2.py` | les 4 visuels produits 4:5 avec titre, annotation et pastille |
| `hero.py` | le hero desktop 2:1, le hero mobile 4:5, le bandeau pleine largeur |
| `grade.py` | refroidit une photo d'ambiance crème vers le registre bleu |

Trois mécanismes méritent d'être connus avant de les modifier :

- **Balance des blancs par lignes.** La dérive des images générées n'est pas uniforme
  (rose en haut, bleue en bas). `whitebalance()` échantillonne les coins hauts et bas
  séparément et interpole une correction additive ligne par ligne. Une correction
  globale laissait un pied rose.
- **Prolongement du fond.** Pour passer du 3:4 au 2:1 sans recadrer le produit, on
  étire la colonne de bord. Étirer la colonne brute tire aussi l'ombre portée, qui
  devient une barre sombre en travers du cadre : `edge_profile()` lisse fortement le
  profil vertical, ce qui efface l'ombre — une dépression locale — et garde le dégradé.
  Le fond doit couvrir **toute** la largeur avant le collage, sinon le fondu latéral se
  fait sur du vide et laisse une barre noire.
- **Placement automatique.** `place()` note des emplacements candidats à l'énergie de
  contours locale et retient le premier assez lisse. C'est ce qui empêche la pastille de
  se poser sur le produit, comme c'était le cas des premières versions.

Les visuels finaux vivent sur le CDN Shopify, qui fait foi :

```
files/portance-appui-hero.png       files/portance-hero-desktop.png
files/portance-aplomb-hero.png      files/portance-hero-mobile.png
files/portance-bsommeil-hero.png    files/portance-banniere-large.png
files/portance-bnasal-hero.png      files/portance-lifestyle-froid.png
```

Les polices employées sont celles du thème : **Poppins Bold** pour les titres incrustés,
**Caveat** pour l'annotation manuscrite. Aucune n'est installée dans l'image système,
`outils/images/fonts/` les récupère depuis le dépôt Google Fonts.

La pastille dit **« 30 NUITS D'ESSAI »**, pas une promotion : les prix barrés ne sont pas
encore validés, et une remise incrustée dans une image est impossible à retirer sans
regénérer le fichier.

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

### Séquence des pages produit — le squelette de Pilloway

Sous le bloc d'achat, l'ordre reprend exactement celui du site modèle : **mécanisme →
à quoi s'attendre → problème → avis → FAQ**. Le mécanisme est présenté *avant* le
problème : le lecteur a déjà la solution en tête quand l'agitation arrive. C'est
contre-intuitif et c'est ce qui fait marcher leur page.

| # | Section | Type | Rôle |
|---|---|---|---|
| 1 | `main` | `main-product` | Bloc d'achat |
| 2 | `science` | `image-with-text` | Eyebrow « LA MÉCANIQUE » + démonstration |
| 3 | `science-cartes` | `multicolumn` ×3 | Les trois temps du mécanisme |
| 4 | `attendre` | `multicolumn` ×4 | Frise « Nuits 1-3 → Nuit 30 » |
| 5 | `garantie` | `rich-text` | Bandeau encre pleine largeur |
| 6 | `probleme` | `image-with-text` | Eyebrow « LE PROBLÈME » |
| 7 | `probleme-lignes` | `multicolumn` ×3 | Douleurs numérotées 01/02/03 |
| 8 | `avis` | `testimonials` | **Désactivée** — pas d'avis réels |
| 9 | `faq` | `collapsible-content` | 5 questions |
| 10 | `related` | `related-products` | |

Sur les bandelettes, le bloc 6-7 est remplacé par **« Un produit d'hygiène scellé »** et
le bandeau 5 par **« Avant d'acheter, lisez ceci »** : agiter un problème respiratoire
serait exactement l'allégation de santé interdite.

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

Six pièges rencontrés :

1. **Validation par pas** sur tous les réglages `range`, y compris à l'intérieur des blocs
   de section. Le schéma des blocs est dans le `{% schema %}` du fichier `.liquid`
   concerné, pas dans `settings_schema.json`.
2. **L'écriture est atomique** : une seule valeur invalide fait rejeter tout le fichier.
3. **Identifiants mal orthographiés à reproduire tels quels** : `Full_mobile_width` (F
   majuscule), `mobile_image_quanlity`, `enable_mobile_outher_spacing`.
4. **Shopify supprime silencieusement les clés inconnues.** Le titre de section de
   `collapsible-content` a pour identifiant `title`, pas `heading` — `heading` appartient
   au bloc `collapsible_row`. Une clé inventée ne provoque aucune erreur : elle disparaît.
5. **`body: { type: URL }` ne fait rien via ce connecteur.** La mutation répond
   `upsertedThemeFiles: []` **sans la moindre `userError`**, et le fichier n'est pas
   touché — seul le `checksumMd5` inchangé le révèle. Utiliser `type: TEXT`.
6. **Le corps `TEXT` doit tenir dans la limite d'entrée de l'outil.** Un `index.json`
   indenté (23 ko échappés) est tronqué ; le même contenu en JSON compact
   (`separators=(",", ":")`, 16 ko) passe. Le contenu est identique une fois analysé,
   et la copie du dépôt reste indentée pour rester lisible en revue.

### Vérifier qu'une écriture a bien eu lieu

`themeFilesUpsert` renvoie `checksumMd5`, calculé sur le corps **tel qu'envoyé**, sans
l'en-tête de commentaire que Shopify ajoute à la lecture. Comparer ce retour au md5 local
prouve l'écriture au octet près :

```bash
md5sum fichier.json        # doit égaler le checksumMd5 renvoyé
```

Attention en revanche à la lecture : `theme.files.nodes.checksumMd5` porte sur le contenu
**avec** l'en-tête, il ne correspond donc jamais au md5 du fichier local.

## Aperçu

```
https://liyan.shop/?preview_theme_id=157230071965
```

Le paramètre pose un cookie de session ; pour parcourir d'autres pages en aperçu, garde le
cookie (`curl -c/-b`) ou navigue depuis la page d'accueil.
