import React, { Component} from 'react'
import UserContext from '../../Global/User'
import Socket from '../../Global/socket';
import Characters from '../Objects/Characters/Characters'
import ApiSearch from '../Objects/apiSearch'
import OtherUsers from '../Objects/Characters/otherUsers'

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
      let {background} = this.context;
      console.log(background)
      return (
      <React.Fragment >
      <Socket   />
      <ApiSearch />
          <div className="gameBoard" style={{backgroundImage:`url('${background}')`}} >
          <Characters />
          <OtherUsers />
          </div>
        </React.Fragment>
        )
    }
}

// Game.contextType = UserContext;

export default Game;

