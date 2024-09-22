// Ejercicio 5: If Ternario 
// Escribe un programa que lea una nota (entero entre 0 y 100) e imprima 
// el equivalente en letras siguiendo esta escala:
// ✓ A si la nota está entre 90 y 100 
// ✓ B si la nota está entre 80 y 89 
// ✓ C si la nota está entre 70 y 79 
// ✓ D si la nota está entre 60 y 69 
// ✓ F si la nota está entre 0 y 59 
// Utiliza operadores ternarios para determinar la calificación en letras. 


// si es verdadera ejecuta la 1ra si es falsa la segunda

let nota = 59

nota >= 90 && nota <= 100 ? console.log("La nota es A") :"";
nota <= 89 && nota >= 80 ? console.log("La nota es B") : "";
nota >= 70 && nota <= 79 ? console.log("La nota es C") : "";
nota <= 69 && nota >= 60 ? console.log("La nota es D") : "";
nota <= 59 ? console.log("La nota es F"):"";


