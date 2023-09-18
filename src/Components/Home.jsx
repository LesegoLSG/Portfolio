import React from 'react';
import '../Stylesheet/section.css';
import '../Stylesheet/Home.css';
import Graduation from'../assets/Graduation.jpg';
import {UseNav} from '../Components/NavigationLinks/UseNav';
import {UseOnScreen} from '../Components/NavigationLinks/UseOnScreen';

const Home = () => {
  const homeRef = UseNav("Home"); 
  return (
    <section ref={homeRef} id="homeSection">
         <h2>Home</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                ducimus itaque eius iure ullam iste consequuntur reprehenderit numquam consectetur 
                quos ab temporibus mollitia nemo tempora, soluta quibusdam, qui dolores omnis!
            </p>
        {/* <div className="introContent">
          <span className="Hello">Hello,</span>
          <span className="introText">I'm <span className="introName">Lesego Mhlongo</span><br/>Full Stack developer</span>
          <p className="introPara">I'm a skillded full stack developer with experience in creating responsive designs</p>
          <button>Hire Me</button>        
        </div>
        <img src={Graduation} alt="Profile" className="imgContent"/> */}
    </section>
  )
}

export default Home;