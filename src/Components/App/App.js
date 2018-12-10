import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Bio from '../Bio/Bio.js';
import Home from '../Home/Home.js';
import Projects from '../Projects/Projects.js';
import Resume from '../Resume/Resume.js';
import Contact from '../Contact/Contact.js';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import turing from '../../assets/turing.png';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h2 className='App-logo'>t.d.</h2>
          <div className='links-container'>
            <NavLink to='/' className='nav'>Home</NavLink>
            <NavLink to='/projects' className='nav'>Projects</NavLink>
            <NavLink to='/resume' className='nav'>Resume</NavLink>
            <NavLink to='/about' className='nav'>About Me</NavLink>
            <NavLink to='/contact' className='nav'>Contact</NavLink>
          </div>
        </header>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
        <Route path='/about' component={Bio} />
        <Route path='/contact' component={Contact} />
        <footer className='App-footer'>
          <a href='https://github.com/tdberg21' target='_blank' className='footer-links' rel='noopener noreferrer'><img src={github} alt='github-logo' className='logos'></img></a>
          <a href='https://www.linkedin.com/in/tory-dannenberg-a46b6337/' target='_blank' className='footer-links' rel='noopener noreferrer'><img src={linkedin} alt='linkedin-logo' className='logos'></img></a>
          <a href='https://alumni.turing.io/alumni/tory-dannenberg' target='_blank' className='footer-links' rel='noopener noreferrer'><img src={turing} alt='portfolio-logo' className='turing'></img></a>
        </footer>
      </div>
    );
  }
}

export default App;
