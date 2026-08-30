# LIYAN — boutique sommeil

Marque de sommeil : oreillers ergonomiques, taies techniques, accessoires de respiration
nocturne. Boutique Shopify en euros, contenu en français, thème **Shrine PRO**.

> **Mieux dormir, par conception.**

Le site reprend l'architecture de conversion de [pilloway.com.au](https://www.pilloway.com.au/)
— même thème, même logique de page — en corrigeant ses défauts. Le détail de la comparaison
est dans [`docs/reference/analyse-pilloway.md`](docs/reference/analyse-pilloway.md).

---

## État

| Élément | État |
|---|---|
| Boutique | `liyan.shop` (admin `07beme-9h.myshopify.com`) · EUR · FR |
| Thème | `shrine-pro-v1-2-3-186-sections` — **non publié**, entièrement construit |
| Thème en ligne | `LIYAN — v3 (France)` — inchangé, l'ancien site puériculture |
| Produits | **7 actifs**, publiés sur la vitrine, visuels de marque sur le CDN |
| Collections | Les incontournables · Oreillers · Taies & housses · Respiration & sommeil |
| Pages | 7 pages françaises réécrites, conformes UE |
| Navigation | 3 menus refaits : `main-menu`, `footer`, `aide` |
| Gabarits | accueil, collection, panier, 2 gabarits de page, **4 gabarits produit** |

### Aperçu

```
https://liyan.shop/?preview_theme_id=157230071965
```

### La gamme

| SKU | Produit | Prix | Coloris |
|---|---|---:|---|
| `LIY-HAL-*` | Oreiller Halo — Soutien 3 zones | 59,90 € <s>99,90 €</s> | 6 |
| `LIY-NUE-*` | Oreiller Nuée — Alignement cervical | 89,90 € <s>129,90 €</s> | 5 |
| `LIY-TRH-*` | Taie rafraîchissante Halo | 29,90 € | 6 |
| `LIY-TRN-*` | Taie rafraîchissante Nuée | 29,90 € | 5 |
| `LIY-TCH-*` | Taie coton Halo | 24,90 € | 6 |
| `LIY-BSO-*` | Bandelettes de sommeil | 34,90 € / 69,90 € / 119,90 € | 3 formats |
| `LIY-BNA-*` | Bandelettes nasales | 29,90 € / 59,90 € | 2 formats |

Palette de coloris unifiée sur toute la gamme, dans cet ordre exact — le thème mappe les
pastilles par position :

`Sauge #A8BCA9` · `Crème #EFE7D9` · `Gris perle #C4C2BD` · `Bleu nuit #33445C` · `Rose poudré #E0BFBB` · `Terracotta #B97D65`

**Les prix sont des positions de marché, pas des prix validés.** Ils reprennent la grille de
Pilloway convertie en euros. Rien n'a été calculé contre un coût d'achat réel, qui n'est pas
connu.

---

## Documentation

| Fichier | Contenu |
|---|---|
| [`ACTIONS.md`](ACTIONS.md) | **Ce que tu dois faire toi-même** — à lire en premier |
| [`HANDOFF.md`](HANDOFF.md) | Reprise du projet dans une autre session |
| [`docs/reference/analyse-pilloway.md`](docs/reference/analyse-pilloway.md) | Le site de référence, ses mécaniques et ses 10 défauts |
| [`docs/theme/architecture.md`](docs/theme/architecture.md) | Carte des fichiers du thème, section par section |
| [`docs/theme/files/`](docs/theme/files/) | Copie versionnée des fichiers écrits dans le thème |
| [`docs/pages/`](docs/pages/) | Copie versionnée du contenu des 7 pages |
| [`archive/puericulture/`](archive/puericulture/) | Projet puériculture, abandonné |
| [`archive/freehold/`](archive/freehold/) | Projet montres, abandonné |

---

## Le point qui commande tout le reste

**Les bandelettes buccales et nasales sont la partie risquée du catalogue.**

Pilloway leur prête des bénéfices — « more energy & immunity », « enhanced jawline & facial
structure ». En France et dans l'UE, ces allégations transformeraient le produit en
dispositif médical non déclaré et constitueraient une pratique commerciale trompeuse
(art. L121-2 du code de la consommation).

Les fiches produits de cette boutique décrivent donc **un effet mécanique et rien d'autre**,
avec les contre-indications ouvertes par défaut sur la fiche. C'est plus vendeur que ça n'en
a l'air, et surtout c'est tenable.

Deuxième point, du même ordre : **aucun avis client n'a été inventé**. La section témoignages
de la page d'accueil existe mais elle est **désactivée**, avec un texte qui explique pourquoi.
Un faux avis coûte jusqu'à 300 000 € ou 10 % du chiffre d'affaires (directive Omnibus
2019/2161, art. L121-4). Branche une application d'avis vérifiés avant de l'activer.
