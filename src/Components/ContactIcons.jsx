import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import '../Styles/ContactIcons.css';

function ContactIcons() {
  return (
    <div data-testid='icons-container' className='icons-container'>
      <div>
        <a href="https://github.com/LeoFuna" target="_blank" rel="noreferrer">
          <div>
            <FontAwesomeIcon icon={faGithubAlt} />
          </div>
          <h3>Github</h3>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/leonardofunabashi/" target="_blank" rel="noreferrer">
          <div>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          <h3>Linkedin</h3>
        </a>
      </div>
      <div>
        <a href="https://wa.me/55998295835" target="_blank" rel="noreferrer">
          <div>
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          <h3>Whatsapp</h3>
        </a>
      </div>
    </div>
  );
}

export default ContactIcons;