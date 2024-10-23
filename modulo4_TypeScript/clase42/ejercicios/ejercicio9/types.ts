// ctividad 9: Módulos y Tipos 
// Crea un módulo types.ts que contenga un tipo Person con las propiedades name y 
// age, y una función createPerson(name: string, age: number): Person. Exporta el tipo y la 
// función como exportaciones nombradas. En main.ts, importa el tipo y la función, 
// crea una persona y muestra su información en la consola.

export type person = {
    name: string;
    age : number;
};

export function createPerson(name: string, age: number): person {
    return { name, age };
} 
