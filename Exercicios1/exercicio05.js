// Exercício número 05)

function valor(){
    const dinheiro = 0.300000000004;
    const total = dinheiro.toFixed(2)
    return `R$${total.replace(".",",")}`
    }
    console.log(valor())