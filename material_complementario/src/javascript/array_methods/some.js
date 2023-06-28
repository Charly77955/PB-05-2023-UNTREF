<<<<<<< HEAD
/*
    El método some() comprueba si al menos un elemento del array cumple con la
    condición implementada por la función proporcionada.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
*/

const numeros = [11, 20, 32, 15, 8, 9, 24];
const hayAlMenosUnNumeroMayorA23 = numeros.some((valor) => valor > 22);
const hayAlMenosUnNumeroMenorA5 = numeros.some((valor) => valor < 5);

console.log("EJEMPLO: Uso de some");
console.log(hayAlMenosUnNumeroMayorA23);
=======
/*
    El método some() comprueba si al menos un elemento del array cumple con la
    condición implementada por la función proporcionada.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
*/

const numeros = [11, 20, 32, 15, 8, 9, 24];
const hayAlMenosUnNumeroMayorA23 = numeros.some((valor) => valor > 22);
const hayAlMenosUnNumeroMenorA5 = numeros.some((valor) => valor < 5);

console.log("EJEMPLO: Uso de some");
console.log(hayAlMenosUnNumeroMayorA23);
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
console.log(hayAlMenosUnNumeroMenorA5);