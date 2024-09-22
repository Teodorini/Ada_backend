const net = require(`net`);
const readline = require(`readline-sync`);

const options2 = {
    port: 5000,
    host: `127.0.0.2`
};

const client2 = net.createConnection(options2);

client2.on(`connect`, () => {
    console.log(`Conexion exitosa!`);
    sendline();
});

client2.on(`data`, (data) => {
    console.log(`El server dice: ` + data);
    sendline();
    
});

client2.on(`error`, (err) => {
    console.log(err.message);
    
});
function sendline() {
    var line = readline.question(`\n Dijite lo que quiera: `);
    if (line == "cerrar") {
       client2.end();
    } else {
        client2.write(line);
    };
};

