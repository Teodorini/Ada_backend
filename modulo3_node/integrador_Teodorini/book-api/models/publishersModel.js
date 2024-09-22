const path = require(`path`);
const fs = require(`fs`);

const filePath = path.join(__dirname, '../data/publishers.json');

// lee archivo json y devuelve los datos
const publishersModel = {
    
    readPublishers: () => {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    },
    writePublishers : (publishers) => {
        const jsonData = JSON.stringify(publishers, null, 2);
        fs.writeFileSync(filePath, jsonData )
    },
}


module.exports = publishersModel;