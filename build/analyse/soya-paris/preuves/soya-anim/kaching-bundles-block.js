(function() {
  try {
    if (typeof document != "undefined") {
      var Qt = document.createElement("style");
      Qt.id = "kaching-bundles-styles", Qt.appendChild(document.createTextNode(`.kaching-bundles .kaching-bundles__multiple-gifts-selector{position:relative}.kaching-bundles .kaching-bundles__multiple-gifts-selector__clickable-overlay{position:absolute;inset:0;cursor:pointer}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photos{position:relative;display:flex;align-items:center;flex-shrink:0;padding-block:2px}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo{box-sizing:border-box;width:40px;height:40px;-o-object-fit:cover;object-fit:cover;background-color:#fff;border-radius:8px;border:1px solid var(--kaching-free-gift-background-color, #fff)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__multiple-gifts-selector__photo{border-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo:not(:first-child){margin-inline-start:-16px}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo-count{box-sizing:border-box;position:absolute;top:0;inset-inline-end:0;transform:translate(18%,-3%);display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;border:1px solid var(--kaching-free-gift-text-color, #000);background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3));color:var(--kaching-free-gift-text-color, #000);font-size:calc(var(--kaching-free-gift-font-size, 13px) - 2px);font-weight:var(--kaching-free-gift-font-weight, bold);line-height:1}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__multiple-gifts-selector__photo-count{border-color:var(--kaching-free-gift-selected-text-color, #fff);background-color:var(--kaching-free-gift-selected-background-color, #000);color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__bundle-products{display:flex;justify-content:space-evenly;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4)}.kaching-bundles .kaching-bundles__bundle-products .kaching-bundles__bar-variant-selects{justify-content:center}.kaching-bundles .kaching-bundles__bundle-products__divider{display:flex;flex-direction:column;align-items:center;width:0;overflow:visible}.kaching-bundles .kaching-bundles__bundle-products__divider *{max-width:initial}.kaching-bundles .kaching-bundles__bundle-products__divider-line{display:flex;flex:1;width:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__bundle-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__product{display:flex;flex:1;flex-direction:column;align-items:center;min-width:0;gap:5px;padding:12px}.kaching-bundles .kaching-bundles__bundle-products__product.kaching-bundles__bundle-products__product--placeholder{justify-content:center;text-align:center;font-size:13px;font-weight:700;color:#555}.kaching-bundles .kaching-bundles__bundle-products__wrapper{display:flex;align-items:center;gap:10px;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__content{display:flex;flex-direction:column;align-items:flex-start;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__bundle-products__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bundle-products__image-placeholder{flex-shrink:0;height:50px;width:50px}.kaching-bundles .kaching-bundles__bundle-products__title{overflow-wrap:break-word;text-align:center;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__bundle-products__pricing{display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:center;align-items:baseline;gap:5px}.kaching-bundles .kaching-bundles__bundle-products__price{font-size:13px;font-weight:700;color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bundle-products__full-price{text-decoration:line-through;font-size:12px;color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bundle-products__unit-price{width:100%;text-align:center;font-size:12px;color:var(--bar-full-price-color, #555);text-transform:uppercase}.kaching-bundles .kaching-bundles__bundle-products--hidden{display:none}.kaching-bundles .kaching-bundles__bundle-products--vertical{flex-direction:column}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider{flex-direction:row;width:100%;height:0}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider-line{width:auto;height:1px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__product{flex-direction:row;justify-content:space-between;padding:14px 12px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing--with-unit-price{flex-flow:row wrap;justify-content:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__unit-price{text-align:end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__title{text-align:start}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__image{width:50px;height:auto;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bar-variant-selects{justify-content:flex-start}.kaching-bundles .kaching-bundles__mix-and-match-products{display:flex;flex-direction:column;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4);overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-products--hidden{display:none}.kaching-bundles .kaching-bundles__mix-and-match-products__divider{display:flex;flex-direction:row;align-items:center;gap:4px;width:100%;height:0;overflow:visible}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-line{display:flex;flex:1;width:auto;height:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-product{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;gap:12px;align-items:center;padding:12px}.kaching-bundles .kaching-bundles__mix-and-match-product__content{display:flex;flex-direction:column;gap:6px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing{display:flex;justify-content:flex-end}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end;gap:0}.kaching-bundles .kaching-bundles__mix-and-match-product__image-link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__mix-and-match-product__image-placeholder{height:50px;width:50px}.kaching-bundles .kaching-bundles__mix-and-match-product__title-link{align-self:flex-start;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__title{overflow-wrap:break-word;text-align:start;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__mix-and-match-product__swap-button{display:inline-flex;align-items:center;justify-content:center;padding:8px 12px;border-radius:var(--bar-border-radius, 8px);background-color:var(--collection-product-button-color, #2b2b2b);color:var(--collection-product-button-text-color, #ffffff);font-size:13px;line-height:1.2;text-align:center;cursor:pointer;white-space:nowrap}.kaching-bundles .kaching-bundles__mix-and-match-products__placeholder{display:flex;align-items:center;justify-content:center;padding:14px 12px;color:#0006;font-style:italic}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__bar-main{gap:10px}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__selling-plan-select{margin-top:5px}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox.kaching-bundles__checkbox-upsells__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__image{width:initial;max-width:50px;max-height:50px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;justify-content:center;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-multiple-gifts-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal__content{position:relative;z-index:10000;min-width:min(470px,95%);max-width:700px;max-height:calc(100dvh - 20px);width:100%;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__choose-multiple-gifts{display:flex;flex-direction:column;border-radius:10px;background-color:#fff;max-height:100%;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__header{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 0;margin-block:2px 18px;color:var(--kaching-choose-multiple-gifts-text-color, #000);flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-multiple-gifts__products{display:flex;flex-direction:column;gap:16px;padding:0 16px;flex:1;overflow-y:auto;min-height:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{display:flex;align-items:center;justify-content:space-between;gap:20px}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{gap:12px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{flex-direction:column;align-items:stretch;gap:12px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{display:flex;align-items:center;gap:12px;min-width:0;flex:1}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{gap:8px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-multiple-gifts-photo-size, 100px);max-height:calc(var(--kaching-choose-multiple-gifts-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-multiple-gifts-text-size, 14px);color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selectors{display:flex;flex-direction:column;gap:8px;margin-top:8px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-row{display:flex;align-items:flex-start;gap:8px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-counter{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:24px;height:24px;font-size:12px;color:#000}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-content{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-with-counter{display:flex;align-items:center;gap:8px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-wrapper{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-multiple-gifts-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-multiple-gifts-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;display:flex;justify-content:center;align-items:center;border:none;font-weight:600;padding:10px 12px;line-height:1.4;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-multiple-gifts-button-size, 16px);background-color:var(--kaching-choose-multiple-gifts-button-color, #7f56d9);color:var(--kaching-choose-multiple-gifts-button-text-color, #fff)}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{flex:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--disabled{background-color:#eaecf0;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--selected{display:flex;align-items:center;gap:8px;background-color:#fff;color:#414651;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;margin-top:16px;padding:16px;border-top:1px solid #e5e5e3;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-text{font-size:14px;font-weight:400;color:#535862;flex:1;min-width:0;overflow-wrap:break-word}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-buttons{display:flex;gap:8px;flex:1;min-width:0;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;height:40px;min-width:80px;font-size:14px;font-weight:600;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:1;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--cancel{background-color:#fff;border:1px solid #d5d7da;color:#414651}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm{background-color:#000;color:#fff}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm:disabled{background-color:#eaecf0;border:1px solid #e9eaeb;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{display:flex;align-items:center;gap:12px;flex-shrink:0}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{gap:8px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{flex-direction:row-reverse;justify-content:space-between;flex-shrink:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity{display:flex;align-items:center;justify-content:space-between;width:72px;height:42px;border:1px solid #d6d6d6;border-radius:8px;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button{all:unset;display:flex;align-items:center;justify-content:center;width:28px;height:100%;cursor:pointer;color:#424242}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button[aria-disabled=true]{opacity:.4;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button img{filter:brightness(0) saturate(100%) invert(24%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(89%)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-value{font-size:14px;font-weight:600;color:#414651}body:has(.kaching-bundles__choose-multiple-gifts-modal){overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-mix-and-match-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__mix-and-match-choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-mix-and-match-choose-product-photo-size, 100px);max-height:calc(var(--kaching-mix-and-match-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-mix-and-match-choose-product-text-size, 14px);color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-mix-and-match-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-mix-and-match-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-mix-and-match-choose-product-button-size, 16px);background-color:var(--kaching-mix-and-match-choose-product-button-color, #7f56d9);color:var(--kaching-mix-and-match-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__mix-and-match-choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__bar-collection-products{display:flex;flex-direction:column;gap:5px;margin-top:5px}.kaching-bundles .kaching-bundles__collection-product{display:flex;gap:16px;align-items:center;justify-content:space-between}.kaching-bundles .kaching-bundles__collection-product .kaching-bundles__bar-variant-names{display:none;margin-block:0}.kaching-bundles .kaching-bundles__collection-product__image--default{background-color:#fff;border:1px solid #e9e9e9;color:#000}.kaching-bundles .kaching-bundles__collection-product--require-selection{padding:8px;border-radius:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color)}.kaching-bundles .kaching-bundles__collection-product--require-selection .kaching-bundles__collection-product__image--default{border-color:var(--kaching-collection-breaks-require-selection-text-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert{display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px 12px;border-radius:12px;font-size:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color, rgb(254, 228, 226));color:var(--kaching-collection-breaks-require-selection-text-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__collection-breaks-alert__icon{flex-shrink:0;width:16px;height:16px}.kaching-bundles .kaching-bundles__collection-product__main{display:flex;gap:16px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__collection-product__content{display:flex;flex-direction:column;gap:3px;min-width:0}.kaching-bundles .kaching-bundles__collection-product__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__collection-product__image{flex-shrink:0;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-collection-breaks-product-photo-size, 40px);border-radius:var(--kaching-collection-breaks-image-border-radius, 0)}.kaching-bundles .kaching-bundles__collection-product__title{font-size:16px;color:var(--kaching-collection-breaks-product-title-color, #000)}.kaching-bundles .kaching-bundles__collection-product__choose-product-image{cursor:pointer;line-height:0}.kaching-bundles .kaching-bundles__collection-product__choose-product-button{cursor:pointer;color:#fff;font-size:12px;line-height:1.4;padding:6px 14px;border-radius:8px;background-color:var(--kaching-collection-breaks-button-color, #333)}.kaching-bundles .kaching-bundles__collection-product__remove-button{display:flex;align-items:center;justify-content:center;height:24px;width:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__choose-product__controls{display:flex;align-items:center;gap:10px;margin-bottom:14px}.kaching-bundles .kaching-bundles__choose-product__search-field{position:relative;flex:1 1 auto;min-width:0}.kaching-bundles .kaching-bundles__choose-product__search-icon{position:absolute;top:50%;left:12px;transform:translateY(-50%);width:16px;height:16px;pointer-events:none}.kaching-bundles .kaching-bundles__choose-product__search-input{box-sizing:border-box;width:100%;padding:10px 12px 10px 36px;border:1px solid #d5d7da;border-radius:8px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__sort{position:relative;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__sort-button{display:inline-flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:var(--kaching-choose-product-text-color, #000);font-size:14px;line-height:1;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-icon{width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:2;min-width:210px;display:flex;flex-direction:column;border:1px solid #d5d7da;border-radius:10px;background:#fff;box-shadow:0 8px 24px #10182824;overflow:hidden}.kaching-bundles .kaching-bundles__choose-product__sort-option{display:flex;align-items:center;justify-content:space-between;gap:12px;border:none;background:#fff;text-align:start;padding:10px 12px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-option-check{flex-shrink:0;width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-option:hover{background:#f8fafc}.kaching-bundles .kaching-bundles__choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon-wrapper{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-bottom:16px}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon{width:48px;height:48px}.kaching-bundles .kaching-bundles__choose-product__empty-state-title{font-size:18px;font-weight:500;color:#181d27}.kaching-bundles .kaching-bundles__choose-product__empty-state-description{margin-top:8px;font-size:14px;color:#535862}.kaching-bundles .kaching-bundles__choose-product__empty-state-clear-button{margin-top:16px;padding:10px 16px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:#414651;font-size:14px;font-weight:600}.kaching-bundles .kaching-bundles__choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-product-photo-size, 100px);max-height:calc(var(--kaching-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-product-text-size, 14px);color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-product-button-size, 16px);background-color:var(--kaching-choose-product-button-color, #7f56d9);color:var(--kaching-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__free-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__free-gift.kaching-bundles__free-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__free-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__free-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__free-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__content--clickable{cursor:pointer}.kaching-bundles .kaching-bundles__free-gift__add-button{all:unset;display:flex;cursor:pointer;line-height:0;padding:4px;margin:-4px -4px -4px -6px;color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__add-button{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-text-color, #000);font-size:var(--kaching-free-gift-font-size, 13px);font-weight:var(--kaching-free-gift-font-weight, bold);font-style:var(--kaching-free-gift-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0)}.kaching-bundles .kaching-bundles__free-gift__full-price{flex-shrink:0;text-decoration:line-through;font-size:calc(var(--kaching-free-gift-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__full-price{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__divider{height:1px;display:flex}.kaching-bundles .kaching-bundles__free-gift-summary{gap:8px;justify-content:flex-start}.kaching-bundles .kaching-bundles__free-gift-summary__images{display:flex;flex-shrink:0;align-items:center}.kaching-bundles .kaching-bundles__free-gift-summary__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0);margin-inline-start:-8px;border:1px solid var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift-summary__image:first-child{margin-inline-start:0}.kaching-bundles .kaching-bundles__free-gift-summary__image--no-border{border-color:transparent}.kaching-bundles .kaching-bundles__upsell{display:flex;align-items:center;justify-content:space-between;position:relative;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);margin-inline:1px;gap:5px 10px;background-color:var(--kaching-upsell-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__upsell.kaching-bundles__upsell--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__upsell--badge-border-all{margin:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-top{margin-top:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-bottom{margin-bottom:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-left{min-height:var(--badge-border-min-length, auto);margin-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-right{min-height:var(--badge-border-min-length, auto);margin-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--all{inset:calc(-1 * var(--badge-border-thickness, 22px))}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--top{inset:calc(-1 * var(--badge-border-thickness, 22px)) 0 auto;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--bottom{inset:auto 0 calc(-1 * var(--badge-border-thickness, 22px));height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--left{inset:0 auto 0 calc(-1 * var(--badge-border-thickness, 22px));width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--right{inset:0 calc(-1 * var(--badge-border-thickness, 22px)) 0 auto;width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__image{width:auto;height:var(--kaching-upsell-image-height, 30px);border-radius:var(--kaching-upsell-image-border-radius, 0)}.kaching-bundles .kaching-bundles__upsell__checkbox{all:unset;display:flex;flex-shrink:0;width:16px;height:16px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;margin-inline-end:4px;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__checkbox.kaching-bundles__upsell__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__text{display:flex;min-height:30px;align-items:center;cursor:pointer;overflow-wrap:break-word;color:var(--kaching-upsell-text-color, #000);font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--kaching-upsell-font-weight, bold);font-style:var(--kaching-upsell-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell__text{color:var(--kaching-upsell-selected-text-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing{align-items:flex-end;display:flex;flex-direction:column;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__upsell__price{font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--bar-title-font-weight);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing-row--secondary .kaching-bundles__upsell__price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px)}.kaching-bundles .kaching-bundles__upsell__full-price,.kaching-bundles .kaching-bundles__upsell__unit-price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__upsell__full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__upsell__unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__free-gift{flex-direction:column;padding-inline-end:8px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell__pricing{flex-direction:row;gap:5px;align-items:center}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-all .kaching-bundles__free-gift:last-child,.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__free-gift:last-child{margin-inline:0;margin-block-end:0;border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__free-gift:last-child{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-upsell-selected-background-color, rgba(0, 0, 0, .2))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-left{margin-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-right{margin-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all:last-child,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-bottom:last-child{margin-block-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gifts{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--bar-border-color, #fff)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-deal-bar-progressive-gift-image-size, 40px);border-radius:var(--kaching-deal-bar-progressive-gift-corner-radius, 0)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__image--locked-product{opacity:.4}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-text-color, #000);font-size:var(--kaching-deal-bar-progressive-gift-text-size, 14px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-selected-text-color, #fff);font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__labels{display:flex;align-items:center;gap:5px}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-label-background-color);color:var(--kaching-deal-bar-progressive-gift-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-label-text-size, 12px);padding:2px 8px;border-radius:16px;white-space:nowrap;font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label-crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon{display:flex;align-items:center;justify-content:center;color:var(--kaching-deal-bar-progressive-gift-locked-icon-color, #667085)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-locked-text-color, #555);font-size:var(--kaching-deal-bar-progressive-gift-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-locked-label-background-color);color:var(--kaching-deal-bar-progressive-gift-locked-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-locked-label-text-size, 12px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--bar-selected-border-color)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__product-personalisation{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;gap:10px;background-color:#fafafa;border-radius:calc(var(--bar-border-radius, 10px) - 4px);border:1px dashed #d6d6d6;margin-top:12px;cursor:pointer}.kaching-bundles .kaching-bundles__product-personalisation--filled{border-style:solid}.kaching-bundles .kaching-bundles__product-personalisation--required-error{border-style:solid;border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__product-personalisation__main{display:flex;align-items:center;gap:10px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__image-wrapper{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--kaching-product-personalisation-image-height, 40px);height:var(--kaching-product-personalisation-image-height, 40px);background-color:#fff;border-radius:calc(var(--bar-border-radius, 10px) - 6px);border:1px solid #d6d6d6}.kaching-bundles .kaching-bundles__product-personalisation__image{display:flex;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.kaching-bundles .kaching-bundles__product-personalisation__image--default{width:70%;height:70%;-o-object-fit:contain;object-fit:contain;opacity:.7;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__content{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__title{color:#000;font-size:14px;font-weight:600;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__subtitle{color:#555;font-size:13px;font-weight:400;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__pricing{display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0;gap:2px}.kaching-bundles .kaching-bundles__product-personalisation__price{font-size:14px;font-weight:500;font-style:normal;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__compare-at-price{font-size:12px;font-weight:400;font-style:normal;color:#888;line-height:1.2;text-decoration:line-through}.kaching-bundles .kaching-bundles__product-personalisation__price .kaching-bundles__product-personalisation__unit-label{font-size:calc(var(--kaching-bundles-unit-label-font-size, 14px) - 4px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style, normal)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation{flex-direction:column;align-items:stretch;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__main{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__pricing{flex-direction:row;justify-content:center;gap:8px;align-items:baseline}.kaching-bundles .kaching-bundles__personalisation-modal-overlay{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-product-personalisation-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__personalisation-modal-overlay--inline{position:relative;z-index:auto;inset:auto;padding:20px;border-radius:var(--kaching-product-personalisation-radius, 16px)}.kaching-bundles .kaching-bundles__personalisation-modal-overlay__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__personalisation-modal{display:flex;flex-direction:column;padding:var(--kaching-product-personalisation-gap-0, 20px);border-radius:var(--kaching-product-personalisation-radius, 16px);background-color:#fff}.kaching-bundles .kaching-bundles__personalisation-modal__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--kaching-product-personalisation-gap-0, 20px);color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__heading{margin:0;font-weight:650;font-size:var(--kaching-product-personalisation-font-0, 24px)}.kaching-bundles .kaching-bundles__personalisation-modal__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__items{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-1, 16px);padding:var(--kaching-product-personalisation-gap-1, 16px);border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px)}.kaching-bundles .kaching-bundles__personalisation-modal__item{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-info{display:flex;align-items:center;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-image-wrapper{flex-shrink:0;width:var(--kaching-product-personalisation-image-size, 48px);height:var(--kaching-product-personalisation-image-size, 48px);border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);border:1px solid #e9e9e9;overflow:hidden}.kaching-bundles .kaching-bundles__personalisation-modal__item-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__personalisation-modal__item-details{display:flex;flex-direction:column;gap:2px;min-width:0}.kaching-bundles .kaching-bundles__personalisation-modal__item-title{font-size:var(--kaching-product-personalisation-text-size, 16px);font-weight:600;color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__item-variant{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-secondary-text-color, rgb(115, 115, 115))}.kaching-bundles .kaching-bundles__personalisation-modal__input-wrapper{display:flex;flex-direction:column;gap:4px}.kaching-bundles .kaching-bundles__personalisation-modal__input-container{position:relative;display:flex;align-items:center}.kaching-bundles .kaching-bundles__personalisation-modal__input-clear{all:unset;position:absolute;right:12px;display:flex;align-items:center;justify-content:center;width:16px;height:16px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__input{width:100%;padding:10px 12px;border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);outline:none!important;box-shadow:none!important;box-sizing:border-box}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus{border-color:#333;outline:none!important;box-shadow:none!important}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus-visible{outline:2px solid #333!important;outline-offset:-1px}.kaching-bundles .kaching-bundles__personalisation-modal__input::-moz-placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input::placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input--with-clear{padding-right:40px}.kaching-bundles .kaching-bundles__personalisation-modal__input--error{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input--error:focus{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter{font-size:var(--kaching-product-personalisation-font-3, 12px);color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter--error{color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-error{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__actions{display:flex;gap:var(--kaching-product-personalisation-gap-1, 16px);margin-top:var(--kaching-product-personalisation-gap-0, 20px)}.kaching-bundles .kaching-bundles__personalisation-modal__button{flex:1;padding:12px 16px;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);font-weight:500;cursor:pointer;border:none;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__personalisation-modal__button--cancel{background:#fff;color:#333;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__personalisation-modal__button--confirm{color:var(--kaching-product-personalisation-button-text-color, rgb(255, 255, 255));border:1px solid var(--kaching-product-personalisation-button-color, rgb(0, 0, 0));background:var(--kaching-product-personalisation-button-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__button--disabled{cursor:not-allowed;border:1px solid #e9eaeb;background:#eaecf0;color:#98a2b3}.kaching-bundles .kaching-bundles__progressive-gifts{display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1) + 4px);margin-top:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__header{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__title{color:var(--kaching-bundles-progressive-gifts-title-color, #000);text-align:var(--kaching-bundles-progressive-gifts-title-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-title-weight, bold);font-style:var(--kaching-bundles-progressive-gifts-title-style, normal);font-size:var(--kaching-bundles-progressive-gifts-title-size, 20px)}.kaching-bundles .kaching-bundles__progressive-gifts__subtitle{color:var(--kaching-bundles-progressive-gifts-subtitle-color, #000);text-align:var(--kaching-bundles-progressive-gifts-subtitle-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-subtitle-weight, 450);font-style:var(--kaching-bundles-progressive-gifts-subtitle-style, normal);font-size:var(--kaching-bundles-progressive-gifts-subtitle-size, 16px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts{display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));justify-content:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift{position:relative;display:flex;flex-direction:column;align-items:center;padding:calc(10px * var(--block-spacing, 1));gap:calc(6px * var(--block-spacing, 1));border-radius:var(--kaching-bundles-progressive-gifts-border-radius);background-color:var(--kaching-bundles-progressive-gifts-background-color);box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-border-color, #000)}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked{background-color:var(--kaching-bundles-progressive-gifts-locked-background-color);box-shadow:inset 0 0 0 1px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3));cursor:pointer}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:hover,.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{outline:none}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__progressive-gifts__gift__content{display:flex;flex-direction:column;max-width:100%;gap:calc(6px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper{display:flex;flex-shrink:0;align-items:center;justify-content:center;height:var(--kaching-bundles-progressive-gifts-image-size, 100px);width:initial;max-width:100%;margin-top:max(0px,(100px - var(--kaching-bundles-progressive-gifts-image-size, 100px)) / 5);color:var(--kaching-bundles-progressive-gifts-locked-icon-color, #667085);border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);background-color:transparent}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image{-o-object-fit:contain;object-fit:contain;max-height:100%;max-width:100%;border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);width:initial}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image--locked-product{opacity:.4}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details{display:flex;flex-direction:column;gap:4px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details__content{display:flex;align-items:center;gap:8px}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title{font-weight:500;text-align:center;color:var(--kaching-bundles-progressive-gifts-text-color, #000);font-size:var(--kaching-bundles-progressive-gifts-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title.kaching-bundles__progressive-gifts__gift__title--locked{color:var(--kaching-bundles-progressive-gifts-locked-text-color, #555);font-size:var(--kaching-bundles-progressive-gifts-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__image,.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__title{animation:kaching-progressive-gift-unlock .6s ease-out}@keyframes kaching-progressive-gift-unlock{0%{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label{display:flex;flex-direction:row;align-items:center;position:absolute;top:-8px;left:50%;transform:translate(-50%);line-height:1;gap:calc(5px * var(--block-spacing, 1));padding:calc(8px * var(--block-spacing, 1));background-color:var(--kaching-bundles-progressive-gifts-label-background-color, #eee);border-radius:var(--kaching-bundles-progressive-gifts-border-radius)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text{font-weight:450;color:var(--kaching-bundles-progressive-gifts-label-text-color, #777);font-size:var(--kaching-bundles-progressive-gifts-label-text-size, 12px);white-space:nowrap}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text.kaching-bundles__progressive-gifts__gift__label__text--crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift{flex-direction:row;justify-content:space-between;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__content{flex-direction:row;align-items:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__details{align-items:flex-start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__image-wrapper{margin-top:0;height:var(--kaching-bundles-progressive-gifts-image-size, 50px);width:var(--kaching-bundles-progressive-gifts-image-size, 50px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__title{text-align:start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__label{position:initial;transform:none}.kaching-bundles .kaching-bundles-savings-summary{display:flex;align-items:center;justify-content:var(--kaching-bundles-savings-summary-alignment, flex-start);gap:8px;padding:12px 16px;margin-top:calc(10px * var(--block-spacing, 1));background-color:var(--kaching-bundles-savings-summary-background-color, #f5fcf7);color:var(--kaching-bundles-savings-summary-text-color, #1b5933);border-style:solid;border-color:var(--kaching-bundles-savings-summary-border-color, #457757);border-width:var(--kaching-bundles-savings-summary-border-width, 1px);border-radius:var(--kaching-bundles-savings-summary-border-radius, 8px);font-size:var(--kaching-bundles-savings-summary-title-font-size, 14px);font-style:var(--kaching-bundles-savings-summary-title-font-style, normal);font-weight:var(--kaching-bundles-savings-summary-title-font-weight, 500)}.kaching-bundles .kaching-bundles-savings-summary__icon{display:flex;align-items:center;width:1.2em;height:1.2em;flex-shrink:0;color:var(--kaching-bundles-savings-summary-icon-color, #1c5632)}.kaching-bundles .kaching-bundles-savings-summary__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles-savings-summary__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles-savings-summary__value{color:var(--kaching-bundles-savings-summary-value-color, #000000)}.kaching-bundles .kaching-bundles__scratch-off{position:relative;display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1));margin:calc(5px * var(--block-spacing, 1)) 0}.kaching-bundles .kaching-bundles__scratch-off>.kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__scratch-off--unscratched{-webkit-user-select:none;-moz-user-select:none;user-select:none}.kaching-bundles .kaching-bundles__scratch-off--unscratched .kaching-bundles__bar{pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off--revealing .kaching-bundles__bar-most-popular{animation:kaching-scratch-off-badge-pop .3s cubic-bezier(.34,1.56,.64,1) both}@keyframes kaching-scratch-off-badge-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.kaching-bundles .kaching-bundles__scratch-off--unscratched:not(.kaching-bundles__scratch-off--revealing) .kaching-bundles__bar-most-popular{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off--loading{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off-canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:var(--bar-border-radius, 8px);cursor:pointer;touch-action:none;transition:opacity .3s ease-out;z-index:11}.kaching-bundles .kaching-bundles__scratch-off-canvas--revealing{opacity:0;pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off-hint{position:absolute;inset:0;margin:auto;width:calc(100% - 10px);height:calc(100% - 10px);max-width:317px;max-height:143px;pointer-events:none;opacity:.4;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-hint--hidden{opacity:0}.kaching-bundles .kaching-bundles__scratch-off-hint-path{stroke-dasharray:1200;stroke-dashoffset:1200;animation:kaching-scratch-off-hint-draw 2.8s cubic-bezier(.4,0,.2,1) infinite}@keyframes kaching-scratch-off-hint-draw{0%{stroke-dashoffset:1200;opacity:1}60%{stroke-dashoffset:0;opacity:1}80%{stroke-dashoffset:0;opacity:1}to{stroke-dashoffset:0;opacity:0}}.kaching-bundles .kaching-bundles__scratch-off-title{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;color:var(--scratch-off-title-color);font-weight:700;font-size:var(--scratch-off-title-size);line-height:1.25;text-align:center;pointer-events:none;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-title--hidden{opacity:0}.kaching-bundles .kaching-bundles-sticky-atc{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px;box-shadow:0 0 10px #00000040;background-color:var(--kaching-bundles-sticky-atc-background-color, #fff)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__content{display:flex;align-items:center;gap:16px}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display, block);width:auto;height:var(--kaching-bundles-sticky-atc-product-photo-size, 40px);border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{color:var(--kaching-bundles-sticky-atc-title-color, #000);font-size:var(--kaching-bundles-sticky-atc-title-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-title-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-title-font-weight, 400)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{all:unset;white-space:nowrap;cursor:pointer;background-color:var(--kaching-bundles-sticky-atc-button-color, #303030);color:var(--kaching-bundles-sticky-atc-button-text-color, #fff);font-size:var(--kaching-bundles-sticky-atc-button-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-button-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-button-font-weight, 400);padding:var(--kaching-bundles-sticky-atc-button-padding, 15px);border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius, 8px)}@media (width < 750px){.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display-mobile, var(--kaching-bundles-sticky-atc-image-display, block));height:var(--kaching-bundles-sticky-atc-product-photo-size-mobile, var(--kaching-bundles-sticky-atc-product-photo-size, 40px));border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius-mobile, var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{font-size:var(--kaching-bundles-sticky-atc-title-font-size-mobile, var(--kaching-bundles-sticky-atc-title-font-size, 16px))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{font-size:var(--kaching-bundles-sticky-atc-button-font-size-mobile, var(--kaching-bundles-sticky-atc-button-font-size, 16px));padding:var(--kaching-bundles-sticky-atc-button-padding-mobile, var(--kaching-bundles-sticky-atc-button-padding, 15px));border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius-mobile, var(--kaching-bundles-sticky-atc-button-corner-radius, 8px))}}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal.kaching-bundles__bars{grid-template-columns:repeat(2,1fr)}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{padding:10px 7px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-container{border:2px dashed var(--bar-selected-border-color, #000);box-shadow:none}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-wrapper{margin:-2px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-variants{display:flex}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__title{display:inline-block;overflow-wrap:break-word;font-weight:700;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__subtitle{display:inline-block;overflow-wrap:break-word;font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-price{font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-full-price{font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--link{display:flex;justify-content:center;align-items:center;padding:8px 0}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__link{all:unset;cursor:pointer;display:inline;text-decoration:underline;text-underline-offset:3px;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__timer{display:flex;align-items:center;background-color:var(--kaching-bundles-timer-background-color, #000);color:var(--kaching-bundles-timer-text-color, #fff);padding:10px 20px;border-radius:var(--bar-border-radius, 8px);margin-bottom:calc(8px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__timer-title{flex:1;text-align:var(--kaching-bundles-timer-title-alignment, center);font-size:var(--kaching-bundles-timer-title-size, 13px);font-weight:var(--kaching-bundles-timer-title-font-weight, bold);font-style:var(--kaching-bundles-timer-title-font-style, normal)}.kaching-bundles .kaching-bundles__swatch-dropdown{display:flex;position:relative;min-width:0;margin:0}.kaching-bundles .kaching-bundles__swatch{display:flex;flex-shrink:0;background-size:cover;background-position:center;overflow:hidden;position:relative;width:var(--kaching-swatch-size, 20px);height:var(--kaching-swatch-size, 20px);border:1px solid var(--kaching-swatch-border-color, #c2cdd6);background-color:var(--kaching-swatch-color, #fff);background-image:var(--kaching-swatch-image-url, none);border-radius:var(--kaching-swatch-border-radius, 0)}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable{border-color:#121212;opacity:.4}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable:after{content:"";position:absolute;bottom:0;left:0;width:140%;height:1px;background-color:#121212;transform:rotate(-45deg);transform-origin:left}.kaching-bundles .kaching-bundles__swatches-dropdown__color{display:flex;width:20px;height:20px;border:1px solid #c2cdd6;background-size:cover;background-position:center}.kaching-bundles .kaching-bundles__swatch-dropdown__options{display:flex;flex-direction:column;max-width:400px;max-height:500px;overflow:auto;position:fixed;top:0;left:0;border:1px solid #ccc;background-color:#fff;z-index:1000;box-shadow:0 20px 20px #1a1a1a47}.kaching-bundles .kaching-bundles__swatch-dropdown__option{font-size:14px;font-weight:400;font-style:normal;display:flex;align-items:center;gap:10px;white-space:nowrap;padding-block:10px;padding-inline:10px 60px;border:none;border-bottom:1px solid #dfe3e8;cursor:pointer;color:#000;background:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:last-child{border-bottom:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:hover,.kaching-bundles .kaching-bundles__swatch-dropdown__option--focused{background-color:#f0f0f0}.kaching-bundles .kaching-bundles__swatch-buttons{display:flex;overflow:auto}.kaching-bundles .kaching-bundles__pill-buttons{display:flex;flex-wrap:wrap;gap:8px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__pill-buttons__button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;padding:.65em 1em;border:1px solid var(--kaching-pill-border-color, rgba(0, 0, 0, .3));border-radius:var(--kaching-pill-corner-radius, 10px);background:var(--kaching-pill-background-color, #fff);color:var(--kaching-pill-text-color, #000);font-size:var(--kaching-pill-font-size, 14px);font-weight:var(--kaching-pill-font-weight, 400);font-style:var(--kaching-pill-font-style, normal);line-height:1.3;text-align:center;cursor:pointer}.kaching-bundles .kaching-bundles__pill-buttons__button.kaching-bundles__pill-buttons__button--selected{border-color:var(--kaching-pill-selected-border-color, #000);background:var(--kaching-pill-selected-background-color, #000);color:var(--kaching-pill-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__pill-buttons__button.kaching-bundles__pill-buttons__button--unavailable{opacity:.4;text-decoration:line-through}.kaching-bundles .kaching-bundles__swatch-buttons__button{display:flex;align-items:center;box-sizing:border-box;border:none;padding:9px;background:#fff;cursor:pointer;border-top:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:first-of-type{border-start-start-radius:var(--bar-variant-select-border-radius, 0);border-end-start-radius:var(--bar-variant-select-border-radius, 0);border-inline-start:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:last-of-type{border-start-end-radius:var(--bar-variant-select-border-radius, 0);border-end-end-radius:var(--bar-variant-select-border-radius, 0);border-inline-end:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected{padding:8px 7px;border:2px solid var(--bar-selected-border-color, #50b83c)}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:first-of-type{padding-inline-start:8px}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:last-of-type{padding-inline-end:8px}.kaching-bundles .kaching-bundles__bar-variant__content.kaching-bundles__bar-variant__content--with-option-names{align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant-option{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__bar-variant-option__name{font-size:13px;line-height:1.3}.kaching-bundles .kaching-bundles__bar-variant-option__name-label{font-weight:600}.kaching-bundles .kaching-bundles__bar-variant-option__name-value{font-weight:400;opacity:.85}.kaching-bundles .kaching-bundles__quantity-selector{display:flex;width:-moz-fit-content;width:fit-content;border:1px solid #cccccc;box-sizing:border-box;overflow:hidden;margin-top:5px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button{display:flex;align-items:center;justify-content:center;width:30px;height:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background-color:#fff;color:#000;border-radius:0}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button:hover{background-color:#eee}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled{cursor:not-allowed;pointer-events:none}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled img{opacity:.5}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input{all:unset;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;height:30px;width:30px;padding:0;border:1px solid #cccccc;border-top:none;border-bottom:none;background-color:#fff;color:#000;text-align:center;font-size:16px;font-weight:400;box-sizing:border-box}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-outer-spin-button,.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}.kaching-bundles .kaching-bundles__highlights{display:flex;flex-direction:column;gap:8px;padding:10px 0}.kaching-bundles .kaching-bundles__highlights--horizontal{flex-flow:row wrap}.kaching-bundles .kaching-bundles__highlights__item{display:flex;gap:8px}.kaching-bundles .kaching-bundles__highlights__icon{display:flex;align-items:center;flex-shrink:0;color:var(--kaching-highlights-icon-color, #000);width:var(--kaching-highlights-icon-size, 16px);height:var(--kaching-highlights-icon-size, 16px)}.kaching-bundles .kaching-bundles__highlights__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles__highlights__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__highlights__text{color:var(--kaching-highlights-text-color, #808080);font-size:var(--kaching-highlights-text-size, 16px);line-height:1.3}.kaching-bundles .kaching-bundles__low-stock-alert{color:var(--kaching-bundles-low-stock-alert-text-color, #ff0909);font-size:14px}.kaching-bundles img{width:initial}.kaching-bundles svg{width:initial;height:initial}.kaching-bundles .kaching-bundles__block{display:flex;flex-direction:column;width:100%;margin-top:15px;margin-bottom:10px;text-align:start;line-height:1.4;font-family:var(--block-font-family, inherit)}.kaching-bundles .kaching-bundles__block--hidden{display:none!important}.kaching-bundles .kaching-bundles__block.kaching-bundles__block--loaded{display:flex}.kaching-bundles .kaching-bundles__block-title{display:flex;align-items:center;text-align:center;gap:8px;margin-top:10px;margin-bottom:10px;color:var(--block-block-title-color, #000);font-size:var(--block-title-font-size, 14px);font-weight:var(--block-title-font-weight, bold);font-style:var(--block-title-font-style)}.kaching-bundles .kaching-bundles__block>.kaching-bundles__block-title:first-child{margin-top:0}.kaching-bundles .kaching-bundles__block-title:before,.kaching-bundles .kaching-bundles__block-title:after{content:"";flex-grow:1;height:2px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bars{display:flex;flex-direction:column;position:relative}.kaching-bundles .kaching-bundles__bars--badge-border-all{--badge-ring-outer: calc( var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px) );padding:var(--badge-ring-outer)}.kaching-bundles .kaching-bundles__bars--badge-border-top{padding-top:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-bottom{padding-bottom:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-left{padding-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-right{padding-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-left,.kaching-bundles .kaching-bundles__bars--badge-border-right{min-height:var(--badge-border-min-length, auto);border-radius:var(--bar-border-radius, 8px);box-shadow:0 1px 10px var(--badge-border-wrap-color, rgba(0, 0, 0, .12))}.kaching-bundles .kaching-bundles__bars--badge-border-all,.kaching-bundles .kaching-bundles__bars--badge-border-top,.kaching-bundles .kaching-bundles__bars--badge-border-bottom{row-gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__subscriptions-wrapper{position:relative}.kaching-bundles .kaching-bundles__bar{display:flex;flex:1;margin:calc(5px * var(--block-spacing, 1)) 0;position:relative}.kaching-bundles .kaching-bundles__bars--badge-border-all>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-all>.kaching-bundles__scratch-off,.kaching-bundles .kaching-bundles__bars--badge-border-top>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-top>.kaching-bundles__scratch-off,.kaching-bundles .kaching-bundles__bars--badge-border-bottom>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-bottom>.kaching-bundles__scratch-off{margin-block:0}.kaching-bundles .kaching-bundles__bar--disabled{opacity:.3}.kaching-bundles .kaching-bundles__bar-container--sold-out{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--kaching-bundles-show-as-sold-out-opacity, .3)}.kaching-bundles .kaching-bundles__bar-sold-out-badge{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:6px 12px;border-radius:8px;font-weight:600;background-color:var(--kaching-bundles-show-as-sold-out-background-color, #000);color:var(--kaching-bundles-show-as-sold-out-text-color, #fff);font-size:var(--kaching-bundles-show-as-sold-out-text-size, 13px);z-index:10;text-align:center}.kaching-bundles .kaching-bundles__bar>input[type=radio]{display:none}.kaching-bundles .kaching-bundles__bar-image{-o-object-fit:contain;object-fit:contain;height:var(--bar-image-size, 48px);width:var(--bar-image-size, 48px);border-radius:var(--bar-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-radio{display:flex;flex-shrink:0;width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid #fff;box-sizing:border-box;box-shadow:0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-radio{background:var(--bar-selected-border-color, #000);box-shadow:0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container{display:flex!important;flex-direction:column;justify-content:center;align-items:initial;position:relative;box-sizing:border-box;cursor:pointer;width:100%;margin:0;padding:0;border:none;background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-wrapper{padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{position:relative;z-index:1;flex:1;box-sizing:border-box;min-height:var(--badge-border-min-length, auto);padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px);background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);display:flex;flex-direction:column;justify-content:center}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper{margin-inline-start:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border-start-start-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{margin-inline-end:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border-start-end-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container:hover{opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container:has(:focus-visible){opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container *{letter-spacing:normal;text-transform:initial}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container{cursor:default;background-color:var(--bar-selected-background-color);box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular{position:absolute;z-index:3}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--simple{top:-8px;right:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy{top:-27px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{top:-25px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular--custom .kaching-bundles__bar-most-popular__custom-image{max-height:var(--badge-size, 56px);width:auto;display:block}.kaching-bundles .kaching-bundles__bar-most-popular svg{color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__bar-most-popular svg .most-popular-text{fill:var(--bar-most-popular-color)}.kaching-bundles .kaching-bundles__bar-most-popular--fancy svg{width:var(--badge-size, 102px);height:auto}.kaching-bundles .kaching-bundles__bar-most-popular__content{margin:0 8px;padding:6px 8px;border-radius:0 0 5px 5px;font-family:sans-serif;font-size:var(--badge-text-size, 12px);font-weight:700;line-height:1;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__badge-border{position:absolute;z-index:1;display:flex;box-sizing:border-box;overflow:hidden;align-items:center;justify-content:center;font-family:sans-serif;font-size:max(6px,min(var(--badge-text-size, 12px),var(--badge-border-thickness, 22px) - 6px));font-weight:700;line-height:1;letter-spacing:normal;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color, #000)}.kaching-bundles .kaching-bundles__badge-border--top{inset:0 0 auto;height:var(--badge-border-thickness, 22px);border-radius:var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0 0}.kaching-bundles .kaching-bundles__badge-border--bottom{inset:auto 0 0;height:var(--badge-border-thickness, 22px);border-radius:0 0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px)}.kaching-bundles .kaching-bundles__badge-border--left{inset:0 auto 0 0;width:var(--badge-border-thickness, 22px);border-radius:var(--bar-border-radius, 8px) 0 0 var(--bar-border-radius, 8px)}.kaching-bundles .kaching-bundles__badge-border__side{position:absolute;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap}.kaching-bundles .kaching-bundles__badge-border .kaching-bundles__badge-border__text,.kaching-bundles .kaching-bundles__badge-border .kaching-bundles__badge-border__side{letter-spacing:normal}.kaching-bundles .kaching-bundles__badge-border__curve{position:absolute;inset:0;width:100%;height:100%}.kaching-bundles .kaching-bundles__badge-border__curve text{font-family:sans-serif;font-size:max(6px,min(var(--badge-text-size, 12px),var(--badge-border-thickness, 22px) - 6px));font-weight:700;letter-spacing:normal;fill:var(--bar-most-popular-color, #fff)}.kaching-bundles .kaching-bundles__badge-border--all{inset:0;background-color:transparent;pointer-events:none}.kaching-bundles .kaching-bundles__badge-border__band{display:block;position:absolute;inset:0;padding:var(--badge-border-thickness, 22px);border-radius:calc(var(--bar-border-radius, 8px) + var(--badge-ring-outer));background-color:var(--bar-most-popular-background-color, #000);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.kaching-bundles .kaching-bundles__badge-border__side--top{inset:0 0 auto;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__badge-border__side--bottom{inset:auto 0 0;height:var(--badge-border-thickness, 22px);transform:rotate(180deg)}.kaching-bundles .kaching-bundles__badge-border__side--left{inset:var(--badge-border-thickness, 22px) auto var(--badge-border-thickness, 22px) 0;width:var(--badge-border-thickness, 22px);writing-mode:vertical-rl;transform:rotate(180deg)}.kaching-bundles .kaching-bundles__badge-border__side--right{inset:var(--badge-border-thickness, 22px) 0 var(--badge-border-thickness, 22px) auto;width:var(--badge-border-thickness, 22px);writing-mode:vertical-rl}.kaching-bundles .kaching-bundles__badge-border--left .kaching-bundles__badge-border__text{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap;text-align:center}.kaching-bundles .kaching-bundles__badge-border--right{inset:0 0 0 auto;width:var(--badge-border-thickness, 22px);border-radius:0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0}.kaching-bundles .kaching-bundles__badge-border--right .kaching-bundles__badge-border__text{writing-mode:vertical-rl;white-space:nowrap;text-align:center}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--all{inset:calc(-1 * var(--badge-ring-outer))}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--top{inset:0 0 auto;height:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0 0;display:flex;align-items:flex-start;justify-content:center;-webkit-mask:linear-gradient(#000,#000) left top/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat;mask:linear-gradient(#000,#000) left top/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--top .kaching-bundles__badge-border__text{display:flex;align-items:center;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--bottom{inset:auto 0 0;height:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:0 0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px);display:flex;align-items:flex-end;justify-content:center;-webkit-mask:linear-gradient(#000,#000) left bottom/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat;mask:linear-gradient(#000,#000) left bottom/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--bottom .kaching-bundles__badge-border__text{display:flex;align-items:center;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--left{inset:0 auto 0 0;width:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:var(--bar-border-radius, 8px) 0 0 var(--bar-border-radius, 8px);display:flex;align-items:center;justify-content:flex-start;-webkit-mask:linear-gradient(#000,#000) left top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat;mask:linear-gradient(#000,#000) left top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--right{inset:0 0 0 auto;width:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0;display:flex;align-items:center;justify-content:flex-end;-webkit-mask:linear-gradient(#000,#000) right top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat;mask:linear-gradient(#000,#000) right top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--left .kaching-bundles__badge-border__text,.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--right .kaching-bundles__badge-border__text{display:flex;align-items:center;justify-content:center;width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-all{--badge-ring-outer: calc( var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px) );margin:var(--badge-ring-outer)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom,.kaching-bundles .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar-container--badge-border-right{--badge-concave-extra: max( 0px, var(--badge-concave-depth, 8px) - var(--badge-border-gap, 0px) )}.kaching-bundles .kaching-bundles__bar-container--badge-border-top{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:after{content:"";position:absolute;inset:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px)) 0 0;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-top:var(--badge-border-gap-border, none);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:after{content:"";position:absolute;inset:0 0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:var(--badge-border-gap-border, none);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar-container--badge-border-right{box-shadow:none;background-color:transparent;min-height:var(--badge-border-min-length, auto)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-top:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-left:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-left:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-right:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-right:has(:focus-visible),.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-left:after{content:"";position:absolute;inset:0 0 0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-left:var(--badge-border-gap-border, none);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar-container--badge-border-right:after{content:"";position:absolute;inset:0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px)) 0 0;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-right:var(--badge-border-gap-border, none);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left:after,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before,.kaching-bundles .kaching-bundles__bar-most-popular__content:after{display:block;position:absolute;top:0;width:0;height:0;content:"";border-bottom:8px solid var(--bar-most-popular-background-color, transparent);filter:brightness(.7)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before{left:0;border-left:8px solid transparent}.kaching-bundles .kaching-bundles__bar-most-popular__content:after{right:0;border-right:8px solid transparent}@media (width >= 750px){.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy,.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{right:-20px}}.kaching-bundles .kaching-bundles__bar-main{display:flex;align-items:center;gap:18px;min-height:55px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-main{cursor:pointer}.kaching-bundles .kaching-bundles__bar-content{align-items:center;justify-content:space-between;display:flex;gap:8px;flex:1}.kaching-bundles .kaching-bundles__bar-content-left{display:flex;flex-direction:column;flex:1;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-first-line{display:flex;flex-wrap:wrap;-moz-column-gap:8px;column-gap:8px;align-items:center}.kaching-bundles .kaching-bundles__bar-second-line{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px}.kaching-bundles .kaching-bundles__bar-title{display:inline-block;overflow-wrap:break-word;font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-label{display:inline-flex;align-items:center;justify-content:center;gap:4px;vertical-align:top;padding:4px 8px;overflow-wrap:break-word;background-color:var(--bar-label-background-color, #eee);color:var(--bar-label-color, #777);font-size:var(--bar-label-font-size, 12px);font-weight:var(--bar-label-font-weight);font-style:var(--bar-label-font-style);border-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-subtitle{overflow-wrap:break-word;font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-subtitle-color, #555)}.kaching-bundles .kaching-bundles__bar-pricing{align-items:flex-end;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__bars--hide-prices .kaching-bundles__bar-pricing{display:none}.kaching-bundles .kaching-bundles__bar-pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__bar-price{font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bar-price .kaching-bundles__bar-price__unit-label{font-size:var(--kaching-bundles-unit-label-font-size, 14px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style)}.kaching-bundles .kaching-bundles__bar-pricing-row--secondary .kaching-bundles__bar-price{font-size:var(--bar-subtitle-font-size)}.kaching-bundles .kaching-bundles__bar-full-price,.kaching-bundles .kaching-bundles__bar-unit-price{font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bar-full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__bar-unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bar-variants{display:none;flex-direction:column;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant{flex:1;max-width:100%}.kaching-bundles .kaching-bundles__bar-variants .kaching-bundles__bar-variant{margin-top:5px}.kaching-bundles .kaching-bundles__bar-variant__content{display:flex;align-items:center}.kaching-bundles .kaching-bundles__invalid-variant-error{color:red;font-size:12px;padding-bottom:2px}.kaching-bundles .kaching-bundles__bar-variant-names{font-size:12px;color:var(--bar-subtitle-color, #555);margin-block:3px}.kaching-bundles .kaching-bundles__bar-variant-names>span:not(:last-child):after{content:", "}.kaching-bundles .kaching-bundles__bar-variant-number{font-size:12px;margin-right:2px;min-width:20px;display:inline-flex;color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-variant-image{width:initial;max-width:40px;max-height:40px;border-radius:calc(var(--bar-border-radius, 0) / 2);margin-right:7px}.kaching-bundles .kaching-bundles__bar-variant-main{display:flex;flex-direction:column;min-width:0}.kaching-bundles .kaching-bundles__bar-variant-selects{display:flex;min-width:0;margin-right:2px;margin-bottom:2px;flex-wrap:wrap;gap:7px}.kaching-bundles .kaching-bundles__bar-variant-select{font-size:14px;font-weight:400;font-style:normal;font-family:var(--block-font-family, inherit);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:7px 25px 7px 7px;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-image:url("data:image/svg+xml;utf8,<svg width='10' height='4' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 4L0.669872 0.25L9.33013 0.249999L5 4Z' fill='black'/></svg>")!important;background-repeat:no-repeat!important;background-position:right 8px center!important;background-color:#fff;background-size:initial;color:#000;outline:none;max-width:100%;width:auto;height:auto;min-height:auto;display:flex;align-items:center;gap:10px;cursor:pointer;box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:var(--bar-variant-select-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-variant-select span{overflow:hidden;text-overflow:ellipsis}.kaching-bundles .kaching-bundles__bar-variant-selector-wrapper{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px;max-width:100%}.kaching-bundles .kaching-bundles__selling-plan-select{width:100%}.kaching-bundles .kaching-bundles__bar-selling-plan{margin-top:5px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select{box-shadow:0 0 0 1px red}.kaching-bundles .kaching-bundles__bar-variant-select:hover{border:none;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-variant-select:focus{border:none;box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select:is(:hover,:focus){box-shadow:0 0 0 2px red}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-variants,.kaching-bundles .kaching-bundles__bar-variants--visible{display:flex}.kaching-bundles .kaching-bundles__out-of-stock{background-color:#ff2d2d4d;border:1px solid #ff2c2c;color:#df2121;padding:8px 12px;margin:5px 0;font-size:14px}.kaching-bundles .kaching-bundles__bars--horizontal.kaching-bundles__bars{display:grid;grid-template-columns:repeat(var(--bundle-bars-per-row, 3),1fr);gap:calc(10px * var(--block-spacing, 1));overflow-x:auto}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar{position:relative}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 7px 10px;height:100%}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-main{flex-direction:column;gap:10px;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content-left{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-second-line{justify-content:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-label{position:absolute;top:0;left:0;right:0;margin-right:0;border-top-left-radius:var(--bar-label-border-top-radius);border-top-right-radius:var(--bar-label-border-top-radius)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-pricing{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variants{align-items:center;margin-top:10px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variant-selector-wrapper{justify-content:center}.kaching-bundles .kaching-bundles__bars--grid.kaching-bundles__bars{display:grid;grid-template-columns:repeat(2,1fr);gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-radio{display:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container:hover,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar--selected .kaching-bundles__bar-container{box-shadow:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-pricing{flex-direction:row;gap:10px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-main{margin-top:7px;margin-bottom:7px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--fancy) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--custom) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-variants{margin-top:-7px}.kaching-bundles .kaching-bundles__bar-full-price:before,.kaching-bundles .kaching-bundles__bar-price:before{content:attr(data-a11y-label);position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}@media (prefers-reduced-motion: reduce){.kaching-bundles *,.kaching-bundles *:before,.kaching-bundles *:after{transition-duration:.01ms!important;animation-duration:.01ms!important}}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-top .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-bottom .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar{margin-block:0}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars,.kaching-bundles .kaching-bundles__bars--badge-border-top .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars,.kaching-bundles .kaching-bundles__bars--badge-border-bottom .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars{row-gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bar-container--badge-border-left:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar-container--badge-border-right:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-top .kaching-bundles__bar-wrapper{position:relative;z-index:1;margin-top:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));background-color:var(--bar-background-color, #fff);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-top :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__bar-wrapper{position:relative;z-index:1;margin-bottom:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));background-color:var(--bar-background-color, #fff);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{margin-bottom:0;border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-bottom:var(--badge-border-thickness, 22px);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){margin-inline:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1;margin-inline-start:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1;margin-inline-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child,.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-block-end:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-inline-start:var(--badge-border-thickness, 22px);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-inline-end:var(--badge-border-thickness, 22px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:0;border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift:last-child,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift:last-child{border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift:last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift{margin-inline:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__free-gift__divider{margin-inline-start:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__free-gift__divider{margin-inline-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{background-color:var(--bar-selected-background-color)}`)), document.head.appendChild(Qt);
    }
  } catch (dn) {
    console.error("vite-plugin-css-injected-by-js", dn);
  }
})();
var e1 = Object.defineProperty, t1 = Object.getPrototypeOf, n1 = Reflect.get, Ug = (Qt) => {
  throw TypeError(Qt);
}, r1 = (Qt, dn, Cn) => dn in Qt ? e1(Qt, dn, { enumerable: !0, configurable: !0, writable: !0, value: Cn }) : Qt[dn] = Cn, mn = (Qt, dn, Cn) => r1(Qt, typeof dn != "symbol" ? dn + "" : dn, Cn), lc = (Qt, dn, Cn) => dn.has(Qt) || Ug("Cannot " + Cn), ye = (Qt, dn, Cn) => (lc(Qt, dn, "read from private field"), Cn ? Cn.call(Qt) : dn.get(Qt)), xt = (Qt, dn, Cn) => dn.has(Qt) ? Ug("Cannot add the same private member more than once") : dn instanceof WeakSet ? dn.add(Qt) : dn.set(Qt, Cn), Ct = (Qt, dn, Cn, zs) => (lc(Qt, dn, "write to private field"), dn.set(Qt, Cn), Cn), cn = (Qt, dn, Cn) => (lc(Qt, dn, "access private method"), Cn), a1 = (Qt, dn, Cn) => n1(t1(Qt), Cn, dn);
(function(Qt) {
  var dn, Cn, zs, Zi, Ji, Wa, Sa, Yi, Ki, Xi, gr, $s, Ua, Ds, sc, Hr, xr, Dl, ca, _i, ua, Ar, hr, da, Ha, Za, Ba, ki, Ja, Ts, Vs, yr, oc, cc, Tl, Vl, As, Ca, Ia, Ma, Al, qs, Ya, el, ql, Gs, uc, za, qr, tl, Gl, Fs, Os, dc, nl, Zr, Ka, Ls, Fl, gc, hc, ga, ha, $a, Es, pa, rl, Ol, Ll, El;
  String.prototype.replaceAll || (String.prototype.replaceAll = function(n, t) {
    if (typeof n == "string") {
      const r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return this.replace(new RegExp(r, "g"), t);
    }
    if (n instanceof RegExp) {
      if (!n.global) throw new TypeError("replaceAll must be called with a global RegExp");
      return this.replace(n, t);
    }
    return this.replace(n, t);
  }), typeof window != "undefined" && ((zs = (Cn = (dn = window.__svelte) != null ? dn : window.__svelte = {}).v) != null ? zs : Cn.v = /* @__PURE__ */ new Set()).add("5");
  const jl = "[!", Xa = {}, En = Symbol(), Hg = !1;
  var al = Array.isArray, Zg = Array.prototype.indexOf, js = Array.from, Rl = Object.keys, ei = Object.defineProperty, ti = Object.getOwnPropertyDescriptor, pc = Object.getOwnPropertyDescriptors, bc = Object.prototype, Jg = Array.prototype, Nl = Object.getPrototypeOf, fc = Object.isExtensible;
  const Jr = () => {
  };
  function Yg(n) {
    return n();
  }
  function Rs(n) {
    for (var t = 0; t < n.length; t++) n[t]();
  }
  function vc() {
    var n, t;
    return { promise: new Promise((r, a) => {
      n = r, t = a;
    }), resolve: n, reject: t };
  }
  const il = 16, Ql = 32, _c = 64, Ns = 128, Gr = 256, Qs = 512, Xn = 1024, Yr = 2048, ni = 4096, Kr = 8192, mi = 16384, Ws = 32768, xi = 65536, Kg = 1 << 17, kc = 1 << 19, Us = 1 << 21, ri = 1 << 23, ba = Symbol("$state"), mc = Symbol("legacy props"), Xg = Symbol(""), yi = new class extends Error {
    constructor() {
      super(...arguments), mn(this, "name", "StaleReactionError"), mn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function Hs(n) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function ll(n) {
    console.warn("https://svelte.dev/e/hydration_mismatch");
  }
  let Dt, _t = !1;
  function er(n) {
    _t = n;
  }
  function $n(n) {
    if (n === null) throw ll(), Xa;
    return Dt = n;
  }
  function wr() {
    return $n(Fr(Dt));
  }
  function x(n) {
    if (_t) {
      if (Fr(Dt) !== null) throw ll(), Xa;
      Dt = n;
    }
  }
  function fa(n = 1) {
    if (_t) {
      for (var t = n, r = Dt; t--; ) r = Fr(r);
      Dt = r;
    }
  }
  function Wl(n = !0) {
    for (var t = 0, r = Dt; ; ) {
      if (r.nodeType === 8) {
        var a = r.data;
        if (a === "]") {
          if (t === 0) return r;
          t -= 1;
        } else a !== "[" && a !== jl || (t += 1);
      }
      var s = Fr(r);
      n && r.remove(), r = s;
    }
  }
  function xc(n) {
    if (!n || n.nodeType !== 8) throw ll(), Xa;
    return n.data;
  }
  function yc(n) {
    return n === this.v;
  }
  function Zs(n, t) {
    return n != n ? t == t : n !== t || n !== null && typeof n == "object" || typeof n == "function";
  }
  function wc(n) {
    return !Zs(n, this.v);
  }
  let wi = !1;
  const eh = [];
  function Da(n, t = !1, r = !1) {
    return Ul(n, /* @__PURE__ */ new Map(), "", eh, null, r);
  }
  function Ul(n, t, r, a, s = null, o = !1) {
    if (typeof n == "object" && n !== null) {
      var c = t.get(n);
      if (c !== void 0) return c;
      if (n instanceof Map) return new Map(n);
      if (n instanceof Set) return new Set(n);
      if (al(n)) {
        var l = Array(n.length);
        t.set(n, l), s !== null && t.set(s, l);
        for (var i = 0; i < n.length; i += 1) {
          var u = n[i];
          i in n && (l[i] = Ul(u, t, r, a, null, o));
        }
        return l;
      }
      if (Nl(n) === bc) {
        for (var g in l = {}, t.set(n, l), s !== null && t.set(s, l), n) l[g] = Ul(n[g], t, r, a, null, o);
        return l;
      }
      if (n instanceof Date) return structuredClone(n);
      if (typeof n.toJSON == "function" && !o) return Ul(n.toJSON(), t, r, a, n);
    }
    if (n instanceof EventTarget) return n;
    try {
      return structuredClone(n);
    } catch {
      return n;
    }
  }
  let hn = null;
  function Pi(n) {
    hn = n;
  }
  function Ta(n) {
    return Pc().get(n);
  }
  function Va(n, t) {
    return Pc().set(n, t), t;
  }
  function at(n, t = !1, r) {
    hn = { p: hn, c: null, e: null, s: n, x: null, l: wi && !t ? { s: null, u: null, $: [] } : null };
  }
  function it(n) {
    var t = hn, r = t.e;
    if (r !== null) for (var a of (t.e = null, r)) Wc(a);
    return n !== void 0 && (t.x = n), hn = t.p, n != null ? n : {};
  }
  function Si() {
    return !wi || hn !== null && hn.l === null;
  }
  function Pc(n) {
    var t;
    return hn === null && Hs(), (t = hn.c) != null ? t : hn.c = new Map((function(r) {
      let a = r.p;
      for (; a !== null; ) {
        const s = a.c;
        if (s !== null) return s;
        a = a.p;
      }
      return null;
    })(hn) || void 0);
  }
  let ai = [];
  function Sc() {
    var n = ai;
    ai = [], Rs(n);
  }
  function Aa(n) {
    if (ai.length === 0 && !ol) {
      var t = ai;
      queueMicrotask(() => {
        t === ai && Sc();
      });
    }
    ai.push(n);
  }
  function th() {
    for (; ai.length > 0; ) Sc();
  }
  const nh = /* @__PURE__ */ new WeakMap();
  function Bc(n) {
    var t = Lt;
    if (t === null) return jt.f |= ri, n;
    if ((t.f & Ws) === 0) {
      if ((t.f & Ns) === 0) throw !t.parent && n instanceof Error && Cc(n), n;
      t.b.error(n);
    } else Bi(n, t);
  }
  function Bi(n, t) {
    for (; t !== null; ) {
      if ((t.f & Ns) !== 0) try {
        return void t.b.error(n);
      } catch (r) {
        n = r;
      }
      t = t.parent;
    }
    throw n instanceof Error && Cc(n), n;
  }
  function Cc(n) {
    const t = nh.get(n);
    t && (ei(n, "message", { value: t.message }), ei(n, "stack", { value: t.stack }));
  }
  const Hl = /* @__PURE__ */ new Set();
  let pn = null, sl = null, or = null, Js = /* @__PURE__ */ new Set(), Xr = [], Zl = null, Ys = !1, ol = !1;
  Zi = /* @__PURE__ */ new WeakMap(), Ji = /* @__PURE__ */ new WeakMap(), Wa = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), Yi = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakMap(), Xi = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakSet(), $s = function(n, t) {
    var r;
    n.f ^= Xn;
    for (var a = n.first; a !== null; ) {
      var s = a.f, o = !!(96 & s), c = o && (s & Xn) !== 0 || (s & Kr) !== 0 || this.skipped_effects.has(a);
      if ((a.f & Ns) !== 0 && ((r = a.b) != null && r.is_pending()) && (t = { parent: t, effect: a, effects: [], render_effects: [], block_effects: [] }), !c && a.fn !== null) {
        o ? a.f ^= Xn : 4 & s ? t.effects.push(a) : Kl(a) && ((a.f & il) !== 0 && t.block_effects.push(a), es(a));
        var l = a.first;
        if (l !== null) {
          a = l;
          continue;
        }
      }
      var i = a.parent;
      for (a = a.next; a === null && i !== null; ) i === t.effect && (cn(this, gr, Ua).call(this, t.effects), cn(this, gr, Ua).call(this, t.render_effects), cn(this, gr, Ua).call(this, t.block_effects), t = t.parent), a = i.next, i = i.parent;
    }
  }, Ua = function(n) {
    for (const t of n)
      ((t.f & Yr) !== 0 ? ye(this, Ki) : ye(this, Xi)).push(t), nr(t, Xn);
  }, Ds = function() {
    if (ye(this, Sa) === 0) {
      for (const n of ye(this, Ji)) n();
      ye(this, Ji).clear();
    }
    ye(this, Wa) === 0 && cn(this, gr, sc).call(this);
  }, sc = function() {
    var n, t;
    if (Hl.size > 1) {
      ye(this, Zi).clear();
      var r = or, a = !0, s = { parent: null, effect: null, effects: [], render_effects: [], block_effects: [] };
      for (const o of Hl) {
        if (o === this) {
          a = !1;
          continue;
        }
        const c = [];
        for (const [i, u] of this.current) {
          if (o.current.has(i)) {
            if (!a || u === o.current.get(i)) continue;
            o.current.set(i, u);
          }
          c.push(i);
        }
        if (c.length === 0) continue;
        const l = [...o.current.keys()].filter((i) => !this.current.has(i));
        if (l.length > 0) {
          for (const i of c) zc(i, l);
          if (Xr.length > 0) {
            pn = o, o.apply();
            for (const i of Xr) cn(n = o, gr, $s).call(n, i, s);
            Xr = [], o.deactivate();
          }
        }
      }
      pn = null, or = r;
    }
    this.committed = !0, Hl.delete(this), (t = ye(this, Yi)) == null || t.resolve();
  };
  let ii = class ic {
    constructor() {
      xt(this, gr), mn(this, "committed", !1), mn(this, "current", /* @__PURE__ */ new Map()), xt(this, Zi, /* @__PURE__ */ new Map()), xt(this, Ji, /* @__PURE__ */ new Set()), xt(this, Wa, 0), xt(this, Sa, 0), xt(this, Yi, null), xt(this, Ki, []), xt(this, Xi, []), mn(this, "skipped_effects", /* @__PURE__ */ new Set());
    }
    process(t) {
      Xr = [], sl = null, this.apply();
      var r = { parent: null, effect: null, effects: [], render_effects: [], block_effects: [] };
      for (const a of t) cn(this, gr, $s).call(this, a, r);
      cn(this, gr, Ds).call(this), ye(this, Sa) > 0 ? (cn(this, gr, Ua).call(this, r.effects), cn(this, gr, Ua).call(this, r.render_effects), cn(this, gr, Ua).call(this, r.block_effects)) : (sl = this, pn = null, Mc(r.render_effects), Mc(r.effects), sl = null), or = null;
    }
    capture(t, r) {
      ye(this, Zi).has(t) || ye(this, Zi).set(t, r), this.current.set(t, t.v), or == null || or.set(t, t.v);
    }
    activate() {
      pn = this;
    }
    deactivate() {
      pn = null, or = null;
    }
    flush() {
      if (Xr.length > 0) {
        if (this.activate(), Ic(), pn !== null && pn !== this) return;
      } else cn(this, gr, Ds).call(this);
      this.deactivate();
      for (const t of Js) if (Js.delete(t), t(), pn !== null) break;
    }
    increment(t) {
      Ct(this, Wa, ye(this, Wa) + 1), t && Ct(this, Sa, ye(this, Sa) + 1);
    }
    decrement(t) {
      Ct(this, Wa, ye(this, Wa) - 1), t && Ct(this, Sa, ye(this, Sa) - 1);
      for (const r of ye(this, Ki)) nr(r, Yr), li(r);
      for (const r of ye(this, Xi)) nr(r, ni), li(r);
      Ct(this, Ki, []), Ct(this, Xi, []), this.flush();
    }
    add_callback(t) {
      ye(this, Ji).add(t);
    }
    settled() {
      var t;
      return ((t = ye(this, Yi)) != null ? t : Ct(this, Yi, vc())).promise;
    }
    static ensure() {
      if (pn === null) {
        const t = pn = new ic();
        Hl.add(pn), ol || ic.enqueue(() => {
          pn === t && t.flush();
        });
      }
      return pn;
    }
    static enqueue(t) {
      Aa(t);
    }
    apply() {
    }
  };
  function _(n) {
    var t = ol;
    ol = !0;
    try {
      for (; ; ) {
        if (th(), Xr.length === 0 && (pn == null || pn.flush(), Xr.length === 0)) return void (Zl = null);
        Ic();
      }
    } finally {
      ol = t;
    }
  }
  function Ic() {
    var n = Mi;
    Ys = !0;
    try {
      var t = 0;
      for (eu(!0); Xr.length > 0; ) {
        var r = ii.ensure();
        t++ > 1e3 && rh(), r.process(Xr), qa.clear();
      }
    } finally {
      Ys = !1, eu(n), Zl = null;
    }
  }
  function rh() {
    try {
      (function() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
      })();
    } catch (n) {
      Bi(n, Zl);
    }
  }
  let ea = null;
  function Mc(n) {
    var t = n.length;
    if (t !== 0) {
      for (var r = 0; r < t; ) {
        var a = n[r++];
        if (!(24576 & a.f) && Kl(a) && (ea = /* @__PURE__ */ new Set(), es(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null && a.ac === null ? Jc(a) : a.fn = null), (ea == null ? void 0 : ea.size) > 0)) {
          qa.clear();
          for (const s of ea) {
            if (24576 & s.f) continue;
            const o = [s];
            let c = s.parent;
            for (; c !== null; ) ea.has(c) && (ea.delete(c), o.push(c)), c = c.parent;
            for (let l = o.length - 1; l >= 0; l--) {
              const i = o[l];
              24576 & i.f || es(i);
            }
          }
          ea.clear();
        }
      }
      ea = null;
    }
  }
  function zc(n, t) {
    if (n.reactions !== null) for (const r of n.reactions) {
      const a = r.f;
      2 & a ? zc(r, t) : 4194320 & a && $c(r, t) && (nr(r, Yr), li(r));
    }
  }
  function $c(n, t) {
    if (n.deps !== null) {
      for (const r of n.deps)
        if (t.includes(r) || 2 & r.f && $c(r, t)) return !0;
    }
    return !1;
  }
  function li(n) {
    for (var t = Zl = n; t.parent !== null; ) {
      var r = (t = t.parent).f;
      if (Ys && t === Lt && (r & il) !== 0) return;
      if (96 & r) {
        if ((r & Xn) === 0) return;
        t.f ^= Xn;
      }
    }
    Xr.push(t);
  }
  function Dc(n) {
    let t, r = 0, a = va(0);
    return () => {
      jt === null || Lr || (e(a), gl(() => (r === 0 && (t = Xt(() => n(() => pr(a)))), r += 1, () => {
        Aa(() => {
          r -= 1, r === 0 && (t == null || t(), t = void 0, pr(a));
        });
      })));
    };
  }
  class ah {
    constructor(t, r, a) {
      xt(this, yr), mn(this, "parent"), xt(this, Hr, !1), xt(this, xr), xt(this, Dl, _t ? Dt : null), xt(this, ca), xt(this, _i), xt(this, ua), xt(this, Ar, null), xt(this, hr, null), xt(this, da, null), xt(this, Ha, null), xt(this, Za, 0), xt(this, Ba, 0), xt(this, ki, !1), xt(this, Ja, null), xt(this, Ts, () => {
        ye(this, Ja) && Ci(ye(this, Ja), ye(this, Za));
      }), xt(this, Vs, Dc(() => (Ct(this, Ja, va(ye(this, Za))), () => {
        Ct(this, Ja, null);
      }))), Ct(this, xr, t), Ct(this, ca, r), Ct(this, _i, a), this.parent = Lt.b, Ct(this, Hr, !!ye(this, ca).pending), Ct(this, ua, _a(() => {
        if (Lt.b = this, _t) {
          const s = ye(this, Dl);
          wr(), s.nodeType === 8 && s.data === jl ? cn(this, yr, cc).call(this) : cn(this, yr, oc).call(this);
        } else {
          try {
            Ct(this, Ar, fr(() => a(ye(this, xr))));
          } catch (s) {
            this.error(s);
          }
          ye(this, Ba) > 0 ? cn(this, yr, Vl).call(this) : Ct(this, Hr, !1);
        }
      }, 589952)), _t && Ct(this, xr, Dt);
    }
    is_pending() {
      return ye(this, Hr) || !!this.parent && this.parent.is_pending();
    }
    has_pending_snippet() {
      return !!ye(this, ca).pending;
    }
    update_pending_count(t) {
      cn(this, yr, As).call(this, t), Ct(this, Za, ye(this, Za) + t), Js.add(ye(this, Ts));
    }
    get_effect_pending() {
      return ye(this, Vs).call(this), e(ye(this, Ja));
    }
    error(t) {
      var r = ye(this, ca).onerror;
      let a = ye(this, ca).failed;
      if (ye(this, ki) || !r && !a) throw t;
      ye(this, Ar) && (Gn(ye(this, Ar)), Ct(this, Ar, null)), ye(this, hr) && (Gn(ye(this, hr)), Ct(this, hr, null)), ye(this, da) && (Gn(ye(this, da)), Ct(this, da, null)), _t && ($n(ye(this, Dl)), fa(), $n(Wl()));
      var s = !1, o = !1;
      const c = () => {
        s ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (s = !0, o && (function() {
          throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
        })(), ii.ensure(), Ct(this, Za, 0), ye(this, da) !== null && Ii(ye(this, da), () => {
          Ct(this, da, null);
        }), Ct(this, Hr, this.has_pending_snippet()), Ct(this, Ar, cn(this, yr, Tl).call(this, () => (Ct(this, ki, !1), fr(() => ye(this, _i).call(this, ye(this, xr)))))), ye(this, Ba) > 0 ? cn(this, yr, Vl).call(this) : Ct(this, Hr, !1));
      };
      var l = jt;
      try {
        Qn(null), o = !0, r == null || r(t, c), o = !1;
      } catch (i) {
        Bi(i, ye(this, ua) && ye(this, ua).parent);
      } finally {
        Qn(l);
      }
      a && Aa(() => {
        Ct(this, da, cn(this, yr, Tl).call(this, () => {
          Ct(this, ki, !0);
          try {
            return fr(() => {
              a(ye(this, xr), () => t, () => c);
            });
          } catch (i) {
            return Bi(i, ye(this, ua).parent), null;
          } finally {
            Ct(this, ki, !1);
          }
        }));
      });
    }
  }
  function Tc(n, t, r) {
    const a = Si() ? cl : Jl;
    if (t.length !== 0) {
      var s = pn, o = Lt, c = (function() {
        var i = Lt, u = jt, g = hn, v = pn, p = _t;
        if (p) var f = Dt;
        return function() {
          ta(i), Qn(u), Pi(g), v == null || v.activate(), p && (er(!0), $n(f));
        };
      })(), l = _t;
      Promise.all(t.map((i) => ih(i))).then((i) => {
        c();
        try {
          r([...n.map(a), ...i]);
        } catch (u) {
          (o.f & mi) === 0 && Bi(u, o);
        }
        l && er(!1), s == null || s.deactivate(), Ks();
      }).catch((i) => {
        Bi(i, o);
      });
    } else r(n.map(a));
  }
  function Ks() {
    ta(null), Qn(null), Pi(null);
  }
  function cl(n) {
    var t = 2050, r = jt !== null && 2 & jt.f ? jt : null;
    return Lt === null || r !== null && (r.f & Gr) !== 0 ? t |= Gr : Lt.f |= kc, { ctx: hn, deps: null, effects: null, equals: yc, f: t, fn: n, reactions: null, rv: 0, v: En, wv: 0, parent: r != null ? r : Lt, ac: null };
  }
  function ih(n, t) {
    let r = Lt;
    r === null && (function() {
      throw new Error("https://svelte.dev/e/async_derived_orphan");
    })();
    var a = r.b, s = void 0, o = va(En), c = !jt, l = /* @__PURE__ */ new Map();
    return (function(i) {
      Or(4718592, i, !0);
    })(() => {
      var i, u = vc();
      s = u.promise;
      try {
        Promise.resolve(n()).then(u.resolve, u.reject).then(() => {
          g === pn && g.committed && g.deactivate(), Ks();
        });
      } catch (f) {
        u.reject(f), Ks();
      }
      var g = pn;
      if (c) {
        var v = !a.is_pending();
        a.update_pending_count(1), g.increment(v), (i = l.get(g)) == null || i.reject(yi), l.delete(g), l.set(g, u);
      }
      const p = (f, b = void 0) => {
        if (g.activate(), b) b !== yi && (o.f |= ri, Ci(o, b));
        else {
          (o.f & ri) !== 0 && (o.f ^= ri), Ci(o, f);
          for (const [y, m] of l) {
            if (l.delete(y), y === g) break;
            m.reject(yi);
          }
        }
        c && (a.update_pending_count(-1), g.decrement(v));
      };
      u.promise.then(p, (f) => p(null, f || "unknown"));
    }), ul(() => {
      for (const i of l.values()) i.reject(yi);
    }), new Promise((i) => {
      (function u(g) {
        function v() {
          g === s ? i(o) : u(s);
        }
        g.then(v, v);
      })(s);
    });
  }
  function d(n) {
    const t = cl(n);
    return nu(t), t;
  }
  function Jl(n) {
    const t = cl(n);
    return t.equals = wc, t;
  }
  function Vc(n) {
    var t = n.effects;
    if (t !== null) {
      n.effects = null;
      for (var r = 0; r < t.length; r += 1) Gn(t[r]);
    }
  }
  function Xs(n) {
    var t, r = Lt;
    ta((function(a) {
      for (var s = a.parent; s !== null; ) {
        if (!(2 & s.f)) return s;
        s = s.parent;
      }
      return null;
    })(n));
    try {
      Vc(n), t = su(n);
    } finally {
      ta(r);
    }
    return t;
  }
  function Ac(n) {
    var t = Xs(n);
    n.equals(t) || (n.v = t, n.wv = iu()), si || (or !== null ? or.set(n, n.v) : nr(n, !Ga && (n.f & Gr) === 0 || n.deps === null ? Xn : ni));
  }
  Hr = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap(), Za = /* @__PURE__ */ new WeakMap(), Ba = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap(), Ja = /* @__PURE__ */ new WeakMap(), Ts = /* @__PURE__ */ new WeakMap(), Vs = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakSet(), oc = function() {
    try {
      Ct(this, Ar, fr(() => ye(this, _i).call(this, ye(this, xr))));
    } catch (n) {
      this.error(n);
    }
    Ct(this, Hr, !1);
  }, cc = function() {
    const n = ye(this, ca).pending;
    n && (Ct(this, hr, fr(() => n(ye(this, xr)))), ii.enqueue(() => {
      Ct(this, Ar, cn(this, yr, Tl).call(this, () => (ii.ensure(), fr(() => ye(this, _i).call(this, ye(this, xr)))))), ye(this, Ba) > 0 ? cn(this, yr, Vl).call(this) : (Ii(ye(this, hr), () => {
        Ct(this, hr, null);
      }), Ct(this, Hr, !1));
    }));
  }, Tl = function(n) {
    var t = Lt, r = jt, a = hn;
    ta(ye(this, ua)), Qn(ye(this, ua)), Pi(ye(this, ua).ctx);
    try {
      return n();
    } catch (s) {
      return Bc(s), null;
    } finally {
      ta(t), Qn(r), Pi(a);
    }
  }, Vl = function() {
    const n = ye(this, ca).pending;
    ye(this, Ar) !== null && (Ct(this, Ha, document.createDocumentFragment()), Xc(ye(this, Ar), ye(this, Ha))), ye(this, hr) === null && Ct(this, hr, fr(() => n(ye(this, xr))));
  }, As = function(n) {
    var t;
    this.has_pending_snippet() ? (Ct(this, Ba, ye(this, Ba) + n), ye(this, Ba) === 0 && (Ct(this, Hr, !1), ye(this, hr) && Ii(ye(this, hr), () => {
      Ct(this, hr, null);
    }), ye(this, Ha) && (ye(this, xr).before(ye(this, Ha)), Ct(this, Ha, null)))) : this.parent && cn(t = this.parent, yr, As).call(t, n);
  };
  const qa = /* @__PURE__ */ new Map();
  function va(n, t) {
    return { f: 0, v: n, reactions: null, equals: yc, rv: 0, wv: 0 };
  }
  function Oe(n, t) {
    const r = va(n);
    return nu(r), r;
  }
  function eo(n, t = !1, r = !0) {
    var a, s;
    const o = va(n);
    return t || (o.equals = wc), wi && r && hn !== null && hn.l !== null && ((s = (a = hn.l).s) != null ? s : a.s = []).push(o), o;
  }
  function ee(n, t, r = !1) {
    return jt !== null && (!Lr || (jt.f & Kg) !== 0) && Si() && 4325394 & jt.f && !(Sr != null && Sr.includes(n)) && (function() {
      throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    })(), Ci(n, r ? ut(t) : t);
  }
  function Ci(n, t) {
    if (!n.equals(t)) {
      var r = n.v;
      si ? qa.set(n, t) : qa.set(n, r), n.v = t, ii.ensure().capture(n, r), 2 & n.f && ((n.f & Yr) !== 0 && Xs(n), nr(n, (n.f & Gr) === 0 ? Xn : ni)), n.wv = iu(), qc(n, Yr), !Si() || Lt === null || (Lt.f & Xn) === 0 || 96 & Lt.f || (Br === null ? (function(a) {
        Br = a;
      })([n]) : Br.push(n));
    }
    return t;
  }
  function pr(n) {
    ee(n, n.v + 1);
  }
  function qc(n, t) {
    var r = n.reactions;
    if (r !== null) for (var a = Si(), s = r.length, o = 0; o < s; o++) {
      var c = r[o], l = c.f;
      if (a || c !== Lt) {
        var i = (l & Yr) === 0;
        i && nr(c, t), 2 & l ? qc(c, ni) : i && ((l & il) !== 0 && ea !== null && ea.add(c), li(c));
      }
    }
  }
  function ut(n) {
    if (typeof n != "object" || n === null || ba in n) return n;
    const t = Nl(n);
    if (t !== bc && t !== Jg) return n;
    var r = /* @__PURE__ */ new Map(), a = al(n), s = Oe(0), o = Er, c = (l) => {
      if (Er === o) return l();
      var i = jt, u = Er;
      Qn(null), au(o);
      var g = l();
      return Qn(i), au(u), g;
    };
    return a && r.set("length", Oe(n.length)), new Proxy(n, { defineProperty(l, i, u) {
      "value" in u && u.configurable !== !1 && u.enumerable !== !1 && u.writable !== !1 || (function() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
      })();
      var g = r.get(i);
      return g === void 0 ? g = c(() => {
        var v = Oe(u.value);
        return r.set(i, v), v;
      }) : ee(g, u.value, !0), !0;
    }, deleteProperty(l, i) {
      var u = r.get(i);
      if (u === void 0) {
        if (i in l) {
          const g = c(() => Oe(En));
          r.set(i, g), pr(s);
        }
      } else ee(u, En), pr(s);
      return !0;
    }, get(l, i, u) {
      var g;
      if (i === ba) return n;
      var v = r.get(i), p = i in l;
      if (v !== void 0 || p && !((g = ti(l, i)) != null && g.writable) || (v = c(() => Oe(ut(p ? l[i] : En))), r.set(i, v)), v !== void 0) {
        var f = e(v);
        return f === En ? void 0 : f;
      }
      return Reflect.get(l, i, u);
    }, getOwnPropertyDescriptor(l, i) {
      var u = Reflect.getOwnPropertyDescriptor(l, i);
      if (u && "value" in u) {
        var g = r.get(i);
        g && (u.value = e(g));
      } else if (u === void 0) {
        var v = r.get(i), p = v == null ? void 0 : v.v;
        if (v !== void 0 && p !== En) return { enumerable: !0, configurable: !0, value: p, writable: !0 };
      }
      return u;
    }, has(l, i) {
      var u;
      if (i === ba) return !0;
      var g = r.get(i), v = g !== void 0 && g.v !== En || Reflect.has(l, i);
      return (g !== void 0 || Lt !== null && (!v || (u = ti(l, i)) != null && u.writable)) && (g === void 0 && (g = c(() => Oe(v ? ut(l[i]) : En)), r.set(i, g)), e(g) === En) ? !1 : v;
    }, set(l, i, u, g) {
      var v, p = r.get(i), f = i in l;
      if (a && i === "length") for (var b = u; b < p.v; b += 1) {
        var y = r.get(b + "");
        y !== void 0 ? ee(y, En) : b in l && (y = c(() => Oe(En)), r.set(b + "", y));
      }
      p === void 0 ? f && !((v = ti(l, i)) != null && v.writable) || (ee(p = c(() => Oe(void 0)), ut(u)), r.set(i, p)) : (f = p.v !== En, ee(p, c(() => ut(u))));
      var m = Reflect.getOwnPropertyDescriptor(l, i);
      if (m != null && m.set && m.set.call(g, u), !f) {
        if (a && typeof i == "string") {
          var z = r.get("length"), C = Number(i);
          Number.isInteger(C) && C >= z.v && ee(z, C + 1);
        }
        pr(s);
      }
      return !0;
    }, ownKeys(l) {
      e(s);
      var i = Reflect.ownKeys(l).filter((v) => {
        var p = r.get(v);
        return p === void 0 || p.v !== En;
      });
      for (var [u, g] of r) g.v === En || u in l || i.push(u);
      return i;
    }, setPrototypeOf() {
      (function() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
      })();
    } });
  }
  function Gc(n) {
    try {
      if (n !== null && typeof n == "object" && ba in n) return n[ba];
    } catch {
    }
    return n;
  }
  function lh(n, t) {
    return Object.is(Gc(n), Gc(t));
  }
  var Fc, Oc, Lc, Ec;
  function to() {
    if (Fc === void 0) {
      Fc = window, Oc = /Firefox/.test(navigator.userAgent);
      var n = Element.prototype, t = Node.prototype, r = Text.prototype;
      Lc = ti(t, "firstChild").get, Ec = ti(t, "nextSibling").get, fc(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), fc(r) && (r.__t = void 0);
    }
  }
  function Pr(n = "") {
    return document.createTextNode(n);
  }
  function jn(n) {
    return Lc.call(n);
  }
  function Fr(n) {
    return Ec.call(n);
  }
  function w(n, t) {
    if (!_t) return jn(n);
    var r = jn(Dt);
    if (r === null) r = Dt.appendChild(Pr());
    else if (t && r.nodeType !== 3) {
      var a = Pr();
      return r == null || r.before(a), $n(a), a;
    }
    return $n(r), r;
  }
  function _e(n, t = !1) {
    if (!_t) {
      var r = jn(n);
      return r instanceof Comment && r.data === "" ? Fr(r) : r;
    }
    if (t && (Dt == null ? void 0 : Dt.nodeType) !== 3) {
      var a = Pr();
      return Dt == null || Dt.before(a), $n(a), a;
    }
    return Dt;
  }
  function E(n, t = 1, r = !1) {
    let a = _t ? Dt : n;
    for (var s; t--; ) s = a, a = Fr(a);
    if (!_t) return a;
    if (r && (a == null ? void 0 : a.nodeType) !== 3) {
      var o = Pr();
      return a === null ? s == null || s.after(o) : a.before(o), $n(o), o;
    }
    return $n(a), a;
  }
  function jc(n) {
    n.textContent = "";
  }
  function sh(n, t) {
    if (t) {
      const r = document.body;
      n.autofocus = !0, Aa(() => {
        document.activeElement === r && n.focus();
      });
    }
  }
  let Rc = !1;
  function Nc() {
    Rc || (Rc = !0, document.addEventListener("reset", (n) => {
      Promise.resolve().then(() => {
        var t;
        if (!n.defaultPrevented) for (const r of n.target.elements) (t = r.__on_r) == null || t.call(r);
      });
    }, { capture: !0 }));
  }
  function Yl(n) {
    var t = jt, r = Lt;
    Qn(null), ta(null);
    try {
      return n();
    } finally {
      Qn(t), ta(r);
    }
  }
  function Qc(n) {
    Lt === null && jt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_orphan");
    })(), jt !== null && (jt.f & Gr) !== 0 && Lt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    })(), si && (function() {
      throw new Error("https://svelte.dev/e/effect_in_teardown");
    })();
  }
  function Or(n, t, r, a = !0) {
    var s, o = Lt;
    o !== null && (o.f & Kr) !== 0 && (n |= Kr);
    var c = { ctx: hn, deps: null, nodes_start: null, nodes_end: null, f: n | Yr, first: null, fn: t, last: null, next: null, parent: o, b: o && o.b, prev: null, teardown: null, transitions: null, wv: 0, ac: null };
    if (r) try {
      es(c), c.f |= Ws;
    } catch (u) {
      throw Gn(c), u;
    }
    else t !== null && li(c);
    if (a) {
      var l = c;
      if (r && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && (l.f & kc) === 0 && (l = l.first), l !== null && (l.parent = o, o !== null && (function(u, g) {
        var v = g.last;
        v === null ? g.last = g.first = u : (v.next = u, u.prev = v, g.last = u);
      })(l, o), jt !== null && 2 & jt.f && (n & _c) === 0)) {
        var i = jt;
        ((s = i.effects) != null ? s : i.effects = []).push(l);
      }
    }
    return c;
  }
  function ul(n) {
    const t = Or(8, null, !1);
    return nr(t, Xn), t.teardown = n, t;
  }
  function tt(n) {
    var t;
    Qc();
    var r = Lt.f;
    if (!(!jt && (r & Ql) !== 0 && (r & Ws) === 0)) return Wc(n);
    var a = hn;
    ((t = a.e) != null ? t : a.e = []).push(n);
  }
  function Wc(n) {
    return Or(1048580, n, !1);
  }
  function br(n) {
    return Qc(), Or(1048584, n, !0);
  }
  function dl(n) {
    return Or(4, n, !1);
  }
  function gl(n, t = 0) {
    return Or(8 | t, n, !0);
  }
  function ke(n, t = [], r = []) {
    Tc(t, r, (a) => {
      Or(8, () => n(...a.map(e)), !0);
    });
  }
  function _a(n, t = 0) {
    return Or(il | t, n, !0);
  }
  function fr(n, t = !0) {
    return Or(524320, n, !0, t);
  }
  function Uc(n) {
    var t = n.teardown;
    if (t !== null) {
      const r = si, a = jt;
      tu(!0), Qn(null);
      try {
        t.call(null);
      } finally {
        tu(r), Qn(a);
      }
    }
  }
  function Hc(n, t = !1) {
    var r = n.first;
    for (n.first = n.last = null; r !== null; ) {
      const s = r.ac;
      s !== null && Yl(() => {
        s.abort(yi);
      });
      var a = r.next;
      (r.f & _c) !== 0 ? r.parent = null : Gn(r, t), r = a;
    }
  }
  function Gn(n, t = !0) {
    var r = !1;
    (t || 262144 & n.f) && n.nodes_start !== null && n.nodes_end !== null && (Zc(n.nodes_start, n.nodes_end), r = !0), Hc(n, t && !r), Xl(n, 0), nr(n, mi);
    var a = n.transitions;
    if (a !== null) for (const o of a) o.stop();
    Uc(n);
    var s = n.parent;
    s !== null && s.first !== null && Jc(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
  }
  function Zc(n, t) {
    for (; n !== null; ) {
      var r = n === t ? null : Fr(n);
      n.remove(), n = r;
    }
  }
  function Jc(n) {
    var t = n.parent, r = n.prev, a = n.next;
    r !== null && (r.next = a), a !== null && (a.prev = r), t !== null && (t.first === n && (t.first = a), t.last === n && (t.last = r));
  }
  function Ii(n, t, r = !0) {
    var a = [];
    no(n, a, !0), Yc(a, () => {
      r && Gn(n), t && t();
    });
  }
  function Yc(n, t) {
    var r = n.length;
    if (r > 0) {
      var a = () => --r || t();
      for (var s of n) s.out(a);
    } else t();
  }
  function no(n, t, r) {
    if ((n.f & Kr) === 0) {
      if (n.f ^= Kr, n.transitions !== null) for (const o of n.transitions) (o.is_global || r) && t.push(o);
      for (var a = n.first; a !== null; ) {
        var s = a.next;
        no(a, t, ((a.f & xi) !== 0 || (a.f & Ql) !== 0) && r), a = s;
      }
    }
  }
  function ro(n) {
    Kc(n, !0);
  }
  function Kc(n, t) {
    if ((n.f & Kr) !== 0) {
      n.f ^= Kr, (n.f & Xn) === 0 && (nr(n, Yr), li(n));
      for (var r = n.first; r !== null; ) {
        var a = r.next;
        Kc(r, ((r.f & xi) !== 0 || (r.f & Ql) !== 0) && t), r = a;
      }
      if (n.transitions !== null) for (const s of n.transitions) (s.is_global || t) && s.in();
    }
  }
  function Xc(n, t) {
    for (var r = n.nodes_start, a = n.nodes_end; r !== null; ) {
      var s = r === a ? null : Fr(r);
      t.append(r), r = s;
    }
  }
  let Mi = !1;
  function eu(n) {
    Mi = n;
  }
  let si = !1;
  function tu(n) {
    si = n;
  }
  let jt = null, Lr = !1;
  function Qn(n) {
    jt = n;
  }
  let Lt = null;
  function ta(n) {
    Lt = n;
  }
  let Sr = null;
  function nu(n) {
    jt !== null && (Sr === null ? Sr = [n] : Sr.push(n));
  }
  let tr = null, vr = 0, Br = null, ru = 1, hl = 0, Er = hl;
  function au(n) {
    Er = n;
  }
  let Ga = !1;
  function iu() {
    return ++ru;
  }
  function Kl(n) {
    var t, r, a = n.f;
    if ((a & Yr) !== 0) return !0;
    if ((a & ni) !== 0) {
      var s = n.deps, o = (a & Gr) !== 0;
      if (s !== null) {
        var c, l, i = (a & Qs) !== 0, u = o && Lt !== null && !Ga, g = s.length;
        if ((i || u) && (Lt === null || (Lt.f & mi) === 0)) {
          var v = n, p = v.parent;
          for (c = 0; c < g; c++) l = s[c], !i && ((t = l == null ? void 0 : l.reactions) != null && t.includes(v)) || ((r = l.reactions) != null ? r : l.reactions = []).push(v);
          i && (v.f ^= Qs), u && p !== null && (p.f & Gr) === 0 && (v.f ^= Gr);
        }
        for (c = 0; c < g; c++) if (Kl(l = s[c]) && Ac(l), l.wv > n.wv) return !0;
      }
      o && (Lt === null || Ga) || nr(n, Xn);
    }
    return !1;
  }
  function lu(n, t, r = !0) {
    var a = n.reactions;
    if (a !== null && !(Sr != null && Sr.includes(n))) for (var s = 0; s < a.length; s++) {
      var o = a[s];
      2 & o.f ? lu(o, t, !1) : t === o && (r ? nr(o, Yr) : (o.f & Xn) !== 0 && nr(o, ni), li(o));
    }
  }
  function su(n) {
    var t, r, a = tr, s = vr, o = Br, c = jt, l = Ga, i = Sr, u = hn, g = Lr, v = Er, p = n.f;
    tr = null, vr = 0, Br = null, Ga = (p & Gr) !== 0 && (Lr || !Mi || jt === null), jt = 96 & p ? null : n, Sr = null, Pi(n.ctx), Lr = !1, Er = ++hl, n.ac !== null && (Yl(() => {
      n.ac.abort(yi);
    }), n.ac = null);
    try {
      n.f |= Us;
      var f = (0, n.fn)(), b = n.deps;
      if (tr !== null) {
        var y;
        if (Xl(n, vr), b !== null && vr > 0) for (b.length = vr + tr.length, y = 0; y < tr.length; y++) b[vr + y] = tr[y];
        else n.deps = b = tr;
        if (!Ga || 2 & p && n.reactions !== null) for (y = vr; y < b.length; y++) ((r = (t = b[y]).reactions) != null ? r : t.reactions = []).push(n);
      } else b !== null && vr < b.length && (Xl(n, vr), b.length = vr);
      if (Si() && Br !== null && !Lr && b !== null && !(6146 & n.f)) for (y = 0; y < Br.length; y++) lu(Br[y], n);
      return c !== null && c !== n && (hl++, Br !== null && (o === null ? o = Br : o.push(...Br))), (n.f & ri) !== 0 && (n.f ^= ri), f;
    } catch (m) {
      return Bc(m);
    } finally {
      n.f ^= Us, tr = a, vr = s, Br = o, jt = c, Ga = l, Sr = i, Pi(u), Lr = g, Er = v;
    }
  }
  function oh(n, t) {
    let r = t.reactions;
    if (r !== null) {
      var a = Zg.call(r, n);
      if (a !== -1) {
        var s = r.length - 1;
        s === 0 ? r = t.reactions = null : (r[a] = r[s], r.pop());
      }
    }
    r === null && 2 & t.f && (tr === null || !tr.includes(t)) && (nr(t, ni), 768 & t.f || (t.f ^= Qs), Vc(t), Xl(t, 0));
  }
  function Xl(n, t) {
    var r = n.deps;
    if (r !== null) for (var a = t; a < r.length; a++) oh(n, r[a]);
  }
  function es(n) {
    var t = n.f;
    if ((t & mi) === 0) {
      nr(n, Xn);
      var r = Lt, a = Mi;
      Lt = n, Mi = !0;
      try {
        (t & il) !== 0 ? (function(o) {
          for (var c = o.first; c !== null; ) {
            var l = c.next;
            (c.f & Ql) === 0 && Gn(c), c = l;
          }
        })(n) : Hc(n), Uc(n);
        var s = su(n);
        n.teardown = typeof s == "function" ? s : null, n.wv = ru;
      } finally {
        Mi = a, Lt = r;
      }
    }
  }
  async function ts() {
    await Promise.resolve(), _();
  }
  function e(n) {
    var t, r = !!(2 & n.f);
    if (jt === null || Lr) {
      if (r && n.deps === null && n.effects === null) {
        var a = n, s = a.parent;
        s !== null && (s.f & Gr) === 0 && (a.f ^= Gr);
      }
    } else if (!(Lt !== null && (Lt.f & mi) !== 0) && !(Sr != null && Sr.includes(n))) {
      var o = jt.deps;
      if ((jt.f & Us) !== 0) n.rv < hl && (n.rv = hl, tr === null && o !== null && o[vr] === n ? vr++ : tr === null ? tr = [n] : Ga && tr.includes(n) || tr.push(n));
      else {
        ((t = jt.deps) != null ? t : jt.deps = []).push(n);
        var c = n.reactions;
        c === null ? n.reactions = [jt] : c.includes(jt) || c.push(jt);
      }
    }
    if (si) {
      if (qa.has(n)) return qa.get(n);
      if (r) {
        var l = (a = n).v;
        return ((a.f & Xn) === 0 && a.reactions !== null || ou(a)) && (l = Xs(a)), qa.set(a, l), l;
      }
    } else if (r) {
      if (a = n, or == null ? void 0 : or.has(a)) return or.get(a);
      Kl(a) && Ac(a);
    }
    if (or != null && or.has(n)) return or.get(n);
    if ((n.f & ri) !== 0) throw n.v;
    return n.v;
  }
  function ou(n) {
    if (n.v === En) return !0;
    if (n.deps === null) return !1;
    for (const t of n.deps)
      if (qa.has(t) || 2 & t.f && ou(t)) return !0;
    return !1;
  }
  function Xt(n) {
    var t = Lr;
    try {
      return Lr = !0, n();
    } finally {
      Lr = t;
    }
  }
  const ch = -7169;
  function nr(n, t) {
    n.f = n.f & ch | t;
  }
  function cu(n) {
    if (typeof n == "object" && n && !(n instanceof EventTarget)) {
      if (ba in n) ao(n);
      else if (!Array.isArray(n)) for (let t in n) {
        const r = n[t];
        typeof r == "object" && r && ba in r && ao(r);
      }
    }
  }
  function ao(n, t = /* @__PURE__ */ new Set()) {
    if (!(typeof n != "object" || n === null || n instanceof EventTarget || t.has(n))) {
      t.add(n), n instanceof Date && n.getTime();
      for (let a in n) try {
        ao(n[a], t);
      } catch {
      }
      const r = Nl(n);
      if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
        const a = pc(r);
        for (let s in a) {
          const o = a[s].get;
          if (o) try {
            o.call(n);
          } catch {
          }
        }
      }
    }
  }
  const uu = /* @__PURE__ */ new Set(), io = /* @__PURE__ */ new Set();
  function lo(n, t, r, a = {}) {
    function s(o) {
      if (a.capture || pl.call(t, o), !o.cancelBubble) return Yl(() => r == null ? void 0 : r.call(this, o));
    }
    return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Aa(() => {
      t.addEventListener(n, s, a);
    }) : t.addEventListener(n, s, a), s;
  }
  function ns(n, t, r, a, s) {
    var o = { capture: a, passive: s }, c = lo(n, t, r, o);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && ul(() => {
      t.removeEventListener(n, c, o);
    });
  }
  function Fn(n) {
    for (var t = 0; t < n.length; t++) uu.add(n[t]);
    for (var r of io) r(n);
  }
  let du = null;
  function pl(n) {
    var t, r = this, a = r.ownerDocument, s = n.type, o = ((t = n.composedPath) == null ? void 0 : t.call(n)) || [], c = o[0] || n.target;
    du = n;
    var l = 0, i = du === n && n.__root;
    if (i) {
      var u = o.indexOf(i);
      if (u !== -1 && (r === document || r === window)) return void (n.__root = r);
      var g = o.indexOf(r);
      if (g === -1) return;
      u <= g && (l = u);
    }
    if ((c = o[l] || n.target) !== r) {
      ei(n, "currentTarget", { configurable: !0, get: () => c || a });
      var v = jt, p = Lt;
      Qn(null), ta(null);
      try {
        for (var f, b = []; c !== null; ) {
          var y = c.assignedSlot || c.parentNode || c.host || null;
          try {
            var m = c["__" + s];
            if (m != null && (!c.disabled || n.target === c)) if (al(m)) {
              var [z, ...C] = m;
              z.apply(c, [n, ...C]);
            } else m.call(c, n);
          } catch (A) {
            f ? b.push(A) : f = A;
          }
          if (n.cancelBubble || y === r || y === null) break;
          c = y;
        }
        if (f) {
          for (let A of b) queueMicrotask(() => {
            throw A;
          });
          throw f;
        }
      } finally {
        n.__root = r, delete n.currentTarget, Qn(v), ta(p);
      }
    }
  }
  function so(n) {
    var t = document.createElement("template");
    return t.innerHTML = n.replaceAll("<!>", "<!---->"), t.content;
  }
  function cr(n, t) {
    var r = Lt;
    r.nodes_start === null && (r.nodes_start = n, r.nodes_end = t);
  }
  function $(n, t) {
    var r, a = !!(1 & t), s = !!(2 & t), o = !n.startsWith("<!>");
    return () => {
      if (_t) return cr(Dt, null), Dt;
      r === void 0 && (r = so(o ? n : "<!>" + n), a || (r = jn(r)));
      var c = s || Oc ? document.importNode(r, !0) : r.cloneNode(!0);
      return a ? cr(jn(c), c.lastChild) : cr(c, c), c;
    };
  }
  function uh(n, t, r = "svg") {
    var a, s = !n.startsWith("<!>"), o = !!(1 & t), c = `<${r}>${s ? n : "<!>" + n}</${r}>`;
    return () => {
      if (_t) return cr(Dt, null), Dt;
      if (!a) {
        var l = jn(so(c));
        if (o) for (a = document.createDocumentFragment(); jn(l); ) a.appendChild(jn(l));
        else a = jn(l);
      }
      var i = a.cloneNode(!0);
      return o ? cr(jn(i), i.lastChild) : cr(i, i), i;
    };
  }
  function Tn(n, t) {
    return uh(n, t, "svg");
  }
  function Rn(n = "") {
    if (!_t) {
      var t = Pr(n + "");
      return cr(t, t), t;
    }
    var r = Dt;
    return r.nodeType !== 3 && (r.before(r = Pr()), $n(r)), cr(r, r), r;
  }
  function Te() {
    if (_t) return cr(Dt, null), Dt;
    var n = document.createDocumentFragment(), t = document.createComment(""), r = Pr();
    return n.append(t, r), cr(t, r), n;
  }
  function h(n, t) {
    if (_t) return Lt.nodes_end = Dt, void wr();
    n !== null && n.before(t);
  }
  function dh(n) {
    return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
  }
  const gh = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
  function hh(n) {
    return gh.includes(n);
  }
  const ph = { formnovalidate: "formNoValidate", ismap: "isMap", nomodule: "noModule", playsinline: "playsInline", readonly: "readOnly", defaultvalue: "defaultValue", defaultchecked: "defaultChecked", srcobject: "srcObject", novalidate: "noValidate", allowfullscreen: "allowFullscreen", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback" };
  function bh(n) {
    var t;
    return n = n.toLowerCase(), (t = ph[n]) != null ? t : n;
  }
  const fh = ["touchstart", "touchmove"];
  function vh(n) {
    return fh.includes(n);
  }
  const _h = ["textarea", "script", "style", "title"];
  function pt(n, t) {
    var r, a = t == null ? "" : typeof t == "object" ? t + "" : t;
    a !== ((r = n.__t) != null ? r : n.__t = n.nodeValue) && (n.__t = a, n.nodeValue = a + "");
  }
  function gu(n, t) {
    return hu(n, t);
  }
  function kh(n, t) {
    var r;
    to(), t.intro = (r = t.intro) != null && r;
    const a = t.target, s = _t, o = Dt;
    try {
      for (var c = jn(a); c && (c.nodeType !== 8 || c.data !== "["); ) c = Fr(c);
      if (!c) throw Xa;
      er(!0), $n(c);
      const l = hu(n, { ...t, anchor: c });
      return er(!1), l;
    } catch (l) {
      if (l instanceof Error && l.message.split(`
`).some((i) => i.startsWith("https://svelte.dev/e/"))) throw l;
      return l !== Xa && console.warn("Failed to hydrate: ", l), t.recover === !1 && (function() {
        throw new Error("https://svelte.dev/e/hydration_failed");
      })(), to(), jc(a), er(!1), gu(n, t);
    } finally {
      er(s), $n(o);
    }
  }
  const zi = /* @__PURE__ */ new Map();
  function hu(n, { target: t, anchor: r, props: a = {}, events: s, context: o, intro: c = !0 }) {
    to();
    var l = /* @__PURE__ */ new Set(), i = (v) => {
      for (var p = 0; p < v.length; p++) {
        var f = v[p];
        if (!l.has(f)) {
          l.add(f);
          var b = vh(f);
          t.addEventListener(f, pl, { passive: b });
          var y = zi.get(f);
          y === void 0 ? (document.addEventListener(f, pl, { passive: b }), zi.set(f, 1)) : zi.set(f, y + 1);
        }
      }
    };
    i(js(uu)), io.add(i);
    var u = void 0, g = (function(v) {
      ii.ensure();
      const p = Or(524352, v, !0);
      return (f = {}) => new Promise((b) => {
        f.outro ? Ii(p, () => {
          Gn(p), b(void 0);
        }) : (Gn(p), b(void 0));
      });
    })(() => {
      var v = r != null ? r : t.appendChild(Pr());
      return (function(p, f, b) {
        new ah(p, f, b);
      })(v, { pending: () => {
      } }, (p) => {
        if (o && (at({}), hn.c = o), s && (a.$$events = s), _t && cr(p, null), u = n(p, a) || {}, _t && (Lt.nodes_end = Dt, Dt === null || Dt.nodeType !== 8 || Dt.data !== "]")) throw ll(), Xa;
        o && it();
      }), () => {
        var p;
        for (var f of l) {
          t.removeEventListener(f, pl);
          var b = zi.get(f);
          --b === 0 ? (document.removeEventListener(f, pl), zi.delete(f)) : zi.set(f, b);
        }
        io.delete(i), v !== r && ((p = v.parentNode) == null || p.removeChild(v));
      };
    });
    return oo.set(u, g), u;
  }
  let oo = /* @__PURE__ */ new WeakMap();
  class bl {
    constructor(t, r = !0) {
      mn(this, "anchor"), xt(this, Ca, /* @__PURE__ */ new Map()), xt(this, Ia, /* @__PURE__ */ new Map()), xt(this, Ma, /* @__PURE__ */ new Map()), xt(this, Al, !0), xt(this, qs, () => {
        var a = pn;
        if (ye(this, Ca).has(a)) {
          var s = ye(this, Ca).get(a), o = ye(this, Ia).get(s);
          if (o) ro(o);
          else {
            var c = ye(this, Ma).get(s);
            c && (ye(this, Ia).set(s, c.effect), ye(this, Ma).delete(s), c.fragment.lastChild.remove(), this.anchor.before(c.fragment), o = c.effect);
          }
          for (const [l, i] of ye(this, Ca)) {
            if (ye(this, Ca).delete(l), l === a) break;
            const u = ye(this, Ma).get(i);
            u && (Gn(u.effect), ye(this, Ma).delete(i));
          }
          for (const [l, i] of ye(this, Ia)) {
            if (l === s) continue;
            const u = () => {
              if (Array.from(ye(this, Ca).values()).includes(l)) {
                var g = document.createDocumentFragment();
                Xc(i, g), g.append(Pr()), ye(this, Ma).set(l, { effect: i, fragment: g });
              } else Gn(i);
              ye(this, Ia).delete(l);
            };
            ye(this, Al) || !o ? Ii(i, u, !1) : u();
          }
        }
      }), this.anchor = t, Ct(this, Al, r);
    }
    ensure(t, r) {
      var a = pn;
      !r || ye(this, Ia).has(t) || ye(this, Ma).has(t) || ye(this, Ia).set(t, fr(() => r(this.anchor))), ye(this, Ca).set(a, t), _t && (this.anchor = Dt), ye(this, qs).call(this);
    }
  }
  function rs(n, t, ...r) {
    var a = new bl(n);
    _a(() => {
      var s;
      const o = (s = t()) != null ? s : null;
      a.ensure(o, o && ((c) => o(c, ...r)));
    }, xi);
  }
  function Fa(n) {
    var t, r, a;
    hn === null && Hs(), wi && hn.l !== null ? (t = hn, a = t.l, (r = a.u) != null ? r : a.u = { a: [], b: [], m: [] }).m.push(n) : tt(() => {
      const s = Xt(n);
      if (typeof s == "function") return s;
    });
  }
  function F(n, t, r = !1) {
    _t && wr();
    var a = new bl(n);
    function s(o, c) {
      if (_t && o === (xc(n) === jl)) {
        var l = Wl();
        return $n(l), a.anchor = l, er(!1), a.ensure(o, c), void er(!0);
      }
      a.ensure(o, c);
    }
    _a(() => {
      var o = !1;
      t((c, l = !0) => {
        o = !0, s(l, c);
      }), o || s(!1, null);
    }, r ? xi : 0);
  }
  function lt(n, t, r) {
    _t && wr();
    var a = new bl(n), s = !Si();
    _a(() => {
      var o = t();
      s && o !== null && typeof o == "object" && (o = {}), a.ensure(o, r);
    });
  }
  function jr(n, t) {
    return t;
  }
  function Gt(n, t, r, a, s, o = null) {
    var c = n, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
    if (4 & t) {
      var i = n;
      c = _t ? $n(jn(i)) : i.appendChild(Pr());
    }
    _t && wr();
    var u, g, v = null, p = !1, f = /* @__PURE__ */ new Map(), b = Jl(() => {
      var m = r();
      return al(m) ? m : m == null ? [] : js(m);
    });
    function y() {
      (function(m, z, C, A, O, V, R, U, G) {
        var H, I, T, ue, re, P, S, B, q, Y, Q = !!(8 & R), oe = !!(3 & R), j = z.length, D = C.items, se = C.first, te = se, X = null, ne = [], he = [];
        if (Q) for (Y = 0; Y < j; Y += 1) B = U(S = z[Y], Y), (q = D.get(B)) !== void 0 && ((H = q.a) == null || H.measure(), (P != null ? P : P = /* @__PURE__ */ new Set()).add(q));
        for (Y = 0; Y < j; Y += 1) if (B = U(S = z[Y], Y), (q = D.get(B)) !== void 0) {
          if (oe && mh(q, S, Y, R), (q.e.f & Kr) !== 0 && (ro(q.e), Q && ((I = q.a) == null || I.unfix(), (P != null ? P : P = /* @__PURE__ */ new Set()).delete(q))), q !== te) {
            if (re !== void 0 && re.has(q)) {
              if (ne.length < he.length) {
                var M, W = he[0];
                X = W.prev;
                var de = ne[0], ge = ne[ne.length - 1];
                for (M = 0; M < ne.length; M += 1) co(ne[M], W, O);
                for (M = 0; M < he.length; M += 1) re.delete(he[M]);
                na(C, de.prev, ge.next), na(C, X, de), na(C, ge, W), te = W, X = ge, Y -= 1, ne = [], he = [];
              } else re.delete(q), co(q, te, O), na(C, q.prev, q.next), na(C, q, X === null ? C.first : X.next), na(C, X, q), X = q;
              continue;
            }
            for (ne = [], he = []; te !== null && te.k !== B; ) (te.e.f & Kr) === 0 && (re != null ? re : re = /* @__PURE__ */ new Set()).add(te), he.push(te), te = te.next;
            if (te === null) continue;
            q = te;
          }
          ne.push(q), X = q, te = q.next;
        } else {
          var N = A.get(B);
          if (N !== void 0) {
            A.delete(B), D.set(B, N);
            var J = X ? X.next : te;
            na(C, X, N), na(C, N, J), co(N, J, O), X = N;
          } else
            X = pu(te ? te.e.nodes_start : O, C, X, X === null ? C.first : X.next, S, B, Y, V, R, G);
          D.set(B, X), ne = [], he = [], te = X.next;
        }
        if (te !== null || re !== void 0) {
          for (var ae = re === void 0 ? [] : js(re); te !== null; ) (te.e.f & Kr) === 0 && ae.push(te), te = te.next;
          var ce = ae.length;
          if (ce > 0) {
            var me = 4 & R && j === 0 ? O : null;
            if (Q) {
              for (Y = 0; Y < ce; Y += 1) (T = ae[Y].a) == null || T.measure();
              for (Y = 0; Y < ce; Y += 1) (ue = ae[Y].a) == null || ue.fix();
            }
            (function(Se, L, pe) {
              for (var Z = Se.items, fe = [], xe = L.length, $e = 0; $e < xe; $e++) no(L[$e].e, fe, !0);
              var Me = xe > 0 && fe.length === 0 && pe !== null;
              if (Me) {
                var Ae = pe.parentNode;
                jc(Ae), Ae.append(pe), Z.clear(), na(Se, L[0].prev, L[xe - 1].next);
              }
              Yc(fe, () => {
                for (var Be = 0; Be < xe; Be++) {
                  var Fe = L[Be];
                  Me || (Z.delete(Fe.k), na(Se, Fe.prev, Fe.next)), Gn(Fe.e, !Me);
                }
              });
            })(C, ae, me);
          }
        }
        Q && Aa(() => {
          var Se;
          if (P !== void 0) for (q of P) (Se = q.a) == null || Se.apply();
        });
        for (var be of (m.first = C.first && C.first.e, m.last = X && X.e, A.values())) Gn(be.e);
        A.clear();
      })(g, u, l, f, c, s, t, a, r), o !== null && (u.length === 0 ? v ? ro(v) : v = fr(() => o(c)) : v !== null && Ii(v, () => {
        v = null;
      }));
    }
    _a(() => {
      g != null || (g = Lt);
      var m = (u = e(b)).length;
      if (p && m === 0) return;
      p = m === 0;
      let z = !1;
      if (_t && xc(c) === jl != (m === 0) && ($n(c = Wl()), er(!1), z = !0), _t) {
        for (var C, A = null, O = 0; O < m; O++) {
          if (Dt.nodeType === 8 && Dt.data === "]") {
            c = Dt, z = !0, er(!1);
            break;
          }
          var V = u[O], R = a(V, O);
          C = pu(Dt, l, A, null, V, R, O, s, t, r), l.items.set(R, C), A = C;
        }
        m > 0 && $n(Wl());
      }
      _t ? m === 0 && o && (v = fr(() => o(c))) : y(), z && er(!0), e(b);
    }), _t && (c = Dt);
  }
  function mh(n, t, r, a) {
    1 & a && Ci(n.v, t), 2 & a ? Ci(n.i, r) : n.i = r;
  }
  function pu(n, t, r, a, s, o, c, l, i, u, g) {
    var v = 1 & i ? 16 & i ? va(s) : eo(s, !1, !1) : s, p = 2 & i ? va(c) : c, f = { i: p, v, k: o, a: null, e: null, prev: r, next: a };
    try {
      return n === null && document.createDocumentFragment().append(n = Pr()), f.e = fr(() => l(n, v, p, u), _t), f.e.prev = r && r.e, f.e.next = a && a.e, r === null ? g || (t.first = f) : (r.next = f, r.e.next = f.e), a !== null && (a.prev = f, a.e.prev = f.e), f;
    } finally {
    }
  }
  function co(n, t, r) {
    for (var a = n.next ? n.next.e.nodes_start : r, s = t ? t.e.nodes_start : r, o = n.e.nodes_start; o !== null && o !== a; ) {
      var c = Fr(o);
      s.before(o), o = c;
    }
  }
  function na(n, t, r) {
    t === null ? n.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
  }
  function Ne(n, t, r = !1, a = !1, s = !1) {
    var o = n, c = "";
    ke(() => {
      var l, i = Lt;
      if (c !== (c = (l = t()) != null ? l : "")) {
        if (i.nodes_start !== null && (Zc(i.nodes_start, i.nodes_end), i.nodes_start = i.nodes_end = null), c !== "") {
          if (_t) {
            Dt.data;
            for (var u = wr(), g = u; u !== null && (u.nodeType !== 8 || u.data !== ""); ) g = u, u = Fr(u);
            if (u === null) throw ll(), Xa;
            return cr(Dt, g), void (o = $n(u));
          }
          var v = c + "";
          r ? v = `<svg>${v}</svg>` : a && (v = `<math>${v}</math>`);
          var p = so(v);
          if ((r || a) && (p = jn(p)), cr(jn(p), p.lastChild), r || a) for (; jn(p); ) o.before(jn(p));
          else o.before(p);
        }
      } else _t && wr();
    });
  }
  function bu(n, t, r, a, s) {
    var o;
    _t && wr();
    var c = (o = t.$$slots) == null ? void 0 : o[r], l = !1;
    c === !0 && (c = t.children, l = !0), c === void 0 || c(n, l ? () => a : a);
  }
  function fu(n, t, r) {
    _t && wr();
    var a = new bl(n);
    _a(() => {
      var s, o = (s = t()) != null ? s : null;
      a.ensure(o, o && ((c) => r(c, o)));
    }, xi);
  }
  function vu(n, t, r, a, s, o) {
    let c = _t;
    _t && wr();
    var l = null;
    _t && Dt.nodeType === 1 && (l = Dt, wr());
    var i = _t ? Dt : n, u = new bl(i, !1);
    _a(() => {
      const g = t() || null;
      var v = g === "svg" ? "http://www.w3.org/2000/svg" : null;
      if (g !== null) return u.ensure(g, (p) => {
        if (g) {
          if (cr(l = _t ? l : v ? document.createElementNS(v, g) : document.createElement(g), l), a) {
            _t && (b = g, _h.includes(b)) && l.append(document.createComment(""));
            var f = _t ? jn(l) : l.appendChild(Pr());
            _t && (f === null ? er(!1) : $n(f)), a(l, f);
          }
          Lt.nodes_end = l, p.before(l);
        }
        var b;
        _t && $n(p);
      }), () => {
      };
      u.ensure(null, null);
    }, xi), ul(() => {
    }), c && (er(!0), $n(i));
  }
  function uo(n, t, r) {
    dl(() => {
      var a = Xt(() => t(n, r == null ? void 0 : r()) || {});
      if (r && (a != null && a.update)) {
        var s = !1, o = {};
        gl(() => {
          var c = r();
          cu(c), s && Zs(o, c) && (o = c, a.update(c));
        }), s = !0;
      }
      if (a != null && a.destroy) return () => a.destroy();
    });
  }
  function xh(n, t) {
    var r, a = void 0;
    _a(() => {
      a !== (a = t()) && (r && (Gn(r), r = null), a && (r = fr(() => {
        dl(() => a(n));
      })));
    });
  }
  function _u(n) {
    var t, r, a = "";
    if (typeof n == "string" || typeof n == "number") a += n;
    else if (typeof n == "object") if (Array.isArray(n)) {
      var s = n.length;
      for (t = 0; t < s; t++) n[t] && (r = _u(n[t])) && (a && (a += " "), a += r);
    } else for (r in n) n[r] && (a && (a += " "), a += r);
    return a;
  }
  function fl(n) {
    return typeof n == "object" ? (function() {
      for (var t, r, a = 0, s = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (r = _u(t)) && (s && (s += " "), s += r);
      return s;
    })(n) : n != null ? n : "";
  }
  Ca = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), Ma = /* @__PURE__ */ new WeakMap(), Al = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ new WeakMap();
  const ku = [...` 	
\r\f \v\uFEFF`];
  function mu(n, t = !1) {
    var r = t ? " !important;" : ";", a = "";
    for (var s in n) {
      var o = n[s];
      o != null && o !== "" && (a += " " + s + ": " + o + r);
    }
    return a;
  }
  function go(n) {
    return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
  }
  function Wt(n, t, r, a, s, o) {
    var c = n.__className;
    if (_t || c !== r || c === void 0) {
      var l = (function(g, v, p) {
        var f = g == null ? "" : "" + g;
        if (v && (f = f ? f + " " + v : v), p) {
          for (var b in p) if (p[b]) f = f ? f + " " + b : b;
          else if (f.length) for (var y = b.length, m = 0; (m = f.indexOf(b, m)) >= 0; ) {
            var z = m + y;
            m !== 0 && !ku.includes(f[m - 1]) || z !== f.length && !ku.includes(f[z]) ? m = z : f = (m === 0 ? "" : f.substring(0, m)) + f.substring(z + 1);
          }
        }
        return f === "" ? null : f;
      })(r, a, o);
      _t && l === n.getAttribute("class") || (l == null ? n.removeAttribute("class") : t ? n.className = l : n.setAttribute("class", l)), n.__className = r;
    } else if (o && s !== o) for (var i in o) {
      var u = !!o[i];
      s != null && u === !!s[i] || n.classList.toggle(i, u);
    }
    return o;
  }
  function ho(n, t = {}, r, a) {
    for (var s in r) {
      var o = r[s];
      t[s] !== o && (r[s] == null ? n.style.removeProperty(s) : n.style.setProperty(s, o, a));
    }
  }
  function Ft(n, t, r, a) {
    var s = n.__style;
    if (_t || s !== t) {
      var o = (function(c, l) {
        if (l) {
          var i, u, g = "";
          if (Array.isArray(l) ? (i = l[0], u = l[1]) : i = l, c) {
            c = String(c).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
            var v = !1, p = 0, f = !1, b = [];
            i && b.push(...Object.keys(i).map(go)), u && b.push(...Object.keys(u).map(go));
            var y = 0, m = -1;
            const O = c.length;
            for (var z = 0; z < O; z++) {
              var C = c[z];
              if (f ? C === "/" && c[z - 1] === "*" && (f = !1) : v ? v === C && (v = !1) : C === "/" && c[z + 1] === "*" ? f = !0 : C === '"' || C === "'" ? v = C : C === "(" ? p++ : C === ")" && p--, !f && v === !1 && p === 0) {
                if (C === ":" && m === -1) m = z;
                else if (C === ";" || z === O - 1) {
                  if (m !== -1) {
                    var A = go(c.substring(y, m).trim());
                    b.includes(A) || (C !== ";" && z++, g += " " + c.substring(y, z).trim() + ";");
                  }
                  y = z + 1, m = -1;
                }
              }
            }
          }
          return i && (g += mu(i)), u && (g += mu(u, !0)), (g = g.trim()) === "" ? null : g;
        }
        return c == null ? null : String(c);
      })(t, a);
      _t && o === n.getAttribute("style") || (o == null ? n.removeAttribute("style") : n.style.cssText = o), n.__style = t;
    } else a && (Array.isArray(a) ? (ho(n, r == null ? void 0 : r[0], a[0]), ho(n, r == null ? void 0 : r[1], a[1], "important")) : ho(n, r, a));
    return a;
  }
  function vl(n, t, r = !1) {
    if (n.multiple) {
      if (t == null) return;
      if (!al(t)) return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");
      for (var a of n.options) a.selected = t.includes(xu(a));
    } else {
      for (a of n.options)
        if (lh(xu(a), t)) return void (a.selected = !0);
      r && t === void 0 || (n.selectedIndex = -1);
    }
  }
  function po(n) {
    var t = new MutationObserver(() => {
      vl(n, n.__value);
    });
    t.observe(n, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["value"] }), ul(() => {
      t.disconnect();
    });
  }
  function xu(n) {
    return "__value" in n ? n.__value : n.value;
  }
  const $i = Symbol("class"), Di = Symbol("style"), yu = Symbol("is custom element"), wu = Symbol("is html");
  function ka(n) {
    if (_t) {
      var t = !1, r = () => {
        if (!t) {
          if (t = !0, n.hasAttribute("value")) {
            var a = n.value;
            Ie(n, "value", null), n.value = a;
          }
          if (n.hasAttribute("checked")) {
            var s = n.checked;
            Ie(n, "checked", null), n.checked = s;
          }
        }
      };
      n.__on_r = r, Aa(r), Nc();
    }
  }
  function oi(n, t) {
    var r = as(n);
    r.value !== (r.value = t != null ? t : void 0) && (n.value !== t || t === 0 && n.nodeName === "PROGRESS") && (n.value = t != null ? t : "");
  }
  function _l(n, t) {
    var r = as(n);
    r.checked !== (r.checked = t != null ? t : void 0) && (n.checked = t);
  }
  function Pu(n, t) {
    t ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
  }
  function Ie(n, t, r, a) {
    var s = as(n);
    _t && (s[t] = n.getAttribute(t), t === "src" || t === "srcset" || t === "href" && n.nodeName === "LINK") || s[t] !== (s[t] = r) && (t === "loading" && (n[Xg] = r), r == null ? n.removeAttribute(t) : typeof r != "string" && Cu(n).includes(t) ? n[t] = r : n.setAttribute(t, r));
  }
  function Su(n, t, r = [], a = [], s, o = !1, c = !1) {
    Tc(r, a, (l) => {
      var i = void 0, u = {}, g = n.nodeName === "SELECT", v = !1;
      if (_a(() => {
        var f = t(...l.map(e)), b = (function(m, z, C, A, O = !1) {
          if (_t && O && m.tagName === "INPUT") {
            var V = m;
            (V.type === "checkbox" ? "defaultChecked" : "defaultValue") in C || ka(V);
          }
          var R = as(m), U = R[yu], G = !R[wu];
          let H = _t && U;
          H && er(!1);
          var I = z || {}, T = m.tagName === "OPTION";
          for (var ue in z) ue in C || (C[ue] = null);
          C.class ? C.class = fl(C.class) : C[$i] && (C.class = null), C[Di] && (C.style != null || (C.style = null));
          var re = Cu(m);
          for (const Q in C) {
            let oe = C[Q];
            if (T && Q === "value" && oe == null) m.value = m.__value = "", I[Q] = oe;
            else if (Q !== "class") if (Q !== "style") {
              var P = I[Q];
              if (oe !== P || oe === void 0 && m.hasAttribute(Q)) {
                I[Q] = oe;
                var S = Q[0] + Q[1];
                if (S !== "$$") if (S === "on") {
                  const j = {}, D = "$$" + Q;
                  let se = Q.slice(2);
                  var B = hh(se);
                  if (dh(se) && (se = se.slice(0, -7), j.capture = !0), !B && P) {
                    if (oe != null) continue;
                    m.removeEventListener(se, I[D], j), I[D] = null;
                  }
                  if (oe != null) if (B) m[`__${se}`] = oe, Fn([se]);
                  else {
                    let te = function(X) {
                      I[Q].call(this, X);
                    };
                    I[D] = lo(se, m, te, j);
                  }
                  else B && (m[`__${se}`] = void 0);
                } else if (Q === "style") Ie(m, Q, oe);
                else if (Q === "autofocus") sh(m, !!oe);
                else if (U || Q !== "__value" && (Q !== "value" || oe == null)) if (Q === "selected" && T) Pu(m, oe);
                else {
                  var q = Q;
                  G || (q = bh(q));
                  var Y = q === "defaultValue" || q === "defaultChecked";
                  if (oe != null || U || Y) Y || re.includes(q) && (U || typeof oe != "string") ? (m[q] = oe, q in R && (R[q] = En)) : typeof oe != "function" && Ie(m, q, oe);
                  else if (R[Q] = null, q === "value" || q === "checked") {
                    let j = m;
                    const D = z === void 0;
                    if (q === "value") {
                      let se = j.defaultValue;
                      j.removeAttribute(q), j.defaultValue = se, j.value = j.__value = D ? se : null;
                    } else {
                      let se = j.defaultChecked;
                      j.removeAttribute(q), j.defaultChecked = se, j.checked = !!D && se;
                    }
                  } else m.removeAttribute(Q);
                }
                else m.value = m.__value = oe;
              }
            } else Ft(m, oe, z == null ? void 0 : z[Di], C[Di]), I[Q] = oe, I[Di] = C[Di];
            else Wt(m, m.namespaceURI === "http://www.w3.org/1999/xhtml", oe, A, z == null ? void 0 : z[$i], C[$i]), I[Q] = oe, I[$i] = C[$i];
          }
          return H && er(!0), I;
        })(n, i, f, s, o, c);
        v && g && "value" in f && vl(n, f.value);
        for (let m of Object.getOwnPropertySymbols(u)) f[m] || Gn(u[m]);
        for (let m of Object.getOwnPropertySymbols(f)) {
          var y = f[m];
          m.description !== "@attach" || i && y === i[m] || (u[m] && Gn(u[m]), u[m] = fr(() => xh(n, () => y))), b[m] = y;
        }
        i = b;
      }), g) {
        var p = n;
        dl(() => {
          vl(p, i.value, !0), po(p);
        });
      }
      v = !0;
    });
  }
  function as(n) {
    var t;
    return (t = n.__attributes) != null ? t : n.__attributes = { [yu]: n.nodeName.includes("-"), [wu]: n.namespaceURI === "http://www.w3.org/1999/xhtml" };
  }
  var Bu = /* @__PURE__ */ new Map();
  function Cu(n) {
    var t, r = n.getAttribute("is") || n.nodeName, a = Bu.get(r);
    if (a) return a;
    Bu.set(r, a = []);
    for (var s = n, o = Element.prototype; o !== s; ) {
      for (var c in t = pc(s)) t[c].set && a.push(c);
      s = Nl(s);
    }
    return a;
  }
  function yh(n, t, r = t) {
    var a = /* @__PURE__ */ new WeakSet();
    (function(s, o, c, l = c) {
      s.addEventListener(o, () => Yl(c));
      const i = s.__on_r;
      s.__on_r = i ? () => {
        i(), l(!0);
      } : () => l(!0), Nc();
    })(n, "input", async (s) => {
      var o = s ? n.defaultValue : n.value;
      if (o = bo(n) ? fo(o) : o, r(o), pn !== null && a.add(pn), await ts(), o !== (o = t())) {
        var c = n.selectionStart, l = n.selectionEnd, i = n.value.length;
        if (n.value = o != null ? o : "", l !== null) {
          var u = n.value.length;
          c === l && l === i && u > i ? (n.selectionStart = u, n.selectionEnd = u) : (n.selectionStart = c, n.selectionEnd = Math.min(l, u));
        }
      }
    }), (_t && n.defaultValue !== n.value || Xt(t) == null && n.value) && (r(bo(n) ? fo(n.value) : n.value), pn !== null && a.add(pn)), gl(() => {
      var s = t();
      if (n === document.activeElement) {
        var o = sl != null ? sl : pn;
        if (a.has(o)) return;
      }
      bo(n) && s === fo(n.value) || (n.type !== "date" || s || n.value) && s !== n.value && (n.value = s != null ? s : "");
    });
  }
  function bo(n) {
    var t = n.type;
    return t === "number" || t === "range";
  }
  function fo(n) {
    return n === "" ? null : +n;
  }
  const vo = class {
    constructor(n) {
      xt(this, Gs), xt(this, Ya, /* @__PURE__ */ new WeakMap()), xt(this, el), xt(this, ql), Ct(this, ql, n);
    }
    observe(n, t) {
      var r = ye(this, Ya).get(n) || /* @__PURE__ */ new Set();
      return r.add(t), ye(this, Ya).set(n, r), cn(this, Gs, uc).call(this).observe(n, ye(this, ql)), () => {
        var a = ye(this, Ya).get(n);
        a.delete(t), a.size === 0 && (ye(this, Ya).delete(n), ye(this, el).unobserve(n));
      };
    }
  };
  Ya = /* @__PURE__ */ new WeakMap(), el = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakSet(), uc = function() {
    var n;
    return (n = ye(this, el)) != null ? n : Ct(this, el, new ResizeObserver((t) => {
      for (var r of t) for (var a of (vo.entries.set(r.target, r), ye(this, Ya).get(r.target) || [])) a(r);
    }));
  }, mn(vo, "entries", /* @__PURE__ */ new WeakMap());
  var wh = new vo({ box: "border-box" });
  function is(n, t, r) {
    var a = wh.observe(n, () => r(n[t]));
    dl(() => (Xt(() => r(n[t])), a));
  }
  function Iu(n, t) {
    return n === t || (n == null ? void 0 : n[ba]) === t;
  }
  function Ti(n = {}, t, r, a) {
    return dl(() => {
      var s, o;
      return gl(() => {
        s = o, o = [], Xt(() => {
          n !== r(...o) && (t(n, ...o), s && Iu(r(...s), n) && t(null, ...s));
        });
      }), () => {
        Aa(() => {
          o && Iu(r(...o), n) && t(null, ...o);
        });
      };
    }), n;
  }
  function Mu(n, t) {
    if (n.l.s) for (const r of n.l.s) e(r);
    t();
  }
  function zu(n, t, r) {
    if (n == null) return t(void 0), Jr;
    const a = Xt(() => n.subscribe(t, r));
    return a.unsubscribe ? () => a.unsubscribe() : a;
  }
  const Vi = [];
  function Rr(n, t = Jr) {
    let r = null;
    const a = /* @__PURE__ */ new Set();
    function s(c) {
      if (Zs(n, c) && (n = c, r)) {
        const l = !Vi.length;
        for (const i of a) i[1](), Vi.push(i, n);
        if (l) {
          for (let i = 0; i < Vi.length; i += 2) Vi[i][0](Vi[i + 1]);
          Vi.length = 0;
        }
      }
    }
    function o(c) {
      s(c(n));
    }
    return { set: s, update: o, subscribe: function(c, l = Jr) {
      const i = [c, l];
      return a.add(i), a.size === 1 && (r = t(s, o) || Jr), c(n), () => {
        a.delete(i), a.size === 0 && r && (r(), r = null);
      };
    } };
  }
  let $u, ls = !1, _o = Symbol();
  function Ve(n, t, r) {
    var a;
    const s = (a = r[t]) != null ? a : r[t] = { store: null, source: eo(void 0), unsubscribe: Jr };
    if (s.store !== n && !(_o in r)) if (s.unsubscribe(), s.store = n != null ? n : null, n == null) s.source.v = void 0, s.unsubscribe = Jr;
    else {
      var o = !0;
      s.unsubscribe = zu(n, (c) => {
        o ? s.source.v = c : ee(s.source, c);
      }), o = !1;
    }
    return n && _o in r ? (function(c) {
      let l;
      return zu(c, (i) => l = i)(), l;
    })(n) : e(s.source);
  }
  function kt() {
    const n = {};
    return [n, function() {
      ul(() => {
        for (var t in n)
          n[t].unsubscribe();
        ei(n, _o, { enumerable: !1, value: !0 });
      });
    }];
  }
  function k(n, t, r, a) {
    var s, o, c, l, i = !wi || !!(2 & r), u = !!(8 & r), g = !!(16 & r), v = a, p = !0, f = () => (p && (p = !1, v = g ? Xt(a) : a), v);
    if (u) {
      var b = ba in n || mc in n;
      c = (o = (s = ti(n, t)) == null ? void 0 : s.set) != null ? o : b && t in n ? (V) => n[t] = V : void 0;
    }
    var y, m = !1;
    if (u ? [l, m] = (function(V) {
      var R = ls;
      try {
        return ls = !1, [V(), ls];
      } finally {
        ls = R;
      }
    })(() => n[t]) : l = n[t], l === void 0 && a !== void 0 && (l = f(), c && (i && (function() {
      throw new Error("https://svelte.dev/e/props_invalid_value");
    })(), c(l))), y = i ? () => {
      var V = n[t];
      return V === void 0 ? f() : (p = !0, V);
    } : () => {
      var V = n[t];
      return V !== void 0 && (v = void 0), V === void 0 ? v : V;
    }, i && !(4 & r)) return y;
    if (c) {
      var z = n.$$legacy;
      return function(V, R) {
        return arguments.length > 0 ? (i && R && !z && !m || c(R ? y() : V), V) : y();
      };
    }
    var C = !1, A = (1 & r ? cl : Jl)(() => (C = !1, y()));
    u && e(A);
    var O = Lt;
    return function(V, R) {
      if (arguments.length > 0) {
        const U = R ? e(A) : i && u ? ut(V) : V;
        return ee(A, U), C = !0, v !== void 0 && (v = U), V;
      }
      return si && C || (O.f & mi) !== 0 ? A.v : e(A);
    };
  }
  class Ph {
    constructor(t) {
      var r, a;
      xt(this, za), xt(this, qr);
      var s = /* @__PURE__ */ new Map(), o = (l, i) => {
        var u = eo(i, !1, !1);
        return s.set(l, u), u;
      };
      const c = new Proxy({ ...t.props || {}, $$events: {} }, { get(l, i) {
        var u;
        return e((u = s.get(i)) != null ? u : o(i, Reflect.get(l, i)));
      }, has(l, i) {
        var u;
        return i === mc || (e((u = s.get(i)) != null ? u : o(i, Reflect.get(l, i))), Reflect.has(l, i));
      }, set(l, i, u) {
        var g;
        return ee((g = s.get(i)) != null ? g : o(i, u), u), Reflect.set(l, i, u);
      } });
      Ct(this, qr, (t.hydrate ? kh : gu)(t.component, { target: t.target, anchor: t.anchor, props: c, context: t.context, intro: (r = t.intro) != null && r, recover: t.recover })), (a = t == null ? void 0 : t.props) != null && a.$$host && t.sync !== !1 || _(), Ct(this, za, c.$$events);
      for (const l of Object.keys(ye(this, qr))) l !== "$set" && l !== "$destroy" && l !== "$on" && ei(this, l, { get() {
        return ye(this, qr)[l];
      }, set(i) {
        ye(this, qr)[l] = i;
      }, enumerable: !0 });
      ye(this, qr).$set = (l) => {
        Object.assign(c, l);
      }, ye(this, qr).$destroy = () => {
        (function(l, i) {
          const u = oo.get(l);
          u ? (oo.delete(l), u(i)) : Promise.resolve();
        })(ye(this, qr));
      };
    }
    $set(t) {
      ye(this, qr).$set(t);
    }
    $on(t, r) {
      ye(this, za)[t] = ye(this, za)[t] || [];
      const a = (...s) => r.call(this, ...s);
      return ye(this, za)[t].push(a), () => {
        ye(this, za)[t] = ye(this, za)[t].filter((s) => s !== a);
      };
    }
    $destroy() {
      ye(this, qr).$destroy();
    }
  }
  function ss(n, t, r, a) {
    var s;
    const o = (s = r[n]) == null ? void 0 : s.type;
    if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !a || !r[n]) return t;
    if (a === "toAttribute") switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t == null ? null : t;
      default:
        return t;
    }
    else switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
      default:
        return t;
      case "Number":
        return t != null ? +t : t;
    }
  }
  function Je(n, t, r, a, s, o) {
    let c = class extends $u {
      constructor() {
        super(n, r, s), this.$$p_d = t;
      }
      static get observedAttributes() {
        return Rl(t).map((l) => (t[l].attribute || l).toLowerCase());
      }
    };
    return Rl(t).forEach((l) => {
      ei(c.prototype, l, { get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      }, set(i) {
        var u;
        i = ss(l, i, t), this.$$d[l] = i;
        var g = this.$$c;
        g && ((u = ti(g, l)) != null && u.get ? g[l] = i : g.$set({ [l]: i }));
      } });
    }), a.forEach((l) => {
      ei(c.prototype, l, { get() {
        var i;
        return (i = this.$$c) == null ? void 0 : i[l];
      } });
    }), o && (c = o(c)), n.element = c, c;
  }
  za = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), typeof HTMLElement == "function" && ($u = class extends HTMLElement {
    constructor(n, t, r) {
      super(), mn(this, "$$ctor"), mn(this, "$$s"), mn(this, "$$c"), mn(this, "$$cn", !1), mn(this, "$$d", {}), mn(this, "$$r", !1), mn(this, "$$p_d", {}), mn(this, "$$l", {}), mn(this, "$$l_u", /* @__PURE__ */ new Map()), mn(this, "$$me"), this.$$ctor = n, this.$$s = t, r && this.attachShadow({ mode: "open" });
    }
    addEventListener(n, t, r) {
      if (this.$$l[n] = this.$$l[n] || [], this.$$l[n].push(t), this.$$c) {
        const a = this.$$c.$on(n, t);
        this.$$l_u.set(t, a);
      }
      super.addEventListener(n, t, r);
    }
    removeEventListener(n, t, r) {
      if (super.removeEventListener(n, t, r), this.$$c) {
        const a = this.$$l_u.get(t);
        a && (a(), this.$$l_u.delete(t));
      }
    }
    async connectedCallback() {
      if (this.$$cn = !0, !this.$$c) {
        let t = function(s) {
          return (o) => {
            const c = document.createElement("slot");
            s !== "default" && (c.name = s), h(o, c);
          };
        };
        if (await Promise.resolve(), !this.$$cn || this.$$c) return;
        const r = {}, a = (function(s) {
          const o = {};
          return s.childNodes.forEach((c) => {
            o[c.slot || "default"] = !0;
          }), o;
        })(this);
        for (const s of this.$$s) s in a && (s !== "default" || this.$$d.children ? r[s] = t(s) : (this.$$d.children = t(s), r.default = !0));
        for (const s of this.attributes) {
          const o = this.$$g_p(s.name);
          o in this.$$d || (this.$$d[o] = ss(o, s.value, this.$$p_d, "toProp"));
        }
        for (const s in this.$$p_d) s in this.$$d || this[s] === void 0 || (this.$$d[s] = this[s], delete this[s]);
        this.$$c = (n = { component: this.$$ctor, target: this.shadowRoot || this, props: { ...this.$$d, $$slots: r, $$host: this } }, new Ph(n)), this.$$me = (function(s) {
          ii.ensure();
          const o = Or(524352, s, !0);
          return () => {
            Gn(o);
          };
        })(() => {
          gl(() => {
            var s;
            this.$$r = !0;
            for (const o of Rl(this.$$c)) {
              if (!((s = this.$$p_d[o]) != null && s.reflect)) continue;
              this.$$d[o] = this.$$c[o];
              const c = ss(o, this.$$d[o], this.$$p_d, "toAttribute");
              c == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, c);
            }
            this.$$r = !1;
          });
        });
        for (const s in this.$$l) for (const o of this.$$l[s]) {
          const c = this.$$c.$on(s, o);
          this.$$l_u.set(o, c);
        }
        this.$$l = {};
      }
      var n;
    }
    attributeChangedCallback(n, t, r) {
      var a;
      this.$$r || (n = this.$$g_p(n), this.$$d[n] = ss(n, r, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [n]: this.$$d[n] }));
    }
    disconnectedCallback() {
      this.$$cn = !1, Promise.resolve().then(() => {
        !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
      });
    }
    $$g_p(n) {
      return Rl(this.$$p_d).find((t) => this.$$p_d[t].attribute === n || !this.$$p_d[t].attribute && t.toLowerCase() === n) || n;
    }
  });
  const Sh = ["primaryBackground", "secondaryBackground", "primaryText", "secondaryText", "border", "overlay", "primaryAccent", "primaryAccentText", "badgeBackground", "badgeText", "error"].map((n) => `brand_${n}`), Bh = { primaryBackground: "#EDEDED", secondaryBackground: "#FFFFFF", primaryText: "#000000", secondaryText: "#555555", border: "#0000004D", overlay: "#000000", primaryAccent: "#000000", primaryAccentText: "#FFFFFF", badgeBackground: "#000000", badgeText: "#FFFFFF", error: "#D72C2C" };
  function Du(n) {
    return typeof n == "string" && Sh.includes(n);
  }
  function Ch(n, t) {
    return Du(n) ? (function(r) {
      const a = r.slice(1).match(/../g).map((s) => parseInt(s, 16));
      return { red: a[0], green: a[1], blue: a[2], alpha: a.length > 3 ? a[3] / 255 : 1 };
    })((function(r, a) {
      var s;
      const o = (function(c) {
        return c.slice(6);
      })(r);
      return (s = a == null ? void 0 : a[o]) != null ? s : Bh[o];
    })(n, t)) : n;
  }
  var gt = ((n) => (n.QuantityBreak = "quantity-break", n.Bxgy = "bxgy", n.Bundle = "bundle", n.MixAndMatch = "mix-and-match", n.Sku = "sku", n))(gt || {});
  function _r(n, t) {
    return Du(n) ? Ch(n, t) : Array.isArray(n) ? n.map((r) => _r(r, t)) : n && typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, a]) => [r, _r(a, t)])) : n;
  }
  const Tu = "swatchSettings", kl = (n) => {
    const t = Rr(n);
    return Va(Tu, t), { swatchSettings: t, setSwatchSettings: (r) => {
      t.set(r);
    } };
  }, Vu = () => {
    const n = Ta(Tu);
    if (!n) throw new Error("getSwatchSettings must be called within a component tree that has setupSwatchSettings initialized");
    return n;
  };
  var Ih = $("<span> </span>"), Mh = $("<div></div>");
  function ma(n, t) {
    at(t, !0);
    const [r, a] = kt(), s = k(t, "product", 7), o = k(t, "class", 7, ""), c = Vu(), l = d(() => Ve(c, "$swatchSettings", r).showSelectedSwatchName ? [] : s().options.map((f) => f.name));
    var i = { get product() {
      return s();
    }, set product(f) {
      s(f), _();
    }, get class() {
      return o();
    }, set class(f = "") {
      o(f), _();
    } }, u = Te(), g = _e(u), v = (f) => {
      var b = Mh();
      Gt(b, 21, () => e(l), jr, (y, m) => {
        var z = Ih(), C = w(z, !0);
        x(z), ke(() => pt(C, e(m))), h(y, z);
      }), x(b), ke(() => Wt(b, 1, fl(["kaching-bundles__bar-variant-names", o()]))), h(f, b);
    };
    F(g, (f) => {
      e(l).length && f(v);
    }), h(n, u);
    var p = it(i);
    return a(), p;
  }
  Je(ma, { product: {}, class: {} }, [], [], !0);
  const os = Math.min, ci = Math.max, cs = Math.round, us = Math.floor, ra = (n) => ({ x: n, y: n }), zh = { left: "right", right: "left", bottom: "top", top: "bottom" }, $h = { start: "end", end: "start" };
  function Au(n, t, r) {
    return ci(n, os(t, r));
  }
  function ds(n, t) {
    return typeof n == "function" ? n(t) : n;
  }
  function ui(n) {
    return n.split("-")[0];
  }
  function gs(n) {
    return n.split("-")[1];
  }
  function qu(n) {
    return n === "x" ? "y" : "x";
  }
  function Gu(n) {
    return n === "y" ? "height" : "width";
  }
  const Dh = /* @__PURE__ */ new Set(["top", "bottom"]);
  function Oa(n) {
    return Dh.has(ui(n)) ? "y" : "x";
  }
  function Fu(n) {
    return qu(Oa(n));
  }
  function ko(n) {
    return n.replace(/start|end/g, (t) => $h[t]);
  }
  const Ou = ["left", "right"], Lu = ["right", "left"], Th = ["top", "bottom"], Vh = ["bottom", "top"];
  function Ah(n, t, r, a) {
    const s = gs(n);
    let o = (function(c, l, i) {
      switch (c) {
        case "top":
        case "bottom":
          return i ? l ? Lu : Ou : l ? Ou : Lu;
        case "left":
        case "right":
          return l ? Th : Vh;
        default:
          return [];
      }
    })(ui(n), r === "start", a);
    return s && (o = o.map((c) => c + "-" + s), t && (o = o.concat(o.map(ko)))), o;
  }
  function hs(n) {
    return n.replace(/left|right|bottom|top/g, (t) => zh[t]);
  }
  function ps(n) {
    const { x: t, y: r, width: a, height: s } = n;
    return { width: a, height: s, top: r, left: t, right: t + a, bottom: r + s, x: t, y: r };
  }
  function Eu(n, t, r) {
    let { reference: a, floating: s } = n;
    const o = Oa(t), c = Fu(t), l = Gu(c), i = ui(t), u = o === "y", g = a.x + a.width / 2 - s.width / 2, v = a.y + a.height / 2 - s.height / 2, p = a[l] / 2 - s[l] / 2;
    let f;
    switch (i) {
      case "top":
        f = { x: g, y: a.y - s.height };
        break;
      case "bottom":
        f = { x: g, y: a.y + a.height };
        break;
      case "right":
        f = { x: a.x + a.width, y: v };
        break;
      case "left":
        f = { x: a.x - s.width, y: v };
        break;
      default:
        f = { x: a.x, y: a.y };
    }
    switch (gs(t)) {
      case "start":
        f[c] -= p * (r && u ? -1 : 1);
        break;
      case "end":
        f[c] += p * (r && u ? -1 : 1);
    }
    return f;
  }
  async function ju(n, t) {
    var r;
    t === void 0 && (t = {});
    const { x: a, y: s, platform: o, rects: c, elements: l, strategy: i } = n, { boundary: u = "clippingAncestors", rootBoundary: g = "viewport", elementContext: v = "floating", altBoundary: p = !1, padding: f = 0 } = ds(t, n), b = (function(V) {
      return typeof V != "number" ? (function(R) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...R };
      })(V) : { top: V, right: V, bottom: V, left: V };
    })(f), y = l[p ? v === "floating" ? "reference" : "floating" : v], m = ps(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(y))) == null || r ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: g, strategy: i })), z = v === "floating" ? { x: a, y: s, width: c.floating.width, height: c.floating.height } : c.reference, C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), A = await (o.isElement == null ? void 0 : o.isElement(C)) && await (o.getScale == null ? void 0 : o.getScale(C)) || { x: 1, y: 1 }, O = ps(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: z, offsetParent: C, strategy: i }) : z);
    return { top: (m.top - O.top + b.top) / A.y, bottom: (O.bottom - m.bottom + b.bottom) / A.y, left: (m.left - O.left + b.left) / A.x, right: (O.right - m.right + b.right) / A.x };
  }
  const qh = /* @__PURE__ */ new Set(["left", "top"]);
  function bs() {
    return typeof window != "undefined";
  }
  function Ai(n) {
    return Ru(n) ? (n.nodeName || "").toLowerCase() : "#document";
  }
  function kr(n) {
    var t;
    return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
  }
  function aa(n) {
    var t;
    return (t = (Ru(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
  }
  function Ru(n) {
    return !!bs() && (n instanceof Node || n instanceof kr(n).Node);
  }
  function Nr(n) {
    return !!bs() && (n instanceof Element || n instanceof kr(n).Element);
  }
  function ia(n) {
    return !!bs() && (n instanceof HTMLElement || n instanceof kr(n).HTMLElement);
  }
  function Nu(n) {
    return !(!bs() || typeof ShadowRoot == "undefined") && (n instanceof ShadowRoot || n instanceof kr(n).ShadowRoot);
  }
  const Gh = /* @__PURE__ */ new Set(["inline", "contents"]);
  function ml(n) {
    const { overflow: t, overflowX: r, overflowY: a, display: s } = Qr(n);
    return /auto|scroll|overlay|hidden|clip/.test(t + a + r) && !Gh.has(s);
  }
  const Fh = /* @__PURE__ */ new Set(["table", "td", "th"]);
  function Oh(n) {
    return Fh.has(Ai(n));
  }
  const Lh = [":popover-open", ":modal"];
  function fs(n) {
    return Lh.some((t) => {
      try {
        return n.matches(t);
      } catch {
        return !1;
      }
    });
  }
  const Eh = ["transform", "translate", "scale", "rotate", "perspective"], jh = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Rh = ["paint", "layout", "strict", "content"];
  function mo(n) {
    const t = xo(), r = Nr(n) ? Qr(n) : n;
    return Eh.some((a) => !!r[a] && r[a] !== "none") || !!r.containerType && r.containerType !== "normal" || !t && !!r.backdropFilter && r.backdropFilter !== "none" || !t && !!r.filter && r.filter !== "none" || jh.some((a) => (r.willChange || "").includes(a)) || Rh.some((a) => (r.contain || "").includes(a));
  }
  function xo() {
    return !(typeof CSS == "undefined" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
  }
  const Nh = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  function qi(n) {
    return Nh.has(Ai(n));
  }
  function Qr(n) {
    return kr(n).getComputedStyle(n);
  }
  function vs(n) {
    return Nr(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
  }
  function La(n) {
    if (Ai(n) === "html") return n;
    const t = n.assignedSlot || n.parentNode || Nu(n) && n.host || aa(n);
    return Nu(t) ? t.host : t;
  }
  function Qu(n) {
    const t = La(n);
    return qi(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : ia(t) && ml(t) ? t : Qu(t);
  }
  function xl(n, t, r) {
    var a;
    t === void 0 && (t = []), r === void 0 && (r = !0);
    const s = Qu(n), o = s === ((a = n.ownerDocument) == null ? void 0 : a.body), c = kr(s);
    if (o) {
      const l = yo(c);
      return t.concat(c, c.visualViewport || [], ml(s) ? s : [], l && r ? xl(l) : []);
    }
    return t.concat(s, xl(s, [], r));
  }
  function yo(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
  }
  function Wu(n) {
    const t = Qr(n);
    let r = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
    const s = ia(n), o = s ? n.offsetWidth : r, c = s ? n.offsetHeight : a, l = cs(r) !== o || cs(a) !== c;
    return l && (r = o, a = c), { width: r, height: a, $: l };
  }
  function wo(n) {
    return Nr(n) ? n : n.contextElement;
  }
  function Gi(n) {
    const t = wo(n);
    if (!ia(t)) return ra(1);
    const r = t.getBoundingClientRect(), { width: a, height: s, $: o } = Wu(t);
    let c = (o ? cs(r.width) : r.width) / a, l = (o ? cs(r.height) : r.height) / s;
    return c && Number.isFinite(c) || (c = 1), l && Number.isFinite(l) || (l = 1), { x: c, y: l };
  }
  const Qh = ra(0);
  function Uu(n) {
    const t = kr(n);
    return xo() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : Qh;
  }
  function di(n, t, r, a) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    const s = n.getBoundingClientRect(), o = wo(n);
    let c = ra(1);
    t && (a ? Nr(a) && (c = Gi(a)) : c = Gi(n));
    const l = (function(p, f, b) {
      return f === void 0 && (f = !1), !(!b || f && b !== kr(p)) && f;
    })(o, r, a) ? Uu(o) : ra(0);
    let i = (s.left + l.x) / c.x, u = (s.top + l.y) / c.y, g = s.width / c.x, v = s.height / c.y;
    if (o) {
      const p = kr(o), f = a && Nr(a) ? kr(a) : a;
      let b = p, y = yo(b);
      for (; y && a && f !== b; ) {
        const m = Gi(y), z = y.getBoundingClientRect(), C = Qr(y), A = z.left + (y.clientLeft + parseFloat(C.paddingLeft)) * m.x, O = z.top + (y.clientTop + parseFloat(C.paddingTop)) * m.y;
        i *= m.x, u *= m.y, g *= m.x, v *= m.y, i += A, u += O, b = kr(y), y = yo(b);
      }
    }
    return ps({ width: g, height: v, x: i, y: u });
  }
  function _s(n, t) {
    const r = vs(n).scrollLeft;
    return t ? t.left + r : di(aa(n)).left + r;
  }
  function Hu(n, t) {
    const r = n.getBoundingClientRect();
    return { x: r.left + t.scrollLeft - _s(n, r), y: r.top + t.scrollTop };
  }
  const Wh = /* @__PURE__ */ new Set(["absolute", "fixed"]);
  function Zu(n, t, r) {
    let a;
    if (t === "viewport") a = (function(s, o) {
      const c = kr(s), l = aa(s), i = c.visualViewport;
      let u = l.clientWidth, g = l.clientHeight, v = 0, p = 0;
      if (i) {
        u = i.width, g = i.height;
        const b = xo();
        (!b || b && o === "fixed") && (v = i.offsetLeft, p = i.offsetTop);
      }
      const f = _s(l);
      if (f <= 0) {
        const b = l.ownerDocument, y = b.body, m = getComputedStyle(y), z = b.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, C = Math.abs(l.clientWidth - y.clientWidth - z);
        C <= 25 && (u -= C);
      } else f <= 25 && (u += f);
      return { width: u, height: g, x: v, y: p };
    })(n, r);
    else if (t === "document") a = (function(s) {
      const o = aa(s), c = vs(s), l = s.ownerDocument.body, i = ci(o.scrollWidth, o.clientWidth, l.scrollWidth, l.clientWidth), u = ci(o.scrollHeight, o.clientHeight, l.scrollHeight, l.clientHeight);
      let g = -c.scrollLeft + _s(s);
      const v = -c.scrollTop;
      return Qr(l).direction === "rtl" && (g += ci(o.clientWidth, l.clientWidth) - i), { width: i, height: u, x: g, y: v };
    })(aa(n));
    else if (Nr(t)) a = (function(s, o) {
      const c = di(s, !0, o === "fixed"), l = c.top + s.clientTop, i = c.left + s.clientLeft, u = ia(s) ? Gi(s) : ra(1);
      return { width: s.clientWidth * u.x, height: s.clientHeight * u.y, x: i * u.x, y: l * u.y };
    })(t, r);
    else {
      const s = Uu(n);
      a = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
    }
    return ps(a);
  }
  function Ju(n, t) {
    const r = La(n);
    return !(r === t || !Nr(r) || qi(r)) && (Qr(r).position === "fixed" || Ju(r, t));
  }
  function Uh(n, t, r) {
    const a = ia(t), s = aa(t), o = r === "fixed", c = di(n, !0, o, t);
    let l = { scrollLeft: 0, scrollTop: 0 };
    const i = ra(0);
    function u() {
      i.x = _s(s);
    }
    if (a || !a && !o) if ((Ai(t) !== "body" || ml(s)) && (l = vs(t)), a) {
      const v = di(t, !0, o, t);
      i.x = v.x + t.clientLeft, i.y = v.y + t.clientTop;
    } else s && u();
    o && !a && s && u();
    const g = !s || a || o ? ra(0) : Hu(s, l);
    return { x: c.left + l.scrollLeft - i.x - g.x, y: c.top + l.scrollTop - i.y - g.y, width: c.width, height: c.height };
  }
  function Po(n) {
    return Qr(n).position === "static";
  }
  function Yu(n, t) {
    if (!ia(n) || Qr(n).position === "fixed") return null;
    if (t) return t(n);
    let r = n.offsetParent;
    return aa(n) === r && (r = r.ownerDocument.body), r;
  }
  function Ku(n, t) {
    const r = kr(n);
    if (fs(n)) return r;
    if (!ia(n)) {
      let s = La(n);
      for (; s && !qi(s); ) {
        if (Nr(s) && !Po(s)) return s;
        s = La(s);
      }
      return r;
    }
    let a = Yu(n, t);
    for (; a && Oh(a) && Po(a); ) a = Yu(a, t);
    return a && qi(a) && Po(a) && !mo(a) ? r : a || (function(s) {
      let o = La(s);
      for (; ia(o) && !qi(o); ) {
        if (mo(o)) return o;
        if (fs(o)) return null;
        o = La(o);
      }
      return null;
    })(n) || r;
  }
  const Hh = { convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
    let { elements: t, rect: r, offsetParent: a, strategy: s } = n;
    const o = s === "fixed", c = aa(a), l = !!t && fs(t.floating);
    if (a === c || l && o) return r;
    let i = { scrollLeft: 0, scrollTop: 0 }, u = ra(1);
    const g = ra(0), v = ia(a);
    if ((v || !v && !o) && ((Ai(a) !== "body" || ml(c)) && (i = vs(a)), ia(a))) {
      const f = di(a);
      u = Gi(a), g.x = f.x + a.clientLeft, g.y = f.y + a.clientTop;
    }
    const p = !c || v || o ? ra(0) : Hu(c, i);
    return { width: r.width * u.x, height: r.height * u.y, x: r.x * u.x - i.scrollLeft * u.x + g.x + p.x, y: r.y * u.y - i.scrollTop * u.y + g.y + p.y };
  }, getDocumentElement: aa, getClippingRect: function(n) {
    let { element: t, boundary: r, rootBoundary: a, strategy: s } = n;
    const o = [...r === "clippingAncestors" ? fs(t) ? [] : (function(i, u) {
      const g = u.get(i);
      if (g) return g;
      let v = xl(i, [], !1).filter((y) => Nr(y) && Ai(y) !== "body"), p = null;
      const f = Qr(i).position === "fixed";
      let b = f ? La(i) : i;
      for (; Nr(b) && !qi(b); ) {
        const y = Qr(b), m = mo(b);
        m || y.position !== "fixed" || (p = null), (f ? !m && !p : !m && y.position === "static" && p && Wh.has(p.position) || ml(b) && !m && Ju(i, b)) ? v = v.filter((z) => z !== b) : p = y, b = La(b);
      }
      return u.set(i, v), v;
    })(t, this._c) : [].concat(r), a], c = o[0], l = o.reduce((i, u) => {
      const g = Zu(t, u, s);
      return i.top = ci(g.top, i.top), i.right = os(g.right, i.right), i.bottom = os(g.bottom, i.bottom), i.left = ci(g.left, i.left), i;
    }, Zu(t, c, s));
    return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
  }, getOffsetParent: Ku, getElementRects: async function(n) {
    const t = this.getOffsetParent || Ku, r = this.getDimensions, a = await r(n.floating);
    return { reference: Uh(n.reference, await t(n.floating), n.strategy), floating: { x: 0, y: 0, width: a.width, height: a.height } };
  }, getClientRects: function(n) {
    return Array.from(n.getClientRects());
  }, getDimensions: function(n) {
    const { width: t, height: r } = Wu(n);
    return { width: t, height: r };
  }, getScale: Gi, isElement: Nr, isRTL: function(n) {
    return Qr(n).direction === "rtl";
  } };
  function Xu(n, t) {
    return n.x === t.x && n.y === t.y && n.width === t.width && n.height === t.height;
  }
  function Zh(n, t, r, a) {
    a === void 0 && (a = {});
    const { ancestorScroll: s = !0, ancestorResize: o = !0, elementResize: c = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: i = !1 } = a, u = wo(n), g = s || o ? [...u ? xl(u) : [], ...xl(t)] : [];
    g.forEach((m) => {
      s && m.addEventListener("scroll", r, { passive: !0 }), o && m.addEventListener("resize", r);
    });
    const v = u && l ? (function(m, z) {
      let C, A = null;
      const O = aa(m);
      function V() {
        var R;
        clearTimeout(C), (R = A) == null || R.disconnect(), A = null;
      }
      return (function R(U, G) {
        U === void 0 && (U = !1), G === void 0 && (G = 1), V();
        const H = m.getBoundingClientRect(), { left: I, top: T, width: ue, height: re } = H;
        if (U || z(), !ue || !re) return;
        const P = { rootMargin: -us(T) + "px " + -us(O.clientWidth - (I + ue)) + "px " + -us(O.clientHeight - (T + re)) + "px " + -us(I) + "px", threshold: ci(0, os(1, G)) || 1 };
        let S = !0;
        function B(q) {
          const Y = q[0].intersectionRatio;
          if (Y !== G) {
            if (!S) return R();
            Y ? R(!1, Y) : C = setTimeout(() => {
              R(!1, 1e-7);
            }, 1e3);
          }
          Y !== 1 || Xu(H, m.getBoundingClientRect()) || R(), S = !1;
        }
        try {
          A = new IntersectionObserver(B, { ...P, root: O.ownerDocument });
        } catch {
          A = new IntersectionObserver(B, P);
        }
        A.observe(m);
      })(!0), V;
    })(u, r) : null;
    let p, f = -1, b = null;
    c && (b = new ResizeObserver((m) => {
      let [z] = m;
      z && z.target === u && b && (b.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
        var C;
        (C = b) == null || C.observe(t);
      })), r();
    }), u && !i && b.observe(u), b.observe(t));
    let y = i ? di(n) : null;
    return i && (function m() {
      const z = di(n);
      y && !Xu(y, z) && r(), y = z, p = requestAnimationFrame(m);
    })(), r(), () => {
      var m;
      g.forEach((z) => {
        s && z.removeEventListener("scroll", r), o && z.removeEventListener("resize", r);
      }), v == null || v(), (m = b) == null || m.disconnect(), b = null, i && cancelAnimationFrame(p);
    };
  }
  const Jh = function(n) {
    return { name: "offset", options: n, async fn(t) {
      var r, a;
      const { x: s, y: o, placement: c, middlewareData: l } = t, i = await (async function(u, g) {
        const { placement: v, platform: p, elements: f } = u, b = await (p.isRTL == null ? void 0 : p.isRTL(f.floating)), y = ui(v), m = gs(v), z = Oa(v) === "y", C = qh.has(y) ? -1 : 1, A = b && z ? -1 : 1, O = ds(g, u);
        let { mainAxis: V, crossAxis: R, alignmentAxis: U } = typeof O == "number" ? { mainAxis: O, crossAxis: 0, alignmentAxis: null } : { mainAxis: O.mainAxis || 0, crossAxis: O.crossAxis || 0, alignmentAxis: O.alignmentAxis };
        return m && typeof U == "number" && (R = m === "end" ? -1 * U : U), z ? { x: R * A, y: V * C } : { x: V * C, y: R * A };
      })(t, n);
      return c === ((r = l.offset) == null ? void 0 : r.placement) && (a = l.arrow) != null && a.alignmentOffset ? {} : { x: s + i.x, y: o + i.y, data: { ...i, placement: c } };
    } };
  }, Yh = function(n) {
    return n === void 0 && (n = {}), { name: "shift", options: n, async fn(t) {
      const { x: r, y: a, placement: s } = t, { mainAxis: o = !0, crossAxis: c = !1, limiter: l = { fn: (m) => {
        let { x: z, y: C } = m;
        return { x: z, y: C };
      } }, ...i } = ds(n, t), u = { x: r, y: a }, g = await ju(t, i), v = Oa(ui(s)), p = qu(v);
      let f = u[p], b = u[v];
      if (o) {
        const m = p === "y" ? "bottom" : "right";
        f = Au(f + g[p === "y" ? "top" : "left"], f, f - g[m]);
      }
      if (c) {
        const m = v === "y" ? "bottom" : "right";
        b = Au(b + g[v === "y" ? "top" : "left"], b, b - g[m]);
      }
      const y = l.fn({ ...t, [p]: f, [v]: b });
      return { ...y, data: { x: y.x - r, y: y.y - a, enabled: { [p]: o, [v]: c } } };
    } };
  }, Kh = function(n) {
    return n === void 0 && (n = {}), { name: "flip", options: n, async fn(t) {
      var r, a;
      const { placement: s, middlewareData: o, rects: c, initialPlacement: l, platform: i, elements: u } = t, { mainAxis: g = !0, crossAxis: v = !0, fallbackPlacements: p, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: b = "none", flipAlignment: y = !0, ...m } = ds(n, t);
      if ((r = o.arrow) != null && r.alignmentOffset) return {};
      const z = ui(s), C = Oa(l), A = ui(l) === l, O = await (i.isRTL == null ? void 0 : i.isRTL(u.floating)), V = p || (A || !y ? [hs(l)] : (function(P) {
        const S = hs(P);
        return [ko(P), S, ko(S)];
      })(l)), R = b !== "none";
      !p && R && V.push(...Ah(l, y, b, O));
      const U = [l, ...V], G = await ju(t, m), H = [];
      let I = ((a = o.flip) == null ? void 0 : a.overflows) || [];
      if (g && H.push(G[z]), v) {
        const P = (function(S, B, q) {
          q === void 0 && (q = !1);
          const Y = gs(S), Q = Fu(S), oe = Gu(Q);
          let j = Q === "x" ? Y === (q ? "end" : "start") ? "right" : "left" : Y === "start" ? "bottom" : "top";
          return B.reference[oe] > B.floating[oe] && (j = hs(j)), [j, hs(j)];
        })(s, c, O);
        H.push(G[P[0]], G[P[1]]);
      }
      if (I = [...I, { placement: s, overflows: H }], !H.every((P) => P <= 0)) {
        var T, ue;
        const P = (((T = o.flip) == null ? void 0 : T.index) || 0) + 1, S = U[P];
        if (S && (!(v === "alignment" && C !== Oa(S)) || I.every((q) => Oa(q.placement) !== C || q.overflows[0] > 0)))
          return { data: { index: P, overflows: I }, reset: { placement: S } };
        let B = (ue = I.filter((q) => q.overflows[0] <= 0).sort((q, Y) => q.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : ue.placement;
        if (!B) switch (f) {
          case "bestFit": {
            var re;
            const q = (re = I.filter((Y) => {
              if (R) {
                const Q = Oa(Y.placement);
                return Q === C || Q === "y";
              }
              return !0;
            }).map((Y) => [Y.placement, Y.overflows.filter((Q) => Q > 0).reduce((Q, oe) => Q + oe, 0)]).sort((Y, Q) => Y[1] - Q[1])[0]) == null ? void 0 : re[0];
            q && (B = q);
            break;
          }
          case "initialPlacement":
            B = l;
        }
        if (s !== B) return { reset: { placement: B } };
      }
      return {};
    } };
  }, Xh = (n, t, r) => {
    const a = /* @__PURE__ */ new Map(), s = { platform: Hh, ...r }, o = { ...s.platform, _c: a };
    return (async (c, l, i) => {
      const { placement: u = "bottom", strategy: g = "absolute", middleware: v = [], platform: p } = i, f = v.filter(Boolean), b = await (p.isRTL == null ? void 0 : p.isRTL(l));
      let y = await p.getElementRects({ reference: c, floating: l, strategy: g }), { x: m, y: z } = Eu(y, u, b), C = u, A = {}, O = 0;
      for (let V = 0; V < f.length; V++) {
        const { name: R, fn: U } = f[V], { x: G, y: H, data: I, reset: T } = await U({ x: m, y: z, initialPlacement: u, placement: C, strategy: g, middlewareData: A, rects: y, platform: p, elements: { reference: c, floating: l } });
        m = G != null ? G : m, z = H != null ? H : z, A = { ...A, [R]: { ...A[R], ...I } }, T && O <= 50 && (O++, typeof T == "object" && (T.placement && (C = T.placement), T.rects && (y = T.rects === !0 ? await p.getElementRects({ reference: c, floating: l, strategy: g }) : T.rects), { x: m, y: z } = Eu(y, C, b)), V = -1);
      }
      return { x: m, y: z, placement: C, strategy: g, middlewareData: A };
    })(n, t, { ...s, platform: o });
  };
  function ur(n) {
    const t = { bold: "bold", light: "300", medium: "500", regular: "normal" };
    for (const r in t) if (n.includes(r)) return t[r];
    return "normal";
  }
  function dr(n) {
    return n.includes("italic") ? "italic" : "normal";
  }
  function We(n) {
    return n ? `rgba(${n.red}, ${n.green}, ${n.blue}, ${n.alpha})` : "";
  }
  function ed(n) {
    return n && n.text && n.background ? `--bar-most-popular-background-color: ${We(n.background)}; --bar-most-popular-color: ${We(n.text)};` : "";
  }
  const ep = { "SF Mono": '"SF Mono", ui-monospace, Menlo, monospace', Helvetica: '"Helvetica Neue", Helvetica, -apple-system, sans-serif', "New York": '"New York", ui-serif, Georgia, serif', "System UI": "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" };
  function tp(n) {
    var t;
    return (t = ep[n]) != null ? t : `"${n}"`;
  }
  function fn(n) {
    return Object.entries(n).reduce((t, [r, a]) => (a && t.push(`--${r}:${a}`), t), []).join(";");
  }
  function td(n) {
    var t, r;
    const { colors: a, fonts: s, cornerRadius: o, spacing: c, imageSize: l, imageCornerRadius: i, bundleBarsPerRow: u, dealBars: g } = n, v = a.border || a.primary, p = Math.min(g.length, u ? parseInt(u) : 3).toString();
    return fn({ "block-font-family": s.fontFamily ? tp(s.fontFamily) : null, "block-title-color": We(a.title), "block-title-font-size": s.blockTitle.size + "px", "block-title-font-weight": ur(s.blockTitle.style), "block-title-font-style": dr(s.blockTitle.style), "block-spacing": c == null ? void 0 : c.toString(), "bar-border-radius": (o || 0) + "px", "badge-concave-depth": Math.min(o || 0, 12) + "px", "bar-background-color": We(a.background), "bar-selected-background-color": We(a.selectedBackground || a.background), "bar-border-color": We({ ...v, alpha: 0.3 * v.alpha }), "bar-selected-border-color": We(v), "block-block-title-color": We(a.blockTitle || a.title), "bar-title-color": We(a.title), "bar-title-font-size": s.title.size + "px", "bar-title-font-weight": ur(s.title.style), "bar-title-font-style": dr(s.title.style), "bar-subtitle-color": We(a.subtitle), "bar-subtitle-font-size": s.subtitle.size + "px", "bar-subtitle-font-weight": ur(s.subtitle.style), "bar-subtitle-font-style": dr(s.subtitle.style), "bar-price-color": We(a.price || a.title), "bar-full-price-color": We(a.fullPrice || a.subtitle), "bar-label-border-top-radius": (o ? o - 1 : 0) + "px", "bar-label-background-color": We(a.labelBackground), "bar-label-color": We(a.label), "bar-label-font-size": s.label.size + "px", "bar-label-font-weight": ur(s.label.style), "bar-label-font-style": dr(s.label.style), "bar-most-popular-background-color": We(a.badgeBackground), "bar-most-popular-color": We(a.badgeText), "bar-variant-select-border-radius": (o || 0) / 2 + "px", "bar-image-size": (l || 48) + "px", "bar-image-border-radius": (i || 0) + "px", "kaching-bundle-products-image-border-radius": (o || 0) / 2 + "px", "kaching-bundles-unit-label-font-size": s.unitLabel ? s.unitLabel.size + "px" : null, "kaching-bundles-unit-label-font-weight": s.unitLabel ? ur(s.unitLabel.style) : null, "kaching-bundles-unit-label-font-style": s.unitLabel ? dr(s.unitLabel.style) : null, "bundle-bars-per-row": p, "kaching-collection-breaks-require-selection-background-color": ((t = n.collectionBreaks) == null ? void 0 : t.requireItemSelectionAlert) && We(n.collectionBreaks.requireItemSelectionAlert.backgroundColor), "kaching-collection-breaks-require-selection-text-color": ((r = n.collectionBreaks) == null ? void 0 : r.requireItemSelectionAlert) && We(n.collectionBreaks.requireItemSelectionAlert.textColor) });
  }
  const nd = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, np = (n) => {
    const t = n.replace(/[^a-zA-Z]+/g, "").toLowerCase();
    if (!(t in nd)) return;
    const r = nd[t];
    return { red: r[0], green: r[1], blue: r[2], alpha: 1 };
  }, rp = (n, t) => ({ red: Math.max(0, n.red - Math.round(n.red * t)), green: Math.max(0, n.green - Math.round(n.green * t)), blue: Math.max(0, n.blue - Math.round(n.blue * t)), alpha: n.alpha });
  var ap = $("<div></div>");
  function ks(n, t) {
    at(t, !0);
    let r = k(t, "color", 7), a = k(t, "image", 7), s = k(t, "size", 7), o = k(t, "shape", 7), c = k(t, "unavailable", 7, !1);
    const l = d(() => r() ? (function(p) {
      p = p.replace(/^#/, "");
      let f = parseInt(p, 16);
      return { red: f >> 16 & 255, green: f >> 8 & 255, blue: 255 & f, alpha: 1 };
    })(r()) : null), i = d(() => {
      let p = { "kaching-swatch-size": `${s() - 2}px` };
      const f = { rounded: 20, circle: 50 }[o()];
      return f && (p = { ...p, "kaching-swatch-border-radius": `${f}%` }), a() ? p = { ...p, "kaching-swatch-image-url": `url(${a()})` } : e(l) && (p = { ...p, "kaching-swatch-color": We(e(l)), "kaching-swatch-border-color": We(rp(e(l), 0.1)) }), fn(p);
    });
    var u = { get color() {
      return r();
    }, set color(p) {
      r(p), _();
    }, get image() {
      return a();
    }, set image(p) {
      a(p), _();
    }, get size() {
      return s();
    }, set size(p) {
      s(p), _();
    }, get shape() {
      return o();
    }, set shape(p) {
      o(p), _();
    }, get unavailable() {
      return c();
    }, set unavailable(p = !1) {
      c(p), _();
    } }, g = ap();
    let v;
    return ke((p) => {
      v = Wt(g, 1, "kaching-bundles__swatch", null, v, p), Ft(g, e(i));
    }, [() => ({ "kaching-bundles__swatch--unavailable": c() })]), h(n, g), it(u);
  }
  function Yt(n, t) {
    at(t, !0);
    let r = k(t, "element", 7, "button"), a = k(t, "class", 7), s = k(t, "onclick", 7), o = k(t, "onkeydown", 7), c = k(t, "data-value", 7), l = k(t, "title", 7), i = k(t, "id", 7), u = k(t, "role", 7), g = k(t, "aria-label", 7), v = k(t, "aria-expanded", 7), p = k(t, "aria-haspopup", 7), f = k(t, "aria-selected", 7), b = k(t, "aria-checked", 7), y = k(t, "aria-activedescendant", 7), m = k(t, "aria-controls", 7), z = k(t, "tabindex", 7), C = k(t, "disabled", 7, !1), A = k(t, "ref", 15);
    function O(G) {
      o() && (o()(G), G.defaultPrevented) || C() || G.key !== "Enter" && G.key !== " " || (G.preventDefault(), G.currentTarget.click());
    }
    function V(G) {
      var H;
      if (C()) return G.preventDefault(), void G.stopPropagation();
      (H = s()) == null || H(G);
    }
    var R = { get element() {
      return r();
    }, set element(G = "button") {
      r(G), _();
    }, get class() {
      return a();
    }, set class(G) {
      a(G), _();
    }, get onclick() {
      return s();
    }, set onclick(G) {
      s(G), _();
    }, get onkeydown() {
      return o();
    }, set onkeydown(G) {
      o(G), _();
    }, get "data-value"() {
      return c();
    }, set "data-value"(G) {
      c(G), _();
    }, get title() {
      return l();
    }, set title(G) {
      l(G), _();
    }, get id() {
      return i();
    }, set id(G) {
      i(G), _();
    }, get role() {
      return u();
    }, set role(G) {
      u(G), _();
    }, get "aria-label"() {
      return g();
    }, set "aria-label"(G) {
      g(G), _();
    }, get "aria-expanded"() {
      return v();
    }, set "aria-expanded"(G) {
      v(G), _();
    }, get "aria-haspopup"() {
      return p();
    }, set "aria-haspopup"(G) {
      p(G), _();
    }, get "aria-selected"() {
      return f();
    }, set "aria-selected"(G) {
      f(G), _();
    }, get "aria-checked"() {
      return b();
    }, set "aria-checked"(G) {
      b(G), _();
    }, get "aria-activedescendant"() {
      return y();
    }, set "aria-activedescendant"(G) {
      y(G), _();
    }, get "aria-controls"() {
      return m();
    }, set "aria-controls"(G) {
      m(G), _();
    }, get tabindex() {
      return z();
    }, set tabindex(G) {
      z(G), _();
    }, get disabled() {
      return C();
    }, set disabled(G = !1) {
      C(G), _();
    }, get ref() {
      return A();
    }, set ref(G) {
      A(G), _();
    } }, U = Te();
    return vu(_e(U), r, 0, (G, H) => {
      Ti(G, (T) => A(T), () => A()), Su(G, () => {
        var T, ue;
        return { role: (T = u()) != null ? T : "button", tabindex: (ue = z()) != null ? ue : C() ? -1 : 0, class: a(), onclick: V, "data-value": c(), title: l(), id: i(), "aria-label": g(), "aria-expanded": v(), "aria-haspopup": p(), "aria-selected": f(), "aria-checked": b(), "aria-activedescendant": y(), "aria-controls": m(), "aria-disabled": C() ? "true" : void 0, onkeydown: O };
      });
      var I = Te();
      bu(_e(I), t, "default", {}), h(H, I);
    }), h(n, U), it(R);
  }
  Je(ks, { color: {}, image: {}, size: {}, shape: {}, unavailable: {} }, [], [], !0), Je(Yt, { element: {}, class: {}, onclick: {}, onkeydown: {}, "data-value": {}, title: {}, id: {}, role: {}, "aria-label": {}, "aria-expanded": {}, "aria-haspopup": {}, "aria-selected": {}, "aria-checked": {}, "aria-activedescendant": {}, "aria-controls": {}, tabindex: {}, disabled: {}, ref: {} }, ["default"], [], !0);
  const rd = "translations", gi = (n = {}) => {
    const t = Rr(ad(n));
    return Va(rd, t), { translate: t, setTranslations: (r) => {
      t.set(ad(r));
    } };
  }, Tt = () => {
    const n = Ta(rd);
    if (!n) throw new Error("getTranslations must be called within a component tree that has setupTranslations initialized");
    return n;
  }, ad = (n) => (t) => n[t] || t;
  async function mr(n, t, r = {}, a = !0) {
    a && await ts();
    const s = new CustomEvent(t, { detail: r, bubbles: !0, cancelable: !0, composed: !0 });
    n.dispatchEvent(s);
  }
  function Ut(n) {
    return typeof n == "number" ? n : Number(n.split("/").pop());
  }
  function id(n, t) {
    return n.find((r) => r.options.every((a, s) => a === t[s]));
  }
  function Cr(n) {
    const t = n.variants.filter((r) => r.availableForSale);
    return t.length > 0 ? { ...n, variants: t } : n;
  }
  var ip = $("<span> <!></span>"), lp = $("<span> </span>"), sp = $("<!> <!>", 1), op = $("<span> </span>"), cp = $("<span> <!></span>"), up = $("<span> </span>"), dp = $("<!> <!>", 1), gp = $('<div class="kaching-bundles__swatch-dropdown__options" role="listbox"></div>'), hp = $('<div class="kaching-bundles__swatch-dropdown kaching-bundles-option"><!> <!></div>');
  function ld(n, t) {
    at(t, !0);
    const r = () => Ve(C, "$translate", a), [a, s] = kt();
    let o = k(t, "option", 7), c = k(t, "swatchSize", 7), l = k(t, "swatchShape", 7), i = k(t, "value", 7), u = k(t, "placeholderText", 7, void 0), g = k(t, "onChange", 7), v = Oe(!1), p = Oe(-1), f = Oe(void 0), b = Oe(void 0), y = d(() => o().optionValues.find((P) => P.name === i()) || (u() != null ? null : o().optionValues[0]));
    const m = `swatch-dropdown-${Math.random().toString(16).slice(2)}`;
    function z(P) {
      return `${m}-option-${P}`;
    }
    const C = Tt();
    function A() {
      ee(v, !0), ee(p, o().optionValues.findIndex((P) => P.name === i()), !0), e(p) === -1 && ee(p, 0);
    }
    function O() {
      ee(v, !1), ee(p, -1);
    }
    function V() {
      var P;
      O(), (P = e(f)) == null || P.focus();
    }
    function R(P) {
      i(P), V();
      try {
        const S = o().optionValues.find((B) => B.name === P);
        S != null && S.unavailable && mr(document.body, "kaching-unavailable-option-value-selected", { swatch: "dropdown" });
      } catch (S) {
        console.error(S);
      }
      g()(i());
    }
    function U(P, S) {
      const B = (q) => {
        P.contains(q.target) || S();
      };
      return document.addEventListener("click", B, !0), { destroy() {
        document.removeEventListener("click", B, !0);
      } };
    }
    tt(() => {
      if (e(v) && e(f) && e(b)) return Zh(e(f), e(b), async () => {
        if (!e(f) || !e(b)) return;
        const P = e(b), { x: S, y: B } = await Xh(e(f), P, { placement: "bottom-start", strategy: "fixed", middleware: [Jh(2), Kh(), Yh({ padding: 8 })] });
        P.style.left = `${S}px`, P.style.top = `${B}px`;
      });
    });
    var G = { get option() {
      return o();
    }, set option(P) {
      o(P), _();
    }, get swatchSize() {
      return c();
    }, set swatchSize(P) {
      c(P), _();
    }, get swatchShape() {
      return l();
    }, set swatchShape(P) {
      l(P), _();
    }, get value() {
      return i();
    }, set value(P) {
      i(P), _();
    }, get placeholderText() {
      return u();
    }, set placeholderText(P = void 0) {
      u(P), _();
    }, get onChange() {
      return g();
    }, set onChange(P) {
      g(P), _();
    } }, H = hp(), I = w(H);
    {
      let P = d(() => e(v) && e(p) >= 0 ? z(e(p)) : void 0);
      Yt(I, { element: "span", class: "kaching-bundles__bar-variant-select", role: "combobox", get "aria-label"() {
        return o().name;
      }, onclick: function(S) {
        e(v) ? (ee(v, !1), ee(p, -1)) : A(), S.preventDefault();
      }, onkeydown: function(S) {
        if (!e(v)) return void (S.key !== "ArrowDown" && S.key !== "ArrowUp" && S.key !== "Enter" && S.key !== " " || (S.preventDefault(), A()));
        const B = o().optionValues.length;
        switch (S.key) {
          case "Escape":
            S.preventDefault(), V();
            break;
          case "ArrowDown":
            S.preventDefault(), ee(p, e(p) < B - 1 ? e(p) + 1 : 0, !0);
            break;
          case "ArrowUp":
            S.preventDefault(), ee(p, e(p) > 0 ? e(p) - 1 : B - 1, !0);
            break;
          case "Home":
            S.preventDefault(), ee(p, 0);
            break;
          case "End":
            S.preventDefault(), ee(p, B - 1);
            break;
          case "Enter":
          case " ":
            S.preventDefault(), e(p) >= 0 && R(o().optionValues[e(p)].name);
        }
      }, get "aria-expanded"() {
        return e(v);
      }, "aria-haspopup": "listbox", get "aria-controls"() {
        return m;
      }, get "aria-activedescendant"() {
        return e(P);
      }, get ref() {
        return e(f);
      }, set ref(S) {
        ee(f, S, !0);
      }, children: (S, B) => {
        var q = Te(), Y = _e(q), Q = (j) => {
          var D = sp(), se = _e(D);
          ks(se, { get color() {
            return e(y).swatch.color;
          }, get image() {
            return e(y).swatch.image;
          }, get size() {
            return c();
          }, get shape() {
            return l();
          }, get unavailable() {
            return e(y).unavailable;
          } }), lt(E(se, 2), () => e(y).name, (te) => {
            var X = Te(), ne = _e(X), he = (W) => {
              var de = ip(), ge = w(de);
              Ne(E(ge), () => r()("system.unavailable_option_value")), x(de), ke(() => {
                var N;
                return pt(ge, `${(N = e(y).name) != null ? N : ""} - `);
              }), h(W, de);
            }, M = (W) => {
              var de = lp(), ge = w(de, !0);
              x(de), ke(() => pt(ge, e(y).name)), h(W, de);
            };
            F(ne, (W) => {
              e(y).unavailable ? W(he) : W(M, !1);
            }), h(te, X);
          }), h(j, D);
        }, oe = (j) => {
          var D = op(), se = w(D, !0);
          x(D), ke(() => pt(se, u())), h(j, D);
        };
        F(Y, (j) => {
          e(y) ? j(Q) : j(oe, !1);
        }), h(S, q);
      }, $$slots: { default: !0 } });
    }
    var T = E(I, 2), ue = (P) => {
      var S = gp();
      Gt(S, 23, () => o().optionValues, (B) => B.name, (B, q, Y) => {
        {
          let Q = d(() => ["kaching-bundles__swatch-dropdown__option", "kaching-bundles-option-value", e(Y) === e(p) && "kaching-bundles__swatch-dropdown__option--focused"]), oe = d(() => z(e(Y))), j = d(() => e(q).name === i());
          Yt(B, { element: "span", get class() {
            return e(Q);
          }, get id() {
            return e(oe);
          }, role: "option", tabindex: -1, get "aria-selected"() {
            return e(j);
          }, get "data-value"() {
            return e(q).name;
          }, onclick: () => R(e(q).name), children: (D, se) => {
            var te = dp(), X = _e(te);
            {
              let W = d(() => 1.333 * c());
              ks(X, { get color() {
                return e(q).swatch.color;
              }, get image() {
                return e(q).swatch.image;
              }, get size() {
                return e(W);
              }, get shape() {
                return l();
              }, get unavailable() {
                return e(q).unavailable;
              } });
            }
            var ne = E(X, 2), he = (W) => {
              var de = cp(), ge = w(de);
              Ne(E(ge), () => r()("system.unavailable_option_value")), x(de), ke(() => {
                var N;
                return pt(ge, `${(N = e(q).name) != null ? N : ""} - `);
              }), h(W, de);
            }, M = (W) => {
              var de = up(), ge = w(de, !0);
              x(de), ke(() => pt(ge, e(q).name)), h(W, de);
            };
            F(ne, (W) => {
              e(q).unavailable ? W(he) : W(M, !1);
            }), h(D, te);
          }, $$slots: { default: !0 } });
        }
      }), x(S), Ti(S, (B) => ee(b, B), () => e(b)), ke(() => Ie(S, "id", m)), h(P, S);
    };
    F(T, (P) => {
      e(v) && P(ue);
    }), x(H), uo(H, (P, S) => U == null ? void 0 : U(P, S), () => O), ke(() => {
      var P;
      Ie(H, "data-name", o().name), Ie(H, "data-value", (P = i()) != null ? P : "");
    }), h(n, H);
    var re = it(G);
    return s(), re;
  }
  function pp(n, t, r) {
    try {
      const a = t().optionValues.find((s) => s.name === n.target.value);
      a != null && a.unavailable && mr(document.body, "kaching-unavailable-option-value-selected", { swatch: "default" });
    } catch (a) {
      console.error(a);
    }
    r()(n.target.value);
  }
  Je(ld, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, placeholderText: {}, onChange: {} }, [], [], !0);
  var bp = $('<option class="kaching-bundles-option-value" disabled> </option>'), fp = $(" <!>", 1), vp = $('<option class="kaching-bundles-option-value"><!></option>'), _p = $('<select class="kaching-bundles__bar-variant-select kaching-bundles-option"><!><!></select>');
  function sd(n, t) {
    at(t, !0);
    const [r, a] = kt();
    let s = k(t, "option", 7), o = k(t, "value", 7), c = k(t, "placeholderText", 7, void 0), l = k(t, "onChange", 7);
    const i = Tt();
    var u = { get option() {
      return s();
    }, set option(y) {
      s(y), _();
    }, get value() {
      return o();
    }, set value(y) {
      o(y), _();
    }, get placeholderText() {
      return c();
    }, set placeholderText(y = void 0) {
      c(y), _();
    }, get onChange() {
      return l();
    }, set onChange(y) {
      l(y), _();
    } }, g = _p();
    g.__change = [pp, s, l];
    var v, p = w(g), f = (y) => {
      var m = bp(), z = w(m, !0);
      x(m), m.value = m.__value = "", ke(() => {
        Pu(m, o() == null), Ie(m, "hidden", o() != null), pt(z, c());
      }), h(y, m);
    };
    F(p, (y) => {
      c() != null && y(f);
    }), Gt(E(p), 17, () => s().optionValues, (y) => y.name, (y, m) => {
      var z = vp(), C = w(z), A = (R) => {
        var U = fp(), G = _e(U);
        Ne(E(G), () => Ve(i, "$translate", r)("system.unavailable_option_value")), ke(() => {
          var H;
          return pt(G, `${(H = e(m).name) != null ? H : ""} - `);
        }), h(R, U);
      }, O = (R) => {
        var U = Rn();
        ke(() => pt(U, e(m).name)), h(R, U);
      };
      F(C, (R) => {
        e(m).unavailable ? R(A) : R(O, !1);
      }), x(z);
      var V = {};
      ke(() => {
        var R;
        Ie(z, "data-value", e(m).name), V !== (V = e(m).name) && (z.value = (R = z.__value = e(m).name) != null ? R : "");
      }), h(y, z);
    }), x(g), po(g), ke(() => {
      var y, m, z, C, A;
      Ie(g, "aria-label", s().name), Ie(g, "data-name", s().name), Ie(g, "data-value", (y = o()) != null ? y : ""), v !== (v = (m = o()) != null ? m : "") && (g.value = (C = g.__value = (z = o()) != null ? z : "") != null ? C : "", vl(g, (A = o()) != null ? A : ""));
    }), h(n, g);
    var b = it(u);
    return a(), b;
  }
  Fn(["change"]), Je(sd, { option: {}, value: {}, placeholderText: {}, onChange: {} }, [], [], !0);
  var kp = $('<div class="kaching-bundles__swatch-buttons kaching-bundles-option"></div>');
  function od(n, t) {
    at(t, !0);
    const [r, a] = kt();
    let s = k(t, "option", 7), o = k(t, "swatchSize", 7), c = k(t, "swatchShape", 7), l = k(t, "value", 7), i = k(t, "onChange", 7);
    const u = Tt();
    var g = { get option() {
      return s();
    }, set option(f) {
      s(f), _();
    }, get swatchSize() {
      return o();
    }, set swatchSize(f) {
      o(f), _();
    }, get swatchShape() {
      return c();
    }, set swatchShape(f) {
      c(f), _();
    }, get value() {
      return l();
    }, set value(f) {
      l(f), _();
    }, get onChange() {
      return i();
    }, set onChange(f) {
      i(f), _();
    } }, v = kp();
    Gt(v, 21, () => s().optionValues, (f) => f.name, (f, b) => {
      {
        let y = d(() => ["kaching-bundles__swatch-buttons__button", "kaching-bundles-option-value", e(b).name === l() && "kaching-bundles__swatch-buttons__button--selected"]), m = d(() => e(b).unavailable ? `${e(b).name} - ${Ve(u, "$translate", r)("system.unavailable_option_value")}` : e(b).name);
        Yt(f, { element: "span", get class() {
          return e(y);
        }, get title() {
          return e(b).name;
        }, get "aria-label"() {
          return e(m);
        }, get "data-value"() {
          return e(b).name;
        }, onclick: () => (function(z) {
          l(z);
          try {
            const C = s().optionValues.find((A) => A.name === z);
            C != null && C.unavailable && mr(document.body, "kaching-unavailable-option-value-selected", { swatch: "buttons" });
          } catch (C) {
            console.error(C);
          }
          i()(l());
        })(e(b).name), children: (z, C) => {
          ks(z, { get color() {
            return e(b).swatch.color;
          }, get image() {
            return e(b).swatch.image;
          }, get size() {
            return o();
          }, get shape() {
            return c();
          }, get unavailable() {
            return e(b).unavailable;
          } });
        }, $$slots: { default: !0 } });
      }
    }), x(v), ke(() => {
      Ie(v, "data-name", s().name), Ie(v, "data-value", l());
    }), h(n, v);
    var p = it(g);
    return a(), p;
  }
  Je(od, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0);
  const la = (n) => {
    if (!n) return;
    const { colors: t, fonts: r, cornerRadius: a, pillCornerRadius: s } = n;
    return { cornerRadius: s != null ? s : a, font: r == null ? void 0 : r.pill, background: t == null ? void 0 : t.pillBackground, text: t == null ? void 0 : t.pillText, border: t == null ? void 0 : t.pillBorder, selectedBackground: t == null ? void 0 : t.pillSelectedBackground, selectedText: t == null ? void 0 : t.pillSelectedText, selectedBorder: t == null ? void 0 : t.pillSelectedBorder };
  };
  var mp = $('<div class="kaching-bundles__pill-buttons kaching-bundles-option"></div>');
  function cd(n, t) {
    at(t, !0);
    const [r, a] = kt();
    let s = k(t, "option", 7), o = k(t, "pillStyle", 7), c = k(t, "value", 7), l = k(t, "onChange", 7);
    const i = Tt(), u = d(() => ((f) => {
      if (!f) return "";
      const { cornerRadius: b, font: y } = f;
      return fn({ "kaching-pill-corner-radius": b == null ? null : `${b}px`, "kaching-pill-font-size": y && `${y.size}px`, "kaching-pill-font-weight": y && ur(y.style), "kaching-pill-font-style": y && dr(y.style), "kaching-pill-background-color": We(f.background), "kaching-pill-text-color": We(f.text), "kaching-pill-border-color": We(f.border), "kaching-pill-selected-background-color": We(f.selectedBackground), "kaching-pill-selected-text-color": We(f.selectedText), "kaching-pill-selected-border-color": We(f.selectedBorder) });
    })(o()));
    var g = { get option() {
      return s();
    }, set option(f) {
      s(f), _();
    }, get pillStyle() {
      return o();
    }, set pillStyle(f) {
      o(f), _();
    }, get value() {
      return c();
    }, set value(f) {
      c(f), _();
    }, get onChange() {
      return l();
    }, set onChange(f) {
      l(f), _();
    } }, v = mp();
    Gt(v, 21, () => s().optionValues, (f) => f.name, (f, b) => {
      {
        let y = d(() => ["kaching-bundles__pill-buttons__button", "kaching-bundles-option-value", e(b).name === c() && "kaching-bundles__pill-buttons__button--selected", e(b).unavailable && "kaching-bundles__pill-buttons__button--unavailable"]), m = d(() => e(b).unavailable ? `${e(b).name} - ${Ve(i, "$translate", r)("system.unavailable_option_value")}` : e(b).name);
        Yt(f, { element: "span", get class() {
          return e(y);
        }, get title() {
          return e(b).name;
        }, get "aria-label"() {
          return e(m);
        }, get "data-value"() {
          return e(b).name;
        }, onclick: () => (function(z) {
          c(z);
          try {
            const C = s().optionValues.find((A) => A.name === z);
            C != null && C.unavailable && mr(document.body, "kaching-unavailable-option-value-selected", { swatch: "pills" });
          } catch (C) {
            console.error(C);
          }
          l()(c());
        })(e(b).name), children: (z, C) => {
          fa();
          var A = Rn();
          ke(() => pt(A, e(b).name)), h(z, A);
        }, $$slots: { default: !0 } });
      }
    }), x(v), ke(() => {
      Ie(v, "data-name", s().name), Ie(v, "data-value", c()), Ft(v, e(u));
    }), h(n, v);
    var p = it(g);
    return a(), p;
  }
  function ud(n, t) {
    at(t, !0);
    let r = k(t, "value", 7), a = k(t, "option", 7), s = k(t, "swatchSize", 7, 18), o = k(t, "swatchShape", 7, "circle"), c = k(t, "swatchType", 7), l = k(t, "pillStyle", 7, void 0), i = k(t, "placeholderText", 7, void 0), u = k(t, "onChange", 7);
    function g(m) {
      u()({ position: a().position, value: m });
    }
    var v = { get value() {
      return r();
    }, set value(m) {
      r(m), _();
    }, get option() {
      return a();
    }, set option(m) {
      a(m), _();
    }, get swatchSize() {
      return s();
    }, set swatchSize(m = 18) {
      s(m), _();
    }, get swatchShape() {
      return o();
    }, set swatchShape(m = "circle") {
      o(m), _();
    }, get swatchType() {
      return c();
    }, set swatchType(m) {
      c(m), _();
    }, get pillStyle() {
      return l();
    }, set pillStyle(m = void 0) {
      l(m), _();
    }, get placeholderText() {
      return i();
    }, set placeholderText(m = void 0) {
      i(m), _();
    }, get onChange() {
      return u();
    }, set onChange(m) {
      u(m), _();
    } }, p = Te(), f = _e(p), b = (m) => {
      ld(m, { get option() {
        return a();
      }, get swatchSize() {
        return s();
      }, get swatchShape() {
        return o();
      }, get value() {
        return r();
      }, get placeholderText() {
        return i();
      }, onChange: g });
    }, y = (m) => {
      var z = Te(), C = _e(z), A = (V) => {
        cd(V, { get option() {
          return a();
        }, get pillStyle() {
          return l();
        }, get value() {
          return r();
        }, onChange: g });
      }, O = (V) => {
        var R = Te(), U = _e(R), G = (I) => {
          od(I, { get option() {
            return a();
          }, get swatchSize() {
            return s();
          }, get swatchShape() {
            return o();
          }, get value() {
            return r();
          }, onChange: g });
        }, H = (I) => {
          sd(I, { get option() {
            return a();
          }, get value() {
            return r();
          }, get placeholderText() {
            return i();
          }, onChange: g });
        };
        F(U, (I) => {
          c() === "colorButtons" || c() === "imageButtons" || c() === "productImageButtons" ? I(G) : I(H, !1);
        }, !0), h(V, R);
      };
      F(C, (V) => {
        c() === "pillButtons" ? V(A) : V(O, !1);
      }, !0), h(m, z);
    };
    return F(f, (m) => {
      c() === "colorDropdown" || c() === "imageDropdown" || c() === "productImageDropdown" || c() === "mixedDropdown" ? m(b) : m(y, !1);
    }), h(n, p), it(v);
  }
  Je(cd, { option: {}, pillStyle: {}, value: {}, onChange: {} }, [], [], !0), Je(ud, { value: {}, option: {}, swatchSize: {}, swatchShape: {}, swatchType: {}, pillStyle: {}, placeholderText: {}, onChange: {} }, [], [], !0);
  const dd = "mediaImages", yl = (n = []) => {
    const t = Rr(gd(n));
    return Va(dd, t), { getMediaImageUrl: t, setMediaImages: (r) => {
      t.set(gd(r));
    } };
  }, Vn = () => {
    const n = Ta(dd);
    if (!n) throw new Error("getMediaImages must be called within a component tree that has setupMediaImages initialized");
    return n;
  }, gd = (n) => (t) => {
    if (!t) return;
    const r = n.find((a) => a.gid === t);
    return r == null ? void 0 : r.url;
  }, hd = "config", hi = (n) => {
    const t = Rr(n);
    return Va(hd, t), { config: t, setConfig: (r) => {
      t.set(r);
    } };
  }, yn = () => {
    const n = Ta(hd);
    if (!n) throw new Error("getConfig must be called within a component tree that has setupConfig initialized");
    return n;
  };
  var xp = $('<img alt="" class="kaching-bundles__bar-variant-image"/>'), yp = $('<div class="kaching-bundles__bar-variant-number"><span>#</span> <span> </span></div>'), wp = $('<span class="kaching-bundles__bar-variant-option__name-value"> </span>'), Pp = $('<span class="kaching-bundles__bar-variant-option__name"><span class="kaching-bundles__bar-variant-option__name-label"> </span> <!></span>'), Sp = $('<div class="kaching-bundles__bar-variant-option"><!> <!></div>'), Bp = $('<div class="kaching-bundles__invalid-variant-error"><!></div>'), Cp = $('<div><div><!> <div class="kaching-bundles__bar-variant-main"><div class="kaching-bundles__bar-variant-selects"></div> <!></div></div></div>');
  function Wn(n, t) {
    at(t, !0);
    const r = () => Ve(z, "$config", s), a = () => Ve(C, "$swatchSettings", s), [s, o] = kt(), c = (N, J = Jr) => {
      {
        let ae = d(() => {
          var ce;
          return (ce = e(O)[J().position - 1]) != null ? ce : null;
        });
        ud(N, { get option() {
          return J();
        }, get swatchSize() {
          return a().swatchSize;
        }, get swatchShape() {
          return a().swatchShape;
        }, get swatchType() {
          return J().swatchType;
        }, get pillStyle() {
          return a().pillStyle;
        }, get value() {
          return e(ae);
        }, get placeholderText() {
          return u();
        }, onChange: re });
      }
    };
    let l = k(t, "product", 7), i = k(t, "selectedVariantId", 7), u = k(t, "placeholderText", 7, void 0), g = k(t, "number", 7, void 0), v = k(t, "showImage", 7, !1), p = k(t, "forceDropdown", 7, !1), f = k(t, "onChange", 7), b = k(t, "onOptionChange", 7);
    const y = Tt(), m = Vn(), z = yn(), C = Vu();
    let A = d(() => l().variants.find((N) => N.id === i())), O = Oe(ut([])), V = [], R = null;
    tt(() => {
      if (e(A)) return R = i(), void ee(O, [...e(A).options], !0);
      if (i() && r().featureFlags.hide_missing_variants && l().variants.length > 0) {
        const N = Y(l().variants, 0, e(O));
        if (N) return ee(O, [...N.options], !0), void Xt(() => f()(N.id));
      }
      if (u() != null) {
        const N = l().options.map((ce) => ce.name), J = V.length === N.length && V.every((ce, me) => ce === N[me]), ae = R != null;
        return R = null, void (J && !ae || (V = N, ee(O, N.map(() => null), !0)));
      }
      ee(O, [], !0);
    });
    let U = d(() => e(O).length > 0 && e(O).every((N) => N != null)), G = d(() => u() != null ? e(U) && (!e(A) || !e(A).availableForSale) : !e(A) || !e(A).availableForSale), H = d(() => {
      return N = l(), J = e(O), ae = a().swatchOptions, ce = Ve(m, "$getMediaImageUrl", s), me = p(), N.options.map((be) => ({ name: be.name, position: be.position, swatchType: P(be, ae, me), optionValues: be.optionValues.map((Se) => {
        const L = q(be.position, Se.name, J, N);
        if (r().featureFlags.hide_missing_variants && L.length === 0) return null;
        const pe = !L.some((Z) => Z.availableForSale);
        return { name: Se.name, unavailable: pe, swatch: S(be, Se, ae, ce, J, N) };
      }).filter((Se) => Se !== null) }));
      var N, J, ae, ce, me;
    }), I = d(() => a().showSelectedSwatchName && !p());
    const T = ["colorButtons", "imageButtons", "productImageButtons", "pillButtons"];
    let ue = d(() => {
      var N;
      return v() ? ((N = e(A)) == null ? void 0 : N.image) || l().image : null;
    });
    function re({ position: N, value: J }) {
      const ae = e(O)[N - 1];
      if (e(O)[N - 1] = J, u() != null && e(O).some((me) => me == null)) return;
      let ce = l().variants.find((me) => e(O).every((be, Se) => me.options[Se] === be));
      if (!ce && r().featureFlags.hide_missing_variants) {
        const me = Y(q(N, J, e(O), l()), N, e(O));
        me && (ce = me, ee(O, [...ce.options], !0));
      }
      ce && (f()(ce.id), b() && b()(N, J, ae));
    }
    function P(N, J, ae) {
      var ce;
      const me = (ce = J.find((be) => be.name === N.defaultName)) == null ? void 0 : ce.swatchType;
      if (me && me !== "default") return ae ? (function(be) {
        switch (be) {
          case "colorButtons":
            return "colorDropdown";
          case "imageButtons":
            return "imageDropdown";
          case "productImageButtons":
            return "productImageDropdown";
          case "pillButtons":
            return "default";
          default:
            return be;
        }
      })(me) : me;
      if (!r().featureFlags.native_swatches_disabled) {
        for (const be of N.optionValues) if (be.swatch.image || be.swatch.color) return "mixedDropdown";
      }
      return "default";
    }
    function S(N, J, ae, ce, me, be) {
      var Se, L;
      const pe = r().featureFlags.native_swatches_disabled ? null : J.swatch, Z = ae.find((fe) => fe.name === N.defaultName);
      if (!Z || Z.swatchType === "default") return pe || { color: null, image: null };
      if (Z.swatchType === "pillButtons") return { color: null, image: null };
      if (Z.swatchType === "colorButtons" || Z.swatchType === "colorDropdown")
        return { color: B((Se = Z.colors.find((fe) => fe.name === J.defaultName)) == null ? void 0 : Se.color) || (pe == null ? void 0 : pe.color) || B(np(J.defaultName)) || null, image: null };
      if (Z.swatchType === "imageButtons" || Z.swatchType === "imageDropdown") {
        const fe = ce(((L = Z.images.find((xe) => xe.name === J.defaultName)) == null ? void 0 : L.mediaImageGID) || null);
        return { color: (pe == null ? void 0 : pe.color) || null, image: fe || (pe == null ? void 0 : pe.image) || null };
      }
      if (Z.swatchType === "productImageDropdown" || Z.swatchType === "productImageButtons") {
        const fe = N.position - 1, xe = be.variants.filter((Ae) => Ae.image && Ae.options[fe] === J.name);
        let $e = xe[0], Me = 0;
        for (const Ae of xe) {
          let Be = 0;
          for (let Fe = 0; Fe < fe; Fe++) Ae.options[Fe] === me[Fe] && Be++;
          Be > Me && (Me = Be, $e = Ae);
        }
        return { color: null, image: ($e == null ? void 0 : $e.image) || null };
      }
      return { color: null, image: null };
    }
    function B(N) {
      if (!N) return;
      const { red: J, green: ae, blue: ce } = N;
      return `#${J.toString(16).padStart(2, "0")}${ae.toString(16).padStart(2, "0")}${ce.toString(16).padStart(2, "0")}`;
    }
    function q(N, J, ae, ce) {
      const me = N - 1, be = ae.slice(0, me);
      return ce.variants.filter((Se) => Se.options[me] === J && be.every((L, pe) => L == null || Se.options[pe] === L));
    }
    function Y(N, J, ae) {
      if (N.length === 0) return null;
      let ce = N[0], me = -1;
      const be = ae.slice(J);
      for (const Se of N) {
        let L = 0;
        for (let pe = 0; pe < be.length; pe++) Se.options[J + pe] === be[pe] && (L += be.length - pe);
        L > me && (me = L, ce = Se);
      }
      return ce;
    }
    var Q = { get product() {
      return l();
    }, set product(N) {
      l(N), _();
    }, get selectedVariantId() {
      return i();
    }, set selectedVariantId(N) {
      i(N), _();
    }, get placeholderText() {
      return u();
    }, set placeholderText(N = void 0) {
      u(N), _();
    }, get number() {
      return g();
    }, set number(N = void 0) {
      g(N), _();
    }, get showImage() {
      return v();
    }, set showImage(N = !1) {
      v(N), _();
    }, get forceDropdown() {
      return p();
    }, set forceDropdown(N = !1) {
      p(N), _();
    }, get onChange() {
      return f();
    }, set onChange(N) {
      f(N), _();
    }, get onOptionChange() {
      return b();
    }, set onOptionChange(N) {
      b(N), _();
    } }, oe = Cp();
    let j;
    var D = w(oe);
    let se;
    var te = w(D), X = (N) => {
      var J = xp();
      ke(() => Ie(J, "src", e(ue))), h(N, J);
    }, ne = (N) => {
      var J = Te(), ae = _e(J), ce = (me) => {
        var be = yp(), Se = E(w(be), 2), L = w(Se, !0);
        x(Se), x(be), ke(() => pt(L, g())), h(me, be);
      };
      F(ae, (me) => {
        g() && me(ce);
      }, !0), h(N, J);
    };
    F(te, (N) => {
      e(ue) ? N(X) : N(ne, !1);
    });
    var he = E(te, 2), M = w(he);
    Gt(M, 21, () => e(H), (N) => N.name, (N, J) => {
      var ae = Te(), ce = _e(ae), me = (Se) => {
        var L = Sp(), pe = w(L), Z = (xe) => {
          var $e = Pp(), Me = w($e), Ae = w(Me);
          x(Me);
          var Be = E(Me, 2), Fe = (Le) => {
            var K = wp(), we = w(K, !0);
            x(K), ke(() => {
              var ie, ze;
              return pt(we, (ze = (ie = e(O)[e(J).position - 1]) != null ? ie : u()) != null ? ze : "");
            }), h(Le, K);
          };
          F(Be, (Le) => {
            T.includes(e(J).swatchType) && Le(Fe);
          }), x($e), ke(() => {
            var Le;
            return pt(Ae, `${(Le = e(J).name) != null ? Le : ""}:`);
          }), h(xe, $e);
        };
        F(pe, (xe) => {
          e(J).swatchType !== "pillButtons" && xe(Z);
        });
        var fe = E(pe, 2);
        c(fe, () => e(J)), x(L), h(Se, L);
      }, be = (Se) => {
        c(Se, () => e(J));
      };
      F(ce, (Se) => {
        e(I) ? Se(me) : Se(be, !1);
      }), h(N, ae);
    }), x(M);
    var W = E(M, 2), de = (N) => {
      var J = Bp();
      Ne(w(J), () => Ve(y, "$translate", s)("system.invalid_variant")), x(J), h(N, J);
    };
    F(W, (N) => {
      e(G) && N(de);
    }), x(he), x(D), x(oe), ke((N, J) => {
      j = Wt(oe, 1, "kaching-bundles__bar-variant", null, j, N), se = Wt(D, 1, "kaching-bundles__bar-variant__content", null, se, J);
    }, [() => ({ "kaching-bundles__bar-variant--invalid": e(G) }), () => ({ "kaching-bundles__bar-variant__content--with-option-names": e(I) })]), h(n, oe);
    var ge = it(Q);
    return o(), ge;
  }
  Je(Wn, { product: {}, selectedVariantId: {}, placeholderText: {}, number: {}, showImage: {}, forceDropdown: {}, onChange: {}, onOptionChange: {} }, [], [], !0);
  var Ip = $('<a target="_blank"><!></a>'), Mp = $("<div><!></div>");
  function rr(n, t) {
    at(t, !0);
    const r = k(t, "url", 7), a = k(t, "children", 7), s = k(t, "class", 7);
    var o = { get url() {
      return r();
    }, set url(g) {
      r(g), _();
    }, get children() {
      return a();
    }, set children(g) {
      a(g), _();
    }, get class() {
      return s();
    }, set class(g) {
      s(g), _();
    } }, c = Te(), l = _e(c), i = (g) => {
      var v = Ip();
      rs(w(v), a), x(v), ke(() => {
        Ie(v, "href", r()), Wt(v, 1, fl(s()));
      }), h(g, v);
    }, u = (g) => {
      var v = Mp();
      rs(w(v), a), x(v), ke(() => Wt(v, 1, fl(s()))), h(g, v);
    };
    return F(l, (g) => {
      r() ? g(i) : g(u, !1);
    }), h(n, c), it(o);
  }
  Je(rr, { url: {}, children: {}, class: {} }, [], [], !0);
  const pd = "priceFormatter", Fi = (n = "{{amount}}", t) => {
    const r = Rr(bd(n, t));
    return Va(pd, r), { formatPrice: r, setMoneyFormat: (a, s) => {
      r.set(bd(a, s));
    } };
  }, vn = () => {
    const n = Ta(pd);
    if (!n) throw new Error("getPriceFormatter must be called within a component tree that has setupPriceFormatter initialized");
    return n;
  }, bd = (n, t) => (r, a) => zp(r, n, (!(a != null && a.preserveDecimals) || Math.round(r) % 100 == 0) && t), zp = (n, t, r) => {
    const a = ((i, u) => u ? i.includes("amount_no_decimals") ? i : i.replace(/\{\{.+\}\}/g, "{{ amount_no_decimals }}") : i)(t, r), s = { amount: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimal: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_no_decimals: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_with_comma_separator: (i) => i.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimals_with_comma_separator: (i) => i.toLocaleString("de-DE", { maximumFractionDigits: 0 }), amount_with_apostrophe_separator: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, "'"), amount_no_decimals_with_space_separator: (i) => i.toLocaleString("fr-FR", { maximumFractionDigits: 0 }).replace(/\s/g, " "), amount_with_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " "), amount_with_period_and_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " ").replace(",", ".") }, o = /{{\s*(\w+)\s*}}/, c = a.match(o), l = (s[c ? c[1] : "amount"] || s.amount)(n / 100);
    return a.replace(o, l);
  }, fd = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.08398%205H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", vd = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.00065%202.08337V7.91671M2.08398%205.00004H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", $p = { new_price: ({ totalDiscountedPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), new_total: ({ totalDiscountedPrice: n }) => ({ value: n, type: "price" }), original_price: ({ totalFullPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), original_total: ({ totalFullPrice: n }) => ({ value: n, type: "price" }), saved_total: ({ totalCompareAtPrice: n, totalDiscountedPrice: t }) => ({ value: n - t, type: "price" }), saved_amount: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, quantity: r }) => ({ value: (n - t) / r, type: "price" }), quantity: ({ quantity: n }) => ({ value: n, type: "number" }), gifts_count: ({ freeGiftsCount: n }) => {
    if (n !== void 0) return { value: n, type: "number" };
  }, buy_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== gt.Bxgy) return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: t - Math.floor(t / r) * n.getQuantity, type: "number" };
  }, get_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== gt.Bxgy) return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: Math.floor(t / r) * n.getQuantity, type: "number" };
  }, saved_percentage: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, dealBar: r, legacySavedPercentage: a }) => {
    if (a && r && (r.dealBarType === gt.QuantityBreak || !r.dealBarType) && r.discountType === "percentage") return { value: Math.round(Number(r.discountValue)), type: "percentage" };
    if (n <= 0) return { value: 0, type: "percentage" };
    let s = (n - t) / n * 100;
    return s = Math.round(100 * s) / 100, { value: Math.round(s), type: "percentage" };
  }, new_unit_price: ({ totalDiscountedPrice: n, unitQuantity: t }) => {
    if (t) return { value: n / t, type: "price", preserveDecimals: !0 };
  }, saved_per_unit: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, unitQuantity: r }) => {
    if (r) return { value: (n - t) / r, type: "price", preserveDecimals: !0 };
  }, original_unit_price: ({ totalFullPrice: n, unitQuantity: t }) => {
    if (t) return { value: n / t, type: "price", preserveDecimals: !0 };
  }, unit_quantity: ({ unitQuantity: n }) => {
    if (n) return { value: n, type: "number" };
  }, selling_plan_discount: ({ sellingPlan: n, totalFullPrice: t, quantity: r }) => {
    const a = n == null ? void 0 : n.priceAdjustment;
    if (a) switch (a.type) {
      case "percentage":
        return a.value <= 0 ? void 0 : { value: a.value, type: "percentage" };
      case "fixed_amount":
        return a.value <= 0 ? void 0 : { value: a.value, type: "price" };
      case "price": {
        const s = t / r - a.value;
        return s <= 0 ? void 0 : { value: s, type: "price" };
      }
    }
  } }, Dp = (n) => {
    if (!n) return;
    const t = n.options.join(" / ");
    return t && t !== "Default Title" ? t : void 0;
  }, Tp = ({ variable: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, sellingPlan: o }) => {
    var c, l;
    const i = n.match(/^product_(\d+)$/);
    if (i) {
      const u = Number(i[1]);
      return (c = r == null ? void 0 : r.get(u)) == null ? void 0 : c.title;
    }
    switch (n) {
      case "product":
        return (l = t == null ? void 0 : t.title) != null ? l : a && a.length > 0 ? a.join(", ") : void 0;
      case "variant_title":
        return ((u) => {
          if (!u) return;
          const g = [];
          for (const { variant: v, quantity: p } of u) {
            const f = Dp(v);
            if (!f) continue;
            const b = g.find((y) => y.title === f);
            b ? b.count += p : g.push({ title: f, count: p });
          }
          return g.length !== 0 ? g.length === 1 && g[0].count === 1 ? g[0].title : g.map(({ title: v, count: p }) => `${p}× ${v}`).join(", ") : void 0;
        })(s);
      case "metafield":
        return (t == null ? void 0 : t.metafields.text) || void 0;
      case "metafield2":
        return (t == null ? void 0 : t.metafields.text2) || void 0;
      case "metafield3":
        return (t == null ? void 0 : t.metafields.text3) || void 0;
      case "metafield4":
        return (t == null ? void 0 : t.metafields.text4) || void 0;
      case "selling_plan":
        return (o == null ? void 0 : o.name) || void 0;
    }
  }, _d = /{{\s*([a-zA-Z0-9_.]+)\s*(?:([+\-*/])\s*(\d+(?:\.\d+)?)?)?\s*}}/g, kd = /\{\{[^}]*\}\}/g, Vp = (n) => n.replace(kd, ""), Ap = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: g, unitQuantity: v, sellingPlan: p, freeGiftsCount: f }) => (b, y, m) => {
    const z = $p[b];
    if (z) {
      const C = z({ totalFullPrice: o, totalCompareAtPrice: c != null ? c : o, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: g, unitQuantity: v, sellingPlan: p, freeGiftsCount: f });
      if (!C) return;
      let A = C.value;
      if (y !== void 0 && m !== void 0) {
        const V = ((R, U, G) => {
          switch (U) {
            case "+":
              return R + G;
            case "-":
              return R - G;
            case "*":
              return R * G;
            case "/":
              return G === 0 ? void 0 : R / G;
          }
        })(A, y, C.type !== "price" || y !== "+" && y !== "-" ? m : 100 * m);
        if (V === void 0) return;
        A = V;
      }
      const O = y === "/" || C.preserveDecimals === !0;
      return ((V, R, U, G) => {
        switch (R) {
          case "price":
            return U(V, { preserveDecimals: G });
          case "number":
            return String(Math.round(100 * V) / 100);
          case "percentage":
            return `${Math.round(V)}%`;
        }
      })(A, C.type, n, O);
    }
    if (y === void 0) return Tp({ variable: b, product: t, products: r, selectedProductTitles: a, selectedVariants: s, sellingPlan: p });
  }, _n = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: g = !1, unitQuantity: v, sellingPlan: p, freeGiftsCount: f }) => (b) => {
    if (!b) return b;
    const y = Ap({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: s, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: l, quantity: i, dealBar: u, legacySavedPercentage: g, unitQuantity: v, sellingPlan: p, freeGiftsCount: f });
    return b.replace(_d, (m, z, C, A) => {
      var O;
      if (C && A) {
        const V = parseFloat(A);
        return (O = y(z, C, V)) != null ? O : "";
      }
      return y(z) || "";
    }).replace(kd, "");
  };
  function So(n) {
    const { unitPriceMeasurement: t } = n;
    return t ? t.referenceValue == 1 ? t.referenceUnit : `${t.referenceValue}${t.referenceUnit}` : null;
  }
  function Ir(n) {
    return n.reduce((t, { variant: r, quantity: a }) => {
      const { unitPriceMeasurement: s } = r;
      if (!s) return t;
      const o = (function(c, l, i) {
        if (l === i) return c;
        if (l === "g" && i === "kg" || l === "ml" && i === "l") return c / 1e3;
      })(s.quantityValue, s.quantityUnit, s.referenceUnit);
      return o ? t + o / s.referenceValue * a : t;
    }, 0) || null;
  }
  var qp = $('<img class="kaching-bundles__choose-multiple-gifts__product-image" alt=""/>'), Gp = $('<span class="kaching-bundles__choose-multiple-gifts__product-title"> </span>'), Fp = $('<span class="kaching-bundles__choose-multiple-gifts__subtitle"><!></span>'), Op = $('<div class="kaching-bundles__choose-multiple-gifts__product-compare-at-price"><!></div>'), Lp = $('<span class="kaching-bundles__choose-multiple-gifts__variant-counter"></span>'), Ep = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selector-row"><div class="kaching-bundles__choose-multiple-gifts__variant-selector-content"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-with-counter"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-wrapper"><!></div></div></div></div>'), jp = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selectors"></div>'), Rp = $('<img alt="Decrease"/>'), Np = $('<img alt="Increase"/>'), Qp = $('<div class="kaching-bundles__choose-multiple-gifts__gift-quantity"><!> <span class="kaching-bundles__choose-multiple-gifts__gift-quantity-value"> </span> <!></div>'), Wp = $("<img/>"), Up = $("<!> <!>", 1), Hp = $('<div class="kaching-bundles__choose-multiple-gifts__product"><div class="kaching-bundles__choose-multiple-gifts__product-container"><!> <div class="kaching-bundles__choose-multiple-gifts__product-content"><!> <!> <div class="kaching-bundles__choose-multiple-gifts__product-price-container"><div class="kaching-bundles__choose-multiple-gifts__product-price"><!></div> <!></div> <!></div></div> <div class="kaching-bundles__choose-multiple-gifts__product-actions"><!> <!></div></div>');
  function md(n, t) {
    at(t, !0);
    const r = () => Ve(m, "$formatPrice", s), a = () => Ve(y, "$translate", s), [s, o] = kt(), c = k(t, "product", 7), l = k(t, "dealBlock", 7), i = k(t, "multipleGiftsSelector", 7), u = k(t, "selectedVariantIds", 7), g = k(t, "availableQuantity", 7), v = k(t, "onSelect", 7), p = k(t, "onRemove", 7), f = k(t, "onVariantChange", 7), b = k(t, "onQuantityChange", 7), y = Tt(), m = vn();
    let z = Oe(!1);
    const C = d(() => u().length > 0), A = d(() => u().length || 1), O = d(() => !e(C) && g() === 0), V = d(() => c().variants.find((be) => be.id === u()[0]) || c().variants[0]), R = d(() => e(z) && e(V).image || c().image), U = d(() => u().map((be) => c().variants.find((Se) => Se.id === be) || c().variants[0])), G = d(() => e(U).length > 0 ? e(U).reduce((be, Se) => be + P(l(), Se), 0) : P(l(), e(V))), H = d(() => c().url ? `${c().url}?variant=${u()[0] || c().variants[0].id}` : void 0), I = d(() => l().chooseMultipleGiftsModal), T = d(() => _n({ priceFormatter: r(), product: c(), totalFullPrice: e(G), totalDiscountedPrice: 0, quantity: e(A), unitQuantity: Ir(e(U).map((be) => ({ variant: be, quantity: 1 }))) })), ue = d(() => {
      var be;
      return e(T)(a()(((be = e(I)) == null ? void 0 : be.subtitle) || ""));
    }), re = d(() => {
      var be, Se;
      return e(C) ? (be = e(I)) == null ? void 0 : be.buttonTextAfterSelection : (Se = e(I)) == null ? void 0 : Se.buttonTextBeforeSelection;
    });
    function P(be, Se) {
      return be.useProductCompareAtPrice && Se.compareAtPrice ? Math.max(Se.price, Se.compareAtPrice) : Se.price;
    }
    function S() {
      e(A) <= 1 || b()(e(A) - 1);
    }
    function B() {
      e(A) >= g() || b()(e(A) + 1);
    }
    var q = { get product() {
      return c();
    }, set product(be) {
      c(be), _();
    }, get dealBlock() {
      return l();
    }, set dealBlock(be) {
      l(be), _();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(be) {
      i(be), _();
    }, get selectedVariantIds() {
      return u();
    }, set selectedVariantIds(be) {
      u(be), _();
    }, get availableQuantity() {
      return g();
    }, set availableQuantity(be) {
      g(be), _();
    }, get onSelect() {
      return v();
    }, set onSelect(be) {
      v(be), _();
    }, get onRemove() {
      return p();
    }, set onRemove(be) {
      p(be), _();
    }, get onVariantChange() {
      return f();
    }, set onVariantChange(be) {
      f(be), _();
    }, get onQuantityChange() {
      return b();
    }, set onQuantityChange(be) {
      b(be), _();
    } }, Y = Hp(), Q = w(Y), oe = w(Q), j = (be) => {
      rr(be, { get url() {
        return e(H);
      }, class: "kaching-bundles__choose-multiple-gifts__product-image-link", children: (Se, L) => {
        var pe = qp();
        Ie(pe, "width", 100), Ie(pe, "height", 100), ke(() => Ie(pe, "src", e(R))), h(Se, pe);
      }, $$slots: { default: !0 } });
    };
    F(oe, (be) => {
      e(R) && be(j);
    });
    var D = E(oe, 2), se = w(D);
    rr(se, { get url() {
      return e(H);
    }, class: "kaching-bundles__choose-multiple-gifts__product-link", children: (be, Se) => {
      var L = Gp(), pe = w(L, !0);
      x(L), ke(() => pt(pe, c().title)), h(be, L);
    }, $$slots: { default: !0 } });
    var te = E(se, 2), X = (be) => {
      var Se = Fp();
      Ne(w(Se), () => e(ue)), x(Se), h(be, Se);
    };
    F(te, (be) => {
      e(ue) && be(X);
    });
    var ne = E(te, 2), he = w(ne);
    Ne(w(he), () => a()("system.free")), x(he);
    var M = E(he, 2), W = (be) => {
      var Se = Te();
      lt(_e(Se), () => e(G), (L) => {
        var pe = Op();
        Ne(w(pe), () => r()(e(G))), x(pe), h(L, pe);
      }), h(be, Se);
    };
    F(M, (be) => {
      i().showPrice && e(G) > 0 && be(W);
    }), x(ne);
    var de = E(ne, 2), ge = (be) => {
      var Se = jp();
      Gt(Se, 21, u, jr, (L, pe, Z) => {
        var fe = Ep(), xe = w(fe), $e = w(xe), Me = (K) => {
          ma(K, { get product() {
            return c();
          }, class: "kaching-bundles__choose-multiple-gifts__product-option-names" });
        };
        F($e, (K) => {
          Z === 0 && K(Me);
        });
        var Ae = E($e, 2), Be = w(Ae), Fe = (K) => {
          var we = Lp();
          we.textContent = `#${Z + 1}`, h(K, we);
        };
        F(Be, (K) => {
          u().length > 1 && K(Fe);
        });
        var Le = E(Be, 2);
        Wn(w(Le), { get product() {
          return c();
        }, get selectedVariantId() {
          return e(pe);
        }, onChange: (K) => {
          ee(z, !0), f()(Z, K);
        } }), x(Le), x(Ae), x(xe), x(fe), h(L, fe);
      }), x(Se), h(be, Se);
    };
    F(de, (be) => {
      c().variants.length > 1 && be(ge);
    }), x(D), x(Q);
    var N = E(Q, 2), J = w(N), ae = (be) => {
      var Se = Qp(), L = w(Se);
      {
        let xe = d(() => e(A) <= 1);
        Yt(L, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: S, get disabled() {
          return e(xe);
        }, children: ($e, Me) => {
          var Ae = Rp();
          ke(() => Ie(Ae, "src", fd)), h($e, Ae);
        }, $$slots: { default: !0 } });
      }
      var pe = E(L, 2), Z = w(pe, !0);
      x(pe);
      var fe = E(pe, 2);
      {
        let xe = d(() => e(A) >= g());
        Yt(fe, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: B, get disabled() {
          return e(xe);
        }, children: ($e, Me) => {
          var Ae = Np();
          ke(() => Ie(Ae, "src", vd)), h($e, Ae);
        }, $$slots: { default: !0 } });
      }
      x(Se), ke(() => pt(Z, e(A))), h(be, Se);
    };
    F(J, (be) => {
      e(C) && i().maxQuantity > 1 && be(ae);
    });
    var ce = E(J, 2);
    {
      let be = d(() => ["kaching-bundles__choose-multiple-gifts__product-button", e(O) && "kaching-bundles__choose-multiple-gifts__product-button--disabled", e(C) && "kaching-bundles__choose-multiple-gifts__product-button--selected"]);
      Yt(ce, { element: "span", get class() {
        return e(be);
      }, onclick: function() {
        e(C) ? (ee(z, !1), p()()) : v()();
      }, get disabled() {
        return e(O);
      }, children: (Se, L) => {
        var pe = Up(), Z = _e(pe), fe = (Ae) => {
          var Be = Wp();
          ke((Fe) => {
            Ie(Be, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3333%205.00008V4.33341C13.3333%203.39999%2013.3333%202.93328%2013.1517%202.57676C12.9919%202.26316%2012.7369%202.00819%2012.4233%201.8484C12.0668%201.66675%2011.6001%201.66675%2010.6667%201.66675H9.33333C8.39991%201.66675%207.9332%201.66675%207.57668%201.8484C7.26308%202.00819%207.00811%202.26316%206.84832%202.57676C6.66667%202.93328%206.66667%203.39999%206.66667%204.33341V5.00008M2.5%205.00008H17.5M15.8333%205.00008V14.3334C15.8333%2015.7335%2015.8333%2016.4336%2015.5608%2016.9684C15.3212%2017.4388%2014.9387%2017.8212%2014.4683%2018.0609C13.9335%2018.3334%2013.2335%2018.3334%2011.8333%2018.3334H8.16667C6.76654%2018.3334%206.06647%2018.3334%205.53169%2018.0609C5.06129%2017.8212%204.67883%2017.4388%204.43915%2016.9684C4.16667%2016.4336%204.16667%2015.7335%204.16667%2014.3334V5.00008'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Ie(Be, "alt", Fe);
          }, [() => a()("system.remove")]), h(Ae, Be);
        };
        F(Z, (Ae) => {
          e(C) && Ae(fe);
        });
        var xe = E(Z, 2), $e = (Ae) => {
          var Be = Rn();
          ke((Fe) => pt(Be, Fe), [() => a()(e(re))]), h(Ae, Be);
        }, Me = (Ae) => {
          h(Ae, Rn("Choose"));
        };
        F(xe, (Ae) => {
          e(re) ? Ae($e) : Ae(Me, !1);
        }), h(Se, pe);
      }, $$slots: { default: !0 } });
    }
    x(N), x(Y), h(n, Y);
    var me = it(q);
    return o(), me;
  }
  Je(md, { product: {}, dealBlock: {}, multipleGiftsSelector: {}, selectedVariantIds: {}, availableQuantity: {}, onSelect: {}, onRemove: {}, onVariantChange: {}, onQuantityChange: {} }, [], [], !0);
  const Zp = { red: 0, green: 0, blue: 0, alpha: 0.5 };
  function Jp(n, t) {
    var r;
    (r = t()) == null || r();
  }
  function Yp(n, t, r, a, s) {
    var o;
    const c = t();
    r()(a().id, c), (o = s()) == null || o();
  }
  var Kp = $('<img alt="Close"/>'), Xp = $('<div class="kaching-bundles__choose-multiple-gifts"><div class="kaching-bundles__choose-multiple-gifts__header"><h2 class="kaching-bundles__choose-multiple-gifts__heading"><!></h2> <!></div> <div class="kaching-bundles__choose-multiple-gifts__products"></div> <div class="kaching-bundles__choose-multiple-gifts__footer"><span class="kaching-bundles__choose-multiple-gifts__footer-text"> </span> <div class="kaching-bundles__choose-multiple-gifts__footer-buttons"><button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--cancel"> </button> <button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--confirm"> </button></div></div></div>');
  function Bo(n, t) {
    at(t, !0);
    const r = () => Ve(v, "$translate", a), [a, s] = kt(), o = k(t, "dealBlock", 7), c = k(t, "multipleGiftsSelector", 7), l = k(t, "products", 23, () => []), i = k(t, "initialSelectedGifts", 23, () => []), u = k(t, "onConfirm", 7, () => {
    }), g = k(t, "onClose", 7), v = Tt();
    let p = Oe(ut((function(D) {
      const se = {};
      for (const te of D) {
        const X = te.product.id;
        se[X] || (se[X] = []), se[X].push(te.variant.id);
      }
      return se;
    })(i())));
    const f = d(() => o().chooseMultipleGiftsModal), b = d(() => ((D) => D ? fn({ "kaching-choose-multiple-gifts-button-size": D.buttonSize + "px", "kaching-choose-multiple-gifts-text-size": D.textSize + "px", "kaching-choose-multiple-gifts-price-color": We(D.priceColor), "kaching-choose-multiple-gifts-compare-at-price-color": We(D.compareAtPriceColor), "kaching-choose-multiple-gifts-text-color": We(D.textColor), "kaching-choose-multiple-gifts-button-color": We(D.buttonColor), "kaching-choose-multiple-gifts-button-text-color": We(D.buttonTextColor), "kaching-choose-multiple-gifts-photo-size": D.productPhotoSize + "px" }) : "")(e(f) || null)), y = d(() => c().maxQuantity), m = d(() => Object.values(e(p)).reduce((D, se) => D + se.length, 0));
    function z(D) {
      return e(p)[D] || [];
    }
    function C(D) {
      const se = D.variants.find((te) => te.availableForSale);
      return (se == null ? void 0 : se.id) || D.variants[0].id;
    }
    const A = d(() => {
      var D;
      return ((D = e(f)) == null ? void 0 : D.footerText) || "FREE gifts selected";
    });
    var O = { get dealBlock() {
      return o();
    }, set dealBlock(D) {
      o(D), _();
    }, get multipleGiftsSelector() {
      return c();
    }, set multipleGiftsSelector(D) {
      c(D), _();
    }, get products() {
      return l();
    }, set products(D = []) {
      l(D), _();
    }, get initialSelectedGifts() {
      return i();
    }, set initialSelectedGifts(D = []) {
      i(D), _();
    }, get onConfirm() {
      return u();
    }, set onConfirm(D = () => {
    }) {
      u(D), _();
    }, get onClose() {
      return g();
    }, set onClose(D) {
      g(D), _();
    } }, V = Xp(), R = w(V), U = w(R), G = w(U), H = (D) => {
      var se = Rn();
      ke((te) => pt(se, te), [() => r()(e(f).heading)]), h(D, se);
    };
    F(G, (D) => {
      var se;
      (se = e(f)) != null && se.heading && D(H);
    }), x(U);
    var I = E(U, 2), T = (D) => {
      Yt(D, { element: "span", class: "kaching-bundles__choose-multiple-gifts__close", get onclick() {
        return g();
      }, children: (se, te) => {
        var X = Kp();
        ke(() => Ie(X, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), h(se, X);
      }, $$slots: { default: !0 } });
    };
    F(I, (D) => {
      g() && D(T);
    }), x(R);
    var ue = E(R, 2);
    Gt(ue, 21, l, (D) => D.id, (D, se) => {
      {
        let te = d(() => z(e(se).id)), X = d(() => (function(ne) {
          const he = z(ne).length;
          return e(y) - e(m) + he;
        })(e(se).id));
        md(D, { get dealBlock() {
          return o();
        }, get multipleGiftsSelector() {
          return c();
        }, get product() {
          return e(se);
        }, get selectedVariantIds() {
          return e(te);
        }, get availableQuantity() {
          return e(X);
        }, onSelect: () => (function(ne) {
          if (e(m) >= e(y)) return;
          const he = C(ne), M = l().length === 1 ? e(y) : 1;
          ee(p, { ...e(p), [ne.id]: Array(M).fill(he) }, !0);
        })(e(se)), onRemove: () => (function(ne) {
          const { [ne]: he, ...M } = e(p);
          ee(p, M, !0);
        })(e(se).id), onVariantChange: (ne, he) => (function(M, W, de) {
          const ge = z(M);
          if (W >= ge.length) return;
          const N = [...ge];
          N[W] = de, ee(p, { ...e(p), [M]: N }, !0);
        })(e(se).id, ne, he), onQuantityChange: (ne) => (function(he, M) {
          const W = z(he.id), de = W.length;
          if (M === de) return;
          let ge;
          if (M > de) {
            const N = C(he), J = M - de;
            ge = [...W, ...Array(J).fill(N)];
          } else ge = W.slice(0, M);
          ee(p, { ...e(p), [he.id]: ge }, !0);
        })(e(se), ne) });
      }
    }), x(ue);
    var re = E(ue, 2), P = w(re), S = w(P);
    x(P);
    var B = E(P, 2), q = w(B);
    q.__click = [Jp, g];
    var Y = w(q, !0);
    x(q);
    var Q = E(q, 2);
    Q.__click = [Yp, function() {
      const D = [];
      for (const se of l()) {
        const te = z(se.id);
        for (const X of te) {
          const ne = se.variants.find((M) => M.id === X);
          if (!ne) continue;
          const he = o().useProductCompareAtPrice && ne.compareAtPrice ? Math.max(ne.price, ne.compareAtPrice) : ne.price;
          D.push({ id: `${X}`, variant: ne, product: se, quantity: 1, fullPrice: he });
        }
      }
      return D;
    }, u, c, g];
    var oe = w(Q, !0);
    x(Q), x(B), x(re), x(V), ke((D, se, te) => {
      var X, ne;
      Ft(V, e(b)), pt(S, `${(X = e(m)) != null ? X : ""}/${(ne = e(y)) != null ? ne : ""}
      ${D != null ? D : ""}`), pt(Y, se), pt(oe, te);
    }, [() => r()(e(A)), () => r()("system.cancel"), () => r()("system.confirm")]), h(n, V);
    var j = it(O);
    return s(), j;
  }
  Fn(["click"]), Je(Bo, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var eb = $('<div class="kaching-bundles"><!></div>');
  function xd(n, t) {
    var r;
    at(t, !0);
    const a = k(t, "config", 7), s = k(t, "dealBlock", 7), o = k(t, "products", 23, () => []), c = k(t, "mediaImages", 7), l = k(t, "translations", 7), i = k(t, "multipleGiftsSelector", 7), u = d(() => _r(s(), a().brandColors)), g = d(() => _r(i(), a().brandColors)), { setConfig: v } = hi(a()), { setMoneyFormat: p } = Fi(a().moneyFormat), { setTranslations: f } = gi(l()), { setMediaImages: b } = yl(c()), { setSwatchSettings: y } = kl({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (r = e(u).showSelectedSwatchName) != null && r, pillStyle: la(e(u)) });
    tt(() => {
      v(a());
    }), tt(() => {
      p(a().moneyFormat, !!e(u).showPricesWithoutDecimals);
    }), tt(() => {
      f(l());
    }), tt(() => {
      b(c());
    }), tt(() => {
      var O;
      y({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (O = e(u).showSelectedSwatchName) != null && O, pillStyle: la(e(u)) });
    });
    var m = { get config() {
      return a();
    }, set config(O) {
      a(O), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(O) {
      s(O), _();
    }, get products() {
      return o();
    }, set products(O = []) {
      o(O), _();
    }, get mediaImages() {
      return c();
    }, set mediaImages(O) {
      c(O), _();
    }, get translations() {
      return l();
    }, set translations(O) {
      l(O), _();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(O) {
      i(O), _();
    } }, z = Te(), C = _e(z), A = (O) => {
      var V = eb();
      Bo(w(V), { get dealBlock() {
        return e(u);
      }, get products() {
        return o();
      }, get multipleGiftsSelector() {
        return e(g);
      } }), x(V), h(O, V);
    };
    return F(C, (O) => {
      e(g) && O(A);
    }), h(n, z), it(m);
  }
  function wl(n, t) {
    var r;
    if (!t) return n.price;
    const a = n.sellingPlans.find((s) => s.id === t.id);
    return (r = a == null ? void 0 : a.price) != null ? r : n.price;
  }
  function Co(n, t) {
    const r = t.priceAdjustment;
    if (!r) return n;
    switch (r.type) {
      case "percentage":
        return n * (1 - r.value / 100);
      case "fixed_amount":
        return n - r.value;
      case "price":
        return r.value;
    }
  }
  function Pl(n, t) {
    return n.sellingPlans.filter((r) => t.some((a) => a.sellingPlans.some((s) => s.id === r.id)));
  }
  function Io(n, t, r) {
    let a;
    if (n.sellingPlanGid) {
      const s = Ut(n.sellingPlanGid);
      a = t.find((o) => o.id === s);
    } else a = r || t[0];
    return a && t.some((s) => s.id === a.id) ? a : t[0];
  }
  function Mo(n, t, r, a) {
    return n || (t ? r.some((s) => s.id === t.id) ? t : r[0] : a && r.length > 0 ? r[0] : void 0);
  }
  customElements.define("kaching-bundles-choose-multiple-gifts", Je(xd, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, multipleGiftsSelector: { attribute: "multiple-gifts-selector", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), mn(this, "component"), this.component = this;
    }
  }));
  const ar = (n, t, r) => tb(n, t, r) || nb(n, t), tb = (n, t, r) => {
    if (!r || t.sellingPlans.length === 0) return;
    const a = new Set(t.sellingPlans.map((o) => o.id));
    return a.has(r.id) ? n.sellingPlans.find((o) => o.id === r.id) : n.sellingPlans.find((o) => a.has(o.id) && o.name === r.name) || n.sellingPlans.find((o) => o.id === t.sellingPlans[0].id);
  }, nb = (n, t) => {
    if (!n.requiresSellingPlan || t.sellingPlans.length === 0) return;
    const r = t.sellingPlans[0].id;
    return n.sellingPlans.find((a) => a.id === r);
  };
  function xa({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: s, priceRounding: o, sellingPlan: c, percentageCentsRoundingWorkaround: l }) {
    const i = (function({ discountType: v, discountValue: p, discountQuantity: f, variantQuantities: b, currencyRate: y, sellingPlan: m, percentageCentsRoundingWorkaround: z }) {
      const C = b.map(({ variant: V, quantity: R }) => wl(V, m) * R), A = C.reduce((V, R) => V + R, 0), O = b.map(({ quantity: V }) => V).reduce((V, R) => V + R, 0);
      if (v === "specific") {
        let V = 100 * Number(p) * y;
        if (O > Number(f)) {
          const G = V / Number(f);
          V = Math.ceil(G * O);
        }
        const R = V / O;
        let U = 0;
        for (const { variant: G, quantity: H } of b) {
          if (m && G.sellingPlans.some((I) => I.id === m.id) && m.priceAdjustment) {
            U += Co(R, m) * H;
            continue;
          }
          U += R * H;
        }
        return Math.max(0, Math.min(U, A));
      }
      if (v === "percentage") {
        if (z) {
          const R = A * (100 - Number(p)) / 100;
          return Math.max(0, Math.min(Math.ceil(R), A));
        }
        let V = 0;
        for (const { variant: R, quantity: U } of b) {
          const G = wl(R, m);
          V += Math.ceil(G * (100 - Number(p)) / 100) * U;
        }
        return Math.max(0, Math.min(V, A));
      }
      if (v === "amount") {
        const V = Math.round(100 * Number(p)) * y, R = V * O;
        return typeof document != "undefined" && A > 0 && R > A && document.dispatchEvent(new CustomEvent("kaching-bundles-amount-discount-exceeds-price", { detail: { totalDiscount: R, fullOrderPrice: A } })), Math.max(0, Math.min(A - V * O, A));
      }
      return A;
    })({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: s, sellingPlan: c, percentageCentsRoundingWorkaround: l }), u = a.map(({ variant: v, quantity: p }) => o != null && o.v2 ? wl(v, c) * p : v.price * p).reduce((v, p) => v + p, 0), g = a.map(({ quantity: v }) => v).reduce((v, p) => v + p, 0);
    if (o && (n !== "default" || o.v2)) {
      if (o.perItem) {
        const v = Oi(i / g, o.precision) * g;
        return o.v2 && Math.round(v) > Math.round(u) && i / g > 100 ? Oi(i / g - 100, o.precision) * g : v <= u ? v : i;
      }
      {
        const v = Oi(i, o.precision);
        return o.v2 && Math.round(v) > Math.round(u) && i > 100 ? Oi(i - 100, o.precision) : v <= u ? v : i;
      }
    }
    return i;
  }
  function yd(n, t, r, a, s, o) {
    return xa({ discountType: n.discountType, discountValue: n.discountValue, discountQuantity: n.quantity, variantQuantities: t, currencyRate: r, priceRounding: a, sellingPlan: s, percentageCentsRoundingWorkaround: o });
  }
  function wd(n, t, r, a, s) {
    var o, c, l, i;
    const u = [...t].sort((m, z) => m.variant.price - z.variant.price), g = u.reduce((m, z) => m + z.quantity, 0) >= n.buyQuantity + n.getQuantity ? n.getQuantity : 0, v = [], p = [];
    let f = g;
    for (const { variant: m, quantity: z } of u) {
      const C = Math.min(z, f), A = z - C;
      f -= C, C > 0 && v.push({ variant: m, quantity: C }), A > 0 && p.push({ variant: m, quantity: A });
    }
    const b = v.length > 0 ? xa({ discountType: (o = n.getDiscountType) != null ? o : "percentage", discountValue: (c = n.getDiscountValue) != null ? c : 100, discountQuantity: g, variantQuantities: v, currencyRate: r, priceRounding: a, sellingPlan: s }) : 0, y = p.reduce((m, z) => m + z.quantity, 0);
    return b + xa({ discountType: (l = n.buyDiscountType) != null ? l : "default", discountValue: (i = n.buyDiscountValue) != null ? i : 0, discountQuantity: y, variantQuantities: p, currencyRate: r, priceRounding: a, sellingPlan: s });
  }
  function zo(n, t, r, a, s) {
    return n.bundleProducts.filter(({ productGID: o }) => o).map((o) => {
      const c = t[o.id];
      if (!c) return 0;
      const l = ar(c.product, c.variant, s);
      return xa({ discountType: o.discountType, discountValue: o.discountValue, discountQuantity: o.quantity, variantQuantities: [c], currencyRate: r, priceRounding: a, sellingPlan: l });
    }).reduce((o, c) => o + c, 0);
  }
  function ms(n, t, r, a, s) {
    const o = n.bundleProducts.filter(({ productGID: i }) => i).reduce((i, u) => {
      const g = t[u.id];
      if (!g) return i;
      const v = ar(g.product, g.variant, s);
      return i + (v ? Co(g.variant.price, v) : g.variant.price);
    }, 0), c = Number(n.discountValue) || 0;
    let l;
    switch (n.discountType) {
      case "percentage":
        l = o * (1 - Math.min(Math.max(c, 0), 100) / 100);
        break;
      case "amount":
        l = o - Math.round(100 * c) * r;
        break;
      case "specific":
        l = Math.round(100 * c) * r;
        break;
      default:
        l = o;
    }
    if (l = Math.max(0, Math.min(l, o)), a && (n.discountType !== "default" || a.v2)) {
      const i = l;
      let u = Oi(i, a.precision);
      a.v2 && Math.round(u) > Math.round(o) && i > 100 && (u = Oi(i - 100, a.precision)), l = u <= o ? u : i;
    }
    return Math.max(0, Math.round(l));
  }
  function Oi(n, t = ".00") {
    switch (t) {
      case ".99":
        return n > 99 ? 100 * Math.ceil(n / 100) - 1 : n;
      case ".95":
        return n > 95 ? 100 * Math.ceil(n / 100) - 5 : n;
      case ".90":
        return n > 90 ? 100 * Math.ceil(n / 100) - 10 : n;
      case ".x9":
        return n > 9 ? 10 * Math.ceil(n / 10) - 1 : n;
      case ".x0":
        return 10 * Math.ceil(n / 10);
      default:
        return 100 * Math.ceil(n / 100);
    }
  }
  var rb = $('<img class="kaching-bundles__choose-product__product-image" alt=""/>'), ab = $('<span class="kaching-bundles__choose-product__product-title"> </span>'), ib = $('<span class="kaching-bundles__choose-product__subtitle"><!></span>'), lb = $('<div class="kaching-bundles__choose-product__product-price"><!></div>'), sb = $('<div class="kaching-bundles__choose-product__product-compare-at-price"><!></div>'), ob = $("<div><!> <!></div>"), cb = $('<div class="kaching-bundles__choose-product__product"><div class="kaching-bundles__choose-product__product-container"><!> <div class="kaching-bundles__choose-product__product-content"><!> <!> <div class="kaching-bundles__choose-product__product-price-container"><!> <!></div> <!></div></div> <!></div>');
  function Pd(n, t) {
    var r;
    at(t, !0);
    const a = () => Ve(b, "$config", c), s = () => Ve(f, "$formatPrice", c), o = () => Ve(p, "$translate", c), [c, l] = kt(), i = k(t, "product", 7), u = k(t, "dealBlock", 7), g = k(t, "dealBar", 7), v = k(t, "onChoose", 7), p = Tt(), f = vn(), b = yn();
    let y = Oe(!1), m = Oe(ut(((r = i().variants.find((M) => M.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const z = d(() => i().variants.find((M) => M.id === e(m)) || i().variants[0]), C = d(() => {
      var M;
      return e(y) || ((M = u().chooseProductModal) == null ? void 0 : M.showVariantImageByDefault);
    }), A = d(() => e(C) && e(z).image || i().image), O = d(() => u().priceRounding ? { perItem: !0, precision: u().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), V = d(() => g().dealBarType === gt.Bxgy ? e(z).price : xa({ discountType: g().discountType, discountValue: g().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(z), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(O) })), R = d(() => (function(M, W) {
      return M.useProductCompareAtPrice && W.compareAtPrice ? Math.max(W.price, W.compareAtPrice) : W.price;
    })(u(), e(z))), U = d(() => i().url ? `${i().url}?variant=${e(m)}` : void 0), G = d(() => _n({ priceFormatter: s(), product: i(), totalFullPrice: e(R), totalDiscountedPrice: e(V), quantity: 1, unitQuantity: Ir([{ variant: e(z), quantity: 1 }]) })), H = d(() => e(G)(o()(u().chooseProductModal.subtitle || ""))), I = d(() => u().chooseProductModal.buttonText);
    function T(M) {
      ee(y, !0), ee(m, M, !0);
    }
    var ue = { get product() {
      return i();
    }, set product(M) {
      i(M), _();
    }, get dealBlock() {
      return u();
    }, set dealBlock(M) {
      u(M), _();
    }, get dealBar() {
      return g();
    }, set dealBar(M) {
      g(M), _();
    }, get onChoose() {
      return v();
    }, set onChoose(M) {
      v(M), _();
    } }, re = cb(), P = w(re), S = w(P), B = (M) => {
      rr(M, { get url() {
        return e(U);
      }, class: "kaching-bundles__choose-product__product-image-link", children: (W, de) => {
        var ge = rb();
        Ie(ge, "width", 100), Ie(ge, "height", 100), ke(() => Ie(ge, "src", e(A))), h(W, ge);
      }, $$slots: { default: !0 } });
    };
    F(S, (M) => {
      e(A) && M(B);
    });
    var q = E(S, 2), Y = w(q);
    rr(Y, { get url() {
      return e(U);
    }, class: "kaching-bundles__choose-product__product-link", children: (M, W) => {
      var de = ab(), ge = w(de, !0);
      x(de), ke(() => pt(ge, i().title)), h(M, de);
    }, $$slots: { default: !0 } });
    var Q = E(Y, 2), oe = (M) => {
      var W = ib();
      Ne(w(W), () => e(H)), x(W), h(M, W);
    };
    F(Q, (M) => {
      e(H) && M(oe);
    });
    var j = E(Q, 2), D = w(j);
    lt(D, () => e(V), (M) => {
      var W = lb();
      Ne(w(W), () => s()(e(V))), x(W), h(M, W);
    });
    var se = E(D, 2), te = (M) => {
      var W = Te();
      lt(_e(W), () => e(R), (de) => {
        var ge = sb();
        Ne(w(ge), () => s()(e(R))), x(ge), h(de, ge);
      }), h(M, W);
    };
    F(se, (M) => {
      e(R) && e(R) > e(V) && M(te);
    }), x(j);
    var X = E(j, 2), ne = (M) => {
      var W = ob(), de = w(W);
      ma(de, { get product() {
        return i();
      }, class: "kaching-bundles__choose-product__product-option-names" }), Wn(E(de, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(m);
      }, onChange: T }), x(W), h(M, W);
    };
    F(X, (M) => {
      i().variants.length > 1 && M(ne);
    }), x(q), x(P), Yt(E(P, 2), { element: "span", class: "kaching-bundles__choose-product__product-button", onclick: function() {
      v()({ product: i(), variant: e(z) });
    }, children: (M, W) => {
      var de = Te(), ge = _e(de), N = (ae) => {
        var ce = Rn();
        ke((me) => pt(ce, me), [() => o()(e(I))]), h(ae, ce);
      }, J = (ae) => {
        h(ae, Rn("Choose"));
      };
      F(ge, (ae) => {
        e(I) ? ae(N) : ae(J, !1);
      }), h(M, de);
    }, $$slots: { default: !0 } }), x(re), h(n, re);
    var he = it(ue);
    return l(), he;
  }
  Je(Pd, { product: {}, dealBlock: {}, dealBar: {}, onChoose: {} }, [], [], !0);
  const $o = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  var ub = $('<img alt="Close"/>'), db = (n, t) => {
    ee(t, !e(t));
  }, gb = (n, t, r, a) => {
    ee(t, e(r).value, !0), ee(a, !1);
  }, hb = $('<img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-option-check"/>'), pb = $('<button type="button" class="kaching-bundles__choose-product__sort-option"><span> </span> <!></button>'), bb = $('<div class="kaching-bundles__choose-product__sort-menu"></div>'), fb = $('<div class="kaching-bundles__choose-product__controls"><div class="kaching-bundles__choose-product__search-field"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__search-icon"/> <input type="search" class="kaching-bundles__choose-product__search-input"/></div> <div class="kaching-bundles__choose-product__sort"><button type="button" class="kaching-bundles__choose-product__sort-button"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-icon"/> </button> <!></div></div>'), vb = (n, t) => {
    ee(t, "");
  }, _b = $('<div class="kaching-bundles__choose-product__empty-state-icon-wrapper"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__empty-state-icon"/></div> <h3 class="kaching-bundles__choose-product__empty-state-title"> </h3> <p class="kaching-bundles__choose-product__empty-state-description"> </p> <button type="button" class="kaching-bundles__choose-product__empty-state-clear-button"> </button>', 1), kb = $('<div class="kaching-bundles__choose-product__empty-state"><!></div>'), mb = $('<div class="kaching-bundles__choose-product"><div class="kaching-bundles__choose-product__header"><h2 class="kaching-bundles__choose-product__heading"><!></h2> <!></div> <!> <div class="kaching-bundles__choose-product__products"><!></div></div>');
  function Do(n, t) {
    var r;
    at(t, !0);
    const a = () => Ve(v, "$translate", s), [s, o] = kt(), c = k(t, "dealBlock", 7), l = k(t, "dealBar", 7), i = k(t, "products", 23, () => []), u = k(t, "onChoose", 7), g = k(t, "onClose", 7), v = Tt(), p = d(() => c().chooseProductModal), f = d(() => ((j) => fn({ "kaching-choose-product-button-size": j.buttonSize + "px", "kaching-choose-product-text-size": j.textSize + "px", "kaching-choose-product-price-color": We(j.priceColor), "kaching-choose-product-compare-at-price-color": We(j.compareAtPriceColor), "kaching-choose-product-text-color": We(j.textColor), "kaching-choose-product-button-color": We(j.buttonColor), "kaching-choose-product-button-text-color": We(j.buttonTextColor), "kaching-choose-product-photo-size": j.productPhotoSize + "px" }))(e(p)));
    let b = Oe(""), y = Oe(!1);
    const m = { Relevance: "relevance", NewestFirst: "newest-first", PriceLowToHigh: "price-low-to-high", PriceHighToLow: "price-high-to-low" }, z = d(() => [{ value: m.Relevance, label: a()("system.sort_relevance") }, { value: m.NewestFirst, label: a()("system.sort_newest_first") }, { value: m.PriceLowToHigh, label: a()("system.sort_price_low_to_high") }, { value: m.PriceHighToLow, label: a()("system.sort_price_high_to_low") }]);
    let C = Oe(ut(Object.values(m).includes((r = e(p).defaultSortOption) != null ? r : "") ? e(p).defaultSortOption : m.Relevance));
    const A = d(() => e(p).showSearchField ? i().filter((j) => j.title.toLowerCase().includes(e(b).toLowerCase().trim())) : i()), O = d(() => {
      const j = [...e(A)], D = (te) => {
        const X = te.variants.find((ne) => ne.availableForSale) || te.variants[0];
        return (X == null ? void 0 : X.price) || 0;
      }, se = (te) => {
        if (!te.createdAt) return 0;
        const X = Date.parse(te.createdAt);
        return Number.isNaN(X) ? 0 : X;
      };
      switch (e(C)) {
        case m.Relevance:
          return j;
        case m.NewestFirst:
          return j.sort((te, X) => {
            const ne = se(X) - se(te);
            return ne !== 0 ? ne : X.id - te.id;
          });
        case m.PriceLowToHigh:
          return j.sort((te, X) => D(te) - D(X));
        case m.PriceHighToLow:
          return j.sort((te, X) => D(X) - D(te));
        default:
          return j;
      }
    }), V = d(() => e(p).showSearchField && e(b).trim().length > 0 && e(O).length === 0);
    function R() {
      ee(y, !1);
    }
    function U(j, D) {
      const se = (te) => {
        j.contains(te.target) || D();
      };
      return document.addEventListener("click", se, !0), { destroy() {
        document.removeEventListener("click", se, !0);
      } };
    }
    var G = { get dealBlock() {
      return c();
    }, set dealBlock(j) {
      c(j), _();
    }, get dealBar() {
      return l();
    }, set dealBar(j) {
      l(j), _();
    }, get products() {
      return i();
    }, set products(j = []) {
      i(j), _();
    }, get onChoose() {
      return u();
    }, set onChoose(j) {
      u(j), _();
    }, get onClose() {
      return g();
    }, set onClose(j) {
      g(j), _();
    } }, H = mb(), I = w(H), T = w(I), ue = w(T), re = (j) => {
      var D = Rn();
      ke((se) => pt(D, se), [() => a()(e(p).heading)]), h(j, D);
    };
    F(ue, (j) => {
      e(p).heading && j(re);
    }), x(T), Yt(E(T, 2), { element: "span", class: "kaching-bundles__choose-product__close", get onclick() {
      return g();
    }, children: (j, D) => {
      var se = ub();
      ke(() => Ie(se, "src", $o)), h(j, se);
    }, $$slots: { default: !0 } }), x(I);
    var P = E(I, 2), S = (j) => {
      var D = fb(), se = w(D), te = w(se), X = E(te, 2);
      ka(X), x(se);
      var ne = E(se, 2), he = w(ne);
      he.__click = [db, y];
      var M = w(he), W = E(M);
      x(he);
      var de = E(he, 2), ge = (N) => {
        var J = bb();
        Gt(J, 21, () => e(z), (ae) => ae.value, (ae, ce) => {
          var me = pb();
          me.__click = [gb, C, ce, y];
          var be = w(me), Se = w(be, !0);
          x(be);
          var L = E(be, 2), pe = (Z) => {
            var fe = hb();
            ke(() => Ie(fe, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6663%205L7.49967%2014.1667L3.33301%2010'%20stroke='%23344054'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), h(Z, fe);
          };
          F(L, (Z) => {
            e(C) === e(ce).value && Z(pe);
          }), x(me), ke(() => pt(Se, e(ce).label)), h(ae, me);
        }), x(J), h(N, J);
      };
      F(de, (N) => {
        e(y) && N(ge);
      }), x(ne), uo(ne, (N, J) => U == null ? void 0 : U(N, J), () => R), x(D), ke((N, J, ae) => {
        Ie(te, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.5%2017.5L13.875%2013.875M15.8333%209.16667C15.8333%2012.8486%2012.8486%2015.8333%209.16667%2015.8333C5.48477%2015.8333%202.5%2012.8486%202.5%209.16667C2.5%205.48477%205.48477%202.5%209.16667%202.5C12.8486%202.5%2015.8333%205.48477%2015.8333%209.16667Z'%20stroke='%23717680'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Ie(X, "aria-label", N), Ie(X, "placeholder", J), Ie(M, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.1667%203.33337V16.6667M14.1667%2016.6667L10.8333%2013.3334M14.1667%2016.6667L17.5%2013.3334M5.83333%2016.6667V3.33337M5.83333%203.33337L2.5%206.66671M5.83333%203.33337L9.16667%206.66671'%20stroke='%23414651'%20stroke-width='1.67'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), pt(W, ` ${ae != null ? ae : ""}`);
      }, [() => a()("system.search"), () => a()("system.search"), () => a()("system.sort_by")]), yh(X, () => e(b), (N) => ee(b, N)), h(j, D);
    };
    F(P, (j) => {
      e(p).showSearchField && j(S);
    });
    var B = E(P, 2), q = w(B), Y = (j) => {
      var D = kb(), se = w(D), te = (ne) => {
        var he = _b(), M = _e(he), W = w(M);
        x(M);
        var de = E(M, 2), ge = w(de, !0);
        x(de);
        var N = E(de, 2), J = w(N, !0);
        x(N);
        var ae = E(N, 2);
        ae.__click = [vb, b];
        var ce = w(ae, !0);
        x(ae), ke((me, be, Se) => {
          Ie(W, "src", "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20fill='%23F2F4F7'/%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20stroke='%23F9FAFB'%20stroke-width='8'/%3e%3cpath%20d='M37%2037L32.65%2032.65M35%2027C35%2031.4183%2031.4183%2035%2027%2035C22.5817%2035%2019%2031.4183%2019%2027C19%2022.5817%2022.5817%2019%2027%2019C31.4183%2019%2035%2022.5817%2035%2027Z'%20stroke='%23475467'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), pt(ge, me), pt(J, be), pt(ce, Se);
        }, [() => a()("system.no_results_found"), () => a()("system.no_results_description"), () => a()("system.clear_search")]), h(ne, he);
      }, X = (ne) => {
        var he = Rn();
        ke((M) => pt(he, M), [() => a()("system.no_products_available")]), h(ne, he);
      };
      F(se, (ne) => {
        e(V) ? ne(te) : ne(X, !1);
      }), x(D), h(j, D);
    }, Q = (j) => {
      var D = Te();
      Gt(_e(D), 17, () => e(O), (se) => se.id, (se, te) => {
        Pd(se, { get dealBlock() {
          return c();
        }, get dealBar() {
          return l();
        }, get product() {
          return e(te);
        }, get onChoose() {
          return u();
        } });
      }), h(j, D);
    };
    F(q, (j) => {
      e(O).length === 0 ? j(Y) : j(Q, !1);
    }), x(B), x(H), ke(() => Ft(H, e(f))), h(n, H);
    var oe = it(G);
    return o(), oe;
  }
  Fn(["click"]), Je(Do, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  const sa = { enabled: !1, satisfied: !0, missingCount: 0, alertText: null };
  function To(n, t) {
    return { enabled: n.requiresItemSelection, satisfied: n.allItemsSelected, missingCount: n.missingItemsCount, alertText: t };
  }
  const Vo = "system.personalisation_required_alert";
  function Sd({ required: n, itemCount: t, filledCount: r }) {
    if (!n) return sa;
    const a = Math.max(t, 1);
    return { enabled: !0, satisfied: r >= a, missingCount: Math.max(0, a - r), alertText: Vo };
  }
  const Bd = "personalisationRule", xs = () => {
    const n = { reportedRule: Rr(sa), failing: Rr(!1) };
    return Va(Bd, n), n;
  }, Cd = "requireSelectionError", ys = () => {
    const n = Rr(!1);
    return Va(Cd, n), n;
  }, pi = () => {
    const n = Ta(Cd);
    if (!n) throw new Error("getRequireSelectionError must be called within a component tree that has setupRequireSelectionError initialized");
    return n;
  };
  var xb = $('<div class="kaching-bundles"><!></div>');
  function Id(n, t) {
    var r;
    at(t, !0);
    const a = k(t, "config", 7), s = k(t, "dealBlock", 7), o = k(t, "dealBar", 7), c = k(t, "products", 23, () => []), l = k(t, "mediaImages", 7), i = k(t, "translations", 7), u = d(() => _r(s(), a().brandColors)), g = d(() => _r(o(), a().brandColors)), { setConfig: v } = hi(a());
    xs(), ys();
    const { setMoneyFormat: p } = Fi(a().moneyFormat), { setTranslations: f } = gi(i()), { setMediaImages: b } = yl(l()), { setSwatchSettings: y } = kl({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (r = e(u).showSelectedSwatchName) != null && r, pillStyle: la(e(u)) });
    tt(() => {
      v(a());
    }), tt(() => {
      p(a().moneyFormat, !!e(u).showPricesWithoutDecimals);
    }), tt(() => {
      f(i());
    }), tt(() => {
      b(l());
    }), tt(() => {
      var C;
      y({ swatchOptions: e(u).swatchOptions || [], swatchSize: e(u).swatchSize, swatchShape: e(u).swatchShape, showSelectedSwatchName: (C = e(u).showSelectedSwatchName) != null && C, pillStyle: la(e(u)) });
    });
    var m = { get config() {
      return a();
    }, set config(C) {
      a(C), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(C) {
      s(C), _();
    }, get dealBar() {
      return o();
    }, set dealBar(C) {
      o(C), _();
    }, get products() {
      return c();
    }, set products(C = []) {
      c(C), _();
    }, get mediaImages() {
      return l();
    }, set mediaImages(C) {
      l(C), _();
    }, get translations() {
      return i();
    }, set translations(C) {
      i(C), _();
    } }, z = xb();
    return Do(w(z), { get dealBlock() {
      return e(u);
    }, get dealBar() {
      return e(g);
    }, get products() {
      return c();
    }, onChoose: () => {
    }, onClose: () => {
    } }), x(z), h(n, z), it(m);
  }
  customElements.define("kaching-bundles-choose-product", Je(Id, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), mn(this, "component"), this.component = this;
    }
  })), wi = !0;
  var yb = Tn('<svg width="102" height="60" viewBox="0 0 102 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="currentColor"></ellipse><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="#000" fill-opacity=".3"></ellipse><mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="5" width="96" height="48"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></mask><g mask="url(#a)"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></g><path class="most-popular-text" d="M28 15.4 25.4 24a.3.3 0 0 1 0 .1.2.2 0 0 1-.2.1c-.4.1-.7 0-.8-.4a1007.3 1007.3 0 0 1-3.9-9.2l-.8 7.6a.5.5 0 0 0 0 .2l.6.8a.7.7 0 0 1 0 .1.2.2 0 0 1 0 .1c0 .5-1.7.1-2 0-1 0 .1-1 .2-1.4l1.1-9c0-.4-.1-.7-.5-1a.4.4 0 0 1-.1-.2v-.2a.2.2 0 0 1 .1 0 15.2 15.2 0 0 1 3.1.2h.1c.1 0 0 0 0 .1.3.5-.5.7-.3 1.2a1361.6 1361.6 0 0 1 3.2 8.1l2.3-7.3a.7.7 0 0 0-.1-.6c-.3-.4-1-1 .1-1l2.7.4c.2 0 .3.2.2.4a.4.4 0 0 1-.1.2c-.3.3-.5.5-.4 1a771.7 771.7 0 0 0 2.5 10c.5.5.7 1-.3.8l-2.2-.3c-.5 0-.5-.4-.1-1a.7.7 0 0 0 .1-.6l-1.6-7.6c0-.2-.1-.2-.1 0zm24 4.7.1 4.5c0 1 .6 1.5 1.6 1.5.3 0 .5-.2.6-.5.1-.4.3-.5.5-.3h.1v.1c.1 1.1-.4 2-1.5 2-2.3.4-3.2-1.2-3.3-3.3l-.2-4.1c0-.4-.2-.5-.6-.5-.5 0-.8-.1-.7-.7a.2.2 0 0 1 .2-.1c1.3.2 2-.3 2-1.6a.2.2 0 0 1 .2-.1c1.1-.5.9 1.3.9 1.9a.1.1 0 0 0 .1.1l2.2.3.2.1c.1.3.1.5-.1.7a.2.2 0 0 1-.1 0 .4.4 0 0 1-.1 0l-2-.1a.1.1 0 0 0-.1 0zm-11.6 4.6c-.7.8-1.8 1.2-3 1.1-1.1 0-2.3-.5-3.3-1.4A5.7 5.7 0 0 1 33 23a5 5 0 0 1-.6-1.7 4 4 0 0 1 .1-1.7c.1-.5.4-1 .8-1.4.7-.7 1.7-1.2 2.9-1.1 1.2 0 2.4.6 3.3 1.4.5.4.9 1 1.2 1.5.3.5.5 1.1.5 1.7a4 4 0 0 1 0 1.6c-.2.6-.5 1-.8 1.4zm-2.4.4c.3 0 .5-.3.7-.5l.5-1v-1.4a6.4 6.4 0 0 0-.3-1.4 6.4 6.4 0 0 0-.6-1.4 4.7 4.7 0 0 0-.8-1 2.6 2.6 0 0 0-1-.6 1.5 1.5 0 0 0-.9 0c-.3 0-.5.3-.7.5l-.4 1a4.7 4.7 0 0 0 0 1.4 6.4 6.4 0 0 0 1.7 3.8c.3.3.6.5 1 .6.2 0 .5.1.8 0zm8-6c-1-.8-2.4-.4-2.3 1 0 .4.3.8.7 1l3 1.2c1.1.5 2.2 2.5 1.1 3.6-1.6 1.8-5.6.6-6.8-1.3-.2-.4-.1-.8.4-1 1.2-.5 1.5 1.5 2.3 2 1 .8 3 .6 2.4-1.1-.3-1-3.2-1.8-3.8-2.2-1.9-1.2-1.8-4 .8-4.3 1.6-.1 4.5.6 4.7 2.6a.3.3 0 0 1 0 .3c-1.1 1.3-1.9-1.3-2.5-1.8zM28.3 34.9c0 1.4 0 2 .8 3 .2.2.2.4 0 .6a.3.3 0 0 1-.2 0l-3.8-.3a.4.4 0 0 1-.3 0c-.3-.4-.3-.7 0-1a1 1 0 0 0 .4-.8L25 28c0-.4-.3-.9-.8-1.4a.3.3 0 0 1 0-.1.2.2 0 0 1 0-.1c0-.3.2-.4.6-.3 3.4.2 9.4.1 9.7 4.8.3 3.8-3 4.1-6 3.9zm-.2-6.7c0 1.4 0 3 .2 4.6 0 .3.2.5.5.6 3.4 1 2.5-3.2 1.6-4.6-.3-.5-.8-.9-1.5-1.1-.5-.2-.8 0-.8.5zM59.5 41c-1.7 1.3-4.3.4-5.2-1.4-1-1.8 0-4.1-1.3-5.8a.4.4 0 0 1 0-.2c0-.6.4-.5.8-.5a19.9 19.9 0 0 1 2.5 0 .4.4 0 0 1 .4.3l.2 5.3c0 .8.3 1.8 1.1 1.8 1.7.2 1-4.2 1-5.3a.5.5 0 0 0-.2-.2l-.5-.8c-.3-.3-.2-.5.3-.6h2.9c.3 0 .4 0 .4.4l.3 6c0 1.6 1.4 1.6 1.3-.2l-.3-7c0-.8-.3-1.2-.8-1.8a.3.3 0 0 1 0-.2.3.3 0 0 1 0-.2.3.3 0 0 1 .2 0l2.8-1.2c.5-.2.8 0 .8.6l.5 10.4c0 .5.2.8.6 1.2.3.4.4 1-.4.8-.9 0-3.1 0-3.9-.4a.4.4 0 0 0-.2 0c-.9 0-2.7.1-3.1-1a.1.1 0 0 0-.2 0zm-16.4-3c-.5 1-1.5 1.6-2.7 1.8-1.2.2-2.5 0-3.6-.7a5.7 5.7 0 0 1-1.5-1.2 5 5 0 0 1-.9-1.6 4.2 4.2 0 0 1-.2-1.7 3.5 3.5 0 0 1 .5-1.6c.5-.9 1.5-1.5 2.7-1.7 1.2-.2 2.5 0 3.6.7a5.7 5.7 0 0 1 1.4 1.2c.5.5.8 1 1 1.6.2.5.2 1.1.2 1.7a3.5 3.5 0 0 1-.5 1.5zm-3.3 1c.2 0 .3-.1.4-.4l.3-.8v-1.3a8.8 8.8 0 0 0-.3-1.3 8.8 8.8 0 0 0-.5-1.3 5.9 5.9 0 0 0-.6-1.1l-.6-.6c-.2-.2-.4-.2-.6-.2-.2 0-.3.2-.4.4l-.3 1v1.1a8.8 8.8 0 0 0 1.4 3.8l.6.6c.2.1.4.2.6.1z" fill="#FEFDFD"></path><path class="most-popular-text" d="M46.9 32.7a3 3 0 0 1 2.8-.3c2.5.8 3.6 2.5 3.5 5-.2 2.9-3.2 4.2-5.5 2.9-.2-.1-.2 0-.2 0 .1 1-.2 2.2.7 3 .3.2.4.5.1.7a.3.3 0 0 1-.2.1 401 401 0 0 0-3.5-.3c-.4 0-.6-.3-.7-.6a.3.3 0 0 1 0-.1.5.5 0 0 1 .1-.1l.5-.7a.4.4 0 0 0 0-.2l-.2-7.3c0-.6-1.1-.9-.9-1.6a.3.3 0 0 1 .2-.2l2.6-1a.2.2 0 0 1 .2 0c.2.1.4.4.4.7zM49 40c2.2 0 .5-5.5-.1-6.4-.7-.8-1.5-.7-1.7.4v3.4c.2.9.6 2.6 1.8 2.6zm24.5 2.7c-2.7 1.4-5.7-1-6.1-3.7-.7-3.5 2.8-5.8 5.8-3.8a.1.1 0 0 0 .1 0c.3-.7 2.3 0 2.9.2.4 0 .6.3.5.7a.3.3 0 0 1 0 .1.3.3 0 0 1-.1 0c-.4.4-.6.8-.6 1.2 0 2.3.2 3.7.2 4.2s1 1.2.7 1.7a.2.2 0 0 1-.1 0 .3.3 0 0 1-.2.1l-2.6-.3a.3.3 0 0 1-.2 0l-.2-.4a.1.1 0 0 0-.1 0zm-.4-5.2c-.2-1.8-2.7-3.4-2.8-.7-.1 1.5.3 4.6 1.9 5.5a.4.4 0 0 0 .2 0c1.4-.3.8-3.5.7-4.8zM80.5 36.5c.3-.3.5-.7 1-.9 3.8-1.6 3.6 4.9.9 2.9-.5-.4-.5-1.7-1.2-1.5a.3.3 0 0 0-.1 0 .3.3 0 0 0 0 .2c-.4.7-.4 4.6.1 5.2.2.3 1.5 1.2.2 1.2a52 52 0 0 1-3.5-.3c-.3 0-.5-.2-.5-.5a.4.4 0 0 1 0-.2c.4-.4.6-.7.6-1.2l-.2-3.5a.4.4 0 0 0 0-.2l-.9-1c-.2-.2 0-.4.3-.6l2.6-1c.3 0 .5 0 .5.4v1h.2z" fill="#FEFDFD"></path><path class="most-popular-text" fill-rule="evenodd" clip-rule="evenodd" d="m82.2 24.2-.7-6.2-.7 6.2-2.7-2.1 2 2.7-6.1.7 6.2.7L78 29l2.8-2.1.7 6.1.7-6.1L85 29l-2.2-2.8 6.2-.7-6.1-.7 2-2.7-2.7 2.1z" fill="#fff"></path><path class="most-popular-text" d="M45 4v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2V4zm12 41v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2v-1zM13 22v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4H6h3a4 4 0 0 0 4-4v-3zM67 4v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4h-3 3a4 4 0 0 0 4-4V4z" fill="#fff"></path></svg>');
  function Md(n) {
    h(n, yb());
  }
  Je(Md, {}, [], [], !0);
  const zd = (n) => {
    const t = n.badgeStyle || "simple", r = n.badgeText || "", a = { type: "dealBar", dealBarId: n.id }, s = { id: `legacy-${n.id}`, attachedTo: a, text: r, colors: null };
    return t === "most-popular" ? { ...s, badgeType: "most-popular", size: 102 } : t === "custom" ? n.badgeImageGID ? { ...s, badgeType: "custom", imageGID: n.badgeImageGID, size: 56 } : null : r ? { ...s, badgeType: "simple", textSize: 12 } : null;
  }, Sl = (n, t) => {
    if (n.blockLayout !== "vertical") return [];
    const r = ws(n);
    if (r.length > 0) return r.filter((s) => s.attachedTo.type === "dealBar" && s.attachedTo.dealBarId === t.id);
    if (n.badgesEnabled === !1) return [];
    const a = zd(t);
    return a ? [a] : [];
  }, wb = (n, t) => n.blockLayout !== "vertical" ? [] : ws(n).filter((r) => r.attachedTo.type === t), ws = (n) => n.badgesEnabled === !1 ? [] : n.badges || [], Ea = (n, t, r) => ({ ...n, text: r(t(n.text)) }), Pb = (n) => {
    const t = n.filter((r) => r.badgeType === "border").map((r) => r.thickness);
    return t.length === 0 ? 22 : Math.max(...t);
  }, Sb = (n) => {
    const t = n.filter((r) => r.badgeType === "border").filter((r) => r.position === "all").map((r) => {
      var a;
      return (a = r.gap) != null ? a : 0;
    });
    return t.length === 0 ? 0 : Math.max(...t);
  };
  let Bl = null;
  const $d = (n, t) => typeof document == "undefined" ? 0 : (Bl || (Bl = document.createElement("canvas").getContext("2d")), Bl ? (Bl.font = `bold ${t}px sans-serif`, Bl.measureText(n).width + 0.5 * n.length) : 0), Bb = (n) => {
    const t = n.flatMap((r) => r.badgeType !== "border" || r.position !== "left" && r.position !== "right" ? [] : [$d(r.text, r.textSize) + 24]);
    return t.length === 0 ? 0 : Math.max(...t);
  }, ja = (n) => ({ positions: new Set(n.flatMap((t) => t.badgeType === "border" ? [t.position] : [])), thickness: Pb(n), gap: Sb(n), sideLength: Bb(n) });
  var Cb = Tn('<animate attributeName="startOffset" repeatCount="indefinite"></animate>'), Ib = Tn("<textPath><!> </textPath>"), Mb = Tn("<!><!>", 1), zb = Tn('<svg class="kaching-bundles__badge-border__curve"><path fill="none"></path><text text-anchor="middle"></text></svg>'), $b = $('<span class="kaching-bundles__badge-border__side kaching-bundles__badge-border__side--top"><!></span>'), Db = $('<div class="kaching-bundles__badge-border kaching-bundles__badge-border--all"><div class="kaching-bundles__badge-border__band"><span></span></div> <!></div>'), Tb = $('<div><span class="kaching-bundles__badge-border__text"><!></span></div>');
  function Dd(n, t) {
    const r = (function() {
      var S, B, q;
      if (_t && Dt && Dt.nodeType === 8 && ((S = Dt.textContent) != null && S.startsWith("$"))) {
        const Y = Dt.textContent.substring(1);
        return wr(), Y;
      }
      return (q = (B = window.__svelte) != null ? B : window.__svelte = {}).uid != null || (q.uid = 1), "c" + window.__svelte.uid++;
    })();
    at(t, !0);
    const a = k(t, "badge", 7), s = typeof window != "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, o = d(() => ed(a().colors)), c = d(() => {
      var S;
      return `--badge-border-thickness: ${a().thickness}px; --badge-text-size: ${a().textSize}px; --badge-ring-outer: ${a().thickness + ((S = a().gap) != null ? S : 0)}px;`;
    });
    let l = Oe(0), i = Oe(0);
    const u = d(() => a().position === "left" || a().position === "right"), g = d(() => {
      const S = Math.max(6, a().thickness - 6), B = e(u) ? e(i) : e(l), q = Math.max(1, a().text.trim().length), Y = B > 0 ? (B - 16) / (0.62 * q) : 1 / 0;
      return Math.max(6, Math.min(a().textSize, S, Y));
    }), v = d(() => `--badge-border-thickness: ${a().thickness}px; --badge-text-size: ${e(g)}px;`);
    let p = Oe(void 0), f = Oe(ut({ count: 0, slot: 0, pathLength: 0 })), b = Oe(void 0), y = Oe(0), m = Oe(0);
    const z = d(() => Math.max(6, Math.min(a().textSize, a().thickness - 6))), C = d(() => 0.32 * e(z)), A = d(() => 0.4 * e(z) + a().spacing), O = d(() => a().delimiter || ""), V = d(() => ($d(a().text.trim(), e(z)) || a().text.trim().length * e(z) * 0.7) + (e(O) ? e(z) : 0) + 2 * e(A));
    tt(() => {
      if (e(R), e(V), !e(p)) return;
      const S = e(p).getTotalLength() / 2;
      if (S <= 0 || e(V) <= 0) return;
      const B = Math.max(1, Math.floor(S / e(V)));
      ee(f, { count: B, slot: S / B, pathLength: S }, !0);
    });
    const R = d(() => {
      if (!e(b) || !e(y) || !e(m)) return "";
      const S = getComputedStyle(e(b)), B = parseFloat(S.getPropertyValue("--bar-border-radius")) || 8, q = parseFloat(S.getPropertyValue("--badge-border-gap")) || 0, Y = a().thickness / 2 + e(C), Q = e(y) - Y, oe = e(m) - Y, j = Math.min(B + q + Y, Math.max(0, Math.min(Q - Y, oe - Y) / 2)), D = ["H " + (Q - j), `A ${j} ${j} 0 0 1 ${Q} ${Y + j}`, "V " + (oe - j), `A ${j} ${j} 0 0 1 ${Q - j} ${oe}`, `H ${Y + j}`, `A ${j} ${j} 0 0 1 ${Y} ${oe - j}`, `V ${Y + j}`, `A ${j} ${j} 0 0 1 ${Y + j} ${Y}`].join(" ");
      return `M ${Y + j} ${Y} ${D} ${D} Z`;
    }), U = `kaching-badge-ring-${r}`, G = d(() => a().repeatText && a().animated && a().spinSpeed > 0 && !s && e(f).pathLength > 0), H = d(() => e(G) ? Math.max(2, e(f).pathLength / Math.max(1, a().spinSpeed)) : 0);
    var I = { get badge() {
      return a();
    }, set badge(S) {
      a(S), _();
    } }, T = Te(), ue = _e(T), re = (S) => {
      var B = Db(), q = E(w(B), 2), Y = (oe) => {
        var j = Te();
        lt(_e(j), () => e(R), (D) => {
          var se = Te(), te = _e(se), X = (ne) => {
            var he = zb();
            {
              const de = (ge, N = Jr, J = Jr) => {
                var ae = Ib(), ce = w(ae), me = (Se) => {
                  var L = Cb();
                  ke(() => {
                    var pe;
                    Ie(L, "from", a().spinDirection === "clockwise" ? N() : N() + e(f).pathLength), Ie(L, "to", a().spinDirection === "clockwise" ? N() + e(f).pathLength : N()), Ie(L, "dur", `${(pe = e(H)) != null ? pe : ""}s`);
                  }), h(Se, L);
                };
                F(ce, (Se) => {
                  e(G) && Se(me);
                });
                var be = E(ce, 1, !0);
                x(ae), ke(() => {
                  Ie(ae, "href", `#${U}`), Ie(ae, "startOffset", N()), pt(be, J());
                }), h(ge, ae);
              };
              var M = w(he);
              Ti(M, (ge) => ee(p, ge), () => e(p));
              var W = E(M);
              Gt(W, 21, () => ({ length: e(f).count }), jr, (ge, N, J) => {
                var ae = Mb(), ce = _e(ae);
                de(ce, () => J * e(f).slot + e(f).slot / 2, () => a().text);
                var me = E(ce), be = (Se) => {
                  de(Se, () => J * e(f).slot + e(f).slot, () => e(O));
                };
                F(me, (Se) => {
                  e(O) && Se(be);
                }), h(ge, ae);
              }), x(W), x(he), ke(() => {
                Ie(M, "id", U), Ie(M, "d", e(R));
              });
            }
            ke(() => {
              var de, ge;
              return Ie(he, "viewBox", `0 0 ${(de = e(y)) != null ? de : ""} ${(ge = e(m)) != null ? ge : ""}`);
            }), h(ne, he);
          };
          F(te, (ne) => {
            e(R) && ne(X);
          }), h(D, se);
        }), h(oe, j);
      }, Q = (oe) => {
        var j = $b();
        Ne(w(j), () => a().text), x(j), h(oe, j);
      };
      F(q, (oe) => {
        a().repeatText && a().text.trim() ? oe(Y) : oe(Q, !1);
      }), x(B), Ti(B, (oe) => ee(b, oe), () => e(b)), ke(() => {
        var oe, j;
        return Ft(B, `${(oe = e(o)) != null ? oe : ""} ${(j = e(c)) != null ? j : ""}`);
      }), is(B, "clientWidth", (oe) => ee(y, oe)), is(B, "clientHeight", (oe) => ee(m, oe)), h(S, B);
    }, P = (S) => {
      var B = Tb(), q = w(B);
      Ne(w(q), () => a().text), x(q), x(B), ke(() => {
        var Y, Q, oe;
        Wt(B, 1, `kaching-bundles__badge-border kaching-bundles__badge-border--${(Y = a().position) != null ? Y : ""}`), Ft(B, `${(Q = e(o)) != null ? Q : ""} ${(oe = e(v)) != null ? oe : ""}`);
      }), is(B, "clientWidth", (Y) => ee(l, Y)), is(B, "clientHeight", (Y) => ee(i, Y)), h(S, B);
    };
    return F(ue, (S) => {
      a().position === "all" ? S(re) : S(P, !1);
    }), h(n, T), it(I);
  }
  Je(Dd, { badge: {} }, [], [], !0);
  var Vb = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--custom"><img class="kaching-bundles__bar-most-popular__custom-image"/></div>'), Ab = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--fancy"><!></div>'), qb = $('<div class="kaching-bundles__bar-most-popular__content"><!></div>'), Gb = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--simple"><!></div>');
  function ya(n, t) {
    at(t, !0);
    const [r, a] = kt(), s = k(t, "badge", 7), o = k(t, "blockLayout", 7), c = Vn(), l = d(() => s().badgeType === "custom" ? Ve(c, "$getMediaImageUrl", r)(s().imageGID) : void 0), i = d(() => o() === "vertical"), u = d(() => {
      switch (s().badgeType) {
        case "most-popular":
        case "border":
          return !0;
        case "simple":
          return !!s().text;
        case "custom":
          return !!e(l);
      }
    }), g = d(() => e(i) && e(u)), v = d(() => ed(s().colors)), p = d(() => s().badgeType === "simple" ? `--badge-text-size: ${s().textSize}px;` : ""), f = d(() => s().badgeType === "most-popular" || s().badgeType === "custom" ? `--badge-size: ${s().size}px;` : "");
    var b = { get badge() {
      return s();
    }, set badge(A) {
      s(A), _();
    }, get blockLayout() {
      return o();
    }, set blockLayout(A) {
      o(A), _();
    } }, y = Te(), m = _e(y), z = (A) => {
      var O = Te(), V = _e(O), R = (G) => {
        Dd(G, { get badge() {
          return s();
        } });
      }, U = (G) => {
        var H = Te(), I = _e(H), T = (re) => {
          var P = Vb(), S = w(P);
          x(P), ke(() => {
            Ft(P, e(f)), Ie(S, "alt", s().text || "Badge"), Ie(S, "src", e(l));
          }), h(re, P);
        }, ue = (re) => {
          var P = Te(), S = _e(P), B = (Y) => {
            var Q = Ab();
            Md(w(Q)), x(Q), ke(() => {
              var oe, j;
              return Ft(Q, `${(oe = e(v)) != null ? oe : ""} ${(j = e(f)) != null ? j : ""}`);
            }), h(Y, Q);
          }, q = (Y) => {
            var Q = Gb();
            lt(w(Q), () => s().text, (oe) => {
              var j = qb();
              Ne(w(j), () => s().text), x(j), h(oe, j);
            }), x(Q), ke(() => {
              var oe, j;
              return Ft(Q, `${(oe = e(v)) != null ? oe : ""} ${(j = e(p)) != null ? j : ""}`);
            }), h(Y, Q);
          };
          F(S, (Y) => {
            s().badgeType === "most-popular" ? Y(B) : Y(q, !1);
          }, !0), h(re, P);
        };
        F(I, (re) => {
          s().badgeType === "custom" && e(l) ? re(T) : re(ue, !1);
        }, !0), h(G, H);
      };
      F(V, (G) => {
        s().badgeType === "border" ? G(R) : G(U, !1);
      }), h(A, O);
    };
    F(m, (A) => {
      e(g) && A(z);
    }), h(n, y);
    var C = it(b);
    return a(), C;
  }
  function bi(n, t) {
    at(t, !0);
    let r = k(t, "element", 7, "label"), a = k(t, "for", 7, void 0), s = k(t, "soldOut", 7, !1), o = k(t, "borderHost", 7), c = k(t, "children", 7);
    var l = { get element() {
      return r();
    }, set element(u = "label") {
      r(u), _();
    }, get for() {
      return a();
    }, set for(u = void 0) {
      a(u), _();
    }, get soldOut() {
      return s();
    }, set soldOut(u = !1) {
      s(u), _();
    }, get borderHost() {
      return o();
    }, set borderHost(u) {
      o(u), _();
    }, get children() {
      return c();
    }, set children(u) {
      c(u), _();
    } }, i = Te();
    return vu(_e(i), r, 0, (u, g) => {
      Su(u, (p, f) => ({ for: a(), class: "kaching-bundles__bar-container", style: "", [$i]: p, [Di]: f }), [() => ({ "kaching-bundles__bar-container--sold-out": s(), "kaching-bundles__bar-container--badge-border-all": o().positions.has("all"), "kaching-bundles__bar-container--badge-border-top": o().positions.has("top"), "kaching-bundles__bar-container--badge-border-bottom": o().positions.has("bottom"), "kaching-bundles__bar-container--badge-border-left": o().positions.has("left"), "kaching-bundles__bar-container--badge-border-right": o().positions.has("right") }), () => {
        var p, f;
        return { "--badge-border-thickness": `${(p = o().thickness) != null ? p : ""}px`, "--badge-border-gap": `${(f = o().gap) != null ? f : ""}px`, "--badge-border-gap-border": o().gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": o().sideLength ? `${o().sideLength}px` : void 0 };
      }]);
      var v = Te();
      rs(_e(v), c), h(g, v);
    }), h(n, i), it(l);
  }
  function Cl(n, t, r) {
    return n + t.reduce((a, s) => s.includeInCompareAt ? a + s.fullPrice : a, 0) + r.reduce((a, s) => s.includeInCompareAt ? a + s.fullPrice * s.quantity : a, 0);
  }
  function Ao(n, t, r) {
    return n ? t : r;
  }
  Je(ya, { badge: {}, blockLayout: {} }, [], [], !0), Je(bi, { element: {}, for: {}, soldOut: {}, borderHost: {}, children: {} }, [], [], !0);
  const Il = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3e%3crect%20width='100'%20height='100'%20fill='transparent'%20/%3e%3c/svg%3e", qo = ({ dealBlock: n, imageSize: t }) => {
    const { fonts: r, colors: a, cornerRadius: s } = n;
    return fn({ "kaching-free-gift-background-color": a.freeGiftBackground && We(a.freeGiftBackground), "kaching-free-gift-text-color": a.freeGiftText && We(a.freeGiftText), "kaching-free-gift-selected-background-color": a.freeGiftSelectedBackground && We(a.freeGiftSelectedBackground), "kaching-free-gift-selected-text-color": a.freeGiftSelectedText && We(a.freeGiftSelectedText), "kaching-free-gift-font-size": r.freeGift && r.freeGift.size + "px", "kaching-free-gift-font-weight": r.freeGift && ur(r.freeGift.style), "kaching-free-gift-font-style": r.freeGift && dr(r.freeGift.style), "kaching-free-gift-image-border-radius": (s || 0) / 2 + "px", "kaching-free-gift-image-height": t + "px" });
  }, Go = "data:image/webp;base64,UklGRoQYAABXRUJQVlA4WAoAAAAQAAAAVwEANAEAQUxQSPkFAAABBj/OtslttP9f5fcCagm1hVpF7YEJox4UKGYkeAMMGPfwDLTDZ1D2vIMIqAcB7VRSYECAAaEnwXBEmSwGHlrieL+jrjsiJgAn/5/8f/L/yf8n/w9iMzrDs9DBioEmgInM6NV1BfjS38jnJRbyl/z0anTfwYrRQgD4xYxeVQf15f0b+QwssfjtlYg8ExEHawBoId4gM3pV1dOX8AAqAJ+xRAb89pOcARg5wIrRQmAEM3p1XTXeAzefsVzIX/KTvBoBcIA10ELAMDOj366r1vXl/RuRz1gust9eicgzEXGwBtBCGD7m2avrqv19CcADFT4DS2T4TeQMeCbiYMVAC2FQkHn203XVyb563H8Glgv5S34SORsBcLBioAlAXyMz+q3qm+X9G5HPy4X89dsrkdEziIMVo0WE0IfIPHt1XfXc8mGP6jOwzH4TkTMAz0ScFTG9hORZdl31bo/Ko3rwM4DlT7Z30Cj7XA1D1zPot2o42l5BZ9WA/KlX2JshsdB9YlQOieW/woitwFY0TAjGOgRPdPd1x2BQlEurHcIoeSdS3S8gkMc/uW6hYVG9+wJUB/dr3SkYGEfeB1zlI7Y5undMVVwotvFHuk3cfSsGWoTuMxF2hQgArO5nAFIksUho+KOJvvLAZkz89KDfXxBPAfsJV2FvuAoXbLU2XIULzVW4NFyFc7bKHVdBiKvygKtwSVyVB1wF0W3iWCEft8mIFXCpW8TxQj5ukREvAKY9HDPk5y1ywwvILVfhnK1yx1bnxFTIHVfhnLgqD7gKl5qr8oCrcKm5Kp9wFXLDVZiwVW7ZatI8yxTIXeMcW6SNs1yB3HEVzomr8glX4ZK4Kh9zFS51sz4zRj7mKuSGqzBhK5gGGd7IJw2yvIFcmmOYA+dslVuuwuT/DpgRVyFgK6GmLNnDB1yFOTVDM4gPmmEYBHNqhOYQBGw1I67yAVdhRlzlHVdhTlyFoAELJpkRV3nHVmOuwpy4aq3rRnxi/mfOX/+rBa8YShsrIvxkL+ayB1Bxk5N9te+Ocgggc/UwUlade7fveX7vahFUHS37XuNxHPiUaiEddX/fXwC/PwrmfQeQ/gL4fgdIf4FHv+vp7OMPt+Ye+IPN2efwa80+nq0O/t8VHFsFPEN1cBzjJ4qB/EE+GX7araeJjLXioAeL3WqWxlHgrBZSdeWPTRqFzhqCqjt7+Ilq6r/vjP/tyjZGhtaVZClqtTaNodndsCnkkassTaLQWUNKv6vThWquWVflQClkt1pMkyiIEDhrNKlHKa7Rftwg6OSuHBjFbiVZEofOGk1QhwzrZJsEuFlV9r/i3ipDmkShs5rUUeVdbfwFNQsUbe76WyGyw9UUSRQ4azSpWka12Qeq8Ta962HFDqssjSV01mhStZZ3dZnr5oHGm7JH3V5lSKPQWaNJNTOsiR+rVjRJiV5TiOBWFtNEIgerSTWb4nrMqR0AN7vrJ4XsbldZLFHgjBZS7Sjv6rB3qjV1dFf2i1tZZWkSwllNUC0r747nJ6pN7awqu68Abq8W0yQKnDWaFEi1ssTH8hfUKqBgXXbdpyh01mhS7e/eHWemVdvai7su2i7eASh2K0mM6k7t4sWBygozo1o4WHdN7GC1IJHQGa06lmwYv/uhsgJSrVpZkrJTNkZ1vLZh/G57+wRgFajWdvNyQN0nG8bZpqgAwSzSqsUpKrvjk/SB+2TD8QShJdXyJu2MGfWF7qRgXXbDRA1vnZZd4MMBBrh1F9hBBh0dbSu3QCGyQ2M+6WEG2OmBtrKYJnHorAkTiQEri4b4RA12CrZPk8U0iQIHo0n9YNQQuOEGmHh7K1cyjSV01mhSB7bbZmQ05EDWQTRBHTlpxlgxqN02YaM5BHETJopF9aJ+K80jsNu6+UBxaVi3lNgE43ptjGLUoFZOsapd1GesmFXH25pEil9tXItIsaybHq0YK6YltzhKsQkU3+rw6nBFahTr6ujqMMVqTIp7TXT1Y8Uq0oqDTZTtnrLbTENRXCw2SJHdTyfOKGYmLUZInfx/8v/J/yf/n/xfUwBWUDggZBIAABBuAJ0BKlgBNQE+kUSdS6WjoyKjsKo4sBIJY27PfD3SSyKUjHn6I/9g+wnp1XR9XeHo4f/o+c8+z/svWv5h/PG/dj1H/tl6znpI/wG+5eif50XrR/4/0x7lbtfWHf5TxH7Mfb7NRhu8olZENf8uT5T92PZPIW8X7T682rzd4lnfXm1ebvEs7682rzd4lnfXm1ebvEs7682cCffkKj/0t06JEArP+RShHR4v2n15tXgarCFNF1ibE7/5+j/5Eo0NQ71kF8hWki+N0nFn4jermljPNs27mUeI5uTXaZCzZcqM9AZ31VHNeqhmXSx23Z8dlZD8ZLgOnx2CihtqzmhwsRfw/eimox4+fV6eEJSdr6tkyKOTLOnvmStQTaPNLcVmD06I09Zy8EdqnfHY/1ThdMVchaQQV9Czk/i57RyGMsSMid4Y5ZOoPpStMmO8jZqSCSIW4/wUhOsJe0AZ6WDNd9x5zXViysoni6q6+atjpl5A4ZI62UyqCiLbYjoKnTB7xff5zuxt3G0QiDSsrujnM51e8UgSobndmKsG7c87GZH5co4+UWdNOodvlgpKvlr7hqlF1cRHNor9k7pt9pIiAEYeVwoSNvwFplyxFu65+r+nXIwUbLR8xF9LPeZ2oTVkeqIkflO/9CzgZ7RhB6LLduY5ORVBLovgTZu3/QSKkDFShUs2FVKnB9lmICdwUzmUNmRSe0Ga6FsxyfdT/gQrVJY2mpe+QnRjhSbGOZcUpMsoVwsFkw3byx7SAunIxFL1TxePhC6fUfxCcdqHww8KiOjXdEXZJcLI7GUTe0nviV7Z/qFPWXNlIDS/JIszeV7nM8HpdPmdLEDK+MYaGUEL/wZsFblu2q1mU0SC8gaf+iYsqqUR2ld74gez3le4VQSRtOB9B/YLTsZfqcOjzW3/m6EHXNHKBFFsVFTpZmn4qMgVjJwf9P8cnItR6Fq7fOAslEO4e30AHZzsht3FP8GTJU1rAoYDv8k41Bg3f/c3i4TQIPpSjW5RcJV8JNBN1eawaXo9ZbN31YZSVQw8Ops/2bVbq9/s1Q1s9PunHUU+2ut0DDvCY/6iQ+2YthZQQ1GyDGUCpfQ3eJaANqy/p8rAbnON/3LplJEi/afXm1ebqaKUavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8LgAA/vvbO+3sHnP/IdkpDnbh3TvfXYAB5WzWlLuMAAKgIwAABAsU14K4XnDjt+rrb+D2R0m2FHkZuG6rmV+6YFzI/Ls2EEst1oHCIDkSkVmJwdSN9EIhanLXNhfekK1Iqx1IvcdGU5Q6TPJ89BkFWsH4P6w+AEaw8K0furvg3C+MmCPSi39Pk9u+gxEye7RHQx3e7sJBZSlSVpmGjma6gAJaYWfuB78fJroBwKlaJ0mMNd4azeh/Wa3EotpAl4KB176JCBofnI39MAuoo85WpbZ9xjxDQYsob4zBW0Iz7pbo/HiIkhee6DRpkJIr6wM5Ky5hmYHwSSvj+7kH1iIOCj6tAbabEAQCNQeVRTORaxyDAr7/GtCLaDWcs/7oXWIweUfirzVQ7ThYMPR9h8IVWCJYs5dn/dfu56GMoeSVL3vuDT8eOkQLrvbk7h5UKTxL57kgt6N+KFtV/n39fyoZGVhshZgWcPcsGXFGajPTSTOUlsZ/vewlCzkR+ALaPvm4/+MGM7HT0B28wt+z1iFe68rT2C3wDvd2pkd4kwT1ZXXhgCaP8IHGlcRLWtK0/KEVZ1ugqmbOqoEiTwSRYuEmJ28JT53qpD9rvw4bWSCRVmp6vS1i+OAvuw7ChW+RkrYvU/D24QzjPCHYio+CkhfgXvVO46aZf7HZ/APLJHJJzVT1j4OLgCKZ/+Ak1e0EKDPh4rTJsaT3s8WtTy5XH+4Ar6xg6I3WtxR+uRF26LUw4qh9rDq9Tp7vxD5TzVPNkmLExWNGgR6eVQ2GooMqhjhD639FbbGvPBA3ybzgr7n5Ci9s6Wz++LCWHCwK1Z6DT19WpGRfIsCWCkYCRTKxUtMZSIT8ucXjOXLVCOftRCEKFT4b6uZ65Ag8l6ZwGA9vBgVH4yjz3rhaTMXAVN8ZtMN+Peal4ByXEaarmBZHcjINdGAHfq/Oon/WJPDl1La0sZ/z7NnwnicGzYjOu/+E9PY1uiQDBcmka2MieoJp36IbjfvQLURbGUMf1OX6zyYoVSC8wZfYlktDUkqM9WhYE1c4nOaHYtnrCuOiEPng8J2pRFr5NeR4lIsiH6Z4wQDzOZbpOftV8uUhurbz6TTohG7rdsM3Jkpsl7NlcnTwTwO/wnsAVgCAexRRUegE8kK7ZBn9DYsKHGisummSWwi9LxZqPCQbjrkXNuWFu1L7NvVwRU/SFadxboS/0qrszn85S44QntIQB/YirAkqb9zp8cndyKm1JSLqd+B0ytCADHpsJ5tIRIRlqWiK5Z3mRpnoZ41mgopa3mx70p3vl/4dB9U/HbNxwGMVZwzqOJ1gtobOcYv4N4GE/9/PioYppduKcYUonHSe4/3qQSrq/d8AMj5fRlAEPwNdWGsNJAtAr1IMC662V61JfHP8ENdFsTmbbcZ6QaXRBgGH3IZfWJHt4aQK/pLXOPF01GqrLm+KfuiYRg9SdihgVqnSnWiOz5QJcoQdFYrwvdJTA3IDamLNiUdka/z2iBOCQPtqrUEsiyPhVyMRGkBWUEXUS8aojpuiFrHqEeODgQNvYmA4SrXVoiOOIDOC57cNsP1/N9GN0jE8bIPAwth4nEv26clftxesbpcO5CbbOPhk+4teaVMLwqEMkQ9YcYDhAn1UQm/P3PukbCh6OquvhSA8q9YvD80J2p4qMfqHujubJy+pt0+o+mrxgsrcdHWv4sSkPBRdjMUrDPZLvblU1bnNHivzRvFcaJLGb6GIGfB6O/ZKp1jWBT6xmKAeZWVJ8oOesDrGaYK0ecPFQz1Kuy5kORX5BCtS2qmcP0EA33Ytva164kYbJLPQqbkznx1MLByN1pC1Ik6afVhXF4Md0RY17gT2UjnSVYPmF/zPGsMRWvrtiSQRKgwUoxqgtEcfS49Laz2JMIExQJFfV3WrYgNICYlRLAYmV9ubjRL8xrrPJOxg49X/PpZMbndQYIsESJm+IzeXnBMrbIsdeaxHjknEDGyHgeDWKezmv60AaqcaQzwPQfmnJvj9esFQK1oEZOAhVQaNG82I3acJJ+sM/lNmSPy/iKzYyMHrpWAtqMiD/VbxffYGWdktLKJ6DnzcchVzvgkPeJ/AEYySCs/AJwxoZMCEcYNAyPbSOeIhrSZ7oiwkixKsfLQ+uMIecj3dpwHtZBxKdw3H1agydVHgrcDu2Q1YIvCW0l+YCBgLgVvKCQiJZrmECgugPITyU+7JPijpmGi92sUJDZaFi8AXbjw0XOTvpGBzk6SOQWbZRs0FTUb1nAizq0zZPFxm8JaADC02BSHVQUCf4x6YZrJ5DIRFyxt9Jv0pVBaCRRKAOO3/X/UVpzCGUfhHdRWh93s5eWczTMyYN1GHakkA3lEvMckdz9VSeaYVHWgbgR/SsKqHaFBCMqYnbGNHYulIdrf/P7sy9/cTd8B+MlqRCwfCgJvjATta1MfBNGzKLERRjPb2v9em/Re5JPZCtt6Yyn8Vql2CdRL+7z8oYczxwxTA3/QfjLD78pZ6RpVkzBIHLkMQf93Il10CGh5IawlF+d1dkgebUndWPL12ydwc0PVR3b0c0e8OlgN2vakaDpQEKqKPiIukcoIpAlgclG5W5zjdiPbIbF0uWeULQsvMvI9c5T6P9sRjv+FZz51d19aWCdbLU/fCFJ53MbT0+42wMhRj23n/iD+LlPYOSgdtfo9WiiRfl2Mt//MJzOsz8sFwteelxQEjbCqNE0JmRx+KBefHBDl8C78WHTaIIzN5gmbehbTat1ShJBF5hxBrYRIh2z4mEop3uaCco1qsvq44TnxUsBnbY1n8ApxtHL+I927cLgdz4OLFqdmFjrJQrQi6drim9ZhKNKblZRY6Nm6Xxw8AG31CjKw5Usm7EwX3dSh1ZsqmnI5qEjffuCX44g/SOzQqJVR7Fdb8JeHLF12m738y3FF8Mzs16Oc/2LwNUHONGYkVtr+DKAaGl5Hj/eNrGgDwmZkDKFiMx6NDt1/fJ5DJujHYvfqnc306fF1hqAKGhRaX6mkQAFTvdvjKAE6D2qcOgzuA8OW9wA45u64gX+kFxY0AS6eqgGGChj5Z/p1Hbf5M9a/gKoaZ7B+Tcnn9Qe9zU00N7zH8lyWGJ2TkauTtQK1NiJyMXrdamQmMdapyOTWCQuByf81ArLtC/bleHgTwNM7WM3WcgxuY0K+tM/GlMB3o4c6KXobq+gT4beks4Z0bY30MI8bvJO+Oxwdaw3i25dbrmfZF24MJSjUBqBgpoCPEKbOE1B0kKa0DivLYosxKI+LGXKRTQfmdgrSTks4ug6urIa/bOM7wPLDJGRj0VqBthQyVN68yQX1AJQMB25WapBsPo/4lBu682ATODwomExed5azFmo1uS1oR8yjjVguvGk0aXC8rbqCnjsujXvMr17GDqUjHgKsOJdqUSlNjxu2YRrqyCQqeDKyGUDulKhhtJLO/4E34Re0lA8JnM1OWPAEB4UWa3wXhCn7tYRx/NdlCvHEXRgHuU1x9vbx8wJIw9x9YMaMqgUz6XhCa9CHfb8w6Zw2YtPEVQ9evaBn1Z9D6FOmIHGya7+VzN5NHL4+s6mM/hIagdT2DfDbr34+S/pRYO0OTY2kNLBk7H0A60bCCr+dUfc3D4aiAWmcyJy06sV91x0NyHNPAl1cPP9yMhUpsXuSRb8G+rZqQPmfsDeGv8OazizGLy6WH/kvfkOHUSaX/OhgunoJ9VeEOXibNKy82aKQbeO0Ha7UVsW4XgQgLdDlwVIalDeTNcwE6nmQ9txE1hmG+EiJvFI4qtHDI9DsVu9oD7B+cGL3mjjXVHfSwugESEFWLTK5H6wNsIpftM4OHEYWyaeUeZ7JJE1eDJQ9Zf+5vZtZh3myMRpA2qFbL0Z1XGffNF+rkMit+fjRpAjeYiJtbPXt1caN1R1abhCgztNuwREE8wupCjEm+NE+bKPiOqlykwKJ3P/3sgKhNseT14hUvrpWzccNtRuPDNOunCTAmbmLE7WagpIdGYD1/+3+5jJokGgYMTKPDtGcyL2UcCJbWhsr29Eb7GipPp2p1cQ+vehDwOEv3Zy1JrpGaND/5dRLHQTBHj6cgEpGQusdOTAdDDuz3bIG0bjvrZlGPLGuLFq+K3yADMtsjQQcuZzrWixor2wnfJtn15LHqkqakk4OIH4/MIXBGBWj9Ew3Y10HyG9ozFVfGMMh335PDmgh/DSu4AxehAoAqANVIJksDFYdub1wWo8yYh9Bj1+NUJynOVXk1qJZ8+B0QUVbJwcTOnM/fCsUt191Vky7IpF3Ar+L7eVM3PjlEJmI9gteoSeJw1gQCSMn/vaR0rn0ffVV6ozTkXntDBDGW52GLCy/g/BPvfHCJ+mj59BncgboXK3Fld7/4HRTyIAexwL2dRVvPHlg99XnjymrE4zUzJo+KycEBb83WPH/fOR5kEC3NqBEAmTeVYw8LJ+ocQMM2lE8kDjcyA12K+DfSgIhetLBZ/x7e4hD9A4gQgdFg8Ooa3bg/sPXFSwRjyiDQM/CZXMUaKtADyJ4CAx3/pYYzgOk2cLMZz5FMWFjbA/Q1LtDuQH7DkigDvOhb4Fmu7+H2b5J+4EKM8Yq+n06V/1tcpC4eeFk9xnMQluO1WqGwpuaoJCMP6qbU+yD7yNgJf9w5qrzxpGutPV9IhfsC4fqgGPBE3L7RVEgzeANeYJVlr36U8sZvtXG4PB4Hja+RPLUAO+eRxzRZy42p9LU83OprZBeO7230dieMH5Zoi0kR9fsCoTSMaa2nRhSiCb2tdJ4Z1lzYagv4odW8u2KOdSTmmMx6fuTxSqnpbix/IM1tyQ87iEvmLgKbKxxoq7jMWMGVKnT3/sYDe1Gh7sGkfO8X+SU8A6uPjQ5O60Qodizt/a/N+H663+1H+KNqX9JG3V8a4DIr7ksqFOrG4vcwrmMfGNKzZEqY3YdfhK186TnkB4qAAAAAAAAUL6grl/NBh0xCf2j3r4dOzXRh7I2aCCSe5vWpAob7xObCtSNwZb2vrH2mGahZz5v19m0OpjZMD/eZuwAQT9lzRvhNLg3peoff6JaWOXAZuxTigRvsWkffJzmaqRu1XRn2I5Q8LDKQ102v7qO1JV8AAAAAAAAAAAAAAAAAAAA=", Td = ({ freeGift: n, product: t, variantImage: r, getMediaImageUrl: a }) => n.mediaImageGID ? a(n.mediaImageGID) : n.giftType === "shipping" ? Go : r || (t == null ? void 0 : t.image), Fo = (n, t, r) => {
    var a, s;
    const o = (s = (a = t.variantGIDs) == null ? void 0 : a.map(Ut)) != null ? s : null;
    return n.variants.filter((c) => (r || c.availableForSale) && (!o || o.includes(c.id)));
  };
  var Fb = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), Ob = $('<div class="kaching-bundles__free-gift__image"></div>'), Lb = $('<span class="kaching-bundles__free-gift__text"><!></span>'), Eb = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), jb = $('<div><div class="kaching-bundles__free-gift__main"><!> <div class="kaching-bundles__free-gift__content"><!> <!></div></div> <!></div>');
  function Vd(n, t) {
    at(t, !0);
    const r = () => Ve(b, "$config", s), a = () => Ve(m, "$formatPrice", s), [s, o] = kt();
    let c = k(t, "dealBlock", 7), l = k(t, "freeGift", 7), i = k(t, "product", 7), u = k(t, "dealBarSelected", 7, !1), g = k(t, "collapsed", 7, !1), v = k(t, "sets", 7), p = k(t, "mainProductVariantId", 7), f = k(t, "onChange", 7);
    const b = yn(), y = Tt(), m = vn(), z = Vn(), C = d(() => {
      if (i()) return { ...i(), variants: Fo(i(), l(), r().preview) };
    });
    let A = Oe(void 0);
    const O = d(() => (function(j, D) {
      if (j !== void 0) return j;
      if (D != null && D.availableForSale && D.variants.length > 0) return D.variants[0].id;
    })(e(A), e(C))), V = d(() => e(C) && e(O) ? e(C).variants.find((j) => j.id === e(O)) : void 0), R = d(() => {
      var j;
      return Td({ freeGift: l(), product: i(), variantImage: (j = e(V)) == null ? void 0 : j.image, getMediaImageUrl: Ve(z, "$getMediaImageUrl", s) });
    }), U = d(() => l().quantity * v()), G = d(() => (function(j, D) {
      if (!D) return 0;
      let se = D.price;
      return D.compareAtPrice && j.useProductCompareAtPrice && (se = Math.max(se, D.compareAtPrice)), se * e(U);
    })(c(), e(V))), H = d(() => qo({ dealBlock: c(), imageSize: l().imageSize })), I = d(() => _n({ priceFormatter: a(), product: i(), totalFullPrice: e(G), totalDiscountedPrice: 0, quantity: e(U), unitQuantity: e(V) ? Ir([{ variant: e(V), quantity: e(U) }]) : null })), T = d(() => l() ? e(I)(Ve(y, "$translate", s)(l().text)) : ""), ue = d(() => {
      var j;
      if ((j = i()) != null && j.url) return e(O) ? `${i().url}?variant=${e(O)}` : i().url;
    });
    function re(j) {
      ee(A, j, !0);
    }
    let P;
    br(() => {
      l().productGID, ee(A, void 0), P = void 0;
    }), br(() => {
      if (c().disableVariantOptionSync || !p() || !e(C) || p() === P) return;
      const j = P;
      P = p(), e(C).variants.some((D) => D.id === p()) && (e(A) !== void 0 && e(A) !== j || ee(A, p(), !0));
    }), tt(() => {
      var j;
      e(V) && ((j = i()) != null && j.availableForSale) && e(U) && Xt(() => {
        f()({ variant: e(V), product: i(), fullPrice: e(G) });
      });
    });
    const S = d(() => !(!i() || i().availableForSale && Fo(i(), l(), !1).length !== 0));
    var B = { get dealBlock() {
      return c();
    }, set dealBlock(j) {
      c(j), _();
    }, get freeGift() {
      return l();
    }, set freeGift(j) {
      l(j), _();
    }, get product() {
      return i();
    }, set product(j) {
      i(j), _();
    }, get dealBarSelected() {
      return u();
    }, set dealBarSelected(j = !1) {
      u(j), _();
    }, get collapsed() {
      return g();
    }, set collapsed(j = !1) {
      g(j), _();
    }, get sets() {
      return v();
    }, set sets(j) {
      v(j), _();
    }, get mainProductVariantId() {
      return p();
    }, set mainProductVariantId(j) {
      p(j), _();
    }, get onChange() {
      return f();
    }, set onChange(j) {
      f(j), _();
    } }, q = Te(), Y = _e(q), Q = (j) => {
      var D = jb();
      let se;
      var te = w(D), X = w(te);
      {
        let J = d(() => u() ? e(ue) : void 0);
        rr(X, { get url() {
          return e(J);
        }, class: "kaching-bundles__free-gift__link", children: (ae, ce) => {
          var me = Te(), be = _e(me), Se = (pe) => {
            var Z = Fb();
            ke(() => {
              Ie(Z, "src", e(R)), Ie(Z, "height", l().imageSize || 0);
            }), h(pe, Z);
          }, L = (pe) => {
            var Z = Ob();
            let fe;
            ke((xe) => fe = Ft(Z, "", fe, xe), [() => {
              var xe, $e;
              return { height: `${(xe = l().imageSize || 0) != null ? xe : ""}px`, width: `${($e = (i() || l().mediaImageGID) && l().imageSize || 0) != null ? $e : ""}px` };
            }]), h(pe, Z);
          };
          F(be, (pe) => {
            e(R) ? pe(Se) : pe(L, !1);
          }), h(ae, me);
        }, $$slots: { default: !0 } });
      }
      var ne = E(X, 2), he = w(ne), M = (J) => {
        var ae = Te();
        lt(_e(ae), () => e(T), (ce) => {
          var me = Lb();
          Ne(w(me), () => e(T)), x(me), h(ce, me);
        }), h(J, ae);
      };
      F(he, (J) => {
        e(T) && J(M);
      });
      var W = E(he, 2), de = (J) => {
        Wn(J, { get product() {
          return e(C);
        }, get selectedVariantId() {
          return e(O);
        }, onChange: re });
      };
      F(W, (J) => {
        u() && e(C) && e(C).variants.length > 1 && e(O) && J(de);
      }), x(ne), x(te);
      var ge = E(te, 2), N = (J) => {
        var ae = Te();
        lt(_e(ae), () => e(G), (ce) => {
          var me = Eb();
          Ne(w(me), () => a()(e(G))), x(me), h(ce, me);
        }), h(J, ae);
      };
      F(ge, (J) => {
        l().showPrice && e(G) > 0 && J(N);
      }), x(D), ke((J) => {
        se = Wt(D, 1, "kaching-bundles__free-gift", null, se, J), Ie(D, "data-free-gift-id", l().id), Ft(D, e(H));
      }, [() => ({ "kaching-bundles__free-gift--out-of-stock": r().preview && e(S) })]), h(j, D);
    };
    F(Y, (j) => {
      !g() && (!l().productGID || e(V) || r().preview && e(S)) && j(Q);
    }), h(n, q);
    var oe = it(B);
    return o(), oe;
  }
  Je(Vd, { dealBlock: {}, freeGift: {}, product: {}, dealBarSelected: {}, collapsed: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var Rb = $('<img alt=""/>'), Nb = $('<div class="kaching-bundles__free-gift-summary__images"></div>'), Qb = $('<span class="kaching-bundles__free-gift__text"><!></span>'), Wb = $('<div class="kaching-bundles__free-gift kaching-bundles__free-gift-summary"><!> <!></div>');
  function Ad(n, t) {
    at(t, !0);
    const [r, a] = kt();
    let s = k(t, "dealBlock", 7), o = k(t, "images", 7), c = k(t, "count", 7), l = k(t, "title", 7), i = k(t, "imageSize", 7);
    const u = Tt(), g = vn(), v = d(() => _n({ priceFormatter: Ve(g, "$formatPrice", r), product: void 0, totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null, freeGiftsCount: c() })(Ve(u, "$translate", r)(l()))), p = d(() => qo({ dealBlock: s(), imageSize: i() }));
    var f = { get dealBlock() {
      return s();
    }, set dealBlock(O) {
      s(O), _();
    }, get images() {
      return o();
    }, set images(O) {
      o(O), _();
    }, get count() {
      return c();
    }, set count(O) {
      c(O), _();
    }, get title() {
      return l();
    }, set title(O) {
      l(O), _();
    }, get imageSize() {
      return i();
    }, set imageSize(O) {
      i(O), _();
    } }, b = Wb(), y = w(b), m = (O) => {
      var V = Nb();
      Gt(V, 21, o, jr, (R, U) => {
        var G = Rb();
        let H;
        ke((I) => {
          Ie(G, "src", e(U).source), Ie(G, "height", i() || 0), H = Wt(G, 1, "kaching-bundles__free-gift-summary__image", null, H, I);
        }, [() => ({ "kaching-bundles__free-gift-summary__image--no-border": !e(U).bordered })]), h(R, G);
      }), x(V), h(O, V);
    };
    F(y, (O) => {
      o().length && O(m);
    });
    var z = E(y, 2), C = (O) => {
      var V = Te();
      lt(_e(V), () => e(v), (R) => {
        var U = Qb();
        Ne(w(U), () => e(v)), x(U), h(R, U);
      }), h(O, V);
    };
    F(z, (O) => {
      e(v) && O(C);
    }), x(b), ke(() => Ft(b, e(p))), h(n, b);
    var A = it(f);
    return a(), A;
  }
  Je(Ad, { dealBlock: {}, images: {}, count: {}, title: {}, imageSize: {} }, [], [], !0);
  var Ub = $('<div class="kaching-bundles__free-gift__divider"></div>'), Hb = $("<!> <!>", 1), Zb = $("<!> <!>", 1);
  function Li(n, t) {
    at(t, !0);
    const r = () => Ve(b, "$config", a), [a, s] = kt();
    let o = k(t, "dealBlock", 7), c = k(t, "freeGifts", 7), l = k(t, "otherProducts", 7), i = k(t, "dealBarSelected", 7), u = k(t, "freeGiftsSummary", 7), g = k(t, "sellingPlan", 7), v = k(t, "sets", 7, 1), p = k(t, "mainProductVariantId", 7), f = k(t, "onChange", 7);
    const b = yn(), y = Vn();
    let m = Oe(ut({})), z = d(() => c().filter((T) => !T.applyOnlyForSubscriptions || g()));
    const C = d(() => e(z).flatMap((T) => {
      const ue = T.productGID ? l().find((P) => P.id === Ut(T.productGID)) : void 0;
      if (!r().preview && T.productGID && !(ue != null && ue.availableForSale)) return [];
      const re = ue && !r().preview ? Cr(ue) : ue;
      return { freeGift: T, product: re };
    })), A = d(() => {
      var T, ue;
      return (ue = (T = u()) == null ? void 0 : T.enabled) != null && ue;
    }), O = d(() => !i() && e(A) && e(C).length >= 2), V = d(() => {
      var T, ue;
      return (ue = (T = u()) == null ? void 0 : T.showImages) != null && ue ? e(C).flatMap(({ freeGift: re, product: P }) => {
        const S = ((q, Y, { preview: Q, mainProductVariantId: oe, disableVariantOptionSync: j }) => {
          if (!q) return;
          const D = Fo(q, Y, Q);
          if (D.length !== 0) {
            if (!j && oe) {
              const se = D.find((te) => te.id === oe);
              if (se) return se;
            }
            return D[0];
          }
        })(P, re, { preview: r().preview, mainProductVariantId: p(), disableVariantOptionSync: o().disableVariantOptionSync }), B = Td({ freeGift: re, product: P, variantImage: S == null ? void 0 : S.image, getMediaImageUrl: Ve(y, "$getMediaImageUrl", a) });
        return B ? [{ source: B, bordered: re.giftType !== "shipping" }] : [];
      }) : [];
    });
    tt(() => {
      (function(T, ue) {
        if (!c().length) return;
        const re = T.filter((P) => P.id in ue).map((P) => ({ id: P.id, variant: ue[P.id].variant, product: ue[P.id].product, quantity: P.quantity * v(), fullPrice: ue[P.id].fullPrice, showPrice: P.showPrice, includeInCompareAt: P.includeInCompareAt === !0, applyOnlyForSubscriptions: P.applyOnlyForSubscriptions }));
        f()(re);
      })(e(z), e(m));
    });
    var R = { get dealBlock() {
      return o();
    }, set dealBlock(T) {
      o(T), _();
    }, get freeGifts() {
      return c();
    }, set freeGifts(T) {
      c(T), _();
    }, get otherProducts() {
      return l();
    }, set otherProducts(T) {
      l(T), _();
    }, get dealBarSelected() {
      return i();
    }, set dealBarSelected(T) {
      i(T), _();
    }, get freeGiftsSummary() {
      return u();
    }, set freeGiftsSummary(T) {
      u(T), _();
    }, get sellingPlan() {
      return g();
    }, set sellingPlan(T) {
      g(T), _();
    }, get sets() {
      return v();
    }, set sets(T = 1) {
      v(T), _();
    }, get mainProductVariantId() {
      return p();
    }, set mainProductVariantId(T) {
      p(T), _();
    }, get onChange() {
      return f();
    }, set onChange(T) {
      f(T), _();
    } }, U = Zb(), G = _e(U), H = (T) => {
      {
        let ue = d(() => {
          var P, S;
          return (S = (P = u()) == null ? void 0 : P.title) != null ? S : "";
        }), re = d(() => {
          var P, S;
          return (S = (P = e(C)[0]) == null ? void 0 : P.freeGift.imageSize) != null ? S : 30;
        });
        Ad(T, { get dealBlock() {
          return o();
        }, get images() {
          return e(V);
        }, get count() {
          return e(C).length;
        }, get title() {
          return e(ue);
        }, get imageSize() {
          return e(re);
        } });
      }
    };
    F(G, (T) => {
      e(O) && T(H);
    }), Gt(E(G, 2), 19, () => e(C), ({ freeGift: T, product: ue }) => T.id, (T, ue, re) => {
      let P = () => e(ue).freeGift;
      var S = Hb(), B = _e(S);
      Vd(B, { get dealBlock() {
        return o();
      }, get freeGift() {
        return P();
      }, get product() {
        return e(ue).product;
      }, get dealBarSelected() {
        return i();
      }, get collapsed() {
        return e(O);
      }, get sets() {
        return v();
      }, get mainProductVariantId() {
        return p();
      }, onChange: (Q) => (function(oe, j) {
        j.variant ? e(m)[oe] = j : delete e(m)[oe];
      })(P().id, Q) });
      var q = E(B, 2), Y = (Q) => {
        h(Q, Ub());
      };
      F(q, (Q) => {
        !e(O) && e(re) < e(C).length - 1 && Q(Y);
      }), h(T, S);
    }), h(n, U);
    var I = it(R);
    return s(), I;
  }
  function qd(n, t = "body") {
    let r;
    async function a(s) {
      if (typeof (t = s) == "string") {
        if (r = document.querySelector(t), r === null && (await ts(), r = document.querySelector(t)), r === null) throw new Error(`No element found matching css selector: "${t}"`);
      } else {
        if (!(t instanceof HTMLElement)) throw new TypeError(`Unknown portal target type: ${t === null ? "null" : typeof t}. Allowed types: string (CSS selector) or HTMLElement.`);
        r = t;
      }
      r.appendChild(n), n.hidden = !1;
    }
    return a(t), { update: a, destroy: function() {
      n.parentNode && n.parentNode.removeChild(n);
    } };
  }
  Je(Li, { dealBlock: {}, freeGifts: {}, otherProducts: {}, dealBarSelected: {}, freeGiftsSummary: {}, sellingPlan: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var Jb = $('<div hidden=""><!></div>');
  function Ml(n, t) {
    at(t, !1);
    let r = k(t, "target", 12, "body");
    var a = { get target() {
      return r();
    }, set target(o) {
      r(o), _();
    } };
    (function(o = !1) {
      const c = hn, l = c.l.u;
      if (!l) return;
      let i = () => cu(c.s);
      if (o) {
        let u = 0, g = {};
        const v = cl(() => {
          let p = !1;
          const f = c.s;
          for (const b in f) f[b] !== g[b] && (g[b] = f[b], p = !0);
          return p && u++, u;
        });
        i = () => e(v);
      }
      l.b.length && br(() => {
        Mu(c, i), Rs(l.b);
      }), tt(() => {
        const u = Xt(() => l.m.map(Yg));
        return () => {
          for (const g of u) typeof g == "function" && g();
        };
      }), l.a.length && tt(() => {
        Mu(c, i), Rs(l.a);
      });
    })();
    var s = Jb();
    return bu(w(s), t, "default", {}), x(s), uo(s, (o, c) => qd == null ? void 0 : qd(o, c), r), h(n, s), it(a);
  }
  Je(Ml, { target: {} }, ["default"], [], !0);
  var Gd = !1;
  const Fd = class extends Date {
    constructor(...n) {
      super(...n), xt(this, Os), xt(this, tl, Oe(super.getTime())), xt(this, Gl, /* @__PURE__ */ new Map()), xt(this, Fs, jt), Gd || cn(this, Os, dc).call(this);
    }
  };
  tl = /* @__PURE__ */ new WeakMap(), Gl = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ new WeakMap(), Os = /* @__PURE__ */ new WeakSet(), dc = function() {
    Gd = !0;
    var n = Fd.prototype, t = Date.prototype, r = Object.getOwnPropertyNames(t);
    for (const a of r) (a.startsWith("get") || a.startsWith("to") || a === "valueOf") && (n[a] = function(...s) {
      if (s.length > 0) return e(ye(this, tl)), t[a].apply(this, s);
      var o = ye(this, Gl).get(a);
      if (o === void 0) {
        const c = jt;
        Qn(ye(this, Fs)), o = d(() => (e(ye(this, tl)), t[a].apply(this, s))), ye(this, Gl).set(a, o), Qn(c);
      }
      return e(o);
    }), a.startsWith("set") && (n[a] = function(...s) {
      var o = t[a].apply(this, s);
      return ee(ye(this, tl), t.getTime.call(this)), o;
    });
  };
  let Oo = Fd;
  var Yb = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"], Kb = ["difference", "intersection", "symmetricDifference", "union"], Od = !1;
  const Lo = class extends Set {
    constructor(n) {
      if (super(), xt(this, Fl), xt(this, nl, /* @__PURE__ */ new Map()), xt(this, Zr, Oe(0)), xt(this, Ka, Oe(0)), xt(this, Ls, Er || -1), n) {
        for (var t of n) super.add(t);
        ye(this, Ka).v = super.size;
      }
      Od || cn(this, Fl, hc).call(this);
    }
    has(n) {
      var t = super.has(n), r = ye(this, nl), a = r.get(n);
      if (a === void 0) {
        if (!t) return e(ye(this, Zr)), !1;
        a = cn(this, Fl, gc).call(this, !0), r.set(n, a);
      }
      return e(a), t;
    }
    add(n) {
      return super.has(n) || (super.add(n), ee(ye(this, Ka), super.size), pr(ye(this, Zr))), this;
    }
    delete(n) {
      var t = super.delete(n), r = ye(this, nl), a = r.get(n);
      return a !== void 0 && (r.delete(n), ee(a, !1)), t && (ee(ye(this, Ka), super.size), pr(ye(this, Zr))), t;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = ye(this, nl);
        for (var t of n.values()) ee(t, !1);
        n.clear(), ee(ye(this, Ka), 0), pr(ye(this, Zr));
      }
    }
    keys() {
      return this.values();
    }
    values() {
      return e(ye(this, Zr)), super.values();
    }
    entries() {
      return e(ye(this, Zr)), super.entries();
    }
    [Symbol.iterator]() {
      return this.keys();
    }
    get size() {
      return e(ye(this, Ka));
    }
  };
  nl = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Ka = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), Fl = /* @__PURE__ */ new WeakSet(), gc = function(n) {
    return Er === ye(this, Ls) ? Oe(n) : va(n);
  }, hc = function() {
    Od = !0;
    var n = Lo.prototype, t = Set.prototype;
    for (const r of Yb) n[r] = function(...a) {
      return e(ye(this, Zr)), t[r].apply(this, a);
    };
    for (const r of Kb) n[r] = function(...a) {
      e(ye(this, Zr));
      var s = t[r].apply(this, a);
      return new Lo(s);
    };
  };
  let Ld = Lo;
  const Ed = class extends Map {
    constructor(n) {
      if (super(), xt(this, pa), xt(this, ga, /* @__PURE__ */ new Map()), xt(this, ha, Oe(0)), xt(this, $a, Oe(0)), xt(this, Es, Er || -1), n) {
        for (var [t, r] of n) super.set(t, r);
        ye(this, $a).v = super.size;
      }
    }
    has(n) {
      var t = ye(this, ga), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return e(ye(this, ha)), !1;
        r = cn(this, pa, rl).call(this, 0), t.set(n, r);
      }
      return e(r), !0;
    }
    forEach(n, t) {
      cn(this, pa, Ol).call(this), super.forEach(n, t);
    }
    get(n) {
      var t = ye(this, ga), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return void e(ye(this, ha));
        r = cn(this, pa, rl).call(this, 0), t.set(n, r);
      }
      return e(r), super.get(n);
    }
    set(n, t) {
      var r, a = ye(this, ga), s = a.get(n), o = super.get(n), c = super.set(n, t), l = ye(this, ha);
      if (s === void 0) s = cn(this, pa, rl).call(this, 0), a.set(n, s), ee(ye(this, $a), super.size), pr(l);
      else if (o !== t) {
        pr(s);
        var i = l.reactions === null ? null : new Set(l.reactions);
        (i === null || !((r = s.reactions) != null && r.every((u) => i.has(u)))) && pr(l);
      }
      return c;
    }
    delete(n) {
      var t = ye(this, ga), r = t.get(n), a = super.delete(n);
      return r !== void 0 && (t.delete(n), ee(ye(this, $a), super.size), ee(r, -1), pr(ye(this, ha))), a;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = ye(this, ga);
        for (var t of (ee(ye(this, $a), 0), n.values())) ee(t, -1);
        pr(ye(this, ha)), n.clear();
      }
    }
    keys() {
      return e(ye(this, ha)), super.keys();
    }
    values() {
      return cn(this, pa, Ol).call(this), super.values();
    }
    entries() {
      return cn(this, pa, Ol).call(this), super.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return e(ye(this, $a)), super.size;
    }
  };
  ga = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), Es = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakSet(), rl = function(n) {
    return Er === ye(this, Es) ? Oe(n) : va(n);
  }, Ol = function() {
    e(ye(this, ha));
    var n = ye(this, ga);
    if (ye(this, $a).v !== n.size) {
      for (var t of a1(Ed.prototype, this, "keys").call(this)) if (!n.has(t)) {
        var r = cn(this, pa, rl).call(this, 0);
        n.set(t, r);
      }
    }
    for ([, r] of ye(this, ga)) e(r);
  };
  let Eo = Ed;
  class Xb {
    constructor(t, r) {
      xt(this, Ll), xt(this, El), Ct(this, Ll, t), Ct(this, El, Dc(r));
    }
    get current() {
      return ye(this, El).call(this), ye(this, Ll).call(this);
    }
  }
  Ll = /* @__PURE__ */ new WeakMap(), El = /* @__PURE__ */ new WeakMap();
  const ef = /\(.+\)/, tf = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
  class nf extends Xb {
    constructor(t, r) {
      let a = ef.test(t) || t.split(/[\s,]+/).some((o) => tf.has(o.trim())) ? t : `(${t})`;
      const s = window.matchMedia(a);
      super(() => s.matches, (o) => (function(c, l, i, u = {}) {
        var g = lo(l, c, i, u);
        return () => {
          c.removeEventListener(l, g, u);
        };
      })(s, "change", o));
    }
  }
  const jd = [{ fonts: [20, 16, 12, 10], gaps: [16, 12, 8], image: 36 }, { fonts: [24, 20, 16, 12], gaps: [20, 16, 12], image: 48 }, { fonts: [28, 24, 20, 16], gaps: [24, 20, 16], image: 60 }, { fonts: [32, 28, 24, 20], gaps: [28, 24, 20], image: 80 }], Rd = [0, 12, 16, 20, 24, 28], rf = /\p{L}\p{M}*/gu, af = /\p{N}/gu, Nd = ({ lettersAllowed: n, numbersAllowed: t }) => n !== t, lf = ({ previousValue: n, nextValue: t, caretPosition: r }, a, s) => {
    const o = t.slice(r), c = t.slice(0, r), l = c.slice(0, sf(n, c)), i = c.slice(l.length), u = ((p, f) => Nd(f) ? f.lettersAllowed ? p.replace(af, "") : p.replace(rf, "") : p)(i, a), g = s === void 0 ? u.length : Math.max(0, s - l.length - o.length), v = u.slice(0, g);
    return { value: l + v + o, caretPosition: l.length + v.length, rejected: u.length < i.length };
  }, sf = (n, t) => {
    const r = Math.min(n.length, t.length);
    let a = 0;
    for (; a < r && n[a] === t[a]; ) a += 1;
    return a;
  };
  var of = (n, t) => {
    n.target === n.currentTarget && t()();
  }, cf = $('<img alt="Close"/>'), uf = $('<span class="kaching-bundles__personalisation-modal__item-variant"> </span>'), df = (n, t, r) => t(r(), n.currentTarget), gf = $('<img alt="Clear"/>'), hf = $('<span class="kaching-bundles__personalisation-modal__input-error"> </span>'), pf = $("<span> </span>"), bf = $('<div class="kaching-bundles__personalisation-modal__item"><div class="kaching-bundles__personalisation-modal__item-info"><div class="kaching-bundles__personalisation-modal__item-image-wrapper"><img class="kaching-bundles__personalisation-modal__item-image" alt=""/></div> <div class="kaching-bundles__personalisation-modal__item-details"><span class="kaching-bundles__personalisation-modal__item-title"> </span> <!></div></div> <div class="kaching-bundles__personalisation-modal__input-wrapper"><div class="kaching-bundles__personalisation-modal__input-container"><input type="text"/> <!></div> <!> <!></div></div>'), ff = $('<div role="none"><div class="kaching-bundles__personalisation-modal-overlay__content"><div class="kaching-bundles__personalisation-modal"><div class="kaching-bundles__personalisation-modal__header"><h2 class="kaching-bundles__personalisation-modal__heading"> </h2> <!></div> <div class="kaching-bundles__personalisation-modal__items"></div> <div class="kaching-bundles__personalisation-modal__actions"><!> <!></div></div></div></div>');
  function jo(n, t) {
    at(t, !0);
    const r = () => Ve(p, "$translate", a), [a, s] = kt(), o = k(t, "selectedVariants", 7), c = k(t, "personalisationValues", 7), l = k(t, "addPersonalisationModal", 7), i = k(t, "required", 7, !1), u = k(t, "inline", 7, !1), g = k(t, "onConfirm", 7), v = k(t, "onClose", 7), p = Tt(), f = d(() => ((N) => {
      var J, ae;
      return { lettersAllowed: (J = N == null ? void 0 : N.lettersAllowed) == null || J, numbersAllowed: (ae = N == null ? void 0 : N.numbersAllowed) == null || ae };
    })(l())), b = d(() => !e(f).lettersAllowed && e(f).numbersAllowed), y = d(() => Nd(e(f))), m = d(() => e(b) ? "system.numbers_only" : "system.letters_only"), z = d(() => {
      var N, J;
      return (J = (N = l()) == null ? void 0 : N.characterLimitEnabled) != null && J;
    }), C = d(() => {
      var N, J;
      return e(z) ? (J = (N = l()) == null ? void 0 : N.characterLimit) != null ? J : 30 : void 0;
    }), A = d(() => o().map(({ product: N, index: J }) => `${J}:${N.id}`)), O = d(() => o().map(({ product: N }, J) => {
      const ae = o().slice(0, J + 1).filter((ce) => ce.product.id === N.id).length;
      return `${N.title} #${ae}`;
    })), V = new Eo(), R = d(() => o().map(({ index: N }) => {
      var J, ae;
      return (ae = (J = V.get(e(A)[N])) != null ? J : c()[N]) != null ? ae : "";
    })), U = d(() => new Set(o().filter(({ index: N }) => (c()[N] || "").trim() !== "").map(({ index: N }) => N))), G = d(() => l() ? (({ size: N, roundness: J, imageSize: ae, textSize: ce, overlayColor: me, primaryTextColor: be, secondaryTextColor: Se, buttonColor: L, buttonTextColor: pe, errorColor: Z }) => {
      const fe = Math.min(Math.max(0, N), jd.length - 1), xe = Math.min(Math.max(0, J), Rd.length - 1), $e = jd[fe], Me = Rd[xe];
      return fn({ "kaching-product-personalisation-font-0": $e.fonts[0] + "px", "kaching-product-personalisation-font-1": $e.fonts[1] + "px", "kaching-product-personalisation-font-2": $e.fonts[2] + "px", "kaching-product-personalisation-font-3": $e.fonts[3] + "px", "kaching-product-personalisation-gap-0": $e.gaps[0] + "px", "kaching-product-personalisation-gap-1": $e.gaps[1] + "px", "kaching-product-personalisation-gap-2": $e.gaps[2] + "px", "kaching-product-personalisation-image-size": (ae != null ? ae : $e.image) + "px", "kaching-product-personalisation-radius": Me + "px", "kaching-product-personalisation-text-size": ce + "px", "kaching-product-personalisation-overlay-color": We(me), "kaching-product-personalisation-primary-text-color": We(be), "kaching-product-personalisation-secondary-text-color": We(Se), "kaching-product-personalisation-button-color": We(L), "kaching-product-personalisation-button-text-color": We(pe), "kaching-product-personalisation-error-color": We(Z) });
    })(l()) : "");
    let H = !1, I = Oe(ut([]));
    function T(N, J) {
      var ae;
      if (H) return;
      const ce = lf({ previousValue: e(R)[N], nextValue: J.value, caretPosition: (ae = J.selectionStart) != null ? ae : J.value.length }, e(f), e(C));
      J.value !== ce.value && (J.value = ce.value, J.setSelectionRange(ce.caretPosition, ce.caretPosition)), ue(N, ce.value), re(N, ce.rejected);
    }
    function ue(N, J) {
      V.set(e(A)[N], J);
    }
    function re(N, J) {
      if (!!e(I)[N] === J) return;
      const ae = [...e(I)];
      ae[N] = J, ee(I, ae, !0);
    }
    function P(N) {
      return e(U).has(N) && e(R)[N].trim() !== "";
    }
    const S = d(() => e(R).some((N) => N.trim() !== "")), B = d(() => e(U).size > 0), q = d(() => e(R).every((N) => N.trim() !== "")), Y = d(() => i() ? !e(q) : !e(S) && !e(B));
    var Q = { get selectedVariants() {
      return o();
    }, set selectedVariants(N) {
      o(N), _();
    }, get personalisationValues() {
      return c();
    }, set personalisationValues(N) {
      c(N), _();
    }, get addPersonalisationModal() {
      return l();
    }, set addPersonalisationModal(N) {
      l(N), _();
    }, get required() {
      return i();
    }, set required(N = !1) {
      i(N), _();
    }, get inline() {
      return u();
    }, set inline(N = !1) {
      u(N), _();
    }, get onConfirm() {
      return g();
    }, set onConfirm(N) {
      g(N), _();
    }, get onClose() {
      return v();
    }, set onClose(N) {
      v(N), _();
    } }, oe = ff();
    let j;
    oe.__click = [of, v];
    var D = w(oe), se = w(D), te = w(se), X = w(te), ne = w(X, !0);
    x(X), Yt(E(X, 2), { element: "span", class: "kaching-bundles__personalisation-modal__close", get onclick() {
      return v();
    }, children: (N, J) => {
      var ae = cf();
      ke(() => Ie(ae, "src", $o)), h(N, ae);
    }, $$slots: { default: !0 } }), x(te);
    var he = E(te, 2);
    Gt(he, 21, o, ({ product: N, variant: J, index: ae }) => ae, (N, J) => {
      let ae = () => e(J).product, ce = () => e(J).variant, me = () => e(J).index;
      var be = bf(), Se = w(be), L = w(Se), pe = w(L);
      x(L);
      var Z = E(L, 2), fe = w(Z), xe = w(fe, !0);
      x(fe);
      var $e = E(fe, 2), Me = (Ce) => {
        var Pe = uf(), Ee = w(Pe, !0);
        x(Pe), ke((qe) => pt(Ee, qe), [() => ce().options.join(", ")]), h(Ce, Pe);
      };
      F($e, (Ce) => {
        ae().variants.length > 1 && Ce(Me);
      }), x(Z), x(Se);
      var Ae = E(Se, 2), Be = w(Ae), Fe = w(Be);
      let Le;
      ka(Fe), Fe.__input = [df, T, me];
      var K = E(Fe, 2), we = (Ce) => {
        Yt(Ce, { element: "span", class: "kaching-bundles__personalisation-modal__input-clear", onclick: () => (function(Pe) {
          ue(Pe, ""), re(Pe, !1);
        })(me()), children: (Pe, Ee) => {
          var qe = gf();
          ke(() => Ie(qe, "src", "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.6667%203.99992V3.46659C10.6667%202.71985%2010.6667%202.34648%2010.5213%202.06126C10.3935%201.81038%2010.1895%201.60641%209.93865%201.47858C9.65344%201.33325%209.28007%201.33325%208.53333%201.33325H7.46667C6.71993%201.33325%206.34656%201.33325%206.06135%201.47858C5.81046%201.60641%205.60649%201.81038%205.47866%202.06126C5.33333%202.34648%205.33333%202.71985%205.33333%203.46659V3.99992M2%203.99992H14M12.6667%203.99992V11.4666C12.6667%2012.5867%2012.6667%2013.1467%2012.4487%2013.5746C12.2569%2013.9509%2011.951%2014.2569%2011.5746%2014.4486C11.1468%2014.6666%2010.5868%2014.6666%209.46667%2014.6666H6.53333C5.41323%2014.6666%204.85318%2014.6666%204.42535%2014.4486C4.04903%2014.2569%203.74307%2013.9509%203.55132%2013.5746C3.33333%2013.1467%203.33333%2012.5867%203.33333%2011.4666V3.99992'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), h(Pe, qe);
        }, $$slots: { default: !0 } });
      };
      F(K, (Ce) => {
        P(me()) && Ce(we);
      }), x(Be);
      var ie = E(Be, 2), ze = (Ce) => {
        var Pe = hf(), Ee = w(Pe, !0);
        x(Pe), ke((qe) => pt(Ee, qe), [() => r()(e(m))]), h(Ce, Pe);
      };
      F(ie, (Ce) => {
        e(y) && e(I)[me()] && Ce(ze);
      });
      var Ge = E(ie, 2), Qe = (Ce) => {
        var Pe = pf();
        let Ee;
        var qe = w(Pe);
        x(Pe), ke((et) => {
          var yt, rt;
          Ee = Wt(Pe, 1, "kaching-bundles__personalisation-modal__input-counter", null, Ee, et), pt(qe, `${(yt = e(R)[me()].length) != null ? yt : ""}/${(rt = e(C)) != null ? rt : ""}`);
        }, [() => ({ "kaching-bundles__personalisation-modal__input-counter--error": e(C) !== void 0 && e(R)[me()].length >= e(C) })]), h(Ce, Pe);
      };
      F(Ge, (Ce) => {
        e(z) && Ce(Qe);
      }), x(Ae), x(be), ke((Ce, Pe) => {
        Ie(pe, "src", ce().image || ae().image), pt(xe, e(O)[me()]), Le = Wt(Fe, 1, "kaching-bundles__personalisation-modal__input", null, Le, Ce), Ie(Fe, "placeholder", Pe), oi(Fe, e(R)[me()]), Ie(Fe, "maxlength", e(y) ? void 0 : e(C)), Ie(Fe, "inputmode", e(b) ? "numeric" : void 0);
      }, [() => ({ "kaching-bundles__personalisation-modal__input--with-clear": P(me()), "kaching-bundles__personalisation-modal__input--error": e(C) !== void 0 && e(R)[me()].length >= e(C) }), () => {
        var Ce;
        return (Ce = l()) != null && Ce.placeholderText ? r()(l().placeholderText) : "";
      }]), ns("compositionstart", Fe, () => H = !0), ns("compositionend", Fe, (Ce) => (function(Pe, Ee) {
        H = !1, T(Pe, Ee);
      })(me(), Ce.currentTarget)), h(N, be);
    }), x(he);
    var M = E(he, 2), W = w(M);
    Yt(W, { element: "button", class: "kaching-bundles__personalisation-modal__button kaching-bundles__personalisation-modal__button--cancel", get onclick() {
      return v();
    }, children: (N, J) => {
      fa();
      var ae = Rn();
      ke((ce) => pt(ae, ce), [() => r()("system.cancel")]), h(N, ae);
    }, $$slots: { default: !0 } });
    var de = E(W, 2);
    {
      let N = d(() => ["kaching-bundles__personalisation-modal__button", "kaching-bundles__personalisation-modal__button--confirm", e(Y) && "kaching-bundles__personalisation-modal__button--disabled"]);
      Yt(de, { element: "button", get class() {
        return e(N);
      }, get disabled() {
        return e(Y);
      }, onclick: () => g()(e(R)), children: (J, ae) => {
        fa();
        var ce = Rn();
        ke((me) => pt(ce, me), [() => r()("system.confirm")]), h(J, ce);
      }, $$slots: { default: !0 } });
    }
    x(M), x(se), x(D), x(oe), ke((N, J) => {
      j = Wt(oe, 1, "kaching-bundles__personalisation-modal-overlay", null, j, N), Ft(oe, e(G)), pt(ne, J);
    }, [() => ({ "kaching-bundles__personalisation-modal-overlay--inline": u() }), () => {
      var N;
      return (N = l()) != null && N.heading ? r()(l().heading) : "";
    }]), h(n, oe);
    var ge = it(Q);
    return s(), ge;
  }
  Fn(["click", "input"]), Je(jo, { selectedVariants: {}, personalisationValues: {}, addPersonalisationModal: {}, required: {}, inline: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var vf = (n, t) => {
    ee(t, !0);
  }, _f = (n, t) => {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), ee(t, !0));
  }, kf = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image"/></div>'), mf = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image kaching-bundles__product-personalisation__image--default"/></div>'), xf = $('<span class="kaching-bundles__product-personalisation__title"><!> <span class="kaching-bundles__product-personalisation__subtitle"> </span></span>'), yf = $('<span class="kaching-bundles__product-personalisation__title"><!></span>'), wf = $('<span class="kaching-bundles__product-personalisation__subtitle"><!></span>'), Pf = $("<!> <!>", 1), Sf = $('<span class="kaching-bundles__product-personalisation__unit-label"> </span>'), Bf = $('<span class="kaching-bundles__product-personalisation__price"><!> <!></span>'), Cf = $('<span class="kaching-bundles__product-personalisation__compare-at-price"><!></span>'), If = $('<div class="kaching-bundles"><!></div>'), Mf = $('<div role="button" tabindex="0"><div class="kaching-bundles__product-personalisation__main"><!> <div class="kaching-bundles__product-personalisation__content"><!></div></div> <div class="kaching-bundles__product-personalisation__pricing"><!> <!></div></div> <!>', 1);
  function fi(n, t) {
    at(t, !0);
    const r = () => Ve(y, "$config", o), a = () => Ve(C, "$formatPrice", o), s = () => Ve(z, "$translate", o), [o, c] = kt();
    let l = k(t, "productPersonalisation", 7), i = k(t, "product", 7), u = k(t, "selectedVariantIds", 23, () => []), g = k(t, "personalisationItems", 7), v = k(t, "quantity", 7), p = k(t, "addPersonalisationModal", 7), f = k(t, "onPersonalisationsChange", 7), b = k(t, "initialValues", 23, () => []);
    const y = yn(), m = pi(), z = Tt(), C = vn(), A = Vn(), { reportedRule: O, failing: V } = (() => {
      const ie = Ta(Bd);
      if (!ie) throw new Error("getPersonalisationRule must be called within a component tree that has setupPersonalisationRule initialized");
      return ie;
    })();
    let R = Oe(!1);
    const U = new Eo();
    let G;
    const H = d(() => {
      if (l().mediaImageGID) return Ve(A, "$getMediaImageUrl", o)(l().mediaImageGID);
    }), I = d(() => !e(H) && l().imageSize > 0), T = d(() => Math.round(100 * parseFloat(l().pricePerItem || "0") * r().currencyRate)), ue = d(() => Math.round(100 * parseFloat(l().compareAtPrice || "0") * r().currencyRate)), re = d(() => e(T)), P = d(() => e(ue)), S = d(() => e(P) > 0 && e(P) > e(re)), B = d(() => {
      var ie;
      return ((ze, Ge) => fn({ "kaching-product-personalisation-image-height": ze.imageSize + "px", ...Ge && { "kaching-product-personalisation-error-color": We(Ge) } }))(l(), (ie = p()) == null ? void 0 : ie.errorColor);
    }), q = d(() => l().required && Ve(V, "$personalisationRuleFailing", o) && (r().preview && r().previewAlerts || Ve(m, "$requireSelectionError", o))), Y = d(() => _n({ priceFormatter: a(), product: void 0, totalFullPrice: e(P) || e(re), totalDiscountedPrice: e(re), quantity: v(), unitQuantity: null })), Q = d(() => e(Y)(s()(l().title))), oe = d(() => l().subtitle ? e(Y)(s()(l().subtitle)) : ""), j = d(() => (function(ie) {
      const { personalisationItems: ze, product: Ge, selectedVariantIds: Qe } = ie;
      return ze != null ? ze : Qe.map((Ce, Pe) => ({ key: String(Pe), product: Ge, variant: Ge.variants.find((Ee) => Ee.id === Ce) || Ge.variants[0] }));
    })({ personalisationItems: g(), product: i(), selectedVariantIds: u() })), D = d(() => e(j).map((ie) => `${ie.key}:${ie.product.id}`)), se = d(() => e(j).map((ie) => `${ie.key}:${ie.product.id}:${ie.variant.id}`).join("|")), te = d(() => e(D).map((ie) => U.get(ie) || "")), X = d(() => e(j).map((ie, ze) => ({ product: ie.product, variant: ie.variant, index: ze })));
    tt(() => {
      l().id, b(), Xt(() => {
        U.clear(), b().forEach((ie, ze) => {
          ie && e(D)[ze] && U.set(e(D)[ze], ie);
        });
      });
    }), tt(() => {
      if (!g()) return;
      const ie = e(se);
      Xt(() => {
        if (ie === G) return;
        const ze = G === void 0;
        G = ie, ze && b().length <= e(D).length || ge(e(te));
      });
    });
    const ne = d(() => e(te).some((ie) => ie.trim() !== "")), he = d(() => e(te).map((ie, ze) => ({ value: ie, index: ze })).filter(({ value: ie }) => ie.trim() !== "")), M = d(() => v() === 1);
    var W;
    function de(ie) {
      const ze = e(D).map((Ge, Qe) => {
        const Ce = ie[Qe] || "";
        return Ce ? U.set(Ge, Ce) : U.delete(Ge), Ce;
      });
      ee(R, !1), ge(ze);
    }
    function ge(ie) {
      var ze;
      if (!l().variantGID) return;
      const Ge = Ut(l().variantGID);
      if (!Ge) return;
      const Qe = s()(l().valueLabel || "Value"), Ce = ie.map((Pe, Ee) => ({ id: l().id, variantId: Ge, text: Pe, valueLabel: Qe, productIndex: Ee, parentVariantId: g() ? e(j)[Ee].variant.id : void 0 })).filter((Pe) => Pe.text.trim() !== "");
      (ze = f()) == null || ze(Ce);
    }
    tt(() => {
      O.set(Sd({ required: l().required, itemCount: e(j).length, filledCount: e(he).length }));
    }), W = () => O.set(sa), hn === null && Hs(), Fa(() => () => Xt(W));
    var N = { get productPersonalisation() {
      return l();
    }, set productPersonalisation(ie) {
      l(ie), _();
    }, get product() {
      return i();
    }, set product(ie) {
      i(ie), _();
    }, get selectedVariantIds() {
      return u();
    }, set selectedVariantIds(ie = []) {
      u(ie), _();
    }, get personalisationItems() {
      return g();
    }, set personalisationItems(ie) {
      g(ie), _();
    }, get quantity() {
      return v();
    }, set quantity(ie) {
      v(ie), _();
    }, get addPersonalisationModal() {
      return p();
    }, set addPersonalisationModal(ie) {
      p(ie), _();
    }, get onPersonalisationsChange() {
      return f();
    }, set onPersonalisationsChange(ie) {
      f(ie), _();
    }, get initialValues() {
      return b();
    }, set initialValues(ie = []) {
      b(ie), _();
    } }, J = Mf(), ae = _e(J);
    let ce;
    ae.__click = [vf, R], ae.__keydown = [_f, R];
    var me = w(ae), be = w(me), Se = (ie) => {
      var ze = kf(), Ge = w(ze);
      x(ze), ke(() => {
        Ie(Ge, "src", e(H)), Ie(Ge, "height", l().imageSize || 0);
      }), h(ie, ze);
    }, L = (ie) => {
      var ze = Te(), Ge = _e(ze), Qe = (Ce) => {
        var Pe = mf(), Ee = w(Pe);
        x(Pe), ke(() => {
          Ie(Ee, "src", "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.0476%206.95032C24.6473%206.55003%2024.1722%206.23251%2023.6492%206.01588C23.1262%205.79924%2022.5657%205.68774%2021.9996%205.68774C21.4335%205.68774%2020.873%205.79924%2020.35%206.01588C19.8271%206.23251%2019.3519%206.55003%2018.9516%206.95032L17.9932%207.90872L17.9788%207.89432L16.2828%209.59032L16.2972%209.60632L6.88921%2019.0143C6.06394%2019.8391%205.60007%2020.9579%205.59961%2022.1247V25.1999C5.59961%2025.5182%205.72604%2025.8234%205.95108%2026.0484C6.17612%2026.2735%206.48135%2026.3999%206.79961%2026.3999H9.87481C11.0416%2026.3995%2012.1604%2025.9356%2012.9852%2025.1103L25.0492%2013.0463C25.4495%2012.6461%2025.767%2012.1709%2025.9837%2011.6479C26.2003%2011.1249%2026.3118%2010.5644%2026.3118%209.99832C26.3118%209.43225%2026.2003%208.87172%2025.9837%208.34874C25.767%207.82576%2025.4495%207.35058%2025.0492%206.95032H25.0476ZM17.9932%2011.3023L8.58521%2020.7103C8.3995%2020.8961%208.25221%2021.1166%208.15173%2021.3593C8.05125%2021.602%207.99956%2021.8621%207.99961%2022.1247V23.9999H9.87481C10.4044%2023.9999%2010.9148%2023.7887%2011.2876%2023.4143L20.6956%2014.0063L17.9932%2011.3023ZM22.3932%2012.3087L23.3516%2011.3503C23.6865%2010.9871%2023.8678%2010.5084%2023.8578%2010.0144C23.8477%209.52049%2023.647%209.04957%2023.2977%208.70023C22.9484%208.35089%2022.4774%208.15019%2021.9835%208.14015C21.4896%208.1301%2021.0109%208.31147%2020.6476%208.64632L19.6908%209.60632L22.3932%2012.3087Z'%20fill='black'/%3e%3c/svg%3e"), Ie(Ee, "height", l().imageSize || 0);
        }), h(Ce, Pe);
      };
      F(Ge, (Ce) => {
        e(I) && Ce(Qe);
      }, !0), h(ie, ze);
    };
    F(be, (ie) => {
      e(H) ? ie(Se) : ie(L, !1);
    });
    var pe = E(be, 2), Z = w(pe), fe = (ie) => {
      var ze = Te();
      Gt(_e(ze), 17, () => e(he), ({ value: Ge, index: Qe }) => Qe, (Ge, Qe) => {
        var Ce = xf(), Pe = w(Ce), Ee = (yt) => {
          var rt = Rn();
          ke(() => pt(rt, `#${e(Qe).index + 1}`)), h(yt, rt);
        };
        F(Pe, (yt) => {
          e(M) || yt(Ee);
        });
        var qe = E(Pe, 2), et = w(qe, !0);
        x(qe), x(Ce), ke(() => pt(et, e(Qe).value)), h(Ge, Ce);
      }), h(ie, ze);
    }, xe = (ie) => {
      var ze = Pf(), Ge = _e(ze), Qe = (Ee) => {
        var qe = yf();
        Ne(w(qe), () => e(Q)), x(qe), h(Ee, qe);
      };
      F(Ge, (Ee) => {
        e(Q) && Ee(Qe);
      });
      var Ce = E(Ge, 2), Pe = (Ee) => {
        var qe = wf();
        Ne(w(qe), () => e(oe)), x(qe), h(Ee, qe);
      };
      F(Ce, (Ee) => {
        e(oe) && Ee(Pe);
      }), h(ie, ze);
    };
    F(Z, (ie) => {
      e(ne) ? ie(fe) : ie(xe, !1);
    }), x(pe), x(me);
    var $e = E(me, 2), Me = w($e), Ae = (ie) => {
      var ze = Bf(), Ge = w(ze);
      Ne(Ge, () => a()(e(re)));
      var Qe = E(Ge, 2), Ce = (Pe) => {
        var Ee = Sf(), qe = w(Ee, !0);
        x(Ee), ke(() => pt(qe, l().pricePerItemUnitLabel)), h(Pe, Ee);
      };
      F(Qe, (Pe) => {
        l().pricePerItemUnitLabel && Pe(Ce);
      }), x(ze), h(ie, ze);
    };
    F(Me, (ie) => {
      e(re) > 0 && ie(Ae);
    });
    var Be = E(Me, 2), Fe = (ie) => {
      var ze = Cf();
      Ne(w(ze), () => a()(e(P))), x(ze), h(ie, ze);
    };
    F(Be, (ie) => {
      e(S) && ie(Fe);
    }), x($e), x(ae);
    var Le = E(ae, 2), K = (ie) => {
      Ml(ie, { target: "body", children: (ze, Ge) => {
        var Qe = If();
        jo(w(Qe), { get selectedVariants() {
          return e(X);
        }, get personalisationValues() {
          return e(te);
        }, get addPersonalisationModal() {
          return p();
        }, get required() {
          return l().required;
        }, onConfirm: de, onClose: () => {
          ee(R, !1);
        } }), x(Qe), h(ze, Qe);
      }, $$slots: { default: !0 } });
    };
    F(Le, (ie) => {
      e(R) && ie(K);
    }), ke((ie) => {
      ce = Wt(ae, 1, "kaching-bundles__product-personalisation", null, ce, ie), Ie(ae, "data-product-personalisation-id", l().id), Ft(ae, e(B));
    }, [() => ({ "kaching-bundles__product-personalisation--filled": e(ne), "kaching-bundles__product-personalisation--required-error": e(q) })]), h(n, J);
    var we = it(N);
    return c(), we;
  }
  function zf(n, t, r) {
    const a = Number(n.target.value), s = t().find((o) => o.id === a);
    r()(s);
  }
  Fn(["click", "keydown"]), Je(fi, { productPersonalisation: {}, product: {}, selectedVariantIds: {}, personalisationItems: {}, quantity: {}, addPersonalisationModal: {}, onPersonalisationsChange: {}, initialValues: {} }, [], [], !0);
  var $f = (n) => n.stopPropagation(), Df = $("<option> </option>"), Tf = $('<select class="kaching-bundles__bar-variant-select kaching-bundles__selling-plan-select"></select>');
  function Ra(n, t) {
    at(t, !0);
    const [r, a] = kt(), s = k(t, "sellingPlans", 7), o = k(t, "selectedSellingPlan", 7), c = k(t, "onChange", 7), l = Tt();
    var i, u = { get sellingPlans() {
      return s();
    }, set sellingPlans(p) {
      s(p), _();
    }, get selectedSellingPlan() {
      return o();
    }, set selectedSellingPlan(p) {
      o(p), _();
    }, get onChange() {
      return c();
    }, set onChange(p) {
      c(p), _();
    } }, g = Tf();
    g.__change = [zf, s, c], g.__click = [$f], Gt(g, 21, s, (p) => p.id, (p, f) => {
      var b = Df(), y = w(b, !0);
      x(b);
      var m = {};
      ke(() => {
        var z;
        pt(y, e(f).name), m !== (m = e(f).id) && (b.value = (z = b.__value = e(f).id) != null ? z : "");
      }), h(p, b);
    }), x(g), po(g), ke((p) => {
      var f;
      Ie(g, "aria-label", p), i !== (i = o().id) && (g.value = (f = g.__value = o().id) != null ? f : "", vl(g, o().id));
    }, [() => Ve(l, "$translate", r)("system.subscription_plan")]), h(n, g);
    var v = it(u);
    return a(), v;
  }
  Fn(["change", "click"]), Je(Ra, { sellingPlans: {}, selectedSellingPlan: {}, onChange: {} }, [], [], !0);
  var Vf = Tn('<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.334 1 5 8.333 1.667 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Ps(n) {
    h(n, Vf());
  }
  Je(Ps, {}, [], [], !0);
  var Af = $('<img alt="" class="kaching-bundles__upsell__image"/>'), qf = $('<div class="kaching-bundles__upsell__price"><!></div>'), Gf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Ff = $('<div class="kaching-bundles__upsell__price"><!></div>'), Of = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Lf = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!> <!></div>'), Ef = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <!>', 1), jf = $('<div class="kaching-bundles__upsell__price"><!></div>'), Rf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Nf = $('<div class="kaching-bundles__upsell__unit-price"><!> </div>'), Qf = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!></div>', 1), Wf = $('<div class="kaching-bundles__upsell__price"><!></div>'), Uf = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Hf = $("<!> <!>", 1), Zf = $('<div><!> <div class="kaching-bundles__upsell__main"><!> <!> <div class="kaching-bundles__upsell__content"><!> <!> <!></div></div> <div class="kaching-bundles__upsell__pricing"><!></div></div>');
  function Qd(n, t) {
    at(t, !0);
    const r = () => Ve(C, "$config", o), a = () => Ve(m, "$formatPrice", o), s = () => Ve(y, "$translate", o), [o, c] = kt();
    let l = k(t, "dealBlock", 7), i = k(t, "dealBarId", 7), u = k(t, "upsell", 7), g = k(t, "product", 7), v = k(t, "dealBarSelected", 7, !1), p = k(t, "dealSellingPlan", 7), f = k(t, "sets", 7), b = k(t, "onChange", 7);
    const y = Tt(), m = vn(), z = Vn(), C = yn();
    let A = Oe(ut(u().preselected)), O = Oe(void 0), V = Oe(void 0);
    const R = d(() => u().variantGIDs ? u().variantGIDs.map(Ut) : g().variants.map((Z) => Z.id)), U = d(() => ({ ...g(), variants: g().variants.filter((Z) => (r().preview || Z.availableForSale) && e(R).includes(Z.id)) })), G = d(() => (function(Z, fe, xe) {
      if (fe !== void 0) return fe;
      const $e = Z.defaultVariantGID ? Ut(Z.defaultVariantGID) : void 0;
      if ($e !== void 0 && (xe != null && xe.variants.some((Me) => Me.id === $e))) return $e;
      if (xe != null && xe.availableForSale && xe.variants.length > 0) return xe.variants[0].id;
    })(u(), e(O), e(U))), H = d(() => e(U).variants.find((Z) => Z.id === e(G))), I = d(() => Ve(z, "$getMediaImageUrl", o)(u().mediaImageGID)), T = d(() => ((Z, fe) => {
      const { fonts: xe, colors: $e, cornerRadius: Me } = Z;
      return fn({ "kaching-upsell-background-color": $e.upsellBackground && We($e.upsellBackground), "kaching-upsell-text-color": $e.upsellText && We($e.upsellText), "kaching-upsell-selected-background-color": $e.upsellSelectedBackground && We($e.upsellSelectedBackground), "kaching-upsell-selected-text-color": $e.upsellSelectedText && We($e.upsellSelectedText), "kaching-upsell-font-size": xe.upsell && xe.upsell.size + "px", "kaching-upsell-font-weight": xe.upsell && ur(xe.upsell.style), "kaching-upsell-font-style": xe.upsell && dr(xe.upsell.style), "kaching-upsell-image-border-radius": (Me || 0) / 2 + "px", "kaching-upsell-image-height": fe.imageSize + "px" });
    })(l(), u())), ue = d(() => g().url ? `${g().url}?variant=${e(G)}` : void 0), re = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), P = d(() => u().quantity * f()), S = d(() => (function(Z) {
      if (!Z) return 0;
      let fe = Z.price;
      return l().useProductCompareAtPrice && Z.compareAtPrice && (fe = Math.max(fe, Z.compareAtPrice)), fe * e(P);
    })(e(H))), B = d(() => Math.ceil(e(S) / e(P))), q = d(() => {
      var Z;
      return (Z = u().subscriptionEnabled) == null || Z;
    }), Y = d(() => {
      var Z;
      return (Z = u().subscriptionType) != null ? Z : "deal";
    }), Q = d(() => {
      if (!e(q) || e(Y) !== "always" || !e(H)) return [];
      const Z = new Set(e(H).sellingPlans.map((fe) => fe.id));
      return g().sellingPlans.filter((fe) => Z.has(fe.id));
    }), oe = d(() => e(Q).find((Z) => Z.id === e(V)) || e(Q)[0]);
    tt(() => {
      var Z;
      e(Q).some((fe) => {
        var xe;
        return fe.id === ((xe = p()) == null ? void 0 : xe.id);
      }) && ee(V, (Z = p()) == null ? void 0 : Z.id, !0);
    });
    const j = d(() => {
      if (e(H) && e(q))
        return e(Y) === "deal" ? p() ? ar(g(), e(H), p()) : void 0 : e(oe);
    }), D = d(() => xa({ discountType: u().discountType, discountValue: u().discountValue, discountQuantity: u().quantity, variantQuantities: e(H) ? [{ variant: e(H), quantity: e(P) }] : [], currencyRate: r().currencyRate, priceRounding: e(re), sellingPlan: e(j) })), se = d(() => Math.ceil(e(D) / e(P))), te = d(() => e(S) > e(D)), X = d(() => e(H) && So(e(H))), ne = d(() => e(H) ? Ir([{ variant: e(H), quantity: e(P) }]) : null), he = d(() => e(ne) ? e(D) / e(ne) : null), M = d(() => _n({ priceFormatter: a(), product: g(), totalFullPrice: e(S), totalDiscountedPrice: e(D), quantity: e(P), unitQuantity: e(ne), sellingPlan: e(j) })), W = d(() => e(M)(s()(u().text))), de = d(() => ((Z, fe, xe) => Z.blockLayout !== "vertical" ? [] : ws(Z).filter(($e) => $e.attachedTo.type === "barUpsell" && $e.attachedTo.dealBarId === fe && $e.attachedTo.upsellId === xe))(l(), i(), u().id).map((Z) => Ea(Z, s(), e(M)))), ge = d(() => ja(e(de))), N = d(() => e(ge).positions.size > 0);
    function J(Z) {
      ee(O, Z, !0);
    }
    function ae() {
      v() && ee(A, !e(A));
    }
    br(() => {
      u().productGID, ee(O, void 0);
    }), tt(() => {
      if (e(H) && g().availableForSale && e(P)) {
        const Z = e(A), fe = e(j);
        Xt(() => {
          b()({ variant: Z ? e(H) : null, product: Z ? g() : null, discountedPrice: Z ? e(D) : 0, fullPrice: Z ? e(S) : 0, sellingPlan: Z ? fe : void 0 });
        });
      }
    });
    const ce = d(() => !g().availableForSale || g().variants.filter((Z) => Z.availableForSale && e(R).includes(Z.id)).length === 0);
    var me = { get dealBlock() {
      return l();
    }, set dealBlock(Z) {
      l(Z), _();
    }, get dealBarId() {
      return i();
    }, set dealBarId(Z) {
      i(Z), _();
    }, get upsell() {
      return u();
    }, set upsell(Z) {
      u(Z), _();
    }, get product() {
      return g();
    }, set product(Z) {
      g(Z), _();
    }, get dealBarSelected() {
      return v();
    }, set dealBarSelected(Z = !1) {
      v(Z), _();
    }, get dealSellingPlan() {
      return p();
    }, set dealSellingPlan(Z) {
      p(Z), _();
    }, get sets() {
      return f();
    }, set sets(Z) {
      f(Z), _();
    }, get onChange() {
      return b();
    }, set onChange(Z) {
      b(Z), _();
    } }, be = Te(), Se = _e(be), L = (Z) => {
      var fe = Zf();
      let xe, $e;
      var Me = w(fe);
      Gt(Me, 17, () => e(de), (rt) => rt.id, (rt, Vt) => {
        ya(rt, { get badge() {
          return e(Vt);
        }, get blockLayout() {
          return l().blockLayout;
        } });
      });
      var Ae = E(Me, 2), Be = w(Ae), Fe = (rt) => {
        {
          let Vt = d(() => ["kaching-bundles__upsell__checkbox", e(A) && "kaching-bundles__upsell__checkbox--selected"]);
          Yt(rt, { element: "span", get class() {
            return e(Vt);
          }, onclick: ae, children: (Et, bn) => {
            var un = Te(), De = _e(un), Re = (Ke) => {
              Ps(Ke);
            };
            F(De, (Ke) => {
              e(A) && Ke(Re);
            }), h(Et, un);
          }, $$slots: { default: !0 } });
        }
      };
      F(Be, (rt) => {
        v() && rt(Fe);
      });
      var Le = E(Be, 2), K = (rt) => {
        {
          let Vt = d(() => v() ? e(ue) : void 0);
          rr(rt, { get url() {
            return e(Vt);
          }, class: "kaching-bundles__upsell__link", children: (Et, bn) => {
            var un = Af();
            ke(() => {
              var De;
              Ie(un, "src", e(I) || ((De = e(H)) == null ? void 0 : De.image) || g().image), Ie(un, "height", u().imageSize);
            }), h(Et, un);
          }, $$slots: { default: !0 } });
        }
      };
      F(Le, (rt) => {
        u().imageSize > 0 && rt(K);
      });
      var we = E(Le, 2), ie = w(we), ze = (rt) => {
        Yt(rt, { element: "span", class: "kaching-bundles__upsell__text", onclick: ae, children: (Vt, Et) => {
          var bn = Te();
          Ne(_e(bn), () => e(W)), h(Vt, bn);
        }, $$slots: { default: !0 } });
      };
      F(ie, (rt) => {
        e(W) && rt(ze);
      });
      var Ge = E(ie, 2), Qe = (rt) => {
        Wn(rt, { get product() {
          return e(U);
        }, get selectedVariantId() {
          return e(G);
        }, onChange: J });
      };
      F(Ge, (rt) => {
        v() && e(U) && e(U).variants.length > 1 && e(G) && rt(Qe);
      });
      var Ce = E(Ge, 2), Pe = (rt) => {
        Ra(rt, { get sellingPlans() {
          return e(Q);
        }, get selectedSellingPlan() {
          return e(oe);
        }, onChange: (Vt) => ee(V, Vt.id, !0) });
      };
      F(Ce, (rt) => {
        v() && e(A) && e(Q).length > 1 && e(oe) && rt(Pe);
      }), x(we), x(Ae);
      var Ee = E(Ae, 2), qe = w(Ee), et = (rt) => {
        var Vt = Ef(), Et = _e(Vt), bn = w(Et);
        lt(bn, () => e(se), (Xe) => {
          var nt = qf();
          Ne(w(nt), () => a()(e(se))), x(nt), h(Xe, nt);
        });
        var un = E(bn, 2), De = (Xe) => {
          var nt = Te();
          lt(_e(nt), () => e(B), (wt) => {
            var mt = Gf();
            Ne(w(mt), () => a()(e(B))), x(mt), h(wt, mt);
          }), h(Xe, nt);
        };
        F(un, (Xe) => {
          e(te) && Xe(De);
        }), x(Et);
        var Re = E(Et, 2), Ke = (Xe) => {
          var nt = Lf(), wt = w(nt);
          lt(wt, () => e(D), (ve) => {
            var Ze = Ff();
            Ne(w(Ze), () => a()(e(D))), x(Ze), h(ve, Ze);
          });
          var mt = E(wt, 2), Rt = (ve) => {
            var Ze = Te();
            lt(_e(Ze), () => e(S), (ot) => {
              var ct = Of();
              Ne(w(ct), () => a()(e(S))), x(ct), h(ot, ct);
            }), h(ve, Ze);
          };
          F(mt, (ve) => {
            e(te) && ve(Rt);
          }), x(nt), h(Xe, nt);
        };
        F(Re, (Xe) => {
          e(P) > 1 && Xe(Ke);
        }), h(rt, Vt);
      }, yt = (rt) => {
        var Vt = Te(), Et = _e(Vt), bn = (De) => {
          var Re = Qf(), Ke = _e(Re), Xe = w(Ke);
          lt(Xe, () => e(D), (Rt) => {
            var ve = jf();
            Ne(w(ve), () => a()(l().showPricesPerItem ? e(se) : e(D))), x(ve), h(Rt, ve);
          });
          var nt = E(Xe, 2), wt = (Rt) => {
            var ve = Te();
            lt(_e(ve), () => e(S), (Ze) => {
              var ot = Rf();
              Ne(w(ot), () => a()(l().showPricesPerItem ? e(B) : e(S))), x(ot), h(Ze, ot);
            }), h(Rt, ve);
          };
          F(nt, (Rt) => {
            e(te) && Rt(wt);
          }), x(Ke);
          var mt = E(Ke, 2);
          lt(w(mt), () => e(he), (Rt) => {
            var ve = Nf(), Ze = w(ve);
            Ne(Ze, () => a()(e(he), { preserveDecimals: !0 }));
            var ot = E(Ze);
            x(ve), ke(() => {
              var ct;
              return pt(ot, ` / ${(ct = e(X)) != null ? ct : ""}`);
            }), h(Rt, ve);
          }), x(mt), h(De, Re);
        }, un = (De) => {
          var Re = Hf(), Ke = _e(Re);
          lt(Ke, () => e(D), (wt) => {
            var mt = Wf();
            Ne(w(mt), () => a()(l().showPricesPerItem ? e(se) : e(D))), x(mt), h(wt, mt);
          });
          var Xe = E(Ke, 2), nt = (wt) => {
            var mt = Te();
            lt(_e(mt), () => e(S), (Rt) => {
              var ve = Uf();
              Ne(w(ve), () => a()(l().showPricesPerItem ? e(B) : e(S))), x(ve), h(Rt, ve);
            }), h(wt, mt);
          };
          F(Xe, (wt) => {
            e(te) && wt(nt);
          }), h(De, Re);
        };
        F(Et, (De) => {
          e(he) && e(X) && !r().ignoreUnitPrice ? De(bn) : De(un, !1);
        }, !0), h(rt, Vt);
      };
      F(qe, (rt) => {
        l().showBothPrices ? rt(et) : rt(yt, !1);
      }), x(Ee), x(fe), ke((rt, Vt) => {
        xe = Wt(fe, 1, "kaching-bundles__upsell", null, xe, rt), Ie(fe, "data-upsell-id", u().id), $e = Ft(fe, e(T), $e, Vt);
      }, [() => ({ "kaching-bundles__upsell--out-of-stock": r().preview && e(ce), "kaching-bundles__upsell--badge-border-all": e(ge).positions.has("all"), "kaching-bundles__upsell--badge-border-top": e(ge).positions.has("top"), "kaching-bundles__upsell--badge-border-bottom": e(ge).positions.has("bottom"), "kaching-bundles__upsell--badge-border-left": e(ge).positions.has("left"), "kaching-bundles__upsell--badge-border-right": e(ge).positions.has("right") }), () => ({ "--badge-border-thickness": e(N) ? `${e(ge).thickness}px` : void 0, "--badge-border-gap": e(N) ? `${e(ge).gap}px` : void 0, "--badge-border-gap-border": e(ge).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(ge).sideLength ? `${e(ge).sideLength}px` : void 0 })]), h(Z, fe);
    };
    F(Se, (Z) => {
      !(e(H) || r().preview && e(ce)) || u().visibleOnlyWhenDealBarSelected && !v() || Z(L);
    }), h(n, be);
    var pe = it(me);
    return c(), pe;
  }
  Je(Qd, { dealBlock: {}, dealBarId: {}, upsell: {}, product: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var Jf = $('<div class="kaching-bundles__free-gift__divider"></div>'), Yf = $("<!> <!>", 1);
  function Ei(n, t) {
    at(t, !0);
    const r = () => Ve(b, "$config", a), [a, s] = kt();
    let o = k(t, "dealBlock", 7), c = k(t, "dealBarId", 7), l = k(t, "upsells", 7), i = k(t, "otherProducts", 7), u = k(t, "complementaryProducts", 7), g = k(t, "dealBarSelected", 7), v = k(t, "dealSellingPlan", 7), p = k(t, "sets", 7, 1), f = k(t, "onChange", 7);
    const b = yn();
    let y = Oe(ut({}));
    const m = d(() => r().preview ? i() : i().map(Cr)), z = d(() => r().preview ? u() : u().map(Cr)), C = Math.floor(1e3 * Math.random()), A = d(() => l().flatMap((U, G) => {
      if (U.productSource === "complementary") {
        const I = e(z)[(G + C) % (e(z).length || 1)];
        return I && (r().preview || I.availableForSale) ? { upsell: U, product: I } : [];
      }
      if (!U.productGID) return [];
      const H = e(m).find((I) => I.id === Ut(U.productGID));
      if (!H) return [];
      if (!r().preview) {
        if (!H.availableForSale) return [];
        const I = U.variantGIDs ? U.variantGIDs.map(Ut) : H.variants.map((T) => T.id);
        if (!H.variants.some((T) => T.availableForSale && I.includes(T.id))) return [];
      }
      return { upsell: U, product: H };
    }));
    var O = { get dealBlock() {
      return o();
    }, set dealBlock(U) {
      o(U), _();
    }, get dealBarId() {
      return c();
    }, set dealBarId(U) {
      c(U), _();
    }, get upsells() {
      return l();
    }, set upsells(U) {
      l(U), _();
    }, get otherProducts() {
      return i();
    }, set otherProducts(U) {
      i(U), _();
    }, get complementaryProducts() {
      return u();
    }, set complementaryProducts(U) {
      u(U), _();
    }, get dealBarSelected() {
      return g();
    }, set dealBarSelected(U) {
      g(U), _();
    }, get dealSellingPlan() {
      return v();
    }, set dealSellingPlan(U) {
      v(U), _();
    }, get sets() {
      return p();
    }, set sets(U = 1) {
      p(U), _();
    }, get onChange() {
      return f();
    }, set onChange(U) {
      f(U), _();
    } }, V = Te();
    Gt(_e(V), 19, () => e(A), ({ upsell: U, product: G }) => U.id, (U, G, H) => {
      let I = () => e(G).upsell;
      var T = Yf(), ue = _e(T);
      Qd(ue, { get dealBarId() {
        return c();
      }, get dealBlock() {
        return o();
      }, get upsell() {
        return I();
      }, get product() {
        return e(G).product;
      }, get dealBarSelected() {
        return g();
      }, get dealSellingPlan() {
        return v();
      }, get sets() {
        return p();
      }, onChange: (S) => (function(B, q) {
        const { variant: Y, product: Q, discountedPrice: oe, fullPrice: j, sellingPlan: D } = q;
        Y && Q ? e(y)[B] = { variant: Y, product: Q, discountedPrice: oe, fullPrice: j, sellingPlan: D } : delete e(y)[B];
        const se = l().filter((te) => te.id in e(y)).map((te) => ({ id: te.id, variant: e(y)[te.id].variant, product: e(y)[te.id].product, quantity: te.quantity * p(), discountedPrice: e(y)[te.id].discountedPrice, fullPrice: e(y)[te.id].fullPrice, sellingPlan: e(y)[te.id].sellingPlan }));
        f()(se);
      })(I().id, S) });
      var re = E(ue, 2), P = (S) => {
        h(S, Jf());
      };
      F(re, (S) => {
        e(H) < e(A).length - 1 && S(P);
      }), h(U, T);
    }), h(n, V);
    var R = it(O);
    return s(), R;
  }
  Je(Ei, { dealBlock: {}, dealBarId: {}, upsells: {}, otherProducts: {}, complementaryProducts: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var Kf = $('<span class="kaching-bundles__bar-price__unit-label"><!></span>'), Xf = $('<div class="kaching-bundles__bar-price"><!> <!></div>');
  function oa(n, t) {
    at(t, !0);
    const r = () => Ve(i, "$translate", a), [a, s] = kt(), o = k(t, "amount", 7), c = k(t, "showPricesPerItem", 7), l = k(t, "unitLabel", 7, ""), i = Tt(), u = vn();
    var g = { get amount() {
      return o();
    }, set amount(m) {
      o(m), _();
    }, get showPricesPerItem() {
      return c();
    }, set showPricesPerItem(m) {
      c(m), _();
    }, get unitLabel() {
      return l();
    }, set unitLabel(m = "") {
      l(m), _();
    } }, v = Xf(), p = w(v);
    Ne(p, () => Ve(u, "$formatPrice", a)(o()));
    var f = E(p, 2), b = (m) => {
      var z = Kf();
      Ne(w(z), () => r()(l())), x(z), h(m, z);
    };
    F(f, (m) => {
      c() && l() && m(b);
    }), x(v), ke((m) => Ie(v, "data-a11y-label", m), [() => r()("system.price")]), h(n, v);
    var y = it(g);
    return s(), y;
  }
  Je(oa, { amount: {}, showPricesPerItem: {}, unitLabel: {} }, [], [], !0);
  const Wd = "variantBadges";
  function Ud(n = []) {
    const t = Rr(Hd(n));
    return Va(Wd, t), { setVariantBadges: (r) => {
      t.set(Hd(r));
    } };
  }
  function Hd(n) {
    const t = new Map(n.map((r) => [r.variantId, r.badgeHtml]));
    return (r) => r === void 0 ? void 0 : t.get(r);
  }
  var ev = $('<div class="kaching-bundles__low-stock-alert"><!></div>');
  function Zd(n, t) {
    at(t, !0);
    const [r, a] = kt(), s = k(t, "lowStockAlert", 7), o = k(t, "inventoryQuantity", 7), c = Tt(), l = d(() => {
      return b = Ve(c, "$translate", r)(s().message), y = { stock: o() ? o().toString() : null }, b.replace(/\{\{\s*(\w+)\s*\}\}/g, (m, z) => {
        var C;
        return (C = y[z]) != null ? C : "";
      });
      var b, y;
    }), i = d(() => ((b) => {
      const { textColor: y } = b;
      return fn({ "kaching-bundles-low-stock-alert-text-color": We(y) });
    })(s()));
    var u = { get lowStockAlert() {
      return s();
    }, set lowStockAlert(b) {
      s(b), _();
    }, get inventoryQuantity() {
      return o();
    }, set inventoryQuantity(b) {
      o(b), _();
    } }, g = Te(), v = _e(g), p = (b) => {
      var y = ev();
      Ne(w(y), () => e(l)), x(y), ke(() => Ft(y, e(i))), h(b, y);
    };
    F(v, (b) => {
      o() && o() > 0 && o() < s().threshold && b(p);
    }), h(n, g);
    var f = it(u);
    return a(), f;
  }
  Je(Zd, { lowStockAlert: {}, inventoryQuantity: {} }, [], [], !0);
  var tv = $("<div><!></div>");
  function wa(n, t) {
    at(t, !0);
    const [r, a] = kt(), s = k(t, "dealBlock", 7), o = k(t, "variant", 7), c = (function() {
      const b = Ta(Wd);
      if (!b) throw new Error("getVariantBadges must be called within a component tree that has setupVariantBadges initialized");
      return b;
    })(), l = d(() => {
      var b;
      return Ve(c, "$variantBadgeLookup", r)((b = o()) == null ? void 0 : b.id);
    });
    var i = { get dealBlock() {
      return s();
    }, set dealBlock(b) {
      s(b), _();
    }, get variant() {
      return o();
    }, set variant(b) {
      o(b), _();
    } }, u = Te(), g = _e(u), v = (b) => {
      var y = tv();
      Ne(w(y), () => e(l)), x(y), h(b, y);
    }, p = (b) => {
      var y = Te(), m = _e(y), z = (C) => {
        {
          let A = d(() => {
            var O, V;
            return (V = (O = o()) == null ? void 0 : O.inventoryQuantity) != null ? V : null;
          });
          Zd(C, { get lowStockAlert() {
            return s().lowStockAlert;
          }, get inventoryQuantity() {
            return e(A);
          } });
        }
      };
      F(m, (C) => {
        s().lowStockAlertEnabled && s().lowStockAlert && C(z);
      }, !0), h(b, y);
    };
    F(g, (b) => {
      e(l) ? b(v) : b(p, !1);
    }), h(n, u);
    var f = it(i);
    return a(), f;
  }
  Je(wa, { dealBlock: {}, variant: {} }, [], [], !0);
  var nv = $('<div class="kaching-bundles__bar-sold-out-badge"><!></div>');
  function ji(n, t) {
    at(t, !0);
    const [r, a] = kt(), s = k(t, "showAsSoldOut", 7), o = k(t, "replaceLiquid", 7), c = Tt(), l = d(() => o()(Ve(c, "$translate", r)(s().label)));
    var i = { get showAsSoldOut() {
      return s();
    }, set showAsSoldOut(v) {
      s(v), _();
    }, get replaceLiquid() {
      return o();
    }, set replaceLiquid(v) {
      o(v), _();
    } }, u = nv();
    Ne(w(u), () => e(l)), x(u), h(n, u);
    var g = it(i);
    return a(), g;
  }
  Je(ji, { showAsSoldOut: {}, replaceLiquid: {} }, [], [], !0);
  const zl = (n) => {
    const { opacity: t, backgroundColor: r, textColor: a, textSize: s } = n;
    return fn({ "kaching-bundles-show-as-sold-out-opacity": t.toString(), "kaching-bundles-show-as-sold-out-background-color": We(r), "kaching-bundles-show-as-sold-out-text-color": We(a), "kaching-bundles-show-as-sold-out-text-size": s + "px" });
  };
  var rv = $('<img alt="Decrease"/>'), av = $('<img alt="Increase"/>'), iv = $('<div class="kaching-bundles__quantity-selector"><!> <input type="number" class="kaching-bundles__quantity-selector__input" step="1"/> <!></div>');
  function $l(n, t) {
    at(t, !0);
    const [r, a] = kt();
    let s = k(t, "value", 7), o = k(t, "onChange", 7), c = k(t, "min", 7, 1);
    const l = Tt(), i = d(() => s() <= c());
    var u = { get value() {
      return s();
    }, set value(b) {
      s(b), _();
    }, get onChange() {
      return o();
    }, set onChange(b) {
      o(b), _();
    }, get min() {
      return c();
    }, set min(b = 1) {
      c(b), _();
    } }, g = iv(), v = w(g);
    {
      let b = d(() => ["kaching-bundles__quantity-selector__button", e(i) && "kaching-bundles__quantity-selector__button--disabled"]);
      Yt(v, { element: "div", get class() {
        return e(b);
      }, onclick: function(y) {
        y.stopPropagation(), o()(Math.max(s() - 1, c()));
      }, get disabled() {
        return e(i);
      }, children: (y, m) => {
        var z = rv();
        ke(() => Ie(z, "src", fd)), h(y, z);
      }, $$slots: { default: !0 } });
    }
    var p = E(v, 2);
    ka(p), Yt(E(p, 2), { element: "div", class: "kaching-bundles__quantity-selector__button", onclick: function(b) {
      b.stopPropagation(), o()(s() + 1);
    }, children: (b, y) => {
      var m = av();
      ke(() => Ie(m, "src", vd)), h(b, m);
    }, $$slots: { default: !0 } }), x(g), ke((b) => {
      Ie(p, "aria-label", b), oi(p, s()), Ie(p, "min", c());
    }, [() => Ve(l, "$translate", r)("system.quantity")]), ns("blur", p, function(b) {
      const y = b.target, m = parseInt(y.value);
      o()(isNaN(m) ? c() : Math.max(m, c()));
    }), h(n, g);
    var f = it(u);
    return a(), f;
  }
  function lv(n, t) {
    n.target === n.currentTarget && t()();
  }
  Je($l, { value: {}, onChange: {}, min: {} }, [], [], !0);
  var sv = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-multiple-gifts-modal" role="none"><div class="kaching-bundles__choose-multiple-gifts-modal__content"><!></div></div></div>');
  function Jd(n, t) {
    at(t, !0);
    const r = k(t, "dealBlock", 7), a = k(t, "multipleGiftsSelector", 7), s = k(t, "products", 23, () => []), o = k(t, "initialSelectedGifts", 7), c = k(t, "isOpen", 7), l = k(t, "onConfirm", 7), i = k(t, "onClose", 7);
    var u = { get dealBlock() {
      return r();
    }, set dealBlock(f) {
      r(f), _();
    }, get multipleGiftsSelector() {
      return a();
    }, set multipleGiftsSelector(f) {
      a(f), _();
    }, get products() {
      return s();
    }, set products(f = []) {
      s(f), _();
    }, get initialSelectedGifts() {
      return o();
    }, set initialSelectedGifts(f) {
      o(f), _();
    }, get isOpen() {
      return c();
    }, set isOpen(f) {
      c(f), _();
    }, get onConfirm() {
      return l();
    }, set onConfirm(f) {
      l(f), _();
    }, get onClose() {
      return i();
    }, set onClose(f) {
      i(f), _();
    } }, g = Te(), v = _e(g), p = (f) => {
      Ml(f, { target: "body", children: (b, y) => {
        var m = sv(), z = w(m);
        z.__click = [lv, i];
        var C = w(z);
        Bo(w(C), { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return a();
        }, get products() {
          return s();
        }, get initialSelectedGifts() {
          return o();
        }, get onConfirm() {
          return l();
        }, get onClose() {
          return i();
        } }), x(C), x(z), x(m), ke((A) => Ft(z, A), [() => (function(A) {
          var O;
          return fn({ "kaching-choose-multiple-gifts-overlay-color": We(((O = A.chooseMultipleGiftsModal) == null ? void 0 : O.overlayColor) || Zp) });
        })(r())]), h(b, m);
      }, $$slots: { default: !0 } });
    };
    return F(v, (f) => {
      c() && f(p);
    }), h(n, g), it(u);
  }
  Fn(["click"]), Je(Jd, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, isOpen: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var ov = Tn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33337V10.6667M5.33398 8.00004H10.6673M14.6673 8.00004C14.6673 11.6819 11.6825 14.6667 8.00065 14.6667C4.31875 14.6667 1.33398 11.6819 1.33398 8.00004C1.33398 4.31814 4.31875 1.33337 8.00065 1.33337C11.6825 1.33337 14.6673 4.31814 14.6673 8.00004Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Yd(n) {
    h(n, ov());
  }
  Je(Yd, {}, [], [], !0);
  var cv = $('<img alt="" class="kaching-bundles__multiple-gifts-selector__photo"/>'), uv = $('<span class="kaching-bundles__multiple-gifts-selector__photo-count"> </span>'), dv = $('<div class="kaching-bundles__multiple-gifts-selector__photos"><!> <!></div>'), gv = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), hv = $('<div class="kaching-bundles__free-gift__image"></div>'), pv = $('<span class="kaching-bundles__free-gift__text"><!></span>'), bv = $('<span class="kaching-bundles__free-gift__add-button"><!></span>'), fv = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), vv = $('<div class="kaching-bundles__multiple-gifts-selector kaching-bundles__free-gift"><!> <div class="kaching-bundles__free-gift__main"><!> <span class="kaching-bundles__free-gift__content"><!> <!></span></div> <!> <!></div>');
  function Kd(n, t) {
    at(t, !0);
    const r = () => Ve(f, "$formatPrice", s), a = () => Ve(b, "$translate", s), [s, o] = kt();
    let c = k(t, "dealBlock", 7), l = k(t, "multipleGiftsSelector", 7), i = k(t, "selectedVariants", 7), u = k(t, "otherProducts", 7), g = k(t, "onConfirm", 7), v = Oe(!1);
    const p = d(() => (l().products || []).flatMap((M) => {
      const W = Ut(M.id), de = u().find((N) => N.id === W);
      if (!de || !de.availableForSale) return [];
      const ge = Cr(de);
      if (M.variantGIDs && M.variantGIDs.length > 0) {
        const N = M.variantGIDs.map(Ut), J = ge.variants.filter((ae) => N.includes(ae.id));
        return J.length > 0 ? { ...ge, variants: J } : [];
      }
      return ge;
    })), f = vn(), b = Tt(), y = Vn(), m = d(() => qo({ dealBlock: c(), imageSize: l().imageSize })), z = d(() => {
      if (l().mediaImageGID) return Ve(y, "$getMediaImageUrl", s)(l().mediaImageGID);
    }), C = d(() => l().showProductPhotos === !0), A = d(() => i().flatMap((M) => Array.from({ length: M.quantity }, () => M.variant.image || M.product.image)).filter((M) => !!M)), O = d(() => e(A).slice(0, 3)), V = d(() => e(A).length - e(O).length), R = d(() => i().reduce((M, W) => M + W.quantity, 0)), U = d(() => e(R) >= l().maxQuantity), G = d(() => (function(M, W) {
      if (!W.length) return 0;
      let de = W.reduce((ge, N) => ge + N.fullPrice * N.quantity, 0);
      return W.some((ge) => ge.variant.compareAtPrice) && M.useProductCompareAtPrice && (de = Math.max(de, W.reduce((ge, N) => ge + (N.variant.compareAtPrice || 0), 0))), de;
    })(c(), i())), H = d(() => new Map((l().products || []).flatMap((M) => {
      const W = u().find((de) => de.id === Ut(M.id));
      return W ? [[W.id, W]] : [];
    }))), I = d(() => i().flatMap((M) => Array.from({ length: M.quantity }, () => M.product.title))), T = d(() => _n({ priceFormatter: r(), product: void 0, products: e(H), selectedProductTitles: e(I), totalFullPrice: e(G), totalDiscountedPrice: 0, quantity: e(R), unitQuantity: null })), ue = d(() => e(U) ? e(T)(a()(l().textAfterSelection)) : e(T)(a()(l().textBeforeSelection)));
    var re = { get dealBlock() {
      return c();
    }, set dealBlock(M) {
      c(M), _();
    }, get multipleGiftsSelector() {
      return l();
    }, set multipleGiftsSelector(M) {
      l(M), _();
    }, get selectedVariants() {
      return i();
    }, set selectedVariants(M) {
      i(M), _();
    }, get otherProducts() {
      return u();
    }, set otherProducts(M) {
      u(M), _();
    }, get onConfirm() {
      return g();
    }, set onConfirm(M) {
      g(M), _();
    } }, P = vv(), S = w(P);
    {
      let M = d(() => {
        var W;
        return (W = e(ue)) == null ? void 0 : W.replace(/<[^>]*>/g, "");
      });
      Yt(S, { element: "span", class: "kaching-bundles__multiple-gifts-selector__clickable-overlay", get "aria-label"() {
        return e(M);
      }, onclick: () => ee(v, !0) });
    }
    var B = E(S, 2), q = w(B), Y = (M) => {
      var W = dv(), de = w(W);
      Gt(de, 17, () => e(O), jr, (J, ae) => {
        var ce = cv();
        ke(() => Ie(ce, "src", e(ae))), h(J, ce);
      });
      var ge = E(de, 2), N = (J) => {
        var ae = uv(), ce = w(ae);
        x(ae), ke(() => {
          var me;
          return pt(ce, `+${(me = e(V)) != null ? me : ""}`);
        }), h(J, ae);
      };
      F(ge, (J) => {
        e(V) > 0 && J(N);
      }), x(W), h(M, W);
    }, Q = (M) => {
      var W = Te(), de = _e(W), ge = (J) => {
        var ae = gv();
        ke(() => {
          Ie(ae, "src", e(z)), Ie(ae, "height", l().imageSize || 0);
        }), h(J, ae);
      }, N = (J) => {
        var ae = Te(), ce = _e(ae), me = (be) => {
          var Se = hv();
          let L;
          ke((pe) => L = Ft(Se, "", L, pe), [() => {
            var pe;
            return { height: `${(pe = l().imageSize) != null ? pe : ""}px` };
          }]), h(be, Se);
        };
        F(ce, (be) => {
          l().imageSize && be(me);
        }, !0), h(J, ae);
      };
      F(de, (J) => {
        e(z) ? J(ge) : J(N, !1);
      }, !0), h(M, W);
    };
    F(q, (M) => {
      e(C) && e(O).length > 0 ? M(Y) : M(Q, !1);
    });
    var oe = E(q, 2), j = w(oe), D = (M) => {
      var W = Te();
      lt(_e(W), () => e(ue), (de) => {
        var ge = pv();
        Ne(w(ge), () => e(ue)), x(ge), h(de, ge);
      }), h(M, W);
    };
    F(j, (M) => {
      e(ue) && M(D);
    });
    var se = E(j, 2), te = (M) => {
      var W = bv();
      Yd(w(W)), x(W), h(M, W);
    };
    F(se, (M) => {
      e(U) || M(te);
    }), x(oe), x(B);
    var X = E(B, 2), ne = (M) => {
      var W = Te();
      lt(_e(W), () => e(G), (de) => {
        var ge = fv();
        Ne(w(ge), () => r()(e(G))), x(ge), h(de, ge);
      }), h(M, W);
    };
    F(X, (M) => {
      l().showPrice && e(G) > 0 && M(ne);
    }), Jd(E(X, 2), { get dealBlock() {
      return c();
    }, get multipleGiftsSelector() {
      return l();
    }, get isOpen() {
      return e(v);
    }, get products() {
      return e(p);
    }, get initialSelectedGifts() {
      return i();
    }, get onConfirm() {
      return g();
    }, onClose: () => ee(v, !1) }), x(P), ke(() => {
      Ie(P, "data-multiple-gifts-selector-id", l().id), Ft(P, e(m));
    }), h(n, P);
    var he = it(re);
    return o(), he;
  }
  Je(Kd, { dealBlock: {}, multipleGiftsSelector: {}, selectedVariants: {}, otherProducts: {}, onConfirm: {} }, [], [], !0);
  var _v = $('<div class="kaching-bundles__free-gift__divider"></div>'), kv = $("<!> <!>", 1);
  function Ri(n, t) {
    at(t, !0);
    let r = k(t, "dealBlock", 7), a = k(t, "multipleGiftsSelectors", 7), s = k(t, "sellingPlan", 7), o = k(t, "otherProducts", 7), c = k(t, "sets", 7, 1), l = k(t, "onChange", 7), i = Oe(ut({})), u = d(() => a().filter((b) => !b.applyOnlyForSubscriptions || s()).map((b) => ({ ...b, maxQuantity: b.maxQuantity * c() })));
    const g = d(() => Object.fromEntries(e(u).map((b) => [b.id, (e(i)[b.id] || []).slice(0, b.maxQuantity)])));
    function v(b, y) {
      const m = e(u).find((z) => z.id === b);
      m && (y.reduce((z, C) => z + C.quantity, 0) > m.maxQuantity || (e(i)[b] = y));
    }
    tt(() => {
      const b = e(u).flatMap((y) => {
        const m = y.includeInCompareAt === !0;
        return e(g)[y.id].map((z) => ({ id: z.id, quantity: z.quantity, variant: z.variant, product: z.product, fullPrice: z.fullPrice, includeInCompareAt: m }));
      });
      l()(b);
    });
    var p = { get dealBlock() {
      return r();
    }, set dealBlock(b) {
      r(b), _();
    }, get multipleGiftsSelectors() {
      return a();
    }, set multipleGiftsSelectors(b) {
      a(b), _();
    }, get sellingPlan() {
      return s();
    }, set sellingPlan(b) {
      s(b), _();
    }, get otherProducts() {
      return o();
    }, set otherProducts(b) {
      o(b), _();
    }, get sets() {
      return c();
    }, set sets(b = 1) {
      c(b), _();
    }, get onChange() {
      return l();
    }, set onChange(b) {
      l(b), _();
    } }, f = Te();
    return Gt(_e(f), 19, () => e(u), (b) => b.id, (b, y, m) => {
      var z = kv(), C = _e(z);
      Kd(C, { get dealBlock() {
        return r();
      }, get multipleGiftsSelector() {
        return e(y);
      }, get selectedVariants() {
        return e(g)[e(y).id];
      }, onConfirm: v, get otherProducts() {
        return o();
      } });
      var A = E(C, 2), O = (V) => {
        h(V, _v());
      };
      F(A, (V) => {
        e(m) < e(u).length - 1 && V(O);
      }), h(b, z);
    }), h(n, f), it(p);
  }
  Je(Ri, { dealBlock: {}, multipleGiftsSelectors: {}, sellingPlan: {}, otherProducts: {}, sets: {}, onChange: {} }, [], [], !0);
  const Ro = (n, t) => n.unlockAtBarOnly ? t === n.unlockAtBar : t >= n.unlockAtBar, Xd = (n, t) => !!n.applyOnlyForSubscriptions && !t;
  var mv = Tn('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function eg(n) {
    h(n, mv());
  }
  Je(eg, {}, [], [], !0);
  var xv = $('<img alt="" class="kaching-bundles__deal-bar-progressive-gift__image"/>'), yv = $('<img class="kaching-bundles__deal-bar-progressive-gift__image kaching-bundles__deal-bar-progressive-gift__image--locked-product"/>'), wv = $('<span class="kaching-bundles__deal-bar-progressive-gift__lock-icon kaching-bundles__deal-bar-progressive-gift__image"><!></span>'), Pv = $('<img class="kaching-bundles__deal-bar-progressive-gift__image"/>'), Sv = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), Bv = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), Cv = $('<span class="kaching-bundles__deal-bar-progressive-gift__label-crossed-out"><!></span>'), Iv = $('<span class="kaching-bundles__deal-bar-progressive-gift__label"><!> <!></span>'), Mv = $('<div><div class="kaching-bundles__deal-bar-progressive-gift__main"><!> <div class="kaching-bundles__deal-bar-progressive-gift__content"><!> <!></div></div> <!></div>');
  function tg(n, t) {
    at(t, !0);
    const r = () => Ve(z, "$config", o), a = () => Ve(b, "$translate", o), s = () => Ve(m, "$getMediaImageUrl", o), [o, c] = kt(), l = k(t, "progressiveGifts", 7), i = k(t, "gift", 7), u = k(t, "product", 7), g = k(t, "selectedDealBarIndex", 7), v = k(t, "sellingPlan", 7), p = k(t, "selected", 7), f = k(t, "onChange", 7), b = Tt(), y = vn(), m = Vn(), z = yn(), C = d(() => i().differentVariantsEnabled), A = d(() => {
      var ne;
      return u() ? i().variantGIDs ? i().variantGIDs.map(Ut) : (ne = u()) == null ? void 0 : ne.variants.map((he) => he.id) : null;
    }), O = d(() => {
      if (u()) return { ...u(), variants: u().variants.filter((ne) => (r().preview || ne.availableForSale) && (!e(A) || e(A).includes(ne.id))) };
    });
    let V = Oe(ut([]));
    const R = d(() => (function(ne, he, M) {
      return ne.length > 0 ? ne : he != null && he.availableForSale && he.variants.length > 0 ? Array.from({ length: M }, () => he.variants[0].id) : [];
    })(e(V), e(O), i().quantity)), U = d(() => u() && e(R).length > 0 ? e(R).map((ne) => u().variants.find((he) => he.id === ne)).filter((ne) => ne !== void 0) : []), G = d(() => {
      var ne;
      return _n({ priceFormatter: Ve(y, "$formatPrice", o), product: u(), totalFullPrice: ((ne = e(U)) == null ? void 0 : ne.reduce((he, M) => {
        var W;
        return he + ((W = M == null ? void 0 : M.price) != null ? W : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: Ir(e(U).map((he) => ({ variant: he, quantity: 1 }))) });
    }), H = d(() => e(G)(a()(i().title))), I = d(() => e(G)(a()(i().lockedTitle))), T = d(() => e(G)(a()(i().label))), ue = d(() => e(G)(a()(i().labelCrossedOut))), re = d(() => g() === null || !Ro(i(), g() + 1)), P = d(() => e(re) || Xd(i(), v())), S = d(() => {
      var ne, he, M;
      return i().giftType === "shipping" ? Go : ((he = (ne = e(U)) == null ? void 0 : ne[0]) == null ? void 0 : he.image) || ((M = u()) == null ? void 0 : M.image);
    }), B = d(() => i().mediaImageGID ? s()(i().mediaImageGID) : e(S)), q = d(() => l().dealBarStyle && s()(l().dealBarStyle.lockedMediaImageGID)), Y = d(() => l().showLockedGiftProducts && !e(q)), Q = d(() => e(Y) && !!e(B));
    tt(() => {
      if (p()) if (u() && e(U) && !e(re)) {
        const ne = Object.values(e(U).reduce((he, M) => (he[M.id] ? he[M.id].quantity += 1 : he[M.id] = { variant: M, quantity: 1 }, he), {}));
        Xt(() => f()({ product: u(), variants: ne }));
      } else Xt(() => f()(void 0));
      else Xt(() => f()(void 0));
    }), br(() => {
      i().productGID, ee(V, [], !0);
    }), tt(() => {
      e(P) && e(B) && (new Image().src = e(B));
    });
    const oe = d(() => {
      var ne;
      return i().giftType === "product" && !((ne = u()) != null && ne.availableForSale);
    });
    var j = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(ne) {
      l(ne), _();
    }, get gift() {
      return i();
    }, set gift(ne) {
      i(ne), _();
    }, get product() {
      return u();
    }, set product(ne) {
      u(ne), _();
    }, get selectedDealBarIndex() {
      return g();
    }, set selectedDealBarIndex(ne) {
      g(ne), _();
    }, get sellingPlan() {
      return v();
    }, set sellingPlan(ne) {
      v(ne), _();
    }, get selected() {
      return p();
    }, set selected(ne) {
      p(ne), _();
    }, get onChange() {
      return f();
    }, set onChange(ne) {
      f(ne), _();
    } }, D = Te(), se = _e(D), te = (ne) => {
      var he = Te(), M = _e(he), W = (de) => {
        var ge = Mv();
        let N;
        var J = w(ge), ae = w(J), ce = (Me) => {
          var Ae = Te(), Be = _e(Ae), Fe = (K) => {
            var we = xv();
            ke(() => Ie(we, "src", e(q))), h(K, we);
          }, Le = (K) => {
            var we = Te(), ie = _e(we), ze = (Qe) => {
              var Ce = yv();
              ke(() => {
                var Pe, Ee;
                Ie(Ce, "src", e(B)), Ie(Ce, "alt", (Ee = (Pe = u()) == null ? void 0 : Pe.title) != null ? Ee : "");
              }), h(Qe, Ce);
            }, Ge = (Qe) => {
              var Ce = Te(), Pe = _e(Ce), Ee = (qe) => {
                var et = wv();
                eg(w(et)), x(et), h(qe, et);
              };
              F(Pe, (qe) => {
                e(Y) || qe(Ee);
              }, !0), h(Qe, Ce);
            };
            F(ie, (Qe) => {
              e(Q) ? Qe(ze) : Qe(Ge, !1);
            }, !0), h(K, we);
          };
          F(Be, (K) => {
            e(q) ? K(Fe) : K(Le, !1);
          }), h(Me, Ae);
        }, me = (Me) => {
          var Ae = Te(), Be = _e(Ae), Fe = (Le) => {
            var K = Pv();
            ke(() => {
              var we, ie;
              Ie(K, "src", e(B)), Ie(K, "alt", (ie = (we = u()) == null ? void 0 : we.title) != null ? ie : "");
            }), h(Le, K);
          };
          F(Be, (Le) => {
            e(B) && Le(Fe);
          }, !0), h(Me, Ae);
        };
        F(ae, (Me) => {
          e(P) ? Me(ce) : Me(me, !1);
        });
        var be = E(ae, 2), Se = w(be), L = (Me) => {
          var Ae = Sv();
          Ne(w(Ae), () => e(I)), x(Ae), h(Me, Ae);
        }, pe = (Me) => {
          var Ae = Te(), Be = _e(Ae), Fe = (Le) => {
            var K = Bv();
            Ne(w(K), () => e(H)), x(K), h(Le, K);
          };
          F(Be, (Le) => {
            e(H) && Le(Fe);
          }, !0), h(Me, Ae);
        };
        F(Se, (Me) => {
          e(P) && !e(Y) ? Me(L) : Me(pe, !1);
        });
        var Z = E(Se, 2), fe = (Me) => {
          var Ae = Te();
          Gt(_e(Ae), 17, () => ({ length: e(C) ? i().quantity : 1 }), jr, (Be, Fe, Le) => {
            var K = Te(), we = _e(K), ie = (ze) => {
              {
                let Ge = d(() => e(C) ? Le + 1 : void 0);
                Wn(ze, { get product() {
                  return e(O);
                }, get selectedVariantId() {
                  return e(R)[Le];
                }, get number() {
                  return e(Ge);
                }, forceDropdown: !0, onChange: (Qe) => (function(Ce, Pe) {
                  e(C) ? ee(V, [...e(R).slice(0, Pe), Ce, ...e(R).slice(Pe + 1)], !0) : ee(V, Array.from({ length: i().quantity }, () => Ce), !0);
                })(Qe, Le) });
              }
            };
            F(we, (ze) => {
              e(R)[Le] !== void 0 && ze(ie);
            }), h(Be, K);
          }), h(Me, Ae);
        };
        F(Z, (Me) => {
          p() && !e(P) && e(O) && e(O).variants.length > 1 && e(R).length > 0 && Me(fe);
        }), x(be), x(J);
        var xe = E(J, 2), $e = (Me) => {
          var Ae = Te(), Be = _e(Ae), Fe = (Le) => {
            var K = Iv(), we = w(K), ie = (Qe) => {
              var Ce = Te();
              Ne(_e(Ce), () => e(T)), h(Qe, Ce);
            };
            F(we, (Qe) => {
              e(T) && Qe(ie);
            });
            var ze = E(we, 2), Ge = (Qe) => {
              var Ce = Cv();
              Ne(w(Ce), () => e(ue)), x(Ce), h(Qe, Ce);
            };
            F(ze, (Qe) => {
              e(ue) && Qe(Ge);
            }), x(K), h(Le, K);
          };
          F(Be, (Le) => {
            e(P) && !l().showLockedGiftLabels || Le(Fe);
          }), h(Me, Ae);
        };
        F(xe, (Me) => {
          (e(T) || e(ue)) && Me($e);
        }), x(ge), ke((Me) => N = Wt(ge, 1, "kaching-bundles__deal-bar-progressive-gift", null, N, Me), [() => ({ "kaching-bundles__deal-bar-progressive-gift--locked": e(P), "kaching-bundles__deal-bar-progressive-gift--out-of-stock": r().preview && e(oe) })]), h(de, ge);
      };
      F(M, (de) => {
        var ge;
        (u() && ((ge = e(U)) != null && ge.length) || i().giftType === "shipping") && de(W);
      }), h(ne, he);
    };
    F(se, (ne) => {
      e(P) && l().hideLockedGifts || ne(te);
    }), h(n, D);
    var X = it(j);
    return c(), X;
  }
  Je(tg, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, sellingPlan: {}, selected: {}, onChange: {} }, [], [], !0);
  var zv = $('<div class="kaching-bundles__deal-bar-progressive-gifts"></div>');
  function Ni(n, t) {
    at(t, !0);
    const [r, a] = kt(), s = k(t, "progressiveGifts", 7), o = k(t, "dealBlock", 7), c = k(t, "dealBar", 7), l = k(t, "otherProducts", 7), i = k(t, "selectedDealBarIndex", 7), u = k(t, "sellingPlan", 7), g = k(t, "selected", 7), v = k(t, "onChange", 7), p = d(() => o().dealBars.findIndex((G) => G.id === c().id)), f = yn();
    let b = Oe(ut({}));
    const y = d(() => {
      var G, H;
      return ((I) => I ? fn({ "kaching-deal-bar-progressive-gift-image-size": I.imageSize + "px", "kaching-deal-bar-progressive-gift-corner-radius": I.cornerRadius + "px", "kaching-deal-bar-progressive-gift-label-background-color": We(I.labelBackgroundColor), "kaching-deal-bar-progressive-gift-label-text-color": We(I.labelTextColor), "kaching-deal-bar-progressive-gift-label-text-size": I.labelTextSize + "px", "kaching-deal-bar-progressive-gift-text-color": We(I.textColor), "kaching-deal-bar-progressive-gift-selected-text-color": We(I.selectedTextColor), "kaching-deal-bar-progressive-gift-text-size": I.textSize + "px", "kaching-deal-bar-progressive-gift-locked-label-background-color": We(I.lockedLabelBackgroundColor), "kaching-deal-bar-progressive-gift-locked-label-text-color": We(I.lockedLabelTextColor), "kaching-deal-bar-progressive-gift-locked-label-text-size": I.lockedLabelTextSize + "px", "kaching-deal-bar-progressive-gift-locked-text-color": We(I.lockedTextColor), "kaching-deal-bar-progressive-gift-locked-text-size": I.lockedTextSize + "px", "kaching-deal-bar-progressive-gift-locked-icon-color": We(I.lockedIconColor) }) : "")((H = (G = o().progressiveGifts) == null ? void 0 : G.dealBarStyle) != null ? H : null);
    });
    function m() {
      const G = Object.entries(e(b)).map(([H, I]) => ({ id: H, variants: I.variants, product: I.product }));
      v()(G);
    }
    const z = d(() => {
      var G, H, I;
      return (I = (H = (G = s()) == null ? void 0 : G.gifts) == null ? void 0 : H.filter((T) => Ro(T, e(p) + 1))) != null ? I : [];
    }), C = d(() => e(z).flatMap((G) => {
      const H = G.giftType === "product" && G.productGID ? l().find((T) => T.id === Ut(G.productGID)) : void 0;
      if (!Ve(f, "$config", r).preview && G.giftType === "product" && !(H != null && H.availableForSale)) return [];
      const I = H && Cr(H);
      return { gift: G, product: I };
    }));
    tt(() => {
      const G = new Set(e(z).map((I) => I.id)), H = Object.keys(e(b)).filter((I) => !G.has(I));
      if (H.length) {
        for (const I of H) delete e(b)[I];
        g() && m();
      }
    });
    var A = { get progressiveGifts() {
      return s();
    }, set progressiveGifts(G) {
      s(G), _();
    }, get dealBlock() {
      return o();
    }, set dealBlock(G) {
      o(G), _();
    }, get dealBar() {
      return c();
    }, set dealBar(G) {
      c(G), _();
    }, get otherProducts() {
      return l();
    }, set otherProducts(G) {
      l(G), _();
    }, get selectedDealBarIndex() {
      return i();
    }, set selectedDealBarIndex(G) {
      i(G), _();
    }, get sellingPlan() {
      return u();
    }, set sellingPlan(G) {
      u(G), _();
    }, get selected() {
      return g();
    }, set selected(G) {
      g(G), _();
    }, get onChange() {
      return v();
    }, set onChange(G) {
      v(G), _();
    } }, O = Te(), V = _e(O), R = (G) => {
      var H = zv();
      Gt(H, 21, () => e(C), ({ gift: I, product: T }) => I.id, (I, T) => {
        let ue = () => e(T).gift;
        tg(I, { get selectedDealBarIndex() {
          return i();
        }, get selected() {
          return g();
        }, get gift() {
          return ue();
        }, get product() {
          return e(T).product;
        }, get progressiveGifts() {
          return s();
        }, get sellingPlan() {
          return u();
        }, onChange: (re) => (function(P, S) {
          S ? e(b)[P] = S : delete e(b)[P], g() && m();
        })(ue().id, re) });
      }), x(H), ke(() => Ft(H, e(y))), h(G, H);
    };
    F(V, (G) => {
      var H;
      o().progressiveGiftsEnabled && ((H = s()) == null ? void 0 : H.layout) === "deal-bar" && e(C).length > 0 && G(R);
    }), h(n, O);
    var U = it(A);
    return a(), U;
  }
  Je(Ni, { progressiveGifts: {}, dealBlock: {}, dealBar: {}, otherProducts: {}, selectedDealBarIndex: {}, sellingPlan: {}, selected: {}, onChange: {} }, [], [], !0);
  var $v = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function ng(n) {
    h(n, $v());
  }
  Je(ng, {}, [], [], !0);
  var Dv = Tn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3307 4L5.9974 11.3333L2.66406 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function rg(n) {
    h(n, Dv());
  }
  Je(rg, {}, [], [], !0);
  var Tv = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');
  function ag(n) {
    h(n, Tv());
  }
  Je(ag, {}, [], [], !0);
  var Vv = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function ig(n) {
    h(n, Vv());
  }
  Je(ig, {}, [], [], !0);
  var Av = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2787 3.45332C11.5092 2.98638 11.6245 2.75291 11.7809 2.67831C11.917 2.61341 12.0752 2.61341 12.2113 2.67831C12.3677 2.75291 12.483 2.98638 12.7135 3.45332L14.9002 7.88328C14.9682 8.02113 15.0022 8.09006 15.0519 8.14358C15.096 8.19096 15.1488 8.22935 15.2074 8.25662C15.2736 8.28742 15.3497 8.29854 15.5018 8.32077L20.3931 9.03571C20.9082 9.11099 21.1657 9.14863 21.2849 9.27444C21.3886 9.38389 21.4373 9.5343 21.4176 9.68377C21.3949 9.85558 21.2085 10.0372 20.8356 10.4004L17.2975 13.8464C17.1873 13.9538 17.1321 14.0076 17.0965 14.0715C17.065 14.128 17.0448 14.1902 17.037 14.2545C17.0282 14.3271 17.0412 14.403 17.0672 14.5547L17.9021 19.4221C17.9901 19.9355 18.0341 20.1922 17.9514 20.3445C17.8794 20.477 17.7514 20.57 17.6032 20.5975C17.4327 20.6291 17.2022 20.5078 16.7412 20.2654L12.3685 17.9658C12.2322 17.8942 12.1641 17.8584 12.0923 17.8443C12.0288 17.8318 11.9634 17.8318 11.8999 17.8443C11.8281 17.8584 11.76 17.8942 11.6237 17.9658L7.25102 20.2654C6.79001 20.5078 6.55951 20.6291 6.38907 20.5975C6.24078 20.57 6.11282 20.477 6.04083 20.3445C5.95809 20.1922 6.00212 19.9355 6.09017 19.4221L6.92498 14.5547C6.95101 14.403 6.96402 14.3271 6.95521 14.2545C6.94742 14.1902 6.92721 14.128 6.8957 14.0715C6.86012 14.0076 6.80497 13.9538 6.69468 13.8464L3.15665 10.4004C2.78376 10.0372 2.59731 9.85558 2.57462 9.68377C2.55488 9.5343 2.60365 9.38389 2.70734 9.27444C2.82653 9.14863 3.08407 9.11099 3.59914 9.03571L8.4904 8.32077C8.64252 8.29854 8.71857 8.28742 8.78481 8.25662C8.84346 8.22935 8.89626 8.19096 8.94028 8.14358C8.99 8.09006 9.02402 8.02113 9.09207 7.88328L11.2787 3.45332Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function lg(n) {
    h(n, Av());
  }
  Je(lg, {}, [], [], !0);
  var qv = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function sg(n) {
    h(n, qv());
  }
  Je(sg, {}, [], [], !0);
  const og = { checkmark: rg, dot: ag, arrow: ng, star: lg, heart: ig, "thumbs-up": sg };
  var Gv = $('<span class="kaching-bundles__highlights__icon"><img alt=""/></span>'), Fv = $('<span class="kaching-bundles__highlights__icon"><!></span>'), Ov = $('<div class="kaching-bundles__highlights__item"><!> <span class="kaching-bundles__highlights__text"><!></span></div>'), Lv = $("<div></div>");
  function Na(n, t) {
    at(t, !0);
    const [r, a] = kt(), s = k(t, "highlights", 7), o = k(t, "isSelected", 7), c = k(t, "replaceLiquid", 7), l = Vn(), i = Tt(), u = d(() => s().items.map((O) => Ve(i, "$translate", r)(O)).map((O) => c() ? c()(O) : O).filter((O) => O !== "")), g = d(() => ((O) => fn({ "kaching-highlights-icon-color": We(O.iconColor), "kaching-highlights-text-color": We(O.textColor), "kaching-highlights-icon-size": O.size + 2 + "px", "kaching-highlights-text-size": O.size + "px" }))(s())), v = d(() => {
      var O;
      return (O = s().layout) != null ? O : "vertical";
    }), p = d(() => {
      var O;
      return (O = s().iconType) != null ? O : "checkmark";
    }), f = d(() => og[e(p)]), b = d(() => {
      var O;
      return e(p) === "custom" ? Ve(l, "$getMediaImageUrl", r)((O = s().customIconGID) != null ? O : null) : void 0;
    });
    var y = { get highlights() {
      return s();
    }, set highlights(O) {
      s(O), _();
    }, get isSelected() {
      return o();
    }, set isSelected(O) {
      o(O), _();
    }, get replaceLiquid() {
      return c();
    }, set replaceLiquid(O) {
      c(O), _();
    } }, m = Te(), z = _e(m), C = (O) => {
      var V = Lv();
      let R;
      Gt(V, 21, () => e(u), jr, (U, G) => {
        var H = Ov(), I = w(H), T = (P) => {
          var S = Gv(), B = w(S);
          x(S), ke(() => Ie(B, "src", e(b))), h(P, S);
        }, ue = (P) => {
          var S = Te(), B = _e(S), q = (Y) => {
            var Q = Fv();
            fu(w(Q), () => e(f), (oe, j) => {
              j(oe, {});
            }), x(Q), h(Y, Q);
          };
          F(B, (Y) => {
            e(f) && Y(q);
          }, !0), h(P, S);
        };
        F(I, (P) => {
          e(p) === "custom" && e(b) ? P(T) : P(ue, !1);
        });
        var re = E(I, 2);
        Ne(w(re), () => e(G)), x(re), x(H), h(U, H);
      }), x(V), ke((U) => {
        R = Wt(V, 1, "kaching-bundles__highlights", null, R, U), Ft(V, e(g));
      }, [() => ({ "kaching-bundles__highlights--horizontal": e(v) === "horizontal" })]), h(O, V);
    };
    F(z, (O) => {
      e(u).length > 0 && (!s().showOnlyWhenSelected || o()) && O(C);
    }), h(n, m);
    var A = it(y);
    return a(), A;
  }
  function Ev(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  Je(Na, { highlights: {}, isSelected: {}, replaceLiquid: {} }, [], [], !0);
  var jv = $('<img class="kaching-bundles__bar-image" alt=""/>'), Rv = $('<div class="kaching-bundles__bar-radio"></div>'), Nv = $('<span class="kaching-bundles__bar-title"><!></span>'), Qv = $('<span class="kaching-bundles__bar-label"><!></span>'), Wv = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), Uv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Hv = $('<div class="kaching-bundles__bar-price"><!></div>'), Zv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Jv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), Yv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), Kv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Xv = $('<div class="kaching-bundles__bar-unit-price"><!> </div>'), e_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--primary"><!> <!></div> <div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!></div>', 1), t_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), n_ = $("<!> <!>", 1), r_ = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), a_ = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), i_ = $('<div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div>'), l_ = $('<div class="kaching-bundles__bar-variants"><!> <!></div>'), s_ = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), o_ = $('<div><input type="radio"/> <!> <!></div>');
  function No(n, t) {
    at(t, !0);
    const r = () => Ve(re, "$config", o), a = () => Ve(T, "$formatPrice", o), s = () => Ve(I, "$translate", o), [o, c] = kt();
    let l = k(t, "dealBlock", 7), i = k(t, "dealBar", 7), u = k(t, "product", 7), g = k(t, "otherProducts", 23, () => []), v = k(t, "complementaryProducts", 23, () => []), p = k(t, "customQuantity", 7, void 0), f = k(t, "currentVariantId", 7, void 0), b = k(t, "currentVariantSource", 7, void 0), y = k(t, "componentId", 7), m = k(t, "selected", 7, !1), z = k(t, "globalSellingPlan", 7, void 0), C = k(t, "selectedDealBarIndex", 7), A = k(t, "onProgressiveGiftsChange", 7), O = k(t, "onDealBarSelect", 7), V = k(t, "onDealBarDeselect", 7), R = k(t, "onVariantSelect", 7), U = k(t, "onVariantsChange", 7), G = k(t, "onPersonalisationsChange", 7), H = k(t, "personalisationInitialValues", 23, () => []);
    const I = Tt(), T = vn(), ue = Vn(), re = yn(), P = pi();
    let S = Oe(ut([])), B = Oe(ut([])), q = Oe(ut([]));
    const Y = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), Q = d(() => {
      var ve, Ze;
      return l() && ((Ze = (ve = l().defaultVariantsV2) == null ? void 0 : ve.find((ot) => Ut(ot.productGID) === u().id && ot.dealBarId === i().id)) == null ? void 0 : Ze.variantGIDs) || [];
    });
    let oe = d(() => X(i())), j = Oe(ut(X(i())));
    br(() => {
      ee(j, e(oe), !0);
    });
    const D = d(() => p() || e(j)), se = d(() => Math.max(1, Math.floor(e(D) / e(oe)))), te = d(() => e(D) && (function(ve) {
      return !ve.differentVariantsEnabled || u().variants.length === 1 ? !1 : ve.hideVariantPicker ? !0 : !(e(D) == 1 && !ve.showVariantsForSingleQuantity);
    })(l()));
    function X(ve) {
      return ve.dealBarType === gt.Bxgy ? ve.buyQuantity + ve.getQuantity : Number(ve.quantity);
    }
    let ne, he = Oe(ut([])), M = Oe(ut([])), W = !1;
    tt(() => {
      const ve = Vt(e(D), e(Q), f());
      if (JSON.stringify(e(he)) !== JSON.stringify(ve)) {
        const Ze = e(he).length === ve.length;
        ee(he, ve, !0), e(M).length === 0 ? ee(M, ve, !0) : Ze ? r().featureFlags.preserve_variant_selections && l().differentVariantsEnabled && new Set(e(M)).size !== 1 || r().featureFlags.propagate_picker_option_changes && b() === "bar" || ee(M, ve, !0) : ee(M, (function(ot, ct) {
          const It = e(de) ? null : ot[ot.length - 1];
          if (ot.length < ct) {
            const bt = ct - ot.length;
            return [...ot, ...Array(bt).fill(It)];
          }
          return ot.slice(0, ct);
        })(e(M), e(D)), !0);
      }
    }), tt(() => {
      if (!r().featureFlags.propagate_picker_option_changes) return;
      const ve = f(), Ze = b(), ot = ne;
      ve && (ne = ve), ot && ve && ot !== ve && Ze !== "bar" && (r().featureFlags.preserve_variant_selections && l().differentVariantsEnabled && W || Xt(() => {
        ee(M, (function(ct, It, bt) {
          const Pt = e(be).get(It), St = e(be).get(bt);
          if (!Pt || !St) return ct;
          const Bt = St.options.flatMap((Kt, Ye) => Kt === Pt.options[Ye] ? [] : [Ye]);
          if (Bt.length === 0) return ct;
          let Mt = !1;
          const rn = ct.map((Kt) => {
            const Ye = Kt != null ? e(be).get(Kt) : void 0;
            if (!Ye) return Kt;
            const ht = [...Ye.options];
            for (const zt of Bt) ht[zt] = St.options[zt];
            const dt = id(u().variants, ht);
            return dt && dt.id !== Kt ? (Mt = !0, dt.id) : Kt;
          });
          return Mt ? rn : ct;
        })(e(M), ot, ve), !0);
      }));
    });
    const de = d(() => {
      var ve;
      return (ve = i().requireVariantSelectionEnabled) != null && ve && !!e(te);
    });
    let ge = !1;
    br(() => {
      const ve = !!e(te);
      ve && !ge && e(de) && Xt(() => {
        ee(M, Vt(e(D), e(Q), f()), !0);
      }), ge = ve;
    });
    const N = d(() => e(de) ? Vt(e(D), e(Q), f(), { fillUnselectedSlots: !0 }) : []), J = d(() => e(M).filter((ve) => ve != null)), ae = d(() => e(de) ? e(M).map((ve, Ze) => {
      var ot;
      return (ot = ve != null ? ve : e(N)[Ze]) != null ? ot : null;
    }) : e(M)), ce = d(() => e(ae).filter((ve) => ve != null)), me = d(() => Et(e(ce))), be = d(() => new Map(u().variants.map((ve) => [ve.id, ve])));
    let Se = Oe(void 0);
    const L = d(() => Pl(u(), e(me).map((ve) => ve.variant))), pe = d(() => {
      var ve, Ze;
      return (i().sellingPlanEnabled || l().subscriptionsEnabled && ((ve = l().subscriptions) == null ? void 0 : ve.layout) === "link" && ((Ze = l().subscriptions) == null ? void 0 : Ze.subscribeByDefault)) && (!l().subscriptionsEnabled || !!z());
    }), Z = d(() => e(pe) ? Io(i(), e(L), e(Se)) : void 0), fe = d(() => Mo(e(Z), z(), e(L), u().requiresSellingPlan)), xe = d(() => (function(ve, Ze, ot, ct) {
      return ot.map(({ variant: bt, quantity: Pt }) => {
        let St = (function(Mt, rn) {
          var Kt;
          if (!rn) return Mt.price;
          const Ye = Mt.sellingPlans.find((ht) => ht.id === rn.id);
          return Ye && Ye.perDeliveryPrice !== Ye.price ? Math.max((Kt = Ye.compareAtPrice) != null ? Kt : Mt.price, Mt.price) : Mt.price;
        })(bt, ct);
        const Bt = ve.useProductCompareAtPrice || (Ze.dealBarType === void 0 || Ze.dealBarType === gt.QuantityBreak) && Ze.discountType === "default";
        return bt.compareAtPrice && Bt && (St = Math.max(St, bt.compareAtPrice)), St * Pt;
      }).reduce((bt, Pt) => bt + Pt, 0);
    })(l(), i(), e(me), e(fe))), $e = d(() => Cl(e(xe), e(S), e(B))), Me = d(() => Math.ceil(e(xe) / e(D))), Ae = d(() => Ao(e(D) === 1, e($e), e(Me))), Be = d(() => l() && Pe(e(me), e(fe))), Fe = d(() => e(me)[0] && So(e(me)[0].variant)), Le = d(() => Ir(e(me))), K = d(() => e(Le) ? e(Be) / e(Le) : null), we = d(() => _n({ priceFormatter: a(), product: u(), selectedVariants: e(me), totalFullPrice: e(xe), totalCompareAtPrice: e($e), totalDiscountedPrice: e(Be), quantity: e(D), dealBar: i(), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: e(Le), sellingPlan: e(fe) })), ie = d(() => e(we)(s()(i().title))), ze = d(() => e(we)(s()(i().subtitle))), Ge = d(() => e(we)(s()(i().label))), Qe = d(() => Sl(l(), i()).map((ve) => Ea(ve, s(), e(we)))), Ce = d(() => ja(e(Qe)));
    function Pe(ve, Ze) {
      switch (i().dealBarType) {
        case void 0:
        case gt.QuantityBreak:
          return yd(i(), ve, r().currencyRate, e(Y), Ze, r().featureFlags.percentage_cents_rounding_workaround);
        case gt.Bxgy:
          return wd(i(), ve, r().currencyRate, e(Y), Ze);
      }
    }
    const Ee = d(() => Math.ceil(e(Be) / e(D))), qe = d(() => e($e) > e(Be)), et = d(() => r().featureFlags.variant_images && new Set(u().variants.map((ve) => ve.image).filter((ve) => ve)).size > 1), yt = d(() => `${i().id}_${y()}`);
    function rt(ve) {
      m() && (ve.preventDefault(), ve.stopPropagation(), V()());
    }
    function Vt(ve, Ze, ot, { fillUnselectedSlots: ct = !1 } = {}) {
      let It = [];
      for (let bt = 0; bt < ve; bt++) {
        let Pt = Ze[bt];
        if (!Pt && ve > X(i()) && Ze.filter((St) => St).length === X(i()) && (Pt = Ze[Ze.length - 1]), Pt) {
          const St = Ut(Pt);
          if (u().variants.find((Bt) => Bt.id == St)) {
            It.push(St);
            continue;
          }
        }
        e(de) ? It.push(ct && ot != null ? ot : null) : ot && It.push(ot);
      }
      return It;
    }
    function Et(ve) {
      return ve.reduce((Ze, ot) => {
        const ct = Ze.find(({ variant: It }) => It.id === ot);
        if (ct) ct.quantity += 1;
        else {
          const It = u().variants.find((bt) => bt.id === ot);
          if (!It) return Ze;
          Ze.push({ variant: It, quantity: 1 });
        }
        return Ze;
      }, []);
    }
    Fa(() => {
      m() && O()({ dealBarId: i().id, dealBarQuantity: X(i()), preselected: !0 });
    });
    const bn = d(() => Ve(ue, "$getMediaImageUrl", o)(i().mediaImageGID) || Il);
    tt(() => {
      m() && (e(M), e(ce), e(q), e(S), e(B), e(fe), Xt(() => {
        (function() {
          if (!e(M).length) return;
          const ve = Et(e(J)), Ze = e(Be) + e(q).reduce((Bt, Mt) => Bt + Mt.discountedPrice, 0), ot = e(S).reduce((Bt, Mt) => Mt.showPrice ? Bt + Mt.fullPrice : Bt, 0) + e(B).reduce((Bt, Mt) => Bt + Mt.fullPrice * Mt.quantity, 0), ct = e(xe) + e(q).reduce((Bt, Mt) => Bt + Mt.fullPrice, 0) + ot, It = Pe(e(me), void 0), bt = u().sellingPlans.map((Bt) => ({ sellingPlanId: Bt.id, discountedPrice: Pe(e(me), Bt) })), Pt = { discountedPrice: Ze, fullPrice: ct, giftValue: ot, discountedPricePerItem: e(Ee), fullPricePerItem: e(Me), discountedPriceWithoutSellingPlan: It, discountedPricesForSellingPlans: bt }, St = e(J).length;
          U()({ variants: ve, freeGifts: [...e(S), ...e(B)], upsells: e(q), dealBarSellingPlan: e(Z), pricing: Pt, validation: { requiresItemSelection: e(de), allItemsSelected: !e(de) || St >= e(D), missingItemsCount: e(de) ? Math.max(0, e(D) - St) : 0 } });
        })();
      }));
    });
    const un = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? zl(i().showAsSoldOut) : "");
    var De = { get dealBlock() {
      return l();
    }, set dealBlock(ve) {
      l(ve), _();
    }, get dealBar() {
      return i();
    }, set dealBar(ve) {
      i(ve), _();
    }, get product() {
      return u();
    }, set product(ve) {
      u(ve), _();
    }, get otherProducts() {
      return g();
    }, set otherProducts(ve = []) {
      g(ve), _();
    }, get complementaryProducts() {
      return v();
    }, set complementaryProducts(ve = []) {
      v(ve), _();
    }, get customQuantity() {
      return p();
    }, set customQuantity(ve = void 0) {
      p(ve), _();
    }, get currentVariantId() {
      return f();
    }, set currentVariantId(ve = void 0) {
      f(ve), _();
    }, get currentVariantSource() {
      return b();
    }, set currentVariantSource(ve = void 0) {
      b(ve), _();
    }, get componentId() {
      return y();
    }, set componentId(ve) {
      y(ve), _();
    }, get selected() {
      return m();
    }, set selected(ve = !1) {
      m(ve), _();
    }, get globalSellingPlan() {
      return z();
    }, set globalSellingPlan(ve = void 0) {
      z(ve), _();
    }, get selectedDealBarIndex() {
      return C();
    }, set selectedDealBarIndex(ve) {
      C(ve), _();
    }, get onProgressiveGiftsChange() {
      return A();
    }, set onProgressiveGiftsChange(ve) {
      A(ve), _();
    }, get onDealBarSelect() {
      return O();
    }, set onDealBarSelect(ve) {
      O(ve), _();
    }, get onDealBarDeselect() {
      return V();
    }, set onDealBarDeselect(ve) {
      V(ve), _();
    }, get onVariantSelect() {
      return R();
    }, set onVariantSelect(ve) {
      R(ve), _();
    }, get onVariantsChange() {
      return U();
    }, set onVariantsChange(ve) {
      U(ve), _();
    }, get onPersonalisationsChange() {
      return G();
    }, set onPersonalisationsChange(ve) {
      G(ve), _();
    }, get personalisationInitialValues() {
      return H();
    }, set personalisationInitialValues(ve = []) {
      H(ve), _();
    } }, Re = o_();
    let Ke;
    var Xe = w(Re);
    ka(Xe), Xe.__change = [Ev, O, i, X];
    var nt = E(Xe, 2);
    bi(nt, { get for() {
      return e(yt);
    }, get soldOut() {
      return i().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(Ce);
    }, children: (ve, Ze) => {
      var ot = s_(), ct = _e(ot);
      Gt(ct, 17, () => e(Qe), (vt) => vt.id, (vt, Ht) => {
        ya(vt, { get badge() {
          return e(Ht);
        }, get blockLayout() {
          return l().blockLayout;
        } });
      });
      var It = E(ct, 2), bt = w(It);
      Yt(bt, { element: "div", class: "kaching-bundles__bar-main", onclick: rt, children: (vt, Ht) => {
        var tn = r_(), Dn = _e(tn), ir = ($t) => {
          var sn = jv();
          ke(() => Ie(sn, "src", e(bn))), h($t, sn);
        }, Nt = ($t) => {
          h($t, Rv());
        };
        F(Dn, ($t) => {
          i().mediaImageGID ? $t(ir) : $t(Nt, !1);
        });
        var lr = E(Dn, 2), On = w(lr), Un = w(On), Ln = w(Un);
        lt(Ln, () => e(ie), ($t) => {
          var sn = Nv();
          Ne(w(sn), () => e(ie)), x(sn), h($t, sn);
        });
        var At = E(Ln, 2), an = ($t) => {
          var sn = Te();
          lt(_e(sn), () => e(Ge), (wn) => {
            var on = Qv();
            Ne(w(on), () => e(Ge)), x(on), h(wn, on);
          }), h($t, sn);
        };
        F(At, ($t) => {
          e(Ge) && $t(an);
        }), x(Un);
        var nn = E(Un, 2), gn = w(nn), Pn = ($t) => {
          var sn = Te();
          lt(_e(sn), () => e(ze), (wn) => {
            var on = Wv();
            Ne(w(on), () => e(ze)), x(on), h(wn, on);
          }), h($t, sn);
        };
        F(gn, ($t) => {
          e(ze) && $t(Pn);
        });
        var Sn = E(gn, 2), In = ($t) => {
          {
            let sn = d(() => {
              var wn, on;
              return (on = (wn = e(me)) == null ? void 0 : wn[0]) == null ? void 0 : on.variant;
            });
            wa($t, { get dealBlock() {
              return l();
            }, get variant() {
              return e(sn);
            } });
          }
        };
        F(Sn, ($t) => {
          e(te) || $t(In);
        }), x(nn), x(On);
        var Hn = E(On, 2), ln = w(Hn), An = ($t) => {
          var sn = Yv(), wn = _e(sn), on = w(wn);
          lt(on, () => e(Ee), (Jn) => {
            oa(Jn, { get amount() {
              return e(Ee);
            }, get showPricesPerItem() {
              return l().showPricesPerItem;
            }, get unitLabel() {
              return l().unitLabel;
            } });
          });
          var zr = E(on, 2), Zn = (Jn) => {
            var $r = Te();
            lt(_e($r), () => e(Ae), (sr) => {
              var Yn = Uv();
              Ne(w(Yn), () => a()(e(Ae))), x(Yn), ke((Kn) => Ie(Yn, "data-a11y-label", Kn), [() => s()("system.original_price")]), h(sr, Yn);
            }), h(Jn, $r);
          };
          F(zr, (Jn) => {
            e(qe) && Jn(Zn);
          }), x(wn);
          var Wr = E(wn, 2), Ur = (Jn) => {
            var $r = Jv(), sr = w($r);
            lt(sr, () => e(Be), (Mn) => {
              var Nn = Hv();
              Ne(w(Nn), () => a()(e(Be))), x(Nn), ke((Dr) => Ie(Nn, "data-a11y-label", Dr), [() => s()("system.price")]), h(Mn, Nn);
            });
            var Yn = E(sr, 2), Kn = (Mn) => {
              var Nn = Te();
              lt(_e(Nn), () => e($e), (Dr) => {
                var Tr = Zv();
                Ne(w(Tr), () => a()(e($e))), x(Tr), ke((Xo) => Ie(Tr, "data-a11y-label", Xo), [() => s()("system.original_price")]), h(Dr, Tr);
              }), h(Mn, Nn);
            };
            F(Yn, (Mn) => {
              e(qe) && Mn(Kn);
            }), x($r), h(Jn, $r);
          };
          F(Wr, (Jn) => {
            e(D) > 1 && Jn(Ur);
          }), h($t, sn);
        }, Mr = ($t) => {
          var sn = Te(), wn = _e(sn), on = (Zn) => {
            var Wr = e_(), Ur = _e(Wr), Jn = w(Ur);
            lt(Jn, () => e(Be), (Kn) => {
              {
                let Mn = d(() => l().showPricesPerItem ? e(Ee) : e(Be));
                oa(Kn, { get amount() {
                  return e(Mn);
                }, get showPricesPerItem() {
                  return l().showPricesPerItem;
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              }
            });
            var $r = E(Jn, 2), sr = (Kn) => {
              var Mn = Te();
              lt(_e(Mn), () => l().showPricesPerItem ? e(Ae) : e($e), (Nn) => {
                var Dr = Kv();
                Ne(w(Dr), () => a()(l().showPricesPerItem ? e(Ae) : e($e))), x(Dr), ke((Tr) => Ie(Dr, "data-a11y-label", Tr), [() => s()("system.original_price")]), h(Nn, Dr);
              }), h(Kn, Mn);
            };
            F($r, (Kn) => {
              e(qe) && Kn(sr);
            }), x(Ur);
            var Yn = E(Ur, 2);
            lt(w(Yn), () => e(K), (Kn) => {
              var Mn = Xv(), Nn = w(Mn);
              Ne(Nn, () => a()(e(K), { preserveDecimals: !0 }));
              var Dr = E(Nn);
              x(Mn), ke(() => {
                var Tr;
                return pt(Dr, ` /
                    ${(Tr = e(Fe)) != null ? Tr : ""}`);
              }), h(Kn, Mn);
            }), x(Yn), h(Zn, Wr);
          }, zr = (Zn) => {
            var Wr = n_(), Ur = _e(Wr);
            lt(Ur, () => e(Be), (sr) => {
              {
                let Yn = d(() => l().showPricesPerItem ? e(Ee) : e(Be));
                oa(sr, { get amount() {
                  return e(Yn);
                }, get showPricesPerItem() {
                  return l().showPricesPerItem;
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              }
            });
            var Jn = E(Ur, 2), $r = (sr) => {
              var Yn = Te();
              lt(_e(Yn), () => l().showPricesPerItem ? e(Ae) : e($e), (Kn) => {
                var Mn = t_();
                Ne(w(Mn), () => a()(l().showPricesPerItem ? e(Ae) : e($e))), x(Mn), ke((Nn) => Ie(Mn, "data-a11y-label", Nn), [() => s()("system.original_price")]), h(Kn, Mn);
              }), h(sr, Yn);
            };
            F(Jn, (sr) => {
              e(qe) && sr($r);
            }), h(Zn, Wr);
          };
          F(wn, (Zn) => {
            e(K) && !r().ignoreUnitPrice ? Zn(on) : Zn(zr, !1);
          }, !0), h($t, sn);
        };
        F(ln, ($t) => {
          l().showBothPrices ? $t(An) : $t(Mr, !1);
        }), x(Hn), x(lr), h(vt, tn);
      }, $$slots: { default: !0 } });
      var Pt = E(bt, 2), St = (vt) => {
        Na(vt, { get highlights() {
          return i().highlights;
        }, get isSelected() {
          return m();
        }, get replaceLiquid() {
          return e(we);
        } });
      };
      F(Pt, (vt) => {
        i().highlights && vt(St);
      });
      var Bt = E(Pt, 2), Mt = (vt) => {
        var Ht = a_(), tn = w(Ht);
        {
          let Dn = d(() => e(Z) || e(L)[0]);
          Ra(tn, { get sellingPlans() {
            return e(L);
          }, get selectedSellingPlan() {
            return e(Dn);
          }, onChange: (ir) => {
            ee(Se, ir, !0);
          } });
        }
        x(Ht), h(vt, Ht);
      };
      F(Bt, (vt) => {
        m() && e(pe) && !i().sellingPlanGid && e(L).length > 1 && vt(Mt);
      });
      var rn = E(Bt, 2), Kt = (vt) => {
        var Ht = l_(), tn = w(Ht);
        ma(tn, { get product() {
          return u();
        } }), Gt(E(tn, 2), 17, () => ({ length: e(D) }), jr, (Dn, ir, Nt) => {
          var lr = i_(), On = w(lr);
          {
            let Ln = d(() => {
              var nn;
              return (nn = e(M)[Nt]) != null ? nn : null;
            }), At = d(() => e(de) ? s()("system.select_variant_placeholder") : void 0), an = d(() => e(D) > 1 ? Nt + 1 : void 0);
            Wn(On, { get product() {
              return u();
            }, get selectedVariantId() {
              return e(Ln);
            }, get placeholderText() {
              return e(At);
            }, get showImage() {
              return e(et);
            }, get number() {
              return e(an);
            }, onChange: (nn) => (function(gn, Pn) {
              const Sn = [...e(M)];
              Sn[gn] = Pn, ee(M, Sn, !0), W = !0, P.set(!1), m() && (R()({ variantId: Pn }), ne = Pn);
            })(Nt, nn), onOptionChange: (nn, gn, Pn) => (function(Sn, In, Hn, ln) {
              if (l().disableVariantOptionSync || Sn !== 0) return;
              const An = In - 1, Mr = e(M).map(($t) => u().variants.find((sn) => sn.id === $t)).filter(($t) => $t != null).slice(1);
              Mr.length !== 0 && Mr.every(($t) => $t.options[An] === ln) && ee(M, e(M).map(($t) => {
                const sn = u().variants.find((zr) => zr.id === $t);
                if (!sn || sn.options[An] !== ln) return $t;
                const wn = [...sn.options];
                wn[An] = Hn;
                const on = id(u().variants, wn);
                return on ? on.id : $t;
              }), !0);
            })(Nt, nn, gn, Pn) });
          }
          var Un = E(On, 2);
          {
            let Ln = d(() => e(M)[Nt] != null ? e(be).get(e(M)[Nt]) : void 0);
            wa(Un, { get dealBlock() {
              return l();
            }, get variant() {
              return e(Ln);
            } });
          }
          x(lr), h(Dn, lr);
        }), x(Ht), h(vt, Ht);
      };
      F(rn, (vt) => {
        e(te) && vt(Kt);
      });
      var Ye = E(rn, 2), ht = (vt) => {
        {
          let Ht = d(() => X(i()));
          $l(vt, { get value() {
            return e(j);
          }, get min() {
            return e(Ht);
          }, onChange: (tn) => ee(j, tn, !0) });
        }
      };
      F(Ye, (vt) => {
        m() && i().dealBarType === gt.QuantityBreak && i().quantitySelector && vt(ht);
      });
      var dt = E(Ye, 2), zt = (vt) => {
        fi(vt, { get product() {
          return u();
        }, get selectedVariantIds() {
          return e(ce);
        }, get productPersonalisation() {
          return i().productPersonalisation;
        }, get quantity() {
          return e(oe);
        }, get addPersonalisationModal() {
          return l().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return G();
        }, get initialValues() {
          return H();
        } });
      };
      F(dt, (vt) => {
        m() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && vt(zt);
      }), x(It);
      var Ot = E(It, 2);
      {
        let vt = d(() => i().upsells || []);
        Ei(Ot, { get dealBlock() {
          return l();
        }, get dealBarId() {
          return i().id;
        }, get upsells() {
          return e(vt);
        }, get otherProducts() {
          return g();
        }, get complementaryProducts() {
          return v();
        }, get dealBarSelected() {
          return m();
        }, get dealSellingPlan() {
          return e(fe);
        }, onChange: (Ht) => {
          ee(q, Ht, !0);
        } });
      }
      var ft = E(Ot, 2);
      Ni(ft, { get selectedDealBarIndex() {
        return C();
      }, get onChange() {
        return A();
      }, get dealBlock() {
        return l();
      }, get dealBar() {
        return i();
      }, get selected() {
        return m();
      }, get otherProducts() {
        return g();
      }, get sellingPlan() {
        return e(fe);
      }, get progressiveGifts() {
        return l().progressiveGifts;
      } });
      var en = E(ft, 2);
      {
        let vt = d(() => i().freeGifts || []), Ht = d(() => {
          var tn;
          return (tn = e(ae)[0]) != null ? tn : void 0;
        });
        Li(en, { get dealBlock() {
          return l();
        }, get freeGifts() {
          return e(vt);
        }, get freeGiftsSummary() {
          return i().freeGiftsSummary;
        }, get otherProducts() {
          return g();
        }, get dealBarSelected() {
          return m();
        }, get sellingPlan() {
          return e(fe);
        }, get mainProductVariantId() {
          return e(Ht);
        }, onChange: (tn) => {
          ee(S, tn, !0);
        } });
      }
      var xn = E(en, 2);
      {
        let vt = d(() => i().multipleGiftsSelectors || []);
        Ri(xn, { get dealBlock() {
          return l();
        }, get multipleGiftsSelectors() {
          return e(vt);
        }, get sellingPlan() {
          return e(fe);
        }, get otherProducts() {
          return g();
        }, get sets() {
          return e(se);
        }, onChange: (Ht) => {
          ee(B, Ht, !0);
        } });
      }
      h(ve, ot);
    }, $$slots: { default: !0 } });
    var wt = E(nt, 2), mt = (ve) => {
      ji(ve, { get showAsSoldOut() {
        return i().showAsSoldOut;
      }, get replaceLiquid() {
        return e(we);
      } });
    };
    F(wt, (ve) => {
      i().showAsSoldOutEnabled && i().showAsSoldOut && ve(mt);
    }), x(Re), ke((ve) => {
      var Ze;
      Ke = Wt(Re, 1, "kaching-bundles__bar", null, Ke, ve), Ie(Re, "data-deal-bar-id", i().id), Ft(Re, e(un)), Ie(Xe, "name", `kaching-bundles-deal-${(Ze = y()) != null ? Ze : ""}`), oi(Xe, i().id), Ie(Xe, "id", e(yt)), _l(Xe, m()), Xe.disabled = i().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": m() })]), h(n, Re);
    var Rt = it(De);
    return c(), Rt;
  }
  Fn(["change"]), Je(No, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, currentVariantSource: {}, componentId: {}, selected: {}, globalSellingPlan: {}, selectedDealBarIndex: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var c_ = $('<div class="kaching-bundles"><!></div>');
  function cg(n, t) {
    var r;
    at(t, !0);
    const a = k(t, "config", 7), s = k(t, "dealBlock", 7), o = k(t, "dealBar", 7), c = k(t, "translations", 7), l = k(t, "product", 7), i = k(t, "mediaImages", 23, () => []), u = k(t, "currentVariantId", 7), g = k(t, "currentVariantSource", 7, void 0), v = k(t, "variantBadges", 23, () => []), p = d(() => _r(s(), a().brandColors)), f = d(() => _r(o(), a().brandColors)), b = Math.random().toString(16).slice(2), { setConfig: y } = hi(a());
    xs(), ys();
    const { setMoneyFormat: m } = Fi(a().moneyFormat), { setTranslations: z } = gi(c()), { setMediaImages: C } = yl(i()), { setSwatchSettings: A } = kl({ swatchOptions: e(p).swatchOptions || [], swatchSize: e(p).swatchSize, swatchShape: e(p).swatchShape, showSelectedSwatchName: (r = e(p).showSelectedSwatchName) != null && r, pillStyle: la(e(p)) }), { setVariantBadges: O } = Ud(v());
    tt(() => {
      y(a());
    }), tt(() => {
      m(a().moneyFormat, !!e(p).showPricesWithoutDecimals);
    }), tt(() => {
      z(c());
    }), tt(() => {
      C(i());
    }), tt(() => {
      var I;
      A({ swatchOptions: e(p).swatchOptions || [], swatchSize: e(p).swatchSize, swatchShape: e(p).swatchShape, showSelectedSwatchName: (I = e(p).showSelectedSwatchName) != null && I, pillStyle: la(e(p)) });
    }), tt(() => {
      O(v());
    });
    const V = d(() => e(p) && td(e(p)));
    var R = { get config() {
      return a();
    }, set config(I) {
      a(I), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(I) {
      s(I), _();
    }, get dealBar() {
      return o();
    }, set dealBar(I) {
      o(I), _();
    }, get translations() {
      return c();
    }, set translations(I) {
      c(I), _();
    }, get product() {
      return l();
    }, set product(I) {
      l(I), _();
    }, get mediaImages() {
      return i();
    }, set mediaImages(I = []) {
      i(I), _();
    }, get currentVariantId() {
      return u();
    }, set currentVariantId(I) {
      u(I), _();
    }, get currentVariantSource() {
      return g();
    }, set currentVariantSource(I = void 0) {
      g(I), _();
    }, get variantBadges() {
      return v();
    }, set variantBadges(I = []) {
      v(I), _();
    } }, U = c_(), G = w(U), H = (I) => {
      No(I, { selectedDealBarIndex: null, get dealBlock() {
        return e(p);
      }, get dealBar() {
        return e(f);
      }, get product() {
        return l();
      }, get currentVariantId() {
        return u();
      }, get currentVariantSource() {
        return g();
      }, get componentId() {
        return b;
      }, selected: !0, onProgressiveGiftsChange: () => {
      }, onDealBarSelect: () => {
      }, onDealBarDeselect: () => {
      }, onVariantSelect: () => {
      }, onVariantsChange: () => {
      } });
    };
    return F(G, (I) => {
      e(f).dealBarType && e(f).dealBarType !== gt.QuantityBreak && e(f).dealBarType !== gt.Bxgy || I(H);
    }), x(U), ke(() => Ft(U, e(V))), h(n, U), it(R);
  }
  customElements.define("kaching-bundles-bar", Je(cg, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, currentVariantSource: { attribute: "current-variant-source", type: "String" }, variantBadges: { attribute: "variant-badges", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), mn(this, "component"), this.component = this;
    }
  }));
  var u_ = $('<img alt="" class="kaching-bundles__bundle-products__image"/>'), d_ = $('<div class="kaching-bundles__bundle-products__image-placeholder"></div>');
  function Qo(n, t) {
    at(t, !0);
    const r = k(t, "image", 7), a = k(t, "linkUrl", 7);
    var s = { get image() {
      return r();
    }, set image(u) {
      r(u), _();
    }, get linkUrl() {
      return a();
    }, set linkUrl(u) {
      a(u), _();
    } }, o = Te(), c = _e(o), l = (u) => {
      rr(u, { get url() {
        return a();
      }, class: "kaching-bundles__bundle-products__link", children: (g, v) => {
        var p = u_();
        Ie(p, "height", 50), Ie(p, "width", 50), ke(() => Ie(p, "src", r())), h(g, p);
      }, $$slots: { default: !0 } });
    }, i = (u) => {
      h(u, d_());
    };
    return F(c, (u) => {
      r() ? u(l) : u(i, !1);
    }), h(n, o), it(s);
  }
  Je(Qo, { image: {}, linkUrl: {} }, [], [], !0);
  var g_ = $('<span class="kaching-bundles__bundle-products__quantity"> </span>'), h_ = $('<div class="kaching-bundles__bundle-products__title"><!> <span> </span></div>');
  function Wo(n, t) {
    at(t, !0);
    const r = k(t, "title", 7), a = k(t, "quantity", 7), s = k(t, "linkUrl", 7);
    var o = { get title() {
      return r();
    }, set title(c) {
      r(c), _();
    }, get quantity() {
      return a();
    }, set quantity(c) {
      a(c), _();
    }, get linkUrl() {
      return s();
    }, set linkUrl(c) {
      s(c), _();
    } };
    return rr(n, { get url() {
      return s();
    }, class: "kaching-bundles__bundle-products__link", children: (c, l) => {
      var i = h_(), u = w(i), g = (f) => {
        var b = g_(), y = w(b);
        x(b), ke(() => {
          var m;
          return pt(y, `${(m = a()) != null ? m : ""}x`);
        }), h(f, b);
      };
      F(u, (f) => {
        a() > 1 && f(g);
      });
      var v = E(u, 2), p = w(v, !0);
      x(v), x(i), ke(() => pt(p, r())), h(c, i);
    }, $$slots: { default: !0 } }), it(o);
  }
  Je(Wo, { title: {}, quantity: {}, linkUrl: {} }, [], [], !0);
  var p_ = $('<span class="kaching-bundles__bundle-products__price"><!></span>'), b_ = $('<span class="kaching-bundles__bundle-products__full-price"><!></span>'), f_ = $('<span class="kaching-bundles__bundle-products__unit-price"><!> </span>'), v_ = $("<div><!> <!> <!></div>");
  function Ss(n, t) {
    at(t, !0);
    const r = () => Ve(g, "$formatPrice", a), [a, s] = kt();
    let o = k(t, "discountedPrice", 7), c = k(t, "fullPrice", 7), l = k(t, "unitPrice", 7), i = k(t, "unitPriceReference", 7), u = k(t, "ignoreUnitPrice", 7);
    const g = vn(), v = d(() => !!l() && !!i() && !u());
    var p = { get discountedPrice() {
      return o();
    }, set discountedPrice(V) {
      o(V), _();
    }, get fullPrice() {
      return c();
    }, set fullPrice(V) {
      c(V), _();
    }, get unitPrice() {
      return l();
    }, set unitPrice(V) {
      l(V), _();
    }, get unitPriceReference() {
      return i();
    }, set unitPriceReference(V) {
      i(V), _();
    }, get ignoreUnitPrice() {
      return u();
    }, set ignoreUnitPrice(V) {
      u(V), _();
    } }, f = v_();
    let b;
    var y = w(f);
    lt(y, o, (V) => {
      var R = p_();
      Ne(w(R), () => r()(o())), x(R), h(V, R);
    });
    var m = E(y, 2), z = (V) => {
      var R = Te();
      lt(_e(R), c, (U) => {
        var G = b_();
        Ne(w(G), () => r()(c())), x(G), h(U, G);
      }), h(V, R);
    };
    F(m, (V) => {
      o() < c() && V(z);
    });
    var C = E(m, 2), A = (V) => {
      var R = Te();
      lt(_e(R), l, (U) => {
        var G = f_(), H = w(G);
        Ne(H, () => r()(l(), { preserveDecimals: !0 }));
        var I = E(H);
        x(G), ke(() => {
          var T;
          return pt(I, ` / ${(T = i()) != null ? T : ""}`);
        }), h(U, G);
      }), h(V, R);
    };
    F(C, (V) => {
      l() && i() && !u() && V(A);
    }), x(f), ke((V) => b = Wt(f, 1, "kaching-bundles__bundle-products__pricing", null, b, V), [() => ({ "kaching-bundles__bundle-products__pricing--with-unit-price": e(v) })]), h(n, f);
    var O = it(p);
    return s(), O;
  }
  Je(Ss, { discountedPrice: {}, fullPrice: {}, unitPrice: {}, unitPriceReference: {}, ignoreUnitPrice: {} }, [], [], !0);
  var __ = $("<!> <!> <!> <!> <!>", 1), k_ = $("<!> <!>", 1), m_ = $('<div class="kaching-bundles__bundle-products__wrapper"><!> <div class="kaching-bundles__bundle-products__content"><!> <!> <!></div></div> <!>', 1), x_ = $('<div class="kaching-bundles__bundle-products__product"><!></div>');
  function ug(n, t) {
    at(t, !0);
    const r = () => Ve(C, "$config", s), a = () => Ve(O, "$translate", s), [s, o] = kt();
    let c = k(t, "dealBlock", 7), l = k(t, "layout", 7), i = k(t, "bundleProduct", 7), u = k(t, "product", 7), g = k(t, "dealBarSelected", 7), v = k(t, "currentVariantId", 7), p = k(t, "mainVariantId", 7), f = k(t, "priceRounding", 7), b = k(t, "sellingPlan", 7), y = k(t, "dealBar", 7), m = k(t, "sets", 7), z = k(t, "onChange", 7);
    const C = yn(), A = vn(), O = Tt(), V = pi(), R = Vn();
    let U = Oe(void 0);
    const G = d(() => !!i().variantGIDs), H = d(() => {
      var ce, me;
      return e(G) && u() ? u().variants.filter((be) => i().variantGIDs.some((Se) => Ut(Se) === be.id)) : (me = (ce = u()) == null ? void 0 : ce.variants) != null ? me : [];
    }), I = d(() => {
      var ce, me, be, Se;
      const L = i().productGID === "default", pe = !!((ce = c().defaultVariantsV2) != null && ce.length);
      if (L && pe && u()) {
        const Z = u().id, fe = (Se = (be = (me = c().defaultVariantsV2) == null ? void 0 : me.find((xe) => Ut(xe.productGID) === Z && xe.dealBarId === y().id)) == null ? void 0 : be.variantGIDs) == null ? void 0 : Se[0];
        if (fe) return Ut(fe);
      }
      if (i().defaultVariantGID) return Ut(i().defaultVariantGID);
    }), T = d(() => {
      var ce;
      return (ce = y().requireVariantSelectionEnabled) != null && ce && e(H).length > 1;
    }), ue = d(() => {
      const ce = e(U) || e(I);
      if (ce !== void 0 && e(H).some(({ id: me }) => me === ce))
        return ce;
    }), re = d(() => e(T) && e(ue) === void 0), P = d(() => {
      const ce = e(U) || e(I);
      return ce !== void 0 && e(H).some(({ id: me }) => me === ce) ? ce : i().productGID === "default" && v() ? v() : i().variantGIDs ? i().variantGIDs.length === 0 ? void 0 : Ut(i().variantGIDs[0]) : e(H).length > 0 ? e(H)[0].id : void 0;
    }), S = d(() => {
      var ce;
      return e(P) ? (ce = u()) == null ? void 0 : ce.variants.find((me) => me.id === e(P)) : void 0;
    }), B = d(() => u() && e(S) && ar(u(), e(S), b())), q = d(() => i().quantity * m()), Y = d(() => xa({ discountType: i().discountType, discountValue: i().discountValue, discountQuantity: i().quantity, variantQuantities: e(S) ? [{ variant: e(S), quantity: e(q) }] : [], currencyRate: r().currencyRate, priceRounding: f(), sellingPlan: e(B) })), Q = d(() => (function(ce) {
      if (!ce) return 0;
      let me = ce.price;
      return c().useProductCompareAtPrice && ce.compareAtPrice && (me = Math.max(me, ce.compareAtPrice)), me * e(q);
    })(e(S))), oe = d(() => e(S) ? So(e(S)) : null), j = d(() => e(S) ? Ir([{ variant: e(S), quantity: e(q) }]) : null), D = d(() => e(j) ? e(Y) / e(j) : null), se = d(() => {
      var ce;
      return (ce = u()) != null && ce.url && e(S) ? `${u().url}?variant=${e(S).id}` : void 0;
    }), te = d(() => {
      var ce, me;
      return Ve(R, "$getMediaImageUrl", s)(i().mediaImageGID) || ((ce = e(S)) == null ? void 0 : ce.image) || ((me = u()) == null ? void 0 : me.image);
    }), X = d(() => g() && u() && e(H).length > 1 && (e(P) || e(T))), ne = d(() => g() && i().productGID !== "default" ? e(se) : void 0), he = d(() => u() ? i().title ? _n({ priceFormatter: Ve(A, "$formatPrice", s), product: u(), totalFullPrice: e(Q), totalDiscountedPrice: e(Y), quantity: e(q), unitQuantity: e(j) })(i().title) : u().title : "");
    function M(ce) {
      ee(U, ce, !0), V.set(!1);
    }
    let W;
    tt(() => {
      e(S) && e(q) && (e(re), Xt(() => {
        z()({ variant: e(S), product: u(), quantity: e(q), variantSelectionPending: e(re) });
      }));
    }), br(() => {
      i().productGID, ee(U, void 0), W = void 0;
    }), br(() => {
      if (e(T)) return void (W !== void 0 && e(U) === W && (ee(U, void 0), W = void 0));
      const ce = i().productGID === "default";
      if (!(ce || !c().disableVariantOptionSync)) return;
      const me = ce ? v() : p();
      if (!me || !u() || me === W) return;
      const be = W;
      if (W = me, !e(H).some((pe) => pe.id === me)) return;
      const Se = e(U) === void 0 && e(I) === void 0, L = e(U) === be && be !== void 0;
      (Se || L) && ee(U, me, !0);
    });
    var de = { get dealBlock() {
      return c();
    }, set dealBlock(ce) {
      c(ce), _();
    }, get layout() {
      return l();
    }, set layout(ce) {
      l(ce), _();
    }, get bundleProduct() {
      return i();
    }, set bundleProduct(ce) {
      i(ce), _();
    }, get product() {
      return u();
    }, set product(ce) {
      u(ce), _();
    }, get dealBarSelected() {
      return g();
    }, set dealBarSelected(ce) {
      g(ce), _();
    }, get currentVariantId() {
      return v();
    }, set currentVariantId(ce) {
      v(ce), _();
    }, get mainVariantId() {
      return p();
    }, set mainVariantId(ce) {
      p(ce), _();
    }, get priceRounding() {
      return f();
    }, set priceRounding(ce) {
      f(ce), _();
    }, get sellingPlan() {
      return b();
    }, set sellingPlan(ce) {
      b(ce), _();
    }, get dealBar() {
      return y();
    }, set dealBar(ce) {
      y(ce), _();
    }, get sets() {
      return m();
    }, set sets(ce) {
      m(ce), _();
    }, get onChange() {
      return z();
    }, set onChange(ce) {
      z(ce), _();
    } }, ge = Te(), N = _e(ge), J = (ce) => {
      var me = x_(), be = w(me), Se = (pe) => {
        var Z = __(), fe = _e(Z);
        Qo(fe, { get image() {
          return e(te);
        }, get linkUrl() {
          return e(ne);
        } });
        var xe = E(fe, 2);
        Wo(xe, { get title() {
          return e(he);
        }, get quantity() {
          return e(q);
        }, get linkUrl() {
          return e(ne);
        } });
        var $e = E(xe, 2), Me = (Le) => {
          Ss(Le, { get discountedPrice() {
            return e(Y);
          }, get fullPrice() {
            return e(Q);
          }, get unitPrice() {
            return e(D);
          }, get unitPriceReference() {
            return e(oe);
          }, get ignoreUnitPrice() {
            return r().ignoreUnitPrice;
          } });
        };
        F($e, (Le) => {
          i().hidePrice || Le(Me);
        });
        var Ae = E($e, 2);
        wa(Ae, { get dealBlock() {
          return c();
        }, get variant() {
          return e(S);
        } });
        var Be = E(Ae, 2), Fe = (Le) => {
          {
            let K = d(() => ({ ...u(), variants: e(H) })), we = d(() => {
              var ze;
              return e(T) ? (ze = e(ue)) != null ? ze : null : e(P) || 0;
            }), ie = d(() => e(T) ? a()("system.select_variant_placeholder") : void 0);
            Wn(Le, { get product() {
              return e(K);
            }, get selectedVariantId() {
              return e(we);
            }, get placeholderText() {
              return e(ie);
            }, onChange: M });
          }
        };
        F(Be, (Le) => {
          e(X) && Le(Fe);
        }), h(pe, Z);
      }, L = (pe) => {
        var Z = m_(), fe = _e(Z), xe = w(fe);
        Qo(xe, { get image() {
          return e(te);
        }, get linkUrl() {
          return e(ne);
        } });
        var $e = E(xe, 2), Me = w($e);
        Wo(Me, { get title() {
          return e(he);
        }, get quantity() {
          return e(q);
        }, get linkUrl() {
          return e(ne);
        } });
        var Ae = E(Me, 2);
        wa(Ae, { get dealBlock() {
          return c();
        }, get variant() {
          return e(S);
        } });
        var Be = E(Ae, 2), Fe = (we) => {
          var ie = k_(), ze = _e(ie);
          {
            let Qe = d(() => ({ ...u(), variants: e(H) }));
            ma(ze, { get product() {
              return e(Qe);
            } });
          }
          var Ge = E(ze, 2);
          {
            let Qe = d(() => ({ ...u(), variants: e(H) })), Ce = d(() => {
              var Ee;
              return e(T) ? (Ee = e(ue)) != null ? Ee : null : e(P) || 0;
            }), Pe = d(() => e(T) ? a()("system.select_variant_placeholder") : void 0);
            Wn(Ge, { get product() {
              return e(Qe);
            }, get selectedVariantId() {
              return e(Ce);
            }, get placeholderText() {
              return e(Pe);
            }, onChange: M });
          }
          h(we, ie);
        };
        F(Be, (we) => {
          e(X) && we(Fe);
        }), x($e), x(fe);
        var Le = E(fe, 2), K = (we) => {
          Ss(we, { get discountedPrice() {
            return e(Y);
          }, get fullPrice() {
            return e(Q);
          }, get unitPrice() {
            return e(D);
          }, get unitPriceReference() {
            return e(oe);
          }, get ignoreUnitPrice() {
            return r().ignoreUnitPrice;
          } });
        };
        F(Le, (we) => {
          i().hidePrice || we(K);
        }), h(pe, Z);
      };
      F(be, (pe) => {
        l() === "horizontal" ? pe(Se) : pe(L, !1);
      }), x(me), h(ce, me);
    };
    F(N, (ce) => {
      u() && ce(J);
    }), h(n, ge);
    var ae = it(de);
    return o(), ae;
  }
  Je(ug, { dealBlock: {}, layout: {}, bundleProduct: {}, product: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, priceRounding: {}, sellingPlan: {}, dealBar: {}, sets: {}, onChange: {} }, [], [], !0);
  var y_ = Tn('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" d="M5 9h10v2H5z"></path><path fill="#fff" d="M11 5v10H9V5z"></path></svg>');
  function dg(n) {
    h(n, y_());
  }
  function w_(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Je(dg, {}, [], [], !0);
  var P_ = $('<img class="kaching-bundles__bar-image" alt=""/>'), S_ = $('<div class="kaching-bundles__bar-radio"></div>'), B_ = $('<span class="kaching-bundles__bar-title"><!></span>'), C_ = $('<span class="kaching-bundles__bar-label"><!></span>'), I_ = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), M_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), z_ = $('<div class="kaching-bundles__bar-price"><!></div>'), $_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), D_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), T_ = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), V_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), A_ = $("<!> <!>", 1), q_ = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), G_ = $('<div class="kaching-bundles__bundle-products__product kaching-bundles__bundle-products__product--placeholder"><span>Select product</span></div>'), F_ = $('<div class="kaching-bundles__bundle-products__divider"><div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__bundle-products__divider-icon"><!></div> <div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div></div>'), O_ = $("<!> <!>", 1), L_ = $("<div></div>"), E_ = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), j_ = $('<div><input type="radio"/> <!> <!></div>');
  function gg(n, t) {
    at(t, !0);
    const r = () => Ve(T, "$config", o), a = () => Ve(H, "$formatPrice", o), s = () => Ve(G, "$translate", o), [o, c] = kt(), l = k(t, "dealBlock", 7), i = k(t, "dealBar", 7), u = k(t, "product", 7), g = k(t, "otherProducts", 23, () => []), v = k(t, "complementaryProducts", 23, () => []), p = k(t, "currentVariantId", 7), f = k(t, "componentId", 7), b = k(t, "selectedDealBarIndex", 7), y = k(t, "selected", 7, !1), m = k(t, "sellingPlan", 7), z = k(t, "onProgressiveGiftsChange", 7), C = k(t, "onDealBarSelect", 7), A = k(t, "onDealBarDeselect", 7), O = k(t, "onVariantSelect", 7), V = k(t, "onVariantsChange", 7), R = k(t, "onPersonalisationsChange", 7), U = k(t, "personalisationInitialValues", 23, () => []), G = Tt(), H = vn(), I = Vn(), T = yn();
    let ue = Oe(ut({})), re = Oe(ut([])), P = Oe(ut([])), S = Oe(ut([])), B = Oe(1);
    const q = d(() => `${i().id}_${f()}`), Y = d(() => i().bundleProducts.filter(({ productGID: K }) => K)), Q = d(() => e(Y).every((K) => xe(K, u(), g()))), oe = d(() => i().showProductsOnlyWhenSelected && !y()), j = d(() => e(Y).every((K) => {
      var we;
      const ie = xe(K, u(), g());
      return (we = ie == null ? void 0 : ie.availableForSale) != null && we;
    })), D = d(() => l() ? (function(K, we) {
      return i().bundleProducts.map((ze) => {
        const Ge = we[ze.id];
        if (!Ge) return 0;
        const { variant: Qe, quantity: Ce } = Ge;
        let Pe = Qe.price;
        return Qe.compareAtPrice && K.useProductCompareAtPrice && (Pe = Math.max(Pe, Qe.compareAtPrice)), Pe * Ce;
      }).reduce((ze, Ge) => ze + Ge, 0);
    })(l(), e(ue)) : 0), se = d(() => Cl(e(D), e(re), e(P))), te = d(() => l().priceRounding ? { perItem: l().showPricesPerItem, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), X = d(() => l() ? zo(i(), e(ue), r().currencyRate, e(te), m()) : 0), ne = d(() => e(Y).reduce((K, we) => K + we.quantity, 0) * e(B)), he = d(() => Math.ceil(e(X) / (e(ne) || 1))), M = d(() => Math.ceil(e(D) / (e(ne) || 1))), W = d(() => Ao(e(ne) === 1, e(se), e(M))), de = d(() => e(se) > e(X)), ge = d(() => Ir(Object.values(e(ue)))), N = d(() => e(Y).every((K) => K.productGID === "default" || Ut(K.productGID) === u().id)), J = d(() => {
      var K;
      const we = e(Y)[0];
      if (we) return (K = e(ue)[we.id]) == null ? void 0 : K.variant.id;
    }), ae = d(() => l().showPricesPerItem && e(N)), ce = d(() => _n({ priceFormatter: a(), product: u(), dealBar: i(), totalFullPrice: e(D), totalCompareAtPrice: e(se), totalDiscountedPrice: e(X), quantity: 1, unitQuantity: e(ge), sellingPlan: m() })), me = d(() => e(ce)(s()(i().title))), be = d(() => e(ce)(s()(i().subtitle))), Se = d(() => e(ce)(s()(i().label))), L = d(() => Sl(l(), i()).map((K) => Ea(K, s(), e(ce)))), pe = d(() => ja(e(L))), Z = d(() => Ve(I, "$getMediaImageUrl", o)(i().mediaImageGID) || Il);
    function fe(K) {
      y() && (K.preventDefault(), K.stopPropagation(), A()());
    }
    function xe(K, we, ie) {
      if (K.productGID) return K.productGID === "default" ? we : ie.find((ze) => ze.id === Ut(K.productGID));
    }
    Fa(() => {
      y() && C()({ dealBarId: i().id, preselected: !0 });
    }), tt(() => {
      y() && (Da(e(ue)), Da(e(S)), Da(e(re)), Da(e(P)), m(), Xt(() => {
        (function() {
          var K;
          if (!i().bundleProducts.map(({ id: qe }) => qe).every((qe) => e(ue)[qe])) return;
          const we = [];
          for (const qe of i().bundleProducts) {
            const et = e(ue)[qe.id];
            et && we.push({ id: qe.id, variant: et.variant, product: et.product, quantity: et.quantity, variantSelectionPending: et.variantSelectionPending });
          }
          if (we.length === 0) return;
          const ie = e(X) + e(S).reduce((qe, et) => qe + et.discountedPrice, 0), ze = e(re).reduce((qe, et) => et.showPrice ? qe + et.fullPrice : qe, 0) + e(P).reduce((qe, et) => qe + et.fullPrice * et.quantity, 0), Ge = e(D) + e(S).reduce((qe, et) => qe + et.fullPrice, 0) + ze, Qe = zo(i(), e(ue), r().currencyRate, e(te), void 0), Ce = u().sellingPlans.map((qe) => ({ sellingPlanId: qe.id, discountedPrice: zo(i(), e(ue), r().currencyRate, e(te), qe) })), Pe = (K = i().requireVariantSelectionEnabled) != null && K, Ee = Pe ? i().bundleProducts.filter(({ id: qe }) => {
            var et;
            return (et = e(ue)[qe]) == null ? void 0 : et.variantSelectionPending;
          }).length : 0;
          V()({ bundleProducts: we, freeGifts: [...e(re), ...e(P)], upsells: e(S), pricing: { discountedPrice: ie, fullPrice: Ge, giftValue: ze, discountedPricePerItem: e(X), fullPricePerItem: e(D), discountedPriceWithoutSellingPlan: Qe, discountedPricesForSellingPlans: Ce }, validation: { requiresItemSelection: Pe, allItemsSelected: Ee === 0, missingItemsCount: Ee } });
        })();
      }));
    });
    const $e = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? zl(i().showAsSoldOut) : "");
    var Me = { get dealBlock() {
      return l();
    }, set dealBlock(K) {
      l(K), _();
    }, get dealBar() {
      return i();
    }, set dealBar(K) {
      i(K), _();
    }, get product() {
      return u();
    }, set product(K) {
      u(K), _();
    }, get otherProducts() {
      return g();
    }, set otherProducts(K = []) {
      g(K), _();
    }, get complementaryProducts() {
      return v();
    }, set complementaryProducts(K = []) {
      v(K), _();
    }, get currentVariantId() {
      return p();
    }, set currentVariantId(K) {
      p(K), _();
    }, get componentId() {
      return f();
    }, set componentId(K) {
      f(K), _();
    }, get selectedDealBarIndex() {
      return b();
    }, set selectedDealBarIndex(K) {
      b(K), _();
    }, get selected() {
      return y();
    }, set selected(K = !1) {
      y(K), _();
    }, get sellingPlan() {
      return m();
    }, set sellingPlan(K) {
      m(K), _();
    }, get onProgressiveGiftsChange() {
      return z();
    }, set onProgressiveGiftsChange(K) {
      z(K), _();
    }, get onDealBarSelect() {
      return C();
    }, set onDealBarSelect(K) {
      C(K), _();
    }, get onDealBarDeselect() {
      return A();
    }, set onDealBarDeselect(K) {
      A(K), _();
    }, get onVariantSelect() {
      return O();
    }, set onVariantSelect(K) {
      O(K), _();
    }, get onVariantsChange() {
      return V();
    }, set onVariantsChange(K) {
      V(K), _();
    }, get onPersonalisationsChange() {
      return R();
    }, set onPersonalisationsChange(K) {
      R(K), _();
    }, get personalisationInitialValues() {
      return U();
    }, set personalisationInitialValues(K = []) {
      U(K), _();
    } }, Ae = Te(), Be = _e(Ae), Fe = (K) => {
      var we = j_();
      let ie;
      var ze = w(we);
      ka(ze), ze.__change = [w_, C, i];
      var Ge = E(ze, 2);
      bi(Ge, { get for() {
        return e(q);
      }, get soldOut() {
        return i().showAsSoldOutEnabled;
      }, get borderHost() {
        return e(pe);
      }, children: (Pe, Ee) => {
        var qe = E_(), et = _e(qe);
        Gt(et, 17, () => e(L), (ve) => ve.id, (ve, Ze) => {
          ya(ve, { get badge() {
            return e(Ze);
          }, get blockLayout() {
            return l().blockLayout;
          } });
        });
        var yt = E(et, 2), rt = w(yt);
        Yt(rt, { element: "div", class: "kaching-bundles__bar-main", onclick: fe, children: (ve, Ze) => {
          var ot = q_(), ct = _e(ot), It = (ft) => {
            var en = P_();
            ke(() => Ie(en, "src", e(Z))), h(ft, en);
          }, bt = (ft) => {
            h(ft, S_());
          };
          F(ct, (ft) => {
            i().mediaImageGID ? ft(It) : ft(bt, !1);
          });
          var Pt = E(ct, 2), St = w(Pt), Bt = w(St), Mt = w(Bt);
          lt(Mt, () => e(me), (ft) => {
            var en = B_();
            Ne(w(en), () => e(me)), x(en), h(ft, en);
          });
          var rn = E(Mt, 2), Kt = (ft) => {
            var en = Te();
            lt(_e(en), () => e(Se), (xn) => {
              var vt = C_();
              Ne(w(vt), () => e(Se)), x(vt), h(xn, vt);
            }), h(ft, en);
          };
          F(rn, (ft) => {
            e(Se) && ft(Kt);
          }), x(Bt);
          var Ye = E(Bt, 2), ht = (ft) => {
            var en = Te();
            lt(_e(en), () => e(be), (xn) => {
              var vt = I_();
              Ne(w(vt), () => e(be)), x(vt), h(xn, vt);
            }), h(ft, en);
          };
          F(Ye, (ft) => {
            e(be) && ft(ht);
          }), x(St);
          var dt = E(St, 2), zt = w(dt), Ot = (ft) => {
            var en = Te(), xn = _e(en), vt = (tn) => {
              var Dn = T_(), ir = _e(Dn), Nt = w(ir);
              lt(Nt, () => e(he), (At) => {
                oa(At, { get amount() {
                  return e(he);
                }, get showPricesPerItem() {
                  return e(ae);
                }, get unitLabel() {
                  return l().unitLabel;
                } });
              });
              var lr = E(Nt, 2), On = (At) => {
                var an = Te();
                lt(_e(an), () => e(W), (nn) => {
                  var gn = M_();
                  Ne(w(gn), () => a()(e(W))), x(gn), ke((Pn) => Ie(gn, "data-a11y-label", Pn), [() => s()("system.original_price")]), h(nn, gn);
                }), h(At, an);
              };
              F(lr, (At) => {
                e(de) && At(On);
              }), x(ir);
              var Un = E(ir, 2), Ln = (At) => {
                var an = D_(), nn = w(an);
                lt(nn, () => e(X), (Sn) => {
                  var In = z_();
                  Ne(w(In), () => a()(e(X))), x(In), ke((Hn) => Ie(In, "data-a11y-label", Hn), [() => s()("system.price")]), h(Sn, In);
                });
                var gn = E(nn, 2), Pn = (Sn) => {
                  var In = Te();
                  lt(_e(In), () => e(se), (Hn) => {
                    var ln = $_();
                    Ne(w(ln), () => a()(e(se))), x(ln), ke((An) => Ie(ln, "data-a11y-label", An), [() => s()("system.original_price")]), h(Hn, ln);
                  }), h(Sn, In);
                };
                F(gn, (Sn) => {
                  e(de) && Sn(Pn);
                }), x(an), h(At, an);
              };
              F(Un, (At) => {
                e(ne) > 1 && At(Ln);
              }), h(tn, Dn);
            }, Ht = (tn) => {
              var Dn = A_(), ir = _e(Dn);
              lt(ir, () => e(X), (On) => {
                {
                  let Un = d(() => e(ae) ? e(he) : e(X));
                  oa(On, { get amount() {
                    return e(Un);
                  }, get showPricesPerItem() {
                    return e(ae);
                  }, get unitLabel() {
                    return l().unitLabel;
                  } });
                }
              });
              var Nt = E(ir, 2), lr = (On) => {
                var Un = Te();
                lt(_e(Un), () => e(ae) ? e(W) : e(se), (Ln) => {
                  var At = V_();
                  Ne(w(At), () => a()(e(ae) ? e(W) : e(se))), x(At), ke((an) => Ie(At, "data-a11y-label", an), [() => s()("system.original_price")]), h(Ln, At);
                }), h(On, Un);
              };
              F(Nt, (On) => {
                e(de) && On(lr);
              }), h(tn, Dn);
            };
            F(xn, (tn) => {
              l().showBothPrices && e(N) ? tn(vt) : tn(Ht, !1);
            }), h(ft, en);
          };
          F(zt, (ft) => {
            e(Q) && ft(Ot);
          }), x(dt), x(Pt), h(ve, ot);
        }, $$slots: { default: !0 } });
        var Vt = E(rt, 2), Et = (ve) => {
          Na(ve, { get highlights() {
            return i().highlights;
          }, get isSelected() {
            return y();
          }, get replaceLiquid() {
            return e(ce);
          } });
        };
        F(Vt, (ve) => {
          i().highlights && ve(Et);
        });
        var bn = E(Vt, 2), un = (ve) => {
          $l(ve, { get value() {
            return e(B);
          }, onChange: (Ze) => {
            ee(B, Ze, !0);
          } });
        };
        F(bn, (ve) => {
          y() && i().quantitySelector && ve(un);
        });
        var De = E(bn, 2), Re = (ve) => {
          var Ze = L_();
          let ot;
          Gt(Ze, 23, () => i().bundleProducts, (ct) => ct.id, (ct, It, bt) => {
            var Pt = O_(), St = _e(Pt), Bt = (Ye) => {
              {
                let ht = d(() => xe(e(It), u(), g())), dt = d(() => i().layout || "horizontal");
                ug(Ye, { get dealBar() {
                  return i();
                }, get bundleProduct() {
                  return e(It);
                }, get product() {
                  return e(ht);
                }, get dealBlock() {
                  return l();
                }, get layout() {
                  return e(dt);
                }, get dealBarSelected() {
                  return y();
                }, get priceRounding() {
                  return e(te);
                }, get currentVariantId() {
                  return p();
                }, get mainVariantId() {
                  return e(J);
                }, get sellingPlan() {
                  return m();
                }, get sets() {
                  return e(B);
                }, onChange: (zt) => (function(Ot, ft) {
                  const { variant: en, product: xn, quantity: vt, variantSelectionPending: Ht } = ft;
                  e(ue)[Ot] = { variant: en, product: xn, quantity: vt, variantSelectionPending: Ht }, y() && i().bundleProducts.map(({ id: tn }) => tn).every((tn) => e(ue)[tn]) && (Ot !== i().bundleProducts[0].id || Ht || O()({ variantId: en.id }));
                })(e(It).id, zt) });
              }
            }, Mt = (Ye) => {
              var ht = Te(), dt = _e(ht), zt = (Ot) => {
                h(Ot, G_());
              };
              F(dt, (Ot) => {
                r().preview && Ot(zt);
              }, !0), h(Ye, ht);
            };
            F(St, (Ye) => {
              e(It).productGID ? Ye(Bt) : Ye(Mt, !1);
            });
            var rn = E(St, 2), Kt = (Ye) => {
              var ht = F_(), dt = E(w(ht), 2);
              dg(w(dt)), x(dt), fa(2), x(ht), h(Ye, ht);
            };
            F(rn, (Ye) => {
              e(bt) < i().bundleProducts.length - 1 && Ye(Kt);
            }), h(ct, Pt);
          }), x(Ze), ke((ct) => ot = Wt(Ze, 1, "kaching-bundles__bundle-products", null, ot, ct), [() => ({ "kaching-bundles__bundle-products--vertical": i().layout === "vertical", "kaching-bundles__bundle-products--hidden": e(oe) })]), h(ve, Ze);
        };
        F(De, (ve) => {
          e(Q) && ve(Re);
        });
        var Ke = E(De, 2), Xe = (ve) => {
          {
            let Ze = d(() => e(J) ? [e(J)] : []);
            fi(ve, { get product() {
              return u();
            }, get productPersonalisation() {
              return i().productPersonalisation;
            }, get selectedVariantIds() {
              return e(Ze);
            }, get quantity() {
              return e(B);
            }, get addPersonalisationModal() {
              return l().addPersonalisationModal;
            }, get onPersonalisationsChange() {
              return R();
            }, get initialValues() {
              return U();
            } });
          }
        };
        F(Ke, (ve) => {
          y() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && ve(Xe);
        }), x(yt);
        var nt = E(yt, 2);
        {
          let ve = d(() => i().upsells || []);
          Ei(nt, { get dealBlock() {
            return l();
          }, get dealBarId() {
            return i().id;
          }, get upsells() {
            return e(ve);
          }, get otherProducts() {
            return g();
          }, get complementaryProducts() {
            return v();
          }, get dealBarSelected() {
            return y();
          }, get dealSellingPlan() {
            return m();
          }, get sets() {
            return e(B);
          }, onChange: (Ze) => {
            ee(S, Ze, !0);
          } });
        }
        var wt = E(nt, 2);
        Ni(wt, { get selectedDealBarIndex() {
          return b();
        }, get onChange() {
          return z();
        }, get dealBlock() {
          return l();
        }, get dealBar() {
          return i();
        }, get otherProducts() {
          return g();
        }, get selected() {
          return y();
        }, get sellingPlan() {
          return m();
        }, get progressiveGifts() {
          return l().progressiveGifts;
        } });
        var mt = E(wt, 2);
        {
          let ve = d(() => i().freeGifts || []);
          Li(mt, { get dealBlock() {
            return l();
          }, get freeGifts() {
            return e(ve);
          }, get freeGiftsSummary() {
            return i().freeGiftsSummary;
          }, get otherProducts() {
            return g();
          }, get dealBarSelected() {
            return y();
          }, get sellingPlan() {
            return m();
          }, get sets() {
            return e(B);
          }, onChange: (Ze) => {
            ee(re, Ze, !0);
          } });
        }
        var Rt = E(mt, 2);
        {
          let ve = d(() => i().multipleGiftsSelectors || []);
          Ri(Rt, { get dealBlock() {
            return l();
          }, get multipleGiftsSelectors() {
            return e(ve);
          }, get sellingPlan() {
            return m();
          }, get otherProducts() {
            return g();
          }, get sets() {
            return e(B);
          }, onChange: (Ze) => {
            ee(P, Ze, !0);
          } });
        }
        h(Pe, qe);
      }, $$slots: { default: !0 } });
      var Qe = E(Ge, 2), Ce = (Pe) => {
        ji(Pe, { get showAsSoldOut() {
          return i().showAsSoldOut;
        }, get replaceLiquid() {
          return e(ce);
        } });
      };
      F(Qe, (Pe) => {
        i().showAsSoldOutEnabled && i().showAsSoldOut && Pe(Ce);
      }), x(we), ke((Pe) => {
        var Ee;
        ie = Wt(we, 1, "kaching-bundles__bar", null, ie, Pe), Ie(we, "data-deal-bar-id", i().id), Ft(we, e($e)), Ie(ze, "name", `kaching-bundles-deal-${(Ee = f()) != null ? Ee : ""}`), oi(ze, i().id), Ie(ze, "id", e(q)), _l(ze, y()), ze.disabled = i().showAsSoldOutEnabled;
      }, [() => ({ "kaching-bundles__bar--selected": y(), "kaching-bundles__bar--disabled": !e(j) && r().preview })]), h(K, we);
    };
    F(Be, (K) => {
      (e(j) || r().preview) && K(Fe);
    }), h(n, Ae);
    var Le = it(Me);
    return c(), Le;
  }
  Fn(["change"]), Je(gg, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var R_ = $('<img class="kaching-bundles__mix-and-match-choose-product__product-image" alt=""/>'), N_ = $('<span class="kaching-bundles__mix-and-match-choose-product__product-title"> </span>'), Q_ = $('<span class="kaching-bundles__mix-and-match-choose-product__subtitle"><!></span>'), W_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price"><!></div>'), U_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-compare-at-price"><!></div>'), H_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price-container"><!> <!></div>'), Z_ = $("<div><!> <!></div>"), J_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product"><div class="kaching-bundles__mix-and-match-choose-product__product-container"><!> <div class="kaching-bundles__mix-and-match-choose-product__product-content"><!> <!> <!> <!></div></div> <!></div>');
  function hg(n, t) {
    var r;
    at(t, !0);
    const a = () => Ve(y, "$config", c), s = () => Ve(b, "$formatPrice", c), o = () => Ve(f, "$translate", c), [c, l] = kt(), i = k(t, "product", 7), u = k(t, "dealBlock", 7), g = k(t, "dealBar", 7), v = k(t, "modal", 7), p = k(t, "onChoose", 7), f = Tt(), b = vn(), y = yn();
    let m = Oe(ut(((r = i().variants.find((te) => te.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const z = d(() => i().variants.find((te) => te.id === e(m)) || i().variants[0]), C = d(() => u().priceRounding ? { perItem: !1, precision: u().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), A = d(() => g().discountType === "percentage" ? xa({ discountType: g().discountType, discountValue: g().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(z), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(C) }) : e(z).price), O = d(() => u().useProductCompareAtPrice && e(z).compareAtPrice ? Math.max(e(z).price, e(z).compareAtPrice) : e(z).price), V = d(() => i().url ? `${i().url}?variant=${e(m)}` : void 0), R = d(() => _n({ priceFormatter: s(), product: i(), totalFullPrice: e(O), totalDiscountedPrice: e(A), quantity: 1, unitQuantity: null })), U = d(() => e(R)(o()(v().subtitle || ""))), G = d(() => v().buttonText);
    function H(te) {
      ee(m, te, !0);
    }
    var I = { get product() {
      return i();
    }, set product(te) {
      i(te), _();
    }, get dealBlock() {
      return u();
    }, set dealBlock(te) {
      u(te), _();
    }, get dealBar() {
      return g();
    }, set dealBar(te) {
      g(te), _();
    }, get modal() {
      return v();
    }, set modal(te) {
      v(te), _();
    }, get onChoose() {
      return p();
    }, set onChoose(te) {
      p(te), _();
    } }, T = J_(), ue = w(T), re = w(ue), P = (te) => {
      rr(te, { get url() {
        return e(V);
      }, class: "kaching-bundles__mix-and-match-choose-product__product-image-link", children: (X, ne) => {
        var he = R_();
        Ie(he, "width", 100), Ie(he, "height", 100), ke(() => Ie(he, "src", i().image)), h(X, he);
      }, $$slots: { default: !0 } });
    };
    F(re, (te) => {
      i().image && te(P);
    });
    var S = E(re, 2), B = w(S);
    rr(B, { get url() {
      return e(V);
    }, class: "kaching-bundles__mix-and-match-choose-product__product-link", children: (te, X) => {
      var ne = N_(), he = w(ne, !0);
      x(ne), ke(() => pt(he, i().title)), h(te, ne);
    }, $$slots: { default: !0 } });
    var q = E(B, 2), Y = (te) => {
      var X = Q_();
      Ne(w(X), () => e(U)), x(X), h(te, X);
    };
    F(q, (te) => {
      e(U) && te(Y);
    });
    var Q = E(q, 2), oe = (te) => {
      var X = H_(), ne = w(X);
      lt(ne, () => e(A), (W) => {
        var de = W_();
        Ne(w(de), () => s()(e(A))), x(de), h(W, de);
      });
      var he = E(ne, 2), M = (W) => {
        var de = Te();
        lt(_e(de), () => e(O), (ge) => {
          var N = U_();
          Ne(w(N), () => s()(e(O))), x(N), h(ge, N);
        }), h(W, de);
      };
      F(he, (W) => {
        e(O) && e(O) > e(A) && W(M);
      }), x(X), h(te, X);
    };
    F(Q, (te) => {
      g().discountType !== "specific" && te(oe);
    });
    var j = E(Q, 2), D = (te) => {
      var X = Z_(), ne = w(X);
      ma(ne, { get product() {
        return i();
      }, class: "kaching-bundles__mix-and-match-choose-product__product-option-names" }), Wn(E(ne, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(m);
      }, onChange: H }), x(X), h(te, X);
    };
    F(j, (te) => {
      i().variants.length > 1 && te(D);
    }), x(S), x(ue), Yt(E(ue, 2), { element: "span", class: "kaching-bundles__mix-and-match-choose-product__product-button", onclick: function() {
      p()({ product: i(), variant: e(z) });
    }, children: (te, X) => {
      fa();
      var ne = Rn();
      ke((he) => pt(ne, he), [() => o()(e(G))]), h(te, ne);
    }, $$slots: { default: !0 } }), x(T), h(n, T);
    var se = it(I);
    return l(), se;
  }
  Je(hg, { product: {}, dealBlock: {}, dealBar: {}, modal: {}, onChoose: {} }, [], [], !0);
  const Y_ = { red: 0, green: 0, blue: 0, alpha: 0.5 }, K_ = { buttonSize: 16, textSize: 14, overlayColor: { red: 0, green: 0, blue: 0, alpha: 0.5 }, priceColor: { red: 0, green: 0, blue: 0, alpha: 1 }, compareAtPriceColor: { red: 128, green: 128, blue: 128, alpha: 1 }, textColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonTextColor: { red: 255, green: 255, blue: 255, alpha: 1 }, productPhotoSize: 100, heading: "Select product", buttonText: "Choose" };
  var X_ = $('<img alt="Close"/>'), e0 = $('<div class="kaching-bundles__mix-and-match-choose-product__empty-state"> </div>'), t0 = $('<div class="kaching-bundles__mix-and-match-choose-product"><div class="kaching-bundles__mix-and-match-choose-product__header"><h2 class="kaching-bundles__mix-and-match-choose-product__heading"><!></h2> <!></div> <div class="kaching-bundles__mix-and-match-choose-product__products"><!></div></div>');
  function Uo(n, t) {
    at(t, !0);
    const r = () => Ve(g, "$translate", a), [a, s] = kt(), o = k(t, "dealBlock", 7), c = k(t, "dealBar", 7), l = k(t, "products", 23, () => []), i = k(t, "onChoose", 7), u = k(t, "onClose", 7), g = Tt(), v = d(() => {
      var I;
      return (I = o().mixAndMatchChooseProductModal) != null ? I : K_;
    }), p = d(() => ((I) => fn({ "kaching-mix-and-match-choose-product-button-size": I.buttonSize + "px", "kaching-mix-and-match-choose-product-text-size": I.textSize + "px", "kaching-mix-and-match-choose-product-price-color": We(I.priceColor), "kaching-mix-and-match-choose-product-compare-at-price-color": We(I.compareAtPriceColor), "kaching-mix-and-match-choose-product-text-color": We(I.textColor), "kaching-mix-and-match-choose-product-button-color": We(I.buttonColor), "kaching-mix-and-match-choose-product-button-text-color": We(I.buttonTextColor), "kaching-mix-and-match-choose-product-photo-size": I.productPhotoSize + "px" }))(e(v)));
    var f = { get dealBlock() {
      return o();
    }, set dealBlock(I) {
      o(I), _();
    }, get dealBar() {
      return c();
    }, set dealBar(I) {
      c(I), _();
    }, get products() {
      return l();
    }, set products(I = []) {
      l(I), _();
    }, get onChoose() {
      return i();
    }, set onChoose(I) {
      i(I), _();
    }, get onClose() {
      return u();
    }, set onClose(I) {
      u(I), _();
    } }, b = t0(), y = w(b), m = w(y), z = w(m), C = (I) => {
      var T = Rn();
      ke((ue) => pt(T, ue), [() => r()(e(v).heading)]), h(I, T);
    };
    F(z, (I) => {
      e(v).heading && I(C);
    }), x(m);
    var A = E(m, 2), O = (I) => {
      Yt(I, { element: "span", class: "kaching-bundles__mix-and-match-choose-product__close", get onclick() {
        return u();
      }, children: (T, ue) => {
        var re = X_();
        ke(() => Ie(re, "src", $o)), h(T, re);
      }, $$slots: { default: !0 } });
    };
    F(A, (I) => {
      u() && I(O);
    }), x(y);
    var V = E(y, 2), R = w(V), U = (I) => {
      var T = e0(), ue = w(T, !0);
      x(T), ke((re) => pt(ue, re), [() => r()("system.no_products_available")]), h(I, T);
    }, G = (I) => {
      var T = Te();
      Gt(_e(T), 17, l, (ue) => ue.id, (ue, re) => {
        hg(ue, { get dealBlock() {
          return o();
        }, get dealBar() {
          return c();
        }, get modal() {
          return e(v);
        }, get product() {
          return e(re);
        }, get onChoose() {
          return i();
        } });
      }), h(I, T);
    };
    F(R, (I) => {
      l().length === 0 ? I(U) : I(G, !1);
    }), x(V), x(b), ke(() => Ft(b, e(p))), h(n, b);
    var H = it(f);
    return s(), H;
  }
  function n0(n, t) {
    n.target === n.currentTarget && t()();
  }
  Je(Uo, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var r0 = $('<div class="kaching-bundles"><div class="kaching-bundles__mix-and-match-choose-product-modal" role="none"><div class="kaching-bundles__mix-and-match-choose-product-modal__content"><!></div></div></div>');
  function pg(n, t) {
    at(t, !0);
    const r = k(t, "dealBlock", 7), a = k(t, "dealBar", 7), s = k(t, "products", 23, () => []), o = k(t, "isOpen", 7), c = k(t, "onChoose", 7), l = k(t, "onClose", 7);
    var i = { get dealBlock() {
      return r();
    }, set dealBlock(p) {
      r(p), _();
    }, get dealBar() {
      return a();
    }, set dealBar(p) {
      a(p), _();
    }, get products() {
      return s();
    }, set products(p = []) {
      s(p), _();
    }, get isOpen() {
      return o();
    }, set isOpen(p) {
      o(p), _();
    }, get onChoose() {
      return c();
    }, set onChoose(p) {
      c(p), _();
    }, get onClose() {
      return l();
    }, set onClose(p) {
      l(p), _();
    } }, u = Te(), g = _e(u), v = (p) => {
      Ml(p, { target: "body", children: (f, b) => {
        var y = r0(), m = w(y);
        m.__click = [n0, l];
        var z = w(m);
        Uo(w(z), { get dealBlock() {
          return r();
        }, get dealBar() {
          return a();
        }, get products() {
          return s();
        }, get onChoose() {
          return c();
        }, get onClose() {
          return l();
        } }), x(z), x(m), x(y), ke((C) => Ft(m, C), [() => (function(C) {
          var A;
          return fn({ "kaching-mix-and-match-choose-product-overlay-color": We(((A = C.mixAndMatchChooseProductModal) == null ? void 0 : A.overlayColor) || Y_) });
        })(r())]), h(f, y);
      }, $$slots: { default: !0 } });
    };
    return F(g, (p) => {
      o() && p(v);
    }), h(n, u), it(i);
  }
  Fn(["click"]), Je(pg, { dealBlock: {}, dealBar: {}, products: {}, isOpen: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var a0 = $('<img alt="" class="kaching-bundles__mix-and-match-product__image"/>'), i0 = $('<div class="kaching-bundles__mix-and-match-product__image-placeholder"></div>'), l0 = $('<div class="kaching-bundles__mix-and-match-product__title"> </div>'), s0 = $('<div class="kaching-bundles__mix-and-match-product__pricing"><!></div>'), o0 = $('<div class="kaching-bundles__mix-and-match-product"><!> <div class="kaching-bundles__mix-and-match-product__content"><!> <!> <!></div> <!> <!></div> <!>', 1);
  function bg(n, t) {
    at(t, !0);
    const r = () => Ve(z, "$translate", a), [a, s] = kt();
    let o = k(t, "dealBlock", 7), c = k(t, "dealBar", 7), l = k(t, "bundleProduct", 7), i = k(t, "product", 7), u = k(t, "swapProducts", 7), g = k(t, "dealBarSelected", 7), v = k(t, "currentVariantId", 7), p = k(t, "mainVariantId", 7), f = k(t, "pricing", 7), b = k(t, "onSwap", 7), y = k(t, "onChange", 7);
    const m = vn(), z = Tt(), C = pi();
    let A = Oe(void 0), O = Oe(!1);
    const V = d(() => g() && u().length > 1), R = d(() => r()(c().buttonText || "Change"));
    function U() {
      ee(O, !0);
    }
    function G(M) {
      ee(O, !1), ee(A, M.variant.id, !0), C.set(!1), b()(M.product);
    }
    function H() {
      ee(O, !1);
    }
    const I = d(() => {
      var M, W;
      return (W = (M = i()) == null ? void 0 : M.variants) != null ? W : [];
    }), T = d(() => {
      var M;
      return (M = c().requireVariantSelectionEnabled) != null && M && e(I).length > 1;
    }), ue = d(() => {
      if (e(A) !== void 0 && e(I).some(({ id: M }) => M === e(A)))
        return e(A);
    }), re = d(() => e(T) && e(ue) === void 0), P = d(() => {
      var M, W;
      return e(A) !== void 0 && e(I).some(({ id: de }) => de === e(A)) ? e(A) : l().productGID === "default" && v() && e(I).some(({ id: de }) => de === v()) ? v() : e(I).length > 0 ? (W = (M = e(I).find((de) => de.availableForSale)) == null ? void 0 : M.id) != null ? W : e(I)[0].id : void 0;
    }), S = d(() => {
      var M;
      return e(P) ? (M = i()) == null ? void 0 : M.variants.find((W) => W.id === e(P)) : void 0;
    }), B = d(() => {
      var M;
      return (M = i()) != null && M.url && e(S) ? `${i().url}?variant=${e(S).id}` : void 0;
    }), q = d(() => {
      var M, W;
      return ((M = e(S)) == null ? void 0 : M.image) || ((W = i()) == null ? void 0 : W.image);
    }), Y = d(() => g() && i() && e(I).length > 1 && (e(P) || e(T))), Q = d(() => g() && l().productGID !== "default" ? e(B) : void 0), oe = d(() => i() ? l().title ? _n({ priceFormatter: Ve(m, "$formatPrice", a), product: i(), totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null })(l().title) : i().title : "");
    function j(M) {
      ee(A, M, !0), C.set(!1);
    }
    let D;
    tt(() => {
      e(S) && (e(re), Xt(() => {
        y()({ variant: e(S), product: i(), variantSelectionPending: e(re) });
      }));
    }), br(() => {
      l().productGID, ee(A, void 0), D = void 0;
    }), br(() => {
      if (e(T)) return void (D !== void 0 && e(A) === D && (ee(A, void 0), D = void 0));
      const M = l().productGID === "default";
      if (!(M || !o().disableVariantOptionSync)) return;
      const W = M ? v() : p();
      if (!W || !i() || W === D) return;
      const de = D;
      if (D = W, !e(I).some((J) => J.id === W)) return;
      const ge = e(A) === void 0, N = e(A) === de && de !== void 0;
      (ge || N) && ee(A, W, !0);
    });
    var se = { get dealBlock() {
      return o();
    }, set dealBlock(M) {
      o(M), _();
    }, get dealBar() {
      return c();
    }, set dealBar(M) {
      c(M), _();
    }, get bundleProduct() {
      return l();
    }, set bundleProduct(M) {
      l(M), _();
    }, get product() {
      return i();
    }, set product(M) {
      i(M), _();
    }, get swapProducts() {
      return u();
    }, set swapProducts(M) {
      u(M), _();
    }, get dealBarSelected() {
      return g();
    }, set dealBarSelected(M) {
      g(M), _();
    }, get currentVariantId() {
      return v();
    }, set currentVariantId(M) {
      v(M), _();
    }, get mainVariantId() {
      return p();
    }, set mainVariantId(M) {
      p(M), _();
    }, get pricing() {
      return f();
    }, set pricing(M) {
      f(M), _();
    }, get onSwap() {
      return b();
    }, set onSwap(M) {
      b(M), _();
    }, get onChange() {
      return y();
    }, set onChange(M) {
      y(M), _();
    } }, te = Te(), X = _e(te), ne = (M) => {
      var W = o0(), de = _e(W), ge = w(de), N = (xe) => {
        rr(xe, { get url() {
          return e(Q);
        }, class: "kaching-bundles__mix-and-match-product__image-link", children: ($e, Me) => {
          var Ae = a0();
          Ie(Ae, "height", 50), Ie(Ae, "width", 50), ke(() => Ie(Ae, "src", e(q))), h($e, Ae);
        }, $$slots: { default: !0 } });
      }, J = (xe) => {
        h(xe, i0());
      };
      F(ge, (xe) => {
        e(q) ? xe(N) : xe(J, !1);
      });
      var ae = E(ge, 2), ce = w(ae);
      rr(ce, { get url() {
        return e(Q);
      }, class: "kaching-bundles__mix-and-match-product__title-link", children: (xe, $e) => {
        var Me = l0(), Ae = w(Me, !0);
        x(Me), ke(() => pt(Ae, e(oe))), h(xe, Me);
      }, $$slots: { default: !0 } });
      var me = E(ce, 2);
      wa(me, { get dealBlock() {
        return o();
      }, get variant() {
        return e(S);
      } });
      var be = E(me, 2), Se = (xe) => {
        {
          let $e = d(() => {
            var Ae;
            return e(T) ? (Ae = e(ue)) != null ? Ae : null : e(P) || 0;
          }), Me = d(() => e(T) ? r()("system.select_variant_placeholder") : void 0);
          Wn(xe, { get product() {
            return i();
          }, get selectedVariantId() {
            return e($e);
          }, get placeholderText() {
            return e(Me);
          }, onChange: j });
        }
      };
      F(be, (xe) => {
        e(Y) && xe(Se);
      }), x(ae);
      var L = E(ae, 2), pe = (xe) => {
        var $e = s0();
        Ss(w($e), { get discountedPrice() {
          return f().discountedPrice;
        }, get fullPrice() {
          return f().fullPrice;
        }, unitPrice: null, unitPriceReference: null, ignoreUnitPrice: !0 }), x($e), h(xe, $e);
      };
      F(L, (xe) => {
        f() && xe(pe);
      });
      var Z = E(L, 2), fe = (xe) => {
        Yt(xe, { element: "div", class: "kaching-bundles__mix-and-match-product__swap-button", onclick: U, children: ($e, Me) => {
          fa();
          var Ae = Rn();
          ke(() => pt(Ae, e(R))), h($e, Ae);
        }, $$slots: { default: !0 } });
      };
      F(Z, (xe) => {
        e(V) && xe(fe);
      }), x(de), pg(E(de, 2), { get dealBlock() {
        return o();
      }, get dealBar() {
        return c();
      }, get products() {
        return u();
      }, get isOpen() {
        return e(O);
      }, onChoose: G, onClose: H }), h(M, W);
    };
    F(X, (M) => {
      i() && M(ne);
    }), h(n, te);
    var he = it(se);
    return s(), he;
  }
  Je(bg, { dealBlock: {}, dealBar: {}, bundleProduct: {}, product: {}, swapProducts: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, pricing: {}, onSwap: {}, onChange: {} }, [], [], !0);
  const fg = (n, t) => {
    if (!t || t.length === 0) return n;
    const r = t.map(Ut);
    return { ...n, variants: n.variants.filter((a) => r.includes(a.id)) };
  };
  var c0 = Tn('<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 6.5V14.5M6.5 10.5H14.5M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function vg(n) {
    h(n, c0());
  }
  function u0(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Je(vg, {}, [], [], !0);
  var d0 = $('<img class="kaching-bundles__bar-image" alt=""/>'), g0 = $('<div class="kaching-bundles__bar-radio"></div>'), h0 = $('<span class="kaching-bundles__bar-title"><!></span>'), p0 = $('<span class="kaching-bundles__bar-label"><!></span>'), b0 = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), f0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), v0 = $("<!> <!>", 1), _0 = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), k0 = $('<div class="kaching-bundles__mix-and-match-products__placeholder"><span>Select product</span></div>'), m0 = $('<div class="kaching-bundles__mix-and-match-products__divider"><div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__mix-and-match-products__divider-icon"><!></div> <div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div></div>'), x0 = $("<!> <!>", 1), y0 = $("<div></div>"), w0 = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div> <!> <!> <!> <!>', 1), P0 = $('<div><input type="radio"/> <!> <!></div>');
  function _g(n, t) {
    at(t, !0);
    const r = () => Ve(T, "$config", o), a = () => Ve(H, "$formatPrice", o), s = () => Ve(G, "$translate", o), [o, c] = kt(), l = k(t, "dealBlock", 7), i = k(t, "dealBar", 7), u = k(t, "product", 7), g = k(t, "otherProducts", 23, () => []), v = k(t, "complementaryProducts", 23, () => []), p = k(t, "currentVariantId", 7), f = k(t, "componentId", 7), b = k(t, "selectedDealBarIndex", 7), y = k(t, "selected", 7, !1), m = k(t, "sellingPlan", 7), z = k(t, "onProgressiveGiftsChange", 7), C = k(t, "onDealBarSelect", 7), A = k(t, "onDealBarDeselect", 7), O = k(t, "onVariantSelect", 7), V = k(t, "onVariantsChange", 7), R = k(t, "onPersonalisationsChange", 7), U = k(t, "personalisationInitialValues", 23, () => []), G = Tt(), H = vn(), I = Vn(), T = yn();
    let ue = Oe(ut({})), re = Oe(ut({}));
    const P = d(() => Object.fromEntries(i().bundleProducts.map((Be) => [Be.id, S(Be).filter(B)])));
    function S(Be) {
      var Fe;
      const Le = new Map(((Fe = Be.selectedProducts) != null ? Fe : []).map((ie) => [Ut(ie.id), ie.variantGIDs])), K = g().filter((ie) => Le.has(ie.id)).map((ie) => fg(ie, Le.get(ie.id))), we = (function(ie) {
        if (!ie) return;
        if (ie === "default") return u();
        const ze = Ut(ie);
        return g().find((Ge) => Ge.id === ze);
      })(Be.productGID);
      return we ? [fg(we, Be.variantGIDs), ...K.filter((ie) => ie.id !== we.id)] : K;
    }
    function B(Be) {
      return Be.availableForSale && Be.variants.some((Fe) => Fe.availableForSale);
    }
    let q = Oe(ut([])), Y = Oe(ut([])), Q = Oe(ut([]));
    const oe = d(() => `${i().id}_${f()}`), j = d(() => i().bundleProducts.filter(({ productGID: Be }) => Be)), D = d(() => e(j).every((Be) => pe(Be))), se = d(() => i().showProductsOnlyWhenSelected && !y()), te = d(() => e(j).every((Be) => {
      var Fe, Le;
      return ((Le = (Fe = e(P)[Be.id]) == null ? void 0 : Fe.length) != null ? Le : 0) > 0;
    })), X = d(() => {
      return l() ? (Be = l(), Fe = e(ue), i().bundleProducts.map((Le) => {
        const K = Fe[Le.id];
        if (!K) return 0;
        const { variant: we } = K;
        let ie = we.price;
        return we.compareAtPrice && Be.useProductCompareAtPrice && (ie = Math.max(ie, we.compareAtPrice)), ie;
      }).reduce((Le, K) => Le + K, 0)) : 0;
      var Be, Fe;
    }), ne = d(() => Cl(e(X), e(q), e(Y))), he = d(() => l().priceRounding ? { perItem: !1, precision: l().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), M = d(() => l() ? ms(i(), e(ue), r().currencyRate, e(he), m()) : 0), W = d(() => e(ne) > e(M)), de = d(() => i().showProductPrices ? (function(Be, Fe, Le, K, we, ie) {
      const ze = Be.bundleProducts.filter(({ productGID: Ee }) => Ee).flatMap((Ee) => {
        const qe = Fe[Ee.id];
        if (!qe) return [];
        const et = ar(qe.product, qe.variant, we), yt = et ? Co(qe.variant.price, et) : qe.variant.price, { price: rt, compareAtPrice: Vt } = qe.variant, Et = ie && Vt ? Math.max(rt, Vt) : rt;
        return [{ id: Ee.id, basisPrice: yt, fullPrice: Et }];
      }), Ge = ze.reduce((Ee, qe) => Ee + qe.basisPrice, 0);
      if (Ge === 0) return Object.fromEntries(ze.map((Ee) => [Ee.id, { discountedPrice: 0, fullPrice: Ee.fullPrice }]));
      const Qe = ms(Be, Fe, Le, K, we), Ce = ze.map((Ee) => {
        const qe = Qe * Ee.basisPrice / Ge;
        return { ...Ee, share: Math.floor(qe), remainder: qe % 1 };
      });
      let Pe = Qe - Ce.reduce((Ee, { share: qe }) => Ee + qe, 0);
      for (const Ee of [...Ce].sort((qe, et) => et.remainder - qe.remainder)) {
        if (Pe <= 0) break;
        Ee.share += 1, Pe -= 1;
      }
      return Object.fromEntries(Ce.map((Ee) => [Ee.id, { discountedPrice: Ee.share, fullPrice: Ee.fullPrice }]));
    })(i(), e(ue), r().currencyRate, e(he), m(), l().useProductCompareAtPrice) : void 0), ge = d(() => {
      var Be;
      const Fe = e(j)[0];
      if (Fe) return (Be = e(ue)[Fe.id]) == null ? void 0 : Be.variant.id;
    }), N = d(() => _n({ priceFormatter: a(), product: u(), dealBar: i(), totalFullPrice: e(X), totalCompareAtPrice: e(ne), totalDiscountedPrice: e(M), quantity: 1, unitQuantity: null, sellingPlan: m() })), J = d(() => e(N)(s()(i().title))), ae = d(() => e(N)(s()(i().subtitle))), ce = d(() => e(N)(s()(i().label))), me = d(() => Sl(l(), i()).map((Be) => Ea(Be, s(), e(N)))), be = d(() => ja(e(me))), Se = d(() => Ve(I, "$getMediaImageUrl", o)(i().mediaImageGID) || Il);
    function L(Be) {
      y() && (Be.preventDefault(), Be.stopPropagation(), A()());
    }
    function pe(Be) {
      var Fe, Le;
      return (Le = e(re)[Be.id]) != null ? Le : (Fe = e(P)[Be.id]) == null ? void 0 : Fe[0];
    }
    Fa(() => {
      y() && C()({ dealBarId: i().id, preselected: !0 });
    }), tt(() => {
      y() && (Da(e(ue)), Da(e(Q)), Da(e(q)), Da(e(Y)), m(), Xt(() => {
        (function() {
          var Be;
          if (!i().bundleProducts.map(({ id: Ce }) => Ce).every((Ce) => e(ue)[Ce])) return;
          const Fe = [];
          for (const Ce of i().bundleProducts) {
            const Pe = e(ue)[Ce.id];
            Pe && Fe.push({ id: Ce.id, variant: Pe.variant, product: Pe.product, quantity: 1, variantSelectionPending: Pe.variantSelectionPending });
          }
          if (Fe.length === 0) return;
          const Le = e(M) + e(Q).reduce((Ce, Pe) => Ce + Pe.discountedPrice, 0), K = e(q).reduce((Ce, Pe) => Pe.showPrice ? Ce + Pe.fullPrice : Ce, 0) + e(Y).reduce((Ce, Pe) => Ce + Pe.fullPrice * Pe.quantity, 0), we = e(X) + e(Q).reduce((Ce, Pe) => Ce + Pe.fullPrice, 0) + K, ie = ms(i(), e(ue), r().currencyRate, e(he), void 0), ze = u().sellingPlans.map((Ce) => ({ sellingPlanId: Ce.id, discountedPrice: ms(i(), e(ue), r().currencyRate, e(he), Ce) })), Ge = (Be = i().requireVariantSelectionEnabled) != null && Be, Qe = Ge ? i().bundleProducts.filter(({ id: Ce }) => {
            var Pe;
            return (Pe = e(ue)[Ce]) == null ? void 0 : Pe.variantSelectionPending;
          }).length : 0;
          V()({ bundleProducts: Fe, freeGifts: [...e(q), ...e(Y)], upsells: e(Q), pricing: { discountedPrice: Le, fullPrice: we, giftValue: K, discountedPricePerItem: e(M), fullPricePerItem: e(X), discountedPriceWithoutSellingPlan: ie, discountedPricesForSellingPlans: ze }, validation: { requiresItemSelection: Ge, allItemsSelected: Qe === 0, missingItemsCount: Qe } });
        })();
      }));
    });
    const Z = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? zl(i().showAsSoldOut) : "");
    var fe = { get dealBlock() {
      return l();
    }, set dealBlock(Be) {
      l(Be), _();
    }, get dealBar() {
      return i();
    }, set dealBar(Be) {
      i(Be), _();
    }, get product() {
      return u();
    }, set product(Be) {
      u(Be), _();
    }, get otherProducts() {
      return g();
    }, set otherProducts(Be = []) {
      g(Be), _();
    }, get complementaryProducts() {
      return v();
    }, set complementaryProducts(Be = []) {
      v(Be), _();
    }, get currentVariantId() {
      return p();
    }, set currentVariantId(Be) {
      p(Be), _();
    }, get componentId() {
      return f();
    }, set componentId(Be) {
      f(Be), _();
    }, get selectedDealBarIndex() {
      return b();
    }, set selectedDealBarIndex(Be) {
      b(Be), _();
    }, get selected() {
      return y();
    }, set selected(Be = !1) {
      y(Be), _();
    }, get sellingPlan() {
      return m();
    }, set sellingPlan(Be) {
      m(Be), _();
    }, get onProgressiveGiftsChange() {
      return z();
    }, set onProgressiveGiftsChange(Be) {
      z(Be), _();
    }, get onDealBarSelect() {
      return C();
    }, set onDealBarSelect(Be) {
      C(Be), _();
    }, get onDealBarDeselect() {
      return A();
    }, set onDealBarDeselect(Be) {
      A(Be), _();
    }, get onVariantSelect() {
      return O();
    }, set onVariantSelect(Be) {
      O(Be), _();
    }, get onVariantsChange() {
      return V();
    }, set onVariantsChange(Be) {
      V(Be), _();
    }, get onPersonalisationsChange() {
      return R();
    }, set onPersonalisationsChange(Be) {
      R(Be), _();
    }, get personalisationInitialValues() {
      return U();
    }, set personalisationInitialValues(Be = []) {
      U(Be), _();
    } }, xe = Te(), $e = _e(xe), Me = (Be) => {
      var Fe = P0();
      let Le;
      var K = w(Fe);
      ka(K), K.__change = [u0, C, i];
      var we = E(K, 2);
      bi(we, { get for() {
        return e(oe);
      }, get soldOut() {
        return i().showAsSoldOutEnabled;
      }, get borderHost() {
        return e(be);
      }, children: (Ge, Qe) => {
        var Ce = w0(), Pe = _e(Ce);
        Gt(Pe, 17, () => e(me), (Xe) => Xe.id, (Xe, nt) => {
          ya(Xe, { get badge() {
            return e(nt);
          }, get blockLayout() {
            return l().blockLayout;
          } });
        });
        var Ee = E(Pe, 2), qe = w(Ee);
        Yt(qe, { element: "div", class: "kaching-bundles__bar-main", onclick: L, children: (Xe, nt) => {
          var wt = _0(), mt = _e(wt), Rt = (Ye) => {
            var ht = d0();
            ke(() => Ie(ht, "src", e(Se))), h(Ye, ht);
          }, ve = (Ye) => {
            h(Ye, g0());
          };
          F(mt, (Ye) => {
            i().mediaImageGID ? Ye(Rt) : Ye(ve, !1);
          });
          var Ze = E(mt, 2), ot = w(Ze), ct = w(ot), It = w(ct);
          lt(It, () => e(J), (Ye) => {
            var ht = h0();
            Ne(w(ht), () => e(J)), x(ht), h(Ye, ht);
          });
          var bt = E(It, 2), Pt = (Ye) => {
            var ht = Te();
            lt(_e(ht), () => e(ce), (dt) => {
              var zt = p0();
              Ne(w(zt), () => e(ce)), x(zt), h(dt, zt);
            }), h(Ye, ht);
          };
          F(bt, (Ye) => {
            e(ce) && Ye(Pt);
          }), x(ct);
          var St = E(ct, 2), Bt = (Ye) => {
            var ht = Te();
            lt(_e(ht), () => e(ae), (dt) => {
              var zt = b0();
              Ne(w(zt), () => e(ae)), x(zt), h(dt, zt);
            }), h(Ye, ht);
          };
          F(St, (Ye) => {
            e(ae) && Ye(Bt);
          }), x(ot);
          var Mt = E(ot, 2), rn = w(Mt), Kt = (Ye) => {
            var ht = v0(), dt = _e(ht);
            lt(dt, () => e(M), (ft) => {
              oa(ft, { get amount() {
                return e(M);
              }, showPricesPerItem: !1, get unitLabel() {
                return l().unitLabel;
              } });
            });
            var zt = E(dt, 2), Ot = (ft) => {
              var en = Te();
              lt(_e(en), () => e(ne), (xn) => {
                var vt = f0();
                Ne(w(vt), () => a()(e(ne))), x(vt), ke((Ht) => Ie(vt, "data-a11y-label", Ht), [() => s()("system.original_price")]), h(xn, vt);
              }), h(ft, en);
            };
            F(zt, (ft) => {
              e(W) && ft(Ot);
            }), h(Ye, ht);
          };
          F(rn, (Ye) => {
            e(D) && Ye(Kt);
          }), x(Mt), x(Ze), h(Xe, wt);
        }, $$slots: { default: !0 } });
        var et = E(qe, 2), yt = (Xe) => {
          Na(Xe, { get highlights() {
            return i().highlights;
          }, get isSelected() {
            return y();
          }, get replaceLiquid() {
            return e(N);
          } });
        };
        F(et, (Xe) => {
          i().highlights && Xe(yt);
        });
        var rt = E(et, 2), Vt = (Xe) => {
          var nt = y0();
          let wt;
          Gt(nt, 23, () => i().bundleProducts, (mt) => mt.id, (mt, Rt, ve) => {
            var Ze = x0(), ot = _e(Ze), ct = (St) => {
              {
                let Bt = d(() => pe(e(Rt))), Mt = d(() => {
                  var rn;
                  return (rn = e(de)) == null ? void 0 : rn[e(Rt).id];
                });
                bg(St, { get bundleProduct() {
                  return e(Rt);
                }, get product() {
                  return e(Bt);
                }, get swapProducts() {
                  return e(P)[e(Rt).id];
                }, get dealBlock() {
                  return l();
                }, get dealBar() {
                  return i();
                }, get dealBarSelected() {
                  return y();
                }, get currentVariantId() {
                  return p();
                }, get mainVariantId() {
                  return e(ge);
                }, get pricing() {
                  return e(Mt);
                }, onSwap: (rn) => (function(Kt, Ye) {
                  e(re)[Kt] = Ye;
                })(e(Rt).id, rn), onChange: (rn) => (function(Kt, Ye) {
                  const { variant: ht, product: dt, variantSelectionPending: zt } = Ye;
                  e(ue)[Kt] = { variant: ht, product: dt, variantSelectionPending: zt }, y() && i().bundleProducts.map(({ id: Ot }) => Ot).every((Ot) => e(ue)[Ot]) && (Kt !== i().bundleProducts[0].id || zt || O()({ variantId: ht.id }));
                })(e(Rt).id, rn) });
              }
            }, It = (St) => {
              var Bt = Te(), Mt = _e(Bt), rn = (Kt) => {
                h(Kt, k0());
              };
              F(Mt, (Kt) => {
                r().preview && Kt(rn);
              }, !0), h(St, Bt);
            };
            F(ot, (St) => {
              e(Rt).productGID ? St(ct) : St(It, !1);
            });
            var bt = E(ot, 2), Pt = (St) => {
              var Bt = m0(), Mt = E(w(Bt), 2);
              vg(w(Mt)), x(Mt), fa(2), x(Bt), h(St, Bt);
            };
            F(bt, (St) => {
              e(ve) < i().bundleProducts.length - 1 && St(Pt);
            }), h(mt, Ze);
          }), x(nt), ke((mt) => wt = Wt(nt, 1, "kaching-bundles__mix-and-match-products", null, wt, mt), [() => ({ "kaching-bundles__mix-and-match-products--hidden": e(se) })]), h(Xe, nt);
        };
        F(rt, (Xe) => {
          e(D) && Xe(Vt);
        });
        var Et = E(rt, 2), bn = (Xe) => {
          {
            let nt = d(() => e(ge) ? [e(ge)] : []);
            fi(Xe, { get product() {
              return u();
            }, get productPersonalisation() {
              return i().productPersonalisation;
            }, get selectedVariantIds() {
              return e(nt);
            }, quantity: 1, get addPersonalisationModal() {
              return l().addPersonalisationModal;
            }, get onPersonalisationsChange() {
              return R();
            }, get initialValues() {
              return U();
            } });
          }
        };
        F(Et, (Xe) => {
          y() && i().productPersonalisation && (l().blockLayout === "vertical" || l().blockLayout === "plain") && Xe(bn);
        }), x(Ee);
        var un = E(Ee, 2);
        {
          let Xe = d(() => i().upsells || []);
          Ei(un, { get dealBlock() {
            return l();
          }, get dealBarId() {
            return i().id;
          }, get upsells() {
            return e(Xe);
          }, get otherProducts() {
            return g();
          }, get complementaryProducts() {
            return v();
          }, get dealBarSelected() {
            return y();
          }, get dealSellingPlan() {
            return m();
          }, sets: 1, onChange: (nt) => {
            ee(Q, nt, !0);
          } });
        }
        var De = E(un, 2);
        {
          let Xe = d(() => ({ ...i(), dealBarType: gt.Bundle, quantitySelector: !1, bundleProducts: i().bundleProducts.map((nt) => ({ ...nt, quantity: 1, variantGIDs: null, defaultVariantGID: null, mediaImageGID: null, discountType: "default", discountValue: 0 })) }));
          Ni(De, { get selectedDealBarIndex() {
            return b();
          }, get onChange() {
            return z();
          }, get dealBlock() {
            return l();
          }, get sellingPlan() {
            return m();
          }, get dealBar() {
            return e(Xe);
          }, get otherProducts() {
            return g();
          }, get selected() {
            return y();
          }, get progressiveGifts() {
            return l().progressiveGifts;
          } });
        }
        var Re = E(De, 2);
        {
          let Xe = d(() => i().freeGifts || []);
          Li(Re, { get dealBlock() {
            return l();
          }, get freeGifts() {
            return e(Xe);
          }, get freeGiftsSummary() {
            return i().freeGiftsSummary;
          }, get otherProducts() {
            return g();
          }, get dealBarSelected() {
            return y();
          }, get sellingPlan() {
            return m();
          }, sets: 1, onChange: (nt) => {
            ee(q, nt, !0);
          } });
        }
        var Ke = E(Re, 2);
        {
          let Xe = d(() => i().multipleGiftsSelectors || []);
          Ri(Ke, { get dealBlock() {
            return l();
          }, get multipleGiftsSelectors() {
            return e(Xe);
          }, get sellingPlan() {
            return m();
          }, get otherProducts() {
            return g();
          }, onChange: (nt) => {
            ee(Y, nt, !0);
          } });
        }
        h(Ge, Ce);
      }, $$slots: { default: !0 } });
      var ie = E(we, 2), ze = (Ge) => {
        ji(Ge, { get showAsSoldOut() {
          return i().showAsSoldOut;
        }, get replaceLiquid() {
          return e(N);
        } });
      };
      F(ie, (Ge) => {
        i().showAsSoldOutEnabled && i().showAsSoldOut && Ge(ze);
      }), x(Fe), ke((Ge) => {
        var Qe;
        Le = Wt(Fe, 1, "kaching-bundles__bar", null, Le, Ge), Ie(Fe, "data-deal-bar-id", i().id), Ft(Fe, e(Z)), Ie(K, "name", `kaching-bundles-deal-${(Qe = f()) != null ? Qe : ""}`), oi(K, i().id), Ie(K, "id", e(oe)), _l(K, y()), K.disabled = i().showAsSoldOutEnabled;
      }, [() => ({ "kaching-bundles__bar--selected": y(), "kaching-bundles__bar--disabled": !e(te) && r().preview })]), h(Be, Fe);
    };
    F($e, (Be) => {
      (e(te) || r().preview) && Be(Me);
    }), h(n, xe);
    var Ae = it(fe);
    return c(), Ae;
  }
  Fn(["change"]), Je(_g, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var S0 = Tn('<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.2008 16C27.2008 18.9705 26.0208 21.8192 23.9204 23.9196C21.82 26.0201 18.9712 27.2 16.0008 27.2C13.0304 27.2 10.1816 26.0201 8.08119 23.9196C5.98078 21.8192 4.80078 18.9705 4.80078 16C4.80078 13.0296 5.98078 10.1809 8.08119 8.08045C10.1816 5.98005 13.0304 4.80005 16.0008 4.80005C18.9712 4.80005 21.82 5.98005 23.9204 8.08045C26.0208 10.1809 27.2008 13.0296 27.2008 16ZM10.0008 16C10.0008 15.6818 10.1272 15.3766 10.3523 15.1515C10.5773 14.9265 10.8825 14.8 11.2008 14.8H14.8008V11.2C14.8008 10.8818 14.9272 10.5766 15.1523 10.3515C15.3773 10.1265 15.6825 10 16.0008 10C16.319 10 16.6243 10.1265 16.8493 10.3515C17.0744 10.5766 17.2008 10.8818 17.2008 11.2V14.8H20.8008C21.119 14.8 21.4243 14.9265 21.6493 15.1515C21.8744 15.3766 22.0008 15.6818 22.0008 16C22.0008 16.3183 21.8744 16.6235 21.6493 16.8486C21.4243 17.0736 21.119 17.2 20.8008 17.2H17.2008V20.8C17.2008 21.1183 17.0744 21.4235 16.8493 21.6486C16.6243 21.8736 16.319 22 16.0008 22C15.6825 22 15.3773 21.8736 15.1523 21.6486C14.9272 21.4235 14.8008 21.1183 14.8008 20.8V17.2H11.2008C10.8825 17.2 10.5773 17.0736 10.3523 16.8486C10.1272 16.6235 10.0008 16.3183 10.0008 16Z" fill="currentColor"></path></svg>');
  function kg(n, t) {
    at(t, !0);
    let r = k(t, "class", 7);
    var a = { get class() {
      return r();
    }, set class(o) {
      r(o), _();
    } }, s = S0();
    return ke(() => Wt(s, 0, fl(r()))), h(n, s), it(a);
  }
  Je(kg, { class: {} }, [], [], !0);
  const B0 = (n) => {
    const { collectionBreaks: t, colors: r, cornerRadius: a } = n;
    return t ? fn({ "kaching-collection-breaks-product-photo-size": t.productPhotoSize + "px", "kaching-collection-breaks-button-color": t.buttonColor && We(t.buttonColor), "kaching-collection-breaks-product-title-color": We(r.title), "kaching-collection-breaks-image-border-radius": (a || 0) / 2 + "px" }) : "";
  };
  function C0(n, t) {
    n.target === n.currentTarget && ee(t, !1);
  }
  var I0 = $('<img class="kaching-bundles__collection-product__image" alt=""/>'), M0 = $('<span class="kaching-bundles__collection-product__title"> </span>'), z0 = $("<!> <!>", 1), $0 = $('<img alt=""/>'), D0 = $('<div class="kaching-bundles__collection-product"><div class="kaching-bundles__collection-product__main"><!> <div class="kaching-bundles__collection-product__content"><!> <!> <!></div></div> <!></div>'), T0 = $('<img class="kaching-bundles__collection-product__image" alt="" height="40" width="40"/>'), V0 = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-product-modal" role="none"><div class="kaching-bundles__choose-product-modal__content"><!></div></div></div>'), A0 = $('<div><div class="kaching-bundles__collection-product__main"><!> <!></div> <!></div>');
  function Ho(n, t) {
    at(t, !0);
    const r = () => Ve(b, "$config", a), [a, s] = kt(), o = k(t, "dealBlock", 7), c = k(t, "dealBar", 7), l = k(t, "mainProduct", 7, null), i = k(t, "products", 7), u = k(t, "selectedProductVariant", 7, null), g = k(t, "onChange", 7), v = k(t, "onRemove", 7), p = Tt(), f = Vn(), b = yn(), y = pi();
    let m = Oe(!1);
    const z = d(() => o().collectionBreaks), C = d(() => {
      var Q;
      return ((Q = u()) == null ? void 0 : Q.product) || l();
    }), A = d(() => {
      var Q, oe;
      return ((Q = u()) == null ? void 0 : Q.variant) || ((oe = e(C)) == null ? void 0 : oe.variants[0]) || null;
    }), O = d(() => Ve(f, "$getMediaImageUrl", a)(e(z).mediaImageGID)), V = d(() => Ve(p, "$translate", a)(e(z).buttonText)), R = d(() => e(z).requireItemSelectionAlert), U = d(() => e(z).requireItemSelectionEnabled), G = d(() => r().preview && r().previewAlerts || Ve(y, "$requireSelectionError", a)), H = d(() => {
      var Q, oe;
      return (Q = e(C)) != null && Q.url ? `${e(C).url}?variant=${(oe = e(A)) == null ? void 0 : oe.id}` : void 0;
    });
    function I(Q) {
      ee(m, !1), g()(Q);
    }
    function T() {
      var Q;
      (Q = v()) == null || Q();
    }
    function ue(Q) {
      const oe = e(C).variants.find((j) => j.id === Q);
      oe && g()({ product: e(C), variant: oe });
    }
    var re = { get dealBlock() {
      return o();
    }, set dealBlock(Q) {
      o(Q), _();
    }, get dealBar() {
      return c();
    }, set dealBar(Q) {
      c(Q), _();
    }, get mainProduct() {
      return l();
    }, set mainProduct(Q = null) {
      l(Q), _();
    }, get products() {
      return i();
    }, set products(Q) {
      i(Q), _();
    }, get selectedProductVariant() {
      return u();
    }, set selectedProductVariant(Q = null) {
      u(Q), _();
    }, get onChange() {
      return g();
    }, set onChange(Q) {
      g(Q), _();
    }, get onRemove() {
      return v();
    }, set onRemove(Q) {
      v(Q), _();
    } }, P = Te(), S = _e(P), B = (Q) => {
      var oe = D0(), j = w(oe), D = w(j);
      {
        let de = d(() => l() ? void 0 : e(H));
        rr(D, { get url() {
          return e(de);
        }, class: "kaching-bundles__collection-product__link", children: (ge, N) => {
          var J = I0();
          ke(() => Ie(J, "src", e(A).image || e(C).image)), h(ge, J);
        }, $$slots: { default: !0 } });
      }
      var se = E(D, 2), te = w(se), X = (de) => {
        {
          let ge = d(() => l() ? void 0 : e(H));
          rr(de, { get url() {
            return e(ge);
          }, class: "kaching-bundles__collection-product__link", children: (N, J) => {
            var ae = M0(), ce = w(ae, !0);
            x(ae), ke(() => pt(ce, e(C).title)), h(N, ae);
          }, $$slots: { default: !0 } });
        }
      };
      F(te, (de) => {
        e(z).showProductName && de(X);
      });
      var ne = E(te, 2), he = (de) => {
        var ge = z0(), N = _e(ge);
        ma(N, { get product() {
          return e(C);
        } });
        var J = E(N, 2);
        {
          let ae = d(() => {
            var ce;
            return (ce = e(A)) == null ? void 0 : ce.id;
          });
          Wn(J, { get product() {
            return e(C);
          }, get selectedVariantId() {
            return e(ae);
          }, onChange: ue });
        }
        h(de, ge);
      };
      F(ne, (de) => {
        e(C).variants.length > 1 && de(he);
      }), wa(E(ne, 2), { get dealBlock() {
        return o();
      }, get variant() {
        return e(A);
      } }), x(se), x(j);
      var M = E(j, 2), W = (de) => {
        Yt(de, { element: "div", class: "kaching-bundles__collection-product__remove-button", "aria-label": "Remove product", onclick: T, children: (ge, N) => {
          var J = $0();
          ke(() => Ie(J, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), h(ge, J);
        }, $$slots: { default: !0 } });
      };
      F(M, (de) => {
        l() || de(W);
      }), x(oe), h(Q, oe);
    }, q = (Q) => {
      var oe = A0();
      let j;
      var D = w(oe), se = w(D);
      Yt(se, { element: "div", class: "kaching-bundles__collection-product__choose-product-image", onclick: () => {
        ee(m, !0);
      }, children: (M, W) => {
        var de = Te(), ge = _e(de), N = (ae) => {
          var ce = Te(), me = _e(ce), be = (Se) => {
            var L = T0();
            ke(() => Ie(L, "src", e(O))), h(Se, L);
          };
          F(me, (Se) => {
            e(O) && Se(be);
          }), h(ae, ce);
        }, J = (ae) => {
          kg(ae, { class: "kaching-bundles__collection-product__image kaching-bundles__collection-product__image--default" });
        };
        F(ge, (ae) => {
          e(z).mediaImageGID ? ae(N) : ae(J, !1);
        }), h(M, de);
      }, $$slots: { default: !0 } });
      var te = E(se, 2), X = (M) => {
        Yt(M, { element: "div", class: "kaching-bundles__collection-product__choose-product-button", onclick: () => {
          ee(m, !0);
        }, children: (W, de) => {
          fa();
          var ge = Rn();
          ke(() => pt(ge, e(V))), h(W, ge);
        }, $$slots: { default: !0 } });
      };
      F(te, (M) => {
        e(V) && M(X);
      }), x(D);
      var ne = E(D, 2), he = (M) => {
        Ml(M, { target: "body", children: (W, de) => {
          var ge = V0(), N = w(ge);
          N.__click = [C0, m];
          var J = w(N);
          Do(w(J), { get dealBlock() {
            return o();
          }, get dealBar() {
            return c();
          }, get products() {
            return i();
          }, onChoose: I, onClose: () => {
            ee(m, !1);
          } }), x(J), x(N), x(ge), ke((ae) => Ft(N, ae), [() => (function(ae) {
            return fn({ "kaching-choose-product-overlay-color": We(ae.chooseProductModal.overlayColor) });
          })(o())]), h(W, ge);
        }, $$slots: { default: !0 } });
      };
      F(ne, (M) => {
        e(m) && M(he);
      }), x(oe), ke((M) => j = Wt(oe, 1, "kaching-bundles__collection-product", null, j, M), [() => ({ "kaching-bundles__collection-product--require-selection": e(G) && e(U) && e(R) })]), h(Q, oe);
    };
    F(S, (Q) => {
      e(C) && e(A) ? Q(B) : Q(q, !1);
    }), h(n, P);
    var Y = it(re);
    return s(), Y;
  }
  Fn(["click"]), Je(Ho, { dealBlock: {}, dealBar: {}, mainProduct: {}, products: {}, selectedProductVariant: {}, onChange: {}, onRemove: {} }, [], [], !0);
  const Zo = Rr({});
  function Bs(n, t) {
    Zo.update((r) => ({ ...r, [n]: t }));
  }
  function q0(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  var G0 = $('<img class="kaching-bundles__bar-image" alt=""/>'), F0 = $('<div class="kaching-bundles__bar-radio"></div>'), O0 = $('<span class="kaching-bundles__bar-title"><!></span>'), L0 = $('<span class="kaching-bundles__bar-label"><!></span>'), E0 = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), j0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), R0 = $('<div class="kaching-bundles__bar-price"><!></div>'), N0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Q0 = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), W0 = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), U0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), H0 = $("<!> <!>", 1), Z0 = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), J0 = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), Y0 = $('<div class="kaching-bundles__bar-collection-products"></div>'), K0 = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), X0 = $('<div><input type="radio"/> <!> <!></div>');
  function mg(n, t) {
    at(t, !0);
    const r = () => Ve(S, "$config", c), a = () => Ve(Zo, "$chosenCollectionBreaksProducts", c), s = () => Ve(re, "$formatPrice", c), o = () => Ve(T, "$translate", c), [c, l] = kt();
    let i = k(t, "dealBlock", 7), u = k(t, "dealBar", 7), g = k(t, "product", 7), v = k(t, "collectionBreaksProducts", 23, () => []), p = k(t, "otherProducts", 23, () => []), f = k(t, "selectedDealBarIndex", 7, null), b = k(t, "complementaryProducts", 23, () => []), y = k(t, "customQuantity", 7, void 0), m = k(t, "currentVariantId", 7, void 0), z = k(t, "componentId", 7), C = k(t, "selected", 7, !1), A = k(t, "globalSellingPlan", 7, void 0), O = k(t, "onDealBarSelect", 7), V = k(t, "onDealBarDeselect", 7), R = k(t, "onVariantSelect", 7), U = k(t, "onVariantsChange", 7), G = k(t, "onPersonalisationsChange", 7), H = k(t, "personalisationInitialValues", 23, () => []), I = k(t, "onProgressiveGiftsChange", 7);
    const T = Tt(), ue = pi(), re = vn(), P = Vn(), S = yn();
    let B = Oe(ut([])), q = Oe(ut([])), Y = Oe(ut([]));
    const Q = new Ld(), oe = d(() => {
      var De, Re;
      return (Re = (De = i().collectionBreaks) == null ? void 0 : De.autoFillNotChosenItems) != null && Re;
    }), j = d(() => i().priceRounding ? { perItem: i().showPricesPerItem, precision: i().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), D = d(() => {
      var De, Re;
      return i() && ((Re = (De = i().defaultVariantsV2) == null ? void 0 : De.find((Ke) => Ut(Ke.productGID) === g().id && Ke.dealBarId === u().id)) == null ? void 0 : Re.variantGIDs) || [];
    });
    let se = d(() => he(u())), te = Oe(ut(he(u())));
    br(() => {
      ee(te, e(se), !0);
    });
    const X = d(() => y() || e(te)), ne = d(() => Math.max(1, Math.floor(e(X) / e(se))));
    function he(De) {
      return De.dealBarType === gt.Bxgy ? De.buyQuantity + De.getQuantity : Number(De.quantity);
    }
    tt(() => {
      m() && Xt(() => {
        (function(De, Re) {
          if (Object.keys(a()).length === 0 && De[0]) {
            const Xe = Ut(De[0]), nt = g().variants.find((wt) => wt.id == Xe);
            if (nt) return void Bs(0, { product: g(), variant: nt });
          }
          const Ke = g().variants.find((Xe) => Xe.id == Re);
          if (Ke) return void Bs(0, { product: g(), variant: Ke });
          Object.keys(a()).length === 0 && g().variants[0] && Bs(0, { product: g(), variant: g().variants[0] });
        })(e(D), m());
      });
    }), tt(() => {
      C() || Q.clear();
    });
    const M = d(() => v().length === 0 || v().some((De) => De.id === g().id)), W = d(() => {
      const De = Object.fromEntries(Object.entries(a()).filter(([Ke]) => Number(Ke) < e(X)));
      if (!C() || !e(oe)) return De;
      const Re = { ...De };
      for (let Ke = 1; Ke < e(X); Ke++) Re[Ke] || Q.has(Ke) || (e(M) && De[0] ? Re[Ke] = { product: g(), variant: De[0].variant } : De[1] && (Re[Ke] = { product: De[1].product, variant: De[1].variant }));
      return Re;
    }), de = d(() => C() ? Object.values(e(W)).map((De) => ({ variant: De.variant, quantity: 1 })) : []), ge = d(() => (function({ selectedProductVariants: De, mainProductIsInCollection: Re, collectionBreaksProducts: Ke, dealBlock: Xe, quantity: nt }) {
      var wt;
      const mt = De.map((ct) => ({ quantity: 1, variant: ct.variant }));
      if (mt.length === 0 || mt.length >= nt || (wt = Xe.collectionBreaks) != null && wt.showChosenProductsPriceOnly) return mt;
      const Rt = nt - mt.length;
      if (Re) {
        const ct = Array.from({ length: Rt }, () => mt[0]);
        return [...mt, ...ct];
      }
      const ve = Ke.flatMap((ct) => ct.variants).filter((ct) => ct.availableForSale);
      if (ve.length === 0) return mt;
      const Ze = ve.reduce((ct, It) => It.price < ct.price ? It : ct, ve[0]), ot = Array.from({ length: Rt }, () => ({ quantity: 1, variant: Ze }));
      return [...mt, ...ot];
    })({ selectedProductVariants: Object.values(e(W)), mainProductIsInCollection: e(M), collectionBreaksProducts: v(), dealBlock: i(), quantity: e(X) }));
    let N = Oe(void 0);
    const J = d(() => Pl(g(), e(ge).map((De) => De.variant))), ae = d(() => {
      var De, Re;
      return (u().sellingPlanEnabled || i().subscriptionsEnabled && ((De = i().subscriptions) == null ? void 0 : De.layout) === "link" && ((Re = i().subscriptions) == null ? void 0 : Re.subscribeByDefault)) && (!i().subscriptionsEnabled || !!A());
    }), ce = d(() => e(ae) ? Io(u(), e(J), e(N)) : void 0), me = d(() => Mo(e(ce), A(), e(J), g().requiresSellingPlan)), be = d(() => Object.entries(e(W)).sort(([De], [Re]) => Number(De) - Number(Re)).map(([De, Re]) => ({ key: De, product: Re.product, variant: Re.variant }))), Se = d(() => (function(De, Re, Ke) {
      return Ke.map(({ variant: nt, quantity: wt }) => {
        let mt = nt.price;
        const Rt = De.useProductCompareAtPrice || (Re.dealBarType === void 0 || Re.dealBarType === gt.QuantityBreak) && Re.discountType === "default";
        return nt.compareAtPrice && Rt && (mt = Math.max(mt, nt.compareAtPrice)), mt * wt;
      }).reduce((nt, wt) => nt + wt, 0);
    })(i(), u(), e(ge))), L = d(() => Cl(e(Se), e(B), e(q))), pe = d(() => Math.ceil(e(Se) / e(ge).length)), Z = d(() => Ao(e(X) === 1, e(L), e(pe))), fe = d(() => i() && Le(e(ge), e(me))), xe = d(() => _n({ priceFormatter: s(), product: g(), selectedVariants: e(de), dealBar: u(), totalFullPrice: e(Se), totalCompareAtPrice: e(L), totalDiscountedPrice: e(fe), quantity: e(X), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: Ir(e(ge)), sellingPlan: e(me) })), $e = d(() => e(xe)(o()(u().title))), Me = d(() => e(xe)(o()(u().subtitle))), Ae = d(() => e(xe)(o()(u().label))), Be = d(() => Sl(i(), u()).map((De) => Ea(De, o(), e(xe)))), Fe = d(() => ja(e(Be)));
    function Le(De, Re) {
      switch (u().dealBarType) {
        case void 0:
        case gt.QuantityBreak:
          return yd(u(), De, r().currencyRate, e(j), Re, r().featureFlags.percentage_cents_rounding_workaround);
        case gt.Bxgy:
          return wd(u(), De, r().currencyRate, e(j), Re);
      }
    }
    const K = d(() => Math.ceil(e(fe) / e(ge).length)), we = d(() => e(L) > e(fe)), ie = d(() => `${u().id}_${z()}`);
    function ze(De) {
      C() && (De.preventDefault(), De.stopPropagation(), V()());
    }
    Fa(() => {
      C() && O()({ dealBarId: u().id, dealBarQuantity: he(u()), preselected: !0 });
    });
    const Ge = d(() => Ve(P, "$getMediaImageUrl", c)(u().mediaImageGID) || Il);
    tt(() => {
      var De;
      C() && Object.keys(e(W)).length > 0 && (e(Y), e(B), e(q), e(me), (De = i().collectionBreaks) == null || De.requireItemSelectionEnabled, Xt(() => {
        (function() {
          var Re, Ke;
          const Xe = Object.values(e(W)).map((bt) => ({ variant: bt.variant, product: bt.product, quantity: 1 })), nt = e(fe) + e(Y).reduce((bt, Pt) => bt + Pt.discountedPrice, 0), wt = e(B).reduce((bt, Pt) => Pt.showPrice ? bt + Pt.fullPrice : bt, 0) + e(q).reduce((bt, Pt) => bt + Pt.fullPrice * Pt.quantity, 0), mt = e(Se) + e(Y).reduce((bt, Pt) => bt + Pt.fullPrice, 0) + wt, Rt = Le(e(ge), void 0), ve = g().sellingPlans.map((bt) => ({ sellingPlanId: bt.id, discountedPrice: Le(e(ge), bt) })), Ze = (Ke = (Re = i().collectionBreaks) == null ? void 0 : Re.requireItemSelectionEnabled) != null && Ke, ot = Xe.length, ct = !Ze || ot >= e(X), It = Ze ? Math.max(0, e(X) - ot) : 0;
          U()({ variants: Xe, personalisationItems: e(be), freeGifts: [...e(B), ...e(q)], upsells: e(Y), dealBarSellingPlan: e(ce), pricing: { discountedPrice: nt, fullPrice: mt, giftValue: wt, discountedPricePerItem: e(K), fullPricePerItem: e(pe), discountedPriceWithoutSellingPlan: Rt, discountedPricesForSellingPlans: ve }, validation: { requiresItemSelection: Ze, allItemsSelected: ct, missingItemsCount: It } });
        })();
      }));
    });
    const Qe = d(() => u().showAsSoldOutEnabled && u().showAsSoldOut ? zl(u().showAsSoldOut) : ""), Ce = d(() => [B0(i()), e(Qe)].filter(Boolean).join(";"));
    function Pe(De, Re) {
      De === 0 && R()({ variantId: Re.variant.id }), Bs(De, Re), ue.set(!1), e(oe) && Q.delete(De);
    }
    function Ee(De) {
      (function(Re) {
        Zo.update((Ke) => {
          const { [Re]: Xe, ...nt } = Ke;
          return nt;
        });
      })(De), e(oe) && Q.add(De);
    }
    var qe = { get dealBlock() {
      return i();
    }, set dealBlock(De) {
      i(De), _();
    }, get dealBar() {
      return u();
    }, set dealBar(De) {
      u(De), _();
    }, get product() {
      return g();
    }, set product(De) {
      g(De), _();
    }, get collectionBreaksProducts() {
      return v();
    }, set collectionBreaksProducts(De = []) {
      v(De), _();
    }, get otherProducts() {
      return p();
    }, set otherProducts(De = []) {
      p(De), _();
    }, get selectedDealBarIndex() {
      return f();
    }, set selectedDealBarIndex(De = null) {
      f(De), _();
    }, get complementaryProducts() {
      return b();
    }, set complementaryProducts(De = []) {
      b(De), _();
    }, get customQuantity() {
      return y();
    }, set customQuantity(De = void 0) {
      y(De), _();
    }, get currentVariantId() {
      return m();
    }, set currentVariantId(De = void 0) {
      m(De), _();
    }, get componentId() {
      return z();
    }, set componentId(De) {
      z(De), _();
    }, get selected() {
      return C();
    }, set selected(De = !1) {
      C(De), _();
    }, get globalSellingPlan() {
      return A();
    }, set globalSellingPlan(De = void 0) {
      A(De), _();
    }, get onDealBarSelect() {
      return O();
    }, set onDealBarSelect(De) {
      O(De), _();
    }, get onDealBarDeselect() {
      return V();
    }, set onDealBarDeselect(De) {
      V(De), _();
    }, get onVariantSelect() {
      return R();
    }, set onVariantSelect(De) {
      R(De), _();
    }, get onVariantsChange() {
      return U();
    }, set onVariantsChange(De) {
      U(De), _();
    }, get onPersonalisationsChange() {
      return G();
    }, set onPersonalisationsChange(De) {
      G(De), _();
    }, get personalisationInitialValues() {
      return H();
    }, set personalisationInitialValues(De = []) {
      H(De), _();
    }, get onProgressiveGiftsChange() {
      return I();
    }, set onProgressiveGiftsChange(De) {
      I(De), _();
    } }, et = X0();
    let yt;
    var rt = w(et);
    ka(rt), rt.__change = [q0, O, u, he];
    var Vt = E(rt, 2);
    bi(Vt, { get for() {
      return e(ie);
    }, get soldOut() {
      return u().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(Fe);
    }, children: (De, Re) => {
      var Ke = K0(), Xe = _e(Ke);
      Gt(Xe, 17, () => e(Be), (Ye) => Ye.id, (Ye, ht) => {
        ya(Ye, { get badge() {
          return e(ht);
        }, get blockLayout() {
          return i().blockLayout;
        } });
      });
      var nt = E(Xe, 2), wt = w(nt);
      Yt(wt, { element: "div", class: "kaching-bundles__bar-main", onclick: ze, children: (Ye, ht) => {
        var dt = Z0(), zt = _e(dt), Ot = (At) => {
          var an = G0();
          ke(() => Ie(an, "src", e(Ge))), h(At, an);
        }, ft = (At) => {
          h(At, F0());
        };
        F(zt, (At) => {
          u().mediaImageGID ? At(Ot) : At(ft, !1);
        });
        var en = E(zt, 2), xn = w(en), vt = w(xn), Ht = w(vt);
        lt(Ht, () => e($e), (At) => {
          var an = O0();
          Ne(w(an), () => e($e)), x(an), h(At, an);
        });
        var tn = E(Ht, 2), Dn = (At) => {
          var an = Te();
          lt(_e(an), () => e(Ae), (nn) => {
            var gn = L0();
            Ne(w(gn), () => e(Ae)), x(gn), h(nn, gn);
          }), h(At, an);
        };
        F(tn, (At) => {
          e(Ae) && At(Dn);
        }), x(vt);
        var ir = E(vt, 2), Nt = (At) => {
          var an = Te();
          lt(_e(an), () => e(Me), (nn) => {
            var gn = E0();
            Ne(w(gn), () => e(Me)), x(gn), h(nn, gn);
          }), h(At, an);
        };
        F(ir, (At) => {
          e(Me) && At(Nt);
        }), x(xn);
        var lr = E(xn, 2), On = w(lr), Un = (At) => {
          var an = W0(), nn = _e(an), gn = w(nn);
          lt(gn, () => e(K), (ln) => {
            oa(ln, { get amount() {
              return e(K);
            }, get showPricesPerItem() {
              return i().showPricesPerItem;
            }, get unitLabel() {
              return i().unitLabel;
            } });
          });
          var Pn = E(gn, 2), Sn = (ln) => {
            var An = Te();
            lt(_e(An), () => e(Z), (Mr) => {
              var $t = j0();
              Ne(w($t), () => s()(e(Z))), x($t), ke((sn) => Ie($t, "data-a11y-label", sn), [() => o()("system.original_price")]), h(Mr, $t);
            }), h(ln, An);
          };
          F(Pn, (ln) => {
            e(we) && ln(Sn);
          }), x(nn);
          var In = E(nn, 2), Hn = (ln) => {
            var An = Q0(), Mr = w(An);
            lt(Mr, () => e(fe), (wn) => {
              var on = R0();
              Ne(w(on), () => s()(e(fe))), x(on), ke((zr) => Ie(on, "data-a11y-label", zr), [() => o()("system.price")]), h(wn, on);
            });
            var $t = E(Mr, 2), sn = (wn) => {
              var on = Te();
              lt(_e(on), () => e(L), (zr) => {
                var Zn = N0();
                Ne(w(Zn), () => s()(e(L))), x(Zn), ke((Wr) => Ie(Zn, "data-a11y-label", Wr), [() => o()("system.original_price")]), h(zr, Zn);
              }), h(wn, on);
            };
            F($t, (wn) => {
              e(we) && wn(sn);
            }), x(An), h(ln, An);
          };
          F(In, (ln) => {
            e(X) > 1 && ln(Hn);
          }), h(At, an);
        }, Ln = (At) => {
          var an = H0(), nn = _e(an);
          lt(nn, () => e(fe), (Sn) => {
            {
              let In = d(() => i().showPricesPerItem ? e(K) : e(fe));
              oa(Sn, { get amount() {
                return e(In);
              }, get showPricesPerItem() {
                return i().showPricesPerItem;
              }, get unitLabel() {
                return i().unitLabel;
              } });
            }
          });
          var gn = E(nn, 2), Pn = (Sn) => {
            var In = Te();
            lt(_e(In), () => i().showPricesPerItem ? e(Z) : e(L), (Hn) => {
              var ln = U0();
              Ne(w(ln), () => s()(i().showPricesPerItem ? e(Z) : e(L))), x(ln), ke((An) => Ie(ln, "data-a11y-label", An), [() => o()("system.original_price")]), h(Hn, ln);
            }), h(Sn, In);
          };
          F(gn, (Sn) => {
            e(we) && Sn(Pn);
          }), h(At, an);
        };
        F(On, (At) => {
          i().showBothPrices ? At(Un) : At(Ln, !1);
        }), x(lr), x(en), h(Ye, dt);
      }, $$slots: { default: !0 } });
      var mt = E(wt, 2), Rt = (Ye) => {
        Na(Ye, { get highlights() {
          return u().highlights;
        }, get isSelected() {
          return C();
        }, get replaceLiquid() {
          return e(xe);
        } });
      };
      F(mt, (Ye) => {
        u().highlights && Ye(Rt);
      });
      var ve = E(mt, 2), Ze = (Ye) => {
        var ht = J0(), dt = w(ht);
        {
          let zt = d(() => e(ce) || e(J)[0]);
          Ra(dt, { get sellingPlans() {
            return e(J);
          }, get selectedSellingPlan() {
            return e(zt);
          }, onChange: (Ot) => {
            ee(N, Ot, !0);
          } });
        }
        x(ht), h(Ye, ht);
      };
      F(ve, (Ye) => {
        C() && e(ae) && !u().sellingPlanGid && e(J).length > 1 && Ye(Ze);
      });
      var ot = E(ve, 2), ct = (Ye) => {
        var ht = Y0();
        Gt(ht, 21, () => ({ length: e(X) }), jr, (dt, zt, Ot) => {
          var ft = Te(), en = _e(ft), xn = (Ht) => {
            {
              let tn = d(() => e(W)[Ot] || null);
              Ho(Ht, { get dealBlock() {
                return i();
              }, get dealBar() {
                return u();
              }, get mainProduct() {
                return g();
              }, products: [], get selectedProductVariant() {
                return e(tn);
              }, onChange: (Dn) => Pe(Ot, Dn) });
            }
          }, vt = (Ht) => {
            {
              let tn = d(() => e(W)[Ot] || null);
              Ho(Ht, { get dealBlock() {
                return i();
              }, get dealBar() {
                return u();
              }, get products() {
                return v();
              }, get selectedProductVariant() {
                return e(tn);
              }, onChange: (Dn) => Pe(Ot, Dn), onRemove: () => Ee(Ot) });
            }
          };
          F(en, (Ht) => {
            Ot === 0 ? Ht(xn) : Ht(vt, !1);
          }), h(dt, ft);
        }), x(ht), h(Ye, ht);
      };
      F(ot, (Ye) => {
        C() && Ye(ct);
      });
      var It = E(ot, 2), bt = (Ye) => {
        {
          let ht = d(() => he(u()));
          $l(Ye, { get value() {
            return e(te);
          }, get min() {
            return e(ht);
          }, onChange: (dt) => ee(te, dt, !0) });
        }
      };
      F(It, (Ye) => {
        C() && u().dealBarType === gt.QuantityBreak && u().quantitySelector && Ye(bt);
      });
      var Pt = E(It, 2), St = (Ye) => {
        fi(Ye, { get product() {
          return g();
        }, get productPersonalisation() {
          return u().productPersonalisation;
        }, get personalisationItems() {
          return e(be);
        }, get quantity() {
          return e(be).length;
        }, get addPersonalisationModal() {
          return i().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return G();
        }, get initialValues() {
          return H();
        } });
      };
      F(Pt, (Ye) => {
        C() && u().productPersonalisation && (i().blockLayout === "vertical" || i().blockLayout === "plain") && Ye(St);
      }), x(nt);
      var Bt = E(nt, 2);
      {
        let Ye = d(() => u().upsells || []);
        Ei(Bt, { get dealBlock() {
          return i();
        }, get dealBarId() {
          return u().id;
        }, get upsells() {
          return e(Ye);
        }, get otherProducts() {
          return p();
        }, get complementaryProducts() {
          return b();
        }, get dealBarSelected() {
          return C();
        }, get dealSellingPlan() {
          return e(me);
        }, onChange: (ht) => {
          ee(Y, ht, !0);
        } });
      }
      var Mt = E(Bt, 2);
      Ni(Mt, { get selectedDealBarIndex() {
        return f();
      }, get onChange() {
        return I();
      }, get dealBlock() {
        return i();
      }, get dealBar() {
        return u();
      }, get otherProducts() {
        return p();
      }, get selected() {
        return C();
      }, get sellingPlan() {
        return e(me);
      }, get progressiveGifts() {
        return i().progressiveGifts;
      } });
      var rn = E(Mt, 2);
      {
        let Ye = d(() => u().freeGifts || []);
        Li(rn, { get dealBlock() {
          return i();
        }, get freeGifts() {
          return e(Ye);
        }, get freeGiftsSummary() {
          return u().freeGiftsSummary;
        }, get otherProducts() {
          return p();
        }, get dealBarSelected() {
          return C();
        }, get sellingPlan() {
          return e(me);
        }, onChange: (ht) => {
          ee(B, ht, !0);
        } });
      }
      var Kt = E(rn, 2);
      {
        let Ye = d(() => u().multipleGiftsSelectors || []);
        Ri(Kt, { get dealBlock() {
          return i();
        }, get multipleGiftsSelectors() {
          return e(Ye);
        }, get sellingPlan() {
          return e(me);
        }, get otherProducts() {
          return p();
        }, get sets() {
          return e(ne);
        }, onChange: (ht) => {
          ee(q, ht, !0);
        } });
      }
      h(De, Ke);
    }, $$slots: { default: !0 } });
    var Et = E(Vt, 2), bn = (De) => {
      ji(De, { get showAsSoldOut() {
        return u().showAsSoldOut;
      }, get replaceLiquid() {
        return e(xe);
      } });
    };
    F(Et, (De) => {
      u().showAsSoldOutEnabled && u().showAsSoldOut && De(bn);
    }), x(et), ke((De) => {
      var Re;
      yt = Wt(et, 1, "kaching-bundles__bar", null, yt, De), Ie(et, "data-deal-bar-id", u().id), Ft(et, e(Ce)), Ie(rt, "name", `kaching-bundles-deal-${(Re = z()) != null ? Re : ""}`), oi(rt, u().id), Ie(rt, "id", e(ie)), _l(rt, C()), rt.disabled = u().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": C() })]), h(n, et);
    var un = it(qe);
    return l(), un;
  }
  Fn(["change"]), Je(mg, { dealBlock: {}, dealBar: {}, product: {}, collectionBreaksProducts: {}, otherProducts: {}, selectedDealBarIndex: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {}, onProgressiveGiftsChange: {} }, [], [], !0);
  var Jo = {};
  (function n(t, r, a, s) {
    var o = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), c = typeof Path2D == "function" && typeof DOMMatrix == "function";
    function l() {
    }
    function i(S) {
      var B = r.exports.Promise, q = B !== void 0 ? B : t.Promise;
      return typeof q == "function" ? new q(S) : (S(l, l), null);
    }
    var u, g, v, p, f, b, y = /* @__PURE__ */ (function(S, B) {
      return { transform: function(q) {
        if (S) return q;
        if (B.has(q)) return B.get(q);
        var Y = new OffscreenCanvas(q.width, q.height);
        return Y.getContext("2d").drawImage(q, 0, 0), B.set(q, Y), Y;
      }, clear: function() {
        B.clear();
      } };
    })((function() {
      if (!t.OffscreenCanvas) return !1;
      try {
        var S = new OffscreenCanvas(1, 1), B = S.getContext("2d");
        B.fillRect(0, 0, 1, 1);
        var q = S.transferToImageBitmap();
        B.createPattern(q, "no-repeat");
      } catch {
        return !1;
      }
      return !0;
    })(), /* @__PURE__ */ new Map()), m = (v = Math.floor(1e3 / 60), p = {}, f = 0, typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (u = function(S) {
      var B = Math.random();
      return p[B] = requestAnimationFrame(function q(Y) {
        f === Y || f + v - 1 < Y ? (f = Y, delete p[B], S()) : p[B] = requestAnimationFrame(q);
      }), B;
    }, g = function(S) {
      p[S] && cancelAnimationFrame(p[S]);
    }) : (u = function(S) {
      return setTimeout(S, v);
    }, g = function(S) {
      return clearTimeout(S);
    }), { frame: u, cancel: g }), z = /* @__PURE__ */ (function() {
      var S, B, q = {};
      return function() {
        if (S) return S;
        if (!a && o) {
          var Y = ["var CONFETTI, SIZE = {}, module = {};", "(" + n.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
          try {
            S = new Worker(URL.createObjectURL(new Blob([Y])));
          } catch (Q) {
            return typeof console != "undefined" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", Q), null;
          }
          (function(Q) {
            function oe(j, D) {
              Q.postMessage({ options: j || {}, callback: D });
            }
            Q.init = function(j) {
              var D = j.transferControlToOffscreen();
              Q.postMessage({ canvas: D }, [D]);
            }, Q.fire = function(j, D, se) {
              if (B) return oe(j, null), B;
              var te = Math.random().toString(36).slice(2);
              return B = i(function(X) {
                function ne(he) {
                  he.data.callback === te && (delete q[te], Q.removeEventListener("message", ne), B = null, y.clear(), se(), X());
                }
                Q.addEventListener("message", ne), oe(j, te), q[te] = ne.bind(null, { data: { callback: te } });
              });
            }, Q.reset = function() {
              for (var j in Q.postMessage({ reset: !0 }), q) q[j](), delete q[j];
            };
          })(S);
        }
        return S;
      };
    })(), C = { particleCount: 50, angle: 90, spread: 45, startVelocity: 45, decay: 0.9, gravity: 1, drift: 0, ticks: 200, x: 0.5, y: 0.5, shapes: ["square", "circle"], zIndex: 100, colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"], disableForReducedMotion: !1, scalar: 1 };
    function A(S, B, q) {
      return (function(Y, Q) {
        return Q ? Q(Y) : Y;
      })(S && S[B] != null ? S[B] : C[B], q);
    }
    function O(S) {
      return S < 0 ? 0 : Math.floor(S);
    }
    function V(S, B) {
      return Math.floor(Math.random() * (B - S)) + S;
    }
    function R(S) {
      return parseInt(S, 16);
    }
    function U(S) {
      return S.map(G);
    }
    function G(S) {
      var B = String(S).replace(/[^0-9a-f]/gi, "");
      return B.length < 6 && (B = B[0] + B[0] + B[1] + B[1] + B[2] + B[2]), { r: R(B.substring(0, 2)), g: R(B.substring(2, 4)), b: R(B.substring(4, 6)) };
    }
    function H(S) {
      S.width = document.documentElement.clientWidth, S.height = document.documentElement.clientHeight;
    }
    function I(S) {
      var B = S.getBoundingClientRect();
      S.width = B.width, S.height = B.height;
    }
    function T(S) {
      var B = S.angle * (Math.PI / 180), q = S.spread * (Math.PI / 180);
      return { x: S.x, y: S.y, wobble: 10 * Math.random(), wobbleSpeed: Math.min(0.11, 0.1 * Math.random() + 0.05), velocity: 0.5 * S.startVelocity + Math.random() * S.startVelocity, angle2D: -B + (0.5 * q - Math.random() * q), tiltAngle: (0.5 * Math.random() + 0.25) * Math.PI, color: S.color, shape: S.shape, tick: 0, totalTicks: S.ticks, decay: S.decay, drift: S.drift, random: Math.random() + 2, tiltSin: 0, tiltCos: 0, wobbleX: 0, wobbleY: 0, gravity: 3 * S.gravity, ovalScalar: 0.6, scalar: S.scalar, flat: S.flat };
    }
    function ue(S, B) {
      B.x += Math.cos(B.angle2D) * B.velocity + B.drift, B.y += Math.sin(B.angle2D) * B.velocity + B.gravity, B.velocity *= B.decay, B.flat ? (B.wobble = 0, B.wobbleX = B.x + 10 * B.scalar, B.wobbleY = B.y + 10 * B.scalar, B.tiltSin = 0, B.tiltCos = 0, B.random = 1) : (B.wobble += B.wobbleSpeed, B.wobbleX = B.x + 10 * B.scalar * Math.cos(B.wobble), B.wobbleY = B.y + 10 * B.scalar * Math.sin(B.wobble), B.tiltAngle += 0.1, B.tiltSin = Math.sin(B.tiltAngle), B.tiltCos = Math.cos(B.tiltAngle), B.random = Math.random() + 2);
      var q = B.tick++ / B.totalTicks, Y = B.x + B.random * B.tiltCos, Q = B.y + B.random * B.tiltSin, oe = B.wobbleX + B.random * B.tiltCos, j = B.wobbleY + B.random * B.tiltSin;
      if (S.fillStyle = "rgba(" + B.color.r + ", " + B.color.g + ", " + B.color.b + ", " + (1 - q) + ")", S.beginPath(), c && B.shape.type === "path" && typeof B.shape.path == "string" && Array.isArray(B.shape.matrix)) S.fill((function(me, be, Se, L, pe, Z, fe) {
        var xe = new Path2D(me), $e = new Path2D();
        $e.addPath(xe, new DOMMatrix(be));
        var Me = new Path2D();
        return Me.addPath($e, new DOMMatrix([Math.cos(fe) * pe, Math.sin(fe) * pe, -Math.sin(fe) * Z, Math.cos(fe) * Z, Se, L])), Me;
      })(B.shape.path, B.shape.matrix, B.x, B.y, 0.1 * Math.abs(oe - Y), 0.1 * Math.abs(j - Q), Math.PI / 10 * B.wobble));
      else if (B.shape.type === "bitmap") {
        var D = Math.PI / 10 * B.wobble, se = 0.1 * Math.abs(oe - Y), te = 0.1 * Math.abs(j - Q), X = B.shape.bitmap.width * B.scalar, ne = B.shape.bitmap.height * B.scalar, he = new DOMMatrix([Math.cos(D) * se, Math.sin(D) * se, -Math.sin(D) * te, Math.cos(D) * te, B.x, B.y]);
        he.multiplySelf(new DOMMatrix(B.shape.matrix));
        var M = S.createPattern(y.transform(B.shape.bitmap), "no-repeat");
        M.setTransform(he), S.globalAlpha = 1 - q, S.fillStyle = M, S.fillRect(B.x - X / 2, B.y - ne / 2, X, ne), S.globalAlpha = 1;
      } else if (B.shape === "circle") S.ellipse ? S.ellipse(B.x, B.y, Math.abs(oe - Y) * B.ovalScalar, Math.abs(j - Q) * B.ovalScalar, Math.PI / 10 * B.wobble, 0, 2 * Math.PI) : (function(me, be, Se, L, pe, Z, fe, xe, $e) {
        me.save(), me.translate(be, Se), me.rotate(Z), me.scale(L, pe), me.arc(0, 0, 1, fe, xe, $e), me.restore();
      })(S, B.x, B.y, Math.abs(oe - Y) * B.ovalScalar, Math.abs(j - Q) * B.ovalScalar, Math.PI / 10 * B.wobble, 0, 2 * Math.PI);
      else if (B.shape === "star") for (var W = Math.PI / 2 * 3, de = 4 * B.scalar, ge = 8 * B.scalar, N = B.x, J = B.y, ae = 5, ce = Math.PI / ae; ae--; ) N = B.x + Math.cos(W) * ge, J = B.y + Math.sin(W) * ge, S.lineTo(N, J), W += ce, N = B.x + Math.cos(W) * de, J = B.y + Math.sin(W) * de, S.lineTo(N, J), W += ce;
      else S.moveTo(Math.floor(B.x), Math.floor(B.y)), S.lineTo(Math.floor(B.wobbleX), Math.floor(Q)), S.lineTo(Math.floor(oe), Math.floor(j)), S.lineTo(Math.floor(Y), Math.floor(B.wobbleY));
      return S.closePath(), S.fill(), B.tick < B.totalTicks;
    }
    function re(S, B) {
      var q, Y = !S, Q = !!A(B || {}, "resize"), oe = !1, j = A(B, "disableForReducedMotion", Boolean), D = o && A(B || {}, "useWorker") ? z() : null, se = Y ? H : I, te = !(!S || !D) && !!S.__confetti_initialized, X = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches;
      function ne(M, W, de) {
        for (var ge = A(M, "particleCount", O), N = A(M, "angle", Number), J = A(M, "spread", Number), ae = A(M, "startVelocity", Number), ce = A(M, "decay", Number), me = A(M, "gravity", Number), be = A(M, "drift", Number), Se = A(M, "colors", U), L = A(M, "ticks", Number), pe = A(M, "shapes"), Z = A(M, "scalar"), fe = !!A(M, "flat"), xe = (function(Fe) {
          var Le = A(Fe, "origin", Object);
          return Le.x = A(Le, "x", Number), Le.y = A(Le, "y", Number), Le;
        })(M), $e = ge, Me = [], Ae = S.width * xe.x, Be = S.height * xe.y; $e--; ) Me.push(T({ x: Ae, y: Be, angle: N, spread: J, startVelocity: ae, color: Se[$e % Se.length], shape: pe[V(0, pe.length)], ticks: L, decay: ce, gravity: me, drift: be, scalar: Z, flat: fe }));
        return q ? q.addFettis(Me) : (q = (function(Fe, Le, K, we, ie) {
          var ze, Ge, Qe = Le.slice(), Ce = Fe.getContext("2d"), Pe = i(function(Ee) {
            function qe() {
              ze = Ge = null, Ce.clearRect(0, 0, we.width, we.height), y.clear(), ie(), Ee();
            }
            ze = m.frame(function et() {
              !a || we.width === s.width && we.height === s.height || (we.width = Fe.width = s.width, we.height = Fe.height = s.height), we.width || we.height || (K(Fe), we.width = Fe.width, we.height = Fe.height), Ce.clearRect(0, 0, we.width, we.height), (Qe = Qe.filter(function(yt) {
                return ue(Ce, yt);
              })).length ? ze = m.frame(et) : qe();
            }), Ge = qe;
          });
          return { addFettis: function(Ee) {
            return Qe = Qe.concat(Ee), Pe;
          }, canvas: Fe, promise: Pe, reset: function() {
            ze && m.cancel(ze), Ge && Ge();
          } };
        })(S, Me, se, W, de), q.promise);
      }
      function he(M) {
        var W = j || A(M, "disableForReducedMotion", Boolean), de = A(M, "zIndex", Number);
        if (W && X) return i(function(ae) {
          ae();
        });
        Y && q ? S = q.canvas : Y && !S && (S = (function(ae) {
          var ce = document.createElement("canvas");
          return ce.style.position = "fixed", ce.style.top = "0px", ce.style.left = "0px", ce.style.pointerEvents = "none", ce.style.zIndex = ae, ce;
        })(de), document.body.appendChild(S)), Q && !te && se(S);
        var ge = { width: S.width, height: S.height };
        function N() {
          if (D) {
            var ae = { getBoundingClientRect: function() {
              if (!Y) return S.getBoundingClientRect();
            } };
            return se(ae), void D.postMessage({ resize: { width: ae.width, height: ae.height } });
          }
          ge.width = ge.height = null;
        }
        function J() {
          q = null, Q && (oe = !1, t.removeEventListener("resize", N)), Y && S && (document.body.contains(S) && document.body.removeChild(S), S = null, te = !1);
        }
        return D && !te && D.init(S), te = !0, D && (S.__confetti_initialized = !0), Q && !oe && (oe = !0, t.addEventListener("resize", N, !1)), D ? D.fire(M, ge, J) : ne(M, ge, J);
      }
      return he.reset = function() {
        D && D.reset(), q && q.reset();
      }, he;
    }
    function P() {
      return b || (b = re(null, { useWorker: !0, resize: !0 })), b;
    }
    r.exports = function() {
      return P().apply(this, arguments);
    }, r.exports.reset = function() {
      P().reset();
    }, r.exports.create = re, r.exports.shapeFromPath = function(S) {
      if (!c) throw new Error("path confetti are not supported in this browser");
      var B, q;
      typeof S == "string" ? B = S : (B = S.path, q = S.matrix);
      var Y = new Path2D(B), Q = document.createElement("canvas").getContext("2d");
      if (!q) {
        for (var oe, j, D = 1e3, se = D, te = D, X = 0, ne = 0, he = 0; he < D; he += 2) for (var M = 0; M < D; M += 2) Q.isPointInPath(Y, he, M, "nonzero") && (se = Math.min(se, he), te = Math.min(te, M), X = Math.max(X, he), ne = Math.max(ne, M));
        oe = X - se, j = ne - te;
        var W = Math.min(10 / oe, 10 / j);
        q = [W, 0, 0, W, -Math.round(oe / 2 + se) * W, -Math.round(j / 2 + te) * W];
      }
      return { type: "path", path: B, matrix: q };
    }, r.exports.shapeFromText = function(S) {
      var B, q = 1, Y = "#000000", Q = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof S == "string" ? B = S : (B = S.text, q = "scalar" in S ? S.scalar : q, Q = "fontFamily" in S ? S.fontFamily : Q, Y = "color" in S ? S.color : Y);
      var oe = 10 * q, j = oe + "px " + Q, D = new OffscreenCanvas(oe, oe), se = D.getContext("2d");
      se.font = j;
      var te = se.measureText(B), X = Math.ceil(te.actualBoundingBoxRight + te.actualBoundingBoxLeft), ne = Math.ceil(te.actualBoundingBoxAscent + te.actualBoundingBoxDescent), he = te.actualBoundingBoxLeft + 2, M = te.actualBoundingBoxAscent + 2;
      X += 4, ne += 4, (se = (D = new OffscreenCanvas(X, ne)).getContext("2d")).font = j, se.fillStyle = Y, se.fillText(B, he, M);
      var W = 1 / q;
      return { type: "bitmap", bitmap: D.transferToImageBitmap(), matrix: [W, 0, 0, W, -X * W / 2, -ne * W / 2] };
    };
  })(/* @__PURE__ */ (function() {
    return typeof window != "undefined" ? window : typeof self != "undefined" ? self : this || {};
  })(), Jo, !1);
  const ek = Jo.exports;
  Jo.exports.create;
  var tk = Tn('<svg viewBox="0 0 361 163" fill="none" aria-hidden="true"><path class="kaching-bundles__scratch-off-hint-path" d="M22 113.859C23.9107 84.035 22.7293 20.8901 54.8299 45.9835C94.9555 77.3502 81.1193 164.847 101.209 103.575C108.48 64.2518 127.202 -4.91471 143.923 33.0046C164.824 80.4037 155.535 144.223 184.564 113.859C213.593 83.495 160.179 15.685 201.982 45.9835C243.784 76.2821 263.524 183.445 278.619 122.651C293.714 61.8562 268.168 7.24414 303.004 33.0046C337.839 58.765 330.872 64.2534 339 92.7687" stroke="white" stroke-opacity="0.7" stroke-width="44" stroke-linecap="round"></path></svg>');
  function xg(n, t) {
    at(t, !0);
    let r = k(t, "hidden", 7);
    var a = { get hidden() {
      return r();
    }, set hidden(c) {
      r(c), _();
    } }, s = tk();
    let o;
    return ke((c) => o = Wt(s, 0, "kaching-bundles__scratch-off-hint", null, o, c), [() => ({ "kaching-bundles__scratch-off-hint--hidden": r() })]), h(n, s), it(a);
  }
  function nk(n, t) {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), t());
  }
  Je(xg, { hidden: {} }, [], [], !0);
  var rk = $('<canvas role="button" tabindex="0"></canvas> <!> <div aria-hidden="true"> </div>', 1), ak = $("<div><!> <!></div>");
  function yg(n, t) {
    at(t, !0);
    const r = () => Ve(u, "$config", a), [a, s] = kt(), o = 317 / 361;
    let c = k(t, "settings", 7), l = k(t, "onReveal", 7), i = k(t, "children", 7);
    const u = yn(), g = Tt();
    let v = d(() => Ve(g, "$translate", a)(c().title)), p = Oe(ut(r().preview && !r().previewScratchOff)), f = Oe(!1), b = Oe(void 0), y = Oe(!1), m = d(() => fn({ "scratch-off-title-color": We(c().titleColor), "scratch-off-title-size": `${c().titleSize}px` })), z = !1, C = null, A = null, O = 22, V = null, R = Oe(!1), U = Oe(!1);
    const G = new Image();
    G.src = "https://bundles-assets.kachingappz.app/widget/scratch-off-background-v2.webp", V = G, G.complete ? ee(R, !0) : (G.addEventListener("load", () => {
      ee(R, !0);
    }, { once: !0 }), G.addEventListener("error", () => {
      ee(U, !0);
    }, { once: !0 }));
    let H = d(() => e(R) || e(U));
    function I() {
      if (!e(b)) return;
      const X = e(b).getBoundingClientRect();
      if (X.width === 0 || X.height === 0) return;
      const ne = window.devicePixelRatio || 1;
      e(b).width = Math.floor(X.width * ne), e(b).height = Math.floor(X.height * ne);
      const he = e(b).getContext("2d");
      if (!he) return;
      he.scale(ne, ne), O = 44 * Math.min((X.width - 10) / 361, (X.height - 10) / 163, o) / 2, he.fillStyle = We(c().backgroundColor), he.fillRect(0, 0, X.width, X.height), e(R) && V && (he.globalAlpha = 0.6, he.drawImage(V, 0, 0, X.width, X.height), he.globalAlpha = 1), he.globalCompositeOperation = "destination-out";
    }
    function T(X) {
      if (!e(b)) return null;
      const ne = e(b).getBoundingClientRect();
      return { x: X.clientX - ne.left, y: X.clientY - ne.top };
    }
    function ue(X) {
      var ne;
      e(p) || e(f) || (z = !0, ee(y, !0), A === null && (A = setTimeout(B, 1500)), (ne = e(b)) == null || ne.setPointerCapture(X.pointerId), C = T(X), (function(he) {
        if (!e(b) || !he) return;
        const M = e(b).getContext("2d");
        M && (M.beginPath(), M.arc(he.x, he.y, O, 0, 2 * Math.PI), M.fill());
      })(C));
    }
    function re(X) {
      if (!z || e(p) || e(f)) return;
      const ne = T(X);
      ne && C && ((function(he, M) {
        if (!e(b)) return;
        const W = e(b).getContext("2d");
        if (!W) return;
        const de = M.x - he.x, ge = M.y - he.y, N = Math.hypot(de, ge), J = Math.max(1, Math.ceil(N / 4));
        for (let ae = 0; ae <= J; ae++) {
          const ce = ae / J;
          W.beginPath(), W.arc(he.x + de * ce, he.y + ge * ce, O, 0, 2 * Math.PI), W.fill();
        }
      })(C, ne), C = ne);
    }
    function P(X) {
      var ne;
      z = !1, (ne = e(b)) == null || ne.releasePointerCapture(X.pointerId), C = null, B();
    }
    function S() {
      A !== null && (clearTimeout(A), A = null);
    }
    function B() {
      var X;
      e(p) || e(f) || (S(), ee(f, !0), (function() {
        if (!e(b)) return;
        const ne = e(b).getBoundingClientRect();
        ek({ particleCount: 120, spread: 70, startVelocity: 45, origin: { x: (ne.left + ne.width / 2) / window.innerWidth, y: (ne.top + ne.height / 2) / window.innerHeight } });
      })(), (X = l()) == null || X(), setTimeout(() => {
        ee(p, !0), ee(f, !1);
      }, 300));
    }
    tt(() => {
      if (e(H)) return;
      const X = setTimeout(() => {
        ee(U, !0);
      }, 5e3);
      return () => clearTimeout(X);
    }), tt(() => () => S()), tt(() => {
      if (e(p) || e(f) || !e(b)) return;
      I();
      const X = new ResizeObserver(() => {
        e(p) || e(f) || I();
      });
      return X.observe(e(b)), () => X.disconnect();
    });
    let q = JSON.stringify(c());
    tt(() => {
      const X = JSON.stringify(c());
      X !== q && (q = X, r().preview && r().previewScratchOff && (ee(p, !1), ee(f, !1), ee(y, !1), S()));
    });
    var Y = { get settings() {
      return c();
    }, set settings(X) {
      c(X), _();
    }, get onReveal() {
      return l();
    }, set onReveal(X) {
      l(X), _();
    }, get children() {
      return i();
    }, set children(X) {
      i(X), _();
    } }, Q = ak();
    let oe;
    var j = w(Q);
    rs(j, i);
    var D = E(j, 2), se = (X) => {
      var ne = rk(), he = _e(ne);
      let M;
      he.__pointerdown = ue, he.__pointermove = re, he.__pointerup = P, he.__keydown = [nk, B], Ti(he, (J) => ee(b, J), () => e(b));
      var W = E(he, 2);
      {
        let J = d(() => e(y) || e(f));
        xg(W, { get hidden() {
          return e(J);
        } });
      }
      var de = E(W, 2);
      let ge;
      var N = w(de, !0);
      x(de), ke((J, ae) => {
        M = Wt(he, 1, "kaching-bundles__scratch-off-canvas", null, M, J), Ie(he, "aria-label", e(v)), ge = Wt(de, 1, "kaching-bundles__scratch-off-title", null, ge, ae), pt(N, e(v));
      }, [() => ({ "kaching-bundles__scratch-off-canvas--revealing": e(f) }), () => ({ "kaching-bundles__scratch-off-title--hidden": e(y) || e(f) })]), ns("pointercancel", he, P), h(X, ne);
    };
    F(D, (X) => {
      e(p) || X(se);
    }), x(Q), ke((X) => {
      oe = Wt(Q, 1, "kaching-bundles__scratch-off", null, oe, X), Ft(Q, e(m));
    }, [() => ({ "kaching-bundles__scratch-off--unscratched": !e(p), "kaching-bundles__scratch-off--revealing": e(f), "kaching-bundles__scratch-off--loading": !e(p) && !e(H) })]), h(n, Q);
    var te = it(Y);
    return s(), te;
  }
  Fn(["pointerdown", "pointermove", "pointerup", "keydown"]), Je(yg, { settings: {}, onReveal: {}, children: {} }, [], [], !0);
  var ik = $('<div class="kaching-bundles__bar-price"><!></div>'), lk = $('<div class="kaching-bundles__bar-full-price"><!></div>'), sk = $('<div class="kaching-bundles__bar-pricing"><!> <!></div>');
  function Cs(n, t) {
    at(t, !0);
    const r = () => Ve(i, "$translate", s), a = () => Ve(u, "$formatPrice", s), [s, o] = kt(), c = k(t, "discountedPrice", 7), l = k(t, "fullPrice", 7), i = Tt(), u = vn();
    var g = { get discountedPrice() {
      return c();
    }, set discountedPrice(m) {
      c(m), _();
    }, get fullPrice() {
      return l();
    }, set fullPrice(m) {
      l(m), _();
    } }, v = sk(), p = w(v);
    lt(p, c, (m) => {
      var z = ik();
      Ne(w(z), () => a()(c())), x(z), ke((C) => Ie(z, "data-a11y-label", C), [() => r()("system.price")]), h(m, z);
    });
    var f = E(p, 2), b = (m) => {
      var z = Te();
      lt(_e(z), l, (C) => {
        var A = lk();
        Ne(w(A), () => a()(l())), x(A), ke((O) => Ie(A, "data-a11y-label", O), [() => r()("system.original_price")]), h(C, A);
      }), h(m, z);
    };
    F(f, (m) => {
      l() > c() && m(b);
    }), x(v), h(n, v);
    var y = it(g);
    return o(), y;
  }
  Je(Cs, { discountedPrice: {}, fullPrice: {} }, [], [], !0);
  const vi = Rr(null), Yo = (n) => fn({ "kaching-subscriptions-title-color": We(n.titleColor), "kaching-subscriptions-subtitle-color": We(n.subtitleColor), "kaching-subscriptions-title-font-size": n.titleSize + "px", "kaching-subscriptions-subtitle-font-size": n.subtitleSize + "px" });
  var ok = $('<div class="kaching-bundles__bar-radio"></div>'), ck = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), uk = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), dk = $('<div class="kaching-bundles__bar-variants"><!></div>'), gk = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), hk = $('<div class="kaching-bundles__bar-radio"></div>'), pk = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), bk = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), fk = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div></div></div>'), vk = $("<div></div>");
  function wg(n, t) {
    at(t, !0);
    const r = () => Ve(vi, "$selectedDealBarStore", o), a = () => Ve(f, "$formatPrice", o), s = () => Ve(p, "$translate", o), [o, c] = kt(), l = k(t, "subscriptions", 7), i = k(t, "sellingPlans", 7), u = k(t, "selectedSellingPlan", 7), g = k(t, "hideSellingPlanSelector", 7, !1), v = k(t, "onChange", 7), p = Tt(), f = vn();
    let b = Oe(ut(l().subscribeByDefault || u() ? "subscribe" : "one-time")), y = Oe(ut(u() || i()[0])), m = Oe(!1), z = d(() => l().subscribeByDefault), C = d(() => e(z) ? ["subscribe", "one-time"] : ["one-time", "subscribe"]);
    const A = d(() => Yo(l())), O = d(() => {
      var q, Y;
      const Q = (Y = (q = r()) == null ? void 0 : q.dealBar) == null ? void 0 : Y.sellingPlanGid;
      if (Q) return i().find((oe) => oe.id === Ut(Q));
    }), V = d(() => {
      var q;
      return (q = e(O)) != null ? q : e(y);
    }), R = d(() => {
      var q, Y, Q, oe, j;
      return (j = (oe = (Y = (q = r()) == null ? void 0 : q.pricing.discountedPricesForSellingPlans.find((D) => {
        var se;
        return D.sellingPlanId === ((se = e(V)) == null ? void 0 : se.id);
      })) == null ? void 0 : Y.discountedPrice) != null ? oe : (Q = r()) == null ? void 0 : Q.pricing.discountedPrice) != null ? j : 0;
    }), U = d(() => {
      var q, Y;
      return (Y = (q = r()) == null ? void 0 : q.pricing.discountedPriceWithoutSellingPlan) != null ? Y : 0;
    }), G = d(() => {
      var q, Y;
      return (Y = (q = r()) == null ? void 0 : q.pricing.fullPrice) != null ? Y : 0;
    }), H = d(() => {
      var q, Y, Q;
      return _n({ priceFormatter: a(), product: (q = r()) == null ? void 0 : q.product, totalFullPrice: e(G), totalDiscountedPrice: e(R), quantity: (Q = (Y = r()) == null ? void 0 : Y.quantity) != null ? Q : 1, sellingPlan: e(V), unitQuantity: null });
    }), I = d(() => {
      var q, Y, Q;
      return _n({ priceFormatter: a(), product: (q = r()) == null ? void 0 : q.product, totalFullPrice: e(G), totalDiscountedPrice: e(U), quantity: (Q = (Y = r()) == null ? void 0 : Y.quantity) != null ? Q : 1, unitQuantity: null });
    });
    function T(q) {
      ee(m, !0), ee(b, q, !0), v()(q === "subscribe" ? e(y) : void 0);
    }
    function ue(q) {
      ee(y, q, !0), e(b) === "subscribe" && v()(q);
    }
    Fa(() => {
      e(b) === "subscribe" && v()(e(y));
    }), tt(() => {
      if (u()) return ee(y, u(), !0), void ee(b, "subscribe");
      if (i().length === 0) return void ee(b, "one-time");
      i().some((q) => {
        var Y;
        return q.id === ((Y = e(y)) == null ? void 0 : Y.id);
      }) || ee(y, i()[0], !0), e(m) || ee(b, e(z) ? "subscribe" : "one-time", !0), v()(e(b) === "subscribe" ? e(y) : void 0);
    });
    var re = { get subscriptions() {
      return l();
    }, set subscriptions(q) {
      l(q), _();
    }, get sellingPlans() {
      return i();
    }, set sellingPlans(q) {
      i(q), _();
    }, get selectedSellingPlan() {
      return u();
    }, set selectedSellingPlan(q) {
      u(q), _();
    }, get hideSellingPlanSelector() {
      return g();
    }, set hideSellingPlanSelector(q = !1) {
      g(q), _();
    }, get onChange() {
      return v();
    }, set onChange(q) {
      v(q), _();
    } }, P = vk();
    let S;
    Gt(P, 20, () => e(C), (q) => q, (q, Y) => {
      var Q = Te(), oe = _e(Q), j = (se) => {
        {
          let te = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(b) === "subscribe" && "kaching-bundles__bar--selected"]);
          Yt(se, { element: "div", get class() {
            return e(te);
          }, onclick: () => T("subscribe"), children: (X, ne) => {
            var he = gk(), M = w(he), W = w(M), de = w(W), ge = (Me) => {
              h(Me, ok());
            };
            F(de, (Me) => {
              l().layout === "vertical" && Me(ge);
            });
            var N = E(de, 2), J = w(N), ae = w(J), ce = w(ae), me = (Me) => {
              var Ae = ck();
              Ne(w(Ae), () => e(H)(s()(l().subscribeTitle))), x(Ae), h(Me, Ae);
            };
            F(ce, (Me) => {
              l().subscribeTitle && Me(me);
            }), x(ae);
            var be = E(ae, 2), Se = (Me) => {
              var Ae = uk();
              Ne(w(Ae), () => e(H)(s()(l().subscribeSubtitle))), x(Ae), h(Me, Ae);
            };
            F(be, (Me) => {
              l().subscribeSubtitle && Me(Se);
            }), x(J);
            var L = E(J, 2), pe = (Me) => {
              Cs(Me, { get discountedPrice() {
                return e(R);
              }, get fullPrice() {
                return e(G);
              } });
            };
            F(L, (Me) => {
              l().showPrices && r() && Me(pe);
            }), x(N), x(W);
            var Z = E(W, 2), fe = (Me) => {
              {
                let Ae = d(() => e(b) === "subscribe");
                Na(Me, { get highlights() {
                  return l().highlights;
                }, get isSelected() {
                  return e(Ae);
                }, get replaceLiquid() {
                  return e(H);
                } });
              }
            };
            F(Z, (Me) => {
              l().highlights && Me(fe);
            });
            var xe = E(Z, 2), $e = (Me) => {
              var Ae = dk();
              Ra(w(Ae), { get sellingPlans() {
                return i();
              }, get selectedSellingPlan() {
                return e(y);
              }, onChange: ue }), x(Ae), h(Me, Ae);
            };
            F(xe, (Me) => {
              e(b) === "subscribe" && i().length > 1 && e(y) && !g() && Me($e);
            }), x(M), x(he), h(X, he);
          }, $$slots: { default: !0 } });
        }
      }, D = (se) => {
        {
          let te = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(b) === "one-time" && "kaching-bundles__bar--selected"]);
          Yt(se, { element: "div", get class() {
            return e(te);
          }, onclick: () => T("one-time"), children: (X, ne) => {
            var he = fk(), M = w(he), W = w(M), de = w(W), ge = (Z) => {
              h(Z, hk());
            };
            F(de, (Z) => {
              l().layout === "vertical" && Z(ge);
            });
            var N = E(de, 2), J = w(N), ae = w(J), ce = w(ae), me = (Z) => {
              var fe = pk();
              Ne(w(fe), () => e(I)(s()(l().oneTimeTitle))), x(fe), h(Z, fe);
            };
            F(ce, (Z) => {
              l().oneTimeTitle && Z(me);
            }), x(ae);
            var be = E(ae, 2), Se = (Z) => {
              var fe = bk();
              Ne(w(fe), () => e(I)(s()(l().oneTimeSubtitle))), x(fe), h(Z, fe);
            };
            F(be, (Z) => {
              l().oneTimeSubtitle && Z(Se);
            }), x(J);
            var L = E(J, 2), pe = (Z) => {
              Cs(Z, { get discountedPrice() {
                return e(U);
              }, get fullPrice() {
                return e(G);
              } });
            };
            F(L, (Z) => {
              l().showPrices && r() && Z(pe);
            }), x(N), x(W), x(M), x(he), h(X, he);
          }, $$slots: { default: !0 } });
        }
      };
      F(oe, (se) => {
        Y === "subscribe" ? se(j) : se(D, !1);
      }), h(q, Q);
    }), x(P), ke((q) => {
      S = Wt(P, 1, "kaching-bundles__subscriptions kaching-bundles__bars", null, S, q), Ft(P, e(A));
    }, [() => ({ "kaching-bundles__bars--horizontal": l().layout === "horizontal" })]), h(n, P);
    var B = it(re);
    return c(), B;
  }
  Je(wg, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var _k = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), kk = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), mk = $('<div class="kaching-bundles__bar-variants"><!></div>'), xk = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><span class="kaching-bundles__subscriptions__checkbox"><!></span> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), yk = $('<div class="kaching-bundles__subscriptions kaching-bundles__bars kaching-bundles__subscriptions--checkbox"><!></div>');
  function Pg(n, t) {
    at(t, !0);
    const r = () => Ve(vi, "$selectedDealBarStore", s), a = () => Ve(v, "$translate", s), [s, o] = kt(), c = k(t, "subscriptions", 7), l = k(t, "sellingPlans", 7), i = k(t, "selectedSellingPlan", 7), u = k(t, "hideSellingPlanSelector", 7, !1), g = k(t, "onChange", 7), v = Tt(), p = vn();
    let f = Oe(ut(c().subscribeByDefault || !!i())), b = Oe(ut(i() || l()[0])), y = Oe(!1);
    const m = d(() => Yo(c())), z = d(() => {
      var T, ue;
      const re = (ue = (T = r()) == null ? void 0 : T.dealBar) == null ? void 0 : ue.sellingPlanGid;
      if (re) return l().find((P) => P.id === Ut(re));
    }), C = d(() => {
      var T;
      return (T = e(z)) != null ? T : e(b);
    }), A = d(() => {
      var T, ue, re, P, S;
      return (S = (P = (ue = (T = r()) == null ? void 0 : T.pricing.discountedPricesForSellingPlans.find((B) => {
        var q;
        return B.sellingPlanId === ((q = e(C)) == null ? void 0 : q.id);
      })) == null ? void 0 : ue.discountedPrice) != null ? P : (re = r()) == null ? void 0 : re.pricing.discountedPrice) != null ? S : 0;
    }), O = d(() => {
      var T, ue;
      return (ue = (T = r()) == null ? void 0 : T.pricing.fullPrice) != null ? ue : 0;
    }), V = d(() => {
      var T, ue, re;
      return _n({ priceFormatter: Ve(p, "$formatPrice", s), product: (T = r()) == null ? void 0 : T.product, totalFullPrice: e(O), totalDiscountedPrice: e(A), quantity: (re = (ue = r()) == null ? void 0 : ue.quantity) != null ? re : 1, sellingPlan: e(C), unitQuantity: null });
    });
    function R(T) {
      ee(b, T, !0), g()(T);
    }
    tt(() => {
      if (i()) return ee(b, i(), !0), void ee(f, !0);
      if (l().length === 0) return void ee(f, !1);
      e(b) && l().some((T) => T.id === e(b).id) || ee(b, l()[0], !0), e(y) || ee(f, c().subscribeByDefault, !0), g()(e(f) ? e(b) : void 0);
    }), Fa(() => {
      e(f) && g()(e(b));
    });
    var U = { get subscriptions() {
      return c();
    }, set subscriptions(T) {
      c(T), _();
    }, get sellingPlans() {
      return l();
    }, set sellingPlans(T) {
      l(T), _();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(T) {
      i(T), _();
    }, get hideSellingPlanSelector() {
      return u();
    }, set hideSellingPlanSelector(T = !1) {
      u(T), _();
    }, get onChange() {
      return g();
    }, set onChange(T) {
      g(T), _();
    } }, G = yk(), H = w(G);
    {
      let T = d(() => ["kaching-bundles__bar", l().length === 0 && "kaching-bundles__bar--disabled"]);
      Yt(H, { element: "div", get class() {
        return e(T);
      }, role: "checkbox", get "aria-checked"() {
        return e(f);
      }, onclick: function() {
        ee(y, !0), ee(f, !e(f)), g()(e(f) ? e(b) : void 0);
      }, children: (ue, re) => {
        var P = xk(), S = w(P), B = w(S), q = w(B), Y = w(q), Q = (J) => {
          Ps(J);
        };
        F(Y, (J) => {
          e(f) && J(Q);
        }), x(q);
        var oe = E(q, 2), j = w(oe), D = w(j), se = w(D), te = (J) => {
          var ae = _k();
          Ne(w(ae), () => e(V)(a()(c().subscribeTitle))), x(ae), h(J, ae);
        };
        F(se, (J) => {
          c().subscribeTitle && J(te);
        }), x(D);
        var X = E(D, 2), ne = (J) => {
          var ae = kk();
          Ne(w(ae), () => e(V)(a()(c().subscribeSubtitle))), x(ae), h(J, ae);
        };
        F(X, (J) => {
          c().subscribeSubtitle && J(ne);
        }), x(j);
        var he = E(j, 2), M = (J) => {
          Cs(J, { get discountedPrice() {
            return e(A);
          }, get fullPrice() {
            return e(O);
          } });
        };
        F(he, (J) => {
          c().showPrices && r() && J(M);
        }), x(oe), x(B);
        var W = E(B, 2), de = (J) => {
          Na(J, { get highlights() {
            return c().highlights;
          }, get isSelected() {
            return e(f);
          }, get replaceLiquid() {
            return e(V);
          } });
        };
        F(W, (J) => {
          c().highlights && J(de);
        });
        var ge = E(W, 2), N = (J) => {
          var ae = mk();
          Ra(w(ae), { get sellingPlans() {
            return l();
          }, get selectedSellingPlan() {
            return e(b);
          }, onChange: R }), x(ae), h(J, ae);
        };
        F(ge, (J) => {
          e(f) && l().length > 1 && e(b) && !u() && J(N);
        }), x(S), x(P), h(ue, P);
      }, $$slots: { default: !0 } });
    }
    x(G), ke(() => Ft(G, e(m))), h(n, G);
    var I = it(U);
    return o(), I;
  }
  function wk(n, t, r, a) {
    t()(r().subscribeByDefault ? void 0 : e(a));
  }
  Je(Pg, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var Pk = $('<div class="kaching-bundles__subscriptions kaching-bundles__subscriptions--link"><button type="button" class="kaching-bundles__subscriptions__link"><!><!></button></div>');
  function Sg(n, t) {
    at(t, !0);
    const r = () => Ve(vi, "$selectedDealBarStore", s), a = () => Ve(p, "$formatPrice", s), [s, o] = kt(), c = k(t, "subscriptions", 7), l = k(t, "sellingPlans", 7), i = k(t, "selectedSellingPlan", 7), u = k(t, "onChange", 7), g = k(t, "onRequestAddToCart", 7), v = Tt(), p = vn(), f = d(() => Yo(c())), b = d(() => {
      var re, P;
      const S = (P = (re = r()) == null ? void 0 : re.dealBar) == null ? void 0 : P.sellingPlanGid;
      if (S) return l().find((B) => B.id === Ut(S));
    }), y = d(() => {
      var re, P;
      return (P = (re = e(b)) != null ? re : i()) != null ? P : l()[0];
    }), m = d(() => {
      var re, P, S, B, q;
      return (q = (B = (P = (re = r()) == null ? void 0 : re.pricing.discountedPricesForSellingPlans.find((Y) => {
        var Q;
        return Y.sellingPlanId === ((Q = e(y)) == null ? void 0 : Q.id);
      })) == null ? void 0 : P.discountedPrice) != null ? B : (S = r()) == null ? void 0 : S.pricing.discountedPrice) != null ? q : 0;
    }), z = d(() => {
      var re, P;
      return (P = (re = r()) == null ? void 0 : re.pricing.discountedPriceWithoutSellingPlan) != null ? P : 0;
    }), C = d(() => {
      var re, P;
      return (P = (re = r()) == null ? void 0 : re.pricing.fullPrice) != null ? P : 0;
    }), A = d(() => {
      var re, P, S;
      return _n({ priceFormatter: a(), product: (re = r()) == null ? void 0 : re.product, totalFullPrice: e(C), totalDiscountedPrice: c().subscribeByDefault ? e(z) : e(m), quantity: (S = (P = r()) == null ? void 0 : P.quantity) != null ? S : 1, sellingPlan: c().subscribeByDefault ? void 0 : e(y), unitQuantity: null });
    }), O = d(() => c().subscribeByDefault ? e(z) : e(m)), V = d(() => {
      const re = c().subscribeByDefault ? c().oneTimeTitle : c().subscribeTitle;
      return re ? e(A)(Ve(v, "$translate", s)(re)) : "";
    });
    let R, U = !1;
    tt(() => {
      const re = l().length !== 0 && c().subscribeByDefault ? e(y) : void 0;
      U && (re == null ? void 0 : re.id) === R || (R = re == null ? void 0 : re.id, U = !0, u()(re));
    });
    var G = { get subscriptions() {
      return c();
    }, set subscriptions(re) {
      c(re), _();
    }, get sellingPlans() {
      return l();
    }, set sellingPlans(re) {
      l(re), _();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(re) {
      i(re), _();
    }, get onChange() {
      return u();
    }, set onChange(re) {
      u(re), _();
    }, get onRequestAddToCart() {
      return g();
    }, set onRequestAddToCart(re) {
      g(re), _();
    } }, H = Te(), I = _e(H), T = (re) => {
      var P = Pk(), S = w(P);
      S.__click = [wk, g, c, y];
      var B = w(S);
      Ne(B, () => e(V));
      var q = E(B), Y = (Q) => {
        var oe = Rn();
        ke((j) => pt(oe, j), [() => " • " + a()(e(O))]), h(Q, oe);
      };
      F(q, (Q) => {
        c().showPrices && r() && Q(Y);
      }), x(S), x(P), ke(() => Ft(P, e(f))), h(re, P);
    };
    F(I, (re) => {
      l().length > 0 && e(V) && re(T);
    }), h(n, H);
    var ue = it(G);
    return o(), ue;
  }
  Fn(["click"]), Je(Sg, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var Sk = $('<div class="kaching-bundles__block-title"><!></div>'), Bk = $('<!> <div class="kaching-bundles__subscriptions-wrapper"><!></div>', 1);
  function Bg(n, t) {
    at(t, !0);
    const [r, a] = kt(), s = k(t, "subscriptions", 7), o = k(t, "sellingPlans", 7), c = k(t, "selectedSellingPlan", 7), l = k(t, "hideSellingPlanSelector", 7, !1), i = k(t, "hideTitle", 7, !1), u = k(t, "onChange", 7), g = k(t, "onRequestAddToCart", 7), v = Tt(), p = d(() => s().title ? Ve(v, "$translate", r)(s().title) : "");
    var f = { get subscriptions() {
      return s();
    }, set subscriptions(R) {
      s(R), _();
    }, get sellingPlans() {
      return o();
    }, set sellingPlans(R) {
      o(R), _();
    }, get selectedSellingPlan() {
      return c();
    }, set selectedSellingPlan(R) {
      c(R), _();
    }, get hideSellingPlanSelector() {
      return l();
    }, set hideSellingPlanSelector(R = !1) {
      l(R), _();
    }, get hideTitle() {
      return i();
    }, set hideTitle(R = !1) {
      i(R), _();
    }, get onChange() {
      return u();
    }, set onChange(R) {
      u(R), _();
    }, get onRequestAddToCart() {
      return g();
    }, set onRequestAddToCart(R) {
      g(R), _();
    } }, b = Bk(), y = _e(b), m = (R) => {
      var U = Sk();
      Ne(w(U), () => e(p)), x(U), h(R, U);
    };
    F(y, (R) => {
      e(p) && !i() && R(m);
    });
    var z = E(y, 2), C = w(z), A = (R) => {
      Pg(R, { get subscriptions() {
        return s();
      }, get sellingPlans() {
        return o();
      }, get selectedSellingPlan() {
        return c();
      }, get hideSellingPlanSelector() {
        return l();
      }, get onChange() {
        return u();
      } });
    }, O = (R) => {
      var U = Te(), G = _e(U), H = (T) => {
        Sg(T, { get subscriptions() {
          return s();
        }, get sellingPlans() {
          return o();
        }, get selectedSellingPlan() {
          return c();
        }, get onChange() {
          return u();
        }, get onRequestAddToCart() {
          return g();
        } });
      }, I = (T) => {
        wg(T, { get subscriptions() {
          return s();
        }, get sellingPlans() {
          return o();
        }, get selectedSellingPlan() {
          return c();
        }, get hideSellingPlanSelector() {
          return l();
        }, get onChange() {
          return u();
        } });
      };
      F(G, (T) => {
        s().layout === "link" ? T(H) : T(I, !1);
      }, !0), h(R, U);
    };
    F(C, (R) => {
      s().layout === "checkbox" ? R(A) : R(O, !1);
    }), x(z), h(n, b);
    var V = it(f);
    return a(), V;
  }
  Je(Bg, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, hideTitle: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var Ck = Tn('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function Cg(n) {
    h(n, Ck());
  }
  Je(Cg, {}, [], [], !0);
  var Ik = $('<img alt="Locked" class="kaching-bundles__progressive-gifts__gift__image"/>'), Mk = $('<img class="kaching-bundles__progressive-gifts__gift__image kaching-bundles__progressive-gifts__gift__image--locked-product"/>'), zk = $('<div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><!></div>'), $k = $('<div class="kaching-bundles__progressive-gifts__gift__title kaching-bundles__progressive-gifts__gift__title--locked"><!></div>'), Dk = $('<div class="kaching-bundles__progressive-gifts__gift__title kaching-bundles__progressive-gifts__gift__title--locked"><!></div>'), Tk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), Vk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), Ak = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), qk = $('<div class="kaching-bundles__progressive-gifts__gift__content"><!> <!> <!></div>'), Gk = $('<div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><img class="kaching-bundles__progressive-gifts__gift__image"/></div>'), Fk = $('<span class="kaching-bundles__progressive-gifts__gift__title"><!></span>'), Ok = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), Lk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), Ek = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), jk = $('<div><div class="kaching-bundles__progressive-gifts__gift__content"><!> <div class="kaching-bundles__progressive-gifts__gift__details"><div class="kaching-bundles__progressive-gifts__gift__details__content"><!> <!></div> <!></div></div></div>');
  function Ig(n, t) {
    at(t, !0);
    const r = () => Ve(C, "$config", o), a = () => Ve(y, "$translate", o), s = () => Ve(z, "$getMediaImageUrl", o), [o, c] = kt(), l = k(t, "progressiveGifts", 7), i = k(t, "gift", 7), u = k(t, "product", 7), g = k(t, "selectedDealBarIndex", 7), v = k(t, "sellingPlan", 7), p = k(t, "onChange", 7), f = k(t, "onUnlock", 7), b = k(t, "onSubscribe", 7), y = Tt(), m = vn(), z = Vn(), C = yn(), A = d(() => i().differentVariantsEnabled), O = d(() => {
      var W;
      return u() ? i().variantGIDs ? i().variantGIDs.map(Ut) : (W = u()) == null ? void 0 : W.variants.map((de) => de.id) : null;
    }), V = d(() => {
      if (u()) return { ...u(), variants: u().variants.filter((W) => (r().preview || W.availableForSale) && (!e(O) || e(O).includes(W.id))) };
    });
    let R = Oe(ut([]));
    const U = d(() => (function(W, de, ge) {
      return W.length > 0 ? W : de != null && de.availableForSale && de.variants.length > 0 ? Array.from({ length: ge }, () => de.variants[0].id) : [];
    })(e(R), e(V), i().quantity)), G = d(() => u() && e(U).length > 0 ? e(U).map((W) => u().variants.find((de) => de.id === W)).filter((W) => W !== void 0) : []), H = d(() => {
      var W;
      return _n({ priceFormatter: Ve(m, "$formatPrice", o), product: u(), totalFullPrice: ((W = e(G)) == null ? void 0 : W.reduce((de, ge) => {
        var N;
        return de + ((N = ge == null ? void 0 : ge.price) != null ? N : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: Ir(e(G).map((de) => ({ variant: de, quantity: 1 }))) });
    }), I = d(() => e(H)(a()(i().title))), T = d(() => e(H)(a()(i().lockedTitle))), ue = d(() => e(H)(a()(i().label))), re = d(() => e(H)(a()(i().labelCrossedOut))), P = d(() => g() === null || !Ro(i(), g() + 1)), S = d(() => Xd(i(), v())), B = d(() => e(P) || e(S));
    function q() {
      e(P) && f()(), e(S) && b()();
    }
    const Y = d(() => {
      var W, de, ge;
      return i().giftType === "shipping" ? Go : ((de = (W = e(G)) == null ? void 0 : W[0]) == null ? void 0 : de.image) || ((ge = u()) == null ? void 0 : ge.image);
    }), Q = d(() => i().mediaImageGID ? s()(i().mediaImageGID) : e(Y)), oe = d(() => !l().inheritStyle && l().style && s()(l().style.lockedMediaImageGID)), j = d(() => l().showLockedGiftProducts && !e(oe)), D = d(() => e(j) && !!e(Q));
    tt(() => {
      if (u() && e(G) && !e(P)) {
        const W = Object.values(e(G).reduce((de, ge) => (de[ge.id] ? de[ge.id].quantity += 1 : de[ge.id] = { variant: ge, quantity: 1 }, de), {}));
        Xt(() => p()({ product: u(), variants: W }));
      } else Xt(() => p()(void 0));
    }), br(() => {
      i().productGID;
    }), tt(() => {
      e(B) && e(Q) && (new Image().src = e(Q));
    });
    const se = d(() => !(i().giftType !== "product" || !u() || u().availableForSale && u().variants.filter((W) => W.availableForSale && (!e(O) || e(O).includes(W.id))).length !== 0));
    var te = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(W) {
      l(W), _();
    }, get gift() {
      return i();
    }, set gift(W) {
      i(W), _();
    }, get product() {
      return u();
    }, set product(W) {
      u(W), _();
    }, get selectedDealBarIndex() {
      return g();
    }, set selectedDealBarIndex(W) {
      g(W), _();
    }, get sellingPlan() {
      return v();
    }, set sellingPlan(W) {
      v(W), _();
    }, get onChange() {
      return p();
    }, set onChange(W) {
      p(W), _();
    }, get onUnlock() {
      return f();
    }, set onUnlock(W) {
      f(W), _();
    }, get onSubscribe() {
      return b();
    }, set onSubscribe(W) {
      b(W), _();
    } }, X = Te(), ne = _e(X), he = (W) => {
      var de = Te(), ge = _e(de), N = (J) => {
        var ae = Te(), ce = _e(ae), me = (Se) => {
          Yt(Se, { element: "div", class: "kaching-bundles__progressive-gifts__gift kaching-bundles__progressive-gifts__gift--locked", onclick: q, children: (L, pe) => {
            var Z = qk(), fe = w(Z), xe = (Le) => {
              var K = zk(), we = w(K), ie = (Ge) => {
                var Qe = Ik();
                ke(() => Ie(Qe, "src", e(oe))), h(Ge, Qe);
              }, ze = (Ge) => {
                var Qe = Te(), Ce = _e(Qe), Pe = (qe) => {
                  var et = Mk();
                  ke(() => {
                    var yt, rt;
                    Ie(et, "src", e(Q)), Ie(et, "alt", (rt = (yt = u()) == null ? void 0 : yt.title) != null ? rt : "");
                  }), h(qe, et);
                }, Ee = (qe) => {
                  Cg(qe);
                };
                F(Ce, (qe) => {
                  e(D) ? qe(Pe) : qe(Ee, !1);
                }, !0), h(Ge, Qe);
              };
              F(we, (Ge) => {
                e(oe) ? Ge(ie) : Ge(ze, !1);
              }), x(K), h(Le, K);
            };
            F(fe, (Le) => {
              !e(D) && e(j) || Le(xe);
            });
            var $e = E(fe, 2), Me = (Le) => {
              var K = $k();
              Ne(w(K), () => e(T)), x(K), h(Le, K);
            }, Ae = (Le) => {
              var K = Te(), we = _e(K), ie = (ze) => {
                var Ge = Dk();
                Ne(w(Ge), () => e(I)), x(Ge), h(ze, Ge);
              };
              F(we, (ze) => {
                e(I) && ze(ie);
              }, !0), h(Le, K);
            };
            F($e, (Le) => {
              e(j) ? Le(Ae, !1) : Le(Me);
            });
            var Be = E($e, 2), Fe = (Le) => {
              var K = Ak(), we = w(K), ie = (Qe) => {
                var Ce = Tk();
                Ne(w(Ce), () => e(ue)), x(Ce), h(Qe, Ce);
              };
              F(we, (Qe) => {
                e(ue) && Qe(ie);
              });
              var ze = E(we, 2), Ge = (Qe) => {
                var Ce = Vk();
                Ne(w(Ce), () => e(re)), x(Ce), h(Qe, Ce);
              };
              F(ze, (Qe) => {
                e(re) && Qe(Ge);
              }), x(K), h(Le, K);
            };
            F(Be, (Le) => {
              (e(ue) || e(re)) && l().showLockedGiftLabels && Le(Fe);
            }), x(Z), h(L, Z);
          }, $$slots: { default: !0 } });
        }, be = (Se) => {
          var L = jk();
          let pe;
          var Z = w(L), fe = w(Z), xe = (ie) => {
            var ze = Gk(), Ge = w(ze);
            x(ze), ke(() => {
              var Qe, Ce;
              Ie(Ge, "src", e(Q)), Ie(Ge, "alt", (Ce = (Qe = u()) == null ? void 0 : Qe.title) != null ? Ce : "");
            }), h(ie, ze);
          };
          F(fe, (ie) => {
            e(Q) && ie(xe);
          });
          var $e = E(fe, 2), Me = w($e), Ae = w(Me), Be = (ie) => {
            var ze = Fk();
            Ne(w(ze), () => e(I)), x(ze), h(ie, ze);
          };
          F(Ae, (ie) => {
            e(I) && ie(Be);
          });
          var Fe = E(Ae, 2), Le = (ie) => {
            var ze = Ek(), Ge = w(ze), Qe = (Ee) => {
              var qe = Ok();
              Ne(w(qe), () => e(ue)), x(qe), h(Ee, qe);
            };
            F(Ge, (Ee) => {
              e(ue) && Ee(Qe);
            });
            var Ce = E(Ge, 2), Pe = (Ee) => {
              var qe = Lk();
              Ne(w(qe), () => e(re)), x(qe), h(Ee, qe);
            };
            F(Ce, (Ee) => {
              e(re) && Ee(Pe);
            }), x(ze), h(ie, ze);
          };
          F(Fe, (ie) => {
            (e(ue) || e(re)) && ie(Le);
          }), x(Me);
          var K = E(Me, 2), we = (ie) => {
            var ze = Te();
            Gt(_e(ze), 17, () => ({ length: e(A) ? i().quantity : 1 }), jr, (Ge, Qe, Ce) => {
              var Pe = Te(), Ee = _e(Pe), qe = (et) => {
                {
                  let yt = d(() => e(A) ? Ce + 1 : void 0);
                  Wn(et, { get product() {
                    return e(V);
                  }, get selectedVariantId() {
                    return e(U)[Ce];
                  }, get number() {
                    return e(yt);
                  }, forceDropdown: !0, onChange: (rt) => (function(Vt, Et) {
                    e(A) ? ee(R, [...e(U).slice(0, Et), Vt, ...e(U).slice(Et + 1)], !0) : ee(R, Array.from({ length: i().quantity }, () => Vt), !0);
                  })(rt, Ce) });
                }
              };
              F(Ee, (et) => {
                e(U)[Ce] !== void 0 && et(qe);
              }), h(Ge, Pe);
            }), h(ie, ze);
          };
          F(K, (ie) => {
            e(V) && e(V).variants.length > 1 && e(U).length > 0 && ie(we);
          }), x($e), x(Z), x(L), ke((ie) => pe = Wt(L, 1, "kaching-bundles__progressive-gifts__gift", null, pe, ie), [() => ({ "kaching-bundles__progressive-gifts__gift--out-of-stock": r().preview && e(se) })]), h(Se, L);
        };
        F(ce, (Se) => {
          e(B) ? Se(me) : Se(be, !1);
        }), h(J, ae);
      };
      F(ge, (J) => {
        var ae;
        (u() && ((ae = e(G)) != null && ae.length || r().preview && e(se)) || i().giftType === "shipping") && J(N);
      }), h(W, de);
    };
    F(ne, (W) => {
      e(B) && l().hideLockedGifts || W(he);
    }), h(n, X);
    var M = it(te);
    return c(), M;
  }
  Je(Ig, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, sellingPlan: {}, onChange: {}, onUnlock: {}, onSubscribe: {} }, [], [], !0);
  var Rk = $('<span class="kaching-bundles__progressive-gifts__title"><!></span>'), Nk = $('<span class="kaching-bundles__progressive-gifts__subtitle"><!></span>'), Qk = $('<div class="kaching-bundles__progressive-gifts"><div class="kaching-bundles__progressive-gifts__header"><!> <!></div> <div></div></div>');
  function Mg(n, t) {
    at(t, !0);
    const r = () => Ve(y, "$config", s), a = () => Ve(b, "$translate", s), [s, o] = kt(), c = k(t, "progressiveGifts", 7), l = k(t, "dealBlock", 7), i = k(t, "otherProducts", 7), u = k(t, "selectedDealBarIndex", 7), g = k(t, "sellingPlan", 7), v = k(t, "onChange", 7), p = k(t, "onUnlock", 7), f = k(t, "onSubscribe", 7), b = Tt(), y = yn();
    let m = Oe(ut({}));
    const z = d(() => ((H) => {
      const { progressiveGifts: I, colors: T, fonts: ue } = H, re = (I == null ? void 0 : I.inheritStyle) || !(I != null && I.style);
      return fn({ "kaching-bundles-progressive-gifts-title-color": We(I.titleColor), "kaching-bundles-progressive-gifts-title-alignment": I.titleAlignment, "kaching-bundles-progressive-gifts-title-size": I.titleSize + "px", "kaching-bundles-progressive-gifts-title-weight": ur(I.titleStyle), "kaching-bundles-progressive-gifts-title-style": dr(I.titleStyle), "kaching-bundles-progressive-gifts-subtitle-color": We(I.subtitleColor), "kaching-bundles-progressive-gifts-subtitle-alignment": I.subtitleAlignment, "kaching-bundles-progressive-gifts-subtitle-size": I.subtitleSize + "px", "kaching-bundles-progressive-gifts-subtitle-weight": ur(I.subtitleStyle), "kaching-bundles-progressive-gifts-subtitle-style": dr(I.subtitleStyle), "kaching-bundles-progressive-gifts-image-size": re ? void 0 : I.style.imageSize + "px", "kaching-bundles-progressive-gifts-border-radius": (re ? H.cornerRadius : I.style.cornerRadius) + "px", "kaching-bundles-progressive-gifts-label-background-color": We(re ? T.progressiveGiftsLabelBackground || T.labelBackground : I.style.labelBackgroundColor), "kaching-bundles-progressive-gifts-label-text-color": We(re ? T.label : I.style.labelTextColor), "kaching-bundles-progressive-gifts-label-text-size": (re ? ue.label.size : I.style.labelTextSize) + "px", "kaching-bundles-progressive-gifts-background-color": We(re ? T.selectedBackground : I.style.backgroundColor), "kaching-bundles-progressive-gifts-border-color": We(re ? T.border : I.style.borderColor), "kaching-bundles-progressive-gifts-text-color": We(re ? T.title : I.style.textColor), "kaching-bundles-progressive-gifts-text-size": re ? void 0 : I.style.textSize + "px", "kaching-bundles-progressive-gifts-locked-background-color": We(re ? T.background : I.style.lockedBackgroundColor), "kaching-bundles-progressive-gifts-locked-border-color": We(re ? { ...T.border, alpha: 0.3 * T.border.alpha } : I.style.lockedBorderColor), "kaching-bundles-progressive-gifts-locked-text-color": re ? void 0 : We(I.style.lockedTextColor), "kaching-bundles-progressive-gifts-locked-text-size": re ? void 0 : I.style.lockedTextSize + "px", "kaching-bundles-progressive-gifts-locked-icon-color": re ? void 0 : We(I.style.lockedIconColor) });
    })(l()));
    function C() {
      const H = Object.entries(e(m)).map(([I, T]) => ({ id: I, variants: T.variants, product: T.product }));
      v()(H);
    }
    const A = d(() => c().gifts.flatMap((H) => {
      const I = H.giftType === "product" && H.productGID ? i().find((ue) => ue.id === Ut(H.productGID)) : void 0;
      if (!r().preview && H.giftType === "product" && !(I != null && I.availableForSale)) return [];
      const T = I && !r().preview ? Cr(I) : I;
      return { gift: H, product: T };
    }));
    tt(() => {
      const H = new Set(c().gifts.map((T) => T.id)), I = Object.keys(e(m)).filter((T) => !H.has(T));
      if (I.length) {
        for (const T of I) delete e(m)[T];
        C();
      }
    });
    var O = { get progressiveGifts() {
      return c();
    }, set progressiveGifts(H) {
      c(H), _();
    }, get dealBlock() {
      return l();
    }, set dealBlock(H) {
      l(H), _();
    }, get otherProducts() {
      return i();
    }, set otherProducts(H) {
      i(H), _();
    }, get selectedDealBarIndex() {
      return u();
    }, set selectedDealBarIndex(H) {
      u(H), _();
    }, get sellingPlan() {
      return g();
    }, set sellingPlan(H) {
      g(H), _();
    }, get onChange() {
      return v();
    }, set onChange(H) {
      v(H), _();
    }, get onUnlock() {
      return p();
    }, set onUnlock(H) {
      p(H), _();
    }, get onSubscribe() {
      return f();
    }, set onSubscribe(H) {
      f(H), _();
    } }, V = Te(), R = _e(V), U = (H) => {
      var I = Qk(), T = w(I), ue = w(T), re = (Y) => {
        var Q = Rk();
        Ne(w(Q), () => a()(c().title)), x(Q), h(Y, Q);
      };
      F(ue, (Y) => {
        c().title && Y(re);
      });
      var P = E(ue, 2), S = (Y) => {
        var Q = Nk();
        Ne(w(Q), () => a()(c().subtitle)), x(Q), h(Y, Q);
      };
      F(P, (Y) => {
        c().subtitle && Y(S);
      }), x(T);
      var B = E(T, 2);
      let q;
      Gt(B, 21, () => e(A), ({ gift: Y, product: Q }) => Y.id, (Y, Q) => {
        let oe = () => e(Q).gift;
        Ig(Y, { get progressiveGifts() {
          return c();
        }, get gift() {
          return oe();
        }, get product() {
          return e(Q).product;
        }, get selectedDealBarIndex() {
          return u();
        }, get sellingPlan() {
          return g();
        }, onChange: (j) => (function(D, se) {
          se ? e(m)[D] = se : delete e(m)[D], C();
        })(oe().id, j), onUnlock: () => p()(oe().unlockAtBar - 1), get onSubscribe() {
          return f();
        } });
      }), x(B), x(I), ke((Y) => {
        Ft(I, e(z)), q = Wt(B, 1, "kaching-bundles__progressive-gifts__gifts", null, q, Y);
      }, [() => ({ "kaching-bundles__progressive-gifts__gifts--vertical": c().layout === "vertical" })]), h(H, I);
    };
    F(R, (H) => {
      c().gifts.length > 0 && H(U);
    }), h(n, V);
    var G = it(O);
    return o(), G;
  }
  Je(Mg, { progressiveGifts: {}, dealBlock: {}, otherProducts: {}, selectedDealBarIndex: {}, sellingPlan: {}, onChange: {}, onUnlock: {}, onSubscribe: {} }, [], [], !0);
  var Wk = $('<span class="kaching-bundles__bar-title"><!></span>'), Uk = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), Hk = $('<div class="kaching-bundles__bar-price"><!></div>'), Zk = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Jk = $('<span><!></span> <img class="kaching-bundles__checkbox-upsells__image"/> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div>', 1), Yk = $('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!> <!></div>'), Kk = $('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!></div>'), Xk = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div>', 1), em = $("<div><!></div>");
  function zg(n, t) {
    at(t, !0);
    const r = () => Ve(y, "$config", o), a = () => Ve(f, "$formatPrice", o), s = () => Ve(ne, "$translate", o), [o, c] = kt(), l = k(t, "checkboxUpsell", 7), i = k(t, "product", 7), u = k(t, "dealBlock", 7), g = k(t, "dealSellingPlan", 7), v = k(t, "dealBarQuantity", 7), p = k(t, "onChange", 7), f = vn(), b = Vn(), y = yn();
    let m = Oe(!1), z = Oe(1), C = Oe(ut({})), A = Oe(void 0);
    const O = d(() => {
      var L;
      return (L = l().preselected) != null && L;
    }), V = d(() => {
      var L;
      return e(m) || !((L = l().showProductOptionsOnlyWhenSelected) == null || L);
    });
    tt(() => {
      ee(m, e(O), !0);
    }), tt(() => {
      l().matchQuantityWithDealBar && ee(z, v(), !0);
    });
    const R = d(() => !!l().variantGIDs), U = d(() => {
      var L, pe;
      return e(R) && i() ? i().variants.filter((Z) => l().variantGIDs.some((fe) => Ut(fe) === Z.id)) : (pe = (L = i()) == null ? void 0 : L.variants) != null ? pe : [];
    }), G = d(() => e(z) > 1 && e(U).length > 1), H = d(() => (function(L, pe) {
      var Z, fe;
      const xe = [L.defaultVariantGID, ...(Z = L.variantGIDs) != null ? Z : []];
      for (const $e of xe) {
        if (!$e) continue;
        const Me = Ut($e);
        if (pe.some((Ae) => Ae.id === Me && Ae.availableForSale)) return Me;
      }
      return (fe = pe.find(($e) => $e.availableForSale)) == null ? void 0 : fe.id;
    })(l(), e(U))), I = d(() => {
      if (e(H) === void 0) return [];
      const L = [];
      for (let pe = 0; pe < e(z); pe++) {
        const Z = e(C)[pe];
        Z !== void 0 ? L.push(Z) : L.push(e(H));
      }
      return L;
    }), T = d(() => (function(L, pe) {
      if (!pe) return [];
      const Z = {};
      for (const fe of L) {
        const xe = Z[fe];
        if (xe) {
          xe.quantity += 1;
          continue;
        }
        const $e = pe.variants.find((Me) => Me.id === fe);
        $e && (Z[fe] = { variant: $e, quantity: 1 });
      }
      return Object.values(Z);
    })(e(I), i())), ue = d(() => {
      var L;
      return (L = e(T)[0]) == null ? void 0 : L.variant;
    }), re = d(() => {
      var L;
      return (L = l().subscriptionEnabled) == null || L;
    }), P = d(() => {
      var L;
      return (L = l().subscriptionType) != null ? L : "deal";
    }), S = d(() => e(re) && e(P) === "always" && i() && e(ue) ? Pl(i(), [e(ue)]) : []), B = d(() => e(S).find((L) => L.id === e(A)) || e(S)[0]);
    tt(() => {
      var L;
      e(S).some((pe) => {
        var Z;
        return pe.id === ((Z = g()) == null ? void 0 : Z.id);
      }) && ee(A, (L = g()) == null ? void 0 : L.id, !0);
    });
    const q = d(() => {
      if (i() && e(ue) && e(re))
        return e(P) === "deal" ? g() ? ar(i(), e(ue), g()) : void 0 : e(B);
    }), Y = d(() => u().priceRounding ? { perItem: u().showPricesPerItem, precision: u().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0);
    function Q(L) {
      return xa({ discountType: l().discountType, discountValue: l().discountValue, discountQuantity: 1, variantQuantities: e(T), currencyRate: r().currencyRate, priceRounding: e(Y), sellingPlan: L });
    }
    let oe = d(() => Q(e(q))), j = d(() => e(T).reduce((L, { variant: pe, quantity: Z }) => L + Math.max(pe.price, pe.compareAtPrice || 0) * Z, 0));
    const D = d(() => i() && e(ue) ? ar(i(), e(ue), void 0) : void 0), se = d(() => e(re) && e(P) === "always" ? e(oe) : Q(e(D))), te = d(() => !i() || !e(ue) ? [] : Pl(i(), [e(ue)]).map((L) => {
      let pe;
      return pe = e(re) ? e(P) === "always" ? e(B) : L : e(D), { sellingPlanId: L.id, discountedPrice: Q(pe) };
    })), X = d(() => _n({ priceFormatter: a(), product: i(), totalFullPrice: e(j), totalDiscountedPrice: e(oe), quantity: e(z), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: Ir(e(T)), sellingPlan: e(q) })), ne = Tt();
    let he = d(() => e(X)(s()(l().title))), M = d(() => e(X)(s()(l().subtitle))), W = d(() => e(j) && e(j) > e(oe));
    const de = d(() => Ve(b, "$getMediaImageUrl", o)(l().mediaImageGID)), ge = d(() => ((L, pe) => {
      const Z = ws(L);
      if (Z.length > 0) return Z.filter((xe) => xe.attachedTo.type === "checkboxUpsell" && xe.attachedTo.upsellId === pe.id);
      if (L.badgesEnabled === !1) return [];
      const fe = zd(pe);
      return fe ? [fe] : [];
    })(u(), { id: l().id, badgeStyle: l().badgeStyle, badgeText: l().badgeText, badgeImageGID: l().badgeImageGID }).map((L) => Ea(L, s(), e(X)))), N = d(() => ja(e(ge)));
    function J() {
      ee(m, !e(m));
    }
    function ae(L, pe) {
      ee(C, { ...e(C), [L]: pe }, !0);
    }
    tt(() => {
      if (i() && e(T).length > 0 && e(m)) {
        const L = e(q);
        Xt(() => p()({ product: i(), variants: e(T), sellingPlan: L, pricing: { discountedPrice: e(oe), fullPrice: e(j), discountedPriceWithoutSellingPlan: e(se), discountedPricesForSellingPlans: e(te) } }));
      } else Xt(() => p()(void 0));
    });
    var ce = { get checkboxUpsell() {
      return l();
    }, set checkboxUpsell(L) {
      l(L), _();
    }, get product() {
      return i();
    }, set product(L) {
      i(L), _();
    }, get dealBlock() {
      return u();
    }, set dealBlock(L) {
      u(L), _();
    }, get dealSellingPlan() {
      return g();
    }, set dealSellingPlan(L) {
      g(L), _();
    }, get dealBarQuantity() {
      return v();
    }, set dealBarQuantity(L) {
      v(L), _();
    }, get onChange() {
      return p();
    }, set onChange(L) {
      p(L), _();
    } }, me = em();
    let be;
    bi(w(me), { element: "div", get borderHost() {
      return e(N);
    }, children: (L, pe) => {
      var Z = Xk(), fe = _e(Z);
      Gt(fe, 17, () => e(ge), (we) => we.id, (we, ie) => {
        ya(we, { get badge() {
          return e(ie);
        }, blockLayout: "vertical" });
      });
      var xe = E(fe, 2), $e = w(xe);
      Yt($e, { element: "div", class: "kaching-bundles__bar-main", role: "checkbox", get "aria-checked"() {
        return e(m);
      }, onclick: J, children: (we, ie) => {
        var ze = Jk(), Ge = _e(ze);
        let Qe;
        var Ce = w(Ge), Pe = (Re) => {
          Ps(Re);
        };
        F(Ce, (Re) => {
          e(m) && Re(Pe);
        }), x(Ge);
        var Ee = E(Ge, 2), qe = E(Ee, 2), et = w(qe), yt = w(et);
        lt(w(yt), () => e(he), (Re) => {
          var Ke = Wk();
          Ne(w(Ke), () => e(he)), x(Ke), h(Re, Ke);
        }), x(yt);
        var rt = E(yt, 2), Vt = (Re) => {
          var Ke = Te();
          lt(_e(Ke), () => e(M), (Xe) => {
            var nt = Uk();
            Ne(w(nt), () => e(M)), x(nt), h(Xe, nt);
          }), h(Re, Ke);
        };
        F(rt, (Re) => {
          e(M) && Re(Vt);
        }), x(et), x(qe);
        var Et = E(qe, 2), bn = w(Et);
        lt(bn, () => e(oe), (Re) => {
          var Ke = Hk();
          Ne(w(Ke), () => a()(e(oe))), x(Ke), ke((Xe) => Ie(Ke, "data-a11y-label", Xe), [() => s()("system.price")]), h(Re, Ke);
        });
        var un = E(bn, 2), De = (Re) => {
          var Ke = Te();
          lt(_e(Ke), () => e(j), (Xe) => {
            var nt = Zk();
            Ne(w(nt), () => a()(e(j))), x(nt), ke((wt) => Ie(nt, "data-a11y-label", wt), [() => s()("system.original_price")]), h(Xe, nt);
          }), h(Re, Ke);
        };
        F(un, (Re) => {
          e(W) && Re(De);
        }), x(Et), ke((Re) => {
          var Ke, Xe, nt;
          Qe = Wt(Ge, 1, "kaching-bundles__checkbox-upsells__checkbox", null, Qe, Re), Ie(Ee, "src", e(de) || ((Ke = e(ue)) == null ? void 0 : Ke.image) || ((Xe = i()) == null ? void 0 : Xe.image)), Ie(Ee, "alt", (nt = i()) == null ? void 0 : nt.title);
        }, [() => ({ "kaching-bundles__checkbox-upsells__checkbox--selected": e(m) })]), h(we, ze);
      }, $$slots: { default: !0 } });
      var Me = E($e, 2), Ae = (we) => {
        var ie = Yk(), ze = w(ie);
        {
          let Pe = d(() => ({ ...i(), variants: e(U) }));
          ma(ze, { get product() {
            return e(Pe);
          } });
        }
        var Ge = E(ze, 2), Qe = (Pe) => {
          var Ee = Te();
          Gt(_e(Ee), 17, () => ({ length: e(z) }), jr, (qe, et, yt) => {
            {
              let rt = d(() => ({ ...i(), variants: e(U) })), Vt = d(() => e(z) > 1 ? yt + 1 : void 0);
              Wn(qe, { get product() {
                return e(rt);
              }, get selectedVariantId() {
                return e(I)[yt];
              }, get number() {
                return e(Vt);
              }, onChange: (Et) => ae(yt, Et) });
            }
          }), h(Pe, Ee);
        }, Ce = (Pe) => {
          {
            let Ee = d(() => ({ ...i(), variants: e(U) }));
            Wn(Pe, { get product() {
              return e(Ee);
            }, get selectedVariantId() {
              return e(I)[0];
            }, onChange: (qe) => ae(0, qe) });
          }
        };
        F(Ge, (Pe) => {
          e(G) ? Pe(Qe) : Pe(Ce, !1);
        }), x(ie), h(we, ie);
      };
      F(Me, (we) => {
        e(V) && e(U).length > 1 && e(I).length > 0 && we(Ae);
      });
      var Be = E(Me, 2), Fe = (we) => {
        var ie = Kk();
        Ra(w(ie), { get sellingPlans() {
          return e(S);
        }, get selectedSellingPlan() {
          return e(B);
        }, onChange: (ze) => ee(A, ze.id, !0) }), x(ie), h(we, ie);
      };
      F(Be, (we) => {
        e(V) && e(S).length > 1 && e(B) && we(Fe);
      });
      var Le = E(Be, 2), K = (we) => {
        $l(we, { get value() {
          return e(z);
        }, min: 1, onChange: (ie) => ee(z, ie, !0) });
      };
      F(Le, (we) => {
        e(V) && l().quantitySelector && we(K);
      }), x(xe), h(L, Z);
    }, $$slots: { default: !0 } }), x(me), ke((L) => be = Wt(me, 1, "kaching-bundles__checkbox-upsells__upsell kaching-bundles__bar", null, be, L), [() => {
      var L;
      return { "kaching-bundles__bar--selected": e(m), "kaching-bundles__bar--disabled": r().preview && !((L = i()) != null && L.availableForSale) };
    }]), h(n, me);
    var Se = it(ce);
    return c(), Se;
  }
  Je(zg, { checkboxUpsell: {}, product: {}, dealBlock: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var tm = $('<div class="kaching-bundles__block-title"><!></div>'), nm = $('<div class="kaching-bundles__checkbox-upsells"><!> <div class="kaching-bundles__checkbox-upsells__upsells"></div></div>');
  function $g(n, t) {
    at(t, !0);
    const [r, a] = kt(), s = k(t, "checkboxUpsells", 7), o = k(t, "dealBlock", 7), c = k(t, "otherProducts", 7), l = k(t, "complementaryProducts", 7), i = k(t, "dealSellingPlan", 7), u = k(t, "dealBarQuantity", 7), g = k(t, "onChange", 7), v = yn(), p = Tt(), f = d(() => s().title ? Ve(p, "$translate", r)(s().title) : "");
    let b = Oe(ut({}));
    const y = d(() => l().map(Cr)), m = Math.floor(1e3 * Math.random()), z = d(() => s().upsells.flatMap((G, H) => {
      if (G.productSource === "complementary") {
        const ue = e(y)[(H + m) % (e(y).length || 1)];
        return ue ? { upsell: G, product: ue } : [];
      }
      const I = G.productGID ? c().find((ue) => ue.id === Ut(G.productGID)) : void 0;
      if (!Ve(v, "$config", r).preview && !(I != null && I.availableForSale)) return [];
      const T = I && Cr(I);
      return { upsell: G, product: T };
    }));
    var C = { get checkboxUpsells() {
      return s();
    }, set checkboxUpsells(G) {
      s(G), _();
    }, get dealBlock() {
      return o();
    }, set dealBlock(G) {
      o(G), _();
    }, get otherProducts() {
      return c();
    }, set otherProducts(G) {
      c(G), _();
    }, get complementaryProducts() {
      return l();
    }, set complementaryProducts(G) {
      l(G), _();
    }, get dealSellingPlan() {
      return i();
    }, set dealSellingPlan(G) {
      i(G), _();
    }, get dealBarQuantity() {
      return u();
    }, set dealBarQuantity(G) {
      u(G), _();
    }, get onChange() {
      return g();
    }, set onChange(G) {
      g(G), _();
    } }, A = nm(), O = w(A), V = (G) => {
      var H = tm();
      Ne(w(H), () => e(f)), x(H), h(G, H);
    };
    F(O, (G) => {
      e(f) && G(V);
    });
    var R = E(O, 2);
    Gt(R, 21, () => e(z), ({ upsell: G, product: H }) => G.id, (G, H) => {
      let I = () => e(H).upsell;
      zg(G, { get checkboxUpsell() {
        return I();
      }, get product() {
        return e(H).product;
      }, get dealBlock() {
        return o();
      }, get dealSellingPlan() {
        return i();
      }, get dealBarQuantity() {
        return u();
      }, onChange: (T) => (function(ue, re) {
        var P;
        re ? e(b)[ue] = re : delete e(b)[ue];
        const S = Object.entries(e(b)).flatMap(([j, D]) => D.variants.map(({ variant: se, quantity: te }) => ({ id: j, variant: se, product: D.product, quantity: te, sellingPlan: D.sellingPlan })));
        let B = 0, q = 0, Y = 0;
        const Q = /* @__PURE__ */ new Map();
        for (const j of Object.values(e(b))) {
          B += j.pricing.discountedPrice, q += j.pricing.fullPrice, Y += j.pricing.discountedPriceWithoutSellingPlan;
          for (const D of j.pricing.discountedPricesForSellingPlans) Q.set(D.sellingPlanId, ((P = Q.get(D.sellingPlanId)) != null ? P : 0) + D.discountedPrice);
        }
        const oe = Array.from(Q, ([j, D]) => ({ sellingPlanId: j, discountedPrice: D }));
        g()(S, { discountedPrice: B, fullPrice: q, discountedPriceWithoutSellingPlan: Y, discountedPricesForSellingPlans: oe });
      })(I().id, T) });
    }), x(R), x(A), h(n, A);
    var U = it(C);
    return a(), U;
  }
  Je($g, { checkboxUpsells: {}, dealBlock: {}, otherProducts: {}, complementaryProducts: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var rm = $('<div class="kaching-bundles__timer" role="timer"><div class="kaching-bundles__timer-title"><!></div></div>');
  function Dg(n, t) {
    at(t, !0);
    const [r, a] = kt(), s = k(t, "timer", 7), o = Tt(), c = d(() => ((V) => {
      const { textColor: R, backgroundColor: U, titleAlignment: G, titleStyle: H, titleSize: I } = V;
      return fn({ "kaching-bundles-timer-background-color": We(U), "kaching-bundles-timer-text-color": We(R), "kaching-bundles-timer-title-alignment": G, "kaching-bundles-timer-title-font-weight": H ? ur(H) : null, "kaching-bundles-timer-title-font-style": H ? dr(H) : null, "kaching-bundles-timer-title-size": I ? I + "px" : null });
    })(s()));
    function l() {
      const V = new Oo(), R = new Oo(V);
      return R.setHours(24, 0, 0, 0), Math.floor((R.getTime() - V.getTime()) / 1e3);
    }
    function i() {
      if (!s().endTimestamp) return 0;
      const V = new Oo();
      return Math.max(0, Math.floor((s().endTimestamp - V.getTime()) / 1e3));
    }
    function u() {
      return s().type === "midnight" ? l() : s().type === "custom" ? i() : 60 * s().minutes;
    }
    let g = Oe(ut(u())), v = d(() => s().type !== "custom" || e(g) > 0);
    tt(() => {
      ee(g, u(), !0);
    }), tt(() => {
      const V = window.setInterval(() => {
        s().type === "midnight" ? ee(g, l(), !0) : s().type === "custom" ? ee(g, i(), !0) : ee(g, e(g) <= 1 ? u() : e(g) - 1, !0);
      }, 1e3);
      return () => window.clearInterval(V);
    });
    const p = d(() => Ve(o, "$translate", r)(s().title)), f = d(() => (function(V) {
      const R = Math.floor(V / 86400), U = Math.floor(V % 86400 / 3600), G = Math.floor(V % 3600 / 60), H = V % 60, I = (T) => T.toString().padStart(2, "0");
      return s().type === "custom" && R > 0 ? `${Intl.NumberFormat(navigator.language, { style: "unit", unit: "day", unitDisplay: "narrow" }).format(R)} ${I(U)}:${I(G)}:${I(H)}` : U > 0 ? `${I(U)}:${I(G)}:${I(H)}` : `${I(G)}:${I(H)}`;
    })(e(g))), b = d(() => e(p).replace(/\{\{\s*\w+\s*\}\}/g, '<span class="kaching-bundles__timer-value" translate="no"></span>'));
    let y = Oe(void 0);
    tt(() => {
      !e(y) || !e(b) || e(y).querySelectorAll(".kaching-bundles__timer-value").forEach((V) => {
        V.textContent = ` ${e(f)} `;
      });
    });
    var m = { get timer() {
      return s();
    }, set timer(V) {
      s(V), _();
    } }, z = Te(), C = _e(z), A = (V) => {
      var R = rm(), U = w(R);
      Ne(w(U), () => e(b)), x(U), Ti(U, (G) => ee(y, G), () => e(y)), x(R), ke(() => Ft(R, e(c))), h(V, R);
    };
    F(C, (V) => {
      e(v) && V(A);
    }), h(n, z);
    var O = it(m);
    return a(), O;
  }
  function Tg(n, t) {
    at(t, !0);
    const r = k(t, "dealBlockId", 7), a = k(t, "shopCustomStyles", 7), s = k(t, "customStyles", 7), o = d(() => {
      const g = [a(), s()].filter((v) => v == null ? void 0 : v.trim()).join(`
`);
      return g ? `
      <style id="kaching-bundles-custom-styles-${r()}">
        kaching-bundles-block[deal-block-id="${r()}"] {
          ${g}
        }
      </style>
    ` : "";
    });
    var c = { get dealBlockId() {
      return r();
    }, set dealBlockId(g) {
      r(g), _();
    }, get shopCustomStyles() {
      return a();
    }, set shopCustomStyles(g) {
      a(g), _();
    }, get customStyles() {
      return s();
    }, set customStyles(g) {
      s(g), _();
    } }, l = Te(), i = _e(l), u = (g) => {
      var v = Te();
      Ne(_e(v), () => e(o)), h(g, v);
    };
    return F(i, (g) => {
      e(o) && g(u);
    }), h(n, l), it(c);
  }
  Je(Dg, { timer: {} }, [], [], !0), Je(Tg, { dealBlockId: {}, shopCustomStyles: {}, customStyles: {} }, [], [], !0);
  function am(n, t = 4) {
    const r = (function(a) {
      let s = 2166136261;
      for (let o = 0; o < a.length; o++) s ^= a.charCodeAt(o), s = Math.imul(s, 16777619) >>> 0;
      return s >>> 0;
    })(n);
    return (function(a, s) {
      let o = "";
      for (let c = 0; c < s; c++) o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[a % 62] + o, a = Math.floor(a / 62);
      return o;
    })(r, t);
  }
  function Vg(n) {
    var t, r, a, s, o, c, l;
    const { dealBlock: i, product: u, pageProductId: g = u.id, selectedDealBarId: v, selectedVariantQuantities: p, selectedBundleProducts: f, selectedCollectionBreaksProducts: b, selectedFreeGifts: y, selectedProgressiveGifts: m, selectedCheckboxUpsells: z, selectedUpsells: C, selectedPersonalisations: A, selectedSellingPlan: O, dealBarSellingPlan: V, nativeBundleProductIds: R } = n, U = V != null ? V : O, G = y.filter((L) => !L.applyOnlyForSubscriptions || U), H = m.filter((L) => !L.applyOnlyForSubscriptions || U), I = (function(L) {
      var pe;
      const { product: Z, selectedVariantQuantities: fe, selectedBundleProducts: xe, selectedCollectionBreaksProducts: $e, selectedFreeGifts: Me, selectedProgressiveGifts: Ae, selectedCheckboxUpsells: Be, selectedUpsells: Fe, selectedSellingPlan: Le, dealBarSellingPlan: K, selectedDealBarId: we, dealBlock: ie, bundleNonce: ze } = L, Ge = xe.length > 0 || $e.length > 0 || Me.length > 0 || Ae.length > 0 || Fe.length > 0, Qe = Me.length > 0 || Ae.length > 0 || Fe.length > 0, Ce = ((pe = ie.dealBars.find((qe) => qe.id === we)) == null ? void 0 : pe.dealBarType) === "mix-and-match", Pe = Qe || Ce, Ee = JSON.stringify([Ge ? fe.map(({ variant: qe, quantity: et }) => ({ variantId: qe.id, quantity: et })) : Z.id, xe.map(({ id: qe, variant: et, quantity: yt }) => ({ id: qe, variantId: et.id, quantity: yt })), $e.map(({ variant: qe, quantity: et }) => ({ variantId: qe.id, quantity: et })), Me.map(({ id: qe, variant: et, quantity: yt }) => ({ id: qe, variantId: et.id, quantity: yt })), Ae.map(({ id: qe, variants: et }) => et.map((yt) => ({ id: qe, variantId: yt.variant.id, quantity: yt.quantity })).flat()).flat(), Be.map(({ id: qe, variant: et }) => ({ id: qe, variantId: et.id })), Fe.map(({ id: qe, variant: et, quantity: yt }) => ({ id: qe, variantId: et.id, quantity: yt })), Le == null ? void 0 : Le.id, K == null ? void 0 : K.id, we, ...Pe ? [ze] : []]);
      return am(Ee);
    })({ ...n, selectedFreeGifts: G, selectedProgressiveGifts: H }), T = i.dealBars.find((L) => L.id === v);
    let ue = !1;
    T && (!T.dealBarType || T.dealBarType === gt.QuantityBreak || T.dealBarType === gt.Bxgy) && i.dealBars.filter((L) => !L.dealBarType || L.dealBarType === gt.QuantityBreak || L.dealBarType === gt.Bxgy).filter((L) => Ag(L) === Ag(T) && L.id !== v).length > 0 && (ue = !0);
    const re = (T == null ? void 0 : T.dealBarType) === gt.Bxgy, P = p.some(({ variant: L }) => L.sellingPlans.length > 0), S = re && (P || n.splitBxgy), B = i.dealBars.some((L) => (L.freeGifts || []).filter((pe) => pe.productGID).length > 0), q = !(!i.progressiveGiftsEnabled || !i.progressiveGifts) && i.progressiveGifts.gifts.some((L) => L.giftType === "product"), Y = i.dealBars.some((L) => (L.upsells || []).length > 0), Q = i.nanoId || i.id, oe = i.abTestVariantId, j = (t = i.abTestVariantLetter) != null ? t : i.abTestVariantNumber ? String.fromCharCode(64 + i.abTestVariantNumber) : void 0, D = (T == null ? void 0 : T.dealBarType) === gt.Sku || (T == null ? void 0 : T.dealBarType) === gt.Bundle || (T == null ? void 0 : T.dealBarType) === gt.MixAndMatch || ue || S, se = { deal: Q, pp: g, main: !0 };
    i.marketId && (se.market = i.marketId), i.versionId && (se.v = i.versionId), D ? (se.id = I, se.bar = v) : (re || G.length > 0 || H.length > 0 || z.length > 0 || C.length > 0 || b.length > 0 || A.length > 0 || B || q || Y) && (se.id = I), !se.bar && v && (se.bid = v), oe && (se.abid = oe), j && (se.ab = j);
    const te = !v && se.id === void 0, X = { id: I, deal: Q, bar: v };
    i.versionId && (X.v = i.versionId), oe && (X.abid = oe), j && (X.ab = j);
    const ne = (T == null ? void 0 : T.dealBarType) === gt.MixAndMatch ? T.bundleProducts.length : void 0, he = n.reverNonReturnable ? { rever_non_returnable: "true" } : {}, M = [];
    let W = p, de = [];
    if (S && b.length === 0) {
      const { buy: L, get: pe } = Gg(p, T.getQuantity);
      W = L, de = pe;
    }
    for (const { variant: L, quantity: pe } of W) {
      const Z = { ...se };
      ne && (Z.mixAndMatchItems = ne);
      const fe = ar(u, L, U);
      !(fe != null && fe.priceAdjustment) || T && !qg(T) || (Z.sellingPlan = { id: fe.id, priceAdjustment: fe.priceAdjustment });
      const xe = { id: L.id, quantity: pe, properties: te ? {} : { __kaching_bundles: JSON.stringify(Z) } };
      fe && (xe.selling_plan = fe.id), M.push(xe);
    }
    const ge = !n.disableNestedCartLines && W.length > 0 && !Ko(u, R) && (T == null ? void 0 : T.dealBarType) !== gt.MixAndMatch ? W[0].variant.id : void 0;
    for (const { variant: L, quantity: pe } of de) {
      const Z = { ...X, main: !0, bxgy: !0 }, fe = ar(u, L, U);
      fe != null && fe.priceAdjustment && (T == null ? void 0 : T.dealBarType) === gt.Bxgy && T.getDiscountType === "specific" && (Z.sellingPlan = { id: fe.id, priceAdjustment: fe.priceAdjustment });
      const xe = { id: L.id, quantity: pe, properties: { __kaching_bundles: JSON.stringify(Z), ...he } };
      Qi(xe, ge, u, R), fe && (xe.selling_plan = fe.id), M.push(xe);
    }
    for (const L of f) {
      const pe = { ...X, bundleProduct: L.id };
      ne && (pe.mixAndMatchItems = ne);
      const Z = ar(L.product, L.variant, U);
      Z != null && Z.priceAdjustment && (T == null ? void 0 : T.dealBarType) === gt.Bundle && ((r = T == null ? void 0 : T.bundleProducts.find((xe) => xe.id === L.id)) == null ? void 0 : r.discountType) === "specific" && (pe.sellingPlan = { id: Z.id, priceAdjustment: Z.priceAdjustment });
      const fe = { id: L.variant.id, quantity: L.quantity, properties: { __kaching_bundles: JSON.stringify(pe) } };
      Qi(fe, ge, L.product, R), Z && (fe.selling_plan = Z.id), M.push(fe);
    }
    let N = b, J = [];
    if (S && b.length > 0) {
      const { buy: L, get: pe } = Gg(b, T.getQuantity);
      N = L, J = pe;
    }
    const ae = ((a = i.collectionBreaks) == null ? void 0 : a.visibility) === "deal-products";
    for (const L of N) {
      if (ae) {
        const xe = M.find(($e) => $e.id === L.variant.id);
        if (xe) {
          xe.quantity += L.quantity;
          continue;
        }
      }
      const pe = { ...X, collectionBreaksProduct: !0 };
      D || delete pe.bar;
      const Z = ar(L.product, L.variant, U);
      Z != null && Z.priceAdjustment && T && qg(T) && (pe.sellingPlan = { id: Z.id, priceAdjustment: Z.priceAdjustment });
      const fe = { id: L.variant.id, quantity: L.quantity, properties: { __kaching_bundles: JSON.stringify(pe) } };
      Z && (fe.selling_plan = Z.id), M.push(fe);
    }
    for (const L of J) {
      const pe = { ...X, collectionBreaksProduct: !0 };
      D || delete pe.bar, pe.bxgy = !0;
      const Z = ar(L.product, L.variant, U);
      Z != null && Z.priceAdjustment && (T == null ? void 0 : T.dealBarType) === gt.Bxgy && T.getDiscountType === "specific" && (pe.sellingPlan = { id: Z.id, priceAdjustment: Z.priceAdjustment });
      const fe = { id: L.variant.id, quantity: L.quantity, properties: { __kaching_bundles: JSON.stringify(pe), ...he } };
      Z && (fe.selling_plan = Z.id), M.push(fe);
    }
    for (const L of G) {
      const pe = { ...X, gift: L.id };
      delete pe.bar;
      const Z = { id: L.variant.id, quantity: L.quantity, properties: { __kaching_bundles: JSON.stringify(pe), ...he } };
      Qi(Z, ge, L.product, R);
      const fe = ar(L.product, L.variant, U);
      fe && (Z.selling_plan = fe.id), M.push(Z);
    }
    for (const L of H) {
      const pe = { ...X, gift: L.id };
      delete pe.bar;
      for (const Z of L.variants) {
        const fe = { id: Z.variant.id, quantity: Z.quantity, properties: { __kaching_bundles: JSON.stringify(pe), ...he } };
        Qi(fe, ge, L.product, R);
        const xe = ar(L.product, Z.variant, U);
        xe && (fe.selling_plan = xe.id), M.push(fe);
      }
    }
    for (const L of z) {
      const pe = { ...X, checkboxUpsell: L.id };
      delete pe.bar;
      const Z = L.sellingPlan, fe = (s = i.checkboxUpsells) == null ? void 0 : s.upsells.find(($e) => $e.id === L.id);
      Z != null && Z.priceAdjustment && (fe == null ? void 0 : fe.discountType) === "specific" && (pe.sellingPlan = { id: Z.id, priceAdjustment: Z.priceAdjustment });
      const xe = { id: L.variant.id, quantity: L.quantity, properties: { __kaching_bundles: JSON.stringify(pe) } };
      Qi(xe, ge, L.product, R), Z && (xe.selling_plan = Z.id), M.push(xe);
    }
    for (const L of C) {
      const pe = { ...X, upsell: L.id };
      delete pe.bar;
      const Z = L.sellingPlan;
      Z != null && Z.priceAdjustment && ((c = (o = T == null ? void 0 : T.upsells) == null ? void 0 : o.find((xe) => xe.id === L.id)) == null ? void 0 : c.discountType) === "specific" && (pe.sellingPlan = { id: Z.id, priceAdjustment: Z.priceAdjustment });
      const fe = { id: L.variant.id, quantity: L.quantity, properties: { __kaching_bundles: JSON.stringify(pe) } };
      Qi(fe, ge, L.product, R), Z && (fe.selling_plan = Z.id), M.push(fe);
    }
    const ce = [];
    for (const { variant: L, quantity: pe } of W) for (let Z = 0; Z < pe; Z++) ce.push(L.id);
    for (const L of A) {
      const pe = { ...X, personalisation: L.id };
      delete pe.bar;
      const Z = { id: L.variantId, quantity: 1, properties: { __kaching_bundles: JSON.stringify(pe), [L.valueLabel]: L.text } }, fe = (l = L.parentVariantId) != null ? l : ce[L.productIndex];
      fe && !n.disableNestedCartLines && (Z.parent_id = fe), M.push(Z);
    }
    const me = M.filter((L) => !L.parent_id), be = M.filter((L) => L.parent_id), Se = [...me.reverse(), ...be];
    return !n.splitQuantityBreakItems || !T || T.dealBarType !== void 0 && T.dealBarType !== gt.QuantityBreak || be.length > 0 || [u, ...f.map((L) => L.product), ...b.map((L) => L.product), ...G.map((L) => L.product), ...H.map((L) => L.product), ...z.map((L) => L.product), ...C.map((L) => L.product)].some((L) => Ko(L, R)) ? Se : Se.flatMap((L, pe) => {
      if (!L.properties.__kaching_bundles) return [L];
      const Z = JSON.parse(L.properties.__kaching_bundles);
      return Array.from({ length: L.quantity }, (fe, xe) => ({ ...L, quantity: 1, properties: { ...L.properties, __kaching_bundles: JSON.stringify({ ...Z, line: `${n.bundleNonce}:${pe}:${xe}` }) } }));
    });
  }
  function Ko(n, t) {
    return t.includes(n.id) || n.isNativeBundle === !0;
  }
  function Qi(n, t, r, a) {
    t && t !== n.id && (Ko(r, a) || (n.parent_id = t));
  }
  function Ag(n) {
    switch (n.dealBarType) {
      case void 0:
      case gt.QuantityBreak:
        return Number(n.quantity);
      case gt.Bxgy:
        return Number(n.buyQuantity) + Number(n.getQuantity);
      case gt.Bundle:
        return n.bundleProducts[0].quantity;
      case gt.MixAndMatch:
      case gt.Sku:
        return 1;
    }
  }
  function qg(n) {
    switch (n.dealBarType) {
      case void 0:
      case gt.QuantityBreak:
        return n.discountType === "specific";
      case gt.Bundle:
        return n.bundleProducts[0].discountType === "specific";
      case gt.Bxgy:
        return n.buyDiscountType === "specific";
      case gt.MixAndMatch:
        return n.discountType === "specific";
      case gt.Sku:
        return !1;
    }
  }
  function Gg(n, t) {
    const r = [...n].sort((c, l) => c.variant.price - l.variant.price), a = [], s = [];
    let o = t;
    for (const c of r) {
      const l = Math.min(o, c.quantity), i = c.quantity - l;
      l > 0 && s.push({ ...c, quantity: l }), i > 0 && a.push({ ...c, quantity: i }), o -= l;
    }
    return { buy: a, get: s };
  }
  function im(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  var lm = $('<img class="kaching-bundles__bar-image" alt=""/>'), sm = $('<div class="kaching-bundles__bar-radio"></div>'), om = $('<span class="kaching-bundles__bar-title"><!></span>'), cm = $('<span class="kaching-bundles__bar-label"><!></span>'), um = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), dm = $('<div class="kaching-bundles__bar-full-price"><!></div>'), gm = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div></div>', 1), hm = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), pm = $('<div class="kaching-bundles__bar-variants"><!> <div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div></div>'), bm = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), fm = $('<div><input type="radio"/> <!> <!></div>');
  function Fg(n, t) {
    at(t, !0);
    const r = () => Ve(V, "$formatPrice", s), a = () => Ve(O, "$translate", s), [s, o] = kt();
    let c = k(t, "dealBlock", 7), l = k(t, "dealBar", 7), i = k(t, "otherProducts", 23, () => []), u = k(t, "complementaryProducts", 23, () => []), g = k(t, "selectedDealBarIndex", 7, null), v = k(t, "componentId", 7), p = k(t, "selected", 7, !1), f = k(t, "globalSellingPlan", 7, void 0), b = k(t, "onProgressiveGiftsChange", 7), y = k(t, "onDealBarSelect", 7), m = k(t, "onDealBarDeselect", 7), z = k(t, "onVariantsChange", 7), C = k(t, "onPersonalisationsChange", 7), A = k(t, "personalisationInitialValues", 23, () => []);
    const O = Tt(), V = vn(), R = Vn();
    let U = Oe(ut([])), G = Oe(ut([])), H = Oe(ut([])), I = !1;
    const T = d(() => l().productGID ? i().find((K) => K.id === Ut(l().productGID)) : void 0), ue = d(() => {
      var K;
      return (K = l().variantGIDs) != null && K.length ? l().variantGIDs.map(Ut) : null;
    }), re = d(() => e(T) ? e(ue) ? e(T).variants.filter((K) => e(ue).includes(K.id)) : e(T).variants : []), P = d(() => {
      return e(T) ? { ...e(T), variants: e(re), options: e(ue) ? (K = e(T).options, we = e(re), K.map((ie) => ({ ...ie, optionValues: ie.optionValues.filter((ze) => we.some((Ge) => Ge.options[ie.position - 1] === ze.name)) }))) : e(T).options } : void 0;
      var K, we;
    });
    let S = Oe(void 0);
    const B = d(() => (function(K, we) {
      var ie;
      return (ie = we.find((Ge) => Ge.id === K) || we[0]) == null ? void 0 : ie.id;
    })(e(S), e(re))), q = d(() => e(B) && e(T) ? e(T).variants.find((K) => K.id === e(B)) : void 0), Y = d(() => e(q) ? [{ variant: e(q), quantity: 1 }] : []);
    let Q = Oe(void 0);
    const oe = d(() => e(T) && e(q) ? Pl(e(T), [e(q)]) : []), j = d(() => {
      var K, we;
      return (l().sellingPlanEnabled || c().subscriptionsEnabled && ((K = c().subscriptions) == null ? void 0 : K.layout) === "link" && ((we = c().subscriptions) == null ? void 0 : we.subscribeByDefault)) && (!c().subscriptionsEnabled || !!f());
    }), D = d(() => e(j) ? Io(l(), e(oe), e(Q)) : void 0), se = d(() => {
      var K;
      return (K = e(D)) != null ? K : e(T) && e(q) ? ar(e(T), e(q), f()) : void 0;
    }), te = d(() => e(q) ? wl(e(q), e(se)) : 0), X = d(() => e(q) ? (function(K, we) {
      return K.useProductCompareAtPrice && we.compareAtPrice ? Math.max(we.price, we.compareAtPrice) : we.price;
    })(c(), e(q)) : 0), ne = d(() => Cl(e(X), e(U), e(G))), he = d(() => e(ne) > e(te)), M = d(() => _n({ priceFormatter: r(), product: e(T), dealBar: l(), totalFullPrice: e(X), totalCompareAtPrice: e(ne), totalDiscountedPrice: e(te), quantity: 1, unitQuantity: Ir(e(Y)), sellingPlan: e(se) })), W = d(() => e(M)(a()(l().title))), de = d(() => e(M)(a()(l().subtitle))), ge = d(() => e(M)(a()(l().label))), N = d(() => Sl(c(), l()).map((K) => Ea(K, a(), e(M)))), J = d(() => ja(e(N))), ae = d(() => `${l().id}_${v()}`), ce = d(() => Ve(R, "$getMediaImageUrl", s)(l().mediaImageGID) || Il), me = yn(), be = d(() => e(re).length > 1 && p()), Se = d(() => Ve(me, "$config", s).featureFlags.variant_images && new Set(e(re).map((K) => K.image).filter((K) => K)).size > 1), L = d(() => l().showAsSoldOutEnabled && l().showAsSoldOut ? zl(l().showAsSoldOut) : "");
    function pe(K) {
      p() && (K.preventDefault(), K.stopPropagation(), m()());
    }
    function Z(K) {
      ee(S, K, !0);
    }
    tt(() => {
      !p() || !e(q) && e(T) || (e(U), e(H), e(G), e(B), e(se), Xt(() => {
        I || (I = !0, y()({ dealBarId: l().id, preselected: !0 })), (function() {
          const K = e(te) + e(H).reduce((Ce, Pe) => Ce + Pe.discountedPrice, 0), we = e(U).reduce((Ce, Pe) => Pe.showPrice ? Ce + Pe.fullPrice : Ce, 0) + e(G).reduce((Ce, Pe) => Ce + Pe.fullPrice * Pe.quantity, 0), ie = e(X) + e(H).reduce((Ce, Pe) => Ce + Pe.fullPrice, 0) + we, ze = e(q) ? e(q).price : 0, Ge = e(q) ? e(q).sellingPlans.map((Ce) => ({ sellingPlanId: Ce.id, discountedPrice: Ce.price })) : [], Qe = { discountedPrice: K, fullPrice: ie, giftValue: we, discountedPricePerItem: e(te), fullPricePerItem: e(X), discountedPriceWithoutSellingPlan: ze, discountedPricesForSellingPlans: Ge };
          z()({ variants: e(Y), freeGifts: [...e(U), ...e(G)], upsells: e(H), dealBarSellingPlan: e(D), pricing: Qe, product: e(T) });
        })();
      }));
    });
    var fe = { get dealBlock() {
      return c();
    }, set dealBlock(K) {
      c(K), _();
    }, get dealBar() {
      return l();
    }, set dealBar(K) {
      l(K), _();
    }, get otherProducts() {
      return i();
    }, set otherProducts(K = []) {
      i(K), _();
    }, get complementaryProducts() {
      return u();
    }, set complementaryProducts(K = []) {
      u(K), _();
    }, get selectedDealBarIndex() {
      return g();
    }, set selectedDealBarIndex(K = null) {
      g(K), _();
    }, get componentId() {
      return v();
    }, set componentId(K) {
      v(K), _();
    }, get selected() {
      return p();
    }, set selected(K = !1) {
      p(K), _();
    }, get globalSellingPlan() {
      return f();
    }, set globalSellingPlan(K = void 0) {
      f(K), _();
    }, get onProgressiveGiftsChange() {
      return b();
    }, set onProgressiveGiftsChange(K) {
      b(K), _();
    }, get onDealBarSelect() {
      return y();
    }, set onDealBarSelect(K) {
      y(K), _();
    }, get onDealBarDeselect() {
      return m();
    }, set onDealBarDeselect(K) {
      m(K), _();
    }, get onVariantsChange() {
      return z();
    }, set onVariantsChange(K) {
      z(K), _();
    }, get onPersonalisationsChange() {
      return C();
    }, set onPersonalisationsChange(K) {
      C(K), _();
    }, get personalisationInitialValues() {
      return A();
    }, set personalisationInitialValues(K = []) {
      A(K), _();
    } }, xe = fm();
    let $e;
    var Me = w(xe);
    ka(Me), Me.__change = [im, y, l];
    var Ae = E(Me, 2);
    bi(Ae, { get for() {
      return e(ae);
    }, get soldOut() {
      return l().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(J);
    }, children: (K, we) => {
      var ie = bm(), ze = _e(ie);
      Gt(ze, 17, () => e(N), (Re) => Re.id, (Re, Ke) => {
        ya(Re, { get badge() {
          return e(Ke);
        }, get blockLayout() {
          return c().blockLayout;
        } });
      });
      var Ge = E(ze, 2), Qe = w(Ge);
      Yt(Qe, { element: "div", class: "kaching-bundles__bar-main", onclick: pe, children: (Re, Ke) => {
        var Xe = gm(), nt = _e(Xe), wt = (dt) => {
          var zt = lm();
          ke(() => Ie(zt, "src", e(ce))), h(dt, zt);
        }, mt = (dt) => {
          h(dt, sm());
        };
        F(nt, (dt) => {
          l().mediaImageGID ? dt(wt) : dt(mt, !1);
        });
        var Rt = E(nt, 2), ve = w(Rt), Ze = w(ve), ot = w(Ze);
        lt(ot, () => e(W), (dt) => {
          var zt = om();
          Ne(w(zt), () => e(W)), x(zt), h(dt, zt);
        });
        var ct = E(ot, 2), It = (dt) => {
          var zt = Te();
          lt(_e(zt), () => e(ge), (Ot) => {
            var ft = cm();
            Ne(w(ft), () => e(ge)), x(ft), h(Ot, ft);
          }), h(dt, zt);
        };
        F(ct, (dt) => {
          e(ge) && dt(It);
        }), x(Ze);
        var bt = E(Ze, 2), Pt = w(bt), St = (dt) => {
          var zt = Te();
          lt(_e(zt), () => e(de), (Ot) => {
            var ft = um();
            Ne(w(ft), () => e(de)), x(ft), h(Ot, ft);
          }), h(dt, zt);
        };
        F(Pt, (dt) => {
          e(de) && dt(St);
        });
        var Bt = E(Pt, 2), Mt = (dt) => {
          wa(dt, { get dealBlock() {
            return c();
          }, get variant() {
            return e(q);
          } });
        };
        F(Bt, (dt) => {
          e(be) || dt(Mt);
        }), x(bt), x(ve);
        var rn = E(ve, 2), Kt = w(rn);
        lt(Kt, () => e(te), (dt) => {
          oa(dt, { get amount() {
            return e(te);
          }, get showPricesPerItem() {
            return c().showPricesPerItem;
          }, get unitLabel() {
            return c().unitLabel;
          } });
        });
        var Ye = E(Kt, 2), ht = (dt) => {
          var zt = Te();
          lt(_e(zt), () => e(ne), (Ot) => {
            var ft = dm();
            Ne(w(ft), () => r()(e(ne))), x(ft), ke((en) => Ie(ft, "data-a11y-label", en), [() => a()("system.original_price")]), h(Ot, ft);
          }), h(dt, zt);
        };
        F(Ye, (dt) => {
          e(he) && dt(ht);
        }), x(rn), x(Rt), h(Re, Xe);
      }, $$slots: { default: !0 } });
      var Ce = E(Qe, 2), Pe = (Re) => {
        Na(Re, { get highlights() {
          return l().highlights;
        }, get isSelected() {
          return p();
        }, get replaceLiquid() {
          return e(M);
        } });
      };
      F(Ce, (Re) => {
        l().highlights && Re(Pe);
      });
      var Ee = E(Ce, 2), qe = (Re) => {
        var Ke = hm(), Xe = w(Ke);
        {
          let nt = d(() => e(D) || e(oe)[0]);
          Ra(Xe, { get sellingPlans() {
            return e(oe);
          }, get selectedSellingPlan() {
            return e(nt);
          }, onChange: (wt) => {
            ee(Q, wt, !0);
          } });
        }
        x(Ke), h(Re, Ke);
      };
      F(Ee, (Re) => {
        p() && e(j) && !l().sellingPlanGid && e(oe).length > 1 && Re(qe);
      });
      var et = E(Ee, 2), yt = (Re) => {
        var Ke = pm(), Xe = w(Ke);
        ma(Xe, { get product() {
          return e(P);
        } });
        var nt = E(Xe, 2), wt = w(nt);
        {
          let mt = d(() => e(B) || 0);
          Wn(wt, { get product() {
            return e(P);
          }, get selectedVariantId() {
            return e(mt);
          }, get showImage() {
            return e(Se);
          }, onChange: Z });
        }
        wa(E(wt, 2), { get dealBlock() {
          return c();
        }, get variant() {
          return e(q);
        } }), x(nt), x(Ke), h(Re, Ke);
      };
      F(et, (Re) => {
        e(be) && e(P) && Re(yt);
      });
      var rt = E(et, 2), Vt = (Re) => {
        {
          let Ke = d(() => [e(B)]);
          fi(Re, { get productPersonalisation() {
            return l().productPersonalisation;
          }, get product() {
            return e(T);
          }, get selectedVariantIds() {
            return e(Ke);
          }, quantity: 1, get addPersonalisationModal() {
            return c().addPersonalisationModal;
          }, get onPersonalisationsChange() {
            return C();
          }, get initialValues() {
            return A();
          } });
        }
      };
      F(rt, (Re) => {
        p() && l().productPersonalisation && e(T) && e(B) && (c().blockLayout === "vertical" || c().blockLayout === "plain") && Re(Vt);
      }), x(Ge);
      var Et = E(Ge, 2);
      {
        let Re = d(() => l().upsells || []);
        Ei(Et, { get dealBlock() {
          return c();
        }, get dealBarId() {
          return l().id;
        }, get upsells() {
          return e(Re);
        }, get otherProducts() {
          return i();
        }, get complementaryProducts() {
          return u();
        }, get dealBarSelected() {
          return p();
        }, get dealSellingPlan() {
          return e(se);
        }, onChange: (Ke) => {
          ee(H, Ke, !0);
        } });
      }
      var bn = E(Et, 2);
      Ni(bn, { get selectedDealBarIndex() {
        return g();
      }, get onChange() {
        return b();
      }, get dealBlock() {
        return c();
      }, get dealBar() {
        return l();
      }, get selected() {
        return p();
      }, get otherProducts() {
        return i();
      }, get sellingPlan() {
        return e(se);
      }, get progressiveGifts() {
        return c().progressiveGifts;
      } });
      var un = E(bn, 2);
      {
        let Re = d(() => l().freeGifts || []);
        Li(un, { get dealBlock() {
          return c();
        }, get freeGifts() {
          return e(Re);
        }, get freeGiftsSummary() {
          return l().freeGiftsSummary;
        }, get otherProducts() {
          return i();
        }, get dealBarSelected() {
          return p();
        }, get sellingPlan() {
          return e(se);
        }, onChange: (Ke) => {
          ee(U, Ke, !0);
        } });
      }
      var De = E(un, 2);
      {
        let Re = d(() => l().multipleGiftsSelectors || []);
        Ri(De, { get dealBlock() {
          return c();
        }, get multipleGiftsSelectors() {
          return e(Re);
        }, get sellingPlan() {
          return e(se);
        }, get otherProducts() {
          return i();
        }, onChange: (Ke) => {
          ee(G, Ke, !0);
        } });
      }
      h(K, ie);
    }, $$slots: { default: !0 } });
    var Be = E(Ae, 2), Fe = (K) => {
      ji(K, { get showAsSoldOut() {
        return l().showAsSoldOut;
      }, get replaceLiquid() {
        return e(M);
      } });
    };
    F(Be, (K) => {
      l().showAsSoldOutEnabled && l().showAsSoldOut && K(Fe);
    }), x(xe), ke((K) => {
      var we;
      $e = Wt(xe, 1, "kaching-bundles__bar", null, $e, K), Ie(xe, "data-deal-bar-id", l().id), Ft(xe, e(L)), Ie(Me, "name", `kaching-bundles-deal-${(we = v()) != null ? we : ""}`), oi(Me, l().id), Ie(Me, "id", e(ae)), _l(Me, p()), Me.disabled = l().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": p() })]), h(n, xe);
    var Le = it(fe);
    return o(), Le;
  }
  Fn(["change"]), Je(Fg, { dealBlock: {}, dealBar: {}, otherProducts: {}, complementaryProducts: {}, selectedDealBarIndex: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var vm = $('<div class="kaching-bundles__collection-breaks-alert"><svg class="kaching-bundles__collection-breaks-alert__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33325V7.99992M8.00065 10.6666H8.00732M14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div>');
  function Og(n, t) {
    at(t, !0);
    const r = () => Ve(u, "$config", a), [a, s] = kt();
    let o = k(t, "alertText", 7), c = k(t, "enabled", 7), l = k(t, "hasItemsToSelect", 7);
    const i = Tt(), u = yn(), g = pi(), v = d(() => r().preview && r().previewAlerts || Ve(g, "$requireSelectionError", a)), p = d(() => e(v) && c() && o() && l());
    var f = { get alertText() {
      return o();
    }, set alertText(C) {
      o(C), _();
    }, get enabled() {
      return c();
    }, set enabled(C) {
      c(C), _();
    }, get hasItemsToSelect() {
      return l();
    }, set hasItemsToSelect(C) {
      l(C), _();
    } }, b = Te(), y = _e(b), m = (C) => {
      var A = vm(), O = E(w(A));
      x(A), ke((V) => pt(O, ` ${V != null ? V : ""}`), [() => Ve(i, "$translate", a)(o())]), h(C, A);
    };
    F(y, (C) => {
      e(p) && o() && C(m);
    }), h(n, b);
    var z = it(f);
    return s(), z;
  }
  Je(Og, { alertText: {}, enabled: {}, hasItemsToSelect: {} }, [], [], !0);
  var _m = $('<span class="kaching-bundles-savings-summary__icon"><img alt=""/></span>'), km = $('<span class="kaching-bundles-savings-summary__icon"><!></span>'), mm = $('<div class="kaching-bundles-savings-summary"><!> <span class="kaching-bundles-savings-summary__title"><!></span></div>');
  function Lg(n, t) {
    at(t, !0);
    const [r, a] = kt(), s = k(t, "savingsSummary", 7), o = k(t, "totalFullPrice", 7), c = k(t, "totalDiscountedPrice", 7), l = k(t, "quantity", 7), i = k(t, "product", 7), u = vn(), g = Tt(), v = Vn(), p = d(() => ((I) => fn({ "kaching-bundles-savings-summary-background-color": We(I.backgroundColor), "kaching-bundles-savings-summary-text-color": We(I.textColor), "kaching-bundles-savings-summary-value-color": We(I.valueColor), "kaching-bundles-savings-summary-icon-color": We(I.iconColor), "kaching-bundles-savings-summary-border-color": We(I.borderColor), "kaching-bundles-savings-summary-alignment": { start: "flex-start", center: "center", end: "flex-end" }[I.titleAlignment], "kaching-bundles-savings-summary-border-width": I.borderWidth + "px", "kaching-bundles-savings-summary-border-radius": I.borderRadius + "px", "kaching-bundles-savings-summary-title-font-size": I.titleFont.size + "px", "kaching-bundles-savings-summary-title-font-style": dr(I.titleFont.style), "kaching-bundles-savings-summary-title-font-weight": ur(I.titleFont.style) }))(s())), f = d(() => s().iconType), b = d(() => og[e(f)]), y = d(() => e(f) === "custom" ? Ve(v, "$getMediaImageUrl", r)(s().customIconGID) : void 0), m = d(() => _n({ priceFormatter: Ve(u, "$formatPrice", r), product: i(), totalFullPrice: o(), totalDiscountedPrice: c(), quantity: l(), unitQuantity: null })), z = d(() => ((I) => I.replace(_d, '<span class="kaching-bundles-savings-summary__value">$&</span>'))(Ve(g, "$translate", r)(s().title))), C = d(() => e(m)(e(z)));
    var A = { get savingsSummary() {
      return s();
    }, set savingsSummary(I) {
      s(I), _();
    }, get totalFullPrice() {
      return o();
    }, set totalFullPrice(I) {
      o(I), _();
    }, get totalDiscountedPrice() {
      return c();
    }, set totalDiscountedPrice(I) {
      c(I), _();
    }, get quantity() {
      return l();
    }, set quantity(I) {
      l(I), _();
    }, get product() {
      return i();
    }, set product(I) {
      i(I), _();
    } }, O = mm(), V = w(O), R = (I) => {
      var T = _m(), ue = w(T);
      x(T), ke(() => Ie(ue, "src", e(y))), h(I, T);
    }, U = (I) => {
      var T = Te(), ue = _e(T), re = (P) => {
        var S = km();
        fu(w(S), () => e(b), (B, q) => {
          q(B, {});
        }), x(S), h(P, S);
      };
      F(ue, (P) => {
        e(b) && P(re);
      }, !0), h(I, T);
    };
    F(V, (I) => {
      e(f) === "custom" && e(y) ? I(R) : I(U, !1);
    });
    var G = E(V, 2);
    Ne(w(G), () => e(C)), x(G), x(O), ke(() => Ft(O, e(p))), h(n, O);
    var H = it(A);
    return a(), H;
  }
  Je(Lg, { savingsSummary: {}, totalFullPrice: {}, totalDiscountedPrice: {}, quantity: {}, product: {} }, [], [], !0);
  var xm = $('<div class="kaching-bundles__block-title"><!></div>'), ym = $("<!> <!>", 1), wm = $('<div class="kaching-bundles__out-of-stock"><!></div>'), Pm = $('<div class="kaching-bundles"><div><!> <!> <div><!> <!> <!> <!></div> <!> <!> <!> <!> <!> <!> <!></div></div> <!>', 1);
  function Eg(n, t) {
    var r, a, s, o, c, l;
    at(t, !0);
    const i = () => Ve(oe, "$formatPrice", v), u = () => Ve(D, "$translate", v), g = () => Ve(ne, "$reportedPersonalisationRule", v), [v, p] = kt();
    let f = k(t, "component", 7), b = k(t, "config", 7), y = k(t, "translations", 23, () => ({})), m = k(t, "dealBlock", 7), z = k(t, "product", 7), C = k(t, "currentVariantId", 7), A = k(t, "currentVariantSource", 7, void 0), O = k(t, "sellingPlanId", 15), V = k(t, "selectedDealBarId", 15), R = k(t, "quantity", 15), U = k(t, "mediaImages", 23, () => []), G = k(t, "otherProducts", 23, () => []), H = k(t, "collectionBreaksProducts", 23, () => []), I = k(t, "complementaryProducts", 23, () => []), T = k(t, "nativeBundleProductIds", 23, () => []), ue = k(t, "compact", 7, !1), re = k(t, "variantBadges", 23, () => []);
    const P = d(() => _r(m(), b().brandColors)), S = d(() => e(P).hideUnavailableOptions ? Cr(z()) : z()), B = d(() => e(P).hideUnavailableOptions ? G().map(Cr) : G()), q = d(() => e(P).hideUnavailableOptions ? I().map(Cr) : I()), Y = d(() => e(P).hideUnavailableOptions ? H().map(Cr) : H()), { setConfig: Q } = hi(b()), { formatPrice: oe, setMoneyFormat: j } = Fi(b().moneyFormat, (r = e(P)) == null ? void 0 : r.showPricesWithoutDecimals), { translate: D, setTranslations: se } = gi(y()), { setMediaImages: te } = yl(U()), X = ys(), { reportedRule: ne, failing: he } = xs(), { setVariantBadges: M } = Ud(re()), { setSwatchSettings: W } = kl({ swatchOptions: ((a = e(P)) == null ? void 0 : a.swatchOptions) || [], swatchSize: (s = e(P)) == null ? void 0 : s.swatchSize, swatchShape: (o = e(P)) == null ? void 0 : o.swatchShape, showSelectedSwatchName: (l = (c = e(P)) == null ? void 0 : c.showSelectedSwatchName) != null && l, pillStyle: la(e(P)) });
    let de = Oe(ut(Math.random()));
    function ge() {
      ee(de, Math.random(), !0);
    }
    function N() {
      const le = e(we).enabled && !e(we).satisfied;
      return { dealBlock: e(P), product: e(Pt), pageProductId: z().id, selectedDealBarId: V(), selectedVariantQuantities: e(be), selectedBundleProducts: e(Se), selectedCollectionBreaksProducts: e(L), selectedFreeGifts: e(pe), selectedProgressiveGifts: le ? [] : e(Kt), selectedCheckboxUpsells: le ? [] : e(fe), selectedUpsells: e(xe), selectedPersonalisations: le ? [] : e(Me), selectedSellingPlan: e(Bt), dealBarSellingPlan: e(Be), nativeBundleProductIds: T(), bundleNonce: e(de), splitBxgy: b().featureFlags.split_bxgy_items, disableNestedCartLines: b().featureFlags.disable_nested_cart_lines, reverNonReturnable: b().featureFlags.rever_non_returnable, splitQuantityBreakItems: b().featureFlags.split_quantity_break_items };
    }
    function J() {
      return Vg(N());
    }
    function ae() {
      const { requiresItemSelection: le, allItemsSelected: je, alertText: st } = e(nn);
      return le && !je ? (X.set(!0), { valid: !1, message: st ? u()(st) : null, rule: st === Vo ? "personalisation" : "selection" }) : (X.set(!1), { valid: !0, message: null });
    }
    Fa(() => {
      mr(f(), "kaching-bundles-block-loaded", { component: f() }, !1);
    }), tt(() => {
      Q(b());
    }), tt(() => {
      j(b().moneyFormat, !!e(P).showPricesWithoutDecimals);
    }), tt(() => {
      se(y());
    }), tt(() => {
      te(U());
    }), tt(() => {
      M(re());
    }), tt(() => {
      var le;
      W({ swatchOptions: e(P).swatchOptions || [], swatchSize: e(P).swatchSize, swatchShape: e(P).swatchShape, showSelectedSwatchName: (le = e(P).showSelectedSwatchName) != null && le, pillStyle: la(e(P)) });
    });
    let ce = 0;
    tt(() => {
      ce === 0 && T().length > 0 && bt({ pricing: e(ie) }), ce = T().length;
    });
    let me = Math.random().toString(16).slice(2), be = Oe(ut([])), Se = Oe(ut([])), L = Oe(ut([])), pe = Oe(ut([])), Z = Oe(ut([])), fe = Oe(ut([])), xe = Oe(ut([])), $e = Oe(ut([])), Me = Oe(ut([])), Ae = new Eo(), Be = Oe(void 0), Fe = Oe(ut({ discountedPrice: 0, fullPrice: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] })), Le = Oe(void 0), K = Oe(!1), we = Oe(ut(sa)), ie = Oe(ut({ discountedPrice: 0, fullPrice: 0, giftValue: 0, discountedPricePerItem: 0, fullPricePerItem: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] }));
    tt(() => {
      C() && !V() && (e(Bt), Xt(() => {
        (function() {
          ee(we, sa, !0);
          const le = z().variants.find((Ue) => Ue.id === C());
          if (!le) return;
          ee(be, [{ variant: le, quantity: 1 }], !0);
          let je = le.price;
          if (e(Bt)) {
            const Ue = le.sellingPlans.find((He) => He.id === e(Bt).id);
            Ue && (je = Ue.price);
          }
          const st = le.compareAtPrice && le.compareAtPrice > le.price ? le.compareAtPrice : le.price, qt = z().sellingPlans.map((Ue) => ({ sellingPlanId: Ue.id, discountedPrice: wl(le, Ue) }));
          ee(ie, { discountedPrice: je, fullPrice: st, giftValue: 0, discountedPricePerItem: je, fullPricePerItem: st, discountedPriceWithoutSellingPlan: le.price, discountedPricesForSellingPlans: qt }, !0), bt({ pricing: e(ie) });
        })();
      }));
    });
    let ze = d(() => td(e(P))), Ge = d(() => u()(e(P).blockTitle));
    const Qe = d(() => e(Nt) ? _n({ priceFormatter: i(), product: e(S), selectedVariants: e(be), totalFullPrice: e(ie).fullPrice, totalDiscountedPrice: e(ie).discountedPrice, quantity: R() || rt(e(Nt)), dealBar: e(Nt), legacySavedPercentage: b().featureFlags.legacy_saved_percentage || !1, unitQuantity: null, sellingPlan: e(Bt) }) : Vp), Ce = d(() => ((le) => wb(le, "block"))(e(P)).map((le) => Ea(le, u(), e(Qe)))), Pe = d(() => ja(e(Ce))), Ee = d(() => {
      var le;
      const je = e(Ce).find((st) => st.badgeType === "border" && (st.position === "left" || st.position === "right"));
      if ((le = je == null ? void 0 : je.colors) != null && le.background) return We({ ...je.colors.background, alpha: 0.15 });
    }), qe = e(P).preselectedDealBarId ? e(P).dealBars.find((le) => le.id === e(P).preselectedDealBarId) : void 0;
    qe != null && qe.hideBehindScratchOff && e(P).scratchOffEnabled && (b().preview ? b().previewScratchOff : z().availableForSale) || V(V() || e(P).preselectedDealBarId || void 0);
    const et = new Ld();
    function yt(le) {
      return !le.dealBarType || le.dealBarType === gt.QuantityBreak || le.dealBarType === gt.Bxgy;
    }
    function rt(le) {
      switch (le.dealBarType) {
        case void 0:
        case gt.QuantityBreak:
          return Number(le.quantity);
        case gt.Bxgy:
          return Number(le.buyQuantity) + Number(le.getQuantity);
        case gt.Bundle:
          return le.bundleProducts[0].quantity;
        case gt.MixAndMatch:
        case gt.Sku:
          return 1;
      }
    }
    function Vt(le) {
      var je, st;
      V() !== le && (V() && Ae.set(V(), e(Me)), ee(Me, (je = Ae.get(le)) != null ? je : [], !0), ((st = e(P).progressiveGifts) == null ? void 0 : st.layout) === "deal-bar" && ee(Z, [], !0)), V(le);
    }
    function Et(le) {
      const { dealBarId: je, dealBarQuantity: st, preselected: qt } = le;
      Vt(je), X.set(!1), ee(we, sa, !0), ne.set(sa), b().keepQuantityInput && st && R(st), mr(f(), "deal-bar-selected", { dealBarId: je, preselected: qt });
    }
    function bn(le) {
      const je = e(P).dealBars[le];
      je && Vt(je.id);
    }
    function un() {
      if (b().ignoreDeselect) return;
      const le = e(P).dealBars.find((je) => !(je.dealBarType && je.dealBarType !== gt.QuantityBreak || rt(je) !== 1 || (function(st) {
        return tn(st) && (!b().preview || !!b().previewScratchOff) && !et.has(st.id);
      })(je)));
      (le == null ? void 0 : le.id) !== V() && (V(void 0), ee(pe, [], !0), ee(Z, [], !0), ee(xe, [], !0), ee(Se, [], !0), ee(L, [], !0), ee($e, [], !0), ee(Me, [], !0), Ae.clear(), ee(Be, void 0), X.set(!1), ee(we, sa, !0), ne.set(sa), le ? Et({ dealBarId: le.id, dealBarQuantity: rt(le), preselected: !1 }) : mr(f(), "deal-bar-selected", { dealBarId: null, preselected: !1 }));
    }
    function De(le) {
      const { variantId: je } = le;
      mr(f(), "variant-selected", { variantId: je });
    }
    function Re(le) {
      const { bundleProducts: je, freeGifts: st, upsells: qt, pricing: Ue, validation: He } = le;
      ee(we, To(He, "system.select_variant_alert"), !0);
      const Zt = He.requiresItemSelection && !He.allItemsSelected, qn = je[0].variantSelectionPending ? [] : [{ variant: je[0].variant, quantity: je[0].quantity }];
      ee(be, qn, !0), ee(Se, je.slice(1).filter((kn) => !kn.variantSelectionPending), !0), ee(pe, Zt ? [] : st, !0), ee(xe, Zt ? [] : qt, !0), ee(L, [], !0), ee($e, [], !0), ee(Be, void 0), ee(Le, void 0), ee(ie, Ue, !0), ee(K, It(e(be)), !0), bt({ pricing: Ue });
    }
    function Ke(le) {
      var je, st;
      const { variants: qt, freeGifts: Ue, upsells: He, pricing: Zt, validation: qn } = le;
      ee(we, To(qn, ((st = (je = e(P).collectionBreaks) == null ? void 0 : je.requireItemSelectionAlert) == null ? void 0 : st.text) || null), !0), ee($e, le.personalisationItems, !0);
      const kn = [{ variant: qt[0].variant, quantity: qt[0].quantity }], Bn = qt.slice(1);
      ee(be, kn, !0), ee(pe, Ue, !0), ee(xe, He, !0), ee(Se, [], !0), ee(L, Bn, !0), ee(Be, le.dealBarSellingPlan, !0), ee(Le, void 0), ee(ie, Zt, !0), ee(K, It(e(be)), !0), bt({ pricing: Zt });
    }
    function Xe(le) {
      const { variants: je, freeGifts: st, upsells: qt, pricing: Ue, validation: He } = le;
      ee(we, To(He, "system.select_variant_alert"), !0);
      const Zt = He.requiresItemSelection && !He.allItemsSelected;
      ee(be, je, !0), ee(pe, Zt ? [] : st, !0), ee(xe, Zt ? [] : qt, !0), ee(Se, [], !0), ee(L, [], !0), ee($e, [], !0), ee(Be, le.dealBarSellingPlan, !0), ee(Le, void 0), ee(ie, Ue, !0), ee(K, It(e(be)), !0), bt({ pricing: Ue });
    }
    function nt(le) {
      var je;
      const { variants: st, freeGifts: qt, upsells: Ue, pricing: He, product: Zt } = le;
      ee(we, sa, !0), ee(be, st, !0), ee(pe, qt, !0), ee(xe, Ue, !0), ee(Se, [], !0), ee(L, [], !0), ee($e, [], !0), ee(Be, le.dealBarSellingPlan, !0), ((je = e(Le)) == null ? void 0 : je.id) !== (Zt == null ? void 0 : Zt.id) && ee(Le, Zt, !0), ee(ie, He, !0), ee(K, It(e(be)), !0), bt({ pricing: He });
    }
    function wt(le) {
      O(le == null ? void 0 : le.id);
    }
    tt(() => {
      R() && e(P) && Xt(() => {
        if (!V()) return;
        const le = e(P).dealBars.find((je) => je.id === V());
        le && yt(le) && rt(le) !== R() && (function(je, st) {
          if (!V()) return;
          const qt = je.dealBars.slice().sort((He, Zt) => rt(He) - rt(Zt));
          let Ue = qt[0];
          for (const He of qt) if (yt(He)) {
            if (rt(He) > st) break;
            Ue = He;
          }
          Ue.id !== V() && (Vt(Ue.id), mr(f(), "deal-bar-selected", { dealBarId: Ue.id, preselected: !1 }));
        })(e(P), R());
      });
    });
    let mt = Oe(void 0);
    function Rt() {
      if (!e(Ot) || e(St).length === 0) return;
      const le = e(St).find((je) => je.id === e(mt));
      wt(le != null ? le : e(St)[0]);
    }
    function ve(le) {
      ae().valid && (b().featureFlags.split_quantity_break_items && ge(), mr(f(), "add-to-cart-requested", { items: Vg({ ...N(), selectedSellingPlan: le, dealBarSellingPlan: void 0 }) }));
    }
    function Ze(le) {
      ee(Z, le, !0), bt({ pricing: e(ie) });
    }
    function ot(le, je) {
      ee(fe, le, !0), ee(Fe, je, !0), bt({ pricing: e(ie) });
    }
    function ct(le) {
      ee(Me, le, !0), bt({ pricing: e(ie) });
    }
    function It(le) {
      return le.some(({ variant: je, quantity: st }) => !!je && !!je.inventoryManagement && je.inventoryPolicy === "deny" && je.inventoryQuantity !== null && st > je.inventoryQuantity);
    }
    async function bt({ pricing: le }) {
      await ts();
      const je = e(be).map(({ variant: kn, quantity: Bn }) => ({ variantId: kn.id, quantity: Bn })), st = e(pe).map(({ id: kn, variant: Bn, quantity: Jt }) => ({ id: kn, variantId: Bn.id, quantity: Jt })), qt = e(xe).map(({ id: kn, variant: Bn, quantity: Jt }) => ({ id: kn, variantId: Bn.id, quantity: Jt })), Ue = e(Se).map(({ id: kn, variant: Bn, quantity: Jt }) => ({ id: kn, variantId: Bn.id, quantity: Jt })), He = le.discountedPrice + e(Fe).discountedPrice, Zt = le.fullPrice + e(Fe).fullPrice, qn = { discountedPrice: He, fullPrice: Zt, discountedPriceWithoutSellingPlan: le.discountedPriceWithoutSellingPlan + e(Fe).discountedPriceWithoutSellingPlan, discountedPricesForSellingPlans: le.discountedPricesForSellingPlans.map((kn) => {
        var Bn, Jt;
        const zn = (Jt = (Bn = e(Fe).discountedPricesForSellingPlans.find((Vr) => Vr.sellingPlanId === kn.sellingPlanId)) == null ? void 0 : Bn.discountedPrice) != null ? Jt : e(Fe).discountedPriceWithoutSellingPlan;
        return { sellingPlanId: kn.sellingPlanId, discountedPrice: kn.discountedPrice + zn };
      }) };
      V() && e(Nt) ? vi.set({ id: V(), dealBar: e(Nt), product: e(Pt), quantity: e(be).reduce((kn, { quantity: Bn }) => kn + Bn, 0), pricing: qn }) : vi.set({ id: null, dealBar: null, product: e(Pt), quantity: 1, pricing: qn }), mr(f(), "variants-changed", { variantIdQuantities: je, freeGifts: st, upsells: qt, bundleProducts: Ue, pricing: { discountedPrice: { amount: He, formatted: i()(He) }, fullPrice: { amount: Zt, formatted: i()(Zt) }, discountedPricePerItem: { amount: le.discountedPricePerItem, formatted: i()(le.discountedPricePerItem) }, fullPricePerItem: { amount: le.fullPricePerItem, formatted: i()(le.fullPricePerItem) } }, formattedPrice: i()(le.discountedPrice), validation: e(nn) }), mr(f(), "items-changed", {});
    }
    tt(() => {
      O() && ee(mt, O(), !0);
    });
    const Pt = d(() => e(Le) || z()), St = d(() => {
      const le = e(be).map(({ variant: je }) => je);
      return e(Pt).sellingPlans.filter((je) => le.some((st) => st.sellingPlans.some((qt) => qt.id === je.id)));
    }), Bt = d(() => e(St).find((le) => le.id === O())), Mt = d(() => O() ? e(Pt).sellingPlans.find((le) => le.id === O()) : void 0), rn = d(() => Mo(e(Be), e(Mt), e(St), e(Pt).requiresSellingPlan)), Kt = d(() => e(Z).map((le) => {
      var je, st;
      return { ...le, applyOnlyForSubscriptions: (st = (je = e(P).progressiveGifts) == null ? void 0 : je.gifts.find((qt) => qt.id === le.id)) == null ? void 0 : st.applyOnlyForSubscriptions };
    })), Ye = d(() => e(ie).giftValue + e(Kt).filter((le) => !le.applyOnlyForSubscriptions || !!e(rn)).reduce((le, je) => le + je.variants.reduce((st, { variant: qt, quantity: Ue }) => st + qt.price * Ue, 0), 0)), ht = d(() => {
      var le, je;
      return (je = (le = e(P).savingsSummary) == null ? void 0 : le.includeGiftValue) != null && je;
    }), dt = d(() => ((le, je, st, qt) => {
      const Ue = le.fullPrice - le.giftValue + je.fullPrice + (qt ? st : 0), He = le.discountedPrice + je.discountedPrice;
      return { fullPrice: Ue, discountedPrice: He, saved: Ue - He };
    })(e(ie), e(Fe), e(Ye), e(ht))), zt = d(() => {
      var le;
      return ((je, st) => je + st.reduce((qt, { quantity: Ue }) => qt + Ue, 0))(((le = Ve(vi, "$selectedDealBarStore", v)) == null ? void 0 : le.quantity) || 1, e(fe));
    });
    let Ot = d(() => e(P).subscriptionsEnabled && e(P).subscriptions && (e(St).length > 0 || b().preview));
    const ft = d(() => {
      if (!e(P).progressiveGifts || e(St).length > 0) return e(P);
      const le = e(P).progressiveGifts.gifts.filter((je) => !je.applyOnlyForSubscriptions);
      return le.length === e(P).progressiveGifts.gifts.length ? e(P) : { ...e(P), progressiveGifts: { ...e(P).progressiveGifts, gifts: le } };
    });
    let en = d(() => {
      var le, je;
      return e(Ot) && ((le = e(P).subscriptions) == null ? void 0 : le.showPrices) && ((je = e(P).subscriptions) == null ? void 0 : je.hideDealBarPrices);
    }), xn = d(() => V() ? e(P).dealBars.findIndex((le) => le.id === V()) : null);
    const vt = d(() => e(P).scratchOffEnabled ? e(P).scratchOff : null), Ht = d(() => (e(P).blockLayout === "vertical" || e(P).blockLayout === "plain") && (b().preview || z().availableForSale));
    function tn(le) {
      return !!(e(vt) && e(Ht) && le.hideBehindScratchOff);
    }
    const Dn = d(() => e(P).dealBars.reduce((le, je) => {
      const st = tn(je), qt = le[le.length - 1];
      return st && (qt == null ? void 0 : qt.type) === "scratch" ? qt.bars.push(je) : st ? le.push({ type: "scratch", key: je.id, bars: [je] }) : le.push({ type: "visible", key: je.id, bar: je }), le;
    }, [])), ir = d(() => [...e(be), ...e(L)].reduce((le, { quantity: je }) => le + je, 0) || 1), Nt = d(() => V() ? e(P).dealBars.find((le) => le.id === V()) : void 0), lr = d(() => {
      var le, je;
      return !!((le = e(Nt)) != null && le.sellingPlanEnabled) && !!((je = e(Nt)) != null && je.sellingPlanGid);
    }), On = d(() => {
      var le;
      return ((le = e(Nt)) == null ? void 0 : le.productPersonalisation) && (e(P).blockLayout === "horizontal" || e(P).blockLayout === "grid");
    }), Un = d(() => !(!e(P).collectionBreaksEnabled || !e(P).collectionBreaks || !e(Nt) || e(Nt).dealBarType && e(Nt).dealBarType !== gt.QuantityBreak && e(Nt).dealBarType !== gt.Bxgy)), Ln = d(() => e(Un) ? e($e) : void 0), At = d(() => e(Ln) ? e(Ln).length : e(Nt) ? e(Nt).dealBarType === void 0 || e(Nt).dealBarType === gt.QuantityBreak ? R() || Number(e(Nt).quantity) || 1 : e(Nt).dealBarType === gt.Bxgy ? R() || e(Nt).buyQuantity + e(Nt).getQuantity : e(Nt).dealBarType === gt.Bundle ? 1 : R() || 1 : R() || 1), an = d(() => {
      var le, je, st;
      return g().enabled ? g() : Sd({ required: (st = (je = (le = e(Nt)) == null ? void 0 : le.productPersonalisation) == null ? void 0 : je.required) != null && st, itemCount: e(At), filledCount: 0 });
    }), nn = d(() => (function(le) {
      const je = le.find((st) => st.enabled && !st.satisfied);
      return je ? { requiresItemSelection: !0, allItemsSelected: !1, missingItemsCount: je.missingCount, alertText: je.alertText } : { requiresItemSelection: le.some((st) => st.enabled), allItemsSelected: !0, missingItemsCount: 0, alertText: null };
    })([e(we), e(an)]));
    tt(() => {
      he.set(!e(nn).allItemsSelected && e(nn).alertText === Vo);
    });
    const gn = d(() => e(be).flatMap(({ variant: le, quantity: je }) => Array(je).fill(le.id))), Pn = d(() => {
      if (e(Me).length === 0) return [];
      const le = e(Me).reduce((qt, Ue) => Math.max(qt, Ue.productIndex), -1), je = e(Ln) ? Math.min(le + 1, e(Ln).length) : le + 1, st = Array.from({ length: je }, () => "");
      for (const qt of e(Me)) qt.productIndex < je && (st[qt.productIndex] = qt.text);
      return st;
    });
    var Sn = { rotateBundleNonce: ge, selectedVariants: function() {
      return J().map((le) => ({ variantId: le.id, quantity: le.quantity, properties: le.properties }));
    }, items: J, pricing: function() {
      const le = e(ie).discountedPrice + e(Fe).discountedPrice, je = e(ie).fullPrice + e(Fe).fullPrice;
      return { discountedPrice: { amount: le / 100, formatted: i()(le) }, fullPrice: { amount: je / 100, formatted: i()(je) }, discountedPricePerItem: { amount: e(ie).discountedPricePerItem / 100, formatted: i()(e(ie).discountedPricePerItem) }, fullPricePerItem: { amount: e(ie).fullPricePerItem / 100, formatted: i()(e(ie).fullPricePerItem) }, discountedPriceWithoutSellingPlan: { amount: (e(ie).discountedPriceWithoutSellingPlan + e(Fe).discountedPriceWithoutSellingPlan) / 100, formatted: i()(e(ie).discountedPriceWithoutSellingPlan + e(Fe).discountedPriceWithoutSellingPlan) }, discountedPricesForSellingPlans: e(ie).discountedPricesForSellingPlans.map((st) => {
        var qt, Ue;
        const He = (Ue = (qt = e(Fe).discountedPricesForSellingPlans.find((qn) => qn.sellingPlanId === st.sellingPlanId)) == null ? void 0 : qt.discountedPrice) != null ? Ue : e(Fe).discountedPriceWithoutSellingPlan, Zt = st.discountedPrice + He;
        return { sellingPlanId: st.sellingPlanId, amount: Zt / 100, formatted: i()(Zt) };
      }) };
    }, deal: function() {
      return { subscriptionsEnabled: e(P).subscriptionsEnabled || e(P).dealBars.some((le) => le.sellingPlanEnabled) };
    }, isItemSelectionValid: function() {
      const { requiresItemSelection: le, allItemsSelected: je } = e(nn);
      return !le || je;
    }, validateItemSelection: ae, get component() {
      return f();
    }, set component(le) {
      f(le), _();
    }, get config() {
      return b();
    }, set config(le) {
      b(le), _();
    }, get translations() {
      return y();
    }, set translations(le = {}) {
      y(le), _();
    }, get dealBlock() {
      return m();
    }, set dealBlock(le) {
      m(le), _();
    }, get product() {
      return z();
    }, set product(le) {
      z(le), _();
    }, get currentVariantId() {
      return C();
    }, set currentVariantId(le) {
      C(le), _();
    }, get currentVariantSource() {
      return A();
    }, set currentVariantSource(le = void 0) {
      A(le), _();
    }, get sellingPlanId() {
      return O();
    }, set sellingPlanId(le) {
      O(le), _();
    }, get selectedDealBarId() {
      return V();
    }, set selectedDealBarId(le) {
      V(le), _();
    }, get quantity() {
      return R();
    }, set quantity(le) {
      R(le), _();
    }, get mediaImages() {
      return U();
    }, set mediaImages(le = []) {
      U(le), _();
    }, get otherProducts() {
      return G();
    }, set otherProducts(le = []) {
      G(le), _();
    }, get collectionBreaksProducts() {
      return H();
    }, set collectionBreaksProducts(le = []) {
      H(le), _();
    }, get complementaryProducts() {
      return I();
    }, set complementaryProducts(le = []) {
      I(le), _();
    }, get nativeBundleProductIds() {
      return T();
    }, set nativeBundleProductIds(le = []) {
      T(le), _();
    }, get compact() {
      return ue();
    }, set compact(le = !1) {
      ue(le), _();
    }, get variantBadges() {
      return re();
    }, set variantBadges(le = []) {
      re(le), _();
    } }, In = Pm(), Hn = _e(In), ln = w(Hn);
    let An;
    {
      const le = (Ue, He) => {
        let Zt = Jl(() => (function(Jt, zn, Vr = !1) {
          return Jt === void 0 ? Vr ? zn() : zn : Jt;
        })(He == null ? void 0 : He(), !1));
        var qn = Te(), kn = _e(qn), Bn = (Jt) => {
          Bg(Jt, { get subscriptions() {
            return e(P).subscriptions;
          }, get sellingPlans() {
            return e(St);
          }, get selectedSellingPlan() {
            return e(Bt);
          }, get hideSellingPlanSelector() {
            return e(lr);
          }, get hideTitle() {
            return e(Zt);
          }, onChange: wt, onRequestAddToCart: ve });
        };
        F(kn, (Jt) => {
          e(P).subscriptions && Jt(Bn);
        }), h(Ue, qn);
      }, je = (Ue, He = Jr) => {
        var Zt = Te(), qn = _e(Zt), kn = (Jt) => {
          {
            let zn = d(() => He().id === V()), Vr = d(() => He().id === V() ? e(Pn) : []);
            _g(Jt, { get selectedDealBarIndex() {
              return e(xn);
            }, get dealBlock() {
              return e(ft);
            }, get dealBar() {
              return He();
            }, get product() {
              return e(S);
            }, get otherProducts() {
              return e(B);
            }, get complementaryProducts() {
              return e(q);
            }, get selected() {
              return e(zn);
            }, get currentVariantId() {
              return C();
            }, get componentId() {
              return me;
            }, get sellingPlan() {
              return e(Mt);
            }, onProgressiveGiftsChange: Ze, onDealBarSelect: Et, onDealBarDeselect: un, onVariantSelect: De, onVariantsChange: Re, onPersonalisationsChange: ct, get personalisationInitialValues() {
              return e(Vr);
            } });
          }
        }, Bn = (Jt) => {
          var zn = Te(), Vr = _e(zn), Wi = (Qa) => {
            {
              let Is = d(() => He().id === V()), ec = d(() => He().id === V() ? e(Pn) : []);
              gg(Qa, { get selectedDealBarIndex() {
                return e(xn);
              }, get dealBlock() {
                return e(ft);
              }, get dealBar() {
                return He();
              }, get product() {
                return e(S);
              }, get otherProducts() {
                return e(B);
              }, get complementaryProducts() {
                return e(q);
              }, get selected() {
                return e(Is);
              }, get currentVariantId() {
                return C();
              }, get componentId() {
                return me;
              }, get sellingPlan() {
                return e(Mt);
              }, onProgressiveGiftsChange: Ze, onDealBarSelect: Et, onDealBarDeselect: un, onVariantSelect: De, onVariantsChange: Re, onPersonalisationsChange: ct, get personalisationInitialValues() {
                return e(ec);
              } });
            }
          }, Pa = (Qa) => {
            var Is = Te(), ec = _e(Is), Jm = (Ui) => {
              {
                let Ms = d(() => He().id === V()), tc = d(() => He().id === V() ? e(Pn) : []);
                Fg(Ui, { get dealBlock() {
                  return e(ft);
                }, get dealBar() {
                  return He();
                }, get selectedDealBarIndex() {
                  return e(xn);
                }, get otherProducts() {
                  return e(B);
                }, get complementaryProducts() {
                  return e(q);
                }, get componentId() {
                  return me;
                }, get selected() {
                  return e(Ms);
                }, get globalSellingPlan() {
                  return e(Mt);
                }, onProgressiveGiftsChange: Ze, onDealBarSelect: Et, onDealBarDeselect: un, onVariantsChange: nt, onPersonalisationsChange: ct, get personalisationInitialValues() {
                  return e(tc);
                } });
              }
            }, Ym = (Ui) => {
              var Ms = Te(), tc = _e(Ms), Km = (Hi) => {
                {
                  let nc = d(() => He().id === V() ? R() && Number(R()) : void 0), rc = d(() => He().id === V()), ac = d(() => He().id === V() ? e(Pn) : []);
                  mg(Hi, { get dealBlock() {
                    return e(ft);
                  }, get dealBar() {
                    return He();
                  }, get selectedDealBarIndex() {
                    return e(xn);
                  }, get product() {
                    return e(S);
                  }, get collectionBreaksProducts() {
                    return e(Y);
                  }, get otherProducts() {
                    return e(B);
                  }, get complementaryProducts() {
                    return e(q);
                  }, get customQuantity() {
                    return e(nc);
                  }, get selected() {
                    return e(rc);
                  }, onProgressiveGiftsChange: Ze, get currentVariantId() {
                    return C();
                  }, get componentId() {
                    return me;
                  }, get globalSellingPlan() {
                    return e(Mt);
                  }, onDealBarSelect: Et, onDealBarDeselect: un, onVariantSelect: De, onVariantsChange: Ke, onPersonalisationsChange: ct, get personalisationInitialValues() {
                    return e(ac);
                  } });
                }
              }, Xm = (Hi) => {
                {
                  let nc = d(() => He().id === V() ? R() && Number(R()) : void 0), rc = d(() => He().id === V()), ac = d(() => He().id === V() ? e(Pn) : []);
                  No(Hi, { get selectedDealBarIndex() {
                    return e(xn);
                  }, get dealBlock() {
                    return e(ft);
                  }, get dealBar() {
                    return He();
                  }, get product() {
                    return e(S);
                  }, get otherProducts() {
                    return e(B);
                  }, get complementaryProducts() {
                    return e(q);
                  }, get customQuantity() {
                    return e(nc);
                  }, get selected() {
                    return e(rc);
                  }, get currentVariantId() {
                    return C();
                  }, get currentVariantSource() {
                    return A();
                  }, get componentId() {
                    return me;
                  }, get globalSellingPlan() {
                    return e(Mt);
                  }, onProgressiveGiftsChange: Ze, onDealBarSelect: Et, onDealBarDeselect: un, onVariantSelect: De, onVariantsChange: Xe, onPersonalisationsChange: ct, get personalisationInitialValues() {
                    return e(ac);
                  } });
                }
              };
              F(tc, (Hi) => {
                !e(P).collectionBreaksEnabled || !e(P).collectionBreaks || He().dealBarType && He().dealBarType !== gt.QuantityBreak && He().dealBarType !== gt.Bxgy ? Hi(Xm, !1) : Hi(Km);
              }, !0), h(Ui, Ms);
            };
            F(ec, (Ui) => {
              He().dealBarType === gt.Sku ? Ui(Jm) : Ui(Ym, !1);
            }, !0), h(Qa, Is);
          };
          F(Vr, (Qa) => {
            He().dealBarType === gt.Bundle ? Qa(Wi) : Qa(Pa, !1);
          }, !0), h(Jt, zn);
        };
        F(qn, (Jt) => {
          He().dealBarType === gt.MixAndMatch ? Jt(kn) : Jt(Bn, !1);
        }), h(Ue, Zt);
      };
      var Mr = w(ln), $t = (Ue) => {
        var He = ym(), Zt = _e(He), qn = (Jt) => {
          var zn = xm();
          Ne(w(zn), () => e(Ge)), x(zn), h(Jt, zn);
        };
        F(Zt, (Jt) => {
          e(Ge) && Jt(qn);
        });
        var kn = E(Zt, 2), Bn = (Jt) => {
          Dg(Jt, { get timer() {
            return e(P).timer;
          } });
        };
        F(kn, (Jt) => {
          e(P).timerEnabled && e(P).timer && Jt(Bn);
        }), h(Ue, He);
      };
      F(Mr, (Ue) => {
        ue() || Ue($t);
      });
      var sn = E(Mr, 2), wn = (Ue) => {
        le(Ue);
      };
      F(sn, (Ue) => {
        var He;
        e(Ot) && ((He = e(P).subscriptions) == null ? void 0 : He.position) === "above" && e(Pe).positions.size === 0 && Ue(wn);
      });
      var on = E(sn, 2);
      let st, qt;
      var zr = w(on);
      Gt(zr, 17, () => e(Ce), (Ue) => Ue.id, (Ue, He) => {
        ya(Ue, { get badge() {
          return e(He);
        }, get blockLayout() {
          return e(P).blockLayout;
        } });
      });
      var Zn = E(zr, 2), Wr = (Ue) => {
        {
          let He = d(() => e(Pe).positions.has("all"));
          le(Ue, () => e(He));
        }
      };
      F(Zn, (Ue) => {
        var He;
        e(Ot) && ((He = e(P).subscriptions) == null ? void 0 : He.position) === "above" && e(Pe).positions.size > 0 && Ue(Wr);
      });
      var Ur = E(Zn, 2);
      Gt(Ur, 17, () => e(Dn), (Ue) => Ue.key, (Ue, He) => {
        var Zt = Te(), qn = _e(Zt), kn = (Jt) => {
          yg(Jt, { get settings() {
            return e(vt);
          }, onReveal: () => (function(zn) {
            for (const Vr of zn) et.add(Vr.id);
            !V() && qe && zn.includes(qe) && Et({ dealBarId: qe.id, dealBarQuantity: rt(qe), preselected: !0 });
          })(e(He).bars), children: (zn, Vr) => {
            var Wi = Te();
            Gt(_e(Wi), 17, () => e(He).bars, (Pa) => Pa.id, (Pa, Qa) => {
              je(Pa, () => e(Qa));
            }), h(zn, Wi);
          }, $$slots: { default: !0 } });
        }, Bn = (Jt) => {
          var zn = Te(), Vr = _e(zn), Wi = (Pa) => {
            je(Pa, () => e(He).bar);
          };
          F(Vr, (Pa) => {
            e(He).type === "visible" && Pa(Wi);
          }, !0), h(Jt, zn);
        };
        F(qn, (Jt) => {
          e(He).type === "scratch" && e(vt) ? Jt(kn) : Jt(Bn, !1);
        }), h(Ue, Zt);
      });
      var Jn = E(Ur, 2), $r = (Ue) => {
        {
          let He = d(() => e(Pe).positions.has("all"));
          le(Ue, () => e(He));
        }
      };
      F(Jn, (Ue) => {
        var He;
        e(Ot) && ((He = e(P).subscriptions) == null ? void 0 : He.position) === "below" && e(Pe).positions.size > 0 && Ue($r);
      }), x(on);
      var sr = E(on, 2), Yn = (Ue) => {
        fi(Ue, { get product() {
          return e(Pt);
        }, get productPersonalisation() {
          return e(Nt).productPersonalisation;
        }, get selectedVariantIds() {
          return e(gn);
        }, get personalisationItems() {
          return e(Ln);
        }, get quantity() {
          return e(At);
        }, get addPersonalisationModal() {
          return e(P).addPersonalisationModal;
        }, onPersonalisationsChange: ct, get initialValues() {
          return e(Pn);
        } });
      };
      F(sr, (Ue) => {
        var He;
        e(On) && ((He = e(Nt)) != null && He.productPersonalisation) && Ue(Yn);
      });
      var Kn = E(sr, 2), Mn = (Ue) => {
        le(Ue);
      };
      F(Kn, (Ue) => {
        var He;
        e(Ot) && ((He = e(P).subscriptions) == null ? void 0 : He.position) === "below" && e(Pe).positions.size === 0 && Ue(Mn);
      });
      var Nn = E(Kn, 2), Dr = (Ue) => {
        var He = wm();
        Ne(w(He), () => u()("system.out_of_stock")), x(He), h(Ue, He);
      };
      F(Nn, (Ue) => {
        e(K) && (e(be).length > 1 || e(be)[0].quantity > 1) && Ue(Dr);
      });
      var Tr = E(Nn, 2), Xo = (Ue) => {
        $g(Ue, { get checkboxUpsells() {
          return e(P).checkboxUpsells;
        }, get dealBlock() {
          return e(P);
        }, get otherProducts() {
          return e(B);
        }, get complementaryProducts() {
          return e(q);
        }, get dealSellingPlan() {
          return e(rn);
        }, get dealBarQuantity() {
          return e(ir);
        }, onChange: ot });
      };
      F(Tr, (Ue) => {
        !ue() && e(P).checkboxUpsellsEnabled && e(P).checkboxUpsells && Ue(Xo);
      });
      var Qg = E(Tr, 2), Nm = (Ue) => {
        Mg(Ue, { get progressiveGifts() {
          return e(ft).progressiveGifts;
        }, get dealBlock() {
          return e(P);
        }, get otherProducts() {
          return e(B);
        }, get selectedDealBarIndex() {
          return e(xn);
        }, get sellingPlan() {
          return e(rn);
        }, onChange: Ze, onUnlock: bn, onSubscribe: Rt });
      };
      F(Qg, (Ue) => {
        e(P).progressiveGiftsEnabled && e(ft).progressiveGifts && e(ft).progressiveGifts.layout !== "deal-bar" && Ue(Nm);
      });
      var Wg = E(Qg, 2);
      {
        let Ue = d(() => e(nn).missingItemsCount > 0);
        Og(Wg, { get alertText() {
          return e(nn).alertText;
        }, get enabled() {
          return e(nn).requiresItemSelection;
        }, get hasItemsToSelect() {
          return e(Ue);
        } });
      }
      var Qm = E(Wg, 2), Wm = (Ue) => {
        Lg(Ue, { get savingsSummary() {
          return e(P).savingsSummary;
        }, get totalFullPrice() {
          return e(dt).fullPrice;
        }, get totalDiscountedPrice() {
          return e(dt).discountedPrice;
        }, get quantity() {
          return e(zt);
        }, get product() {
          return e(Pt);
        } });
      };
      F(Qm, (Ue) => {
        var He, Zt;
        !ue() && e(P).savingsSummaryEnabled && e(P).savingsSummary && (He = e(dt).saved, Zt = e(P).savingsSummary.hideWhenZeroSavings, He > 0 || !Zt) && Ue(Wm);
      }), x(ln), ke((Ue, He, Zt, qn) => {
        st = Wt(on, 1, "kaching-bundles__bars", null, st, Zt), qt = Ft(on, "", qt, qn);
      }, [() => ({ "kaching-bundles__block--horizontal": e(P).blockLayout === "horizontal", "kaching-bundles__block--grid": e(P).blockLayout === "grid", "kaching-bundles__block--plain": e(P).blockLayout === "plain" }), () => {
        var Ue;
        return (Ue = e(P).abTestVariantLetter) != null ? Ue : e(P).abTestVariantNumber ? String.fromCharCode(64 + e(P).abTestVariantNumber) : void 0;
      }, () => ({ "kaching-bundles__bars--horizontal": e(P).blockLayout === "horizontal", "kaching-bundles__bars--grid": e(P).blockLayout === "grid", "kaching-bundles__bars--plain": e(P).blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(en), "kaching-bundles__bars--badge-border-all": e(Pe).positions.has("all"), "kaching-bundles__bars--badge-border-top": e(Pe).positions.has("top"), "kaching-bundles__bars--badge-border-bottom": e(Pe).positions.has("bottom"), "kaching-bundles__bars--badge-border-left": e(Pe).positions.has("left"), "kaching-bundles__bars--badge-border-right": e(Pe).positions.has("right") }), () => {
        var Ue, He;
        return { "--badge-border-thickness": `${(Ue = e(Pe).thickness) != null ? Ue : ""}px`, "--badge-border-gap": `${(He = e(Pe).gap) != null ? He : ""}px`, "--badge-border-gap-border": e(Pe).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(Pe).sideLength ? `${e(Pe).sideLength}px` : void 0, "--badge-border-wrap-color": e(Ee) };
      }]);
    }
    x(Hn);
    var Um = E(Hn, 2), Hm = (le) => {
      Tg(le, { get shopCustomStyles() {
        return b().shopCustomStyles;
      }, get customStyles() {
        return e(P).customStyles;
      }, get dealBlockId() {
        return e(P).id;
      } });
    };
    F(Um, (le) => {
      e(P).customStylesEnabled && le(Hm);
    }), ke((le, je, st, qt) => {
      var Ue;
      An = Wt(ln, 1, "kaching-bundles__block kaching-bundles__block--loaded", null, An, le), Ie(ln, "data-deal-block-id", e(P).id), Ie(ln, "data-ab-test-variant-id", e(P).abTestVariantId), Ie(ln, "data-ab-test-variant", je), Ie(ln, "data-selling-plan-id", (Ue = e(rn)) == null ? void 0 : Ue.id), Ft(ln, e(ze));
    }, [() => ({ "kaching-bundles__block--horizontal": e(P).blockLayout === "horizontal", "kaching-bundles__block--grid": e(P).blockLayout === "grid", "kaching-bundles__block--plain": e(P).blockLayout === "plain" }), () => {
      var le;
      return (le = e(P).abTestVariantLetter) != null ? le : e(P).abTestVariantNumber ? String.fromCharCode(64 + e(P).abTestVariantNumber) : void 0;
    }, () => ({ "kaching-bundles__bars--horizontal": e(P).blockLayout === "horizontal", "kaching-bundles__bars--grid": e(P).blockLayout === "grid", "kaching-bundles__bars--plain": e(P).blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(en), "kaching-bundles__bars--badge-border-all": e(Pe).positions.has("all"), "kaching-bundles__bars--badge-border-top": e(Pe).positions.has("top"), "kaching-bundles__bars--badge-border-bottom": e(Pe).positions.has("bottom"), "kaching-bundles__bars--badge-border-left": e(Pe).positions.has("left"), "kaching-bundles__bars--badge-border-right": e(Pe).positions.has("right") }), () => {
      var le, je;
      return { "--badge-border-thickness": `${(le = e(Pe).thickness) != null ? le : ""}px`, "--badge-border-gap": `${(je = e(Pe).gap) != null ? je : ""}px`, "--badge-border-gap-border": e(Pe).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(Pe).sideLength ? `${e(Pe).sideLength}px` : void 0, "--badge-border-wrap-color": e(Ee) };
    }]), h(n, In);
    var Zm = it(Sn);
    return p(), Zm;
  }
  customElements.define("kaching-bundles-block", Je(Eg, { config: { attribute: "config", type: "Object" }, translations: { attribute: "translations", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, product: { attribute: "product", type: "Object" }, otherProducts: { attribute: "other-products", type: "Array" }, collectionBreaksProducts: { attribute: "collection-breaks-products", type: "Array" }, complementaryProducts: { attribute: "complementary-products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, currentVariantSource: { attribute: "current-variant-source", type: "String" }, sellingPlanId: { attribute: "selling-plan-id", type: "Number" }, selectedDealBarId: { attribute: "selected-deal-bar-id", type: "String" }, quantity: { attribute: "quantity", type: "Number" }, nativeBundleProductIds: { attribute: "native-bundle-product-ids", type: "Array" }, compact: { attribute: "compact", type: "Boolean" }, variantBadges: { attribute: "variant-badges", type: "Array" }, component: {} }, [], ["rotateBundleNonce", "selectedVariants", "items", "pricing", "deal", "isItemSelectionValid", "validateItemSelection"], !1, (n) => class extends n {
    constructor() {
      super(), mn(this, "component"), this.component = this, this.innerHTML && (mr(this, "kaching-bundles-block-hydrated"), this.innerHTML = "");
    }
  }));
  var Sm = $('<div class="kaching-bundles"><!></div>');
  function jg(n, t) {
    var r;
    at(t, !0);
    const a = k(t, "config", 7), s = k(t, "dealBlock", 7), o = k(t, "products", 23, () => []), c = k(t, "mediaImages", 7), l = k(t, "translations", 7), i = d(() => _r(s(), a().brandColors)), { setConfig: u } = hi(a());
    xs(), ys();
    const { setMoneyFormat: g } = Fi(a().moneyFormat), { setTranslations: v } = gi(l()), { setMediaImages: p } = yl(c()), { setSwatchSettings: f } = kl({ swatchOptions: e(i).swatchOptions || [], swatchSize: e(i).swatchSize, swatchShape: e(i).swatchShape, showSelectedSwatchName: (r = e(i).showSelectedSwatchName) != null && r, pillStyle: la(e(i)) });
    tt(() => {
      u(a());
    }), tt(() => {
      g(a().moneyFormat, !!e(i).showPricesWithoutDecimals);
    }), tt(() => {
      v(l());
    }), tt(() => {
      p(c());
    }), tt(() => {
      var A;
      f({ swatchOptions: e(i).swatchOptions || [], swatchSize: e(i).swatchSize, swatchShape: e(i).swatchShape, showSelectedSwatchName: (A = e(i).showSelectedSwatchName) != null && A, pillStyle: la(e(i)) });
    });
    const b = d(() => e(i).dealBars.find((A) => A.dealBarType === gt.MixAndMatch));
    var y = { get config() {
      return a();
    }, set config(A) {
      a(A), _();
    }, get dealBlock() {
      return s();
    }, set dealBlock(A) {
      s(A), _();
    }, get products() {
      return o();
    }, set products(A = []) {
      o(A), _();
    }, get mediaImages() {
      return c();
    }, set mediaImages(A) {
      c(A), _();
    }, get translations() {
      return l();
    }, set translations(A) {
      l(A), _();
    } }, m = Sm(), z = w(m), C = (A) => {
      Uo(A, { get dealBlock() {
        return e(i);
      }, get dealBar() {
        return e(b);
      }, get products() {
        return o();
      }, onChoose: () => {
      } });
    };
    return F(z, (A) => {
      e(b) && A(C);
    }), x(m), h(n, m), it(y);
  }
  customElements.define("kaching-bundles-mix-and-match-choose-product", Je(jg, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), mn(this, "component"), this.component = this;
    }
  }));
  var Bm = $('<div class="kaching-bundles"><!></div>');
  function Rg(n, t) {
    at(t, !0);
    const r = k(t, "config", 7), a = k(t, "product", 7), s = k(t, "translations", 7), o = k(t, "addPersonalisationModal", 7), c = d(() => _r(o(), r().brandColors)), { setConfig: l } = hi(r()), { setTranslations: i } = gi(s());
    tt(() => {
      l(r()), i(s());
    });
    const u = d(() => {
      var p, f;
      return (f = (p = a()) == null ? void 0 : p.variants) != null && f[0] ? [{ product: a(), variant: a().variants[0], index: 0 }, { product: a(), variant: a().variants[0], index: 1 }] : [];
    });
    var g = { get config() {
      return r();
    }, set config(p) {
      r(p), _();
    }, get product() {
      return a();
    }, set product(p) {
      a(p), _();
    }, get translations() {
      return s();
    }, set translations(p) {
      s(p), _();
    }, get addPersonalisationModal() {
      return o();
    }, set addPersonalisationModal(p) {
      o(p), _();
    } }, v = Bm();
    return jo(w(v), { get selectedVariants() {
      return e(u);
    }, get addPersonalisationModal() {
      return e(c);
    }, inline: !0, personalisationValues: [], onConfirm: () => {
    }, onClose: () => {
    } }), x(v), h(n, v), it(g);
  }
  customElements.define("kaching-bundles-personalisation-modal", Je(Rg, { config: { attribute: "config", type: "Object" }, product: { attribute: "product", type: "Object" }, translations: { attribute: "translations", type: "Object" }, addPersonalisationModal: { attribute: "add-personalisation-modal", type: "Object" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), mn(this, "component"), this.component = this;
    }
  }));
  function Cm(n, t) {
    t().dispatchEvent(new CustomEvent("kaching-bundles-sticky-atc-clicked", { bubbles: !0, composed: !0 }));
  }
  var Im = $('<img class="kaching-bundles-sticky-atc__image"/>'), Mm = $('<button class="kaching-bundles-sticky-atc__button"><!></button>'), zm = $('<div class="kaching-bundles"><div class="kaching-bundles-sticky-atc"><div class="kaching-bundles-sticky-atc__content"><!> <div class="kaching-bundles-sticky-atc__title"><!></div></div> <!></div></div>');
  function Ng(n, t) {
    var r;
    at(t, !0);
    const a = () => Ve(vi, "$selectedDealBarStore", o), s = () => Ve(m, "$translate", o), [o, c] = kt(), l = k(t, "component", 7), i = k(t, "config", 7), u = k(t, "stickyAtc", 7), g = k(t, "translations", 7), v = k(t, "product", 7), p = k(t, "dealBlock", 7), f = d(() => _r(u(), i().brandColors)), b = d(() => _r(p(), i().brandColors)), { setConfig: y } = hi(i()), { translate: m, setTranslations: z } = gi(g()), { formatPrice: C, setMoneyFormat: A } = Fi(i().moneyFormat, (r = e(b)) == null ? void 0 : r.showPricesWithoutDecimals);
    tt(() => {
      y(i());
    }), tt(() => {
      var D;
      A(i().moneyFormat, !!((D = e(b)) != null && D.showPricesWithoutDecimals));
    }), tt(() => {
      z(g());
    });
    const O = d(() => ((D) => {
      const se = { "kaching-bundles-sticky-atc-background-color": We(D.backgroundColor), "kaching-bundles-sticky-atc-title-color": We(D.titleColor), "kaching-bundles-sticky-atc-button-color": We(D.buttonColor), "kaching-bundles-sticky-atc-button-text-color": We(D.buttonTextColor), "kaching-bundles-sticky-atc-title-font-size": D.titleFont.size + "px", "kaching-bundles-sticky-atc-button-font-size": D.buttonFont.size + "px", "kaching-bundles-sticky-atc-title-font-style": dr(D.titleFont.style), "kaching-bundles-sticky-atc-title-font-weight": ur(D.titleFont.style), "kaching-bundles-sticky-atc-button-font-style": dr(D.buttonFont.style), "kaching-bundles-sticky-atc-button-font-weight": ur(D.buttonFont.style), "kaching-bundles-sticky-atc-product-photo-size": D.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding": D.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius": D.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius": D.buttonCornerRadius + "px" };
      if (D.sameSizeOnMobile || !D.mobile) return fn(se);
      const te = D.mobile;
      return fn({ ...se, "kaching-bundles-sticky-atc-image-display": D.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-image-display-mobile": te.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-title-font-size-mobile": te.titleFontSize + "px", "kaching-bundles-sticky-atc-button-font-size-mobile": te.buttonFontSize + "px", "kaching-bundles-sticky-atc-product-photo-size-mobile": te.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding-mobile": te.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius-mobile": te.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius-mobile": te.buttonCornerRadius + "px" });
    })(e(f))), V = d(() => {
      var D;
      return ((D = a()) == null ? void 0 : D.pricing.fullPrice) || v().variants[0].compareAtPrice || v().variants[0].price;
    }), R = d(() => {
      var D;
      return ((D = a()) == null ? void 0 : D.pricing.discountedPrice) || v().variants[0].price;
    }), U = d(() => {
      var D;
      return ((D = a()) == null ? void 0 : D.quantity) || 1;
    }), G = d(() => _n({ priceFormatter: Ve(C, "$formatPrice", o), product: v(), totalFullPrice: e(V), totalDiscountedPrice: e(R), quantity: e(U), unitQuantity: null })), H = d(() => e(G)(s()(e(f).title))), I = new nf("(width < 750px)"), T = d(() => (I.current && !e(f).sameSizeOnMobile && e(f).mobile ? e(f).mobile.productPhotoSize : e(f).productPhotoSize) > 0);
    var ue = { get component() {
      return l();
    }, set component(D) {
      l(D), _();
    }, get config() {
      return i();
    }, set config(D) {
      i(D), _();
    }, get stickyAtc() {
      return u();
    }, set stickyAtc(D) {
      u(D), _();
    }, get translations() {
      return g();
    }, set translations(D) {
      g(D), _();
    }, get product() {
      return v();
    }, set product(D) {
      v(D), _();
    }, get dealBlock() {
      return p();
    }, set dealBlock(D) {
      p(D), _();
    } }, re = zm(), P = w(re), S = w(P), B = w(S), q = (D) => {
      var se = Im();
      ke(() => {
        Ie(se, "src", v().image), Ie(se, "alt", v().title);
      }), h(D, se);
    };
    F(B, (D) => {
      e(T) && D(q);
    });
    var Y = E(B, 2);
    Ne(w(Y), () => e(H)), x(Y), x(S);
    var Q = E(S, 2), oe = (D) => {
      var se = Mm();
      se.__click = [Cm, l], Ne(w(se), () => s()(e(f).buttonText)), x(se), h(D, se);
    };
    F(Q, (D) => {
      e(f).buttonText && D(oe);
    }), x(P), x(re), ke(() => Ft(P, e(O))), h(n, re);
    var j = it(ue);
    return c(), j;
  }
  Fn(["click"]), customElements.define("kaching-bundles-sticky-atc", Je(Ng, { config: { attribute: "config", type: "Object" }, stickyAtc: { attribute: "sticky-atc", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, component: {} }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), mn(this, "component"), this.component = this;
    }
  }));
  const $m = Id, Dm = xd, Tm = Eg, Vm = jg, Am = Rg, qm = Ng, Gm = cg.element, Fm = $m.element, Om = Dm.element, Lm = Tm.element, Em = Vm.element, jm = Am.element, Rm = qm.element;
  return Qt.ChooseMultipleGifts = Om, Qt.ChooseProduct = Fm, Qt.DealBar = Gm, Qt.DealBlock = Lm, Qt.MixAndMatchChooseProduct = Em, Qt.PersonalisationModal = jm, Qt.StickyAtc = Rm, Object.defineProperty(Qt, Symbol.toStringTag, { value: "Module" }), Qt;
})({});
