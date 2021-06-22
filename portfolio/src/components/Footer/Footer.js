import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer-text'>
        <a
          href='mailto:yoni@yondav.us'
          target='_blank'
          className='email nav-link'
          rel='noreferrer'
        >
          email
        </a>
        <span className='copy'>
          &#169; <span className='year'>{new Date().getFullYear()}</span> - Yoni
          David
        </span>
        <a
          href='./images/yoni_david_resume.pdf'
          download='yoni_david_resume'
          className='resume nav-link'
        >
          resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
