let dobro = function(a){
    return (a * 2)
}

dobro = (a) => 2 * a  //return implícito
console.log(dobro(Math.PI))


let frase = function(){
    return 'Olá'
}

frase = () => 'Olá'
console.log(frase())