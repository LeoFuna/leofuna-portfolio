import React from 'react';
import '../Styles/ProjectContainer.css'
import PropTypes from 'prop-types'

function ProjectContainer(props) {
  return (
    <div className="project-container">
      <a href="https://leofuna.github.io/trivia-project/" target="_blank" rel="noreferrer">
        <img src={ props.preview } alt={`Imagem ${ props.title }`} />
      </a>
      <h2>{ props.title }</h2>
      <p>{ props.description }</p>
    </div>
  );
}

ProjectContainer.propTypes = {
  preview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ProjectContainer;