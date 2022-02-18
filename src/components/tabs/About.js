import React, { useState } from 'react';
import Headshot from '../assets/Headshot';

function About() {
  return(
  
    <div className='container'>
      <div>
        <Headshot />
      </div>
      <div className='section'>
        <div className='row'>
          <div className='col s12 center'>
            <h2>About</h2>
            <p className='left-align light'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;