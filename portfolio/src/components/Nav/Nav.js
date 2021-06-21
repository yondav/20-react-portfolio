import React from 'react';
import YDIcon from '../YDIcon/YDIcon';
import NavLink from './NavLink/NavLink';
import Icon from '../Icon/Icon';
import './nav.css';

const Nav = () => {
  const handleContrast = () => {
    const toggleBody = document.querySelector('body');
    toggleBody.classList.toggle('light');
  };

  return (
    <nav>
      <div className='nav-work'>
        <YDIcon />
        <NavLink link='dev'></NavLink>
        <NavLink link='portraits'></NavLink>
        <NavLink link='contact'></NavLink>
      </div>
      <Icon name='contrast' icon='fas fa-adjust' click={handleContrast}></Icon>
    </nav>
  );
};

export default Nav;
