const path =  require(`path`);

// Ejemplo 1: Obtener el directorio contenedor de un archivo desde una ruta absoluta
// filepath contiene una ruta absoluta a un archivo llamado file.txt
const filePath = `/home/user/docs/file.txt`;
//path.dirName toma la ruta completa y devuelve la ruta del directorio que contiene el archivo
// es decir /home/user/docs
const dirName1 = path.dirname(filePath);
console.log(`Ejemplo 1 - directorio contenedor de file.txt : `, dirName1);
// Imprime: Ejemplo 1 - directorio contenedor de file.txt :  /home/user/docs

// Ejemplo 2: Obtener el directorio de un archivo usando una ruta relativa
// relativePath contiene una ruta relativa a un archivo llamado helper dentro de src/utils
const relativePath =  `src/utils/helpers.js`;
const dirName2 = path.dirname(relativePath);
console.log(`Ejemplo 2 - Directorio contenedor de helper.js, `, dirName2);
// Imprime Ejemplo 2 - Directorio contenedor de helper.js,  src/utils

