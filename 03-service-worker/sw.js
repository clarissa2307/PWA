
// Ciclo de vida del SW

self.addEventListener('install', event  =>{
    //Descargar assets
    //Creamos un cache

    console.log('sw: Instalamdo sw');

    const instalacion = new Promise((resolve, reject)  =>  {

        setTimeout(()=>  {
            console.log('SW: Activo y listo para controllar la app');
            self.skipWaiting();
            resolve();
        }, 1);
    });

    event.waitUntil(instalacion);

    //Borrar cahe viejo
});


// Cuando el SW toma el control de la aplicación
self.addEventListener('activate', event => {

    // Borrar cache viejo

    console.log('SW2: Activo y listo para controlar la app');


});

// FETCH: Manejo de peticiones HTTP
self.addEventListener('fetch', event => {

    // Aplicar estrategias del cache
    console.log( 'SW:', event.request.url );

    if ( event.request.url.includes('https://reqres.in/') ) {

             const resp = new Response(`{ ok: false, mensaje: 'jajaja'}`);
    
             event.respondWith( resp );
    }     

});
// SYNC: Recuperamos la conexión a internet
self.addEventListener('sync', event => {

    console.log('Tenemos conexión!');
    console.log(event);
    console.log(event.tag);

});

// PUSH: Manejar las push notifications
self.addEventListener('push', event => {

    console.log('Notificacion recibida');


});



    
