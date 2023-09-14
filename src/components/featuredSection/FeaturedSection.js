import React from 'react';
import { useProductContext } from '../../context/PoductContext';
import './FeaturedSection.css'
import Product from '../Product/Product';

const FeaturedSection = () => {

    const { isLoading, featureProducts } = useProductContext();
    // console.log(featureProducts);
    if(isLoading)
        return <div>...Loading</div>

    // console.log("yes");

    return (
        <div className='feature-section'>
            <div className='feature-section-main'>
                <div className='feature-section-title'>
                    <div className='feature-title1'>CHECK NOW</div>
                    <div className='feature-title2'>Our Feature Services</div>
                </div>
                <div className='feature-section-container'>

                    {featureProducts.map((curEle,index)=>{
                        return index<3?<Product key={index} product={curEle}/>:null
                    })}
                </div>



            </div>
        </div>
    );
};

export default FeaturedSection;