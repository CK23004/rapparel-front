import React, { useState } from 'react';
import './Navbar.css'

import { assets } from '../../assets/assets'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBars, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import DropdownList from './DropdownList';
import SearchForm from '../SearchForm/SearchForm';




const Navbar = () => {

    const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);

    // Toggle the search form visibility
    const toggleSearchForm = () => {
      setIsSearchFormVisible(!isSearchFormVisible);
    };
  
    return (
        <div className='navbar'>
           <img src={assets.logomain} alt="" className='logo' />

            <div className="navbar-menu">
            <img src={assets.location} alt="" className='location-icon' />
                <DropdownList />


            </div>

            <div className="navbar-right">
                <li  className='hide-icon'>
                    <FontAwesomeIcon icon={faHeart} className='icon'/>
                </li>
                <li  onClick={toggleSearchForm}>
                    <FontAwesomeIcon icon={faSearch} className='icon'/>
                </li>
                <li className='hide-icon'>
                    <FontAwesomeIcon icon={faCartShopping} className='icon'/>
                </li>

                <li className='hide-icon'>
                    <FontAwesomeIcon icon={faUser} className='icon'/>
                </li>

                <li>
                    <FontAwesomeIcon icon={faBars} className='icon' id='menu-bars'/>
                </li>
            </div>

            {isSearchFormVisible && <SearchForm toggleSearchForm={toggleSearchForm} />} 
        </div>
    )
}

export default Navbar
