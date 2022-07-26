let pontosDeJoao = "10, 20, 30, 4, 50, 3, 20"

function avaliaPontuacoes (pontosDeJoao){ 
    let pontos = pontosDeJoao.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontos[0]
    let menorPontuacao = pontos[0]

    for (let i = 1; i < pontos.length; i++){
        if (pontos[i] > maiorPontuacao) {
            maiorPontuacao = pontos[i]
            qtdQuebraDeRecords++   
        }else if (pontos[i] < menorPontuacao) {
            menorPontuacao = pontos[i]
            piorJogo = i+1;
        }
        
    }
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliaPontuacoes(pontosDeJoao))