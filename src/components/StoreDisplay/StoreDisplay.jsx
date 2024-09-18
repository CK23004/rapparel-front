import React, { useContext, useState } from 'react';
import './StoreDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import StoreItem from '../StoreItem/StoreItem';

const StoreDisplay = ({ category }) => {
  const { store_list } = useContext(StoreContext);

  
  const [visibleStoresCount, setVisibleStoresCount] = useState(5);

  
  const handleViewMore = () => {
    setVisibleStoresCount((prevCount) => prevCount + 5); 
  };

  return (
    <div>
      <div className="store-display" id="store-display">
        {/* <h2>Stores Near You</h2> */}
        <div className="store-display-list">
          {store_list.slice(0, visibleStoresCount).map((item, index) => (
            <StoreItem
              key={index}
              id={item.store_id}
              name={item.store_name}
              time={item.time}
              image={item.store_image}
            />
          ))}
        </div>
        {visibleStoresCount < store_list.length && (
          <button className="view-more-btn" onClick={handleViewMore}>
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default StoreDisplay;
