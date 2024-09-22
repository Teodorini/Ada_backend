/*Ejercicio 3 - Calculadora Simple: 
Escribe un programa que pida al usuario dos números y una operación (suma, resta, multiplicación o división). 
Luego, realiza la operación indicada y muestra el resultado en la consola.
Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides usar “let” para definir variables.
Pista 2: Investiga que es parseFloat, ya que este ejercicio lo necesitaras.*/

const prompt = require("prompt-sync")();

//numero ingresado por usuario

let numeroUno = parseFloat(prompt("Ingrese un numero: "));
let numeroDos = parseFloat(prompt("Ingrese otro numero: "));
let calcular = (prompt("Ingrese la operacion matematica que desee: "));
let resultadoDeOperacion = "";
if (calcular === "+") {
   resultadoDeOperacion = numeroUno + numeroDos
   console.log(resultadoDeOperacion);

} else if (calcular === "-") {
    resultadoDeOperacion = numeroUno - numeroDos
    console.log(resultadoDeOperacion);

} else if (calcular === "*") {
    resultadoDeOperacion = numeroUno * numeroDos
    console.log(resultadoDeOperacion);

} else if (calcular === "/") {
    resultadoDeOperacion = numeroUno / numeroDos
    console.log(resultadoDeOperacion);

} else console.log("Ingrese una operacion valida");




