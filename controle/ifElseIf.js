Number.prototype.entre = function(inicio,fim){
    return this>=inicio && this<=fim
}

const imprimirNota = function (nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    }else if (nota.entre(7,8.99)){
        console.log('Aprovado')
    }else if (nota.entre(4.5,6.9)){
        console.log('Recuperação')
    }else if (nota.entre(0,3.9)){
        console.log('Reprovado')
    }else{
        console.log('Invalido')
    }
}

imprimirNota(10)
imprimirNota(7)
imprimirNota(5)
imprimirNota(0)
imprimirNota(-1)