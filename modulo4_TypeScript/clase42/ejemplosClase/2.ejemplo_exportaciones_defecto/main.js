"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = __importDefault(require("./calculator"));
const calc = new calculator_1.default();
console.log(calc.add(10, 5));
console.log(calc.substract(10, 5));
// Aqui, calculator es importado como clase principal del modulo
// calculator.ts. Auqnue podriamos haber llamado a esta importacion
// de cualquier otra manera (como import mycalc from ...)
// Es una practica comun utilizar un nombre relacionado con lo 
// que estamos importando.
