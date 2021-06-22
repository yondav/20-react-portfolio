import React from 'react';
import Icon from '../../../Icon/Icon';

import './thumbnail.css';

const Thumbnail = ({ name, portrait, date, id }) => {
  return (
    <div className={`portrait-card thumb${id}`}>
      <div
        className={'portrait-thumbnail'}
        style={{ backgroundImage: `url(${portrait})` }}
      ></div>
      <div className='card-body'>
        <div className='portrait-title'>
          <h1>{name}</h1>
        </div>
        <div className='underline'></div>
        <div className='portrait-desc'>
          <p>{date}</p>
          <Icon name='illustrator' icon='illustrator'></Icon>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
