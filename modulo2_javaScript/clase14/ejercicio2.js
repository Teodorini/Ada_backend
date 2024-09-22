// • Ejercicio 2: Libros 
// Define dos objetos libro1 y libro2 con las siguientes propiedades y valores: 
// ✓ título: una cadena con el título del libro. 
// ✓ autor: una cadena con el nombre del autor del libro. 
// ✓ anioPublicacion: un número con el año de publicación del libro. 
// Luego, crea una función llamada mostrarLibro que tome un arreglo de libros 
// como parámetro y muestre por consola la información de cada libro en el 
// formato especificado. 

let libro1 = {
    titulo: "Este dolor no es mío",
    autor: "Mark Wolinn",
    anioPublicacion: 2010,
}
let libro2 = {
    titulo: "Historias inconscientes",
    autor: "Gabriel Rolón",
    anioPublicacion: 2014,
}
let libros = [];
function mostrarLibros(libros) {
    libros.push(libro1, libro2);
    return libros
}
console.log(mostrarLibros(libros));