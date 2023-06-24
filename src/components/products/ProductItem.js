import { Row,Col,Button } from 'react-bootstrap';
import React , {useContext} from 'react';
import CartContext from '../store/CartContext';

const ProductItem =  (props) =>{
    const cartCtx=useContext(CartContext);
    
    const addToCartHandler = () =>{
         cartCtx.addItem({
            id : props.id,
            title : props.title,
            imageUrl : props.imageUrl,
            price : props.price,
            quantity : 1
         });
    }
    return (
        <>
         <h2 style={{textAlign: "center" , margin : "40px"}}>{props.title}</h2>
      <Row className="justify-content-md-center" style={{marginBottom : "20px"}}>
        <Col  md={{ span: 6, offset: 3 }}>
          <img src={props.imageUrl}></img>
          <div>
          <span style={{margin:"40px"}}>{props.price}</span>
            <Button variant="outline-primary" onClick={addToCartHandler}>Add to Cart</Button>  
          </div>
         </Col>
      </Row>
    
      
      
        </>
    )
}
export default ProductItem;