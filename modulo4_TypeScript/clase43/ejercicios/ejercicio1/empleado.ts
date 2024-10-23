export class Empleado {
   private nombre: string;
    private cargo: string;
    private salario: number;
    private habilidades: string[];

    constructor(nombre: string, cargo: string, salario: number) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.habilidades = [];
    }
    agregarHabilidad(habilidad: string): void{
        this.habilidades.push(habilidad);
    }
    obtenerSalarioAnual(): number {
        return this.salario * 12; 
    }
    mostrarInfo(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Salario Mensual: ${this.salario}`);
        console.log(`Habilidades: ${this.habilidades.join(', ')}`);
        console.log('---------------------------');
        
        
    }
}