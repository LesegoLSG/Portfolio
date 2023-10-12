import React from 'react';
import '../Stylesheet/section.css';
import '../Stylesheet/Home.css';
import Graduation from'../assets/Graduation.jpg';
import {UseNav} from '../Components/NavigationLinks/UseNav';
import {UseOnScreen} from '../Components/NavigationLinks/UseOnScreen';
import Button from '../Components/Button';
// importing resume
import Resume from '../assets/Resume.pdf';


const Home = () => {
  const homeRef = UseNav("Home"); 


  return (
    <section ref={homeRef} id="homeSection">
     
      
        <div className="introContent">
          <span className="Hello">Hello,</span><br/>
          <span className="introText">I'm <span className="introName">Lesego Mhlongo</span><br/>Full Stack developer</span>
          <p className="introPara">I'm a skilled full stack developer with experience in creating responsive designs</p>
          {/* <Button  btnText="Hire Me"/> */}
          
          {/*Wrapped a resume button with an anchor to download resume*/}
          <a 
            href={Resume}
            download="Lesego_Mhlongo_Resume"
            target="_blank"
            rel="noreferrer"
          >
          <Button  btnText="Resume"/>
          </a>
          
         
      
        {/* <img src={Graduation} alt="Profile" className="imgContent"/> */}
        </div>
    </section>
  )
}

export default Home;