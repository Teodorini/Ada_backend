// Ejercicio 6: Uso de unknown
// Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta 
// variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los 
// valores.

let variableUnknown: unknown;

// Asignar diferentes tipos de valores

// Valor numérico
variableUnknown = 42;
if (typeof variableUnknown === 'number') {
    console.log(`El valor es un número: ${variableUnknown}`);
}

// Valor de cadena
variableUnknown = "Hola, TypeScript!";
if (typeof variableUnknown === 'string') {
    console.log(`El valor es una cadena: ${variableUnknown}`);
}

// Valor booleano
variableUnknown = true;
if (typeof variableUnknown === 'boolean') {
    console.log(`El valor es un booleano: ${variableUnknown}`);
}

