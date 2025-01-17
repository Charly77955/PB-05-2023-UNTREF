<<<<<<< HEAD
<<<<<<< HEAD
const express = require("express");
const data = require("./data.js");

const server = express();
const PORT = 3000;
const HOST = "127.0.0.1";
const coches = data.obtenerCoches();

// Configuración de la ruta coche http://127.0.0.1:3000/coche/1/color/rojo
server.get('/coche/:id/color/:color', (request, response) => {
    // Pamámetros recibidos por URL
    const {id, color} = req.params;
    response.status(200).send(`El Id ${id} recibido es y el color es ${color}`);
});

// Configuración de la ruta coche http://127.0.0.1:3000/coche?id=1&color=rojo
server.get('/coche', (request, response) => {
    // Pamámetros recibidos por query
    const { id, color } = req.query;
    response.status(200).send(`El Id ${id} recibido es y el color es ${color}`);
});

// Control de rutas inexistentes
server.use('*', (request, response) => {
    response.status(404).send(`<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>`);
});

// Método oyente de peteciones
=======
const express = require("express");
const data = require("./data.js");

const server = express();
const PORT = 3000;
const HOST = "127.0.0.1";
const coches = data.obtenerCoches();

// Configuración de la ruta coche http://127.0.0.1:3000/coche/1/color/rojo
server.get('/coche/:id/color/:color', (request, response) => {
    // Pamámetros recibidos por URL
    const {id, color} = req.params;
    response.status(200).send(`El Id ${id} recibido es y el color es ${color}`);
});

// Configuración de la ruta coche http://127.0.0.1:3000/coche?id=1&color=rojo
server.get('/coche', (request, response) => {
    // Pamámetros recibidos por query
    const { id, color } = req.query;
    response.status(200).send(`El Id ${id} recibido es y el color es ${color}`);
});

// Control de rutas inexistentes
server.use('*', (request, response) => {
    response.status(404).send(`<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>`);
});

// Método oyente de peteciones
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
=======
const express = require('express');

const server = express();
const PORT = 3000;
const HOST = '127.0.0.1';

// Configuración de la ruta coche http://127.0.0.1:3000/coche/1/color/rojo
server.get('/coche/:id/color/:color', (request, response) => {
    // Pamámetros recibidos por URL
    const { id, color } = request.params;
    response.status(200).send(`El Id ${id} recibido es y el color es ${color}`);
});

// Configuración de la ruta coche http://127.0.0.1:3000/coche?id=1&color=rojo
server.get('/coche', (request, response) => {
    // Pamámetros recibidos por query
    const { id, color } = request.query;
    response.status(200).send(`El Id ${id} recibido es y el color es ${color}`);
});

// Control de rutas inexistentes
server.use('*', (request, response) => {
    response.status(404).send(`<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>`);
});

// Método oyente de solicitudes
>>>>>>> 753122c627abb2ce1c8e7e793d3ebce4fcb9ba5a
server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));