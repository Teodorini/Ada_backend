"use strict";
// Ejercicio 6: Tipos de parámetros y funciones que retornan objetos
// Consigna: Crea una función llamada crearPersona que acepte tres parámetros: 
// nombre (string), edad (number), y pais (string). La función debe devolver un 
// objeto que tenga esas propiedades. Luego, imprime el objeto retornado en la 
// consola
function crearPersona(nombre, edad, pais) {
    return {
        nombre,
        edad,
        pais
    };
}
;
let persona = (crearPersona("Mariana", 43, "Argentina"));
console.log(persona);
