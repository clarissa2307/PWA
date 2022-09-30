

function sumarLento( numero ) {
    return new Promise( function(resolve, reject){
        setTimeout( function(){
            resolve( numero + 1) 

            }, 800);
        });
}

let sumarRapido = ( numero ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            reject('Error al sumar rapido')
        }, 300);
    });
}


Promise.race([sumarLento(5), sumarRapido(10)])
    .then( resp => {
        console.log(resp);
    }).catch(console.log)