var socket = io();

// escucha evento de conexion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escucha evento disconnect, se dispara al perder conexion con el servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Yo',
    mensaje: 'Holaaaaa'
}, function(resp) {
    console.log('Respuesta Server', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});