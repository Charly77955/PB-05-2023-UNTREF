<<<<<<< HEAD
function Producto(nombre, costo) {
    // Propiedades públicas
    this.nombre = nombre;
    this.costo = costo;

    // Método público
    this.obtenerPrecio = () => this.costo * 1.30;
}

// Instanciación o creación de objetos
const producto1 = new Producto('Teclado', 2700);
const producto2 = new Producto('Mouse', 1500);

console.log(producto1);
console.log(producto2);
=======
function Producto(nombre, costo) {
    // Propiedades públicas
    this.nombre = nombre;
    this.costo = costo;

    // Método público
    this.obtenerPrecio = () => this.costo * 1.30;
}

// Instanciación o creación de objetos
const producto1 = new Producto('Teclado', 2700);
const producto2 = new Producto('Mouse', 1500);

console.log(producto1);
console.log(producto2);
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
console.log(producto2.obtenerPrecio());