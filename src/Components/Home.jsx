import React,{useRef, useState, useEffect, useCallback} from 'react';
import '../Stylesheet/section.css';
import '../Stylesheet/Home.css';
import Graduation from'../assets/Graduation.jpg';
import {UseNav} from '../Components/NavigationLinks/UseNav';
import {UseOnScreen} from '../Components/NavigationLinks/UseOnScreen';
import Button from '../Components/Button';
// importing resume
import Resume from '../assets/Resume.pdf';

//Motion import
import ElementOnScreen from './Motion/ElementOnScreen';

//Typewriter
import { Typewriter } from 'react-simple-typewriter'

//React icons
import {HiMiniNewspaper} from 'react-icons/hi2';
import {RiDownload2Fill} from 'react-icons/ri';
import ParticleComponent from './Particles/ParticleComponent';

import {animate, motion, useAnimation} from 'framer-motion'



const Home = () => {
  const homeRef = UseNav("Home"); 


  //Navigating to contact page 
   const handlesubmit = () =>{
        const scrollToId = "contactSection";
        document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth"});
    }
  //Download resume
  const handleDownloadResume = () =>{
    const downloadLink = document.createElement('a');
    downloadLink.href = Resume;
    downloadLink.download='Lesego_Mhlongo_Resume.pdf';
    downloadLink.click();
  }


   //introRef triggers../Motion/ElementOnScreen.jsx to observe & contact.css to animate
  const introRef = useRef(null);
    const introVisible = ElementOnScreen(
      {
        root:null,
        rootMargin:'0px',
        threshold:0.7,
      },introRef);


      const [isTyping,setIsTyping] = useState(false);

      //Check if the introRef is visible, and trigger the typewriter animation
      useEffect(() =>{
        if(introVisible && !isTyping){
          setIsTyping(true);
          console.log("Is typing:", isTyping)
        }
      },[introVisible,isTyping]);
     


      const imageRef = useRef(null);
      const imageVisible = ElementOnScreen(
        {
          root:null,
          rootMargin:'0px',
          threshold:0.7,
        },imageRef);

        const imageControls= useAnimation();

        useEffect(() => {
    if (imageVisible) {
      imageControls.start({ x: 0 }); // Move image to its original position
    } else {
      imageControls.start({ x: '100vw' }); // Move image to the right side of the viewport
    }
  }, [imageVisible, imageControls]);

  return (
   
    <section ref={homeRef} id="homeSection">
      {/* <ParticleComponent/> */}
     
      <div className="home-container">
      
        {/* <img src={Graduation} alt /> */}
      
        <motion.div className="blob-image" ref={imageRef} 
        initial={{x:-300}}
        animate={{x:0,rotate:[0,90,-90,90,0]
        }}
        transition={{
          type:"spring",
          bounce:0.4,
          duration:3
        }}
        
        >
        <img src={Graduation} alt /> 
        </motion.div>
        
    
      <div className={`home-text ${!introVisible? 'fade-in':'fade-out'}`} ref={introRef}>
    
        <h1>Hi...</h1>
        <h1>I'm <span className="name-span">Lesego Mhlongo</span></h1>
        <h1>Fullstack Developer</h1>
        <p ref={introRef}> I'm a skilled full stack developer with experience in creating:
           {' '}
           <br/>
           <span className="home-animation">
           {isTyping && (
              <Typewriter
                words={[
                  'responsive designs',
                  'web applications.',
                  'mobile applications',
                  ' and more.']}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={150}
              />
           )}
           </span>
        </p>
        <button onClick={handlesubmit}><HiMiniNewspaper/> Hire Me</button>
        <button onClick={handleDownloadResume}><RiDownload2Fill/> Download resume</button>
      </div>

      </div>
      <div class="custom-shape-divider-bottom-1704776983">
      
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114
          ,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
           class="shape-fill">
           </path>
      </svg>
      
      </div>
   
       
    </section>
  
  )
  }

export default Home;