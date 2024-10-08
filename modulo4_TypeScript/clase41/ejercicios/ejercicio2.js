"use strict";
// Ejercicio 2: Creación de Objetos y Atributos 
// 1. Define un objeto que represente un libro con las siguientes propiedades: 
// título, autor, y año de publicación.
Object.defineProperty(exports, "__esModule", { value: true });
exports.libro1 = void 0;
class Libro {
    constructor(titulo, autor, anioPublicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }
}
exports.libro1 = new Libro("Cien Anios de Soledad", "Garcia Marquez", 1967);
console.log(`Titulo: ${exports.libro1.titulo}, Autor: ${exports.libro1.autor}, Anio de publicacion: ${exports.libro1.anioPublicacion}`);
// 2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.
