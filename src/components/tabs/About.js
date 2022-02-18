import React, { useState } from 'react';
import Headshot from '../assets/Headshot';
import '../assets/css/Headshot.css';

function About() {
  return(
  
    <div className='container'>
      <div>
        <Headshot />
      </div>
      <div className='section'>
        <div className='row'>
          <div className='col s12 center about-me'>
            <h2>About</h2>
            <p className='left-align light'>
            Hi, my name is Tina! I am a full-stack web developer and aspiring entrepreneur. Besides programming, I enjoy painting, reading, singing and snowboarding. My favorite place in the world is Jackson, Wyoming. I live in Cherry Hill, NJ and went to the University of Colorado Boulder for higher education. I am currently in a certificate program for full-stack development at University of Pennsylvania. I plan on working in the industry to gain experience while building my own business in my free.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;