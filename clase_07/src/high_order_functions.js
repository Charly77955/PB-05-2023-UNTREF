<<<<<<< HEAD
// Funciones de Orden Superior (callback)
function incrementarEn2(numero) {
    return numero + 2;
}

function duplicar(numero) {
    return numero * 2;
}

function procesarNumeros(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }

    return array;
}

console.log(procesarNumeros([10, 20, 30], incrementarEn2));
=======
// Funciones de Orden Superior (callback)
function incrementarEn2(numero) {
    return numero + 2;
}

function duplicar(numero) {
    return numero * 2;
}

function procesarNumeros(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }

    return array;
}

console.log(procesarNumeros([10, 20, 30], incrementarEn2));
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
console.log(procesarNumeros([10, 20, 30], duplicar));