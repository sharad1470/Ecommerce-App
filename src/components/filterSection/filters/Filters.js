import React from 'react';
import './Filters.css';
import { useFilterContext } from '../../../context/FilterContext';

const Filters = () => {

    const {allProducts,filters:{search, category,price}, min_price,max_price,updateFiltersValue,clearFilters}=useFilterContext();

    
    const getUniqueData=(data,attr)=>{
        let uniqueData=data.map((curEle)=>{
            return curEle[attr];
        })
        return (uniqueData=['All',...new Set(uniqueData)]);


    }
     
     const categoryData=getUniqueData(allProducts,'category');
     //console.log(categoryData);
    return (
        <div className='filters'>
            <div className='filters-search'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input 
            placeholder='SEARCH' 
            name='search' 
            value={search}
            onChange={updateFiltersValue}
            />
            </div>

            <div className='filter-category'>
                <div className='filter-category-title'>Category</div>
                <div className='filter-category-buttons'>
                    {
                        categoryData.map((curEle)=>{
                            return (
                            <button 
                                type='button'
                                name='category' 
                                value={curEle}
                                className=
                                {category===curEle?'button-active filter-category-button'
                                :'filter-category-button'
                                }
                                onClick={updateFiltersValue}
                                >
                                {curEle}
                            </button>
                            )
                        })
                    }
                </div>
            </div>

            <div className='filters-price'>
                <div className='filters-price-banner'>
                    <label className='filters-banner-label'>
                        Price</label>
                    <div className='filters-banner-price'>
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                        {" "}{price}
                    </div>
                </div>
                <div className='filters-price-range'>
                    <input
                    type='range'
                    name='price'
                    min={min_price}
                    max={max_price}
                    value={price}
                    onChange={updateFiltersValue}
                    />
                
                </div>
            </div>
            <label 
            onClick={clearFilters}
            className='filters-clear-button'>Clear Filters
            </label>
        </div>
    );
};

export default Filters;