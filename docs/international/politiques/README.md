# Politiques de la boutique — à coller dans l'admin

La boutique n'a **qu'une seule politique** : la confidentialité, générée par
Shopify. Il manque le remboursement, la livraison, les conditions de service et
les coordonnées. Ces quatre-là s'affichent dans le pied de page du **checkout**,
pas seulement sur le site : leur absence est visible au moment le plus sensible
du parcours, et l'Union européenne les attend.

L'API refuse de les écrire : `shopPolicyUpdate` demande le scope
`write_legal_policies`, que le connecteur n'a pas. Ce n'est pas un problème de
droits sur la boutique, c'est une limite du connecteur.

**Où coller :** Admin → Paramètres → Politiques. Un champ par politique.
Shopify propose un modèle par défaut ; remplacez-le entièrement par le texte
ci-dessous plutôt que de l'éditer, les modèles Shopify contredisent nos pages.

| Fichier | Politique | Champ admin |
|---|---|---|
| `remboursement.fr.html` / `.en.html` | Remboursement | Politique de remboursement |
| `livraison.fr.html` / `.en.html` | Livraison | Politique d'expédition |
| `conditions.fr.html` / `.en.html` | Conditions de service | Conditions d'utilisation |
| `coordonnees.fr.html` / `.en.html` | Coordonnées | Coordonnées |

Les textes reprennent les pages détaillées et y renvoient : une politique de
checkout doit tenir en un écran, pas remplacer les CGV.

Chaque `[À COMPLÉTER]` doit être rempli avant publication. Un délai de
réponse annoncé et non tenu vaut mieux non annoncé.

## Après avoir collé

Les politiques deviennent traduisibles (`SHOP_POLICY`). Enregistrez les versions
anglaises avec `translationsRegister` — les six marchés ont l'anglais en langue
par défaut, une politique restée en français serait lue en français à New York.
