# Somnila — Console de lancement

Application mono-fichier : `somnila-console.html`. HTML/CSS/JS vanilla, aucune
dépendance hormis Google Fonts. 17 vues commutées par `go()`, état en
localStorage, thème clair/sombre par variables CSS, icônes en sprite SVG.

Publiée en artefact (capacités `db` et `downloads`). Ouverte en fichier local,
elle fonctionne aussi : le stockage retombe sur localStorage et les exports
passent par une ancre `<a download>`.

## Clés de stockage
`somnila-console-checks` · `somnila-console-start` · `somnila-console-theme` ·
`somnila-console-view` · `somnila-console-log` · `somnila-console-gates`

Toutes exportables en JSON depuis le pied de la barre latérale.

## Points d'architecture

**Recherche du navigateur.** Les vues masquées portent `hidden="until-found"`,
pas `hidden`. La règle CSS locale est qualifiée
`:not([hidden="until-found" i])`, sinon elle annule le mécanisme. Un écouteur
`beforematch` réaligne fil d'Ariane, titre, `aria-current` et vue courante
quand le navigateur révèle une vue. Firefox et Safari traitent `until-found`
comme un `hidden` classique : dégradation propre.

**Impression.** `beforeprint` démasque toutes les vues et force un redessin des
graphiques avec une largeur de repli de 640 px, parce que `clientWidth` vaut 0
sur un élément masqué. `afterprint` restaure l'état exact d'avant.

**Seuils KPI.** La constante `KPI` est la source unique : la vue Seuils KPI est
rendue depuis elle, et le journal s'en sert pour colorer ses colonnes
calculées. Une seule écriture des valeurs dans le fichier.

**Jetons de contraste.** `--mute` et `--ok-tx` existent parce que `--ink-3` et
`--ok` passent sous 4,5:1 sur les fonds des nouvelles vues. Le même défaut
existe dans les vues plus anciennes : non corrigé ici pour ne pas restyler
l'application entière sans arbitrage.

## Vérification
`build/console/verif/` n'est pas versionné. Les 11 critères ont été validés par
`node --check` et par une série Playwright : until-found + beforematch,
persistance des cases et du journal, aller-retour export/import, impression
depuis une autre vue, bandeau de séquencement, navigation clavier complète,
contraste mesuré dans les deux thèmes, 360 px, et un diff prouvant qu'aucune
valeur verrouillée n'a bougé.
