

// Resolución de la tarea #1

fetch( 'https://swapi.co/api/people/1/' )
    .then( resp => resp.json() )
     .then( persona => {

        console.log(persona.name);
         console.log(persona.gender);

    });





// ==============================================
// Ejercicio #2
// ==============================================

// Resolución de la tarea #2
function postData( persona ) {

    let data = {
        nombre: persona.name,
        genero: persona.gender
    };

    return fetch( 'https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

}



fetch( 'https://swapi.co/api/people/1/' )
    .then( resp => resp.json() )
    .then( postData )
    .then( resp => resp.json() )
    .then( console.log );




