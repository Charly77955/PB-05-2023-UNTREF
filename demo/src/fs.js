const fs = require("fs");
const path = require("path");

let primerContenido = "Hola Mundo desde un archivo TXT 2\nBienvenidos"
let segundoContenido = "\nBuenas noches"

function escribirArchivo(contenido) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, "demo.txt"), contenido, "utf8", (error) => {
            if (error) reject(new Error("Hubo un error. No se ha logrado escribir en el archivo"));

            console.log("El archivo se ha escrito correctamente");
            resolve(true);
        });
    });
}


function leerArchivo() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, "demo.txt"), "utf8", (error, result) => {
            if (error) reject( new Error("Hubo un error. No se ha logrado leer el archivo"));

            console.log("El archivo se ha leido correctamente");
            resolve(result);
        });
    });
}

function agregarAlArchivo(contenido) {
    return new Promise((resolve, reject) => {
        fs.appendFile(path.join(__dirname, "demo.txt"), contenido, "utf8", (error) => {
            if (error) reject( new Error("Hubo un error. No se ha logrado agregar en el archivo"));

            console.log("El contenido se ha escrito correctamente");
            resolve(true);
        });
    });
}

function eliminarArchivo(params) {
    return new Promise((resolve, reject) => {
        fs.unlink(path.join(__dirname, "demo.txt"), (error) => {
            if (error) reject(new Error("Hubo un error. No se ha logrado eliminar el archivo"));

            console.log("El archivo se ha eliminado correctamente");
            resolve(true);
        });
    });
}

async function probar() {
    try {
        await escribirArchivo(primerContenido);
        let resultado1 = await leerArchivo();
        console.log(resultado1);
        console.log("\n fin");

        await agregarAlArchivo(segundoContenido);
        let resultado2 = await leerArchivo();
        console.log(resultado2);

        eliminarArchivo();
    } catch (error) {
        console.log(error.message);
    } 
}

probar();