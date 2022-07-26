function numeroAleatorio (min, max, numSorteado){
    const random = Math.random()*(max - min) + min
    if (random.toFixed(0) == numSorteado){
        return `Parabéns vc seu numero ${numSorteado}`
    }else{return random.toFixed(0)}
}

console.log(numeroAleatorio(1, 10, 5))
// let nota = 0

// do {nota = numeroAleatorio(1, 10)
//     console.log(`Sua nota é ${nota}`)
// }while (nota != 10)
// console.log(`Parabéns sua nota é ${nota}`)

