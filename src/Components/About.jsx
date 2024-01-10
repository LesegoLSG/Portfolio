import React from 'react';
import { Fragment, useState,useRef,useEffect} from 'react';
import '../Stylesheet/section.css';
import {UseNav} from '../Components/NavigationLinks/UseNav';
import '../Stylesheet/About.css';
import JavaIcon from '../assets/Icons/Java.png';
import ReactIcon from '../assets/Icons/react.png';
import HtmlIcon from '../assets/Icons/HTML.png';
import CssIcon from '../assets/Icons/Css.png';
import Tailwind from '../assets/Icons/Tailwind.png';
import Typescript from '../assets/Icons/Typescript.png';
import SQL from '../assets/Icons/Sql.png';
import Git from '../assets/Icons/Git.png';
import ElementOnScreen from './Motion/ElementOnScreen';

//Typewriter
import { Typewriter } from 'react-simple-typewriter'

const About = () => {
  //Ref to about page/section
  const aboutRef = UseNav("About");

  //Toggle state to determine the active tab
  const [toggleTab, setToggleTab] = useState(1);

  //Method to set toggle state
  const toggleState = (index) =>{
    setToggleTab(index);
  }

  // const [isFlipped,setIsFlipped] = useState(false);

  // const flipContent = () =>{
  //   setIsFlipped(!isFlipped);
    
  // }

  //EmailRef triggers ../Motion/ElementOnScreen.jsx to observe & contact.css to animate
  const imageRef = useRef(null);
  const imageVisible = ElementOnScreen(
    {
      root:null,
      rootMargin:'0px',
      threshold:0.7,
    },imageRef);

     //introRef triggers../Motion/ElementOnScreen.jsx to observe & contact.css to animate
  const introRef = useRef(null);
  const introVisible = ElementOnScreen(
    {
      root:null,
      rootMargin:'0px',
      threshold:0.7,
    },introRef);

    const contentRef = useRef(null);
  const contentVisible = ElementOnScreen(
    {
      root:null,
      rootMargin:'0px',
      threshold:0.7,
    },contentRef);


    const [isTyping,setIsTyping] = useState(false);

    //Check if the introRef is visible, and trigger the typewriter animation
    useEffect(() =>{
      if(introVisible && !isTyping){
        setIsTyping(true);
        console.log("Is typing:", isTyping)
      }
    },[introVisible,isTyping]);

  return (
    <section ref={aboutRef} id="aboutSection">
       
        <Fragment>
    
          <h5>Learn more about me</h5>
          <h2>About</h2>
            
         <div className="about">
          {/* <section className="about"> */}
            <div className="row">
              <div className="column">
                <div className={`about-img ${!imageVisible? 'fade-in':'fade-out'}`} ref={imageRef}></div>
                <div className="animation-text">
                  <br></br>
                       <p ref={introRef}> Description:
                        {' '}
                        
                        {isTyping && (
                            <Typewriter
                              words={[
                                'responsive designs',
                                'web applications.',
                                'mobile applications',
                                ' and more.']}
                              loop={false}
                              cursor
                              cursorStyle="_"
                              typeSpeed={150}
                            />
                        )}
                      </p>
                </div>
              </div>
              {/* Each tab column to display correct content on the page */}
              <div className="column">
                <div className="tabs">
                  <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
                  onClick={() => toggleState(1)}
                  >
                    <h2>About</h2>
                  </div>
                  <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
                  onClick={() => toggleState(2)}
                  >
                    <h2>Skills</h2>
                  </div>
                  <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
                  onClick={() => toggleState(3)}
                  >
                    <h2>Experience</h2>
                  </div>
                </div>
                <div className="tab-content">
                  {/* About content */}
                 
                  <div className={toggleTab === 1 ? "content active-content": "content"}>
                  


                    <h2>About me</h2>
                    <p>I am punctual and motivated individual who is able to work under pressure 
                      and produce high standard of work. I'm an excellent team worker and able to take 
                      instructions from all levels and build up working relationships with all
                      colleagues, i'm also flexible, reliable and possess excellent time keeping skills. 
                    </p>
                       <h3>How it all began</h3>
                    <p>My tech journey began six years ago when i enrolled for Computer Science & Informatics
                      bachelor degree at University of Johannesburg with little knowledge in the tech industry. However, i got my inspiration
                      in the programme called 'man in the making' hosted by Miway Insurance Company during 2015.
                       </p>
                       
                  </div>
                  {/* Skills content */}

                  <div className={toggleTab === 2 ? "content active-content": "content"}>
                    <h2>Skills</h2>
                    <p>I am proficient in a diverse set of programming languages and technologies
                      , honed through years of hands-on experience. My expertise spans Java, React,
                       HTML, CSS, Tailwind, TypeScript, SQL, and Git/Github, each mastered to
                        varying degrees, empowering me to craft robust solutions and innovative 
                        applications.</p>
                 
                    <div className="skills-row">
                      <div className="skills-column">
                        <div className="progress-wrap">
                          {/* Display icon and h3 in flex */}
                          <div className="icons-text">
                          <img src={JavaIcon} alt='Java' className="icon"/>
                          <h3>Java</h3>
                          </div>
                          <div className="progress">
                            <div className="progress-bar Java">
                              <span>80%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skills-column">
                        <div className="progress-wrap">
                        <div className="icons-text">
                          <img src={ReactIcon} alt='React' className="icon"/>
                          <h3>React</h3>
                          </div>
                          <div className="progress">
                            <div className="progress-bar React">
                              <span>80%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skills-column">
                        <div className="progress-wrap">
                        <div className="icons-text">
                          <img src={HtmlIcon} alt='Html' className="icon"/>
                          <img src={CssIcon} alt='Css' className="icon"/>
                          <h3>HTML & CSS</h3>
                          </div>
                          <div className="progress">
                            <div className="progress-bar Html_and_CSS">
                              <span>90%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skills-column">
                        <div className="progress-wrap">
                        <div className="icons-text">
                          <img src={Tailwind} alt='Tailwind' className="icon"/>
                          <h3>TailWind</h3>
                          </div>
                          <div className="progress">
                            <div className="progress-bar Bootstrap">
                              <span>85%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skills-column">
                        <div className="progress-wrap">
                        <div className="icons-text">
                          <img src={Typescript} alt='Typescript' className="icon"/>
                          <h3>Typescript</h3>
                          </div>
                          <div className="progress">
                            <div className="progress-bar Net_developer">
                              <span>70%</span>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="skills-column">
                        <div className="progress-wrap">
                        <div className="icons-text">
                          <img src={SQL} alt='SQL' className="icon"/>
                          <h3>SQL & NoSQL</h3>
                          </div>
                          <div className="progress">
                            <div className="progress-bar Bootstrap">
                              <span>85%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skills-column">
                        <div className="progress-wrap">
                        <div className="icons-text">
                          <img src={Git} alt='Git' className="icon"/>
                          <h3>Git & Github</h3>
                          </div>
                          <div className="progress">
                            <div className="progress-bar Bootstrap">
                              <span>85%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* Experience content */}
                  <div className={toggleTab === 3 ? "content active-content": "content"}>

                    <div className="exp-column">
                      <h3>Web Developer</h3>
                      <span>2014-2022</span>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Delectus nam repellendus consectetur similique odit consequatur accusamus
                          libero molestiae pariatur quae?</p>
                    </div>

                    <div className="exp-column">
                      <h3>Java Developer</h3>
                      <span>2017-2022</span>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Delectus nam repellendus consectetur similique odit consequatur accusamus
                          libero molestiae pariatur quae?</p>
                    </div>

                    <div className="exp-column">
                      <h3>Graphic Designer</h3>
                      <span>2018-2022</span>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Delectus nam repellendus consectetur similique odit consequatur accusamus
                          libero molestiae pariatur quae?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </section> */}
          </div>
        </Fragment>

        <div class="custom-shape-divider-bottom-1704791646">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </section>
  )
}

export default About