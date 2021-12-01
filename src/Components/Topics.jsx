import React from 'react';
import "../Styles/Topics.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faGuitar, faLaptopCode, faLightbulb, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faCss3, faGithubAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

function Topics() {
  return (
    <div data-testid="topics-container" className="topics-container">
      <div className="interest-container">
        <h1>Interesses</h1>
        <ul className="topic-list">
          <li className="topic">
            <FontAwesomeIcon icon={faLaptopCode} />
            <p>Tecnologia</p>
          </li>
          <li className="topic">
            <FontAwesomeIcon icon={ faLightbulb } />
            <p>Inovação</p>
          </li>
          <li className="topic">
            <FontAwesomeIcon icon={ faChartLine } />
            <p>Finanças</p>
          </li>
          <li className="topic">
            <FontAwesomeIcon icon={ faGuitar } />
            <p>Musica</p>
          </li>
          <li className="topic">
            <FontAwesomeIcon icon={ faSeedling } />
            <p>Minimalismo</p>
          </li>
        </ul>
      </div>
      <div className="hard-skills-container">
        <h1>Hard Skills</h1>
        <ul className="topic-list">
          <li className="topic">
            <FontAwesomeIcon icon={ faGithubAlt } />
            <p>Github</p>
          </li>
          <li className="topic">
            <FontAwesomeIcon icon={ faHtml5 } />
            <p>Html</p>
          </li>
          <li className="topic">
            <FontAwesomeIcon icon={ faCss3 } />
            <p>Css</p>
          </li>
          <li className="topic">
            <FontAwesomeIcon icon={ faJsSquare } />
            <p>Javascript</p>
          </li>
          <li className="topic">
            <FontAwesomeIcon icon={ faReact } />
            <p>React</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topics;