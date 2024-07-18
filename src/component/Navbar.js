// File: NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import ideaLogo from '../assets/idea.png';
import SearchBox from './SearchBox';
import LanguageSelector from './LanguageSelector';
import NavigationLinks from './NavigationLinks';
import NavUser from './NavUser';
import NavbarSide from './NavbarSide';
import { useFunctions } from '../useFunctions'; // Adjust the path as necessary

function NavBar() {
  const { isFixed, isVisible, toggleSideBar, sideBarVisible } = useFunctions();

  return (
    <>
      <div className='space'></div>
      <nav className={`${isFixed ? 'fixed-nav' : ''} ${!isVisible ? 'hidden-nav' : ''}`}>
        <div className='logoSearchLangUserNav'>
          <div className='navLogo'>
            <Link to='/'>
              <img src={ideaLogo} alt='Loading...' />
            </Link>
            <Link to='/'>
              <span className='nameLogo'>IDEA</span>
            </Link>
          </div>
          <div className='navSearchLangUser'>
            <SearchBox />
            <LanguageSelector />
            <div className='navUser'>
              <NavUser />
            </div>
          </div>
        </div>
        <div className='Links'>
          <NavigationLinks />
        </div>
      </nav>
      <NavbarSide toggleSideBar={toggleSideBar} sideBarVisible={sideBarVisible} isFixed={isFixed} isVisible={isVisible} />
      <div className='space'></div>
    </>
  );
}

export default NavBar;
