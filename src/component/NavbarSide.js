import '../App.css';
import React, { useState } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBox from './SearchBox';
import LanguageSelector from './LanguageSelector';
import NavigationLinks from './NavigationLinks';
import NavUser from './NavUser';

library.add(fas);

function NavbarSide() {
    const [sideBarVisible, setSideBarVisible] = useState(false);

    const toggleSideBar = () => {
        setSideBarVisible(prevState => !prevState);
    }

    return (
        <>
            <button className="sideBartoggleButton" onClick={toggleSideBar}>
                <FontAwesomeIcon icon={sideBarVisible ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
            </button>
            <div className={`sideBarNav ${sideBarVisible ? 'visible' : ''}`}>
                <div className="sideBarSearch">
                    <SearchBox />
                </div>
                <div className='SideBarLinks' onClick={toggleSideBar}>
                    <NavigationLinks />
                </div>
                <div className='SideBarLangUser'>
                    <LanguageSelector />
                    <NavUser />
                </div>
            </div>
        </>
    );
}

export default NavbarSide;
