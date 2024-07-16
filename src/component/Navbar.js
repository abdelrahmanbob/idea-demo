import '../App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ideaLogo from '../assets/idea.png';
import SearchBox from './SearchBox';
import LanguageSelector from './LanguageSelector';
import NavbarSide from './NavbarSide';
import NavigationLinks from './NavigationLinks';
import NavUser from './NavUser';

function NavBar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setIsFixed(true);
      } else {
        setIsFixed(false);
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
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
        <NavbarSide />
      </div>
      <div className='Links'>
        <NavigationLinks />
      </div>
      <div className='space'></div>
    </nav>
  );
}

export default NavBar;
