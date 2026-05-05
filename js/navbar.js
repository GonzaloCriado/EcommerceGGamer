function createNavigationLinks(currentPage) {
  return window.GGamerData.pages
    .map(function (page) {
      const isCurrentPage = page.url === currentPage;
      const currentAttribute = isCurrentPage ? ' aria-current="page"' : "";

      return '<a href="' + page.url + '"' + currentAttribute + ">" + page.title + "</a>";
    })
    .join("");
}

function renderNavbar() {
  const navbarRoot = document.querySelector("#navbar-root");

  if (!navbarRoot || !window.GGamerData) {
    return;
  }

  const currentPage = navbarRoot.dataset.currentPage || "index.html";
  const navigationLinks = createNavigationLinks(currentPage);

  navbarRoot.innerHTML =
    '<nav class="navbar container" aria-label="Navegacion principal">' +
      '<a class="brand" href="index.html">' +
        '<img src="img/logo-ggamer.svg" alt="Logo de GGamer" width="44" height="44">' +
        "<span>GGamer</span>" +
      "</a>" +
      '<div class="nav-links">' + navigationLinks + "</div>" +
      '<div class="nav-actions">' +
        '<button class="button button-outline" type="button" data-logout-button>Cerrar sesion</button>' +
      "</div>" +
    "</nav>";
}

renderNavbar();
