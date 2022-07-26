const array = [
    20, 21, 19, 30, 4, 5, 6, 7
]
const numerosPares = (numeros) => {
    const pares =[]
    numeros.filter(function(a,b) {
        if (a % 2 === 0 ){
            pares.push(a)
        } else if (b%2 === 0 && pares.indexOf(a) !== b){
            pares.push(a)
        }
        })
    return pares 
}
console.log(numerosPares(array))

function receberSomenteOsParesDeIndicesPares(array) {
    return array.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
    })
    }
     
    console.log(receberSomenteOsParesDeIndicesPares(array))
    