<<<<<<< HEAD
<<<<<<< HEAD
let numeroA;
let numeroB;

// Asigna un valor a cada variable en relación al orden establecido
[numeroA, numeroB] = [3, 6];

console.log(numeroA);   // Imprime 3
console.log(numeroB);   // Imprime 6

const numeros = [10, 20, 30, 40, 50];

// Selecciona y destructura los elementos del array en variables.
let [numero10, numero20, numero30] = numeros;

console.log(numero10);  // Imprime 10
console.log(numero20);  // Imprime 20
console.log(numero30);  // Imprime 30

const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 21,
    esMayorDeEdad: true
};

// Selecciona y destructura los miembros del objeto en variables.
let { nombre, esMayorDeEdad } = persona;

console.log(nombre);        // Imprime Juan
=======
let numeroA;
let numeroB;

// Asigna un valor a cada variable en relación al orden establecido
[numeroA, numeroB] = [3, 6];

console.log(numeroA);   // Imprime 3
console.log(numeroB);   // Imprime 6

const numeros = [10, 20, 30, 40, 50];

// Selecciona y destructura los elementos del array en variables.
let [numero10, numero20, numero30] = numeros;

console.log(numero10);  // Imprime 10
console.log(numero20);  // Imprime 20
console.log(numero30);  // Imprime 30

const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 21,
    esMayorDeEdad: true
};

// Selecciona y destructura los miembros del objeto en variables.
let { nombre, esMayorDeEdad } = persona;

console.log(nombre);        // Imprime Juan
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
=======
let numeroA;
let numeroB;

// Asigna un valor a cada variable en relación al orden establecido
[numeroA, numeroB] = [3, 6];

console.log(numeroA); // Imprime 3
console.log(numeroB); // Imprime 6

const numeros = [10, 20, 30, 40, 50];

// Selecciona y destructura los elementos del array en variables.
let [numero10, numero20, numero30] = numeros;

console.log(numero10); // Imprime 10
console.log(numero20); // Imprime 20
console.log(numero30); // Imprime 30

const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 21,
    esMayorDeEdad: true
};

// Selecciona y destructura los miembros del objeto en variables.
let { nombre, esMayorDeEdad } = persona;

console.log(nombre); // Imprime Juan
>>>>>>> 753122c627abb2ce1c8e7e793d3ebce4fcb9ba5a
console.log(esMayorDeEdad); // Imprime true