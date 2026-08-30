# Reprise du projet dans une autre session

À lire en premier si tu arrives sur ce projet sans contexte.

## En une phrase

Boutique Shopify **LIYAN** — marque de sommeil : oreillers ergonomiques, taies techniques,
bandelettes de respiration nocturne. Français, EUR, thème **Shrine PRO**. Le site reproduit
l'architecture de [pilloway.com.au](https://www.pilloway.com.au/) en corrigeant ses défauts.

## Historique — important pour ne pas se tromper

La boutique a servi successivement à quatre projets. Les trois premiers sont abandonnés :

1. **PawDeck / VELYRA** — accessoire auto pour chien, compléments. Archivés.
2. **FREEHOLD** — montres mécaniques. `archive/freehold/`.
3. **LIYAN puériculture** — tétines, biberons, anneaux de dentition. `archive/puericulture/`.
   Les 4 produits sont en `ARCHIVED` ou `DRAFT`, ils ne sont plus sur la vitrine.
4. **LIYAN sommeil** — le projet en cours. C'est le seul qui compte.

Le nom LIYAN (ليان : douceur, aisance de vivre) et le domaine `liyan.shop` sont conservés :
ils conviennent au sommeil au moins aussi bien qu'à la puériculture, et la palette crème /
sauge de la charte d'origine a été reprise telle quelle.

## Ordre de lecture

1. `README.md` — état de la boutique et gamme
2. `ACTIONS.md` — **ce qui reste à faire côté humain**
3. `docs/theme/architecture.md` — comment le thème est construit
4. `docs/reference/analyse-pilloway.md` — le site modèle et ses défauts

## Boutique connectée

| | |
|---|---|
| Domaine admin | `07beme-9h.myshopify.com` |
| Vitrine | `liyan.shop` |
| Nom de la boutique | **« boutique »** — renommage en attente, non modifiable par API |
| Devise | EUR · Langue FR (unique) |
| Forfait | Advanced — **à redescendre en Basic** |
| Commandes | 0 |

### Identifiants utiles

| Ressource | ID |
|---|---|
| Thème Shrine (non publié) | `gid://shopify/OnlineStoreTheme/157230071965` |
| Thème en ligne (ancien) | `gid://shopify/OnlineStoreTheme/157007184029` |
| Publication Boutique en ligne | `gid://shopify/Publication/218511016093` |
| Publication Shop | `gid://shopify/Publication/218511081629` |
| Oreiller Halo | `gid://shopify/Product/9035437408413` |
| Oreiller Nuée | `gid://shopify/Product/9035437572253` |
| Taie rafraîchissante Halo | `gid://shopify/Product/9035437605021` |
| Taie rafraîchissante Nuée | `gid://shopify/Product/9035437637789` |
| Taie coton Halo | `gid://shopify/Product/9035437768861` |
| Bandelettes de sommeil | `gid://shopify/Product/9035437801629` |
| Bandelettes nasales | `gid://shopify/Product/9035437834397` |
| Collection Les incontournables | `gid://shopify/Collection/348325773469` |
| Page Garantie 30 nuits | `gid://shopify/Page/122561396893` |

## Déjà fait

- 7 produits créés, publiés, gabarits affectés (`oreiller`, `respiration`, défaut)
- Palette de coloris unifiée sur les 5 produits à variantes, SKU alignés
- 4 collections créées et publiées
- 10 visuels générés, cohérents avec la charte, hébergés sur le CDN Shopify
- Thème Shrine entièrement écrit : accueil, 3 gabarits produit, collection, 2 gabarits de
  page, en-tête, pied de page, réglages globaux
- 7 pages réécrites en français avec métadonnées SEO (via métachamps `global.title_tag` /
  `global.description_tag` — `PageUpdateInput` n'a pas de champ `seo`)
- 3 menus refaits
- Page « Sécurité & Conformité » (puériculture) dépubliée

## Points à ne pas casser

- **La section « avis » de l'accueil est désactivée exprès.** Ne l'active pas avec le texte
  de remplissage qu'elle contient : ce serait un faux témoignage au sens de la loi.
- **Aucune allégation de santé sur les bandelettes.** Les contre-indications sont ouvertes
  par défaut sur la fiche, c'est délibéré.
- **Les `[À COMPLÉTER]` ne sont pas des oublis.** Ils marquent tout ce qui ne peut pas être
  inventé : entité légale, délais réels, transporteur, médiateur.
- **Les clés `animations_type` et `fav_collection`** de `config/settings_data.json`
  contiennent le jeton de licence Shrine. Les régénérer désactive le thème.
- **Les listes `breaks_*` et `swatches_custom_colors_list` sont positionnelles.** Ajouter
  une variante sans ajuster la liste décale badges et pastilles.
- **Le thème n'est pas publié.** C'est volontaire : l'API interdit d'écrire sur un thème en
  ligne, et la publication est une décision qui revient à l'humain.

## Ce qui n'a pas pu être fait par API

| Tâche | Blocage |
|---|---|
| Renommer la boutique en LIYAN | Ressource `Shop` en lecture seule |
| Publier le thème Shrine | Mutation de publication bloquée par sécurité |
| Redescendre le forfait | Action de facturation, réservée à l'admin |
| Créer le tarif « livraison offerte à 60 € » | À faire dans Réglages → Livraison |
