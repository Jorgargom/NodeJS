const heroe = {

    nombre : 'Jorge',
    apellido : 'García',
    poder : 'Dev',
    edad : 40,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

const {nombre, apellido, poder, edad = 0} = heroe;


console.log(nombre, apellido, poder, edad);