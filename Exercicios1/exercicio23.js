function mediaDeAluno (aluno, nota1=0, nota2=0, nota3=0){
   this.notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)
    
    const somaMedia = (notas[0]*4 + notas[1]*3 + notas[2]*3)/10
    
    return `Aluno ${aluno}, notas: ${nota1}, ${nota2}, ${nota2} a média é ${somaMedia} ${somaMedia > 5 ? `Aprovado` : `Reprovado`} `
}

console.log(mediaDeAluno('João Paulo', 5, 4.5, 7))

console.log(notas[0])