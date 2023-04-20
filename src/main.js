const axios = require('axios')

const getPaises = (filtro) => {
    axios.get('https://restcountries.com/v3.1/all')
        .then ( response => response.data) 
            .then ( data => {
                const paisesFiltrados = data.filter(filtro)
                const paisesMap = paisesFiltrados.map(
                    pais => {
                        return {
                            nombre: pais.name.official,
                            capital: pais.capital,
                            poblacion: pais.population
                        }
                    }
                )
                console.log(paisesMap)
                const total = paisesMap.reduce( 
                    (e1, e2) => e1 + e2.poblacion, 0)
                console.log(`La suma de las poblaciones es : ${total}` )
            })  
        .catch( err => console.log(err.code))
}
console.log('Hola mundo!!!!');

getPaises( (e)=> e.subregion==='South America' && e.population >= 40000000 )