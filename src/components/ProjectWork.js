import React from 'react';
import "./ProjectCardStyles.css";
import ProjectCard from './ProjectCard';
import ProjectCardData from './ProjectCardData';

const ProjectWork = () => {
  return (
    <div className='work-container'>
        {/* <h1 className='project-heading'>Interested in code? Checkout my <a href="https://github.com/MMdevworks">Github</a></h1> */}
        <h1 className='project-heading'>Selecting View will take you to the Unity Play site where the projects are hosted.</h1>
        <div className='project-container'>
          {ProjectCardData.map((value,index) => {
            return (
              <ProjectCard
              key={index}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
              />
            );
            })}
        </div>
    </div>
  )
}

export default ProjectWork