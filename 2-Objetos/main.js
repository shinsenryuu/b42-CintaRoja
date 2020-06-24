//Definicion de objeto literal

const persona1 = {
    //clave: valor
    name: 'Mali',
    age: 21,
    isHuman: true,

    getAge() {
        return this.age;
    },

    setAge(newAge) {
        this.age = newAge;
    }
};

persona1.setAge(22);

console.log(`Hola soy ${persona1.name} tengo ${persona1.getAge()} años.`)
// ${} es para imprimir lo que tenga adentro como string
// con console.log se mantiene el formato aun con enters y tabs

/* 
1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
	https://en.wikipedia.org/wiki/List_of_fictional_penguins
    Crea un objeto llamado myPenguin con propiedades que representen
    la información listada en cada columna en esa página de wikipedia
    (por ejemplo: character, origin...)
2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
    de bienvenida. La salida debe ser algo como:
    “Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]”
3.- Escribe otra línea de código que añada una nueva propiedad a tu 
    pingüino llamada puedeVolar y asignalo a falso.
    Nota: No modifiques el código original donde definiste a tu pingüino
4.- Añade un método a tu pingüino llamado ‘graznar’ que muestre en 
    consola: “kaww kaww!!”
    Nota: Sí, así suenan los pingüinos
    Nota de la Nota: No modifiques el código previo. Hazlo en una
    nueva línea de código.
 */

const myPenguin = {
    character: 'Pen',
    origin: 'Neon Genesis Evangelion',
    notes: null,
}

console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.character}!`)

myPenguin.puedoVolar=false;
console.log(`Puedo volar: ${myPenguin.puedoVolar}`);
// var puedoVolar = addToObject(myPenguin, false);
// myPenguin.push(puedoVolar: false);

myPenguin.graznar = function() {
    console.log('kaww kaww!!');
};
myPenguin.graznar();
/* myPenguin.push(graznar() {
    return 'kaww kaww!!';
})
*/

console.log(myPenguin)