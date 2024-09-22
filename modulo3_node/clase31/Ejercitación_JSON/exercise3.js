// Objetivo: Convertir una cadena JSON a un objeto y acceder a sus 
// propiedades.

const libro = `{ "title": "Cien años de soledad", "author": "Gabriel Garcia Marquez", "year": 1967}`;
const obj = JSON.parse(libro);

console.log(obj.title);
console.log(obj.author);
console.log(obj.year);



