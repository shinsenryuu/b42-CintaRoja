const axios = require('axios');

const funcionNormal = () => {
    axios.get('https://rickandmortyapi.com/api/character/48')
        .then(({ data }) => {
            console.log(data);
        })
        .catch(({ response }) => {
            console.log(response.data);
        })
};

const funcionConContextoAsincrono = async () => {
    /* const { data } = await axios.get('https://rickandmortyapi.com/api/character/48');
    console.log(data); */

    try {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character/48');
        console.log(data);
    } catch (e) {

    }
};

// funcionNormal();
funcionConContextoAsincrono();