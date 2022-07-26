// Exercício número 17)

const aumento = function(salario, plano){

    switch(plano){

        case 'A':
            console.log(salario + (salario * 0.1) )
        break

        case 'B':
            console.log(salario + (salario * 0.15))
        break

        case 'C':
            console.log(salario + (salario * 0.2))
        break
    
        default:
            console.log('Plano inválido')
        }
}

aumento(1200, 'C')
aumento(2000, 'B')
aumento(2500, 'A')
aumento(10000, 'D')