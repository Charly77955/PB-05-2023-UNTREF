<<<<<<< HEAD
<<<<<<< HEAD
class Persona {

    // Propiedades privadas
    #nombre;
    #apellido;

    constructor(nombre, apellido, apodo, numeroFavorito) {
        this.#nombre = nombre;
        this.#apellido = apellido;

        // Propiedades públicas
        this.apodo = apodo;
        this.numeroFavorito = numeroFavorito;
    }

    // Método público
    saludar() {
        return `Hola. Soy ${this.#nombre} pero me dicen ${this.apodo}`;
    }

    // Getter & Setter
    get apellido() { return this.#apellido; }
    set apellido(apellido) { this.#apellido = apellido.toUpperCase(); }
}

// Instanciación o creación de un objeto de la clase Persona
const martin = new Persona("Martín", "Pérez", "Tincho", 14);

console.log(martin);              // Imprime solo las propiedades públicas
console.log(martin.saludar());    // Imprime "Hola. Soy Martín pero me dicen Tincho"

martin.apellido = "Romero";     // Setter: Modifica el apellido
=======
class Persona {

    // Propiedades privadas
    #nombre;
    #apellido;

    constructor(nombre, apellido, apodo, numeroFavorito) {
        this.#nombre = nombre;
        this.#apellido = apellido;

        // Propiedades públicas
        this.apodo = apodo;
        this.numeroFavorito = numeroFavorito;
    }

    // Método público
    saludar() {
        return `Hola. Soy ${this.#nombre} pero me dicen ${this.apodo}`;
    }

    // Getter & Setter
    get apellido() { return this.#apellido; }
    set apellido(apellido) { this.#apellido = apellido.toUpperCase(); }
}

// Instanciación o creación de un objeto de la clase Persona
const martin = new Persona("Martín", "Pérez", "Tincho", 14);

console.log(martin);              // Imprime solo las propiedades públicas
console.log(martin.saludar());    // Imprime "Hola. Soy Martín pero me dicen Tincho"

martin.apellido = "Romero";     // Setter: Modifica el apellido
>>>>>>> d945ea9675924c96a29cf57e88038856732c01ee
console.log(martin.apellido);   // Getter: Imprime "Romero"
=======
class Persona {
    // Propiedades privadas
    #nombre;
    #apellido;

    constructor(nombre, apellido, apodo, numeroFavorito) {
        this.#nombre = nombre;
        this.#apellido = apellido;

        // Propiedades públicas
        this.apodo = apodo;
        this.numeroFavorito = numeroFavorito;
    }

    // Método público
    saludar() {
        return `Hola. Soy ${this.#nombre} pero me dicen ${this.apodo}`;
    }

    // Getter & Setter
    get apellido() {
        return this.#apellido;
    }

    set apellido(apellido) {
        this.#apellido = apellido.toUpperCase();
    }
}

// Instanciación o creación de un objeto de la clase Persona
const martin = new Persona('Martín', 'Pérez', 'Tincho', 14);

console.log(martin); // Imprime solo las propiedades públicas
console.log(martin.saludar()); // Imprime 'Hola. Soy Martín pero me dicen Tincho'

martin.apellido = 'Romero'; // Setter: Modifica el apellido
console.log(martin.apellido); // Getter: Imprime 'Romero'
>>>>>>> 753122c627abb2ce1c8e7e793d3ebce4fcb9ba5a
