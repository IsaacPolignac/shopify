# Design v4 — le site entier, dessiné pour un avatar précis

Date : 24 septembre 2026. Rien n'a été publié dans Shopify, rien n'a été supprimé.
Le thème « Somnila — build v1 » (157447585949) est inchangé.

## Les fichiers

| Fichier | Rôle |
|---|---|
| `somnila-storefront.html` | Maquette cliquable du site, en anglais : accueil, boutique, fiche produit (les 5 oreillers), questionnaire, panier. Un seul fichier, images incluses. |
| `somnila-storefront.src.html` | Sa source lisible, sans les images. |
| `build.py` | Reconstruit la maquette depuis la source et les photos du dépôt : `python3 build/design-v4/build.py`. Le résultat est identique octet pour octet à la version publiée. |
| `avatar-somnila.html` | Le dossier en français : avatar, objections, études, références, plan page par page, ce qui manque. |

Aperçus publiés : maquette https://claude.ai/artifact/BwsoBzQP1kx8dPvDJeR41b ·
dossier https://claude.ai/artifact/Doy2oK2NrWVjnWDGX72xhC (privés tant que tu ne les partages pas).

## L'avatar, en une phrase

Une Américaine de 40 à 60 ans qui dort surtout sur le côté, a déjà racheté plusieurs
oreillers et se méfie des pubs à −50 %. Le site doit lui faire choisir la bonne forme en
moins d'une minute et lui prouver qu'elle ne prend aucun risque. Le dossier sépare ce qui
est mesuré (fait) de ce qui est déduit (hypothèse).

## Ce qui est nouveau par rapport au site actuel

1. **Questionnaire éclair dans le héro** : « How do you usually fall asleep? », quatre
   réponses, un oreiller et son prix. Plus un questionnaire complet en trois questions, qui
   dit franchement aux dormeurs sur le ventre qu'aucun oreiller n'est fait pour eux.
2. **« The night, measured »** : l'étude Skarpsno 2017 (664 adultes, capteurs) en graphique.
   54,1 % du temps au lit sur le côté, 1,6 changement de position par heure : c'est la raison
   des deux hauteurs de Neck 01. Un comportement, aucune promesse de santé.
3. **Schémas à l'échelle** : profil 13 cm / 11 cm de Neck 01, et empreinte de chaque oreiller
   comparée à un oreiller standard américain de 20 × 26 in.
4. **« What you won't find here »** : ce qu'on refuse (promo sans fin, compte à rebours,
   fausses étoiles), barré en Dawn.
5. **Packs honnêtes** : l'économie écrite en dollars sur chaque carte, visuels composés à
   partir des vraies photos détourées.
6. **Fiche produit resserrée** : sur un écran 1440 × 900, le bouton d'achat est visible sans
   défiler. Choix 1 · 2 · 3 oreillers (Neck 01, For Two, Family Set), le plus petit présélectionné.

## Données utilisées, toutes réelles

- Prix en dollars : tarification contextuelle Shopify pour les États-Unis, 24 septembre 2026
  (Neck 01 79,50 $, For Two 136,38 $, Family Set 193,25 $, etc.).
- Dimensions, poids, matières, accroches, couleurs : données produit de la boutique.
- Moyens de paiement express : Shop Pay, Apple Pay, Google Pay, lus dans les réglages.
- Texte du fondateur : brand book, section 3, mot pour mot.
- Photos : packshots et détourages du dépôt (`build/images/`).

## Règles tenues

Aucun avis, aucune note, aucun chiffre de vente inventés. Aucun prix barré. Aucun mot
interdit du brand book (vérifié : ni *pain*, ni *orthopedic*, ni *medical*, ni point
d'exclamation). Aucun visage. Aucune app, aucun script tiers.

## Ce qui bloque avant la mise en ligne

1. Durées de transit par zone (pour afficher une date de livraison).
2. Politiques de remboursement et d'expédition : pas en ligne, brouillons encore PORTANCE.
3. Conditions exactes de l'essai 30 nuits (frais de retour, état, délai de remboursement).

Décisions à prendre : seuil de livraison offerte (54,90 € = 62,44 $, exactement le prix de
Side 01 et Lounge 01), suivi de colis, app d'avis gratuite. Détail dans le dossier.

## Étape suivante

Porter la maquette dans le thème non publié, en sections Liquid écrites à la main, en
commençant par la fiche Neck 01. En attente de ton « ok ».
