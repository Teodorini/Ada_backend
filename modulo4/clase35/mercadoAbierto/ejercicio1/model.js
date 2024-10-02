// Función que crea un contador.
function createCounter() {
    let count = 0; // Inicializa el contador en 0.

    // Función para incrementar el contador y devolver el valor actual.
    function increment() {
        count += 1;
        return count;
    }
 // Retorna un objeto con la función 'increment'.
    return {
        increment
    };
}
// Exporta la función 'createCounter' para que pueda ser utilizada en otros archivos.
module.exports = { createCounter };
