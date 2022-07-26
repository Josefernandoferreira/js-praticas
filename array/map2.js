var carrinho = [
        '{ "nome": "Borracha", "preco": 3.45 }',
        '{ "nome": "Caderno", "preco": 13.90 }',
        '{ "nome": "Kit de Laois", "preco": 41.22 }',
        '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
console.log(paraObjeto)
const produtosPrecos = precos=> precos.preco 


const resultado = carrinho.map(paraObjeto).map(produtosPrecos)

console.log(resultado)