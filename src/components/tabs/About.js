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
            A passionate and driven full stack web developer,  aiming to build more web development experience while honing technical skills. Recently earned a certificate in full stack web development from the University of Pennsylvania and developed skills in JavaScript, MySQL, React.js and responsive web design. Eager to continue learning, collaborating and problem-solving, while creating and maintaining websites, iOS and Android apps. Very personable, leveraging a background in sales and customer service, so easily works well with others. Looking to utilize skills to help a company grow and become a valuable asset.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;