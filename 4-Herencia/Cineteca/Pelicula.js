// Agregar 1 método y dos cracterísticas extras diferentes de las de largometraje y documental

const Largometraje = require("./Largometraje");

class Pelicula extends Largometraje {
    constructor(title, director, duration) {
        super(title, director, duration);
        this.protagonista = protagonista;
        this.año = año;
    }
    reproducir() {
        console.log(`En un momento se reproducirá ${this.title}`);
    };
    paises() {
        console.log(`En un momento se reproducirá ${this.title}`);
    };
}


module.exports = { 
    Pelicula,
};