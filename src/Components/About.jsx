import React from 'react';
import '../Stylesheet/section.css';
import {UseNav} from '../Components/NavigationLinks/UseNav';

const About = () => {
  const aboutRef = UseNav("About");

  return (
    <section ref={aboutRef} id="aboutSection">
        <h2>About</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                ducimus itaque eius iure ullam iste consequuntur reprehenderit numquam consectetur 
                quos ab temporibus mollitia nemo tempora, soluta quibusdam, qui dolores omnis!
            </p>
    </section>
  )
}

export default About