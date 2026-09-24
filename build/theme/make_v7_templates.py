"""Writes the v7 templates (purepeptide.care architecture) for the Somnila Shrine theme.
Every text comes from copy already approved in v6 or from the store's real data (prices are live in Liquid).
Run from build/theme: python3 make_v7_templates.py"""
import json, re

def sec(type_, settings=None, blocks=None):
    s = {"type": type_, "settings": settings or {}}
    if blocks:
        s["blocks"] = {f"b{i+1}": {"type": b[0], "settings": b[1]} for i, b in enumerate(blocks)}
        s["block_order"] = [f"b{i+1}" for i in range(len(blocks))]
    return s

def template(pairs):
    return {"sections": {k: v for k, v in pairs}, "order": [k for k, _ in pairs]}

def write(path, data):
    with open(path, "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

FAQ = [
    ("Which height should I use?", "<p>Neck 01 has two edges: 13 cm (5.1 in) and 11 cm (4.3 in). On your side, start on the higher edge. On your back, the lower one. Keep the edge where your head lies level.</p>"),
    ("How does the 30-night trial work?", "<p>Sleep on it for up to 30 nights. If it isn't right, write to support@somnila.com. The exact conditions are in our refund policy.</p>"),
    ("How long does delivery take?", "<p>Every order ships in 6–10 days. Shipping is free on every pillow and every set.</p>"),
    ("Can I wash it?", "<p>The cover comes off and goes in the washing machine. Spare covers are sold separately.</p>"),
    ("How can I pay?", "<p>Card, Shop Pay, Apple Pay or Google Pay. Checkout is handled by Shopify.</p>"),
]

VOLUME = sec("sv7-volume", {
    "pill": "Sets",
    "heading": "Sleeping in pairs?",
    "heading_hl": "Save on the set.",
    "text": "Two or three Neck 01 cost less as a set than one by one. The saving is already in the price.",
    "example": "family-set", "example_components": "neck-01*3", "example_image": "sv6-tile-family-set.webp", "example_count": "×3",
    "btn": "Shop the sets", "btn_url": "shopify://collections/sets",
    "note": "No code needed. The set price already includes the saving.",
}, [
    ("chip", {"label": "2 pillows", "product": "for-two", "components": "neck-01*2"}),
    ("chip", {"label": "3 pillows", "product": "family-set", "components": "neck-01*3"}),
    ("chip", {"label": "Free shipping on every set"}),
])

CTA = sec("sv7-cta", {
    "heading": "Your next 30 nights start here.",
    "text": "Thirty nights at home, free shipping, and a cover you can wash. The only way to know is to sleep on it.",
    "btn_1": "Shop the pillows", "btn_1_url": "shopify://collections/memory-foam-pillows",
    "btn_2": "Read the FAQ", "btn_2_url": "shopify://pages/faq",
    "image_left": "sv6-cut-neck-01-sky.webp", "image_right": "sv6-cut-neck-01-stone.webp",
})

# ---------------------------------------------------------------- home
home = template([
    ("hero", sec("sv7-hero", {
        "product": "neck-01",
        "eyebrow": "Memory-foam pillows",
        "heading_1": "Feel it tonight.", "heading_2": "Keep it for years",
        "tagline": "Sleep well.",
        "text": "Neck 01 is the memory-foam pillow with two heights, for side and back sleepers.",
        "chip_label": "30-night trial", "chip_link": "See the terms", "chip_url": "shopify://pages/returns-warranty",
        "btn_1": "Shop Neck 01", "btn_1_url": "shopify://products/neck-01",
        "btn_2": "Compare pillows", "btn_2_url": "shopify://collections/memory-foam-pillows",
        "show_price": True, "price_note": "free shipping",
        "image_asset": "sv6-cut-neck-01-cloud.webp", "image_alt": "Neck 01 memory-foam pillow in Cloud",
        "badge": "Two heights", "badge_small": "13 cm and 11 cm, one pillow",
    })),
    ("strip", sec("sv7-marquee", {"label": "What you get"}, [
        ("item", {"icon": "truck", "text": "Free shipping on every pillow"}),
        ("item", {"icon": "calendar", "text": "30-night trial"}),
        ("item", {"icon": "clock", "text": "Ships in 6–10 days"}),
        ("item", {"icon": "turn", "text": "Two heights in one pillow"}),
        ("item", {"icon": "wash", "text": "Washable cover included"}),
        ("item", {"icon": "lock", "text": "Secure checkout"}),
        ("item", {"icon": "globe", "text": "US · Canada · UK · Europe · Australia"}),
    ])),
    ("figures", sec("sv7-stats", {"label": "Key figures"}, [
        ("stat", {"icon": "ruler", "value": "13 / 11 cm", "label": "Two heights on Neck 01"}),
        ("stat", {"icon": "calendar", "value": "30 nights", "label": "Trial at home"}),
        ("stat", {"icon": "clock", "value": "6–10 days", "label": "Delivery"}),
        ("stat", {"icon": "truck", "value": "Free", "label": "Shipping on every pillow"}),
    ])),
    ("range", sec("sv7-grid", {
        "eyebrow": "The range", "heading": "Pick your pillow",
        "link_label": "View all pillows", "link_url": "shopify://collections/memory-foam-pillows",
    }, [
        ("card", {"product": "neck-01", "tag": "Two heights", "image_asset": "sv6-tile-neck-01.webp", "pair": "for-two", "pair_components": "neck-01*2", "single_label": "1 pillow", "pair_label": "2 pillows"}),
        ("card", {"product": "contour-01", "tag": "Softer & lower", "image_asset": "sv6-tile-contour-01.webp", "pair": "contour-for-two", "pair_components": "contour-01*2", "single_label": "1 pillow", "pair_label": "2 pillows"}),
        ("card", {"product": "side-01", "tag": "Side sleepers", "image_asset": "sv6-tile-side-01.webp"}),
        ("card", {"product": "body-01", "tag": "Full body", "image_asset": "sv6-tile-body-01.webp"}),
    ])),
    ("trial", sec("sv7-trial", {
        "pill_em": "Try", "pill": "30-night trial",
        "heading": "Sleep on it for", "heading_hl": "30 nights.",
        "text": "A pillow is judged at 3 a.m., not in a shop. If it isn't right, write to us.",
        "btn": "Read the trial terms", "btn_url": "shopify://pages/returns-warranty",
        "card_title": "How the trial works",
        "card_foot": "The exact conditions are in our refund policy.",
        "seal": "30", "seal_small": "nights",
    }, [
        ("point", {"text": "Up to 30 nights to decide, at home"}),
        ("point", {"text": "Free shipping on every pillow"}),
        ("point", {"text": "Washable cover included"}),
        ("point", {"text": "Questions: support@somnila.com"}),
        ("step", {"title": "Order", "text": "It ships free", "side": "6–10 days"}),
        ("step", {"title": "Sleep on it", "text": "Your real nights, your bed", "side": "30 nights", "strong": True}),
        ("step", {"title": "Decide", "text": "Keep it, or write to support@somnila.com", "side": "Your call"}),
    ])),
    ("sets", VOLUME),
    ("six", sec("sv7-features", {
        "heading": "Everything your night needs, in one place.",
        "text": "Two heights, a cover that comes off, and thirty nights to decide.",
    }, [
        ("card", {"icon": "turn", "title": "Two heights, one pillow", "text": "13 cm for your side, 11 cm for your back. Changed position? Turn it over.", "link_label": "Shop Neck 01", "link_url": "shopify://products/neck-01"}),
        ("card", {"icon": "wash", "title": "Cover included", "text": "The cool-touch cover comes off and goes in the wash. Spare covers are sold separately.", "link_label": "Spare covers", "link_url": "shopify://collections/covers"}),
        ("card", {"icon": "calendar", "tone": "dawn", "title": "30 nights to decide", "text": "Sleep on it at home. If it isn't right, write to us.", "link_label": "Trial terms", "link_url": "shopify://pages/returns-warranty"}),
        ("card", {"icon": "truck", "title": "Free shipping", "text": "On every pillow and every set. Ships in 6–10 days.", "link_label": "Shipping", "link_url": "shopify://pages/shipping-delivery"}),
        ("card", {"icon": "lock", "title": "Secure checkout", "text": "Card, Shop Pay, Apple Pay or Google Pay. Checkout is handled by Shopify."}),
        ("card", {"icon": "chat", "title": "Questions?", "text": "Write to support@somnila.com. The FAQ answers the most common ones.", "link_label": "Contact", "link_url": "shopify://pages/contact"}),
    ])),
    ("heights", sec("sv7-heights", {
        "eyebrow": "How it works", "heading": "Two heights. Turn it over.",
        "text": "Neck 01 has two edges. Put the one that keeps your head level under your neck.",
        "s1": "13 cm", "s1_label": "High edge", "s2": "11 cm", "s2_label": "Low edge", "s3": "62 cm", "s3_label": "Long",
        "why_label": "Tip:",
        "caption": "Side view of Neck 01, to scale", "caption_right": "62 × 42 cm",
        "btn": "Shop Neck 01", "btn_url": "shopify://products/neck-01", "btn_note": "Cover included",
        "image_asset": "sv6-cut-neck-01-night.webp", "image_alt": "Neck 01 memory-foam pillow in Night",
        "float": "Turn it over", "float_small": "The other edge goes under your neck",
        "card_title": "Compare the pillows", "card_small": "Heights and sizes, side by side", "card_url": "shopify://collections/memory-foam-pillows",
        "only_for_handle": "neck-01",
    }, [
        ("tab", {"label": "On your side", "icon": "moon", "state": "side", "title": "On your side", "badge": "13 cm", "text": "Start on the higher edge: 13 cm (5.1 in).", "why": "Keep the edge where your head lies level."}),
        ("tab", {"label": "On your back", "icon": "turn", "state": "back", "title": "On your back", "badge": "11 cm", "text": "Use the lower edge: 11 cm (4.3 in).", "why": "Changed position? Turn the pillow and use the other edge."}),
        ("tab", {"label": "Cover", "icon": "wash", "state": "keep", "title": "The cover", "badge": "Included", "text": "Cool to the touch. It comes off and goes in the washing machine. Spare covers are sold separately."}),
        ("tab", {"label": "Foam", "icon": "feather", "state": "keep", "title": "Memory foam", "text": "It holds its shape all night."}),
    ])),
    ("faq", sec("sv7-faq", {"eyebrow": "FAQ", "heading": "Frequently asked questions", "text": "Everything you need to know before ordering.", "tint": True},
                [("qa", {"question": q, "answer": a}) for q, a in FAQ])),
    ("cta", CTA),
])
write("templates/index.json", home)

# ---------------------------------------------------------------- shop (collection)
shop = template([
    ("main", sec("sv7-collection", {"show_description": False, "pills_menu": "somnila-shop", "per_page": 24}, [
        ("info", {"big": "30", "small": "nights", "title": "30-night trial", "text": "Sleep on it at home. If it isn't right, write to us.", "btn": "Trial terms", "btn_url": "shopify://pages/returns-warranty"}),
        ("info", {"big": "2+", "small": "pillows", "title": "Sets", "text": "Two or three pillows cost less as a set. The saving is already in the price.", "btn": "Shop sets", "btn_url": "shopify://collections/sets"}),
        ("info", {"big": "6–10", "small": "days", "title": "Free shipping", "text": "On every pillow and every set, to the US, Canada, the UK, Europe, Australia and more.", "btn": "Shipping", "btn_url": "shopify://pages/shipping-delivery"}),
        ("pair", {"for_handle": "neck-01", "pair": "for-two", "components": "neck-01*2", "label": "2 pillows"}),
        ("pair", {"for_handle": "contour-01", "pair": "contour-for-two", "components": "contour-01*2", "label": "2 pillows"}),
    ])),
    ("sets", VOLUME),
    ("cta", CTA),
])
write("templates/collection.json", shop)

# ---------------------------------------------------------------- product pages
BULLETS = [
    ("neck-01", "Two heights:", "13 cm for your side, 11 cm for your back."),
    ("neck-01", "Memory foam:", "holds its shape all night."),
    ("neck-01", "Cool-touch cover:", "comes off, goes in the wash."),
    ("contour-01", "10 cm high:", "the softer, lower one in the range."),
    ("contour-01", "Gentle wave shape:", "follows the neck and shoulders."),
    ("contour-01", "Cool-touch cover:", "washable, included."),
    ("side-01", "10 cm profile:", "made for sleeping on your side."),
    ("side-01", "Memory foam:", "holds that height all night."),
    ("side-01", "Cover included.", ""),
    ("body-01", "120 cm, S-shaped:", "knees, arm and back at the same time."),
    ("body-01", "Breathable cover:", "cool to the touch, machine-washable."),
    ("body-01", "Cover included.", ""),
    ("lounge-01", "23 cm high:", "made for sitting up in bed."),
    ("lounge-01", "Phone and book ledge:", "nothing to hold up."),
    ("lounge-01", "Cover included.", ""),
]

def product_main(extra_settings=None, offers=(), addons=()):
    s = {
        "crumb_collection": "shop-all", "chip_free": "Free shipping", "chip_trial": "30-night trial",
        "bundle_label": "Bundle & save", "first_label": "1 pillow",
        "free_note": "Free shipping", "addon_ship_note": "Free shipping with any pillow",
        "size_label": "Size", "atc_label": "Add to cart", "show_express": True, "express_label": "Or check out instantly",
        "countries": "Ships to the US, Canada, the UK, Europe, Australia and more",
        "trial_line": "30-night trial: sleep on it, then decide",
        "disclaimer": "Somnila pillows are comfort products, not medical devices.",
    }
    s.update(extra_settings or {})
    blocks = [("offer", o) for o in offers] + [("addon", a) for a in addons]
    return sec("sv7-product", s, blocks)

OFFERS = [
    {"for_handle": "neck-01", "offer_product": "for-two", "label": "2 pillows", "components": "neck-01*2"},
    {"for_handle": "neck-01", "offer_product": "family-set", "label": "3 pillows", "components": "neck-01*3", "best": True},
    {"for_handle": "contour-01", "offer_product": "contour-for-two", "label": "2 pillows", "components": "contour-01*2"},
    {"for_handle": "body-01", "offer_product": "side-sleeper-set", "label": "+ Neck 01", "components": "body-01*1,neck-01*1"},
    {"for_handle": "lounge-01", "offer_product": "evening-set", "label": "+ Throw 01", "components": "lounge-01*1,throw-01*1"},
]
ADDONS = [
    {"for_handle": "neck-01", "product": "cover-neck", "label": "Pairs with a spare cover"},
    {"for_handle": "contour-01", "product": "cover-contour", "label": "Pairs with a spare cover"},
    {"for_handle": "side-01", "product": "cover-side", "label": "Pairs with a spare cover"},
    {"for_handle": "body-01", "product": "cover-body", "label": "Pairs with a spare cover"},
]
RELATED = [
    ("neck-01", ["cover-neck", "sleep-set", "body-01"]),
    ("contour-01", ["cover-contour", "contour-for-two", "mask-01"]),
    ("side-01", ["cover-side", "neck-01", "mask-01"]),
    ("body-01", ["cover-body", "side-sleeper-set", "neck-01"]),
    ("lounge-01", ["throw-01", "evening-set", "mask-01"]),
]

pillow = template([
    ("main", product_main(offers=OFFERS, addons=ADDONS)),
    ("details", sec("sv7-details", {
        "fallback_title": "Shipping and trial",
        "fallback_text": "<p>Every order ships in 6–10 days. Shipping is free on every pillow. Sleep on it for up to 30 nights; the exact conditions are in our refund policy.</p>",
    }, [("howto", {"for_handle": "neck-01", "title": "Which edge?", "text": FAQ[0][1]})] +
       [("point", {"for_handle": h, "title": t, "text": x}) for h, t, x in BULLETS])),
    ("heights", sec("sv7-heights", home["sections"]["heights"]["settings"] | {"btn": "", "card_title": ""},
                    [(b["type"], b["settings"]) for b in [home["sections"]["heights"]["blocks"][k] for k in home["sections"]["heights"]["block_order"]]])),
    ("related", sec("sv7-related", {"eyebrow": "Complete your night", "heading": "Goes well with it", "fallback_collection": "memory-foam-pillows"},
                    [("list", {"for_handle": h, "products": l}) for h, l in RELATED])),
])
write("templates/product.json", pillow)

sets = template([
    ("main", product_main({"first_label": "1 set", "trial_line": "30-night trial on the pillows in the set"})),
    ("details", sec("sv7-details", {
        "fallback_title": "Shipping, trial and care",
        "fallback_text": "<p>Everything in the set arrives in one box, in 6–10 days, with free shipping. The pillows in the set come with the 30-night trial; the exact conditions are in our refund policy.</p><p>Covers: unzip, machine wash cold on a gentle cycle, dry flat. Foam: a damp cloth, never the machine, never the dryer.</p>",
    })),
    ("related", sec("sv7-related", {"eyebrow": "Complete your night", "heading": "Goes well with it", "fallback_collection": "memory-foam-pillows"})),
])
write("templates/product.set.json", sets)

acc = template([
    ("main", product_main({"chip_trial": "", "trial_line": "Returns accepted unused within 14 days", "disclaimer": ""})),
    ("details", sec("sv7-details", {
        "fallback_title": "Care and returns",
        "fallback_text": "<p>Mask 01 and covers: hand wash or machine wash cold on a gentle cycle, dry flat. Quiet 01 earplugs: rinse with water, dry before putting them back in the case. Throw 01: machine wash cold, tumble dry low.</p><p>Accessories can be returned unused, in their packaging, within 14 days of delivery. Write to us first and we send the instructions.</p>",
    })),
    ("related", sec("sv7-related", {"eyebrow": "Complete your night", "heading": "Goes well with it", "fallback_collection": "memory-foam-pillows"})),
])
write("templates/product.accessory.json", acc)

# ---------------------------------------------------------------- header and footer groups
def load(path):
    s = open(path).read()
    return json.loads(re.sub(r"^/\*.*?\*/", "", s, flags=re.S))

hg = load("sections/header-group.json")
css = hg["sections"]["somnila-styles"]["settings"]["custom_liquid"]
css = css.replace("{{ 'somnila-v6.css' | asset_url | stylesheet_tag }}\n<script src=\"{{ 'somnila-v6.js' | asset_url }}\" defer></script>\n",
                  "{{ 'somnila-v7.css' | asset_url | stylesheet_tag }}\n<script src=\"{{ 'somnila-v7.js' | asset_url }}\" defer></script>\n")
assert "somnila-v7.css" in css, "v6 loader line not found"
hg["sections"]["somnila-styles"]["settings"]["custom_liquid"] = css
hg["sections"]["header"]["settings"]["menu"] = "somnila-nav"
write("sections/header-group.json", hg)

fg = load("sections/footer-group.json")
fg["sections"]["footer"]["disabled"] = True
fg["sections"]["v7foot"] = sec("sv7-footer", {
    "brand_name": "Somnila",
    "tagline": "Memory-foam pillows shaped around the way you lie. Two heights, a washable cover, thirty nights to decide.",
    "menu_1": "somnila-shop", "title_1": "Shop",
    "menu_2": "somnila-help", "title_2": "Help",
    "menu_3": "somnila-legal", "title_3": "Legal",
    "note_title": "Comfort, not medicine",
    "note_text": "Somnila pillows are comfort products, not medical devices. For any health question, ask a professional.",
    "note_link": "Our story", "note_url": "shopify://pages/about",
    "show_pay": True, "pay_label": "We accept",
    "bottom_text": "Sleep well.",
    "trust_1": "Secure checkout", "trust_2": "30-night trial", "trust_3": "Free shipping on every pillow",
    "show_country": True,
})
fg["order"] = ["footer", "v7foot", "backtotop"]
write("sections/footer-group.json", fg)
print("ok")
