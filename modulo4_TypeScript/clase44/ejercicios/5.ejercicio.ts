// Actividad 5: Usar aserciones de tipo 
 
// Declara una variable de tipo any y usa una aserción para tratarla como string, 
// accediendo a la propiedad .length.

let frase : any = "Esto es un string";

let longitud : number = (frase as string).length;

console.log(longitud);
