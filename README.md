# GGamer

## Alumno

Gonzalo Valentin Criado Sosa

## Nombre del proyecto

GGamer

## Descripcion

GGamer es una aplicacion web estatica de tipo e-commerce orientada a la venta de productos gamer. Incluye pagina principal, categorias de productos, carrito de compras, formularios de login y registro, y un diseño visual con estilo gamer.

---

## Como ejecutar el proyecto

> **IMPORTANTE:** el proyecto usa `fetch()` para cargar los productos desde un archivo JSON local.
> Esto **no funciona si se abre el archivo directamente** desde el explorador de archivos (`file://`).
> Se debe usar un servidor local.

### Opcion recomendada: Live Server (VS Code)

1. Instalar la extension **Live Server** en VS Code.
2. Hacer clic derecho sobre `index.html`.
3. Seleccionar **"Open with Live Server"**.
4. El sitio se abre en `http://127.0.0.1:5500`.

### Alternativa: servidor desde la terminal

```bash
npx serve .
```

---

## Inicio de sesion

El login es **simulado**: no hay base de datos ni validacion de credenciales real.

Para ingresar, completar el formulario con **cualquier email y contraseña** validos:

| Campo      | Valor de ejemplo         |
|------------|--------------------------|
| Email      | `jugador@ggamer.com`     |
| Contrasena | `cualquier valor`        |

Al hacer clic en **Ingresar**, el email se guarda en `sessionStorage` y el sitio redirige al home automaticamente.

El boton **Cerrar sesion** elimina esa informacion y redirige al login.

---

## Funcionalidades implementadas (Etapa 4)

- Productos cargados desde `js/data/productos.json` usando `fetch()`
- Cards de productos con selector de cantidad y boton "Añadir al carrito"
- Home muestra hasta 3 productos por categoria (Teclados, Mouse, Auriculares)
- Paginas de categoria muestran solo sus productos correspondientes
- Sesion de usuario con `sessionStorage` (login / logout)
- Carrito de compras con `localStorage` (agregar, eliminar, calcular total)
- Pagina `carrito.html` con lista de productos, subtotales y total general
- Redireccion automatica al login si no hay sesion activa

---

## Estilos

Los estilos fuente se encuentran en `scss/styles.scss` y el sitio utiliza el CSS compilado en `css/styles.css`.

Comandos disponibles:

```bash
npm install
npm run build:css
npm run watch:css
```
