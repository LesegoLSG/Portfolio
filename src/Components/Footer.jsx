import React from 'react';
import '../Stylesheet/Footer.css';
import {BiLogoFacebook} from 'react-icons/bi';
import {BiLogoWhatsapp} from 'react-icons/bi';
import {BiLogoTwitter} from 'react-icons/bi';
import {BiLogoLinkedin} from 'react-icons/bi'

const Footer = () => {
    const handlesubmit = () =>{
        const scrollToId = "homeSection";
        document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth"});
    }
  return (
   <footer>
        <h1 onClick={handlesubmit}>Lesego</h1>

        <ul>
           <li><button>Home</button></li>
           <li><button>Contact</button></li>
           <li><button>About</button></li>
           <li><button>Extra1</button></li>
           <li><button>Extra2</button></li>
        </ul>

        <div className="social__media">
            <a href="https://www.facebook.com/lesego.mhlongo.3"><BiLogoFacebook/></a>
            <a href="https://wa.me/0640373089"><BiLogoWhatsapp/></a>
            <a href="#"><BiLogoTwitter/></a>
            <a href="https://linkedin.com/in/lesego-mhlongo-081a82228"><BiLogoLinkedin/></a>
        </div>

        <div className="Footer__rights">
            <small>&copy; Lesego portfolio. All rights reserved.</small>
        </div>

   </footer>
  )
}

export default Footer