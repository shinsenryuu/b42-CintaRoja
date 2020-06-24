/* 
Tipos de datos
Tipado debil

Tipos

string: Cadena de caracteres / palabras '' ""
number: numero (float, integer)
boolean: booleanos true false
    *** truthy falsy
object: objeto {}
object: arreglo/array

undefined
nan
null
Inifinity
*/

/* Hoisting */
/* ECMA Script 5 */

console.log(typeof numero);

// Contexto global: scope
var numero = 1;

console.log(typeof numero);

gritar();

function gritar() {
    console.log("aaaahhhhhhh!", this);
}

/* ECMA Script 6 */

/* Actualizar y reasignar (cambiar tipo de dato) */
let nombreL = '';
nombreL = 'Iliana';
nombreL = {};

/* NO te permite reasignar */
const nombreC = {
    nombre: 'Mali'
};

nombreC.nombre = 'Edwin';

console.log(nombreC, nombreL);

const mascotas = ['Rayas', 'Mocha', 'Cosa'];

mascotas.push('Paloma');
console.log(mascotas);

function nombreFuncion() {
    //function this
}

// Definicion de una funcion
const nombreArrowFunction = () => {
    // todo el archivo this
    console.log(variablelet);
}

let variablelet = 'valor';

// ejecucion de la funcion
nombreArrowFunction();


/* Estructuras de control */
/* 
for
for each
while do
if else
switch

*/

const a = '3';
if( a === '1' ) {
    // bloque de lineas de codigo dentro del if
} else if( a === '2' ) {
    // bloque de lineas de codigo dentro del if
} else if( a === '3' ) {
    // bloque de lineas de codigo dentro del if
}

// como un if para puros iguales ===, pero mayor control
switch (a) {
    case '1':
        // lineas de codigo del switch 1
        break;
    case '2':
        // lineas de codigo del switch 1
        break;
    case '3':
        // lineas de codigo del switch 1
        break;
    default:
        // lineas de codigo que se ejecutan cuando ninguno de los casos de arriba se cumplio
        break;
}

console.log(1/0)
console.log(0/1)
console.log(0/0)

