// não aceita repetição/não indexada
const times = new Set()
times.add('Flamengo')
times.add('Atletico').add('Juventos').add('Barcelona')
times.add('PSG')
times.add('Flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('flamengo'))
console.log(times.has('Flamengo'))
times.delete('Atletico')
console.log(times.has('Atletico'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)