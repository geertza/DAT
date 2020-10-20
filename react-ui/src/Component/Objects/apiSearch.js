import React, { Component,useState } from 'react'
import {ToggleButtonGroup,ToggleButton,Modal} from 'react-bootstrap'
import Api from '../../Routes/api'
export default class apiSearch extends Component {
  constructor(){
    super();
    this.state={
      open:true,
      search:'',
      imageGallery:[],
      room:'',
      alignment:'char',
      bg:'',
      playRender:[],
      character:[] 
    };
  }  
   
  
  render() {
      
        //event handlers------------------
  const handleOpen = () => {
    this.setState({
      open: true
    });
    console.log(this.state.open)
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
      if (this.state.alignment === 'bg'){
        this.setState({
          BG: event.target.value
        });
      }
      this.setState({
        ImageUrl: event.target.value
      });
    }
    //-------------query api
    const onSubmitform = e =>{
        e.preventDefault();
        let option = this.state.alignment;
        let image= this.state.search;
          console.log(option,image)
        Api(image,option)
        .then(data=>{
          this.setState({
            imageGallery: data.data.value
          });
        }).catch(err => console.error(err))
      }
  
      const handleAlignment = (event) => {
        this.setState({
          Alignment: this.value
        });
      };
        return (
            <div>
                
          <div>
          <div>
      <button type="button" onClick={handleOpen}>
        Images
      </button>
      <Modal
        show={this.state.open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
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
				{this.state.imageGallery.map(function (image, i) {
					return <div ><img id='character' key={i} src={image.contentUrl}  alt="" onClick={handleChange}></img> </div>
				})}
			</div>
		</div>
	);      
        </div>
          </Modal>
    </div>
   

       </div>
       
            </div>
        )
    }
}
