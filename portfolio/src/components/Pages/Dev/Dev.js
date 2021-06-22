import React from 'react';
import Apps from './components/Apps/Apps';
import { data } from './data';

import './dev.css';

const Dev = () => {
  return (
    <main>
      <div className='dev-grid'>
        <div className='page-title'>
          <h1>Dev</h1>
          <div className='underline'></div>
        </div>
        {data.map((app) => {
          const { id, appName, appTitle, github, deployed, desc, tech, gif } =
            app;
          return (
            <Apps
              key={id}
              appName={appName}
              appTitle={appTitle}
              github={github}
              deployed={deployed}
              desc={desc}
              tech={tech}
              gif={gif}
            ></Apps>
          );
        })}
      </div>
    </main>
  );
};

export default Dev;
