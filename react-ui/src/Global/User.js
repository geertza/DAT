import React, { Component } from 'react'
const UserContext = React.createContext()

class UserProvider extends Component {
  // Context state
  state = {
    room:{
      loggedIn: false,
      lobby:'lobby',
    
    },
    background:'https://wallpapertag.com/wallpaper/full/9/2/a/121775-club-background-2000x1333-for-iphone-6.jpg',
    name: 'ted',
    character:'https://i.kym-cdn.com/photos/images/original/001/321/186/351.png',
    style:'',
    otherUsers:{}
     ,
    Chat:{
      message:'',
      messages:[],
    },
    Search:{
      image:'',
      option:''
    },
    imageGallery:[],
    
      
   
  }
  
    
    
 

  // Method to update state
  setUser = (data) => {
    this.setState({ name:data  });
    this.setState({ room: { ...this.state.romm,loggedIn: true,lobby: 'lobby'} });
  }
  setCharacter = (data) =>{
    this.setState({ character:data});
  }
  setBackground = (data)=>{
    this.setState({background : data});
  }
  setCharStyle=(data,src)=>{
    this.setState({style: {}});
    this.setState({style: data});
    console.log('here',this.state.style)
  }
  setOtherChars=(data)=>{
    this.state.otherUsers[data.otherName]= data
  console.log('fianl here',this.state.otherUsers)
  }
  api=(image,option) => {
    this.setState({Search:{image:image,option:option}})
  }
  setGallery = (data) => {
    let results = data.data
    this.setState({imageGallery:results})
  }
 

  render() {   
    
    const { children } = this.props
    const { name,character,style,room,otherUsers,Chat,Search,imageGallery,background } = this.state
    const { setUser,setCharacter,setBackground,setCharStyle,setOtherChars,api,setGallery} = this
    return (
      <UserContext.Provider
        value={{
          room,
          otherUsers,
          Chat,
          Search,
          imageGallery,
          style,
          name,
          character,
          background,
          setUser,
          setCharacter,
          setBackground,
          setCharStyle,
          setOtherChars,
          setGallery,
          api,
        }}
      >
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContext

export { UserProvider }