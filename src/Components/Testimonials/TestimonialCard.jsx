import React from 'react';
import Graduation from '../../assets/Graduation_hat.jpg';
import '../../Stylesheet/Testimonial.css';
import {whileInView, motion, useAnimation} from 'framer-motion'

const TestimonialCard = ({mySingleTestimonial}) => {
  return (
    <motion.div className="testimonial-box"
    initial={{y:100}}
    whileInView={{y:0}}
    transition={{
      duration:1.5,
    }}
    
    >
  
    {/* top */}
    <div className="box-top">

      <div className="profile">
        <div className="profile-img">
          <img src={Graduation}/>
        </div>
        {/* Name and username */}
        <div className="name-user">
          <strong>{mySingleTestimonial.name}</strong>
          <span>@lesegomhlongo</span>
        </div>
      </div>

      <div className="reviews">
        <p>My star section</p>
      </div>
    </div>

    {/* Comments */}
    <div className="client-comment">
      <p>{mySingleTestimonial.comment}</p>
    </div>

  </motion.div>
  )
}

export default TestimonialCard