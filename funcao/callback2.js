const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem Callback
const notasBaixas = []
for (let i in notas){
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com Callbaack
const notasBaixas2 = notas.filter(function (notas){
    return notas < 7
})

const notasMenores = notas => notas < 7;

const notasBaixas3 = notas.filter(notasMenores  )

const notasAltas = notas.filter(notas => notas > 7 )

console.log(notasBaixas2)
console.log(notasBaixas3)
console.log(notasAltas)