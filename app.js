let nombreUsuario = prompt ("ingrese su nombre");
let apellidoUsuario = prompt ("ingrese su apellido");
let edadUsuario = prompt ("ingrese su edad");

function saludar () {
console.log ("hola" +" " + nombreUsuario + " " + apellidoUsuario );     
}
function mostrarMensaje () {
    alert ("no puede ingresar a este sitio, intentelo nuevamente!!!");
}


if ( edadUsuario >= 18 ) {
alert ("todo lo que buscas esta aca"+ " " + nombreUsuario + " " + apellidoUsuario + "!!!");
saludar ()
for (let i=0; i<1; i++) {
    saludar ();
}
}
else {
    mostrarMensaje ();
}

const proteccionDeAltura = [
    {
    producto:"arnes de seguridad",    
    marca: "iram",
    modelo: "anticaida",
    color: "amarillo",
    }
]

const proteccionOcular = [
    {
    producto:"gafas de seguridad",
    marca:"deltaplus",
    modelo:"ecoline" ,
    color: "transparente",}]

const proteccionRespiratoria = [
    {
    producto:"mascara con filtro",
    marca:"stim",
    modelo:"bifiltro",
    color:"azul",}]


console.log (proteccionDeAltura);
console.log (proteccionOcular);
console.log (proteccionRespiratoria);




