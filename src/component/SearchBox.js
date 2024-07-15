import React, { useState } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearch = () => {
      console.log('Search term:', searchTerm);
      // Add your search logic here
    };
  
    return (
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="searchButton" onClick={handleSearch}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    );
}

export default SearchBox;