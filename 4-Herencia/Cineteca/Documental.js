// Agregar 1 método y dos cracterísticas extras diferentes de las de largometraje y pelicula

const Largometraje = require("./Largometraje");

class Documental extends Largometraje {
    constructor(title, director, duration) {
        super(title, director, duration);
        this.theme = theme;
        this.premiado = true;
    }
    reproducir() {
        console.log(`En un momento se reproducirá ${this.title}`);
    };
    reproducir() {
        console.log(`En un momento se reproducirá ${this.title}`);
    };
}


module.exports = { 
    Documental,
};