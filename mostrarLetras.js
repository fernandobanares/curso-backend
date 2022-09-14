
function mostrarLetras (palabra, termine) {
    let i = 0
const timer = setInterval (( ) => {
  if (i < palabra.length) {
    console.log(palabra[i])
    i++
  } else {
    clearInterval ( timer )
    termine ( )
  }
} , 1000 )

// const fin = () => console.log ('terminé')

mostrarLetras('ejemplo', console.log('terminé'))

// setTimeout (() => { mostrarLetras (' hola ', fin); }, 0)
// setTimeout (() => { mostrarLetras (' hola ' , fin); }, 2500)
// setTimeout (() => { mostrarLetras (' hola ' , fin); }, 500)
}