import React, { Component } from 'react'
import UserContext from '../../../Global/User'
import OtherUsers from './otherUsers'
import { Rnd } from "react-rnd";
export default class Characters extends Component {
    static contextType = UserContext
    constructor(props) {
        super();
        this.state={
            charTransform:''
        }
    }
   
    
    render() {
        const {otherUsers,setCharStyle,user,character} = this.context;
    //   let objects = otherUsers.bill.character
    //   let otherstyle = otherUsers.bill.style
        // console.log('user char',user)
        let objects = character
            
        const changePosition = e => {
            setCharStyle(e.target.parentElement.style,e.target.src)
      }
      

        return (
            <div>
                 <Rnd
                    id='character'
                    onClick={changePosition}
                    default={{
                    x: 0,
                    y: 0,
                    width: 320,
                    height: 200
                    }}
                >
                    <img src={objects} alt='' style={{width:'100%',height:'100%',backgroundColor:'transparent'}} />
                </Rnd>
               <OtherUsers />
            </div>
        )
    }
}
