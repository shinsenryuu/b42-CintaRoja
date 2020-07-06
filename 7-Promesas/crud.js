// CREATE crear POST
// READ leer GET
// UPDATE actualizar PATCH
// SUBSTITUTE substituir PUT
// DELETE borrar

const axios = require('axios');

const author = {
    "name": "Mali",
    "last_name": "Becerril",
    "nacionalidad": "MX",
    "biography": "hola me llamo mali, me gusta leer",
    "gender": "F",
    "age": 21
};

const pasarMisDatosPorElCRUSD = (author) => {
    axios.post('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/', author)
        .then(({ data, status }) => {
            if (status === 201) {
                console.log(`Creaste un nuevo usuario con el id ${data.id}`);
            }
        })
    


    axios.get('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/', author)
        .then(({ data, status }) => {
            if (status === 200) {
                console.log(`Consultaste al usuario con el id ${data.id}`);
            }
        })

    /* axios.patch('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/6885', {
        "name": "Iliana",
        completed: true
    })
        .then(({ data, status }) => {
            if (status >= 200) {
                console.log(`Actualizaste al usuario con el id ${data.id}`);
            }
        })


    axios.put('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/6885', {
        "name": "Felipe",
        "last_name": "Wong",
        "nacionalidad": "CH",
        "biography": "esto fue el PUT",
        "gender": "M",
        "age": 20
    })
        .then(({ data, status }) => {
            if (status >= 200) {
                console.log(`Sustituiste los datos del usuario con el id ${data.id}`);
            }
        })

    axios.delete('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/6885', author)
        .then(({ data, status }) => {
            if (status >= 200) {
                console.log(status);
                console.log(data);
                console.log(`Eliminaste al usuario con el id ${data.id}`);
            }
        }) */
}

pasarMisDatosPorElCRUSD(author);