<<<<<<< HEAD
<<<<<<< HEAD
function obtenerUnNumeroAleatorioParEntre1y10() {
    console.log("Procesando...");

    return new Promise((resolve, reject) => {
        const numeroAleatorioEntre1y10 = Math.floor(Math.random() * 10);

        setTimeout(() => {
            if (numeroAleatorioEntre1y10 % 2 === 0) {
                resolve(numeroAleatorioEntre1y10);
            } else {
                // Es un buena práctica manejar los errores con Error()
                reject(new Error(`Error al obtener el número aleatorio. ${numeroAleatorioEntre1y10}`));
            }
        }, 1000);
    });
}

obtenerUnNumeroAleatorioParEntre1y10()
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message))
    .finally(() => console.log("Proceso terminado"));

// El siguiente consolo.log está mal definido. Esto imprimiría
// Promise { <pending> } y no nos arrojaría un error.
=======
function obtenerUnNumeroAleatorioParEntre1y10() {
    console.log("Procesando...");

    return new Promise((resolve, reject) => {
        const numeroAleatorioEntre1y10 = Math.floor(Math.random() * 10);

        setTimeout(() => {
            if (numeroAleatorioEntre1y10 % 2 === 0) {
                resolve(numeroAleatorioEntre1y10);
            } else {
                // Es un buena práctica manejar los errores con Error()
                reject(new Error(`Error al obtener el número aleatorio. ${numeroAleatorioEntre1y10}`));
            }
        }, 1000);
    });
}

obtenerUnNumeroAleatorioParEntre1y10()
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message))
    .finally(() => console.log("Proceso terminado"));

// El siguiente consolo.log está mal definido. Esto imprimiría
// Promise { <pending> } y no nos arrojaría un error.
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
=======
function obtenerUnNumeroAleatorioParEntre1y10() {
    console.log('Procesando...');

    return new Promise((resolve, reject) => {
        const numeroAleatorioEntre1y10 = Math.floor(Math.random() * 10);

        setTimeout(() => {
            if (numeroAleatorioEntre1y10 % 2 === 0) {
                resolve(numeroAleatorioEntre1y10);
            } else {
                // Es un buena práctica manejar los errores con Error()
                reject(new Error(`Error al obtener el número aleatorio. ${numeroAleatorioEntre1y10}`));
            }
        }, 1000);
    });
}

obtenerUnNumeroAleatorioParEntre1y10()
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message))
    .finally(() => console.log('Proceso terminado'));

// El siguiente consolo.log está mal definido. Esto imprimiría
// Promise { <pending> } y no nos arrojaría un error.
>>>>>>> 753122c627abb2ce1c8e7e793d3ebce4fcb9ba5a
// console.log(obtenerDatos());