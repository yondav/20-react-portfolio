import React from 'react';

import './tech.css';

const Tech = ({ fa, tech, tag }) => {
  const showTag = () => {
    const tagLine = document.querySelector(`.tech-tag-${tech}`);
    tagLine.classList.add('fade-in-out-short');
  };

  const hideTag = () => {
    const tagLine = document.querySelector(`.tech-tag-${tech}`);
    setTimeout(() => {
      tagLine.classList.remove('fade-in-out-short');
    }, 2000);
  };

  return (
    <div className={`tech-icon tech-icon-${tech}`}>
      <i
        className={`${fa} ${tech}`}
        onMouseOver={showTag}
        onMouseLeave={hideTag}
      ></i>
      <span className={` tech-tag tech-tag-${tech}`}>{tag}</span>
    </div>
  );
};

export default Tech;
