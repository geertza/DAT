import React, { Component} from 'react'
import UserContext from '../User/User'
// import Chat from '../Chat/Chat/Chat';
import Draggable from 'react-draggable';
// import Characters from '../Objects/Characters/Characters'
import ApiSearch from '../Objects/apiSearch'
// import '../../App.css'
// import Test from '../test'

 class Game extends Component {
   static contextType = UserContext
    
   constructor(props){
      super();
      this.state = {
      messages:[],
      message:'',
      }
    } 
    // componentDidUpdate(context){
    //   console.log(this.context)
    // }
    
    

    
    render() {
      console.log('context',this.context.room.background)
      
      let {user,room} = this.context;
      let character= user.character
      return (
        <div className="game" style={{backgroundImage:`url(${room.background})`}}>
          {/* <Messages messages={this.state.messages} message={this.state.message} /> */}
           <ApiSearch />
          <Draggable>
            <div>
          {/* <Chat user={user} /> */}
          </div>
          </Draggable>
          <Draggable>
          {/* <Characters /> */}
          <div ><img className='character'  src={character}  alt="" ></img> </div>
          </Draggable>
         
        </div>
        )
    }
}

// Game.contextType = UserContext;

export default Game;

