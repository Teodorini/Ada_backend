// Ejercicio 5: Manipulación de Arrays y Cadenas 
// A partir del siguiente array de frases, escribe la función “procesarFrases”

let frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
];
function procesarFrases(frases) {

// 1. Convierta cada frase a minúsculas. Investigar el método “.toLowerCase()” para este punto.
let frasesEnMinusculas = frases.map((frase) => frase.toLowerCase());

// 2. Divida cada frase en palabras.
let dividirFrases = frases.map((frase) => frase.split(` `));

// 3. Reemplace las palabras "malo" por "bueno". 
let reemplazarPalabra = frases.map((frase) => frase.replace(/MALO/g, "BUENO"));

// 4. Combine las palabras de cada frase en una nueva cadena separada por espacios.
let combinarPalabras = frases.map((frase) => frase.split(`/\ `)).join(`  `);

// 5. Devuelva un nuevo array con las frases modificadas. 
let frasesModificadas = frases.map((frase) => {
    let nuevaFrase = frase.replace(/es/g, "está" );
    nuevaFrase = nuevaFrase.replace(/MALO/g, "buenisimo!");
    nuevaFrase= nuevaFrase.replace("muy", "re");

    return nuevaFrase
    
});

    return {
    minusculas: frasesEnMinusculas,
    dividir: dividirFrases,
    reemplaza: reemplazarPalabra,
    combinar : combinarPalabras,
    modificar: frasesModificadas
    
   }
}
console.log(procesarFrases(frases));

