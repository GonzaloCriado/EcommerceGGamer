function redirectToLogin() {
  window.location.href = "login.html";
}

function setupLogoutButton() {
  document.addEventListener("click", function (event) {
    const logoutButton = event.target.closest("[data-logout-button]");

    if (!logoutButton) {
      return;
    }

    redirectToLogin();
  });
}

setupLogoutButton();
