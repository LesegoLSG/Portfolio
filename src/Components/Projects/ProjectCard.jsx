import React,{useRef} from 'react';
import Graduation from '../../assets/Graduation.jpg';
import '../../Stylesheet/Project.css';

//Motion
import ElementOnScreen from '../Motion/ElementOnScreen';

//Icons
import { FaGithubSquare } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
//Framer motion
import {whileInView, motion, useAnimation} from 'framer-motion'

const ProjectCard = ({mySingleProject}) => {
    console.log("From ProjectCard:",mySingleProject);


    
  return (
    // <article className={`contact__option ${!emailVisible?'fade-in':'fade-out'}`} ref={emailRef}></article>
    <motion.div className="box"
    initial={{x:-200}}
    whileInView={{x:0}}
    transition={{
      type:"spring",
      bounce:0.4,
      duration:2
    }}
    >
        <img src={Graduation} alt={mySingleProject.title}/>
         <div className='overlayer'>
            <h3>{mySingleProject.title}</h3>
            {console.log("From ProjectCard:",mySingleProject)} 
                <p>{mySingleProject.description}</p>
                {/* <a href="#">Book Now</a> */}
                <div className="control-anchor">
                <a href="#"><FaGithubSquare /></a>
                <a href="#"><FaCode /></a>
                </div>
               
           </div>   
       </motion.div>
  )
}

export default ProjectCard