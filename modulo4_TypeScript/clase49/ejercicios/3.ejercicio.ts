// Ejercicio 3: Uso de type con unión de tipos y función que retorna tupla
// Define un type que pueda representar tanto números como cadenas. Crea una 
// función que reciba dos parámetros de este tipo y retorne una tupla con el tipo 
// de cada parámetro.

type Mixto = number|string;

function tipos(primero:Mixto, segundo:Mixto):[string,string] {
    return [typeof primero, typeof segundo];
}
console.log(tipos("Hola que tal", 10));

