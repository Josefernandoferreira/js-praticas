// return `salario = ${(*salario).replace('.' , ',' )}`

const salario = (dias, horas)=>{
    let valorDeHora = 15.70;
    const somaDeTraba = ((dias * horas)*valorDeHora)
    return `Salário igual a R$ = ${somaDeTraba.toFixed(2).replace('.', ',')}`
}

console.log(salario(30, 6))
