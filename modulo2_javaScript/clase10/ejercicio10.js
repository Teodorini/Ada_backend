// Ejercicio 10: While y Do While 
// Implementa un programa que permita al usuario registrar la edad de 
// mascotas en una veterinaria hasta que decida dejar de agregar. 
// Cuando el usuario no agregue mas edades, imprimir en consola las 
// mascotas agregadas anteriormente y sus respectivas edades.
const prompt = require("prompt-sync")();

let nombreMascotas = [];
let edadMascotas = [];
let datosIngresados ;

do { let nombre = prompt("Ingrese nombre de su mascota: ")
     let edad = prompt("Ingrese la edad de su mascota: ");
    datosIngresados = prompt("Desea ingresar mas datos?: (si/no): ");       

    nombreMascotas.push(nombre);
    edadMascotas.push(edad);


} while (datosIngresados === "si");

console.log(`Las mascotas registradas son: `);


for (let i = 0; i < nombreMascotas.length; i++) {
    console.log("Nombre: " + nombreMascotas[i]  + ", edad: " + edadMascotas[i] + " Años");
    
}




