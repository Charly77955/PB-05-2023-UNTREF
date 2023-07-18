<<<<<<< HEAD
<<<<<<< HEAD
// Uso de find con primitivos
const numeros = [11, 20, 32, 15, 8, 9, 24];
const argumento = 11;
const numeroEncontrado = numeros.find((valor) => valor === argumento, argumento);
console.log(numeroEncontrado);

// Uso de find con objetos
const personas = [
    { id: 1, nombre: "Juan", apellido: "Pérez" },
    { id: 2, nombre: "Mariana", apellido: "Páez" },
    { id: 3, nombre: "Lorena", apellido: "Medina" }
];
const id = 2;
const personaEncontrado = personas.find((objeto) => objeto.id === id, id);
=======
// Uso de find con primitivos
const numeros = [11, 20, 32, 15, 8, 9, 24];
const argumento = 11;
const numeroEncontrado = numeros.find((valor) => valor === argumento, argumento);
console.log(numeroEncontrado);

// Uso de find con objetos
const personas = [
    { id: 1, nombre: "Juan", apellido: "Pérez" },
    { id: 2, nombre: "Mariana", apellido: "Páez" },
    { id: 3, nombre: "Lorena", apellido: "Medina" }
];
const id = 2;
const personaEncontrado = personas.find((objeto) => objeto.id === id, id);
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
=======
// Uso de find con primitivos
const numeros = [11, 20, 32, 15, 8, 9, 24];
const argumento = 11;
const numeroEncontrado = numeros.find((valor) => valor === argumento, argumento);
console.log(numeroEncontrado);

// Uso de find con objetos
const personas = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez' },
    { id: 2, nombre: 'Mariana', apellido: 'Páez' },
    { id: 3, nombre: 'Lorena', apellido: 'Medina' }
];
const id = 2;
const personaEncontrado = personas.find((objeto) => objeto.id === id, id);
>>>>>>> 753122c627abb2ce1c8e7e793d3ebce4fcb9ba5a
console.log(personaEncontrado);