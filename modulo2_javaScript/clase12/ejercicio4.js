// • Ejercicio 4: Calcular descuento por cantidad 
// Solicita al usuario la cantidad de productos comprados y el precio unitario. 
// Usa una función flecha para calcular el total con descuento según la cantidad. 

const prompt = require("prompt-sync")();

let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos: "));
let precioUnitario = parseFloat(prompt("Ingrese el precio del producto: ")); 

let descuentoPorCantidad = (cantidadProductos, precioUnitario) =>{
    let multiplicacion = cantidadProductos * precioUnitario
    
    if (cantidadProductos >= 10) {
       let descuento = multiplicacion - multiplicacion * 0.25;
        return `Por llevar 10 productos tiene un descuento del 25 %! el total es: ${descuento}`
    } else if (cantidadProductos < 10) {
      return `No se aplica descuento, el total es: ${multiplicacion}` 
    } 
}

console.log(descuentoPorCantidad(cantidadProductos,precioUnitario));