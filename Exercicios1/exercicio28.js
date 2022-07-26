function numeros(vetorNumeros){
    let pares = 0
    let impares = 0
    for (let x = 0; x < vetorNumeros.length; x++){
        if(vetorNumeros[x]% 2 == 0){
            pares++
        }else{
            impares++
        }
}
return `São ${pares} números pares e ${impares} números impares`

}
vetor = [2,3,4,5,6,7,8,9,10]
console.log(numeros(vetor))