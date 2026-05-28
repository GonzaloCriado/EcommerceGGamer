// Contexto del sitio: rutas relativas según la ubicación del archivo HTML actual.
function getSiteContext() {
  var normalizedPath = window.location.pathname.replace(/\\/g, '/');
  var isInPages = normalizedPath.includes('/pages/');
  var rootPrefix = isInPages ? '../' : './';
  var pagesPrefix = isInPages ? './' : './pages/';

  return {
    isInPages: isInPages,
    rootPrefix: rootPrefix,
    homePath: rootPrefix + 'index.html',
    loginPath: isInPages ? './login.html' : './pages/login.html',
    registerPath: isInPages ? './registro.html' : './pages/registro.html',
    cartPath: isInPages ? './carrito.html' : './pages/carrito.html',
    pagePath: function (fileName) {
      return pagesPrefix + fileName;
    },
    imagePath: function (fileName) {
      return rootPrefix + 'img/' + fileName;
    },
    productImagePath: function (fileName) {
      return rootPrefix + 'img/productos/' + fileName;
    }
  };
}

// Links de navegacion principal.
var pages = [
  { title: 'Home',        file: 'index.html'       },
  { title: 'Teclados',    file: 'teclados.html'    },
  { title: 'Mouse',       file: 'mouse.html'       },
  { title: 'Auriculares', file: 'auriculares.html' }
];

window.GGamerData = {
  getSiteContext: getSiteContext,
  pages: pages
};
