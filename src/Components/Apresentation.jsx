import React from 'react';
import "../Styles/Apresentation.css";
import myPhoto from '../images/eu.jpeg';

function Apresentation() {
  return (
    <div className="apresentation-container">
      <div className="apresentation-photo-container">
        <img className="apresentation-photo" src={myPhoto} alt="My personal photo" />
      </div>
      <div className="apresentation-text-container">
        <h4>{ "Hi! I'm Funa!" }</h4>
        <p>{ "I'm a web developer student at Trybe" }</p>
        <p>{ "Welcome to my project portfolio!" }</p>
      </div>
    </div>
  );
}

export default Apresentation;