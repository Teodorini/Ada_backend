// Ejercicio 1: Uso básico de type y tuplas (Ejercicio Entrevista)
// Define un type para representar una tupla de coordenadas en un sistema 2D y 
// una función que reciba dicha tupla para calcular la distancia desde el origen 
// (0,0).

// Definir un tipo para la tupla de coordenadas
type Coordenadas2D = [number, number];

function calcularDistancia(coordenadas:Coordenadas2D): number {
    const [x, y] = coordenadas;
    return Math.sqrt(x ** 2 + y ** 2); // Distancia al origen (0,0)
}
// Ejemplo de uso
export const coordenadas: Coordenadas2D = [3, 4];
console.log(calcularDistancia(coordenadas)); // Resultado: 5