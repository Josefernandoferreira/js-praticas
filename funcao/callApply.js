function getPreco (taxa = 0, moeda = 'R$' ){
    return `O preço é ${moeda} ${this.preco * (1 - this.desc) * (1 + taxa)}`
}
const produto ={
    nome: 'Notebook', 
    preco: 2500, 
    desc: 0, 
    getPreco
}
globalThis.preco = 20
globalThis.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco())

const carro = { 
    preco: 25000,
    desc: 0.1 
}

console.log(getPreco.call(carro,))

function mediaDeAlono (){
    const notas = (this.nota1+ this.nota2+ this.nota3+ this.nota4)/4
    return `A media do aluno é: ${ notas.toFixed(2) } `
}

const aluno1 = {
 nota1: 7.8,
 nota2: 4.5,
 nota3: 6.1,
 nota4: 3.5,
 mediaDeAlono
}

console.log(aluno1.mediaDeAlono.call(aluno1))

