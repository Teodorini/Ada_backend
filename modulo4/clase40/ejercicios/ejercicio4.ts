// Ejercicio 4: Manipulación de Arrays 
// 1. Crea un array que contenga los nombres de tus 5 frutas favoritas.
export let frutas: string [] = ["Banana", "Manzana", "Frutilla", "Uva", "Naranja"];
// 2. Usa un método para añadir otra fruta al final del array.
frutas.push("Arandanos");

// 3. Encuentra el índice de una fruta específica (por ejemplo, "Manzana") 
// dentro del array.
let indice = frutas.indexOf("Manzana");
console.log(indice);

// 4. Elimina la última fruta y muestra el array actualizado por consola.
frutas.pop();
console.log(frutas);

