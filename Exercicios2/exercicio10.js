const repetidor = (numero)=>{
    let resultado = ''
    for(let i = 0; i < numero; i++){
        resultado +='+'
    }
    return resultado
}
console.log(repetidor(4))

function simboloMais(quantidade) {
    return "+".repeat(quantidade)
    }
console.log(simboloMais(10))