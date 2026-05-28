// Carga los productos desde el archivo JSON usando fetch.
var ProductsService = {

  // Trae todos los productos desde productos.json.
  fetchAll: function () {
    var ctx = window.GGamerData.getSiteContext();
    var rutaJson = ctx.rootPrefix + 'js/data/productos.json';

    return fetch(rutaJson).then(function (respuesta) {
      if (!respuesta.ok) {
        throw new Error('No se pudo cargar el catálogo. Asegurate de usar un servidor local (Live Server o similar).');
      }
      return respuesta.json();
    });
  },

  // Trae solo los productos de una categoria específica.
  fetchByCategory: function (categoria) {
    return ProductsService.fetchAll().then(function (productos) {
      return productos.filter(function (producto) {
        return producto.categoria === categoria;
      });
    });
  }
};

window.ProductsService = ProductsService;
