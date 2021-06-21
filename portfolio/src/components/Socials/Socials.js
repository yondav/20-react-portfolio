import React from 'react';
import Icon from '../Icon/Icon';

import './socials.css';

const Socials = () => {
  return (
    <div className='footer-social-icons'>
      <a href='https://github.com/yondav' target='_blank' rel='noreferrer'>
        <Icon name='github' icon='github'></Icon>
      </a>
      <a
        href='https://www.instagram.com/yondav/'
        target='_blank'
        rel='noreferrer'
      >
        <Icon name='instagram' icon='instagram'></Icon>
      </a>
      <a
        href='https://www.linkedin.com/in/yoni-david-5965b6149/'
        target='_blank'
        rel='noreferrer'
      >
        <Icon name='linkedin' icon='linkedin'></Icon>
      </a>
    </div>
  );
};

export default Socials;
