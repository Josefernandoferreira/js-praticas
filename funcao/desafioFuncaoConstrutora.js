function criarPessoa(nome){
    this.nome= nome
    this.frase = () => {
        console.log(`Oi, eu sou ${this.nome}`)
    }
}

const p1 = new criarPessoa('Goku')
p1.frase()
const p2 = new criarPessoa('João')
p2.frase()
















