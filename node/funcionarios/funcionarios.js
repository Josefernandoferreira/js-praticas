const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const { c } = require('../exportar')



axios.get(url).then(response =>{
    const funcionarios = response.data
    // console.log(funcionarios)
    const func = funcionarios
    .filter(a=>a.genero === 'F')
    .filter(a=>a.pais === 'Portugal')
    .reduce((acumulador,entrada)=> acumulador.salario < entrada.salario ? acumulador : entrada )

console.log(func)

})