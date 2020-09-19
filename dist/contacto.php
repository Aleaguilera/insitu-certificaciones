<?php


@$nombre = addslashes($_POST['nombre']);
@$email = addslashes($_POST['email']);
@$telefono = addslashes($_POST['telefono']);
@$mensaje = addslashes($_POST['mensaje']);

$cabeceras = "From: Consulta\n"
 . "Reply-To: $email\n";
$asunto = "Mensaje desde la pagina Web";
$email_to = "lautaroestevez@insitu-certificaciones.com.ar";
$contenido = "$nombre ha enviado un mensaje desde la web http://insitu-certificaciones.com.ar/\n"
. "\n"
. "Nombre: $nombre\n"
. "Email: $email\n"
. "Telefono: $telefono\n"
. "Mensaje: $mensaje\n"
. "\n";
//Enviamos y resultados del mensaje
if (@mail($email_to, $asunto ,$contenido ,$cabeceras )) {
	header('Location: contacto-ok.html');
}else{
	header('Location: contacto-error.html');
}
?>