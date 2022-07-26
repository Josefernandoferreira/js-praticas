const anoBisexto = (anoAtual)=> {
    if(anoAtual % 100 == 0){
        return `${false}, pois é multiplo de 100 e não é múltiplo de 400`
    }
   else if (anoAtual % 4 == 0 || anoAtual % 400 == 0) {
       return true
   }
}

console.log(anoBisexto(2020))
console.log(anoBisexto(2100))

// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
function checarAnoBissexto(ano) {
    return new Date(ano, 1, 29).getDate() === 29;
    }

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))