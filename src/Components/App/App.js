import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='links-container'>
            <NavLink to='/' className='nav'> Home </NavLink>
            <NavLink to='/about' className='nav'> About Me </NavLink>
            <NavLink to='/resume' className='nav'> Resume </NavLink>
            <NavLink to='/projects' className='nav'> Projects </NavLink>
            <NavLink to='/contact' className='nav'> Contact </NavLink>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
