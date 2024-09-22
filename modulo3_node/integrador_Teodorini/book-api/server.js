 // Importar el módulo 'net' para crear un servidor TCP
    const net = require(`net`);
// Importa los controladores para manejar operaciones con libros, autores y editores
    const authorsController = require(`./controllers/authorsController`);
    const booksController = require(`./controllers/booksController`);
    const publishersController = require(`./controllers/publishersController`);

// Importa la función 'v4' de 'uuid' para generar identificadores únicos
    const {v4: uuidv4} = require(`uuid`);

    // funcion para validar si una cadena es JSON
    function isJSON(str) {
        return str.startsWith(`{`) && str.endsWith(`}`);
    }

    const server = net.createServer((socket) => {
        console.log(`Cliente conectado`);
        // enviamos los comandos disponibles
        socket.write(`Comandos disponibles: \nGET BOOKS, ADD BOOK, GET AUTHORS, ADD AUTHOR, GET PUBLISHERS, ADD PUBLISHER, SEARCH AUTHOR \n`);

        socket.on(`data`, (data) => {
            const command = data.toString().trim();
            console.log(`Comando recibido: ${command}`);
            
            // Manejo del comando GET BOOKS
            if (command === `GET BOOKS`) {
                const response = booksController.getBooks();
                socket.write(response);
            } else if (command.startsWith(`ADD BOOK`)) {
            // si el comando recibido empieza con add se agrega un nuevo libro
                
            const booksDataString = command.replace(`ADD BOOK `, ``);
                // extraemos los datos del nuevo book del comando

                if (isJSON(booksDataString)) {
                    const booksData = JSON.parse(booksDataString);
                    // convertir los datos a un objeto JSON si la estructura es valida

                    // verificar que los datos sean un objeto
                    if (booksData && typeof booksData === `object`) {

                        //crear un nuevo libro con un id unico
                        const newBooks = {id: uuidv4(), ...booksData };
                        const response = booksController.addBooks(newBooks);
                        socket.write(response);
                        
                    }else {
                        socket.write(`Datos invalidos.`);
                    }
                } else {
                    socket.write(`Error: formato JSON no valido`);
                }
        //GET AUTHORS para obtener todos los autores    
        } else if (command === `GET AUTHORS`) {
            // Llama al método `getAuthors` del `authorsController` para obtener los datos de los autores
            const response = authorsController.getAuthors();
            socket.write(response);
            // Maneja el comando `ADD AUTHOR` para agregar un nuevo autor
        } else if (command.startsWith(`ADD AUTHOR`)) {
            // Extrae la cadena JSON del comando eliminando el prefijo `ADD AUTHOR 
            const authorsDataString = command.replace(`ADD AUTHOR `, ``);
            
            // Verifica si la cadena extraída es un JSON válido
            if (isJSON(authorsDataString)) {
            // Parsea la cadena JSON a un objeto
                const authorsData = JSON.parse(authorsDataString);
            // Verifica que los datos parseados sean un objeto
                if (authorsData && typeof authorsData === `object`) {
            // Crea un nuevo autor con un ID único y los datos proporcionados
                const newAuthor = {id: uuidv4(), ...authorsData};
            // Llama al método `addAuthors` del `authorsController` para agregar el nuevo autor
                const response = authorsController.addAuthors(newAuthor);
                socket.write(response);
                } else {
                    // Envía un mensaje de error si los datos parseados no son un objeto válido
                    socket.write(`Datos invalidos.`);
                }
            } else {
                // Envía un mensaje de error si la cadena no es un JSON válido
                socket.write(`Error: formato JSON no valido`);
            }

        // Maneja el comando `GET PUBLISHERS` para obtener una lista de editores    
        } else if (command === `GET PUBLISHERS`) {
            const response = publishersController.getPublishers();
            socket.write(response);
        // Maneja el comando `ADD PUBLISHER` para agregar un nuevo editor    
        } else if (command.startsWith(`ADD PUBLISHER`)) {
            const publishersDataString = command.replace(`ADD PUBLISHER `, ``);
            if (isJSON(publishersDataString)) {
                const publishersData = JSON.parse(publishersDataString);
                if (publishersData && typeof publishersData === `object`) {
                    const newPublisher = {id: uuidv4(), ...publishersData};
                    const response = publishersController.addPublishers(newPublisher);
                    socket.write(response);
                } else {
                    socket.write(`Datos invalidos.`);
                }
            } else {
                socket.write(`Error: Formato JSON no valido.`);
            }

        } else if (command.startsWith(`SEARCH AUTHOR`)) {
            const parts = command.split(' ');
            // verificamos que el comando contenga 4 partes. SEARCH AUTHOR, tipo y consulta
            if (parts.length < 4) {
                socket.write('Error: formato de búsqueda inválido. Debe ser "Ej Silvia Tomas"');
                return;
            }
            const searchType = parts[2].toUpperCase(); // extraemos y convertimos el tipo de busqueda
            const query = parts.slice(3).join(' ').trim(); // unimos la consulta restante

          

            if (searchType !== 'NAME' && searchType !== 'NACIONALIDAD') {
                socket.write('Error: tipo de búsqueda no reconocido. Debe ser "NAME" o "NACIONALIDAD".');
                return;
            }
            // buscamos el autor usando el controlador
            const response = authorsController.searchAuthor(searchType, query);
            socket.write(response);

          
        } else {
            socket.write(`Comando no reconocido.`);
        }
    });

        
        socket.on(`end`, () => {
            console.log(`Cliente desconectado.`);
            
        });

        socket.on(`error`, (err) => {
            console.log(err.message);
            
        })
    });

    server.listen(8080, () => {
        console.log(`TCP server escuchando en el puerto 8080`);
        
    });