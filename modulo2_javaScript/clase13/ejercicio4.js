// Ejercicio 4: Numero pares 
 // Escribí un programa que imprima los números pares del 0 al 100.
 //imprimir el resultado. Agreguen los números pares a un array.
let numerosPares = [];
 for (let i = 0; i <= 100; i++) {
   if (i % 2 === 0) {
        numerosPares.push(i);
    }
}
console.log(numerosPares);



