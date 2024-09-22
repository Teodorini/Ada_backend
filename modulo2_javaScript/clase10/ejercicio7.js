// Ejercicio 7: Uso de Arrays y Condicionales 
// Crea un programa que solicite al usuario ingresar 5 nombres y los 
// almacene en un array. Luego, solicita al usuario ingresar un nombre y 
// verifica si ese nombre se encuentra en el array. (Pueden desglosar en 
// pasos el código si eso les facilita su desarrollo)

const prompt = require("prompt-sync")();
let arrayNombres = [];
let nombre = [];

for (let i = 0; i < 5; i++) {
    nombre = prompt("Ingrese nombres: ");
    
   arrayNombres.push(nombre);

}
let buscarNombre = prompt("Ingrese el nombre a verificar: ");
let encontrado = buscarNombre
let noEncontrado ;
for (let i = 0; i < arrayNombres.length; i++) {
   if (arrayNombres[i] === buscarNombre) {
   
    console.log(`El nombre ${encontrado} se encuentra en la lista`);
} }
