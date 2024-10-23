import { Producto, Categoria } from "./producto";

const inventario: Producto[] = [];

inventario.push(new Producto("Televisor", Categoria.Electronica, 100000));
inventario.push(new Producto("Pantalon", Categoria.Ropa, 35000));
inventario.push(new Producto("Lomo", Categoria.Alimentos, 10000));
inventario.push(new Producto("Manzanas", Categoria.Alimentos, 2000));
inventario.push(new Producto("Camisa", Categoria.Ropa, 230000));
inventario.push(new Producto("Horno Electrico", Categoria.Electronica, 450000));
inventario.push(new Producto("Bananas", Categoria.Alimentos, 1800));

function mostrarProductosPorCategoria(categoria: Categoria, productos: Producto[]): void {
    console.log(`Productos en la categoría ${Categoria[categoria]}: `);
    productos.forEach(producto => {
        if (producto.categoria === categoria) {
            producto.mostrarProducto();
        }
    });
}
function calcularTotalInventario(productos: Producto[]): number {
    return productos.reduce((total, producto) => total + producto.precio, 0);
}

mostrarProductosPorCategoria(Categoria.Electronica, inventario);
mostrarProductosPorCategoria(Categoria.Alimentos,inventario);
mostrarProductosPorCategoria(Categoria.Ropa, inventario)
console.log(`El valor total es: ${calcularTotalInventario(inventario)}`);




