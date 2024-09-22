// • Ejercicio 5: Números Naturales 
// Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra 
// que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo 
// contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras. 
// Considerar que el usuario ingresa números de hasta dos cifras
const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingrese un numero: "));

if (numero < 10 && numero > 0) {
    let faltantePara2 = 10 - numero;
    console.log(`Le faltan ${faltantePara2} cifras`);
} else if (numero < 100 && numero >= 10){
    let faltantePara3 = 100 - numero
    console.log(`Le faltan ${faltantePara3} cifras`);
} else{
    console.log(`numero incorrect0`);
}
