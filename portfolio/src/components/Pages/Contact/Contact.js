import React from 'react';
import Tech from '../Home/Yoni/components/Tech/Tech';
import './contact.css';
import Form from './Form/Form';

const Contact = () => {
  return (
    <main>
      <div className='contact-grid'>
        <div className='page-title'>
          <h1>Let's Chat</h1>
          <div className='underline'></div>
        </div>
        <div className='chat-about'>
          <Tech
            fa='ri-lightbulb-flash-line ri-3x'
            tech='project'
            tag='about your next project'
          ></Tech>
          <Tech
            fa='ri-terminal-line ri-3x'
            tech='technology'
            tag='or even just about tech'
          ></Tech>
          <Tech
            fa='bbclub-nym bb-3x'
            tech='mets'
            tag='or maybe even about The Mets'
          ></Tech>
        </div>
        <Form />
      </div>
    </main>
  );
};

export default Contact;
