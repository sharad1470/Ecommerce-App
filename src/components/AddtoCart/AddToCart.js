import React, { useState } from 'react';
import AmountToggle from '../amountToggle/amoutToggle';
import './AddToCart.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const AddToCart = ({product}) => {
    const {rating}=product;

    const {addToCart}=useCartContext();

    const {count}=rating?rating:{};

    const [amount,setAmount]=useState(1);
    // .log(count);console

    const setIncrease=()=>{
        //console.log("inc");
        count>amount?setAmount(amount+1):setAmount(amount);
    }
    const setDecrease=()=>{
        amount>1?setAmount(amount-1):setAmount(amount);
    }
    return (
        <div className='addtocart'>
            <AmountToggle 
            amount={amount}
            setIncrease={setIncrease}
            setDecrease={setDecrease}
            />
            <Link to='/my-cart' onClick={()=>addToCart(amount,product)}>
            <div className='addtocart-button' >Add to Cart</div>
            </Link>
            
        </div>
    );
};

export default AddToCart;