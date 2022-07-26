// Exercício número 11)
function anoBissexto(ano){
if (ano <= 0) {
    console.log('Ano invalido')
}else if (ano%400 === 0){   
    console.log(true)    
}else if (ano%4 === 0 && ano%100!== 0){
    console.log(true)
}else {
    console.log(false)
}
}

anoBissexto(20)