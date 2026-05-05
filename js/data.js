const pages = [
  { title: "Home", url: "index.html" },
  { title: "Teclados", url: "teclados.html" },
  { title: "Mouse", url: "mouse.html" },
  { title: "Auriculares", url: "auriculares.html" }
];

const products = [
  {
    id: "phantom-tkl-rgb",
    category: "teclados",
    tag: "Mas vendido",
    title: "Phantom TKL RGB",
    description: "Teclado mecanico compacto con switches red, iluminacion RGB y estructura reforzada.",
    price: 89999,
    image: "img/teclado-neon.svg",
    alt: "Teclado mecanico Phantom TKL RGB",
    featured: true
  },
  {
    id: "nova-65",
    category: "teclados",
    tag: "Compacto",
    title: "Nova 65",
    description: "Diseno 65%, cable desmontable y keycaps de perfil premium.",
    price: 74500,
    image: "img/teclado-neon.svg",
    alt: "Teclado gamer Nova 65"
  },
  {
    id: "titan-pro",
    category: "teclados",
    tag: "Pro setup",
    title: "Titan Pro",
    description: "Full size con macros dedicadas para streaming, MMO y productividad.",
    price: 112000,
    image: "img/teclado-neon.svg",
    alt: "Teclado gamer Titan Pro"
  },
  {
    id: "pulse-x1",
    category: "mouse",
    tag: "FPS ready",
    title: "Pulse X1",
    description: "Mouse ultraliviano con DPI ajustable y switches rapidos.",
    price: 42999,
    image: "img/mouse-neon.svg",
    alt: "Mouse gamer Pulse X1"
  },
  {
    id: "vector-core",
    category: "mouse",
    tag: "Precision",
    title: "Vector Core",
    description: "Acabado antideslizante, agarre firme y respuesta de alta frecuencia.",
    price: 38750,
    image: "img/mouse-neon.svg",
    alt: "Mouse gamer Vector Core"
  },
  {
    id: "strike-wireless",
    category: "mouse",
    tag: "Wireless",
    title: "Strike Wireless",
    description: "Conexion dual, bateria duradera y base RGB para escritorio gamer.",
    price: 59990,
    image: "img/mouse-neon.svg",
    alt: "Mouse gamer Strike Wireless"
  },
  {
    id: "echo-71",
    category: "auriculares",
    tag: "Surround",
    title: "Echo 7.1",
    description: "Sonido envolvente virtual con almohadillas amplias y suaves.",
    price: 67500,
    image: "img/auriculares-neon.svg",
    alt: "Auriculares gamer Echo 7.1"
  },
  {
    id: "night-raid",
    category: "auriculares",
    tag: "Streaming",
    title: "Night Raid",
    description: "Microfono flexible, diadema acolchada e iluminacion lateral LED.",
    price: 54900,
    image: "img/auriculares-neon.svg",
    alt: "Auriculares gamer Night Raid"
  },
  {
    id: "shadow-wireless",
    category: "auriculares",
    tag: "Wireless",
    title: "Shadow Wireless",
    description: "Conectividad sin cables y bateria para largas jornadas de juego.",
    price: 82000,
    image: "img/auriculares-neon.svg",
    alt: "Auriculares gamer Shadow Wireless"
  }
];

window.GGamerData = {
  pages,
  products
};
