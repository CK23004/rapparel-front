import React, { useState } from 'react'
import './ProductStores.css'
import StoreDisplay from '../../components/StoreDisplay/StoreDisplay'
import { useParams } from "react-router-dom";
import { BiFontSize } from 'react-icons/bi';

const ProductStores = (props) => {

  const[category,setCategory]=useState("All");

  const { category_name } = useParams();
  return (
    <div> 
      <h2 className='store-collection-title'>Store</h2>      
      <StoreDisplay category={category}/>
    </div>
  )
}

export default ProductStores
