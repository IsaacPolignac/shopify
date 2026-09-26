# Dossier de preuves — soya-paris.com (collecté le 25 septembre 2026)

Boutique Shopify, thème Impact 6.4.1 (version de thème « V16 – Version 3.0 French Days », id 205977846092).
Captures faites depuis une IP américaine (edge IAD) : certaines captures affichent des prix en USD
(conversion Shopify Markets). Les prix de référence sont en EUR dans `catalogue.json` / `products.json`.
Les captures « funnel » et les dernières pages ont été faites avec le cookie de marché France (EUR).

## Fichiers
- `catalogue.json` : 19 produits condensés (prix EUR, prix barrés, variantes, options, nb d'images, textes alternatifs, description texte).
- `products.json` (brut /products.json), `collections.json`, `sitemap.xml`, `robots.txt`.
- `home.html`, `pdp3.html` : HTML brut de l'accueil et de la fiche Oreiller Soya 3.0 (JSON-LD, hreflang, sections, avis intégrés).
- `home.headers` : en-têtes HTTP de l'accueil.
- `assets/theme.css`, `assets/theme.js`, `assets/vendor.min.js` : code du thème (animations, transitions).
- `pol/*.txt` : mentions légales (legal-notice, contact-information), terms-of-service, refund-policy, shipping-policy, privacy-policy. (`terms-of-sale` = 404.)
- `cap/<page>.json` : mesures navigateur — `info.secs` (sections : id, y, hauteur, fond, titre, texte), polices et styles calculés (h1, h2, body, bouton, header), variables CSS, `@keyframes` présents, animations actives au chargement (`anims`) et pendant le défilement (`scrollAnims` : nom|durée ms|easing|élément), nombre de requêtes, poids total et par type, domaines tiers, erreurs JS, temps de chargement.
- `cap/<page>-text.txt` : tout le texte visible. `cap/<page>-buybox.txt` : bloc d'achat (fiches produit).
- `cap/slices/*.jpg` : captures découpées. `<page>-full-NN.jpg` = page entière en tranches ; `<page>-view-<ms>.jpg` = premier écran à t = 0 / 1200 / 3500 / 6500 ms (popups, slideshow, compte à rebours).
- `cap/funnel.json` + `cap/slices/funnel-*.jpg` : fiche Soya 3.0 (haut, bouton), tiroir panier après ajout, première page du checkout (rien saisi), accueil après 12 s et après intention de sortie, et deux lectures du compte à rebours à des moments et sessions différents (timerA1, timerB, avec horodatage `now` en ms).

## Pages capturées (suffixe -d desktop 1440×900, -m mobile 390×844)
home-d, home-m, pdp3-d, pdp3-m (Oreiller Soya 3.0), enfant-d (Oreiller Soya enfant), soie-d (Draps en soie),
couette-m (Couette SoyaFresh), v1-d (Oreiller Soya 1.0), col-d, col-m (collection nos-best-sellers),
histoire-d (pages/notre-histoire), blog-d (blogs/news), contact-d.

## Faits déjà repérés (à vérifier, pas à recopier)
- Mentions légales : éditeur « soya-paris.com », siège 5830 E 2nd St, Ste 7000, Casper, Wyoming (USA).
- Applications : Kaching Bundles + Kaching Popup, AfterSell, Countdown Timer, EZ Product Image Translate, Variant Image Automator, Klaviyo, Loox ; pixels Meta, TikTok, Snapchat, Pinterest, Google Ads/GTM.
- Accueil : bandeau « FRENCH DAYS — Jusqu'à -60% sur tout le site ! » avec compte à rebours ; logos presse (Santé magazine, ELLE, Le Figaro Santé, Forbes, Marie Claire, VOGUE) ; statistiques « 96 % / 91 % / 87 % » issues d'un « questionnaire clients juillet 2025 ».
- Fiche Soya 3.0 : 40 avis intégrés dans le HTML, dont 26 portent sur « Oreiller Soya 2.0 » ; la FAQ parle du SOYA 2.0.
- Popup Klaviyo : « VOUS AVEZ OBTENU 60% DE RÉDUCTION », quiz position de sommeil, « Non merci, je n'aime pas les remises ».

## Galerie de la fiche Soya 3.0 (SVG)
- La fiche charge 39 fichiers `.svg` (liste : `svg_urls.txt`, poids réels : `svg_sizes.txt`, **35,7 Mo au total**, jusqu'à 4,7 Mo par fichier). Chaque SVG enveloppe une ou deux images PNG/JPEG en base64 (export type Canva : `zoomAndPan="magnify"`, `viewBox 0 0 396.75 396.749985`). Shopify ne peut ni les compresser ni les convertir en WebP.
- Ces SVG font planter le navigateur de capture : les captures `pdp3-*` et `funnel-*` ont été faites en remplaçant les SVG par un rectangle gris « SVG lourd (placeholder) ».
- Le vrai contenu visuel de ces 39 images : `gallery/NN.jpg` et planches `gallery/sheet-1.jpg`, `sheet-2.jpg`, `sheet-3.jpg` (numéros = ordre de `svg_urls.txt`). Les images 30–32 et 34–35 sont des masques de détourage (noir/blanc) extraits des SVG, pas des visuels.
- Constats visuels : textes incrustés (« L'OREILLER ERGONOMIQUE N°1 : RECOMMANDÉ PAR LES OSTÉOPATHES », « SOULAGEZ VOS DOULEURS », pictos « réduit l'apnée du sommeil », « réduit le reflux gastrique », « soulage le cou et le dos », « soulage les épaules »), comparatif « OREILLER CLASSIQUE ✕ / OREILLER SOYA 2.0 ✓ » réutilisé sur la fiche 3.0, mannequins (couple, femme blonde), fonds bleu nuit dégradé et blanc studio, 3 coloris (bleu, blanc, beige). Forme : oreiller « nuage » à deux hauteurs avec point central — même format que le Neck 01 de Somnila.

## Parcours d'achat et compte à rebours (cap/funnel.json, cap/funnel2.json)
- Compte à rebours du bandeau FRENCH DAYS : 00:00:39 à 21:58:21 UTC, 00:00:00 à 21:59:21 UTC, puis **23:58:56 à 22:00:05 UTC (00:00 à Paris)** dans une nouvelle session. Il vise minuit (heure de Paris) et **repart pour 24 h chaque nuit**. Même discours dans la popup Klaviyo (« L'offre se termine aujourd'hui à minuit »).
- Bloc d'achat réel de la fiche Soya 3.0 en EUR (cap/funnel.json → pdpBuy) : « Noté 4,8/5 – 15 637 avis clients » ; 1x Oreiller 69,90 € (barré 139,90 €) ; Pack Duo 2x 98,90 € (barré 279,80 €) ; Pack Famille « 3x Oreillers +1 Offert » 139,90 € (barré 559,60 €) ; add-on « +1 Housse de Rechange » 14,90 € (barré 39,90 €) ; « Plus que quelques exemplaires en stock » ; « 89% du stock déjà écoulé — Dernière mise à jour : il y a quelques secondes » ; « 30 nuits d'essai — Satisfait ou remboursé » ; « La meilleure offre de l'année ». Le prix catalogue (products.json) du Soya 3.0 est 139,90 € sans prix barré : la remise de l'offre 1x est appliquée par Kaching.
- Vidéos chargées par la fiche Soya 3.0 : `cap/videos.txt` (4 MP4 cdn.shopify.com + 1 MP4 HD 1080p 7,2 Mbit/s), bloquées pendant les captures.
- Limite : dans cet environnement automatisé, l'ajout au panier ne s'est pas enregistré (panier vide dans /cart.js) et la page /checkout répond « Request Forbidden » (protection anti-robots de Shopify). Le tiroir panier et le checkout ne sont donc pas observés : ne rien affirmer à leur sujet sans autre source.
