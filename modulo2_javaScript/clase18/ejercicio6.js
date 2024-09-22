// Ejercicio 6: Autos y más autos… 
// Escribe una función "gestionarAutos" que realice las siguientes tareas con 

let marcas = "Toyota, Honda, Ford, Chevrolet, Nissan";

function gestionarAutos(marcas) {
    
// 1. Quite los espacios en blanco alrededor de cada marca.    
let arrayMarcas = marcas.split(",");
let espaciosEnBlanco = arrayMarcas.map(marca => marca.trim());

// 2. Verifique si existe la marca "Tesla". 

let verificarMarca = marcas.includes("Tesla");

// 3. Reemplace todas las marcas "Ford" por "BMW". 
let reemplazarMarca = marcas.replace("Ford", "BMW");

// 4. Encuentre el índice de la marca "Chevrolet". 

let indiceMarca = marcas.indexOf("Chevrolet");

// 5. Devuelva una cadena de marcas en orden alfabético separadas por 
// puntos. Utilizar “.sort()” 

let cadenaMarcas = arrayMarcas.sort().join(".");


return {
    arrayMarcas,
    espaciosEnBlanco,
    verificarMarca,
    reemplazarMarca,
    indiceMarca,
    cadenaMarcas
}
}
console.log(gestionarAutos(marcas));