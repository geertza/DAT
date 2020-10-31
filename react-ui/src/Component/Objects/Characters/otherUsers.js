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
        console.log('berfore',otherUsers)
        // if ((JSON.stringify(otherUsers) === '[]')||(otherUsers === undefined)){
        //     console.log('empty')
        //     return(<div />)
        // }
        // else
        // {
           
            return (
                
                <div>
                    	{/* {otherUsers.map(function ( i) {
                    let x = i[Object.keys(i)[0]]
                    return  <img src={x.otherCharacter} id= {x.otherName} style={{height:x.otherStyle.height,width:x.otherStyle.width}} ></img> 
				})} */}
                </div>
            )
        // }
    }
}