// Ejercicio 8: Uso de métodos de arrays
// 1. Declara un array que contenga los nombres de 5 países.
let arrayPaises: string[] = ["Argentina", "Paraguay", "Colombia", "Venezuela", "Peru"];

// 2. Ordena el array en orden alfabético.

arrayPaises.sort();
// console.log(arrayPaises);

// 3. Usa un método para agregar otro país al inicio del array.
arrayPaises.unshift("Ecuador");
console.log(arrayPaises);


// 4. Elimina el último país del array.
arrayPaises.pop();
console.log(arrayPaises);

// 5. Recorre el array y muestra cada país por consola.
arrayPaises.forEach(pais => console.log(pais));
