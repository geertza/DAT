import React, { Component } from 'react'
import UserContext from '../../../Global/User'
export default class otherUsers extends Component {
    static contextType = UserContext
    constructor(props){
        super();
        this.state=({
            otherUsers:{},
            otherToggle:'up'
        })
    }

        //    update state with context
    componentDidUpdate(prevProps) {
                let {otherUsers,otherToggle} = this.context;
                if (otherToggle !== this.state.otherToggle) {
                    this.setState({otherUsers:otherUsers})
                    if (this.state.otherToggle = 'up'){
                        this.setState({otherToggle:'down'})
                      }
                      else
                      {
                        this.setState({otherToggle:'up'})
                      }
                }
                }



    render() {
        let {otherUsers} = this.context;

        if ((JSON.stringify(this.state.otherUsers) === '{}')||(this.state.otherUsers === undefined)){
            
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