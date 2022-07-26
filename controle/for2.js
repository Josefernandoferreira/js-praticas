const controle = [1.2, 3.4, 7.8, 5.5, 'João']

for (let i in controle){
    console.log(`${i}= ${controle[i]}`)
}

const pessoa = {
nome: 'João Paulo',
idade: 19 , 
sexo: 'masculino' 
}

for (let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}

const nomes = ['joao', 'marcelo', 'josé', 'silva'];
let nome = "@gmail.com"

for (let i = 0;i < nomes.length;i++){
    const compNomes =[]
   compNomes.push(nomes[i] + nome)
    console.log(compNomes)
} 

