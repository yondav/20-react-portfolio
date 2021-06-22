import React, { useState } from 'react';
import Button from '../../../Button/Button';
import Modal from '../Modal/Modal';

import './form.css';

const Form = () => {
  const [mailerState, setMailerState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleStateChange = (e) => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    await fetch('http://localhost:3001/send', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        if (resData.status === 'success') {
          return <Modal result='success'></Modal>;
        } else if (resData.status === 'fail') {
          return <Modal result='fail'></Modal>;
        }
      })
      .then(() => {
        setMailerState({
          email: '',
          name: '',
          message: '',
        });
      });
  };

  return (
    <>
      <form onSubmit={submitEmail}>
        <div className='form-body'>
          <label htmlFor='name'>Name</label>
          <input
            onChange={handleStateChange}
            name='name'
            value={mailerState.name}
          />
          <label htmlFor='email'>Email</label>
          <input
            onChange={handleStateChange}
            name='email'
            value={mailerState.email}
          />
          <label htmlFor='message'>Message</label>
          <textarea
            onChange={handleStateChange}
            name='message'
            value={mailerState.message}
            rows='10'
          />
          <Button name='submit' text='Submit' type='submit'></Button>
        </div>
      </form>
    </>
  );
};

export default Form;
