// Importamos http para conectar el servidor con el navegador
const http = require(`http`);
// fs para leer
const fs = require(`fs`);

const PORT = 3000;

const server = http.createServer((req, res) => {
    fs.readFile(`datos.json`, `utf-8`, (err, data) => {
        if (err) {
            res.end(`No se pudo leer el archivo JSON.`);
            return;
        }
        // enviar el contenido del JSON al navegador
        res.setHeader(`Content-type`, `application/json` );
        res.end(data);
    })
})
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    
})