import React,{useRef} from 'react';
import ProjectCard from './ProjectCard';
import '../../Stylesheet/Project.css';
import Project from './Project';

//Motion
import ElementOnScreen from '../Motion/ElementOnScreen';


const ProjectList = ({projects}) => {
    console.log("From ProjectList",projects);

    //wrapperRef triggers../Motion/ElementOnScreen.jsx to observe & contact.css to animate
    const wrapperRef = useRef(null);
    const wrapperVisible = ElementOnScreen(
      {
        root:null,
        rootMargin:'0px',
        threshold:0.7,
      },wrapperRef);
  return (
    <div className="container">
        <div id="card-area">
        {/* Requires ref={wrapperRef} for animation to take place */}
            <div className={`wrapper ${!wrapperVisible?'fade-in':'fade-out'}`} >
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