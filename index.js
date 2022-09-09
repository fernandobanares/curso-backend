class persona {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros
        this.mascotas = mascotas;
    } 
  
    getFullName() {
        return `El nombre de usuario es ${this.nombre} ${this.apellido}`;
    }
    
    addMascota(){
        this.mascotas.push();
    }
    
    countMascotas(){
       return `Tengo ${this.mascotas.lenght} mascotas`;
    }
    
    addBook(titulo, autor){
        const libro = {titulo: titulo,autor: autor}
        this.libros.push(libro)
    }

    countBooks(){
        return  `Tengo ${this.libros.length} libros`;
    }
    
    getBookNames(){
        let arrayResult = []
        this.libros.forEach(element => {
            arrayResult.push(element.nombre)
        });
        return arrayResult
    }
    
}



const usuario1 = new persona('Fernando', 'Bañares',{titulo:'Farenheit 451', autor:'Ray Bradbury'},['Luna','Diana'])

console.log(usuario1.getFullName());
usuario1.addMascota('Totu');
console.log(usuario1.mascotas);
console.log(usuario1.countMascotas());
usuario1.addBook('Spiderman','Lucas');
console.log(usuario1.libros);
console.log(usuario1.getBookName());
console.log(usuario1.countBooks());

