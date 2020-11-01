import React, { useState, useEffect ,useContext} from "react";
import io from "socket.io-client";
import Messages from '../Component/Chat/Messages/Messages';
import InfoBar from '../Component/Chat/InfoBar/InfoBar';
import UserContext from './User'
import { Rnd } from "react-rnd";
const ENDPOINT = 'http://localhost:3001';
// const ENDPOINT = 'https://dungeons-and-theater.herokuapp.com/';
let socket;

function Socket(props) {
  
  let {room,setOtherChars,Search,setGallery,style,character,name} = useContext(UserContext);
  const [roomName] = useState(room.lobby);
  // const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  console.log('sock sendm',props.sendM)
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
  }, [setOtherChars,setGallery]);
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
    [style,name,character],
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
  console.log('use',props.sendM)
  if (props.sendM === ''){
    return
  }
  else{
    socket.emit('sendMessage', props.sendM, () => setMessage(''));
    
  }
  
},
[props.sendM],
);
 

  return (
    <React.Fragment>
    <Rnd  
    className='chat'
    default={{
      x: 0,
      y: 0,
      width: '800px',
      height: '200px'
      }}
    >
    <Messages messages={messages} name={name}  />
    </Rnd>
    </React.Fragment>
  );
}

export default Socket;