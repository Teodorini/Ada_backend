const path = require(`path`);

// Ejemplo1: Obetener el nombre del archivo desde una ruta absoluta.
// `fullpath` contiene una ruta absoluta a un archivo llamado `file.txt`.
const fullPath = `/home/user/docs/file.txt`;
// path.basename toma la ruta completa y devuelve solo el nombre del archivo. o sea, file.txt
const baseName1 = path.basename(fullPath);
console.log(`Ejemplo 1 - Nombre del archivo: `, baseName1);
// Imprime: Ejemplo 1 - Nombre del archivo:  file.txt

// Ejemplo 2: Obetener el  nombre del archivo sin la extensión.
// Utiliza el segundo parámetro de path.basename para especificar que se elimine la extension `txt` del nombre del archivo
const baseNameWithoutExt = path.basename(fullPath, `.txt`);
console.log(`Ejemplo 2 - Nombre del archivo sin extensión: `, baseNameWithoutExt);
// Imprime: Ejemplo 2 - Nombre del archivo sin extensión:  file

// Ejemplo 3: Uso con rutas relativas.
// `relativePath` contiene una ruta relativa a un archivo llamado helpers.js.
const relativePath = `src/utils/helpers.js`;
// path.basename extrae el nombre del archivo helpers de la ruta relativa
const baseName2 = path.basename(relativePath);
console.log(`Ejemplo 3 - Nombre del archivo desde una ruta relativa: `, baseName2);
// Imprime: Ejemplo 3 - Nombre del archivo desde una ruta relativa:  helpers.js.

// Ejemplo 4: Obtener el nombre de un directorio
// dirpath es una ruta que termina en un directorio llamado html
const dirPath = `/var/www/html`;
// path.basename devuelve el ultimo segmento de la ruta, que es el mombre del directorio html
const baseName3 = path.basename(dirPath);
console.log(`Ejemplo 4 - Nombre del directorio:`, baseName3);
// Imprime: Ejemplo 4 - Nombre del directorio: html

// Ejemplo 5: Rutas con separadores de windows
// windowsPath es una ruta que utiliza separadores de directorios de windows para un archivo llamado report.pdf
const windowsPath = `C:\\Users\\Admin\\Documents\\report.pdf`;
// Path.basename maneja los separadores de windows y devuelve solo el nombre del archivo report.pdf
const baseName4 = path.basename(windowsPath);
console.log(`Ejemplo 5 - Nombre del archivo en ruta de windows: `, baseName4);
// Imprime: Ejemplo 5 - Nombre del archivo en ruta de windows:  report.pdf



