const path = require(`path`);
const fs = require(`fs`);

const filePath = path.join(__dirname, '../data/authors.json');

// lee archivo json y devuelve los datos
const authorsModel = {
    
    readAuthors: () => {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    },
    writeAuthors : (authors) => {
        const jsonData = JSON.stringify(authors, null, 2);
        fs.writeFileSync(filePath, jsonData )
    },
}


module.exports = authorsModel;

