// ─── DATOS DE ANIMALES ───────────────────────────────────────────────────────
// Agregá o modificá animales acá.
// "imagen" es la ruta relativa al archivo (debe estar en la carpeta /imagenes/)
// "nombre" es el texto que se muestra en la tarjeta.
const ANIMALES = {
  delfin: {
    nombre: "Delfín",
    imagen: "imagenes/delfin.jpg"
  },
  tiburon: {
    nombre: "Tiburón",
    imagen: "imagenes/tiburon.jpg"
  },
  tortuga: {
    nombre: "Tortuga Marina",
    imagen: "imagenes/tortuga.jpg"
  },
  pulpo: {
    nombre: "Pulpo",
    imagen: "imagenes/pulpo.jpg"
  },
  caballito: {
    nombre: "Caballito de Mar",
    imagen: "imagenes/caballito.jpg"
  },
  raya: {
    nombre: "Raya",
    imagen: "imagenes/raya.jpg"
  },
  cangrejo: {
    nombre: "Cangrejo",
    imagen: "imagenes/cangrejo.jpg"
  },
  medusa: {
    nombre: "Medusa",
    imagen: "imagenes/medusa.jpg"
  },
  pez_payaso: {
    nombre: "Pez Payaso",
    imagen: "imagenes/pez_payaso.jpg"
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
  // Acepta ?animal=delfin  o  ?id=delfin
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

  // Animar la tarjeta con un pequeño delay para que se vea la transición
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
