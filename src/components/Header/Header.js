import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div className='header-main'>
                <div className='header-left'>
                    <div className='header-logo'>
                        <img src="https://logos.flamingtext.com/City-Logos/Shopton-Water-Logo.png"
                        alt=""
                        />
                    </div>
                </div>
                <div className='header-right'>

                    <Link to='/'>
                    <div>Home</div>
                    </Link>
                    <div>About Us</div>
                    <Link to='/products'>
                    <div>Products</div>
                    </Link>
                    <div>Contacts</div>
                    <Link to='/my-cart'>
                    <div>Cart</div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Header;