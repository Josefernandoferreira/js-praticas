const alunos =[
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]

console.log(alunos.map(a=>a.nota))
const resultado = alunos.map(a => a.nota).reduce((acumulador, notas)=>{
   console.log(`acumulador ${acumulador}, nota ${notas}`)
    return (acumulador + notas)
},10)

console.log(resultado)




const arrn = [1, 5, 10, 12, 20]

const arr = arrn.reduce((acumulador,numeros)=>{
return (acumulador + numeros)
})

console.log(arr)