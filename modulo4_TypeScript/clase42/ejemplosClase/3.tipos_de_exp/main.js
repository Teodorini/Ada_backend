"use strict";
// Importamos todas las funciones y constantes desde index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const circleArea = (0, index_1.calculateCircleArea)(5);
console.log(`${index_1.CIRCLE_NAME} area: ${circleArea}`);
const rectangleArea = (0, index_1.calculateRectangleArea)(10, 20);
console.log(`${index_1.RECTANGLE_NAME} area: ${rectangleArea}`);
const triangleArea = (0, index_1.calculateTriangleArea)(10, 15);
console.log(`${index_1.TRIANGLE_NAME} area: ${triangleArea}`);
