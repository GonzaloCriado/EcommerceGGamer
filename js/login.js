function redirectToHome(event) {
  event.preventDefault();
  // Login simulado para la etapa actual.
  window.location.href = window.GGamerData.getSiteContext().homePath;
}

function setupLoginForm() {
  const loginForm = document.querySelector("[data-login-form]");

  if (!loginForm) {
    return;
  }

  loginForm.addEventListener("submit", redirectToHome);
}

setupLoginForm();
