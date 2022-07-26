const palavras = ['profissional', 'goleiro', 'professor', 'produtor', 'apropriado'];
const inicio = 'pro'

function paravraSemelhante (inicio, palavras){
    return palavras.filter(a => a.includes(inicio) )
}
console.log(paravraSemelhante(inicio, palavras))

function buscarPalavrasSemelhantes(inicio, palavras) {
    const resultado = []
    for (let palavra of palavras)
    if (palavra.includes(inicio))
    resultado.push(palavra)
    return resultado
}
console.log(buscarPalavrasSemelhantes(inicio, palavras))
    