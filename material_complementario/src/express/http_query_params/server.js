<<<<<<< HEAD
<<<<<<< HEAD
const express = require("express");

const server = express();
const PORT = 3000;
const HOST = "127.0.0.1"; // Thunder Client no funciona con "localhost"

// Ruta: http://127.0.0.1:3000/example?numero=1&&texto=hola&booleano=true
server.get('/example', (req, res) => {
    const { numero, texto, booleano } = req.query; // Query params

    res.status(200).send(`Los datos enviados son: ${numero} ${texto} ${booleano}`); // Imprime "Los datos enviados son: 1 hola true"
});

// Control de rutas inexistentes
server.use('*', (request, response) => {
    response.status(404).send(`<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>`);
});

// Método oyente de peteciones
=======
const express = require("express");

const server = express();
const PORT = 3000;
const HOST = "127.0.0.1"; // Thunder Client no funciona con "localhost"

// Ruta: http://127.0.0.1:3000/example?numero=1&&texto=hola&booleano=true
server.get('/example', (req, res) => {
    const { numero, texto, booleano } = req.query; // Query params

    res.status(200).send(`Los datos enviados son: ${numero} ${texto} ${booleano}`); // Imprime "Los datos enviados son: 1 hola true"
});

// Control de rutas inexistentes
server.use('*', (request, response) => {
    response.status(404).send(`<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>`);
});

// Método oyente de peteciones
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
=======
const express = require("express");

const server = express();
const PORT = 3000;
const HOST = "127.0.0.1"; // Thunder Client no funciona con "localhost"

// Ruta: http://127.0.0.1:3000/example?numero=1&&texto=hola&booleano=true
server.get('/example', (req, res) => {
    const { numero, texto, booleano } = req.query; // Query params

    res.status(200).send(`Los datos enviados son: ${numero} ${texto} ${booleano}`); // Imprime "Los datos enviados son: 1 hola true"
});

// Control de rutas inexistentes
server.use('*', (request, response) => {
    response.status(404).send(`<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>`);
});

// Método oyente de solicitudes
>>>>>>> 753122c627abb2ce1c8e7e793d3ebce4fcb9ba5a
server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));