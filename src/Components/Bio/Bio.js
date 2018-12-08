import React from 'react';
import { bioData } from './bioData.js';
import './Bio.css';


const Bio = () => {
  return (
    <div className='Bio-component'>
      <section className='bio-container'>
        <p className='bio-text'>Summary: {bioData.summary}</p>
        <p className='bio-text'>Skills: {bioData.skills}</p>
        <p className='bio-text'>Bio: {bioData.background}</p>
      </section>
    </div>
  )
}

export default Bio;