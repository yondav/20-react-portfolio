import React from 'react';
import Tech from '../Tech/Tech';

import './bio.css';

const Bio = () => {
  return (
    <div className='bio-card hide'>
      <div className='bio'>
        <h2 className='about'>About Me.</h2>
        <h4 className='about-tag'>Interactive Full Stack Developer</h4>
        <div className='underline'></div>
        <p>
          I'm Yoni David, a 31-year-old American Freelance Full Stack developer.
          I'm a funky guy who likes building things and exploring web
          technologies. I like to resolve design problems, and create useful
          interfaces for an optimized user experience.
        </p>
        <p>
          When not working or experimenting with the web, I like to practice
          Neil Young impressions and complain about the New York Mets.
        </p>
      </div>
      <div className='tech-icons'>
        <Tech fa='fab fa-react fa-3x' tech='react' tag='Code'></Tech>
        <Tech fa='fab fa-node-js fa-3x' tech='node' tag='Is'></Tech>
        <Tech fa='fab fa-js-square fa-3x' tech='javascript' tag='Cool'></Tech>
      </div>
    </div>
  );
};

export default Bio;
