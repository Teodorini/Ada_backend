// Ejercicio 4: Transformación y Análisis de Cadenas 
// Pide al usuario que ingrese una lista de nombres separados por comas. 
// Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, “Pablo” y “Pedro”.
//  Luego, escribe la función “transformarYAnalizarNombres”que realice las sig tareas
const prompt = require("prompt-sync")();
const nombres =(prompt("Ingrese nombres separados por comas:  "));

function transformarYAnalizarNombres(nombres) {
// 1. Quite los espacios en blanco alrededor de cada nombre.   
let arrayNombres = nombres.split(",")
let quitarEspacios = arrayNombres.map((nombre) => nombre.trim());

// 2. Verifique si existe el nombre "Juan".
let nombreABuscar = "Juan";
let buscarNombre = nombres.includes(nombreABuscar);

// 3. Reemplace todos los nombres "María" por "Ana". 
let reemplazarNombre = nombres.replace(/Maria/g, "Ana");

// 4. Encuentre el índice del nombre "Pedro". 
let indice = nombres.indexOf("Pedro");

// 5. Devuelva una cadena de nombres en orden alfabético separados 
// por puntos. Investigar el método “.sort()” 
ordenAlfabetico = arrayNombres.sort().join(`.`);

return {
    quitarEspacios,
nombreEncontrado : buscarNombre,
ReemplazarNombre : reemplazarNombre,
Indice : indice,
Alfabeticamente: ordenAlfabetico
}
}
console.log(transformarYAnalizarNombres(nombres));