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

**Jetons de texte.** Trois niveaux, un seul jeton par niveau :
`--ink` (primaire), `--ink-2` (secondaire), `--ink-3` (tertiaire). Tous
mesurés au-dessus de 4,5:1 sur les quatre fonds de l'application, dans les
deux thèmes. `--mute`, qui doublonnait `--ink-3`, a été supprimé.

`--ink-2` a reculé en thème clair (#55637A → #48556B) : sans ça, l'écart avec
le tertiaire tombait à 4,0 L\*, soit un dégradé illisible. Il est maintenant
de 9,7 L\* en clair et 8,4 L\* en sombre.

**Texte sur fond teinté.** Deux jetons servent uniquement à du texte posé sur
un fond teinté, jamais à un aplat, une bordure ou un trait de graphique :
`--ok-tx` sur `--ok-bg`, `--accent-tx` sur `--accent-soft`. En thème sombre ils
valent leur jeton d'origine, qui passe déjà : seul le clair est assombri.

Les quatre familles teintées, thème clair, pire cas mesuré :
`--accent-tx` 4,74 · `--warn` 4,53 · `--bad` 4,73 · `--ok-tx` 5,56.
En sombre : 9,87 · 7,49 · 5,90 · 7,05.

Le point des pastilles utilise `background:currentColor` : il suit la couleur
du texte, par construction.

Restent sous 4,5:1 en clair, sur fond neutre donc hors du périmètre « fond
teinté » : le lien accent dans une note `n-info` (3,83:1 sur `--surface-2`) et
le compteur de liste complète posé en ligne par `refreshCounts` (4,10:1 sur
`--surface`).

## Vérification
`build/console/verif/` n'est pas versionné. Les 11 critères ont été validés par
`node --check` et par une série Playwright : until-found + beforematch,
persistance des cases et du journal, aller-retour export/import, impression
depuis une autre vue, bandeau de séquencement, navigation clavier complète,
contraste mesuré dans les deux thèmes, 360 px, et un diff prouvant qu'aucune
valeur verrouillée n'a bougé.
