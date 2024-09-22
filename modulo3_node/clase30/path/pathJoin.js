//importar path que proporciona utilidades para trabajar con rutas de archivos y directorios
const path = require(`path`);

// Ejemplo 1: Uniendo segmentos de rutas simples
// Une tres segmentos de ruta: `/user`, `local`, `bin`.
// Como el primer segmento es una ruta absoluta (`/user`), el resultado tambien será absoluto.
const example1 = path.join(`/user`, `local`, `bin`);
console.log(`Ejemplo 1 - Ruta combinada: `, example1);
//Imprime: Ejemplo 1 - Ruta combinada:  \user\local\bin

// Ejemplo 2: Eliminando barras redundantes
// se pasan varios segmentos que incluyen barras redundantes al principio y al final
// Path join los une en una unica ruta y elimina las barras redudantes
const example2 = path.join(`/user/`, `/local`, `bin/`);
console.log(`Ejemplo 2 - Ruta normalizada sin barras redundantes`, example2);
// Imprime: Ejemplo 2 - Ruta normalizada sin barras redundantes \user\local\bin\

// Ejemplo 3: Normalizando rutas con `..` (subir un directorio)
// Este ejemplo muestra como path.join maenja el segmento especial `..`, que indica subir un nivel del directorio
// `/user` + `local` sube un nivel con `..`, y llega a `bin`, resultando en la ruta `/user/bin`
const example3 = path.join(`/user`, `local`, `..`, `bin`);
console.log(`Ejemplo 3 - Ruta normalizada con "..":`, example3);
// Imprime: Ejemplo 3 - Ruta normalizada con "..": \user\bin

// Ejemplo 4: Construccion de una ruta relativa multiplataforma
// Crea una ruta relativa que funcione en cualquier sistema operativo,
// Path.join garantiza que se utilicen los separadores correctos segun el sistema operativo.
const example4 = path.join(`docs`, `projects`, `index.html`);
console.log(`Ejemplo 4 - Ruta relativa:`, example4);
//Imprime: Ejemplo 4 - Ruta relativa: docs\projects\index.html



