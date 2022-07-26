const objetoParaArray = {
    nome : 'João',
    idade : 19,
    endereco : 'Vila São Jose'
}

function arrays(o){
let novosArrays = []
for(key of Object.keys(o)){
    novosArrays.push([key, o[key]])
}
return novosArrays
}
console.log(arrays(objetoParaArray))

console.log(`
[${Object.keys(objetoParaArray)}]
`)

function objetos (objeto){
    const chaves = Object.keys(objeto)
    const arrays = chaves.map((key)=> [key, objeto[key]])
    return arrays
    }
    console.log(objetos(objetoParaArray))