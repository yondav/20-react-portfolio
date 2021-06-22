import React from 'react';
import Icon from '../../../../Icon/Icon';
import './apps.css';

const Apps = ({ appName, appTitle, github, deployed, desc, tech, gif }) => {
  const handleMouseOver = () => {
    const thumb = document.querySelector(`.thumb${appName}`);
    thumb.style.transform = 'scale(1.3)';
    thumb.style.borderRadius = '1rem';
    thumb.style.backgroundImage = `url(${gif})`;
  };

  const handleMouseLeave = () => {
    const thumb = document.querySelector(`.thumb${appName}`);
    thumb.style.transform = '';
    thumb.style.borderRadius = '';
    thumb.style.backgroundImage = '';
  };

  return (
    <div
      className={`app-card ${appName}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`thumbnail thumb${appName}`}></div>
      <div className='card-body'>
        <div className='app-title'>
          <h1>{appTitle}</h1>
          <div className='app-links'>
            <a href={github} target='_blank' rel='noreferrer'>
              <Icon name='github' icon='github'></Icon>
            </a>
            <a href={deployed} target='_blank' rel='noreferrer'>
              <Icon name='web' icon='web'></Icon>
            </a>
          </div>
        </div>
        <div className='underline'></div>
        <div className='desc'>
          <p>{desc}</p>
        </div>
        <div className='lang'>
          {tech.map((t) => (
            <Icon key={t.id} name={t.name} icon={t.icon}></Icon>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
