# Le site de référence — pilloway.com.au

Relevé effectué le 30 août 2026 sur la boutique australienne
[pilloway.com.au](https://www.pilloway.com.au/), qui sert de modèle à cette boutique.

## Le fait qui a tout simplifié

**Pilloway tourne sur le même thème que nous : Shrine PRO** (`schema_name: "Shrine PRO"`,
version 1.0.4 chez eux, 1.2.3 ici). Reproduire leur site ne demandait donc aucune
adaptation : les mêmes sections existent des deux côtés, avec les mêmes réglages.

## Leur pile applicative

| Rôle | Outil |
|---|---|
| Tiroir panier | Kaching Cart |
| Paliers de quantité et bundles | Kaching Bundles |
| Avis | Loox |
| E-mail | Klaviyo |
| Analyse | Microsoft Clarity, Mida, Intelligems |
| Suivi de colis | 17TRACK |
| Abonnements | Seal Subscriptions |

**Nous n'utilisons aucune de ces applications.** Tout ce qu'elles font ici est fait
nativement par Shrine : les paliers de quantité par le bloc `variant_picker`
(`picker_types: "quantity breaks"`), le tiroir panier et sa barre de progression par la
section `cart-drawer`, l'estimation de livraison par le bloc `estimated_shipping`.
Zéro abonnement mensuel, zéro script tiers.

## Leur architecture de page produit

C'est la partie qui vaut d'être copiée. L'ordre du bloc d'achat, de haut en bas :

```
note en étoiles (cliquable, descend vers les avis)
titre court — plus court que le titre Shopify
une phrase de positionnement en contraste
   « Most body pillows are straight. Your body isn't. »
3 puces à icône : bénéfice + preuve, jamais une caractéristique seule
── offre ────────────────────────────────────────
   paliers de prix, le PLUS PETIT présélectionné
   badge sur le palier haut uniquement
   sélecteur de coloris à l'intérieur du palier sélectionné
   cases d'options additionnelles pré-cochées à -50/-67 %
──────────────────────────────────────────────────
bouton pleine largeur en capitales
paiement accéléré
icônes de paiement
accordéon 5 lignes : 3 objections → garantie → livraison
```

Puis, sous le pli, toujours dans cet ordre :

```
carrousel de témoignages
LA SCIENCE   → mécanisme → 3 cartes
CE QU'IL SE PASSE → frise en 4 étapes (nuits 1-3, semaine 1, semaine 2-3, nuit 30)
LE PROBLÈME  → 3 douleurs numérotées 01/02/03
LES AVIS     → mur d'avis
FAQ
```

Le point remarquable : **le mécanisme est présenté avant le problème.** Le lecteur a déjà
la solution en tête quand l'agitation arrive. C'est contre-intuitif et ça fonctionne — on
a gardé cet ordre.

## Les 10 défauts qu'on ne reproduit pas

Relevés dans leur code, pas supposés.

1. **Pas de hero.** Leur section `slideshow-hero` ne contient aucune diapositive : la page
   d'accueil ouvre directement sur un bloc de titre. → Ici, un vrai hero plein écran.
2. **Trois sections mortes** entre les avis et la FAQ, qui ne produisent rien du tout.
3. **La barre de confiance du panier affiche « Heading » trois fois** — jamais configurée.
   C'est en ligne, sur un site qui vend.
4. **Deux typographies concurrentes** : le thème est en Poppins, mais toutes les sections
   écrites à la main forcent Helvetica Neue.
5. **Pas de balise `<h1>`** sur les deux fiches oreiller, et aucun prix rendu côté serveur.
   Mauvais pour le référencement, et sans JavaScript la fiche n'a plus ni prix ni variantes.
6. **Trois promesses de livraison différentes** sur trois fiches produits du même site
   (5-8 j, 24-48 h + 5-8 j, 24-48 h + 5-10 j).
7. **La FAQ des bandelettes est celle de l'oreiller** — elle décrit un « 3Point Support
   System » pour les épaules, les hanches et les genoux, sur une page de bande buccale.
8. **Cinq boutons d'appel pointent vers `#buy-buttons`**, une ancre qui n'existe pas dans
   la page. La barre collante pointe vers `#ProductInfo-id`, qui n'existe pas non plus.
9. **La barre collante annonce 4,9/5 quand le widget d'avis annonce 5,0 sur 4 avis.**
10. **Le tiroir panier de l'application est masqué** par une règle CSS maison
    (`visibility: hidden !important`), ne laissant que le voile sombre.

## Ce qu'on ne copie pas par choix

| Chez eux | Ici | Pourquoi |
|---|---|---|
| « 10,000+ CUSTOMER REVIEWS » en haut de chaque page | Trois arguments vérifiables | La boutique vient d'ouvrir. Le chiffre serait faux. |
| Note 4,8/5 sur 2 845 avis dans le bloc d'achat | Aucune étoile | Idem. Le bloc `rating_stars` de Shrine affiche une note saisie à la main : c'est un faux avis au sens de la loi. |
| 20 témoignages photo | Section présente mais **désactivée** | Elle explique en clair pourquoi, et ce qu'il faut faire pour l'activer. |
| « More energy & immunity », « enhanced jawline » | Description strictement mécanique | Ces allégations feraient du produit un dispositif médical non déclaré. |
| Stock négatif jusqu'à −4 706 unités | Suivi de stock désactivé | Même effet commercial, sans le chiffre absurde dans l'admin. |
| Compte à rebours de panier de 10 min qui vide le panier | Compte à rebours de 5 min, sans vidage | Vider le panier d'un client est hostile. |
| Blocage du clic droit et de F12 | Rien | Ça n'empêche personne de copier et ça casse l'accessibilité. |

## Leur grille tarifaire, pour référence

| Produit | Prix | Barré |
|---|---:|---:|
| Snuggi Body Align Pillow | 59,99 $AU | 99,99 $AU |
| Cloudii Comfort Align Pillow | 89,99 $AU | 129,99 $AU |
| Taies (3 références) | 29,99 $AU | — |
| Sleep Strips | 39,99 $AU | — |
| Nose Strips | 39,99 $AU | — |

Paliers des Sleep Strips, la seule vraie échelle de quantité du site :
1 mois 39,99 $ · 3 mois 69,99 $ (−41,7 %, badge « Most Popular ») · 6 mois 119,99 $
(−50 %, badge « Best Value »).

C'est cette structure à trois paliers qu'on a reprise pour les bandelettes, en euros.
