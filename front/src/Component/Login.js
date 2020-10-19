import React, { Component } from 'react'
import UserContext from './User/User'

import {Form, Button, Container} from 'react-bootstrap';
export default class Login extends Component {
  constructor(){
    super();
    this.state={
      name:'andy'
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
      <Container className='loginField m-auto' >
        <Form
          className='card-image'
          style={{
            backgroundColor:'lightblue'
          }}
         
        >
          <h3 className='white-text mb-5 mt-4 font-weight-bold'>
              <strong> SIGN In For Adventure</strong>
          </h3>
              <Form.Label>Screen Name</Form.Label>
          <Form.Group controlId="name">
            
            <Form.Control type="name"  name='screenName' onChange={this.onHandleChange} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Label>Room</Form.Label>
          <Form.Group controlId="room">
           
            <Form.Control type="name"  name='screenName' />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Button
          onClick={() => {
              if (this.state.name !== ''){
               const newUser = { name: this.state.name, loggedIn: true ,room: 'lobby'}
                setUser(newUser)
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
