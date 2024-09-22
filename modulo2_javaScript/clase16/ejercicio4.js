let listaDeSupermercado = [
    `Bife de chorizo`, 
    `Coca cola`,
    `Bananas`,
    `Lechuga`,
    `Chimichurri`,
    `Lata de tomates`,
    `Arvejas`,
    `Cereales`,
    `Pechuga de pollo`,
    `Leche`
];
// Nuestro trabajo será mostrar cada ítem de esa lista por consola utilizando un foreach
listaDeSupermercado.forEach(function(item){
});
// Agrega el artículo 'Papas' al final de la lista utilizando el método push.
listaDeSupermercado.push(`Papas`);
// Elimina el primer artículo de la lista utilizando el método shift.
listaDeSupermercado.shift();
// Utiliza el método forEach para recorrer el arreglo listaDeSuperMercado y mostrar cada ítem por consola.
listaDeSupermercado.forEach(function(item) {
});
console.log(listaDeSupermercado);

// Busca la posición del artículo 'Cereales' utilizando el método lastIndexOf y muestra su posición en la lista 
// considerando que los índices comienzan desde 1 en la lista mostrada al usuario), o indica que no se encontró si no está presente
let buscar = listaDeSupermercado.lastIndexOf(`Cereales`);
console.log(`La posicion de Cereales es: ` + (buscar + 1));
