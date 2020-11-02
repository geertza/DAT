import React, { Component } from 'react'
import UserContext from '../../../Global/User'
export default class otherUsers extends Component {
    static contextType = UserContext
   
    render() {
        let {otherUsers} = this.context;
        if ((JSON.stringify(otherUsers) === '{}')||(otherUsers === undefined)){
            console.log('empty')
            return(<div />)
        }
        else
        {
            
            return (
                
                <div>
                {Object.keys(otherUsers).map((keyName, i) => (
        
                    <img 
                        src={otherUsers[keyName].otherCharacter}
                        id= {otherUsers[keyName].otherName}
                        alt=''
                        key={'char'+i}
                         style={{
                             height:otherUsers[keyName].otherStyle.height,
                             width:otherUsers[keyName].otherStyle.width,
                             transform:otherUsers[keyName].otherStyle.transform,
                             }} >
                              {console.log('height',otherUsers[keyName].otherStyle)}   
                             </img>
                    ))
                }
                    
                      
				
                </div>
            )
        }
    }
}