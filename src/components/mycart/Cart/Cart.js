import React from 'react';
import './Cart.css'
import AmountToggle from '../../amountToggle/amoutToggle';
import { useCartContext } from '../../../context/CartContext';
const Cart = ({item}) => {
    console.log(item);

    const {setDecrease, setIncrease, deleteCartItem}=useCartContext();

    return (

    
        <div className='cart'>
            <div className='cart-cover'>
                <img src={item.image} alt={item.image}/>
            </div>
            <div className='cart-price'>{item.price}</div>
            <div className='cart-amount'>
                <AmountToggle 
                amount={item.amount}
                setDecrease={() => setDecrease(item.id)}
                setIncrease={() => setIncrease(item.id)}
                />
            </div>
            <div>{parseInt(item.price*item.amount)}</div>
            <div className='cart-trash' onClick={()=>deleteCartItem(item.id)}>
                <i class="fa-solid fa-trash"></i>
            </div>
            

        </div>
        
    );
};

export default Cart;