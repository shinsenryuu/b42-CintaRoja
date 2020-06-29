//Definicion de objeto literal
const objeto = {
    nombre:'',
    edad: 0,
    metodo () {
        return 22;
    }
}

objeto.nombre;
objeto.edad;
objeto.metodo; //metodo () { return 22; }
objeto.metodo(); // devolver 22
objeto.nuevaPropiedad = 'valor de la nueva propiedad';

console.log(objeto);

const variable = null;
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
