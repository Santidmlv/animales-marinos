# 🌊 Animales del Mar

Página de revelación de animales marinos, diseñada para usarse con QR codes en un memotest físico/virtual.

## Cómo funciona

Cada QR apunta a la URL con un parámetro `?animal=`:

```
https://tu-sitio.com/index.html?animal=delfin
https://tu-sitio.com/index.html?animal=tiburon
https://tu-sitio.com/index.html?animal=tortuga
```

Al abrir la URL, la página muestra la **foto** y el **nombre** del animal con animación de océano.

## Animales disponibles

| Clave URL    | Nombre que se muestra |
|--------------|-----------------------|
| `ballena`    | Ballena               |
| `caballito`  | Caballito de Mar      |
| `cangrejo`   | Cangrejo              |
| `delfin`     | Delfín                |
| `estrella`   | Estrella de Mar       |
| `pez`        | Pez                   |
| `pezespada`  | Pez Espada            |
| `pezglobo`   | Pez Globo             |
| `pezpayaso`  | Pez Payaso            |
| `pulpo`      | Pulpo                 |
| `tiburon`    | Tiburón               |
| `tortuga`    | Tortuga Marina        |

## Agregar un animal nuevo

1. Poné la foto en la carpeta `/imagenes/` en formato `.jpeg`
2. Abrí `script.js` y agregá una entrada en el objeto `ANIMALES`:

```js
medusa: {
  nombre: "Medusa",
  imagen: "imagenes/medusa.jpeg"
}
```

3. Generá un QR que apunte a `?animal=medusa`

## Estructura de archivos

```
animales-marinos/
├── index.html
├── estilo.css
├── script.js
└── imagenes/
    ├── ballena.jpeg
    ├── caballito.jpeg
    ├── cangrejo.jpeg
    ├── delfin.jpeg
    ├── estrella.jpeg
    ├── pez.jpeg
    ├── pezespada.jpeg
    ├── pezglobo.jpeg
    ├── pezpayaso.jpeg
    ├── pulpo.jpeg
    ├── tiburon.jpeg
    └── tortuga.jpeg
```

## Hosting con GitHub Pages

Activá Pages en tu repo (Settings → Pages → branch `main`) y las URLs quedan así:

```
https://santidmlv.github.io/animales-marinos/?animal=delfin
https://santidmlv.github.io/animales-marinos/?animal=tiburon
```
