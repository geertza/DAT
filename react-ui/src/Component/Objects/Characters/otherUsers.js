import React, { Component } from 'react'
import UserContext from '../../../Global/User'
export default class otherUsers extends Component {
    static contextType = UserContext
    // constructor(props){
    //     super();
    //     this.setState({
            
    //     })
    // }


    render() {
        let {otherUsers} = this.context;
        
        if (JSON.stringify(otherUsers) === '{}'){
            console.log('empty',otherUsers)
            return(<div />)
        }
        else
        {
            console.log(otherUsers.user.style.height)
            // let objects = otherUsers.ted.character
            let otherstyle = otherUsers.user.style
            console.log('os',otherstyle.height)
            return (
                
                <div>
                
                    <div ><img id= {otherUsers.user.name} src={otherUsers.user.character}  alt="" style={{height:otherstyle.height}}></img> </div>
                </div>
            )
        }
    }
}

