// 1. any: permite almacenar cualquier tipo de valor sin restricciones
let anyValue: any = "Hola, soy any";
console.log(anyValue);
anyValue = 42;
console.log(anyValue);
anyValue = {name: "TypeScript"}; // objeto
console.log(anyValue);

// 2. unknow: similar a any pero requiere verificacion antes de su uso
let unknownValue: unknown = "Hola, soy unknown";
console.log(unknownValue);

// Necesitamos verificar el tipo antes de usarlo como un string
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
    
}

// 3. void: se usa en funciones que no retornan valor
function logMessage(message: string): void {
    console.log(message);
    
}
logMessage("Esto es una funcion void");

// 4- never: representa el tipo de funciones que nunca retornan 
// como aquellas que arrojan errores o tambien tienen los bucles infinitos
function throwError(errorMsg: string): never{
    throw new Error(errorMsg)
};
// throw new error es una expresion en js y en ts que se 
//utiliza para una excpcion. esta interrimpe la ejecucion 
//normal y se propaga hacia arriba en la pila de llamadas 
// hasta que es manejada (usualmente un trycach )

// si descomenta la linea de abajo se arrojara un error
// y se detendra la ejecucion del progra,a
// throwError("Esto es un error y nunca retorna nada")
function infiniteLoop(): never {
    while (true) {
        console.log("Este bucle nunca terminara");
        
    }
}
// descomentar abajo para ver loop infinito
// infiniteLoop();

// 5, Null y Undefined: Representan la ausencia de valor
let nullValue: string | null = null // puede serr una cadena o null
console.log(nullValue);

let undefineValue: undefined = undefined
console.log(undefineValue);

// uso de todos en un solo contexto
function processData(value: any): void {

}


