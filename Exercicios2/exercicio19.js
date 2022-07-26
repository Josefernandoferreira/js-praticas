const numerosInformados = [2, 3, 7, 7, 1]

function calcularMedia (media){
    return `A média é de ${media
.reduce((acumulador, numeros )=> (acumulador + numeros))/media.length}`
}
console.log(calcularMedia(numerosInformados))

function calcularMed(numeros) {
    const quantidadeDeNumeros = numeros.length
    const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB)
    return somaTotal / quantidadeDeNumeros
    }
 console.log(calcularMed(numerosInformados))