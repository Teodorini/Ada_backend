"use strict";
// Aca usamos la exportacion directa
// Para la funcion calculateCircleArea y la constante CIRCLE_NAME
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIRCLE_NAME = exports.calculateCircleArea = void 0;
const calculateCircleArea = (radius) => {
    return Math.PI * radius * radius;
};
exports.calculateCircleArea = calculateCircleArea;
exports.CIRCLE_NAME = 'Circle';
