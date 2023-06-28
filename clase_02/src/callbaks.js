<<<<<<< HEAD
function incrementarEn2(numero) {
    return numero + 2;
}

function incrementarNumeros(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }

    return array;
}

=======
function incrementarEn2(numero) {
    return numero + 2;
}

function incrementarNumeros(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }

    return array;
}

>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
console.log(incrementarNumeros([10, 20, 30], incrementarEn2));