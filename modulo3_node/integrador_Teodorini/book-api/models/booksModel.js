const path = require(`path`);
const fs = require(`fs`);

const filePath = path.join(__dirname, '../data/books.json');

// lee archivo json y devuelve los datos
const booksModel = {
    
    readBooks: () => {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    },
    writeBooks : (books) => {
        const jsonData = JSON.stringify(books, null, 2);
        fs.writeFileSync(filePath, jsonData )
    },
}


module.exports = booksModel;
