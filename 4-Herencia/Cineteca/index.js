const { Cine } = require('./Cine');
const { Documental } = require('./Documental');
const { Pelicula } = require('./Pelicula');
const { Largometraje } = require('./Largometraje');

const cinemex = new Cine ("Cinemex Reforma");

// reproducir el documental Cosmos
const documental = new Documental();

cinemex.reproducir(documental);

// reproducir su película Favorita
const documental = new Pelicula();

cinemex.reproducir(pelicula);
