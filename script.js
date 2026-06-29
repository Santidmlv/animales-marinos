const animales = {

    delfin: {
        nombre: "DELFIN",
        imagen: "imagenes/delfin.jpeg"
    },

    tortuga: {
        nombre: "TORTUGA MARINA",
        imagen: "imagenes/tortuga.jpeg"
    },

    pulpo: {
        nombre: "PULPO",
        imagen: "imagenes/pulpo.jpeg"
    },

    tiburon: {
        nombre: "TIBURÓN",
        imagen: "imagenes/tiburon.jpeg"
    },

    ballena: {
        nombre: "BALLENA",
        imagen: "imagenes/ballena.jpeg"
    },

    caballito: {
        nombre: "CABALLITO DE MAR",
        imagen: "imagenes/caballito.jpeg"
    },

    cangrejo: {
        nombre: "CANGREJO",
        imagen: "imagenes/cangrejo.jpeg"
    },

    estrella: {
        nombre: "ESTRELLA DE MAR",
        imagen: "imagenes/estrella.jpeg"
    },

    pez: {
        nombre: "PEZ",
        imagen: "imagenes/pez.jpeg"
    },

    pezespada: {
        nombre: "PEZ ESPADA",
        imagen: "imagenes/pezespada.jpeg"
    },

    pezpayaso: {
        nombre: "PEZ PAYASO",
        imagen: "imagenes/pezpayaso.jpeg"
    },

    pezglobo: {
        nombre: "PEZ GLOBO",
        imagen: "imagenes/pezglobo.jpeg"
    }

};


const parametros = new URLSearchParams(window.location.search);

const elegido = parametros.get("animal");


const imagen = document.getElementById("animal");
const nombre = document.getElementById("nombre");


if (animales[elegido]) {

    imagen.src = animales[elegido].imagen;
    imagen.alt = animales[elegido].nombre;

    nombre.textContent = animales[elegido].nombre;

} else {

    nombre.textContent = "ANIMAL DEL MAR";

    imagen.src = "imagenes/delfin.png";

}
