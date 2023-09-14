import React from 'react';
import './Services.css';
const Services = () => {
    return (
        <div className='services'>
            <div className='services-main'>
                <div className='services-content1'>
                    <div className='content-icon'>
                        <i class="fa-solid fa-truck fa-xl"></i>
                    </div>
                   <div className='content-title'> SuperFast and Free Delivery</div>
                </div>
                <div className='services-content2'>
                    <div className='services-content2-1'>
                        <i class="fa-solid fa-file-shield fa-xl"></i>
                        <div className='content-title'>Non Contact Shipping</div>
                    </div>
                    <div className='services-content2-1'>

                    <div className='content-title'>Money-back Guaranteed</div>
                    </div>
                </div>
                <div className='services-content1'>
                    <div className='content-icon'>
                    <i class="fa-solid fa-credit-card fa-xl"></i>
                    </div>
                   <div className='content-title'> SuperSecure Payment System</div>
                </div>
            </div>

            
        </div>
    );
};

export default Services;
