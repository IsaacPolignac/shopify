Mission « voix du client » SOYA PARIS — preuves brutes (26/09/2026, collecte 10:56-11:25 UTC)

loox_fetch.py / loox_fetch.log   relevé des 1 776 avis Loox publics (widget CRe3ATH2rU, https://loox.io/widget/CRe3ATH2rU/reviews/<id_produit>?...&sort=newest&page=N), 1 requête / 1,5 s, 102 pages, loox.io uniquement (aucune requête à soya-paris.com)
loox/<handle>_pNN.html           pages brutes du widget
parse_loox.py -> loox_reviews.json   1 776 avis : id, produit, nom, date (data-time, UTC), note, texte, badge « Vérifié », média
tp/tb_s{1..5}_{fr,all}.json      TrustBox Trustpilot (https://widget.trustpilot.com/trustbox-data/53aa8912dec7e10d38f59f36?businessUnitId=6708ed15508a2a56ff7d7636&locale=fr-FR&reviewLanguages=..&reviewStars=N&reviewsPerPage=100), 26/09/2026 10:59 UTC (tp/tb_date.txt) : totaux exacts + 100 derniers avis par note (81 pour 2*), avec source (BasicLink / Organic) et niveau de vérification
tb_*.json (racine)               premiers essais des 3 gabarits TrustBox (mêmes données)
wb/                              archives Wayback de fr.trustpilot.com/review/soya-paris.com : 19/08/2025, 22/08/2025 (gzip -> .dec.html), 15/03/2026 pages 1-4 + page transparency + www (JSON __NEXT_DATA__) ; wb_reviews.json = 133 avis extraits ; parse_wb.py
cdx_*.json                       index Wayback utilisé
tp/verif_urls_2026-09-26.tsv     existence en ligne (WebFetch) de 14 avis d'août 2025 : 7 avis « copiés » dans Loox => 404
tp/webfetch_2026-09-26.md        relevés WebFetch : page transparence actuelle, 24 avis avec réponse de la marque (modèle unique), page 6 des 1* (juillet 2026, résumés)
corpus.py -> tp_corpus.json      corpus Trustpilot verbatim dédoublonné : 614 avis (485 TrustBox + 129 Wayback)
themes.py -> codage.json, themes_out.txt   codage thématique par expressions régulières (liste des motifs dans themes.py)
delais2.py -> delais_extraits.json   durées de livraison citées (promis / reçu / attente) ; rembours.py -> rembours_extraits.json
avis_classes.tsv                 TOUS les avis (614 Trustpilot + 1 776 Loox) avec thèmes, prêts pour tri dans un tableur
quotes_candidates.txt            extraits par thème (lecture humaine)
