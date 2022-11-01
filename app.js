function saludar () {
console.log ("hola" +" " + nombreUsuario + " " + apellidoUsuario );     
}
function mostrarMensaje () {
    alert ("no puede ingresar a este sitio, intentelo nuevamente!!!");
}

let nombreUsuario = prompt ("ingrese su nombre");  
let apellidoUsuario = prompt ("ingrese su apellido");
let edadUsuario = prompt ("ingrese su edad");


if ( edadUsuario >= 18 ) {
alert ("todo lo que buscas esta aca"+ " " + nombreUsuario + " " + apellidoUsuario + "!!!");
saludar ()
for (let i=0; i<3; i++) {
    saludar ();
}
}
else {
    mostrarMensaje ();
}






