import React, { useState } from 'react';
import Header from '../layout/Header';

function Portfolio({ logo }) {

  return (
    <div>
      <Header />
      <img src={ logo }></img>
    </div>
  );
}

export default Portfolio;