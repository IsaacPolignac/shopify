/* Somnila design v6: small behaviours for the sv6-* sections.
   Add to cart goes through Shrine's own <product-form>, so the theme's cart drawer opens as usual. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };

  /* Hero: colour swatches swap the floating pillow and the button's variant. */
  function initHero(root) {
    $$('input[data-sv6-colour]', root).forEach(function (input) {
      input.addEventListener('change', function () {
        var img = $('[data-sv6-hero-img]', root), label = $('[data-sv6-colour-name]', root), cta = $('[data-sv6-cta]', root);
        if (img) { img.style.opacity = 0; setTimeout(function () { img.src = input.dataset.img; img.alt = input.dataset.alt; img.style.opacity = 1; }, 200); }
        if (label) label.textContent = input.value;
        if (cta && input.dataset.url) cta.href = input.dataset.url;
        var st = $('.sv6-stick img'); if (st && input.dataset.img) st.src = input.dataset.img;
      });
    });
  }

  /* Two heights: flip the side view. */
  function initHeights(root) {
    $$('[data-sv6-edge]', root).forEach(function (b) {
      b.addEventListener('click', function () {
        var s = b.dataset.sv6Edge;
        $$('.sv6-fig', root).forEach(function (f) { f.dataset.state = s; });
        $$('[data-sv6-edge]', root).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      });
    });
  }

  /* Product page: colour + offer choose the variant that the theme's form adds to the cart. */
  function initProduct(root) {
    var data = $('script[data-sv6-offers]', root); if (!data) return;
    var offers = JSON.parse(data.textContent), idInput = $('form input[name="id"]', root);
    var btnPrice = $('[data-sv6-btn-price]', root), mainImg = $('[data-sv6-main]', root), colName = $('[data-sv6-col-name]', root);
    var stickPrice = $('.sv6-stick [data-sv6-stick-price]');
    function colour() { var c = $('input[name="sv6-colour"]:checked', root); return c ? c.value : null; }
    function tier() { var t = $('input[name="sv6-tier"]:checked', root); return t ? offers[+t.value] : offers[0]; }
    function pick(o, col) {
      var v = null;
      if (col) for (var i = 0; i < o.variants.length; i++) if (o.variants[i].colour === col && o.variants[i].available) { v = o.variants[i]; break; }
      if (!v) for (var j = 0; j < o.variants.length; j++) if (o.variants[j].available) { v = o.variants[j]; break; }
      return v || o.variants[0];
    }
    function update(fromColour) {
      var o = tier(), col = colour(), v = pick(o, col);
      if (idInput && v) idInput.value = v.id;
      if (btnPrice && v) btnPrice.textContent = v.price;
      if (stickPrice && v) stickPrice.textContent = v.price;
      offers.forEach(function (of, i) { var el = $('[data-sv6-tier-price="' + i + '"]', root), w = pick(of, col); if (el && w) el.textContent = w.price; });
      if (fromColour && col) {
        if (colName) colName.textContent = col;
        var base = pick(offers[0], col);
        if (base && base.image && mainImg) { mainImg.src = base.image; mainImg.alt = offers[0].title + ' in ' + col; }
        var stImg = $('.sv6-stick img'); if (stImg && base && base.image) stImg.src = base.image;
      }
      var atc = $('[data-sv6-atc]', root); if (atc && v) atc.disabled = !v.available;
    }
    $$('input[name="sv6-colour"], input[name="sv6-tier"]', root).forEach(function (i) {
      i.addEventListener('change', function () { update(i.name === 'sv6-colour'); });
    });
    $$('[data-sv6-thumb]', root).forEach(function (b) {
      b.addEventListener('click', function () {
        if (mainImg) { mainImg.src = b.dataset.src; mainImg.alt = b.dataset.alt || ''; }
        $$('[data-sv6-thumb]', root).forEach(function (x) { x.setAttribute('aria-current', String(x === b)); });
      });
    });
    var want = new URLSearchParams(location.search).get('offer');
    if (want) offers.forEach(function (o, i) { if (o.handle === want) { var r = $('input[name="sv6-tier"][value="' + i + '"]', root); if (r) r.checked = true; } });
    update(true);
  }

  /* Sticky bar: shows once the page's main button is off screen. */
  function initStick() {
    var bar = $('.sv6-stick'); if (!bar) return;
    var ref = $('[data-sv6-atc]') || $('.sv6-hero [data-sv6-cta]'); if (!ref) return;
    var btn = $('button, a', bar);
    if (btn) btn.addEventListener('click', function (e) {
      var atc = $('[data-sv6-atc]');
      if (atc) { e.preventDefault(); atc.click(); }
      else { var cta = $('.sv6-hero [data-sv6-cta]'); if (cta) btn.href = cta.href; }
    });
    function onScroll() {
      var r = ref.getBoundingClientRect(), stop = $('.sv6-final'), end = stop && stop.getBoundingClientRect().top < innerHeight * .6;
      var on = (r.bottom < 60 || r.top > innerHeight) && !end;
      bar.classList.toggle('is-on', on); bar.setAttribute('aria-hidden', String(!on));
      if (btn) btn.tabIndex = on ? 0 : -1;
    }
    addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); onScroll();
  }

  function boot() {
    $$('.sv6-hero').forEach(initHero);
    $$('.sv6-heights').forEach(initHeights);
    $$('.sv6-product').forEach(initProduct);
    initStick();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  document.addEventListener('shopify:section:load', boot);
})();
