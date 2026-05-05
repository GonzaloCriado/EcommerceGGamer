function createNavigationLinks(currentPage, siteContext) {
  return window.GGamerData.pages
    .map(function (page) {
      const isCurrentPage = page.file === currentPage;
      const currentAttribute = isCurrentPage ? ' aria-current="page"' : "";
      const href = page.file === "index.html"
        ? siteContext.homePath
        : siteContext.pagePath(page.file);

      return '<a href="' + href + '"' + currentAttribute + ">" + page.title + "</a>";
    })
    .join("");
}

function createAuthLinks(currentPage, siteContext) {
  const authPages = [
    { title: "Login", file: "login.html", href: siteContext.loginPath },
    { title: "Registro", file: "registro.html", href: siteContext.registerPath }
  ];

  return authPages
    .map(function (page) {
      const isCurrentPage = page.file === currentPage;
      const currentAttribute = isCurrentPage ? ' aria-current="page"' : "";

      return '<a class="ghost-link" href="' + page.href + '"' + currentAttribute + ">" + page.title + "</a>";
    })
    .join("");
}

function renderNavbar() {
  const navbarRoot = document.querySelector("#navbar-root");

  if (!navbarRoot || !window.GGamerData) {
    return;
  }

  const siteContext = window.GGamerData.getSiteContext();
  const currentPage = navbarRoot.dataset.currentPage || "index.html";
  const navbarMode = navbarRoot.dataset.navbarMode || "main";

  if (navbarMode === "auth") {
    navbarRoot.innerHTML =
      '<nav class="navbar container" aria-label="Navegacion de acceso">' +
        '<a class="brand" href="' + siteContext.homePath + '">' +
          '<img src="' + siteContext.imagePath("logo.svg") + '" alt="Logo de GGamer" width="44" height="44">' +
          "<span>GGamer</span>" +
        "</a>" +
        '<div class="nav-actions">' + createAuthLinks(currentPage, siteContext) + "</div>" +
      "</nav>";

    return;
  }

  const navigationLinks = createNavigationLinks(currentPage, siteContext);

  navbarRoot.innerHTML =
    '<nav class="navbar container" aria-label="Navegacion principal">' +
      '<a class="brand" href="' + siteContext.homePath + '">' +
        '<img src="' + siteContext.imagePath("logo.svg") + '" alt="Logo de GGamer" width="44" height="44">' +
        "<span>GGamer</span>" +
      "</a>" +
      '<div class="nav-links">' + navigationLinks + "</div>" +
      '<div class="nav-actions">' +
        '<button class="button button-outline" type="button" data-logout-button>Cerrar sesion</button>' +
      "</div>" +
    "</nav>";
}

renderNavbar();
