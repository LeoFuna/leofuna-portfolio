import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

function ContactIcons() {
  return (
    <div className=''>
      <div>
        <div>
          <FontAwesomeIcon icon={faGithubAlt} />
        </div>
        <h3>Github</h3>
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
        <h3>Linkedin</h3>
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <h3>Instagram</h3>
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <h3>Whatsapp</h3>
      </div>
    </div>
  );
}

export default ContactIcons;