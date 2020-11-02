import React, { Component } from 'react'
const UserContext = React.createContext()

class UserProvider extends Component {
  // Context state
  state = {
    room:{
      loggedIn: false,
      lobby:'lobby',
    
    },
    background:'https://cdna.artstation.com/p/assets/images/images/009/059/572/large/mark-teare-keyartfebpresentation04homeedit01.jpg?1516888980',
    name: 'ted',
    character:'',
    style:'',
    otherUsers:{}
     ,
    Search:{
      image:'',
      option:''
    },
    imageGallery:[],
    sendBG:'',
      
   
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
    console.log('bg',this.state.background)
  }
  setCharStyle=(data,src)=>{
    this.setState({style: {}});
    this.setState({style: data});
  }
  setOtherChars=(data)=>{
    this.state.otherUsers[data.otherName]= data
  }
  api=(image,option) => {
    console.log('api user')
    this.setState({Search:{image:image,option:option}})
  }
  setGallery = (data) => {
    let results = data.data
    this.setState({imageGallery:results})
  }
  sendBackground= (data)=>{
    this.setState({sendBG:data})
  }
 

  render() {   
    
    const { children } = this.props
    const { name,character,style,room,otherUsers,Chat,Search,imageGallery,background,sendBG } = this.state
    const { setUser,setCharacter,setBackground,setCharStyle,setOtherChars,api,setGallery,sendBackground} = this
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
          sendBG,
          setUser,
          setCharacter,
          setBackground,
          setCharStyle,
          setOtherChars,
          setGallery,
          sendBackground,
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