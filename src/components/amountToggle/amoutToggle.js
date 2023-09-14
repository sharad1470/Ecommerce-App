import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import './amountToggle.css';

const AmoutToggle = ({amount, setDecrease, setIncrease}) => {


    return (
        <div className='amounttoggle'>
            <span className='amounttoggle-increase' onClick={()=>setDecrease()}><FaMinus/></span>
            <span className='amounttoggle-amount'>{amount}</span>
            <span className='amounttoggle-decrease' onClick={()=>setIncrease()}><FaPlus/></span>
        </div>
    );
};

export default AmoutToggle;