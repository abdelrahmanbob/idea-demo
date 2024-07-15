import '../App.css';
import React, { useState } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBox from './SearchBox';
import NavLinks from './NavLinks';
import NavLanguage from './NavLanguage';
library.add(fas);


function SideBarNav() {
    const [sideBarVisible, setSideBarVisible] = useState(false);

    const toggleSideBar = () => {
        setSideBarVisible(prevState => !prevState);
    }

  return (
    <>
    <div className='sideBarNav' onClick={toggleSideBar}>
        {sideBarVisible ? (
            <FontAwesomeIcon icon="fa-solid fa-bars" />
        ) : (
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
        )}   
        <div className="sideBarSearch">
            <SearchBox />
        </div>
        <div className='SideBarLinks'>
            <NavLinks />
        </div>
        <div className='SideBarLangUser'>
            <NavLanguage />
        </div>
    </div>
    </>
  );
}

export default SideBarNav;