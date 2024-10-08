"use strict";
// Ejemplo de tipos primitivos en TypeScript
// 1. String
let nombre = "Marian Teo";
let saludo = `Hola, ${nombre}, Bienvenida a TypeScript`;
console.log(saludo);
// 2. number(numeros: enteros, decimales, notacion cientifica)
let entero = 42;
let decimal = 3.14;
let cientificos = 1e5;
console.log("Entero: ", entero);
console.log("Decimal: ", decimal);
console.log("Cientifico: ", cientificos);
// 3. boolean (valores logicos)
let esEstudiante = true;
let tieneTitulo = false;
console.log("Es estudiante?: ", esEstudiante);
console.log("Tiene titulo?: ", tieneTitulo);
// 4. null (ausencia intencional de valor)
let valorNulo = null;
console.log("valor Nulo: ", valorNulo);
// 5. undefine (valor no iniciado)
let valorIndefinido = undefined;
console.log("Valor indefinido: ", valorIndefinido);
// 6- symbol 
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log("son simbolos unicos:", id1 === id2);
// npx ts-node 1.primitivos.ts
