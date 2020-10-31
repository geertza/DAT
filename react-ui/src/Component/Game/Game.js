import React, { Component} from 'react'
import UserContext from '../../Global/User'
import Socket from '../../Global/socket';
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
      
      return (
      <React.Fragment >
      <ApiSearch />
          <Socket   />
          <Characters />
        </React.Fragment>
        )
    }
}

// Game.contextType = UserContext;

export default Game;

