// função arrow (função reduzida)
const resultado = nota => nota >= 7 ? 'aprovado' : 'reprovado'

console.log(resultado(7.11))
console.log(resultado(6.7))


// nota >= 7 ? 'Aprovado' : 'Reprovado' (ternario)

//função não reduzida (com o mesmo resultado)
const resultado2 = function (nota){
    var valorDaNota = nota >= 7 ? 'Aprovado' : 'Reprovado'
    return valorDaNota 
} 

console.log(resultado2(7.11))
console.log(resultado2(6.7))