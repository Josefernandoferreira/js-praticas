const frase = "Meu nome é Jão Paulo"

function retirarVogais (vogais){
    return vogais.replace( /[aeiouà-ú]/gi, '') 
}

console.log(retirarVogais(frase))