import React from 'react';
import projectsData from './projectsData';

function Projects() {
  return (
    <section id="projects">
      <h2 className="title">Projects</h2>
      <div id="projectContainer">
        {projectsData.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="projectButton" key={index}>
            <div className="project">
              <h3>{project.title}</h3>
              <div className="imgContainer">
                <img src={project.image} alt={project.title} className="projectImg" />
              </div>
              <p>{project.description}</p>
              <p className="skillsUsed">Skills: {project.skills}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
