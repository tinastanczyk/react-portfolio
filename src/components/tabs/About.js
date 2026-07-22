//import React, { useState } from 'react';
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
            A passionate and driven full stack web developer, I’m eager to build more web development experience and hone my technical skills. In 2022, I earned a certificate in full stack web development from the University of Pennsylvania, where I developed proficiency in JavaScript, MySQL, React.js, and responsive web design. I’m committed to continuous learning, collaboration, and problem-solving, and I’m excited about the opportunity to create and maintain websites, iOS, and Android apps. My personable nature, coupled with my background in sales and customer service, makes me an easygoing and collaborative team player. I’m excited about the prospect of utilizing my skills to help a company grow and become a valuable asset.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;