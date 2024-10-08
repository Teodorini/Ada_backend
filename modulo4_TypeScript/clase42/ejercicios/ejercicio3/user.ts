// Crea un módulo llamado user.ts que contenga una clase User con las siguientes
// propiedades:
// • name: string
// • age: number

export default class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
