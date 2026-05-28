// Verifica que el usuario esté logueado antes de mostrar la página.
AuthService.requireAuth();

// Renderiza el carrito completo desde localStorage.
function renderizarCarrito() {
  var carrito = CartService.getCart();
  var ctx = window.GGamerData.getSiteContext();
  var contenedor = document.querySelector('[data-cart-container]');
  var totalEl = document.querySelector('[data-cart-total]');
  var mensajeVacio = document.querySelector('[data-cart-empty]');

  if (!contenedor) return;

  // Carrito vacío: muestra mensaje y oculta el total.
  if (!carrito.length) {
    contenedor.innerHTML = '';
    if (mensajeVacio) mensajeVacio.style.display = 'block';
    if (totalEl) totalEl.textContent = '';
    return;
  }

  // Carrito con productos: oculta mensaje vacío y construye los items.
  if (mensajeVacio) mensajeVacio.style.display = 'none';

  var html = '';
  carrito.forEach(function (item) {
    var subtotal = item.precio * item.cantidad;

    html +=
      '<article class="cart-item" data-cart-item="' + item.id + '">' +
        '<div class="cart-item-media">' +
          '<img src="' + ctx.productImagePath(item.imagen) + '" alt="' + item.titulo + '">' +
        '</div>' +
        '<div class="cart-item-info">' +
          '<h3>' + item.titulo + '</h3>' +
          '<p class="cart-item-meta">Precio unitario: ' + formatPrice(item.precio) + '</p>' +
          '<p class="cart-item-meta">Cantidad: ' + item.cantidad + '</p>' +
          '<p class="cart-item-subtotal">Subtotal: ' + formatPrice(subtotal) + '</p>' +
        '</div>' +
        '<button class="button button-danger" type="button" data-remove-from-cart="' + item.id + '">' +
          'Eliminar' +
        '</button>' +
      '</article>';
  });

  contenedor.innerHTML = html;

  if (totalEl) {
    totalEl.textContent = 'Total: ' + formatPrice(CartService.getTotal());
  }
}

// Elimina un producto del carrito al hacer clic en "Eliminar".
document.addEventListener('click', function (event) {
  var botonEliminar = event.target.closest('[data-remove-from-cart]');
  if (!botonEliminar) return;

  var productoId = botonEliminar.dataset.removeFromCart;
  CartService.removeFromCart(productoId);
  renderizarCarrito();
});

// Muestra el carrito al cargar la página.
renderizarCarrito();
