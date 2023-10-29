import React, {useRef} from 'react';
import '../Stylesheet/Contact.css';
import '../Stylesheet/section.css';
import {MdOutlineMailLock} from 'react-icons/md';
import {LiaFacebookMessenger} from 'react-icons/lia';
import {BiLogoWhatsapp} from 'react-icons/bi';
import {UseNav} from '../Components/NavigationLinks/UseNav';
import emailjs from 'emailjs-com';

//Motion import
import ElementOnScreen from './Motion/ElementOnScreen';

const Contact = () => {
  //Email api
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l7z7oae', 'template_0sptq58', form.current, 'NmnZLzCFUtjmGxisM')
    e.target.reset();
      
  };
    //Whole page smooth transition
    const contactRef = UseNav("Contact");

    // const handlesubmit = () =>{
    //     const scrollToId = "homeSection";
    //     document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth"});
    // }

    // const targetRef = useRef(null);
    // const isVisible = ElementOnScreen({
    //   root:null,
    //   rootMargin:'0px',
    //   threshold:0.3
    // },targetRef);


    //EmailRef triggers ../Motion/ElementOnScreen.jsx to observe & contact.css to animate
    const emailRef = useRef(null);
    const emailVisible = ElementOnScreen(
      {
        root:null,
        rootMargin:'0px',
        threshold:0.7,
      },emailRef);
      //whatsappRef triggers../Motion/ElementOnScreen.jsx to observe & contact.css to animate
      const whatsappRef = useRef(null);
      const whatsappVisible = ElementOnScreen(
        {
          root:null,
          rootMargin:'0px',
          threshold:0.7,
        },whatsappRef);
        //messenger triggers../Motion/ElementOnScreen.jsx to observe & contact.css to animate
        const messengerRef = useRef(null);
      const messengerVisible = ElementOnScreen(
        {
          root:null,
          rootMargin:'0px',
          threshold:0.7,
        },messengerRef);
   
       //Form triggers../Motion/ElementOnScreen.jsx to observe & contact.css to animate
        const FormAnimationRef = useRef(null);
        const FormAnimationVisible = ElementOnScreen(
          {
            root:null,
            rootMargin:'0px',
            threshold:0.3,
          },messengerRef);
     
   

  return (
    <section ref={contactRef} id="contactSection">
       <h5>Let's Get In Touch</h5>
       <p>{!emailVisible ? "not in viewport" : "in viewport"}</p>
       <h2>Contact Me</h2>

       <div className="container contact__container">
        {/* Contact option(left side) */}
        <div className="contact__options">
          {/* Email */}
          <article className={`contact__option ${!emailVisible?'fade-in':'fade-out'}`} ref={emailRef}>
            <MdOutlineMailLock className="contact__option_icon"/>
            <h4>Email</h4>
            <h5>lesegomhlongo78@gmail.com</h5>
            <a href="mailto:lesegomhlongo78@gmail.com" target="_blank">Send an email</a>
          </article>
            {/* WhatsApp */}
          <article className={`contact__option ${!whatsappVisible?'fade-in':'fade-out'}`} ref={whatsappRef} >
            <BiLogoWhatsapp className="contact__option_icon"/>
            <h4>WhatsApp</h4>
            <h5>+27 640373089</h5>
            <a href="https://api.whatsapp.com/send?phone=27640373089" target="_blank">Send WhatsApp Text</a>
          </article>

            {/* Messenger */}
          <article className={`contact__option ${!messengerVisible?'fade-in':'fade-out'}`} ref={messengerRef}>
            <LiaFacebookMessenger className="contact__option_icon"/>
            <h4>Messenger</h4>
            <h5>Lesego LSG Mhlongo</h5>
            <a href="https://m.me/lesego.mhlongo.3" target="_blank">Send an Inbox</a>
          </article>
        </div>
        {/* form on the right side */}
          <form ref={form} onSubmit={sendEmail}>
           <div className={`form-container ${!FormAnimationVisible?'fade-in':'fade-out'}`} ref={FormAnimationRef}>
                <input type="text" name="name" placeholder="Your Full Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea  name="message" placeholder="Your Message" rows="7" required />
                <button type="submit" className="btnStyle">Send Message</button>
                
                </div>
          </form>
       </div>

    </section>
  )
}

export default Contact