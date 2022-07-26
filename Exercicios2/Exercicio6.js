const valoresInversos = valor => {
    if (typeof(valor) == 'number'){
        return `Valor inverso de ${valor} é : ${valor - valor*2}`
    }
    else if (valor == true || valor == false){
        return !valor
    }else{
        return `Boolean ou Number esperados, mas o parâmetro é ${typeof(valor)}`
    }

}

console.log(valoresInversos(3))