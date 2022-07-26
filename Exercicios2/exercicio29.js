const arrayDesordenado = [1,3,4,10,40,50,32,47,91,14]
console.log(arrayDesordenado.sort((a,b)=>b - a))

const segundoMaiorNumero = (numeros) => {
    numeros.sort((a,b)=>b - a)
    return numeros[1]
}

console.log(segundoMaiorNumero(arrayDesordenado))