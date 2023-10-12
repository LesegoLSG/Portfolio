import React from 'react';
import ProjectCard from './ProjectCard';
import '../../Stylesheet/Project.css';
import Project from './Project';



const ProjectList = ({projects}) => {
    console.log("From ProjectList",projects);
  return (
    <div className="container">
        <div id="card-area">
            <div className="wrapper">
                <div className="box-area">
                    {projects.map((myProject,index) =>(
                            <ProjectCard key={index} mySingleProject={myProject}/>
                           
                    ))}
                    

                 </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectList