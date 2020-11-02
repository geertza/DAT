import React, { Component } from 'react'
import UserContext from '../Global/User'

import {Form, Button, Container} from 'react-bootstrap';
export default class Login extends Component {
  constructor(){
    super();
    this.state={
      name:''
    };
     this.onHandleChange = this.onHandleChange.bind(this);
  }
 
  onHandleChange(event) {
    this.setState({
       name: event.target.value 
   
    });
  }
 
  static contextType = UserContext
  render() {
    const {  setUser } = this.context
    
    return (
      <div className='login'>
        <h3 >SIGN In For Adventure</h3>
      <Container className='loginField m-auto' >
        <Form
          className='card-image'
          onSubmit={() => {
            if (this.state.name !== ''){
              setUser(this.state.name)
            }
          }}
        >
          
              <Form.Label className='sName'>Screen Name</Form.Label>
          <Form.Group controlId="name">
            
            <Form.Control type="name"  name='screenName' className='screenName' onChange={this.onHandleChange} placeholder='Pirate Joe'/>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          {/* <Form.Label>Room</Form.Label>
          <Form.Group controlId="room">
           
            <Form.Control type="name"  name='screenName' />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group> */}
          <Button
          type='submit'
          className='loginsubmit'
          onClick={() => {
              if (this.state.name !== ''){
                setUser(this.state.name)
              }
            }}
          >
            Sign in
          </Button> 
        </Form>
        
      
    </Container>
    </div>
    )
  }
}
