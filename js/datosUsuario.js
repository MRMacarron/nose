
var nick
var passw

function datosUsuario(nick){
    sessionStorage.setItem('nick',nick.value)
}

function getDatosUsuario(){
    nick = sessionStorage.getItem('nick')
    console.log(nick)
}

function comprobacionDatosUsusario(){
    if(nick==null){
        sessionStorage.setItem('error', 'No se ha rellenado corractamente el formulario')
        return false
    }
    return true
}

function datosUsuario(passw){
    sessionStorage.setItem('passw',passw.value)
}

function getDatosUsuario(){
    passw = sessionStorage.getItem('passw')
    console.log(passw)
}

function comprobacionDatosUsusario(){
    if(passw==null){
        sessionStorage.setItem('error', 'No se ha rellenado corractamente el formulario')
        return false
    }
    return true
}