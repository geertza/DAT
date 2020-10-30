import React from 'react'

// import Login from './Component/Login'
import Game from './Component/Game/Game';
import UserContext from './Global/User';

import './App.css'
// import Test from './Component/Objects/apiSearch'
export default class App extends React.Component {
  static contextType = UserContext

  render() {
    const isLoggedIn = this.context.room.loggedIn;
    return (
      <React.Fragment>
      {/* <b>{!isLoggedIn ? <Login /> : <Game />}</b> */}
      <Game />
      </React.Fragment>
    );
  }
}


