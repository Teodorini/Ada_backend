"use strict";
// Consigna: Crea una función llamada crearLibro que acepte tres parámetros: 
// titulo (string), autor (string) y paginas (number). La función debe devolver un 
// objeto con esas propiedades. Luego, crea dos libros utilizando la función y 
// muestra sus detalles en la consola.
function crearLibro(titulo, autor, paginas) {
    return {
        titulo,
        autor,
        paginas
    };
}
// crear dos libros utlizando la funcion
const libro1 = crearLibro("Cien años de soledad", "Gabriel Garcia Marquez", 500);
const libro2 = crearLibro("Historias de Divan", "Gabriel Rolon", 250);
console.log(libro1);
console.log(libro2);
