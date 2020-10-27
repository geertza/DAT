import React, { Component } from 'react'
import UserContext from '../../User/User'
export default class otherUsers extends Component {
    static contextType = UserContext
    render() {
        let {otherUsers} = this.context;
        let objects = otherUsers.bill.character
        let otherstyle = otherUsers.bill.style
        console.log('height',otherstyle.height)
        return (
            <div>
                <div style={{height:'50%',width:'100%',position:'fixed',bottom:'0',backgroundColor:'white'}} />
                <div ><img id='character'  src={objects}  alt="" style={{height:otherstyle.height}}></img> </div>
            </div>
        )
    }
}

