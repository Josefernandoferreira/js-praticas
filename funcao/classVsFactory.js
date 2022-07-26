class pessoa{
    constructor (nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('João')
p1.falar()

const criarPessoa = nome =>{
    return {
        falar :() => console.log(`Oi eu sou ${nome}`)
    }
}

const p2 = criarPessoa('Goku')
p2.falar()