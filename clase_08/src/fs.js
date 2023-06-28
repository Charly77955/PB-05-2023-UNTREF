<<<<<<< HEAD
const fs = require("fs");
const path = require("path");

const rutaDelArchivo = path.join(__dirname, "archivo.txt");

fs.writeFile(rutaDelArchivo, "Hola Mundo", "utf8", (error) => {
    if (error) {
        console.log("Error al escribir contenido en el archivo");
    }

    console.log("\nContenido escrito");
});

fs.readFile(rutaDelArchivo, "utf8", (error, result) => {
    if (error) {
        console.log("Error al leer el archivo");
    }

    console.log("Contenido leido");
    console.log(result);
});

fs.appendFile(rutaDelArchivo, "\nBienvenidos a Programación BackEnd", "utf8", (error) => {
    if (error) {
        console.log("Error al agregar contenido en el archivo");
    }

    console.log("\nContenido agregado");
});

fs.unlink(rutaDelArchivo, (error) => {
    if (error) {
        console.log("Error al eliminar el archivo");
    }

    console.log("\nArchivo eliminado");
=======
const fs = require("fs");
const path = require("path");

const rutaDelArchivo = path.join(__dirname, "archivo.txt");

fs.writeFile(rutaDelArchivo, "Hola Mundo", "utf8", (error) => {
    if (error) {
        console.log("Error al escribir contenido en el archivo");
    }

    console.log("\nContenido escrito");
});

fs.readFile(rutaDelArchivo, "utf8", (error, result) => {
    if (error) {
        console.log("Error al leer el archivo");
    }

    console.log("Contenido leido");
    console.log(result);
});

fs.appendFile(rutaDelArchivo, "\nBienvenidos a Programación BackEnd", "utf8", (error) => {
    if (error) {
        console.log("Error al agregar contenido en el archivo");
    }

    console.log("\nContenido agregado");
});

fs.unlink(rutaDelArchivo, (error) => {
    if (error) {
        console.log("Error al eliminar el archivo");
    }

    console.log("\nArchivo eliminado");
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
});