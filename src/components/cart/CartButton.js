import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Container, Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import CartIcon from './CartIcon';
import CartItem from './CartItem';
import CartContext from '../store/CartContext';
import classes from './CartButton.module.css';


const CartButton= () =>{
    const cartcntx=useContext(CartContext);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const numberOfItems =5;

    const cartItemAddHandler = item =>{
      cartcntx.addItem({...item, quantity : 1});
    }

    const cartItemRemoveHandler = id =>{
      cartcntx.removeItem(id);
    }

    const cartItems = (
     
    cartcntx.items.map((item)=>(
      <CartItem 
      key={item.id} 
      title={item.title} 
      quantity={item.quantity} 
      price={item.price} 
      onAdd={cartItemAddHandler.bind(null,item)}
      onRemove={cartItemRemoveHandler.bind(null,item.id)}
      />
    )) 
   
  );


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
        <Col>Increase</Col>
        <Col>Decrease</Col>
     </Row>
     
    </Container>
    {cartItems}
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