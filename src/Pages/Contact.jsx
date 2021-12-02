import React from 'react';
import ContactGreetings from '../Components/ContactGreetings';
import ContactIcons from '../Components/ContactIcons';
import Header from '../Components/Header';

function Contact() {
  return (
    <>
      <Header />
      <div style={{ height: '10vh' }} />
      <ContactGreetings />
      <ContactIcons />
    </>
  );
}

export default Contact;