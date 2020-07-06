//const request = require('request');

//request('url', callback);

const request = require('request');

function getOneCivilization(error, response, body) {
    // JSON.stringify() - de JSON a string
    // JSON.parse() - de string a JSON

    // console.log(JSON.parse(body).unique_unit);
    const newBody = JSON.parse(body);
    console.log(newBody.unique_unit);
    const [url] = newBody.unique_unit;
    console.log(response.statusCode);

    request(url, getUnit);
    //console.log(response.statusCode);
    //console.log(response);

}

function getUnit(error, response, body) {
    const newBody = JSON.parse(body);
    if (response.statusCode === 200) {
        console.log(`Es la unidad ${newBody.name} que se describe como ${newBody.description}`)
    }

}

request('https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/1', getOneCivilization);