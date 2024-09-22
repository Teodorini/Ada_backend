// controlador para manejar obtener y añadir vehiculos
const authorsModel = require(`../models/authorsModel`);
const responseView = require(`../views/responseView`);
const booksController = require("./booksController");

const authorController = {

    getAuthors: () => {
        const authors = authorsModel.readAuthors();
        return responseView.formatResponse(authors);
    },
    
    // Metodo para agregar libro
    addAuthors: (newAuthors) => {
        // llamamos a la funcion para que pueda leer los libros
        const authors = authorsModel.readAuthors();
        authors.push(newAuthors);
        authorsModel.writeAuthors(authors)
        return responseView.formatResponse({message: `Author agregado con exito`})
    },

    // Metodo para buscar un autor por nombre
    // Metodo para buscar un autor por nombre
    searchAuthor: (searchType, query) => {
        // lee todos los autores
        const authors = authorsModel.readAuthors();
        
        // Validar que searchType sea válido
        if (searchType !== 'NAME' && searchType !== 'NACIONALIDAD') {
            return responseView.formatResponse({ error: 'Tipo de búsqueda no reconocido. Debe ser "NAME" o "NACIONALIDAD".' });
        }
    
        // Filtrar autores según el tipo de búsqueda
        const filteredAuthors = authors.filter((author) => {
            if (!author || typeof author !== 'object') {
                return false;
            }
    
            // Manejar la búsqueda por nombre
            if (searchType === 'NAME') {
                return author.name && author.name.toLowerCase().includes(query.toLowerCase());
            }
            // Manejar la búsqueda por nacionalidad
            if (searchType === 'NACIONALIDAD') {
                return author.nacionalidad && author.nacionalidad.toLowerCase().includes(query.toLowerCase());
            }
    
            return false;
        });

        // Devuelve lo encontrado o un mensaje si no hay coincidencias
        return responseView.formatResponse(
            filteredAuthors.length > 0 ? filteredAuthors : {message: 'No se encontraron autores'}
        );
    },
};
module.exports = authorController;
