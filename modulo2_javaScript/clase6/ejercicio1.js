/*Piensa dos situaciones de la vida cotidiana e identifica las variables que conllevan.
Luego de pensar todas esas variables con sus respectivos valores, debes escribirlas en un archivo .js 
que esté correctamente guardado en la carpeta de trabajo armaste en clases pasadas (“ADA_TRABAJOS”).
 Dentro de esa carpeta debe estar la carpeta “clase6” y colocar allí tu archivo con extensión .js.*/

// Situacion: Mantenimiento del auto.

const prompt = require("prompt-sync")();

// 1- Presupuesto Mensual disponible ingresado por el usuario.
let presupuestoDisponible = parseFloat(prompt("Ingrese su presupuesto mensual disponible: "));

// gastos mensuales fijos.
let precioDeSeguro = 36.000;
let precioDeCombustible = 52.000;
let precioDepeajes = 2.500;
let precioPatente = 45.000;
let precioLavado = 6.000; 

// 2- pedir el ingreso de veces que se paga por mes
let vecesSeguro = prompt("Ingrese cuantas veces paga el seguro por mes: ");
let VecesCombustible = prompt("Ingrese cuantas veces carga combustible en el mes: ");
let VecesPeaje = prompt("Ingrese cantidad de veces que pasa por el peaje: ");
let patente = prompt("Ingrese cuantas patentes paga por mes: ");
let lavado = prompt("Ingrese numero de veces que lava su auto al mes: ");

// 3 calcular total gastado.

let totalDeGastosMensuales = (vecesSeguro * precioDeSeguro) + (VecesCombustible * precioDeCombustible) + (VecesPeaje * precioDepeajes) + (patente * precioPatente) + (lavado * precioLavado);

// 4- Mostrar resultados
console.log("El presupuesto disponible es: $" + presupuestoDisponible);
console.log("El total es: $" + totalDeGastosMensuales);








