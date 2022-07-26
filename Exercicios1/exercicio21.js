function planoDeSaude (pessoa, idade){
    const pagamentoFixo = 100;
    let pagamento = pagamentoFixo
    if (idade <10){
        pagamento += 80;
    }else if (idade >9 && idade <31){
        pagamento += 50;
    }else if (idade > 30 && idade <= 60){
        pagamento += 95;
    }else if (idade > 60){
        pagamento += 130;
    }
    return `${pessoa} tem ${idade} e paga R$${pagamento} pelo seu plano`
}

console.log(planoDeSaude('João Paaulo', 19))