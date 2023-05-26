const validate = (userData) => {
let errores = {}

if(!/\S+@\S+\.\S+/.test(userData.email)){
errores.email = "El email es incorrecto"
}
if(!userData.email)
errores.email = "Este campo no puede estar vacio"
if(userData.email.length >35){
    errores.name = "El email no puede superar los 35 caracteres"
}
if(!userData.password.match(/\d/)){
    errores.password = "La contraseña tiene que tener al menos 1 numero"
}
if(userData.password.length < 6 && userData.password.length > 10){
    errores.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres"
}
return errores;
}
export default validate