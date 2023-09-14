import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/filterReducer';
import { useProductContext } from "./PoductContext";

const FilterContext=createContext();

const initialState={
    allProducts:[],
    filterProducts:[],
    sort:'lowest',
    filters:{
        search:'',
        category:'All',
        price:0,
    },
    min_price:0,
    max_price:0
}



const FilterProvider=({children})=>{
    
    

    const [state,dispatch]=useReducer(reducer,initialState);
    //  console.log(state.filterProducts);
    const {products}=useProductContext();

    useEffect(()=>{
        dispatch({type:'SET_FILTERPRODUCTS', payload:products})
    },[products]);

    useEffect(()=>{
        dispatch({type:'UPDATE_FILTERSDATA'});
        dispatch({type:'SORTING_PRODUCTS'})
    },[state.filters,state.sort])

    const updateFiltersValue=(e)=>{
        
        let name=e.target.name;
      //  console.log(name);
        let value=e.target.value;
        dispatch({type:'UPDATE_FILTERS_VALUE', payload:{name,value}})
    }

    const sorting=(e)=>{
        let value=e.target.value;
        dispatch({type:'SET_SORTING',payload:value})
    }

    const clearFilters=()=>{
        dispatch({type:'CLEAR_FILTERS'})
    }

    return (
        <FilterContext.Provider value={{...state, 
        updateFiltersValue,
        sorting,
        clearFilters
        }}>
            {children}
        </FilterContext.Provider>
    )

}

const useFilterContext=()=>{
    return useContext(FilterContext);
}

export {useFilterContext, FilterProvider}