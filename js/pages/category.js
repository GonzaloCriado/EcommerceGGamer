// Verifica que el usuario esté logueado antes de mostrar la página.
AuthService.requireAuth();

// Actualiza el badge numérico del botón "Carrito" en el navbar.
function actualizarBadgeCarrito() {
  var badge = document.querySelector('[data-cart-count]');
  if (!badge) return;
  var count = CartService.getCount();
  badge.textContent = count > 0 ? count : '';
}

// Productos cargados desde el JSON
var productosCategoria = [];

// Lee el contenedor para saber qué categoría mostrar (data-category en el HTML).
var contenedorCategoria = document.querySelector('[data-products-container]');
var categoriaActual = contenedorCategoria ? contenedorCategoria.dataset.category : null;

// Renderiza las cards con los productos de la categoría.
function renderizarCategoria(productos) {
  productosCategoria = productos;

  if (!contenedorCategoria) return;

  if (!productos.length) {
    contenedorCategoria.innerHTML =
      '<p class="error-message">No hay productos disponibles en esta categoría.</p>';
    return;
  }

  contenedorCategoria.innerHTML = productos.map(createProductCard).join('');

  // Muestra el badge con los items que ya había en el carrito al cargar la página.
  actualizarBadgeCarrito();
}

// Controla los botones + y -
function manejarCantidad(event) {
  var boton = event.target.closest('[data-action]');
  if (!boton) return;

  var card = boton.closest('[data-product-id]');
  if (!card) return;

  var cantidadEl = card.querySelector('[data-quantity-value]');
  var actual = parseInt(cantidadEl.textContent, 10);

  if (boton.dataset.action === 'increase') {
    cantidadEl.textContent = actual + 1;
  } else if (boton.dataset.action === 'decrease') {
    cantidadEl.textContent = Math.max(1, actual - 1);
  }
}

// "Añadir al carrito".
function manejarAgregarAlCarrito(event) {
  var boton = event.target.closest('[data-add-to-cart]');
  if (!boton) return;

  var card = boton.closest('[data-product-id]');
  if (!card) return;

  var productoId = card.dataset.productId;
  var cantidadEl = card.querySelector('[data-quantity-value]');
  var cantidad = parseInt(cantidadEl.textContent, 10);

  // Busca el producto en el array cargado desde el JSON.
  var producto = null;
  for (var i = 0; i < productosCategoria.length; i++) {
    if (productosCategoria[i].id === productoId) {
      producto = productosCategoria[i];
      break;
    }
  }

  if (!producto) return;

  CartService.addToCart(producto, cantidad);
  actualizarBadgeCarrito();

  // Feedback visual al usuario.
  boton.textContent = '¡Agregado!';
  boton.disabled = true;
  setTimeout(function () {
    boton.textContent = 'Añadir al carrito';
    boton.disabled = false;
  }, 1500);
}

document.addEventListener('click', manejarCantidad);
document.addEventListener('click', manejarAgregarAlCarrito);

// Inicia la carga de productos de la categoría desde el JSON.
if (categoriaActual) {
  ProductsService.fetchByCategory(categoriaActual)
    .then(renderizarCategoria)
    .catch(function (error) {
      if (contenedorCategoria) {
        contenedorCategoria.innerHTML =
          '<p class="error-message">' + error.message + '</p>';
      }
    });
}
