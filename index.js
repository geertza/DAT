const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const Search = require ('./Controller/BingSearch')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./Controller/roomUsers');
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

// app.use(
//   cors({
//     origin:"http://localhost:" + 3001, // <-- location of the react app were connecting to
//     credentials: true,
//   })
// );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = express()
  .use(express.static(path.resolve(__dirname, './react-ui/build')))
  .listen(port, () => console.log(`Listening on`,port));
const io = socketio(server);




// ------------------------socketio ------------
io.on('connect', (socket) => {
  socket.on('join', ({ name, roomName }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, roomName });
    if(error) return callback(error), socket.emit('pageReset') ;

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `hello, ${user.name}`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    callback();
  });

  socket.on('sendMessage', (message,err) => {
   console.log(message)
    const user = getUser(socket.id);
    
    if (user !== undefined){
    io.to(user.room).emit('message', { user: user.name, text: message });
    }
    else{
      socket.emit('pageReset')
    }
    
  });
  socket.on('sendCharacter', (data) => {
    const user = getUser(socket.id);
    let nameplate= data.name
    let newData={otherName:data.name,otherCharacter:data.character,otherStyle:data.style}
    if (user !== undefined){
      namedData={[nameplate]:newData},
    socket.to(user.room).emit('otherUserInfo', {newData})
  }
  else{
    socket.emit('pageReset')
  }
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
  socket.on('BG',(data)=> {
    const user = getUser(socket.id);
    if (user !== undefined){
    socket.broadcast.to(user.room).emit('BGreturn', data);
    socket.emit('BGreturn', data);
  }
  else{
    socket.emit('pageReset')
  }
  })


  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

 
