import React, { Component } from 'react'

const UserContext = React.createContext()

class UserProvider extends Component {
  // Context state
  state = {
    room:{
    background:'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home',
    },
    user:{
       name: 'ted',
       loggedIn: false,
       room:'lobby',
      character:'https://p7.hiclipart.com/preview/615/838/542/anime-nudity-mangaka-hentai-muv-luv-anime.jpg'
    },
      
   
  }

  // Method to update state
  setUser = (data) => {
    this.setState({ user: { ...this.state.user,loggedIn: true,name: data} });
  }
  setCharacter = (data) =>{
    this.setState({ user: { ...this.state.user,character: data} });
  }
  setBackground = (data)=>{
    this.setState({ room: {background : data} });
  }
  // add items to images not setup yet
  // onAddItem = () => {
  //   // not allowed AND not working
  //   this.setState(state => {
  //     const list = state.list.push(state.value);
 
  //     return {
  //       list,
  //       value: '',
  //     };
  //   });
  // };

  render() {
    const { children } = this.props
    const { user,room } = this.state
    const { setUser,setCharacter,setBackground} = this
    return (
      <UserContext.Provider
        value={{
          user,
          room,
          setUser,
          setCharacter,
          setBackground
        }}
      >
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContext

export { UserProvider }