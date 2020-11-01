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
  // open modal with prop update
  // componentDidUpdate(nextProps) {
  //   if(this.props.alignment = nextProps.alignment){
  //     console.log('fucker hit',nextProps,this.props)
  //   }
  //   else{
  //     console.log('open',this.props,nextProps)
  //     this.setState({open:true})
  //   }
  // } 
  componentDidUpdate(prevProps) {
    if (prevProps.alignment !== this.props.alignment) {
      if(this.props.alignment === ('bg' || 'back'))
        { this.setState({option:'bg'})}
        else
        { this.setState({option:'char'})}
      this.setState({open:true})
      }
      
    }
  
  render() { 
  
    
    const {  setCharacter, setBackground,api,imageGallery } = this.context
    // close modal
    const handleClose = () => {
    console.log('hitclose',this.state.open)
     this.setState({open:false})
  };

  const onChange = e =>{
    this.setState({
      search: e.target.value
    });
    alignmentCheck()
	  }
  const handleChange = event => {
    console.log('hit change',this.state.alignment)
    handleClose()
    if (this.state.option === 'bg'){
      setBackground(event.target.src)
    }
    else{
        setCharacter(event.target.src);
    }
    
  }

  const alignmentCheck = () =>{
    if(this.props.alignment === ('bg' || 'back'))
        { this.setState({option:'bg'})}
        else
        { this.setState({option:'char'})}
  }


    //-------------query api
    const onSubmitform = e =>{
        e.preventDefault();
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
