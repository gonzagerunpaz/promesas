const axios = require('axios')

const getPaises = async (filtro) => {
    try {
        const resultado = await axios.get('https://restcountries.com/v3.1/all')
        return resultado.data.filter(filtro)
    } catch (err){
        console.log(err.code)
    }
}


(async () => {
    const filtro = (e)=> e.subregion==='South America' && e.population >= 40000000
    //const filtro = (e)=>true
    data = await getPaises(filtro)
    paisesMap = data.map(pais => {
        return {
            nombre: pais.name.official,
            capital: pais.capital,
            poblacion: pais.population,
            codigo: pais.cca3
        }
    })
    console.log(paisesMap)
    
})()

console.log('hola mundo...')