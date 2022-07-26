const numeroRepetido = (numero, repeticoes)=>{
    const array = []
    for (let i = 0 ; i < repeticoes; i++){
        array.push(numero)
    }
    return array
}

console.log(numeroRepetido(7,10))