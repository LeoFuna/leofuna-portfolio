import React from 'react';
import "../Styles/Apresentation.css";
import myPhoto from '../images/eu.jpeg';

function Apresentation() {
  return (
    <div className="apresentation-container">
      <div className="apresentation-photo-container">
        <img className="apresentation-photo" src={myPhoto} alt="Foto Leonardo" />
      </div>
      <div className="apresentation-text-container">
        <h4>Oi! Eu sou o Funa!</h4>
        <p>Sou um estudante de desenvolvimento web na Trybe</p>
        <p>Agradeço à visita ao meu portfólio de projetos!</p>
      </div>
    </div>
  );
}

export default Apresentation;