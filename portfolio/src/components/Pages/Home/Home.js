import React from 'react';
import Yoni from './Yoni/Yoni';

const Home = () => {
  const showBio = () => {
    const arrows = document.querySelectorAll('.chevron');
    const bio = document.querySelector('.bio-card');
    const overlay = document.querySelector('.hero-overlay');
    if (bio.classList.contains('hide')) {
      bio.classList.remove('hide');
      overlay.style.position = 'inherit';
      document.querySelector('.hero').style.height = 'fit-content';

      arrows.forEach((arrow) => {
        arrow.classList.remove('fa-chevron-down');
        arrow.classList.add('fa-chevron-up');
      });
    } else {
      bio.classList.add('hide');
      document.querySelector('.hero').style.height = '';

      arrows.forEach((arrow) => {
        arrow.classList.remove('fa-chevron-up');
        arrow.classList.add('fa-chevron-down');
      });
    }
  };

  return (
    <>
      <main id='home'>
        <Yoni showBio={showBio}></Yoni>
      </main>
    </>
  );
};

export default Home;
