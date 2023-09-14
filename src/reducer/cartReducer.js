import React from 'react';

const cartReducer = (state,action) => {
    
    switch(action.type){
        case 'ADD_TO_CART':

        const {amount,product}=action.payload;
         const {rating:{rate,count}}=product;

        let foundItem=state.cart.find((curEle)=>
                curEle.id===product.id
        )

        if(foundItem){
            let updatedData=state.cart.map((curEle)=>{
                let newAmount=curEle.amount;
                if(curEle.id===product.id){
                    newAmount=newAmount+amount;

                    newAmount=newAmount>count?count:newAmount       
                }

                return {
                    ...curEle,
                    amount:newAmount
                }
            })

            return {
                ...state,cart:updatedData
            }
        }
        const cartData={
            id:product.id,
            amount,
            image:product.image,
            price:product.price,
            stock:product?.rating?.count
        }
            
        return{
            ...state,cart:[...state.cart,cartData]
        }

        case 'SET_INCREASE':{
            const id=action.payload;
            const updatedCart=state.cart.map((curEle)=>{

                if(curEle.id===id && curEle.amount<curEle.stock){
                    let incAmount=curEle.amount+1;
                   return {...curEle,amount:incAmount}
                }

                return curEle;
            })

            return {
                ...state,cart:updatedCart
            }
        }
        case 'SET_DECREASE':
            return state

        case 'DELETE_CART_ITEM':
            const id=action.payload;
                const newCart=state.cart.filter((curEle)=>{
                    return curEle.id!==id
                })

            return {
                ...state,cart:newCart
            }

            case 'SET_CART_TOTAL':
                // if(!state.cart)
                //     return state;

                let {total_amount,total_item}=state.cart.reduce((accum,curEle)=>{

                    const {amount,price}=curEle;

                    accum.total_amount+=(amount*price);
                    accum.total_item+=amount;

                    return accum;
                },
                {
                    total_amount:0,
                    total_item:0
                }
                )

                return {
                    ...state,
                    total_amount,
                    total_item
                }

            case 'CLEAR_CART':
                    return {
                        ...state,
                        cart:[]
                    }
        default:
            return state
    }
};

export default cartReducer;