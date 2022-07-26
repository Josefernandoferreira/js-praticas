// Exercício número 16)

const calculadora = function (num1 = 2, operador, num2 = 3){
    switch(operador){
        
        case '+':
            console.log(num1 + num2)
            break
        
        case '-':
            console.log(num1 - num2)
            break

        case '*':
            console.log(num1 * num2)
            break

        case '/':
            console.log(num1 / num2)
            break

        default:
            console.log('Erro')

    }
}

calculadora(2, '*', 5)
calculadora(1, '+', 4)
calculadora(5, '-', 10)
calculadora(10, '/', 2)
calculadora(2, '**', 2)