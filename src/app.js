const promesa = (numero) => {
    return new Promise(
        (resolve, reject)=>{
            if(numero>0) {
                setTimeout( (n)=> resolve(n*n) ,2000, numero   )
            } else {
                setTimeout( ()=>{reject('No se puede procesar un negativo')}, 5000)
            }
        }
    )
}
promesa(5)
    .then(
        data => { return data * 2}
        ).then (
            result => { console.log(`El resultado es ${result}`)}
        )
    .catch(
        err=> { console.log(err)}
    )
console.log('Hola Mundo!!!')