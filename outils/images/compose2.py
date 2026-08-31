# -*- coding: utf-8 -*-
"""Compositions « nuageuses » facon Pilloway : fond bleu poudre degrade,
produit en levitation, titre incruste, annotation manuscrite + fleche, pastille."""
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageStat, ImageChops
import math

D = os.path.dirname(os.path.abspath(__file__))
F = os.path.join(D, "fonts")
ACCENT = (67, 120, 154)      # #43789A  accent PORTANCE
INK    = (18, 18, 18)        # #121212
TARGET_BG = (219, 232, 242)  # bleu poudre cible, proche de #DCE8F0

# ---------------------------------------------------------------- couleur
def whitebalance(im, strength=0.9, cap=26):
    """Neutralise la dominante du fond. La derive n'est pas uniforme (rose en haut,
    bleu en bas) : on echantillonne les coins hauts et bas separement et on
    interpole la correction ligne par ligne."""
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
    off_t = [max(-cap, min(cap, (TARGET_BG[i] - top[i]) * strength)) for i in range(3)]
    off_b = [max(-cap, min(cap, (TARGET_BG[i] - bot[i]) * strength)) for i in range(3)]

    out = []
    for i, ch in enumerate(list(im.split())[:3]):
        pos = Image.new("L", (1, h))
        neg = Image.new("L", (1, h))
        pp, np_ = pos.load(), neg.load()
        for y in range(h):
            t = y / max(h - 1, 1)
            o = off_t[i] + (off_b[i] - off_t[i]) * t
            pp[0, y] = int(max(0.0, o))
            np_[0, y] = int(max(0.0, -o))
        pos = pos.resize((w, h))
        neg = neg.resize((w, h))
        ch = ImageChops.add(ch, pos)
        ch = ImageChops.subtract(ch, neg)
        out.append(ch)
    return Image.merge("RGB", out)

# ---------------------------------------------------------------- cadrage
def pad45(im):
    """3:4 -> 4:5 en etirant les bords (le fond est un degrade, la couture est invisible)."""
    w, h = im.size
    tw = int(round(h * 4 / 5))
    if tw <= w:
        x = (w - tw) // 2
        return im.crop((x, 0, x + tw, h))
    pad = (tw - w) // 2
    out = Image.new("RGB", (tw, h))
    out.paste(im, (pad, 0))
    left = im.crop((0, 0, 1, h)).resize((pad, h))
    right = im.crop((w - 1, 0, w, h)).resize((tw - pad - w, h))
    out.paste(left, (0, 0))
    out.paste(right, (pad + w, 0))
    return out

# ---------------------------------------------------------------- occupation
def energy_map(im, blur=9):
    """Carte d'energie : le fond est un degrade lisse, le produit porte les contours."""
    g = im.convert("L").filter(ImageFilter.GaussianBlur(2))
    e = g.filter(ImageFilter.FIND_EDGES).filter(ImageFilter.GaussianBlur(blur))
    return e

def busy(emap, box):
    """Score d'occupation d'une zone : 0 = fond parfaitement lisse."""
    st = ImageStat.Stat(emap.crop(box))
    return st.mean[0] + st.stddev[0]

def place(emap, cands, size, limit=3.0):
    """Choisit le 1er emplacement (cx, cy) assez lisse pour accueillir une boite `size`."""
    bw, bh = size
    best, bestscore = None, 1e9
    for cx, cy in cands:
        box = (int(cx - bw / 2), int(cy - bh / 2), int(cx + bw / 2), int(cy + bh / 2))
        box = (max(0, box[0]), max(0, box[1]),
               min(emap.size[0], box[2]), min(emap.size[1], box[3]))
        s = busy(emap, box)
        if s < limit:
            return (cx, cy), s
        if s < bestscore:
            best, bestscore = (cx, cy), s
    return best, bestscore

def product_mask(emap, thresh=6):
    """Boite englobante du produit."""
    b = emap.point(lambda v: 255 if v > thresh else 0)
    bb = b.getbbox()
    return bb

def nearest_on_product(bb, pt):
    """Point du produit le plus proche de `pt` (projete sur la boite englobante)."""
    x0, y0, x1, y1 = bb
    return (min(max(pt[0], x0), x1), min(max(pt[1], y0), y1))

# ---------------------------------------------------------------- dessin
def qbezier(p0, p1, p2, n=48):
    pts = []
    for i in range(n + 1):
        t = i / n
        u = 1 - t
        pts.append((u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
                    u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1]))
    return pts

def arrow(d, p0, p1, p2, colour, width=7):
    pts = qbezier(p0, p1, p2)
    d.line(pts, fill=colour, width=width, joint="curve")
    # pointe orientee sur la tangente finale
    ax, ay = pts[-1]
    bx, by = pts[-6]
    ang = math.atan2(ay - by, ax - bx)
    L, S = width * 4.6, math.radians(26)
    d.polygon([(ax, ay),
               (ax - L * math.cos(ang - S), ay - L * math.sin(ang - S)),
               (ax - L * math.cos(ang + S), ay - L * math.sin(ang + S))], fill=colour)

def pill(d, txt, f, cx, cy, colour, padx=30, pady=16, bw=3):
    l, t, r, b = d.textbbox((0, 0), txt, font=f)
    w, h = r - l, b - t
    x0, y0 = cx - w / 2 - padx, cy - h / 2 - pady
    x1, y1 = cx + w / 2 + padx, cy + h / 2 + pady
    d.rounded_rectangle([x0, y0, x1, y1], radius=(y1 - y0) / 2, outline=colour, width=bw)
    d.text((cx, cy), txt, font=f, fill=colour, anchor="mm")

def softshadow(base, draw_fn, size, blur=14, alpha=70, off=(0, 3)):
    """Ombre douce sous un element de texte, pour le decoller du fond."""
    lay = Image.new("L", size, 0)
    draw_fn(ImageDraw.Draw(lay), 255)
    lay = lay.filter(ImageFilter.GaussianBlur(blur))
    lay = lay.point(lambda v: int(v * alpha / 255))
    sh = Image.new("RGB", size, (255, 255, 255))
    base.paste(sh, off, lay)

# ---------------------------------------------------------------- travaux
JOBS = [
    dict(src="appui.png",    out="appui-hero.png",
         l1="Mieux dormir,", l2="dès ce soir.",
         note="Forme 3 zones d'origine", badge="30 NUITS D'ESSAI"),
    dict(src="aplomb.png",   out="aplomb-hero.png",
         l1="Mieux dormir,", l2="dès ce soir.",
         note="Profil cervical d'origine", badge="30 NUITS D'ESSAI"),
    dict(src="bsommeil.png", out="bsommeil-hero.png",
         l1="Respirer par le nez,", l2="toute la nuit.",
         note="Découpe centrale ouverte", badge="30 NUITS D'ESSAI"),
    dict(src="bnasal.png",   out="bnasal-hero.png",
         l1="Respirer par le nez,", l2="toute la nuit.",
         note="Deux lamelles ressort", badge="30 NUITS D'ESSAI"),
]

def run(job):
    im = Image.open(os.path.join(D, job["src"])).convert("RGB")
    im = whitebalance(im)
    im = pad45(im)
    W, H = im.size
    emap = energy_map(im)
    bb = product_mask(emap)

    hs = int(W * 0.100)
    maxw = W * 0.855
    while hs > 40:
        f_try = ImageFont.truetype(os.path.join(F, "Poppins-Bold.ttf"), hs)
        wid = max(ImageDraw.Draw(im).textlength(job["l1"], font=f_try),
                  ImageDraw.Draw(im).textlength(job["l2"], font=f_try))
        if wid <= maxw:
            break
        hs -= 2
    f_h = ImageFont.truetype(os.path.join(F, "Poppins-Bold.ttf"), hs)
    f_n = ImageFont.truetype(os.path.join(F, "Caveat-var.ttf"), int(W * 0.049))
    f_b = ImageFont.truetype(os.path.join(F, "Poppins-SemiBold.ttf"), int(W * 0.0255))

    d = ImageDraw.Draw(im)

    # --- titre, deux lignes centrees en haut ------------------------------
    asc = f_h.getbbox("Hxg")[3] - f_h.getbbox("Hxg")[1]
    lh = int(asc * 1.30)
    y0 = int(H * 0.040)
    def _title(dd, fill):
        dd.text((W / 2, y0), job["l1"], font=f_h, fill=fill, anchor="ma")
        dd.text((W / 2, y0 + lh), job["l2"], font=f_h, fill=fill, anchor="ma")
    softshadow(im, _title, (W, H), blur=26, alpha=110, off=(0, 4))
    _title(d, INK)

    title_bottom = y0 + lh + asc

    # --- annotation manuscrite + fleche -----------------------------------
    nl, nt, nr, nb = d.textbbox((0, 0), job["note"], font=f_n)
    nw, nh = nr - nl, nb - nt
    cy_mid = (bb[1] + bb[3]) / 2
    cands = [(nw / 2 + W * 0.070, cy_mid - H * 0.11),
             (nw / 2 + W * 0.070, cy_mid + H * 0.02),
             (nw / 2 + W * 0.070, cy_mid - H * 0.010),
             (W - nw / 2 - W * 0.070, cy_mid - H * 0.11),
             (W - nw / 2 - W * 0.070, cy_mid + H * 0.02),
             (nw / 2 + W * 0.070, title_bottom + nh)]
    cands = [(x, y) for x, y in cands if y - nh / 2 > title_bottom + H * 0.012]
    (ncx, ncy), _ = place(emap, cands, (nw * 1.06, nh * 1.7), limit=2.2)
    d.text((ncx, ncy), job["note"], font=f_n, fill=INK, anchor="mm")

    # fleche : part sous l'annotation, arrive sur le produit
    left = ncx < W / 2
    sx = ncx + (nw * 0.22 if left else -nw * 0.22)
    sy = ncy + nh * 0.85
    tgt = nearest_on_product(bb, (sx, sy + H * 0.10))
    tgt = (tgt[0] + (W * 0.022 if left else -W * 0.022), tgt[1] + H * 0.020)
    ctrl = (sx + (tgt[0] - sx) * 0.18, sy + (tgt[1] - sy) * 0.86)
    arrow(d, (sx, sy), ctrl, tgt, INK, width=max(5, int(W * 0.0042)))

    # --- pastille ---------------------------------------------------------
    bl, bt, br_, bb_ = d.textbbox((0, 0), job["badge"], font=f_b)
    pw, ph = (br_ - bl) + 74, (bb_ - bt) + 40
    pc = [(W * 0.50, H * 0.935), (W * 0.28, H * 0.935), (W * 0.72, H * 0.935),
          (W * 0.24, H * 0.885), (W * 0.76, H * 0.885), (W * 0.50, H * 0.885)]
    pc = [(x, y) for x, y in pc if x - pw / 2 > W * 0.03 and x + pw / 2 < W * 0.97]
    (bcx, bcy), _ = place(emap, pc, (pw * 1.08, ph * 1.35), limit=2.2)
    pill(d, job["badge"], f_b, bcx, bcy, ACCENT, padx=37, pady=20, bw=4)

    im.save(os.path.join(D, job["out"]), "PNG")
    return job["out"], im.size

outs = [run(j) for j in JOBS]
for o in outs:
    print(o[0], o[1])

# planche contact
sheet = Image.new("RGB", (4 * 400, 500), (255, 255, 255))
for i, (name, _) in enumerate(outs):
    sheet.paste(Image.open(os.path.join(D, name)).resize((400, 500)), (i * 400, 0))
sheet.save(os.path.join(D, "check4.png"), "PNG")
print("check4.png")
