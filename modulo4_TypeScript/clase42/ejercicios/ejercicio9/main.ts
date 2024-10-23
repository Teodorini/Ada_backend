import { person, createPerson } from "./types";

const persons: person = createPerson("Mariana", 43);

console.log(`Person: ${persons.name}, Age: ${persons.age}`);
