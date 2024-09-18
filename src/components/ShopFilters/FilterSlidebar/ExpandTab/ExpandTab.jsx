import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus } from '@fortawesome/free-solid-svg-icons';
import Chkinput from '../Input/Chkinput';


import { useCollapse } from 'react-collapsed'; 

const ExpandTab = ({ handleChange }) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(); 

    return (
      <div>
  
  
        <div className="collapsible">
          <div className="sidebar-title color-title" {...getToggleProps()}>
            <h2 className="sidebar-title price-title">Colour</h2><FontAwesomeIcon icon={faPlus} className={isExpanded ? 'Active' : 'Inactive'}/>
          
            
  
          </div>
          <div {...getCollapseProps()}>
            <div className="content">
            <Chkinput handleChange={handleChange} value="black" title="Black" name="test1" color="black" />
        <Chkinput handleChange={handleChange} value="blue" title="Blue" name="test1" color="blue" />
        <Chkinput handleChange={handleChange} value="red" title="Red" name="test1" color="red" />
        <Chkinput handleChange={handleChange} value="green" title="Green" name="test1" color="green" />
  
            </div>
          </div>
        </div>
  
        {/* <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span> 
          All
        </label> */}
  
        {/* Radio button inputs for colors */}
       
        {/* <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="white" name="test1" />
       <span className="checkmark" style={{ background: "white", border: "2px solid black" }}></span>
        White 
        </label> */}
      </div>
    )
}

export default ExpandTab
