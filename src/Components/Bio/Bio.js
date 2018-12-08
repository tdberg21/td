import React from 'react';
import { bioData } from './bioData.js';
import './Bio.css';


const Bio = () => {
  return (
    <div className='Bio-component'>
      <section className='bio-container'>
        <h6 className='sub-titles bio-text bio-title'>Summary</h6> 
        <p className='bio-text bio-paragraphs'>{bioData.summary}</p>
        <h6 className='sub-titles bio-text bio-title'>Skills</h6>
        <p className='bio-text bio-paragraphs'>{bioData.skills}</p>
        <h6 className='sub-titles bio-text bio-title'>Background</h6>
        <p className='bio-text bio-paragraphs'>{bioData.background}</p>
      </section>
    </div>
  )
}

export default Bio;