# Photo de couverture Neck 01 : méthode et prompt

## Version 2 (retenue) : GPT Image 2.5 Sunburst

Image : `out/neck-01_couverture_v2.jpg` (2880 × 2880), sans retouche.

- Modèle : `marketing-studio/image/sunburst` (GPT Image 2.5 Sunburst), le plus puissant du catalogue d'images Higgsfield ; `quality` max, `resolution` 4k, `aspect_ratio` 1:1.
- Références, dans l'ordre : 1) la vraie photo du produit détourée sur fond neutre ; 2) la couverture v1, pour la mise en scène.
- Comparé à GPT Image 2.5 Flare avec le même prompt : Sunburst donne un blanc plus juste et une lumière plus naturelle.
- Contrôle en pleine résolution : 7 picots (4 + 3), bouton central, maille et lin crédibles.

### Prompt (anglais)

A real photograph used as the main image of an online store product page: one white memory foam neck pillow lying on a bed of crumpled washed linen in early morning light, shot from almost directly above, square frame.

Image 1 is the exact product. Reproduce this pillow faithfully and change nothing about its design: a wide, low, cloud-shaped pillow, 62 cm wide and 42 cm deep, 11 to 13 cm high; a mirror-symmetric outline of soft rounded lobes, two identical back corner lobes with a broader central crest between them, and a broad rounded wing on each side at the base; one small fabric-covered button in a shallow dimple at the center; a thick front roll; and, at the middle of the front edge, a short rounded tongue carrying exactly seven shallow round nubs, a back row of four and a front row of three. No extra lobes, buttons, nubs, zips, tags or piping.

Image 2 shows the scene, framing and light to follow: re-photograph that scene for real, with more physical realism.

Camera: almost overhead, tilted about 15 degrees from vertical toward the front of the pillow, so the front roll and the side walls show a little thickness. Full-frame camera, 85 mm lens, f/8, ISO 800, focus on the button and the front tongue; the whole pillow is sharp and the linen at the frame edges softens very slightly.

The pillow is dense, heavy memory foam, never inflated or plush-toy-like: broad, low undulations on top, near-vertical side walls, and a flat underside that presses into the linen along its whole footprint. Its cover is white cotton jersey knit with fine parallel stitch rows that follow the curves and tighten into the button dimple, a little natural pilling, two or three small soft wrinkles near each side wing, and a slightly puckered seam running all the way around.

The linen fills the frame to all four edges: off-white with a faint cool grey tint, irregular natural folds, visible slub fibers, and small folds gathering against the base of the pillow. No headboard, bed edge, curtain, window, furniture, other pillow or prop.

Light: low dawn daylight from a large window outside the frame at the right, soft and from one direction only. One soft-edged warm band of light crosses the right lobes of the pillow and the linen beside them; the right side of every lobe is clearly brighter than its left side; the left of the pillow falls into cool, soft shade, with a soft cast shadow on the linen to the left and a thin darker contact line all along the base. The pillow reads as bright natural white in the light, never grey, yellow or blue.

Square composition: the pillow spans about 60 percent of the frame width, centered, fully in frame with linen all around it.

Rendering: a true photograph from a professional still-life photographer, natural raw-file look with gentle grading, white balance about 5200 K, fine luminance grain identical on the pillow and the linen, faint natural lens vignetting, micro-irregularities everywhere, no perfectly smooth area.

Never: people, faces, hands, text, letters, logo, watermark or label; CGI, 3D render or clay look; airbrushed or waxy surfaces; glossy plastic; a cutout or pasted-on look or a halo around the pillow; saturated or powder blue; a gradient backdrop; HDR or oversharpening.

---

## Version 1 (remplacée) : Qwen Image 3 Edit

Image : `out/neck-01_couverture_v1.jpg` (1536 × 1536, carré pour la fiche produit).

## Méthode (méta-prompt)
1. **Référence du vrai produit**, pour que l'oreiller ne soit pas inventé : photo fournisseur `build/images/source/09-oreiller-cervical/oreiller-cervical_blanc_34_51.jpg`, détourée sur fond gris neutre, car le ciel bleu saturé d'origine déteignait sur le rendu.
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
- Modèle : `alibaba/qwen-image-3/edit` ; `resolution` 2k ; `aspect_ratio` 1:1 ; `prompt_extend` false ; `enable_thinking` false ; `seed` 101.
- Script : `python3 build/images/higgsfield/generate_image.py spec.json` (clé `HF_KEY` dans `.env.local`).
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
