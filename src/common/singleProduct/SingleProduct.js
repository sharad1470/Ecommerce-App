import React from 'react';
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useProductContext } from '../../context/PoductContext';
import './SingleProduct.css';
import Stars from '../../components/stars/stars';
import AddToCart from '../../components/AddtoCart/AddToCart';

const SingleProduct = () => {
    const {id}=useParams();

    
    
    const API= "https://fakestoreapi.com/products";
    const { getSingleProduct, isSingleProductLoading, singleProduct } =
    useProductContext();

    const {
        category,
        description,
        price,
        title,
        image,
        rating
    }=singleProduct

    // console.log(rating);
     
    
        useEffect(()=>{
            
            getSingleProduct(`https://fakestoreapi.com/products/${id}`);
    
        },[id])

    
        const {rate,count}=rating?rating:{}
        // console.log(singleProduct);

    if(isSingleProductLoading===true)
        return <div>...Loading</div>
        
    return (
        <div className='singleproduct'>
            <div className='single-main'>
                <div className='single-cover'>
                    <img src={image}/>
                </div>
                <div className='single-right'>
                    <div className='single-category ddd single-right-div'>
                        <label className='single-cat'>Category:</label>
                        <div className='single-cat-title'>{category}</div>
                    </div>
                    <div className='single-titledddd single-right-div'>
                        <label className='single-title-label'>Title:</label>
                        <div className='single-title-text'>{title}</div>
                    </div>
                    <div className='single-desc single-right-div'>
                        <label className='single-desc-label'>desc:</label>
                        <div className='single-desc-text'>{description}</div>
                    </div>

                    <div className='single-pricedddd single-right-div'>
                        <label className='single-price-label'>Price:</label>
                        <div className='single-price-text'>{price}</div>
                    </div>
                    <div className='single-ratedd single-right-div'>
                        <label className='single-rate-label'>Rating:</label>
                        <Stars rate={rate}/>
                    </div>

                    <div className='single-right-div'>
                        <label>Availability</label>
                        {count>0?<div>Item In Stock</div>:<div>Out Of stock</div>}
                    </div>

                    <div>
                    {count > 0 && <AddToCart product={singleProduct} />}
                    </div>
                    
                </div>
            </div>
               
        </div>
    );
};

export default SingleProduct;