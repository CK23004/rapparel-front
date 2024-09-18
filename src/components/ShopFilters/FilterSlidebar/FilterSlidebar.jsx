import React, { useState } from 'react'
import './FilterSlidebar.css'
import Department from './Department/Department'
import Category from './Category/Category'
import Colour from './Colour/Colour'

const FilterSlidebar = ({handleChange}) => {

    
    return (
        <div>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>Filters</h1>
                </div>
                <Category handleChange={handleChange} />
                <Department handleChange={handleChange} />
                <Colour handleChange={handleChange} />
            </section>


        </div>


    )
}

export default FilterSlidebar
