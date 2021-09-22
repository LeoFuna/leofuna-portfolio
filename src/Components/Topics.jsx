import React from 'react';
import "../Styles/Topics.css";

function Topics() {
  return (
    <div className="topics-container">
      <div className="interest-container">
        <h1>Interest</h1>
        <ul className="topic-list">
          <li className="topic">
            <span>lo</span>
            <p>Technology</p>
          </li>
          <li className="topic"></li>
          <li className="topic"></li>
          <li className="topic"></li>
          <li className="topic"></li>
        </ul>
      </div>
      <div className="hard-skills-container">
        <h1>Hard Skills</h1>
        <ul className="topic-list">
          <li className="topic">
            <span>logo</span>
            <p>Technology</p>
          </li>
          <li className="topic"></li>
          <li className="topic"></li>
          <li className="topic"></li>
          <li className="topic"></li>
        </ul>
      </div>
    </div>
  );
}

export default Topics;