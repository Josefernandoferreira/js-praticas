const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

const externa = ()=>{
    const a = 10
    console.log(a)
    
    const interna = () => {
        const a= 12
        console.log(a)
    }
interna()  
  
}

externa()