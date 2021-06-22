import React from 'react';
import Apps from './components/Apps/Apps';
import { projects } from './projects';

import './dev.css';

const Dev = () => {
  return (
    <main>
      <div className='dev-grid'>
        <div className='page-title'>
          <h1>Dev</h1>
          <div className='underline'></div>
        </div>
        {projects.map((app) => {
          const { appName, appTitle, github, deployed, desc, tech, gif } = app;
          return (
            <Apps
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
