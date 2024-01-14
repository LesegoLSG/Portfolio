import React from 'react';
import { UseNav } from '../NavigationLinks/UseNav';

import '../../Stylesheet/Testimonial.css';

import testimonials from './TestimonialData';
import TestimonialCard from './TestimonialCard';



const Testimonial = () => {
    const testimonialRef = UseNav("Testimonials");
    console.log("testimonials: ", testimonials)

  return (
    <section ref={testimonialRef} id="testimonialsSection">
          {/* Header */}
          <h5>What others say about me</h5>
          <h1>Testimonials</h1>
      <div className="testimonial-box-container">
      {testimonials.map((myTestimonials,index) =>(
                            <TestimonialCard key={index} mySingleTestimonial={myTestimonials}/>
                           
                    ))}

          </div>
    </section>
  )
}

export default Testimonial