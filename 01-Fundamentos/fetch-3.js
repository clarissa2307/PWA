//peticion Get
//https://reqres.in/api/users

let usuario = {
    nombre: 'Clarissa',
    edad:  21
};

fetch('https://reqres.in/api/users', {
    method:  'POST', //PUT
    body: JSON.stringify(usuario),  //data
    headers:{
        'Content-Type': 'application/json'
    }
})
.then( resp=> resp.json())
.then( console.log ) 
.catch( error  =>  {
    console.log('Error en  la peticion');
    console.log(error);
});