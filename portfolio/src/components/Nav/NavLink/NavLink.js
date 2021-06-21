import React from 'react';
import { Link } from 'react-router-dom';

import './navlink.css';

const NavLink = ({ link, hide }) => {
  return (
    <Link to={link} className={`${link} scroll-link nav-link ${hide}`}>
      {link}
    </Link>
  );
};

export default NavLink;
