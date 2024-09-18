import React from 'react'
import './RecommendedProduct.css'
import { assets } from '../../../assets/assets'
import ProductCard from '../ProductCard/ProductCard';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBagShopping} from '@fortawesome/free-solid-svg-icons';



const RecommendedProduct = ({ result }) => {
  return (
    <div>
       <div className="card-container">{result}</div>
    </div>
  )
}

export default RecommendedProduct
