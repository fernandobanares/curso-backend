const fs = require('fs');

// let fyh = new Date ().toLocaleString()
// console.log(fyh)

try {
    let fechaYHora = new Date().toLocaleString();
    fs.writeFileSync('fyh.txt', ` Esta es la fecha y hora actual: ${fechaYHora}`)
} catch (error) {
    throw new Error (`Error en escritura: ${error.message}`)
}

try {
    const contenido = fs.readFileSync('fechaYHora.js','utf-8')
    console.log (contenido)
} catch (error) {
    throw new Error(`Error en lectura: ${error.message}`)
}