import React, { Component } from 'react'
import UserContext from '../../../Global/User'
export default class otherUsers extends Component {
    static contextType = UserContext
    constructor(props){
        super();
        this.state=({
            otherUsers:{}
        })
    }

        //    update state with context
    componentDidUpdate() {
                let {otherUsers} = this.context;
                console.log('call',this.state.otherUsersImage,'break',otherUsers)
                if (otherUsers !== this.state.otherUsersImage) {
                    this.setState({otherUsersImage:otherUsers})
                }
                }



    render() {
        let {otherUsers} = this.context;
      

        if ((JSON.stringify(this.state.otherUsers) === '{}')||(this.state.otherUsers === undefined)){
            console.log('empty')
            return(<div />)
        }
        else
        {
            
            return (
                
                <div>
                {Object.keys(this.state.otherUsers).map((keyName, i) => (
        
                    <img 
                        src={this.state.otherUsers[keyName].otherCharacter}
                        id= {this.state.otherUsers[keyName].otherName}
                        className='otherUser'
                        alt=''
                        key={'char'+i}
                         style={{
                             height:this.state.otherUsers[keyName].otherStyle.height,
                             width:this.state.otherUsers[keyName].otherStyle.width,
                             transform:this.state.otherUsers[keyName].otherStyle.transform,
                             }} >
                              {console.log('height',this.state.otherUsers[keyName].otherStyle)}   
                             </img>
                    ))
                }
                    
                      
				
                </div>
            )
        }
    }
}