import React, { Component } from 'react'
const UserContext = React.createContext()

class UserProvider extends Component {
  // Context state
  state = {
    room:{
      loggedIn: false,
      lobby:'lobby',
    
    },
    background:'',
    name: 'ted',
    character:'',
    style:'',
    styleToggle:true,
    otherUsers:{},
    otherToggle:'up',
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
    console.log('shouldemit')
    this.setState({style: data});
    if (this.state.styleToggle === true){
      this.setState({styleToggle:false})
      console.log('no')
    }
    else
    {
      console.log('yes')
      this.setState({styleToggle:true})
    }
  }
  setOtherChars=(data)=>{
    this.state.otherUsers[data.otherName]= data
      if (this.state.otherToggle = 'up'){
        this.setState({otherToggle:'down'})
      }
      else
      {
        this.setState({otherToggle:'up'})
      }
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
    const { name,character,style,room,otherUsers,Chat,Search,imageGallery,background,sendBG,otherToggle,styleToggle } = this.state
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
          otherToggle,
          styleToggle,
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