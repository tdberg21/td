import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='Contact-body'>
      <p className='contact-text'>Phone: (703) 772-5922 </p>
      <p className='contact-text'>Email: rfdberg@gmail.com </p>
      <p className='contact-text'><a href='https://alumni.turing.io/alumni/tory-dannenberg' target='_blank' className='contact-links' rel='noopener noreferrer'>Link to Portfolio</a></p>
      <p className='contact-text'><a href='https://github.com/tdberg21' target='_blank' className='contact-links' rel='noopener noreferrer'>Link to Github</a></p>
    </div>
  )
}

export default Contact;