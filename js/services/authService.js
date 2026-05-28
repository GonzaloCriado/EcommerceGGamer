// Manejo de sesion del usuario con sessionStorage.
var AuthService = {
  _key: 'ggamer_usuario',

  // Guarda al usuario en sessionStorage al iniciar sesion.
  login: function (email) {
    var usuario = { email: email, logged: true };
    sessionStorage.setItem(this._key, JSON.stringify(usuario));
  },

  // Elimina la sesion del usuario.
  logout: function () {
    sessionStorage.removeItem(this._key);
  },

  // Devuelve el objeto de usuario o null si no hay sesion.
  getUser: function () {
    var datos = sessionStorage.getItem(this._key);
    return datos ? JSON.parse(datos) : null;
  },

  // Retorna true si hay un usuario con sesion activa.
  isLoggedIn: function () {
    var usuario = this.getUser();
    return usuario !== null && usuario.logged === true;
  },

  // Si no hay sesion activa, redirige al login. Usar al inicio de cada pagina protegida.
  requireAuth: function () {
    if (!this.isLoggedIn()) {
      var ctx = window.GGamerData.getSiteContext();
      window.location.href = ctx.loginPath;
    }
  }
};

window.AuthService = AuthService;
