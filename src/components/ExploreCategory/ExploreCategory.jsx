import React, { useRef } from 'react';
import './ExploreCategory.css';
import { category_list, brand_list } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ExploreCategory = ({ category, setCategory }) => {
  const navigate = useNavigate();

  // Create references for the category and brand list containers
  const categoryListRef = useRef(null);
  const brandListRef = useRef(null);

  const storebasedonCategory = (category_name) => {
    navigate(`/ProductStores/${category_name}`);
  };

  // Function to handle horizontal scrolling
  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 300; // Amount of pixels to scroll
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='explore-category' id='explore-category'>
      <h1>Choose what you want to wear</h1>

      {/* Container for category list with scroll buttons */}
      <div className="explore-category-navigation">
        <button
          className="scroll-button left"
          onClick={() => scroll(categoryListRef, 'left')}
          aria-label="Scroll Left"
        >
          &#10094;
        </button>

        <div className="explore-category-list" ref={categoryListRef}>
          {category_list.map((item, index) => (
            <div
              onClick={() => {
                setCategory(prev => prev === item.category_name ? "All" : item.category_name);
                storebasedonCategory(item.category_name);
              }}
              key={index}
              className="explore-category-list-item"
            >
              <img className={category === item.category_name ? "active" : ""} src={item.category_image} alt={item.category_name} />
              <p>{item.category_name}</p>
            </div>
          ))}
        </div>

        <button
          className="scroll-button right"
          onClick={() => scroll(categoryListRef, 'right')}
          aria-label="Scroll Right"
        >
          &#10095;
        </button>
      </div>

      <hr />

      <h1>Brands</h1>

      {/* Container for brand list with scroll buttons */}
      <div className="explore-category-navigation">
        <button
          className="scroll-button left"
          onClick={() => scroll(brandListRef, 'left')}
          aria-label="Scroll Left"
        >
           &#10094;
        </button>

        <div className="explore-category-list" ref={brandListRef}>
          {brand_list.map((item, index) => (
            <div
              onClick={() => setCategory(prev => prev === item.brand_name ? "All" : item.brand_name)}
              key={index}
              className="explore-category-list-item"
            >
              <img className={category === item.brand_name ? "active" : ""} src={item.brand_image} alt={item.brand_name} />
              {/* <p>{item.brand_name}</p> */}
            </div>
          ))}
        </div>

        <button
          className="scroll-button right"
          onClick={() => scroll(brandListRef, 'right')}
          aria-label="Scroll Right"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ExploreCategory;
