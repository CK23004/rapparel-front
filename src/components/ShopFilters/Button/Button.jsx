import React from 'react'

const Button = ({ onClickHandler, value, title }) => {
  return (
    <div>
      <button onClick={onClickHandler} value={value} className="simple-heading">
      {title}
    </button>
    </div>
  )
}

export default Button
