//https://pokeapi.co/api/v2/

/*
2.- Traer los primeros 151 pokemon de la primera generacion y 
    devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
    y peso.
*/

const request = require('request');

function getPokemon(error, response, body) {
    
    // console.log(JSON.parse(body).unique_unit);
    const newBody = JSON.parse(body);
    console.log(newBody.name);
    console.log(response.statusCode);

}

request('https://pokeapi.co/api/v2/pokemon/4/', getPokemon);


function getFirstGen(error, response, body) {
    //nombre, sus moves, tipos, tamaño y peso
    
    

    // console.log(JSON.parse(body).unique_unit);
    const newBody = JSON.parse(body);
    console.log(newBody.name);
    //console.log(newBody.moves);
    console.log(newBody.types);
    console.log(newBody.height);
    console.log(newBody.weight);

    console.log(response.statusCode);

}

//for para limitarlo a 151 pokemons
request(`https://pokeapi.co/api/v2/pokemon/${n}/`, getFirstGen);