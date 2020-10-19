import React, { Component} from 'react'
import UserContext from '../User/User'
import Chat from '../Chat/Chat/Chat';
import './lobby.css'
import Draggable from 'react-draggable';



 class Game extends Component {
   static contextType = UserContext
  
   constructor(props){
      super();
      this.state = {
      messages:[],
      message:'',
      }
    } 

    

    
    render() {
      let {user} = this.context;
      
      console.log('user',user)
      

  
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

