
// Ciclo de vida del SW

self.addEventListener('install', event  =>{
    //Descargar assets
    //Creamos un cache

    console.log('sw: Instalamdo sw');

    const instalacion = new Promise((resolve, reject)  =>  {

        setTimeout(()=>  {
            console.log('SW: Activo y listo para controllar la app');
            self.skipWaitinng();
            resolve();
        }, 1000);
    });

    event.waitUntil(instalacion);

    //Borrar cahe viejo
});
    
