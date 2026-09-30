# Photo de couverture Neck 01 : méthode et prompt

Image retenue :  (1536 × 1536, carré pour la fiche produit).

## Méthode (méta-prompt)
1. **Référence du vrai produit**, pour que l'oreiller ne soit pas inventé : photo fournisseur , détourée sur fond gris neutre, car le ciel bleu saturé d'origine déteignait sur le rendu.
2. **Méta-prompt en 9 blocs** : usage et cadrage, verrou du produit, matière, décor, lumière, appareil, composition, couleur et rendu, exclusions. Il suit le brand book (aube, lin lavé, trame visible, aucun visage, aucun texte).
3. **Trois rédacteurs**, chacun sur une mise en scène, puis **un juge** qui garde et affine les deux meilleurs prompts.
4. **Première génération**, puis **deux critiques indépendants**, l'un sur le réalisme, l'autre sur la fidélité au produit et à la marque. Ils ont relevé :
   - le fond lisse en dégradé ;
   - l'oreiller sans poids ;
   - la maille plaquée ;
   - l'absence de grain.
5. **Version 2** corrigée, trois essais. Retenu : Qwen Image 3 Edit, graine 101.
6. **Retouche légère** : balance des blancs sur le lobe éclairé (≈ 236/235/232) et grain monochrome de 1,5 %. Rien d'autre n'est modifié.

## Paramètres
- Modèle :  ;  2k ;  1:1 ;  false ;  false ;  101.
- Coût : environ 0,075 $ par image (estimation de l'API).

## Prompt
Top-down real photo of this pillow on a bed. Keep its outline, lobes, size, place in the frame, one centre button in a shallow dimple, front tongue with seven nubs and seam; change nothing on its shape. Re-photograph its cover as white cotton knit with visible stitch rows, three small wrinkles near the side wings, slightly puckered seam, no smooth airbrushed shading. Its weight presses into crumpled washed linen, off-white with a faint cool blue-grey tint, filling the frame: linen gathers in small folds against its base. Low dawn light from the right lays one soft warm band across the right lobes and the linen beside them; left lobes in cool shade, soft shadow to the left, thin dark contact line all around. Bright natural white, never grey. Same focus and fine grain on pillow and linen.

## Prompt négatif
person, face, hands, text, logo, watermark, label, CGI, 3D render, clay render, airbrushed, smooth gradient shading, glossy plastic, waxy surface, cutout, pasted object, halo around object, grey pillow, yellowed fabric, saturated blue, blue sky gradient, dark blue fabric, denim, floating pillow, changed shape, extra lobes, extra buttons, extra nubs, zip, piping, two pillows, curtain, window, bed edge, headboard, furniture, props, hard shadows, dark hole, oversharpened, HDR

## Écartés
- Packshot studio à 45° (Flare) : rendu « 3D catalogue », fond lisse, oreiller en guimauve.
- Vue de trois quarts sur lin (Flare) : le lin est sorti comme du sable.
- Un second essai Qwen : le modèle était momentanément indisponible, sans frais.

## Avant publication
C'est une image générée à partir de la photo fournisseur. Vérifier sa conformité au vrai produit reçu (forme, nombre de picots, couleur), et ne pas la présenter comme une photo prise en studio si ce n'est pas le cas.
