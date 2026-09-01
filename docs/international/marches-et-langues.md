# Marchés et langues

Relevé du 1<sup>er</sup> septembre 2026. Tout ce qui suit a été vérifié en direct
sur `liyan.shop`, route par route.

## Les six marchés

| Marché | Handle | Devise | Taxes affichées | Langues | Racine |
|---|---|---|---|---|---|
| Europe | `eu` | EUR (devises locales activées) | **incluses** | en · fr · de · es · it · nl | `/xx-eu/` |
| United Kingdom | `uk` | GBP | **incluses** | en | `/en-uk/` |
| United States | `usa` | USD | ajoutées au paiement | en | `/en-us/` |
| Canada | `ca` | CAD | ajoutées au paiement | en · fr | `/xx-ca/` |
| Australia | `au` | AUD | **incluses** | en | `/en-au/` |
| Rest of world | `world` | EUR | incluses | en | `/en-world/` |

L'Europe couvre 32 pays : les 27 de l'UE, plus la Norvège, l'Islande, le
Liechtenstein, la Suisse et Monaco.

### Pourquoi les taxes diffèrent

Ce n'est pas un réglage cosmétique, c'est une obligation qui change selon la zone.
Prix TTC obligatoire pour un consommateur en Europe (directive 98/6/CE), au
Royaume-Uni et en Australie. Aux États-Unis et au Canada, la taxe se calcule à
l'adresse de livraison et s'ajoute au paiement : l'afficher dans le prix serait faux.

## Le motif d'URL

`liyan.shop/{langue}-{marché}/` — et **non** `/{marché}/`. Une erreur facile :
`/eu/` renvoie 404, `/en-eu/` fonctionne.

## Repli linguistique — le point à ne pas se tromper

La langue principale de la boutique est le **français** et l'API ne permet pas d'en
changer. On pourrait croire qu'une traduction manquante fait retomber le visiteur
sur du français. **C'est faux, et c'est vérifié :** Shopify se rabat sur la langue
par défaut de la *présence web du marché*, pas sur celle de la boutique. Comme tous
les marchés ont `en` par défaut, un Allemand sans traduction allemande voit de
l'anglais, jamais du français.

## hreflang

**181 balises émises automatiquement**, `x-default` compris, dès que les marchés et
les présences web existent. Aucune application n'est nécessaire. C'est le défaut
exact de Derila — plusieurs versions linguistiques, zéro hreflang — évité par
construction.

## État des traductions

| Ressource | en | de | es | it | nl |
|---|---|---|---|---|---|
| Oreiller Appui | ✅ | ✅ | ✅ | ✅ | ✅ |
| Oreiller Aplomb | ✅ | ✅ | ✅ | ✅ | ✅ |
| Bandelettes de sommeil | ✅ | ✅ | ✅ | ✅ | ✅ |
| Bandelettes nasales | ✅ | ✅ | ✅ | ✅ | ✅ |
| Taie rafraîchissante Appui | ✅ | ✅ | ✅ | ✅ | ✅ |
| Taie rafraîchissante Aplomb | ✅ | ✅ | ✅ | ✅ | ✅ |
| Taie coton Appui | ✅ | ✅ | ✅ | ✅ | ✅ |
| Les 4 collections de la gamme | ✅ | ✅ | ✅ | ✅ | ✅ |
| Pages | — | — | — | — | — |
| Contenu du thème | — | — | — | — | — |

**Les 7 produits actifs et les 4 collections de la gamme sommeil sont complets
dans les six langues.**

Chaque produit traduit l'est intégralement : titre, description, **handle**
(donc l'URL est localisée), type, balise title et méta description.

### Les avertissements de sécurité

Les précautions des bandelettes sont traduites dans les cinq langues, sans
atténuation. La phrase « ce produit n'est pas un dispositif médical et ne traite
aucune pathologie, en particulier pas l'apnée du sommeil » existe en anglais,
allemand, espagnol, italien et néerlandais. Un accessoire de confort qui
laisserait entendre l'inverse deviendrait un dispositif médical non déclaré —
règlement (UE) 2017/745, et l'équivalent FDA aux États-Unis.

## Deux pièges rencontrés

**Handles en double entre langues.** Donner `essentials` à la fois en anglais et
en néerlandais fait que Shopify renomme silencieusement le second en
`essentials-1`. L'URL fonctionne quand même, mais elle est laide. Chaque langue
doit avoir son propre handle : le néerlandais est passé à `onmisbaar`.

**Cinq collections de l'ancienne gamme puériculture** (`tetines`, `biberons`,
`eveil-amp-dentition`, `coffrets-cadeaux`, `toute-la-gamme`) sont encore publiées
et apparaissent donc dans **les six marchés**. La dépublication par l'API est
refusée par la politique de sécurité du connecteur : à faire à la main dans
l'admin. C'est devenu plus urgent qu'avant — le problème est multiplié par six.

## Ce qui reste

- Traduire les trois taies dans les quatre langues européennes.
- Traduire collections, pages et contenu du thème.
- Le nom de marque n'est pas arrêté : `PORTANCE` subsiste dans les textes
  alternatifs des images et dans les balises title françaises. Un seul passage
  de remplacement suffira une fois le nom choisi.
