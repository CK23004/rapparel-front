import React from 'react'
import './StoreItem.css'

const StoreItem = ({ id, name, time, image }) => {
  return (

    <div className="store-item">
      <div className="store-item-img-container">
        <img src={image} alt="" className="store-item-image" />
      </div>
      <div className="store-item-info">

        <p className="store-item-name">{name}</p>
        <p className="store-item-time">{time}</p>
      </div>

    </div>

  )
}

export default StoreItem
