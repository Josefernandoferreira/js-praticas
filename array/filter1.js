const produtos = [
    { nome: 'Notebbok', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Jogo', preco: 500.00, fragil: false},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

// console.log(produtos.filter(function(e){
//     return false
// }))

const carosEFrageis = produtos.filter((e,x,z) => {
    return  e.preco >=500 && e.fragil
})

const caro = (valor) => {return valor.preco >= 500;}
const fragil = produto => produto.fragil
const caroFragil = (produtos.filter(caro).filter(fragil))

console.log(carosEFrageis)
console.log(caroFragil)