
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Messages from '../Component/Chat/Messages/Messages';
import InfoBar from '../Component/Chat/InfoBar/InfoBar';
import Input from '../Component/Chat/Input/Input';
import UserContext from './User'

const ENDPOINT = 'http://localhost:3001';
// const ENDPOINT = 'https://dungeons-and-theater.herokuapp.com/';
let socket;
const Chat = (props) => {
  static contextType = UserContext
  let {} = this.context;
  const [name] = useState(props.user.name);
  const [room] = useState(props.room.name);
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
    React.useEffect(() => {
      socket = io(ENDPOINT);
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
    }, []);
  
   

    
 
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendCharacter','yo', () => setMessage(''));
    }
  }

  return (
    
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    
  );
}

export default Chat;
