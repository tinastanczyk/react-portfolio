import React, { useState } from 'react';
import Header from './Header';
import Headshot from './Headshot';
import Contact from './Contact';


function Portfolio({ logo }) {

  return (
    <div>
      <Header />
      <Headshot />
      <Contact />
    </div>
  );
}

export default Portfolio;