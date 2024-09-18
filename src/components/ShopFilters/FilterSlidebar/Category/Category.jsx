import React from 'react'
import './Category.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Chkinput from '../Input/Chkinput';


import { useCollapse } from 'react-collapsed';


const Category = ({ handleChange }) => {


  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    //   <div>
    //   <h2 className="sidebar-title">Category</h2>

    //   <div>
    //       <label className="sidebar-label-container">
    //         <input onChange={handleChange} type="radio" value="" name="test" />
    //         <span className="checkmark"></span>All
    //       </label>
    //       <Chkinput
    //         handleChange={handleChange}
    //         value="Formal Wear"
    //         title="Formal Wear"
    //         name="test"
    //       />
    //       <Chkinput
    //         handleChange={handleChange}
    //         value="Party Wear"
    //         title="Party Wear"
    //         name="test"
    //       />
    //       <Chkinput
    //         handleChange={handleChange}
    //         value="Casual Wear"
    //         title="Casual Wear"
    //         name="test"
    //       />
    //       <Chkinput
    //         handleChange={handleChange}
    //         value="Sports Wear"
    //         title="Sports Wear"
    //         name="test"
    //       />
    //     </div>
    // </div>

    <div>


      <div className="collapsible">
        <div className="sidebar-title color-title" {...getToggleProps()}>
          <h2 className="sidebar-title price-title">Category</h2><FontAwesomeIcon icon={faPlus} className={isExpanded ? 'Active' : 'Inactive'} />



        </div>
        <div {...getCollapseProps()}>
          <div className="filter-content">
            <label className="sidebar-label-container">
              <input onChange={handleChange} type="radio" value="" name="test2" />
              <span className="checkmark"></span>All
            </label>

            <Chkinput
              handleChange={handleChange}
              value="Formal Wear"
              title="Formal Wear"
              name="test"
            />
            <Chkinput
              handleChange={handleChange}
              value="Party Wear"
              title="Party Wear"
              name="test"
            />
            <Chkinput
              handleChange={handleChange}
              value="Casual Wear"
              title="Casual Wear"
              name="test"
            />
            <Chkinput
              handleChange={handleChange}
              value="Sports Wear"
              title="Sports Wear"
              name="test"
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

export default Category
