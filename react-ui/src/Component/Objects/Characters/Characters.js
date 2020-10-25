import React, { Component } from 'react'
import UserContext from '../../User/User'
export default class Characters extends Component {
    static contextType = UserContext
    render() {
        let {user} = this.context;
        let objects = user.character
        console.log('user',objects)
        return (
            <div>
               <div ><img id='character'  src={objects}  alt="" ></img> </div>
            </div>
        )
    }
}
