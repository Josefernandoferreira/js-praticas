
function valor (valor){
let valor100, valor50, valor10, valor1 = 0

const nota = console.log(`R$${valor}`)
function resultados(){
    if(valor/100 !== 0 && valor/100 >= 1 ) {
        valor100 = Math.floor(valor/100)
    }
    if(valor%100 >49){
        valor50 = Math.floor((valor%100)/50)
    }
    if(valor%100 >9){
        valor10 = Math.floor((valor%50)/10)
    }
    if(valor%100 >0){
        valor1 = Math.floor((valor%10)/1)
    }  

}
resultados()

let result = ''
if (valor100 !== 0){
   result +=`${valor100} nota(s) de R$100 `}

if (valor50 !== 0){  
    result += `${valor50} nota(s) de R$50 `}

if (valor10 !== 0){
    result += `${valor10} nota(s) de R$10 `}

if (valor1 !== 0){
    result += `${valor1} nota(s) de R$1 `}

console.log(result)

}

valor(1255)