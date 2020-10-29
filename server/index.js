const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const http = require('http');
const socketio = require('socket.io');
const app = express();
const Search = require ('./Controller/BingSearch')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./Controller/roomUsers');
const bodyParser = require("body-parser");



app.use(
  cors({
    origin:"http://localhost:" + 3001, // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = express()
  .use(express.static(path.resolve(__dirname, '../react-ui/build')))
  .listen(3001, () => console.log(`Listening on ${PORT}`));
const io = socketio(server);




// ------------------------socketio ------------
io.on('connect', (socket) => {
  socket.on('join', ({ name, roomName }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, roomName });
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
  socket.on('sendCharacter', (data) => {
    const user = getUser(socket.id);
    console.log(user)
    socket.broadcast.to(user.room).emit('otherUserInfo', { data})
    // io.to(user.room).emit('otherUserInfo', {data});
  });
  



  socket.on('Search',(data)=> {
    console.log(data)
    let image = data.Search.image;
    let option = data.Search.option;
    async function sendSearch(image,option){
        const data = await Search(image,option);
        // console.log('data',data)
        socket.emit('searchResults', {data});
      }
      sendSearch(image,option)
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

 
app.listen(PORT, () => console.log(`Listening on `));