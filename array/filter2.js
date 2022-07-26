Array.prototype.filter2 = function(callback) {
    const newFilter = []
    for(let i = 0; i<this.length; i++){
        if(callback(this[i], i, this)){
            newFilter.push(this[i])
        }
    }
    return newFilter
}

const produtos = [
    { nome: 'Notebbok', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Jogo', preco: 500.00, fragil: false},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const caro = valor => {return valor.preco >= 500;}
const fragil = (produto, ) =>{ return produto.fragil}
const caroFragil =produtos.filter(caro).filter(fragil)
console.log(caroFragil)


console.log(produtos.preco[0])