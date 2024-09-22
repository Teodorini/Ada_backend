// • Ejercicio 1: Calcular el precio final con IVA 
// Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una 
// función flecha para calcular el precio final.

const prompt = require("prompt-sync")();

let precio = parseFloat(prompt("Ingrese el precio del producto: "));
let iva = parseInt(prompt("Ingrese el % de IVA, ingrese solo numeros: "));

let calcularIva = (precio, iva) => precio + (precio * iva / 100);


console.log("El precio con IVA incluido es: " + calcularIva(precio, iva));

