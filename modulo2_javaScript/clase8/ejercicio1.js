// Ejercicio 1: 
// Declara dos variables numéricas numero1 y numero2. Pide al usuario 
// que ingrese dos números y muestra cuál es mayor o si son iguales

const prompt=require('prompt-sync')({sigint:true});

let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

if(numero1 > numero2){
    console.log("El mayor es: " + numero1)
} else if(numero2 > numero1){
    console.log("El mayor es: " + numero2)
}else{
    console.log("Los dos números son iguales " )

}