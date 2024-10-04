// Ejemplo de tipos primitivos en TypeScript

// 1. String
let nombre: string = "Marian Teo";
let saludo: string = `Hola, ${nombre}, Bienvenida a TypeScript`;
console.log(saludo);

// 2. number(numeros: enteros, decimales, notacion cientifica)
let entero: number = 42;
let decimal: number = 3.14;
let cientificos: number = 1e5;
console.log("Entero: ", entero);
console.log("Decimal: ", decimal);
console.log("Cientifico: ", cientificos);

// 3. boolean (valores logicos)
let esEstudiante: boolean = true;
let tieneTitulo: boolean = false;
console.log("Es estudiante?: ", esEstudiante);
console.log("Tiene titulo?: ", tieneTitulo);

// 4. null (ausencia intencional de valor)
let valorNulo: null = null;
console.log("valor Nulo: ", valorNulo);

// 5. undefine (valor no iniciado)
let valorIndefinido: undefined = undefined;
console.log("Valor indefinido: ", valorIndefinido);

// 6- symbol 
let id1: symbol = Symbol("id");
let id2: symbol = Symbol("id");
console.log("son simbolos unicos:", id1 === id2);

// npx ts-node 1.primitivos.ts







