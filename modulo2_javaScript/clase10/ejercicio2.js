// Ejercicio 2: Switch  
// Usando la estructura switch, crea un programa en el que si un usuario 
// ingresa "casa", "perro", "pelota", "árbol" o "genio", nos devuelva la 
// misma palabra traducida al idioma inglés. 
// En caso de que la palabra sea distinta a la esperada, mostrarle un 
// mensaje que le informe que la palabra ingresada es incorrecta. 
const prompt = require("prompt-sync")();
let palabra = (prompt("Ingrese una palabra entre casa, perro, pelota, árbol o genio para su traducción:  "));
switch (palabra) {
    case "casa":
        console.log("House");
        break;
    case "perro":
        console.log("Dog");
        break;  
    case "pelota":
        console.log("Ball");
         break;
    case "arbol":
        console.log("tree");
         break;
    case "genio":
        console.log("genius");
         break;
   
         default: console.log("La palabra ingresada es incorrecta");
        break;
}