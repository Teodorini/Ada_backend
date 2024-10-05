// Ejercicio 16: Uso de enum para categorías de productos
// 1. Declara un enum llamado CategoriaProducto con los valores: Electrónica,
// Ropa, Alimentos, Muebles.
enum CategoriaProducto {Electronica, Ropa, Alimentos, Muebles};
// 2. Crea una función que reciba un valor del enum y devuelva un mensaje
// sobre qué tipo de productos incluye esa categoría.
function verCategoria(categoria:CategoriaProducto): string {
    switch (categoria) {
        case CategoriaProducto.Electronica:
            return "Categoria: Electronica";
            case CategoriaProducto.Ropa:
                return "Categoria: Ropa";
                case CategoriaProducto.Alimentos: 
                    return "Categoria: Alimentos";   
                    case CategoriaProducto.Muebles:
                        return "Categoria: Muebles"

        default:
            return "La categoria no existe"
    }
}
// 3. Llama a la función con el valor Alimentos y muestra el resultado por
// consola. 
console.log(verCategoria(CategoriaProducto.Alimentos));
