<<<<<<< HEAD
<<<<<<< HEAD
// Uso de findIndex con objetos
const coches = [
    { id: 1, marca: "Ford", modelo: "Fiesta" },
    { id: 2, marca: "Chevrolet", modelo: "S10" },
    { id: 3, marca: "Fiat", modelo: "Palio" }
];
let indiceDeUnObjetoBuscado = coches.findIndex((elemento) => elemento.marca === "Fiat");
console.log(indiceDeUnObjetoBuscado);   // Imprime 2 (es el índice)

// Uso de indexOf con primitivos
const numeros = [10, 20, 30, 40, 50];
let indiceDeUnValorBuscado = numeros.findIndex((elemento) => elemento === 40);
=======
// Uso de findIndex con objetos
const coches = [
    { id: 1, marca: "Ford", modelo: "Fiesta" },
    { id: 2, marca: "Chevrolet", modelo: "S10" },
    { id: 3, marca: "Fiat", modelo: "Palio" }
];
let indiceDeUnObjetoBuscado = coches.findIndex((elemento) => elemento.marca === "Fiat");
console.log(indiceDeUnObjetoBuscado);   // Imprime 2 (es el índice)

// Uso de indexOf con primitivos
const numeros = [10, 20, 30, 40, 50];
let indiceDeUnValorBuscado = numeros.findIndex((elemento) => elemento === 40);
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
console.log(indiceDeUnValorBuscado);   // Imprime 3 (significa que lo encontro)
=======
// Uso de findIndex con objetos
const coches = [
    { id: 1, marca: 'Ford', modelo: 'Fiesta' },
    { id: 2, marca: 'Chevrolet', modelo: 'S10' },
    { id: 3, marca: 'Fiat', modelo: 'Palio' }
];
let indiceDeUnObjetoBuscado = coches.findIndex((elemento) => elemento.marca === 'Fiat');
console.log(indiceDeUnObjetoBuscado); // Imprime 2 (es el índice)

// Uso de indexOf con primitivos
const numeros = [10, 20, 30, 40, 50];
let indiceDeUnValorBuscado = numeros.findIndex((elemento) => elemento === 40);
console.log(indiceDeUnValorBuscado); // Imprime 3 (significa que lo encontro)
>>>>>>> 753122c627abb2ce1c8e7e793d3ebce4fcb9ba5a
