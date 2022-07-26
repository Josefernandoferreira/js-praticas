function arrayVariados(parametros = [1, 'oi', 'bom dia', 20, 22]){
    const newArray = []
    for (let i of parametros){
       if (typeof i === 'number')
        newArray.push(i)
    }
    return newArray
}

console.log(arrayVariados())
console.log(arrayVariados(['1', 2, '3', 4, '5']))

const numeros = array =>{
   return array.filter(a => typeof a === 'number')
}

console.log(numeros(['1', 20, '3', 50, '5']))
