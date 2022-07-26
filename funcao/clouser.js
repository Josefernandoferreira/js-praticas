// Cluser é o escopo criado quando uma função é declada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// contexto léxico em ação !

const x = 'Global'

function fora() {
    const x = 'Local' 
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())




const a = 'Exemplo Global'

function externo() {
    const a = 'Exemplo Local '

    const interno = () => 
    console.log(a)
    
    interno()  
}
externo()