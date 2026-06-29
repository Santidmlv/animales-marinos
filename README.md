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

| Clave URL     | Nombre que se muestra |
|---------------|-----------------------|
| `delfin`      | Delfín                |
| `tiburon`     | Tiburón               |
| `tortuga`     | Tortuga Marina        |
| `pulpo`       | Pulpo                 |
| `caballito`   | Caballito de Mar      |
| `raya`        | Raya                  |
| `cangrejo`    | Cangrejo              |
| `medusa`      | Medusa                |
| `pez_payaso`  | Pez Payaso            |

## Agregar un nuevo animal

1. Poné la foto en la carpeta `/imagenes/` (JPG o PNG)
2. Abrí `script.js` y agregá una entrada en el objeto `ANIMALES`:

```js
ballena: {
  nombre: "Ballena Jorobada",
  imagen: "imagenes/ballena.jpg"
}
```

3. Generá un QR que apunte a `?animal=ballena`

## Estructura de archivos

```
animales-marinos/
├── index.html
├── estilo.css
├── script.js
└── imagenes/
    ├── delfin.jpg
    ├── tiburon.jpg
    └── ...
```

## Hosting

Podés subir todo esto directamente a **GitHub Pages**:
- Activá Pages en tu repo (Settings → Pages → branch `main`)
- Las URLs van a quedar como: `https://santidmlv.github.io/animales-marinos/?animal=delfin`
