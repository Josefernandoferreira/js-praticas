//novo recurso de ES2015
//Para fazer a destruduração em objetos se deve usar as {}

const pessoa = {
    nome: 'João Paulo',
    idade: 19,
    endereco: {
        cidade: 'Brazlandia',
        bairro: 'Vila São Jose'
    }
}

const {nome, idade} = pessoa;
console.log(nome,idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i);

const {endereco: {cidade, bairro}} = pessoa;
console.log(cidade,bairro);

const {sobrenome, bemHumorado = true} = pessoa;
console.log(sobrenome,bemHumorado);