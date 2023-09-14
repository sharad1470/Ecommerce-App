import { createContext, useContext,useReducer } from "react";
import { useEffect } from "react";

import axios from 'axios';

import reducer from '../reducer/productReducer';

const AppContext=createContext();
const API= "https://fakestoreapi.com/products";

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleProductLoading:false,
    singleProduct:{}
}


const AppProvider= ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        
        getProducts();
      }, []);

    const getProducts=async()=>{

        dispatch({type:'SET_LOADING'});
        
        try{
            const response=await axios.get(API);
            dispatch({type:'SET_PRODUCTS', payload:response.data});
             console.log("data",response.data);
            
        }catch{
            console.log("error");
            dispatch({type:'API_ERROR'})
        }
        
    };

    const getSingleProduct = async (url) => {
        console.log('entered');
        dispatch({ type: "SET_SINGLEPRODUCT_LOADING" });
        try {
          const res = await axios.get(url);
    
          dispatch({ type: "SET_SINGLEPRODUCT", payload: res.data });
        } catch (error) {
          dispatch({ type: "SET_SINGLE_ERROR" });
        }
      };
   
    return (
        <AppContext.Provider value={{ ...state , getSingleProduct}}>
          {children}
        </AppContext.Provider>
      );
}

const useProductContext = () =>{
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext};