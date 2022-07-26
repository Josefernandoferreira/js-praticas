const notas = [12, 20, 21, 5, 30]

function menorNota (notas) {
    let menor = notas[0]
    for(let i=0; i < notas.length; i++)
        if (notas[i] < menor)
        menor = notas[i]
    return menor
    }
    console.log(menorNota(notas))


function menorNumero(numeros) {
    return Math.min(...numeros);
    }
    console.log(menorNumero(notas))

function menorNum(numeros) {
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
    }
    console.log(menorNum(notas))


function numMenor(numeros) {
    let menor = numeros[0]
        for (let i in numeros)
            if (numeros[i] < menor)
                menor = numeros[i]
    return menor
    }
    console.log(numMenor(notas))