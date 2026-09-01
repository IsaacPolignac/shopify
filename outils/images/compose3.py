# -*- coding: utf-8 -*-
"""Visuels produit PORTANCE, version internationale : aucun texte incruste.

Pourquoi refaire ces images : la serie precedente portait le titre, l'annotation
manuscrite et la pastille en francais dans les pixels. Six langues plus tard,
chaque visiteur voyait « Mieux dormir, des ce soir. » sur la carte produit, y
compris les deux oreillers qui partageaient la meme phrase. Le texte sort donc
de l'image et revient dans le theme, ou il est traduisible.

Ce que fait ce script, et ce qu'il ne fait pas : il recadre en 4:5 autour du
produit et egalise l'exposition des cinq prises. Il ne remplace pas le fond.
Un essai de bascule vers le bleu poudre de la marque a ete ecrit puis jete :
un oreiller blanc sur un fond creme n'est pas separable par la couleur, et le
gain applique au fond deteignait sur le sauge et sur le chair des bandelettes.
Le fond creme du studio est propre, neutre, et surtout muet dans toutes les
langues : c'est tout ce que la carte produit demande.
"""
import os
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

D = os.path.dirname(os.path.abspath(__file__))

W_OUT, H_OUT = 1638, 2048     # 4:5, le ratio « portrait » des cartes du theme
L_TARGET     = 226.0          # luminance moyenne du fond, commune aux cinq


def chroma_distance(a):
    """Distance de chroma au fond, avec un modele dependant de la luminance.

    La teinte du fond de studio n'est pas constante : plus il s'assombrit sous
    le produit, plus le creme sature. Un seuil global classait donc l'ombre
    portee comme du produit, et le cadrage se decalait. On ajuste (r, b) du fond
    bin par bin de luminance, sur les pixels que la premiere passe ecarte."""
    S = np.maximum(a.sum(2), 1.0)
    r, b = a[..., 0] / S, a[..., 2] / S
    L = a.mean(2)

    ring = np.concatenate([a[:30].reshape(-1, 3), a[-30:].reshape(-1, 3),
                           a[:, :30].reshape(-1, 3), a[:, -30:].reshape(-1, 3)])
    rs = np.maximum(ring.sum(1, keepdims=True), 1)
    med = np.median(ring[:, [0, 2]] / rs, axis=0)
    bgpix = (np.abs(r - med[0]) + np.abs(b - med[1])) < 0.045

    nb = 40
    edges = np.linspace(L.min(), L.max() + 1e-3, nb + 1)
    idx = np.clip(np.digitize(L, edges) - 1, 0, nb - 1)
    lut = np.stack([med[0] * np.ones(nb), med[1] * np.ones(nb)])
    for k in range(nb):
        m = bgpix & (idx == k)
        if m.sum() > 400:
            lut[0, k], lut[1, k] = np.median(r[m]), np.median(b[m])
    ker = np.ones(5) / 5
    lut = np.stack([np.convolve(np.pad(c, 2, mode="edge"), ker, "valid") for c in lut])
    return np.abs(r - lut[0][idx]) + np.abs(b - lut[1][idx])


def product_box(a):
    """Boite du produit, pour le cadrage seulement : la precision au pixel
    n'a aucune importance ici."""
    d = chroma_distance(a)
    m = ndimage.binary_opening(d > 0.030, np.ones((15, 15)))
    lab, n = ndimage.label(ndimage.binary_closing(m, np.ones((41, 41))))
    if n:
        sz = ndimage.sum(m, lab, range(1, n + 1))
        m = np.isin(lab, np.where(sz > m.size * 0.003)[0] + 1)
    ys, xs = np.nonzero(m)
    if not len(xs):
        h, w, _ = a.shape
        return 0, 0, w, h
    return int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())


def run(src, out, xshift=0.0, zoom=1.0):
    im = Image.open(os.path.join(D, src)).convert("RGB")
    a = np.asarray(im, dtype="float32")
    h, w, _ = a.shape
    bx0, by0, bx1, by1 = product_box(a)

    # exposition : on aligne la luminance du fond des cinq prises
    ring = np.concatenate([a[:40].reshape(-1, 3), a[:, :40].reshape(-1, 3),
                           a[:, -40:].reshape(-1, 3)])
    a = a * (L_TARGET / max(float(np.median(ring.mean(1))), 1.0))

    ch = min(h, int(round(h / zoom)))
    cw = min(w, int(round(ch * W_OUT / H_OUT)))
    cx = (bx0 + bx1) / 2 + xshift * cw
    cy = (by0 + by1) / 2
    x0 = int(round(min(max(cx - cw / 2, 0), w - cw)))
    y0 = int(round(min(max(cy - ch / 2, 0), h - ch)))

    img = Image.fromarray(a.clip(0, 255).astype("uint8")).crop((x0, y0, x0 + cw, y0 + ch))
    img = img.resize((W_OUT, H_OUT), Image.LANCZOS)
    img = img.filter(ImageFilter.UnsharpMask(radius=2.2, percent=48, threshold=3))
    img.save(os.path.join(D, out), optimize=True)
    print("%-18s %s  produit %s  cadre (%d,%d)+%dx%d" %
          (out, img.size, (bx0, by0, bx1, by1), x0, y0, cw, ch))


JOBS = [
    # xshift recadre a la main ce que la detection de chroma laisse de cote :
    # les bandelettes chair sont presque de la couleur du fond, leur boite est
    # tronquee a droite.
    ("appui-src.png",  "appui-hero.png",   0.02, 1.00),
    ("aplomb-src.png", "aplomb-hero.png",  0.00, 1.22),
    ("bsom-src.png",   "bsom-hero.png",    0.17, 1.02),
    ("bnasal-src.png", "bnasal-hero.png",  0.02, 1.10),
    ("taies-src.png",  "taies-hero.png",  -0.02, 1.00),
]

if __name__ == "__main__":
    for j in JOBS:
        run(*j)
