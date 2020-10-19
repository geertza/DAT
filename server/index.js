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
  .use(express.static(path.resolve(__dirname, '../front/build')))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
const io = socketio(server);
const { addUser, removeUser, getUser, getUsersInRoom } = require('./Controller/roomUsers');
const router = require('./Controller/router');
app.use(cors());
app.use(router);



// // Multi-process to utilize all CPU cores.
// if (!isDev && cluster.isMaster) {
//   console.error(`Node cluster master ${process.pid} is running`);
//   console.log('build running');
//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
//   });

// } else {
  
//   console.log('dev running');
//   // Priority serve any static files.
//   app.use(express.static(path.resolve(__dirname, '../front/build')));

//   // Answer API requests.
//   app.get('/api', function (req, res) {
//     res.set('Content-Type', 'application/json');
//     res.send('{"message":"Hello from the custom server!"}');
//   });

//   // All remaining requests return the React app, so it can handle routing.
//   app.get('*', function(request, response) {
//     response.sendFile(path.resolve(__dirname, '../front/build', 'index.html'));
//   });





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
