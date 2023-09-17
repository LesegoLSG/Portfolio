import React from 'react';
import '../Stylesheet/section.css';

const Contact = () => {
    const handlesubmit = () =>{
        const scrollToId = "homeSection";
        document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth"});
    }
  return (
    <section id="contactSection">
        <h2>Contact</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                ducimus itaque eius iure ullam iste consequuntur reprehenderit numquam consectetur 
                quos ab temporibus mollitia nemo tempora, soluta quibusdam, qui dolores omnis!
            </p>
            <button onClick={() => handlesubmit()}>Go to home</button>
    </section>
  )
}

export default Contact