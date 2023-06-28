const express = require("express");
const path = require("path");
const data = require("./data.json"); 

const server = express();
const PORT = 3000;
const HOST = "127.0.0.1";

const productos = data.obtenerProductos();

server.get('/productos', (request, response) => {
    response.status(200).render(`Productos:${productos}`);
});

server.get('/productos/:id', (request, response) => {
    response.status(200).render(`Productos:${productos.id}`);
});

server.get('/productos/:nombre', (request, response) => {
    response.status(200).render(`Productos:${productos.nombre}`);
});
server.listen(PORT,HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));