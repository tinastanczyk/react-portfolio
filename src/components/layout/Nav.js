import React, { useState } from 'react';

import '../assets/css/Nav.css';

function Nav({ currentTab, handleTabChange }) {
  return (
    <nav>
      <div className='nav-wrapper'>
      <a href="#about" className="brand-logo" onClick={() => handleTabChange('About')} >Tina Stanczyk</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className = 'right hide-on-med-and-down'>
          <li><a href='#about' onClick={() => handleTabChange('About')} className={currentTab === 'About' ? 'nav-link active' : 'nav-link' } >About</a></li>
          <li><a href='#portfolio' onClick={() => handleTabChange('Portfolio')} className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link' } >Portfolio</a></li>
          <li><a href='#resume' onClick={() => handleTabChange('Resume')} className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link' } >Resume</a></li>
          <li><a href='#contact' onClick={() => handleTabChange('Contact')} className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link' } >Contact</a></li>
        </ul>
        <ul className='sidenav' id="mobile-demo">
          <li><a href='#about' onClick={() => handleTabChange('About')} className={currentTab === 'About' ? 'nav-link active' : 'nav-link' } >About</a></li>
          <li><a href='#portfolio' onClick={() => handleTabChange('Portfolio')} className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link' } >Portfolio</a></li>
          <li><a href='#resume' onClick={() => handleTabChange('Resume')} className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link' } >Resume</a></li>
          <li><a href='#contact' onClick={() => handleTabChange('Contact')} className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link' } >Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;