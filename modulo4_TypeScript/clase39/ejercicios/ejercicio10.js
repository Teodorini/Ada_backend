"use strict";
// Ejercicio 10: Funciones y arrays de objetos
// Consigna: Crea una función llamada listarLibros que acepte un array de objetos 
// libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La 
// función debe recorrer el array y mostrar los detalles de cada libro en la consola.
let libro = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel Garcia Marquez"
    },
    {
        titulo: "Rayuela",
        autor: "Julio Cortazar"
    },
    {
        titulo: "El principito",
        autor: "Antoine de Saint-Exupery"
    }
];
function listarLibros(libros) {
    libros.forEach(libro => {
        console.log(`Titulo: ${libro.titulo}, Autor: ${libro.autor}`);
    });
}
;
listarLibros(libro);
