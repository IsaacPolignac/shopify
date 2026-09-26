# Contexte SOMNILA à transposer à partir de l'analyse de SOYA

Toutes les références sont relatives à ``. Les numéros de ligne sont ceux du fichier.

## 0. Où se trouvent les informations (plusieurs surprises)

- **L'avatar n'est pas dans `build/SOMNILA_DOSSIER_COMPLET.md`.** Ce dossier date du 11/09 et n'a pas de section avatar. L'avatar est dans `build/design-v4/avatar-somnila.html` (24/09, dossier en français) et résumé dans `build/design-v4/README.md` l.18-23.
- **`docs/marketing/` et `docs/compliance/` sont vides** (un seul `.gitkeep` chacun).
- **`docs/international/*` et `docs/pages/*` datent de l'époque PORTANCE**, relevé du 01/09. Ce qui reste utile : les 6 marchés et l'affichage des taxes, dans `docs/international/marches-et-langues.md` l.8-25. Aux US et au Canada, la taxe s'ajoute au paiement. En UE, au Royaume-Uni et en Australie, les prix sont TTC.
- **Le marketing écrit** se trouve dans `build/launch/ADS.md`, `SOCIAL.md`, `EMAILS.md` et `PLAN.md`. Les visuels publicitaires sont dans `build/images/site/ads/` : 9 fichiers, 3 messages × 3 formats, générés par `build/images/site/gen-visuals.py` l.69-82.
- **Les états du site** sont décrits dans `build/CONVERSION.md`, `build/design-v4/`, `design-v5/`, `design-v6/README.md`, `build/theme/PORTAGE_V6.md` et `build/theme/ARCHITECTURE_V7.md`. La v7, calquée sur PurePeptide, est la version actuelle du thème non publié 157447585949.

## 1. L'avatar client tel qu'il est écrit

Source : `build/design-v4/avatar-somnila.html`.

- **Qui (l.157, l.163)** : « La dormeuse de côté au troisième oreiller ». C'est une Américaine de 40 à 60 ans qui dort surtout sur le côté, a déjà racheté plusieurs oreillers et se méfie des publicités à −50 %.
- **Traits et statut de preuve (l.169-176)** :

| Trait | Statut | Source |
|---|---|---|
| Dort sur le côté (54,1 % côté, 37,5 % dos, 7,3 % ventre) | fait | Skarpsno 2017, N=664 |
| Change de position 1,6 fois par heure | fait | même étude |
| A 40-60 ans | hypothèse | Skarpsno, CDC NCHS 559 |
| Plutôt une femme | hypothèse | CDC |
| Vit aux États-Unis | décision | brief |
| Achète sur téléphone, le soir, depuis une pub Meta | hypothèse | à confirmer |
| A déjà racheté 2 ou 3 oreillers | hypothèse | histoire du fondateur |
| Se méfie des notes parfaites (pic d'achat entre 4,0 et 4,7) | fait | Spiegel |

  Ces hypothèses doivent être validées sur les 100 premières commandes (l.165).
- **Son langage (l.183-187)** : des formulations de travail, pas de vraies citations, et en français.
  - « Encore un oreiller qui va s'aplatir en trois mois. »
  - « Il y en a cinq. Lequel est pour moi ? »
  - « Et si c'est trop haut ? »
  - « C'est encore une marque à fausse promo ? »
  - « Je le reçois quand, et je le renvoie comment ? »
  - **Il n'existe aucun verbatim client réel, et rien en anglais américain.**
- **Son désir (l.189-192)** : une forme qui garde sa hauteur dans toutes ses positions, pour arrêter de racheter des oreillers. La raideur au réveil est son vécu, jamais une promesse de Somnila.
- **Profils secondaires (l.193)** :
  - le couple, servi par For Two (22,62 $ de moins que deux Neck 01) ;
  - le foyer, servi par Family Set (−45,25 $) ;
  - la lectrice du soir, servie par Lounge 01 et Evening Set.
- **Huit objections et leurs réponses (l.205-212)** : lequel choisir, et si ça ne va pas, coût total, délai, arnaque ou fausse promo, taille réelle, paiement sûr, absence d'avis. Onze études sont vérifiées à la source (l.235-251), notamment Baymard, Narvar 2025, NN/g, Spiegel, Fogg et Chernev.
- **Référentiel concurrentiel déjà utilisé (l.260-275)** : Pilloway, Derila, Soya Paris et Blume, avec pour chacun ce qu'on reprend et ce qu'on refuse. Pour Soya, deux refus : « 92 % des clients » et « recommandé par les ostéopathes » (voir aussi `build/CONVERSION.md` l.119-126).
- **Pour recouper** : SOYA vise « une femme de 35 à 50 ans, douleur de nuque, achat pour elle et son conjoint » (`DOSSIER_SOYA_PARIS.md` l.159-167). Le profil est proche de celui de Somnila, mais en France et sur un argument de douleur.

## 2. Positionnement, promesse, preuves, règles de marque

Source principale : `build/BRAND_BOOK.md`, qui prime sur tout autre texte (l.3).

- **Positionnement (l.19-20)** : faire du soutien nocturne un objet de design, « la tenue d'un fauteuil de designer, dans un oreiller ».
- **Promesse (l.21)** : *Feel it tonight. Keep it for years.*
- **Valeurs (l.22-25)** : précision, retenue, durabilité.
- **Archétype (l.26-28)** : Créateur, avec le Protecteur en secondaire. Le fondateur apparaît sans visage : « l'artisan silencieux », avec mains, atelier et voix off.
- **Ennemi (l.29-31)** : l'oreiller « orthopédique » bleu, le bloc de mousse à 15 $ qui s'écrase, le faux « −50 % » permanent.
- **Taglines (l.32-33)** : *Sleep well.* (signature), *Support, redesigned.* (publicité), *Held all night.* (accroche produit).
- **Histoire du fondateur (l.35-64)** : texte vrai en anglais, à la première personne. Il commence par « I kept waking up stiff » (l.45-60). La frontière entre biographie et allégation est posée l.62-64.
- **Ton (l.66-81)** :
  - À faire : phrases courtes, verbes physiques (sink, hold, cradle, lift, press), chiffres concrets, anglais simple.
  - Mots interdits (l.74-78) : revolutionary, orthopedic, cervical (on dit *neck*), pain, relief, treats, cures, therapeutic, clinical, clinically proven, doctor recommended, medical, sciatica, apnea, snoring cure. Également interdits : points d'exclamation, emojis, « −50 % », « limited time ».
  - Vocabulaire autorisé (l.80-81) : support, hold, comfort, posture, pressure distribution, shape, height, density, contour.
- **Système visuel « nuit et aube » (l.83-152)** :
  - Palette (l.96-109) : Cloud `#F7F9FC` (55 %), Mist `#DCE8F2` (25 %), Night `#1E2A3A` (12 %), Dawn `#F0B79B` (6 % au plus, un accent par écran, jamais sur un bouton), Slate `#6B7D90`. Le bleu saturé est interdit.
  - Un seul dégradé, le ciel (l.111-113).
  - Polices : Fraunces Soft et Manrope (l.115-125). La v7 parle de « Somnila Serif / Sans » (`ARCHITECTURE_V7.md` l.6).
  - Composition : oreiller en lévitation, 40 % de vide (l.138-141).
  - Signatures sans visage : main qui presse la mousse, lit à l'aube, ligne d'horizon (l.143-147).
  - Jamais (l.149-152) : bleu saturé, colonne vertébrale, avant/après douleur, visage, rendu 3D brillant, stickers promo, badges « best pillow ».
  - Checklist (l.247-251).
- **Règles de projet (`build/SOMNILA_DE_A_A_Z.md` l.39-54)** : données réelles uniquement, zéro promesse médicale, aucun visage, boutique 100 % en anglais, US d'abord, unités métriques et impériales, pas d'app payante.
- **« Rien qui fasse IA » : aucune règle écrite sous cette forme.** Les traces les plus proches :
  - `build/PROMPTS.md` l.7-10 : une image IA n'est jamais utilisée telle quelle ;
  - `BRAND_BOOK.md` l.162-164 : le logo généré a été reconstruit en vecteur ;
  - `build/CONVERSION.md` l.85 : effets refusés parce que « ça sent l'app ».
  - **Tension** : `build/PROMPTS_CHATGPT_IMAGES.md` et `build/PROMPTS_FLUX_KONTEXT.md` prévoient 86 visuels produit générés. Le dossier SOYA met par ailleurs sur liste noire les « visuels d'un coloris générés par IA présentés comme des photos » (`DOSSIER_SOYA_PARIS.md` §13.2).
- **Preuves disponibles, toutes des faits produit** : deux hauteurs 13/11 cm sur le même oreiller, 62 × 42 cm, 1,4 kg, housse incluse et lavable, essai 30 nuits, livraison offerte sur tout oreiller, 6-10 jours, Shop Pay / Apple Pay / Google Pay (`design-v4/README.md` l.46-47).
  - La bande de chiffres ne montre que « 5 formes · 30 nuits · 10 jours · 0 compte à rebours » (`build/CONVERSION.md` l.121-126).
  - **Aucun avis, aucune note, aucune vidéo, aucune photo d'ambiance, aucun échantillon reçu.** La section avis est désactivée (`CONVERSION.md` l.19).

## 3. Gamme, prix, offres, essai, livraison

- **Gamme** (`build/PRODUCTS.csv`, l.2-21, et `BRAND_BOOK.md` l.224-245) :
  - 5 oreillers : Neck 01 (héros), Contour 01, Side 01, Body 01, Lounge 01.
  - Accessoires : Throw 01, Mask 01, Quiet 01, 4 housses.
  - 8 packs : Neck 01 + Cover, Sleep Set, For Two, Side-Sleeper Set, Contour for Two, Evening Set, Family Set, Quiet Night.
  - Coloris : Cloud, Stone, Sky, Night, Blush.
  - Matières : « memory foam » sans composition ni densité (colonne `matieres`).
- **Prix en EUR** (`build/PRIX.md`) :

| Produit | Prix | Coût |
|---|---|---|
| Neck 01 | 69,90 € | 25 € |
| Body 01 | 69,90 € | |
| Contour 01 | 59,90 € | |
| Side 01 / Lounge 01 | 54,90 € | |
| Throw 01 | 59,90 € | |
| Mask 01 | 19,90 € | |
| Housse | 16,90 € | |
| Quiet 01 | 14,90 € | |

  Détail l.27-39. Hypothèses : CAC 25 €, paiement 2,9 % + 0,30 €, retours 5 % puis 7 % (l.6-11 et l.131-133).
- **Point mort et mix attendu** : le héros seul ne rapporte plus rien au-delà d'un CAC de 39 € (`build/ANALYSE_PRIX.md` l.25-28). Sur le mix attendu, le panier moyen est de 85,45 € et le net de 20,90 € par commande (l.30-33).
- **Packs** (`PRIX.md` l.45-69) :

| Pack | Prix | Remise |
|---|---|---|
| Neck 01 + Cover | 76,90 € | −11 % |
| Sleep Set | 99,90 € | −18 % |
| For Two | 119,90 € | −14 % |
| Side-Sleeper Set | 119,90 € | −14 % |
| Contour for Two | 99,90 € | −17 % |
| Evening Set | 94,90 € | −17 % |
| Family Set | 169,90 € | −19 % |
| Quiet Night | 29,90 € | −14 % |

  - En vitrine : Neck + Cover, Sleep Set, For Two et Family (l.122-125).
  - Somnila n'a **pas d'offre nommée « Duo »** : l'équivalent est For Two.
  - Pas de prix barré, pas de case pré-cochée. Housse et masque sont proposés en ajout sous le bouton d'achat (`CONVERSION.md` l.30).
- **Prix par marché** : un seul catalogue EUR converti par Shopify Markets, décision du fondateur (`PRIX.md` l.135-143).
  - Les colonnes `usd_fixe` (Neck 79,99 $), `gbp_fixe` (59,99 £), `cad_fixe` et `aud_fixe` de `PRODUCTS.csv` ne sont plus qu'indicatives.
  - Prix US réellement affichés le 24/09 : Neck 01 79,50 $, For Two 136,38 $, Family Set 193,25 $ (`design-v4/README.md` l.44-45).
- **Règle publicitaire** : les campagnes ne poussent que Neck 01, Body 01 et les packs, jamais un accessoire, Side 01 ou Lounge 01 seuls (`PRIX.md` l.127-129 ; `ANALYSE_PRIX.md` l.94-96).
- **Essai 30 nuits**, compté depuis la livraison :
  - Remboursement par e-mail, l'oreiller n'est pas renvoyé (`build/pages/policies/refund-policy.html` l.2 ; `build/pages/returns-warranty.html` l.3).
  - Accessoires : retour sous 14 jours, non utilisés, port à la charge du client (refund-policy l.4).
  - Délai de remboursement : « as soon as we confirm » (l.8).
  - **Contradictions** : `BRAND_BOOK.md` l.59 dit « send it back ». La v7 renvoie simplement à la politique et demande les vraies conditions (`ARCHITECTURE_V7.md` l.84-86). Le dossier avatar classe ces conditions comme bloquantes (avatar l.344).
- **Livraison** : 6 à 10 jours partout, envoi direct par le fournisseur, soit l'Asie selon l'adresse AutoDS (`build/PHASE0.md` l.73-80).
  - Offerte dès 54,90 €, soit 62,44 $ aux US. Ce seuil est **égal au prix de Side 01 et de Lounge 01**, avec un risque de change (avatar l.345).
  - Accessoires seuls : 4,90 à 9,90 €. Reste du monde : 14,90 €. Voir `build/pages/shipping-delivery.html` l.3-10.
  - Délai « compté depuis le départ du colis » (l.15). Suivi « tracked » non confirmé (`ARCHITECTURE_V7.md` l.87).

## 4. Marchés, canaux, plan de lancement, créations prévues

- **Marchés** : US d'abord, puis CA, UK, UE, AU, puis reste du monde (`SOMNILA_DE_A_A_Z.md` l.51-52). Le marché principal Shopify est encore « Reste du monde », à passer sur US (`HANDOFF.md` l.51-52).
- **Canaux** (`build/launch/PLAN.md` l.55-67) :
  - J0 : Meta froid, US uniquement, petit budget.
  - J+7 : reciblage.
  - J+14 : TikTok, seulement si le coût par commande est sous 39 €.
  - Google Search et Shopping (`ADS.md` l.129-168).
  - Pinterest et Instagram en organique, Shopify Email.
  - Pas d'influence avant le mois 2, pas d'app payante (l.113-120).
  - Règles d'arrêt : couper une création après 300 € sans commande ; après 10 commandes, ne garder que les ensembles de publicités sous 39 € par commande (`ADS.md` l.98-111 ; `PLAN.md` l.71-89).
- **Meta** (`build/launch/ADS.md`), avec des textes courts, moyens et longs, des titres et des descriptions pour chaque concept :
  - A « Sleep well. », Neck 01 en trafic froid (l.18-51) ;
  - B « Thirty nights to decide. » (l.53-72) ;
  - C « Two heights, one pillow. » (l.74-84) ;
  - D « Sets, priced honestly » (l.86-96).
- **TikTok, Google, conformité** : 3 textes TikTok (l.115-125) ; Google avec 15 titres et 4 descriptions, mots-clés négatifs orthopedic, cervical, medical, cheap, amazon (l.129-161) ; checklist de conformité (l.172-179).
- **Règle des créations** : aucun prix, puisqu'ils sont convertis par marché (`PHASE6.md` l.35-36).
- **Réseaux** (`build/launch/SOCIAL.md`) : handle @somnila (l.16-17), bios (l.19-28), 12 posts (l.44-62), 4 scripts vidéo sans visage (A la pression, B la housse, C le matin, D les trente nuits ; l.66-104), réponses types, dont celle à « neck pain ? » (l.110-113).
- **E-mails** (`build/launch/EMAILS.md`) : série de bienvenue en 3 messages (l.17-97), un seul e-mail de panier abandonné sans remise (l.101-116), message à J+12, demande d'avis à J+21 sans contrepartie (l.136-171). WELCOME10 reste en option (l.175-179).
- **Défaut trouvé dans les visuels publicitaires** : `somnila_ad_two-heights_*` écrit « 13 cm on one side, 11 cm on the other » alors que l'image montre **Contour 01**, dont la hauteur unique est de 10 cm (`gen-visuals.py` l.57 et l.72).
- **Site** : la v6 est construite en tunnel Derila/Pilloway avec paliers 1 · 2 · 3 oreillers (`design-v6/README.md` l.8-30). La v7 suit l'architecture PurePeptide (`ARCHITECTURE_V7.md`). Le questionnaire existe seulement dans les maquettes v4/v5 : dans le thème, c'est une simple ancre (`CONVERSION.md` l.47).

## 5. Points ouverts connus

- **Réglages de la boutique** :
  - Langue par défaut encore en français : le tiroir panier et « Acheter avec Shop » s'affichent en FR (`HANDOFF.md` l.49-50 ; `ARCHITECTURE_V7.md` l.81-84).
  - Titre de l'accueil encore LIYAN (`PORTAGE_V6.md` l.43-44).
  - Thème non publié, mot de passe actif.
  - Anciens produits PORTANCE et LIYAN toujours publiés (`HANDOFF.md` l.60-66).
- **Juridique** :
  - Entité légale absente ; les politiques gardent des champs à compléter (`SOMNILA_DE_A_A_Z.md` l.261-262 ; refund-policy l.11).
  - Marque SOMNILA non déposée (l.263-264).
- **Fournisseur** (`HANDOFF.md` l.80-87 ; avatar l.348) :
  - composition et densité de la mousse, poids de Side 01 et des housses ;
  - boîte « iMeBoBo » de Quiet 01 ;
  - circuit des numéros de suivi ;
  - odeur de la mousse (la FAQ dit « quelques heures », `faq.html` l.14) ;
  - pays de fabrication et certification de la mousse ;
  - **aucun échantillon commandé** (`DOSSIER_SOYA_PARIS.md` §13.6 point 3).
- **Hors calcul de prix** : TVA UE, droit UE de 3 € et fin du de minimis US ne sont pas intégrés dans `PRIX.md`. En UE, le Neck 01 rapporterait 2,43 € après CAC au lieu de 14,08 € (`DOSSIER_SOYA_PARIS.md` §13.6 point 1).
- **Décisions ouvertes** : WELCOME10, crédits de génération d'images, app d'avis (seuil de 5 avis dans avatar l.347 contre 10 dans `SOMNILA_DE_A_A_Z.md` l.276-277), bandeau cookies (`CONVERSION.md` l.53), vidéo produit de 10 à 20 s (avatar l.349).
- **Incohérences** :
  - la colonne `statut_shopify` de `PRODUCTS.csv` dit DRAFT alors que les produits sont actifs (`SOMNILA_DE_A_A_Z.md` l.194) ;
  - le packshot « Mask 01 Cloud » montre un oreiller (`DOSSIER_SOYA_PARIS.md` §13.6 point 4) ;
  - le prix de Lounge 01 (54,90 €) est à comparer au probable 42,90 € de Soya (§13.6 point 5).
- **Biais du plan d'action SOYA** : le §13, l.1039-1151, est écrit pour la France (CGV françaises, INPI, French Days, « Somnila avis », sleeps.fr). Somnila vend d'abord aux US, en anglais. Chaque leçon doit être re-transposée au contexte US : FTC sur les faux avis et les endorsements, sales tax, droits de douane, concurrence Amazon US.

## 6. Questions que l'analyse SOYA doit éclairer pour Somnila

**Avatar et langage**
1. L'avatar de SOYA (femme de 35 à 50 ans, douleur, couple) est-il confirmé par le ciblage des publicités, les commentaires Meta et Instagram et les avis ? Tout cela valide-t-il ou infirme-t-il les hypothèses « 40-60 ans, femme, dormeuse de côté, 3ᵉ oreiller, achat mobile le soir » ?
2. Quelles raisons d'achat, peurs et mots des acheteuses de Soya se traduisent en anglais américain **sans douleur ni santé** ? Il faut en tirer une liste de verbatims transposables et une liste de verbatims interdits.
3. Quelle part des acheteurs achète pour deux ou en cadeau ? For Two et Family Set sont-ils bien les bonnes offres principales ?

**Accroches et créations**
4. Quelles accroches et quelles 3 premières secondes de SOYA durent le plus longtemps dans la bibliothèque Meta (depuis une IP française, avec la portée publiée au titre du DSA) ? Lesquelles se refont sans visage, sans allégation médicale et sans rendu qui fasse IA : mains, retournement 13/11 cm, mètre, balance, housse ?
5. Quelle part de leurs créations montre des visages ou des praticiens, et reste-t-il une performance visible dans le format « produit manipulé » seul ?
6. Leurs formats et durées (9:16, 30 à 60 s, sous-titres, bulles de stories sur la fiche) : lesquels reprendre dans les concepts A à D de `ADS.md` et les scripts A à D de `SOCIAL.md` ?

**Offre et prix**
7. Structure d'offre réelle au panier et au checkout, depuis une IP française : housse pré-cochée, total par défaut, Pack Duo à 98,90 €, Famille « 3+1 », cadeaux, frais cachés. Qu'en retenir pour les paliers 1 · 2 · 3 et le pack Neck 01 + Cover ?
8. Un prix duo permanent convertit-il mieux qu'un « −30 % sur le 2ᵉ » ? Quel prix par oreiller viser en USD face au 49,45 € par oreiller du Duo SOYA ?
9. Faut-il revenir à des prix US fixes en ,99 plutôt que convertis (79,50 $ contre 79,99 $) ? Faut-il baisser le seuil de livraison offerte ?

**Confiance, essai, logistique**
10. Comment SOYA formule-t-il l'essai et le retour au checkout, et qu'en disent les avis ? Quelles conditions exactes d'essai Somnila doit-elle écrire (renvoi ou non, délai de remboursement, point de départ du délai) ?
11. Quel est le délai réel de la commande à la porte, qui est le transporteur, d'où part le colis ? Les 6-10 jours de Somnila sont-ils crédibles aux US ? Faut-il écrire le pays de fabrication ?
12. Comment lancer sans avis sans faire faux, face à « 4,8 / 15 637 » ?

**Tunnel et site**
13. Parcours complet de SOYA : fiche, panier, checkout, pop-ups, upsells après ajout, e-mails et SMS reçus après inscription ou abandon. Qu'est-ce qui manque au tunnel v7 de Somnila ?
14. Quel quiz de position SOYA utilise-t-il, et que capte-t-il ? Somnila doit-elle transformer l'ancre `#which` en vrai questionnaire ?

**Acquisition et budget**
15. Volume de dépense, calendrier des temps forts, part payant contre organique : quel budget et quel CAC sont réalistes pour un lancement US ? Le point mort de 39 € par commande tient-il ?
16. Créateurs, UGC, codes promo : faut-il avancer les partenariats avant le mois 2 ?
17. Google et Pinterest : quels mots-clés et quelles fiches Shopping de la catégorie visent les US ?

**Conformité et protection**
18. Quelles allégations de SOYA seraient retoquées par Meta, TikTok ou la FTC ? Liste des tournures à ne jamais transposer, en complément de `BRAND_BOOK.md` l.74-78.
19. Protection de la marque : clones, domaines, comptes. Quels handles et domaines Somnila doit-elle réserver avant de lancer aux US ?

**Autocritique du dossier existant**
20. Qu'est-ce qui, dans les recommandations du §13, suppose le marché français et doit être réécrit pour les US ? Quelles affirmations du dossier restent marquées [déduit] ou [hypothèse] et peuvent être tranchées depuis le Mac ?
