// Ejercicio 7: “La Floreria” 
// Escribe una función "gestionarFloreria" que realice las siguientes tareas con una lista predefinida de nombres de flores
let entrada = "Rosa, Tulipán, Orquidea, Lirio";

let gestionarFloreria = (entrada) => {

// 1. Quite los espacios en blanco alrededor de cada flor.
let arrayDeFlores = entrada.split(",").map(flor => flor.trim());

// 2. Verifique si existe la flor "Margarita" y, si está presente, agregue "Azucena" al final de la lista.
let verificarFlor = arrayDeFlores;
    if (arrayDeFlores.includes("Margarita")) {
        arrayDeFlores.push("Azucena");
    }

// 3. Reemplace todas las flores "Orquídea" por "Clavel". 
let reemplazarFlor = entrada.replace("Orquidea", "Clavel");
    
// 4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue "Girasol" al inicio de la lista.
 
   let indiceGirasol = arrayDeFlores.indexOf("Girasol");

   let agregarGirasol = arrayDeFlores
   if (indiceGirasol === -1) {
        arrayDeFlores.unshift("Girasol");
   }

   //  5. Devuelva una cadena de flores en orden alfabético separadas por puntos.
   let separarPuntos = arrayDeFlores.sort().join(". ");


  
    return {
        arrayDeFlores,
        verificarFlor,
        reemplazarFlor,
        indiceGirasol,
        agregarGirasol,
        separarPuntos

}};
console.log(gestionarFloreria(entrada));
