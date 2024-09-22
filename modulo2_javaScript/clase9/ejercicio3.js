// Ejercicio 3: Switch.crea un programa que le pida al usuario 
// valorar la película 

const prompt = require("prompt-sync")();

let valorarcion = prompt("Valore la pelicula: Elige entre: Muy mala, Mala, Mediocre, Buena Y Muy buena. ");
 

switch (valorarcion) {
    case "Muy mala":
        console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho");
        console.log("Gracias por tu calificación!");
        break;
    case "Mala":
        console.log("Calificaste la película como Mala. Lo lamentamos mucho");
        console.log("Gracias por tu calificación!");
        break;
    case "Mediocre":
        console.log("Calificaste la película como Mediocre. ohhh nooo :( ");
        console.log("Gracias por tu calificación!");
        break;   
    case "Buena":
        console.log("Calificaste la pelicula como buena. bien!!");
        console.log("Gracias por tu calificación!");
        break;
     case "Muy buena":
        console.log("Calificaste la pelicula como Muy buena! nos alegramos!");
        console.log("Gracias por tu calificación!");
        break;
        
    default: console.log("Ingresaste un valor inválido")
    console.log("Intentalo nuevamente");
        break;
    }
    

