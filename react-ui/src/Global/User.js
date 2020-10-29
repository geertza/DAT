import React, { Component } from 'react'
const UserContext = React.createContext()

class UserProvider extends Component {
  // Context state
  state = {
    room:{
      loggedIn: false,
      lobby:'lobby',
    background:'https://wallup.net/wp-content/uploads/2018/09/25/633156-apocalyptic-Chaos-748x421.jpg',
    },
    user:{
       name: 'ted',
      character:'https://www.jing.fm/clipimg/full/48-480972_villains-bad-guys-comic-books-anime-carnage-png.png',
      style:''
    },
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
    imageGallery:[]
      
   
  }
  
    
    
 

  // Method to update state
  setUser = (data) => {
    console.log('set context',data)
    this.setState({ user: { ...this.state.user,name: data} });
    this.setState({ room: { ...this.state.romm,loggedIn: true,lobby: 'lobby'} });
    console.log(this.state.user)
  }
  setCharacter = (data) =>{
    this.setState({ user: { ...this.state.user,character: data} });
  }
  setBackground = (data)=>{
    this.setState({ room: {background : data} });
  }
  setCharStyle=(data)=>{
    this.setState({ user: { ...this.state.user,style: data} })
  }
  setOtherChars=(data)=>{
    // console.log('databack',data)
    this.setState({otherUsers:data})
  }
  api=(image,option) => {
    this.setState({Search:{image:image,option:option}})
  }
  setGallery = (data) => {
    let results = data.data
    console.log('ddd',results)
    this.setState({imageGallery:results})
  }
 

  render() {   
    
    const { children } = this.props
    const { user,room,otherUsers,Chat,Search,imageGallery } = this.state
    const { setUser,setCharacter,setBackground,setCharStyle,setOtherChars,api,setGallery} = this
    return (
      <UserContext.Provider
        value={{
          user,
          room,
          otherUsers,
          Chat,
          Search,
          imageGallery,
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