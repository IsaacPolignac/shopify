# Reprise du projet dans une autre session

À lire en premier si tu arrives sur ce projet sans contexte.

## En une phrase

Boutique Shopify **PORTANCE** — marque de sommeil : oreillers ergonomiques, taies
techniques, bandelettes de respiration nocturne. **Français uniquement**, EUR, thème
**Shrine PRO**. Le site reproduit l'architecture de
[pilloway.com.au](https://www.pilloway.com.au/) en corrigeant ses défauts.

Signature : **Ce qui vous porte.**

## Historique — important pour ne pas se tromper

La boutique a servi successivement à cinq projets. Les quatre premiers sont abandonnés :

1. **PawDeck / VELYRA** — accessoire auto pour chien, compléments. Archivés.
2. **FREEHOLD** — montres mécaniques. `archive/freehold/`.
3. **LIYAN puériculture** — tétines, biberons, dentition. `archive/puericulture/`.
4. **LIYAN sommeil** — même gamme qu'aujourd'hui sous le nom LIYAN, palette crème/sauge.
   Remplacé par PORTANCE à la demande du client. Aucune archive : le contenu a été réécrit
   sur place, l'historique est dans git.
5. **PORTANCE** — le projet en cours. C'est le seul qui compte.

Le domaine `liyan.shop` est **hérité de l'étape 3** et ne correspond plus au nom.
`portance.shop` était libre au moment du changement.

## Ordre de lecture

1. `README.md` — état de la boutique, gamme, identité
2. `ACTIONS.md` — **ce qui reste à faire côté humain**
3. `docs/theme/architecture.md` — comment le thème est construit
4. `docs/reference/analyse-pilloway.md` — le site modèle et ses défauts

## Boutique connectée

| | |
|---|---|
| Domaine admin | `07beme-9h.myshopify.com` |
| Vitrine | `liyan.shop` — **à remplacer** |
| Nom de la boutique | **« boutique »** — renommage en attente, non modifiable par API |
| Langue | `fr` uniquement, primaire et publiée. Aucun sélecteur de langue ni de pays. |
| Devise | EUR |
| Marchés | France & francophonie (actif) · Émirats arabes unis (désactivé) |
| Forfait | Advanced — **à redescendre en Basic** |
| Commandes | 0 |

### Identifiants utiles

| Ressource | ID |
|---|---|
| Thème Shrine (non publié) | `gid://shopify/OnlineStoreTheme/157230071965` |
| Thème en ligne (ancien) | `gid://shopify/OnlineStoreTheme/157007184029` |
| Boutique | `gid://shopify/Shop/77826293917` |
| Publication Boutique en ligne | `gid://shopify/Publication/218511016093` |
| Publication Shop | `gid://shopify/Publication/218511081629` |
| Oreiller Appui | `gid://shopify/Product/9035437408413` |
| Oreiller Aplomb | `gid://shopify/Product/9035437572253` |
| Taie rafraîchissante Appui | `gid://shopify/Product/9035437605021` |
| Taie rafraîchissante Aplomb | `gid://shopify/Product/9035437637789` |
| Taie coton Appui | `gid://shopify/Product/9035437768861` |
| Bandelettes de sommeil | `gid://shopify/Product/9035437801629` |
| Bandelettes nasales | `gid://shopify/Product/9035437834397` |
| Page Garantie 30 nuits | `gid://shopify/Page/122561396893` |

## Déjà fait

- 7 produits renommés, gabarits affectés (`oreiller`, `respiration`, `nasal`, défaut),
  vendor `PORTANCE`, SKU `POR-*` alignés sur les coloris
- Palette de 6 coloris unifiée sur les 5 produits à variantes
- 4 collections, 3 menus, 7 pages françaises avec SEO (métachamps `global.title_tag` /
  `global.description_tag` — `PageUpdateInput` n'a pas de champ `seo`)
- Thème Shrine entièrement écrit : 12 fichiers, tous vérifiés identiques au bit près
- Identité PORTANCE : logotype, logotype inversé, favicon, image sociale
- Textes alternatifs des 10 visuels réécrits
- Marché Émirats désactivé, collection « Ancienne gamme » neutralisée

## Points à ne pas casser

- **La section « avis » de l'accueil est désactivée exprès.** Ne l'active pas avec son
  texte de remplissage : ce serait un faux témoignage au sens de la loi.
- **Aucune allégation de santé sur les bandelettes.** Les contre-indications sont ouvertes
  par défaut sur la fiche, c'est délibéré.
- **Les `[À COMPLÉTER]` ne sont pas des oublis.** Ils marquent ce qui ne peut pas être
  inventé : entité légale, délais réels, transporteur, médiateur.
- **`animations_type` et `fav_collection`** dans `config/settings_data.json` contiennent le
  jeton de licence Shrine. Les régénérer désactive le thème.
- **Les listes `breaks_*` et `swatches_custom_colors_list` sont positionnelles et
  séparées par des virgules.** Jamais de virgule décimale dedans : « 1,16 € » compte pour
  deux entrées et décale tous les paliers. Les prix unitaires sont donc écrits « 1 € 16 ».
- **Le titre de section de `collapsible-content` a pour identifiant `title`, pas
  `heading`.** Shopify supprime silencieusement les clés inconnues.
- **Le thème n'est pas publié.** C'est volontaire.

## Ce qui n'a pas pu être fait par API

| Tâche | Blocage |
|---|---|
| Renommer la boutique en PORTANCE | Ressource `Shop` en lecture seule |
| SEO de la page d'accueil (titre, description, image sociale) | Réglages `Boutique en ligne → Préférences`, non exposés |
| Publier le thème Shrine | Mutation de publication bloquée par sécurité |
| Dépublier les 5 collections héritées | `publishableUnpublish` bloqué par le connecteur |
| Redescendre le forfait | Action de facturation |
| Capture d'écran du rendu | Le proxy de sortie coupe les tunnels du navigateur |
