"""Rebuild somnila-storefront.html from somnila-storefront.src.html.

Encodes the repo's own product photos and cut-outs as WebP data URIs and
inlines the vector logo, so the page is a single file. From the repo root:
    python3 build/design-v6/build.py
"""
import base64, io, json, re
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
B = ROOT / 'build' / 'images'
PK = 'site/packshots/'
JOBS = {  # same assets as design-v5
    # cut-outs (alpha), made with build/images/site/sky-packshots.py
    'c_neck_night': ('site/cutouts/neck-01-night.png', 560, 84),
    'c_neck_cloud': ('site/cutouts/neck-01-cloud.png', 560, 84),
    'c_neck_stone': ('site/cutouts/neck-01-stone.png', 560, 84),
    'c_neck_sky': ('site/cutouts/neck-01-sky.png', 560, 84),
    'c_body': ('site/cutouts/body-01-night.png', 520, 82),
    'c_contour': ('site/contour-01-night-cutout.png', 520, 82),
    'c_side': ('site/side-01-blue-cutout.png', 520, 82),
    'c_lounge': ('site/cutouts/lounge-01-single.png', 460, 82),
    # photos
    'p_neck_night': (PK + 'somnila_neck-01_packshot-night-3_v2_sky_1x1.jpg', 900, 78),
    'p_neck_cloud': (PK + 'somnila_neck-01_packshot-cloud_v1_sky_1x1.jpg', 900, 78),
    'p_neck_stone': (PK + 'somnila_neck-01_packshot-stone-4_v2_sky_1x1.jpg', 900, 78),
    'p_neck_sky': (PK + 'somnila_neck-01_packshot-sky-2_v1_sky_1x1.jpg', 900, 78),
    'p_contour': (PK + 'somnila_contour-01_packshot-cloud-6_v2_sky_1x1.jpg', 800, 76),
    'p_side': (PK + 'somnila_side-01_packshot-blue_v2_sky_1x1.jpg', 800, 76),
    'p_body': (PK + 'somnila_body-01_packshot-night_v1_sky_1x1.jpg', 800, 76),
    'p_lounge': (PK + 'somnila_lounge-01_packshot-stone-and-sand_v1_sky_1x1.jpg', 800, 76),
    'mask': ('shopify/somnila_mask-01_packshot-black_1x1_v1.jpg', 420, 74),
    'quiet': ('shopify/somnila_quiet-01_packshot-blue_1x1_v2.jpg', 420, 74),
    'throw': ('shopify/somnila_throw-01_detail-sky_4x3_v1.jpg', 520, 74),
}

def encode(key, path, width, quality):
    im = Image.open(B / path)
    if key.startswith('c_'):
        im = im.convert('RGBA')
        im = im.crop(im.getbbox())
    else:
        im = im.convert('RGB')
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, 'WEBP', quality=quality, method=6)
    return 'data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode()

imgs = {k: encode(k, p, w, q) for k, (p, w, q) in JOBS.items()}
v3 = (ROOT / 'build/design-v3/somnila-fiche-neck-01.html').read_text(encoding='utf-8')
logo = re.search(r'<svg class="lg-defs".*?</svg>', v3, re.S).group(0)
src = (HERE / 'somnila-storefront.src.html').read_text(encoding='utf-8')
svg = (HERE / 'profile.svg').read_text(encoding='utf-8').strip()
assert '`' not in svg and '${' not in svg
out = src.replace('%%LOGO%%', logo).replace('%%IMGJSON%%', json.dumps(imgs)).replace('%%PROFILEJS%%', svg).replace('%%PROFILE%%', svg)
assert '%%' not in out
(HERE / 'somnila-storefront.html').write_text(out, encoding='utf-8')
print(f'somnila-storefront.html: {len(out) // 1024} KB, images {sum(len(v) for v in imgs.values()) // 1024} KB')
