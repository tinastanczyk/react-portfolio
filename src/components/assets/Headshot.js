import profPic from '../images/headshot.jpg';
import React from 'react';
import './css/Headshot.css';

function Headshot(){
  return (
    <div className='container'>
      <div className='row center'>
    <img src = {profPic} alt="headshot"></img>
    </div>
    </div>
  );
}

export default Headshot;