import React from 'react';
import Graduation from '../../assets/Graduation.jpg';
import '../../Stylesheet/Project.css';


const ProjectCard = ({mySingleProject}) => {
    console.log("From ProjectCard:",mySingleProject); 
  return (
    <div className="box">
        <img src={Graduation} alt={mySingleProject.title}/>
         <div className='overlayer'>
            <h3>{mySingleProject.title}</h3>
            {console.log("From ProjectCard:",mySingleProject)} 
                <p>{mySingleProject.description}</p>
                {/* <a href="#">Book Now</a> */}
           </div>   
       </div>
  )
}

export default ProjectCard