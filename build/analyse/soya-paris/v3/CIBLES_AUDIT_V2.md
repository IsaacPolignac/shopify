# Audit adversarial du dossier SOYA PARIS : préparation (26/09/2026)

**Chemins utilisés ci-dessous**
- `P/` = `build/analyse/soya-paris/preuves/`
- `P2/` = `P/v2/`
- `TAR:x` = fichier `x` à l'intérieur de `P2/pages_html.tar.xz`. Pour l'extraire : `mkdir -p /tmp/soya_tar && tar -xJf P2/pages_html.tar.xz -C /tmp/soya_tar`.
- `B/` = `build/`
- `D` = `build/analyse/soya-paris/DOSSIER_SOYA_PARIS.md`
- Scripts : `P2/ventes/scenarios.py`, `P2/contre_trafic/recalc.py` et `extract.py`, `P2/sourcing/marge.py`, `P2/contre_sourcing/compteurs_famille.py`, `P2/reseau/infra.py`, `P2/avis/parse_loox.py`, outil `build/analyse/soya-paris/outils/inv.py`.

**Preuves absentes du dépôt**
Ces fichiers sont restés dans le `/tmp` du cloud : les vidéos, `hr_avis_comments.jpg`, les PNG pleine page, et environ 27 des 45 captures Wayback (le tar n'en contient que 18). Pour eux, la re-vérification passe par une nouvelle collecte.

**Règles de toute vérification en direct**
- Aucune saisie, aucun compte, aucun achat, aucun contact.
- soya-paris.com s'ouvre dans un profil Chrome dédié, non connecté à Facebook ni à Instagram.
- Les pages Facebook et Instagram se lisent dans un autre profil, sans y visiter soya-paris.com.

---

## (a) 42 affirmations à plus fort enjeu, classées par enjeu

Types : **[A]** accusation, **[D]** décision de Somnila.

**1. [A+D] Les compteurs `inventoryQuantity` mesurent des ventes nettes.** C'est la base des volumes, du chiffre d'affaires, du budget publicitaire et de la part des packs.
- Où : D § 17.2, § 17.12.
- Étiquette : [constaté] pour le mécanisme, [déduit] pour la lecture en ventes.
- Preuves : `P2/inv/snap-2026-09-26T{094803,104854,114902,124913}Z.json`, `P2/ventes/rythmes_wayback.tsv`, `P2/contre_trafic/extract_out.json`. Dans `P/soya/pdp3.html`, les 8 variantes de la fiche 3.0 portent `"inventoryManagement": null`.
- Re-vérifier :
  1. Lire la documentation Shopify (help.shopify.com, « Set up inventory tracking » ; shopify.dev, objet `ProductVariant`). Une variante non suivie voit-elle sa quantité baisser à la vente ? Le champ `inventoryManagement` est-il déprécié au profit de `inventoryItem.tracked` ?
  2. Calibrer sur une boutique de développement Shopify Partners, pas sur celle de Somnila. Créer une variante suivie et une non suivie, passer une commande test avec la passerelle « Bogus », puis relire le compteur exposé.
  3. Lancer `inv.py` une fois par jour pendant au moins 7 jours et contrôler trois choses : baisses nocturnes, aucune hausse sans réassort, valeurs identiques entre la fiche 3.0 et la fiche housse.
- Réfuté si : Shopify ne décrémente pas les variantes non suivies et aucune autre cause n'est documentée ; les compteurs remontent sans réassort ; ou les commandes arrivent par lots depuis un paiement externe (voir n° 12).

**2. [A] Avis Loox importés.**
- Contenu :
  - 1 137 des 1 776 avis (64 %) sont horodatés à 00:00:00 UTC, et aucun n'a 1 ou 2★.
  - 494 sont datés d'avant le 05/09/2024, dont 462 avec le badge « Vérifié ».
  - 56 textes reviennent sous 144 noms.
  - 19 imports au format « Prénom.x » en septembre 2026.
- Où : § 1 point 2, § 19.4, D.3. Étiquette : [constaté].
- Preuves : `P2/avis/loox_reviews.json`, `TAR:avis/loox/*.html`, `P2/contre_voc/recalc_out.txt`, `P2/contre_trafic/loox_minuit.txt`.
- Re-vérifier dans le dépôt : recompter en Python (`data-time % 86400000 == 0`, notes, dates, doublons de texte normalisé) ; re-parser 5 pages du tar avec `parse_loox.py`.
- Re-vérifier en local :
  - Ouvrir `https://loox.io/widget/CRe3ATH2rU/reviews/<id produit>` (id dans `P/soya/products.json`) et regarder `data-time` sur 3 pages récentes.
  - Lire la documentation Loox sur l'import CSV et sur l'import depuis AliExpress.
  - Chercher sur Google.fr, entre guillemets, 5 phrases répétées (« Je n'utilise plus que cet oreiller maintenant. »).
- Réfuté si : Loox met à minuit des avis réellement collectés (transfert entre boutiques) ; ou si une boutique SOYA antérieure au domaine est documentée. Si les phrases viennent d'AliExpress ou d'Amazon, l'accusation reste mais change de mécanisme.

**3. [A] « Noté 4,8/5 – 15 637 avis clients » est écrit en dur.** Le texte vient d'un bloc Liquid, est identique sur les 19 fiches, figé dans 46 captures depuis le 19/04/2025, et apparaît dans une vidéo publicitaire.
- Où : § 1 point 1, § 16.5. Étiquette : [constaté].
- Preuves : `P/soya/pdp3.html` (l. 2170, `liquid_n8MKt3`), `P/soya/web/loox_vs_affiche.tsv`, `P2/pub/contre/avis_15637.txt`, `P2/pub/vid/concept_*.jpg` (entre 5,5 et 7,5 s), `P2/pub/vid/hc_*.jpg`.
- Re-vérifier en local :
  - Afficher le code source (Cmd+Option+U) des fiches 3.0, enfant et draps en soie ; chercher « 15 637 » et « icons8 » ; faire une capture.
  - Ouvrir 3 captures Wayback au hasard : `https://web.archive.org/web/<date>id_/https://soya-paris.com/products/oreiller-soya-2-0`.
- Réfuté si : le nombre varie dans le temps, est produit par une application d'avis, ou diffère d'une fiche à l'autre.

**4. [A] Trustpilot : la note de 4,3 mélange deux flux.**
- Contenu :
  - Environ 22 avis par jour par le lien de la marque (`BasicLink`, niveau « invited », moyenne 4,67).
  - Environ 2 par jour spontanés (moyenne 1,56).
  - 8 avis déposés par ce lien avant la livraison.
- Où : § 1 point 2, § 19.3, § 19.13.
- Étiquette : [constaté] pour les métadonnées. Le sens de « BasicLink » vient d'un blog tiers (stacktome).
- Preuves : `P2/avis/tp/tb_s{1..5}_{fr,all}.json`, `P2/avis/tp_corpus.json`.
- Re-vérifier en local :
  - Re-télécharger le JSON TrustBox (URL du § 19.2) et recompter `reviewSource`.
  - Lire la documentation officielle (support.trustpilot.com : « Basic link », étiquettes Invited / Unprompted / Verified).
  - Ouvrir 10 avis 5★ récents et noter l'étiquette affichée.
- Réfuté si : « BasicLink » couvre aussi des avis que la marque n'a pas sollicités.

**5. [A] Trustpilot : des avis positifs ont disparu, et des textes circulent d'une plateforme à l'autre.**
- Contenu :
  - Au moins 85 avis présents le 22/08/2025 (62 à 5★, 25 à 4★) avaient disparu le 15/03/2026.
  - 7 avis Loox antidatés reprennent mot pour mot la première phrase d'avis Trustpilot signés de noms anglo-saxons, aujourd'hui en 404.
- Où : § 1 point 2, § 19.5.
- Étiquette : [déduit] pour les disparitions, [constaté] pour l'échantillon de 21 URL.
- Preuves : `TAR:avis/wb/a2025-08-22.dec.html`, `a2026-03-15_p1.html`, `a2026-03-15_transparency.html`, `P2/avis/tp/verif_urls_2026-09-26.tsv`, `P2/contre_voc/recalc_out.txt`.
- Re-vérifier en local : extraire tous les identifiants d'avis des pages Wayback d'août 2025, ouvrir chaque `https://fr.trustpilot.com/reviews/<id>` et classer (404, en ligne, en ligne avec une date ou une note modifiée). Capturer un échantillon.
- Réfuté si : la majorité des « disparus » est en ligne avec une date mise à jour (glissement de mois) ou une note modifiée.

**6. [D] Marge européenne de Somnila.**
- Contenu :
  - Neck 01 à 69,90 € TTC : 27,43 € avant publicité, 2,43 € après un CAC de 25 €.
  - Point mort : 27,43 € de CAC, et non 39,08 €.
  - S'y ajoute le droit européen de 3 € par catégorie d'articles depuis le 01/07/2026.
- Où : § 1 ajouts v2 point 3, § 12 menace 2, § 13.6, § 18.9. Étiquette : [déduit].
- Preuves : `B/PRIX.md` l. 5-31, `B/ANALYSE_PRIX.md` l. 11 et 25. Selon `docs/international/marches-et-langues.md`, les prix UE sont « taxes incluses ».
- Re-vérifier :
  - Refaire le calcul : 58,25 − 25 − 2,33 − 3,50 = 27,43.
  - Le refaire avec des hypothèses corrigées (voir (b) B3).
  - Vérifier le droit de 3 € sur le site du Conseil de l'UE, EUR-Lex et douane.gouv.fr ; vérifier aussi les « 2 € de frais de gestion » et la taxe française.
- Réfuté ou ajusté si : le devis à 25 € est DDP (droits et TVA inclus), ou si les frais réels diffèrent.

**7. [D] Positionnement prix de Somnila.**
- Contenu :
  - Ne pas baisser le prix : Somnila est déjà au prix effectif de Soya (69,90 €).
  - Le pack Neck 01 + housse à 76,90 € coûte moins que le panier par défaut de Soya (84,80 €).
  - Somnila ne peut pas suivre les packs de 4.
- Où : § 1 conclusion, § 12 menace 2, § 13.6. Étiquette : [déduit].
- Preuves : `B/PRODUCTS.csv` (P1 à 76,90 € ou 88,99 $ ; P3 à 119,90 € ; P7 à 169,90 € pour 3).
- Re-vérifier :
  - Croiser avec le n° 6 (marge UE) et le n° 11 (panier réel).
  - Refaire l'analyse en dollars pour le marché principal (Neck 01 à 79,99 $, taxe de vente en sus) face aux concurrents américains réels (Derila, Cloudii, Pilloway : prix relevés sur leurs sites US).
- Réfuté ou à déplacer si : Soya n'est pas le concurrent de référence aux États-Unis.

**8. [D] Soya et Somnila visent la même cliente,** « femme d'environ 40 ans qui dort mal et achète pour le couple ».
- Où : § 1 conclusion, § 2.5.
- Étiquette : [déduit] de visuels, d'un quiz et d'un témoignage « Christine R., 41 ans ».
- Preuves : `P/soya/cap/histoire-d-text.txt`, `P/soya/gallery/sheet-1.jpg`, `P/mkt/kl_v7.json`.
- Re-vérifier en local :
  - Bibliothèque Meta (règles européennes DSA) : pour chaque annonce, le ciblage (âge, sexe, lieux) et la couverture par âge et par sexe. Même relevé dans la bibliothèque TikTok.
  - Dépôt : répartition des prénoms féminins et masculins des auteurs dans `P2/avis/avis_classes.tsv`.
  - Comparer avec l'avatar de Somnila (`build/design-v4/avatar-somnila.html` : Américaine de 40 à 60 ans, dormeuse sur le côté).
- Réfuté si : la couverture Meta est majoritairement masculine ou au-delà de 55 ans. Dans tous les cas, « même cliente » est faux pour le marché américain.

**9. [A] Prix de référence gonflé.**
- Contenu :
  - Le 3.0 n'a jamais été vu à un autre prix que 69,90 € pour l'offre 1x (13 captures).
  - Sa référence est passée de 119,90 à 139,90 € : la remise affichée passe de -42 % à -50 % sans que le prix payé change.
  - Le 2.0 se vendait 49,90 € (barré 104,90 €) au printemps 2025, puis a été « remisé » à 59,90 € sous 109,90 puis 119,90 €.
- Où : § 1 point 4, § 7.3, § 17.4. Étiquette : [constaté].
- Preuves : `TAR:ventes/wayback/p30_20251028.html`, `p30_20260208/0217/0224/0420/0630.html`, `p20_20250815/0826.html`, `p20_20251228/20260323/20260420.html`, `P/soya/products.json`, `P/soya/cap/funnel.json`.
- Re-vérifier en local :
  - Relever le prix sur la fiche (bloc d'offres et barre collante), dans `https://soya-paris.com/products/oreiller-soya-3-0.js` (`price`, `compare_at_price`), sur `/collections/all` et dans `/search?q=oreiller`.
  - Chercher une mention du « prix le plus bas des 30 derniers jours ».
  - Lister les captures non exploitées, surtout entre le 20/05 et le 15/08/2025 : CDX `https://web.archive.org/cdx/search/cdx?url=soya-paris.com/products/oreiller-soya-3-0&output=json` ; consulter aussi archive.ph.
- Réfuté si : une capture montre l'offre 1x réellement vendue au prix barré dans les 30 jours qui précèdent une annonce de remise.

**10. [A] Urgence perpétuelle.**
- Contenu :
  - Le compte à rebours est `recurring` / `endType: never` et repart chaque nuit à 23:59 (Paris).
  - « 16 versions du thème, chacune avec son événement ».
  - « FRENCH DAYS » reste affiché onze jours après la fin officielle (07-14/09/2026).
  - Fenêtre d'origine du minuteur : 17-21/10/2025.
- Où : § 1 point 5, § 8.8, § 16.8 bis, § 17.4. Étiquette : [constaté].
- Preuves : `P/soya/pdp3.html` (`essentialCountdownTimerConfigs`), `P/soya/cap/funnel.json`, `funnel2.json`, `P2/pub/contre/wayback_extraits.txt`.
- Re-vérifier en local :
  - Capturer le minuteur à 23:55 puis à 00:01 (heure de Paris), dans la même session puis dans une nouvelle.
  - Dans le code source, chercher « recurring » et « endType ».
  - Vérifier les dates officielles des French Days 2026 sur rejoindrelesfrenchdays.com et dans son archive Wayback.
- Réfuté si : le minuteur a une vraie date de fin, ou si les French Days officiels couvraient le 25/09.

**11. [A] Housse payante cochée d'avance.**
- Contenu :
  - 5 lignes `preselected: true` ; panier par défaut à 84,80 €.
  - Duo à 128,70 € ; Famille à 169,70 € (4 housses pour 29,80 €).
  - Housse Bleu par défaut, quelle que soit la couleur de l'oreiller.
- Où : § 1 point 7, § 8.8, § 18.6, § 18.7.
- Étiquette : [constaté] pour la configuration ; [non vérifié] au panier ; [indice] pour la couleur.
- Preuves : `P/soya/pdp3.html` (`kaching-bundles-deal-block-settings`), `P/soya/cap/slices/pdp3-m-full-00.jpg`, `P2/ventes/kaching_pdp3.json`, `P2/inv/snap-*.json`.
- Re-vérifier en local :
  - Capturer la case au chargement, avant tout clic.
  - Ajouter l'oreiller Blanc 1x au panier et capturer le tiroir.
  - Ouvrir `https://soya-paris.com/cart.js` en lecture seule : lire `variant_title` et `final_line_price` de la housse.
  - Recommencer avec le Duo et la Famille, puis vider le panier.
- Réfuté si : la case n'est pas cochée à l'écran, si le total diffère, ou si la housse suit la couleur de l'oreiller. Si la Famille coûte 199,50 € (14,90 € par housse), le § 18.6 est à refaire.

**12. [A] Paiement et montant facturé (jamais observés).** Le dossier suppose le paiement Shopify standard (Shop Pay, `merchantCountryCode` GB) et un total identique au bloc d'offres.
- Où : § 14, § 18.6. Étiquette : [déduit] et [non vérifié].
- Preuves : `P/soya/pdp3.html` ; `P/soya/cap/funnel*.json` (« Request Forbidden »).
- Re-vérifier en local : cliquer « Paiement » sans rien saisir, puis relever :
  - le domaine de l'URL (`soya-paris.com/checkouts/…` ou domaine externe) ;
  - la devise, la ligne de TVA, le port, les moyens de paiement ;
  - les liens légaux du pied de page et le nom du marchand éventuel.
  - Fermer ensuite.
- Réfuté si : le paiement se fait sur un domaine externe (cela changerait la lecture des salves de compteurs et l'identité de l'encaisseur) ou si le montant diffère.

**13. [A] Allégations de santé.**
- Sur le site : « soulage dès la première nuit », apnée, reflux, « N°1 recommandé par les ostéopathes », « Dr. Marc R. ».
- Dans les annonces : « Élu Meilleur Oreiller Orthopédique 2024/2025 », « Soulagement immédiat », « +200 praticiens ».
- Où : § 1 point 10, § 16.4.
- Étiquette : [constaté]. Les textes d'annonces ont été lus par WebFetch.
- Preuves : `P/soya/cap/pdp3-d-text.txt`, `P/soya/gallery/sheet-1.jpg`, `P2/pub/fb_videos_webfetch.md`, `P2/pub/contre/reouvertures.txt`.
- Re-vérifier en local : ouvrir les URL vidéo Facebook listées au § 16.4 et la bibliothèque Meta (page 61565502837799). Recopier les textes mot pour mot, avec capture et date de début de diffusion.
- Réfuté si : les textes réels diffèrent. WebFetch résume et peut reformuler.

**14. [A] Données de santé de tiers.** La vidéo « Avis clients » affiche des commentaires Facebook nommés qui citent une arthrose, une discopathie, des métastases.
- Où : § 1 point 10, § 16.5, § 11 ligne 18. Étiquette : [constaté] sur image.
- Preuves : `P2/pub/vid/avis_0NN.jpg` (planche vers 18,5 s), `P2/pub/vid/avis.transcript.txt`. L'image haute définition `hr_avis_comments.jpg` n'est pas dans le dépôt.
- Re-vérifier en local :
  - Retélécharger la vidéo depuis le CDN Shopify (URL dans `P/soya/pdp3.html`, bloc `liquid_GDmj3c`).
  - Extraire l'image à 18,5 s : `ffmpeg -ss 18.5 -i avis.mp4 -frames:v 1 out.png`.
  - Retrouver le post source (10 K réactions).
- Réfuté ou nuancé si : les noms sont illisibles, ou si l'exception de l'article 9.2.e du RGPD s'applique (voir (b) B9).

**15. [A] Un opérateur en série : 5 boutiques Shopify pour un même domaine.**
- Boutiques : 84122730826, 74445094946, 88419959133, 68045897928, 93550543180.
- Identifiants communs : pixel Meta 1581609639439558, Klaviyo XuYmmR, Snap fd7f04c9…, actions de conversion AW-16655023754.
- Où : § 0, § 1 point 9, § 15.4, § 15.5, D.3. Étiquette : [constaté] ; lien fort.
- Preuves : `TAR:reseau/wayback/w_20240921201431.html`, `w_20250101123745.html`, `w_20250301121207.html`, `w_20250408171150.html`, `w_20251031190852.html` ; en-têtes `P2/reseau/wayback/h_*.txt` (`x-archive-orig-x-shopid`) ; `P2/reseau/infra.py`.
- Re-vérifier dans le dépôt : extraire le tar, relancer `infra.py`, chercher les 4 identifiants dans chaque capture et lire le shop id des en-têtes.
- Réfuté si : un identifiant manque là où il est annoncé, ou si les shop id ne correspondent pas.

**16. [A] FREYJA (parfum aux phéromones) et MERCURE PARIS appartiennent au même opérateur.** Leurs domaines figurent dans les listes h1 à h5 des URL de polices des boutiques de Soya.
- Où : § 15.6, § 15.7. Étiquette : [constaté] ; lien fort.
- Preuves : `TAR:reseau/wayback/freyja2_20240724.html`, `w_20240921201431.html`, `w_20251031190852.html` ; `P2/contre_reseau/recalculs.txt`.
- Re-vérifier : décoder en base64 les paramètres `h1`…`h5` des URL `/cdn/fonts/`. **Calibrer la méthode sur la boutique Somnila**, dont le fondateur connaît les domaines : ses propres paramètres h donnent-ils bien ses domaines ?
- Réfuté si : les paramètres h ne correspondent pas aux domaines rattachés.

**17. [A] Identité légale : personne n'est relié à soya-paris.com.**
- Contenu :
  - Aucune personne ni société immatriculée.
  - La « SOYA PARIS LLC » des mentions du 15/08/2025 a disparu et n'apparaît pas dans les données Wyoming d'OpenCorporates.
  - Le siège est l'adresse d'un agent enregistré à Casper.
- Où : § 0, § 2.2, § 15.8, § 15.11.
- Étiquette : [constaté par absence]. OpenCorporates a été lu par WebFetch.
- Preuves : `TAR:reseau/wayback/pol_contact_20250815.html`, `P2/contre_reseau/opencorporates_webfetch.txt`, `oc_soya_wy.json`, `P/soya/pol/legal-notice.txt`.
- Re-vérifier en local :
  - Registre du Wyoming : https://wyobiz.wyo.gov/Business/FilingSearch.aspx.
  - Marques : https://data.inpi.fr (« SOYA PARIS », « SOYA »), EUIPO eSearch, WIPO Brand Database, USPTO.
  - Bibliothèque Meta : champs DSA « Payé par » et « Bénéficiaire ».
  - Google Ads Transparency : nom et pays de l'annonceur vérifié.
  - Transparence de la page Facebook : date de création, pays des gestionnaires.
  - Trustpilot : « Informations sur l'entreprise ».
- Réfuté si : un de ces registres nomme une personne ou une société.

**18. [D] Chiffre d'affaires.**
- Contenu : au moins 4,0 M€ TTC sur 342 jours (4,0 à 5,0) ; 19,5 à 26 k€ TTC par jour ; 0,59 à 0,79 M€ par mois ; 0,9 à 1,25 M€ au rythme de septembre.
- Où : § 0, § 1 point 3, § 17.5, D.3. Étiquette : [déduit], en fourchettes.
- Preuves : `P2/ventes/scenarios.py`, `P2/contre_trafic/recalc.py` → `recalc_out.txt`, `P2/ventes/rythmes_wayback.tsv`.
- Re-vérifier :
  - Relancer les deux scripts et refaire le calcul dans un tableur à partir du TSV.
  - Tester la sensibilité (prix moyen, part des packs, part des housses) ; voir (b) B2.
  - Confronter aux 7 jours de relevés `inv.py`.
- Réfuté si : 7 jours hors promotion donnent moins de 150 oreillers 3.0 par jour, ou si le n° 1 tombe.

**19. [D] Volumes, commandes et coussin lombaire.**
- Contenu :
  - 3.0 : au moins 240 par jour du 03/08 au 26/09 (461 par jour du 07 au 26/09).
  - 2.0 : 162 par jour du 20/04 au 26/09.
  - 145 à 260 commandes par jour ; coussin « lombaire » dans 20 à 40 % des commandes.
- Où : § 1 point 3, § 17.1, § 17.4, § 17.5. Étiquette : [constaté] pour les compteurs, [déduit] pour le reste.
- Preuves : `P2/ventes/rythmes_wayback.tsv`, `TAR:ventes/wayback/*.html` (18 captures), `P2/ventes/wayback/cdx_*.txt`, `P2/contre_trafic/extract.py`.
- Re-vérifier en local : retélécharger les 45 captures en `id_` à partir des CDX, relancer `extract.py`, et vérifier que chaque borne de fenêtre est datée par le `reqid` et non par l'horodatage d'archive.
- Réfuté si : les compteurs relus diffèrent.

**20. [D] Budget publicitaire d'environ 3 800 à 10 400 € par jour hors pic.** C'est une hypothèse de 25 à 40 % du chiffre d'affaires, jamais mesurée.
- Où : § 0, § 1 point 3, § 16.9, § 13.7. Étiquette : [hypothèse]. Aucune preuve directe.
- Re-vérifier en local : dans la bibliothèque Meta (UE), relever par annonce le statut, la date de début et la couverture estimée par pays, âge et sexe. Faire de même dans TikTok (FR) et Google Transparency (impressions UE). Estimer ensuite la dépense = Σ couverture × fréquence × CPM France, avec des hypothèses écrites.
- Réfuté si : cette estimation sort de la fourchette.

**21. [D] Meta est le canal principal.**
- Contenu : les 17 vidéos Facebook sont des copies publicitaires ; au moins 7 textes ; l'offre « -30 % sur le 2ème » est la plus déclinée.
- Où : § 16.1, § 16.4, § 16.8, § 16.12.
- Étiquette : [constaté par WebFetch] ; statut publicitaire [déduit].
- Preuves : `P2/pub/fb_videos_webfetch.md`, `P2/pub/contre/reouvertures.txt`.
- Re-vérifier en local sur `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=FR&view_all_page_id=61565502837799` :
  - nombre d'annonces actives et inactives, formats, dates ;
  - URL de destination (fiche directe ou publireportage ?) ;
  - annonces anciennes toujours actives, c'est-à-dire les créations gagnantes.
- Réfuté si : les vidéos n'apparaissent pas comme annonces, ou si l'offre dominante est une autre.

**22. [D] Google.**
- Contenu : campagne Search à mots-clés (22489769215) active du 17/02 au 20/04/2026 vers la fiche 2.0 ; fiches Shopping gratuites dès le 15/08/2025 ; la chaîne « LUXERY SERVICE LTD » n'est qu'un indice faible.
- Où : § 16.3, § 17.9. Étiquette : [constaté] (URL de clic archivées).
- Preuves : `P2/pub/contre/wayback_extraits.txt`, `P2/ventes/wayback/cdx_oreiller-soya-2-0.txt`, `P2/reseau/wayback/cdx_products.txt`, `TAR:pub/ch_16489223.html`.
- Re-vérifier en local :
  - `https://adstransparency.google.com/?region=FR&domain=soya-paris.com` : annonceur vérifié, textes, formats.
  - Google.fr, requêtes « soya paris » et « oreiller soya » : annonces sponsorisées et Shopping, avec capture.
- Réfuté si : l'annonceur vérifié n'est pas lié à Soya, ou si aucune annonce Search n'existe.

**23. [D] L'organique est quasi nul, et c'est « la place libre ».** Soya est absent des 19 requêtes génériques testées.
- Où : § 1 ajouts v2 point 4, § 17.8, § 17.10.
- Étiquette : [constaté], mais via WebSearch, qui passe par des serveurs américains : ce n'est pas Google.fr.
- Preuves : `P2/ventes/seo/websearch_2026-09-26.tsv`.
- Re-vérifier en local :
  - Google.fr en navigation privée, puis Bing.fr, sur les 19 requêtes et les 4 de marque : top 10 organique, annonces, Shopping, « Autres questions ». Une capture par requête.
  - Même exercice en anglais pour Somnila : `google.com/search?q=…&gl=us&hl=en` (« cervical pillow », « memory foam pillow side sleeper », etc.).
- Réfuté si : Soya apparaît en organique. Nuancé si les requêtes sont tenues par de fortes marques en ligne : une place « libre » n'est pas une place facile.

**24. [D] Trafic.** Environ 345,6 k visites en août 2026 (août seul, pas trois mois) ; « Paid Social » fait 36,12 % des visites sur ordinateur ; France 89,89 %.
- Où : § 17.7.
- Étiquette : [non vérifié] (WebFetch) et [déduit] (arithmétique avec HypeStat).
- Preuves : `P2/ventes/trafic/*`, `P2/contre_trafic/relectures_webfetch_2026-09-26.md`.
- Re-vérifier en local : `https://www.similarweb.com/website/soya-paris.com/` dans le navigateur : libellé exact, série mensuelle, canaux, pays, avec capture.
- Réfuté si : 345,6 k est le total de trois mois. La conversion implicite passerait alors à 3,2-5,5 % (`recalc_out.txt`).

**25. [D] TikTok, influence et contenus clients.**
- Contenu : @soya.paris créé le 05/08/2026, 0 vidéo publique, identité publicitaire probable ; aucun créateur identifié ; contenus « clients » produits en interne par 2 présentateurs.
- Où : § 16.3, § 16.10, § 16.11. Étiquette : [constaté] pour le profil, [déduit] pour le reste.
- Preuves : `P2/pub/tt_profile_0926.json`, `P2/pub/tt_content_avis.json`.
- Re-vérifier en local :
  - Profils TikTok et Instagram : abonnés, 12 dernières publications, mentions « Partenariat rémunéré ».
  - Bibliothèque TikTok (FR).
  - Recherches TikTok et Instagram « soya paris ».
  - Filtre « contenu de marque » de la bibliothèque Meta.
- Réfuté si : des créateurs rémunérés ou des vidéos TikTok publiques existent.

**26. [A] Témoignages et chiffres recyclés.**
- Contenu :
  - Les 4 « Acheteur vérifié » du 3.0 étaient déjà sur la fiche 2.0 le 19/04/2025.
  - Le questionnaire 96 / 91 / 87 % était daté de juillet 2024, puis redaté juillet 2025 avec les mêmes résultats.
  - Le nombre de clients passe de 20 000 à 100 000, puis ne bouge plus.
- Où : § 1 point 2, § 15.1, § 15.3. Étiquette : [constaté].
- Preuves : `TAR:reseau/wayback/pdp2_20250419.html`, `w_20250301121207.html`, `w_20250408171150.html`, `pdp_20251012.html`, `w_20251031190852.html`, `w_20260123224419.html`, `page_histoire_20250828.html` ; `P/soya/pdp3.html`, `P/soya/home.html`.
- Re-vérifier : dans le dépôt, chercher « juillet 2024 », « juillet 2025 », « 20 000 », « 100 000 », « Richard. S » ; en local, relire l'accueil et la fiche actuels.
- Réfuté si : les textes ne correspondent pas.

**27. [D] Satisfaction récente réelle du 3.0 : 3,73/5, avec 26 % d'avis à 1-2★** (133 avis Loox horodatés du 01/07 au 25/09/2026). Environ 7 avis négatifs sur 10 portent sur le produit.
- Où : § 1 point 1, § 19.4, § 19.6. Étiquette : [constaté].
- Preuves : `P2/avis/loox_reviews.json`, `P2/avis/themes_out.txt`.
- Re-vérifier : recalculer avec et sans le doublon ; lire les 35 avis à 1-2★ ; en local, trier le widget Loox du 3.0 par date.
- Réfuté si : la distribution diffère.

**28. [D] Délai de livraison réel : médiane de 13 jours** de la commande à la réception, pour 1 + 3 à 6 jours promis ; express payé non tenu dans au moins 6 cas.
- Où : § 1 point 8, § 18.8, § 19.8.
- Étiquette : [déduit] d'avis, sur un échantillon surtout négatif (33-34 cas).
- Preuves : `P2/avis/delais_extraits.json`, `P2/avis/avis_classes.tsv`, `P/soya/pol/shipping-policy.txt`.
- Re-vérifier : relire les 34 phrases ; calculer la médiane séparément pour les avis 4-5★ et 1-2★ ; relire la politique actuelle.
- Nuancé si : les avis positifs donnent une médiane nettement plus courte. Les 13 jours ne décriraient alors que les mécontents.

**29. [D] Remboursements et retours.**
- Contenu : attente médiane de 60 jours (44 cas, dont 37 encore en attente au moment de l'avis) ; retour payé 15 à 17,39 € malgré « sans frais » ; au moins 7 clients remboursés après un avis négatif ; 24 réponses Trustpilot identiques.
- Où : § 1 point 8, § 19.9, § 19.10.
- Étiquette : [déduit] des avis ; politiques [constaté].
- Preuves : `P2/avis/rembours_cure.json`, `P/soya/pol/refund-policy.txt`, `shipping-policy.txt`.
- Re-vérifier en local : capturer les politiques actuelles (« sans frais », « emballage d'origine », délai) ; relire les 44 cas.
- Réfuté si : les politiques ont changé, ou si les cas sont mal extraits.

**30. [A] Pas de CGV, pas de rétractation, pas de garantie légale, pas de médiateur.** L'éditeur est « soya-paris.com », domicilié chez un agent enregistré.
- Où : § 1 point 9, § 2.2, § 11 lignes 1 à 5. Étiquette : [constaté] au 25/09/2026.
- Preuves : `P/soya/pol/*.txt`, `P/soya/pol/terms-of-sale.html`.
- Re-vérifier en local : `/policies/terms-of-sale`, `/policies/legal-notice`, `/policies/refund-policy`, `/policies/contact-information` et les liens du pied de page ; chercher « rétractation », « 14 jours », « garantie légale », « médiateur » ; capture datée.
- Réfuté si : les pages ont été complétées depuis.

**31. [A] Le mot « soldes » hors période légale, et un faux déstockage.**
- Contenu : « SOLDES D'ÉTÉ » les 15-31/08/2025 et les 03 et 24/08/2026 ; « DESTOCKAGE TOTAL » du 2.0 le 28/10/2025, alors qu'il se vend encore à 130-250 unités par jour.
- Où : § 1 point 5, § 11 lignes 16-17, § 16.8 bis.
- Étiquette : [constaté] pour les captures. La fin légale 2025 n'est pas vérifiée ; la « prolongation » 2026 est à vérifier.
- Preuves : `P2/pub/contre/wayback_extraits.txt`, `TAR:ventes/wayback/p20_20250815.html`, `p20_20250826.html`.
- Re-vérifier en local : dates officielles des soldes d'été 2025 et 2026 (economie.gouv.fr, arrêtés sur Légifrance, dates de la Corse).
- Réfuté si : la période légale couvrait ces dates.

**32. [A] Rareté écrite en dur.** « 89 % du stock déjà écoulé » (`width:89%`), « quelques exemplaires », « il y a quelques secondes » ; 78 % sur le 2.0.
- Où : § 1 point 6. Étiquette : [constaté].
- Preuves : `P/soya/pdp3.html` l. 2583 et 2588, blocs `liquid_JrVWqc` et `liquid_JwXkcr` ; `P/soya/web/p_oreiller-soya-2-0.html`.
- Re-vérifier en local : code source et 3 rechargements espacés.
- Réfuté si : la barre varie avec le stock.
- Point connexe : le passage de `inventoryManagement` de `"shopify"` (07/09) à `null` (25/09) peut venir d'un champ d'API déprécié, pas d'un réglage modifié (voir le n° 1).

**33. [A] La popup « 60 % » change d'objet.** Elle promet 60 % de réduction puis l'applique à un « Oreiller Lombaire » (en image, un coussin de genoux) proposé de toute façon à tous ; case SMS « Oui, c'est mon vrai numéro ».
- Où : § 1 point 12, § 8.4. Étiquette : [constaté] (JSON du formulaire).
- Preuves : `P/mkt/kl_v7.json`, `P/soya-anim/klaviyo-full-forms.json`, `P/mkt/kaching_popup.json`.
- Re-vérifier en local : fenêtre privée, attendre 12 s, capturer chaque écran **sans rien saisir** (s'arrêter au champ e-mail). Relire le JSON public `https://fast.a.klaviyo.com/forms/api/v7/full-forms?company_id=XuYmmR`.
- Réfuté si : le parcours a changé.

**34. [D] Le volume se fait en packs.**
- Contenu : Duo à 49,45 € l'oreiller ; Famille à 34,98 € depuis le 03/08/2026 ; sur le 2.0, au plus 80 % des oreillers partent en packs.
- Où : § 1 point 3, § 17.4, § 17.5.
- Étiquette : [constaté] pour la configuration datée, [déduit] pour la part des packs.
- Preuves : `TAR:ventes/wayback/p30_20260630.html` ; `p30_20260803` absent du tar (passer par le CDX) ; `P2/ventes/kaching_pdp3.json`.
- Re-vérifier : dates d'apparition des packs. Mesure indépendante : dans `P2/avis/avis_classes.tsv`, compter les avis qui parlent de « 2 oreillers », « deux », « 4 oreillers », « pack ».
- Réfuté si : les avis décrivent surtout des achats à l'unité.

**35. [A+D] Sourcing et marges de Soya.**
- Contenu :
  - Le 3.0 est un modèle catalogue chinois ; candidat : Shenzhen Jintongyuan, 6,90 à 10,20 $.
  - Coût rendu client de 13 à 25 €.
  - Marge de l'offre 1x de 22,75 à 41,85 € (TVA reversée) ; point mort à un CAC de 22,8 à 41,9 €.
- Où : § 0, § 1 point 11, § 18.2 à § 18.6. Étiquette : [indice] et [déduit].
- Preuves : `P2/sourcing/marge.py` → `marge_out.txt`, `P2/sourcing/board_forme.jpg`, `board_details.jpg`, `TAR:sourcing/web/*made-in-china*.html`.
- Re-vérifier en local :
  - Google Lens sur 3 packshots du 3.0 et sur le visuel « 2 hauteurs ».
  - AliExpress, Temu, Amazon.fr (« oreiller papillon mémoire de forme deux hauteurs ») : prix livré en France, délais, hauteurs annoncées.
  - Relancer `marge.py`.
- Réfuté si : le même oreiller est vendu au détail moins de 13 € livré, ou si Soya a déposé ce modèle.

**36. [A] Envoi depuis la Chine.** ParcelPanel contient `sensitive_world: "China,Aliexpress,Chinese cities"`, masque le transporteur, et des avis parlent d'un colis « arrivé de Chine » en 10 à 23 jours.
- Où : § 18.8. Étiquette : [indice].
- Preuves : `P/mkt/pp.html`.
- Re-vérifier en local :
  - Code source de la page de suivi ParcelPanel (URL dans `P/mkt/pp.html`), sans saisir de numéro.
  - **Calibration** : même lecture sur 2 ou 3 autres boutiques équipées de ParcelPanel.
  - Documentation : docs.parcelpanel.com/shopify/getting-started/dropshipping/.
- Réfuté si : la liste figure par défaut chez des marchands qui n'activent pas le mode dropshipping.

**37. [D] Produits de Somnila face à ceux de Soya.**
- Contenu :
  - Le Neck 01 et le Soya 3.0 ne sortent pas du même moule.
  - Le Lounge 01 (54,90 €) serait le même objet que le « Coussin ergonomique avec tête de lit » de Soya (42,90 €).
  - Le packshot « Mask 01 Cloud » de Somnila montre un oreiller.
- Où : § 0, § 1 point 11, § 13.6, § 18.1, § 18.2, § 18.5.
- Étiquette : [déduit] ; [indice fort] pour le Lounge ; [constaté] pour le masque.
- Preuves :
  - `P2/contre_sourcing/board_lecture.jpg`, `board_nuage_neck.jpg`, `board_nuage_enfant.jpg`, `neck01_cn.jpg` ;
  - `B/images/source/03-masque/masque_blanc_face_04.jpg`, `B/images/shopify/somnila_mask-01_packshot-cloud-2_1x1_v1.jpg` ;
  - `B/PRODUCTS.csv` : le Neck 01 y est désigné comme un modèle « Derila ».
- Re-vérifier en local : ouvrir les planches ; Google Lens sur le coussin Soya et sur les photos fournisseur du Lounge 01 ; vérifier si le packshot du masque est en ligne dans la boutique Somnila.
- Réfuté si : Lens renvoie des annonces différentes. Confirmé si c'est la même annonce fournisseur.

**38. [D] Saisonnalité : pics en janvier-février (2.0 à 254 par jour) et en septembre (3.0 à 461 par jour).** D'où la recommandation de concentrer le budget sur ces mois.
- Où : § 13.7, § 17.5.
- Étiquette : [déduit] des compteurs d'un vendeur français, calés sur le calendrier des soldes et des French Days.
- Preuves : `P2/ventes/rythmes_wayback.tsv`.
- Re-vérifier : les pics coïncident-ils avec les soldes d'hiver et les French Days ? Pour Somnila, consulter Google Trends aux États-Unis (`https://trends.google.com/trends/explore?geo=US&q=cervical%20pillow`, 5 ans).
- Réfuté pour Somnila si : le profil américain est différent (Black Friday, Cyber Monday, Prime Day).

**39. [A] Consentement : les pixels se chargent sans interaction.** Meta, TikTok, Google Ads, Pinterest et Snap partent 2,1 à 3,0 s après l'arrivée, mais la mesure a été faite depuis les États-Unis.
- Où : § 11 ligne 14, § 14. Étiquette : [non vérifié] pour un visiteur français.
- Preuves : `P/soya-tech/`.
- Re-vérifier en local : fenêtre privée, DevTools onglet Réseau, filtre `facebook.com/tr|analytics.tiktok|googleadservices|doubleclick|sc-static|ct.pinterest`, avant tout clic sur la bannière ; exporter le HAR ; relever le texte et les boutons de la bannière.
- Réfuté si : aucun appel ne part avant le consentement.

**40. [A] Clones.** Deux grappes de boutiques tierces sans identifiant commun avec Soya :
- grappe A : Wyoming, dollars, commentaires en portugais ;
- grappe B : France, Soya 3.0 à 49,90 €, paiement hors de Shopify.
- Où : § 1 point 9, § 15.9. Étiquette : [constaté] ; « tiers » [déduit].
- Preuves : `TAR:reseau/domaines/b_*.html`, `TAR:reseau/home_soyaparisoreillerergonomique.com.html`, `P2/reseau/liens.json`.
- Re-vérifier : chercher les identifiants de Soya dans les pages des clones. En local, ouvrir seulement l'accueil de soyaparisfrance.com, sans aucun clic vers le paiement.
- Réfuté si : un identifiant publicitaire commun apparaît.

**41. [D] Pas de rétention.** Ni fidélité, ni parrainage, ni abonnement ; la housse est le seul rachat ; les flux e-mail et SMS n'ont pas été observés.
- Où : § 8.6, § 8.8.
- Étiquette : [constaté] pour les applications détectées ; [non observé] pour les e-mails.
- Preuves : `P/soya/home.html`.
- Re-vérifier en local : chercher les newsletters archivées publiquement (`https://milled.com/search?q=soya%20paris`) sans s'inscrire ; relire la liste des scripts d'applications.
- Réfuté si : des e-mails de fidélité ou de parrainage apparaissent.

**42. [A] Fiche très lourde.** La fiche 3.0 transfère 27,48 Mo compressés sur mobile avant tout défilement, dont 22,34 Mo de SVG exportés de Canva.
- Où : § 1 point 13, § 10.2. Étiquette : [constaté], mesuré depuis un centre de données.
- Preuves : `P/soya-tech/net-pdp3-m.json`, `svg_compressed.txt`, `P/soya/svg_sizes.txt`.
- Re-vérifier en local : DevTools en émulation iPhone, cache désactivé, total transféré ; PageSpeed Insights (pagespeed.web.dev).
- Réfuté si : le poids a changé.

---

## (b) Points faibles de méthode repérés

### B1. Biais d'ensemble
- **Contre-vérification non indépendante.** Même modèle, même session, même jour, deux à trois heures après la collecte. Au premier passage, 47 constats sur 85 (55 %) ont dû être corrigés : le taux d'erreur de base est élevé. D.3 n'a rouvert que 4 affirmations, et en a corrigé une. Le chapitre 20 n'a pas été contre-vérifié. La Partie I n'a été échantillonnée que sur 17 affirmations (Annexe D).
- **Des sources lues par un modèle (WebFetch), donc potentiellement reformulées.** Toute citation entre guillemets venant de ces sources doit être recopiée depuis la page réelle. Sont concernés :
  - les textes d'annonces Facebook (§ 16.4) ;
  - SimilarWeb, OpenCorporates, une partie de Trustpilot (deux citations introuvables à la relecture, § 18.10) ;
  - Accio (pages générées par une IA d'Alibaba) ;
  - tonlexing (tarifs express), Davinci, franceverif.
- **WebSearch passe par des serveurs américains.** Tout le § 17.8 (« 0 sur 19 ») en dépend.
- **Collecte depuis une IP américaine.** Mises en page mesurées sur des pages en dollars, bannière de cookies jamais vue, pixels relevés depuis l'edge IAD.
- **Durée d'observation courte.** Une seule journée de relevés directs (13 h 37 à environ 15 h). Aucune capture Wayback entre le 20/05 et le 15/08/2025.
- **Échantillons d'avis biaisés vers le négatif.** Les délais de livraison et de remboursement sont pourtant présentés comme des faits généraux en tête de dossier : § 1 ajouts v2 point 2 (« Soya ne tient ni ses délais… ni ses remboursements ») et § 13.5.
- **Des preuves hors du dépôt.** `hr_avis_comments.jpg`, les vidéos et 27 captures Wayback sont restées dans le cloud : certaines affirmations ne se re-vérifient qu'en recollectant.
- **Une auto-évaluation qui se protège.** Les § 14.1, § 16.13, § 17.11, § 18.10 et § 19.15 concluent qu'une session locale « ne ferait pas mieux » et qu'il est « inutile de refaire l'analyse ». Cette conclusion est à écarter : un taux de correction de 55 % justifie une relecture complète.

### B2. Compteurs et chiffre d'affaires : calculs à refaire
- **Le mécanisme n'est pas établi.**
  - Les 8 variantes de la fiche 3.0 sont à `inventoryManagement: null`, et les compteurs baissent quand même.
  - La housse 2.0 était en `deny` jusqu'au 07/09/2026 avec un compteur autour de -38 000 à -41 000. C'est incompatible avec un stock suivi qui refuse la vente à découvert.
  - Deux explications possibles : soit Shopify décrémente aussi les articles non suivis (à documenter), soit le champ lu est déprécié dans l'API. Dans le second cas, l'argument « suivi de stock désactivé le 25/09 » (§ 1 point 6, § 17.2) tombe aussi.
- **Les salves** (+71 unités en 43 min, puis 0 pendant 44 min) sont expliquées par un cache ou un traitement par lots. Il manque une piste : des commandes créées par API depuis un paiement externe ou une application, qui contournent le contrôle de stock. Le test du n° 12 tranche.
- **Des surestimations non chiffrées.** Annulations non remises en stock, réexpéditions gratuites, commandes impayées ou annulées : ces effets surestiment les ventes. Seul l'effet inverse (réassorts) est chiffré.
- « **Soya n'a pas d'intérêt à manipuler les compteurs** » (§ 17.12) est un argument faible : les compteurs sont dans le code public et une application peut les écrire.
- **Incohérence non expliquée** d'octobre à décembre 2025 : la housse 2.0 baisse de 2 161 unités, l'oreiller 2.0 de 1 367.
- **Contradiction sur le « hors pic ».** Le § 16.9 et le § 13.7 présentent 15 à 26 k€ par jour comme « hors pic ». Or le scénario B (8 semaines, du 03/08 au 26/09) contient la période du 07 au 26/09 à 461 oreillers par jour. Seul le scénario A (15,2 à 20,1 k€ par jour) est hors pic.
- **Prix moyens** (§ 17.5, `scenarios.py`). L'arithmétique est juste : 38,47 / 47,75 / 55,59 € pour le 3.0 et 37,96 / 42,95 / 47,94 € pour le 2.0. Mais :
  1. Le pack de 4 du 2.0 (32,48 € l'oreiller) n'existe que depuis le 25/09/2026 environ. Du 20/04 au 20/09, le pack était de 3 oreillers à 127,90 € (42,63 € l'oreiller) : la borne basse du 2.0 est trop basse sur presque toute la fenêtre.
  2. Le prix plancher de la housse 3.0 (14,32 €) est incompatible avec le scénario « 90 % en Famille », où chaque housse vaut 7,45 € (§ 18.6).
  3. La part de 20 % d'oreillers vendus seuls est transposée du 2.0 au 3.0 sans mesure.
  4. « 15 autres articles par jour à 35 € » est arbitraire.
  5. La TVA à 20 % est retirée de 100 % du CA, alors qu'environ 10 % du trafic est hors de France (Suisse comprise) et que `taxable: false` laisse penser que la TVA n'est peut-être pas collectée.
  6. Le taux de remboursement de 5 à 15 % est tiré de la part d'avis 1★.
- **Cumul sur 342 jours.** Le recalcul contre-vérifié donne 4,04 à 4,96 M€, mais le script de l'enquête (`ca_modele.py`) donnait 3,0 à 3,8 M€. Le « au moins 4 M€ » dépend du choix entre « baisses observées » et « compteur actuel ».
- **Trois chiffres pour un même ratio housses / oreillers du 3.0 :**
  - « 41 % en cumul » (§ 1 point 7, § 8.8, § 18.1, § 18.7) = 3 948 / 9 719, sur des compteurs nets de réassorts, que le § 18.7 lui-même juge « non interprétables » ;
  - 9 889 / 28 943 = 34 % sur les baisses observées (§ 17.5) ;
  - 70 à 72 % en septembre.
- **Au § 17.10, « 160 à 460 oreillers 3.0 par jour » mélange deux choses** : 160 est un total sur 13 h 37, pas un rythme quotidien (le rythme d'août est de 164 par jour).
- **Recoupement circulaire avec SimilarWeb.** La conversion de 1,1 à 1,8 % repose sur les commandes du même modèle, et SimilarWeb est très imprécis sous 500 k visites par mois.
- **Coussin lombaire.** « 20 à 40 % des commandes » suppose un coussin par commande. Le dossier en donne aussi deux autres lectures : 12 % par oreiller (§ 18.7) et 14 % dans l'illustration du § 18.6.
- **Stock réel et délais : un lien non exploré.**
  - 28 943 baisses observées pour un compteur 3.0 à -9 879, cela fait environ 19 000 unités de réassort sous politique `deny` jusqu'au 30/06/2026. Soya gère donc un vrai stock quelque part, ce qui nuance « l'envoi direct depuis la Chine ».
  - Le passage à `continue` (vente à découvert) le 30/06 coïncide avec la hausse des plaintes de délai en août et septembre.

### B3. Marges et CAC : calculs à refaire
- **Point mort de Somnila à 27,43 €** (§ 18.9). L'arithmétique est juste sur les hypothèses de PRIX.md. À refaire :
  1. **Frais de paiement.** La boutique Somnila facture depuis Albuquerque (§ 18.11 S15) : les cartes européennes y sont des cartes internationales, avec en plus une conversion de devise si les versements se font en dollars (vérifier shopify.com/pricing).
  2. **Provision retours** à calculer sur le HT (2,91 €), pas sur le TTC (3,50 €).
  3. **Droit européen de 3 €** : un ou deux par colis selon la catégorie de la housse.
  4. **IOSS** : un vendeur hors UE a besoin d'un intermédiaire, qui a un coût.
  5. **Essai « sans renvoi »** : son coût n'est pas un simple 5 % du prix.
  6. **Change** à 1,159 $ pour 1 €.
- **Exemple à vérifier :** 58,25 − 25 − 4,07 (environ 5,4 % + 0,30 €) − 2,91 − 3 = 23,27 €. Le point mort serait donc d'environ 23 €, et non 27,43 €.
- **Le marché américain, prioritaire, n'est pas chiffré.** 79,99 $ hors taxe de vente, moins 28,98 $ de coût, 2,62 $ de frais et 4 $ de retours : environ 44 $ avant droits et CAC. À établir :
  - les droits : taux de base HTS 9404.90, éventuelles surtaxes (section 301, décrets IEEPA et leur statut en 2026), fin du *de minimis* par le décret du 30/07/2025. Vérifier sur hts.usitc.gov et cbp.gov ;
  - qui paie ces droits (DDP ou DDU), sachant que la politique de Somnila promet de rembourser les frais demandés à la livraison.
- **Royaume-Uni, Canada, Australie : non traités.** TVA britannique à collecter sous 135 £ ; TPS/TVH ; GST australienne sur les importations de faible valeur.
- **Soya :**
  - Le scénario central à 19 € est inférieur à ses propres données (20,10 à 23,80 €).
  - Les frais UK « International cards » ignorent la conversion GBP / EUR.
  - TVA reversée ou non : c'est l'hypothèse qui pèse le plus (+11,65 € par commande 1x), et elle n'est pas tranchée.
- **Housse en ajout.** La fourchette « 4,71 à 9,25 € » n'est pas le vrai pire cas. Coût haut + droit de 3 € + frais hauts donne 12,42 − 4 − 3 − 0,69 − 1,49 ≈ 3,24 €.
- **Famille chez Kaching.** La configuration est lue comme 14,90 € par ligne de 2 housses, soit 169,70 €. Si le montant s'applique par unité, le panier monte à 199,50 € : le test panier tranche.

### B4. Trustpilot, Loox et voix du client
- **Le sens de « BasicLink »** n'est appuyé que par un blog tiers ; il faut la documentation Trustpilot.
- **Les disparitions** sont calculées par différence : total du 15/03/2026 moins les mois de septembre 2025 à mars 2026 de la page transparence. Ce calcul est sensible :
  - au type de date utilisé (publication, expérience ou mise à jour) ;
  - aux avis modifiés (note ou date) ;
  - aux retraits par Trustpilot ou par les auteurs.
  - L'échantillon rouvert ne compte que 21 avis, et un avis 1★ a lui aussi disparu.
- **Autre origine possible des avis importés dans Loox** : l'import depuis AliExpress ou Amazon, à tester via les phrases répétées.
- **Contradiction au § 19.4.** Il parle de « 814 avis antérieurs au 02/04/2025, date d'ouverture la plus ancienne connue de la boutique ». Or le § 15.4 montre le domaine servi par l'opérateur depuis le 05/09/2024. Seuls les 494 avis d'avant cette date sont « impossibles ».
- **Précision limitée** : thèmes repérés par motifs automatiques (plafonds, à 5-7 points près), heures Trustpilot à 2 h près, 3,73/5 calculé sur n = 133, « tirage au sort » rapporté par 3 clients seulement.

### B5. Réseau et identité
- **Hypothèses non documentées par Shopify** : ordre des identifiants de boutique = ordre de création ; rang de thème `t/N` ; listes h1 à h5 = domaines rattachés (plafonnées à 5). La dernière est à calibrer sur la boutique Somnila.
- **« 5 boutiques en 13 mois »** : du 05/09/2024 au 28/10/2025, cela fait plutôt 13,8 mois.
- **FREYJA ↔ Soya.** Une boutique peut être cédée. L'argument « le vendeur aurait retiré son domaine » est plausible, mais pas prouvé.
- **« 16 versions du thème en 17 mois, chacune avec son événement ».** Le 16 est le numéro inscrit dans le nom (« V16 ») ; environ 11 versions ont été observées, et la numérotation court sur deux boutiques.
- **« Presque toujours “fin aujourd'hui à 00H” »** (§ 1 point 5, § 16.1). Dans le tableau du § 16.8 bis, cette mention n'apparaît dans le titre que sur environ 6 captures sur 13 ; le reste repose sur le minuteur, affiché séparément.
- **Trou principal du chapitre 15** : aucune recherche dans les sources qui nomment des personnes (INPI, registre du Wyoming, champs DSA « payeur » et « bénéficiaire » de Meta, annonceur vérifié Google).
- **« Page Facebook créée au plus tard en 2024 »** est déduit du texte « Élu 2024 », ce qui est faible ; la transparence de la page donne la vraie date.

### B6. Publicité, marketing et avatar
- **Déductions faibles.**
  - Le statut publicitaire des 17 vidéos est déduit de leurs titres.
  - « Diffusées au plus tard fin 2024 » est déduit du mot « 2024 » dans un texte.
  - « 1 réaction pour 100 affichages » est une hypothèse.
  - Le lieu de tournage est déduit d'une prise électrique : sans enjeu.
- **Angles morts marketing jamais couverts :**
  - pages d'atterrissage des annonces (publireportages ?) ;
  - durée de vie des annonces (créations gagnantes) ;
  - ciblage et couverture européens (DSA) ;
  - Shopping payant, YouTube, Pinterest ;
  - e-mails archivés publiquement ;
  - offres après paiement (AfterSell) ;
  - code BACK20 ;
  - affiliation (oreillerpillow.com et `aff_id=71241`, écartés vite).
- **Un avatar sans données d'audience.** Il repose sur des visuels, un quiz et le témoignage « Christine R., 41 ans », dont le dossier met lui-même la sincérité en doute. Il contredit l'avatar de Somnila (`build/design-v4/avatar-somnila.html`).

### B7. Utilité pour Somnila : le dossier regarde un autre marché
- **Le dossier raisonne pour la France** : euros, marché français, Code de la consommation. Somnila, c'est une boutique 100 % anglaise, les États-Unis d'abord (`B/HANDOFF.md` l. 51 ; `B/PRODUCTS.csv` : 79,99 $, 59,99 £, 108,99 CA$, 120,99 AU$).
- **Des actions du § 13.4 inapplicables telles quelles :**
  - H1 et prix en français (« Neck 01 — oreiller à mémoire de forme… », « 69,90 € ») ;
  - « CGV françaises » ;
  - consentement SMS en français avec « STOP » ;
  - comparatifs sleeps.fr, presse-citron, meilleurs.fr ;
  - dépôt de marque INPI et EUIPO sans USPTO ;
  - calendrier soldes et French Days (§ 13.7).
- **Le cadre juridique des marchés de Somnila est absent** (à vérifier) :
  - États-Unis : FTC 16 CFR Part 465 (avis et témoignages, en vigueur depuis le 21/10/2024) ; 16 CFR 255 ; section 5 du FTC Act pour l'urgence et les prix de référence ; Health Products Compliance Guidance (2022) ; définition du dispositif médical par la FDA (21 USC 321(h)) ; Californie : Bus. & Prof. Code 17501 et SB 478.
  - Royaume-Uni : DMCC Act 2024 (faux avis interdits depuis le 06/04/2025, amendes de la CMA jusqu'à 10 % du chiffre d'affaires mondial).
  - Canada : Loi sur la concurrence (prix habituels, prix partiels).
  - Australie : Australian Consumer Law.
- **Concurrent de référence manquant.** Le devis désigne le Neck 01 comme un modèle « Derila » et le Contour 01 comme un « Cloudii » (`B/PRODUCTS.csv`). Derila (environ 1,4 M de visites, § 17.7) n'est pas analysé ; aux États-Unis, Soya n'est pas le concurrent pertinent.
- **Ce qui se transpose tel quel :**
  - transparence (origine, délai de la commande à la porte, transporteur) ;
  - avis sans filtre, pas de case cochée d'avance, prix Duo permanent ;
  - vidéos 9:16 factuelles, Merchant Center gratuit, protection de la marque ;
  - corrections du packshot Mask 01 et du prix du Lounge 01.

### B8. Dates douteuses ou à vérifier
- **Calendrier promotionnel :**
  - French Days 2026 (07-14/09) ; fenêtre d'origine du minuteur, 17-21/10/2025, qui n'est pas une période French Days.
  - Fin des soldes d'été : 22/07/2025 (non vérifiée) ; 2026, « 28/07 après prolongation » ; dates de la Corse.
- **Droits et taxes :**
  - Droit européen de 3 € (01/07/2026 au 01/07/2028) ; frais de gestion de 2 € (novembre 2026) ; taxe française de 2 € (mars 2026, suspendue au 01/07/2026).
  - États-Unis : fin du *de minimis* au 29/08/2025 ; « Executive Order 14388 du 20/02/2026 » ; règles CBP 2026-12669 et 2026-12670 (24/06/2026).
- **Textes et règles de plateformes :** règlement 2024/3228 (fermeture de la plateforme européenne de règlement des litiges au 20/07/2025) ; règles Trustpilot « feb-2026 ».
- **Dates internes au dossier :**
  - « 13 mois » pour 5 boutiques, plutôt 14.
  - Avance des témoignages : « cinq mois » au § 1 (ancre au 29/09/2025) contre « six mois et demi » au § 15.1 (ancre au 04/11/2025).
  - Date de création de la boutique actuelle déduite de la collection « frontpage » : c'est un indice.
  - Dates Instagram déduites des codes courts.
  - Délai médian : le § 18.9 point 9 garde 12 jours alors que la rédaction retient 13.

### B9. Articles de loi à vérifier sur Légifrance

**Code de la consommation**
- **L121-4** : numérotation en vigueur des 7° (disponibilité limitée), 16° (guérison), 27° et 28° (avis). Le lien LEGIARTI000044563107 renvoie à une version de 2022 : chercher les versions ultérieures. « Soulager » relève-t-il du 16° (« guérir des maladies, dysfonctionnements ou malformations ») ou seulement de L121-2 ?
- **L112-1-1** : règle des 30 jours, exceptions, article de sanction, cas d'un prix barré jamais pratiqué.
- **L111-7-2, D111-16 et D111-17** : un marchand qui affiche des avis Loox est-il visé ?
- **L121-17, L132-22** (amende de 3 000 / 15 000 €), directive 2011/83 article 22.
- **L221-5, L221-18, L221-20, L221-23, L221-24.** L221-23 met les frais de retour à la charge du professionnel s'il n'a pas informé le client. Arrêt CJUE C-681/17 (slewo).
- **L217-3 et suivants.** L241-5 est-il bien l'article qui écarte les clauses limitant la garantie ?
- **Autres articles cités :** L132-2, L122-1, L216-1, L616-1 / R616-1.

**Code de commerce**
- **L310-3** : définition des soldes et interdiction du mot hors période (II) ; application à un vendeur établi hors de France ; sanction à L310-5.

**Autres textes**
- **LCEN, « article 1-1 (rédaction loi SREN) »** : vérifier le numéro. L'article 19 LCEN, sur l'identification du vendeur en ligne, est le plus directement applicable et n'est pas cité.
- **RGPD article 9.** L'exception de l'article 9.2.e (données manifestement rendues publiques par la personne) peut s'appliquer ; voir aussi les articles 5.1.b, 14 et 27. Le « risque élevé » est à nuancer.
- **Divers :** CPCE L34-5, loi Informatique et Libertés article 82, règlement (UE) 2017/745 article 2, règlement Rome I article 6 (loi applicable à un vendeur étranger qui vise la France).

### B10. Risque pour Somnila elle-même
- **Le dépôt GitHub IsaacPolignac/shopify est public.** Le dossier accuse nommément une entreprise (faux avis, pratiques trompeuses) et cite des clients par leur nom avec leurs problèmes de santé (§ 19.7, par exemple « mes douleurs cervicales ce sont aggravées », « Professeur Haddioui »).
- **Deux risques** : diffamation ou dénigrement, et RGPD (données de santé de personnes nommées), c'est-à-dire le reproche même fait à Soya au § 16.5.
- **À signaler en priorité à l'utilisateur**, avant tout nouveau push : rendre le dépôt privé ou anonymiser le dossier.

---

## (c) Grille de notation par chapitre (à remplir en local)

**Barème (1 à 5)**
- **F, fiabilité :**
  - 5 : au moins 90 % des affirmations échantillonnées sont confirmées sur preuve brute ou en direct, et les étiquettes sont justes.
  - 4 : 75 à 89 %.
  - 3 : 60 à 74 %, ou une erreur à fort enjeu.
  - 2 : 40 à 59 %.
  - 1 : moins de 40 %, ou une affirmation centrale réfutée.
- **C, complétude :**
  - 5 : toutes les sources accessibles en local sont exploitées.
  - 3 : les angles morts sont repérés mais pas comblés.
  - 1 : la question principale reste sans réponse.
- **U, utilité pour Somnila :**
  - 5 : les décisions s'appliquent directement aux marchés US, CA, UK, UE et AU et à une boutique anglaise.
  - 3 : applicable à l'UE seulement, ou après adaptation.
  - 1 : sans conséquence pour Somnila.

**Règles de notation**
- Échantillon minimal : 5 affirmations par chapitre, dont toutes celles de la liste (a) qui le concernent, la moitié tirée au hasard.
- Note globale = 0,4 F + 0,2 C + 0,4 U.
- Un chapitre avec F ≤ 2 est marqué « ne pas utiliser pour décider ».
- Verdict : Garder, Corriger, Refaire ou Retirer.

| Chapitre | F | C | U | Verdict | Contrôles minimum avant de noter | Point de vigilance |
|---|---|---|---|---|---|---|
| § 0 Fiche d'identité | | | | | Chiffres identiques à ceux des § 15 à 19 et de l'Annexe A.5 ; dates | Mêlange constats et fourchettes |
| § 1 Synthèse et conclusion | | | | | Chaque point garde-t-il l'étiquette de son chapitre source ? | « Hors pic », « 41 % », « même cliente », « 13 j / 60 j » présentés comme généraux |
| § 2 Marque (2.5 avatar) | | | | | INPI, Wyoming ; témoignages ; données d'audience Meta (DSA) | Avatar fondé sur des visuels |
| § 3 Direction artistique | | | | | Jetons de `home.html` en direct | Utilité faible : Somnila a son brand book |
| § 4 Animations | | | | | 3 mesures recoupées avec le code du thème et le § 20 | Valeurs `linear` qui viennent de la mesure |
| § 5 Accueil | | | | | 3 positions remesurées en 1440 × 900 et 390 × 844, en euros | Captures faites en dollars |
| § 6 Fiche produit | | | | | Panier réel (n° 11 et 12) ; mesures | Hauteurs de page qui incluent un widget vide |
| § 7 Catalogue et prix | | | | | `products.json` en direct ; statistiques des prix barrés recalculées | Historique des prix (n° 9) |
| § 8 Marketing et CRM (8.8 stratégie) | | | | | JSON Klaviyo en direct ; e-mails archivés ; publicités en direct | Stratégie déduite sans les bibliothèques publicitaires |
| § 9 Parcours d'achat | | | | | Parcours panier et paiement désormais testable | Parcours jamais fait en v1 et v2 |
| § 10 Technique, SEO, accessibilité | | | | | PageSpeed ; poids réel ; sitemaps | Mesures depuis un centre de données |
| § 11 Légal | | | | | Légifrance (B9) ; applicabilité ; équivalents US et UK | Cadre français uniquement |
| § 12 Forces, faiblesses, menaces | | | | | Cohérence avec la v2 | Menace 2 à refaire par marché |
| § 13 Plan d'action | | | | | Applicabilité à une boutique anglaise, États-Unis d'abord (B7) | Actions en français, INPI, saisonnalité française |
| § 14 Limites | | | | | Quelles limites la session locale lève-t-elle ? | Auto-évaluation « inutile de refaire » |
| § 15 Réseau et opérateur | | | | | n° 15, 16, 17, 40 ; calibration h1-h5 | Identité non cherchée dans les registres nominatifs |
| § 16 Publicité et réseaux | | | | | n° 13, 20 à 23, 25, 31 ; bibliothèques en direct | Textes lus par WebFetch ; budget hypothétique |
| § 17 Trafic et CA | | | | | n° 1, 18, 19, 23, 24, 34, 38 ; scripts relancés ; 7 j de relevés | Mécanisme des compteurs ; « hors pic » ; prix moyens |
| § 18 Sourcing et marges | | | | | n° 6, 7, 35 à 37 ; `marge.py` ; Google Lens ; marges US, UK, CA, AU | Point mort 27,43 € ; TVA de Soya non tranchée |
| § 19 Voix du client | | | | | n° 2, 4, 5, 27 à 29 ; recalculs ; documentation Trustpilot | Échantillons négatifs ; disparitions ; noms et santé dans un dépôt public |
| § 20 Laboratoire d'animation | | | | | 2 animations refilmées | Jamais contre-vérifié |
| Annexes A à D | | | | | A.5 identique aux chapitres ; les URL de B s'ouvrent ; D rejouée sur 5 lignes | D.2 et D.3 sont de l'auto-contrôle |

**À joindre à la grille :** pour chaque chapitre, la liste des affirmations testées, le verdict de chacune (confirmé, corrigé, réfuté, non vérifiable), la preuve nouvelle (URL, heure UTC, capture) et l'étiquette corrigée.
