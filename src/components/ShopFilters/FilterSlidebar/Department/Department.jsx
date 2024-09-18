import React from 'react'
import './Department.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Chkinput from '../Input/Chkinput';


import { useCollapse } from 'react-collapsed';

const Department = ({ handleChange }) => {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();


  return (
    //   <div className="ml">
    //   <h2 className="sidebar-title price-title">Price</h2>

    //   <label className="sidebar-label-container">
    //     <input onChange={handleChange} type="radio" value="" name="test2" />
    //     <span className="checkmark"></span>All
    //   </label>

    //   <Chkinput
    //     handleChange={handleChange}
    //     value={50}
    //     title="$0 - 50"
    //     name="test2"
    //   />

    //   <Chkinput
    //     handleChange={handleChange}
    //     value={100}
    //     title="$50 - $100"
    //     name="test2"
    //   />

    //   <Chkinput
    //     handleChange={handleChange}
    //     value={150}
    //     title="$100 - $150"
    //     name="test2"
    //   />

    //   <Chkinput
    //     handleChange={handleChange}
    //     value={200}
    //     title="Over $150"
    //     name="test2"
    //   />


    // </div>

    <div>


      <div className="collapsible">
        <div className="sidebar-title color-title" {...getToggleProps()}>
          <h2 className="sidebar-title price-title">Price</h2><FontAwesomeIcon icon={faPlus} className={isExpanded ? 'Active' : 'Inactive'} />



        </div>
        <div {...getCollapseProps()}>
          <div className="filter-content">
            <label className="sidebar-label-container">
              <input onChange={handleChange} type="radio" value="" name="test2" />
              <span className="checkmark"></span>All
            </label>

            <Chkinput
              handleChange={handleChange}
              value={50}
              title="$0 - 50"
              name="test2"
            />

            <Chkinput
              handleChange={handleChange}
              value={100}
              title="$50 - $100"
              name="test2"
            />

            <Chkinput
              handleChange={handleChange}
              value={150}
              title="$100 - $150"
              name="test2"
            />

            <Chkinput
              handleChange={handleChange}
              value={200}
              title="Over $150"
              name="test2"
            />
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

export default Department
