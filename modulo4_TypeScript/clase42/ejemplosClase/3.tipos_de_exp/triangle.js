"use strict";
// La funcion logCalculation no se exporta y es privada al modulo
// calculateTriangleArea y TRIANGLE_NAME se exportan directamente.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRIANGLE_NAME = exports.calculateTriangleArea = void 0;
const logCalculation = (area) => {
    console.log(`Calculando el area: ${area}`);
};
// Exportacion directa de la funcion 
const calculateTriangleArea = (base, height) => {
    const area = (base * height) / 2;
    logCalculation(area); // uso de la funcion privada
    return area;
};
exports.calculateTriangleArea = calculateTriangleArea;
exports.TRIANGLE_NAME = 'Triangle';
