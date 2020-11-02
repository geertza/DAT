import React, { Component} from 'react'
import {ToggleButtonGroup,ToggleButton,Modal} from 'react-bootstrap'
import UserContext from '../../Global/User'

export default class apiSearch extends Component {
  static contextType = UserContext
  constructor(props){
    super();
    this.state={
      open:false,
      search:'',
      option:''
    };
  }  

  componentDidUpdate(prevProps) {
    if (prevProps.alignment !== this.props.alignment) {
      if((this.props.alignment === ('bg')) || (this.props.alignment === ('back'))  )
        { this.setState({option:'bg'})}
        else
        { this.setState({option:'char'})}
      this.setState({open:true})
      }
      
    }
  
  render() { 
  
    
    const {  setCharacter,api,imageGallery,sendBackground } = this.context
    // close modal
    const handleClose = () => {
     this.setState({open:false})
  };

  const onChange = e =>{
    this.setState({
      search: e.target.value
    });
	  }
  const handleChange = event => {
    handleClose()
    if (this.state.option === 'bg'){
      sendBackground(event.target.src)
    }
    else{
        setCharacter(event.target.src);
    }
    
  }




    //-------------query api
    const onSubmitform = e =>{
        e.preventDefault();
        console.log('submit')
        api(this.state.search,this.state.option)
      }
  
        return (
          <div>
      
      <Modal
        show={this.state.open}
        onClose={handleClose}
        // aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description"
        className='modal'
      >
         <div>
        <div className="ApiBody">
			
				<form onSubmit={onSubmitform} className="searchBar">
					
          <input
						type="text"
						label='characterSearch'
						name="characterSearch"
						autoComplete='characterSearch'
            onChange={onChange}
            style={{
              height:'30px',
              width:'400px',
              fontSize:'22px',
              fontFamily: 'sans-serif',
              fontStyle:'italic',
              border:'3px solid black'
            }}
					/>
					<button type="submit" className='submitApi'>submit</button>
				</form>
		
			<div className="grid">
				{imageGallery.map(function (image, i) {
          return <img 
          id='character' 
          key={i} 
          src={image}  
          alt="" 
          onClick={handleChange}></img> 
				})}
			</div>
		</div>
	      
        </div>
          </Modal>
          
    </div>
   
        )
    }
}
