/* Somnila v7: behaviours for the sv7-* sections (PurePeptide architecture).
   Add to cart always goes through Shrine's own <product-form>, so the theme's cart drawer opens as usual. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var json = function (el) { try { return JSON.parse(el.textContent); } catch (e) { return null; } };

  /* Product cards: colour dots and the 1 / 2 pillow chips choose what "Add" puts in the cart. */
  function initCard(card) {
    if (card.dataset.sv7Ready) return; card.dataset.sv7Ready = '1';
    var data = json($('script[data-sv7-card-data]', card) || { textContent: 'null' }); if (!data) return;
    var idInput = $('input[name="id"]', card), price = $('[data-sv7-price]', card), unit = $('[data-sv7-unit]', card);
    var add = $('[data-sv7-add]', card), cname = $('[data-sv7-cname]', card);
    function colour() { var c = $('.sv7-dots input:checked', card); return c ? c.value : null; }
    function set() { var q = $('.sv7-chips input:checked', card); return q ? +q.value : 0; }
    function pick(list, col) {
      var i, v = null;
      if (col) for (i = 0; i < list.length; i++) if (list[i].c === col && list[i].a) { v = list[i]; break; }
      if (!v && col) for (i = 0; i < list.length; i++) if (list[i].c === col) { v = list[i]; break; }
      if (!v) for (i = 0; i < list.length; i++) if (list[i].a) { v = list[i]; break; }
      return v || list[0];
    }
    function update() {
      var s = set(), list = data.sets[s] || data.sets[0], v = pick(list, colour());
      if (!v) return;
      if (idInput) idInput.value = v.id;
      if (price) price.textContent = v.m;
      if (unit) unit.textContent = s ? (unit.dataset.pair || '') : (unit.dataset.single || '');
      if (add) add.disabled = !v.a;
      if (cname) cname.textContent = colour() || '';
      var url = data.urls[s] || data.urls[0];
      $$('[data-sv7-link]', card).forEach(function (a) { a.href = url + (v ? '?variant=' + v.id : ''); });
    }
    $$('.sv7-dots input, .sv7-chips input', card).forEach(function (i) { i.addEventListener('change', update); });
  }

  /* Two heights: accessible tabs; the side view flips for the side / back tabs. */
  function initTabs(root) {
    var tabs = $$('[role="tab"]', root), fig = $('.sv7-fig', root);
    function select(t, focus) {
      tabs.forEach(function (x) {
        var on = x === t; x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1;
        var p = document.getElementById(x.getAttribute('aria-controls')); if (p) p.hidden = !on;
      });
      if (fig && (t.dataset.state === 'side' || t.dataset.state === 'back')) fig.dataset.state = t.dataset.state;
      if (focus) t.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var k = e.key, n = null;
        if (k === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        else if (k === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        else if (k === 'Home') n = tabs[0]; else if (k === 'End') n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
  }

  /* Product page: options + set tile + quantity choose what the theme's form adds. */
  function initProduct(root) {
    var offers = json($('script[data-sv7-offers]', root) || { textContent: 'null' }); if (!offers) return;
    var base = offers[0], idInput = $('form input[name="id"]', root), qtyField = $('[data-sv7-qty-field]', root);
    var priceEl = $('[data-sv7-price]', root), unitEl = $('[data-sv7-unit]', root), btnPrice = $('[data-sv7-btn-price]', root);
    var atc = $('[data-sv7-atc]', root), stock = $('[data-sv7-stock]', root), mainImg = $('[data-sv7-main]', root);
    var stickPrice = $('[data-sv7-stick-price]'), stickImg = $('[data-sv7-stick-img]');
    var nOpts = base.variants[0] ? base.variants[0].o.length : 0;

    function selected() { var out = []; for (var i = 0; i < nOpts; i++) { var c = $('input[name="sv7-opt-' + i + '"]:checked', root); out.push(c ? c.value : null); } return out; }
    function tier() { var t = $('input[name="sv7-tier"]:checked', root); return t ? +t.value : 0; }
    function baseVariant(sel) {
      for (var i = 0; i < base.variants.length; i++) {
        var v = base.variants[i], ok = true;
        for (var j = 0; j < nOpts; j++) if (sel[j] !== null && v.o[j] !== sel[j]) { ok = false; break; }
        if (ok) return v;
      }
      return null;
    }
    function colourIndex() {
      var i, groups = $$('.sv7-optgroup legend', root);
      for (i = 0; i < groups.length; i++) { var t = groups[i].textContent.toLowerCase(); if (t.indexOf('colour') > -1 || t.indexOf('color') > -1) return i; }
      return 0;
    }
    var cIdx = colourIndex();
    function offerVariant(o, col) {
      var i;
      for (i = 0; i < o.variants.length; i++) if (o.variants[i].o[0] === col && o.variants[i].a) return o.variants[i];
      for (i = 0; i < o.variants.length; i++) if (o.variants[i].a) return o.variants[i];
      return o.variants[0];
    }
    function update(fromOption) {
      var sel = selected(), bv = baseVariant(sel), t = tier(), o = offers[t] || base, v = bv;
      if (t > 0) v = offerVariant(o, sel[cIdx]);
      if (!v) { if (atc) atc.disabled = true; if (stock) { stock.textContent = 'Unavailable'; stock.classList.add('is-out'); } return; }
      if (idInput) idInput.value = v.id;
      if (priceEl) priceEl.textContent = v.m;
      if (btnPrice) btnPrice.textContent = v.m;
      if (stickPrice) stickPrice.textContent = v.m;
      if (unitEl) unitEl.textContent = o.unit || '';
      if (atc) atc.disabled = !v.a;
      if (stock) { stock.textContent = v.a ? 'In stock' : 'Sold out'; stock.classList.toggle('is-out', !v.a); }
      sel.forEach(function (val, i) { var n = $('[data-sv7-optname="' + i + '"]', root); if (n) n.textContent = val || ''; });
      if (fromOption && bv && bv.img && mainImg) {
        mainImg.style.opacity = .3; var img = new Image(); img.onload = function () { mainImg.src = bv.img; mainImg.style.opacity = 1; }; img.src = bv.img;
        if (stickImg) stickImg.src = bv.img;
      }
      if (bv) history.replaceState(null, '', location.pathname + '?variant=' + bv.id + (t > 0 ? '&offer=' + o.handle : ''));
      syncAddon(sel[cIdx]);
    }
    function syncAddon(col) {
      var box = $('[data-sv7-addon]', root); if (!box) return;
      var list = json($('script[data-sv7-addon-data]', box) || { textContent: '[]' }) || [], pickV = null, i;
      for (i = 0; i < list.length; i++) if (list[i].c === col && list[i].a) { pickV = list[i]; break; }
      if (!pickV) for (i = 0; i < list.length; i++) if (list[i].a) { pickV = list[i]; break; }
      if (!pickV) return;
      var inp = $('input[name="id"]', box), lab = $('[data-sv7-addon-colour]', box);
      if (inp) inp.value = pickV.id; if (lab) lab.textContent = pickV.c;
    }
    $$('input[name^="sv7-opt-"]', root).forEach(function (i) { i.addEventListener('change', function () { update(true); }); });
    $$('input[name="sv7-tier"]', root).forEach(function (i) { i.addEventListener('change', function () { update(false); }); });

    var qIn = $('[data-sv7-qty-input]', root);
    function setQty(n) { n = Math.max(1, Math.min(20, n | 0 || 1)); if (qIn) qIn.value = n; if (qtyField) qtyField.value = n; }
    $$('[data-sv7-qty]', root).forEach(function (b) { b.addEventListener('click', function () { setQty((+qIn.value || 1) + (+b.dataset.sv7Qty)); }); });
    if (qIn) qIn.addEventListener('change', function () { setQty(+qIn.value); });

    $$('[data-sv7-thumb]', root).forEach(function (b) {
      b.addEventListener('click', function () {
        if (mainImg) { mainImg.src = b.dataset.src; mainImg.alt = b.dataset.alt || ''; }
        $$('[data-sv7-thumb]', root).forEach(function (x) { x.setAttribute('aria-current', String(x === b)); });
      });
    });

    var want = new URLSearchParams(location.search).get('offer');
    if (want) offers.forEach(function (o, i) { if (o.handle === want) { var r = $('input[name="sv7-tier"][value="' + i + '"]', root); if (r) r.checked = true; } });
    update(!!want);
  }

  /* Sticky bar on the product page: shows once the main button has scrolled away. */
  function initStick() {
    var bar = $('.sv7-stick'), ref = $('[data-sv7-atc]'); if (!bar || !ref) return;
    var btn = $('[data-sv7-stick-btn]', bar);
    if (btn) btn.addEventListener('click', function () { ref.click(); });
    function onScroll() {
      var r = ref.getBoundingClientRect(), foot = $('.sv7-foot'), end = foot && foot.getBoundingClientRect().top < innerHeight;
      var on = r.bottom < 0 && !end;
      bar.classList.toggle('is-on', on); bar.setAttribute('aria-hidden', String(!on)); if (btn) btn.tabIndex = on ? 0 : -1;
    }
    addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); onScroll();
  }

  function boot() {
    $$('[data-sv7-card]').forEach(initCard);
    $$('.sv7-heights').forEach(initTabs);
    $$('.sv7-pdp').forEach(initProduct);
    $$('[data-sv7-sort]').forEach(function (s) {
      s.addEventListener('change', function () { var u = new URL(location.href); u.searchParams.set('sort_by', s.value); u.searchParams.delete('page'); location.href = u.toString(); });
    });
    $$('form[data-sv7-loc] select').forEach(function (s) { s.addEventListener('change', function () { s.form.submit(); }); });
    initStick();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  document.addEventListener('shopify:section:load', boot);
})();
