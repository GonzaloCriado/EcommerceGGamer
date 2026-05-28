// Maneja el formulario de login y guarda la sesion en sessionStorage.
function setupLoginForm() {
  var formulario = document.querySelector('[data-login-form]');
  if (!formulario) return;

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    var inputEmail = formulario.querySelector('[name="email"]');
    var email = inputEmail ? inputEmail.value.trim() : 'usuario@ggamer.com';

    // Guarda la sesion del usuario en sessionStorage.
    AuthService.login(email);

    // Redirige al home después del login.
    window.location.href = window.GGamerData.getSiteContext().homePath;
  });
}

setupLoginForm();
