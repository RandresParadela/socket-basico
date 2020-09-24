const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    // detectamos cuando el cliente se desconecta
    client.on('disconnect', () => {
        console.log('Usuario desconectado');

    });

    client.on('enviarMensaje', (data, callback) => {
        //console.log(data);

        // el servidor mandaria un mensaje a todos al recibir enviarMensaje
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({ resp: 'TODO OK' });
        // } else {
        //     callback({ resp: 'TODO MAAAL' });
        // }

    });

    client.emit('enviarMensaje', {
        usuario: 'Dios',
        mensaje: 'arrodillate perro'
    });

});