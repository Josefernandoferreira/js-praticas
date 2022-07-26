const alunos =[
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.bolsista))

const todosBolsistas = alunos.map(a =>a.bolsista).reduce((acumulador,bolsistas)=>{
    return acumulador && bolsistas
})
console.log(todosBolsistas)

const algumBolsista = alunos.map(a=> a.bolsista).reduce((acumulador,bolsista)=> {
    return acumulador || bolsista
})
console.log(algumBolsista)