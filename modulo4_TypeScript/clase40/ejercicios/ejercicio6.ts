// // jercicio 6: Combinando Arrays, Tuplas y Enum
// // 1. Declara un enum llamado Colores con los valores Rojo, Verde, Azul.
enum colores {
    rojo,
    verde,
    azul
}
// // 2. Crea un array de tuplas donde cada tupla tenga el nombre de un color
// // (string) y el valor correspondiente del enum.
let arrayDeColores: [string, colores][] = [
    ["rojo", colores.rojo],
    ["verde", colores.verde],
    ["azul", colores.azul]
];

// // 3. Añade una tupla más con otro color y su valor del enum.
arrayDeColores.push(["amarillo", colores.rojo])
// // 4. Muestra por consola todo el array de tuplas.
console.log(arrayDeColores);



