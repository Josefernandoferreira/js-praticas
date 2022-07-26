const numeros = [1, 2, 23, 45, 900, 612, 712, 50]

const quantidadeDeNumeros = (numeros,numAlgarismos) =>{
const num = []
     numeros.map(a =>{
        if (String(a).length === numAlgarismos){
                num.push(a)
        }
    })
return num
}
console.log(quantidadeDeNumeros(numeros, 3))

