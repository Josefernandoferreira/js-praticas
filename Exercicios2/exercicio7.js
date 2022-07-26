function estaEntre(numero, maximo, minimo, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}
console.log(estaEntre(50,200,50))
console.log(estaEntre(1000,200,50))

function Entre(numero, maximo, minimo, inclusivo = true) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
    }
    
console.log(Entre(50,200,50))
console.log(Entre(100,200,50))