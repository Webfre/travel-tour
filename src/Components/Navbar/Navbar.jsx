import React, { useState, useEffect } from 'react';
import { MdTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import './navbar.scss';

function Navbar() {
  const [active, setActive] = useState(false);

  // Сlose the navigation menu when scrolling
  const controlNavScroll = () =>
    window.scrollY > 150 ? setActive(false) : null;

  // Сlose the navigation menu when click to the side
  const controlNavClick = e => {
    if (e.target.className === 'bg-hamburger-menu') {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', controlNavClick);
    window.addEventListener('scroll', controlNavScroll);

    return () => {
      window.removeEventListener('scroll', controlNavScroll);
      window.removeEventListener('click', controlNavClick);
    };
  }, []);

  return (
    <div className={active ? 'bg-hamburger-menu' : null}>
      <section className='navigation'>
        <header className='header flex'>
          <div className='header__logo'>
            <a href='#' className='logo flex'>
              <h2>
                <MdTravelExplore className='icon' />
                Travel<span className='light-color'>Tour</span>
              </h2>
            </a>
          </div>
          <div
            onClick={e => e.stopPropagation()}
            className={active ? 'navbar active' : 'navbar'}
          >
            <ul className='navbar__lists flex'>
              <li className='navbar__item'>
                <a href='#' className='navbar__link'>
                  Home
                </a>
              </li>
              <li className='navbar__item'>
                <a href='#' className='navbar__link'>
                  Packages
                </a>
              </li>
              <li className='navbar__item'>
                <a href='#' className='navbar__link'>
                  Shop
                </a>
              </li>
              <li className='navbar__item'>
                <a href='#' className='navbar__link'>
                  About
                </a>
              </li>
              <li className='navbar__item'>
                <a href='#' className='navbar__link'>
                  Pages
                </a>
              </li>
              <li className='navbar__item'>
                <a href='#' className='navbar__link'>
                  News
                </a>
              </li>
              <li className='navbar__item'>
                <a href='#' className='navbar__link'>
                  Contact
                </a>
              </li>
              <button className='btn'>
                <a href='#'>BOOK NOW</a>
              </button>
            </ul>

            <div
              onClick={() => setActive(false)}
              className={active ? 'navbar__close' : 'navbar__close'}
            >
              <AiFillCloseCircle className='icon' />
            </div>
          </div>

          <div onClick={() => setActive(!active)} className='toggle-navbar'>
            <TbGridDots className='icon' />
          </div>
        </header>
      </section>
    </div>
  );
}

export default Navbar;
