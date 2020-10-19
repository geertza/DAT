import React from 'react'

import Login from './Component/Login'
import Game from './Component/Game/Game';
import UserContext from './Component/User/User'


export default class App extends React.Component {
  static contextType = UserContext

  render() {
    const isLoggedIn = this.context.user.loggedIn;
    return (
      <React.Fragment>
      <b>{!isLoggedIn ? <Login /> : <Game />}</b>
      </React.Fragment>
    );
  }
}


