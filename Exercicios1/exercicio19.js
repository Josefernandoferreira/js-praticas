// Exercício número 19)

const pedido = (codigo, quantidade) => {

    switch(codigo){

        case 100:
            console.log(`O valor de ${quantidade} Cachorro Quente é R$ ${quantidade*3.00}`)
        break

        case 200:
            console.log(`O valor de ${quantidade} Hambúrguer Simples é R$ ${quantidade*4.00}`)
        
        break

        case 300:
            console.log(`O valor de ${quantidade} Cheeseburguer é R$ ${quantidade*5.50}`)
        break

        case 400:
            console.log(`O valor de ${quantidade} Bauru é R$ ${quantidade*7.50}`)
        break

        case 500:
            console.log(`O valor de ${quantidade} Refrigerante é R$ ${quantidade*3,50}`)
        break

        case 600:
            console.log(`O valor de ${quantidade} Suco é R$ ${quantidade*2,80}`)
        break

        default:
            console.log(`Produto não existente`)
    }
}

pedido(100, 5)
pedido(200, 2)
pedido(300, 3)
pedido(400, 2)
pedido(500, 9)
pedido(600, 10)
pedido(700, 2)