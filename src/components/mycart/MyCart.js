import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './MyCart.css';
import Cart from './Cart/Cart';

const MyCart = () => {

    const {cart, shipping_fee, total_amount, total_item,clearCart}=useCartContext();
    // console.log(cart);


    const renderCart=cart.map((curEle)=>{
        return <Cart key={curEle.id} item={curEle}/>
    })
    let totBill=parseInt(parseInt(total_amount)+shipping_fee);
    return (
        <div className='mycart'>
            <div className='mycart-main'>
                <div className='mycart-title'>My Cart</div>
                <div className='mycart-container'>
                    <div className='mycart-banner'>
                        <div className='banner-image'>Image</div>
                        <div className='banner-price'>Price</div>
                        <div className='banner-amount'>Amount</div>
                        <div className='banner-totamount'>Tot_Amount</div>
                        
                        
                        <div className='banner-trash'>Trash</div>
                    </div>

                    {cart.length>0?renderCart:<div>Cart is Empty</div>}
                    
                </div>

            </div>

        <div className='cart-total'>
            <div className='cart-total-container'>
                <div className='cart-total-subtotal'>
                    <label className=''>SubTotal:</label>
                    <div>{parseInt(total_amount)}</div>
                </div>
                <div className='cart-total-shippingfee'>
                    <label className=''>ShippingFee:</label>
                    <div>{shipping_fee}</div>
                </div>
                <hr/>
                <div className='cart-total-ordertotal'>
                    <label>OrderTotal:</label>
                    <div>{totBill}</div>
                </div>
            </div>
            
        </div>
        
        <div className='cart-clear-button-container'>
        <label 
        onClick={clearCart}
        className='cart-clear-button'>Clear Cart</label>
        </div>
        </div>
    );
};

export default MyCart;