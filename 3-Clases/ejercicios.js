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

class Persona {
    constructor(nombre, fechaNacimiento, sexo, peso, altura) {
        this.nombre = nombre; // nombre completo
        this.fechaNacimiento = fechaNacimiento; // DDMMAAAA
        this.sexo = sexo; // hombre, mujer
        this.peso = peso; //kg
        this.altura = altura; //m


    };

    getAge() {
        const dia = new Date();
        let cumpleaños = new Date(this.fechaNacimiento)
        let edad = dia.getFullYear() - cumpleaños.getFullYear();
        let mes = dia.getMonth() - cumpleaños.getMonth();
        if (mes < 0 || (mes === 0 && dia.getDate() < cumpleaños.getDate())) {
            edad--;
        }
        return edad;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    };

    esMayorDeEdad() {
        if (this.getAge() >= 18) {
            return `${this.nombre} es mayor de edad.`
        } else {
            return `${this.nombre} no es mayor de edad.`
        }
    };


    generarRFC() {
        let nombreSeparado = this.nombre.split(" ");
        let primerApellido = nombreSeparado[1].substring(0, 2)
        let primeraParte = primerApellido.toUpperCase() + nombreSeparado[2].charAt() + nombreSeparado[0].charAt()
        let fecha = this.fechaNacimiento.split("/");
        let segundaParte = fecha[2].substring(2, 4) + fecha[0] + fecha[1]
        let todoJunto = primeraParte + segundaParte
        return todoJunto

    }
};

const Persona1 = new Persona("Sara Sanchez Solis", "03/07/1993", "mujer", 70, 1.7)

console.log(Persona1);
console.log(Persona1.calcularIMC());
console.log(Persona1.getAge());
console.log(Persona1.esMayorDeEdad())
console.log(Persona1.generarRFC())


/* Ejercicio 2 */

class Cuenta {
    constructor(titular, cantidad, estado) {
        this.titular = titular;
        this.cantidad = cantidad;
        this.estado = estado;
    };

    ingresar(a) {
        if ((this.cantidad + a) > 900) {
            return `Lo sentimos ${this.titular}, no puede realizar esta operacion al sobrepasar el limite de tu cuenta.`;
        } else {
            return `Operacion exitosa, su nuevo total es de ${this.cantidad + a}.`;
        }
    };

    retirar(b) {
        if ((this.cantidad - b) < 10) {
            return `Lo sentimos ${this.titular}, tu cuenta debe de tener un minimo de $10.00.`;
        } else {
            return `Operacion exitosa, su nuevo total es de ${this.cantidad - b}.00.`;
        }
    };
}

const cuentaNueva = new Cuenta("Sara Sanchez Solis", 500, )
console.log(cuentaNueva.ingresar(600));
console.log(cuentaNueva.ingresar(300));
console.log(cuentaNueva.retirar(600));
console.log(cuentaNueva.retirar(250))