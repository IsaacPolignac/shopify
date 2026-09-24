"""Theme images for design v6: floating cut-outs and sky tiles for cards and sets.
Real product photos only (build/images/site/cutouts, packshots, shopify). Run from the repo root."""
from PIL import Image, ImageDraw, ImageFilter
import numpy as np
from pathlib import Path
R = Path('build/images'); OUT = Path('build/theme/assets'); S = 900
CUT = {'neck_night':'site/cutouts/neck-01-night.png','neck_cloud':'site/cutouts/neck-01-cloud.png','neck_stone':'site/cutouts/neck-01-stone.png',
       'neck_sky':'site/cutouts/neck-01-sky.png','body':'site/cutouts/body-01-night.png','lounge':'site/cutouts/lounge-01-single.png',
       'contour':'site/contour-01-night-cutout.png','side':'site/side-01-blue-cutout.png'}
PHOTO = {'mask':'shopify/somnila_mask-01_packshot-black_1x1_v1.jpg','quiet':'shopify/somnila_quiet-01_packshot-blue_1x1_v2.jpg','throw':'shopify/somnila_throw-01_detail-sky_4x3_v1.jpg'}
def cut(k):
    im = Image.open(R / CUT[k]).convert('RGBA'); return im.crop(im.getbbox())
def sky(n=S):
    y = np.linspace(0, 1, n)[:, None]; x = np.linspace(0, 1, n)[None, :]
    top = np.array([243, 246, 250.]); bot = np.array([220, 232, 242.]); dawn = np.array([240, 183, 155.])
    g = top * (1 - y[..., None]) + bot * y[..., None]
    r = np.sqrt(((x - .78) / .6) ** 2 + ((y - .92) / .45) ** 2); a = (np.clip(1 - r, 0, 1) ** 1.6 * .34)[..., None]
    return Image.fromarray((g * (1 - a) + dawn * a).astype('uint8')).convert('RGBA')
def place(bg, im, w, left=None, top=0, right=None):
    W = bg.width; tw = int(W * w); th = int(im.height * tw / im.width); im = im.resize((tw, th), Image.LANCZOS)
    x = int(W * left) if left is not None else W - tw - int(W * right); y = int(W * top)
    a = im.split()[3]; sh = Image.new('RGBA', im.size, (30, 42, 58, 0)); sh.putalpha(a.point(lambda v: int(v * .2)))
    sh = sh.filter(ImageFilter.GaussianBlur(W * .018)); bg.alpha_composite(sh, (x, y + int(W * .03))); bg.alpha_composite(im, (x, y))
def thumb(bg, key, i, n):
    W = bg.width; d = int(W * .19); ring = int(W * .012)
    src = Image.open(R / PHOTO[key]).convert('RGB'); s = min(src.size); src = src.crop(((src.width - s) // 2, (src.height - s) // 2, (src.width + s) // 2, (src.height + s) // 2)).resize((d, d), Image.LANCZOS)
    m = Image.new('L', (d, d), 0); ImageDraw.Draw(m).ellipse((0, 0, d - 1, d - 1), fill=255)
    x = W - int(W * .04) - (n - i) * (d + int(W * .03)) + int(W * .015); y = W - int(W * .04) - d
    ImageDraw.Draw(bg).ellipse((x - ring, y - ring, x + d + ring, y + d + ring), fill=(255, 255, 255, 255))
    t = src.convert('RGBA'); t.putalpha(m); bg.alpha_composite(t, (x, y))
def save(bg, name): bg.convert('RGB').save(OUT / f'sv6-tile-{name}.webp', 'WEBP', quality=82, method=6); print('tile', name)
T = {
  'neck-01': lambda b: place(b, cut('neck_night'), .78, .11, .26),
  'contour-01': lambda b: place(b, cut('contour'), .78, .11, .26),
  'side-01': lambda b: place(b, cut('side'), .78, .11, .28),
  'body-01': lambda b: place(b, cut('body'), .56, .22, .08),
  'lounge-01': lambda b: place(b, cut('lounge'), .74, .13, .22),
  'for-two': lambda b: (place(b, cut('neck_cloud'), .66, .03, .22), place(b, cut('neck_cloud'), .66, None, .40, .02)),
  'family-set': lambda b: (place(b, cut('neck_cloud'), .56, .02, .16), place(b, cut('neck_cloud'), .56, None, .28, .01), place(b, cut('neck_cloud'), .56, .21, .46)),
  'contour-for-two': lambda b: (place(b, cut('contour'), .66, .03, .22), place(b, cut('contour'), .66, None, .40, .02)),
  'side-sleeper-set': lambda b: (place(b, cut('body'), .40, None, .06, .06), place(b, cut('neck_cloud'), .66, .02, .40)),
  'sleep-set': lambda b: (place(b, cut('neck_night'), .78, .11, .18), thumb(b, 'mask', 0, 2), thumb(b, 'quiet', 1, 2)),
  'neck-01-cover-set': lambda b: place(b, cut('neck_cloud'), .78, .11, .26),
  'evening-set': lambda b: (place(b, cut('lounge'), .70, .08, .12), thumb(b, 'throw', 0, 1)),
}
for k, f in T.items():
    b = sky(); f(b); save(b, k)
for c in ['night', 'cloud', 'stone', 'sky']:
    im = cut('neck_' + c); im.save(OUT / f'sv6-cut-neck-01-{c}.webp', 'WEBP', quality=86, method=6); print('cut', c, im.size)
