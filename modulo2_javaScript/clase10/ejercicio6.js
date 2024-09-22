// Ejercicio 6: Bucle For – Array 
// Escribe un programa en JavaScript que clasifique diferentes animales 
// en tres categorías: "mamífero", "ave" o "reptil". Se te proporciona un 
// array llamado animales que contiene nombres de diferentes animales. 
// Utiliza un bucle for y operadores ternarios para crear un nuevo array 
// llamado clasificacion que contenga la clasificación de cada animal 
// según su tipo.

let animales = ["perro", "gato", "loro", "serpiente", "elefante", "aguila"];

let clasificacion = [];


for (let i = 0; i < animales.length; i++) {
    let animal = animales[i];
    
    // condicion ? primera expresion : segunda expresion 
 let categorías =   (animal === "perro" || animal === "gato" || animal === "elefante") ? "Es mamífero":
                    (animal === "loro" || animal === "aguila") ? "Es un ave": 
                    (animal === "serpiente") ? "Es un reptil": "";
 clasificacion.push(categorías);
    
}
console.log(clasificacion);
