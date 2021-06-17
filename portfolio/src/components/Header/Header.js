import React from 'react';
import Nav from '../Nav/Nav';
import './header.css';

const Header = () => {
  return (
    <header id='home'>
      <Nav />
      <div className='logo'>
        <span className='yon'>.yon</span>
        <span className='dav'>dav</span>
      </div>
      <div className='about-btn btn'>
        About
        <i className='fas fa-chevron-right fa-xs bounce hide'></i>
      </div>
    </header>
  );
};

export default Header;
