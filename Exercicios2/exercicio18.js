const despesas = [
    {nome: 'assassin', categoria: 'Entreterimento', preco: 122.90},
    {nome: 'cafeteira', categoria: 'Eletrodomesticos', preco: 199.00},
    {nome: 'notebook', categoria: 'Eletrodomesticos', preco: 2500.00}
]

function despesasTotais (desp){
    const precos = desp
    .map(a => a.preco)
    .reduce((acumulador, precos)=>acumulador + precos)

    return `R$${precos.toFixed(2).replace('.', ',')}`
} 

console.log(despesasTotais(despesas))


function despesasTotal(itens) {
    return itens
    .map(item => item.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual)
    }

console.log(despesasTotal(despesas))



function despesass(itens) {
    var total = 0
    for (let item of itens)
    total += item.preco
    return total
    }

    console.log(despesass(despesas))