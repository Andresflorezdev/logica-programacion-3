const prompt = require("prompt-sync")();

let dato = prompt("Ingresa numero para calcular su factorial: ");
let numero = Number(dato);

if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
    console.log("Error, ingresa un numero entero valido");
} else {
    let facto = 1;
    for (let i = 1; i <= numero; i++) {
        facto = facto * i
    }
    console.log("el factorial de " + numero + " es: " + facto);
}