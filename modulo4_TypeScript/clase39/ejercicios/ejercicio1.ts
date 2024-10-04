// Ejercicio 1: Declarar y usar funciones con tipos
// Consigna: Crea una función llamada multiplicarNumeros que acepte dos 
// parámetros, ambos de tipo number, y retorne el producto de ambos números. 
// Luego, muestra el resultado en consola llamando a la función.

const multiplicarNumeros = (params1:number, params2:number): number  => params1 * params2;

let resultado: number = multiplicarNumeros(10, 5);
console.log(resultado);
