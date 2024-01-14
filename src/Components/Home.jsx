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
//Framer Motion
import {whileInView, motion, useAnimation} from 'framer-motion'



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
      
        <motion.div className="blob-image"  
        initial={{opacity:0,scale:0,y:200}}
        whileInView={{opacity:1,scale:1,y:0}}
        transition={{
          type:"spring",
          bounce:0.4,
          duration:2
        }}
        
        >
        <img src={Graduation} alt /> 
        </motion.div>
        
    
      <div className="home-text">
        {/* Motion for hi text */}
        <motion.h1
          initial={{y:-100}}
          whileInView={{y:0}}
          transition={{
            duration:2
          }}
        >Hi...</motion.h1>


        {/* Motion for the name */}
        <motion.div 
           initial={{x:-100}}
           whileInView={{x:0}}
           transition={{
             duration:2
           }}
        >
        <h1>I'm <span className="name-span">Lesego Mhlongo</span></h1>
        </motion.div>


        {/* Motion for "Fullstack developer" */}
        <motion.h1
           initial={{x:50}}
           whileInView={{x:0}}
           transition={{
             duration:2
           }}
        >Fullstack Developer</motion.h1>
        {/* Motion for animation text */}
        <motion.p 
            initial={{rotateX:360}}
            whileInView={{rotateX:0}}
            transition={{
              duration:2
            }}
        ref={introRef}> I'm a skilled full stack developer with experience in creating:
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
        </motion.p>
        {/* Motion for buttons */}
        <motion.div
          initial={{y:100}}
          whileInView={{y:0}}
          transition={{
            duration:2
          }}
        >
        <button onClick={handlesubmit}><HiMiniNewspaper/> Hire Me</button>
        <button onClick={handleDownloadResume}><RiDownload2Fill/> Download resume</button>
        </motion.div>
      </div>

      </div>
   
       
    </section>
  
  )
  }

export default Home;