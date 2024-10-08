"use strict";
// Exportamos la clase calculator como valor por defecto del modulo
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    // Metodo que suma dos numeros
    add(a, b) {
        return a + b;
    }
    // Metodo que resta dos numeros
    substract(a, b) {
        return a - b;
    }
}
exports.default = Calculator;
