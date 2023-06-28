<<<<<<< HEAD
let contadorDeSegundos = 0;

const cronometro = setInterval(() => {
    contadorDeSegundos++;
    console.log(contadorDeSegundos);

    if (contadorDeSegundos === 3) {
        clearInterval(cronometro); // Detiene el interval a los 3 seg.
    }
=======
let contadorDeSegundos = 0;

const cronometro = setInterval(() => {
    contadorDeSegundos++;
    console.log(contadorDeSegundos);

    if (contadorDeSegundos === 3) {
        clearInterval(cronometro); // Detiene el interval a los 3 seg.
    }
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
}, 1000, contadorDeSegundos);