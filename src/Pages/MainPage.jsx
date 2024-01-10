import React from 'react';
import '../Stylesheet/Style.css';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Contact from '../Components/Contact';
import About from '../Components/About';
import Footer from '../Components/Footer';
import NavProvider from '../Context/NavContexts';
import Project from '../Components/Projects/Project';
import ParticleComponent from '../Components/Particles/ParticleComponent';
import { UseNav } from '../Components/NavigationLinks/UseNav';

const MainPage = () => {

  return (
    <div>
        <NavProvider>
        <Navbar />
        {/* { <ParticleComponent/> } */}
        <Home />
        <About />
        <Contact />
        <Project/>
        <Footer />
      </NavProvider>

    </div>
  )
}

export default MainPage