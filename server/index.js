const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const http = require('http');
const socketio = require('socket.io');
const app = express();

const { addUser, removeUser, getUser, getUsersInRoom } = require('./Controller/roomUsers');
const router = require('./Controller/router');
const bodyParser = require("body-parser");
app.use(
  cors({
    origin:"http://localhost:" + 3000, // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user',router);
app.get('/', function (req, res) {
  res.send('hello world')
})


const server = express()
  .use(express.static(path.resolve(__dirname, '../react-ui/build')))
  .listen(3001, () => console.log(`Listening on ${PORT}`));
const io = socketio(server);

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

app.listen(PORT, () => console.log(`Listening on `));