let libro = {
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    "anio": 1967,
    "genero": ["Realismo mágico", "Ficción"]
}
console.log("Nombre: " + libro.titulo)
console.log("Autor: " + libro.autor)
console.log("Año: " + libro.anio)
console.log("Genero: " + libro.genero);

// Agregar una propiedad
libro.paginas = 350;
console.log("Numero de paginas: " + libro.paginas)