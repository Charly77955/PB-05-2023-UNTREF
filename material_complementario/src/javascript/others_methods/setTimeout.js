<<<<<<< HEAD
/*
    El método global setTimeout() establece un temporizador que ejecuta
    una función o una pieza de código específica una vez que expira el
    temporizador.
    Fuente: https://developer.mozilla.org/es/docs/Web/API/setTimeout
*/

console.log("Esperando 2 segundos...");

const mensaje = "Espera terminada";

setTimeout(() => {
    console.log(mensaje);
=======
/*
    El método global setTimeout() establece un temporizador que ejecuta
    una función o una pieza de código específica una vez que expira el
    temporizador.
    Fuente: https://developer.mozilla.org/es/docs/Web/API/setTimeout
*/

console.log("Esperando 2 segundos...");

const mensaje = "Espera terminada";

setTimeout(() => {
    console.log(mensaje);
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
}, 2000, mensaje);