import React, { useState, useEffect ,useContext} from "react";
import io from "socket.io-client";
import Messages from '../Component/Chat/Messages/Messages';
import InfoBar from '../Component/Chat/InfoBar/InfoBar';
import Input from '../Component/Chat/Input/Input';
import UserContext from './User'

const ENDPOINT = 'http://localhost:3001';
// const ENDPOINT = 'https://dungeons-and-theater.herokuapp.com/';
let socket;

function Socket(props) {
  
  let {room,setOtherChars,Search,setGallery,style,character,name} = useContext(UserContext);
  const [roomName] = useState(room.lobby);
  // const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  
  useEffect(() => {
    
    socket = io(ENDPOINT);
    socket.emit('join', { name, roomName }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, []);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message ]);
    });
    
    // socket.on("roomData", ({ users }) => {
    //   setUsers(users);
    // });
    socket.on('otherUserInfo',({newData }) =>{
      console.log('other',newData)
      setOtherChars(newData)
    });
    socket.on('searchResults', data => {
      setGallery(data)
    });
    socket.on('pageReset', () =>{
      console.log('reset')
      window.location.reload(); 
    })
  }, []);
  useEffect(() => {
    if (style===''){
      console.log('style empty')
    }
    else
    {
      console.log('charemit')
        socket.emit('sendCharacter', ({name,character,style}), (error) => {
          
          if(error) {
            alert(error);
          }
        });
      }
    },
    [style],
  );
  useEffect(() => {
    if (Search.image === ''){
      return
    }
    else{
    socket.emit('Search', { Search}, (error) => {
      if(error) {
        alert(error);
      }
    });
    }
    
  },
  [Search],
);
  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    
      <div className="container">
          <InfoBar room={roomName} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    
  );
}

export default Socket;