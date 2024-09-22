let estudiante = {
    nombre: "Melisa",
    edad: 34,
    curso: "psicologia",
    notas: [9, 8, 7]
};

const estudianteJson = JSON.stringify(estudiante);
const estudianteobj = JSON.parse(estudianteJson);
console.log(estudianteobj);



