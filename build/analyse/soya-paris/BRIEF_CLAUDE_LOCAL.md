# Brief pour une session Claude Code locale (avec Claude in Chrome)

À coller tel quel dans Claude Code sur ton ordinateur, dans le dossier du dépôt `shopify`
(branche `claude/pilloway-shopify-shrine-bwge6y`). Il sert uniquement à combler ce que la
session cloud n'a pas pu voir : elle sortait par une IP américaine de centre de données, et
Shopify comme Meta bloquent ce type de navigateur.

---

## Consigne à donner

> Lis `build/analyse/soya-paris/DOSSIER_SOYA_PARIS.md` (au moins § 0, § 1, § 9 et § 14).
> Avec Claude in Chrome, complète les angles morts listés dans
> `build/analyse/soya-paris/BRIEF_CLAUDE_LOCAL.md`, section « Missions ».
> Écris tes constats dans `build/analyse/soya-paris/v3/local.md`. Pour chacun, indique
> l'heure, l'URL, une capture et [constaté] ou [déduit].
> Règles : ne remplis aucun formulaire, ne saisis aucune donnée personnelle, ne crée
> aucun compte, n'achète rien, ne contacte personne. Arrête-toi avant toute saisie.
> Tout en français.

## Missions

1. **Vue française réelle.**
   - Ouvre soya-paris.com en navigation privée depuis ta connexion française.
   - Relève la bannière cookies : son texte, ses boutons, et si les pixels se chargent avant le consentement (onglet Réseau des outils de développement).
   - Relève les prix en euros sur l'accueil et la fiche Oreiller Soya 3.0.
   - Relève le bandeau et la popup (délai d'apparition, texte).

2. **Panier.**
   - Sur la fiche Oreiller Soya 3.0, garde l'offre présélectionnée et clique « Ajouter au panier ».
   - Capture le tiroir panier : lignes, housse ajoutée ou non, total, cadeaux, barre de progression, offres croisées, popup Kaching « lombaire ».
   - Refais l'opération avec « Pack Duo » puis « Pack Famille ».
   - Note à chaque fois le total affiché, et s'il correspond au prix annoncé sur la fiche.

3. **Première page du paiement.**
   - Clique « Paiement ». Capture l'écran sans rien saisir : récapitulatif, frais de livraison affichés, moyens de paiement, paiement express, mentions légales en bas.
   - Ne remplis aucun champ. Ferme l'onglet.

4. **Publicité.** Avec ton navigateur :
   - la bibliothèque publicitaire Meta : https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=FR&q=soya%20paris&search_type=keyword_unordered. Relève le nombre de publicités actives, les dates de début, les formats et les accroches, et capture les 10 plus anciennes encore actives ;
   - Google Ads Transparency : https://adstransparency.google.com/?region=FR&domain=soya-paris.com ;
   - la bibliothèque TikTok : https://library.tiktok.com/ads?region=FR&adv_name=soya.

5. **Réseaux sociaux.** Pour Instagram, Facebook et TikTok (@soya.paris), relève :
   - les abonnés et le nombre de publications ;
   - les dates et les 12 dernières publications (accroche, format, vues si affichées) ;
   - les créateurs mis en avant et les codes promo.

6. **Veille dans la durée.**
   - Lance `python3 build/analyse/soya-paris/outils/inv.py` une fois par jour pendant 7 jours, par exemple avec une tâche planifiée. Il relève les compteurs de stock publics.
   - Deux relevés espacés donnent les unités vendues entre les deux : c'est la base de l'estimation du chiffre d'affaires du dossier.

## Pourquoi cette répartition

- **Même modèle, même méthode :** l'analyse locale ne serait pas « plus intelligente ». Elle voit simplement ce que ton navigateur voit : IP française, connexions à Meta et Instagram, moins de blocages anti-robots.
- **La session cloud** a déjà fait le gros du travail : captures mesurées, code, catalogue, conformité, enquête approfondie et compteurs de ventes. Inutile de le refaire.
