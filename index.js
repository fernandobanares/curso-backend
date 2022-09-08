class persona {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros
        this.mascotas = mascotas;
    }    
}

function getFullName(){
    return(`${this.nombre} ${this.apellido}`)
}

function addMascota(){
    this.mascotas.push();
}

function countMascotas(){
   return this.mascotas.lenght;
}

function addBook(){
    this.libros.push()
}

function getBookNames(){
    let arrayResult = []
    this.libros.forEach(element => {
        arrayResult.push(element.nombre)
    });
    return arrayResult
}





let libros = {nombre: 'Hola', autor: 'pepe'}
let mascota1= 'canario'
let usuario = new persona('Fernando', 'Bañares',{nombre:'Farenheit 451', autor:'Ray Bradbury'},['Luna','Diana'])

addBook(libros)


console.log(usuario)

