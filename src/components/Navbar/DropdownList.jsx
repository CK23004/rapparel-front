import React, { useState } from 'react';
import './DropdownList.css'; // Importing the CSS file





function DropdownList() { 
  // Using useState to set the default value of the dropdown menu
  const [selectedValue, setSelectedValue] = useState('Pune'); 

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="dropdown-container">
     <select id="city-select" value={selectedValue} onChange={handleChange} className="dropdown">
        <option className="options" value="Pune">Pune</option>
        <option className="options" value="Nashik">Nashik</option>
        <option className="options" value="Latur">Latur</option>
        <option className="options" value="Nanded">Nanded</option>
      </select>
      </div>
  );
}

export default DropdownList;
