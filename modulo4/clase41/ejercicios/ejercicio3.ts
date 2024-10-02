// Ejercicio 3: Métodos en Objetos 
 
// 1. Modifica el objeto del ejercicio anterior para que incluya un método 
// llamado descripcion() que devuelva una descripción del libro.
// 2. Llama al método y muestra el resultado en la consola.

class Libro {
    public titulo: string;
    public autor: string;
    public anioPublicacion: number;
    constructor(titulo:string, autor:string, anioPublicacion:number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }

    public descripcion(): string {
        return `Titulo: ${libro1.titulo}, autor: ${libro1.autor}`
    }
}