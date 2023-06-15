const express = require("express");
const fs = require("fs");
const path = require("path");

const server = express();
const PORT = 3000;
const HOST = "127.0.0.1";

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
            if (error) reject(new Error("Hubo un error. No se ha logrado leer el archivo"));

            console.log("El archivo se ha leido correctamente");
            resolve(result);
        });
    });
}

server.get('/coche', (req, res) => {
    const { nombre, apellido, edad } = req.query;

    if (!nombre || !apellido || !edad) {
        return res.status(400).send("Hubo un error");
    }

    async function procesar(contenido) {
        try {
            await escribirArchivo(contenido);
            let resultado = await leerArchivo();
            res.status(200).send(resultado);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    procesar(`Tu nombre es ${nombre} ${apellido} y tienes ${edad} años`);
});

server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));