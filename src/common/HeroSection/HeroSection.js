import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <div className='home-main'>
        <div className='home-left'>
        <div className='home-title'>
            <div className='home-title1'>Welcome To</div>
            <div className='home-title2'>Shop Ton</div>
        </div>
        <div className='home-desc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque<br/>
         temporibus veniam doloribus libero ad error omnis voluptates animi!<br/>
          Suscipit sapiente.
        </div>
        <Link to='/products'>
        <div className='home-button'>
            SHOP NOW
        </div>
        </Link>
        
    </div>
    <div className='home-right'>
        
        <img src="/images/hero.jpg"
        alt=""
        />
    </div>  
    </div>  
        
    );
};

export default HeroSection;