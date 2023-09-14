import React from 'react';
import Filters from './filters/Filters';
import './FilterSection.css';
import FilterProducts from './filterProducts/FilterProducts';

const FilterSection = () => {
    return (
        <div className='filtersection'>
            <div className='filtersection-main'>
                {/* <div className='filtersection-main-filters'></div> */}
                    <Filters/>
                
                
                {/* <div className='filtersection-main-products'></div> */}
                    <FilterProducts/>
                
                    
                

            </div>
        
        </div>
    );
};

export default FilterSection;