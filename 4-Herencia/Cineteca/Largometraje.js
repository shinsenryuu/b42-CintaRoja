// Clase padre

class Largometraje {
    constructor(title, director, duration) {
        this.title = title;
        this.director = director;
        this.duration = duration;
    };
    reproducir() {
        return `En un momento se reproducirá ${this.title}`;
    };
};

/*const ejemplo = new Largometraje('Jaws', 'Spielberg', '120mins');
console.log(ejemplo);*/


module.exports = { 
    Largometraje,
};