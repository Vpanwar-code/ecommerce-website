import React from 'react';
import { Container } from 'react-bootstrap';
import ProductItem from './ProductItem';

const productsArr = [

    {
    id: 'p1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    
    {
    id: 'p2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
},
    
    {
    id: 'p3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    }
    
    ];



  const AvailableProducts = () =>{
   
    const productsData=productsArr.map((product)=>(
    <ProductItem
     key={product.id} 
     id={product.id}
     title={product.title}
     imageUrl={product.imageUrl}
     price={product.price}
     />
     ));

    return (
       <Container>
        {productsData}
       </Container>
        
    );

  }

  export default AvailableProducts;