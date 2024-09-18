import React from 'react'
import './ProductCard.css'
import { assets } from '../../../assets/assets'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,faStarHalfAlt ,faHeart, faBagShopping} from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ img, title, prevPrice, newPrice }) => {
  return (
    <>
    <div className="box">
      <div className="image">
        <img src={img} alt={title} className="card-img" />
        
          <FontAwesomeIcon icon={faHeart}  className="fas fa-heart"/>
        
      </div>
      <div className="content">
        <div className="stars">
          <FontAwesomeIcon icon={faStar} className='stars-icon'/>
          <FontAwesomeIcon icon={faStar} className='stars-icon'/>
          <FontAwesomeIcon icon={faStar} className='stars-icon'/>
          <FontAwesomeIcon icon={faStar} className='stars-icon'/>
          <FontAwesomeIcon icon={faStarHalfAlt} className='stars-icon'/>
        </div>
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
        <span className="price">
          {prevPrice && <del>{prevPrice}</del>} {newPrice}
        </span>
        <a href="#" className="btn1">
          <FontAwesomeIcon icon={faBagShopping} /> Add to cart
        </a>
      </div>
    </div>


    
  </>

  )
}

export default ProductCard
