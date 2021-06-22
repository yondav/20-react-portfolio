import React from 'react';
import yes from '../../../../images/brand/thumbs-up.svg';
import no from '../../../../images/brand/thumbs-down.svg';

import './modal.css';

const Modal = ({ result }) => {
  const emailLink = (
    <a href='mailto:yoni@yondav.us' className='nav-link'>
      yoni@yondav.us
    </a>
  );
  return (
    <article className='modal fade-in-out'>
      {result === 'success' && (
        <>
          <img src={yes} alt='success' />
          <div className='modal-message'>
            <h1>Hooray!</h1>
            <p>Thanks for reaching out! I'll be in touch in no time!</p>
          </div>
        </>
      )}
      {result === 'fail' && (
        <>
          <img src={no} alt='fail' />
          <div className='modal-message'>
            <h1>Oops!</h1>
            <div className='align'>
              <p>
                Something went wrong. Try again or drop me a line the old
                fashioned way!
              </p>
              {emailLink}
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default Modal;
