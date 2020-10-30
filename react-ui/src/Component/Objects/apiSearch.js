import React, { Component } from 'react'
import {ToggleButtonGroup,ToggleButton,Modal} from 'react-bootstrap'
import UserContext from '../../Global/User'
import Draggable from 'react-draggable';
export default class apiSearch extends Component {
  static contextType = UserContext
  constructor(){
    super();
    this.state={
      open:false,
      search:'',
      room:'',
      alignment:'char',
      bg:'',
      playRender:[],
      character:[] 
    };
  }  
 
  
  render() {
       const {  setCharacter, setBackground,api,imageGallery } = this.context
        //event handlers------------------
  const handleOpen = () => {
    this.setState({
      open: true
    });
  };

  const handleClose = () => {
    this.setState({
      open: false
    });
  };

  const onChange = e =>{
    this.setState({
      search: e.target.value
    });
		console.log(this.state.search)
	  }
    const handleChange = event => {
      this.setState({
        open: false
      });
      if (this.state.alignment === 'bg'){
        setBackground(event.target.src)
      }
      else{
          setCharacter(event.target.src);
      }
    }
    //-------------query api
    const onSubmitform = e =>{
        e.preventDefault();
        let option = this.state.alignment;
        let image = this.state.search;
        api(image,option)
      }
  
      const handleAlignment = (value) => {
        this.setState({
          alignment: value
          
        });
      };
        return (
          <div>
      <button type="button" onClick={handleOpen}>
        Images
      </button>
      <Draggable>
      <Modal
        show={this.state.open}
        onClose={handleClose}
        // aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description"
        className='modal'
      >
         <div>
        <div className="ApiBody">
			<div className="searchBar">
				<form onSubmit={onSubmitform}>
					<input
						type="text"
						id="search"
						label='Search'
						name="search"
						autoComplete='search'
						onChange={onChange}
					/>
          <ToggleButtonGroup type="radio"  name='apiSelector' onChange={handleAlignment}>
            <ToggleButton value='char'>character</ToggleButton>
            <ToggleButton value='bg'>Background</ToggleButton>
          </ToggleButtonGroup>
					<button type="submit">submit</button>
				</form>
			</div>
			<div className="grid">
				{imageGallery.map(function (image, i) {
					return <img id='character' key={i} src={image}  alt="" onClick={handleChange}></img> 
				})}
			</div>
		</div>
	      
        </div>
          </Modal>
          </Draggable>
    </div>
   
        )
    }
}
