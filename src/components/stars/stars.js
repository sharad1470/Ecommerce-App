import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import './stars.css';

const Stars = ({rate}) => {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <span>
                {
                    rate>=(index+1)?(<FaStar className='icon'/>):
                    (rate>index?(<FaStarHalfAlt className='icon'/>)
                    :(<AiOutlineStar/>))
                }
            </span>
        )
    });

    return (
        <div>
            
                {ratingStar}
            
        </div>
    );
};

export default Stars;