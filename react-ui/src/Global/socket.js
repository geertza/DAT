import React, { useState, useEffect ,useContext} from "react";
import io from "socket.io-client";
import Messages from '../Component/Chat/Messages/Messages';
import InfoBar from '../Component/Chat/InfoBar/InfoBar';
import UserContext from './User'
import { Rnd } from "react-rnd";
 //  dev ENDPOINT
const ENDPOINT = 'http://localhost:3001';
 //  production ENDPOINT
// const ENDPOINT = 'https://dungeons-and-theater.herokuapp.com/';
let socket;

function Socket(props) {
  
  let {room,setOtherChars,Search,setGallery,style,character,name,sendBG,setBackground,styleToggle} = useContext(UserContext);
  const [roomName] = useState(room.lobby);
  // const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  console.log('test toggle',styleToggle)
  useEffect(() => {
    
    socket = io(ENDPOINT);
    socket.emit('join', { name, roomName }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [name,roomName]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message ]);
    });
    
    socket.on('otherUserInfo',({newData }) =>{
      setOtherChars(newData)
      console.log('otherhere')
    });
    socket.on('searchResults', data => {
      setGallery(data)
    });
    socket.on('BGreturn', data => {
      setBackground(data);
      console.log('bgreturn',data)
    });
    socket.on('pageReset', () =>{
      console.log('reset')
      window.location.reload(); 
    })
  }, [setOtherChars,setGallery]);
  useEffect(() => {
    if (!(style==='')){
      console.log('charemit')
        socket.emit('sendCharacter', ({name,character,style}), (error) => {
          
          if(error) {
            alert(error);
          }
        });
      }
    },
    [styleToggle,style,character],
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
useEffect(() => {
  if (!(props.sendM === '')){
    socket.emit('sendMessage', props.sendM, () => setMessage(''));
  }
},
[props.sendM],
);
useEffect(() => {
  console.log('useeffectBG',sendBG,JSON.stringify(sendBG))
  if (!(JSON.stringify(sendBG) ==='')){
    socket.emit('BG', sendBG);
  }
},
[sendBG],
);

  return (
    <React.Fragment>
    <Messages messages={messages} name={name}  />
    </React.Fragment>
  );
}

export default Socket;