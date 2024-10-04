// Ejercicio 2: Tuplas para almacenar información 
// 1. Declara una tupla para representar un libro con la siguiente información: 
// título (string), año de publicación (número) y si está disponible (booleano).
export let libro: [string, Number, boolean];

// 2. Inicializa la tupla con los valores: "El principito", 1943, true.
libro = ["El principito", 1943, true];

// 3. Imprime el título del libro y el año de publicación.
console.log(libro[0], libro[1]);

// 4. Cambia el valor de disponibilidad a false y muestra el nuevo valor por 
// consola.
libro[2] = false;
console.log(`Nueva disponibilidad ${libro[2]}`);


