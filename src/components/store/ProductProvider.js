import React ,{useState} from 'react';
import CartContext from './CartContext';

const initialState={
    items:[],
}

const ProductProvider = (props) =>{
 
    const[products,setProduct]=useState(initialState.items);

    const addProductToCart = (newProduct) =>{
        const existingProductIndex = products.findIndex(
            (item)=> item.id === newProduct.id
        );

        const existingProduct = products[existingProductIndex];
        let updatedProduct;
        let updatedProducts;

        if(existingProduct){
            updatedProduct={
                ...existingProduct,
                quantity: +(existingProduct.quantity) + +(newProduct.quantity)
            };
            updatedProducts=[...products];
            updatedProducts[existingProductIndex]=updatedProduct;
        }
        else{
            updatedProducts = products.concat(newProduct);
        }
        console.log(updatedProducts);

        setProduct(updatedProducts);
    }


     const removeItemFromCart = (id)=>{
        const existingProductIndex = products.findIndex(
            (item)=> item.id === id
        );

        const existingProduct = products[existingProductIndex];
        
        let updatedProducts;
        if(existingProduct.quantity === 1){
            updatedProducts= products.filter(item => item.id !== id);
        }
        else{
            const updatedProduct = {...existingProduct , quantity : existingProduct.quantity -1};
            updatedProducts = [...products];
            updatedProducts[existingProductIndex] = updatedProduct;
        }
       
        setProduct(updatedProducts);
     }

    const productContext={
        items : products,
        addItem : addProductToCart,
        removeItem : removeItemFromCart
    }
    return(
        <CartContext.Provider value={productContext} >
            {props.children}
        </CartContext.Provider>
    )
}
export default ProductProvider;