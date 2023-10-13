import React from 'react';
import projects from './ProjectData';
import '../../Stylesheet/Project.css';
import Graduation from'../../assets/Graduation.jpg';
import ProjectList from './ProjectList';
import {UseNav} from '../../Components/NavigationLinks/UseNav';

const Project = () => {
  //Projects reference
  const projectsRef = UseNav("Projects");

  return (
    <section ref={projectsRef} id="projectsSection">
      <h5>Check My Capabilities</h5>
      <h2>Projects</h2>
        <ProjectList projects={projects}/>
    </section>
  )
}

export default Project;