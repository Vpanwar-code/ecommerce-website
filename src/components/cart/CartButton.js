import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Container, Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import CartIcon from './CartIcon';
import classes from './CartButton.module.css';


const CartButton= () =>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const numberOfItems =5;

    return (
        <>
          <button className={classes.button} onClick={handleShow} >
          <span className={classes.icon}>
               <CartIcon/>
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>{numberOfItems}</span>
       </button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container fluid="md">
      <Row>
        <Col>Item</Col>
        <Col>Price</Col>
        <Col>Quantity</Col>
      </Row>
      <Row>
        <Col>album 2</Col>
        <Col>$16.22</Col>
        <Col>2</Col>
      </Row>
      <Row>
        <Col>album 3</Col>
        <Col>$12.45</Col>
        <Col>3</Col>
      </Row>
    </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
        // <Button variant="outline-primary">Cart</Button>
      
    );
}
export default CartButton;