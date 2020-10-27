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
      character:'https://konachan.com/image/cae80ed9135d408ff41e7a67d4591b85/Konachan.com%20-%20147407%20ass%20black_hair%20blush%20breasts%20kirisaki_kyouko%20nipples%20nude%20short_hair%20to_love_ru%20to_love_ru_darkness%20transparent%20vector.png'
    },
    otherUsers:{
      bill:{
        character:'https://konachan.com/image/cae80ed9135d408ff41e7a67d4591b85/Konachan.com%20-%20147407%20ass%20black_hair%20blush%20breasts%20kirisaki_kyouko%20nipples%20nude%20short_hair%20to_love_ru%20to_love_ru_darkness%20transparent%20vector.png',
        style:'sdfds'
      }
    }
      
   
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
  setCharStyle=(data)=>{
    // console.log('bill',this.state.bill)
    console.log('setstyle',data)
    this.setState({ otherUsers:{bill:{ ...this.state.otherUsers.bill,style:data}} });
    
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
    const { user,room,otherUsers } = this.state
    const { setUser,setCharacter,setBackground,setCharStyle} = this
    return (
      <UserContext.Provider
        value={{
          user,
          room,
          otherUsers,
          setUser,
          setCharacter,
          setBackground,
          setCharStyle
        }}
      >
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContext

export { UserProvider }