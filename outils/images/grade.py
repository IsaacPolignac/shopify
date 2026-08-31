# -*- coding: utf-8 -*-
"""Refroidit une photo d'ambiance creme vers le registre bleu poudre, sans la denaturer :
gains multiplicatifs doux par canal + leger voile lumineux dans les hautes lumieres."""
from PIL import Image, ImageFilter, ImageChops

def cool(im, r=0.968, g=0.995, b=1.052, bloom=16):
    ch = list(im.convert("RGB").split())
    ch = [c.point(lambda v, k=k: min(255, int(v * k + 0.5))) for c, k in zip(ch, (r, g, b))]
    out = Image.merge("RGB", ch)
    # voile : les zones deja claires diffusent un halo froid, comme sur les fonds nuageux
    lum = out.convert("L").point(lambda v: max(0, v - 170) * 3)
    lum = lum.filter(ImageFilter.GaussianBlur(im.size[0] * 0.035)).point(lambda v: int(v * bloom / 255))
    out.paste(Image.new("RGB", out.size, (226, 238, 246)), (0, 0), lum)
    return out

src = Image.open("lifestyle-src.png").convert("RGB")
out = cool(src)
out.save("lifestyle-froid.png", "PNG")

w = 620
sheet = Image.new("RGB", (w * 2 + 12, int(w * src.size[1] / src.size[0])), (255, 255, 255))
sheet.paste(src.resize((w, sheet.size[1])), (0, 0))
sheet.paste(out.resize((w, sheet.size[1])), (w + 12, 0))
sheet.save("check-grade.png", "PNG")
print(out.size)
