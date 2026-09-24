"""Rebuild somnila-storefront.html from somnila-storefront.src.html.

Encodes the repo's own product photos as WebP data URIs and inlines the vector
logo, so the page works as a single file. Run from the repo root:
    python3 build/design-v4/build.py
"""
import base64, io, json, re
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
B = ROOT / 'build' / 'images'
JOBS = {
    'hero': ('site/somnila_neck-01_hero_16x9_v2.jpg', 1600, 76),
    'hero45': ('site/somnila_neck-01_hero_4x5_v2.jpg', 820, 76),
    'neck_cloud': ('site/packshots/somnila_neck-01_packshot-cloud_v1_sky_4x5.jpg', 900, 78),
    'neck_night': ('site/packshots/somnila_neck-01_packshot-night-3_v2_sky_4x5.jpg', 900, 78),
    'neck_stone': ('site/packshots/somnila_neck-01_packshot-stone-4_v2_sky_4x5.jpg', 900, 78),
    'neck_sky': ('site/packshots/somnila_neck-01_packshot-sky-2_v1_sky_4x5.jpg', 900, 78),
    'contour': ('site/packshots/somnila_contour-01_packshot-cloud-6_v2_sky_4x5.jpg', 640, 76),
    'side': ('site/packshots/somnila_side-01_packshot-blue_v2_sky_4x5.jpg', 640, 76),
    'body': ('site/packshots/somnila_body-01_packshot-night_v1_sky_4x5.jpg', 640, 76),
    'lounge': ('site/packshots/somnila_lounge-01_packshot-stone-and-sand_v1_sky_4x5.jpg', 640, 76),
    'cover_set': ('site/packshots/somnila_neck-01-cover-set_packshot-cloud_v1_sky_4x5.jpg', 640, 76),
    'mask': ('shopify/somnila_mask-01_packshot-black_1x1_v1.jpg', 420, 74),
    'quiet': ('shopify/somnila_quiet-01_packshot-blue_1x1_v2.jpg', 420, 74),
    'throw': ('shopify/somnila_throw-01_detail-sky_4x3_v1.jpg', 520, 74),
    'cut_neck': ('site/neck-01-cloud-cutout-v2.png', 560, 80),
    'cut_contour': ('site/contour-01-night-cutout.png', 520, 80),
    'cut_side': ('site/side-01-blue-cutout.png', 520, 80),
    'cut_lounge': ('site/lounge-01-cutout.png', 360, 80),
}

def encode(path, width, quality, cutout):
    im = Image.open(B / path)
    if cutout:
        im = im.convert('RGBA')
        im = im.crop(im.getbbox())
    else:
        im = im.convert('RGB')
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, 'WEBP', quality=quality, method=6)
    return 'data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode()

imgs = {k: encode(p, w, q, k.startswith('cut')) for k, (p, w, q) in JOBS.items()}
v3 = (ROOT / 'build/design-v3/somnila-fiche-neck-01.html').read_text(encoding='utf-8')
logo = re.search(r'<svg class="lg-defs".*?</svg>', v3, re.S).group(0)
src = (HERE / 'somnila-storefront.src.html').read_text(encoding='utf-8')
out = src.replace('%%LOGO%%', logo).replace('%%IMGJSON%%', json.dumps(imgs))
assert '%%' not in out
(HERE / 'somnila-storefront.html').write_text(out, encoding='utf-8')
print(f'somnila-storefront.html: {len(out) // 1024} KB')
