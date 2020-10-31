import React, { Component } from 'react'
import UserContext from '../../../Global/User'
import { Rnd } from "react-rnd";
export default class Characters extends Component {
    static contextType = UserContext
  
    render() {
        const {setCharStyle,character} = this.context;
        let objects = character
            // get styles from parent element 'rnd module'
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
               
            </div>
        )
    }
}
