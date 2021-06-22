import React from 'react';

import './tech.css';

const Tech = ({ fa, tech, tag }) => {
  const showTag = () => {
    const tagLine = document.querySelector(`.tech-tag-${tech}`);
    if (tagLine.classList.contains('fade-out')) {
      tagLine.classList.remove('fade-out');
    }
    tagLine.classList.add('fade-in');
  };

  const hideTag = () => {
    const tagLine = document.querySelector(`.tech-tag-${tech}`);
    tagLine.classList.remove('fade-in');
    tagLine.classList.add('fade-out');
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
