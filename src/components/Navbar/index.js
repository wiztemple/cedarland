/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/themeContext';
import Logo from '../../assets/images/logo.jpg';
import ThemeButton from '../ThemeButton';

const menuItems = {};

// eslint-disable-next-line react/prop-types
const Navbar = ({ menuList }) => {
  const { theme } = useContext(ThemeContext);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [activeItem, setActiveItem] = useState('Home');
  const handleScroll = () => {
    const curPos = window.scrollY;
    let curSection = null;
    for (const section in menuItems) {
      curSection = menuItems[section] <= curPos ? section : curSection;
      if (curSection !== section) {
        break;
      }
    }
    if (curSection !== activeItem) {
      setActiveItem(curSection);
    }
  };
  const getAnchorPoints = () => {
    const curScroll = window.scrollY - 100;
    // eslint-disable-next-line no-unused-vars
    const viewPortHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    );
    for (const key in menuItems) {
      menuItems[key] = document.getElementById(key).getBoundingClientRect().top + curScroll;
    }

    // eslint-disable-next-line no-unused-vars
    const bottom = document.body.offsetHeight;
    handleScroll();
  };

  useEffect(() => {
    const observer = new MutationObserver(getAnchorPoints);
    observer.observe(document.getElementById('root'), {
      childList: true,
      subtree: true,
    });
    window.addEventListener('scroll', handleScroll);
  }, [handleScroll, getAnchorPoints]);

  return (
    <>
      <nav
        aria-label="primary"
        className="w-full font-inter flex bg-white items-center justify-between flex-wrap px-5 dark:bg-gray-900 border border-white dark:border-gray-800 md:px-20 py-2 md:py-4 fixed shadow z-50"
      >

        <div className="flex items-center flex-shrink-0 text-white">
          <Link to="/">
            <img className="w-16 object-contain rounded" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="block lg:hidden sm:mr-6 mr-30 mt-28px">
          <button
            type="button"
            className="appearance-none focus:outline-none flex items-center px-3 py-2"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              className="fill-current text-teal-action-color h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              {navbarOpen && (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  fill={theme === 'light' ? 'black' : 'white'}
                />
              )}
              {!navbarOpen && (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill={theme === 'light' ? 'black' : 'white'} />
              )}
            </svg>
          </button>
        </div>
        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${navbarOpen ? ' block' : ' hidden'}`}>
          <div className="lg:flex-grow  md:flex items-center md:ml-16">
            {menuList}
          </div>
          <div className="md:flex items-center mt-4 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0">
            <div
              className="block hover:text-vividblue dark:text-white pb-3 md:pb-0 lg:inline-block font-medium"
              activeClassName="navly active"
            >
              <ThemeButton />
            </div>
          </div>
        </div>

      </nav>
    </>
  );
};
export default Navbar;
