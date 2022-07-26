const x = [1,2,3,4,7]
const i = []

function novoArray (){
    i.push(x[0] , x.pop())
    return i
}
console.log(novoArray())

function receberPrimeiroEUltimoElemento(elementos) {
    const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = elementos.length - 1
    const primeiroElemento = elementos[indiceDoPrimeiroElemento]
    const ultimoElemento = elementos[indiceDoUltimoElemento]
    return [primeiroElemento, ultimoElemento]
    }

    console.log(receberPrimeiroEUltimoElemento([5,2,3,4,10]))