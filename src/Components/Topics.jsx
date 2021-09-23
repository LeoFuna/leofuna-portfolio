import React from 'react';
import "../Styles/Topics.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faGuitar, faLaptopCode, faLightbulb, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faCss3, faGithubAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

function Topics() {
  return (
    <div className="topics-container">
      <div className="interest-container">
        <h1>Interest</h1>
        <ul className="topic-list">
          <li className="topic">
            <FontAwesomeIcon icon={faLaptopCode} />
            <p>Technology</p>
          </li>
          <li className="topic">
            <FontAwesomeIcon icon={ faLightbulb } />
            <p>Inovation</p>
          </li>
          <li className="topic">
            <FontAwesomeIcon icon={ faChartLine } />
            <p>Finance</p>
          </li>
          <li className="topic">
            <FontAwesomeIcon icon={ faGuitar } />
            <p>Music</p>
          </li>
          <li className="topic">
            <FontAwesomeIcon icon={ faSeedling } />
            <p>Minimalism</p>
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