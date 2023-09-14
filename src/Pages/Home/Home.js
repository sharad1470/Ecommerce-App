import React from 'react';
import './Home.css';
import FeaturedSection from '../../components/featuredSection/FeaturedSection';
import HeroSection from '../../common/HeroSection/HeroSection';
import Services from '../../components/services/Services';
import Trusted from '../../components/Trusted/Trusted';

const Home = () => {
    return (
        <div className='home'>
        
           
           <HeroSection/>
           <FeaturedSection/>
           <Services/>
           <Trusted/>
            
        </div>
    );
};

export default Home;