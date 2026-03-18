if('serviceWorker' in navigator){
    navigator.serviceWorker.register('week4_web_test_manifest2/serviceworker.js')
    .then( reg=>{
        console.log('Service Worker se ha instalado correctamente. Scope:',reg.scope)
    })
    .catch(err=>{
        console.log('Error al instalar el SW: ',err)
    })
}else{
    console.log('Este navegador no soporta Service Workers')
}
