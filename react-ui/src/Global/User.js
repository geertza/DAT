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
    character:'https://p1.hiclipart.com/preview/550/683/772/highschool-of-the-dead-rei-miyamoto-and-saeko-busujima-digital-wallpaper-png-clipart.jpg',
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