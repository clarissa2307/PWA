//if ('serviceWorker' in navigator){
//    console.log('podemos usarlo');
//}
// confirmar que  podemos utilizar SW
if  (navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js');
}