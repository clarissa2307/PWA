fetch('https://reqres.in/api/users/15')
    .then(resp => {
        if(resp.ok){
            return resp.json();
        }else{
            throw new Error('No existe el usuario ')
        }
    }).catch(error => {
        console.log('Error en la peticion');
        console.log(error);
    })