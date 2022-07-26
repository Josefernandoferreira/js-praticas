function nota (nota){
    if (nota>100){
        return `Nota Invalida`
    }else if (nota<38){
        return `${nota} => Reprovado`
    }else if (nota%5<3){
            return`${nota} => ${nota}`
        }else if(nota%5>3 || nota%5==3){
            return`${nota} => ${Math.ceil(nota/5)*5}`
                } 
    }

    for (let x = new nota(0); nota <101;nota ++)
    {console.log(x)} 


console.log(nota(94))
console.log(nota(37))
console.log(nota(39))
console.log(nota(31))
console.log(nota(50))
console.log(nota(52))
console.log(nota(93))
console.log(nota(70))

// console.log(x+"=>", x%5<3 ? (x%5===0 ? x : Math.floor(x/5)*5) : Math.ceil(x/5)*5);