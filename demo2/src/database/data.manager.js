const fs = require("fs");
const path = require("path");

const ruta = path.join(__dirname, "data.json");

function escribir(contenido) {
    return new Promise((resolve,reject) => {
        fs.whiteFile(ruta,JSON.stringify(contenido,null, "/t"),"utf8",(error)=>{
            if(error) reject(new Error("error, no se pudo escribir"));

            resolve(true);
        });
    });
}

function leer() {
    return new Promise((resolve,reject) => {
        fs.readFile(ruta,"utf8",(error, contenido)=>{
            if(error) reject(new Error("error, no se pudo leer"));

            resolve(JSON.parse(contenido));
        });
    });
}

function generarId(coches) {
    let mayorId = 0;

    coches.forEach((coche) => {
        if(coche.id > mayorId){
            mayorId = coche.id;
        }
    });

    return mayorId + 1;
}

async function findAll() {
    const coches = await leer();
    return coches;
    
}
async function findOneById(id) {
    if(!id) throw new Error("Error. Id indefinido")

    const coches = await leer();
    const coche = coches.find((element)=> elemento.id === Number(id));
    if(!coche) throw new Error("Error. El id no corresponde a un coche")

    return coches;
    
}
async function create(coche) {
    if(!coche.marca && !coche.color) throw new Error("Error. Id indefinido");

    const coches = await leer();
    const cocheConId = {id: generarId(coches), ...coche}
    coches.push(cocheConId);
    await escribir(coches);
    return cocheConId;
    
}
async function update(coche) {
    if(!coche.id && !coche.marca && !coche.color) throw new Error("Error. Datos indefinidos");

    const coches = await leer();
    const indice = coches.findIndex((elemento)=> elemento.id === (id));
    if(!coche) throw new Error("Error. El id no corresponde a un coche")

    coches [indice] = coche;

    return coches;
    
}

module.exports = {findAll, findOneById, create, update};