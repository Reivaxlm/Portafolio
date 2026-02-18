<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $to = "Luisxavier041@gmail.com";
    $subject = "Nuevo Mensaje de Portafolio: $nombre";
    $body = "Has recibido un mensaje de: $nombre\nCorreo: $email\n\nMensaje:\n$mensaje";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Mensaje enviado con éxito'); window.location.href='index.html';</script>";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>