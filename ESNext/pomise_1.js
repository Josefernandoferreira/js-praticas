const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()


new Promise(function(resolver) {
    resolver(['João Paulo', 'Bia', 'Carol', 'Daniel '])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    //.then(v -> console.log(v))
    .then(console.log)