import React from 'react';
import Cards from '../layout/Cards';
import playspaceImg from '../images/playspace-screenshot.png';
import ecommerceImg from '../images/ecommerce-screenshot.png';
import jateImg from '../images/Jate-screenshot.png';
import socialImg from '../images/social-media-api-screenshot.png';
import noteImg from '../images/noteTaker-screenshot.png';
import teamImg from '../images/teamGen-screenshot.png';
import projects from '../assets/projectArray';

function Project() {
  return(
    <div className='container'>
      <div className='row'>
        <div className='col s10 offset-s1'>
          <Cards imgSrc={playspaceImg} title={projects[0].title} content={projects[0].content} repoLink={projects[0].repoLink} deployLink={projects[0].deployLink} />
        </div>
        <div className='col s6 center'>
          <Cards imgSrc={ecommerceImg} title={projects[1].title} content={projects[1].content} repoLink={projects[1].repoLink} deployLink={projects[1].deployLink} />
        </div>
        <div className='col s6 center'>
          <Cards imgSrc={jateImg} title={projects[2].title} content={projects[2].content} repoLink={projects[2].repoLink} deployLink={projects[2].deployLink} />
        </div>
        <div className='col s6 center'>
          <Cards imgSrc={socialImg} title={projects[3].title} content={projects[3].content} repoLink={projects[3].repoLink} deployLink={projects[3].deployLink} />
        </div>
        <div className='col s6 center'>
          <Cards imgSrc={noteImg} title={projects[4].title} content={projects[4].content} repoLink={projects[4].repoLink} deployLink={projects[4].deployLink} />
        </div>
        <div className='col s6 center'>
          <Cards imgSrc={teamImg} title={projects[5].title} content={projects[5].content} repoLink={projects[5].repoLink} deployLink={projects[5].repoLink} />
        </div>
        </div>
    </div>
  );
}

export default Project;