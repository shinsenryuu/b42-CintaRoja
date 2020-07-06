const request = require('request');

function getResidents(error, response, body) {
    if (response.statusCode === 200) {

        const residentsName = JSON.parse(body);
        console.log(residentsName.residents);
        const [url] = residentsName.residents;
        request(url, getResidentName);

    };
}

function getResidentName(links, callback) {
    if (response.statusCode === 200) {

        const residentes = JSON.parse(body).residents;

        const arreglo = Object.values(residentes)

            .map((nombreResidentes) => {
                const arregloResidentes = nombreResidentes.map((asteroide) => {// iterar por asteroide
                    return {
                        nombreAsteroide: asteroide.id,
                        peligroso: asteroide.is_potentially_hazardous_asteroid ? true : false,
                    }
                });
                return arregloResidentes;
            });
        const filtro = arreglo.reduce((acumulador, valorActual) => [
            ...acumulador,
            ...valorActual
        ], [])
            .map(({ nombreAsteroide, peligroso }) => {
                return `El asteriode ${nombreAsteroide} ${peligroso ? 'es PELIGROSO' : 'no es peligroso'}`;
            });

        console.log(filtro);



    }

}




request('https://swapi.dev/api/planets/1/', getResidents);