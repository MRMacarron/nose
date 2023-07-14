
const botonJugar = document.getElementById("Jugar")
const nickImput = document.getElementById("usuario")
const passwImput =document.getElementById("contrasena")
const formEntrada = document.getElementById("formEntrada")
const error = document.getElementById("error")
//Funciones
function comprobarForm(event){
    //comprobar cambios
    if(nickImput.value.length==0 || nickImput.value.match(/(?<!\S)[0-9]/)){
        nickImput.focus()
        event.preventDefault()
        error.innerText="El campo de nick no puede comenzar con un numero"
        return false
    }
    else if(passwImput.value.length==0){
        passwImput.focus()
        event.preventDefault()
        error.innerText="Se debe colocar una contraseña"
        return false
    }
    datosUsuario(nickImput)
    return true
}

formEntrada.addEventListener('submit',comprobarForm)