import React from 'react';
import { Fragment } from 'react';
import '../Stylesheet/section.css';
import {UseNav} from '../Components/NavigationLinks/UseNav';
import '../Stylesheet/About.css';

const About = () => {
  const aboutRef = UseNav("About");

  return (
    <section ref={aboutRef} id="aboutSection">
        <Fragment>
          <section className="about">
            <div className="row">
              <div className="column">
                <div className="about-img"></div>
              </div>
              <div className="column">
                <div className="tabs">
                  <div className="single-tab">
                    <h2>About</h2>
                  </div>
                  <div className="single-tab">
                    <h2>Skills</h2>
                  </div>
                  <div className="single-tab">
                    <h2>Experience</h2>
                  </div>
                </div>
                <div className="tab-content">
                  {/* About content */}
                  <div className="content">
                    <h2>My Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Minima ipsum illum distinctio culpa ad. Porro voluptate 
                       dicta ad ullam saepe, distinctio, impedit eos amet quidem 
                       incidunt ut. Fuga, ipsam eius?</p>
                       <h3>I am a web Designer and Developer Having 10 years of Experience</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ex omnis assumenda odio id quos, fuga ab fugit esse totam?</p>
                  </div>
                  {/* Skills content */}

                  <div className="content">
                    <h2>Skills</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Minima ipsum illum distinctio culpa ad. Porro voluptate 
                       dicta ad ullam saepe, distinctio, impedit eos amet quidem 
                       incidunt ut. Fuga, ipsam eius?</p>
                       <h3>I am a web Designer and Developer Having 10 years of Experience</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ex omnis assumenda odio id quos, fuga ab fugit esse totam?</p>
                 
                    <div className="skills-row">
                      <div className="skills-column">
                        <div className="progress-wrap">
                          <h3>Developer</h3>
                          <div className="progress">
                            <div className="progress-bar">
                              <span>80%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skills-column">
                        <div className="progress-wrap">
                          <h3>Developer</h3>
                          <div className="progress">
                            <div className="progress-bar">
                              <span>80%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skills-column">
                        <div className="progress-wrap">
                          <h3>Designer</h3>
                          <div className="progress">
                            <div className="progress-bar">
                              <span>90%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skills-column">
                        <div className="progress-wrap">
                          <h3>Java Developer</h3>
                          <div className="progress">
                            <div className="progress-bar">
                              <span>85%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skills-column">
                        <div className="progress-wrap">
                          <h3>.Net developer</h3>
                          <div className="progress">
                            <div className="progress-bar">
                              <span>50%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* Experience content */}
                  <div className="content">

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
          </section>

        </Fragment>


    </section>
  )
}

export default About