// Ejercicio 8: Uso de Bucles y Arrays 
// Escribe un programa que solicite al usuario ingresar 5 paises y los 
// almacene en un array. Luego, imprime en consola todos los paises de 
// manera alfabetica.  
// Importante: Este ejercicio puede ser resulto con el método sort(). 

const prompt = require("prompt-sync")();
let paises = []
let paisesUsuario = []
for (let i = 0; i < 5; i++) {
    paises = prompt("Ingrese nombres de Paises: ");
    paisesUsuario.push(paises);
}
console.log(paisesUsuario);

let ordenAlfabetico = paisesUsuario.sort();
console.log(ordenAlfabetico);