import React from 'react';
import '../Stylesheet/Footer.css';
import LogoMakr from '../assets/LogoMakr.png'
import {BiLogoFacebook} from 'react-icons/bi';
import {BiLogoWhatsapp} from 'react-icons/bi';
import {BiLogoTwitter} from 'react-icons/bi';
import {BiLogoLinkedin} from 'react-icons/bi'

const Footer = () => {
    

    //Navigating to the section
    const handlesubmit = (scrollToId) =>{
        const currentSection = document.getElementById(scrollToId);

        if(currentSection){
            currentSection.scrollIntoView({behavior:"smooth"});
        }
    }
    // Passing a section to the above function (handlesubmit)
    const handleImageClick = () =>{
        handlesubmit("homeSection");
    }
    
  return (
   <footer>

{/* onClick={handlesubmit("homeSection")} */}
        <img src={LogoMakr} alt='Lesego' onClick={handleImageClick}/>

        <ul>
           <li onClick={() =>handlesubmit("homeSection")}><button>Home</button></li>
           <li onClick={() =>handlesubmit("aboutSection")}><button>About</button></li>
           <li onClick={() =>handlesubmit("contactSection")}><button>Contact</button></li>
           <li onClick={() =>handlesubmit("projectsSection")}><button>Projects</button></li>
           <li onClick={() =>handlesubmit("homeSection")}><button>Extra2</button></li>
        </ul>

        <div className="social__media">
            <a className='facebook' href="https://www.facebook.com/lesego.mhlongo.3"><BiLogoFacebook/></a>
            <a className='whatsapp' href="https://wa.me/0640373089"><BiLogoWhatsapp/></a>
            <a className='twitter' href="#"><BiLogoTwitter/></a>
            <a className='linkedin' href="https://linkedin.com/in/lesego-mhlongo-081a82228"><BiLogoLinkedin/></a>
        </div>

        <div className="Footer__rights">
            <small>&copy; Lesego portfolio. All rights reserved.</small>
        </div>

   </footer>
  )
}

export default Footer