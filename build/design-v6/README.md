# Design v6 — le site en tunnel de conversion (façon Derila / Pilloway)

Date : 24 septembre 2026. Retour du fondateur sur la v5 : « il ne convertit pas, trop
d'information ». La v6 repart du modèle Derila / Pilloway : le produit d'abord, une idée
par bloc, un bouton d'achat partout. Même aperçu :
https://claude.ai/artifact/BwsoBzQP1kx8dPvDJeR41b (version 3). Thème Shopify inchangé.

## Accueil, 10 blocs courts

1. Bandeau : free shipping · 30-night trial · ships in 6–10 days.
2. Héro : « Feel it tonight. Keep it for years. » (promesse du brand book), 3 puces, prix
   79,50 $, gros bouton, moyens de paiement. Neck 01 flotte à droite, on change sa couleur.
3. Barre de confiance, 4 icônes.
4. « Pick your pillow » : 4 cartes (Neck 01, For Two, Body 01, Contour 01) avec ajout direct.
5. « When did a flat pillow start feeling normal? » : 3 problèmes, 3 réponses (Pilloway).
6. « Two heights. Turn it over. » : le schéma se retourne en un clic (13 cm / 11 cm).
7. Tableau Neck 01 contre un oreiller ordinaire, coches et croix (Derila).
8. « More pillows, more savings » : 1, 2 ou 3 oreillers, prix unitaire et économie réelle
   (Derila). « Best value » sur 3 : c'est vrai, 64,42 $ par oreiller.
9. Garantie 30 nuits sur fond Night, avec un sceau qui tourne.
10. FAQ en 5 questions, puis « Still deciding? » (Pilloway) et le pied de page.

## Fiche produit

Bloc d'achat façon Pilloway / Derila : essai et livraison au-dessus du titre, une phrase de
positionnement, 3 puces avantage + preuve, couleur, paliers (1 · 2 · 3 oreillers avec
« Save 14 % » et « Best value »), gros bouton, moyens de paiement, délai d'expédition,
accordéon. Dessous : « How it works » en 3 étapes, « Your first 30 nights » (frise d'usage,
aucune promesse de résultat), comparatif, « Complete your night », FAQ. Barre d'achat
collante, affichée aussi dès le premier écran sur téléphone.

## Ce qu'on n'a pas copié

Pas d'étoiles ni d'avis (on n'en a pas), pas de prix barrés inventés, pas de compte à
rebours, pas de case pré-cochée dans le panier, pas de « recommandé par des
chiropracteurs ». Les seules remises affichées sont les vraies économies des packs.

## Fichiers

`somnila-storefront.src.html` (source), `profile.svg` (schéma), `build.py` (reconstruit
`somnila-storefront.html` à partir des images du dépôt).
