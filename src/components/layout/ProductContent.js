import Container from 'react-bootstrap/Container';
import { Button} from 'react-bootstrap';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductContent=()=> {
  return (
    <Container fluid="md">
      <h2 style={{textAlign: "center" , margin : "40px"}}>Content Heading</h2>
      <Row className="justify-content-md-center" style={{marginBottom : "20px"}}>
        <Col  md={{offset: 2 }}>
          <img src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"></img>
          <div>
          <span style={{margin:"40px"}}>Price</span>
            <Button variant="outline-primary">Add to Cart</Button>  
          </div>
         </Col>
       
        <Col  md={{offset: 2 }}>
        <img src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"></img>
        <div>
        <span style={{margin:"40px"}}>Price</span>
            <Button variant="outline-primary">Add to Cart</Button> 
        </div>
        </Col>
      </Row>
    
      <h2 style={{textAlign: "center" ,marginBottom : "20px"}}>Content Heading</h2>
      <Row className="justify-content-md-center" style={{marginBottom : "20px"}}>
        <Col  md={{offset: 2 }}>
          <img src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"></img>
          <div>
          <span style={{margin:"40px"}}>Price</span>
            <Button variant="outline-primary">Add to Cart</Button>  
          </div>
         </Col>
       
        <Col  md={{offset: 2 }}>
        <img src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"></img>
        <div>
        <span style={{margin:"40px"}}>Price</span>
            <Button variant="outline-primary">Add to Cart</Button> 
        </div>
        </Col>
      </Row>
       
      <h2 style={{textAlign: "center" ,marginBottom : "20px"}}>Content Heading</h2>
      <Row className="justify-content-md-center" style={{marginBottom : "20px"}}>
        <Col  md={{offset: 2 }}>
          <img src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"></img>
          <div>
          <span style={{margin:"40px"}}>Price</span>
            <Button variant="outline-primary">Add to Cart</Button>  
          </div>
         </Col>
       
        <Col  md={{offset: 2 }}>
        <img src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"></img>
        <div>
        <span style={{margin:"40px"}}>Price</span>
            <Button variant="outline-primary">Add to Cart</Button> 
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductContent;