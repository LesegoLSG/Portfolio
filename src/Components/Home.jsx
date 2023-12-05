import React,{useRef, useState, useEffect} from 'react';
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
     


  return (
    <section ref={homeRef} id="homeSection">
      <div className="home-container">
      
        <img src={Graduation} alt />
      
    
      <div className={`home-text ${!introVisible? 'fade-in':'fade-out'}`} ref={introRef}>
    
        <h1>Hi...</h1>
        <h1>I'm <span className="name-span">Lesego Mhlongo</span></h1>
        <h1>Fullstack Developer</h1>
        <p ref={introRef}> I'm a skilled full stack developer with experience in creating:
           {' '}
           <br/>
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
        </p>
        <button onClick={handlesubmit}><HiMiniNewspaper/> Hire Me</button>
        <button onClick={handleDownloadResume}><RiDownload2Fill/> Download resume</button>
      </div>
      </div>
       
    </section>
  )
  }

export default Home;