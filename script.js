// ─── DATOS DE ANIMALES ───────────────────────────────────────────────────────
// Para agregar un animal nuevo: agregá la foto en /imagenes/ y una entrada acá.
const ANIMALES = {
  ballena: {
    nombre: "Ballena",
    imagen: "imagenes/ballena.jpeg"
  },
  caballito: {
    nombre: "Caballito de Mar",
    imagen: "imagenes/caballito.jpeg"
  },
  cangrejo: {
    nombre: "Cangrejo",
    imagen: "imagenes/cangrejo.jpeg"
  },
  delfin: {
    nombre: "Delfín",
    imagen: "imagenes/delfin.jpeg"
  },
  estrella: {
    nombre: "Estrella de Mar",
    imagen: "imagenes/estrella.jpeg"
  },
  pez: {
    nombre: "Pez",
    imagen: "imagenes/pez.jpeg"
  },
  pezespada: {
    nombre: "Pez Espada",
    imagen: "imagenes/pezespada.jpeg"
  },
  pezglobo: {
    nombre: "Pez Globo",
    imagen: "imagenes/pezglobo.jpeg"
  },
  pezpayaso: {
    nombre: "Pez Payaso",
    imagen: "imagenes/pezpayaso.jpeg"
  },
  pulpo: {
    nombre: "Pulpo",
    imagen: "imagenes/pulpo.jpeg"
  },
  tiburon: {
    nombre: "Tiburón",
    imagen: "imagenes/tiburon.jpeg"
  },
  tortuga: {
    nombre: "Tortuga Marina",
    imagen: "imagenes/tortuga.jpeg"
  },
};

// ─── BURBUJAS ────────────────────────────────────────────────────────────────
function crearBurbujas() {
  const contenedor = document.getElementById("burbujas");
  const cantidad = 18;

  for (let i = 0; i < cantidad; i++) {
    const burbuja = document.createElement("div");
    burbuja.classList.add("burbuja");

    const tamaño = Math.random() * 20 + 6;
    const leftPos = Math.random() * 100;
    const duracion = Math.random() * 12 + 8;
    const demora = Math.random() * 10;
    const drift = (Math.random() - 0.5) * 80;
    const escalaFinal = Math.random() * 0.5 + 0.8;

    burbuja.style.cssText = `
      width: ${tamaño}px;
      height: ${tamaño}px;
      left: ${leftPos}%;
      animation-duration: ${duracion}s;
      animation-delay: ${demora}s;
      --drift: ${drift}px;
      --escala-final: ${escalaFinal};
    `;

    contenedor.appendChild(burbuja);
  }
}

// ─── LEER PARÁMETRO DE URL ────────────────────────────────────────────────────
function obtenerAnimalDeURL() {
  const params = new URLSearchParams(window.location.search);
  return (params.get("animal") || params.get("id") || "").toLowerCase().trim();
}

// ─── MOSTRAR ANIMAL ───────────────────────────────────────────────────────────
function mostrarAnimal(clave) {
  const tarjeta = document.getElementById("tarjeta");
  const errorMsg = document.getElementById("error-msg");
  const img = document.getElementById("animal-img");
  const nombre = document.getElementById("nombre-animal");

  const datos = ANIMALES[clave];

  if (!datos) {
    tarjeta.style.display = "none";
    errorMsg.style.display = "flex";
    return;
  }

  img.src = datos.imagen;
  img.alt = datos.nombre;
  nombre.textContent = datos.nombre;

  requestAnimationFrame(() => {
    setTimeout(() => {
      tarjeta.classList.add("visible");
    }, 100);
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  crearBurbujas();
  const clave = obtenerAnimalDeURL();
  mostrarAnimal(clave);
});
