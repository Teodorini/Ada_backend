// DESAFIO Ejercicio 6: Hash de Contraseña con Sal
// Crea un script en Node.js que permita al usuario ingresar una 
// contraseña y un "sal" (un valor aleatorio que se usa para añadir seguridad). Luego, genera un hash de la contraseña combinada con el 
// "sal" usando el algoritmo SHA-256. Muestra el hash generado.

const crypto = require(`crypto`);
const readlineSync = require(`readline-sync`);

const password = readlineSync.question(`Ingrese su password: `);
const sal = readlineSync.question(`Ingrese un valor para agregar seguridad: `);
const contraSal = password + sal;
const hash = crypto.createHash(`sha256`);
hash.update(contraSal);
const hasOutput = hash.digest(`hex`);
console.log(`Su contraseña combinada con el valor agregado es : ${hasOutput} `);

