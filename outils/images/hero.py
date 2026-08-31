# -*- coding: utf-8 -*-
"""Bannieres « nuageuses ».

L'etirement naif de la colonne de bord tire aussi l'ombre portee, qui devient une
bande sombre en travers du cadre. On construit donc le prolongement a partir d'un
profil vertical LISSE de la bande de bord : l'ombre, qui est une depression locale
du profil, disparait, le degrade reste.
"""
import os, random
from PIL import Image, ImageDraw, ImageFilter, ImageStat, ImageChops

D = os.path.dirname(os.path.abspath(__file__))
TARGET_BG = (219, 232, 242)

# ------------------------------------------------------------------ couleur
def whitebalance(im, strength=0.9, cap=26):
    w, h = im.size
    s = int(min(w, h) * 0.10)
    def mean_of(boxes):
        acc = [0.0, 0.0, 0.0]
        for b in boxes:
            m = ImageStat.Stat(im.crop(b)).mean[:3]
            for i in range(3):
                acc[i] += m[i] / len(boxes)
        return acc
    top = mean_of([(0, 0, s, s), (w - s, 0, w, s)])
    bot = mean_of([(0, h - s, s, h), (w - s, h - s, w, h)])
    ot = [max(-cap, min(cap, (TARGET_BG[i] - top[i]) * strength)) for i in range(3)]
    ob = [max(-cap, min(cap, (TARGET_BG[i] - bot[i]) * strength)) for i in range(3)]
    out = []
    for i, ch in enumerate(list(im.split())[:3]):
        pos, neg = Image.new("L", (1, h)), Image.new("L", (1, h))
        pp, np_ = pos.load(), neg.load()
        for y in range(h):
            o = ot[i] + (ob[i] - ot[i]) * (y / max(h - 1, 1))
            pp[0, y] = int(max(0.0, o)); np_[0, y] = int(max(0.0, -o))
        ch = ImageChops.add(ch, pos.resize((w, h)))
        ch = ImageChops.subtract(ch, neg.resize((w, h)))
        out.append(ch)
    return Image.merge("RGB", out)

# ------------------------------------------------------------------ fond
def edge_profile(im, side, band=0.035, smooth=0.22):
    """Profil vertical (1 x H) de la bande de bord, fortement lisse."""
    w, h = im.size
    bw = max(2, int(w * band))
    strip = im.crop((0, 0, bw, h)) if side == "left" else im.crop((w - bw, 0, w, h))
    prof = strip.resize((1, h), Image.BOX)          # moyenne horizontale
    k = max(3, int(h * smooth) | 1)
    tall = prof.resize((1, h * 3), Image.BILINEAR)   # marge pour le flou
    tall = tall.filter(ImageFilter.GaussianBlur(k / 3.0))
    return tall.resize((1, h), Image.BILINEAR)

def fill_side(canvas, prof, x0, x1, y, h):
    if x1 <= x0:
        return
    canvas.paste(prof.resize((x1 - x0, h), Image.BILINEAR), (x0, y))

def extend(src, W, H, anchor="right", zoom=1.0, feather=0.20, shift_y=0.0):
    sw, sh = src.size
    nh = int(H * zoom)
    nw = max(1, int(sw * nh / sh))
    im = src.resize((nw, nh), Image.LANCZOS)
    if nh > H:
        im = im.crop((0, (nh - H) // 2, nw, (nh - H) // 2 + H)); nh = H
    x = {"right": W - nw, "left": 0}.get(anchor, (W - nw) // 2)
    y = (H - nh) // 2 + int(H * shift_y)

    # 1. le fond couvre TOUTE la largeur, sinon le fondu se ferait sur du vide
    pl, pr = edge_profile(im, "left"), edge_profile(im, "right")
    bg = Image.blend(pl, pr, 0.5).resize((W, nh), Image.BILINEAR)
    canvas = Image.new("RGB", (W, H))
    canvas.paste(bg, (0, y))

    # 2. la source par-dessus, avec un fondu lateral la ou elle ne touche pas le bord
    f = max(1, int(nw * feather))
    mask = Image.new("L", (nw, nh), 255)
    md = mask.load()
    for i in range(f):
        v = int(255 * (i / f))
        for yy in range(nh):
            if x > 0:
                md[i, yy] = min(md[i, yy], v)
            if x + nw < W:
                md[nw - 1 - i, yy] = min(md[nw - 1 - i, yy], v)
    canvas.paste(im, (x, y), mask)

    if y > 0:
        canvas.paste(canvas.crop((0, y, W, y + 1)).resize((W, y)), (0, 0))
    if y + nh < H:
        canvas.paste(canvas.crop((0, y + nh - 1, W, y + nh)).resize((W, H - y - nh)), (0, y + nh))
    return canvas

def clouds(im, seed=7, n=7, opacity=28):
    W, H = im.size
    rnd = random.Random(seed)
    lay = Image.new("L", (W // 4, H // 4), 0)
    d = ImageDraw.Draw(lay)
    for _ in range(n):
        cx = rnd.uniform(0.05, 0.95) * lay.size[0]
        cy = rnd.uniform(0.05, 0.95) * lay.size[1]
        rx = rnd.uniform(0.14, 0.30) * lay.size[0]
        ry = rx * rnd.uniform(0.42, 0.72)
        d.ellipse([cx - rx, cy - ry, cx + rx, cy + ry], fill=rnd.randint(120, 255))
    lay = lay.filter(ImageFilter.GaussianBlur(lay.size[0] * 0.075))
    lay = lay.resize((W, H), Image.BICUBIC).point(lambda v: int(v * opacity / 255))
    im.paste(Image.new("RGB", (W, H), (255, 255, 255)), (0, 0), lay)
    return im

JOBS = [
    ("aplomb.png", "hero-desktop.png",   2880, 1440, "right",  1.30, 3,  26,  0.00),
    ("aplomb.png", "hero-mobile.png",    1200, 1500, "center", 0.96, 11, 20, -0.13),
    ("appui.png",  "banniere-large.png", 2880, 1100, "center", 1.55, 5,  26,  0.00),
]
for src, out, W, H, anchor, zoom, seed, op, sy in JOBS:
    im = Image.open(os.path.join(D, src)).convert("RGB")
    im = extend(im, W, H, anchor, zoom, shift_y=sy)
    im = whitebalance(im)          # apres cadrage : les coins echantillonnes sont les bons
    im = clouds(im, seed=seed, opacity=op)
    im.save(os.path.join(D, out), "PNG")
    print(out, im.size)

sheet = Image.new("RGB", (1500, 1000), (255, 255, 255))
sheet.paste(Image.open(os.path.join(D, "hero-desktop.png")).resize((1000, 500)), (0, 0))
sheet.paste(Image.open(os.path.join(D, "hero-mobile.png")).resize((400, 500)), (1050, 0))
sheet.paste(Image.open(os.path.join(D, "banniere-large.png")).resize((1000, 382)), (0, 540))
sheet.save(os.path.join(D, "check-hero4.png"), "PNG")
print("check-hero4.png")
