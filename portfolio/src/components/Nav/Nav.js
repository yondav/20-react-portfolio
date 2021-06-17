import React from 'react';
import YDIcon from '../YDIcon/YDIcon';
import NavLink from '../NavLink/NavLink';
import Icon from '../Icon/Icon';
import './nav.css';

const Nav = () => {
  const handleContrast = () => {
    console.log('fired');
    const toggleBody = document.querySelector('body');
    toggleBody.classList.toggle('light');
  };

  return (
    <nav>
      <div className='nav-work'>
        <YDIcon />
        <NavLink link='dev'></NavLink>
        <NavLink link='design'></NavLink>
        <NavLink link='about' hide='hide'></NavLink>
      </div>
      <Icon
        name='contrast'
        icon='fas fa-adjust fa-lg'
        click={handleContrast}
      ></Icon>
    </nav>
  );
};

export default Nav;
