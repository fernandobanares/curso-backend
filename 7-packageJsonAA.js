const fs = require ('fs')
const leer = async () => {
    try {
        let resultado = await fs.promises.readFile ( ' info.txt ' , ' utf - 8 ' )
        console.log ( resultado )
        let obj = JSON.parse ( resultado )
        let contobj = obj.contenidoobj
        contobj.author = ' Coderhouse '
        await fs.promises.writeFile ( ' package.AA.coder ' , JSON.stringify ( contobj , null , 2 ))
}
     catch (error) {
        console.log (`Error en lectura : ${error}`)
    }

}
leer ()