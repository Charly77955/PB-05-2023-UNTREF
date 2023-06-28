const express = require("express");

const { findAll, findOneById, create, update } = require("./database/data.manager.js")
const server = express();
const PORT = 3000;
const HOST = "127.0.0.1";

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.get('/coches:id', (req, res) => { 
   findAll()
   .then((coches)=> res.status(200).send(coches))
   .catch((error)=> res.status(400).send(error.message))
    res.status(200).send("esto es GET" + id);
});
server.get('/coches:id', (req, res) => { 
    const {id} = req.params;

    findOneById(Number(id))
    .then((coche)=> res.status(200).send(coche))
    .catch((error)=> res.status(400).send(error.message))
     res.status(200).send("esto es GET" + id);
 });

 server.put('coches/:id', (req, res)=>{
    const {id} = req.params;
    const {marca, color} = req.body;

    update({id:Number(id)})
    res.status(200).send("esto es post" + id);
})

server.post('coches/:id', (req, res)=>{
    res.status(200).send("esto es post" + id);
})
server.put('coches/:id', (req, res)=>{
    res.status(200).send("esto es put" + id);
})
server.delete('coches/:id', (req, res)=>{
    res.status(200).send("esto es delete" + id);
})


server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}/coches`));