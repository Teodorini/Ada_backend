// Ejercicio 13: Array de enums para estados del clima
// 1. Declara un enum llamado Clima con los valores: Soleado, Nublado,
// Lluvioso, Tormentoso.
enum Clima {Soledado, Nublado, Lluvioso, Tormentoso}

// 2. Crea un array que almacene una serie de estados del clima usando los
// valores del enum.
let EstadosDelClima: Clima [] = [Clima.Soledado, Clima.Nublado, Clima.Lluvioso, Clima.Tormentoso]
// 3. Usa un ciclo para recorrer el array e imprime los valores del clima en. cada
// posición.
EstadosDelClima.forEach(clima => console.log(Clima[clima]));