const net = require(`net`);

const client = net.createConnection({port: 7000}, () => {
    console.log(`Conectado al servidor`);
    
});

client.on(`data`, (data) => {
    // recibir los datos y convertirlos a string
    const response = data.toString();
    // parsear el JSON recibido
    const jsonResponse = JSON.parse(response);
    // mostrar el uuid en consola
    console.log(`UUID recibido: `, jsonResponse.uuid);

    client.end();
    
});

client.on(`end`, () => {
    console.log(`Desconeccion satisfactoria `);
    
});