// Ejercicio 1: Lugar y números
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const busquedaBinaria = (list, item) => {
  //Definimos punto alto y bajo
    let bajo = 0;
    let alto = list.length -1;  
// condicion mientras bajo sea menor o igual que alto
while (bajo <= alto) {
    //encontramos la mitad
    const mitad = Math.floor((bajo + alto) / 2);
    // adivinar si es mitad
    const adivinar = list[mitad];
    // si cumple retorna esa posicion
    if (adivinar === item) {
        return mitad;
    }
    //si es mayor a lo q buscamos
    if (adivinar > item) {
        alto = mitad -1;
    } else {
        bajo = mitad + 1;
    }
}
    return null; // si no encuentra
};
let busqueda = 1;
console.log(`El numero ${busqueda} se encuentra en la posicion ${busquedaBinaria(list, busqueda)} `);
let busqueda5 = 5;
console.log(`El numero ${busqueda5} se encuentra en la posicion ${busquedaBinaria(list, busqueda5)}`);
let busqueda6 = 6;
console.log(`El numero ${busqueda6} se encuentra en la posicion ${busquedaBinaria(list, busqueda6)}`);
let busqueda9 = 9;
console.log(`El numero ${busqueda9} se encuentra en la posicion ${busquedaBinaria(list, busqueda9)}`);
let busqueda11 = 11;
console.log(`El numero ${busqueda11} se encuentra en la posicion ${busquedaBinaria(list, busqueda11)}`);


