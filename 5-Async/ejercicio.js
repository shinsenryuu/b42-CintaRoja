/*
1.- Muestra un mensaje mediante un callback.
La función de orden superior que escribas debe poder mostrar el mensaje como
console.warn, console.info, o cualquier método para pintar en consola del objeto console.
2.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
EJEMPLO [120, 80, 200, 100]
    y tomar solo las cantidades
mayores a dos horas (hacer la comparación en horas)
mediante un callback.
*/

// Ejercicio 1
function saludar(callback) {
    console.info(callback());
    
};

saludar(() => {
    return 'saludos desde VS Code!'
});


//Ejercicio 2
const minutos = [120, 80, 200, 100];

function tiempo(callback, mensaje) {

    const horas = minutos.filter(minuto => minuto/120 > 2);

    setTimeout(() => {
        if(minuto){
            callback(usuarios, '200 todo chido');
        } else {
            callback(usuarios, '404 nada chido :c');
        }
    }, 3000);
}

tiempo(mensaje);

console.log(minutos);
console.log(horas);

