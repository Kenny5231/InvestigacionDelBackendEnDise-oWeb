// Kenny: iniciar socket.io y emitir mensajes en tiempo real
const io = require('socket.io')(server, { cors: { origin: '*' } });
io.on('connection', socket => {
  socket.on('message', msg => {
    socket.broadcast.emit('message', msg);
  });
});
