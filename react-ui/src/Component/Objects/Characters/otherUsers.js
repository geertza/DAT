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
        // console.log('berfore',otherUsers)
        if (JSON.stringify(otherUsers) === '{}'){
            console.log('empty')
            return(<div />)
        }
        else
        {
           
            // let objects = otherUsers.ted.character
            let otherstyle = otherUsers
            return (
                
                <div>
                
                    <div ><img id= {otherUsers.name} src={otherUsers.info.character}  alt="" style={{height:otherstyle.height}}></img> </div>
                </div>
            )
        }
    }
}