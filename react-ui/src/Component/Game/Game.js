import React, { Component} from 'react'
import UserContext from '../../Global/User'
import Characters from '../Objects/Characters/Characters'
import OtherUsers from '../Objects/Characters/otherUsers'
import Input from '../Input/Input';
// import '../../App.css'
// import Test from '../test'

 class Game extends Component {
   static contextType = UserContext
    render() {
      let {background} = this.context;
     
      console.log('final',background)
      return (
      <React.Fragment >
          <div className="gameBoard" style={{backgroundImage:`url('${background}')`}} >
           <Input   />
          <Characters />
          <OtherUsers />
          </div>
        </React.Fragment>
        )
    }
}

// Game.contextType = UserContext;

export default Game;

