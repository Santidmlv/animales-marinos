const animales = {

    delfin: {
        nombre: "DELFIN",
        imagen: "imagenes/delfin.jpeg"
    },

    tortuga: {
        nombre: "TORTUGA MARINA",
        imagen: "imagenes/tortuga.png"
    },

    pulpo: {
        nombre: "PULPO",
        imagen: "imagenes/pulpo.png"
    },

    tiburon: {
        nombre: "TIBURÓN",
        imagen: "imagenes/tiburon.png"
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
