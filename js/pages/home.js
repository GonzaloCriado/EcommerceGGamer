// Verifica que el usuario esté logueado antes de mostrar la página.
AuthService.requireAuth();

// Categorías
var CATEGORIAS_HOME = [
  { key: 'teclados', titulo: 'Teclados Gamer', href: './pages/teclados.html' },
  { key: 'mouse',    titulo: 'Mouse Gamer',    href: './pages/mouse.html'    },
  { key: 'auriculares', titulo: 'Auriculares Gamer', href: './pages/auriculares.html' }
];

// Productos
var productosHome = [];

// Renderiza secciones por categoría mostrando hasta 3 productos cada una.
function renderizarHomeProductos(productos) {
  productosHome = productos;
  var contenedor = document.querySelector('[data-products-home]');
  if (!contenedor) return;

  var html = '';

  CATEGORIAS_HOME.forEach(function (cat) {
    var productosCat = productos.filter(function (p) {
      return p.categoria === cat.key;
    }).slice(0, 3);

    html +=
      '<section class="home-category-section">' +
        '<div class="home-category-heading">' +
          '<h2>' + cat.titulo + '</h2>' +
          '<a class="button button-outline button-small" href="' + cat.href + '">Ver todos</a>' +
        '</div>' +
        '<div class="product-grid home-product-grid">' +
          productosCat.map(createProductCard).join('') +
        '</div>' +
      '</section>';
  });

  contenedor.innerHTML = html;
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
  for (var i = 0; i < productosHome.length; i++) {
    if (productosHome[i].id === productoId) {
      producto = productosHome[i];
      break;
    }
  }

  if (!producto) return;

  CartService.addToCart(producto, cantidad);

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

// Inicia la carga de productos desde el JSON.
ProductsService.fetchAll()
  .then(renderizarHomeProductos)
  .catch(function (error) {
    var contenedor = document.querySelector('[data-products-home]');
    if (contenedor) {
      contenedor.innerHTML =
        '<p class="error-message">' + error.message + '</p>';
    }
  });
