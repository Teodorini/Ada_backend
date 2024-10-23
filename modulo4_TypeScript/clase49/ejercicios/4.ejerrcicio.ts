// Ejercicio 4: Herencia en interfaces 
// Define una interfaz Vehiculo que tenga propiedades comunes como marca y 
// modelo. Luego, define otra interfaz Auto que extienda a Vehiculo agregando 
// una propiedad cantidadDePuertas. Implementa un objeto de tipo Auto.

export interface Vehiculo {
    marca: string,
    modelo: string,
}

interface Auto extends Vehiculo {
    cantidadDePuertas: number;
}

const miauto: Auto = {
    marca: "Honda",
    modelo: "Fit",
    cantidadDePuertas: 5,
}

console.log(miauto);


