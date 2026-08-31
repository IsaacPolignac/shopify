# PORTANCE — boutique sommeil

Marque de sommeil : oreillers ergonomiques, taies techniques, accessoires de respiration
nocturne. Boutique Shopify **en français uniquement**, en euros, thème **Shrine PRO**.

> **L'art du sommeil.**

La portance, en mécanique, c'est la force qui tient une masse en l'air. Une force, une
direction, une intensité — c'est exactement ce qu'on attend d'un oreiller, et c'est
rarement comme ça qu'on en parle. La signature **« L'art du sommeil »** apporte la
chaleur que le mot seul n'a pas ; elle n'est pas déposable telle quelle, d'où le
verrouillage en lockup sous le logotype plutôt qu'en nom principal.

Le site **reprend le squelette de [pilloway.com.au](https://www.pilloway.com.au/) bloc pour
bloc** — même thème, même ordre de sections, même séquence narrative sous le pli — en
corrigeant ses dix défauts relevés. Le détail est dans
[`docs/reference/analyse-pilloway.md`](docs/reference/analyse-pilloway.md).

---

## État

| Élément | État |
|---|---|
| Boutique | `liyan.shop` (admin `07beme-9h.myshopify.com`) · EUR · **fr uniquement** |
| Thème | `shrine-pro-v1-2-3-186-sections` — **non publié**, entièrement construit |
| Thème en ligne | `LIYAN — v3 (France)` — inchangé, l'ancien site puériculture |
| Produits | **7 actifs**, publiés, vendor `PORTANCE`, SKU `POR-*` |
| Collections | Les incontournables · Oreillers · Taies & housses · Respiration & sommeil |
| Pages | 7 pages françaises, conformes UE |
| Marchés | France & francophonie. Le marché Émirats a été désactivé. |

### Aperçu

```
https://liyan.shop/?preview_theme_id=157230071965
```

**Le domaine ne correspond plus au nom.** `portance.shop` était libre au moment du
changement — c'est le remplacement direct de `liyan.shop`. Voir [`ACTIONS.md`](ACTIONS.md).

### La gamme

| SKU | Produit | Prix | Variantes |
|---|---|---:|---|
| `POR-APP-*` | Oreiller **Appui** — Soutien 3 zones | 59,90 € <s>99,90 €</s> | 6 coloris |
| `POR-APL-*` | Oreiller **Aplomb** — Alignement cervical | 89,90 € <s>129,90 €</s> | 5 coloris |
| `POR-TRA-*` | Taie rafraîchissante Appui | 29,90 € | 6 coloris |
| `POR-TRB-*` | Taie rafraîchissante Aplomb | 29,90 € | 5 coloris |
| `POR-TCA-*` | Taie coton Appui | 24,90 € | 6 coloris |
| `POR-BSO-*` | Bandelettes de sommeil | 34,90 € / 69,90 € / 119,90 € | 3 formats |
| `POR-BNA-*` | Bandelettes nasales | 29,90 € / 59,90 € | 2 formats |

**Appui** soutient — c'est l'oreiller contouré du dormeur sur le côté.
**Aplomb** aligne — c'est l'oreiller cervical à double bourrelet.

Palette de coloris unifiée, dans cet ordre exact — le thème mappe les pastilles par
position :

`Sauge #A8BCA9` · `Crème #EFE7D9` · `Gris perle #C4C2BD` · `Bleu nuit #33445C` · `Rose poudré #E0BFBB` · `Terracotta #B97D65`

**Les prix sont des positions de marché, pas des prix validés.** Ils reprennent la grille
de Pilloway convertie en euros, sans confrontation à un coût d'achat réel.

---

## Identité

| | |
|---|---|
| Nom | **PORTANCE** |
| Signature | L'art du sommeil. |
| Encre (texte, pied de page) | `#15191E` |
| Accent 1 (boutons, liens) | `#1C2B3A` |
| Accent 2 (remises) | `#B5652E` |
| Fond secondaire | `#EDEFF1` |
| Titres | Jost SemiBold |
| Textes | Inter Regular |
| Angles | 0 px — boutons, cartes, champs, médias |

Le logotype est un mot en capitales espacées, composé ici en Liberation Sans (métriques
Helvetica). Il est propre et cohérent, mais **ce n'est pas un logotype dessiné** : à
refaire par un graphiste avant impression. Fichiers dans [`docs/marque/`](docs/marque/).

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
| [`docs/marque/`](docs/marque/) | Logotype, favicon, image sociale |
| [`archive/`](archive/) | Projets abandonnés : puériculture, montres |

---

## Le point qui commande tout le reste

**Les bandelettes buccales et nasales sont la partie risquée du catalogue.**

Pilloway leur prête des bénéfices — « more energy & immunity », « enhanced jawline & facial
structure ». En France et dans l'UE, ces allégations transformeraient le produit en
dispositif médical non déclaré et constitueraient une pratique commerciale trompeuse
(art. L121-2 du code de la consommation).

Les fiches décrivent donc **un effet mécanique et rien d'autre**, avec les
contre-indications ouvertes par défaut sur la page.

Deuxième point, du même ordre : **aucun avis client n'a été inventé.** La section
témoignages de la page d'accueil existe mais elle est **désactivée**, avec un texte qui
explique pourquoi. Un faux avis coûte jusqu'à 300 000 € ou 10 % du chiffre d'affaires
(directive Omnibus 2019/2161, art. L121-4).
