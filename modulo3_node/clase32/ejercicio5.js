// Crea un script en Node.js que permita al usuario ingresar un texto, luego 
// lo cifre usando el algoritmo AES-256-CBC y lo descifre para mostrar el 
// resultado original. Usa el módulo crypto para el cifrado y descifrado


const crypto = require(`crypto`);
const readlineSync = require(`readline-sync`);


const algoritmo = `aes-256-cbc`;
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const entrada = readlineSync.question(`Ingrese texto a cifrar: `);

const cipher = crypto.createCipheriv(algoritmo, key, iv);
let encriptado = cipher.update(entrada, `utf-8`, `hex`);
encriptado += cipher.final(`hex`);
console.log(`Texto cifrado: ${encriptado}`);



// crea un objeto de cifrado encriptado
const decifrado = crypto.createCipheriv(algoritmo, key, iv);

let desencriptado = decifrado.update(encriptado, `hex`, `utf-8`);
desencriptado += decifrado.final(`utf-8`);

console.log(`Texto decifrado: ${desencriptado}`);