
const ProductReducer=(state,action)=>{

    switch(action.type){
        case 'SET_LOADING':
            return {
                ...state,
                isLoading:true,
            };

        case 'SET_PRODUCTS':
            
            
            
            
            return {
                ...state,
                products:action.payload,
                featureProducts:action.payload,
                isLoading:false
            };

            case 'SET_SINGLEPRODUCT_LOADING':
                return{
                    ...state,
                    isSingleProductLoading:true
                };

            case 'SET_SINGLEPRODUCT':
                return{
                    ...state,
                    isSingleProductLoading:false,
                    singleProduct:action.payload
                };
        
    }
}

export default ProductReducer;