
// jercicio 5: Función con parámetros rest
// Consigna: Crea una función llamada sumarTodos que acepte una cantidad 
// indefinida de números y devuelva su suma. Luego, llama a la función con varios 
// números y muestra el resultado en la consola

function sumarTodos(...numeros:number[]):number {
    return numeros.reduce((total, num) => total + num, 0);
};

export const resultado = sumarTodos(10, 20, 30, 40, 50);
console.log(resultado);


