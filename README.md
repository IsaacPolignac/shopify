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
| Texte | `#121212` — celui de Pilloway |
| Accent (boutons, liens, en-tête, badges) | `#43789A` |
| Fond secondaire | `#DCE8F0` — leur bleu poudre, à l'identique |
| Titres et textes | Poppins — 700 / 400, comme eux |
| Boutons | rayon 6 px, bordure 2 px |
| Cartes produit | rayon 12 px, texte centré, ombre `2/6/15` à 10 % |
| Badge remise | bas-gauche, rayon 6 px, « ÉCONOMISEZ −40 % » |
| Largeur de page | 1400 px · espacement inter-sections 0 |

**Le système visuel est celui de Pilloway, repris valeur par valeur.** Une seule
correction : leur bleu `#5A97B9` donne un contraste de **3,20:1** avec du texte blanc —
sous le seuil WCAG AA de 4,5:1, donc illisible pour une partie des visiteurs sur l'en-tête
et les boutons. Il est assombri à `#43789A`, soit **4,78:1**, même teinte. Si tu préfères
leur valeur exacte, c'est un seul réglage à changer dans le thème.

### Les images

C'est là que se joue leur « style nuageux », et nulle part ailleurs : **leur atmosphère
bleu poudré ne vient d'aucune CSS**, mais de visuels composés. Fond en dégradé bleu, produit
en lévitation avec une ombre douce, titre noir incrusté sur deux lignes, annotation
manuscrite reliée par une flèche, pastille à contour arrondi. Le même gabarit est repris
ici pour les 4 fiches, le hero, le bandeau pleine largeur — et la photo d'ambiance a été
refroidie pour rejoindre le même registre.

Les titres incrustés sont en Poppins, la police du thème : l'image et la page parlent la
même langue, ce qui n'est pas le cas chez eux. La pastille annonce **« 30 nuits d'essai »**
et non une promotion, parce qu'une remise incrustée dans une image ne se retire pas.

Scripts et aperçus : [`outils/images/`](outils/images/).

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
