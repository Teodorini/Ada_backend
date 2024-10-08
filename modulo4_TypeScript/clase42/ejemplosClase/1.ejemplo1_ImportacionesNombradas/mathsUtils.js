"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = void 0;
exports.add = add;
exports.substract = substract;
exports.PI = 3.141592;
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
// Este codigo:
// Estamos exportando una constante PI y tambien dos funciones (add y substract)
// Cada exportacion esta nombrada, lo que significa que tienen
// que ser importadas usando sus nombres.
