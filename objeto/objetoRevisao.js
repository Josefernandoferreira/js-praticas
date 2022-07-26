// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generico'// outra forma de criar um atributo de objeto
produto.preco = 220

console.log(produto)
delete produto.preco // É possivel deletar umatributo de um objeto usando DELETE 
delete produto['marca do produto']
console.log(produto)

const carro ={
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores:[{
        nome: 'Junior',
        idade: 19
    },
    {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'
console.log(carro)

delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores.length)
carro.localQueMora={
    cidade :'Brazlandia',
    bairro : 'Vila São Jose'}
console.log(carro)
delete carro.condutores;
console.log(carro)