import React from 'react';
import Nav from '../Nav/Nav';
import Button from '../Button/Button';
import './header.css';
import colors from './colors.js';

const Header = () => {
  let ready = true;
  const logoColors = () => {
    if (ready === true) {
      for (let i = 0; i < 6; i++) {
        let xHex = colors[Math.floor(Math.random() * colors.length)];
        let yHex = colors[Math.floor(Math.random() * colors.length)];
        document.querySelector('.yon').style.color = xHex;
        document.querySelector('.dav').style.color = yHex;
        document.querySelector('.y').style.color = xHex;
        document.querySelector('.d').style.color = yHex;
      }

      ready = false;
      setTimeout(() => {
        ready = true;
      }, 800);
    }
  };

  const handleMouseMove = (e) => {
    let mouseX = e.clientX;
    let centerX = e.currentTarget.offsetWidth / 2;
    let currentXoffset = Math.abs(centerX - mouseX);

    document.querySelector('.logo').style.letterSpacing = `${
      currentXoffset * 0.007
    }rem`;
    logoColors();
  };

  const handleMouseLeave = (e) => {
    document.querySelector('.logo').style = '';
    document.querySelector('.yon').style = '';
    document.querySelector('.dav').style = '';
    document.querySelector('.y').style = '';
    document.querySelector('.d').style = '';
  };

  return (
    <header
      id='home'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Nav />
      <div className='logo'>
        <span className='yon'>.yon</span>
        <span className='dav'>dav</span>
      </div>
      <Button name='about-btn' text='About'></Button>
    </header>
  );
};

export default Header;
