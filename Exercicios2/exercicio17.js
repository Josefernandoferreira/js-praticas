const somaNum = [1, 2, 3, 4, 5, 5]

const somar = (num)=>{
    const somando = num.reduce((acumulador,soma)=>{return(acumulador +soma)
   
    })
return somando
}

console.log(somar(somaNum))

function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
    }

    console.log(somarNumeros(somaNum))    
    