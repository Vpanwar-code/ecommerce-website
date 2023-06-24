import React from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import CartButton from '../cart/CartButton';


const Navigation = () => {
return(
    <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">The Generics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
        <CartButton/>
      </Navbar>
    </>
)

}

export default Navigation;
