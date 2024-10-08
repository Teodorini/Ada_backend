"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libro = void 0;
// 2. Inicializa la tupla con los valores: "El principito", 1943, true.
exports.libro = ["El principito", 1943, true];
// 3. Imprime el título del libro y el año de publicación.
console.log(exports.libro[0], exports.libro[1]);
// 4. Cambia el valor de disponibilidad a false y muestra el nuevo valor por 
// consola.
exports.libro[2] = false;
console.log(`Nueva disponibilidad ${exports.libro[2]}`);
