// Actividad 6: Usar aserciones dobles 
 
// Crea una variable de tipo any y haz una conversión con aserciones dobles para 
// convertirla en un number. Muestra el resultado.

let variable : any = 123;

let valorNumero : number = (variable as unknown as number);

console.log(valorNumero);
