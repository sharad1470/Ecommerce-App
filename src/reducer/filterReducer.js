const reducer=(state,action)=>{

    switch(action.type){

        case 'SET_FILTERPRODUCTS':

            const products=action.payload;
            let priceArr=products.map((curEle)=>curEle.price)
            let maxPrice=Math.max(...priceArr);


            
            return {
                ...state,
                allProducts:products,
                filterProducts:products,
                max_price:maxPrice+1,
                filters:{
                    ...state.filters,price:maxPrice
                }
            
                
            }

        case 'UPDATE_FILTERS_VALUE':
            const {name,value}=action.payload;
           // console.log("red",value);
            return {
                ...state,
                filters:{...state.filters,[name]:value}
            }

        case 'UPDATE_FILTERSDATA':{

        
        let { allProducts } = state;
        let tempFiltersProduct = [...allProducts];
        let {search, category,price}=state.filters;

        if(search)
        tempFiltersProduct=tempFiltersProduct.filter((curEle)=>{

            return curEle.title.toLowerCase().includes(search.toLowerCase());
        })

        if(category!=='All')


        tempFiltersProduct=tempFiltersProduct.filter((curEle)=>{

            return curEle.category===category;
        })

        tempFiltersProduct=tempFiltersProduct.filter((curEle)=>
                curEle.price<=price
                )

            return {
                ...state,
                filterProducts:tempFiltersProduct
            }
        }

        case 'SET_SORTING':
            return{
                ...state,
                sort:action.payload
            }

        case 'SORTING_PRODUCTS':
            const {filterProducts,sort}=state;
            let tmpData=[...filterProducts]

            const sorting=(a,b)=>{
                switch(sort){
                    case 'lowest':
                        return a.price-b.price;
                    case 'highest':
                        return b.price-a.price;
                    case 'a-z':
                        return a.title.localeCompare(b.title);
                    case 'z-a':
                        return b.title.localeCompare(a.title);
                    default:
                        return 
                }
            }
            tmpData=tmpData.sort(sorting);

            return {
                ...state,
                filterProducts:tmpData
            }

            case 'CLEAR_FILTERS':
    
                    return {
                        ...state,
                        filters:
                        // {...state.filters,
                        {
                            search:'',
                            category:'All',
                            price:state.max_price,
                        }
                            
                        }
                    
                
    default:
        return state;
    }
}

export default reducer;