// Ejercicio 2: Análisis y Modificación de Cadenas de Texto 
// Pide al usuario que ingrese una oración. Luego, escribe la función 
// “procesarOracion” 

const prompt = require("prompt-sync")();

let oracionUsuario =(prompt("Ingrese una oración: "));

function procesarOracion(oracionUsuario) {
    
// 1.Quite los espacios en blanco al principio y al final. 
let espacios = oracionUsuario.trim();
// 2. Divida la oración en palabras.
let dividir = oracionUsuario.split(" ");
// Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar “/a/g”
let reemplazar = oracionUsuario.replace(/a/g,"@" );
// 4. Encuentre la posición de la primera aparición de la palabra 
// "javascript". De no aparecer retornar -1 
let buscar = oracionUsuario.indexOf("js");
// Convierta la oración a una cadena de palabras separadas por 
// guiones. 
let separar = dividir.join("-");

return {
    
    Dividida : separar,
    posicion : buscar,
    reemplazar : reemplazar
}
}
let resultadoFinal = procesarOracion(oracionUsuario)
console.log(resultadoFinal);
