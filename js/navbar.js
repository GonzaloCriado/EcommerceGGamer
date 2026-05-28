function createNavigationLinks(currentPage, siteContext) {
  return window.GGamerData.pages
    .map(function (page) {
      var isCurrentPage = page.file === currentPage;
      var currentAttribute = isCurrentPage ? ' aria-current="page"' : '';
      var href = page.file === 'index.html'
        ? siteContext.homePath
        : siteContext.pagePath(page.file);

      return '<a href="' + href + '"' + currentAttribute + '>' + page.title + '</a>';
    })
    .join('');
}

function createAuthLinks(currentPage, siteContext) {
  var authPages = [
    { title: 'Login',    file: 'login.html',    href: siteContext.loginPath    },
    { title: 'Registro', file: 'registro.html', href: siteContext.registerPath }
  ];

  return authPages
    .map(function (page) {
      var isCurrentPage = page.file === currentPage;
      var currentAttribute = isCurrentPage ? ' aria-current="page"' : '';

      return '<a class="ghost-link" href="' + page.href + '"' + currentAttribute + '>' + page.title + '</a>';
    })
    .join('');
}

function renderNavbar() {
  var navbarRoot = document.querySelector('#navbar-root');
  if (!navbarRoot || !window.GGamerData) return;

  var siteContext = window.GGamerData.getSiteContext();
  var currentPage = navbarRoot.dataset.currentPage || 'index.html';
  var navbarMode  = navbarRoot.dataset.navbarMode  || 'main';

  // Navbar para páginas de autenticación (login / registro).
  if (navbarMode === 'auth') {
    navbarRoot.innerHTML =
      '<nav class="navbar container" aria-label="Navegacion de acceso">' +
        '<a class="brand" href="' + siteContext.homePath + '">' +
          '<img src="' + siteContext.imagePath('logo.svg') + '" alt="Logo de GGamer" width="44" height="44">' +
          '<span>GGamer</span>' +
        '</a>' +
        '<div class="nav-actions">' + createAuthLinks(currentPage, siteContext) + '</div>' +
      '</nav>';
    return;
  }

  // Navbar principal con links de categoria, carrito y logout.
  var navLinks = createNavigationLinks(currentPage, siteContext);

  navbarRoot.innerHTML =
    '<nav class="navbar container" aria-label="Navegacion principal">' +
      '<a class="brand" href="' + siteContext.homePath + '">' +
        '<img src="' + siteContext.imagePath('logo.svg') + '" alt="Logo de GGamer" width="44" height="44">' +
        '<span>GGamer</span>' +
      '</a>' +
      '<div class="nav-links">' + navLinks + '</div>' +
      '<div class="nav-actions">' +
        '<a class="button button-outline button-small" href="' + siteContext.cartPath + '">Carrito <span class="cart-badge" data-cart-count></span></a>' +
        '<button class="button button-outline button-small" type="button" data-logout-button>Cerrar sesion</button>' +
      '</div>' +
    '</nav>';
}

renderNavbar();
