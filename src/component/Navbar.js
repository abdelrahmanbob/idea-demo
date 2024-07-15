import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ideaLogo from '../assets/idea.png';
import SearchBox from './SearchBox';
import LanguageSelector from './LanguageSelector';
import NavbarSide from './NavbarSide';
import NavigationLinks from './NavigationLinks';
import NavUser from './NavUser';

function NavBar() {
  
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
          <LanguageSelector />
          <div className='navUser'>
            <NavUser />
          </div>
        </div>
        <NavbarSide />
      </div>
      <div className='Links'>
        <NavigationLinks />
      </div>
    </nav>
  );
}

export default NavBar;
