// Exercício número 06)
function jurosSimples(capInicial, taxDeJuros, temAplicacao){
    const taxaDeJuros = taxDeJuros/100;
    const formulaDeJuros = capInicial * taxaDeJuros * temAplicacao;
    const Montante = formulaDeJuros + capInicial;
    return `O montante sob juros simples é: R$${Montante.toFixed(2)}`
}
console.log(jurosSimples(1800,1.3,12))                        //Juros Simplies J = c . i . n
                                                              //Juros compostos M = c . (1 + i)^^t
function jurosCompostos(capInicial, taxDeJuros, temAplicacao){
    const taxaDeJuros = taxDeJuros/100;
    const formulaDeJurosComposto = capInicial *(1 + taxaDeJuros)**temAplicacao
    return `O montante composto é: R$${formulaDeJurosComposto.toFixed(2)}`
}
console.log(jurosCompostos(1800,1.3,12))