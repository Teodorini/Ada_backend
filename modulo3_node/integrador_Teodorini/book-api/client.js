const net = require('net');
const readline = require('readline');
const { question } = require('readline-sync');
const { formatResponse } = require('./views/responseView');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new net.Socket();

// Conectar al servidor en el puerto 8000
client.connect(8080, 'localhost', () => {
    console.log('Conectado al servidor');
    promptCommand(); // Solicitar el primer comando del usuario
});

// Manejar la respuesta del servidor
client.on('data', (data) => {
    const message = data.toString();
    console.log(message); // Mostrar la respuesta del servidor

    // Solicitar el siguiente comando
    promptCommand();
});

// Solicitar un comando al usuario
function promptCommand() {
    rl.question('Escribe un comando: ', (command) => {
        // 
        if (command.startsWith('ADD BOOK') ) {
            rl.question(' Agrega un libro: \n Ejemplo: {"title": "name", "author": "name", "publisher": "name", "authorNacionalidad": "nacionalidad"}  ', (jsonData) => {
             
                const fullCommand = `${command} ${jsonData.trim()}`;
                client.write(fullCommand); // Enviar el comando y los datos JSON al servidor
            });
        } else if (command.startsWith('ADD AUTHOR')){
            rl.question(`Agrega un autor: \nEjemplo: {"author": "name", "authorNacionalidad": "nacionalidad"}  `, (jsonData) => {
                fullCommand = `${command} ${jsonData.trim()}`;
                client.write(fullCommand);
            })
        } else if (command.startsWith('ADD PUBLISHER')){
            rl.question(`Agrega una editorial: \n Ejemplo: {"publisher": "name"}  `, (jsonData) => {
                fullCommand = `${command} ${jsonData.trim()}`;
                client.write(fullCommand);
        });
        
    } else if (command.startsWith('SEARCH AUTHOR')) {
        rl.question('Buscar por NAME/NACIONALIDAD: ', (searchType) => {
            const formattedSearchType = searchType.toUpperCase().trim();
            
            if(formattedSearchType !== `NAME` && formattedSearchType !== `NACIONALIDAD`) {
                console.log('Tipo de búsqueda no reconocido. Debe ser "NAME" o "NACIONALIDAD".');
                promptCommand();
                return;
            }
                
                rl.question(`Buscar un autor por ${formattedSearchType}: \nEjemplo: Silvia Tomas o Española : `, (query) => {
                    
                    const fullCommand = ` SEARCH AUTHOR ${formattedSearchType} ${query.trim()}`;
                    console.log(`Enviando comando: ${fullCommand}`);
                    client.write(fullCommand); // enviar comando y la consulta al servidor
                });
            });
        
            } else {
                client.write(command.trim()); // Enviar el comando al servidor
        }
            
    });

};


// Manejar el cierre de la conexión
client.on('close', () => {
    console.log('Conexión cerrada');
    rl.close(); // Cerrar la interfaz de lectura
});



