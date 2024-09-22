// Ejercicio 2: Matriz 5x5 
// Declara una variable que contenga una matriz de 5x5 llena de puros 
// numeros enteros y positivos. Luego, escribe un algoritmo para sumar 
// todos los numeros en la matriz. 

let matriz = [
    [10, 2, 15, 25, 3],
    [24, 48, 100, 32, 15],
    [11, 14, 75, 20, 33],
    [88, 13, 44, 6, 7],
    [20, 30, 40, 50, 60]
]
let suma = 0;
for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
       suma += matriz[fila][columna];
        
    }
    
}
console.log(suma);