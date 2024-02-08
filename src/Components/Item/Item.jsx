import React, { useState } from 'react';
import './Item.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { FaCartPlus } from "react-icons/fa6";


function Item (props) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className='item'>
      <div className='image-container'>
        <img src={props.image} alt="item-image" />
        <div className={`favo ${isFavorited ? 'favorited' : ''}`} onClick={toggleFavorite}>
          {isFavorited ? <FaHeart size='18px'color='#FF5757' /> : <FaRegHeart size='18px'color='#565656' />}
        </div>
      </div>
    
        <p className='item-name'>
          {props.name}
        </p>
        <div className="item-details">
        <p className='item-prices'>
          ${props.price}
        </p>
        <FaCartPlus className='cart-icon' color='white'/>
      </div>
    </div>
  );
}


export default Item