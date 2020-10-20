import React from 'react'

import Login from './Component/Login'
import Game from './Component/Game/Game';
import UserContext from './Component/User/User'

import Test from './Component/Objects/apiSearch'
export default class App extends React.Component {
  static contextType = UserContext

  render() {
    const isLoggedIn = this.context.user.loggedIn;
    return (
      <React.Fragment>
        <Test />
      {/* <b>{!isLoggedIn ? <Login /> : <Game />}</b> */}
      </React.Fragment>
    );
  }
}


