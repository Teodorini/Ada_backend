// Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
// valores numéricos de tu elección. Pide al usuario que ingrese un 
// número y verifica si está dentro del rango definido por las constantes

const prompt=require('prompt-sync')({sigint:true});

const RANGO_MINIMO = 0;
const RANGO_MAXIMO = 100;
let numero = parseInt(prompt("Ingrese un múmero: "));

if(numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO){
    console.log("Estas dentro del rango minimo permitido")
} else{
    console.log("Estas fuera del rango maximo permitido")
}