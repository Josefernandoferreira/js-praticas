const obj = {a: 1, b: 2, c: 3}

const b = Object.entries(obj)
.map(a=>a.reverse())

console.log(Object.fromEntries(b))



function reverter (x){
    const obj1 = Object.entries(x)
    .map(a=>a.reverse())

    return Object.fromEntries(obj1)
}
console.log(reverter(obj))



function inverter(objeto) {
    const objetoInvertido = {}
    Object.entries(objeto).forEach( parChaveValor => {
    const chave = 0,
    valor = 1
    objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
    })
    return objetoInvertido
    }
    console.log(inverter(obj))