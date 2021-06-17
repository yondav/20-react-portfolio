import React from 'react';
import NavLink from '../NavLink/NavLink';
import './nav.css';

import logo from '../../images/brand/circle-yd.svg';

const Nav = () => {
  return (
    <nav>
      <div className='nav-work'>
        <a href='#home' className='scroll-link top-link icon'>
          <img src={logo} alt='yondav' className='nav-logo' />
        </a>
        <NavLink link='dev'></NavLink>
        <NavLink link='design'></NavLink>
        <NavLink link='about' hide='hide'></NavLink>
      </div>
      <div className='contrast icon'>
        <i className='fas fa-sun fa-lg'></i>
      </div>
    </nav>
  );
};

export default Nav;
