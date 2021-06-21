import React from 'react';
import { Link } from 'react-router-dom';

import './ydicon.css';

const YDIcon = () => {
  return (
    <Link to='/' className='top-link'>
      <div className='circle'>
        <span className='y'>y</span>
        <div className='d'>d</div>
      </div>
    </Link>
  );
};

export default YDIcon;
