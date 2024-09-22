const net = require(`net`);
const {v5: uuid5} = require(`uuid`);

const NAMESPACE = uuid5.URL;

const server = net.createServer((socket) => {
    console.log(`Cliente conectado `);

    
        const nameV5 = `Hola`;
        const uuid = uuid5(nameV5, NAMESPACE);
// cREAR EL OBJETO json con el uuid
        const objetJson = {
            uuid: uuid,
        };
        // envia el objeto como json al cliente
        socket.write(JSON.stringify(objetJson));
        socket.end();

        socket.on(`end`, () => {
            console.log(`Cliente desconectado`);
            
        });
    });

    server.listen(8000, () => {
        console.log(`Servidor escuchando en el puerto 8000`);
        
    });
    

