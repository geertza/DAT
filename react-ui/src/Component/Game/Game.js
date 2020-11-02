import React, { Component, useContext} from 'react'
import UserContext from '../../Global/User'
import Characters from '../Objects/Characters/Characters'
import OtherUsers from '../Objects/Characters/otherUsers'
import Input from '../Input/Input';
// import '../../App.css'
// import Test from '../test'

 class Game extends Component {
   static contextType = UserContext
   constructor(props) {
     super();
     this.state={
       backgroundImage:'https://cdn.searchenginejournal.com/wp-content/uploads/2018/04/clients-from-hell.png'
     }
   }
    componentDidUpdate(prevProps) {
      let {background} = this.context;
        if (background !== this.state.backgroundImage) {
          this.setState({backgroundImage:background})
        }
      }
   
    render() {
      let {background} = this.context;
     
      return (
      <React.Fragment >
          <div className="gameBoard" style={{backgroundImage:`url('${this.state.backgroundImage}')`}} >
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

