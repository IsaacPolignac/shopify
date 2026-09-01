# Ce que tu dois faire toi-même

---

## Tout de suite

### 1. Regarder l'aperçu, puis publier le thème

```
https://liyan.shop/?preview_theme_id=157230071965
```

Le thème **Shrine PRO** est entièrement construit mais **non publié** : l'API Shopify
interdit d'écrire sur un thème en ligne, et je ne publie rien à ta place.

Quand l'aperçu te convient : `Boutique en ligne → Thèmes → shrine-pro-v1-2-3-186-sections
→ Publier`. L'ancien thème reste dans la liste, retour possible en un clic.

À regarder en priorité : l'accueil, la fiche **Oreiller Appui**, la fiche **Bandelettes de
sommeil** (paliers de prix) et le tiroir panier.

### 2. Renommer la boutique en PORTANCE

`Réglages → Détails de la boutique`

Elle s'appelle encore **« boutique »** — ça s'affiche dans le titre des onglets et dans le
pied de page (« © 2026, boutique »). Non modifiable par API.

Change aussi l'e-mail de contact : une adresse Gmail personnelle est un signal négatif
pour les processeurs de paiement.

### 3. Corriger le référencement de la page d'accueil — 1 minute

`Boutique en ligne → Préférences`

Ces trois champs sont des réglages **Boutique**, pas du thème : l'API n'y touche pas. Ils
contiennent encore le texte du projet puériculture, visible par Google dès la publication.

L'image de partage est le point le plus voyant : `ogliyana.png` s'affiche en aperçu de lien
sur **toutes** les pages du site, pas seulement l'accueil — donc dans chaque partage
WhatsApp, Messenger, LinkedIn ou Slack d'une fiche produit.

| Champ | À mettre |
|---|---|
| Titre de la page d'accueil | `PORTANCE — Oreillers ergonomiques et accessoires de sommeil` |
| Méta-description | `Des oreillers dessinés à partir de la position dans laquelle vous dormez : soutien nuque, épaule et hanche, housses déhoussables, 30 nuits d'essai.` |
| Image de partage social | `portance-og.png` — déjà déposée dans `Contenu → Fichiers` |

*(Les mêmes valeurs sont enregistrées dans les métachamps `global.title_tag` et
`global.description_tag` de la boutique, mais Shopify ne les lit pas pour l'accueil.)*

### 4. Le domaine

Le site tourne sur **`liyan.shop`**, qui ne correspond plus au nom. Au moment du
changement, **`portance.shop` était libre** — c'est le remplacement direct, même extension.
`portance.co` l'était aussi ; `portance.fr`, `.com` et `.store` étaient pris.

Quand tu l'achètes : `Réglages → Domaines`, puis corrige la mention du site dans les
**CGV**, article 1, qui cite `liyan.shop` nommément.

### 5. Dépublier 5 collections héritées — 30 secondes

`Produits → Collections`. L'API refuse la dépublication (garde-fou du connecteur), il faut
le faire à la main. Elles sont vides et reliées à aucun menu, mais elles apparaissent dans
la liste des collections :

`Tétines` · `Biberons` · `Éveil & Dentition` · `Coffrets Cadeaux` · `Ancienne gamme`

### 6. Vérifier les promesses que le thème affiche

- [x] **Livraison offerte à 60 €** — la barre de progression du tiroir panier a été
      **retirée** le 1er septembre. Elle promettait la livraison offerte au-dessus de
      60 alors qu'aucun tarif n'est encore créé, et le nombre 60 ne se convertissait
      pas d'un marché à l'autre : un Australien la débloquait à 60 AUD, soit environ
      36 €. Elle tombait aussi à « plus que 0,10 € » sur l'oreiller Appui à 59,90 €,
      ce qui agace au lieu de pousser.
      **Pour la remettre** : crée d'abord le tarif dans `Réglages → Livraison et
      traitement`, puis rajoute le bloc `progress_bar` au tiroir panier avec un seuil
      qui correspond au tarif — et vérifie-le marché par marché.
- [ ] **Estimation 5–10 jours ouvrés** sur les fiches produits. Ajuste-la à ton
      fournisseur réel (bloc « Estimated shipping » de `main-product`).

### 7. Remplir les `[À COMPLÉTER]`

`Contenu → Pages`, cherche `[À COMPLÉTER]`. Une trentaine, dans *Questions fréquentes*,
*Livraison*, *Retours & Remboursements*, *CGV* et *Nous contacter*. Ce sont les seuls
endroits où je n'ai rien inventé, parce qu'inventer y aurait été mensonger :

- [ ] Raison sociale, forme juridique, adresse, SIREN, TVA intracommunautaire
- [ ] E-mail de contact et délai de réponse annoncé
- [ ] Délais de préparation et d'acheminement **réels**, par zone
- [ ] Frais de port, seuil de franco, transporteur
- [ ] Qui paie les frais de retour
- [ ] Nom du médiateur de la consommation (obligatoire, art. L612-1)
- [ ] Moyens de paiement effectivement activés

### 8. Redescendre en forfait Basic — économie ~360 $/mois

`Réglages → Forfait`. Tu es sur **Advanced**, rentable au-delà d'environ 72 000 € de
chiffre d'affaires mensuel.

---

## Avant la première vente — non négociable

### 9. Ne pas activer la section « avis » tant qu'ils n'existent pas

La section témoignages de l'accueil est **désactivée** et son texte le dit. Installe une
application d'avis vérifiés (Judge.me, Loox, Avis Vérifiés) qui collecte après achat.

Inventer un avis, une note moyenne ou un « 10 000+ clients » est une pratique commerciale
trompeuse : jusqu'à **300 000 €** ou 10 % du chiffre d'affaires (art. L121-2 et L121-4,
directive Omnibus 2019/2161).

### 10. Déposer la marque PORTANCE

Recherche d'antériorité en **classe 20** (literie, oreillers) et **classe 24** (textiles)
auprès de l'INPI ou de l'EUIPO. Aucune marque de literie de ce nom n'est ressortie des
recherches, mais **ce n'est pas une recherche d'antériorité** : fais-la faire.

Le mot est non descriptif pour de la literie, donc enregistrable — c'est précisément
pourquoi il a été retenu plutôt que « Ouate » ou « Alcôve », qui décrivent le produit et
sont refusables à ce titre.

### 11. Les bandelettes — le dossier à ne pas bâcler

- [ ] Vérifier que les bandelettes **nasales** ne sont pas revendiquées comme dispositif
      médical dans leur pays d'origine. Si elles le sont, vente UE impossible sans
      marquage CE et déclaration.
- [ ] Attestation d'adhésif **hypoallergénique et sans latex** — c'est écrit sur les fiches.
- [ ] Conditionnement **scellé individuellement** : sans scellé, pas d'exception d'hygiène
      (art. L221-28 5°) et tout retour devient recevable.
- [ ] Assurance responsabilité civile produits couvrant les articles en contact avec les
      voies respiratoires.

### 12. Valider les prix contre le coût d'achat réel

La grille est une transposition de celle de Pilloway en euros, confrontée à aucun coût
d'achat. Refais-la avec tes marges.

---

## Ensuite

- [ ] **Faire dessiner un vrai logotype.** Celui en place est composé en Liberation Sans :
      correct à l'écran, insuffisant pour de l'impression ou un dépôt de marque.
- [ ] Remplacer les visuels produits par les photos du fournisseur. Les 10 visuels actuels
      sont générés, et ils sont **crème et sauge** alors que l'interface est passée à
      l'encre et au gris froid — l'écart se voit sur l'accueil.
- [ ] Ajouter des images secondaires sur chaque fiche (1 à 2 par produit actuellement)
- [ ] Activer le suivi de stock à réception de la première série (aujourd'hui désactivé,
      donc vente illimitée)
- [ ] Repasser le dépôt GitHub en privé s'il ne l'est pas

---

## À ne jamais faire

| Interdit | Pourquoi |
|---|---|
| Écrire un avis client toi-même | Pratique commerciale trompeuse. Jusqu'à 300 000 € ou 10 % du CA. |
| Promettre un bénéfice santé sur les bandelettes | Elles deviendraient un dispositif médical non déclaré. Le ronflement et l'apnée relèvent d'un diagnostic. |
| Afficher un prix barré jamais pratiqué | Le prix de référence doit être le plus bas des 30 derniers jours (art. L112-1-1). Les 99,90 € et 129,90 € doivent être réels. |
| Vendre une bandelette non scellée | Pas d'exception d'hygiène possible, et risque sanitaire réel. |
| Ajouter une variante sans toucher aux listes du thème | `breaks_*` et `swatches_custom_colors_list` sont **positionnelles** : badges et pastilles se décalent. |
| Mettre une virgule décimale dans un champ `breaks_*` | La virgule est le séparateur de liste. « 1,16 € » compte pour deux entrées et casse tous les paliers. |

---

## Ouverture internationale — septembre 2026

### À faire à la main dans l'admin (l'API refuse)

1. **Dépublier les 5 collections de l'ancienne gamme puériculture.**
   `tetines`, `biberons`, `eveil-amp-dentition`, `coffrets-cadeaux`,
   `toute-la-gamme`. Elles apparaissent aujourd'hui dans **les six marchés**.
   Admin → Collections → sélectionner → Retirer de « Boutique en ligne ».
   La mutation `publishableUnpublish` est bloquée par la politique de sécurité
   du connecteur, ce n'est pas un problème de droits.

2. **Renommer la boutique.** Elle s'appelle toujours « boutique ».

3. **Domaines par marché** (facultatif mais recommandé). Aujourd'hui tout passe
   par des sous-dossiers de `liyan.shop`. Des domaines dédiés par marché
   amélioreraient le référencement local.

### Ce qui NE nécessite PAS d'intervention, contrairement à ce qu'on pourrait croire

- **La langue par défaut.** Elle reste le français côté boutique, mais chaque
  marché a `en` comme langue par défaut de sa présence web. Une traduction
  manquante retombe donc sur l'anglais, jamais sur le français. Vérifié.
- **Les balises hreflang.** 181 émises automatiquement, `x-default` compris.
  Aucune application à installer.

### Encore à faire à la main (mise à jour du 1er septembre 2026)

4. **Titre de la page d'accueil en français.** `SHOP.meta_title` vaut encore
   « LIYAN | Biberons & Accessoires Bébé Premium ». Les traductions en, de, es,
   it et nl sont posées, donc seuls les visiteurs francophones voient l'ancien
   titre. L'API Admin n'expose pas ce champ en écriture :
   Admin → Boutique en ligne → Préférences → Titre et méta-description.

5. **`product_cards_custom_badges_list`.** Ce réglage vaut encore
   « MEILLEURE VENTE, NOUVEAU, [percentage] DE REMISE » et Shopify ne le déclare
   pas traduisible. Aucun produit ne porte aujourd'hui les étiquettes
   correspondantes, donc rien ne s'affiche — mais si vous en ajoutez une, le
   badge sortira en français dans les six marchés. À corriger dans
   l'éditeur de thème (Réglages → Badges).

6. **La page « Sécurité & conformité » a été réécrite.** Elle décrivait encore
   des biberons et des tétines, avec des normes EN 1400 et EN 14350 qui ne
   concernent aucun produit vendu aujourd'hui. Elle parle désormais des
   oreillers et des bandelettes : étiquetage textile (UE 1007/2011), REACH,
   GPSR, et le fait que rien dans la gamme n'est un dispositif médical.
   **Les numéros de rapports d'essai et les certificats fournisseurs restent à
   fournir** — sans eux, retirez les mentions de conformité.

7. **Créer les quatre politiques manquantes.** La boutique n'a que la politique
   de confidentialité. Il manque le remboursement, la livraison, les conditions
   de service et les coordonnées — celles qui s'affichent dans le pied de page
   du **checkout**, au moment le plus sensible du parcours.
   Les textes sont écrits et prêts à coller dans
   `docs/international/politiques/` (français et anglais).
   `shopPolicyUpdate` exige le scope `write_legal_policies` que le connecteur
   n'a pas : c'est une limite du connecteur, pas un droit manquant sur la
   boutique. Admin → Paramètres → Politiques.
   Une fois collées, elles deviennent traduisibles (`SHOP_POLICY`) : enregistrez
   les versions anglaises, sinon un acheteur américain lit une politique en
   français au moment de payer.

### Le nom de la marque

8. **Trancher le nom.** La boutique tourne sous PORTANCE, qui était un nom de
   travail et ne répond pas au brief (international et médical). La
   recommandation est **SOMNILA**, avec NUCAILA et ALIGNISA en repli : le
   raisonnement, les vérifications de domaine et le coût exact du renommage
   sont dans `docs/marque/nom.md`.
   **Aucune recherche d'antériorité de marque n'a été faite** — à lancer à
   l'EUIPO, l'UKIPO, l'USPTO et IP Australia avant tout dépôt.
   Le renommage est scripté partout sauf le logotype et le favicon, qui sont à
   refaire.


---

## Passe design et fonctionnalités — 1er septembre 2026

Ce qui a été corrigé directement sur le thème (rien à faire de ton côté) :

- Les **quatre visuels de carte produit** portaient leur promesse en français dans les
  pixels. Ils sont remplacés par les prises de studio recadrées, sans aucun texte.
- Le **logotype était blanc sur fond blanc** dans l'en-tête de toutes les pages : le
  réglage `logo` pointait sur la version claire. Il pointe maintenant sur la version
  sombre, et la version claire sert de logo secondaire.
- Le lockup contenait la ligne **« L'ART DU SOMMEIL »**, en français, sous le nom, donc
  visible par un Allemand comme par un Américain. Le logotype en service est désormais
  le mot seul.
- `layout/theme.liquid` chargeait un script depuis **shopify.jsdeliver.cloud** (domaine
  qui imite jsDelivr sans lui appartenir) et un **marqueur Hotjar dont l'identifiant
  appartient à une autre boutique** (ceio.store, id 5110780) : les enregistrements de
  session de tes visiteurs partaient sur un compte tiers. Les deux sont retirés.
- Le **menu passait sur deux lignes** à 1440 px. Le lien « Oreiller Appui » est retiré du
  premier niveau (il reste dans Boutique et dans le hero), et une règle CSS empêche le
  retour à la ligne dans toutes les langues.
- Le **tableau comparatif** se calait sur 500 px dans une colonne de 625, colonne mise en
  avant à 75 px et libellés coupés en trois lignes. Corrigé.
- Les **boutons des cartes produit** n'étaient pas alignés d'une carte à l'autre, et les
  **deux boutons du hero mobile** étaient décalés de 10 px. Corrigés.
- Le tiroir panier affichait **« Panier • 1 articles »**. Le compte n'est plus suivi d'un
  nom au pluriel, dans les six langues.

Autres corrections de la même passe :

- La page **Contact** n'avait aucun formulaire, et son bouton « Nous contacter »
  renvoyait sur elle-même. Le gabarit `page.contact` du thème, déjà écrit et déjà
  traduit dans les six langues, n'était simplement pas assigné à la page. Il l'est
  maintenant : formulaire nom / e-mail / téléphone / message, plus la barre de
  réassurance (délai de réponse, suivi de commande, questions de santé renvoyées à un
  professionnel).
- Le **pied de page affichait un second formulaire d'inscription** à quinze centimètres
  du premier. Celui du pied est retiré ; la section dédiée, plus lisible, reste sur
  l'accueil et sur les collections.
- Le **texte alternatif du logotype** est repassé en « PORTANCE — L'art du sommeil »,
  traduit dans les six langues. La baseline a quitté les pixels mais reste lisible par
  Google et par un lecteur d'écran.

Deux points signalés à tort dans mon premier passage, vérifiés depuis :

- Le `<h1>` de l'accueil n'est **pas** vide : il contient le logotype, dont le texte
  alternatif est traduit. C'est la convention Dawn, elle tient.
- Les quatre images « sans texte alternatif » des cartes produit sont les images de
  survol, avec `alt=""` **volontairement** : ce sont des doublons décoratifs, et un
  lecteur d'écran doit les ignorer.

À décider de ton côté :

- [ ] **Le logotype est à refaire quand le nom sera tranché.** Le fichier en service
      (`portance-wordmark.png`) est un recadrage du lockup existant : propre, mais c'est
      le mot PORTANCE. Voir `docs/marque/nom.md`.
- [ ] **`product_cards_custom_badges_list`** vaut encore
      `MEILLEURE VENTE, NOUVEAU, [percentage] DE REMISE`, en français. Cette liste est
      positionnelle et **non traduisible** : un badge s'afficherait en français dans les
      six langues. Aucun produit ne porte les étiquettes correspondantes aujourd'hui,
      donc rien ne s'affiche — mais ne tague pas un produit `Meilleure vente` avant
      d'avoir tranché la question.
- [ ] **La section `image-pleine` de l'accueil** est une image pleine largeur de 720 px
      sans un mot dessus, et c'est la troisième photo d'oreiller de la page. Elle a été
      laissée telle quelle : c'est un procédé courant, et Pilloway comme Derila en
      utilisent un. Si tu veux qu'elle travaille, elle peut devenir une bande de rappel
      « 30 nuits d'essai » avec un bouton — dis-le et je la convertis.
- [ ] **Le bloc de gauche du tableau comparatif** laisse encore beaucoup de vide. Le
      passer en pleine largeur, titre centré au-dessus du tableau, se fait en une
      modification de `templates/index.json`.
