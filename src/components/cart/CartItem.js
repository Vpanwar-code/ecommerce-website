import React from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';

const CartItem=(props)=>{

 return (

 <>
  <Container fluid="md">
    <Row>
        <Col>{props.title}</Col>
        <Col>{props.price}</Col>
        <Col>{props.quantity}</Col>
        <Col><Button variant='primary' onClick={props.onAdd}>+1</Button></Col>
        <Col><Button variant='danger' onClick={props.onRemove}>-1</Button></Col>
    </Row>
  </Container>
 </>
    )

}
export default CartItem;