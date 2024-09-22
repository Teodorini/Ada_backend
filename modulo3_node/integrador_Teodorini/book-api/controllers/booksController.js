// controlador para manejar obtener y añadir vehiculos
const booksModel = require(`../models/booksModel`);
const responseView = require(`../views/responseView`);
const authorsModel = require(`../models/authorsModel`);
const publishersModel = require('../models/publishersModel');
const { v4: uuidv4 } = require('uuid'); // Importa uuid para generar IDs únicos


const booksController = {

    getBooks: () => {
        const books = booksModel.readBooks();
        return responseView.formatResponse(books);
    },
    
    // Metodo para agregar libro
    addBooks: (newBooks) => {
        // llamamos a la funcion para que pueda leer los libros
        const books = booksModel.readBooks();
        books.push(newBooks);
        booksModel.writeBooks(books)

        // Lee los autores existentes
        const authors = authorsModel.readAuthors();
        
        // Verifica si el autor ya existe
        const existingAuthor = authors.find(author => author.name.toLowerCase() === newBooks.author.toLowerCase());

        if (!existingAuthor) {
            // Si el autor no existe, lo añade
            const newAuthor = {// Si el autor no existe, lo añade
            
                id: uuidv4(),
                name: newBooks.author,
                nacionalidad: newBooks.authorNacionalidad || 'Desconocida'  // Asigna una nacionalidad por defecto si no se proporciona
            };
            authors.push(newAuthor);
            authorsModel.writeAuthors(authors);
        }

        // Leer las editoriales existentes
        const publishers = publishersModel.readPublishers();
        let existingPublisher = publishers.find(publisher => publisher.publisher.toLowerCase() === newBooks.publisher.toLowerCase());
        
        // Verificar si la editorial ya existe
        if (!existingPublisher) {
            const newPublisher = { id: uuidv4(), publisher: newBooks.publisher };
            publishers.push(newPublisher);
            publishersModel.writePublishers(publishers);
        }

    

        return responseView.formatResponse({ message: 'Book agregado con exito' });
    }
};

module.exports = booksController;
