import React, { Component} from 'react'
import UserContext from '../User/User'
import io from "socket.io-client";
// import Input from "../Chat/Input/Input"
import Chat from '../Chat/Chat/Chat';
import './lobby.css'
import Draggable from 'react-draggable';
let socket = io('http://localhost:3001');


 class Game extends Component {
   static contextType = UserContext
  
   constructor(props){
      super();
      this.state = {
      messages:[],
      message:'',
      }
    } 
//     componentDidMount() {
//      let user = this.context;
//         socket.emit('join',  user, (error) => {
//         if(error) {
//           alert(error);
//         }
//       })
// }
    

    
    render() {
      let {user} = this.context;
      
      console.log('user',user)
      

      //-----------------socket-----------------------------------------------------------------
socket.on('message', message => {
  this.setState({messages : [  message ]});
});

socket.on("roomData", ({ users }) => {
  // setUsers(users);
});
const sendMessage = (event) => {
event.preventDefault();
  console.log(this.state.message)
if(this.state.message) {
  socket.emit('sendMessage', this.state.message, () => this.setState.Message(''));
  this.setState.Message('')
}

}
      return (
        <div>
          Game {user.room}
          {/* <Messages messages={this.state.messages} message={this.state.message} /> */}
          <Draggable>
            <div>
          <Chat user={user} />
          </div>
          </Draggable>
          <p>{`Current User: ${user.name}`}</p>
        </div>
        )
    }
}

// Game.contextType = UserContext;

export default Game;

