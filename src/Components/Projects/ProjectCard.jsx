import React,{useRef} from 'react';
import Graduation from '../../assets/Graduation.jpg';
import '../../Stylesheet/Project.css';

//Motion
import ElementOnScreen from '../Motion/ElementOnScreen';

const ProjectCard = ({mySingleProject}) => {
    console.log("From ProjectCard:",mySingleProject);

    //wrapperRef triggers../Motion/ElementOnScreen.jsx to observe & contact.css to animate
    const boxRef = useRef(null);
    const boxVisible = ElementOnScreen(
      {
        root:null,
        rootMargin:'0px',
        threshold:0.7,
      },boxRef);
    
  return (
    // <article className={`contact__option ${!emailVisible?'fade-in':'fade-out'}`} ref={emailRef}></article>
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