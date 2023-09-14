import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
const Product = ({product}) => {
    
    
    
    return (
        
        <div className='product'>
            
            <Link to={`/singleproduct/${product.id}`}>
            <img src={product.image}/>
            <div className='product-title'>{product.title}</div>
            </Link>
        </div>
        
    );
};

export default Product;