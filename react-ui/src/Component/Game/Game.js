import React, { Component} from 'react'
import UserContext from '../User/User'
import Chat from '../Chat/Chat/Chat';
import Draggable from 'react-draggable';
import Characters from '../Objects/Characters/Characters'
import ApiSearch from '../Objects/apiSearch'


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
      const changesomething = () => {
        console.log('here')
      };
      let {user,room} = this.context;
      let character= user.character
      return (
        <div classname='game'style={{backgroundImage:`url(${room.background})`}}>
          {/* <Messages messages={this.state.messages} message={this.state.message} /> */}
          <Draggable>
            <div>
          {/* <Chat user={user} /> */}
          </div>
          </Draggable>
          <ApiSearch />
          {/* <Characters /> */}
          <div ><img id='character'  src={character}  alt="" ></img> </div>
          <a onClick={changesomething()} >here test button</a>
        </div>
        )
    }
}

// Game.contextType = UserContext;

export default Game;

