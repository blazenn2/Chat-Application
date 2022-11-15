const http = require('http');
const app = require('./app');
const io = require('socket.io');
require('dotenv').config();
const sockets = require('./utils/webs-sockets');

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
const socketServer = io(server);

function startServer() {
  // socket server start
  sockets(socketServer);

  // http server start
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
