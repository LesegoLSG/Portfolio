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


const Home = () => {
  const homeRef = UseNav("Home"); 


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
      

      <div className="home-text">
    
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
        <button>Hire Me</button>
        <button>Download resume</button>
      </div>
      </div>
       
    </section>
  )
  }

export default Home;