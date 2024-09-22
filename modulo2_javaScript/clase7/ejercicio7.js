// Ejercicio 7 - Intercambio de Valores: Declara dos variables con 
// valores iniciales y luego intercambia sus valores. Muestra los valores 
// antes y después del intercambio en la consola.
// Para intercambiar valores puedes usar varios métodos(usando una 
// variable temporal, aritmética o asignación simultanea), eres libre de 
// elegir el que desees, eso si, investiga sobre el que usaras.

let valor1 = 13;
let valor2 = 33;

console.log("Valor original");
console.log("Valor 1: " + valor1);
console.log("Valor 2: " + valor2);

//Intercambio

let temporal = valor1;
valor1 = valor2;
valor2 = temporal;

console.log("Valores intercambiados ");

console.log("El valor 1 es : " + valor1);
console.log("El valor 2 es : " + valor2);