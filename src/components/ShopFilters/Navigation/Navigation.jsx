import React from 'react'
import './Navigation.css'

import Button from '../Button/Button'

const Navigation = ({ handleClick }) => {
  return (
  
    <>
    <div>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="T-shirt" title="T-shirt" />
        <Button onClickHandler={handleClick} value="Formal Shirt" title="Formal Shirt" />
        <Button onClickHandler={handleClick} value="Trousers" title="Trousers" />
        <Button onClickHandler={handleClick} value="Top" title="Top" />
        <Button onClickHandler={handleClick} value="Kurti’s" title="Kurti’s" />
        <Button onClickHandler={handleClick} value="Leggings" title="Leggings" />
        <Button onClickHandler={handleClick} value="Kids" title="Kids" />
      </div>
    </div>
  </>
    
  )
}

export default Navigation
