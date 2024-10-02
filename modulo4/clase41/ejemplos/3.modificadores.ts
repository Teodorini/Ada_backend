class Animal {
    //Propiedad publica
    public nombre : string;
    //Propiedad privada
    private tipoAlimento: string;

    // Propiedad protegida(accesible desde herencias)
    protected especie: string;

    constructor(nombre: string, tipoAlimento: string, especie: string) {
        this.nombre = nombre;
        this.tipoAlimento = tipoAlimento;
        this.especie = especie;
    }

    //Metodo publico (accesible desde cualquier parte)
    public describirAnimal(): void {
        console.log(`${this.nombre}, un animal de la especie ${this.especie}`);
        
    }

    // Metodo privado(dentro de la clase)
    private mostrarTipoAlimento(): void {
        console.log(`${this.nombre}, se alimenta de: ${this.tipoAlimento}`);
        
    }

    // Metodo protegido (accesible dentro y en herencia)

    protected sonidoAnimal(): void {
        console.log(`${this.nombre}, hace un sonido.`);
        
    }

    // Metodo para acceder al privado dentro de la class
    public alimentarAnimal(): void {
        this.mostrarTipoAlimento() // llamo al metodo privado dentro de la class

    }
   
}
 // Crear una instancia de la class animal
 const miAnimal = new Animal(`Gato`, `croquetas`, `Felino`)
miAnimal.describirAnimal();
miAnimal.alimentarAnimal();

