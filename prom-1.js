
function sumaUno( numero, callback ){

    if ( numero >= 7 ) {
        callback('Numero muy alto');
        return;
    }

    setTimeout( function() {
        //return numero + 1;
        callback( numero + 1 );
    }, 800);
}
    
sumaUno(5, function(error, nuevoValor ){
    if( error ) {
        console.log(error);
        return;
    }
    sumaUno( nuevoValor, function(error,  nuevoValor2 ) {
    if( error ) {
        console.log(error);
        return;
    }
        sumaUno(nuevoValor2, function(error, nuevoValor3){
    if( error ) {
        console.log(error);
        return;
    }            
    console.log(nuevoValor2);
        });
        
    });
});

