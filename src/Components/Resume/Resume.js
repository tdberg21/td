import React from 'react';
import resumeImage from '../../assets/TD-resume-for-site.jpg';
import './Resume.css';
// import { Document } from 'react-pdf';


const Resume = () => {
  return (
    <div className='Resume-component'>
      <img 
        src={resumeImage} 
        alt='resume'
        className='resume-image'></img>
    </div>
  )
}

export default Resume;