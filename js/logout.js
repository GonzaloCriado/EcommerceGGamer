// Escucha clics en el botón de cerrar sesion (delegación de eventos).
function setupLogoutButton() {
  document.addEventListener('click', function (event) {
    var logoutButton = event.target.closest('[data-logout-button]');
    if (!logoutButton) return;

    // Elimina la sesion del usuario de sessionStorage.
    if (window.AuthService) {
      AuthService.logout();
    }

    // Redirige al login.
    window.location.href = window.GGamerData.getSiteContext().loginPath;
  });
}

setupLogoutButton();
