import React, {useRef} from 'react';
import '../Stylesheet/Contact.css';
import '../Stylesheet/section.css';
import {MdOutlineMailLock} from 'react-icons/md';
import {LiaFacebookMessenger} from 'react-icons/lia';
import {BiLogoWhatsapp} from 'react-icons/bi';
import {UseNav} from '../Components/NavigationLinks/UseNav';
import emailjs from 'emailjs-com';

const Contact = () => {
  //Email api
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l7z7oae', 'template_0sptq58', form.current, 'NmnZLzCFUtjmGxisM')
    //reset input fields
    e.target.reset();
      
  };

    const contactRef = UseNav("Contact");

    // const handlesubmit = () =>{
    //     const scrollToId = "homeSection";
    //     document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth"});
    // }
  return (
    <section ref={contactRef} id="contactSection">
       <h5>Let's Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className="container contact__container">
        {/* Contact option(left side) */}
        <div className="contact__options">
          {/* Email */}
          <article className="contact__option">
            <MdOutlineMailLock className="contact__option_icon"/>
            <h4>Email</h4>
            <h5>lesegomhlongo78@gmail.com</h5>
            <a href="mailto:lesegomhlongo78@gmail.com" target="_blank">Send an email</a>
          </article>
            {/* WhatsApp */}
          <article className="contact__option">
            <BiLogoWhatsapp className="contact__option_icon"/>
            <h4>WhatsApp</h4>
            <h5>+27 640373089</h5>
            <a href="https://api.whatsapp.com/send?phone=27640373089" target="_blank">Send WhatsApp Text</a>
          </article>

            {/* Messenger */}
          <article className="contact__option">
            <LiaFacebookMessenger className="contact__option_icon"/>
            <h4>Messenger</h4>
            <h5>Lesego LSG Mhlongo</h5>
            <a href="https://m.me/lesego.mhlongo.3" target="_blank">Send an Inbox</a>
          </article>
        </div>
        {/* form on the right side */}
          <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Full Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea  name="message" placeholder="Your Message" rows="7" required />
                <button type="submit">Send Message</button>
          </form>
       </div>

    </section>
  )
}

export default Contact