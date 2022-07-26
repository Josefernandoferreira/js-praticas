// Exercício número 15)

const comprarCarro = function (carro){
    switch(carro){
        case 'hatch':
            console.log('Compra efetuada com sucesso')
        break

        case 'sedan': case 'motocicletas': case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo ?')
        break

        default:
            console.log('Não trabalhamos com esse tipo de automóvel aqui')
    }
}

comprarCarro('hatch')
comprarCarro('sedan')
comprarCarro('motocicletas')
comprarCarro('caminhonete')
comprarCarro('golf gti')