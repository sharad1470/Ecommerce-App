import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/cartReducer';


const getLocalCart=()=>{

    
    const res=localStorage.getItem('mycart');
    if(res){
        return JSON.parse(res);
    }
    return [];
}

const initialState={
    cart:getLocalCart(),
    total_amount:0,
    total_item:0,
    shipping_fee:500
}

const CartContext = createContext();

const CartProvider=({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);
    const addToCart=(amount,product)=>{
        
        dispatch({type:'ADD_TO_CART',payload:{amount,product}})
    }

    const setIncrease=(id)=>{
        dispatch({type:'SET_INCREASE', payload:id})
    }
    const setDecrease=(id)=>{
        dispatch({type:'SET_DECREASE', payload:id})
    }
    const deleteCartItem=(id)=>{
        dispatch({type:'DELETE_CART_ITEM', payload:id})
    }

    const clearCart=()=>{
        dispatch({type:"CLEAR_CART"})
    }

    useEffect(()=>{
        localStorage.setItem('mycart',JSON.stringify(state.cart));
        dispatch({type:'SET_CART_TOTAL'})
    },[state.cart])
    return(
        <CartContext.Provider value={{
            ...state, 
            addToCart,
            setDecrease,
            setIncrease,
            deleteCartItem,
            clearCart
            }}>
            {children}
        </CartContext.Provider>
    )

}

const useCartContext=()=>{
    return useContext(CartContext);
}

export { useCartContext, CartProvider}