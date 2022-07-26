const fraseParaSerDividida = "Oi meu nome é João Paulo"
const fra = 'o'
function numLetras (frase, letra){
    const dividida = frase.split('');
    const armazenamento = dividida.filter(a=> a == letra)
    return `Tem ${armazenamento.length} letra(s) ${letra} na frase ${frase}`
}
console.log(numLetras(fraseParaSerDividida, fra))



function contarCaractere(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
}
console.log(contarCaractere(fra, fraseParaSerDividida))