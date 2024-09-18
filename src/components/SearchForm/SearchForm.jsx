import React, { useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import './SearchForm.css'
import { assets } from '../../assets/assets';

const SearchForm = ({ toggleSearchForm }) => {
  const [searchValue, setSearchValue] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Search value submitted:', searchValue); 
    
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
  };

  return (
    <form onSubmit={handleSubmit} id="search-form" className={toggleSearchForm ? 'active' : ''}>
    <img src={assets.logomain} alt="" className='searchlogo' />
     <div>
      <input
        type="search"
        placeholder="Search Products..."
        name="search"
        id="search-box"
        value={searchValue}
        onChange={handleChange}
        aria-label="Search"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <FontAwesomeIcon icon={faSearch} id='search' />
      </button>
      {searchValue && (
        <button type="button" className="clear-button" onClick={handleClear}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
      <FontAwesomeIcon icon={faTimes} id="close" onClick={toggleSearchForm} /> {/* Close button */}
      </div>
    </form>
  );
};

export default SearchForm;
