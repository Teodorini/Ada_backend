"use strict";
// Ejercicio 4: Parámetros opcionales simulados
// Declara dos variables, una para almacenar un nombre y otra para almacenar una 
// edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no 
// proporcionada". Si se asigna la edad, imprímela junto al nombre.
let nombre2 = "Juan";
let edad2 = null;
if (edad2 === null) {
    console.log(`Edad no proporcionada`);
}
else {
    console.log(`Mi nombre es ${nombre2} y mi edad es ${edad2}`);
}
