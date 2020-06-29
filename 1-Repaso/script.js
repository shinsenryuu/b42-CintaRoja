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
    return 'Mensaje';
}

console.log(nombreFuncion());
// Definicion de una funcion
const nombreArrowFunction = () => {
    // todo el archivo this
    console.log(variableLet);
}

let variableLet = 'valor';

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

const devolverValores = () => {
    let contador = 0;
    while(true) {
        // contador = contador + 1;
        // contador += 1;
        contador++;
        if( contador === 4){
            break;
        }
    }
    contador = contador >4 ? contador + 3 : contador--;
    return `La cantidad de veces que se contó es ${contador}`;
}

devolverValores();

console.log(1/0)
console.log(0/1)
console.log(0/0)


/* Arrow function */

() => {
}
parametro => {}

parametro => {
    return "Algo";
}
parametro => "Algo";

(parametro1, parametro2) => {}

const nombreArrow = (parametro1, parametro2) => {}

const nombreArrow4 = () => {
}
const nombreArrow5 = parametro => {}

const nombreArrow3 = parametro => {
    return 'Algo';
}

const nombreArrow2 = parametro => 'Algo';

const nombreArrow1 = (parametro1, parametro2)=> {}

const nombreArrow = (parametro1, parametro2)=> {
    return 'Algo';
};

const variableNueva = nombreArrow3(1);

/* Agrupar por funcionalidades */
const nombreAmigo = "Hugo";

const devolverTiposDeDatos = () => {
    nombreAmigo
}
