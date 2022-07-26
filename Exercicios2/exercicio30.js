const notasAlunos = {
'João Paulo': [6.3, 7.2, 5.2, 9.3],
'Maria': [5.7, 6.3, 4.9, 7.2],
'Mariano': [3.5, 4.5, 5.6, 6.4]    
}

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length

function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
    const chave = 0,
        valor = 1
    return { nome: estudante[chave], media: media(estudante[valor]).toFixed(2) }
})
const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
const melhorEstudante = estudantesOrdenados[0]
return melhorEstudante
}

console.log(recerberMelhorEstudante(notasAlunos))















