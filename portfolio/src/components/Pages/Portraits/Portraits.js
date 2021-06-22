import React from 'react';
import Thumbnail from './Thumbnail/Thumbnail';
import { data } from './data';

import './portraits.css';

const Portraits = () => {
  return (
    <main>
      <div className='portraits-grid'>
        <div className='page-title'>
          <h1>Portraits</h1>
          <div className='underline'></div>
        </div>
        {data.map((guy) => {
          const { id, name, portrait, date } = guy;
          return (
            <Thumbnail
              key={id}
              name={name}
              portrait={portrait}
              date={date}
              id={id}
            ></Thumbnail>
          );
        })}
      </div>
    </main>
  );
};

export default Portraits;
