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
    name: 'ted',
    character:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f359881d-6bb2-4391-aba6-779f7084edd4/davdil3-23d71c5f-9848-4877-b803-262d882f2816.png/v1/fill/w_699,h_1144,strp/superman___transparent_by_asthonx1_davdil3-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xOTk5IiwicGF0aCI6IlwvZlwvZjM1OTg4MWQtNmJiMi00MzkxLWFiYTYtNzc5ZjcwODRlZGQ0XC9kYXZkaWwzLTIzZDcxYzVmLTk4NDgtNDg3Ny1iODAzLTI2MmQ4ODJmMjgxNi5wbmciLCJ3aWR0aCI6Ijw9MTIyMSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mAkAF1j8LvvxcZ30ewCLHt2CrKn4KHzyptkRDK0WcZc',
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
    this.setState({ room: {background : data} });
  }
  setCharStyle=(data,src)=>{
    console.log('hj',data)
    this.setState({style: data});
    console.log('here',this.state.style)
  }
  setOtherChars=(data)=>{
    // console.log('databack',data)
    this.setState({...this.state.otherUsers,otherUsers:data})
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
    const { name,character,style,room,otherUsers,Chat,Search,imageGallery } = this.state
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