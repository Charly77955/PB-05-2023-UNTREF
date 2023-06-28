<<<<<<< HEAD
let saludo = "Hola";
const numeros = [10, 20, 30];
const cosas = { a: "A", b: true };

// Convierte object a JSON lineal
const stringJSON = JSON.stringify({ saludo, numeros, cosas });
console.log(stringJSON);

// Convierte object a JSON indentado
const stringIndentadoJSON = JSON.stringify({ saludo, numeros, cosas }, null, "\t");
=======
let saludo = "Hola";
const numeros = [10, 20, 30];
const cosas = { a: "A", b: true };

// Convierte object a JSON lineal
const stringJSON = JSON.stringify({ saludo, numeros, cosas });
console.log(stringJSON);

// Convierte object a JSON indentado
const stringIndentadoJSON = JSON.stringify({ saludo, numeros, cosas }, null, "\t");
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
console.log(stringIndentadoJSON);