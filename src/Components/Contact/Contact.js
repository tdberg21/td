import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='Contact-body'>
      <p className='contact-text'>Phone: (703) 772-5922 </p>
      <p className='contact-text'>Email: <a className="contact-text" href="mailto:rfdberg@gmail.com">rfdberg@gmail.com</a> </p>
      <p className='contact-text'><a href='https://alumni.turing.io/alumni/tory-dannenberg' target='_blank' className='contact-links' rel='noopener noreferrer'>Link to Portfolio</a></p>
      <p className='contact-text bottom'><a href='https://github.com/tdberg21' target='_blank' className='contact-links' rel='noopener noreferrer'>Link to Github</a></p>
      <iframe src="https://giphy.com/embed/xobxBtqQ4wZyg" width="480" height="268" frameBorder="0" className="giphy-embed" allowFullScreen title='contact gif'></iframe><p><a href="https://giphy.com/gifs/wiz-khalifa-xobxBtqQ4wZyg">via GIPHY</a></p>
    </div>
  )
}

export default Contact;