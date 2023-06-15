const fs = require("fs");
const path = require("path");

// // Crear un directorio
// fs.mkdir(path.join(__dirname, "archivos"), (error) => {
//     if (error) throw new Error("Hubo un error al crear el directorio");

//     console.log("El directorio de ha creado correctamente");
// });

// setTimeout(() => {
//     // Renombrar un directorio
//     fs.rename(path.join(__dirname, "archivos"), path.join(__dirname, "archivos2"), (error) => {
//         if (error) throw new Error("Hubo un error al renombrar el directorio");

//         console.log("El directorio de ha renombrado correctamente");
//     });
// }, 250);

// setTimeout(() => {
//     // Leer nombres de directorios
//     fs.readdir(path.join(__dirname, "otros"), (error, result) => {
//         if (error) throw new Error("Hubo un error al leer el directorio");

//         console.log("El directorio se ha leido correctamente");
//         console.log(result);

//         fs.readFile(path.join(__dirname, `otros/${result[1]}`), "utf8", (err, contenido) => {
//             if (err) throw new Error("Hubo un error al leer el directorio");

//             console.log("El archivo se ha leido correctamente");
//             console.log(contenido);
//         });
//     });
// }, 750);

const texto = "Tu nombre es Juan Perez y tienes 24 años";
//const codificado = btoa(texto);
//const decodificado = atob(codificado);

const codificado = Buffer.from(texto, "utf8").toString("base64");
const decodificado = Buffer.from(codificado, "base64").toString("utf8");

console.log(codificado);
console.log(decodificado);