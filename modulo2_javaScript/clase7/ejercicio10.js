// Ejercicio 10 - Cálculo de Descuento:
// calcule el precio final de un producto después de aplicar un descuento. 
// Pide al usuario que ingrese el precio original y el porcentaje de 
// descuento, y muestra el precio final.
// Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
// Pista 2: La fórmula puede representarse asi:
// let montoDescuento = precioOriginal * (porcentajeDescuento / 100)

const prompt = require("prompt-sync")();

let precio = parseFloat(prompt("Ingrese el precio: "));
let descuento = parseFloat(prompt("Ingrese porcentaje de descuento: "));
let calculo = precio * descuento / 100;
let PrecioConDescuento = precio - descuento;
console.log("El precio con descuento es: " + PrecioConDescuento);