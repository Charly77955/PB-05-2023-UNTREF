<<<<<<< HEAD
/*
    El método every() Determina si todos los elementos en el array
    satisfacen una condición.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every
*/

const numeros = [11, 20, 32, 15, 8, 9, 24];
const losNumerosSonMenoresA35 = numeros.every((valor) => valor < 35);
const losNumerosSonMayoresA20 = numeros.every((valor) => valor > 20);

console.log("EJEMPLO: Uso de every");
console.log(losNumerosSonMenoresA35);
=======
/*
    El método every() Determina si todos los elementos en el array
    satisfacen una condición.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every
*/

const numeros = [11, 20, 32, 15, 8, 9, 24];
const losNumerosSonMenoresA35 = numeros.every((valor) => valor < 35);
const losNumerosSonMayoresA20 = numeros.every((valor) => valor > 20);

console.log("EJEMPLO: Uso de every");
console.log(losNumerosSonMenoresA35);
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
console.log(losNumerosSonMayoresA20);