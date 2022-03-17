import React from 'react';
import '../assets/css/Footer.css';

function Footer() {
  return(
    <div className='container'>
      <div className='row s12 center contact-links'>
        <a href="https://github.com/tinastanczyk" alt='link to github' target='_blank' rel="noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/christina-stanczyk-a9a266222/" alt='link to linkedIn' target='_blank' rel="noreferrer">LinkedIn</a>
        <p>Call: 856-254-3820</p>
        <p>Email: t9.stanczyk@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;