import React from 'react';
import './navlink.css';

const NavLink = ({ link, hide }) => {
  return (
    <a
      href={`#${link}`}
      className={`${link} scroll-link nav-link ${hide}`}
    >
      {link}
    </a>
  );
};

export default NavLink;
