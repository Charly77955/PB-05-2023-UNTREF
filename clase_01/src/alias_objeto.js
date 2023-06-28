<<<<<<< HEAD
// Declaración e instanciación o creación de un objeto persona.
const persona = {
    nombre_primero: "Juan",
    nombre_segundo: "Pablo",
    edad_actual: 21
};

// Destructuración de un objeto con definición de alias. Primero
// Se declara el nombre de la propiedad, dos puntos y el alias.
const {
    nombre_primero: nombre1,
    nombre_segundo: nombre2,
    edad_actual: edadAcutal
} = persona;

=======
// Declaración e instanciación o creación de un objeto persona.
const persona = {
    nombre_primero: "Juan",
    nombre_segundo: "Pablo",
    edad_actual: 21
};

// Destructuración de un objeto con definición de alias. Primero
// Se declara el nombre de la propiedad, dos puntos y el alias.
const {
    nombre_primero: nombre1,
    nombre_segundo: nombre2,
    edad_actual: edadAcutal
} = persona;

>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
console.log(nombre1, nombre2, edadAcutal);