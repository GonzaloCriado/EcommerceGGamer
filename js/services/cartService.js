// Manejo del carrito de compras con localStorage.
var CartService = {
  _key: 'ggamer_carrito',

  // Devuelve el carrito actual desde localStorage (array de items).
  getCart: function () {
    var datos = localStorage.getItem(this._key);
    return datos ? JSON.parse(datos) : [];
  },

  // Guarda el carrito en localStorage.
  saveCart: function (carrito) {
    localStorage.setItem(this._key, JSON.stringify(carrito));
  },

  // Agrega un producto al carrito. Si ya existe, suma la cantidad.
  addToCart: function (producto, cantidad) {
    var carrito = this.getCart();
    var itemExistente = null;

    for (var i = 0; i < carrito.length; i++) {
      if (carrito[i].id === producto.id) {
        itemExistente = carrito[i];
        break;
      }
    }

    if (itemExistente) {
      itemExistente.cantidad += cantidad;
    } else {
      carrito.push({
        id: producto.id,
        titulo: producto.titulo,
        categoria: producto.categoria,
        imagen: producto.imagen,
        precio: producto.precio,
        cantidad: cantidad
      });
    }

    this.saveCart(carrito);
  },

  // Elimina un producto del carrito por su id.
  removeFromCart: function (productoId) {
    var carrito = this.getCart();
    var carritoActualizado = [];

    for (var i = 0; i < carrito.length; i++) {
      if (carrito[i].id !== productoId) {
        carritoActualizado.push(carrito[i]);
      }
    }

    this.saveCart(carritoActualizado);
  },

  // Devuelve el precio total de todos los items del carrito.
  getTotal: function () {
    var carrito = this.getCart();
    var total = 0;

    for (var i = 0; i < carrito.length; i++) {
      total += carrito[i].precio * carrito[i].cantidad;
    }

    return total;
  },

  // Devuelve la cantidad total de unidades en el carrito.
  getCount: function () {
    var carrito = this.getCart();
    var count = 0;

    for (var i = 0; i < carrito.length; i++) {
      count += carrito[i].cantidad;
    }

    return count;
  }
};

window.CartService = CartService;
