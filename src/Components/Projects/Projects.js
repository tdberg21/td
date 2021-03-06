import React from 'react';
import { projectData } from './ProjectData.js';
import './Projects.css';


const Projects = () => {
  const projectsToDisplay = projectData.map((project, index) => {
    return (
      <div className='project-card' key={index}>
        <h4 className='project-title project-text'>{project.name}</h4>
        <img src={project.image} alt='project screenshot' className='project-pic'></img>
        <p className='project-text'><span className='sub-titles'>Description</span>: {project.description}</p>
        <p className='project-text'><span className='sub-titles'>Tech Stack</span>: {project.stack}</p>
        <p className='project-text'><span className='sub-titles'>Link</span>: 
          <a 
            href={project.link} 
            className='project-link'
            target="_blank"
            rel="noopener noreferrer">
            {project.link}</a>
        </p>
        <p className='project-text note'>{project.note}</p>
      </div>
    )
  })
  
  return (
    <div className='Project-component'>
      <div className='project-cards-container'>
        {projectsToDisplay}
      </div>
    </div>
  )
}

export default Projects;