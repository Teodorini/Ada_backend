// controlador para manejar obtener y añadir vehiculos
const publishersModel = require(`../models/publishersModel`);
const responseView = require(`../views/responseView`);

const publishersController = {

    getPublishers: () => {
        const publishers = publishersModel.readPublishers();
        return responseView.formatResponse(publishers);
    },
    
    // Metodo para agregar libro
    addPublishers: (newPublishers) => {
        // llamamos a la funcion para que pueda leer los libros
        const publishers = publishersModel.readPublishers();
        publishers.push(newPublishers);
        publishersModel.writePublishers(publishers)
        return responseView.formatResponse({message: `Editorial agregada con exito`})
    }
};
module.exports = publishersController;
