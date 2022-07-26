function numAleatorio(min, max){
    if(min > max){
        [min, max] = [max, min]
    }
    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * max - min + 1) - min
        /*setTimeout(function (){*/
        resolve(aleatorio)
        /* },2000)*/
    })
}
numAleatorio(1, 60)
    .then(console.log)
    