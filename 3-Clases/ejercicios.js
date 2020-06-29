/*
1.- Haz una clase llamada Persona que siga las siguientes condiciones:
	Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
	calcularIMC()
	esMayorDeEdad()
	El constructor pide nombre, edad,sexo,peso y altura
	Generar el RFC a partir de el nombre, edad y sexo
2.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
	-Titular y cantidad, estado
	-ingresar(cantidad)
	-retirar(cantidad)
	Hacer las validaciones previas
	Como regla de negocio no debe de tener más de $900 y menos de $10
 */

/* Ejercicio 1 */

/*
class Persona {
    constructor(fechaNacimiento){
        this.fechaNacimiento = fechaNacimiento;
    }
    getAge(){
        this.fechaNacimiento;
*/

class Persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    };

    // separar nombre y apellidos y luego con charAt() sacar los caracteres que se necesitan

    calcularEdad() {
        //corregir edad a tipo fecha
        //const fechaActual = Date.now();
        // calcular edad desde fecha de nacimiento

    }

    calcularIMC() {
        console.log(this.peso/this.altura);
    };

    esMayorDeEdad() {
        if(this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad.`)
        } else {
            console.log(`${this.nombre} no es mayor de edad.`)
        }
    };


    generarRFC() {
        this.nombre.split(" ");

        //convertir string nombre y hacer split a letras
        //agarrar letras para RFC
        //usar seis digitos de fecha de nacimiento

    }
};

const Persona1 = new Persona("Sara Sanchez Solis", 25, "RFC", "femenino", 70, 1.7)

console.log(Persona1)
console.log(Persona1.RFC())


/* Ejercicio 2 */

class Cuenta {
    constructor(titular, cantidad, estado) {
        this.titular = titular;
        this.cantidad = cantidad;
        this.estado = estado;
    };

    ingresar(a) {
        console.log(this.peso/this.altura);
    };

    retirar(b) {
        if(this.cantidad + a >= 18) {
            console.log("Lo sentimos, no puedes realizar esta operacion al sobrepasar el limite de tu cuenta")
        } else {
            console.log(`${this.nombre} no es mayor de edad.`)
        }
    };

    RFC
};

