import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import "./style.css";

const StarRating = ({nuMStars=7}) => {
    const [rating,setrating]=useState(0);
    const [hover,setHover]=useState(0);


    function handleClick(getCurrentIndex){
        setrating(getCurrentIndex);

    }
    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);
    }
    function handleMouseLeave(){
        setHover(rating);
    }

  return (
    <div className='star-rating'>
      {
        [...Array(nuMStars)].map((_,index)=>{
            index +=1;
            return(
                < FaStar
            key={index}
            className={index <=(hover || rating) ? "active":"inactive"}
            onClick={()=>handleClick(index)}
            onMouseMove={()=>handleMouseEnter(index)}
            onMouseLeav={()=>handleMouseLeave()}
            size={40}/>);
        })
      }
    </div>
  )
}

export default StarRating
