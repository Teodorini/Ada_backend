export enum Categoria {
    Electronica,
    Ropa,
    Alimentos
}
export class Producto {
    nombre: string;
    categoria: Categoria;
    precio: number;

    constructor(nombre: string, categoria: Categoria, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    mostrarProducto(): void {
        console.log(`Producto: ${this.nombre}`);
        console.log(`Precio: ${this.precio}`);
        console.log(`Categoria: ${this.categoria}`);
        console.log(`----------------------------------`);
        
        
        
        
    }
}

