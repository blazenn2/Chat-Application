function sockets(io) {
  io.on('connection', (client) => {
    console.log('a user connected', client.id);

    client.on('message', (playload) => {
      io.broadcast.emit('chat message', playload);
    });

    client.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
}

module.exports = sockets;
