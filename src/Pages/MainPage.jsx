import React from 'react';
import '../Stylesheet/Style.css';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Contact from '../Components/Contact';
import About from '../Components/About';
import Footer from '../Components/Footer';
import NavProvider from '../Context/NavContexts';

const MainPage = () => {
  return (
    <div>
        <NavProvider>
        <Navbar />
        <Home />
        <Contact />
        <About />
        <Footer />
      </NavProvider>

    </div>
  )
}

export default MainPage