import React from 'react';
import ContactGreetings from '../Components/ContactGreetings';
import Header from '../Components/Header';

function Contact() {
  return (
    <>
      <Header />
      <div style={{ height: '10vh' }} />
      <ContactGreetings />
    </>
  );
}

export default Contact;