import React from 'react';
import resumeImage from '../../assets/TD-Resume2.jpg';
import './Resume.css';
// import { Document } from 'react-pdf';


const Resume = () => {
  return (
    <div className='Resume-componenet'>
      <img 
        src={resumeImage} 
        alt='resume'
        className='resume-image'></img>
    </div>
  )
}

export default Resume;