let notas = [10, 4, 5, 8, 9, 2, 7];

//Map recorre el array y devuelve un nuevo array con los resultados de la funcion aplicada a cada elemento. 
let notasHastaCien = notas.map(function (numero) {
    return numero * 10;
});

console.log(notasHastaCien);

//filter (crea un nuevo arreglo con los elementos que pasan la condicion.)

let notasAprobadas = notas.filter(function(numero) {
    return numero >= 7;
})

console.log(notasAprobadas);

//reduce (reduce a un valor unico)

let sumaNotas = notas.reduce(function(acumulador, numero){
    return acumulador + numero;
})

console.log(sumaNotas);

//forEach iterar sobre un array (no retorna nada)

notas.forEach(function(valor, indice){
    console.log("en la posicion " + indice + "Esta el valor : " + valor);
});

// Find encuentra el primer elemento en el array que cumple con la condicion

let notaEncontrada = notas.find(function(numero){
    return numero >= 8
});

console.log("La primera nota mayor o igual a 8 es : " + notaEncontrada);