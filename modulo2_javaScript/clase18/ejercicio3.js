// Ejercicio 3: Gestión Compleja de Arrays. escriba la función ‘gestionarProductos’
let productos = [
    {nombre: "Alfajores", precio: 30},
    {nombre: "Chocolates", precio: 50},
    {nombre: "Chupetines", precio: 70},
    {nombre: "Caramelos", precio: 20},
    {nombre: "Bombones", precio: 20},
];
function gestionarProductos(productos) {
// 1. Añada un nuevo producto al array.
let agregarProducto = {nombre: "Galletitas", precio: 90};
productos.push(agregarProducto);

// 2. Elimine el último producto del array
let eliminar = productos.pop();

// 3. Encuentre el índice de un producto específico. En este punto 
// pueden usar forEach o investigar el método “findIndex()” 
let productoEspecifico = "Chocolates";

let indiceProducto = productos.findIndex(producto => producto.nombre === productoEspecifico);

// Verifique si existe un producto con precio mayor a 50. Para esto 
// investigar el método “.some()”
let productoMayor = productos.some(producto => producto.precio > 50);

// 5. Devuelva una cadena de nombres de productos separados por comas.

let cadenaNombres = productos.map(producto => producto.nombre).join(",");

return {
    productos : agregarProducto,
    eliminar,
    indiceProducto,
    productoMayor,
    cadenaNombres
}
};
console.log(gestionarProductos(productos));
