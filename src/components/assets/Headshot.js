import profPic from '../images/headshot.jpg';
import React, { useState } from 'react';

function Headshot(){
  return (
    <img src = {profPic} alt="headshot"></img>
  );
}

export default Headshot;