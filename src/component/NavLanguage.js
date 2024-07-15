import React, {useState} from 'react'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function NavLanguage() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('En');

  const toggleDropdown = () => {
    setDropdownVisible(prevState => !prevState);
  };

  const selectLanguage = (language) => {
    setCurrentLanguage(language);
    setDropdownVisible(false);
  };

  return (
    <>
        <div className='navlang' onClick={toggleDropdown} >
            
        <FontAwesomeIcon icon="globe" />
            {currentLanguage}
            {dropdownVisible ? (
              <FontAwesomeIcon icon="angle-up" />
            ) : (
              <FontAwesomeIcon icon="angle-down" />
            )}
            {dropdownVisible && (
              <div className='dropdownMenu' onClick={toggleDropdown}>
                <div className='dropdownItem' onClick={() => selectLanguage('En')}>English</div>
                <div className='dropdownItem' onClick={() => selectLanguage('Ar')}>Arabic</div>
              </div>
            )}
            </div>

    </>
);
}

export default NavLanguage