import React,{Component} from 'react';
import Socket from '../../Global/socket';
import ApiSearch from '../Objects/apiSearch'
import {Button} from 'react-bootstrap';
export default class input extends Component {
  constructor(props){
    super();
    this.state={
      message:'',
      sendM:'',
      alignment:'',
      open:''
    }
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    // store text while typing
    handleChange(event) {
      this.setState({message: event.target.value});
    }
    // sends text to socket 
  handleSubmit(event) {
    event.preventDefault();
    this.setState({sendM: this.state.message});
    this.setState({message: ''});
  }
 
  render() {
    return (
      <React.Fragment>
      <form className="form" onSubmit={this.handleSubmit} >
      <textarea 
          className='input'
          value={this.state.message} 
          onChange={this.handleChange} />
        <input type="submit" value="Submit" className="sendButton"/>
        <Button 
            onClick={() =>{ 
              if(this.state.alignment === 'char'){
                this.setState({alignment: 'ch'});
              }
              else
              {
                this.setState({alignment: 'char'});
              }
            }}>
            <strong >+</strong> Character
          </Button>
          <Button 
            onClick={() =>{
              if(this.state.alignment === 'bg'){
                this.setState({alignment: 'back'});
              }
              else
              {
              this.setState({alignment: 'bg'})
              }
            }}
          >
          <strong >+</strong>  Background
          </Button>
      </form>
      <Socket sendM={this.state.sendM}  />
      <ApiSearch alignment={this.state.alignment} />
      </React.Fragment>
    )
  }
}
