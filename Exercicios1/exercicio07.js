// Exercício número 07)
function bashkara (ax2,bx,c){
const telta = (bx**2) - (4 *ax2 * c)

    function  x1 (){ 
        const x1 = (-(bx)+Math.sqrt(telta))/(2*ax2)
        if (x1 <0){return 'número negativo'
        }else { return x1}
}
    function  x2 (){ 
        const x2 = (-(bx)-Math.sqrt(telta))/(2*ax2)
        if (x2 <0){return 'número negativo'
        }else { return x2}
}
return `x1: ${x1()} 
x2: ${x2()}`
}

console.log(bashkara(-2,-3,5))


