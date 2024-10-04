// Ejercicio 1: Operaciones básicas con Arrays 
// 1. Declara un array de números con los valores [5, 10, 15, 20, 25].
const arrayNumeros:number[] = [5, 10, 15, 20, 25];
// 2. Imprime el tercer elemento del array.
console.log("El tercer elemento del array es: ");
console.log(arrayNumeros[2]);
// 3. Añade el número 30 al final del array.
arrayNumeros.push(30);
console.log("Array con numero añadido al final");
console.log(arrayNumeros);
// 4. Elimina el primer número del array.
arrayNumeros.shift();
console.log("Se elimina el numero 5 al principio:");
console.log(arrayNumeros);
// 5. Muestra por consola la longitud actual del array.
console.log("Longitud del array");
console.log(arrayNumeros.length);


