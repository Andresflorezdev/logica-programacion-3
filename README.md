# Calculo de Factorial

Programa para calcular el factorial de un numero entero no negativo. Incluye dos modalidades de ejecucion: una mediante consola con Node.js y otra de forma visual en el navegador interactuando con el DOM.

---

## Requisitos e Instalacion

Para ejecutar la version de consola se requiere tener instalado Node.js.

### 1. Instalacion de dependencias con pnpm

Este proyecto utiliza pnpm como gestor de paquetes. Para instalar la libreria `prompt-sync` y las dependencias del proyecto, ejecuta en la terminal:

```bash
pnpm install
```

O para instalarla directamente:

```bash
pnpm add prompt-sync
```

---

## Como ejecutar el proyecto

### Modo 1: Consola (Node.js)

Abre una terminal en la carpeta del proyecto y ejecuta el siguiente comando:

```bash
node ejercicio-logica.js
```

El programa te solicitara ingresar un numero entero, validara que sea un numero entero no negativo, calculara su factorial usando un bucle `for` y mostrara el resultado en la consola.

### Modo 2: Interfaz Web (DOM)

Abre el archivo `index.html` con cualquier navegador web. Ingresa el numero en el campo de texto y presiona el boton **"Calcular Factorial"**. El resultado aparecera debajo del boton en color verde, o un mensaje de error en rojo si el valor ingresado no es valido.

---

## Descripcion de los archivos del proyecto

- **ejercicio-logica.js**: Contiene la logica para ejecutarse directamente en la terminal de Node.js. Utiliza `prompt-sync` para leer la entrada del usuario, valida que el dato sea un numero entero no negativo y calcula el factorial mediante un bucle `for`.

- **index.html**: Archivo de marcado que define la estructura visual en el navegador. Contiene el titulo, la etiqueta, el campo de texto (`input`), el boton de calculo y el elemento `h2` donde se muestra el resultado.

- **script.js**: Archivo JavaScript encargado de manipular el DOM en el navegador. Escucha el evento de clic del boton, toma el valor del input, realiza las validaciones y el calculo del factorial, y muestra el resultado o el mensaje de error en la pagina.

- **styles.css**: Hoja de estilos que aplica diseno visual al contenido HTML.

- **package.json**: Archivo de configuracion del proyecto donde se registran las dependencias (como `prompt-sync`).

- **pnpm-lock.yaml**: Archivo de bloqueo que asegura que se instalen exactamente las mismas versiones de las dependencias con pnpm.

---

## Conceptos y metodos clave utilizados

### prompt-sync

Libreria externa para Node.js que permite pausar la ejecucion del programa en consola a la espera de que el usuario escriba un texto y presione Enter.

```js
const prompt = require("prompt-sync")();
let dato = prompt("Ingresa numero para calcular su factorial: ");
```

### document.getElementById

Metodo nativo de JavaScript que busca y devuelve una referencia al elemento HTML que coincida con el identificador (`id`) especificado.

```js
const inputValor = document.getElementById("numeroInput");
const calcularBtn = document.getElementById("calcularBtn");
const resultadoElemento = document.getElementById("resultado");
```

### addEventListener

Metodo que registra un escuchador de eventos en un elemento. En este caso, escucha el evento `click` sobre el boton **"Calcular Factorial"** para disparar la funcion de calculo.

```js
document.getElementById("calcularBtn").addEventListener("click", () => {
    // Logica de calculo del factorial
});
```

### textContent

Propiedad del DOM utilizada para actualizar el texto visible dentro de un elemento HTML de forma segura, sin inyectar codigo HTML.

```js
resultadoElemento.textContent = `El factorial de ${numero} es: ${facto}`;
```

### Validacion con Number, isNaN y Number.isInteger

- `Number(valor)`: Convierte el texto ingresado a tipo numerico.
- `isNaN(valor)`: Comprueba si el valor no es un numero valido.
- `Number.isInteger(valor)`: Verifica que el numero sea entero (sin decimales), ya que el factorial no esta definido para numeros con parte decimal.

```js
if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
    // Mostrar error
}
```

### Bucle for

Estructura de control utilizada para calcular el factorial multiplicando acumulativamente desde 1 hasta el numero ingresado.

```js
let facto = 1;
for (let i = 1; i <= numero; i++) {
    facto = facto * i;
}
```

---

## Formula utilizada

El factorial de un numero entero no negativo **n** se define como:

```
n! = 1 × 2 × 3 × ... × n
```

Casos especiales:
- `0! = 1` (por convencion matematica)
- `1! = 1`

