"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
exports.persona = {
    nombre: "Paula",
    edad: 25,
    pais: "Argentina"
};
// Claves del objeto
const keys = Object.keys(exports.persona);
console.log(`Claves del objeto`, keys);
// Valores del objeto
const values = Object.values(exports.persona);
console.log("Valores del objeto", values);
// Convertir a un array de pares clave-valor
