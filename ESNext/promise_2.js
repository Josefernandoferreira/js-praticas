// setTimeout(function() {
//     console.log('Esecutando callback...')  
//     setTimeout(function() {
//         console.log('Esecutando callback...')
//             setTimeout(function() {
//                 console.log('Esecutando callback...')
//             }, 2000)
//     },2000)
// }, 2000)


function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve(/*'Vishhhh'*/)
        }, tempo)
    }) 
}
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
// esperarPor(3000).then(texto => console.log(texto))