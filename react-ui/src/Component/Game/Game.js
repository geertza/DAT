import React, { Component} from 'react'
import UserContext from '../../Global/User'
import Socket from '../../Global/socket';
import Draggable from 'react-draggable';
import Characters from '../Objects/Characters/Characters'
import ApiSearch from '../Objects/apiSearch'
// import '../../App.css'
// import Test from '../test'

 class Game extends Component {
   static contextType = UserContext
    
   constructor(props){
      super();
      this.state = {
     
      }
    } 
    render() {
      let {room} = this.context;
      return (
        <div className="game" style={{backgroundImage:`url(${room.background})`}}>
            
           <ApiSearch />
          <Draggable>
            <div>
          <Socket  r />
          </div>
          </Draggable>
          <Characters />
          
         
          
        </div>
        )
    }
}

// Game.contextType = UserContext;

export default Game;

