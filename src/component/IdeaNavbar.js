import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ideaLogo from '../assets/idea.png';
import SearchBox from './SearchBox';
import SideBarNav from './SideBarNav';
import NavLinks from './NavLinks';
import NavLanguage from './NavLanguage';

library.add(fas);

function IdeaNavbar() {
  
  return (
    <nav>
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
          <NavLanguage />
          <div className='navUser'>
            <FontAwesomeIcon icon="user" />
          </div>
        </div>
        <SideBarNav />
      </div>
      <div className='Links'>
        <NavLinks />
      </div>
    </nav>
  );
}

export default IdeaNavbar;
