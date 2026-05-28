
function formatPrice(precio) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  }).format(precio);
}

function createProductCard(producto) {
  var ctx = window.GGamerData.getSiteContext();
  var imageSrc = ctx.productImagePath(producto.imagen);
  var tagHtml = producto.tag
    ? '<span class="card-tag">' + producto.tag + '</span>'
    : '';

  return (
    '<article class="product-card" data-product-id="' + producto.id + '">' +
      '<div class="product-media">' +
        '<img src="' + imageSrc + '" alt="' + producto.titulo + '" loading="lazy">' +
      '</div>' +
      '<div class="product-info">' +
        tagHtml +
        '<h3>' + producto.titulo + '</h3>' +
        '<p>' + producto.descripcion + '</p>' +
        '<div class="product-footer">' +
          '<span class="price">' + formatPrice(producto.precio) + '</span>' +
          '<div class="quantity-controls" aria-label="Cantidad del producto">' +
            '<button class="quantity-button" type="button" data-action="decrease" aria-label="Restar una unidad">-</button>' +
            '<span class="quantity-value" data-quantity-value aria-live="polite">1</span>' +
            '<button class="quantity-button" type="button" data-action="increase" aria-label="Sumar una unidad">+</button>' +
          '</div>' +
        '</div>' +
        '<button class="button add-to-cart-btn" type="button" data-add-to-cart>' +
          'Añadir al carrito' +
        '</button>' +
      '</div>' +
    '</article>'
  );
}

window.formatPrice = formatPrice;
window.createProductCard = createProductCard;
