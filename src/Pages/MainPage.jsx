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
import Testimonial from '../Components/Testimonials/Testimonial';



const MainPage = () => {

  return (
    <div>
        <NavProvider>
        <Navbar />
        <Home />
        <About />
        <Contact />
        <Project/>
        <Testimonial/>
        <Footer />
      </NavProvider>

    </div>
  )
}

export default MainPage