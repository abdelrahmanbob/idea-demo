import React from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFunctions } from '../useFunctions';

library.add(fas);

function LanguageSelector() {
  const {toggleDropdown, currentLanguage, dropdownVisible, selectLanguage } = useFunctions();

  return (
    <div className='navlang' onClick={toggleDropdown}> 
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
  );
}

export default LanguageSelector;