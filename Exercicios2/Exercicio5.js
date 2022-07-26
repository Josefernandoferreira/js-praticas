function maiorOuIgual (numero1, numero2){
    if (numero1 >= numero2){
        return true
    }else if (numero1 <! numero2 ){
        return false
    }else if (numero1 || numero2 == String){
        return false
    }
}

console.log(maiorOuIgual(4, 2 ))
console.log(maiorOuIgual(1, 1 ))
console.log(maiorOuIgual(1, 2 ))
console.log(maiorOuIgual(7,'2'))