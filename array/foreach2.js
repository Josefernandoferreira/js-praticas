const aprovados = ['Agatha','Aldo', 'Daniel', 'Rafael']

const forEach2 = (arr, funcao) => {
    for (let i = 0; i < arr.length; i++  ){
    funcao(arr[i], (i), arr)
    }
}
forEach2(aprovados, function(nome, indice, arr){
    console.log(`${indice+1})- ${nome}`)
    // console.log(arr)
})


Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

aprovados.forEach2(function(nome, indice, arr){
    console.log(`${indice+1})  ${nome}`)
    // console.log(arr)
})




// aprovados.forEach(function(nome, indice){
//     console.log(`${indice+1}) ${nome}`)
// })
