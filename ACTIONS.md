# Ce que tu dois faire toi-même

---

## 1. Regarder l'aperçu, puis publier le thème

```
https://liyan.shop/?preview_theme_id=157230071965
```

Le thème **Shrine PRO** est entièrement construit mais **non publié** : l'API Shopify
interdit d'écrire sur un thème en ligne, et je ne publie rien à ta place.

Quand l'aperçu te convient : `Boutique en ligne → Thèmes → shrine-pro-v1-2-3-186-sections
→ Publier`. L'ancien thème `LIYAN — v3 (France)` reste dans la liste, tu peux revenir
dessus en un clic.

Regarde en priorité : la page d'accueil, la fiche **Oreiller Halo** (le gabarit le plus
travaillé), la fiche **Bandelettes de sommeil** (paliers de quantité) et le tiroir panier.

## 2. Renommer la boutique

`Réglages → Détails de la boutique`

Elle s'appelle encore **« boutique »** — ça s'affiche tel quel dans le pied de page
(« © 2026, boutique ») et dans le titre des pages. Non modifiable par API. Mets **LIYAN**.

Change aussi l'e-mail de contact : une adresse Gmail personnelle est un signal négatif
pour les processeurs de paiement.

## 3. Remplir les `[À COMPLÉTER]`

`Contenu → Pages`, cherche `[À COMPLÉTER]`. Il y en a **une trentaine**, concentrés dans
*Questions fréquentes*, *Livraison*, *Retours & Remboursements*, *CGV* et *Nous contacter*.

Ce sont les seuls endroits où je n'ai rien inventé, parce qu'inventer y aurait été
mensonger. Il te faut au minimum :

- [ ] Raison sociale, forme juridique, adresse, SIREN, TVA intracommunautaire
- [ ] E-mail de contact et délai de réponse annoncé
- [ ] Délais de préparation et d'acheminement **réels**, par zone
- [ ] Frais de port, seuil de livraison offerte, transporteur
- [ ] Qui paie les frais de retour
- [ ] Nom du médiateur de la consommation (obligatoire, art. L612-1)
- [ ] Moyens de paiement effectivement activés

## 4. Vérifier les deux réglages que le thème promet

- [ ] **Livraison offerte à 60 €** — le tiroir panier affiche une barre de progression
      vers ce seuil. Crée le tarif d'expédition correspondant dans
      `Réglages → Livraison et traitement`, sinon tu promets quelque chose que la caisse
      ne donne pas.
- [ ] **Estimation de livraison 5–10 jours ouvrés** sur les fiches produits. Ajuste-la à
      ton fournisseur réel dans le thème (bloc « Estimated shipping » de `main-product`).

## 5. Redescendre en forfait Basic — économie ~360 $/mois

`Réglages → Forfait`. Tu es sur **Advanced**, rentable au-delà d'environ 72 000 € de
chiffre d'affaires mensuel. Action de facturation, réservée à l'admin.

---

## Avant la première vente — non négociable

### 6. Ne pas activer la section « avis » tant qu'ils n'existent pas

La section témoignages de la page d'accueil est **désactivée** et son texte le dit.
Installe une application d'avis vérifiés (Judge.me, Loox, Avis Vérifiés) qui collecte
après achat, puis remplace la section.

Inventer un avis, une note moyenne ou un « 10 000+ clients » est une pratique commerciale
trompeuse : jusqu'à **300 000 €** d'amende ou 10 % du chiffre d'affaires
(art. L121-2 et L121-4 du code de la consommation, directive Omnibus 2019/2161).

### 7. Les bandelettes — le dossier à ne pas bâcler

- [ ] Vérifier auprès du fournisseur que les bandelettes **nasales** ne sont pas
      revendiquées comme dispositif médical dans leur pays d'origine. Si elles le sont,
      tu ne peux pas les vendre en UE sans marquage CE et déclaration.
- [ ] Attestation d'adhésif **hypoallergénique et sans latex** — c'est écrit sur les fiches.
- [ ] Conditionnement **scellé individuellement** : sans scellé, tu ne peux pas invoquer
      l'exception d'hygiène (art. L221-28 5°) et tout retour devient recevable.
- [ ] Assurance responsabilité civile produits couvrant les articles en contact avec les
      voies respiratoires.

### 8. Valider les prix contre le coût d'achat réel

La grille actuelle est une transposition de celle de Pilloway en euros. Elle n'a été
confrontée à aucun coût d'achat. Refais-la avec tes marges avant d'ouvrir.

### 9. Vérifier la marque LIYAN

Recherche d'antériorité en **classe 20** (literie, oreillers) et **classe 24** (textiles)
auprès de l'INPI ou de l'EUIPO. La marque était jusqu'ici positionnée sur la puériculture
(classes 10 et 12) : le dépôt éventuel ne couvre pas la literie.

---

## Ensuite

- [ ] Remplacer les visuels produits par des photos du fournisseur — les 10 visuels
      actuels sont générés, cohérents avec la charte mais ce ne sont pas tes produits
- [ ] Ajouter des images secondaires sur chaque fiche (1 à 2 par produit actuellement)
- [ ] Activer le suivi de stock quand la première série arrive (aujourd'hui : suivi
      désactivé, donc vente illimitée)
- [ ] Traduire la boutique si tu vises hors francophonie
- [ ] Repasser le dépôt GitHub en privé s'il ne l'est pas

---

## À ne jamais faire

| Interdit | Pourquoi |
|---|---|
| Écrire un avis client toi-même | Pratique commerciale trompeuse. Jusqu'à 300 000 € ou 10 % du CA. |
| Promettre un bénéfice santé sur les bandelettes | Elles deviendraient un dispositif médical non déclaré. Le ronflement et l'apnée relèvent d'un diagnostic. |
| Afficher un prix barré qui n'a jamais été pratiqué | Le prix de référence doit être le prix le plus bas des 30 derniers jours (directive Omnibus, art. L112-1-1). Les 99,90 € et 129,90 € doivent être des prix réels. |
| Vendre une bandelette non scellée | Impossible d'invoquer l'exception d'hygiène, et risque sanitaire réel. |
| Laisser la barre « livraison offerte à 60 € » sans le tarif correspondant | Tu promets à l'écran ce que la caisse ne donne pas. |
