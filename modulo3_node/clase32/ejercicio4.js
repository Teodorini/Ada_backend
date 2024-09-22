// Ejercicio 4: Ordenar una Lista de Números
// Crea un script en Node.js que permita al usuario ingresar una lista de 
// números separados por comas. Ordena los números de menor a mayor 
// y muestra la lista ordenada.
const readlineSync = require(`readline-sync`);

const entradaUsuario = readlineSync.question(`Ingrese numeros desordenados separados por comas: `);
const numeros = entradaUsuario.split(",").map(num => parseInt(num.trim(), 10));
numeros.sort((a, b) => a - b);
console.log(`Lista ordenada alfabeticamente ${numeros.join(`,`)}`);





