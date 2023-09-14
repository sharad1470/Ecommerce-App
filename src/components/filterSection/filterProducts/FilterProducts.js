import React from 'react';
import './FilterProducts.css';
import Product from '../../Product/Product';
import { useFilterContext } from '../../../context/FilterContext';

const FilterProducts = () => {

    const {filterProducts, sorting,sort}=useFilterContext();


    console.log(sort);
    if(filterProducts.length===0)
        return <div className='filterproducts-empty filterproducts'>...No items in List</div>

    return (
        <div className='filterproducts'>
            <div className='filterproducts-sort'>
                <div>{filterProducts.length} items in List</div>
                <div>
                    {/* <form action="#">
                    <label htmlFor="sort"></label> */}
                    <select
                        name="sort"
                        id="sort"
                        className="sort-selection--style"
                        onClick={sorting}>
           
                        
                        <option value="lowest">Price(lowest)</option>
                        <option value="#" disabled></option>
                        <option value="highest">Price(highest)</option>
                        <option value="#" disabled></option>
                        <option value="a-z">Price(a-z)</option>
                        <option value="#" disabled></option>
                        <option value="z-a">Price(z-a)</option>
                    </select>
                    {/* </form> */}
                </div>
            </div>
            <div className='filterproducts-products'>
                {
                    filterProducts.map((curEle)=>{

                        return <Product key={curEle.id} product={curEle}/>
                    })
                }
            </div>
            
        </div>
    );
};

export default FilterProducts;