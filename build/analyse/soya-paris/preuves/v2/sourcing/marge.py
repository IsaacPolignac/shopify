# Modele de cout complet et de marge par offre, Soya 3.0 (et 2.0, enfant, lombaire).
# Toutes les valeurs sont des HYPOTHESES sourcees dans le chapitre ; rien n'est mesure chez Soya.
# Taux de change : 1 EUR = 1,159 USD (build/ANALYSE_PRIX.md, 10/09/2026).
USD = 1 / 1.159

# --- Cout rendu client d'un oreiller 3.0 avec sa housse d'origine (EUR) ---
# bas     : achat en volume (FOB 6,90-7,30 $ Made-in-China Jintongyuan, palier 3 000+ / 10 000+),
#           import groupe, droits 3,7 %, stock en France, dernier km sous contrat (< 11,19 EUR public).
# central : achat FOB 8,80-10,20 $ (Accio / Made-in-China, MOQ 200-500) + envoi direct de Chine
#           par ligne e-commerce (1,45 kg brut, express 10-12 $/kg -> plafond) ; droit forfaitaire UE
#           de 3 EUR par categorie d'articles depuis le 01/07/2026 compte a part.
# haut    : agent de dropshipping tout compris, reference = devis Somnila 09 (25,00 EUR, 1,4 kg, 6-10 j).
COGS_PILLOW = {'bas': 13.0, 'central': 19.0, 'haut': 25.0}
COGS_HOUSSE = {'bas': 2.5, 'central': 3.5, 'haut': 3.0 + 1.0}   # FOB 2,00-3,50 $ + port marginal ; devis Somnila housse 3,00
COGS_LOMB = {'bas': 4.0, 'central': 5.5, 'haut': 8.0}            # FOB 1,90-11 $ (mediane ~3,5-5 $) + port marginal
DUTY_PER_CAT = {'bas': 0.0, 'central': 3.0, 'haut': 0.0}          # bas : dedouane en gros ; haut : suppose inclus dans l'agent

PAY = {'bas': (0.015, 0.25), 'central': (0.031, 0.29), 'haut': (0.046, 0.29)}  # Shopify Payments : EEE 1,5 %+0,25 ; UK intl 3,1 %+25p ; +1,5 % conversion
RET = {'bas': 0.03, 'central': 0.05, 'haut': 0.10}                             # provision retours / remboursements, % du TTC
VAT = 0.20

OFFERS = [
    # nom, prix TTC, nb oreillers, nb housses, lombaire
    ('1x sans housse', 69.90, 1, 0, 0),
    ('1x + housse pre-cochee', 84.80, 1, 1, 0),
    ('Duo sans housse', 98.90, 2, 0, 0),
    ('Duo + 2 housses pre-cochees', 128.70, 2, 2, 0),
    ('Famille (4) sans housse', 139.90, 4, 0, 0),
    ('Famille + 4 housses pre-cochees', 169.70, 4, 4, 0),
    ('Housse seule en ajout (marginal)', 14.90, 0, 1, 0),
    ('Popup lombaire (marginal)', 19.90, 0, 0, 1),
    ('1x + housse + lombaire', 104.70, 1, 1, 1),
]

def contrib(price, n, h, l, sc, vat=True, marginal=False):
    ht = price / (1 + VAT) if vat else price
    cogs = n * COGS_PILLOW[sc] + h * COGS_HOUSSE[sc] + l * COGS_LOMB[sc]
    cats = (1 if (n or l) else 0) + (1 if h else 0)       # 9404 (oreiller, coussin) ; 6302 (housse)
    if marginal:
        cats = 1 if (h and not n) else 0                  # la housse ajoute une categorie ; le lombaire (9404) non
    duty = cats * DUTY_PER_CAT[sc]
    pct, fix = PAY[sc]
    pay = price * pct + (0 if marginal else fix)
    ret = price * RET[sc]
    return ht, cogs, duty, pay, ret, ht - cogs - duty - pay - ret

if __name__ == '__main__':
    for vat in (True, False):
        print('\n==== TVA %s ====' % ('reversee (20 %)' if vat else 'NON reversee (indice taxable:false)'))
        print('%-34s %7s | %-26s | %-26s | %-26s' % ('offre', 'TTC', 'bas: cout / marge avt pub', 'central', 'haut'))
        for name, price, n, h, l in OFFERS:
            marg = name.endswith('(marginal)')
            row = []
            for sc in ('bas', 'central', 'haut'):
                ht, cogs, duty, pay, ret, m = contrib(price, n, h, l, sc, vat, marg)
                row.append('%5.2f+%4.2f+%4.2f+%4.2f -> %6.2f' % (cogs, duty, pay, ret, m))
            print('%-34s %7.2f | %s | %s | %s' % (name, price, *row))
    # tableau compact central + fourchette, TVA reversee
    print('\n==== Synthese TVA reversee : marge avant pub (bas / central / haut) et marge apres pub ====')
    for name, price, n, h, l in OFFERS:
        marg = name.endswith('(marginal)')
        ms = {sc: contrib(price, n, h, l, sc, True, marg) for sc in ('bas', 'central', 'haut')}
        c = ms['central']
        line = '%-34s TTC %6.2f HT %6.2f | cout+droits %5.2f-%5.2f (c %5.2f) | paiement %4.2f | retours %4.2f | marge avt pub %6.2f / %6.2f / %6.2f' % (
            name, price, c[0], ms['bas'][1] + ms['bas'][2], ms['haut'][1] + ms['haut'][2], c[1] + c[2], c[3], c[4], ms['bas'][5], c[5], ms['haut'][5])
        if not marg:
            line += ' | apres CAC 15/25/40 (central) %6.2f %6.2f %6.2f | point mort CAC %5.1f-%5.1f' % (c[5] - 15, c[5] - 25, c[5] - 40, ms['haut'][5], ms['bas'][5])
        print(line)
    # autres produits
    print('\n==== Autres produits (TVA reversee, central, avant pub) ====')
    extra = [('Soya 2.0 1x (housse incluse)', 59.90, 11.0, 17.0, 23.0),
             ('Soya 2.0 Duo', 89.90, 22.0, 34.0, 46.0),
             ('Soya 2.0 Famille (4)', 129.90, 44.0, 68.0, 92.0),
             ('Enfant 1x', 49.90, 9.0, 14.0, 20.0),
             ('Enfant Duo', 89.90, 18.0, 28.0, 40.0),
             ('Lombaire seul (catalogue)', 49.90, 6.0, 9.0, 14.0)]
    for name, price, lo, mid, hi in extra:
        out = []
        for sc, cg in (('bas', lo), ('central', mid), ('haut', hi)):
            ht = price / 1.2; pct, fix = PAY[sc]
            out.append(ht - cg - price * pct - fix - price * RET[sc] - (DUTY_PER_CAT[sc]))
        print('%-30s TTC %6.2f | cout %5.2f-%5.2f | marge avt pub %6.2f / %6.2f / %6.2f' % (name, price, lo, hi, *out))
