function soma() {
    let soma1 = 0
    for (i in arguments){
        soma1 += arguments[i]
    }
return soma1
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.3,4.3))

console.log(soma(1.2,2.2,'Teste'))
console.log(soma('a','b','c'))