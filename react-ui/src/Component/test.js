import React, {setState} from 'react';
import {Modal, Button, Col,Row} from 'react-bootstrap';







class MyVerticallyCenteredModal extends React.Component {
  constructor() {
    super()

    this.state = {
      modalShow:false
    };
  }
  
  
  render(){  
   
    
    return (
       <div   >
         <Button variant="primary" onClick={() => this.setState({
           modalShow : true
         })}>
        Launch vertically centered modal
      </Button>
      <Modal
         show={this.state.modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        enforceFocus={true}
        style={{
          zIndex:'9',
        position:'fixed',
        top:'10%'
        
        }}
      >
        <Modal.Header   
        style={{
            background:"grey",
            padding: '0',
            height:"auto"
        }}
         closeButton>
          
         
           
         
        </Modal.Header>
        <Modal.Body
        style={{
            background:"black"
        }}
        >
          Lorem50 dsggggggggggggggggggggggggggggggggggggggggg
          sgddddddddddddddddddddddddddd
          sgddddddddddddddd
        </Modal.Body>
        <Modal.Footer
        style={{
            background:"grey",
            height:'7vh',
            position:'relative'
        }}
        > 
      
        </Modal.Footer>
      </Modal>
     

        </div>

    );
  }
}

  
  export default MyVerticallyCenteredModal;