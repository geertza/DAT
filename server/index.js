const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const cors = require('cors');
const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;
const http = require('http');
const socketio = require('socket.io');
const app = express();
const server = express()
  .use(express.static(path.resolve(__dirname, '../react-ui/build')))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
const io = socketio(server);
const { addUser, removeUser, getUser, getUsersInRoom } = require('./Controller/roomUsers');
const router = require('./Controller/router');
app.use(cors());
app.use(router);









// ------------------------socketio ------------
io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});
  // app.listen(PORT, () => console.log(`Server has started. on`,PORT));
// }
