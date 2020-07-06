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
5.- Añade otro método a tu pingüino llamado ‘saludar’ que imprima en
    consola el mismo mensaje que escribimos para la bienvenida.
    Esta vez, emplea la palabra reservada “this” para resolverlo.
6.- Sin modificar el código previo, cambia el nombre del pingüino a 
    “Señor Pingu” y llama al método “saludar” para verificar que 
    se ha aplicado el cambio correctamente.
7.- Escribe otro método llamado ‘volar’. Con este método imprime en 
    consola el mensaje “¡Puedo volar!” si el pingüino tiene ‘true’ 
    en su atributo ‘puedeVolar’. De lo contrario, muestra el mensaje
    “No puedo volar :(” 
8.- Cambia la propiedad “puedeVolar” de tu pingüino a “true”. Manda a 
    llamar el método ‘volar’ para verificar que el cambio se efectuó
    correctamente.
 */

/* Ejercicio 1 */
const myPenguin = {
    character: 'Pen',
    origin: 'Neon Genesis Evangelion',
    notes: null,
};

/* Ejercicio 2 */
console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.character}!`);

/* Ejercicio 3 */
myPenguin.puedoVolar=false;
console.log(`Puedo volar: ${myPenguin.puedoVolar}`);

/* Ejercicio 4 */
myPenguin.graznar = function() {
    console.log('kaww kaww!!');
};
myPenguin.graznar();

console.log(myPenguin);

/* Ejercicio 5 */
myPenguin.saludar = function() {
    return `Hola, soy un pingüino y mi nombre es ${this.character}!`
};

console.log(myPenguin.saludar());

/* Ejercicio 6 */
myPenguin.character = "Señor Pingu";

console.log(myPenguin.saludar());

/* Ejercicio 7 */
myPenguin.volar = function() {
    if (myPenguin.puedoVolar === true) {
        return "¡Puedo volar!"
    } else {
        return "No puedo volar :("
    }
    
};

console.log(myPenguin.volar());

/* Ejercicio 8 */
myPenguin.puedoVolar = true;

console.log(myPenguin.volar());
