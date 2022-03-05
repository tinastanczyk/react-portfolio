import React from 'react';
import resume from '../../assets/march-resume-2022.pdf'

function Resume() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='section center proficiencies'>
          <h3>Proficiencies</h3>
          <div className='col s4' id="first-col">
          <ul>
            <li>Front-End Development</li>
            <li>Terminal</li>
            <li>Git</li>
            <li>Git Bash</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Flexbox</li>
            <li>C++</li>
            <li>Python</li>
          </ul>
          </div>
          <div className='col s4' id="second-col">
          <ul>
            <li>JavaScript/JS</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
            <li>Node.js</li>
            <li>npm</li>
            <li>JSON</li>
            <li>ECMAScript6 / ES6</li>
            <li>APIs</li>
            <li>Unit Testing</li>
            <li>Express</li>
            <li>Express Handlebars</li>
          </ul>
          </div>
          <div className='col s4' id="third-col">
          <ul>
            <li>Materialize</li>
            <li>React</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>RESTful APIs</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>GraphQL</li>
            <li>Flexbox</li>
            <li>PWAs</li>
            <li>MERN</li>
          </ul>
          </div>
        </div>
      </div>
    <h4 className='center'><a href={resume} alt='link to resume' target='_blank' rel='noreferrer noopener'>Link to Resume</a>
    </h4>
    </div>
  );
}

export default Resume;