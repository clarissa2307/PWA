

self.addEventListener('fetch', event => {

    if (event.request.url.include('style.css')) {
        let respuesta = new Response(`
        body {
            backgroud-color: red !important;
            color: pink;
        }
        `,{
            headers:{
                'Content-Type': 'text/css'
            }
        });
        event.respondWith(respuesta);
    }
});
